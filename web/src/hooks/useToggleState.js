export default function useToggleState(initialValue = false) {
  const [value, setValue] = React.useState(initialValue)
  const setTrue = React.useCallback(() => {
    setValue(() => true)
  }, [])
  const setFalse = React.useCallback(() => {
    setValue(() => false)
  }, [])
  const toggle = React.useCallback(() => {
    setValue((v) => !v)
  }, [])
  return [value, setTrue, setFalse, toggle]
}
