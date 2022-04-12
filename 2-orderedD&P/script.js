const draggableList = document.getElementById("draggable-list");
// console.log(draggableList);
const check = document.getElementById("check")

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];

// store list items
const listItems = [];
let dragStartIndex;
createList();

// insert list items to the dom
function createList() {
    [...richestPeople]
    .map(a => ({value: a, sort: Math.random()}))
    .sort((a,b) => a.sort-b.sort)
    .map(a => a.value )
    .forEach((person, index) => {
        // console.log(person);
        const listItem = document.createElement("li");
        listItem.setAttribute("data-index", index);
        listItem.innerHTML=`
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;
        listItems.push(listItem);
        // console.log(person,index,listItems);
        draggableList.appendChild(listItem);
    });

    addEventListener()
};

function dragStart() {
    // console.log("start");
    dragStartIndex= +this.closest("li").getAttribute("data-index") // to set is as a number, we added + in start of thah
    // console.log(dragStartIndex);
}
function dragEnter() {
    // console.log("enter");
    this.classList.add("over")
}
function dragLeave() {
    // console.log("leave");
    this.classList.remove("over");
}
function dragOver(e) {
    e.preventDefault()
    // console.log("over");
}
function dragDrop() {
    // console.log("drop");
    const dragEndIndex= +this.getAttribute("data-index")
    swapItems(dragStartIndex, dragEndIndex)
    // console.log(dragEndIndex);
    // swapItems(dragStartIndex,dragEndIndex)
    this.classList.remove("over")
}

function swapItems(fromIndex, toIndex) {
    console.log(listItems);
    const itemOne = listItems[fromIndex].querySelector(".draggable");
    const itemTwo = listItems[toIndex].querySelector(".draggable");
    console.log(fromIndex, listItems[fromIndex], itemOne);
    listItems[fromIndex].appendChild(itemTwo)
    listItems[toIndex].appendChild(itemOne)
}

function addEventListener(){
    const draggables = document.querySelectorAll(".draggable")
    const dragListItems = document.querySelectorAll(".draggable-list li")

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart',dragStart)
    })
    dragListItems.forEach((item) => {
      item.addEventListener("dragover", dragOver);
      item.addEventListener("drop", dragDrop);
      item.addEventListener("dragenter", dragEnter);
      item.addEventListener("dragleave", dragLeave);
    });
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart',dragStart)
    })
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart',dragStart)
    })

}