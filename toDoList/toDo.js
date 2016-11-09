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

            if (itemText == "" || itemText == " ") // If user entered space or empty string in text box then do nothing
                return false;

            addNewItem(document.getElementById("toDoList"), itemText); // Send <ul id="toDoList"> element and text to addNewItem function

            inItemText.focus(); // Sets mouse to text cursor automatically when new item is added
            inItemText.select(); // Selects text in textbox when new item is added so user can immediatley start typing his next item to add
        }
        else if (event.which == 37 || event.which == 38 || event.which == 39 || event.which == 40)
        {
            // If user presses up, down, left or right instead of enter then the code below will start
            do
                var confirmPopUp = confirm("You have to press enter to add an item to the to do list. Do you understand that?.");
            while(confirmPopUp == false)
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

        listItem.appendChild(checkBox); // Appends checkbox to listItem
        listItem.appendChild(span); // Appends text to listItem

        list.appendChild(listItem); // Appends listItem to list
    }

    function updateItemStatus() 
    {
        var cbId = this.id.replace("cb_", ""); // Replaces cb_ in cb_1 with empty string so cb_1 -> 1
        var itemText = document.getElementById("item_" + cbId); // Replaces text_ in cb_1 with empty string so text_1 -> 1

        if (this.checked) // If checkbox is checked or clicked then change text to .checked aspects in html document. eg Do laundry -> (Transparent) Do laundry
            itemText.className = "checked";
        else // Otherwise, change text back to normal eg (Transparent) Do laundry -> Do laundry  
            itemText.className = "";
    }
    
    function deleteAllElements(list) {
			//declare var and get element by id. Make a new button in html and give it the id clearAll
			//for loop that goes through list
			// deletes all elements
		}
}


