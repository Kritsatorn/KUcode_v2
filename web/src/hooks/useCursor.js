import { useState, useEffect } from 'react'
const useCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    addEventListener()
    return () => removeEventListener()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const addEventListener = () => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
  }
  const removeEventListener = () => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseenter', onMouseEnter)
    document.removeEventListener('mouseleave', onMouseLeave)
  }
  const onMouseMove = (event) => {
    // delay to see cursor move
    setTimeout(setPosition({ x: event.clientX, y: event.clientY }), 10000)
    // setPosition({ x: event.clientX, y: event.clientY })
  }
  const onMouseEnter = () => {
    setHidden(() => false)
  }
  const onMouseLeave = () => {
    setHidden(() => true)
  }
  const updateCursor = ({ x, y, hidden }) => {
    setPosition({ x: x, y: y })
    setHidden(hidden)
  }
  return [position, hidden, updateCursor]
}
export default useCursor
