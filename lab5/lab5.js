median = function (ar) {
  if (ar.length % 2 === 1) {
      return quickselect(ar, ar.length / 2);
  } else {
      return 0.5 * (quickselect(ar, ar.length / 2 - 1) +
                    quickselect(ar, ar.length / 2));
  }
};

quickselect = function (ar, k) {
    if (ar.length === 1) {
        return ar[0];
    }

    let pivot = ar[0];

    let lows = ar.filter(e => e < pivot);
    let pivs = ar.filter(e => e === pivot);
    let higs = ar.filter(e => e > pivot);

    if (k < lows.length) {
        return quickselect(lows, k);
    } else if (k < lows.length + pivs.length) {
        return pivs[0];
    } else {
        return quickselect(higs, k - lows.length - pivs.length);
    }
};

max = function (ar) {
    let ans = ar[0];
    for (let i = 0; i < ar.length; ++i) {
        if (ar[i] > ans) {
            ans = ar[i];
        }
    }

    return ans;
}

min = function (ar) {
    let ans = ar[0];
    for (let i = 0; i < ar.length; ++i) {
        if (ar[i] < ans) {
            ans = ar[i];
        }
    }

    return ans;
}

quicksort = function (ar) {
    if (ar.length < 2) {
        return ar;
    }

    let left = [];
    let right = [];

    for (let i = 1; i < ar.length; ++i) {
        if (ar[0] > ar[i]) {
            left.push(ar[i]);
        } else {
            right.push(ar[i]);
        }
    }

    return quicksort(left).concat(ar[0], quicksort(right));
}


let ar = [...Array(1001)].map(() => Math.round(Math.random() * 1000));
console.log(median(ar));
ar = quicksort(ar);
console.log(ar[Math.floor(ar.length / 2)], min(ar), max(ar));
//console.log(ar)

