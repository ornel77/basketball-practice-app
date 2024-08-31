// const field = {
//     zr: 0,
//     zl: 0,
//     or: 0,
//     lr: 0,
//     three: 0,
//     threeL: 0,
//     threeR: 0,
// }

// const layup = {
//     ll: 10,
//     lr: 10,
//     ft: 5
// }

export const generatePercent = (shoot, bonus) => {
  let fieldTotal = [];
  let threeTotal = [];
  for (const key in shoot) {
    if (key.includes("three")) {
      threeTotal.push(shoot[key] || 0);
    } else {
      fieldTotal.push(shoot[key] || 0);
    }
  }

  let fieldSum =
    fieldTotal.length > 0 ? fieldTotal.reduce((a, c) => a + c, 0) : 0;
  let threeSum =
    threeTotal.length > 0 ? threeTotal.reduce((a, c) => a + c, 0) : 0;


  let fieldAvg = +(
    fieldTotal.length > 0 ? (fieldSum / (fieldTotal.length * 5)) * 100 : 0
  ).toFixed(2);

  let threeAvg = +(threeTotal.length > 0 
    ? (threeSum / (threeTotal.length * 5)) * 100 
    : 0).toFixed(2);


  // layup and three throw
  const ll = +((bonus["ll"] / 20) * 100).toFixed(2);
  const lr = +((bonus["lr"] / 20) * 100).toFixed(2);
  const ft = +((bonus["ft"] / 10) * 100).toFixed(2);
  
  return { fieldAvg, threeAvg, ll, lr, ft };
};
