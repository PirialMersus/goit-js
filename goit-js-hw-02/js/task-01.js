const logItems = function(args) {
  for (let i = 0; i < args.length; i += 1) {
    console.log(`${i + 1} - ${args[i]}`);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
