import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import ImagesCell from 'src/components/Image/ImagesCell'
import NewLearning from 'src/components/NewLearning'
const DashboardPage = () => {
  const [listImg, setListImg] = useState([])
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <div className=" w-full h-full bg-slate-400 flex flex-col">
        {/* <ImagesCell />
        <Link to={routes.learningRecord({ imageIDList: [1, 2, 3] })}>
          to Record
        </Link> */}
        <div className="bg-blue-500 flex-1 flex">
          <div className="bg-red-400 w-1/6 h-full">SIDEbAR</div>
          <div className=" bg-purple-500 flex-1">
            <NewLearning />
          </div>
        </div>
        <div className=" bg-orange-400 h-1/6 ">FOOTER</div>
      </div>
    </>
  )
}

export default DashboardPage
