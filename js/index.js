//Donation button work
const donationButton = document.getElementById("donation");
donationButton.addEventListener("click", function () {
  donationButton.classList.add("text-dark", "bg-primary", "hover:bg-primary");
  historyButton.classList.remove("text-dark", "bg-primary", "hover:bg-primary");

  document.getElementById("history-container").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
});
//History button work
const historyButton = document.getElementById("history");
historyButton.addEventListener("click", function () {
  historyButton.classList.add("text-dark", "bg-primary", "hover:bg-primary");

  donationButton.classList.remove(
    "text-dark",
    "bg-primary",
    "hover:bg-primary"
  );

  document.getElementById("history-container").classList.remove("hidden");
  document.getElementById("main").classList.add("hidden");
});

//Donation
document.getElementById("donate-now1").addEventListener("click", function () {
  const donateAmount = fromValue("noakhali");
  const balance = fromText("balance");
  const donations = fromText("donate-noakhali");
  //Validations
  if (donateAmount > balance) {
    alert("Low Balance");
    return;
  }
  if (
    donateAmount >= 0 ||
    isNaN(donateAmount) === false ||
    donateAmount < balance
  ) {
    const newBalance = balance - donateAmount;
    const newDonations = donations + donateAmount;
    document.getElementById("balance").innerText = newBalance.toFixed(2);
    document.getElementById("donate-noakhali").innerText =
      newDonations.toFixed(2);
      my_modal_5.showModal();
    
  }

  //History using function
  const historyItem = historyWrite(donateAmount, "title-noakhali");

  const historyContainer = document.getElementById("history-container");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});
document.getElementById("donate-now2").addEventListener("click", function () {
  const donateAmount = fromValue("feni");
  const balance = fromText("balance");
  const donations = fromText("donate-feni");
  //Validations
  if (donateAmount > balance) {
    alert("Low Balance");
    return;
  }
  if (
    donateAmount >= 0 ||
    isNaN(donateAmount) === false ||
    donateAmount < balance
  ) {
    const newBalance = balance - donateAmount;
    const newDonations = donations + donateAmount;
    document.getElementById("balance").innerText = newBalance.toFixed(2);
    document.getElementById("donate-feni").innerText = newDonations.toFixed(2);
    my_modal_5.showModal();
  }
  //History using function
  const historyItem = historyWrite(donateAmount, "title-feni");

  const historyContainer = document.getElementById("history-container");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});
document.getElementById("donate-now3").addEventListener("click", function () {
  const donateAmount = fromValue("quota");
  const balance = fromText("balance");
  const donations = fromText("donate-quota");
  //Validations
  if (donateAmount > balance) {
    alert("Low Balance");
    return;
  }
  if (
    donateAmount >= 0 ||
    isNaN(donateAmount) === false ||
    donateAmount < balance
  ) {
    const newBalance = balance - donateAmount;
    const newDonations = donations + donateAmount;
    document.getElementById("balance").innerText = newBalance.toFixed(2);
    document.getElementById("donate-quota").innerText = newDonations.toFixed(2);
    my_modal_5.showModal();
  }
  //History using function
  const historyItem = historyWrite(donateAmount, "title-quota");

  const historyContainer = document.getElementById("history-container");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});
