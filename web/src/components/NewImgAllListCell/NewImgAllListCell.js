export const QUERY = gql`
  query FindNewImgAllListQuery {
    newImgAllList: images {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ newImgAllList }) => {
  return <div>{newImgAllList.map((img) => JSON.stringify(img))}</div>
}
