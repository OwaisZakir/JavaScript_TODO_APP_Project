const addBtn = document.getElementById("addBtn");
const myInput = document.getElementById("myInput");
const list = document.getElementById("list");

gsap.from(".app", {
  duration: 1.2,
  opacity: 0,
  scale: 0.5,
  ease: "back.out(1.7)",
});

function animateAddTask(element) {
  gsap.from(element, {
    duration: 0.7,
    x: -100,
    opacity: 0,
    scale: 0.9,
    ease: "elastic.out(1, 0.75)",
  });
}

function animateDeleteTask(element) {
  gsap.to(element, {
    duration: 0.4,
    x: 50,
    opacity: 0,
    ease: "power1.out",
    onComplete: () => element.remove(),
  });
}

function addDeleteListener(deleteBtn) {
  deleteBtn.addEventListener("click", function () {
    const li = this.parentElement;
    animateDeleteTask(li);
  });
}

addBtn.addEventListener("click", () => {
  const taskText = myInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <i class="fas fa-edit"></i> <i class="fa-solid fa-trash"></i>`;
    list.appendChild(li);
    animateAddTask(li);

    const deleteBtn = li.querySelector(".fa-trash");
    addDeleteListener(deleteBtn);

    myInput.value = "";
  } else {
    alert("Please First Enter a Task");
  }
});

document.querySelectorAll(".fa-trash").forEach((deleteBtn) => {
  addDeleteListener(deleteBtn);
});
