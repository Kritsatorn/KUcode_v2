import TeacherSlide from 'src/components/TeacherSlide'
export const QUERY = gql`
  query FindImageLIDQuery($learningId: Int!) {
    imageByLID: imageByLID(learningId: $learningId) {
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

export const Success = ({ imageByLID, ...rest }) => {
  const result = imageByLID.map((img) => {
    return { title: img.title, url: img.url }
  })
  return <TeacherSlide imgSlide={result} {...rest} />
}
