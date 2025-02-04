const billAmount = document.getElementById('totalBill')
const tipAmount = document.getElementById('percentage')
const total = document.querySelector('.total')
const calBtn = document.querySelector('.calculate')


const Calculate = (()=>{
  const billValue = billAmount.value
  const tipValue = tipAmount.value
  const totalAmount = billValue * (1 + tipValue/100)
  total.innerHTML = totalAmount.toFixed(2)
})

calBtn.addEventListener("click", Calculate)
