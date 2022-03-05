import { DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di'
const iconFile = {
  javascript: (
    <span className=" text-lg">
      <DiJavascript1 />
    </span>
  ),
  css: (
    <span className="text-lg text-blue-400">
      <DiCss3 />
    </span>
  ),
  html: (
    <span className="text-lg text-orange-400">
      <DiHtml5 />
    </span>
  ),
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
  fileName,
  setFileName,
  isEditing = false,
}) => {
  return (
    <div
      className={`sidebar h-full w-full py-4 text-skin-base ${
        isEditing ? 'bg-skin-sideEditing' : 'bg-skin-side '
      }`}
    >
      <div className="explorer px-2 ml-1 text-sm">EXPLORER</div>
      <div className="listfile mt-2 text-xs ">
        {Files?.map((file, index) => (
          <div
            key={index}
            tabIndex={index}
            className={`flex cursor-pointer my-2 py-1 ${
              fileName === file.name
                ? isEditing
                  ? 'bg-skin-editing'
                  : 'bg-skin-playing'
                : ''
            }`}
            onClick={() => setFileName(file.name)}
            onKeyDown={() => {}}
            role="button"
          >
            <div className="icon-file ml-6 pt-1 text-yellow-400">
              {iconFile[file.language]}
            </div>
            <div className="file ml-2 pt-1 text-white">{file.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
