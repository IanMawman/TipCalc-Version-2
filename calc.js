function number(evt)
{
   var numberchecker = (evt.which) ? evt.which : event.keyCode;
  //provides a variable for the              check
   if (numberchecker != 46 && numberchecker > 31 
     && (numberchecker < 48 || numberchecker > 57))
      return false;
   return true;
};



document.getElementById("calculate").onclick = function totalCost (){
    // gets the button and when clicked it outputs the totalCost function//
    var billTotal = document.getElementById('bill').value;
     // varaiables defined here//
    var percentTotal = document.getElementById("percent").value 
    
    var totalCost = (billTotal / percentTotal);
    //calculates percentage//
    totalCost = Math.round(totalCost *100) / 100;
    //allows ammount to be rounded//
     totalCost = totalCost.toFixed(2);
    //keeps cost to 2 decimal places to go with the standard format of £00.00//
    
    
    document.getElementById("finalTotal").style.display = "block"; 
        document.getElementById("total").innerHTML = totalCost;
    //once calculated ends displayed in the middle preventing anything added next to it unless defined otherwise// 
    
    };
    
    
    