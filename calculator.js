document.addEventListener("DOMContentLoaded", (event)=>{
    // User's input
    var bill = document.getElementById("bill");
    var tip = document.getElementById("tip");

    // Error management
    var error = document.createElement('p');
    error.id = 'error';
    let errorMsg = document.createTextNode('Please enter a 2 decimal number.\nExample: 12.34');
    error.appendChild(errorMsg);

    // Initial values
    var billVal = 0;
    var tipVal = 15;

    // Event listener
    bill.addEventListener("input", calculator);
    tip.addEventListener("input", calculator);

    function calculator(){
        if (isNaN(Number(bill.value))){
            if(document.getElementById('error') === null){
                document.getElementsByClassName('calculator')[0].appendChild(error);
            }
        } else if (Number(bill.value).toFixed(2) != Number(bill.value)) {
            document.getElementsByClassName('calculator')[0].appendChild(error);
        } else {
            if (error !== null) error.remove();

            billVal = Number(bill.value).toFixed(2) || 0;
            tipVal = Number(tip.value) || 0;

            // Setting the Tip Percentage field
            var tipPercentageInput = document.getElementById("tip-percentage");
            tipPercentageInput.value = tipVal;

            // Setting the Tip Amount field
            var tipAmount = document.getElementById("tip-amount");
            var tipAmountValue = tipVal / 100 * billVal;
            tipAmount.value = tipAmountValue.toFixed(2);

            // Setting the Total Bill with Tip field
            var total = document.getElementById("total");
            var totalValue = Number(billVal) + Number(tipAmountValue);
            total.value = totalValue.toFixed(2);
        }
    }
});