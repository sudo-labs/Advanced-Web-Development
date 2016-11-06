window.onload = function()      // important to make it work, will be covered later
{
    list = document.getElementById("toDoList");

    var listItem = document.createElement("li");

    var checkBox = document.createElement("input"); 
    checkBox.type = "checkbox"; // Initiates the checkbox next to each item
    checkBox.id = "cb";

    var span = document.createElement("span");
    span.id = "item";
    span.innerText = "Meet with John";

    listItem.appendChild(checkBox); // Appends checkbox to listItem
    listItem.appendChild(span); // Appends text to listItem

    list.appendChild(listItem); // Appends listItem to list 
}
