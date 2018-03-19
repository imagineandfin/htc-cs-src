(() => {
	if (localStorage['interests'] != undefined) {
		$('.user-interest').remove();
		if (localStorage['interests'] != 'none') {
			let interests = JSON.parse(localStorage['interests']);
			$('.user-interest').remove();
			for (let i = 0; i < interests.length; i++) {
				$('.block-user-interests').append('<div class="user-interest">' + interests[i] + '</div>');
			}
		}
	}

	function saveInterests() {
		let newInterests = [];
		if (!$('.user-interest').length) {
			localStorage.setItem('interests', 'none');
		} else {
			for (let i = 0; i < $('.user-interest').length; i++) {
				newInterests[i] = $('.user-interest:eq(' + i + ')').html();
				localStorage.setItem('interests', JSON.stringify(newInterests));
			}
		}
	}

	function removeInterest() {
		$(this).remove();
		saveInterests();
		$('.block_position_right').jScrollPane();
	}

	$('.user-interest').click(removeInterest);

	$('.button-addinterest').click(function() {
		if ($('.input-addinterest').val().length) {
			$('.block-user-interests').prepend('<div class="user-interest">' + $('.input-addinterest').val() + '</div>');
			saveInterests();
			$('.user-interest').click(removeInterest);
			$('.input-addinterest').val('');
			$('.block_position_right').jScrollPane();
		}
	});

	 $('.input-addinterest').keyup(function(eventObject){
    if(eventObject.which == 13) {
      $('.button-addinterest').click();
    }
    if (eventObject.which == 27) {
      $(this).val('');
    }
  });
})();