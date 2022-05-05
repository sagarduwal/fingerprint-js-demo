// See index.html

document.body.appendChild(document.createTextNode('See the Console'))

// StackBlitz breaks the `onload` attribute of the script: https://github.com/stackblitz/core/issues/1426
document.querySelectorAll('head + head script[src]').forEach(script => {
  const newScript = document.createElement('script')
  Array.prototype.forEach.call(script.attributes, ({ name, value }) => newScript.setAttribute(name, value))
  script.parentNode.insertBefore(newScript, script)
  script.parentNode.removeChild(script)
})

// Why no unhandledrejection handler here: https://stackoverflow.com/q/40026381/1118709
