//your code here
const prices = document.querySelectorAll('td.kimmat')
let sum = 0
prices.forEach((e)=>{
	sum+=Number(e.innerText)
})
const tr = document.createElement('tr')
tr.innerHTML = `<td data-ns-test="grandTotal">Total: ${sum}</td>`
document.querySelector('.tbody').appendChild(tr)