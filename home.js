document.getElementById('add-btn').addEventListener('click',function(e){
    e.preventDefault()
      const selectBank = document.getElementById('select-bank').value
      const accountNumber = document.getElementById('account-number').value
      const addAmmount =parseInt( document.getElementById('add-ammount').value)
      const addPin = document.getElementById('add-pin').value
      const availableBalance =document.getElementById('available-balance').innerText
      const newAvailableBalance =parseInt(availableBalance)
      console.log(addAmmount,addPin,accountNumber,selectBank,newAvailableBalance)
      const totalBalance = newAvailableBalance + addAmmount

      console.log(totalBalance)
      document.getElementById('available-balance').innerText = totalBalance;

      
})