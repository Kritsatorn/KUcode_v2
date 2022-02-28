import { MetaTags } from '@redwoodjs/web'
import LearningRecord from 'src/components/LearningRecord'
const LearningRecordPage = ({ imageIDList }) => {
  return (
    <>
      <MetaTags title="LearningRecord" description="LearningRecord page" />
      {console.log('props from ashb :', imageIDList)}
      <LearningRecord />
    </>
  )
}

export default LearningRecordPage
