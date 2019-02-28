var newItemCounter = 1;
var ourList = document.querySelector("#List");
var ourButton = document.querySelector("#Button");
var ourHeadline = document.querySelector("#Headline");
var listItems = document.querySelectorAll("#List li");

ourList.addEventListener("click", activateItem);

function activateItem(e){
if(e.target.nodeName == "LI"){
ourHeadline.innerHTML = e.target.innerHTML;
for (i = 0; i < e.target.parentNode.children.length; i++){
    e.target.parentNode.children[i].classList.remove("active");
  }
 e.target.classList.add("active");
 }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem(){
ourList.innerHTML += "<li>I was just created! " + newItemCounter + "</li>";
newItemCounter++;

}