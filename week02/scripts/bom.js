const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

const li = document.createElement("li");
const deleteButton = document.createElement("button");
deleteButton.textContent = "❌";

li.append(deleteButton);


button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    input.focus()
  }
  list.append(li);
});

deleteButton.addEventListener('click', function () {
  list.removeChild(li);
  input.focus();
  input.value = '';
});
