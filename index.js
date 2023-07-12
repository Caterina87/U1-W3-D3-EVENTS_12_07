const aggiungiTask = (submitEvent) => {
  submitEvent.preventDefault();

  const form = submitEvent.target;
  const input = submitEvent.target.elements[0].value;

  /*const container = document.getElementById("idtaskList");
  console.log(container);
  const li = document.createElement("li");
  li.innerText = input;
  container.appendChild(li);
*/

  const ul = document.querySelector("ul");
  ul.innerHTML += `<li> 
    <span onclick='completa(event)'> ${input} </span> 
    <button onclick='elimina(event)'> ELIMINA </button> 
  </li>`;
};

const completa = (clickEvent) => {
  clickEvent.target.classList.toggle("completo");
};

const elimina = (clickEvent) => {
  clickEvent.target.parentElement.style.display = "none";
};
