export const getTimeDiff = (date1: Date, date2: Date) => {
  let passed = "69 mins";
  const diffDays = Math.floor(
    Math.abs(date2.valueOf() - date1.valueOf()) / (1000 * 60 * 60 * 24)
  );
  if (diffDays > 365) passed = Math.floor(diffDays / 365) + " years";
  else if (diffDays > 30) passed = Math.floor(diffDays / 30) + " months";
  else if (diffDays > 7) passed = Math.floor(diffDays / 7) + " weeks";
  else if (diffDays > 0) console.log(diffDays + "d");
  else if (diffDays === 0) {
    let hours = Math.floor(
      Math.abs(date2.valueOf() - date1.valueOf()) / (1000 * 60 * 60)
    );
    if (hours === 0) {
      let mins = Math.floor(
        Math.abs(date2.valueOf() - date1.valueOf()) / (1000 * 60)
      );
      if (mins === 0) {
        let seconds = Math.floor(
          Math.abs(date2.valueOf() - date1.valueOf()) / 1000
        );
        passed = seconds + " seconds";
      } else passed = mins + " minutes";
    } else passed = hours + " hours";
  }
  if (passed.substring(0, 2) === "1 ")
    passed = passed.substring(0, passed.length - 1);
  return passed;
};
