let email = "sahin.maral@hotmail.com"

let firstName = "şahin"
let lastName = "MARAL"

//String karakter sayısı
console.log(`Email karakter sayısı : ${email.length}`)
console.log(`Ad karakter sayısı : ${firstName.length}`)
console.log(`Soyad karakter sayısı : ${lastName.length}`)

//İlk karakteri bulmak
console.log(`Email ilk karakter : ${email[0]}`)
console.log(`Ad ilk karakter : ${firstName[0]}`)
console.log(`Soyad ilk karakter : ${lastName[0]}`)

//Büyük harf - küçük harf
console.log(`Email büyük harf / küçük harf : ${email.toUpperCase()} - ${email.toLowerCase()}`)
console.log(`Ad büyük harf / küçük harf : ${firstName.toUpperCase()} - ${firstName.toLowerCase()}`)
console.log(`Soyad büyük harf / küçük harf : ${lastName.toUpperCase()} - ${lastName.toLowerCase()}`)

//String içinde istediğimiz bilgiyi aramak ve yerini bulmak
//İstediğimiz bilgi , string içerisinde birden fazla ise ilk bulduğunun sonucu verir.
//Bulamazsa sonuç olarak number değişkeninde -1 verir.
console.log(`Email içerisinde @ işaretinin bulunduğu index sayısı (search): ${email.search("@")}`)
console.log(`Email içerisinde a işaretinin bulunduğu index sayısı : ${email.search("a")}`)
console.log(`Ad içerisinde m işaretinin bulunduğu index sayısı : ${firstName.search("m")}`)

console.log(`Email içerisinde @ işaretinin bulunduğu index sayısı (indexOf): ${email.indexOf("@")}`)

//String içerisindeki ifadeyi veya ifadeleri değiştir

//replace , bulduğu ilk ifadeyi değiştirir ve string içerisinde
//ifadeden daha fazla olsa dahi ilkini değiştirip durur.

//replaceAll , bulduğu bütün ifadeleri istenen ifadeye değiştirir.
console.log(`Ad içerisindeki ş ifadesini s olarak değiştir : ${firstName} - ${firstName.replace('ş','s')}`)

console.log(`Email içerisindeki a ifadesini e olarak değiştir : ${email} - ${email.replaceAll('a','e')}`)

console.log(`Email , doğru yazıldı mı (@ kontrolü) : ${email.includes("@")}`)
console.log(`Email , doğru yazıldı mı (.com kontrolü) : ${email.includes(".com")}`)

function checkTurkishCharacter(checkingVariable) {
    for (let i=0; i < checkingVariable.length; i++){
        if(checkingVariable[i].includes("ö") ||
            checkingVariable[i].includes("ç") ||
            checkingVariable[i].includes("ş") ||
            checkingVariable[i].includes("ı") ||
            checkingVariable[i].includes("ğ") ||
            checkingVariable[i].includes("ü") ||
            checkingVariable[i].includes("İ") ||
            checkingVariable[i].includes("Ü") ||
            checkingVariable[i].includes("Ö"))
        {
            return true;
        }
    }
    return false;
}

console.log(`Ad , Türkçe karakter içeriyor mu ? : ${checkTurkishCharacter(firstName)}`)
console.log(`Soyad , Türkçe karakter içeriyor mu ? : ${checkTurkishCharacter(lastName)}`)

//String ifadesi , istediğimiz ifade ile başlıyor / bitiyorsa boolean ifade döndürür.
console.log(`Email , .com ile mi başladı : ${email.startsWith(".com")}`)
console.log(`Email , .com ile mi bitti : ${email.endsWith(".com")}`)

//String ifadeyi , herhangi bir başlangıç ve bitiş konumu vererek parça çıkarabiliriz.

console.log(`email 5. karakterden başlayarak parçala : ${email.slice(5)}`)
console.log(`email 5. karakterden başlayarak 12. karakterde bitirerek parçala : ${email.slice(5,12)}`)
console.log(`email geriden 5. karakterden başlayarak parçala : ${email.slice(-5)}`)
console.log(`email geriden 12. karakterden başlayarak geriden 5. karakterde bitirerek parçala : ${email.slice(-12,-5)}`)

let url = "www.kodluyoruz.org";
let language = "Java";

//Soru 1: Yukarıdaki language değişkenin değerini JavaScript olarak değiştirin ve konsola yazdırın.
console.log(language.replace("Java","JavaScript"))
//Soru 2: Yukarıdaki url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org) adında yeni bir değişken oluşturun ve konsola yazdırın.
let newUrl = url.slice(4);
console.log(newUrl)