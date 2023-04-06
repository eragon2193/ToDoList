import { add } from "date-fns"
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
const UI = UIloader(contentDiv)

class TaskCard {
  constructor(title, description,date){
    this.title = title
    this.description = description
    this.date = date
    this.priority = null;
    this.group = null;
  }
}
importantTasks.addEventListener('click', () => {
  UI.Urgent(tasks)
})
allTasks.addEventListener('click', () => {
  UI.All(tasks)
})

addButton.addEventListener('click', () => {
  console.log(tasks)
  body.append(newTaskButton())
})



