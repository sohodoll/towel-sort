module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix === undefined) {
        return result;
    }
    matrix.forEach(element => {
        if ((matrix.indexOf(element) % 2) === 0) {
            result.push(element);
        } else if ((matrix.indexOf(element) % 2) != 0) {
            result.push(element.sort((a, b) => {
                return b - a
            }));
        }
    })
    return [].concat.apply([], result);
}
