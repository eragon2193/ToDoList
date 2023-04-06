 export default function UIloader(content) {
  function clear() {
    while(content.firstChild){
      content.removeChild(content.firstChild)
     }}
  function cardDiv(x, div) {
    const prio = document.createElement('p')
    prio.classList.add('prio-card')
    prio.innerHTML = x.priority
    const date = document.createElement('p')
    date.classList.add('date-card')
    date.innerHTML = x.date
    const title = document.createElement('h4')
    title.classList.add('title-card')
    title.innerHTML = x.title
    const desc = document.createElement('p')
    desc.classList.add('description-card')
    desc.innerHTML = x.description
    const colors = ['','#b0cc70','#c0cc70','#ccbd70', '#cc8c70','#cc7070']
    const color =  colors.filter((color,index) => {
      if(index == x.priority){return color}
    })
    console.log(color)
    div.style.backgroundColor = color[0]
    div.append(title,desc,prio,date)
    
  }
  function Urgent(arr) {
    clear()
    arr.filter((x) => {
      return Number(x.priority) >= 4
    }).sort((x,b) => {
      Number(x.priority) > Number(b.priority)
    })
    .forEach((x) => {
      const div = document.createElement('div')
      div.classList.add('task-card')
      cardDiv(x,div)
      content.append(div)
    })
  }
  function Today(arr) {
    console.log(5)
  }
  function Week(arr){

  }
  function All(array){
    clear()
    array.forEach((x) => {
      const div = document.createElement('div')
      div.classList.add('task-card')
      cardDiv(x,div)
      content.append(div)
    })

  }
  function Group(){

  }
  return {Urgent, Today, Week, All, Group}
}
