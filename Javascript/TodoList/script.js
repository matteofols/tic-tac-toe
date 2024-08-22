function addTodo(){
    const todoElement = document.getElementById("new-todo");
    const todo = todoElement.value;
    
    if (todo.length < 3){
        return alert("Your item must be at least three characters long for your TOOD item");
    }
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const button = document.createElement('button')
    button.innerHTML = "Delete";
    button.classList.add("delete-button");
    li.classList.add("list-item");
    const text = document.createTextNode(todo);

    li.appendChild(text);
    li.appendChild(button);
    list.appendChild(li);
// Thsi was used for debugging
    // console.log("Added todo:", todo);
    // console.log("List item:", li);

    // li.setAttribute("onclick", "this.remove()")
    button.addEventListener("click", function() {
        // console.log("Delete button clicked for:", li); // This was used for debugging
        list.removeChild(li);
    });
    
    // todoElement.addEventListener("keypress", fucntion(event){
    //     if (event.key === "Enter"){
    //         event.preventDefault();
    //         doc
    //     }
    // })

    todoElement.value = "";
    
}