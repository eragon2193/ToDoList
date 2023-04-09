import TaskCard from "./app"
import { sortSwitch } from "./app"

export const tasks = [
  {
    date:'2024-12-24',
    priority: '1',
    title: 'cycling',
    description:'Learn how to cycle until next 2025',
    addDate: 1681041807
  },
  {
    date:'2023-07-04',
    priority:'4',
    title:'todolist',
    description:'Work on my Odin ToDoList',
    addDate: 1681045999
  },
  {
    date:'2023-04-09',
    priority:'5',
    title:'todolist',
    description:'Work on my Odin ToDoList',
    addDate: 1681041000
  },
  {
    date:'2023-04-10',
    priority:'3',
    title:'todolist',
    description:'Work on my Odin ToDoList',
    addDate: 1671041807
  }
]
export function newTaskButton(){
const form = document.createElement('form')
form.action = '../src/data.json'
form.method = 'POST'
const titleLabel = document.createElement('label')
titleLabel.htmlFor = 'title'
titleLabel.innerText = 'Title:'
const titleInput = document.createElement('input')
titleInput.id = 'title'
titleInput.name = 'title'
const dateLabel = document.createElement('label')
dateLabel.htmlFor = 'date'
dateLabel.innerText = 'Due Date:'
const dateInput = document.createElement('input')
dateInput.id = 'date'
dateInput.type = 'date'
dateInput.name = 'date'
const descriptionLabel = document.createElement('label')
descriptionLabel.htmlFor = 'description'
descriptionLabel.innerText = 'Description:'
const descriptionInput = document.createElement('textarea')
descriptionInput.id = 'description'
descriptionInput.rows = '5'
descriptionInput.name = 'description'
descriptionInput.placeholder = 'Your task description'
const priorityLabel = document.createElement('label')
priorityLabel.htmlFor = 'priority'
priorityLabel.innerText = 'Priority'
priorityLabel.name = 'priority'
const priorityInput = document.createElement('select')
priorityInput.id = 'priority'
const options = ['1','2','3','4','5']
options.forEach((x) => {
  const option = document.createElement('option')
  option.text = x;
  option.value = x;
  priorityInput.append(option)
})
const addInterface = document.createElement('div')
  addInterface.classList.add('add-interface')
  const addDiv = document.createElement('div')
  addDiv.classList.add('addDiv')
const closeButton = document.createElement('button')
closeButton.type = 'button'
closeButton.classList.add('close-btn')
closeButton.innerText = 'x'
closeButton.addEventListener('click',() => {
  addInterface.remove()
})
const submitButton = document.createElement('button')
submitButton.id = 'submit-btn'
submitButton.type = 'button'
submitButton.innerHTML = 'Add Task'
submitButton.addEventListener('click', () => {
  const task = new TaskCard(
    titleInput.value,
    descriptionInput.value,
    dateInput.value,
    priorityInput.value,
    null)
  tasks.push(task)
addInterface.remove() 
sortSwitch()
})

form.append(closeButton,titleLabel,titleInput,dateLabel,dateInput,
  priorityLabel,priorityInput,descriptionLabel,descriptionInput,submitButton)
  addDiv.append(form)
addInterface.append(addDiv)
console.log(addDiv)
return addInterface 
}