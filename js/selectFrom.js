function selectFrom(lowerValue,upperValue){
	var choices = upperValue - lowerValue;
	return Math.floor(Math.random()*choices + lowerValue);
}
var num = selectFrom(2,10);
	console.log(num);