function wrapTag (str, tag) {
  return `<${tag}>${str}</${tag}>`
}

const result = wrapTag('Hello world', 'p')
console.log(result)