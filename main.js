let baseGlobal = 'binary';

function convertDecimal(){
     
    let inputValue = document.getElementById("input").value; 
    let base = baseGlobal;
    let errorMsg = 'the input numbers are not correct!';

    console.log(base);

    switch (base) {
        case 'binary':
            console.log('enter switch binary');
            if(inputValue.match(/^[0-1]+$/)){
                let convertValue = parseInt(inputValue,2);
                console.log(convertValue);
                document.getElementById("result").innerHTML = convertValue;
                document.getElementById("input").value = "";
        
            }else{
                alert(errorMsg);
            }
            break;

        case 'hexadecimal':
            console.log('enter switch hexadecimal');
            if(inputValue.match(/^[A-Fa-f0-9]+$/)){
                let convertValue = parseInt(inputValue,16);
                console.log(convertValue);
                document.getElementById("result").innerHTML = convertValue;
                document.getElementById("input").value = "";
        
            }else{
                alert(errorMsg);
            }

            break;

        case 'octal':
            console.log('enter switch octal');
            if(inputValue.match(/^[0-9]+$/)){
                let convertValue = parseInt(inputValue,8);
                console.log(convertValue);
                document.getElementById("result").innerHTML = convertValue;
                document.getElementById("input").value = "";
        
            }else{
                alert(errorMsg);
            }
            break;

        default:
            console.log('n/a base');
    }
}

function baseValue(baseValue){

    console.log(baseValue);
    document.getElementById("base").innerHTML = baseValue;

    if(baseValue){
        baseGlobal = baseValue;
    }
}
   