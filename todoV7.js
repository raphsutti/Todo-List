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
  // Add to do item
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false  //default false
    });
    this.displayTodos();
  },
  // Change to do item
  changeTodo: function(position, todoText) {
    //this.todos[position] = newValue;
    //use todoText object
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  // Delete to do item
  deleteTodo: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
  },
  // Toggle true <-> false for todo
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: If everything's true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Case 2: If some todos is true, make everything true
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

// Grabbing button with get element id
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

// Add click event listener. Run display todo when clicked
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});
// Run toggleALl when clicked
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
