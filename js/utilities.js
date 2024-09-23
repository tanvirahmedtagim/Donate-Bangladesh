//get value from input field
function fromValue(id) {
  const inputValue = document.getElementById(id).value;
  if (inputValue <= 0 || isNaN(inputValue)) {
    alert("Invalid Input!!");
    return;
  } else {
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
  }
}
//get va;ue from innner text
function fromText(id) {
  const textValue = parseFloat(document.getElementById(id).innerText);
  const textNumber = parseFloat(textValue.toFixed(2));
  return textNumber;
}
//function to write history
function historyWrite(donateAmount, id) {
  if (donateAmount <= 0 || isNaN(donateAmount) === false) {
    const historyItem = document.createElement("div");
    const text = document.getElementById(id).innerText;
    historyItem.className = "bg-white rounded-md p-8 shadow-lg";
    historyItem.innerHTML = `
    <h2 class="font-bold text-xl pb-4">${donateAmount} Taka is ${text}</h2>
    <p class="font-light text-base">Date: ${new Date().toString()}</p>`;
    return historyItem;
  }
}
