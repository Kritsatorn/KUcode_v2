import BrowseLearningCell from 'src/components/BrowseLearningCell'
import BrowseLearningBox from 'src/components/BrowseLearningBox'

const BrowseLearning = () => {
  return (
    <div className="h-full w-full  flex flex-col ">
      <div className="flex-1 flex items-end">
        <div className="mt-auto pb-8 text-2xl "> All of Your Teachings</div>
      </div>

      <div className=" w-full h-kuy max-h-kuy  pl-12  flex flex-wrap gap-x-8 gap-y-4  overflow-y-scroll relative">
        <BrowseLearningCell />
      </div>
    </div>
  )
}

export default BrowseLearning
