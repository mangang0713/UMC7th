const input = document.querySelector(".input");
const toDo = document.querySelector(".to-do");
const done = document.querySelector(".done");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const inputValue = input.value.trim();

    if (inputValue !== "") {
      const newToDo = document.createElement("div");
      newToDo.classList.add("item");

      const toDoSpan = document.createElement("span");
      toDoSpan.classList.add("item-text");
      toDoSpan.textContent = inputValue;

      const doneButton = document.createElement("button");
      doneButton.textContent = "완료";
      doneButton.classList.add("done-btn");
      doneButton.setAttribute("type", "button");

      doneButton.addEventListener("click", function () {
        const doneToDo = document.createElement("div");
        doneToDo.classList.add("item");

        const doneSpan = document.createElement("span");
        doneSpan.classList.add("item-text");
        doneSpan.textContent = inputValue;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "삭제";
        deleteButton.classList.add("delete-btn");
        deleteButton.setAttribute("type", "button");

        deleteButton.addEventListener("click", function () {
          done.removeChild(doneToDo);
        });

        doneToDo.appendChild(doneSpan);
        doneToDo.appendChild(deleteButton);

        done.appendChild(doneToDo);

        toDo.removeChild(newToDo);
      });

      newToDo.appendChild(toDoSpan);
      newToDo.appendChild(doneButton);

      toDo.appendChild(newToDo);
      input.value = "";
    }
  }
});
