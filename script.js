document.getElementById('button').addEventListener('click', displayName)

function displayName () {
  const x = document.getElementById('name').value
  alert('hello! ' + x)
}
