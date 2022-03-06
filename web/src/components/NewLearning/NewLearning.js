import { useState } from 'react'
import NewImgAllListCell from 'src/components/NewImgAllListCell'
import NewImgListCell from 'src/components/NewImgListCell/NewImgListCell'

const NewLearning = () => {
  const [listImg, setListImg] = useState([])
  const [listImgAll, setListImgAll] = useState([1, 2, 3])
  const handleList = (list = [], setList = () => {}, newValue = '') => {
    !list.includes(newValue) && setList((prev) => [...prev, newValue])
  }
  return (
    <div className=" w-full h-full bg-cyan-500 ">
      {/* <NewImgAllListCell />
      <div>
        {listImgAll.map((img, index) => (
          <button
            key={index}
            className=" w-8 h-8 m-2 py-2 px-1 bg-orange-400 "
            onClick={() => handleList(listImg, setListImg, img)}
          >
            {img}
          </button>
        ))}
      </div>
      <div>
        listImg :
        {listImg.map((img, index) => (
          <span key={index}>{img}</span>
        ))}
      </div>
      <NewImgListCell imageIDList={listImg} /> */}
      <div className=" w-full h-1/6 bg-slate-500 ">TOP</div>
      <div className="w-full h-2/6 bg-indigo-800  ">
        <NewImgAllListCell />
      </div>
      <div className="w-full h-1/6  bg-teal-600">
        {' '}
        <div>
          {listImgAll.map((img, index) => (
            <button
              key={index}
              className=" w-8 h-8 m-2 py-2 px-1 bg-orange-400 "
              onClick={() => handleList(listImg, setListImg, img)}
            >
              {img}
            </button>
          ))}
        </div>
        <div>
          listImg :
          {listImg.map((img, index) => (
            <span key={index}>{img}</span>
          ))}
        </div>{' '}
      </div>
      <div className="w-full h-2/6  bg-amber-500">
        <NewImgListCell imageIDList={listImg} />
      </div>
    </div>
  )
}

export default NewLearning
