document.getElementById('button').addEventListener('click', displayName)

function displayName () {
  let x = document.getElementById('name').value
  alert('hello! ' + x)
}
