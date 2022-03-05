import Learning from 'src/components/Learning'
export const QUERY = gql`
  query FindLearningQuery($learningId: Int!) {
    slideScript: slideScriptByLID(learningId: $learningId) {
      id
      order
      timeDiff
      isOpen
      PageNumber
    }
    sideBarScript: sideBarScriptByLID(learningId: $learningId) {
      id
      order
      timeDiff
      value
    }
    typingScript: typingScriptByLID(learningId: $learningId) {
      id
      order
      timeDiff
      html
      css
      js
    }
    cursorScript: cursorScriptByLID(learningId: $learningId) {
      id
      order
      timeDiff
      positionX
      positionY
      hidden
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ ...rest }) => <Learning {...rest} />

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  slideScript,
  sideBarScript,
  typingScript,
  cursorScript,
  ...rest
}) => {
  const resultSlideScript = slideScript.map((script) => {
    return {
      value: {
        isOpen: script.isOpen,
        PageNumber: script.PageNumber,
      },
      timeDiff: script.timeDiff,
    }
  })
  const resultCursorScript = cursorScript.map((cursor) => {
    return {
      value: {
        x: cursor.positionX,
        y: cursor.positionY,
        hidden: cursor.hidden,
      },
      timeDiff: cursor.timeDiff,
    }
  })
  const resultTypingScript = typingScript.map((typing) => {
    return {
      value: {
        JS: typing.js,
        CSS: typing.css,
        HTML: typing.html,
      },
      timeDiff: typing.timeDiff,
    }
  })
  const resultSideBarScript = sideBarScript.map((sidebar) => {
    return {
      value: sidebar?.value,
      timeDiff: sidebar?.timeDiff,
    }
  })

  return (
    <Learning
      slideScript={resultSlideScript}
      cursorScript={resultCursorScript}
      typingScript={resultTypingScript}
      sideBarScript={resultSideBarScript}
      {...rest}
    />
  )
}
