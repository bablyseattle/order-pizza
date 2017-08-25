//Business Logic
function arraySum(array){
	var sum = array.reduce(function(total,value){
		return total + value;
	},0);
	return sum;
}
function Pizza(size, quantity){
	this.size = size;
	this.quantity = quantity;
	this.toppings =[];
}
Pizza.prototype.cost = function(){
	var baseCost = 10;
	var noOfPizza = this.quantity;
	var toppingCost = arraySum(this.toppings);
	var pizzaCost = 0;
	if(this.size == "small"){
		pizzaCost = baseCost + toppingCost;
	}
	else if(this.size == "medium"){
		pizzaCost = baseCost * 1.3 + toppingCost * 1.5;
	}
	else{
		pizzaCost = baseCost * 1.9 + toppingCost * 2;
	}
	return pizzaCost * noOfPizza;
}


//User Interface Logic
$(document).ready(function(){
	$("form").submit(function(e){
		e.preventDefault();
		var toppingsInput = [];
		var quantityInput = parseInt($("#quantity").val());
		var inputSize = $("input:radio[name=size]:checked").val();
		$("input:checkbox[name=topping]:checked").each(function(){
			toppingsInput.push(parseInt($(this).val()));
			
		});
		var myPizza = new Pizza(inputSize, quantityInput);
		myPizza.toppings = toppingsInput;
		$("#cost").text(myPizza.cost());
		$(".quantityOutput").text(myPizza.quantity);
		$(".sizeOutput").text(myPizza.size);
		$(".toppingsOutput").text(myPizza.toppings);
		$("#formInput").slideToggle();
		$(".result").slideToggle();
	});

});