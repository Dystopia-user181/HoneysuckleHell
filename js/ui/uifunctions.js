"use strict";

function pluralize(value, amount, plural) {
    if (value === undefined || amount === undefined)
      throw "Arguments must be defined";
    let isSingular = true;
    if (typeof amount === "number") {
      isSingular = amount === 1;
    } else if (amount instanceof Decimal) {
      isSingular = amount.eq(1);
    } else {
      throw "Amount must be either a number or Decimal";
    }
    if (isSingular) return value;
    return plural === undefined ? `${value}s` : plural;
  }

  Vue.filter("pluralize", pluralize);