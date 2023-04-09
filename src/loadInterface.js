 import { compareAsc, isSameDay, isSameWeek } from "date-fns"
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
    function sortPrio(a,b){
      return a - b
    }
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
    clear()
    const filteredArr = arr.filter((x) => {
      const dateFormat = x.date.split('-')
      console.log(new Date(dateFormat[0],dateFormat[1] - 1,dateFormat[2]))
      return isSameDay(new Date(dateFormat[0],dateFormat[1] - 1,dateFormat[2]), new Date()) 
    })
    filteredArr.forEach((x) => {
      const div = document.createElement('div')
      div.classList.add('task-card')
      cardDiv(x,div)
      content.append(div)
    })
  }
  function Week(arr){
    clear()
    const filteredArr = arr.filter((x) => {
      const dateFormat = x.date.split('-')

      return isSameWeek(new Date(dateFormat[0],dateFormat[1] - 1,dateFormat[2]), new Date()) 
    })
    filteredArr.forEach((x) => {
      const div = document.createElement('div')
      div.classList.add('task-card')
      cardDiv(x,div)
      content.append(div)
    })
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
  function Group(currentGroup,arr){
    arr.filter((x) => {
      return x.group === currentGroup
    })
  }
  function dateComparison(date1, date2)
  {
    const dateOne = date1.split('-')
    const dateTwo = date2.split('-')
    const dateOneFormat = new Date(new Date(Number(dateOne[0]),Number(dateOne[1]) - 1,Number(dateOne[2])))
    const dateTwoFormat = new Date(new Date(Number(dateTwo[0]),Number(dateTwo[1]) - 1,Number(dateTwo[2])))
    return compareAsc(dateOneFormat,dateTwoFormat)
  }
  return {dateComparison, Urgent, Today, Week, All, Group}
}
