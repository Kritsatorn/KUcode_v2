import TeacherSlide from 'src/components/TeacherSlide'
export const QUERY = gql`
  query teacherSlide {
    images {
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

export const Success = ({ images, imageIDList = [1, 2], ...rest }) => {
  const result = images.filter(({ id }) => imageIDList.includes(id))
  console.log('KUY :', result)
  return <TeacherSlide imgSlide={result} {...rest} />
}
