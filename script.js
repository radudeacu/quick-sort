// base case if array has 0 or 1 elem it s sorted return array
// in this case we choose the pivot elem from the mid of array
// we partition in 2 arrays left and right with elems less + equal or larger than pivot
// recursive call of the left and right until sorted
// concat left + pivot + right

function quickSort2(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length /2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length/2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort2(left), pivot, ...quickSort2(right)];
}

const array = [34, 7, 23, 32, 5, 62];
console.log(quickSort2(array)); // [5, 7, 23, 32, 24, 62]