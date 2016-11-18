$(document).ready(function() {

console.log(5+6);


	var ponies = ['<img src="assets/images/pinkpony.png">','<img src="assets/images/bluepony.png">','<img src="assets/images/purplepony.png">','<img src="assets/images/yellowpony.png">']
	var num_lives = ""


for (i = 0; i < ponies.length; i++){	
	var ponieBtn = $("<button data-pony=" + ponies[i] + ">");
          console.log(ponieBtn);
        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        ponieBtn.addClass("ponie-button");
        ponieBtn.addClass("ponie");
        ponieBtn.addClass("ponie-button-color"); 
		ponieBtn.text(letters[i]);
        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#number").append(ponieBtn);
}


















