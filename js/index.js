document.querySelector('button[id=send]').addEventListener('click', sendForm);
function sendForm(e) {
  var form = document.querySelector('#comment');
  if (form.checkValidity()) {
	  e.preventDefault(); 
    $.ajax({
    url: "https://formspree.io/yovchenko.w@gmail.com",
    method: "POST",
    data: {
        textarea: $('#comment').val()
    },
    dataType: "json"
});
  }
}



