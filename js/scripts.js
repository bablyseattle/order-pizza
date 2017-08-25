//Business Logic
function arraySum(array){
	var sum = array.reduce(function(total,value){
		return total + value;
	},0);
	return sum;
}
function Pizza(size){
	this.size = size;
	this.toppings =[];
}
Pizza.prototype.cost = function(){
	var baseCost = 10;
	var toppingCost = arraySum(this.toppings);
	var pizzaCost = 0;
	if(this.size == "small"){
		pizzaCost = baseCost + toppingCost;
	}
	else if(this.size == "medium"){
		pizzaCost = baseCost * 1.3 + toppingCost * 1.5;
	}
	else{
		pizzaCost = baseCost * 1.9 + toppingCost * 2.0;
	}
	return pizzaCost;
}


//User Interface Logic
$(document).ready(function(){
	$("form").submit(function(e){
		e.preventDefault();
		var toppingsInput = [];
		var inputSize = $("input:radio[name=size]:checked").val();
		$("input:checkbox[name=topping]:checked").each(function(){
			toppingsInput.push(parseInt($(this).val()));
			
		});
		var myPizza = new Pizza(inputSize);
		myPizza.toppings = toppingsInput;
		$("#cost").text(myPizza.cost());
		
	});

});