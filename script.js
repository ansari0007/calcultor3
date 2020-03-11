function insert(a){
	
	var x=a;
	
		
	if(x==='='){
		
		
		document.getElementById('disp').value=eval(document.getElementById('disp').value);
		
		
	}
	else if(x==='c'){
		
		document.getElementById('disp').value='';
		
	}
	else{
		
	var y=document.getElementById('disp');
		y.value+=a;	
		y.style.color='blue';
		y.style.fontSize='1.5em';	
		
	}
	
	
	
	

	
}