import { MetaTags } from '@redwoodjs/web'
import Learning from 'src/components/Learning'
const LearningPage = () => {
  return (
    <>
      <MetaTags title="Learning" description="Learning page" />
      <Learning />
      {/*
      <div className=" w-full h-screen box-boarder bg-red-300 flex flex-col">
        <div className="headbar w-full h-10 py-1 px-5 text-sm flex justify-start items-center bg-skin-base text-white">
          <span className="icon text-2xl mt-1 mx-3">
            <FiCodesandbox />
          </span>

          <span>KU code</span>
          <span className="cutoff-path mx-3"> / </span>
          <span>The Frontend Developer Career Path</span>
          <span className="profile ml-auto text-2xl">
            <CgProfile />
          </span>
        </div>
        <div className="flex-1">
          <Learning />
        </div>
      </div> */}
    </>
  )
}

export default LearningPage
