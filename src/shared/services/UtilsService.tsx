export default function getYears()  {
  const max = new Date().getFullYear();
  const min = max - 100;
  const years = [];

  for (let i = max; i >= min; i--) {
    years.push({
        codigo: i,
        valor: i
    });
  }
  return years;
};
