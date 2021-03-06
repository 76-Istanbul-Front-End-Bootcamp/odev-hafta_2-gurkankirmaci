/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.bind(person);
messageFunc();

/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map((number, numberIndex) => {
        const result = number * this.numbers[1];
        console.log(result)
    })
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name){
    if(typeof name ==='string') {
        var trimName  = name.trim();
        var divideBySpaces = trimName.split(" ");
        for (var i =0; i<divideBySpaces .length; i++) {
          if(divideBySpaces[i].length <= 2 || divideBySpaces[0] == ("") || typeof(name) == "number"){
              return false;
          }else {
              return true;
          }
        }
    }else {
        return false;
    }
  };
 

console.log(isValidName("Frank") );
console.log(isValidName(false) );
console.log(isValidName(null)  );
console.log(isValidName(undefined)  );
console.log(isValidName("") );
console.log(isValidName("  \t\n") );
console.log(isValidName("X") );

/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/

function katilimSaati(dersSayisi, dersSuresi)
{

    if (typeof (dersSayisi) == "string" || typeof (dersSuresi) == "string" || typeof (dersSayisi) == "number" || typeof (dersSuresi) == "number")
    {
        if (dersSayisi == "" || dersSuresi == "")
        {

            return false;

        }
        else if (parseInt(dersSayisi) && parseInt(dersSuresi))
        {
            return Number(dersSayisi) * Number(dersSuresi);
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
};
    
    console.log(!!katilimSaati(6, 10) );
    console.log(!!katilimSaati(6, "10") );
    console.log(!!katilimSaati("6", 10));
    console.log(!!katilimSaati("6", "10"));
    console.log(katilimSaati("", 6) );
    console.log(katilimSaati(6, "") );
    console.log(katilimSaati("", "") );
    console.log(katilimSaati("foo", 6));
    console.log(katilimSaati(6, "foo") );
    console.log(katilimSaati("foo", "bar") );
    console.log(katilimSaati(null, null) );
    console.log(katilimSaati(null, undefined));
    console.log(katilimSaati(undefined, null) );
    console.log(katilimSaati(undefined, undefined) );
    console.log(katilimSaati(Infinity, Infinity) );
    console.log(katilimSaati(undefined, Infinity) );
    console.log(katilimSaati(Infinity, undefined) );
    console.log(katilimSaati(false, false) );
    console.log(katilimSaati(false, true) );
    console.log(katilimSaati(true, false) );
    console.log(katilimSaati(true, true));
