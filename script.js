function checkForm()
{

if(purchaseform.firstname.value == "") {
    error = "Please fill out your first name";
    document.getElementById("firstnameerror").innerHTML = error;
    document.purchaseform.firstname.focus();
}

if(purchaseform.lastname.value == "") {
    error = "Please fill out your last name";
    document.getElementById("lastnameerror").innerHTML = error;
    document.purchaseform.lastname.focus();
}

if(purchaseform.address.value == "") {
    error = "Please fill out your address";
    document.getElementById("addresserror").innerHTML = error;
    document.purchaseform.address.focus();
}

var phonecheck = /^\s*\d{3}-\d{3}-\d{4}\s*$/;
if(purchaseform.phone.value.match(phonecheck)) {
    return true
} else {
    error = "Please use format xxx-xxx-xxxx"
    document.getElementById("phoneerror").innerHTML = error;
    document.purchaseform.phone.focus();
}

var cardcheck = /^\s*([0]{0,1}[1-9]|[1][0-2])\/((201[8-9])|(20[2-9]\d)|([3-9]\d{3})|\d{5,})\s*$/;
if(purchaseform.creditcard.value.match(cardcheck)) {
    return true
} else {
    error = "Please use format xxxx xxxx xxxx xxxx"
    document.getElementById("carderror").innerHTML = error;
    document.purchaseform.creditcard.focus();
}

var expcheck = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
if(purchaseform.expdate.value.match(expcheck)) {
    return true
} else {
    error = "Please use format MM/YYYY"
    document.getElementById("carddateerror").innerHTML = error;
    document.purchaseform.expdate.focus();
}


}


function checkTotal() {
document.purchaseform.total.value = "";
		var sum = 0;
		for (i=0;i<document.purchaseform.item.length;i++) {
		  if (document.purchaseform.item[i].checked) {
		  	sum = sum + parseInt(document.purchaseform.item[i].value);
		  }
		}
        document.purchaseform.total.value = sum;
        if (sum == 0) {
            error = "Please choose an item";
            document.getElementById("ordererror").innerHTML = error;
        }
}

function clearform() {
    document.purchaseform.reset();
    document.purchaseform.firstname.focus();
}

