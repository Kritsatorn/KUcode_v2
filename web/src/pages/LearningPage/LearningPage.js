import { MetaTags } from '@redwoodjs/web'
import LearningCell from 'src/components/LearningCell'
const LearningPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Learning" description="Learning page" />
      <LearningCell learningId={id} id={id} />
    </>
  )
}

export default LearningPage
