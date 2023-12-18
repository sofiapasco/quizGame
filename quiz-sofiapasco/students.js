
const shuffleArray = (array) => { // skapar en function till min array
	for (let i = array.length - 1; i > 0; i--) { // gör en for loop för att ta mig igenom hela arrayen 
		const j = Math.floor(Math.random() * (i + 1)); //Gör Math metoden för att på ett random nummer
		const temp = array[i];// tilldelar arrays och index i variabeln temp
		array[i] = array[j]; 
		array[j] = temp;
	}


};

const students = [
	{ id: 2, name: "Aidin", image: "assets/images/students/aidin_radjavi.jpg" },
	{ id: 3, name: "Alexander", image: "assets/images/students/alexander_hamming.jpg" },
	{ id: 4, name: "Ali", image: "assets/images/students/ali_rezai.jpg" },
	{ id: 6, name: "Andreas", image: "assets/images/students/andreas_thorner.jpg" },
	{ id: 7, name: "Angelica", image: "assets/images/students/angelica_dahlberg.jpg" },
	{ id: 8, name: "Ann", image: "assets/images/students/ann_bacharach.jpg" },
	{ id: 9, name: "Anna", image: "assets/images/students/anna_brynhagen.jpg" },
	{ id: 10, name: "Camilla", image: "assets/images/students/camilla_landin.jpg" },
	{ id: 11, name: "Carolin H.", image: "assets/images/students/carolin_hansson.jpg" },
	{ id: 12, name: "Caroline R.", image: "assets/images/students/caroline_roos_bergman.jpg" },
	{ id: 13, name: "Denis", image: "assets/images/students/denis_imamovic.jpg" },
	{ id: 14, name: "Elin", image: "assets/images/students/elin_ny.jpg" },
	{ id: 15, name: "Ellinor", image: "assets/images/students/ellinor_lindstrom.jpg" },
	{ id: 16, name: "Emma Q.", image: "assets/images/students/emma_quinn.jpg" },
	{ id: 17, name: "Emma Å.", image: "assets/images/students/emma_ahlander_klinteberg.jpg" },
	{ id: 18, name: "Erik L.", image: "assets/images/students/erik_lindestad.jpg" },
	{ id: 20, name: "Fanny", image: "assets/images/students/fanny_hoberg.jpg" },
	{ id: 21, name: "Hanna", image: "assets/images/students/hanna_soderholm.jpg" },
	{ id: 22, name: "Johan", image: "assets/images/students/johan_kremer.jpg" },
	{ id: 25, name: "Josefin A.", image: "assets/images/students/josefin_ahlenius.jpg" },
	{ id: 26, name: "Josefine P.", image: "assets/images/students/josefine_pettersson.jpg" },
	{ id: 27, name: "Karin", image: "assets/images/students/karin_rasmusson.jpg" },
	{ id: 28, name: "Khaled", image: "assets/images/students/khaled_hassan.jpg" },
	{ id: 29, name: "Leonid", image: "assets/images/students/leonid_markovski.jpg" },
	{ id: 30, name: "Linnea M.", image: "assets/images/students/linnea_magnusson.jpg" },
	{ id: 31, name: "Linnea S.", image: "assets/images/students/linnea_sandberg.jpg" },
	{ id: 32, name: "Madeleine", image: "assets/images/students/madeleine_matis.jpg" },
	{ id: 33, name: "Mattea", image: "assets/images/students/mattea_saxell.jpg" },
	{ id: 34, name: "Max", image: "assets/images/students/max_reichenauer.jpg" },
	{ id: 35, name: "Mohsen", image: "assets/images/students/mohsen_heidari.jpg" },
	{ id: 37, name: "Oscar", image: "assets/images/students/oscar_throedsson.jpg" },
	{ id: 38, name: "Petar", image: "assets/images/students/petar_gorgievski.jpg" },
	{ id: 39, name: "Peter", image: "assets/images/students/peter_hyllengren.jpg" },
	{ id: 40, name: "Pontus", image: "assets/images/students/pontus_ekberg.jpg" },
	{ id: 41, name: "Pucha", image: "assets/images/students/pucha_sayerz_olsen.jpg" },
	{ id: 42, name: "Ramil", image: "assets/images/students/rameel_siddiqui.jpg" },
	{ id: 45, name: "Tomasz", image: "assets/images/students/tomasz_polrolniczak.jpg" },
	{ id: 43, name: "Robin", image: "assets/images/students/robin_persson.jpg" },
	{ id: 44, name: "Sofia", image: "assets/images/students/sofia_pasco.jpg" },
	{ id: 47, name: "Victor", image: "assets/images/students/victor_svensson.jpg" },
	{ id: 48, name: "William", image: "assets/images/students/william_lam.jpg" },
];

const missing_students = [
	{ id: 1, name: "Adam", image: "assets/images/students/adam_aspdahl_mourad.jpg" },
	{ id: 5, name: "Amin", image: "assets/images/students/amin_hassani.jpg" },
	{ id: 19, name: "Erik T.", image: "assets/images/students/erik_toft.jpg" },
	{ id: 22, name: "Jacob", image: "assets/images/students/jacob_lloyd.jpg" },
	{ id: 23, name: "Joakim", image: "assets/images/students/joakim_astrom.jpg" },
	{ id: 36, name: "Nichlas", image: "assets/images/students/nichlas_wijk.jpg" },
	{ id: 46, name: "Torbjörn", image: "assets/images/students/torbjorn_grahn.jpg" },
];
