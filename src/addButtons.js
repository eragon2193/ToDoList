export const tasks = [
  {
    date:'31/12/2024',
    priority: '1',
    title: 'cycling',
    description:'Learn how to cycle until next 2025'
  },
  {
    date:'07/04/2023',
    priority:'4',
    title:'todolist',
    description:'Work on my Odin ToDoList'
  },
  {
    date:'11/04/2023',
    priority:'5',
    title:'todolist',
    description:'Work on my Odin ToDoList'
  },
  {
    date:'10/04/2023',
    priority:'3',
    title:'todolist',
    description:'Work on my Odin ToDoList'
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
  const object = {
    date: dateInput.value,
    title: titleInput.value,
    priority: priorityInput.value,
    description: descriptionInput.value
  }
  tasks.push(object)
addInterface.remove()
})

form.append(closeButton,titleLabel,titleInput,dateLabel,dateInput,
  priorityLabel,priorityInput,descriptionLabel,descriptionInput,submitButton)
  addDiv.append(form)
addInterface.append(addDiv)
return addInterface 
}