import { Rnd } from 'react-rnd'
import { FaCircle } from 'react-icons/fa'
import { useRef } from 'react'
const style = {
  overflow: 'hidden',
  overflowX: 'hidden',
  border: 'solid 1px #ddd',
  background: 'gray',
  zIndex: 99,
  borderRadius: '4px',
  // transition: 'all 0.5s linear',
}
const initialCode = `
  <!DOCTYPE html>
  <html>
    <body>

      <h1>My First Heading</h1>
      <p>My first paragraph.</p>

    </body>
  </html>
`
const defaultSize = { width: 320, height: 350 }
const defaultBigSize = { width: 520, height: 550 }
const defaultPosition = { x: 1100, y: 100 }
const defaultBigPosition = { x: 900, y: 50 }
const DnDIframe = ({ compiledCode = initialCode, isOpen, setClose }) => {
  const rnd = useRef(null)
  return (
    <div className={`${isOpen ? '' : ' invisible'}`}>
      <Rnd
        style={style}
        ref={rnd}
        default={{
          x: 1100,
          y: 100,
          width: 320,
          height: 350,
        }}
      >
        <div className="w-full h-8 fixed left-0 top-0 bg-skin-headIframe pl-2 text-sm flex items-center">
          <button className="mx-1 text-red-400" onClick={() => setClose()}>
            <FaCircle />
          </button>
          <button
            className="mx-1 text-yellow-400"
            onClick={() => {
              rnd.current.updateSize({ ...defaultSize })
              rnd.current.updatePosition({ ...defaultPosition })
            }}
          >
            <FaCircle />
          </button>
          <button
            className="mx-1 text-green-400"
            onClick={() => {
              rnd.current.updateSize({ ...defaultBigSize })
              rnd.current.updatePosition({ ...defaultBigPosition })
            }}
          >
            <FaCircle />
          </button>
        </div>
        <iframe
          className="pt-8"
          srcDoc={compiledCode}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="calc(100% )"
        />
      </Rnd>
    </div>
  )
}

export default DnDIframe
