

var cash = 100000;
// global charge value




update_wallet();

$('.item').click(
	function() {
		
	var item = $(this).data('item'),
	    amount = $(this).data('amount');

	charge_card(amount, item);
}
);





function charge_card(amount, item) {

	if (cash >= amount) {
		cash = cash - amount;
		update_wallet();
		$('.closet-items').append(item + ', ');
		// console.log(cash);
	} else {
		alert('not enough money.')
	}
}




function update_wallet() {
	$('.cash').html(cash);
}
