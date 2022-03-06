import { CgProfile } from 'react-icons/cg'
import { FiCodesandbox } from 'react-icons/fi'
const LearningLayout = ({ children }) => {
  return (
    <>
      <div className=" w-full h-screen box-boarder bg-red-300 flex flex-col">
        <div className="headbar w-full h-10 py-1 px-5 text-sm flex justify-start items-center bg-skin-base text-white">
          <span className=" text-2xl mt-1 mx-3">
            <FiCodesandbox />
          </span>

          <span>KU code</span>
          <span className="cutoff-path mx-3"> / </span>
          <span>The Frontend Developer Career Path</span>
          <span className="profile ml-auto text-2xl">
            <CgProfile />
          </span>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  )
}

export default LearningLayout
