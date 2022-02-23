const someJSCodeExample = `
 document.body.style.backgroundcolor = red;
`

const someCSSCodeExample = `
 body {
   color : yellow;
 }
`

const someHTMLCodeExample = `
  <h1>HELLO WORLD</h1>
  <div> HIII EVERYONE </div>
`

const files = {
  'script.js': {
    name: 'script.js',
    language: 'javascript',
    value: someJSCodeExample,
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: someCSSCodeExample,
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: someHTMLCodeExample,
  },
}

export default files
