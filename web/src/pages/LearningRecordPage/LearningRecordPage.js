import { MetaTags } from '@redwoodjs/web'
import LearningRecord from 'src/components/LearningRecord/LearningRecord'
const LearningRecordPage = () => {
  return (
    <>
      <MetaTags title="LearningRecord" description="LearningRecord page" />

      <LearningRecord />
    </>
  )
}

export default LearningRecordPage
