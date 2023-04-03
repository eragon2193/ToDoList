 export default function UIloader() {
  const content = document.getElementById('')
  function clear() {
    while(content.firstChild){
      content.removeChild(content.firstChild)
     }}
  function Today(arr) {
    console.log(5)
  }
  function Week(arr){

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
  return {Today, Week, All, Group}
}
