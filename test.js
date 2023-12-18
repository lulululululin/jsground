

let textcode = "阿".charCodeAt()
let textcode2 = "尼".charCodeAt()

// console.log(String.fromCharCode(57271))
// console.log(String.fromCharCode(21507))
// console.log(textcode)

// 汉字编码范围是：[13312,129753]
hanzirange = [13312,129753]

for (let ii = hanzirange[0]; ii<hanzirange[1]; ii++){

    console.log(String.fromCharCode(ii));
    // console.log(String.fromCodePoint(77, 43, 190, 61));

}