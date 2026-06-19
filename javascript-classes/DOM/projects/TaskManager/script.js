//add task 
const task = document.querySelector("#task");
const category = document.querySelector("#category");
const addTaskButton = document.querySelector("#addButton");

const taskListCard = document.querySelector(".card-task-list");

addTaskButton.addEventListener("click", () => {

  let taskValue = task.value;
//   let categoryText = category.options[category.selectedIndex].text;
//   console.log(categoryText);
  let categoryValue = category.value.toLowerCase();
//   console.log(taskValue);
//   console.log(categoryValue);
  //set the "">falsy to 'Select Category' option so if is it falsy, no addition  
  if(categoryValue && taskValue.trim()){
        taskListCard.innerHTML += `<div class="card-task flex">
                    <div class="flex" style="gap: 1rem; margin-top: 0.5rem;">
                        <input type="checkbox" value="completed" placeholder="completed">
                        <div>
                            <p class="card-task-title">${taskValue}</p>
                            <span class="card-category" style="display: block;">${categoryValue}</span>
                        </div>
                    </div>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>`
  }else{
    alert("please enter the all fields");
  }
  //after adding one task it will be empty the input box and set the initially state to select 
  task.value = "";
  category.value = "";


});


