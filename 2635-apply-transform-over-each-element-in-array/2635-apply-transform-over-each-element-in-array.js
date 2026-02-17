function map(arr, fn){
    const result = [];
    arr.forEach((value, index) => {
        result.push(fn(value, index));

    });
    return result;
}
