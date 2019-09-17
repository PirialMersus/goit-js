const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  }
  string.length = 40;
  return `${string}...`;
};
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
