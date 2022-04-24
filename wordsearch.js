const transpose = function(matrix) {
  let result = [];
  for (let r = 0; r < matrix[0].length; r++) {
    let otherResult = [];
    for (let c = 0; c < matrix.length; c++) {
      otherResult.push(matrix[c][r]);
       
    }
    result.push(otherResult);
  }
  return result;
};

const wordSearch = (letters, word) => {
  const horizontalFormation = letters.map(ls => ls.join(''));
  for (let l of horizontalFormation) {
    if (l.includes(word) === true) {
      return true;
    } else if (l.includes(word) === false) {
      const verticalFormation = transpose(letters).map(ls => ls.join(''));
      for (let l of verticalFormation) {
        if (l.includes(word) === true) return true;
      }
    }
  }
  return false;
};

module.exports = wordSearch;