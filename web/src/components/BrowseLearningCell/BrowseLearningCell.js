export const QUERY = gql`
  query FindBrowseLearningQuery {
    browseLearning: learnings {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ browseLearning }) => {
  return <div>{JSON.stringify(browseLearning)}</div>
}
