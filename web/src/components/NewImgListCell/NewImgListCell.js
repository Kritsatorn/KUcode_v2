export const QUERY = gql`
  query FindNewImgListQuery {
    newImgList: images {
      id
      title
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ newImgList, imageIDList = [] }) => {
  const result = newImgList.filter(({ id }) => imageIDList.includes(id))
  return <div>{result.map((img) => JSON.stringify(img))}</div>
}
