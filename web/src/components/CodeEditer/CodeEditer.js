import Editor, { useMonaco } from '@monaco-editor/react'
import { useEffect } from 'react'
const mapLanguage = {
  javascript: 'JS',
  css: 'CSS',
  html: 'HTML',
}
const CodeEditer = ({
  file,
  code,
  fontSize = 18,
  isEditing,
  handleEditorChange,
}) => {
  const monaco = useMonaco()
  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('editing', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {
          'editor.background': '#1F1E1C',
        },
      })
      // my-theme 212328
      monaco.editor.defineTheme('playing', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {
          'editor.background': '#212328',
        },
      })
      monaco.editor.setTheme('playing')
    }
  }, [monaco])
  useEffect(() => {
    if (isEditing === true) {
      monaco?.editor.setTheme('editing')
    }
    if (isEditing === false) {
      monaco?.editor.setTheme('playing')
    }
  }, [isEditing, monaco?.editor])
  return (
    <div className="w-full h-full overflow-hidden">
      <Editor
        height="calc(-3rem + 100% )" // By default, it fully fits with its parent
        loading={<div>LOAD</div>}
        value={code[mapLanguage[file.language]]}
        onChange={handleEditorChange}
        disable={true}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: fontSize,
          cursorStyle: 'block',
          wordWrap: 'on',
        }}
      />
    </div>
  )
}

export default CodeEditer
