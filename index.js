const aggiungiTask = (submitEvent) => {
  submitEvent.preventDefault();
  console.log("sono qui");
  const form = submitEvent.target;
  console.log(form);
  const inputList = form.elements;
  console.log(inputList);
  const task = {};
  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].tagName !== "BUTTON") {
      const valoreInput = inputList[i].value;
      const idInput = inputList[i].id;
      task[idInput] = valoreInput;
    }
  }
  console.log(task);
  const container = document.querySelector("taskList");
  console.log(container);
  const li = document.createElement("li");
  li.innerText = task.idInput;
  container.appendChild(li);
};
