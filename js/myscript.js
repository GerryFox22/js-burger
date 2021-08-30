let listaCoupon = ["capodanno", "natale", "pasqua", "compleanno"]

let nomePanino = document.getElementById("burger-name");
let prezzoFinalePanino = 0;
let bottone = document.getElementById("calculate-button");



bottone.addEventListener("click" ,
function (){
    if (nomePanino.value.length === 0){
        alert("Perfavore inserire nome panino!")
    } else {
        let prezzoPartenzaPanino = 15;
        let ingredienti = document.getElementsByClassName("ingredients-check");

        for (let i = 0; i < ingredienti.length; i++){

            let ingredienteSingolo = ingredienti [i];
            
            if (ingredienteSingolo.checked == true){

                prezzoPartenzaPanino += 2 ;

            }
            
        }
        
        console.log(prezzoPartenzaPanino);

        prezzoFinalePanino += prezzoPartenzaPanino;
    }

});
console.log(prezzoFinalePanino);
  
let coupon = document.getElementById("insert-coupon");
console.log(coupon.value);

// for (let y = 0; y < listaCoupon.length; y++){

//     if ( coupon === listaCoupon[y]){
//         prezzoPartenzaPanino = prezzoPartenzaPanino * 0.8;
//     }

// }

// console.log(prezzoPartenzaPanino);