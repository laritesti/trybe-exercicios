const custo = 1;
const venda = 3;

if (custo >= 0 && venda >= 0) {
    const custoTotal = custo * 1.2;
    const lucroTotal = (venda - custoTotal) * 1000;
    console.log(lucroTotal);
} else {
    console.log ("Erro, valor negativo.")
}