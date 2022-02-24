import AudioPlayer from 'src/components/AudioPlayer'
import DnDIframe from 'src/components/DnDIframe'
import CodeEditer from 'src/components/CodeEditer'
import SideBar from 'src/components/SideBar'
import Console from 'src/components/Console'
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
  const [isEditing, setIsEditing] = useState(false)
  const [isConsole, toggleIsConsole] = useToggle(false)

  const [code, setCode] = useState({
    JS: `
    document.getElementById("myBtn").addEventListener("click", fuck);

    function fuck() {
      console.log("fuck")
    }
    `,
    CSS: '',
    HTML: '<button id="myBtn">Try it</button>',
  })

  const audioRef = useRef(null)
  // eslint-disable-next-line no-unused-vars
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder()
  const [startReplayTyping, stopReplayTyping] = useReplayEvent()
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
      startRecording()
    }

    if (isRecord === false) {
      stopRecordTyping()
      stopRecording()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecord])

  const handleEditorChange = (value) => {
    const updatedValue = {}
    updatedValue[mapLanguage[file.language]] = value
    if (isRecordTyping) recordEventTyping({ ...code, ...updatedValue })
    setCode((prevCode) => ({ ...prevCode, ...updatedValue }))
    setIsEditing(() => true)
  }
  const [consoleList, setConsoleList] = useState([])
  useEffect(() => {
    window.addEventListener('message', (e) => {
      const data = e.data
      if (data.type === 'log') {
        console.log('received from child', data.args)
        setConsoleList((prev) => [...prev, data.args[0]])
      }
    })
  }, [])
  return (
    <div className="w-full h-full">
      <DnDIframe compiledCode={iframeCode} />
      <div className=" relative flex w-full h-full  ">
        <div className="w-48 h-full box-content ">
          <SideBar setFileName={setFileName} />
        </div>
        {/* Editer headBar */}
        <div className=" bg-skin-editerDark w-full h-full box-border overflow-hidden relative">
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
              <button className="w-20 h-8 py-1 px-2 mx-4 bg-yellow-400">
                RUN
              </button>
              <button
                className="w-20 h-8 py-1 px-2 mx-4 bg-yellow-400"
                onClick={() => {
                  toggleIsConsole()
                }}
              >
                console
              </button>
            </div>
          </div>
          <CodeEditer
            file={file}
            code={code}
            isEditing={isEditing}
            handleEditorChange={handleEditorChange}
          />
          <Console
            isEditing={isEditing}
            isOpen={isConsole}
            toggleIsOpen={toggleIsConsole}
            consoleList={consoleList}
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
        <AudioPlayer
          onPlayFn={() => {
            startReplayTyping(0, eventListTyping, setCode)
            setIsEditing(() => false)
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
