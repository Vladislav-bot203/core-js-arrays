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

/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues(/* arr */) {
  throw new Error('Not implemented');
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

/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {array} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence(/* nums */) {
  throw new Error('Not implemented');
}

function propagateItemsByPositionIndex(arr) {
  return arr
    .map((elem, id) => {
      if (id === 0) return elem;
      return new Array(id + 1).fill(elem);
    })
    .flat(Infinity);
}

/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {array} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {array} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray(/* arr, n */) {
  throw new Error('Not implemented');
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
