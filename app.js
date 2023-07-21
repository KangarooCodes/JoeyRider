$(document).ready(function(){

	const senderName = document.getElementById('name');
	const senderEmail = document.getElementById('email');
	const message = document.getElementById('message')
	$('#form-btn').on('click', function() {
		// console.log('hello')
		console.log(senderName.value)
		console.log(senderEmail.value)
		console.log(message.value)		
		// window.location.href = `mailto:riderj@live.com?subject=Lets%20Chat!&body=${message.value}`;
		senderName.value = ''
		senderEmail.value = ''
		message.value = ''
		setTimeout( function() {
			alert('Joey has been notified and is eager to respond :) Please allow ample to for response.')
		},500)
	});

})
