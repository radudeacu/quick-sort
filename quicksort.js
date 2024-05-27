// base case if array has 0 or 1 elem it s sorted return array
// in this case we choose the pivot elem as the right most elem of the array.
// we partition in 2 arrays left and right with elems less + equal or larger than pivot
// recursive call of the left and right until sorted
// concat left + pivot + right
// i like this better.

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let pivot = arr[arr.length -1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]