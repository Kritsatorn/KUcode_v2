import { useState } from 'react'
import { PickerDropPane } from 'filestack-react'
import DnDImages from 'src/components/DnDImages'
import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
const TEXT_GREETING = 'Welcome back, Kritsatorn Saengwenag '
const TEXT_SLIDE = 'Your tools'
const CREATE_IMAGE_MUTATION = gql`
  mutation CreateImageMutation($input: CreateImageInput!) {
    createImage(input: $input) {
      id
    }
  }
`
const NewLearning = () => {
  //  [ {  title: "" , url : "" } ]
  const [uploadList, setUploadList] = useState([])
  const [nameLearning, setNameLearning] = useState('')
  const [countUpload, setCountUpload] = useState(0)
  const [upLoadListAPI, setUpLoadListAPI] = useState([])
  const handleUpload = (response) => {
    const newUpload = {
      id: countUpload,
      title: `Slide ${countUpload + 1} `,
      url: response.filesUploaded[0].url,
    }
    setUploadList((prev) => [...prev, newUpload])
    setCountUpload((prev) => prev + 1)
  }
  const deleteUploadList = (id, setUploadList) => {
    setUploadList((prev) => prev.filter((up) => up.id !== id))
  }
  const [createImage, { loading }] = useMutation(CREATE_IMAGE_MUTATION, {
    onCompleted: (data) => {
      setUpLoadListAPI((prev) => [...prev, data?.createImage?.id])
      console.log(data?.createImage?.id)
      console.log('UP list ', upLoadListAPI)
    },
    onError: (error) => {
      console.log(error)
    },
  })
  const onUploadSlide = (uploadList = [], createImage) => {
    uploadList.forEach((upload) => {
      createImage({
        variables: { input: { title: upload.title, url: upload.url } },
      })
    })
  }
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
            className={`
                        h-10 px-5 mt-8 mr-4 text-white transition-all duration-150  rounded-lg
                        hover:shadow-xxl hover:-translate-y-2 focus:shadow-outline font-semibold text-xl
                        ${
                          upLoadListAPI.length === 0 ||
                          upLoadListAPI.length !== countUpload
                            ? 'bg-btn-blue'
                            : ' bg-red-500'
                        }
                      `}
            onClick={
              upLoadListAPI.length === 0 || upLoadListAPI.length !== countUpload
                ? () => onUploadSlide(uploadList, createImage)
                : () => {
                    navigate(
                      routes.learningRecord({
                        imageIDList: [...upLoadListAPI],
                        learningName: nameLearning,
                      })
                    )
                  }
            }
            disabled={loading}
          >
            {upLoadListAPI.length === 0 || upLoadListAPI.length !== countUpload
              ? 'Create Learning'
              : 'Go to Record'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewLearning
