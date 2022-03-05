/* eslint-disable react-hooks/exhaustive-deps */
import DnDIframe from 'src/components/DnDIframe'
import CodeEditer from 'src/components/CodeEditer'
import SideBar from 'src/components/SideBar'
import Console from 'src/components/Console'
import Cursor from 'src/components/Cursor'

import files from 'src/utils/files'
import useIframe from 'src/hooks/useIframe'
import useToggle from 'src/hooks/useToggle'
import useToggleState from 'src/hooks/useToggleState'

import useReplayEvent from 'src/hooks/useReplayEvent'

import { BsFillPlayFill } from 'react-icons/bs'
import { Toaster, toast } from '@redwoodjs/web/toast'
import { useState, useRef, useEffect } from 'react'

import ImageLIDCell from 'src/components/ImageLIDCell'

import AudioPlayerCell from 'src/components/AudioPlayerCell'
const mapLanguage = {
  javascript: 'JS',
  css: 'CSS',
  html: 'HTML',
}

const Learning = ({
  id,
  slideScript,
  cursorScript,
  typingScript,
  sideBarScript,
}) => {
  const [fileName, setFileName] = useState(Object.keys(files)[0])
  const file = files[fileName]
  const [iframeCode, upadteIframe] = useIframe()

  // On/Off state
  const [isReplay, setIsReplay] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isConsole, toggleIsConsole] = useToggle(true)
  // eslint-disable-next-line no-unused-vars
  const [isIframe, setIframeTrue, setIframeFalse, toggleIframe] =
    useToggleState(true)

  const [code, setCode] = useState(
    typingScript.length > 0
      ? {
          ...typingScript[0].value,
        }
      : { JS: '', CSS: '', HTML: '' }
  )

  const audioRef = useRef(null)
  // Typing
  // { JS:'' , CSS:'' , HTML:''}
  const [startReplayTyping, stopReplayTyping] = useReplayEvent()
  const handleEditorChange = (value) => {
    const updatedValue = {}
    updatedValue[mapLanguage[file.language]] = value
    setCode((prevCode) => ({ ...prevCode, ...updatedValue }))
    setIsEditing(() => true)
  }

  // Cursor
  // { position : { x , y }, hidden }
  const [startReplayCursor, stopReplayCursor] = useReplayEvent()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const updateCursor = ({ x, y, hidden }) => {
    setPosition({ x: x, y: y })
    setHidden(hidden)
  }

  // Slide
  // { isOpen , Page }
  const [startReplaySlide, stopReplaySlide] = useReplayEvent()
  const [slide, setSlide] = useState({ isOpen: false, PageNumber: 0 })
  const updateSlide = ({ isOpen, PageNumber }) => {
    setSlide(() => ({ isOpen: isOpen, PageNumber: PageNumber }))
  }

  // Sidebar
  const [startReplaySideBar, stopReplaySideBar] = useReplayEvent()

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

  return (
    <div className="w-full h-full overflow-hidden flex relative">
      <Toaster
        position="bottom-center"
        toastOptions={{ success: { duration: 3000 } }}
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
        <div className=" z-40 absolute left-0 bottom-10 w-full h-40 ">
          <ImageLIDCell
            learningId={id}
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
          disable={isReplay}
        />
        <Console
          isEditing={isEditing}
          isOpen={isConsole}
          toggleIsOpen={toggleIsConsole}
          consoleList={consoleList}
        />
      </div>

      <div className="z-10 left-0 bottom-0 fixed w-full h-10 flex">
        <AudioPlayerCell
          id={id}
          onPlayFn={() => {
            typingScript && startReplayTyping(0, typingScript, setCode)
            cursorScript && startReplayCursor(0, cursorScript, updateCursor)
            slideScript && startReplaySlide(0, slideScript, updateSlide)
            sideBarScript && startReplaySideBar(0, sideBarScript, setFileName)
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
        />
      </div>
    </div>
  )
}

export default Learning
