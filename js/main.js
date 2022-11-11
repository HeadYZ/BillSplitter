'use strict'

const people = document.querySelector('#people')
const price = document.querySelector('#price')
const tip = document.querySelector('#tip')
const countBtn = document.querySelector('.bottom__btn')
const errorInfo = document.querySelector('.bottom__error')
const scoreInfo = document.querySelector('.bottom__cost')
const costInfo = document.querySelector('.bottom__cost-info')


const showBill = () => {
	if (people.value !== '' && price.value !== '') {
		countBill()
	} else {
		errorInfo.textContent = 'Uzupełnij poprawnie wszystkie pola :)'
		costInfo.style.display = 'none'
	}
}

const countBill = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)
	const score = (newPrice + newPrice * newTip) / newPeople

	scoreInfo.textContent = score.toFixed(2)
	costInfo.style.display = 'block'
	errorInfo.textContent = ''
}

countBtn.addEventListener('click', showBill)
