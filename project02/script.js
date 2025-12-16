


const totalAmount = document.querySelector("#totalAmount");
const calculate = document.querySelector("#button");

calculate.addEventListener("click", () => {
  const billAmount = Number(document.querySelector("#bill-amount").value);
  const tipPercentage = Number(document.querySelector("#bill-percentage").value);

  const tip = billAmount * (tipPercentage / 100);
  const total = billAmount + tip;

  totalAmount.textContent = total;
});
