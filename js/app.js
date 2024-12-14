let addBtn = document.getElementById("addBtn");
let myInput = document.getElementById("myInput");
let list = document.getElementById("list");
let deleteAllBtn = document.getElementById("deleteAllBtn");
gsap.from(".contain", {
  duration: 1.2,
  opacity: 0,
  scale: 0.5,
  ease: "back.out(2.5)",
});
gsap.from(".app", {
  duration: 1.2,
  opacity: 0,
  scale: 0.5,
  ease: "back.out(2.5)",
});

function animateAddTask(element) {
  gsap.from(element, {
    duration: 0.7,
    x: -100,
    opacity: 0,
    scale: 0.9,
    ease: "elastic.out(1,0.3)",
  });
}

function animateDeleteTask(element) {
  gsap.to(element, {
    duration: 0.3,
    x: 50,
    opacity: 0,
    ease: "elastic.out(1,0.3)",
    onComplete: () => element.remove(),
  });
}

function addDeleteListener(deleteBtn) {
  deleteBtn.addEventListener("click", function () {
    let li = this.parentElement.parentElement;
    animateDeleteTask(li);
  });
}

function addEditListener(editBtn) {
  editBtn.addEventListener("click", function () {
    let li = this.parentElement.parentElement;
    let taskText = li.firstChild.textContent;
    let updatedText = prompt("Edit your task:", taskText);
    if (updatedText !== null && updatedText !== "") {
      li.innerHTML = `
        ${updatedText} 
        <div>
          <i class="fas fa-check"></i>
          <i class="fas fa-edit"></i>
          <i class="fa-solid fa-trash"></i>
        </div>`;
      let deleteBtn = li.querySelector(".fa-trash");
      let editBtn = li.querySelector(".fa-edit");
      let completeBtn = li.querySelector(".fa-check");
      addDeleteListener(deleteBtn);
      addEditListener(editBtn);
      addCompleteListener(completeBtn);
    } else {
      alert("Task cannot be empty.");
    }
  });
}

function addCompleteListener(completeBtn) {
  completeBtn.addEventListener("click", function () {
    let li = this.parentElement.parentElement;
    li.classList.toggle("completed");
  });
}

addBtn.addEventListener("click", function () {
  let taskText = myInput.value;
  if (taskText !== "") {
    let li = document.createElement("li");
    li.innerHTML = `
      ${taskText} 
      <div>
        <i class="fas fa-check"></i>
        <i class="fas fa-edit"></i>
        <i class="fa-solid fa-trash"></i>
      </div>`;

    list.appendChild(li);
    animateAddTask(li);
    let deleteBtn = li.querySelector(".fa-trash");
    let editBtn = li.querySelector(".fa-edit");
    let completeBtn = li.querySelector(".fa-check");
    addDeleteListener(deleteBtn);
    addEditListener(editBtn);
    addCompleteListener(completeBtn);
    myInput.value = "";
  } else {
    alert("Please First Enter a Task");
  }
});

document.querySelectorAll(".fa-trash").forEach(function (deleteBtn) {
  addDeleteListener(deleteBtn);
});

document.querySelectorAll(".fa-edit").forEach(function (editBtn) {
  addEditListener(editBtn);
});

document.querySelectorAll(".fa-check").forEach(function (completeBtn) {
  addCompleteListener(completeBtn);
});
deleteAllBtn.addEventListener("click", (e) => {
  list.innerHTML = "";
});
