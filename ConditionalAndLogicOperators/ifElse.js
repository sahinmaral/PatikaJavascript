// Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
// Vize ve final notunun toplamından doğan not ortalaması
//eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
// 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
// 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
// 85-100 aralığındaysa Notunuz AA yazdıralım.

function calculateAcademicGrade() {
  let txtMidterm = document.getElementById("txtMidterm");
  let txtFinal = document.getElementById("txtFinal");

  let midtermGrade = txtMidterm.value;
  let finalGrade = txtFinal.value;

  let averageGrade = 0;

  let averageGradeHeader = document.getElementById("averageGradeHeader");

  averageGradeHeader.textContent = "Yıl Sonu Ortalamanız : ";

  if (midtermGrade === "" || !Number.isInteger(parseInt(midtermGrade)))
    alert("Vize notunuzu doğru veya eksiksiz giriniz");
  else if (finalGrade === "" || !Number.isInteger(parseInt(finalGrade)))
    alert("Final notunuzu doğru veya eksiksiz giriniz");
  else {
    averageGrade =
      (parseInt(midtermGrade) * 30) / 100 + (parseInt(finalGrade) * 70) / 100;

    if (averageGrade >= 85 && averageGrade < 100)
      alert("Bu dersten AA olarak yıl sonu notu aldın");
    else if (averageGrade >= 50 && averageGrade < 84)
      alert("Bu dersten CC - GEÇTİNİZ olarak yıl sonu notu aldın");
    else if (averageGrade >= 31 && averageGrade < 49)
      alert("Bu dersten DC - KOŞULLU olarak yıl sonu notu aldın");
    else alert("Bu dersten kaldınız");

    averageGradeHeader.textContent =
      averageGradeHeader.textContent + averageGrade;
    averageGradeHeader.style.display = "block";
  }
}

// Tahmin Oyunu: Bilgisayar tarafından
// 10 'a kadar tutulmuş olan rastgele sayıyı bulalım:

function guessNumber() {
  let randomNumber = parseInt(Math.random() * 10);

  let txtGuessedNumber = document.getElementById("txtGuessedNumber");

  let guessedNumber = txtGuessedNumber.value;

  if (guessedNumber === "" && !Number.isInteger(parseInt(guessedNumber)))
    alert("Doğru veya eksiksiz sayı giriniz");
  else if (parseInt(guessedNumber) > 10 || parseInt(guessedNumber) < 0)
    alert("0-10 arasında sayı giriniz");
  else {
    let guessedNumberConvert = parseInt(guessedNumber);

    if (guessedNumberConvert != randomNumber)
      alert(`Sayıyı tahmin edemediniz. Doğru sayı : ${randomNumber}`);
    else alert("Tebrikler. Doğru bildiniz.");
  }
}

// Vücut kitle indeksi hesaplayan ve hesapladığı
// değere göre yazı yazan bir program yazalım.

function calculateBodyMassIndex() {
  let txtWeight = document.getElementById("txtWeight");
  let txtHeight = document.getElementById("txtHeight");

  let weight = txtWeight.value;
  let height = txtHeight.value;

  let bodyMassIndex = 0;

  if (weight === "" || !Number.isInteger(parseInt(weight)))
    alert("Kütlenizi doğru veya eksiksiz giriniz");
  else if (height === "" || !Number.isInteger(parseInt(height)))
    alert("Boyunuzu doğru veya eksiksiz giriniz");
  else {
    bodyMassIndex =
      parseFloat(weight) / (parseFloat(height) * parseFloat(height));

    let bodyMassIndexHeader = document.getElementById("bodyMassIndexHeader");
    let bodyCategoryHeader = document.getElementById("bodyCategoryHeader");

    bodyMassIndexHeader.textContent = "Vücut Kütle İndeksiniz : ";
    bodyCategoryHeader.textContent = "Kategori : ";

    bodyMassIndexHeader.textContent =
      bodyMassIndexHeader.textContent + bodyMassIndex;

    bodyMassIndexHeader.style.display = "block";
    bodyCategoryHeader.style.display = "block";

    if (bodyMassIndex > 0 && bodyMassIndex < 18.4)
      bodyCategoryHeader.textContent = bodyCategoryHeader.textContent + "Zayıf";
    else if (bodyMassIndex > 18.5 && bodyMassIndex < 24.9)
      bodyCategoryHeader.textContent =
        bodyCategoryHeader.textContent + "Normal";
    else if (bodyMassIndex > 25.0 && bodyMassIndex < 29.9)
      bodyCategoryHeader.textContent =
        bodyCategoryHeader.textContent + "Fazla Kilolu";
    else if (bodyMassIndex > 30.0 && bodyMassIndex < 34.9)
      bodyCategoryHeader.textContent =
        bodyCategoryHeader.textContent + "Şişman (Obez) - I. Sınıf";
    else if (bodyMassIndex > 35.0 && bodyMassIndex < 44.9)
      bodyCategoryHeader.textContent =
        bodyCategoryHeader.textContent + "Şişman (Obez) - II. Sınıf";
    else
      bodyCategoryHeader.textContent =
        bodyCategoryHeader.textContent +
        "Aşırı Şişman (Aşırı Obez) - III. Sınıf";
  }
}

