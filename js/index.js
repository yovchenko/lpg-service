document.querySelector('button[id=send]').addEventListener('click', sendForm);
function sendForm(e) {
  var form = document.querySelector('#comment');
  if (form.checkValidity()) {
	  e.preventDefault(); 
    alert('keep calm and wait for the message');
  }
}



