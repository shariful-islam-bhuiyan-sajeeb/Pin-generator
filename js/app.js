
 function  getPin (){
    const pin = generatePin()
    const pinString = pin + '';

    if( pinString.length === 4){
        return pin;
    }
     else{
        return getPin;
     }
 }

function generatePin (){
   const random = Math.round(Math.random()*10000);
    return random;
 }

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();

    //   display pic handelar .

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;


    const typeNumberField = document.getElementById('type-number');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN (number)){
        if(number ==='C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remingDigits = digits.join('');
            typeNumberField.value = remingDigits;
        }

       
    }
    else{
       
        const newtypeNumber = previousTypeNumber + number;
        typeNumberField.value =newtypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('type-number');
     const typeNumber = typeNumberField.value;

    const pinSuccessMassage = document.getElementById('success-massege');
    const PinUnSuccessMassege = document.getElementById('unsuccess-massege');
     if( typeNumber === currentPin){
         
            pinSuccessMassage.style.display = 'block';
         PinUnSuccessMassege.style.display = 'none';

     }
     else{
         
         PinUnSuccessMassege.style.display = 'block';
         pinSuccessMassage.style.display = 'none';
     }
})



