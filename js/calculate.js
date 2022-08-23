document.getElementById('calculate-btn').addEventListener('click', function () {
  const perPlayerInputAmount = document.getElementById('input-amount')
  const perPlayerInputAmountValueString = perPlayerInputAmount.value;
  const perPlayerInputAmountValue = parseInt(perPlayerInputAmountValueString)
  
  const totalAddedPlayer = document.getElementById('total-added-player');
  const totalAddedPlayerValueString = totalAddedPlayer.value;
  const totalAddedPlayerValue = parseInt(totalAddedPlayerValueString)
   

  const playerExpenses = totalAddedPlayerValue * perPlayerInputAmountValue;
  

  const totalPlayerExpenses = document.getElementById('total-expenses');
  const totalPlayerExpensesValueString = totalPlayerExpenses.innerText;
  const totalPlayerExpensesValue = parseInt(totalPlayerExpensesValueString);
  totalPlayerExpenses.innerText = playerExpenses;
   
});

document.getElementById('total-calculate-btn').addEventListener('click', function () {
  const totalPlayerExpenses = document.getElementById('total-expenses');
  const totalPlayerExpensesValueString = totalPlayerExpenses.innerText;
  const totalPlayerExpensesValue = parseInt(totalPlayerExpensesValueString);
  
  const managerExpenses = document.getElementById('manager-expenses');
  const managerExpensesValueString = managerExpenses.value;
  const managerExpensesValue = parseInt(managerExpensesValueString);

  const coachExpenses = document.getElementById('coach-expenses');
  const coachExpensesValueString = coachExpenses.value;
  const coachExpensesValue = parseInt(coachExpensesValueString);

  const toatalExpenses = totalPlayerExpensesValue + managerExpensesValue + coachExpensesValue;
  console.log(managerExpensesValue, coachExpensesValue, toatalExpenses)


  const finalExpenses = document.getElementById('final-expenses');
  const finalExpensesValueString = finalExpenses.innerText;
  const finalExpensesValue = parseInt(finalExpensesValueString)
  finalExpenses.innerText = toatalExpenses;
  

})