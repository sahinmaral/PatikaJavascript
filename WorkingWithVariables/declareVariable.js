// Welcome to Javascript Hoisting

x = 5;
console.log(x);
var x;

// Boolean Examples

console.log("1n : " + Boolean(1n));
console.log("-1n : " + Boolean(-1n));
console.log("Infinity : " + Boolean(Infinity));
console.log("{} : " + Boolean({}));
console.log("Symbol() : " + Boolean(Symbol()));

// Değişken türleri

console.log(typeof Variable);
// beklenen output: "undefined"

// isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0); //true
Number.isFinite("123"); //false
Number.isFinite("Hello"); //false
Number.isFinite(-Infinity); //false
Number.isFinite(0 / 0); //false

// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.
Number.isNaN(undefined); //false
Number.isNaN("NaN"); //false
Number.isNaN(NaN); //true

console.log(String(123) + 12); // "123"
console.log(parseInt(123) + 12);

// String Dönüşümleri
console.log(String(123)); // “123” explicit
console.log(123 + ""); // “123”    implicit

// Boolean Dönüşümleri

console.log(Boolean('')) // false
console.log(Boolean(0)) // false 
console.log(Boolean(-0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(false)) // false

// Nesneler (Objects) için Type Coercion
// Şimdiye kadar primitif değerler için 
// type coercion hakkında bilgi sahibi olduk. 
// Nesneler için bu durum biraz daha farklı. 
// JavaScript'te nesneler referans tipler olduğundan 
// üzerinde işlem yapabilmek zordur. İşlem yapabilmek 
// için elimizde primitif değerler olması gerekir. 
// Bu durumda referans tipler primitif tiplere zorlanır. 
// Nesneler için en kolay tip dönüşümü boolean'dır. Primitif olmayan 
// herhangi bir değer örneğin içi dolu veya boş bir nesne (object), 
// dizi (array) fark etmez her zaman true olarak zorlanır. (coerced)

console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1,2,3])) // true
console.log(Boolean({13:234})) //true

// Nesneler (Objects) için Type Coercion
// Şimdiye kadar primitif değerler için type 
// coercion hakkında bilgi sahibi olduk. Nesneler 
// için bu durum biraz daha farklı. JavaScript'te nesneler 
// referans tipler olduğundan üzerinde işlem yapabilmek zordur. 
// İşlem yapabilmek için elimizde primitif değerler olması gerekir. 
// Bu durumda referans tipler primitif tiplere zorlanır. 
// Nesneler için en kolay tip dönüşümü boolean'dır. Primitif olmayan 
// herhangi bir değer örneğin içi dolu veya boş bir nesne (object), 
// dizi (array) fark etmez her zaman true olarak zorlanır. (coerced)

console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1,2,3])) // true
console.log(Boolean({13:234})) //true

console.log("foo" + +"bar") //fooNaN

console.log('true' == true) //false

console.log(null=='') //false

