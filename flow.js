(function () {
  "use strict";


  var sandwich = "ham";

  var sandwichObj = {
    "pb&j": 1.00,
    "ham": 2.50,
    "tuna": 1.50
  };

  function getSandwichPrice4(sandwich) {
    if (!sandwichObj.hasOwnProperty(sandwich)) {
      return 0;
    }
    return sandwichObj[sandwich];
  }


  function getSandwichPrice(sandwich) {
    switch (sandwich) {
      case "pb&j":
        return 1.00;
      case "ham":
        return 2.50;
      case "tuna":
        return 1.5;
      default:
        return 0;
    }
  }

  function getSandwichPrice2(sandwich) {
    var prices = [0, 1, 2.5, 1.5];
    var ndx;
    switch (sandwich) {
      case "pb&j":
        ndx = 1;
        break;
      case "ham":
        ndx = 2;
        break;
      case "tuna":
        ndx = 3;
        break;
      default:
        ndx = 0;
        break;
    }
    return prices[ndx];
  }


  function getSandwichPrice3(sandwich) {
    var price;
    if (sandwich === "pb&j") {
      price = 1.00;
    }
    else if (sandwich === "ham") {
      price = 2.50;
    }
    else if (sandwich === "tuna") {
      price = 1.50;
    }
    else {
      price = 0;
    }
    return price;
  }


  sandwich = "turkey";
  console.info("Your " + sandwich + " costs = $" + getSandwichPrice4(sandwich).toFixed(2))


}());