let listaCoupon = ["capodanno", "natale", "pasqua", "compleanno"]

let nomePanino = document.getElementById("burger-name");

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
        // console.log(prezzoPartenzaPanino);
        
        let coupon = document.getElementById("insert-coupon");
        // console.log(coupon.value);

        if (coupon.value.length > 0) {
            if (listaCoupon.includes (coupon.value)){
                prezzoPartenzaPanino = prezzoPartenzaPanino * 0.8;
            }
            else {
                console.log("Il coupon non esiste")
            }
        }

        console.log(prezzoPartenzaPanino);
        document.getElementById("final-price").innerHTML = "&euro;" + prezzoPartenzaPanino;
        
    }
    

});

