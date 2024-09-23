//get value from input field
function fromValue(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  const inputNumber = parseFloat(inputValue.toFixed(2));
  return inputNumber;
}
//get va;ue from innner text
function fromText(id) {
  const textValue = parseFloat(document.getElementById(id).innerText);
  const textNumber = parseFloat(textValue.toFixed(2));
  return textNumber;
}
//function to write history
function historyWrite(donateAmount, id) {
  const historyItem = document.createElement("div");
  const text = document.getElementById(id).innerText;
  historyItem.className = "bg-white rounded-md p-8 shadow-lg";
  historyItem.innerHTML = `
    <h2 class="font-bold text-xl pb-4">${donateAmount} Taka is ${text}</h2>
    <p class="font-light text-base">Date: ${new Date().toString()}</p>`;
  return historyItem;
}
