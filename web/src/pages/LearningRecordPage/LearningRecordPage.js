import { MetaTags } from '@redwoodjs/web'
import LearningRecord from 'src/components/LearningRecord'
const LearningRecordPage = ({ imageIDList }) => {
  return (
    <>
      <MetaTags title="LearningRecord" description="LearningRecord page" />
      <LearningRecord imageIDList={imageIDList} />
    </>
  )
}

export default LearningRecordPage
