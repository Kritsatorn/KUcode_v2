import { useState } from 'react'
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
  const [sorted, setSorted] = useState([])
  const [idx, setIdx] = useState(0)
  result.forEach((element) => {
    if (element.id === imageIDList[idx]) {
      setSorted((prev) => [...prev, element])
      setIdx((prev) => prev + 1)
    }
  })
  return <TeacherSlide imgSlide={sorted} {...rest} />
}
