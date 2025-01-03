/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function sumArrays(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1.map((elem, id) => {
      if (typeof arr2[id] !== 'number') return elem;
      return elem + arr2[id];
    });
  }
  return arr2.map((elem, id) => {
    if (typeof arr1[id] !== 'number') return elem;
    return elem + arr1[id];
  });
}

function findElement(arr, value) {
  return arr.indexOf(value);
}

function findAllOccurrences(arr, item) {
  return arr.filter((elem) => elem === item).length;
}

function removeFalsyValues(arr) {
  return arr.filter((elem) => Boolean(elem) === true);
}

function getStringsLength(arr) {
  return arr.map((elem) => elem.length);
}

function getAverage(arr) {
  if (arr.length === 0) return 0;
  return parseFloat(
    (arr.reduce((accum, item) => accum + item, 0) / arr.length).toFixed(2)
  );
}

function isSameLength(arr) {
  return arr.every((elem) => elem.length === arr[0].length);
}

function isValueEqualsIndex(arr) {
  return arr.some((elem, id) => elem === id);
}

function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  if (n === 0) return [];
  return arr.slice(-n);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function toStringList(arr) {
  return arr.join();
}

function distinct(arr) {
  return Array.from(new Set(arr));
}

function createNDimensionalArray(n, size) {
  if (n === 1) return new Array(size).fill(0);
  return new Array(size).fill(createNDimensionalArray(n - 1, size));
}

function flattenArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function calculateBalance(arr) {
  if (arr.length === 0) return 0;
  return arr.flat(Infinity).reduce((accum, item, id) => {
    let a = accum;
    if (id === 0) {
      a += item;
    }
    if (id === 1) {
      a -= item;
    }
    if (id === 2) {
      a += item;
    }
    if (id === 3) {
      a -= item;
    }
    return a;
  });
}

function createChunks(arr, chunkSize) {
  return arr.reduce((resultArray, currentItem, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    const result = resultArray;

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(currentItem);

    return result;
  }, []);
}

function generateOdds(len) {
  if (len === 0) return [];
  if (len === 1) return [1];
  return Array(len * 2)
    .fill(0)
    .map((_, id) => id)
    .filter((item) => item % 2 !== 0);
}

function getElementByIndices(arr, indices) {
  return indices.reduce((array, prop) => array[prop], arr);
}

function getFalsyValuesCount(arr) {
  return arr.reduce((accum, curr) => {
    let a = accum;
    if (!curr) {
      a += 1;
    }
    return a;
  }, 0);
}

function getIdentityMatrix(n) {
  const arr = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  return arr.map((item, index) => {
    const newArr = item;
    newArr[index] = 1;
    return newArr;
  });
}

function getIndicesOfOddNumbers(numbers) {
  return numbers.reduce((accum, curr, id) => {
    if (curr % 2 !== 0) {
      accum.push(id);
    }
    return accum;
  }, []);
}

function getHexRGBValues(arr) {
  return arr.reduce((result, cur) => {
    const res = result;
    const val = Math.abs(cur).toString(16).toUpperCase();
    const stringToAdd = Array.from({ length: 6 - val.length }, () => 0).join(
      ''
    );
    res.push('#'.concat(stringToAdd, val));
    return res;
  }, []);
}

function getMaxItems(arr, n) {
  return arr.sort((a, b) => b - a).slice(0, n);
}

function findCommonElements(arr1, arr2) {
  return arr1.reduce((accum, curr) => {
    if (arr2.includes(curr)) {
      accum.push(curr);
    }
    return accum;
  }, []);
}

function findLongestIncreasingSubsequence(nums) {
  const dp = new Array(nums.length).fill(1);
  let breaking = true;
  return Math.max(
    ...nums.reduce((lenArr, _, id, num) => {
      const len = lenArr;
      len[id] = num.slice(id).reduce((sum, item, i, part) => {
        let res = sum;
        if (i === 0) breaking = true;
        if (item < part[i + 1] && breaking) res += 1;
        if (item > part[i + 1]) breaking = false;
        return res;
      }, 1);
      return len;
    }, dp)
  );
}

function propagateItemsByPositionIndex(arr) {
  return arr
    .map((elem, id) => {
      if (id === 0) return elem;
      return new Array(id + 1).fill(elem);
    })
    .flat(Infinity);
}

function shiftArray(arr, n) {
  return arr.map((_, idx, a) => {
    if (n > 0) return a[(idx + n + 1) % a.length];
    return a[(idx - n) % a.length];
  });
}

function sortDigitNamesByNumericOrder(arr) {
  const mapper = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return arr.sort((a, b) => mapper.indexOf(a) - mapper.indexOf(b));
}

function swapHeadAndTail(arr) {
  const mid = arr.length / 2;
  return [...arr.slice(-mid), ...arr.slice(mid, -mid), ...arr.slice(0, mid)];
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
