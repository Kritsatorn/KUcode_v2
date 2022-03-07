import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import NewLearning from 'src/components/NewLearning'
import BrowseLearning from 'src/components/BrowseLearning'
const TEXT_GREETING = 'Welcome back, Kritsatorn Saengwenag '
const DashboardPage = () => {
  const [tab, setTab] = useState(0)
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />
      {/* <div className="text-3xl font-extrabold opacity-90">
          {TEXT_GREETING}
        </div> */}
      <div className=" w-full h-full max-h-full bg-palettes-mint ">
        <div className="h-5/6  ">
          <div className="w-1/6 float-left h-full">
            <div className=" mt-24 ml-4 opacity-70 tracking-tight leading-8">
              <button
                className={`my-6 ${
                  tab === 0
                    ? 'font-bold underline underline-offset-8 decoration-4'
                    : ''
                }`}
                onClick={() => setTab(0)}
              >
                Knowledge Dealers
              </button>

              <button
                className={`my-6 ${
                  tab === 1
                    ? 'font-bold underline underline-offset-8 decoration-4'
                    : ''
                }`}
                onClick={() => setTab(1)}
              >
                New Learning
              </button>
            </div>
          </div>

          <div className=" w-5/6 h-full float-right ">
            {tab === 0 && <BrowseLearning />}
            {tab === 1 && <NewLearning />}
          </div>
        </div>
        <div className=" bg-palettes-dark-green h-1/6 ">FOOTER</div>
      </div>
    </>
  )
}

export default DashboardPage
