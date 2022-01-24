const bill = document.querySelector('#amount');
const erorBill = document.querySelector('.bill-eror');
const erorPeople = document.querySelector('.people-number');
const person = document.querySelector('#number-people');
const buttons = document.querySelectorAll('.btn-input');
const reset = document.querySelector('.reset');
const totalTip = document.querySelector('.totaltip');
const totalBill = document.querySelector('.total-bill')
const customTip = document.querySelector('.custom-input')

function tipAmount(value) {
    if (bill.value != 0 && person.value != 0 && value != 0) {
        bill.style.border = 'none';
        person.style.border = 'none';
        return [(((bill.value * value) / 100) / person.value), (bill.value / person.value)];
    } else if ((bill.value == 0 || bill.value == '') && (person.value == 0 || person.value == '')) {
        erorBill.innerText = 'Can\'t be zero';
        erorPeople.innerText = 'Can\'t be zero';
        bill.style.outline = 'none';
        person.style.outline = 'none';
        bill.style.border = '2px solid red';
        person.style.border = '2px solid red';
        return [0, 0];
    } else if (person.value == 0 || person.value == '') {
        person.style.border = '2px solid red';
        person.style.outline = 'none';
        erorPeople.innerText = 'Can\'t be zero';
        return [0, 0];
    } else if (bill.value == 0 || bill.value == '') {
        bill.style.border = '2px solid red';
        bill.style.outline = 'none';
        erorBill.innerText = 'Can\'t be zero';
        return [0, 0];
    }
}

function custom(value) {
    if (Number(value.value) != 0 || Number(value.value) != '') {
        bill.style.border = 'none';
        person.style.border = 'none';
        customTip.style.border = 'none';
        return [(((bill.value * value.value) / 100) / person.value), (bill.value / person.value)]
    } else if ((bill.value == 0 || bill.value == '') && (person.value == 0 || person.value == '')) {
        erorBill.innerText = 'Can\'t be zero';
        erorPeople.innerText = 'Can\'t be zero';
        bill.style.outline = 'none';
        person.style.outline = 'none';
        bill.style.border = '2px solid red';
        person.style.border = '2px solid red';
        return [0, 0];
    } else if (person.value == 0 || person.value == '') {
        person.style.border = '2px solid red';
        person.style.outline = 'none';
        erorPeople.innerText = 'Can\'t be zero';
        return [0, 0];
    } else if (bill.value == 0 || bill.value == '') {
        bill.style.border = '2px solid red';
        bill.style.outline = 'none';
        erorBill.innerText = 'Can\'t be zero';
        return [0, 0];
    }
}

buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        buttons.forEach(function(btnSelect) {
            btnSelect.className = 'btn-input';
            erorBill.innerText = '';
            erorPeople.innerText = '';
            customTip.style.border = 'none';
        })
        btn.classList.add('btn-active');

        let variable = 0;
        variable = (Number((Array.from(event.target.value)).filter((el, i) => i < event.target.value.length - 1).join('')));

        if (String(tipAmount(variable)[0]) == 'NaN') {
            totalTip.innerText = '0.00';
            totalBill.innerText = '0.00';
        } else {
            totalTip.innerText = tipAmount(variable)[0].toFixed(2);
            totalBill.innerText = tipAmount(variable).reduce((acc, cur) => acc + cur).toFixed(2);
        }
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
    customTip.value = '';
})

customTip.addEventListener('input', function() {
    buttons.forEach(function(btnSelect) {
        btnSelect.className = 'btn-input';
        erorBill.innerText = '';
        erorPeople.innerText = '';
    })
    if (String(custom(customTip)[0]) == 'NaN') {
        totalTip.innerText = '0.00';
        totalBill.innerText = '0.00';
    } else {
        totalTip.innerText = custom(customTip)[0].toFixed(2);
        totalBill.innerText = custom(customTip).reduce((acc, cur) => acc + cur).toFixed(2);
    }
})