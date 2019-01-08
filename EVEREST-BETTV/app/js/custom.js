$(document).ready(function() {

	$('#show-modal-multiscreen').click( function(){showModal(this);});
	$('#show-modal-incomes').click( function(){showModal(this);});
	//$('#show-modal-setting').click( function(){showModal(this);});
	$('#show-modal-journal').click( function(){showModal(this);});
	$('#show-modal-ckeck').click( function(){showModal(this);});
	$('#show-modal-check-result').click( function(){showModal(this);});
	$('#show-modal-multincomes').click( function(){showModal(this);});
	$('#show-modal-return').click( function(){showModal(this);});
	$('#show-modal-incomes-info').click( function(){showModal(this);});
	$('#show-modal-setup-white').click( function(){showModal(this);});

	$('#show-modal-information').click( function(){showModal(this); $('#modal-return').fadeOut(400);});
	$('#show-modal-confirm-print').click( function(){showModal(this); $('#modal-incomes').fadeOut(400);});


	$('.close-modal').click(function(event){
		var modal = $(this).attr('modal-close');
		$(modal).fadeOut(400);
	});


	function showModal(id){
		console.log(id)
		var modal = $(id).attr('modal-show');
		$('.modal-rate').fadeOut(400);
		$(modal).fadeIn(400);
	}

});