import AudioPlayer from 'src/components/AudioPlayer'
import DnDIframe from 'src/components/DnDIframe'
import CodeEditer from 'src/components/CodeEditer'
import SideBar from 'src/components/SideBar'
const Learning = () => {
  return (
    <div>
      <DnDIframe
      // code={srcDoc}
      />
      <div className=" relative flex w-full h-full  ">
        <div className="  w-48 h-full box-content ">
          <SideBar />
        </div>
        <div className=" bg-skin-editerDark w-full h-full box-border">
          <CodeEditer
          // theme={theme}
          // language={language}
          // code={code}
          // handleEditorDidMount={handleEditorDidMount}
          // handleEditorChange={handleEditorChange}
          />
        </div>
      </div>
      <div className="z-10 left-0 bottom-0 fixed w-full h-10 ">
        <AudioPlayer
        // onPlayFn={() => {
        //   let { currentTime } = audioRef.current
        //   replayTyping(currentTime)
        // }}
        // onPause={() => {
        //   clearTimeout(timeID.current)
        //   timeID.current = null
        // }}
        // audioRef={audioRef}
        // audioURL={soundUrl}
        />
      </div>
    </div>
  )
}

export default Learning
