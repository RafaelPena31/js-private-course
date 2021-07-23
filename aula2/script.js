const input = document.getElementById("txtAddToDo");

let inputValue = "";
let listData = [];

// observer pattern
input.addEventListener("change", (e) => {
  inputValue = e.target.value;
});

const onClickAddItem = () => {
  if (inputValue) {
    listData.push(inputValue);
    const index = listData.length - 1;
    renderList(index, inputValue);
    input.value = "";
  }
};

const renderList = (index, inputValue) => {
  const listView = document.getElementById("listView");

  const item = document.createElement("li");
  item.textContent = inputValue;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = " - delete";
  deleteButton.setAttribute("onclick", `onClickDelete(${index})`);

  const container = document.createElement("section");
  container.appendChild(item);
  container.appendChild(deleteButton);
  container.setAttribute("id", `itemList${index}`);

  listView.appendChild(container);
};

const onClickDelete = (idItem) => {
  const listItem = document.getElementById(`itemList${idItem}`);
  listItem.parentNode.removeChild(listItem);
};
