document.addEventListener("DOMContentLoaded", () => {

  let i = 0;
  let picker = document.querySelector("#textColors");
  let color = "";


  picker.addEventListener('change', function (e) {
    if (e.target.value === "High priority") {
      color = 'red'
    }
    else if (e.target.value === "Medium priority") {
      color = 'orange'
    }
    else if (e.target.value === "Low priority") {
      color = 'green'
    }
  }
  )



  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target.new_task_description.value)

    let listItem = document.querySelectorAll("li");
    listItem[i].style.color = color
    console.log(listItem[i].textContent)

    i++;

  })

});


function addToDo(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  li.textContent = todo + " ";
  btn.addEventListener("click", handleDelete)
  btn.textContent = 'x'
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
  clearInput();
}

function clearInput() {
  document.querySelector("#create-task-form").reset();
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

