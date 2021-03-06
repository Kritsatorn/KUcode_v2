/* eslint-disable react-hooks/exhaustive-deps */
import AudioPlayer from 'src/components/AudioPlayer'
import DnDIframe from 'src/components/DnDIframe'
import CodeEditer from 'src/components/CodeEditer'
import SideBar from 'src/components/SideBar'
import Console from 'src/components/Console'
import Cursor from 'src/components/Cursor'
import TeacherSlideCell from 'src/components/TeacherSlideCell'
import files from 'src/utils/files'
import useIframe from 'src/hooks/useIframe'
import useToggle from 'src/hooks/useToggle'
import useToggleState from 'src/hooks/useToggleState'
import useRecordEvent from 'src/hooks/useRecordEvent'
import useReplayEvent from 'src/hooks/useReplayEvent'
import useRecorder from 'src/hooks/useRecorder'
import useCursor from 'src/hooks/useCursor'
import { BsFillPlayFill, BsFillRecordCircleFill } from 'react-icons/bs'
import { Toaster, toast } from '@redwoodjs/web/toast'
import { useState, useRef, useEffect } from 'react'
import useUploadLearning from 'src/hooks/useUploadLearning'
import { navigate, routes } from '@redwoodjs/router'
const mapLanguage = {
  javascript: 'JS',
  css: 'CSS',
  html: 'HTML',
}

