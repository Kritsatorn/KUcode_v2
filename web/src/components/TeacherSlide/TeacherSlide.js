/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import useToggleState from 'src/hooks/useToggleState'
import useOnClickOutside from 'src/hooks/useOnClickOutside'
const slidesImg = [
  {
    title: 'slide 1',
    url: 'https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg',
  },
  {
    title: 'slide 2',
    url: 'https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_1280.jpg',
  },
  {
    title: 'slide 3',
    url: 'https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_1280.png',
  },
  {
    title: 'slide 4',
    url: 'https://cdn.pixabay.com/photo/2016/04/25/07/49/man-1351346_1280.png',
  },
]
const TeacherSlide = ({
  imgSlide = slidesImg,
  isOpenProp = false,
  pageNumber = 0,
  onChange = () => {},
}) => {
  const ref = useRef()
  const [isOpen, setIsOpenTrue, setIsOpenFalse] = useToggleState(isOpenProp)
  const [slide, setSlide] = useState(pageNumber)
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
  }, [isOpen])
  useEffect(() => {
    if (isOpenProp === true) {
      setIsOpenTrue()
    }
    if (isOpenProp === false) {
      setIsOpenFalse()
    }
    setSlide(pageNumber)
  }, [isOpenProp, pageNumber])
  useEffect(() => {
    onChange(isOpen, slide)
  }, [isOpen, slide])
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
        src={imgSlide[slide].url}
        alt={imgSlide[slide].title}
      />
    </div>
  )
}

export default TeacherSlide
