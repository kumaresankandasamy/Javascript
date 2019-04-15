function calc(){
		var n1=parseInt(document.getElementById('n1').value);
		var n2=parseInt(document.getElementById('n2').value);
		var op=document.getElementById('operators').value;
		switch(op){
			case '+':
			document.getElementById('result').value = n1+n2;
			break;
			case '-':
			document.getElementById('result').value=n1-n2;
			break;
			case '*':
			document.getElementById('result').value=n1*n2;
			break;
			case '/':
			document.getElementById('result').value=n1/n2;
			break;
			default:
			console.log("wrong value");
			break;
		}

	}