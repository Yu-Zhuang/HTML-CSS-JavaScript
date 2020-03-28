var num=1019;
var flag=true;

while(flag){
	code=prompt("enter code: ");
	if(code==num){
		alert("you are right");
		flag=false;		
	}
	else{
		alert("wrong code, try again!");
	}
}
