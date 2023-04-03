import { add } from "date-fns"
import UIloader from "./loadInterface"

// To do Tasks:
// Small header that says Organizer/todolist/smth similar
// sidebar on the left with buttons like add etc
// big scrollable list of cards with title and a date that open when you hover over them 

const contentDiv = document.getElementById('content')
const addButton = document.getElementById('add-btn')
const UI = UIloader()

class TaskCard {
  constructor(title, description,date){
    this.title = title
    this.description = description
    this.date = date
    this.priority = null;
    this.group = null;
  }
}

addButton.addEventListener('click', () => {
  const addInterface = document.createElement('div')
  addInterface.classList.add('add-interface')
  const body = document.body
  const btn = document.createElement('button')
  btn.innerHTML = 'x'
  btn.type = 'button'
  btn.classList.add('close-btn')
  btn.addEventListener('click', () => {
    addInterface.remove()
  })
  addInterface.append(btn)
  body.append(addInterface);
})


