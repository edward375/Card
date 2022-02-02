const numberCard =document.querySelector(".numberCard")
const cardHolder = document.querySelector(".cardHolder")
const cardExpires = document.querySelector(".cardExpires")
const cardNumber = document.querySelector(".cardNumber>input")
const namePerson = document.querySelector(".namePerson>input")
const month = document.querySelector(".month")
const year = document.querySelector(".year")
const cvv = document.querySelector(".cvv")

numberCard.textContent = "#### #### #### ####"
cardNumber.addEventListener("input", ev => {
    // console.log(ev.target.value);
    const valueCardNumber = ev.target.value
    console.log(ev.target.value);

    for (let i = 0; i < valueCardNumber.length; i++) {
        let a = valueCardNumber[i];
        numberCard.textContent = numberCard.textContent + "array[" + i + "].value= "
            + a.value + " ";
        console.log(valueCardNumber[i], "valoarea input");
        console.log(numberCard.textContent, "valoarea care trebie sa fie adaugata");

    }

    document.getElementById("par").innerHTML = numberCard.value;
    document.getElementById("po").innerHTML = "input";
})
    // if (arr.length){
    //     // const valueNumber =`${arr[0]}${arr[1]}${arr[2]}${arr[3]} ${arr[4]}${arr[5]}${arr[6]}${arr[7]} ${arr[8]}${arr[9]}${arr[10]}${arr[11]} ${arr[12]}${arr[13]}${arr[14]}${arr[15]}`
    //     // console.log(valueNumber);
    //     return numberCard.textContent = valueNumber
    // }
