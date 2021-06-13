let date = '2021-01-22';
let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let dateFilter = date.slice(0, 10).split('-').reverse(); // 20 01 2021
if (dateFilter[1].length == 2) {
  let newDateFilter = dateFilter[1].slice(1, 2);
  dateFilter[1] = newDateFilter;
}
console.log(dateFilter);
for (let i = 0; i < months.length; i++) {
  if (dateFilter[1] == i + 1) {
    dateFilter[1] = months[i];
  }
}
let result = dateFilter.join(' ');
return result;
