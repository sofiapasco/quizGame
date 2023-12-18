//refererar på min HTML
const quizBlock = document.querySelector(".quizBlock");
const quizImage = document.querySelector("#quizImage");
const alternativ =document.querySelector("#alternativ");
const submit =document.querySelector("#submit");
const startKnapp = document.querySelector ("#startKnapp");
const antalStudenter = document.querySelector ("#antalStudenter");
const wrong = document.querySelector("#wrong");
const right = document.querySelector("#right");


let antalGissningar = 0;
let score = 0;
let totalScore = 0;
let speletStartat = false;
let maxGissningar = 0;
let shuffledStudents = [...students];
let selectedStudent;

let isFirstStart = true;

//kod till när man ska starta spelet
function startGame() {
    const valAntal = antalStudenter.value; //värdet som finns i rutan ger jag variabeln valAntal
	
    if (valAntal === "default") { //om den är inaktiverad så kan man inte starta spelet
        console.log('Vänligen välj antal gissningar innan du startar spelet.');
        return;
    }
	
    if (valAntal === "alla") { // om man väljer alla så går 
        antalGissningar = students.length; // Alla studentergår igenom och antalGissninar blir alla studenter.
    } else {
        antalGissningar = Number(valAntal); // annars är det nått annat och tilldelas till en siffra
    }

	
	maxGissningar= antalGissningar; // håller reda på maxgissninar 
    speletStartat= true;
    startQuiz();
    score = 0; // Nollställ poängen
   totalScore = 0;

   if (isFirstStart) {
    score = 0; // Nollställ poängen bara vid första starten
    totalScore = 0;
    isFirstStart = false; // Ändra flaggan efter första starten
}
    document.querySelector("#resultat").style.display = 'none';
	console.log('Startar spelet med ' + antalGissningar + ' gissningar.');
    

}
// om knappen är på default alltså "Antal gissningar" så kommer den vara inaktiverad
    antalStudenter.addEventListener("change", function () {
    startKnapp.disabled = this.value === "default"; 
});

startKnapp.addEventListener('click', startGame);

shuffledStudents = [...students];  // klonar arrayen lägger den i den variabeln 
shuffleArray(shuffledStudents);  //Här slumpas studenterna i den funktionen 
console.log( shuffledStudents); 


//Funktion att starta spelet 
const startQuiz = () => {

    if (antalGissningar <= 0) {
        resetGame(); //avsluta 
        return;
    }

 //Slumpar studenterna och ger den en variabel 
const randomIndex = Math.floor(Math.random() * shuffledStudents.length);
selectedStudent = shuffledStudents[randomIndex]; 

console.log(selectedStudent.name); // Logga namnet
console.log(selectedStudent.image);


quizImage.src =selectedStudent.image;
quizImage.alt = selectedStudent.name;

const options = [...students]
    .filter(student => student.image !== selectedStudent.image)
    .slice(0, 3); // filtrerar studenterna till 4 alternativ 
    options.push(selectedStudent); // Lägg till det korrekta svaret bland alternativen
    
shuffleArray(options); // här så använder vi vår function som slumpar namnen. 
alternativ.innerHTML = '';// tömmer dom andra alternativen. 
  
// tar variablen som sprider ut studenterna och sedan filtrerar några studenter, loppar igenom studenterna!
options.forEach((option) => { 
    const buttonAlt = document.createElement('button');// skapar nya knappar i min HTML till mina fyra alternativ
    buttonAlt.className = "btn btn-primary";
    buttonAlt.textContent = option.name; //vad som ska stå i rutan 

    buttonAlt.classList.add('btn-alt');
    buttonAlt.addEventListener('click', () => answer(option));
    alternativ.appendChild(buttonAlt); // lägg till knapp i HMTL
 
});


shuffledStudents = shuffledStudents.filter(student => student !== selectedStudent); // Ta bort den valda studenten.image från listan

};

//en funktion för våra alternativ
function answer(option) {

    if (!speletStartat) { // om den inte är true så ska den alsvutas
        console.log('Spelet har inte startat än. Vänligen starta spelet först.');
        return;
    }
    totalScore ++;
    antalGissningar--; //minskar antalet gissninsgar 

    if (option.name === selectedStudent.name) {
        score++;
       console.log('Rätt svar! Poäng: ' + score );
      
    }
        else {
        console.log('Fel svar. Försök igen!')
    
    }
    startQuiz();	

};
  
// Avsluta spelet
function resetGame() {
    if (antalGissningar === 0) {
        document.querySelector("#resultat").style.display = 'block';// blockerar gissningarna
    }
    
	antalGissningar = 0; //återställer gissningarna
    shuffledStudents = [...students]; // återställer arrayen
    speletStartat = false; // spelet kan inte köras
   
    console.log('Spelet avslutas. Resultat: Poäng ' + score + totalScore);
    document.querySelector("#resultat").innerHTML = `<p class="resultat-text">Ditt resultat är ${score}/${totalScore} poäng.</p>`;
}
