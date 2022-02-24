import AudioPlayer from 'src/components/AudioPlayer'
import DnDIframe from 'src/components/DnDIframe'
import CodeEditer from 'src/components/CodeEditer'
import SideBar from 'src/components/SideBar'
import files from 'src/utils/files'
import useIframe from 'src/hooks/useIframe'
import useToggle from 'src/hooks/useToggle'
import useRecordEvent from 'src/hooks/useRecordEvent'
import useReplayEvent from 'src/hooks/useReplayEvent'
import useRecorder from 'src/hooks/useRecorder'
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

  const [isRecord, toggleIsRecord] = useToggle(false)
  const [isReplay, toggleIsReplay] = useToggle(false)

  const [code, setCode] = useState({
    JS: '',
    CSS: '',
    HTML: '',
  })

  const handleEditorChange = (value) => {
    const updatedValue = {}
    updatedValue[mapLanguage[file.language]] = value
    if (isRecordTyping) recordEventTyping({ ...code, ...updatedValue })
    setCode((prevCode) => ({ ...prevCode, ...updatedValue }))
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
    console.log('use Effevent list : ', eventListTyping)
  }, [eventListTyping])

  const [startReplayTyping, stopReplayTyping] = useReplayEvent()
  useEffect(() => {
    if (isRecord === true) {
      startRecordTyping()
      startRecording()
    }

    if (isRecord === false) {
      stopRecordTyping()
      stopRecording()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecord])
  // eslint-disable-next-line no-unused-vars
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder()
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
          onClick={toggleIsRecord}
        >
          {isRecord ? 'STOP' : 'RECORD'}
        </button>
        <button
          className=" box-border w-20 h-8 py-1 px-2 ml-2 bg-yellow-300 text-sm "
          onClick={toggleIsReplay}
        >
          {isReplay ? 'STOP' : 'REPLAY'}
        </button>
        <AudioPlayer
          onPlayFn={() => {
            startReplayTyping(0, eventListTyping, setCode)
          }}
          onPause={() => {
            stopReplayTyping()
          }}
          audioRef={audioRef}
          // audioURL={soundUrl}
          audioURL={audioURL}
        />
      </div>
    </div>
  )
}

export default Learning
