(() => {
  let emailValue = localStorage['email'],
      phoneValue = localStorage['phone'],
      nameValue = localStorage['name'];

  if (emailValue != undefined) {$('.input-user-email-value').val(emailValue);}
  if (phoneValue != undefined) {$('.input-user-phone-value').val(phoneValue);}
  if (nameValue != undefined) {$('.textarea-user-name').val(nameValue);}

  emailValue = $('.input-user-email-value').val();
  phoneValue = $('.input-user-phone-value').val();
  nameValue = $('.textarea-user-name').val();

  const PATTERNEMAIL = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const PATTERNPHONE = /^[+\d][\d\(\)\ -]{4,17}\d$/;

  $('.input-user-email-value').blur(function() {
    if($(this).val() != '') {
      if(PATTERNEMAIL.test($(this).val())){
        emailValue = $(this).val();
        localStorage.setItem('email', emailValue);
      } else {
        $(this).val(emailValue);  
      }
    } else {
      $(this).val(emailValue);
    }
  });
  $('.input-user-email-value').keyup(function (eventObject){
    if(eventObject.which == 13) {
      $(this).blur();
    }
    if (eventObject.which == 27) {
      $(this).val(emailValue);
    }
  });

  $('.input-user-phone-value').blur(function() {
    if($(this).val() != '') {
      if(PATTERNPHONE.test($(this).val())){
        phoneValue = $(this).val();
        localStorage.setItem('phone', phoneValue);
      } else {
        $(this).val(phoneValue);  
      }
    } else {
      $(this).val(phoneValue);
    }
  });
  $('.input-user-phone-value').keyup(function(eventObject){
    if(eventObject.which == 13) {
      $(this).blur();
    }
    if (eventObject.which == 27) {
      $(this).val(phoneValue);
    }
  });

  $('.textarea-user-name').blur(function() {
    if($(this).val() != '') {
      nameValue = $(this).val();
      localStorage.setItem('name', nameValue);
    } else {
      $(this).val(nameValue);
    }
  }); 
  $('.textarea-user-name').keyup(function(eventObject){
    if(eventObject.which == 13) {
      $(this).blur();
    }
    if (eventObject.which == 27) {
      $(this).val(nameValue);
    }
  });
  $('.textarea-user-name').keydown(function(eventObject) {
    if(eventObject.which == 13) {
      eventObject.preventDefault();
      whenEnterPressed();
    }
    if ($(this).val().length >= '20') {
      $(this).height(46);
      $(this).attr('rows', '2');
    } else {
      $(this).height(23);
      $(this).attr('rows', '1');
    }
  });
})();