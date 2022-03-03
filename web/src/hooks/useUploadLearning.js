import { useState, useEffect } from 'react'
import { useMutation } from '@redwoodjs/web'
const CREATE_TPYPING = gql`
  mutation CreateTypingMutation($input: CreateTypingScriptInput!) {
    createTypingScript(input: $input) {
      id
    }
  }
`
const CREATE_SIDEBAR = gql`
  mutation CreateSideBarMutation($input: CreateSideBarScriptInput!) {
    createSideBarScript(input: $input) {
      id
    }
  }
`
const CREATE_SLIDE = gql`
  mutation CreateSlideMutation($input: CreateSlideScriptInput!) {
    createSlideScript(input: $input) {
      id
    }
  }
`
const CREATE_CURSOR = gql`
  mutation CreateCursorMutation($input: CreateCursorScriptInput!) {
    createCursorScript(input: $input) {
      id
    }
  }
`
const CREATE_LEARNING = gql`
  mutation CreateLearningMutation($input: CreateLearningInput!) {
    createLearning(input: $input) {
      id
    }
  }
`
const UPDATE_IMAGES = gql`
  mutation UpdateImagesMutation($id: Int!, $input: UpdateImageInput!) {
    updateImage(id: $id, input: $input) {
      id
    }
  }
`

const useUploadLearning = () => {
  const [flagTP, setFlagTP] = useState(false)
  const [createTyping] = useMutation(CREATE_TPYPING, {
    onCompleted: () => {
      setFlagTP(true)
    },
    onError: (error) => {
      console.log('Upload Typing error : ', error)
    },
  })
  const [flagSB, setFlagSB] = useState(false)
  const [createSideBar] = useMutation(CREATE_SIDEBAR, {
    onCompleted: () => {
      setFlagSB(true)
    },
    onError: (error) => {
      console.log('Upload sidebar error : ', error)
    },
  })
  const [flagSL, setFlagSL] = useState(false)
  const [createSlide] = useMutation(CREATE_SLIDE, {
    onCompleted: () => {
      setFlagSL(true)
    },
    onError: (error) => {
      console.log('Upload slide error : ', error)
    },
  })
  const [flagCS, setFlagCS] = useState(false)
  const [createCursor] = useMutation(CREATE_CURSOR, {
    onCompleted: () => {
      setFlagCS(true)
    },
    onError: (error) => {
      console.log('Upload cursor error : ', error)
    },
  })
  const [flagIMG, setFlagIMG] = useState(false)
  const [updateImages] = useMutation(UPDATE_IMAGES, {
    onCompleted: () => {
      setFlagIMG(true)
    },
    onError: (error) => {
      console.log('Upload img error : ', error)
    },
  })

  // Actually Update
  const uploadImages = (imageList = [], learningID = 1) => {
    imageList.forEach((imgId) => {
      const Input = {
        learningId: learningID,
      }
      updateImages({
        variables: {
          id: imgId,
          input: { ...Input },
        },
      })
    })
  }
  const uploadCursor = (cursorList = [], learningID = 1) => {
    cursorList.forEach((cursor, index) => {
      const Input = {
        order: index,
        timeDiff: cursor.timeDiff.toString(),
        positionX: cursor.value.x,
        positionY: cursor.value.y,
        hidden: cursor.value.hidden,
        learningId: learningID,
      }
      createCursor({
        variables: {
          input: { ...Input },
        },
      })
    })
  }
  const uploadSlide = (slideList = [], learningID = 1) => {
    slideList.forEach((slide, index) => {
      const Input = {
        order: index,
        timeDiff: slide.timeDiff.toString(),
        isOpen: slide.value.isOpen,
        PageNumber: slide.value.PageNumber,
        learningId: learningID,
      }
      createSlide({
        variables: {
          input: { ...Input },
        },
      })
    })
  }
  const uploadSidebar = (sidebarList = [], learningID = 1) => {
    sidebarList.forEach((sidebar, index) => {
      const Input = {
        order: index,
        timeDiff: sidebar.timeDiff.toString(),
        value: sidebar.value,
        learningId: learningID,
      }
      createSideBar({
        variables: {
          input: { ...Input },
        },
      })
    })
  }
  const uploadTyping = (typingList = [], learningID = 1) => {
    typingList.forEach((typing, index) => {
      const Input = {
        order: index,
        timeDiff: typing.timeDiff.toString(),
        css: typing.value.CSS,
        html: typing.value.HTML,
        js: typing.value.JS,
        learningId: learningID,
      }
      createTyping({
        variables: {
          input: { ...Input },
        },
      })
    })
  }

  const [complete, setComplete] = useState(false)
  const [Payload, setPayload] = useState(null)
  const [LID, setLID] = useState(null)
  useEffect(() => {
    setComplete(flagTP && flagSB && flagSL && flagCS && flagIMG)
  }, [flagTP, flagSB, flagSL, flagCS, flagIMG])

  const [createLearning] = useMutation(CREATE_LEARNING, {
    onCompleted: (data) => {
      setLID(() => data.createLearning.id)
    },
    onError: (error) => {
      console.log('Upload learning error : ', error)
    },
  })
  const uploadLearning = (name, audioURL) => {
    const Input = {
      name: name,
      audioURL: audioURL,
    }
    return createLearning({
      variables: {
        input: { ...Input },
      },
    })
  }
  useEffect(() => {
    if (LID === null || Payload === null || complete === true) return
    uploadImages(Payload.imageList, LID)
    uploadCursor(Payload.cursorList, LID)
    uploadSlide(Payload.slideList, LID)
    uploadSidebar(Payload.sidebarList, LID)
    uploadTyping(Payload.typingList, LID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LID, complete, Payload])
  const initialPayload = {
    name: 'name 1',
    audioURL: 'sd',
    imageList: [4],
    cursorList: [],
    slideList: [],
    sidebarList: [],
    typingList: [],
  }
  const upload = (payload = initialPayload) => {
    uploadLearning(payload.name, payload.audioURL)
    setPayload(payload)
  }
  return [upload, complete]
}
export default useUploadLearning
