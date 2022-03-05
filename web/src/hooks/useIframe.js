import { useState } from 'react'

const useIframe = () => {
  const [iframeCode, setIframeCode] = useState('')
  const upadteIframe = (html, css, js) => {
    setIframeCode(
      `
      <!DOCTYPE html>
        <html>
          <body> HAHA ${html}</body>
          <style>${css}</style>

          <script>
            const originalLog = console.log;
            console.log = (...args) => {
              parent.window.postMessage({ type: 'log', args: args }, '*')
              originalLog(...args)
            };

            ${js}
          </script>
        </html>
      `
    )
  }
  return [iframeCode, upadteIframe]
}
export default useIframe
