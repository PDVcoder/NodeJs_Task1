exports.min = function(arr) {
    let m = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (m > arr[i]) m = arr[i];
    }
    return m;
}