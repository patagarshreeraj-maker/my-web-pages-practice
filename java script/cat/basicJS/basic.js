let previousValue = document.getElementById("countervalue");

function increaseCount() {
    let previousCount = previousValue.textContent;
    let updatedCount = parseInt(previousCount) + 1;
    document.getElementById("countervalue").textContent = updatedCount;
    if(updatedCount > 0) {
        document.getElementById("countervalue").style.color = "green";
    }
}

function decreaseCount(){
    let previousCount = previousValue.textContent;
    let updatedCount = parseInt(previousCount) - 1;
    document.getElementById("countervalue").textContent = updatedCount;
    if (updatedCount < 0){
        previousValue.style.color="blue";
    }
}

function reset(){
    updatedCount = 0;
    previousValue.textContent = updatedCount;
}