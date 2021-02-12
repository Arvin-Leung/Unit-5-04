document.getElementById('button').addEventListener('click', displayName)

function displayName () {
  var x = document.getElementById('name').value;
  alert('hello! ' + x)
}
