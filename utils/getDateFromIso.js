/**
 * @function
 * @description it returns date list from specific iso string
 * @params {String} year
 * @params {String} month
 * @return {Array} date list
 */

const getDateFromIso = (isoDate) => {
  const dates = new Date(isoDate);

  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const date = dates.getDate();
  const hour = dates.getHours();

  return [year, month, date, hour];
};

export default getDateFromIso;