<script>
		
function power(){
	var b = parseInt(prompt("Enter the number you want to be the base value.")) 
	var p = parseInt(prompt("Enter the power you want to raise your base to."))
	//base 3, power 5 3x3x3x3x3
	var ans = 1;
	for(var i = 1; i<=p; i++){
		ans=ans*b
	}
    document.write("Answer is " + ans)

} 


//Calling the function
power()



</script>
