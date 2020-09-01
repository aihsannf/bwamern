export default (number) => {
  const numberingFormat = new Intl.NumberFormat("id-ID");
  return numberingFormat.format(number);
};
