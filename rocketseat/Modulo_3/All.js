var elementlist = document.querySelector("#app ul");
var elementinput = document.querySelector("#app input");
var elementbutton = document.querySelector("#app button");

var all = JSON.parse(localStorage.getItem("list_all")) || [];

function lerTodos() {
  elementlist.innerHTML = "";

  for (todo of all) {
    var ElementAll = document.createElement("li");
    var ElementText = document.createTextNode(todo);

    var linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    var pos = all.indexOf(todo);
    linkElement.setAttribute("onclick", "deletet(" + pos + ")");
    var linkText = document.createTextNode(" Excluir");

    linkElement.appendChild(linkText);

    ElementAll.appendChild(ElementText);
    ElementAll.appendChild(linkElement);
    elementlist.appendChild(ElementAll);
  }
}

lerTodos();

function add() {
  textelement = elementinput.value;
  if (textelement == "") {
    alert("Campo vazio");
  } else {
    all.push(textelement);
    elementinput.value = "";
    lerTodos();
    saveStorage();
  }
}

elementbutton.onclick = add;

function deletet(pos) {
  all.splice(pos, 1);
  lerTodos();
  saveStorage();
}

function saveStorage() {
  localStorage.setItem("list_All", JSON.stringify(all));
}
