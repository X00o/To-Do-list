let todobtn = document.getElementById("todobtn");
let toDoContainer = document.getElementById("container");
let toDoText = document.getElementById("textField");

todobtn.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph1");

  paragraph.innerText = toDoText.value;
  toDoContainer.appendChild(paragraph);
  toDoText.innerText = " ";
  todobtn.style.backgroundColor = "red";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = " line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
 
  todobtn.addEventListener("dblclick", function () {
      todobtn.style.backgroundColor = " white";
    });
});

toDoText.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("todobtn").click();
      }
});