const playerArray = [];
function displayPlayerName(updatePlayerName) {
  console.log(updatePlayerName);
  const createList = document.getElementById('name-list')
  createList.innerHTML = '';
  for (let i = 0; i < updatePlayerName.length; i++){
    const name = updatePlayerName[i];
    const li = document.createElement('li');
    li.innerHTML = `
    <ol> ${name} </ol>
    `;
    createList.appendChild(li)
  }
  
}
function addToPlayer(element) {
  const PlayerName = element.parentNode.children[1].innerText;
  playerArray.push(PlayerName)
  document.getElementById('total-added-player').value = playerArray.length;
  displayPlayerName(playerArray)
};

// function of disable button after click :

function disableBtn(inputBtn) {
  document.getElementById(inputBtn).disabled = true;
  document.getElementById(inputBtn).innerText = 'Already Selected';
  document.getElementById(inputBtn).style.backgroundColor = 'gray';
}
document.getElementById('first-btn').addEventListener('click', function () {
  disableBtn('first-btn')
  
});
document.getElementById('second-btn').addEventListener('click', function () {
  disableBtn('second-btn');
   
});
document.getElementById('third-btn').addEventListener('click', function () {
  disableBtn('third-btn')
   
});
document.getElementById('fourth-btn').addEventListener('click', function () {
  disableBtn('fourth-btn')
   
});
document.getElementById('fifth-btn').addEventListener('click', function () {
  disableBtn('fifth-btn')
    
});
document.getElementById('six-btn').addEventListener('click', function () {
  disableBtn('six-btn')
  
   
});
