import AudioPlayer from 'src/components/AudioPlayer'
import DnDIframe from 'src/components/DnDIframe'
import CodeEditer from 'src/components/CodeEditer'
import SideBar from 'src/components/SideBar'
import files from 'src/utils/files'
import { useState, useRef } from 'react'
const Learning = () => {
  const audioRef = useRef(null)
  const [fileName, setFileName] = useState(Object.keys(files)[0])
  const file = files[fileName]
  const [isRecord, setIsRecord] = useState(false)
  const handleRecordBtn = () => {
    setIsRecord((prev) => !prev)
  }
  return (
    <div className="w-full h-full">
      <DnDIframe
      // code={srcDoc}
      />
      <div className=" relative flex w-full h-full  ">
        <div className="  w-48 h-full box-content ">
          <SideBar setFileName={setFileName} />
        </div>
        <div className=" bg-skin-editerDark w-full h-full box-border">
          <CodeEditer
            file={file}
            // theme={theme}
            // language={language}
            // code={code}
            // handleEditorDidMount={handleEditorDidMount}
            // handleEditorChange={handleEditorChange}
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
