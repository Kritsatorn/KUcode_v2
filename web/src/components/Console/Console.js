import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai'

const Console = ({
  isEditing = false,
  isOpen = true,
  toggleIsOpen,
  consoleList = ['HIII', 'THERE'],
}) => {
  return (
    <div
      className={`z-10 w-full h-1/4 absolute left-0 bottom-0 pl-4 border-t border-color-border  ease-in-out duration-300 +
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
    >
      {console.log(isOpen)}
      <div
        className={
          isEditing
            ? 'w-full h-full bg-skin-editing'
            : 'w-full h-full bg-skin-playing'
        }
      >
        <div
          className="flex text-skin-label cursor-pointer my-2 h-6"
          role="button"
          tabIndex={0}
          onClick={() => {
            toggleIsOpen()
          }}
          onKeyDown={() => {}}
        >
          <div className="text-base ">Console </div>
          <div className=" ml-auto mr-8 text-lg ">
            <AiOutlineDown />
          </div>
        </div>
        <div className="overflow-auto h-32 ">
          {consoleList.map((log, index) => (
            <ConsoleLog key={index} log={log} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ConsoleLog = ({ log = '' }) => {
  return (
    <div className="ml-3 text-skin-normal flex ">
      <div className="text-skin-label text-xs pt-1">
        <AiOutlineRight />
      </div>
      <div className="ml-2">{log} </div>
    </div>
  )
}
export default Console
