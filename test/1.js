const applePriceStr = "0.4$ / kg";
const orangePriceStr = "1.3$ / kg";

const applePriceNum = Number.parseFloat(applePriceStr);
const orangePriceNum = Number.parseFloat(orangePriceStr);

const appleQuntityStr = "1.4kg";
const orangeQuntityStr = "1.2kg";

const appleQuntityNum = Number.parseFloat(appleQuntityStr);
const orangeQuntityNum = Number.parseFloat(orangeQuntityStr);

const totalCost = (applePriceNum * 100 + orangePriceNum * 100) / 100;
const totalWeight = (appleQuntityNum * 100 + orangeQuntityNum * 100) / 100;

console.assert(
  totalCost === 1.8,
  "Error: the amount does not match the expected value."
);
console.log(`Total wight: ${totalWeight}kg. Cost: ${totalCost}$`);
console.log();
