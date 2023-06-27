const binarySearch = (array, searchValue) => {
    // First, we establish the lower and upper bounds of where the value
    // we're searching for can be. To start, the lower bound is the first
    // value in the array, while the upper bound is the last value
    let lowerBound = 0;
    let upperBound = array.length - 1;

    // We begin a loop in which we keep inspecting the middlemost value
    // between the upper and lower bounds
    while (lowerBound <= upperBound) { // <= is used because lower and upper bound could point to the same element, < would miss it
        // We find the midpoint between the upper and lower bounds
        let middle = lowerBound + Math.floor((upperBound - lowerBound) / 2);

        // If the value at the midpoint is the one we're looking for, we're done.
        if (array[middle] === searchValue) return middle;
        
        // If not, we change the lower or upper bound based on whether we need
        // to guess higher or lower: 
        if (array[middle] < searchValue) {
            lowerBound = middle + 1;
        } else {
            upperBound = middle - 1;
        }
    }

    // If we've narrowed the bounds until they've reached each other, that
    // means that the value we're searching for is not contained within
    // this array:
    return -1;
}

// Linear Search vs. Binary Search

// Linear search is faster with insertions, but much slower when searching
// Binary search requires an ordered array
// If the application for the data structure requires a lot of insertions, a linear search may be better
// if the application requires a lot of searching, a binary search may be better