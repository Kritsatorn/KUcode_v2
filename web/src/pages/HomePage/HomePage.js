import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className=" w-full h-screen box-boarder bg-red-300 flex flex-col ">
        <div className="headbar w-full h-10 py-1 px-5 text-sm flex justify-start items-center bg-skin-base text-white">
          <span className="icon text-2xl mt-1 mx-3">A</span>

          <span>KU code</span>
          <span className="cutoff-path mx-3"> / </span>
          <span>The Frontend Developer Career Path</span>
          <span className="profile ml-auto text-2xl">B</span>
        </div>
        <div className=" flex-1  bg-red-400 flex">
          <div className=" min-h-0 w-48 bg-green-200 ">SIDEVAER</div>
          <div className=" flex-1 bg-green-700 ">SIDEVAER</div>
        </div>
      </div>
    </>
  )
}

export default HomePage
