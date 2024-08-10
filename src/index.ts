// Typescript implementation of C quickselect with median of medians and in place median
// http://ndevilla.free.fr/median/median/
// http://ndevilla.free.fr/median/median/src/quickselect.c
export function median(arr: number[], n: number): number | undefined {
  function swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  function orderAsc(a: number, b: number) {
    return a - b;
  }
  function inPlaceMedian(arr: number[], low: number, high: number): number {
    // Base case: For very small arrays, sorting might be efficient
    if (high - low <= 4) {
      arr.slice(low, high + 1).sort(orderAsc);
      return arr[low + ((high - low) >> 1)];
    }

    const pivotIndex = high;
    const pivot = arr[pivotIndex];

    // Partition the array around the pivot
    let i = low;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        swap(arr, i, j);
        i++;
      }
    }
    swap(arr, i, pivotIndex);

    const middle = (low + high) >> 1;
    if (i === middle) {
      return arr[i];
    } else if (i > middle) {
      return inPlaceMedian(arr, low, i - 1);
    }

    return inPlaceMedian(arr, i + 1, high);
  }
  function medianOfMedians(arr: number[]): number {
    if (arr.length <= 5) {
      arr.sort(orderAsc);
      return arr[arr.length >> 1];
    }

    const numGroups = Math.ceil(arr.length / 5);

    for (let i = 0; i < numGroups; i++) {
      const startIndex = i * 5;
      const endIndex = Math.min(startIndex + 4, arr.length - 1);
      inPlaceMedian(arr, startIndex, endIndex);
    }

    const medians = arr.slice(0, numGroups);

    return medianOfMedians(medians);
  }

  function quickSelectInternal(
    arr: number[],
    low: number,
    high: number,
    k: number,
  ): number {
    while (true) {
      if (high <= low) {
        return arr[k]!;
      }

      if (high === low + 1) {
        if (arr[low]! > arr[high]!) {
          swap(arr, low, high);
        }
        return arr[k]!;
      }

      //  median-of-medians approach
      const middle = (low + high) >> 1;
      const pivot = medianOfMedians([arr[low], arr[middle], arr[high]]);

      if (arr[middle]! > pivot) swap(arr, middle, high);
      if (arr[low]! > pivot) swap(arr, low, high);
      if (arr[middle]! > arr[low]!) swap(arr, middle, low);

      // Swap low item (now in position middle) into position (low + 1)
      swap(arr, middle, low + 1);

      // Nibble from each end towards middle, swapping items when stuck
      let ll = low + 1;
      let hh = high;

      while (true) {
        while (arr[++ll]! < arr[low]!); // Pre-increment to avoid extra operations
        while (arr[--hh]! > arr[low]!); // Pre-decrement to avoid extra operations

        if (hh < ll) break;

        swap(arr, ll, hh);
      }

      // Swap middle item (in position low) back into the correct position
      swap(arr, low, hh);

      // Re-set active partition
      if (hh <= k) low = ll;
      if (hh >= k) high = hh - 1;
    }
  }

  if (!Array.isArray(arr)) {
    return; // Invalid input
  } else if (arr.length <= 1) {
    return arr[0]; // Directly return the first element
  } else if (arr.length === 2) {
    return (arr[0] + arr[1]) / 2; // Directly return the avg
  } else {
    const mid = (n - 1) >> 1;
    const left = quickSelectInternal(arr, 0, n - 1, mid);

    if ((n & 1) === 1) {
      // Odd-length array: return the middle element
      return left;
    }

    // Even-length array: return the average of the two middle elements
    return (left + quickSelectInternal(arr, 0, n - 1, mid + 1)) / 2;
  }
}
