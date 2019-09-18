const logItems = function (args) {
  for (let i = 0; i < args.length; i += 1) {
    console.log(`${i + 1} - ${args[i]}`);
  }
};
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
