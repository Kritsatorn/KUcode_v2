import { useState } from 'react'
const useRecordEvent = () => {
  const [eventList, setEventList] = useState([])
  const [isRecord, setIsRecord] = useState(false)
  const [isFirst, setisFirst] = useState(true)
  const [prevTime, setPrevTime] = useState(0)
  const [startRecordTimeStamp, setStartRecordTimeStamp] = useState(0)
  const resetRecord = () => {
    setIsRecord(false)
    setEventList([])
    setisFirst(true)
    setPrevTime(0)
    setStartRecordTimeStamp(0)
  }
  const startRecord = () => {
    setIsRecord(true)
    setStartRecordTimeStamp(() => performance.now())
  }

  const stopRecord = () => {
    setIsRecord(false)
  }

  const recordEvent = (value) => {
    let timeStamp = performance.now()
    let timeDiff = timeStamp - prevTime
    if (isFirst) {
      timeDiff = timeStamp - startRecordTimeStamp
      setisFirst(() => false)
    }
    setPrevTime(() => timeStamp)
    let payload = { value, timeDiff }
    setEventList((prevList) => [...prevList, payload])
  }

  return [
    startRecord,
    stopRecord,
    recordEvent,
    eventList,
    isRecord,
    resetRecord,
  ]
}

export default useRecordEvent
