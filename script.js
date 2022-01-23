const bill = document.querySelector('#amount');
const erorBill = document.querySelector('.bill-eror');
const erorPeople = document.querySelector('.people-number');
const person = document.querySelector('#number-people');
const buttons = document.querySelectorAll('.btn-input');
const reset = document.querySelector('.reset');
const totalTip = document.querySelector('.totaltip');
const totalBill = document.querySelector('.total-bill')

function tipAmount(value) {
    if (bill.value != 0 && person.value != 0 && value != 0) {
        return [(((bill.value * value) / 100) / person.value), (bill.value / person.value)];
    } else if ((bill.value == 0 || bill.value == '') && (person.value == 0 || person.value == '')) {
        erorBill.innerText = 'Can\'t be zero';
        erorPeople.innerText = 'Can\'t be zero';
        return [0, 0];
    } else if ((typeof bill.value == String) && (typeof person.value == String)) {
        erorBill.innerText = 'Unvalid bill';
        erorPeople.innerText = 'Unvalid bill';
        return [0, 0];
    } else if (person.value == 0 || person.value == '') {
        erorPeople.innerText = 'Can\'t be zero';
        return [0, 0];
    } else if (typeof person.value == String) {
        erorPeople.innerText = 'Unvalid bill';
        return [0, 0];
    } else if (bill.value == 0 || bill.value == '') {
        erorBill.innerText = 'Can\'t be zero';
        return [0, 0];
    } else if (typeof bill.value == String) {
        erorBill.innerText = 'Unvalid bill';
        return [0, 0];
    }
}

// function total(value) {
//     if (bill.value != 0 && person.value != 0 && value != 0) {
//         return (bill.value / person.value) + tipAmount(value);
//     } else if (person.value == 0 || person.value == '') {
//         bill.innerText = 'Can\'t be zero';
//         return 0;
//     } else if (typeof person.value == String) {
//         bill.innerText = 'Unvalid bill';
//         return 0;
//     }
// }

buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        buttons.forEach(function(btnSelect) {
            btnSelect.className = 'btn-input';
            erorBill.innerText = '';
            erorPeople.innerText = '';
        })
        btn.classList.add('btn-active');

        let variable = 0;
        variable = (Number((Array.from(event.target.value)).filter((el, i) => i < event.target.value.length - 1).join('')));

        totalTip.innerText = tipAmount(variable)[0].toFixed(2);
        totalBill.innerText = tipAmount(variable).reduce((acc, cur) => acc + cur).toFixed(2);
    })
})

reset.addEventListener('click', function() {
    buttons.forEach(function(button) {
        button.className = 'btn-input';
    })
    erorBill.innerText = '';
    erorPeople.innerText = '';
    totalTip.innerText = '0.00';
    totalBill.innerText = '0.00';
    bill.value = '';
    person.value = '';
})