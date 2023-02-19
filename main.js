//Bill
const sInputBillEl = document.querySelector("#s-input-bill");

//Buttons
const buttons = document.querySelectorAll(".s-input-tip-button");

//Number of people
const sInputNumPeopleLabelEl = document.querySelector("#s-input-num-people-label-attention")
const sInputNumPeopleEl = document.querySelector("#s-input-num-people");

//Input Custom
const tipInputCustomEl = document.querySelector("#tip-input-custom");

//Tip Amount
const sOutputTipAmountEl = document.querySelector("#s-output-tip-amount");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let tipValue = e.target.attributes[2].nodeValue;
        console.log(tipValue);

        sInputNumPeopleEl.addEventListener("input", (event) => {
            
            console.log(event);
            console.log(parseInt(sInputNumPeopleEl.value));

                if(sInputNumPeopleEl.value == 0) {
                    sInputNumPeopleEl.classList.add("input-attention");
                    sInputNumPeopleLabelEl.innerHTML = "Can't be zero"
                    sInputNumPeopleLabelEl.classList.add("label-attention")
                } else {
                    sInputNumPeopleEl.classList.remove("input-attention");
                    sInputNumPeopleLabelEl.innerHTML = "";
                    sInputNumPeopleLabelEl.classList.remove("label-attention");

                    calcTipAmount(parseFloat(sInputBillEl.value), parseInt(tipValue), parseInt(sInputNumPeopleEl.value));                    
                }
        });
    })
})

const tipButton5El = document.querySelector("#tip-button-5");
tipButton5El.addEventListener("click", (event) => {
    event.preventDefault();
    tipButton5El.classList.add("clicked");
    tipButton10El.classList.remove("clicked")
    tipButton15El.classList.remove("clicked")
    tipButton25El.classList.remove("clicked")
    tipButton50El.classList.remove("clicked")  
});

const tipButton10El = document.querySelector("#tip-button-10");
tipButton10El.addEventListener("click", (event) => {
    event.preventDefault();
    tipButton5El.classList.remove("clicked")
    tipButton10El.classList.add("clicked");
    tipButton15El.classList.remove("clicked")
    tipButton25El.classList.remove("clicked")
    tipButton50El.classList.remove("clicked")
});

const tipButton15El = document.querySelector("#tip-button-15");
tipButton15El.addEventListener("click", (event) => {
    event.preventDefault();
    tipButton5El.classList.remove("clicked")
    tipButton10El.classList.remove("clicked");
    tipButton15El.classList.add("clicked")
    tipButton25El.classList.remove("clicked")
    tipButton50El.classList.remove("clicked")
});

const tipButton25El = document.querySelector("#tip-button-25");
tipButton25El.addEventListener("click", (event) => {
    event.preventDefault();
    tipButton5El.classList.remove("clicked")
    tipButton10El.classList.remove("clicked");
    tipButton15El.classList.remove("clicked")
    tipButton25El.classList.add("clicked")
    tipButton50El.classList.remove("clicked")
});

const tipButton50El = document.querySelector("#tip-button-50");
tipButton50El.addEventListener("click", (event) => {
    event.preventDefault();
    tipButton5El.classList.remove("clicked")
    tipButton10El.classList.remove("clicked");
    tipButton15El.classList.remove("clicked")
    tipButton25El.classList.remove("clicked")
    tipButton50El.classList.add("clicked")
});


function calcTipAmount(b, t, p) {
    console.log(b, t, p)
}