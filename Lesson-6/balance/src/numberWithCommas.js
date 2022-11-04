export default function numberWithCommas(x) {
  const numeral = require("numeral");
  return numeral(x).format("0.00a");
}