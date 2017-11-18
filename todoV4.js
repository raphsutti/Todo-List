var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos)
  },

  // todoText is an object with more data
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false  //default false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    //this.todos[position] = newValue;
    //use todoText object
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
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
