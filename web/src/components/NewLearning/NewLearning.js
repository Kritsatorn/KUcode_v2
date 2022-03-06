import { useEffect, useState } from 'react'
import NewImgAllListCell from 'src/components/NewImgAllListCell'
import NewImgListCell from 'src/components/NewImgListCell/NewImgListCell'
import { PickerDropPane } from 'filestack-react'
import DnDImages from 'src/components/DnDImages'
const TEXT_GREETING = 'Welcome back, Kritsatorn Saengwenag '
const TEXT_SLIDE = 'Your tools'
const NewLearning = () => {
  const [listImg, setListImg] = useState([1, 2, 3])
  const [listImgAll, setListImgAll] = useState([1, 2, 3])
  const handleList = (list = [], setList = () => {}, newValue = '') => {
    !list.includes(newValue) && setList((prev) => [...prev, newValue])
  }
  //  [ {  title: "" , url : "" } ]
  const [uploadList, setUploadList] = useState([])
  const [nameLearning, setNameLearning] = useState('')
  const [countUpload, setCountUpload] = useState(0)
  const handleUpload = (response) => {
    const newUpload = {
      id: countUpload,
      title: `Slide ${countUpload + 1} `,
      url: response.filesUploaded[0].url,
    }
    setUploadList((prev) => [...prev, newUpload])
    setCountUpload((prev) => prev + 1)
  }
  const deleteUploadList = () => {}
  useEffect(() => {
    console.log('HEE TAD', uploadList)
  }, [uploadList])
  return (
    <div className=" w-full h-full bg-green-100 ">
      <div className=" w-full h-1/6  flex justify-start items-center ">
        {/* <div className="text-3xl font-extrabold opacity-90">
          {TEXT_GREETING}
        </div> */}
        <div className="text-3xl  opacity-90">{TEXT_SLIDE}</div>
      </div>

      <div className="w-full h-2/6">
        <div className=" w-full h-1/3 flex  justify-start items-center">
          <div className=" m-4  text-xl "> Name of New Learning : </div>
          <input
            className="w-1/2 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Enter Name of New Learning"
            value={nameLearning}
            onChange={(event) => setNameLearning(event.target.value)}
          />
        </div>
        <div className=" w-full px-8 h-2/3  ">
          <PickerDropPane
            apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
            onSuccess={handleUpload}
            pickerOptions={{ imageMax: [1800, 1000] }}
          ></PickerDropPane>
        </div>
      </div>
      <div className="w-full h-2/6  flex flex-col">
        <div className="text-2xl opacity-80 ">Sorting Things Out</div>
        <div className="flex-1">
          <DnDImages ImgList={uploadList} />
        </div>
      </div>
      <div className="w-full h-1/6 flex-shrink">
        <div className="mt-4 w-full text-right">
          <button
            className="h-10 px-5 mt-8 mr-4 text-white transition-all duration-150 bg-btn-blue rounded-lg
                      hover:shadow-xxl hover:-translate-y-2 focus:shadow-outline font-semibold text-xl "
            onClick={''}
          >
            Regular
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewLearning
