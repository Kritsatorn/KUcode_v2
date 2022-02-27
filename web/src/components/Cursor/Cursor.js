import { BsFillCursorFill } from 'react-icons/bs'
import './Cursor.css'
const Cursor = ({
  position = { x: 0, y: 0 },
  hidden = false,
  offsetY = '0px',
}) => {
  return (
    <div
      className="cursor z-50 absolute text-primary-blue -rotate-60 text-sm"
      style={{
        top: `calc(${position.y}px + ${offsetY})`,
        left: `${position.x}px`,
        opacity: `${hidden ? 0 : 1}`,
      }}
    >
      <BsFillCursorFill />
    </div>
  )
}

export default Cursor
