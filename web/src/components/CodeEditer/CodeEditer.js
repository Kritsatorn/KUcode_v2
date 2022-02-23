import Editor from '@monaco-editor/react'
// const initialCode = `
//   const myHeading = document.querySelector('h1');
//   myHeading.textContent = 'Hello world!';
// `
const CodeEditer = ({
  file,
  theme = 'vs-dark',
  // language = 'javascript',
  // code = initialCode,
  handleEditorDidMount,
  handleEditorChange,
}) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className=" w-full h-12 bg-skin-editerDark text-white flex">
        <div className="ml-10 mt-2">{file.name} </div>
        <div className="ml-auto">
          <button>PREVIEW</button>
          <button>RUN</button>
        </div>
      </div>
      <Editor
        height="calc(-3rem + 100% )" // By default, it fully fits with its parent
        theme={theme}
        // language={language}
        loading={<div>LOAD</div>}
        // value={code}
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
