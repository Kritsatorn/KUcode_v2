export const QUERY = gql`
  query FindLearningQuery($id: Int!) {
    learning: learning(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ learning }) => {
  return <div>{JSON.stringify(learning)}</div>
}