// Kosullarla Calismak Bolum Sonu Egzersizi:

/* 
1- Vize ve final notlarını bilgisini alarak yıl sonu notunu hesapla
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49
2- kullanicinin girdigi verilerin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/
function calculateAcademicGradeV2() {
  let txtMidterm = document.getElementById("txtMidterm");
  let txtFinal = document.getElementById("txtFinal");

  let midtermGrade = txtMidterm.value;
  let finalGrade = txtFinal.value;

  let averageGrade = 0;
  let academicLetterGrade = "";

  let averageGradeHeader = document.getElementById("averageGradeHeader");
  let academicLetterGradeHeader = document.getElementById(
    "academicLetterGradeHeader"
  );


  let emotionIcon = document.createElement("i")
  emotionIcon.classList.add("fas","fa-smile")
  emotionIcon.style.fontSize = "48px"

  document.getElementById("emotionIconDiv").innerHTML = null
  document.getElementById("emotionIconDiv").appendChild(emotionIcon)

  academicLetterGradeHeader.textContent = "Harf Notunuz : ";
  averageGradeHeader.textContent = "Yıl Sonu Ortalamanız : ";

  academicLetterGradeHeader.classList.remove(...academicLetterGradeHeader.classList)
  academicLetterGradeHeader.classList.add("text-primary")

  if (midtermGrade === "" || !Number.isInteger(parseInt(midtermGrade)))
    alert("Vize notunuzu doğru veya eksiksiz giriniz");
  else if (finalGrade === "" || !Number.isInteger(parseInt(finalGrade)))
    alert("Final notunuzu doğru veya eksiksiz giriniz");
  else if (parseInt(midtermGrade) > 100 || parseInt(midtermGrade) < 0)
    alert("Vize notunuzu (0-100) arasında giriniz");
  else if (parseInt(finalGrade) > 100 || parseInt(finalGrade) < 0)
    alert("Final notunuzu (0-100) arasında giriniz");
  else {
    averageGrade =
      (parseInt(midtermGrade) * 30) / 100 + (parseInt(finalGrade) * 70) / 100;

    if (averageGrade >= 90 && averageGrade < 100) academicLetterGrade = "AA";
    else if (averageGrade >= 85 && averageGrade < 90)
      academicLetterGrade = "BA";
    else if (averageGrade >= 80 && averageGrade < 84)
      academicLetterGrade = "BB";
    else if (averageGrade >= 75 && averageGrade < 79)
      academicLetterGrade = "CB";
    else if (averageGrade >= 70 && averageGrade < 74)
      academicLetterGrade = "CC";
    else if (averageGrade >= 65 && averageGrade < 69)
      academicLetterGrade = "DC";
    else if (averageGrade >= 60 && averageGrade < 64)
      academicLetterGrade = "DD";
    else if (averageGrade >= 50 && averageGrade < 59)
      academicLetterGrade = "FD";
    else {
      academicLetterGrade = "FF";
      emotionIcon.classList.remove("fa-smile")
      emotionIcon.classList.add("fa-sad-tear")

      academicLetterGradeHeader.classList.remove("text-primary")
      academicLetterGradeHeader.classList.add("text-danger")
    }

    averageGradeHeader.textContent =
      averageGradeHeader.textContent + averageGrade;
    averageGradeHeader.style.display = "block";

    academicLetterGradeHeader.textContent =
      academicLetterGradeHeader.textContent + academicLetterGrade;
    academicLetterGradeHeader.style.display = "block";
  }
}