const LearningRecord = ({
  imageIDList = [1, 2],
  learningName = 'name of learning 3',
}) => {
  const [fileName, setFileName] = useState(Object.keys(files)[0])
  const file = files[fileName]
  const [iframeCode, upadteIframe] = useIframe()

  // On/Off state
  const [isReplay, setIsReplay] = useState(false)
  const [isRecord, toggleIsRecord] = useToggle(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isConsole, toggleIsConsole] = useToggle(false)
  // eslint-disable-next-line no-unused-vars
  const [isIframe, setIframeTrue, setIframeFalse, toggleIframe] =
    useToggleState(false)

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
  // Typing
  // { JS:'' , CSS:'' , HTML:''}
  const [startReplayTyping, stopReplayTyping] = useReplayEvent()
  const [
    startRecordTyping,
    stopRecordTyping,
    recordEventTyping,
    eventListTyping,
    isRecordTyping,
  ] = useRecordEvent()
  const handleEditorChange = (value) => {
    const updatedValue = {}
    updatedValue[mapLanguage[file.language]] = value
    if (isRecordTyping) recordEventTyping({ ...code, ...updatedValue })
    setCode((prevCode) => ({ ...prevCode, ...updatedValue }))
    setIsEditing(() => true)
  }

  // Cursor
  // { position : { x , y }, hidden }
  const [position, hidden, updateCursor] = useCursor()
  const [startReplayCursor, stopReplayCursor] = useReplayEvent()
  const [
    startRecordCursor,
    stopRecordCursor,
    recordEventCursor,
    eventListCursor,
    isRecordCursor,
  ] = useRecordEvent()
  useEffect(() => {
    if (isRecordCursor === true) {
      recordEventCursor({ ...position, hidden })
    }
  }, [position, hidden])

  // Slide
  // { isOpen , Page }
  const [slide, setSlide] = useState({ isOpen: false, PageNumber: 0 })
  const [startReplaySlide, stopReplaySlide] = useReplayEvent()
  const [
    startRecordSlide,
    stopRecordSlide,
    recordEventSlide,
    eventListSlide,
    isRecordSlide,
  ] = useRecordEvent()
  const recordSlide = (isOpen, PageNumber) => {
    if (isRecordSlide === true) {
      recordEventSlide({ isOpen: isOpen, PageNumber: PageNumber })
    }
  }
  const updateSlide = ({ isOpen, PageNumber }) => {
    setSlide({ isOpen: isOpen, PageNumber: PageNumber })
  }

  // SideBar
  // use Filename
  const [startReplaySideBar, stopReplaySideBar] = useReplayEvent()
  const [
    startRecordSideBar,
    stopRecordSideBar,
    recordEventSideBar,
    eventListSideBar,
    isRecordSideBar,
  ] = useRecordEvent()
  useEffect(() => {
    if (isRecordSideBar === true) {
      recordEventSideBar(fileName)
    }
  }, [fileName])
  // All State Records
  useEffect(() => {
    if (isRecord === true) {
      startRecordTyping()
      startRecordCursor()
      startRecordSlide()
      startRecordSideBar()
      startRecording()
    }
    if (isRecord === false) {
      stopRecordTyping()
      stopRecordCursor()
      stopRecordSlide()
      stopRecordSideBar()
      stopRecording()
    }
  }, [isRecord])

  // Toaster Noti
  useEffect(() => {
    if (isEditing == true) {
      toast('Start Editing')
    }
  }, [isEditing])

  // Console
  const [consoleList, setConsoleList] = useState([])
  useEffect(() => {
    window.addEventListener('message', (e) => {
      const data = e.data
      if (data.type === 'log') {
        setConsoleList((prev) => [...prev, data.args[0]])
      }
    })
  }, [])

  // handle upload
  const [upload, complete] = useUploadLearning()
  const handleUpload = () => {
    const payload = {
      name: learningName,
      audioURL: audioURL,
      imageList: JSON.parse(`[${imageIDList}]`),
      cursorList: eventListCursor,
      slideList: eventListSlide,
      sidebarList: eventListSideBar,
      typingList: eventListTyping,
    }
    upload(payload)
  }
  useEffect(() => {
    if (audioURL !== '') {
      toast('Start Upload !!!')
      handleUpload()
    }
  }, [audioURL])
  useEffect(() => {
    if (complete === true) {
      toast.success('Successfully Upload !!!')
      setTimeout(() => {
        navigate(routes.dashboard())
      }, 3000)
    }
  }, [complete])
  return (
    <div className="w-full h-full overflow-hidden flex relative">
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: 'text-xl text-bold',
          style: {
            padding: '4px 3px',
          },
          success: { duration: 3000 },
        }}
      />
      <DnDIframe
        compiledCode={iframeCode}
        isOpen={isIframe}
        setClose={setIframeFalse}
      />
      {isReplay && (
        <Cursor position={position} hidden={hidden} offsetY={'-2.5rem'} />
      )}
      <div className="w-56 box-content relative ">
        <SideBar
          fileName={fileName}
          setFileName={setFileName}
          isEditing={isEditing}
        />
        <div className=" z-40 absolute left-0 bottom-10 w-full h-slide_img ">
          <TeacherSlideCell
            imageIDList={JSON.parse(`[${imageIDList}]`)}
            onChange={recordSlide}
            isOpenProp={slide.isOpen}
            pageNumber={slide.PageNumber}
          />
        </div>
      </div>

      <div className=" flex-1 bg-skin-playing box-border overflow-hidden relative">
        {/* Editer headBar */}
        <div
          className={`w-full h-12 text-white flex ${
            isEditing ? 'bg-skin-editing' : ' bg-skin-playing'
          }`}
        >
          <div className="ml-10 mt-2">{file.name} </div>
          <div className="ml-auto pr-1 flex justify-center items-center">
            <button
              className="font-bold text-xs py-1 px-2 mx-1 rounded flex bg-green-500 hover:bg-green-400"
              onClick={() =>
                upadteIframe(code['HTML'], code['CSS'], code['JS'])
              }
            >
              <BsFillPlayFill size={'15px'} />
              RUN
            </button>
            <button
              className={`font-bold text-xs py-1 px-2 mx-1  rounded bg-transparent border border-base ${
                isIframe ? 'border-transparent bg-skin-base' : ''
              }`}
              onClick={() => toggleIframe()}
            >
              PREVIEW
            </button>
            <button
              className={`font-bold text-xs py-1 px-2 mx-1  rounded bg-transparent border border-base ${
                isConsole ? 'border-transparent bg-skin-base' : ''
              }`}
              onClick={() => {
                toggleIsConsole()
              }}
            >
              CONSOLE
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
          className=" text-red-500 self-center ml-4"
          onClick={toggleIsRecord}
        >
          {isRecord ? (
            <span className="flex h-4 w-4 pointer-events-none relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          ) : (
            <div className=" transition-all hover:scale-150 rounded-full hover:outline outline-white outline-1 ">
              <BsFillRecordCircleFill />
            </div>
          )}
        </button>

        <AudioPlayer
          onPlayFn={() => {
            startReplayTyping(0, eventListTyping, setCode)
            startReplayCursor(0, eventListCursor, updateCursor)
            startReplaySlide(0, eventListSlide, updateSlide)
            startReplaySideBar(0, eventListSideBar, setFileName)
            setIsEditing(() => false)
            setIsReplay(() => true)
          }}
          onPause={() => {
            stopReplayTyping()
            stopReplayCursor()
            stopReplaySideBar()
            stopReplaySlide()
            setIsReplay(() => false)
          }}
          audioRef={audioRef}
          // audioURL={soundUrl}
          audioURL={audioURL}
        />
      </div>
    </div>
  )
}

export default LearningRecord
