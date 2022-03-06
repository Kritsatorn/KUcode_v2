import { useEffect, useState } from 'react'
import { useStateWithDep } from 'src/hooks/useStateWIthDep'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
const slidesImg = [
  {
    id: 1,
    title: 'slide 1',
    url: 'https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg',
  },
  {
    id: 2,
    title: 'slide 2',
    url: 'https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_1280.jpg',
  },
  {
    id: 3,
    title: 'slide 3',
    url: 'https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_1280.png',
  },
  {
    id: 4,
    title: 'slide 4',
    url: 'https://cdn.pixabay.com/photo/2016/04/25/07/49/man-1351346_1280.png',
  },
  {
    id: 5,
    title: 'slide 1',
    url: 'https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg',
  },
  {
    id: 6,
    title: 'slide 2',
    url: 'https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_1280.jpg',
  },
  {
    id: 7,
    title: 'slide 3',
    url: 'https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_1280.png',
  },
  {
    id: 8,
    title: 'slide 4',
    url: 'https://cdn.pixabay.com/photo/2016/04/25/07/49/man-1351346_1280.png',
  },
  {
    id: 9,
    title: 'slide 1',
    url: 'https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg',
  },
  {
    id: 10,
    title: 'slide 2',
    url: 'https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_1280.jpg',
  },
  {
    id: 11,
    title: 'slide 3',
    url: 'https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_1280.png',
  },
  {
    id: 12,
    title: 'slide 4',
    url: 'https://cdn.pixabay.com/photo/2016/04/25/07/49/man-1351346_1280.png',
  },
]
const DnDImages = ({ ImgList = [] }) => {
  const [listImg, setListImg] = useStateWithDep([...ImgList])
  const handelDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(listImg)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setListImg(items)
  }
  return (
    <div className=" w-full h-full bg-slate-500">
      <DragDropContext onDragEnd={handelDragEnd}>
        <Droppable droppableId="listImg" direction="horizontal">
          {(provided) => (
            <div
              className=" w-full h-full flex overflow-x-scroll "
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listImg.map(({ id, title, url }, index) => (
                <Draggable
                  key={JSON.stringify(id)}
                  draggableId={JSON.stringify(id)}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="  min-h-min min-w-min  m-2 bg-red-400"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="w-52"> {title} </div>

                      <img
                        src={url}
                        className="w-52 h-32 object-contain"
                        alt=""
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default DnDImages
