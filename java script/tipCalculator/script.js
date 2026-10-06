function calculate() {
    let billAmount = document.getElementById("billAmount").value;
    let percentageTip = document.getElementById("percentageTip").value;

    if (billAmount === "") {
        document.getElementById("errorMessage").textContent = "Please enter valid input";
    } else if (percentageTip === "") {
        document.getElementById("errorMessage").textContent = "Please enter valid input";
    } else {
        document.getElementById("errorMessage").textContent = "";
        let tipAmount = document.getElementById("tipAmount");
        let total = document.getElementById("totalAmount");
        billAmount = parseFloat(billAmount);
        percentageTip = parseFloat(percentageTip);
        let calculatedTip = (percentageTip / 100) * billAmount;
        let totalA = billAmount + calculatedTip;
        tipAmount.value = calculatedTip.toFixed(2);
        total.value = totalA.toFixed(2);
    }
}