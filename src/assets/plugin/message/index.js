export default {
  info: (text) => {
    const para = document.createElement('p')
    const node = document.createTextNode(text)
    para.appendChild(node)
    para.classList.add('m-message')
    document.getElementsByTagName('body')[0].appendChild(para)
    window.setTimeout(() => {
      document.getElementsByTagName('body')[0].removeChild(document.getElementsByClassName('m-message')[0])
    }, 5000)
  }
}
