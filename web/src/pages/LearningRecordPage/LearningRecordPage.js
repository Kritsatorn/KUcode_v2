import { MetaTags } from '@redwoodjs/web'
import LearningRecord from 'src/components/LearningRecord'
const LearningRecordPage = ({ imageIDList, learningName }) => {
  return (
    <>
      <MetaTags title="LearningRecord" description="LearningRecord page" />
      <LearningRecord imageIDList={imageIDList} learningName={learningName} />
    </>
  )
}

export default LearningRecordPage
