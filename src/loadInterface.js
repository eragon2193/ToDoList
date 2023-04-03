 UIloader = () => {
  const content = document.getElementById('')
  function clear() {
    while(content.firstChild){
      content.removeChild(content.firstChild)
     }}
  function Today() {
    console.log(1)
  }
  function Week(){

  }
  function All(array){
    array.forEach((x) => {
      const div = document.createElement('div')
      div.classList.add('task-card')
      content.append(div)
    })

  }
  function Group(){

  }
}
