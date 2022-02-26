import AudioPlayer from 'src/components/AudioPlayer'
import DnDIframe from 'src/components/DnDIframe'
import CodeEditer from 'src/components/CodeEditer'
import SideBar from 'src/components/SideBar'
import Console from 'src/components/Console'
import Cursor from 'src/components/Cursor'
import TeacherSlide from 'src/components/TeacherSlide'
import files from 'src/utils/files'
import useIframe from 'src/hooks/useIframe'
import useToggle from 'src/hooks/useToggle'
import useRecordEvent from 'src/hooks/useRecordEvent'
import useReplayEvent from 'src/hooks/useReplayEvent'
import useRecorder from 'src/hooks/useRecorder'
import useCursor from 'src/hooks/useCursor'
import { Toaster, toast } from '@redwoodjs/web/toast'
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
  const [isIframe, toggleIframe] = useToggle(false)

  const [position, hidden] = useCursor()

  useEffect(() => {
    console.log(position, hidden)
  }, [position, hidden])
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
  useEffect(() => {
    if (isEditing == true) {
      toast('Start Editing')
    }
  }, [isEditing])

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
    <div className="w-full h-full overflow-hidden flex relative">
      <Toaster
        position="bottom-center"
        toastOptions={{ success: { duration: 3000 } }}
      />
      <DnDIframe compiledCode={iframeCode} isOpen={isIframe} />
      <Cursor position={position} hidden={hidden} offsetY={'-2.5rem'} />
      <div className="w-56 box-content relative ">
        <SideBar setFileName={setFileName} />
        <div className=" z-40 absolute left-0 bottom-10 w-full h-40 ">
          <TeacherSlide />
        </div>
      </div>

      <div className=" flex-1 bg-skin-playing box-border overflow-hidden relative">
        {/* Editer headBar */}
        <div className=" w-full h-12 bg-skin-editerDark text-white flex">
          <div className="ml-10 mt-2">{file.name} </div>
          <div className="ml-auto pr-5">
            <button
              className="w-20 h-8 py-1 px-2 mx-4 bg-yellow-400"
              onClick={() => toggleIframe()}
            >
              PREVIEW
            </button>
            <button
              className="w-20 h-8 py-1 px-2 mx-4 bg-yellow-400"
              onClick={() =>
                upadteIframe(code['HTML'], code['CSS'], code['JS'])
              }
            >
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
