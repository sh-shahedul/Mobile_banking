 const validPin = 1234
//   add money ffeature 
document.getElementById('add-btn').addEventListener('click',function(e){
    e.preventDefault()
      const selectBank = document.getElementById('select-bank').value
      const accountNumber = document.getElementById('account-number').value
     
      
      const addAmmount =parseInt( document.getElementById('add-ammount').value)
      const addPin = parseInt(document.getElementById('add-pin').value)
      const availableBalance =document.getElementById('available-balance').innerText
       if(accountNumber.length <11){
             alert('Please Provide a Valid Account Numer');
             return;
      }
      if(addPin !== validPin){
        alert('Please Provide a Valid pin Numer')
        return;
      }
      const newAvailableBalance =parseInt(availableBalance)
      
      const totalBalance = newAvailableBalance + addAmmount

    
      document.getElementById('available-balance').innerText = totalBalance;

      
})
// cashout mony feature
 document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()
    const agentNumber = parseInt( document.getElementById('agent-number').value)

    const withdrawMoney = parseInt(document.getElementById('withdraw-money').value)
   
    const cashoutPin =parseInt( document.getElementById('cashout-pin').value);
      
    if(agentNumber.length<11){
        alert('Please Provide a Valid Agent Number')
        return;
    }
    if(cashoutPin!==validPin){
        alert('Please Provide a Valid pin Numer')
        return;
    }
     const mainaBalance = parseInt(document.getElementById('available-balance').innerText)
     const withdrawBalance = mainaBalance-withdrawMoney
   
     document.getElementById('available-balance').innerText=withdrawBalance;


 })


//  toggoloing fratue 
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cashout-parent').style.display='none'
    document.getElementById('add-money-parent').style.display ='block'
})
document.getElementById('cashout-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display='none'
    document.getElementById('cashout-parent').style.display ='block'
})




