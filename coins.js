/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var input = .67;
var remainder = 0;

function coinCounter (money) {

  var coinPurse = {
      quarters: 0,
      dimes: 0,
      nickles: 0,
      pennies: 0
    };

    coinPurse.quarters = Math.floor(money / .25);
    remainder = money - (.25 * coinPurse.quarters);
    coinPurse.dimes = Math.floor(remainder / .10);
    remainder = remainder - (.10 * coinPurse.dimes);
    coinPurse.nickles = Math.floor(remainder / .05);
    remainder = remainder - (.05 * coinPurse.nickles);
    coinPurse.pennies = Math.floor(remainder/ .01);
    console.log(coinPurse);
    
  return coinPurse;
}

var returnedCoins = coinCounter(input);
console.log(coinCounter(input));


//var coins = coinCounter()
//console.log();