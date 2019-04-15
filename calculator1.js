function calc(){
		var n1=parseInt(document.getElementById('n1').value);
		var n2=parseInt(document.getElementById('n2').value);
		var op=document.getElementById('operators').value;
		if(op==='+'){
			document.getElementById('result').value = n1+n2;
		}
		else if(op ==='-'){
			document.getElementById('result').value=n1-n2;
		}
		else if (op === '*') {
			document.getElementById('result').value=n1*n2;
		}
		else if (op === '/') {
			document.getElementById('result').value=n1/n2;
		}
		else{
			console.log("wrong");
		}

	}