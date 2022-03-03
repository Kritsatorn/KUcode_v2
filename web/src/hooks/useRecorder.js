import { useEffect, useState } from 'react'
import axios from 'axios'
const useRecorder = () => {
  const [audioURL, setAudioURL] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [recorder, setRecorder] = useState(null)

  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error)
      }
      return
    }

    // Manage recorder state.
    if (isRecording) {
      recorder.start()
    } else {
      recorder.stop()
    }

    // Obtain the audio when ready.
    const handleData = (e) => {
      // instead of BLOB url , we upload now // change logic later
      // setAudioURL(URL.createObjectURL(e.data))
      const url = `https://www.filestackapi.com/api/store/S3?key=${process.env.REDWOOD_ENV_FILESTACK_API_KEY}`
      const config = {
        headers: {
          'content-type': 'audio/webm;codecs=opus',
        },
      }
      axios.post(url, e.data, config).then((response) => {
        console.log('audio', response.data)
        setAudioURL(response.data.url)
      })
    }

    recorder.addEventListener('dataavailable', handleData)
    return () => recorder.removeEventListener('dataavailable', handleData)
  }, [recorder, isRecording])

  const startRecording = () => {
    setIsRecording(true)
  }

  const stopRecording = () => {
    setIsRecording(false)
  }

  return [audioURL, isRecording, startRecording, stopRecording]
}

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  return new MediaRecorder(stream)
}
export default useRecorder
