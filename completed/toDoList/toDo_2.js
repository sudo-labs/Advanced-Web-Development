window.onload = function () // Starts code below when template.html is loaded
{

    var totalItems = 0; // Dummy variable used to count how many items are currently on the to do list

    var inItemText = document.getElementById("inItemText"); // DOM method, creates element out of html id
    inItemText.focus(); // Sets mouse to text cursor automatically everytime page is loaded

    inItemText.onkeyup = function(event) { 
        // Starts function everytime ANY key is pressed in textbox
        if (event.which == 13)
            // event.which(13) -> Enter
            // Only proceed if key press is Enter, otherwise do nothing
        {
            var itemText = inItemText.value; // Gets text from textbox and assigns it to itemText

            addNewItem(document.getElementById("toDoList"), itemText); // Send <ul id="toDoList"> element and text to addNewItem function

            inItemText.focus(); // Sets mouse to text cursor automatically when new item is added
            inItemText.select(); // Selects text in textbox when new item is added so user can immediatley start typing his next item to add
        }

    }

    function addNewItem(list, itemText) 
    {
        totalItems++; 

        var listItem = document.createElement("li");

        var checkBox = document.createElement("input"); 
        checkBox.type = "checkbox"; // Initiates the checkbox next to each item
        checkBox.id = "cb_" + totalItems; // Gives a unique id to each item, eg: cb_1, cb_2 etc..
        checkBox.onclick = updateItemStatus; // Sends checkBox to updateItemStatus function everytime checkbox is clicked

        var span = document.createElement("span");
        span.id = "item_" + totalItems; // Gives text a unique id for later processing, eg: text_1, text_2 etc..
        span.innerText = itemText;

        var delButton = document.createElement("button");
        delButton.type = "button";
        delButton.innerText = "delete";
        delButton.onclick = function(){ list.removeChild(listItem); } // removes this item

        listItem.appendChild(checkBox); // Appends checkbox to listItem
        listItem.appendChild(span); // Appends text to listItem
        listItem.appendChild(delButton); // Appends delete button to listItem

        list.appendChild(listItem); // Appends listItem to list
    }

    function updateItemStatus() 
    {
        alert("This is a stub!");
    }
}


