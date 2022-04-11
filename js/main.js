const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

// fill listener
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// loop through empties and call drag event
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
// drag functions
function dragStart() {
    this.className += " hold";
    setTimeout(() => this.className= "invisible", 0);
    // setTimeout(()=> (this.className= "invisible"), 0)
    // console.log("start");
}
function dragEnd() {
    this.className="fill"
    // console.log("end");
}

function dragOver(e) {
    e.preventDefault()
    console.log("over");
}
function dragEnter(e) {
    e.preventDefault()
    this.className+= " hovered"
    console.log("enter");
    
}
function dragLeave() {
    console.log("leave");
    this.className= "empty"
    
}
function dragDrop() {
    console.log("drop");
    this.className= "empty"
    this.append(fill)
}