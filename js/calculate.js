document.getElementById('calculate-btn').addEventListener('click', function () {
  const perPlayerInputAmount = document.getElementById('input-amount')
  const perPlayerInputAmountValueString = perPlayerInputAmount.value;
  const perPlayerInputAmountValue =parseInt(perPlayerInputAmountValueString)
  // console.log(perPlayerInputAmountValue)
  const totalAddedPlayer = document.getElementById('total-added-player');
  const totalAddedPlayerValueString = totalAddedPlayer.value;
  const totalAddedPlayerValue = parseInt(totalAddedPlayerValueString)
  // console.log(totalAddedPlayerValue);

  const playerExpenses = totalAddedPlayerValue * perPlayerInputAmountValue;
  console.log(playerExpenses)

  const totalExpenses = document.getElementById('total-expenses');
  const totalExpensesValueString = totalExpenses.innerText;
  const totalExpensesValue = parseInt(totalExpensesValueString);
  totalExpenses.innerText = playerExpenses;
  console.log(totalExpensesValue)

 })