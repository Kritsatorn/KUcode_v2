import { useState } from 'react'
import NewImgAllListCell from 'src/components/NewImgAllListCell'
import NewImgListCell from 'src/components/NewImgListCell/NewImgListCell'

const NewLearning = () => {
  const [listImg, setListImg] = useState([1, 2])
  return (
    <div className=" w-full h-full bg-cyan-500 ">
      <NewImgAllListCell />

      <NewImgListCell imageIDList={listImg} />
    </div>
  )
}

export default NewLearning
