import Editor from '@monaco-editor/react'
// const initialCode = `
//   const myHeading = document.querySelector('h1');
//   myHeading.textContent = 'Hello world!';
// `
const mapLanguage = {
  javascript: 'JS',
  css: 'CSS',
  html: 'HTML',
}
const CodeEditer = ({
  file,
  theme = 'vs-dark',
  // language = 'javascript',
  code,
  handleEditorDidMount,
  handleEditorChange,
}) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Editor
        height="calc(-3rem + 100% )" // By default, it fully fits with its parent
        theme={theme}
        // language={language}
        loading={<div>LOAD</div>}
        value={code[mapLanguage[file.language]]}
        editorDidMount={handleEditorDidMount}
        onChange={handleEditorChange}
        disable={true}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </div>
  )
}

export default CodeEditer
