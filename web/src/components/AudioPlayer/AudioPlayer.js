import { useState, useRef, useEffect } from 'react'
import { IoMdPlay, IoMdPause, IoMdSettings } from 'react-icons/io'
import './AudioPlayer.css'
const AudioPlayer = ({ onPlayFn, onPause, audioRef, audioURL }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const progressBar = useRef() // reference our progress bar
  const animationRef = useRef() // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioRef.current.duration)
    setDuration(seconds)
    progressBar.current.max = seconds
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnedMinutes}:${returnedSeconds}`
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    )
    setCurrentTime(progressBar.current.value)
  }

  const changeRange = () => {
    audioRef.current.currentTime = progressBar.current.value
    changePlayerCurrentTime()
  }

  const whilePlaying = () => {
    progressBar.current.value = audioRef.current.currentTime
    changePlayerCurrentTime()
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const togglePlayPause = () => {
    let prevValue = isPlaying
    setIsPlaying(!prevValue)
    if (!prevValue) {
      audioRef.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
    if (prevValue) {
      audioRef.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
  }

  return (
    <div className="audioPlayer">
      <audio
        src={audioURL}
        // src="/sounds/soudDemo.webm"
        ref={audioRef}
        onPlay={onPlayFn}
        onPause={onPause}
        onEnded={() => {
          setIsPlaying(false)
        }}
        onSeeking={() => {
          audioRef.current.pause()
          setIsPlaying(false)
          cancelAnimationFrame(animationRef.current)
        }}
      >
        <track
          src=""
          kind="captions"
          srcLang="en"
          label="english_captions"
        ></track>
      </audio>
      <button className="btn-play-pause" onClick={togglePlayPause}>
        {!isPlaying ? <IoMdPlay /> : <IoMdPause />}
      </button>
      <input
        type="range"
        className="progressBar"
        defaultValue="0"
        step="0.05"
        ref={progressBar}
        onChange={changeRange}
      />
      <div className="timeLeft">
        {!isNaN(duration) && !isFinite(duration)
          ? calculateTime(currentTime)
          : '00:00'}
      </div>
      <div className="setting">
        <IoMdSettings />
      </div>
    </div>
  )
}

export default AudioPlayer
