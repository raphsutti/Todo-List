var todoList = {
  todos: [],
  displayTodos: function() {

    //if list empty, print
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      //print each item with for loop
      for (var i = 0; i < this.todos.length; i++) {
        //check if todo completed
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }

      }
    }
  },

  //todoText is an object with more data
  //add to do item
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false  //default false
    });
    this.displayTodos();
  },
  //change to do item
  changeTodo: function(position, todoText) {
    //this.todos[position] = newValue;
    //use todoText object
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  //delete to do item
  deleteTodo: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
  },
  //toggle true <-> false for todo
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

\
