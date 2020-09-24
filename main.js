function convertDecimal(){
     
    let inputValue = document.getElementById("input").value; 
    let errorMsg = 'The input values can only contain 1 and 0!';

    console.log('input value: ',inputValue);

    if(inputValue.match(/^[0-1]+$/)){
        let convertValue = parseInt(inputValue,2);
        console.log('converted value: ',convertValue);
        document.getElementById("result").innerHTML = convertValue;
        document.getElementById("input").value = "";
        
    }else{
        alert(errorMsg);
    }
}
   