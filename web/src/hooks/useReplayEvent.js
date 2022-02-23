import { useRef } from 'react'
const useReplayEvent = () => {
  const timeID = useRef(null)
  const timeLeft = function (timeDiff, startTimeReplay) {
    if (startTimeReplay > 0) {
      if (startTimeReplay >= timeDiff) {
        startTimeReplay -= timeDiff
        timeDiff = 0
      }
      if (startTimeReplay < timeDiff) {
        timeDiff -= startTimeReplay
        startTimeReplay = 0
      }
    }
    return [timeDiff, startTimeReplay]
  }

  const _replayRecur = async function (
    startTimeReplay,
    index,
    eventList,
    updateValue
  ) {
    let { value, timeDiff } = eventList[index]
    let [newTimeDiff, newStartTimeReplay] = timeLeft(timeDiff, startTimeReplay)
    return (timeID.current = setTimeout(() => {
      if (newTimeDiff !== 0) updateValue(value)
      if (index + 1 < eventList.length) {
        _replayRecur(newStartTimeReplay, index + 1, eventList, updateValue)
      }
    }, newTimeDiff))
  }

  const startReplay = async function (startTimeReplay, eventList, updateValue) {
    // --- trans to milli second
    startTimeReplay *= 1000
    if (eventList.length === 0) return

    return _replayRecur(startTimeReplay, 0, eventList, updateValue)
  }

  const stopReplay = () => {
    clearTimeout(timeID.current)
    timeID.current = null
  }
  return [startReplay, stopReplay]
}

export default useReplayEvent
