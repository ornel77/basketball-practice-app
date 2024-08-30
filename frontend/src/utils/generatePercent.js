// const field = {
//     zr: 0,
//     zl: 0,
//     or: 0,
//     lr: 0,
//     three: 0,
//     threeL: 0,
//     threeR: 0,
// }

export const generatePercent = (score) => {
    let fieldTotal = []
    let threeTotal = []
    for(const key in score) {
        if(key.includes('three')) {
            threeTotal.push(score[key])

        } else {
            fieldTotal.push(score[key])
        }
    }
    let fieldAvg = (fieldTotal?.reduce((a,c) => a+c) /(fieldTotal.length * 5)) * 100
    let threeAvg = (threeTotal?.reduce((a,c) => a+c) /(threeTotal.length * 5)) * 100
    return {fieldAvg, threeAvg}
}



