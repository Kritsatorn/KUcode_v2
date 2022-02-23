import AudioPlayer from 'src/components/AudioPlayer'
import DnDIframe from 'src/components/DnDIframe'
import CodeEditer from 'src/components/CodeEditer'
import SideBar from 'src/components/SideBar'
import files from 'src/utils/files'
import useIframe from 'src/hooks/useIframe'
import useRecordEvent from 'src/hooks/useRecordEvent'
import useReplayEvent from 'src/hooks/useReplayEvent'
import { useState, useRef, useEffect } from 'react'
const mapLanguage = {
  javascript: 'JS',
  css: 'CSS',
  html: 'HTML',
}
const Learning = () => {
  const [fileName, setFileName] = useState(Object.keys(files)[0])
  const file = files[fileName]
  const [iframeCode, upadteIframe] = useIframe()

  const [isRecord, setIsRecord] = useState(false)
  const [isReplay, setIsReplay] = useState(false)
  const handleRecordBtn = () => {
    setIsRecord((prev) => !prev)
  }
  const [code, setCode] = useState({
    JS: '',
    CSS: '',
    HTML: '',
  })

  const handleEditorChange = (value) => {
    const updatedValue = {}
    updatedValue[mapLanguage[file.language]] = value
    setCode((prevCode) => ({ ...prevCode, ...updatedValue }))
    if (isRecordTyping) recordEventTyping(code)
    console.log(mapLanguage[file.language], value, code)
  }

  const audioRef = useRef(null)

  const [
    startRecordTyping,
    stopRecordTyping,
    recordEventTyping,
    eventListTyping,
    isRecordTyping,
  ] = useRecordEvent()

  useEffect(() => {
    if (isRecord === true) {
      startRecordTyping()
    }

    if (isRecord === false) {
      stopRecordTyping()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecord])

  useEffect(() => {
    console.log('event list : ', eventListTyping)
  }, [eventListTyping])

  const [startReplayTyping, stopReplayTyping] = useReplayEvent()
  const handleReplayBtn = () => {
    setIsReplay((prev) => !prev)
  }
  useEffect(() => {
    if (isReplay === true) {
      startReplayTyping(0, eventListTyping, setCode)
    }

    if (isReplay === false) {
      stopReplayTyping()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReplay])
  return (
    <div className="w-full h-full">
      <DnDIframe compiledCode={iframeCode} />
      <div className=" relative flex w-full h-full  ">
        <div className="  w-48 h-full box-content ">
          <SideBar setFileName={setFileName} />
        </div>
        {/* Editer headBar */}
        <div className=" bg-skin-editerDark w-full h-full box-border overflow-hidden">
          <div className=" w-full h-12 bg-skin-editerDark text-white flex">
            <div className="ml-10 mt-2">{file.name} </div>
            <div className="ml-auto pr-5">
              <button
                className="w-20 h-8 py-1 px-2 mx-4 bg-yellow-400"
                onClick={() =>
                  upadteIframe(code['HTML'], code['CSS'], code['JS'])
                }
              >
                PREVIEW
              </button>
              <button>RUN</button>
            </div>
          </div>
          <CodeEditer
            file={file}
            // theme={theme}
            // language={language}
            code={code}
            // handleEditorDidMount={handleEditorDidMount}
            handleEditorChange={handleEditorChange}
          />
        </div>
      </div>
      <div className="z-10 left-0 bottom-0 fixed w-full h-10 flex">
        <button
          className=" box-border w-20 h-8 py-1 px-2 ml-2 bg-yellow-300 text-sm "
          onClick={handleRecordBtn}
        >
          {isRecord ? 'STOP' : 'RECORD'}
        </button>
        <button
          className=" box-border w-20 h-8 py-1 px-2 ml-2 bg-yellow-300 text-sm "
          onClick={handleReplayBtn}
        >
          {isReplay ? 'STOP' : 'RECORD'}
        </button>
        <AudioPlayer
          // onPlayFn={() => {
          //   let { currentTime } = audioRef.current
          //   replayTyping(currentTime)
          // }}
          // onPause={() => {
          //   clearTimeout(timeID.current)
          //   timeID.current = null
          // }}
          audioRef={audioRef}
          // audioURL={soundUrl}
        />
      </div>
    </div>
  )
}

export default Learning
