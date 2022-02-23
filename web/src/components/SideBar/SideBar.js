const iconFile = {
  JS: 'JS',
  CSS: 'CSS',
  HTML: 'HTML',
}
const SideBar = ({
  Files = [
    { fileName: 'App.js', fileType: 'JS' },
    { fileName: 'Fuck.css', fileType: 'CSS' },
  ],
}) => {
  return (
    <div className="sidebar h-full w-full py-4 bg-skin-side text-skin-base ">
      <div className="explorer px-2 ml-1 text-sm">EXPLORER</div>
      <div className="listfile px-2 mt-2 text-xs ">
        {Files?.map((file, index) => (
          <div key={index} className="flex">
            <div className="icon-file ml-6 pt-1 text-yellow-400">
              {iconFile[file.fileType]}
            </div>
            <div className="file ml-2 text-white">{file.fileName}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
