function memoize(fn) {
    const cache = new Map(); // Use a Map for key-value storage
    return function(...args) {
        const key = args.join(','); // Create a unique key from arguments
        if (cache.has(key)) {
            return cache.get(key); // Return cached result
        }
        const result = fn(...args); // Call the original function
        cache.set(key, result); // Store result in cache
        return result;
    };
}