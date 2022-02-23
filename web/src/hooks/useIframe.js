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
          <script>${js}</script>
        </html>
      `
    )
  }
  return [iframeCode, upadteIframe]
}
export default useIframe
