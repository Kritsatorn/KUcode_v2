import { useEffect, useState } from 'react'
import { compare } from 'js-deep-equals'
const usePrevious = (value) => {
  const ref = React.useRef()

  React.useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
export function useStateWithDep(defaultValue) {
  const [value, setValue] = useState(defaultValue)
  const prevDatas = usePrevious(defaultValue)
  useEffect(() => {
    if (!compare(prevDatas, defaultValue)) setValue(defaultValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue])
  return [value, setValue]
}
