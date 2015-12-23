/**
 * Created by jean-michel.legrand on 02/12/2015.
 */

var TAX = 20;
var PHONE_PRICE = 600;
var PHONE_PRICE_TTC = PHONE_PRICE + PHONE_PRICE * (TAX / 100);
var bankBalance = 10000;

// return values
// no changes to the values outside of the scope of the function (intentionnal design) => you avoid side effect of a function call
// think of a funciton as self contained: you pass in values, one return value /object out
// caveat : closure when you want a funtion to remember stuff outside so that it keep track of its state

function purchasePhones(bankBalance) {
  var amountPaidTtc = 0;
  var counter = 0;
  while ((amountPaidTtc + PHONE_PRICE_TTC) < bankBalance) {
    amountPaidTtc = amountPaidTtc + PHONE_PRICE_TTC;
    counter += 1;
  }
  return {
    amountPaidTtc: amountPaidTtc,
    counter: counter
  }
}

function displayFormattedAmount(purchases) {
  console.log("The amount spent is", purchases.amountPaidTtc.toFixed(2), "EUR. You bought", purchases.counter, "phone(s)");
}

var purchases = purchasePhones(bankBalance);

displayFormattedAmount(purchases);