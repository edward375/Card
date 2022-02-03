const numberCard =document.querySelector(".numberCard")
const cardHolder = document.querySelector(".cardHolder")
const cardExpires = document.querySelector(".cardExpires")
const cardNumber = document.querySelector(".cardNumber>input")
const namePerson = document.querySelector(".namePerson>input")
const month = document.querySelector(".month")
const year = document.querySelector(".year")
const cvv = document.querySelector(".cvv")

const defaultContent = "#### #### #### ####"
cardNumber.addEventListener("input", ev => {
    // console.log(ev.target.value);
    const valueCardNumber = ev.target.value
    // console.log(ev.target.value);


    console.log(numberCard)
    console.log(valueCardNumber)

 const   objIndex = valueCardNumber.split((index => index.id === 1));
    console.log(objIndex, "aaa");
    // if (valueCardNumber.length < 4){
    //     numberCard.innerHTML += valueCardNumber[valueCardNumber.length -1];
    // }
    // if (valueCardNumber.length >= 5 && valueCardNumber.length <= 13){
    //     numberCard.innerHTML += "#";
    // }
    // if (valueCardNumber.length > 13 && valueCardNumber.length <= 16){
    //     numberCard.innerHTML += valueCardNumber[valueCardNumber.length -1];
    // }

    objIndex.forEach((elem) =>{
        console.log(elem);
        if (elem.length < 4){
            numberCard.innerHTML += elem[elem.length -1];
        }
        if (elem.length >= 5 && elem.length <= 13){
            numberCard.innerHTML += "#";
        }
        if (elem.length > 13 && elem.length <= 16){
            numberCard.innerHTML += elem[elem.length -1];
        }
    })
})
    // if (arr.length){
    //     // const valueNumber =`${arr[0]}${arr[1]}${arr[2]}${arr[3]} ${arr[4]}${arr[5]}${arr[6]}${arr[7]} ${arr[8]}${arr[9]}${arr[10]}${arr[11]} ${arr[12]}${arr[13]}${arr[14]}${arr[15]}`
    //     // console.log(valueNumber);
    //     return numberCard.textContent = valueNumber
    // }
