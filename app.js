$(document).ready(function(){
	var clickCounter=0;
$("body").on('click', '#initialButton', function(){
		$("body").append("<div class='newDiv' data-button-toggle='1'><p>"+'Here are the number of clicks'+"<br><span class='clickCount'</span>"+"</p><br><button class='changeColor'>"+"Change Color"+"</button><button class='removeParent'>"+"Remove Parent Div"+"</button></div>");
		clickCounter+=1;
		$(".clickCount").text(clickCounter)

});
$('#initialDiv').on('click',' .newdiv .changeColor',function() {
	console.log("THIS CLICK WORKS!");
		
});

});
