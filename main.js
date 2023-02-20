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

//Total
const sOutputTotalEl = document.querySelector("#s-output-total");

//Reset Button
const resetButtonEl = document.querySelector("#reset-button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        let tipValue = e.target.attributes[2].nodeValue;

        sInputNumPeopleEl.addEventListener("input", (event) => {

            if(sInputNumPeopleEl.value <= 0) {
                sInputNumPeopleEl.classList.add("input-attention");
                sInputNumPeopleLabelEl.innerHTML = "Can't be zero"
                sInputNumPeopleLabelEl.classList.add("label-attention")
            } else {
                sInputNumPeopleEl.classList.remove("input-attention");
                sInputNumPeopleLabelEl.innerHTML = "";
                sInputNumPeopleLabelEl.classList.remove("label-attention");

                resetButtonEl.classList.add("active");

                calcTipAmount(parseFloat(sInputBillEl.value), parseInt(tipValue), parseInt(sInputNumPeopleEl.value));                    
            }
        })
    })
})

tipInputCustomEl.addEventListener("input", () => {
    let tipValue = tipInputCustomEl.value;

    sInputNumPeopleEl.addEventListener("input", (event) => {

        if(sInputNumPeopleEl.value <= 0) {
            sInputNumPeopleEl.classList.add("input-attention");
            sInputNumPeopleLabelEl.innerHTML = "Can't be zero"
            sInputNumPeopleLabelEl.classList.add("label-attention")
        } else {
            sInputNumPeopleEl.classList.remove("input-attention");
            sInputNumPeopleLabelEl.innerHTML = "";
            sInputNumPeopleLabelEl.classList.remove("label-attention");

            resetButtonEl.classList.add("active");

            calcTipAmount(parseFloat(sInputBillEl.value), parseInt(tipValue), parseInt(sInputNumPeopleEl.value));                    
        }
    })
})

const tipButton5El = document.querySelector("#tip-button-5");
tipButton5El.addEventListener("click", (event) => {
    event.preventDefault();
    tipButton5El.classList.add("clicked");
    tipButton10El.classList.remove("clicked");
    tipButton15El.classList.remove("clicked");
    tipButton25El.classList.remove("clicked");
    tipButton50El.classList.remove("clicked"); 
});

const tipButton10El = document.querySelector("#tip-button-10");
tipButton10El.addEventListener("click", (event) => {
    event.preventDefault();
    tipButton5El.classList.remove("clicked");
    tipButton10El.classList.add("clicked");
    tipButton15El.classList.remove("clicked");
    tipButton25El.classList.remove("clicked");
    tipButton50El.classList.remove("clicked");
});

const tipButton15El = document.querySelector("#tip-button-15");
tipButton15El.addEventListener("click", (event) => {
    event.preventDefault();
    tipButton5El.classList.remove("clicked");
    tipButton10El.classList.remove("clicked");
    tipButton15El.classList.add("clicked");
    tipButton25El.classList.remove("clicked");
    tipButton50El.classList.remove("clicked");
});

const tipButton25El = document.querySelector("#tip-button-25");
tipButton25El.addEventListener("click", (event) => {
    event.preventDefault();
    tipButton5El.classList.remove("clicked");
    tipButton10El.classList.remove("clicked");
    tipButton15El.classList.remove("clicked");
    tipButton25El.classList.add("clicked");
    tipButton50El.classList.remove("clicked");
});

const tipButton50El = document.querySelector("#tip-button-50");
tipButton50El.addEventListener("click", (event) => {
    event.preventDefault();
    tipButton5El.classList.remove("clicked");
    tipButton10El.classList.remove("clicked");
    tipButton15El.classList.remove("clicked");
    tipButton25El.classList.remove("clicked");
    tipButton50El.classList.add("clicked");
});


function calcTipAmount(b, t, p) {

    let tipAmount = ((b * t) / 100) / p;
    tipAmount = Math.floor(tipAmount * 100) / 100

    sOutputTipAmountEl.value = new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    }).format(tipAmount);

    let total = ((b * t) / 100)
    total = (total + b) / p;
    total = Math.floor(total * 100) / 100

    sOutputTotalEl.value = new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    }).format(total);

    resetButtonEl.addEventListener("click", () => {
        sInputBillEl.value = "";
        t = "";
        sInputNumPeopleEl.value = "";
        tipButton5El.classList.remove("clicked");
        tipButton10El.classList.remove("clicked");
        tipButton15El.classList.remove("clicked");
        tipButton25El.classList.remove("clicked");
        tipButton50El.classList.remove("clicked");
        sOutputTipAmountEl.value = "";
        sOutputTotalEl.value = "";
        tipInputCustomEl.value = "";
        resetButtonEl.classList.remove("active");

        sInputNumPeopleEl.classList.remove("input-attention");
        sInputNumPeopleLabelEl.innerHTML = "";
        sInputNumPeopleLabelEl.classList.remove("label-attention");
    })
}