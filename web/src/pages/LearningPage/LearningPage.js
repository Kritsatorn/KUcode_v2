import { MetaTags } from '@redwoodjs/web'
import Learning from 'src/components/Learning'
const LearningPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Learning" description="Learning page" />
      <div>{id}</div>
      <Learning />
    </>
  )
}

export default LearningPage
