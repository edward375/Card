const numberCard =document.querySelector(".numberCard")
const cardHolder = document.querySelector(".cardHolder")
const cardExpires = document.querySelector(".cardExpires")
const cardNumber = document.querySelector(".cardNumber>input")
const namePerson = document.querySelector(".namePerson>input")
const month = document.querySelector(".month")
const year = document.querySelector(".year")
const cvv = document.querySelector(".cvv")


cardNumber.addEventListener("input", ev =>{
    // console.log(ev.target.value);
    const arr = ev.target.value
    // console.log(ev.target.value);
    if (arr.length){
        const valueNumber =`${funInp(arr[0])}${funInp(arr[1])}${funInp(arr[2])}${funInp(arr[3])} ${funInp(arr[4])}${funInp(arr[5])}${funInp(arr[6])}${funInp(arr[7])} ${funInp(arr[8])}${funInp(arr[9])}${funInp(arr[10])}${funInp(arr[11])} ${funInp(arr[12])}${funInp(arr[13])}${funInp(arr[14])}${funInp(arr[15])}`
        // console.log(valueNumber);
        return numberCard.innerHTML = valueNumber
    }
})
const funInp = (num) => num ? num : ' '
