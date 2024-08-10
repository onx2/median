function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Quickselect algorithm to find the median
function quickSelect(arr: number[], k: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const pivotIndex = partition(arr, low, high);
    if (pivotIndex === k) {
      return arr[pivotIndex];
    } else if (pivotIndex < k) {
      low = pivotIndex + 1;
    } else {
      high = pivotIndex - 1;
    }
  }

  return arr[low];
}

// Partition function to help with Quickselect
function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[low];
  let left = low + 1;
  let right = high;

  while (true) {
    while (left <= right && arr[left] <= pivot) {
      left++;
    }
    while (right >= left && arr[right] > pivot) {
      right--;
    }
    if (left >= right) {
      break;
    }
    swap(arr, left, right);
  }

  swap(arr, low, right);
  return right;
}

// Function to find the median using Quickselect
export function median(arr: number[]): number {
  const n = arr.length;
  const middle = Math.floor((n - 1) / 2);
  const median = quickSelect(arr, middle);

  if (n % 2 === 1) {
    return median;
  } else {
    const nextMedian = quickSelect(arr, middle + 1);
    return (median + nextMedian) / 2;
  }
}
