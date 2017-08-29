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
var el = document.getElementsByClassName('switch-lang')[0];
if(el.value == 'contacts.html'){
  $('form').html('<h1><span class="message">Спасибо, сообщение отправлено.<br> Мы свяжемся с вами в ближайшее время.</span></h1>');
  }
  else {
  $('form').html("<h1><span class='message'>Дякуємо, повідомлення відправлено.<br> Ми зв'яжемося з вами найближчим часом.</span></h1>");
  }
});
  }
}

	
