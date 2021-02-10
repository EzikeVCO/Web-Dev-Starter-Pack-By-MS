var todo = ["Purchase PS3 games"];

var input = prompt("What Would you like to do!!")

if(input === "new") {
    console.log(todo);
} else if (input === "list") {
    var newList = prompt("add a new list")
    todo.push(newList);
}

while (input !== quit){

    console.log("Thanks for playing Darksouls")
}