import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import NewLearning from 'src/components/NewLearning'
const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <div className=" w-full h-full bg-slate-400 flex flex-col">
        <div className="bg-blue-500 flex-1 flex">
          <div className="bg-red-400  flex-1 h-full">SIDEbAR</div>
          <div className=" bg-purple-500 w-5/6 ">
            <NewLearning />
          </div>
        </div>
        <div className=" bg-orange-400 h-1/6 ">FOOTER</div>
      </div>
    </>
  )
}

export default DashboardPage
