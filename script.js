//   log in button functionality 
document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault()
     const mobileNumber = 1642282064
     const pinNumber = 1234
     const mobileNumberValue = document.getElementById('mobile-number').value
     const mobileNumberValueConverted = parseInt(mobileNumberValue);
     const pinNumberValue = document.getElementById('pin-number').value
     const pinNumberValueConverted = parseInt(pinNumberValue);
     if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
      window.location.href="./home.html"
     }else{
        alert('invalid information')
     }


})