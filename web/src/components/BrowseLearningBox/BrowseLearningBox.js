import { BsPlayCircle } from 'react-icons/bs'
import { navigate, routes } from '@redwoodjs/router'
// import bg1 from './bg1.svg'
const bgLearning = [
  {
    imgBg: '/SVGs/bg1.svg',
    title: 'LEARN FOR FREE',
  },
  {
    imgBg: '/SVGs/bg2.svg',
    title: 'Introduction for Web',
  },
  {
    imgBg: '/SVGs/bg3.svg',
    title: 'Developer Careers Path',
  },
]
const BrowseLearningBox = ({
  id = 26,
  title = 'SECTION 1 : BUILD INCREMENT BUTTON',
  description = 'Cotinue Learning',
  percentage = Math.floor(Math.random() * 100),
}) => {
  return (
    <div className="flex">
      {/* {console.log('diaksd', bg1)} */}
      <div className=" w-64 h-40 bg-slate-50 p-1 ">
        <div className="h-full w-full  hover:bg-opacity-50 text-slate-600 hover:text-slate-700/20 relative">
          <img
            className="absolute z-10  h-full w-full left-0 top-0"
            src={bgLearning[Math.floor(Math.random() * 3)].imgBg}
            alt=""
          />
          <div className="absolute z-20  h-full w-full left-0 top-0 text-3xl font-bold">
            <div className="mt-12 ml-4 float-right text-right mr-2">
              {bgLearning[Math.floor(Math.random() * 3)].title}
            </div>
          </div>
          <button
            className={`  h-full w-full absolute z-30 left-0 top-0
                          flex justify-center items-center
                          transition-all  text-indigo-900 cursor-pointer
                          opacity-0 hover:opacity-80
                        `}
            onClick={() => navigate(routes.learning({ id: id }))}
          >
            <BsPlayCircle size={'80px'} />
          </button>
        </div>
      </div>
      <div className=" w-64 h-40 bg-white pt-1 pr-3 pb-3 pl-3 ">
        <div className="w-full h-full flex flex-col ">
          <p className="text-xs underline underline-offset-2">{title}</p>
          <p className="text-xs">{description}</p>
          <div className=" mt-auto  w-full border-t-2 text-xs border-black">
            <span className="font-bold">{percentage}%</span> of Learning
            Complete
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseLearningBox
