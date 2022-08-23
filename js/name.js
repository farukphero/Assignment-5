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
}