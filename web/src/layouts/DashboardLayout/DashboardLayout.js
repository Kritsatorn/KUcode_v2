import logo from 'web/public/logo_transparent.png'
import './DashBoardLayout.css'
const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-screen box-boarder flex flex-col   bg-zinc-50">
      <div className="headbar w-full h-16 py-1 px-5 text-sm flex justify-start items-center  ">
        {/* <img
            className="object-contain h-32 w-32"
            src="https://cdn.filestackcontent.com/zfWBSevBQy6oyAOoIM42"
            alt="logo"
          /> */}
        <div className="text-3xl">KU code</div>
        <div className="circ-pink mb-6"></div>

        <div
          className="ml-auto h-10 px-5  mr-4  text-white bg-violet-700
                        flex justify-center items-center cursor-pointer
                        transition-all duration-150  rounded-lg
                        hover:shadow-xxl hover:-translate-y-2 focus:shadow-outline font-semibold text-xl"
        >
          GO PRO !
        </div>
        <div className="ml-2 text-xl cursor-pointer">Contract US</div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default DashboardLayout
