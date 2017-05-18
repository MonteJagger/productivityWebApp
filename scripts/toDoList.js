$(document).ready(function() {
  // when in the input
  $(".new-task").keypress(function(e) {
    if (e.which === 13) {
      addTask(this); // append list item to the bottom
    }
  });

  // add to the list
  function addTask(input) {
    var listItem = createTask(input.value); // create the list item
    var taskList = $(input).siblings(".taskList").first(); // ul (taskList)

    // if there is no ul
    if (taskList.length > 0)
      taskList.append(listItem);
    else { // else create ul and add listText to it
      var ul = document.createElement("ul");
      $(ul).addClass("taskList");
      $(ul).append(listItem);
      $(ul).insertAfter(input);
    }
    bindTaskEvents(listItem);
    input.value = "";
  }

  var bindTaskEvents = function(listItem) {
    var deleteBut = listItem.querySelector(".deleteButton");
    var editBut = listItem.querySelector(".editButton");
    var pBut = listItem.querySelector(".itemText");
    deleteBut.onclick = deleteTask;
    editBut.onclick = editTask;
    pBut.onclick = completed;
  }

  var deleteTask = function() {
    console.log("Item deleted");
    var listItem = this.parentNode; // listItem
    listItem.remove();
  }

  var editTask = function() {
    console.log("Editing...");
    var listItem = this.parentNode; // li (listItem)
     // select input class where type=text
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("p");
    // boolean value to see if class editMode exists
    var containsClass = listItem.classList.contains("editMode");

    // if listItem is in edit mode
    if (containsClass)
      label.innerText = editInput.value; // switch out of edit mode and item value
    else
      editInput.value = label.innerText; // go into edit mode

    listItem.classList.toggle("editMode");
  }

  var completed = function() {
    var listItem = this.parentNode; // li (listItem)
    var taskList = listItem.parentNode; // ul (taskList)
    var containsClass = listItem.classList.contains("completed");

    // if it is complete
    if (containsClass) {
      console.log("Task not completed.");
      // locate and get first completed item
      var firstComplete = taskList.getElementsByClassName("completed")[0];
      taskList.insertBefore(listItem, firstComplete); // insert before the completed listItem
    }
    else {
      console.log("Task completed.");
      taskList.appendChild(listItem); // add completed item to the end of the list
    }
    listItem.classList.toggle("completed");
  }

  // create everything in the list
  var createTask = function(input) {
    var listItem = document.createElement("li");
    var p = document.createElement("p"); // text
    var editInput = document.createElement("input"); // edit text
    var editButton = document.createElement("span");
    var deleteButton = document.createElement("span");

    // adding attributes to elements
    listItem.className = "listItem";
    p.className = "itemText";
    editInput.type = "text"; // input
    editButton.className = "editButton";
    deleteButton.className = "deleteButton";
    editButton.innerText = "\u25fb"; // edit button text
    deleteButton.innerText = "\u25bd";
    p.innerText = input;

    listItem.append(p);
    listItem.append(editInput);
    listItem.append(editButton);
    listItem.append(deleteButton);

    return listItem;
  }

  var tasks = document.getElementsByClassName("listItem");
  // list Items that already exists
  for (var i=0; i<tasks.length; i++) {
    bindTaskEvents(tasks[i]);
  }

  $(".dayTitle").click(function() {
    var otherElements = $(this).siblings();
    var classContains = this.classList.contains("show");

    if (classContains) {
      for (var i=0; i<otherElements.length; i++) {
        $(otherElements[0]).hide("fast");
        $(otherElements[i]).hide("slow");
        // otherElements[i].style.display = "none";
      }
    }
    else {
      for (var i=0; i<otherElements.length; i++) {
        $(otherElements[0]).show("fast");
        $(otherElements[i]).show("slow");
      }
    }

    this.classList.toggle("show")
    console.log(otherElements);
  });

});
