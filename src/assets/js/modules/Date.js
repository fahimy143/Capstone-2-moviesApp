// code reference:
// https://bobbyhadz.com/blog/javascript-get-date-without-time#:~:text=Use%20the%20setHours()%20method,according%20to%20the%20provided%20values.

const formatDate = (date) => {
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  return [
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
    padTo2Digits(date.getDate()),
  ].join('/');
};

export default formatDate;