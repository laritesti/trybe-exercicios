const nota = 110;

if (nota < 0 || nota > 100) {
  console.log ("Erro, nota inválida.")
} else if (nota >= 90) {
  console.log ( + nota + "% = A");
} else if (nota >= 80) {
  console.log ( + nota + "% = B");
} else if (nota >= 70) {
  console.log ( + nota + "% = C");
} else if (nota >= 60) {
  console.log ( + nota + "% = D");
} else if (nota >= 50) {
  console.log ( + nota + "% = E");
} else {
  console.log ( + nota + "% = F");
}