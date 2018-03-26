(() => {
	if (localStorage['interests'] != undefined) { //if there is data in the depository about interests
		$('.user-interest').remove(); //then remove the elements of interest
		if (localStorage['interests'] != 'none') { //if there is data in the repository, there are interests
			let interests = JSON.parse(localStorage['interests']); //store the data in a variable from the repository
			$('.user-interest').remove();
			for (let i = 0; i < interests.length; i++) { //add elements of interest
				$('.block-user-interests').append('<div class="user-interest">' + interests[i] + '</div>');
			}
		}
	}

	//save the interests
	function saveInterests() {
		let newInterests = [];
		if (!$('.user-interest').length) { //if all interests are deleted
			localStorage.setItem('interests', 'none');
		} else {
			for (let i = 0; i < $('.user-interest').length; i++) {
				newInterests[i] = $('.user-interest:eq(' + i + ')').html();
				localStorage.setItem('interests', JSON.stringify(newInterests)); //save a list of interests in localstorage
			}
		}
	}

	//remove the interests
	function removeInterest() {
		$(this).remove();
		saveInterests();
		$('.block_position_right').jScrollPane(); //check whether you need a scrollbar
	}

	$('.user-interest').click(removeInterest);

	$('.button-addinterest').click(function() {
		if ($('.input-addinterest').val().length) {
			$('.block-user-interests').prepend('<div class="user-interest">' + $('.input-addinterest').val() + '</div>'); //add item of interest
			saveInterests();
			$('.user-interest').click(removeInterest);
			$('.input-addinterest').val('');
			$('.block_position_right').jScrollPane();
		}
	});

	//keystroke processing
	$('.input-addinterest').keyup(function(eventObject){
    if(eventObject.which == 13) {
      $('.button-addinterest').click();
    }
    if (eventObject.which == 27) {
      $(this).val('');
    }
  });
})();