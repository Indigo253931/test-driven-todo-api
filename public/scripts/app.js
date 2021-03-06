// wait for DOM to load before running JS
$(document).ready(function() {

$(function(){
var app = new App();  
app.render();
app.get();
app.post();
app.put();
app.delete();
});
});

function App(){
  this.baseUrl = '/api/todos';
  this.allTodos = [];
  this.$todosList = $('#todos-list');
  this.$createTodo = $('#create-todo');
  this.source = $('#todos-template').html();
  this.template = Handlebars.compile(source);
  }
App.prototype.render = function() {
  this.$todosList.empty();
  this.todosHtml = this.template({ todos: this.allTodos });
  this.$todosList.append(this.todosHtml);
  };

App.prototype.get=function(req, res) {
  var app = this;
  $.get(this.baseUrl, function(){
    console.log();
  });

};

App.prototype.post=function(req, res) {
  var app = this;
  this.$createTodo.on
  console.log();
};


App.prototype.put=function(req, res) {
   var app = this;
   this.$todosList.on
  console.log();
};

App.prototype.delete=function(req, res) {
   var app = this;
   this.$todosList.on
  console.log();
};
  // // base API route
  // var baseUrl = '/api/todos';
  // // array to hold todo data from API
  // var allTodos = [];
  // // element to display list of todos
  // var $todosList = $('#todos-list');
  // // form to create new todo
  // var $createTodo = $('#create-todo');
  // // compile handlebars template
  // var source = $('#todos-template').html();
  // var template = Handlebars.compile(source);
  // helper function to render all todos to view
  // note: we empty and re-render the collection each time our todo data changes
  // function render() {
  //   // empty existing todos from view
  //   $todosList.empty();
  //   // pass `allTodos` into the template function
  //   var todosHtml = template({ todos: allTodos });
  //   // append html to the view
  //   $todosList.append(todosHtml);
  // };

  // GET all todos on page load
  $.ajax({
    method: "GET",
    url: baseUrl,
    success: function onIndexSuccess(json) {
      console.log(json);
      // set `allTodos` to todo data (json.data) from API
      allTodos = json.todos;
      // render all todos to view
      render();
    }
  });
  // listen for submit even on form
  $createTodo.on('submit', function (event) {
    event.preventDefault();
    // serialze form data
    var newTodo = $(this).serialize();
    // POST request to create new todo
    $.ajax({
      method: "POST",
      url: baseUrl,
      data: newTodo,
      success: function onCreateSuccess(json) {
        console.log(json);
        // add new todo to `allTodos`
        allTodos.push(json);
        // render all todos to view
        render();
      }
    });
    // reset the form
    $createTodo[0].reset();
    $createTodo.find('input').first().focus();
  });
  // add event-handlers to todos for updating/deleting
  $todosList
    // for update: submit event on `.update-todo` form
    .on('submit', '.update-todo', function (event) {
      event.preventDefault();
      // find the todo's id (stored in HTML as `data-id`)
      var todoId = $(this).closest('.todo').attr('data-id');
      // find the todo to update by its id
      var todoToUpdate = allTodos.filter(function (todo) {
        return todo._id == todoId;
      })[0];
      // serialze form data
      var updatedTodo = $(this).serialize();
      // PUT request to update todo
      $.ajax({
        type: 'PUT',
        url: baseUrl + '/' + todoId,
        data: updatedTodo,
        success: function onUpdateSuccess(json) {
          // replace todo to update with newly updated version (json)
          allTodos.splice(allTodos.indexOf(todoToUpdate), 1, json);
          // render all todos to view
          render();
        }
      });
    })
    // for delete: click event on `.delete-todo` button
    .on('click', '.delete-todo', function (event) {
      event.preventDefault();
      // find the todo's id (stored in HTML as `data-id`)
      var todoId = $(this).closest('.todo').attr('data-id');
      // find the todo to delete by its id
      var todoToDelete = allTodos.filter(function (todo) {
        return todo._id == todoId;
      })[0];
      // DELETE request to delete todo
      $.ajax({
        type: 'DELETE',
        url: baseUrl + '/' + todoId,
        success: function onDeleteSuccess(json) {
          // remove deleted todo from all todos
<<<<<<< HEAD
          //if (index > -1) {
            //allTodos.splice(index, -1);
            app.delete('/api/todos/:id', function destroy(req, res){
              var deleted_todo = todos.splice[0];

            res.json(deleted_todo);
=======
          allTodos.splice(allTodos.indexOf(todoToDelete), 1);
>>>>>>> a503f21bb6deb2b4319881c49fd051a93c14a158
          // render all todos to view
          render();
        });}
      });
    });
});