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
    setTimeout(setPosition({ x: event.clientX, y: event.clientY }), 10000)
  }
  const onMouseEnter = () => {
    setHidden(() => false)
  }
  const onMouseLeave = () => {
    setHidden(() => true)
  }
  return [position, hidden]
}
export default useCursor
