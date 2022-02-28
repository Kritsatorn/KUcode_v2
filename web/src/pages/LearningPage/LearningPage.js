import { MetaTags } from '@redwoodjs/web'
import Learning from 'src/components/Learning'
import { useQuery } from '@redwoodjs/web'
import { useEffect } from 'react'
import LearningCell from 'src/components/LearningCell'
const QUERY_LEARNING = gql`
  query FindLearningQuery($input: Int!) {
    learning(id: $input) {
      id
      name
      typingList {
        id
      }
    }
  }
`
const LearningPage = ({ id }) => {
  const { loading, error, data } = useQuery(QUERY_LEARNING, {
    variables: { input: id },
  })
  useEffect(() => {
    console.log('q : ', data)
    // console.log('query', queryLearning({ variables: { id: id } }))
  }, [data])
  return (
    <>
      <MetaTags title="Learning" description="Learning page" />
      <Learning />
    </>
  )
}

export default LearningPage
