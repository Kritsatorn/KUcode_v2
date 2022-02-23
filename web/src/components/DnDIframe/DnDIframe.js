import { Rnd } from 'react-rnd'
import { FaCircle } from 'react-icons/fa'

const style = {
  overflow: 'hidden',
  overflowX: 'hidden',
  border: 'solid 1px #ddd',
  background: 'gray',
  zIndex: 2,
  borderRadius: '4px',
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

const DnDIframe = ({ compiledCode = initialCode }) => {
  return (
    <div>
      <Rnd
        style={style}
        default={{
          x: 1100,
          y: 100,
          width: 320,
          height: 350,
        }}
      >
        <div className="iframe-headbar w-full h-8 fixed left-0 top-0 bg-skin-headIframe pl-2 text-sm flex items-center ">
          <div className="btn-iframe btn-close mx-1 ">
            <FaCircle />
          </div>
          <div className="btn-iframe btn-min mx-1">
            <FaCircle />
          </div>
          <div className="btn-iframe btn-max mx-1">
            <FaCircle />
          </div>
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
