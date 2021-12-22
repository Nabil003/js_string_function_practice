// get elements from html

    var inputArea = document.getElementById("inputArea");
    var total = 200;
    var remaining = document.getElementById("remaining");


// create function:

    function totalChars(){
        var totalInput = inputArea.value.length;
        total.innerHTML = totalInput;
        var totalRemaining =inputArea.value.length;
        remaining.innerHTML = total-totalInput;
    }

   

    