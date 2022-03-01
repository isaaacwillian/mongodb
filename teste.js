//nada a ver com mongodb, mas n quis excluir
let a = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
];
function teste(a) {
  for (i = Math.trunc(a / 2); i > 1; i--) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(a.filter(teste));
