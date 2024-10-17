function longestPrefix(arr) {

    let res = arr.pop(), l = res.length;
    while (arr.length) {
        let sec = arr.pop(), i = 0;
        while (i < Math.min(l, sec.length) && res[i] === sec[i]) i++;
        if (!(l = i)) return "";
    }
    return res.slice(0, l);
}