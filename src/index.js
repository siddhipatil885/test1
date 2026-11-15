export function totalWithTax(amounts, taxRate = 0.1) {
  const subtotal = amounts.reduce((sum, amount) => sum + amount, 0);
  return Number((subtotal * (1 + taxRate)).toFixed(2);
}

console.log(`Order total: ${totalWithTax([19.99, 5]).toFixed(2)}`);