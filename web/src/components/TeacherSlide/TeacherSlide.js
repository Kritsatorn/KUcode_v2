import { useEffect, useRef, useState } from 'react'
import useToggleState from 'src/hooks/useToggleState'
import useOnClickOutside from 'src/hooks/useOnClickOutside'
const slidesImg = [
  {
    name: 'slide 1',
    src: 'https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg',
  },
  {
    name: 'slide 2',
    src: 'https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_1280.jpg',
  },
  {
    name: 'slide 3',
    src: 'https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_1280.png',
  },
  {
    name: 'slide 4',
    src: 'https://cdn.pixabay.com/photo/2016/04/25/07/49/man-1351346_1280.png',
  },
]
const TeacherSlide = ({ imgSlide = slidesImg }) => {
  const ref = useRef()
  const [isOpen, setIsOpenTrue, setIsOpenFalse] = useToggleState(false)
  const [slide, setSlide] = useState(0)
  useOnClickOutside(ref, () => setIsOpenFalse())

  const checkKey = (e) => {
    e = e || window.event

    if (e.keyCode == '38') {
      // up arrow
    } else if (e.keyCode == '40') {
      // down arrow
    } else if (e.keyCode == '37') {
      // left arrow
      setSlide((prev) => (prev - 1 >= 0 ? prev - 1 : 0))
    } else if (e.keyCode == '39') {
      // right arrow
      setSlide((prev) => (prev + 1) % imgSlide.length)
    }
  }
  useEffect(() => {
    if (isOpen === true) {
      document.addEventListener('keydown', checkKey)
    }
    if (isOpen === false) {
      document.removeEventListener('keydown', checkKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])
  return (
    <div
      className={`w-full h-full bg-violet-600 overflow-hidden cursor-default focus:outline-0 active:outline-0 transition-all duration-300 ${
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
      <img
        className="object-contain object-center"
        src={imgSlide[slide].src}
        alt={imgSlide[slide].name}
      />
    </div>
  )
}

export default TeacherSlide
