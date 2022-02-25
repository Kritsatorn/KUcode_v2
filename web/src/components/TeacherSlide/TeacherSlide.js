import { useRef } from 'react'
import useToggleState from 'src/hooks/useToggleState'
import useOnClickOutside from 'src/hooks/useOnClickOutside'
const TeacherSlide = () => {
  const ref = useRef()
  const [isOpen, setIsOpenTrue, setIsOpenFalse] = useToggleState(false)
  useOnClickOutside(ref, () => setIsOpenFalse())
  return (
    <div
      className={`w-full h-full bg-violet-600 cursor-default transition-all duration-300 ${
        isOpen
          ? ' translate-x-slideX  -translate-y-slideY  w-slide h-slide'
          : ''
      }`}
      ref={ref}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      onClick={() => {
        setIsOpenTrue()
      }}
    >
      <h1>SLIDE</h1> <div>FKUC</div>
    </div>
  )
}

export default TeacherSlide
