module.exports = function toReadable(number) {
    const res = []
    const ed = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const others = ['hundred']
    let str = '' + number
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '0' || arr[i] == '') {
            return 'zero'
        }
        switch (arr.length) {
            case 3:
                if (arr[i] !== '0') {
                    res.push([ed[arr[i]]])
                    res.push(others[0])
                }
                arr.shift()
            case 2:
                if (arr[i] == '1') {
                    res.push(teens[arr[1]])
                    console.log(res.join(' '))
                    return res.join(' ')
                } else
                    if (arr[i] == '0') {
                        arr.shift()
                    } else {
                        res.push(tens[arr[i]])
                        arr.shift()
                    }
            case 1:
                if (arr[i] != '0') {
                    res.push(ed[arr[i]])
                    return res.join(' ')
                }
        }
        return res.join(' ')
    }
}
