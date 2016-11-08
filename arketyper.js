function hamta_arketyplistor (){
	// subvalsstruktur
	// s>=1, t>=1, u>=1
	// rpval.subval[0][0][0]: rpval-objekt med obligatoriska resurser, utan egen rubrik
	// rpval.subval[0][t][0]: rpval-objekt med obligatoriska resurser, med egen rubrik
	// rpval.subval[s][0][0]: eget objekt, innehåller endast antalsubval och valdasub
	// rpval.subval[s][t][0]: rpval-objekt med valda resurser som subval, 
	//						  med egen rubrik och dessutom med antalsubval och valdasub 
	//						  (dessa lämnas tomma om det ej finns subsubval 
	// rpval.subval[s][t][u]: rpval-objekt med valda resurser som subsubval, med egen rubrik
	//						  (förekommer sällan)

	
	// Loopa igenom alla foremal, kontakt osv som finns och lägg till properties foremalbas, kontaktbas osv. (samma process på folkslag och miljö)
	// Lägg till beskrivningvald
	
	var i;
	var j;
	var k;
	var s;
	var t;
	
	var arketyplista = ["donare", "krigare", "ledare", "lard", "mystiker", "skugga", "underhallare"];
	
    //var arketyplista = ["donare", "krigare", "ledare"];
	//var arketyplista = ["donare"];
	
    var arketypobjekt={};
    
	var krigare = {};
	krigare.subval = [[[]]];
	krigare.vald = 0;
	arketypobjekt.krigare=krigare;
	krigare.rubrik="Krigare";
	krigare.namn="krigare";
	
	krigare.beskrivning="Krigarna är de som har vigt sitt liv åt striden. De som kämpar för sitt uppehälle och ständigt lever med döden vid sin sida. De slåss för sin ära, sin gud, sin heder eller blott en riklig betalning i silver. ";
	
	krigare.subval[0][0][0] = {};
	krigare.subval[0][0][0].valdasub = [];
	krigare.subval[0][0][0].vald = 0;
	krigare.subval[0][0][0].farderaventyr = 1; 
	krigare.subval[0][0][0].striderdrabbningar = 2;
	krigare.subval[0][0][0].beskrivningtabeller = [["1 slag på Färder \& äventyr"],["2 slag på Strider \& drabbningar"]];
	krigare.subval[0][0][0].rorelsefardigheterenheter = 4;
	krigare.subval[0][0][0].stridsfardigheterenheter = 8;
	krigare.subval[0][0][0].valfriaenheter = 8;
	krigare.subval[0][0][0].beskrivningenheter=[["4 enheter Rörelsefärdigheter"],["8 enheter Stridsfärdigheter"],["8 valfria enheter"]];

	krigare.subval[0].push([]);
	krigare.subval[0][1][0] = {};
	krigare.subval[0][1][0].valdasub = [];
	krigare.subval[0][1][0].vald = 0;
	krigare.subval[0][1][0].vanligtvapen = 2;
	krigare.subval[0][1][0].ovanligtvapen = 1;
	krigare.subval[0][1][0].rubrik="Beväpning"
	krigare.subval[0][1][0].beskrivning="Ett ovanligt vapen, två vanliga vapen samt utrustning för att hålla vapnen i gott skick."

	krigare.subval[0].push([]);
	krigare.subval[0][2][0] = {};
	krigare.subval[0][2][0].valdasub = [];
	krigare.subval[0][2][0].vald = 0;
	krigare.subval[0][2][0].expertispoang = 1;
	krigare.subval[0][2][0].rubrik = "Expertis"
	krigare.subval[0][2][0].beskrivning = "1 poäng Expertiser.";
	

	krigare.subval[0].push([]);
	krigare.subval[0][3][0] = {};
	krigare.subval[0][3][0].valdasub = [];
	krigare.subval[0][3][0].vald = 0;
	krigare.subval[0][3][0].medelrustning = 1;
	krigare.subval[0][3][0].rubrik = "Rustning";
	krigare.subval[0][3][0].beskrivning = "En helrustning i något av följande material: fjällpansar \(Belastning 24, Pansar 10/8/6\), lamellpansar \(Belastning 24, Pansar 10/6/8\) eller ringbrynja \(Belastning 24, Pansar 12/4/8\).";

    
    
	krigare.subval.push([[]]);
	krigare.subval[1][0][0]  = {};
	krigare.subval[1][0][0].valdasub = [];
	krigare.subval[1][0][0].vald = 0;
	krigare.subval[1][0][0].antalsubval=2;
	krigare.subval[1][0][0].valdasub=[];


	krigare.subval[1].push([]);
	krigare.subval[1][1][0] = {};
	krigare.subval[1][1][0].valdasub = [];
	krigare.subval[1][1][0].vald = 0;
	krigare.subval[1][1][0].avtrubbningvald=2;
	krigare.subval[1][1][0].beskrivning="2 Avtrubbningskryss \(våld\)."
	krigare.subval[1][1][0].rubrik="Avtrubbning"

	krigare.subval[1].push([]);
	krigare.subval[1][2][0] = {};
	krigare.subval[1][2][0].valdasub = [];
	krigare.subval[1][2][0].vald = 0;
	krigare.subval[1][2][0].rubrik="Blodstillande örter.";	
	krigare.subval[1][2][0].beskrivning="8 doser blodstillande örter.";
	krigare.subval[1][2][0].resurs="8 doser blodstillande örter.";

	
	krigare.subval[1].push([]);
	krigare.subval[1][3][0] = {};
	krigare.subval[1][3][0].valdasub = [];
	krigare.subval[1][3][0].vald = 0;
	krigare.subval[1][3][0].beskrivning="En stridshäst.";
	krigare.subval[1][3][0].rubrik="Riddjur";
	krigare.subval[1][3][0].resurs="En stridshäst.";


	krigare.subval[1].push([]);
	krigare.subval[1][4][0] = {};
	krigare.subval[1][4][0].valdasub = [];
	krigare.subval[1][4][0].vald = 0;
	krigare.subval[1][4][0].tungrustning=1;
	krigare.subval[1][4][0].rubrik="Rustning";
	krigare.subval[1][4][0].beskrivning="En helrustning i något av följande material: tunnplåt \(Belastning 24, Pansar 10/7/10\) eller plåt \(Belastning 32, Pansar 15/12/15\)."
	
	krigare.subval[1].push([]);
	krigare.subval[1][5][0] = {};
	krigare.subval[1][5][0].valdasub = [];
	krigare.subval[1][5][0].vald = 0;
	krigare.subval[1][5][0].sallsyntvapen=1;
	krigare.subval[1][5][0].beskrivning="Två ovanliga vapen eller ett sällsynt vapen."
	krigare.subval[1][5][0].rubrik="Vapen"
	
	krigare.subval[1].push([]);
	krigare.subval[1][6][0] = {};
	krigare.subval[1][6][0].valdasub = [];
	krigare.subval[1][6][0].vald = 0;
	krigare.subval[1][6][0].sallsyntvapen=1;
	krigare.subval[1][6][0].beskrivning="Två ovanliga vapen eller ett sällsynt vapen."
	krigare.subval[1][6][0].rubrik="Ytterligare vapen"

	krigare.subval[1].push([]);
	krigare.subval[1][7][0] = {};
	krigare.subval[1][7][0].valdasub = [];
	krigare.subval[1][7][0].vald = 0;
	krigare.subval[1][7][0].beskrivning="4T6×4 silver."
	krigare.subval[1][7][0].rubrik="Pengar"
	krigare.subval[1][7][0].pengarslag="4T6x4"; // 4T6*4
	krigare.subval[1][7][0].beskrivningvaldbas="pengar_resultat silver."
	

	var donare = {};
	donare.subval = [[[]]];
	donare.vald = 0;
    arketypobjekt.donare=donare;
	donare.rubrik="Donare";
	donare.namn="donare";
	
	donare.beskrivning="Donarna är de som arbetar och sliter. De som bär riket på sina axlar och som äter smulorna från de förmögnas bord. De är blodet som pumpar i Kejsardömets ådror och håller det vid liv. De har ett brett kunnande och när det krävs kan de anpassa sig till nästan vilken situation som helst."

	donare.subval[0][0][0] = {};
	donare.subval[0][0][0].valdasub = [];
	donare.subval[0][0][0].vald = 0;
	donare.subval[0][0][0].farderaventyr = 2; 
	donare.subval[0][0][0].valfriatabellslag = 1;
	donare.subval[0][0][0].beskrivningtabeller = [["2 slag på Färder \& äventyr"],["1 slag på valfri tabell"]];
	donare.subval[0][0][0].rorelsefardigheterenheter = 3;
	donare.subval[0][0][0].socialafardigheterenheter = 3;
	donare.subval[0][0][0].vildmarksfardigheterenheter = 4;
	donare.subval[0][0][0].valfriaenheter = 10;
	donare.subval[0][0][0].beskrivningenheter=[["3 enheter Rörelsefärdigheter"],["3 enheter Sociala färdigheter"],["4 enheter Vildmarksfärdigheter"],["10 valfria enheter"]];
	
	donare.subval[0].push([]);
	donare.subval[0][1][0] = {};
	donare.subval[0][1][0].valdasub = [];
	donare.subval[0][1][0].vald = 0;
	donare.subval[0][1][0].vanligtvapen = 1;
	donare.subval[0][1][0].rubrik="Beväpning"
	donare.subval[0][1][0].beskrivning="Ett vanligt vapen."
	
	donare.subval[0].push([]);
	donare.subval[0][2][0] = {};
	donare.subval[0][2][0].valdasub = [];
	donare.subval[0][2][0].vald = 0;
	donare.subval[0][2][0].hantverkpoang = 1;
	donare.subval[0][2][0].rubrik="Hantverk"
	donare.subval[0][2][0].beskrivning="1 poäng Hantverk"
	
	donare.subval[0].push([]);
	donare.subval[0][3][0] = {};
	donare.subval[0][3][0].valdasub = [];
	donare.subval[0][3][0].vald = 0;
	donare.subval[0][3][0].mycketlattrustning = 1;
	donare.subval[0][3][0].rubrik="Rustning"
	donare.subval[0][3][0].beskrivning="En heltäckande klädnad i något av följande material: vadderat tyg \(Belastning 8, Pansar 2/4/2\), päls \(Belastning 8, Pansar 4/2/2\) eller mjukt läder \(Belastning 8, Pansar 3/3/2\)."
	
	donare.subval.push([[]]);
	donare.subval[1][0][0]  = {};
	donare.subval[1][0][0].valdasub = [];
	donare.subval[1][0][0].vald = 0;
	donare.subval[1][0][0].antalsubval=2;
	donare.subval[1][0][0].valdasub=[];

	donare.subval[1].push([]);
	donare.subval[1][1][0] = {};
	donare.subval[1][1][0].valdasub = [];
	donare.subval[1][1][0].vald = 0;
	donare.subval[1][1][0].avtrubbningvald=1;
	donare.subval[1][1][0].avtrubbningutsatthet=1;
	donare.subval[1][1][0].rubrik="Avtrubbning"
	donare.subval[1][1][0].beskrivning="1 Avtrubbningskryss vardera för utsatthet och våld."
	
	donare.subval[1].push([]);
	donare.subval[1][2][0] = {};
	donare.subval[1][2][0].valdasub = [];
	donare.subval[1][2][0].vald = 0;
	donare.subval[1][2][0].expertispoang=1;
	donare.subval[1][2][0].rubrik="Expertis"
	donare.subval[1][2][0].beskrivning="1 poäng Expertiser."
	
	
	donare.subval[1].push([]);
	donare.subval[1][3][0] = {};
	donare.subval[1][3][0].valdasub = [];
	donare.subval[1][3][0].vald = 0;
	donare.subval[1][3][0].kanneteckenpoang=1;
	donare.subval[1][3][0].rubrik="Kännetecken"
	donare.subval[1][3][0].beskrivning="1 poäng Kännetecken."
	
	
	donare.subval[1].push([]);
	donare.subval[1][4][0] = {};
	donare.subval[1][4][0].valdasub = [];
	donare.subval[1][4][0].vald = 0;
	donare.subval[1][4][0].ovanligtvapen=1;
	donare.subval[1][4][0].rubrik="Ovanligt vapen"
	donare.subval[1][4][0].beskrivning="Ett ovanligt vapen."
	
	
	donare.subval[1].push([]);
	donare.subval[1][5][0] = {};
	donare.subval[1][5][0].valdasub = [];
	donare.subval[1][5][0].vald = 0;
	donare.subval[1][5][0].medelrustning=1;
	donare.subval[1][5][0].rubrik="Rustning"
	donare.subval[1][5][0].beskrivning="En helrustning i något av följande material: härdat läder \(Belastning 16, Pansar 5/6/5\), nitläder \(Belastning 16, Pansar 6/6/4\), ringläder \(Belastning 16, Pansar 7/5/4\), fjällpansar \(Belastning 24, Pansar 10/8/6\), lamellpansar \(Belastning 24, Pansar 10/6/8\) eller ringbrynja \(Belastning 24, Pansar 12/4/8\)."
	
	
	donare.subval[1].push([]);
	donare.subval[1][6][0] = {};
	donare.subval[1][6][0].valdasub = [];
	donare.subval[1][6][0].vald = 0;
	donare.subval[1][6][0].resurs = "Verkstad där rollpersonen får \+1T6 på sitt hantverk";
	donare.subval[1][6][0].rubrik="Verkstad"
	donare.subval[1][6][0].beskrivning="Rollpersonen har en verkstad där denne kan utföra sitt värv. I verkstaden får rollpersonen en bonus på +1T6 på sitt hantverk."
	
	
	donare.subval[1].push([]);
	donare.subval[1][7][0] = {};
	donare.subval[1][7][0].valdasub = [];
	donare.subval[1][7][0].vald = 0;
	donare.subval[1][7][0].pengarslag="4T6x3"; // 4T6*3
	donare.subval[1][7][0].rubrik="Pengar"
	donare.subval[1][7][0].beskrivning="4T6×3 silver."
	donare.subval[1][7][0].beskrivningvaldbas="pengar_resultat silver."
	
	

	
	var mystiker = {};
	mystiker.subval = [[[]]];
	mystiker.vald = 0;
   	arketypobjekt.mystiker=mystiker;
    mystiker.rubrik = "Mystiker";
	mystiker.namn = "mystiker";
	
	mystiker.beskrivning="Mystikerna är de som hängivit sig åt den dolda kunskapen. De som böjt på knä inför gudar och väsen eller tyglat den magiska väven till att bli sitt redskap. De flesta mystikerna i Jargien är dock präster inom Daakkyrkan och kallas även för åkallare då de åkallar både Daaks och helgonens heliga makt.";

	mystiker.subval[0][0][0] = {};
	mystiker.subval[0][0][0].valdasub = [];
	mystiker.subval[0][0][0].vald = 0;
	mystiker.subval[0][0][0].kunskapmysterier = 2; 
	mystiker.subval[0][0][0].valfriatabellslag = 1;
	mystiker.subval[0][0][0].beskrivningtabeller = [["2 slag på Kunskap \& mysterier"],["1 slag på valfri tabell"]];
	mystiker.subval[0][0][0].kunskapsfardigheterenheter = 2;
	mystiker.subval[0][0][0].mystikfardigheterenheter=10;
	mystiker.subval[0][0][0].valfriaenheter = 8;
	mystiker.subval[0][0][0].beskrivningenheter=[["2 enheter Kunskapsfärdigheter"],["10 enheter Mystikfärdigheter"],["8 valfria enheter"]];
	
	mystiker.subval[0].push([]);
	mystiker.subval[0][1][0] = {};
	mystiker.subval[0][1][0].valdasub = [];
	mystiker.subval[0][1][0].vald = 0;
	mystiker.subval[0][1][0].vanligtvapen = 1;
	mystiker.subval[0][1][0].rubrik="Beväpning"
	mystiker.subval[0][1][0].beskrivning="Ett vanligt vapen."
	
	mystiker.subval[0].push([]);
	mystiker.subval[0][2][0] = {};
	mystiker.subval[0][2][0].valdasub = [];
	mystiker.subval[0][2][0].vald = 0;
	mystiker.subval[0][2][0].expertispoang = 1;
	mystiker.subval[0][2][0].rubrik="Expertis"
	mystiker.subval[0][2][0].beskrivning="1 poäng Expertiser"
	
	mystiker.subval[0].push([]);
	mystiker.subval[0][3][0] = {};
	mystiker.subval[0][3][0].valdasub = [];
	mystiker.subval[0][3][0].vald = 0;
	mystiker.subval[0][3][0].lattrustning = 1;
	mystiker.subval[0][3][0].rubrik="Heligt föremål"
	mystiker.subval[0][3][0].beskrivning="Ett heligt föremål"
	mystiker.subval[0][3][0].heligaforemal=1;
	
	mystiker.subval[0].push([]);
	mystiker.subval[0][4][0] = {};
	mystiker.subval[0][4][0].valdasub = [];
	mystiker.subval[0][4][0].vald = 0;
	mystiker.subval[0][4][0].lattrustning = 1;
	mystiker.subval[0][4][0].rubrik="Mysterier"
	mystiker.subval[0][4][0].beskrivning="6 Mysterier"
	mystiker.subval[0][4][0].mysterier=6;
	
	
	mystiker.subval.push([[]]);
	mystiker.subval[1][0][0]  = {};
	mystiker.subval[1][0][0].valdasub = [];
	mystiker.subval[1][0][0].vald = 0;
	mystiker.subval[1][0][0].antalsubval=2;
	mystiker.subval[1][0][0].valdasub=[];

	mystiker.subval[1].push([]);
	mystiker.subval[1][1][0] = {};
	mystiker.subval[1][1][0].valdasub = [];
	mystiker.subval[1][1][0].vald = 0;
	mystiker.subval[1][1][0].avtrubbningovernaturligt=2;
	mystiker.subval[1][1][0].rubrik="Avtrubbning"
	mystiker.subval[1][1][0].beskrivning="2 Avtrubbningskryss för övernaturligt."
	
	mystiker.subval[1].push([]);
	mystiker.subval[1][2][0] = {};
	mystiker.subval[1][2][0].valdasub = [];
	mystiker.subval[1][2][0].vald = 0;
	mystiker.subval[1][2][0].medelrustning=1;
	mystiker.subval[1][2][0].ovanligtvapen=1;
	mystiker.subval[1][2][0].rubrik="Beväpning"
	mystiker.subval[1][2][0].beskrivning="Ett ovanligt vapen samt en helrustning i något av följande material: härdat läder \(Belastning 16, Pansar 5/6/5\), nitläder \(Belastning 16, Pansar 6/6/4\), ringläder \(Belastning 16, Pansar 7/5/4\), fjällpansar \(Belastning 24, Pansar 10/8/6\), lamellpansar \(Belastning 24, Pansar 10/6/8\) eller ringbrynja \(Belastning 24, Pansar 12/4/8\)."
	
	
	mystiker.subval[1].push([]);
	mystiker.subval[1][3][0] = {};
	mystiker.subval[1][3][0].valdasub = [];
	mystiker.subval[1][3][0].vald = 0;
	mystiker.subval[1][3][0].heligaforemal=1;
	mystiker.subval[1][3][0].rubrik="Heligt föremål"
	mystiker.subval[1][3][0].beskrivning="Ytterligare ett heligt föremål."
	
	
	mystiker.subval[1].push([]);
	mystiker.subval[1][4][0] = {};
	mystiker.subval[1][4][0].valdasub = [];
	mystiker.subval[1][4][0].vald = 0;
	mystiker.subval[1][4][0].kontaktbas="Har en lärling som tidigare var kontakt1_rubrikliten."; // YTTERLIGARE SUBVAL
	mystiker.subval[1][4][0].kontaktenhetbool=[0];
	mystiker.subval[1][4][0].rubrik="Lärling"
	mystiker.subval[1][4][0].beskrivning="Rollpersonen har med sig en lärling. Slå två gånger på bakgrundstabellen och välj en som beskriver lärlingens härkomst."
	mystiker.subval[1][4][0].beskrivningvaldbas="Rollpersonen har med sig en lärling som tidigare var kontakt1_rubrikliten. ";
	
	
	mystiker.subval[1].push([]);
	mystiker.subval[1][5][0] = {};
	mystiker.subval[1][5][0].valdasub = [];
	mystiker.subval[1][5][0].vald = 0;
	mystiker.subval[1][5][0].kontakt="Har god kontakt med en mästare.";
	mystiker.subval[1][5][0].rubrik="Mästare"
	mystiker.subval[1][5][0].beskrivning="Rollpersonen har god kontakt med en mästare inom sitt gebit. Mästaren kan hjälpa rollpersonen med problem av mystisk karaktär."
	
	
	mystiker.subval[1].push([]);
	mystiker.subval[1][6][0] = {};
	mystiker.subval[1][6][0].valdasub = [];
	mystiker.subval[1][6][0].vald = 0;
	mystiker.subval[1][6][0].rubrik="Specialträning"
	mystiker.subval[1][6][0].beskrivning="Rollpersonen har fått särskild bildning och får en valfri expertis som denne får 5T6 i. Exempel för en Daakpräst är Begravningsriter, Citera Libera, Flagellera, Helgonens liv, Kyrkor och heliga platser, Tolka religiösa skrifter och Tortyr."
	mystiker.subval[1][6][0].antalsubval=1;
	
	mystiker.subval[1][6].push();
	mystiker.subval[1][6][1] = {};
	mystiker.subval[1][6][1].valdasub = [];
	mystiker.subval[1][6][1].vald = 0;
	mystiker.subval[1][6][1].rubrik="Begravningsriter"
	mystiker.subval[1][6][1].begravningsriter = {};
	mystiker.subval[1][6][1].begravningsriter.enheter=7;
	
	mystiker.subval[1][6].push();
	mystiker.subval[1][6][2] = {};
	mystiker.subval[1][6][2].valdasub = [];
	mystiker.subval[1][6][2].vald = 0;
	mystiker.subval[1][6][2].rubrik="Citera Libera"
	mystiker.subval[1][6][2].citeralibera = {};
	mystiker.subval[1][6][2].citeralibera.enheter=7;
	
	mystiker.subval[1][6].push();
	mystiker.subval[1][6][3] = {};
	mystiker.subval[1][6][3].valdasub = [];
	mystiker.subval[1][6][3].vald = 0;
	mystiker.subval[1][6][3].rubrik="Flagellera"
	mystiker.subval[1][6][3].flagellera = {};
	mystiker.subval[1][6][3].flagellera.enheter=7;
	
	mystiker.subval[1][6].push();
	mystiker.subval[1][6][4] = {};
	mystiker.subval[1][6][4].valdasub = [];
	mystiker.subval[1][6][4].vald = 0;
	mystiker.subval[1][6][4].rubrik="Helgonens liv"
	mystiker.subval[1][6][4].helgonensliv = {};
	mystiker.subval[1][6][4].helgonensliv.enheter=7;
	
	mystiker.subval[1][6].push();
	mystiker.subval[1][6][5] = {};
	mystiker.subval[1][6][5].valdasub = [];
	mystiker.subval[1][6][5].vald = 0;
	mystiker.subval[1][6][5].rubrik="Kyrkor och heliga platser"
	mystiker.subval[1][6][5].kyrkorochheligaplatser = {};
	mystiker.subval[1][6][5].kyrkorochheligaplatser.enheter=7;
	
	mystiker.subval[1][6].push();
	mystiker.subval[1][6][6] = {};
	mystiker.subval[1][6][6].valdasub = [];
	mystiker.subval[1][6][6].vald = 0;
	mystiker.subval[1][6][6].rubrik="Tolka religiösa skrifter"
	mystiker.subval[1][6][6].tolkareligiosaskrifter = {};
	mystiker.subval[1][6][6].tolkareligiosaskrifter.enheter=7;
	
	mystiker.subval[1][6].push();
	mystiker.subval[1][6][7] = {};
	mystiker.subval[1][6][7].valdasub = [];
	mystiker.subval[1][6][7].vald = 0;
	mystiker.subval[1][6][7].rubrik="Tortyr"
	mystiker.subval[1][6][7].tortyr = {};
	mystiker.subval[1][6][7].tortyr.enheter=7;
	
	
	mystiker.subval[1].push([]);
	mystiker.subval[1][7][0] = {};
	mystiker.subval[1][7][0].valdasub = [];
	mystiker.subval[1][7][0].vald = 0;
	mystiker.subval[1][7][0].pengarslag="4T6x5"; // 4T6*3
	mystiker.subval[1][7][0].rubrik="Pengar"
	mystiker.subval[1][7][0].beskrivning="4T6×5 silver."
	mystiker.subval[1][7][0].beskrivningvaldbas="pengar_resultat silver."
	
	
   
	var lard = {};
	lard.subval = [[[]]];
	lard.vald = 0;
   	arketypobjekt.lard=lard;
    lard.rubrik = "Lärd";
	lard.namn = "lard";
	
	lard.beskrivning="De lärda är de som äger insikten i hur världen fungerar, hur riken uppstår och faller, hur sjukdomar ska botas och makt smidas. De är beväpnade med sitt kunnande och sina skarpa argument och de råd de viskar når ända upp till kejsartronen."

	lard.subval[0][0][0] = {};
	lard.subval[0][0][0].valdasub = [];
	lard.subval[0][0][0].vald = 0;
	lard.subval[0][0][0].intrigerillgarningar = 1; 
	lard.subval[0][0][0].kunskapmysterier = 2;
	lard.subval[0][0][0].beskrivningtabeller = [["1 slag på Intriger \& illgärningar"],["2 slag på Kunskap \& mysterier"]];
	lard.subval[0][0][0].kunskapsfardigheterenheter = 10;
	lard.subval[0][0][0].socialafardigheterenheter = 2;
	lard.subval[0][0][0].valfriaenheter = 8;
	lard.subval[0][0][0].beskrivningenheter=[["10 enheter Kunskapsfärdigheter"],["2 enheter Sociala färdigheter"],["8 valfria enheter"]];
	
	lard.subval[0].push([]);
	lard.subval[0][1][0] = {};
	lard.subval[0][1][0].valdasub = [];
	lard.subval[0][1][0].vald = 0;
	lard.subval[0][1][0].vanligtvapen = 1;
	lard.subval[0][1][0].resurs="Anteckningsbok och skrivdon."
	lard.subval[0][1][0].beskrivning = "Ett vanligt vapen, anteckningsbok och skrivdon.";
	lard.subval[0][1][0].rubrik="Beväpning"


	lard.subval[0].push([]);
	lard.subval[0][2][0] = {};
	lard.subval[0][2][0].valdasub = [];
	lard.subval[0][2][0].vald = 0;
	lard.subval[0][2][0].expertispoang = 1;
	lard.subval[0][2][0].beskrivning = "1 poäng expertiser";
	lard.subval[0][2][0].rubrik="Expertis"
    
	lard.subval.push([[]]);
	lard.subval[1][0][0]  = {};
	lard.subval[1][0][0].valdasub = [];
	lard.subval[1][0][0].vald = 0;
	lard.subval[1][0][0].antalsubval=2;
	lard.subval[1][0][0].valdasub=[];

	lard.subval[1].push([]);
	lard.subval[1][1][0] = {};
	lard.subval[1][1][0].valdasub = [];
	lard.subval[1][1][0].vald = 0;
	lard.subval[1][1][0].avtrubbningvald=1;
	lard.subval[1][1][0].avtrubbningovernaturligt=1;
	lard.subval[1][1][0].rubrik="Avtrubbning"
	lard.subval[1][1][0].beskrivning="1 Avtrubbningskryss vardera för våld och övernaturligt."

	
	lard.subval[1].push([]);
	lard.subval[1][2][0] = {};
	lard.subval[1][2][0].valdasub = [];
	lard.subval[1][2][0].vald = 0;
	lard.subval[1][2][0].resurs = "5 doser droger eller läkeörter."
	lard.subval[1][2][0].rubrik="Droger \& läkeörter"
	lard.subval[1][2][0].beskrivning="5 valfria doser droger eller läkeörter."

	
	lard.subval[1].push([]);
	lard.subval[1][3][0] = {};
	lard.subval[1][3][0].valdasub = [];
	lard.subval[1][3][0].vald = 0;
	lard.subval[1][3][0] = {};
	lard.subval[1][3][0].lattlardkunskapfardigheter=1;
	lard.subval[1][3][0].rubrik="Kunskap"
	lard.subval[1][3][0].beskrivning="Lättlärd i valfri Kunskapsfärdighet."

	lard.subval[1].push([]);
	lard.subval[1][4][0] = {};
	lard.subval[1][4][0].valdasub = [];
	lard.subval[1][4][0].vald = 0;
	lard.subval[1][4][0].resurs = "Läkarutrustning inklusive kirurgiska instrument. Utrustningen ger en bonus på \+1T6 när man försöker stoppa blödningar med Läkekonst.";
	lard.subval[1][4][0].rubrik="Läkarutrustning"
	lard.subval[1][4][0].beskrivning="En axelremsväska som innehåller fem ihoprullade tygförband, en flaska sprit, en lur, en låda med ett dussin blodiglar, en liten men mycket vass koppkniv, en synål och en rulle tråd. Dessutom ingår en uppsättning kirurgiska instrument som krävs för att man ska kunna utföra en operation. Med denna utrustning får man en bonus på +1T6 när man försöker stoppa blödningar med Läkekonst.";
	
	lard.subval[1].push([]);
	lard.subval[1][5][0] = {};
	lard.subval[1][5][0].valdasub = [];
	lard.subval[1][5][0].vald = 0;
	lard.subval[1][5][0].ovanligtvapen=1;
	lard.subval[1][5][0].rubrik="Ovanligt vapen"
	lard.subval[1][5][0].beskrivning="Ett ovanligt vapen."

	lard.subval[1].push([]);
	lard.subval[1][6][0] = {};
	lard.subval[1][6][0].valdasub = [];
	lard.subval[1][6][0].vald = 0;
	lard.subval[1][6][0].medelrustning=1;
	lard.subval[1][6][0].rubrik="Rustning";
	lard.subval[1][6][0].beskrivning="En helrustning i något av följande material: härdat läder \(Belastning 16, Pansar 5/6/5\), nitläder \(Belastning 16, Pansar 6/6/4\), ringläder \(Belastning 16, Pansar 7/5/4\), fjällpansar \(Belastning 24, Pansar 10/8/6\), lamellpansar \(Belastning 24, Pansar 10/6/8\) eller ringbrynja \(Belastning 24, Pansar 12/4/8\)."
	
	lard.subval[1].push([]);
	lard.subval[1][7][0] = {};
	lard.subval[1][7][0].valdasub = [];
	lard.subval[1][7][0].vald = 0;
	lard.subval[1][7][0].resurs="Skriftsamling som ger \+1T6 till en vald kunskapsfärdighet";
	lard.subval[1][7][0].rubrik="Skriftsamling";
	lard.subval[1][7][0].beskrivning="En tjock och tung bok som innehåller rikligt med information om ett specifikt ämne. Rollpersonen får välja en kunskapsfärdighet som boken berör och när rollpersonen kan använda boken till hjälp så får denne \+1T6 bonus."
	
	
	lard.subval[1].push([]);
	lard.subval[1][8][0] = {};
	lard.subval[1][8][0].valdasub = [];
	lard.subval[1][8][0].vald = 0;
	lard.subval[1][8][0].pengarslag="4T6x5"; // 4T6*10
	lard.subval[1][8][0].rubrik="Pengar"
	lard.subval[1][8][0].beskrivning="4T6×5 silver."
	lard.subval[1][8][0].beskrivningvaldbas="pengar_resultat silver."
	
	
	
	
   
	var ledare = {};
	ledare.subval = [[[]]];
	ledare.vald = 0;
    arketypobjekt.ledare=ledare;
   	ledare.rubrik = "Ledare";
	ledare.namn = "ledare";
	
	ledare.beskrivning="Ledarna är de som har makten över andras liv. De styr och ställer och använder såväl kunskap som skarpsinne för att få andra att böja sig för deras vilja. De fattar de svåra besluten och är de som frossar i rikedom när ödet faller väl ut."

	ledare.subval[0][0][0] = {};
	ledare.subval[0][0][0].valdasub = [];
	ledare.subval[0][0][0].vald = 0;
	ledare.subval[0][0][0].intrigerillgarningar = 1; 
	ledare.subval[0][0][0].kunskapmysterier = 1;
	ledare.subval[0][0][0].valfriatabellslag = 1;
	ledare.subval[0][0][0].beskrivningtabeller = [["1 slag på Intriger \& illgärningar"],["1 slag på Kunskap \& mysterier"], ["1 slag på valfri tabell"]];
	ledare.subval[0][0][0].kunskapsfardigheterenheter = 6;
	ledare.subval[0][0][0].socialafardigheterenheter = 6;
	ledare.subval[0][0][0].valfriaenheter = 8;
	ledare.subval[0][0][0].beskrivningenheter=[["6 enheter Kunskapsfärdigheter"],["6 enheter Sociala färdigheter"],["8 valfria enheter"]];
	
	ledare.subval[0].push([]);
	ledare.subval[0][1][0] = {};
	ledare.subval[0][1][0].valdasub = [];
	ledare.subval[0][1][0].vald = 0;
	ledare.subval[0][1][0].vanligtvapen = 1;
	ledare.subval[0][1][0].ovanligtvapen = 1;
	ledare.subval[0][1][0].beskrivning = "Ett vanligt och ett ovanligt vapen";
	ledare.subval[0][1][0].rubrik="Beväpning"


	ledare.subval[0].push([]);
	ledare.subval[0][2][0] = {};
	ledare.subval[0][2][0].valdasub = [];
	ledare.subval[0][2][0].vald = 0;
	ledare.subval[0][2][0].expertispoang = 1;
	ledare.subval[0][2][0].beskrivning = "1 poäng expertiser";
	ledare.subval[0][2][0].rubrik="Expertis"
    
	ledare.subval.push([[]]);
	ledare.subval[1][0][0]  = {};
	ledare.subval[1][0][0].valdasub = [];
	ledare.subval[1][0][0].vald = 0;
	ledare.subval[1][0][0].antalsubval=2;
	ledare.subval[1][0][0].valdasub=[];

	ledare.subval[1].push([]);
	ledare.subval[1][1][0] = {};
	ledare.subval[1][1][0].valdasub = [];
	ledare.subval[1][1][0].vald = 0;
	ledare.subval[1][1][0].kontakt = "Lojal andreman."
	ledare.subval[1][1][0].rubrik="Andreman"
	ledare.subval[1][1][0].beskrivning="Rollpersonen har vid sin sida en lojal andreman som är dennes högra hand."

	ledare.subval[1].push([]);
	ledare.subval[1][2][0] = {};
	ledare.subval[1][2][0].valdasub = [];
	ledare.subval[1][2][0].vald = 0;
	ledare.subval[1][2][0].avtrubbningvald=1;
	ledare.subval[1][2][0].avtrubbningovernaturligt=1;
	ledare.subval[1][2][0].rubrik="Avtrubbning"
	ledare.subval[1][2][0].beskrivning="1 Avtrubbningskryss vardera för våld och övernaturligt."

	ledare.subval[1].push([]);
	ledare.subval[1][3][0] = {};
	ledare.subval[1][3][0].valdasub = [];
	ledare.subval[1][3][0].vald = 0;
	ledare.subval[1][3][0].resurs = "Emblem som kan ge \+1T6 bonus på en vald social färdighet.";
	ledare.subval[1][3][0].rubrik="Emblem"
	ledare.subval[1][3][0].beskrivning="Rollpersonen har ett emblem som visar på dennes position som ledare. Det kan handla om militära dekorationer, om stöd från en makthavare eller emblem från en orden. Emblemet ger rollpersonen en pondus och associeras med en valfri social färdighet. När rollpersonen visar emblemet för någon som ser upp till eller respekterar dess innebörd så får rollpersonen en bonus på \+1T6 för den associerade färdigheten."

	ledare.subval[1].push([]);
	ledare.subval[1][4][0] = {};
	ledare.subval[1][4][0].valdasub = [];
	ledare.subval[1][4][0].vald = 0;
	ledare.subval[1][4][0].resurs = "Lejdebrev från lokal makthavare.";
	ledare.subval[1][4][0].rubrik="Lejdebrev"
	ledare.subval[1][4][0].beskrivning="Rollpersonen har i sin ägo ett signerat brev från en lokal makthavare. Med detta brev kan rollpersonen få hjälp av makthavaren om rollpersonen hamnar i problem.";
	
	ledare.subval[1].push([]);
	ledare.subval[1][5][0] = {};
	ledare.subval[1][5][0].valdasub = [];
	ledare.subval[1][5][0].vald = 0;
	ledare.subval[1][5][0].medelrustning=1;
	ledare.subval[1][5][0].rubrik="Rustning"
	ledare.subval[1][5][0].beskrivning="En helrustning i något av följande material: härdat läder \(Belastning 16, Pansar 5/6/5\), nitläder \(Belastning 16, Pansar 6/6/4\), ringläder \(Belastning 16, Pansar 7/5/4\), fjällpansar \(Belastning 24, Pansar 10/8/6\), lamellpansar \(Belastning 24, Pansar 10/6/8\) eller ringbrynja \(Belastning 24, Pansar 12/4/8\)."

	ledare.subval[1].push([]);
	ledare.subval[1][6][0] = {};
	ledare.subval[1][6][0].valdasub = [];
	ledare.subval[1][6][0].vald = 0;
	ledare.subval[1][6][0].kontaktbas = "Tjänst att inkräva från kontakt1_obestamd.";
	ledare.subval[1][6][0].rubrik="Tjänst att inkräva";
	ledare.subval[1][6][0].beskrivning="Slå två gånger på bakgrundstabellen och välj en som visar vem rollpersonen kan kräva en tjänst av. Denna individ är skyldig rollpersonen en stor tjänst. Spelaren får själv välja när denne vill föra in personen i spel så länge som situationen inte är allt för orimlig.";
	ledare.subval[1][6][0].beskrivningvaldbas="Rollpersonen kan kräva en tjänst av kontakt1_obestamd. Denna individ är skyldig rollpersonen en stor tjänst. Spelaren får själv välja när denne vill föra in kontakt1_bestamd i spel så länge som situationen inte är allt för orimlig. ";
	ledare.subval[1][6][0].kontaktenhetbool=[0];
	//ledare.subval[1][6][0].FLERASUBVAL
	
	ledare.subval[1].push([]);
	ledare.subval[1][7][0] = {};
	ledare.subval[1][7][0].valdasub = [];
	ledare.subval[1][7][0].vald = 0;
	ledare.subval[1][7][0].pengarslag="4T6x10"; // 4T6*10
	ledare.subval[1][7][0].rubrik="Pengar"
	ledare.subval[1][7][0].beskrivning="4T6×10 silver."
	ledare.subval[1][7][0].beskrivningvaldbas="pengar_resultat silver."
	
	var skugga = {};
	skugga.subval = [[[]]];
	skugga.vald = 0;
   	arketypobjekt.skugga=skugga;
    skugga.rubrik = "Skugga";
	skugga.namn = "skugga";
	
	skugga.beskrivning="Skuggorna verkar i det dolda. De är de som observerar utan att synas och nästlar sig in där ingen tror att de ska finnas. Vissa gömmer sig i vildmarken eller städernas slingrande gränder, andra mitt bland folk men bakom en skickligt skapad fasad."

	skugga.subval[0][0][0] = {};
	skugga.subval[0][0][0].valdasub = [];
	skugga.subval[0][0][0].vald = 0;
	skugga.subval[0][0][0].intrigerillgarningar = 1; 
	skugga.subval[0][0][0].striderdrabbningar = 1;
	skugga.subval[0][0][0].valfriatabellslag = 1;
	skugga.subval[0][0][0].beskrivningtabeller = [["1 slag på Intriger \& illgärningar"],["1 slag på Strider \& drabbningar"], ["1 slag på valfri tabell"]];
	skugga.subval[0][0][0].rorelsefardigheterenheter = 6;
	skugga.subval[0][0][0].stridsfardigheterenheter = 3;
	skugga.subval[0][0][0].vildmarksfardigheterenheter = 3;
	skugga.subval[0][0][0].valfriaenheter = 8;
	skugga.subval[0][0][0].beskrivningenheter=[["6 enheter Rörelsefärdigheter"],["3 enheter Stridsfärdigheter"],["3 enheter Vildmarksfärdigheter"],["8 valfria enheter"]];
	
	skugga.subval[0].push([]);
	skugga.subval[0][1][0] = {};
	skugga.subval[0][1][0].valdasub = [];
	skugga.subval[0][1][0].vald = 0;
	skugga.subval[0][1][0].vanligtvapen = 2;
	skugga.subval[0][1][0].beskrivning = "Två vanliga vapen";
	skugga.subval[0][1][0].rubrik="Beväpning"


	skugga.subval[0].push([]);
	skugga.subval[0][2][0] = {};
	skugga.subval[0][2][0].valdasub = [];
	skugga.subval[0][2][0].vald = 0;
	skugga.subval[0][2][0].expertispoang = 1;
	skugga.subval[0][2][0].beskrivning = "1 poäng expertiser";
	skugga.subval[0][2][0].rubrik="Expertis"
    
	skugga.subval[0].push([]);
	skugga.subval[0][3][0] = {};
	skugga.subval[0][3][0].valdasub = [];
	skugga.subval[0][3][0].vald = 0;
	skugga.subval[0][3][0].mycketlattrustning = 1;
	skugga.subval[0][3][0].beskrivning = "En heltäckande klädnad i något av följande material: vadderat tyg \(Belastning 8, Pansar 2/4/2\), päls \(Belastning 8, Pansar 4/2/2\) eller mjukt läder \(Belastning 8, Pansar 3/3/2\).";
	skugga.subval[0][3][0].rubrik="Beväpning"
	
	skugga.subval.push([[]]);
	skugga.subval[1][0][0]  = {};
	skugga.subval[1][0][0].valdasub = [];
	skugga.subval[1][0][0].vald = 0;
	skugga.subval[1][0][0].antalsubval=2;
	skugga.subval[1][0][0].valdasub=[];

	
	skugga.subval[1].push([]);
	skugga.subval[1][1][0] = {};
	skugga.subval[1][1][0].valdasub = [];
	skugga.subval[1][1][0].vald = 0;
	skugga.subval[1][1][0].avtrubbningvald=1;
	skugga.subval[1][1][0].avtrubbningutsatthet=1;
	skugga.subval[1][1][0].rubrik="Avtrubbning"
	skugga.subval[1][1][0].beskrivning="1 Avtrubbningskryss vardera för utsatthet och våld."

	
	skugga.subval[1].push([]);
	skugga.subval[1][2][0] = {};
	skugga.subval[1][2][0].valdasub = [];
	skugga.subval[1][2][0].vald = 0;
	skugga.subval[1][2][0].resurs = "1 dos nervgift, 1 dos blodgift och 3 doser bedövande gift."
	skugga.subval[1][2][0].rubrik="Gifter"
	skugga.subval[1][2][0].beskrivning="1 dos nervgift, 1 dos blodgift och 3 doser bedövande gift."

	skugga.subval[1].push([]);
	skugga.subval[1][3][0] = {};
	skugga.subval[1][3][0].valdasub = [];
	skugga.subval[1][3][0].vald = 0;
	skugga.subval[1][3][0].ovanligtvapen=1;
	skugga.subval[1][3][0].rubrik="Ovanligt vapen"
	skugga.subval[1][3][0].beskrivning="Ett ovanligt vapen."

	skugga.subval[1].push([]);
	skugga.subval[1][4][0] = {};
	skugga.subval[1][4][0].valdasub = [];
	skugga.subval[1][4][0].vald = 0;
	skugga.subval[1][4][0].medelrustning=1;
	skugga.subval[1][4][0].rubrik="Rustning"
	skugga.subval[1][4][0].beskrivning="En helrustning i något av följande material: härdat läder \(Belastning 16, Pansar 5/6/5\), nitläder \(Belastning 16, Pansar 6/6/4\), ringläder \(Belastning 16, Pansar 7/5/4\), fjällpansar \(Belastning 24, Pansar 10/8/6\), lamellpansar \(Belastning 24, Pansar 10/6/8\) eller ringbrynja \(Belastning 24, Pansar 12/4/8\)."
	
	skugga.subval[1].push([]);
	skugga.subval[1][5][0] = {};
	skugga.subval[1][5][0].valdasub = [];
	skugga.subval[1][5][0].vald = 0;
	skugga.subval[1][5][0].rubrik="Specialistutrustning"
	skugga.subval[1][5][0].beskrivning="Rollpersonen har exceptionell utrustning. Välj en av följande färdigheter: Gömma, Klättra eller Låsdyrkning. Utrustningen ger en bonus på +1T6 för färdigheten.";
	skugga.subval[1][5][0].beskrivningvald="Rollpersonen har exceptionell utrustning. ";
	
	skugga.subval[1][5][0].antalsubval=1;
	skugga.subval[1][5][0].subvalrubrik="Utrustningen ger bonus till följande färdighet:"
	
	skugga.subval[1][5].push();
	skugga.subval[1][5][1] = {};
	skugga.subval[1][5][1].valdasub = [];
	skugga.subval[1][5][1].vald = 0;
	
	skugga.subval[1][5][1].resurs="Utrustning som ger bonus \+1T6 bonus på Gömma. ";
	skugga.subval[1][5][1].beskrivningvald="Utrustningen ger bonus \+1T6 bonus på Gömma. ";
	skugga.subval[1][5][1].rubrik="Gömma";
	
	skugga.subval[1][5].push();
	skugga.subval[1][5][2] = {};
	skugga.subval[1][5][2].valdasub = [];
	skugga.subval[1][5][2].vald = 0;
	
	skugga.subval[1][5][2].resurs="Utrustning som ger bonus \+1T6 bonus på Klättra. ";
	skugga.subval[1][5][2].beskrivningvald="Utrustningen ger bonus \+1T6 bonus på Klättra. ";
	skugga.subval[1][5][2].rubrik="Klättra";
	
	skugga.subval[1][5].push();
	skugga.subval[1][5][3] = {};
	skugga.subval[1][5][3].valdasub = [];
	skugga.subval[1][5][3].vald = 0;
	
	skugga.subval[1][5][3].resurs="Utrustning som ger bonus \+1T6 bonus på Låsdyrkning. ";
	skugga.subval[1][5][3].beskrivningvald="Utrustningen ger bonus \+1T6 bonus på Låsdyrkning. ";
	skugga.subval[1][5][3].rubrik="Låsdyrkning";
	
	skugga.subval[1].push([]);
	skugga.subval[1][6][0] = {};
	skugga.subval[1][6][0].valdasub = [];
	skugga.subval[1][6][0].vald = 0;
	skugga.subval[1][6][0].kontaktbas = "Tjänst att inkräva från kontakt1_obestamd.";
	skugga.subval[1][6][0].rubrik="Tjänst att inkräva";
	skugga.subval[1][6][0].beskrivning="Slå två gånger på bakgrundstabellen och välj en som visar vem rollpersonen kan kräva en tjänst av. Denna individ är skyldig rollpersonen en stor tjänst. Spelaren får själv välja när denne vill föra in personen i spel så länge som situationen inte är allt för orimlig."
	skugga.subval[1][6][0].beskrivningvaldbas="Rollpersonen kan kräva en tjänst av kontakt1_obestamd. Denna individ är skyldig rollpersonen en stor tjänst. Spelaren får själv välja när denne vill föra in kontakt1_bestamd i spel så länge som situationen inte är allt för orimlig."
	
	skugga.subval[1][6][0].kontaktenhetbool=[0];
	//skugga.subval[1][6][0].FLERASUBVAL
	
	skugga.subval[1].push([]);
	skugga.subval[1][7][0] = {};
	skugga.subval[1][7][0].valdasub = [];
	skugga.subval[1][7][0].vald = 0;
	skugga.subval[1][7][0].pengarslag="4T6x3"; // 4T6*10
	skugga.subval[1][7][0].rubrik="Pengar"
	skugga.subval[1][7][0].beskrivning="4T6×3 silver."
	skugga.subval[1][7][0].beskrivningvaldbas="pengar_resultat silver."
	
 
	var underhallare = {};
	underhallare.subval = [[[]]];
	underhallare.vald = 0;
   	arketypobjekt.underhallare=underhallare;
 	underhallare.rubrik = "Underhållare";
	underhallare.namn = "underhallare";
	
	underhallare.beskrivning="Underhållarna är de som manipulerar världen omkring sig med sin skönhet och karisma. De kan skapa begär, drömmar och trollbinda även de kallaste av hjärtan. Några använder sin talang för att sprida glädje och njutning, andra för att dupera sina offer och vinna makt."

	underhallare.subval[0][0][0] = {};
	underhallare.subval[0][0][0].valdasub = [];
	underhallare.subval[0][0][0].vald = 0;
	underhallare.subval[0][0][0].intrigerillgarningar = 1; 
	underhallare.subval[0][0][0].farderaventyr = 1;
	underhallare.subval[0][0][0].valfriatabellslag = 1;
	underhallare.subval[0][0][0].beskrivningtabeller = [["1 slag på Intriger \& illgärningar"],["1 slag på Färder \& äventyr"], ["1 slag på valfri tabell"]];
	underhallare.subval[0][0][0].rorelsefardigheterenheter = 4;
	underhallare.subval[0][0][0].socialafardigheterenheter = 8;
	underhallare.subval[0][0][0].valfriaenheter = 8;
	underhallare.subval[0][0][0].beskrivningenheter=[["4 enheter Rörelsefärdigheter"],["8 enheter Sociala färdigheter"],["8 valfria enheter"]];
	
	underhallare.subval[0].push([]);
	underhallare.subval[0][1][0] = {};
	underhallare.subval[0][1][0].valdasub = [];
	underhallare.subval[0][1][0].vald = 0;
	underhallare.subval[0][1][0].vanligtvapen = 1;
	underhallare.subval[0][1][0].beskrivning = "Ett vanligt vapen";
	underhallare.subval[0][1][0].rubrik="Beväpning"


	underhallare.subval[0].push([]);
	underhallare.subval[0][2][0] = {};
	underhallare.subval[0][2][0].valdasub = [];
	underhallare.subval[0][2][0].vald = 0;
	underhallare.subval[0][2][0].expertispoang = 1;
	underhallare.subval[0][2][0].beskrivning = "1 poäng expertiser";
	underhallare.subval[0][2][0].rubrik="Expertis"
    
	underhallare.subval[0].push([]);
	underhallare.subval[0][3][0] = {};
	underhallare.subval[0][3][0].valdasub = [];
	underhallare.subval[0][3][0].vald = 0;
	underhallare.subval[0][3][0].kanneteckenpoang = 2;
	underhallare.subval[0][3][0].beskrivning = "2 poäng Kännetecken";
	underhallare.subval[0][3][0].rubrik="Kännetecken"
	
	underhallare.subval.push([[]]);
	underhallare.subval[1][0][0]  = {};
	underhallare.subval[1][0][0].valdasub = [];
	underhallare.subval[1][0][0].vald = 0;
	underhallare.subval[1][0][0].antalsubval=2;
	underhallare.subval[1][0][0].valdasub=[];

	
	underhallare.subval[1].push([]);
	underhallare.subval[1][1][0] = {};
	underhallare.subval[1][1][0].valdasub = [];
	underhallare.subval[1][1][0].vald = 0;
	underhallare.subval[1][1][0].avtrubbningutsatthet=2;
	underhallare.subval[1][1][0].rubrik="Avtrubbning"
	underhallare.subval[1][1][0].beskrivning="2 Avtrubbningskryss för utsatthet."

	
	underhallare.subval[1].push([]);
	underhallare.subval[1][2][0] = {};
	underhallare.subval[1][2][0].valdasub = [];
	underhallare.subval[1][2][0].vald = 0;
	underhallare.subval[1][2][0].expertispoang=1;
	underhallare.subval[1][2][0].rubrik="Expertis"
	underhallare.subval[1][2][0].beskrivning="1 poäng expertiser."

	underhallare.subval[1].push([]);
	underhallare.subval[1][3][0] = {};
	underhallare.subval[1][3][0].valdasub = [];
	underhallare.subval[1][3][0].vald = 0;
	underhallare.subval[1][3][0].resurs="Vackert musikinstrument som ger \+1T6 på Sång \& musik";
	underhallare.subval[1][3][0].rubrik="Musikinstrument"
	underhallare.subval[1][3][0].beskrivning="Ett vackert och dekorerat musikinstrument som ger \+1T6 på Sång \& musik."

	underhallare.subval[1].push([]);
	underhallare.subval[1][4][0] = {};
	underhallare.subval[1][4][0].valdasub = [];
	underhallare.subval[1][4][0].vald = 0;
	underhallare.subval[1][4][0].resurs="Hygienutrustning som ger en bonus på \+1T6 för Charm när man försöker förföra någon.";
	underhallare.subval[1][4][0].rubrik="Hygienutrustning"
	underhallare.subval[1][4][0].beskrivning="Benkam, hårborste, rakkniv, bronsspegel, nål och tråd, ett flertal olika parfymer samt kosmetika som kan användas för att förhöja utseendet och ge en behaglig doft. Ger en bonus på \+1T6 för Charm när man försöker förföra någon."
	
	underhallare.subval[1].push([]);
	underhallare.subval[1][5][0] = {};
	underhallare.subval[1][5][0].valdasub = [];
	underhallare.subval[1][5][0].vald = 0;
	underhallare.subval[1][5][0].rubrik="Ovanligt vapen"
	underhallare.subval[1][5][0].beskrivning="Ett ovanligt vapen";
	underhallare.subval[1][5][0].ovanligtvapen=1;
	
	underhallare.subval[1].push([]);
	underhallare.subval[1][6][0] = {};
	underhallare.subval[1][6][0].valdasub = [];
	underhallare.subval[1][6][0].vald = 0;
	underhallare.subval[1][6][0].kontaktbas = "Tjänst att inkräva från kontakt1_obestamd.";
	underhallare.subval[1][6][0].rubrik="Tjänst att inkräva";
	underhallare.subval[1][6][0].beskrivning="Slå två gånger på bakgrundstabellen och välj en som visar vem rollpersonen kan kräva en tjänst av. Denna individ är skyldig rollpersonen en stor tjänst. Spelaren får själv välja när denne vill föra in personen i spel så länge som situationen inte är allt för orimlig."
	underhallare.subval[1][6][0].beskrivningvaldbas="Rollpersonen kan kräva en tjänst av kontakt1_obestamd. Denna individ är skyldig rollpersonen en stor tjänst. Spelaren får själv välja när denne vill föra in kontakt1_bestamd i spel så länge som situationen inte är allt för orimlig."
	
	underhallare.subval[1][6][0].kontaktenhetbool=[0];
	//underhallare.subval[1][6][0].FLERASUBVAL
	
	underhallare.subval[1].push([]);
	underhallare.subval[1][7][0] = {};
	underhallare.subval[1][7][0].valdasub = [];
	underhallare.subval[1][7][0].vald = 0;
	underhallare.subval[1][7][0].pengarslag="4T6x3"; // 4T6*10
	underhallare.subval[1][7][0].rubrik="Pengar"
	underhallare.subval[1][7][0].beskrivning="4T6×3 silver."
	underhallare.subval[1][7][0].beskrivningvaldbas="pengar_resultat silver."
	
	

	var arketypobjektlista=[];
	
	rpvalmatris=hamta_rpvalmatris();
	ovrigaprop=rpvalmatris[rpvalmatris.length-1];
	replaceprop=["beskrivningvald", "beskrivninghakvald"];
	
	for (s=0; s < replaceprop.length; s++){
		ovrigaprop.push(replaceprop[s]);
	}
	
    
    for (t = 0; t < arketyplista.length; t++){
    	
		for (i=0; i< arketypobjekt[arketyplista[t]].subval.length;i++){
			for (j=0; j< arketypobjekt[arketyplista[t]].subval[i].length;j++){
				for (k=0; k< arketypobjekt[arketyplista[t]].subval[i][j].length;k++){
				}
			}
		}
		
		arketypobjektlista.push(this[arketyplista[t]]);
		
		
    }
    
    arketypobjektlista[0]=donare;
    arketypobjektlista[1]=krigare;
    arketypobjektlista[2]=ledare;
    arketypobjektlista[3]=lard;
    arketypobjektlista[4]=mystiker;
    arketypobjektlista[5]=skugga;
    arketypobjektlista[6]=underhallare;
 	
    
    
	// förmodligen battre med lista av objekt, därav kommentering
	
    
	
    arketypobjekt.lista = arketyplista;
    for (t = 0; t < arketypobjekt.lista.length; t++){
    	
    //    arketypobjekt[arketyplista[i]] = this[arketyplista[i]];
		arketypobjekt[arketyplista[t]].aktiverad=0;
		
		// Sätter beskrivningvaldbas till beskrivning om den förra saknas
		for (i=0;i<arketypobjekt[arketyplista[t]].subval.length;i++){
			for (j=0;j<arketypobjekt[arketyplista[t]].subval[i].length;j++){
				for (k=0;k<arketypobjekt[arketyplista[t]].subval[i][j].length;k++){
					if ("beskrivningvaldbas" in arketypobjekt[arketyplista[t]].subval[i][j][k]){
					}else{
						if ("beskrivning" in arketypobjekt[arketyplista[t]].subval[i][j][k]){
							arketypobjekt[arketyplista[t]].subval[i][j][k].beskrivningvaldbas=arketypobjekt[arketyplista[t]].subval[i][j][k].beskrivning;
						}
						
					}
				}	
			}		
		}
    }
    
    
    
    
    
    //window.alert(arketypobjekt.lista[1])

    // return [arketyplista, arketypobjektlista];
    
    
    return arketypobjekt
    
}