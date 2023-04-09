import { getUnixTime, compareAsc,isSameDay } from "date-fns"
import { newTaskButton, tasks } from "./addButtons"
import UIloader from "./loadInterface"


// To do Tasks:
// Small header that says Organizer/todolist/smth similar
// sidebar on the left with buttons like add etc
// big scrollable list of cards with title and a date that open when you hover over them 
const contentDiv = document.getElementById('content')
const body = document.body
const addButton = document.getElementById('add-btn')
const allTasks = document.getElementById('all-tasks')
const importantTasks = document.getElementById('important')
const todayTasks = document.getElementById('today')
const weekTasks = document.getElementById('week')
const UI = UIloader(contentDiv)
const sortBtn = document.getElementById('sorting-selection')
const defaultTasks = tasks
let selectedTab = 'All'
tasks.sort((a,b) => {
  return a.addDate - b.addDate
})
UI.All(tasks)
export default class TaskCard {
  constructor(title, description,date,priority,group){
    this.title = title
    this.description = description
    this.date = date
    this.priority = priority;
    this.group = group 
    this.addDate = getUnixTime(new Date())
  }
}
importantTasks.addEventListener('click', () => {
  UI.Urgent(tasks)
  selectedTab = 'Urgent'
})
allTasks.addEventListener('click', () => {
  UI.All(tasks)
  selectedTab = 'All'
})
todayTasks.addEventListener('click', () => {
  UI.Today(tasks)
})
weekTasks.addEventListener('click', () => {
  UI.Week(tasks)
})

addButton.addEventListener('click', () => {
  body.append(newTaskButton())
})

sortBtn.addEventListener('change', () => {
  switch(sortBtn.value){
    case 'date':
      tasks.sort((a,b) => {
        return UI.dateComparison(a.date,b.date)
       })
       break;
    case 'prio':
      tasks.sort((a,b) => {
        return b.priority - a.priority
      })
      break;
    case 'default':
      tasks.sort((a,b) => {
        return a.addDate - b.addDate
      })
      break;
  }
  sortSwitch()
 })

export function sortSwitch(){
  switch(selectedTab){
    case 'All':
      UI.All(tasks)
      break
    case 'Urgent':
      UI.Urgent(tasks)
      break
  }
}



