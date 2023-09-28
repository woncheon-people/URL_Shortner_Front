const codec = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

function toBase62(num) {
  let temp = num;
  let result = "";
  while (temp > 0) {
    const ch = temp % 62;
    temp = Math.floor(temp / 62);
    result = result + codec[ch];
  }
  return result;
}