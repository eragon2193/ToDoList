

// To do Tasks:
// Small header that says Organizer/todolist/smth similar
// sidebar on the left with buttons like add etc
// big scrollable list of cards with title and a date that open when you hover over them 

const contentDiv = document.getElementById('content')

class TaskCard {
  constructor(title, description,date){
    this.title = title
    this.description = description
    this.date = date
    this.priority = null;
    this.group = null;
  }
}


