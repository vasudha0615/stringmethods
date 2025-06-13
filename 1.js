// string methods
// js string are primitive datatype that is used to work with texts

// there are 3 ways to use string
// 1. single Quotation ==> ''
// 2. double Quotation ==> ""
// 3. Template Literals ==> ``(Back ticks)

let a = 'hari'
let b = "prasad"
let c = CSD
console.log(a,b,c)
console.log(a[0])
console.log(b[1])
console.log(c[2])
console.log(a.length)

// in js its case sensitive a not equal to A c is not equal to C
console.log("c" == "C")
console.log("C" == "c")

// in js to add new lines in string use /n
console.log("I am\n hariprasad\n mudavath")

// 1. char At
let clg = "global"
console.log(clg.charAt(0))

// 2. indexOf
let fname = "clg"
console.log(fname.indexOf("c"))

// 3. concat
let n1 = "global"
let n2 = " college"
let n3 = n1.concat(n2)
console.log(n3)
console.log(n1.concat(n2))  //v can concat by using this also

// 4. includes
let msg = "js is fun";
console.log(msg.includes("j"))
console.log(msg.includes("J"))

// 5. lastindexOf
let m1 = "global";
console.log(m1.indexOf("l"))
console.log(m1.lastIndexOf("l"))

// 6.  lenght
let lang = "Java";
console.log(lang.length)

// 7. repeat()
let m2 = "Hi";
console.log(m2.repeat(10))

// 8. replace()
let m3 = "ball bat"
console.log(m3.replace("b", "c"))
// 9.  replaceAll()
console.log(m3.replaceAll("b", "c"))

// 10. startsWith()
// 11. endsWith()
let m4 = "js is fun"
console.log(m4.startsWith("j"))
console.log(m4.startsWith("fun"))

console.log(m4.endsWith("fun"))
console.log(m4.endsWith("j"))

// 12. toLowerCase()
// 13. toUpperCase()

let m5 = "HELLO";
console.log(m5.toLocaleLowerCase())
let m6 = "hello";
console.log(m6.toLocaleUpperCase())

// 14. trim()
let m7 = " Hello Global "
console.log(m7.trim())

// 15. slice(index,length)
let m8 = "JAVA"
//index 0123
//length 1234
console.log(m8.slice(2,4))

// 16. split()
let m9 = "global-clg-hyd";
//"global","clg","hyd"
console.log(m9.split("-"))
let m10 = "hari abhi";
console.log(m10.split("-"))