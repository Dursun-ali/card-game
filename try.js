var randomImage = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
];
let mix = randomImage.sort(() => Math.random() - 0.5);

let arrControl = [];
/**************Global Değişkenlerim************** */

const modal = document.querySelector('#settingModal');

const score = document.querySelector('#scoreModal');



/***************************************************/
/***************************Kartlarımı ekrana bastırıyorum*********************************************/


function render(mix) {
  var oList = `
    
        
        <div class="back-face" >
        
    </div>     
     
        <div class="front-face">
            <img  src="${mix}" width="200" height="200" alt="";>
        </div>         
            `;
  return oList;
}

{
  for (let i = 0; i < randomImage.length; i++) {
    var container = document.createElement("div");
    container.classList.add("img-container");
    container.setAttribute("id", `img-${[i]}`);
    container.setAttribute("onClick", `aç('img-${[i]}')`);


    var oList = render(randomImage[i]);
    {
      container.innerHTML = oList.trim();
      document
        .getElementsByClassName("main-container")[0]
        .appendChild(container);
      //tam üstte demek istedigi sey container yapım img-container olmustur ve buda main-container e tanımlıdır.
    }
  }
}
/********************************************************************************* */
//saat baslangıcı ...
var deger;
var dakika = 1;
var saniye = 30;
var minutes = document.getElementById("dakika");
var seconds = document.getElementById("saniye");

var dondurButon = document.getElementById("stopButton");//bu kocaman pause yazan ekranım.
var tekrarButon = document.getElementById("resetButton");


function sureBaslat() {
  deger = setInterval(Sayac, 1000);
}

function sureDurdur() {
  clearInterval(deger);
}

function Sayac() {
  saniye--;

  if (saniye == -1) {
    if (dakika > 0) {
      dakika--;
      minutes.innerHTML = "0" + dakika;
      saniye = 59;
    }
  }
  if (saniye < 10) {
    seconds.innerHTML = `0${saniye}`;
  } else {
    seconds.innerHTML = saniye;
  }
}

// saat bitişi...



/*Modal Yapısı*/

const openModal = function () {
  modal.classList.remove('hidden');
  document.getElementById('overlay').style.cssText = 'display:block'  // timeStop();
  sureDurdur();
}


/*Oyun Sonu Modalı*/

// Ekranımıza gelmesi icin saniye kontrol kısmımız.
setInterval(ScoreMust, 1000);
function ScoreMust(){
  if(skorSayi==100){
     document.querySelector('#win').innerHTML=" TO WİN :)"
    openScoreModal();
    
  }
}


setInterval(Must, 1000);
function Must() {
  if (dakika == 00 && saniye == 00) {
     document.querySelector('#lose').innerHTML=" TO LOSE :("
    openScoreModal();
  }
}

function openScoreModal() {
  score.classList.remove('hidden');
  document.getElementById('overlay2').style.cssText = 'display:block'  // timeStop();
  sureDurdur();
}

const closeModal = () => {
  modal.classList.add('hidden');
  document.getElementById('overlay').style.cssText = 'display:none'  // timeStart();
  sureBaslat();
}



/*Card dönüşü ve animasyonu*/

function allFlip() {
  for (let i = 0; i < randomImage.length; i++) {

    document
      .getElementsByClassName(`img-container`)
    [i].getElementsByClassName(`back-face`)[0]
      .classList.add("swing-out-top-fwd-on");


    document
      .getElementsByClassName(`img-container`)
    [i].getElementsByClassName(`back-face`)[0]
      .classList.add("swing-out-top-fwd-on");

    setTimeout(function () {

      document
        .getElementsByClassName(`img-container`)
      [i].getElementsByClassName(`back-face`)[0]
        .classList.remove("swing-out-top-fwd-on")


      setTimeout(function () {
        document
          .getElementsByClassName(`img-container`)
        [i].getElementsByClassName(`back-face`)[0]
          .classList.remove("swing-out-top-fwd-close")

      }, 500)
    }, 2000)
  }
}

var hamleSayi = 0;
var skorSayi = 0;

/* Aç Fonksiyonu */
function aç(id) {
  document
    .getElementById(id)
    .getElementsByClassName(`back-face`)[0]
    .classList.add("swing-out-top-fwd-on");


  arrControl.push({
    id: id,
    src: document.querySelector(`#${id} .front-face img`).src
  })//tıkladıgım zaman bana id deki resim degerini döndürüyor.

  /*Control olayım*/
  if (arrControl.length == 2) {
    if ((arrControl[0].src == arrControl[1].src)&(arrControl[0].id!= arrControl[1].id)) {
      skorSayi += 10;
      document.getElementById(arrControl[0].id).style.visibility = "hidden"
      document.getElementById(arrControl[1].id).style.visibility = "hidden"
      arrControl = [];


    } else {
      setTimeout(() => {
        kapat(arrControl[0].id)
        kapat(arrControl[1].id)
        arrControl = [];
      }, 700)
    }
    hamleSayi++;
  }
  console.log(skorSayi);
  document.querySelector('#scoreModal #skorr').innerHTML = 'Skor sayi degerimiz : ' + skorSayi;
  document.querySelector('#scoreModal #hamlee').innerHTML = 'Hamle sayiniz :' + hamleSayi;

}

/*Kapatma Fonksiyonu */
function kapat(id) {
  document
    .getElementById(id)
    .getElementsByClassName(`back-face`)[0]
    .classList.add('swing-out-top-fwd-close');

    setTimeout(function(){
      document
      .getElementById(id)
      .getElementsByClassName(`back-face`)[0]
      .classList.remove('swing-out-top-fwd-close');
    },600)
    setTimeout(function(){
      document
      .getElementById(id)
      .getElementsByClassName(`back-face`)[0]
      .classList.remove('swing-out-top-fwd-on');
    },600)

   
}


setTimeout(function () {
  sureBaslat()
}, 1000);

