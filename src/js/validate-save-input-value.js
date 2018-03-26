(() => {
  //read the data from localstorage
  let emailValue = localStorage['email'],
      phoneValue = localStorage['phone'],
      nameValue = localStorage['name']; 

  //if the data from localstorage received, then fill them with values input fields
  if (emailValue != undefined) {$('.input-user-email-value').val(emailValue);}
  if (phoneValue != undefined) {$('.input-user-phone-value').val(phoneValue);}
  if (nameValue != undefined) {$('.textarea-user-name').val(nameValue);} 

  //save the values of input fields in variables
  emailValue = $('.input-user-email-value').val();
  phoneValue = $('.input-user-phone-value').val();
  nameValue = $('.textarea-user-name').val();

  //save patterns for validation of input fields
  const PATTERNEMAIL = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const PATTERNPHONE = /^[+\d][\d\(\)\ -]{4,17}\d$/;

  //save value for localstorage and variables
  function saveValue(value, name, v) {
    localStorage.setItem(name, v);
    switch (value) {
      case emailValue: emailValue = localStorage[name]; break;
      case phoneValue: phoneValue = localStorage[name]; break;
      case nameValue: nameValue = localStorage[name]; break;
    }
  }

  //validation of values in input fields
  function validateInput(event) {
    if($(this).val() != '') { 
      if (event.data.pattern) {
        if(event.data.pattern.test($(this).val())){ //check for pattern matching
          saveValue(event.data.value, event.data.name, $(this).val());
        } else {
          $(this).val(event.data.value);  
        }
      } else {
        saveValue(event.data.value, event.data.name, $(this).val());
      }
    } else {
      $(this).val(event.data.value);
    }    
  }

  //keystroke processing
  function pressButton(event){
    if(event.which == 13) { //keystroke Enter
      $(this).blur();
    }
    if (event.which == 27) { //reystroke Escape
      $(this).val(event.data.value);
    }
  }

  $('.input-user-email-value').on('blur', 
                                  {name: 'email', value: emailValue, pattern: PATTERNEMAIL}, 
                                  validateInput);
  $('.input-user-email-value').on('keyup',
                                  {value: emailValue},
                                  pressButton);

  $('.input-user-phone-value').on('blur', 
                                  {name: 'phone', value: phoneValue, pattern: PATTERNPHONE},
                                  validateInput);
  $('.input-user-phone-value').on('keyup',
                                  {value: phoneValue},
                                  pressButton);

  $('.textarea-user-name').on('blur',
                              {name: 'name', value: nameValue},
                              validateInput); 
  $('.textarea-user-name').on('keyup',
                              {value: nameValue},
                              nameValue = pressButton);
  $('.textarea-user-name').keydown(function(eventObject) {
    if(eventObject.which == 13) {
      eventObject.preventDefault(); //cancellation of a line break
    }
    if ($(this).val().length >= '20') { //height adjustment of the input field
      $(this).height(46);
      $(this).attr('rows', '2');
    } else {
      $(this).height(23);
      $(this).attr('rows', '1');
    }
  });
})();