import { useEffect } from 'react'
export const QUERY = gql`
  query FindSlideScriptQuery($learningId: Int!) {
    slideScript: slideScriptByLID(learningId: $learningId) {
      id
      order
      timeDiff
      isOpen
      PageNumber
    }
    slideScript2: slideScriptByLID(learningId: $learningId) {
      id
      order
      timeDiff
      isOpen
      PageNumber
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ slideScript, slideScript2, setEventListSlide }) => {
  useEffect(() => {
    console.log('2 slid ', slideScript2)
    const result = slideScript.map((script) => {
      return {
        value: {
          isOpen: script.isOpen,
          PageNumber: script.PageNumber,
        },
        timeDiff: script.timeDiff,
      }
    })
    setEventListSlide([...result])
  }, [])
  return <div className="hidden"></div>
}
