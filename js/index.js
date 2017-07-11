document.querySelector('button[id=send]').addEventListener('click', sendForm);
function sendForm(e) {
  var form = document.querySelector('#comment');
  if (form.checkValidity()) {
	  e.preventDefault(); 
    $.ajax({
    url: "https://formspree.io/gascentr.service@gmail.com",
    method: "POST",
    data: {
        textarea: $('#comment').val()
    },
    dataType: "json"
})
.done(function() {
$('form').html('<h1><span class="message">Спасибо, сообщение отправлено.<br> Мы свяжемся с вами в ближайшее время.</span></h1>');
});
  }
}


 




