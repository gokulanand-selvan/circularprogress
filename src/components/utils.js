export function GetPercentage(arr) {
    return arr.reduce((pre, curr) => {
        const tasklength = curr.tasks.length;
        const arrOfPercent = curr.tasks.map((t) => (t.value / t.score) * 100);
        // [20, 34, 56, 60.6666].reduce((pre, curr) => pre + curr, 0)
        return {
            sum: pre.sum + arrOfPercent.reduce((pre, cu) => pre + cu, 0),
            total: pre.total + tasklength,
            totalper: (pre.sum / pre.total)
        }
    }, { sum: 0, total: 0, totalper: 0 });
}