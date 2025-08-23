 const validPin = 1234
  


//   add money feature 
document.getElementById('add-btn').addEventListener('click',function(e){
    e.preventDefault()
      const selectBank = document.getElementById('select-bank').value
      
      const accountNumber = document.getElementById('account-number').value     
      const addAmmount =parseInt( document.getElementById('add-ammount').value)
      const addPin = parseInt(document.getElementById('add-pin').value)
      const availableBalance =document.getElementById('available-balance').innerText
      if (selectBank === 'select') {
       alert('Please select pay method');
       return;
       }

      if(accountNumber.length <11 ){
             alert('Please Provide a Valid Account Numer');
             return;
      }
      if(addAmmount<0 ){
         alert('please provide a valid ammount')
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
// cashout money feature
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


//  transfer Money 

  document.getElementById('transfer-btn').addEventListener('click',function(e){
    e.preventDefault()
    const transferAccountNumber = document.getElementById('transfer-account-number').value
    const  transferMoney = parseInt(document.getElementById('transfer-money').value)  
    const transferPin = parseInt(document.getElementById('transfer-pin').value)   
    if(transferAccountNumber.length < 11){
        alert('plese provide a valid account number')
        return;
    }
    if(transferPin !== validPin){
        alert('plese provide a valid pin')
        return;
    }

     const preasentBalance =parseInt(document.getElementById('available-balance').innerText)
     const transferBalance = preasentBalance - transferMoney 
    document.getElementById('available-balance').innerText = transferBalance
   
  })



//   get cupon 





// pay bill fiture 

document.getElementById('paybill-btn').addEventListener('click',function(e){
    e.preventDefault()
     const selectCard = document.getElementById('select-card').value 
     const billerAccountNumbr =parseInt( document.getElementById('biller-account-number').value);
     const paybillAmount = parseInt(document.getElementById('paybill-ammount').value)
     const payPin = parseInt(document.getElementById('pay-pin').value)


    if (selectCard === 'select back ') {
    alert('Please select pay method');
    return;
  }
      
     if(billerAccountNumbr.length <11){
        alert('please provide a valid account')
        return;
     }if(paybillAmount<0 ){
         alert('please provide a valid ammount')
         return;
     }
     if(isNaN(Number(paybillAmount))){
         alert('please provide a valid ammount')
         return;
     }
     if(payPin !==validPin){
        alert('please provide a valid pin')
         return;
     }
    
     const fullBalance = parseInt(document.getElementById('available-balance').innerText)

     const finalBalance =  fullBalance - paybillAmount;
     document.getElementById('available-balance').innerText = finalBalance
    
})














//  toggoloing fratue 
     document.getElementById('add-button').addEventListener('click', function(){
     document.getElementById('cashout-parent').style.display='none'
     document.getElementById('add-money-parent').style.display ='block'
     document.getElementById('transfer-parent').style .display='none'
     document.getElementById('cupon-parent').style.display='none'
     document.getElementById('paybill-parent').style.display ='none'
})
     document.getElementById('cashout-button').addEventListener('click', function(){
     document.getElementById('add-money-parent').style.display='none'
     document.getElementById('cashout-parent').style.display ='block'
     document.getElementById('transfer-parent').style .display='none'
     document.getElementById('cupon-parent').style.display='none'
     document.getElementById('paybill-parent').style.display ='none'
})
    document.getElementById('transfer-button').addEventListener('click',function(){
    document.getElementById('transfer-parent').style .display='block'
    document.getElementById('add-money-parent').style.display='none'
    document.getElementById('cashout-parent').style.display='none'
    document.getElementById('cupon-parent').style.display='none'
    document.getElementById('paybill-parent').style.display ='none'
})
    document.getElementById('cupon-button').addEventListener('click',function(){
    document.getElementById('cupon-parent').style.display='block'
    document.getElementById('transfer-parent').style .display='none'
    document.getElementById('add-money-parent').style.display='none'
    document.getElementById('cashout-parent').style.display='none'
    document.getElementById('paybill-parent').style.display ='none'
})
    document.getElementById('pay-button').addEventListener('click',function(){
    document.getElementById('paybill-parent').style.display ='block'
    document.getElementById('cupon-parent').style.display='none'
    document.getElementById('transfer-parent').style .display='none'
    document.getElementById('add-money-parent').style.display='none'
    document.getElementById('cashout-parent').style.display='none'
})



