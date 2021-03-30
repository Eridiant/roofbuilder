// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	let choice = document.querySelector('#form-choice');
	let dropdown = document.querySelector('#form-dropdown');
  let phonecc = document.querySelector('#phonecc');

  choice.addEventListener('click', (e) => {
    dropdown.classList.toggle('form-show');
  })
  
  dropdown.addEventListener('click', (e) => {
    choice.innerHTML = e.target.closest('.form-item').innerHTML;
    phonecc.value = e.target.closest('.form-item').getAttribute('data-lang');
    dropdown.classList.remove('form-show');
  })

  $('#form').submit(function(e) {
    e.preventDefault(); 
    $.ajax({
      type : "POST",
      url : "mail.php",
      data: $(this).serialize(),
      error: function(){
        console.log('eror');			
      },
      success: function(data){
        document.querySelector('.header-send').classList.add('sended');
        setTimeout(() => {
          document.querySelector('.header-send').classList.remove('sended');
        }, 5000);
      }
    });
  })
  

})
