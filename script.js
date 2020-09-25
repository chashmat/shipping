let input1 = document.getElementById('#email-phone-no');
let empty = "";

function displayNoneCart() {
    document.querySelectorAll('.cart-info')[0].style.display = 'none';
    document.getElementsByClassName('left')[0].style.display = 'none';
    document.getElementsByClassName('left')[1].style.display = 'flex';
}

function displayBlockCart() {
    document.querySelectorAll('.cart-info')[0].style.display = 'block';
    document.getElementsByClassName('left')[0].style.display = 'flex';
    document.getElementsByClassName('left')[1].style.display = 'none';
}

function emailPhoneNo() {
    // document.querySelector('label').style.transform = 'translate(-48vw, 5px)';
    // document.querySelector('label').style.fontSize = '11px';
}

function validation() {
    if (input1 == empty) {
        input1.style.outlineColor = '#EF476F';
    }
}

function enableBtn() {
    if (document.getElementById('discount-input') == empty) {
        document.querySelector('.discount button').setAttribute("disabled", true);
    }
    if (document.getElementById('discount-input') != empty) {
        document.querySelector('.discount button').removeAttribute("disabled");
    }
}

function select() {
    document.querySelector('.value').innerHTML = document.querySelector('select').value;
}