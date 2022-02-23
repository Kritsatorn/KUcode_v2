const iconFile = {
  javascript: 'JS',
  css: 'CSS',
  html: 'HTML',
}
const SideBar = ({
  Files = [
    {
      name: 'script.js',
      language: 'javascript',
    },
    {
      name: 'style.css',
      language: 'css',
    },
    {
      name: 'index.html',
      language: 'html',
    },
  ],
  setFileName,
}) => {
  return (
    <div className="sidebar h-full w-full py-4 bg-skin-side text-skin-base ">
      <div className="explorer px-2 ml-1 text-sm">EXPLORER</div>
      <div className="listfile px-2 mt-2 text-xs ">
        {Files?.map((file, index) => (
          <div
            key={index}
            tabIndex={index}
            className="flex cursor-pointer my-2"
            onClick={() => setFileName(file.name)}
            onKeyDown={() => {}}
            role="button"
          >
            <div className="icon-file ml-6 pt-1 text-yellow-400">
              {iconFile[file.language]}
            </div>
            <div className="file ml-2 text-white">{file.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
