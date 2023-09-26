export const formatCurrency = (number: number): string => {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currency: "GBP",
  }).format(number);

  return currency;
};
