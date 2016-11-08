function hamta_handelsetabellista(){
	handelsetabellista=["farderaventyr", "intrigerillgarningar", "kunskapmysterier", "striderdrabbningar"];
	return handelsetabellista
}

function hamta_handelsetabeller(){
	
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
	
	
	/*
	sök och ersätt med python
	
	resultaten ska ha 
	objektdefinition = {};
	subval = [[[]]];
	vald = 0; (eventuellt obsolet, men tar inte så mycket plats)
	
	subvalen ska ha
	objektdefinition = {};
	valdasub = [];
	vald = 0; (eventuellt obsolet, men tar inte så mycket plats)
	
	söka igenom hela och spara rad för rad i python
	
	om raden innehåller " = new rpval()"{
		om raden innehåller "subval"{ // subval
			pusha tre rader med bas allt innan " = new rpval()"; objektdef, valdasub, vald
		}annars{					// grundresultat
			pusha tre rader med bas allt innan " = new rpval()"; objektdef, subval, vald
		}
	}
	
	// Loopa baklänges för att radnumreringen inte ska ändras under tiden, pusha
	
	Gör om alla [0][1][1] och [0][1][2] till [0][1][1] och [0][1][2] 
	Kräver att subval[0].push([]) läggs till
	Detta för att förenkla subvalsummeringen
	
	*/
	
	
	fardighetslistaobjekt = hamta_fardighetslistaobjekt();
	fardighetslista=fardighetslistaobjekt.fardighetslista;
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	fardighetsobjekt=hamta_fardighetsobjekt();
	
	expertislista=fardighetslista[fardighetslista.length-3];
	
	handelsetabellista=hamta_handelsetabellista();
	//handelsetabellista=["farderaventyr", "intrigerillgarningar", "kunskapmysterier", "striderdrabbningar"];

	var handelsetabeller = {};
	
    handelsetabeller.lista=handelsetabellista;
	
	
	
	
	// --- //
	
    handelsetabeller.farderaventyr = [];
    
    handelsetabeller.farderaventyr[0] = {};
    handelsetabeller.farderaventyr[0].subval = [[[]]];
    handelsetabeller.farderaventyr[0].vald = 0;
    handelsetabeller.farderaventyr[0].rubrik="Färder \& äventyr";
    handelsetabeller.farderaventyr[0].namn="farderaventyr";
    
    handelsetabeller.farderaventyr[1] = {}; 
    handelsetabeller.farderaventyr[1].subval = [[[]]]; 
    handelsetabeller.farderaventyr[1].vald = 0; 
	handelsetabeller.farderaventyr[1].rubrik = "Allvarlig olycka"
	handelsetabeller.farderaventyr[1].beskrivning = "Rollpersonen har varit med om en allvarlig olycka och kroppen har blivit sargad och bär märken efter det som skett. Det kan röra sig om brutna ben, eldskador eller bettskador från ett vilt djur."
	handelsetabeller.farderaventyr[1].beskrivninghak = "Välj: –2 Styrka, Tålighet, Rörlighet eller Uppfattning. Välj: \+1T6 Vilja, Psyke, Visdom eller Utstrålning"
	handelsetabeller.farderaventyr[1].beskrivninghakvaldbas="";
	handelsetabeller.farderaventyr[1].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[1].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[1].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[1].subval[0][0][0].utseende="Sargad kropp efter allvarlig olycka"; 
	
	handelsetabeller.farderaventyr[1].subval.push([[]]);
	handelsetabeller.farderaventyr[1].subval[1][0][0] = {};
	handelsetabeller.farderaventyr[1].subval[1][0][0].antalsubval=1;
	handelsetabeller.farderaventyr[1].subval[1][0][0].valdasub=[];
	
	handelsetabeller.farderaventyr[1].subval[1].push([]);
	handelsetabeller.farderaventyr[1].subval[1][1][0] = {};
	handelsetabeller.farderaventyr[1].subval[1][1][0].valdasub = [];
	handelsetabeller.farderaventyr[1].subval[1][1][0].vald = 0;
	handelsetabeller.farderaventyr[1].subval[1][1][0].styrka = {};
	handelsetabeller.farderaventyr[1].subval[1][1][0].styrka.varde=-2;
	handelsetabeller.farderaventyr[1].subval[1][1][0].rubrik="Styrka -2";
	handelsetabeller.farderaventyr[1].subval[1][1][0].beskrivninghakvaldbas="-2 Styrka. ";
	
	
	handelsetabeller.farderaventyr[1].subval[1].push([]);
	handelsetabeller.farderaventyr[1].subval[1][2][0] = {};
	handelsetabeller.farderaventyr[1].subval[1][2][0].valdasub = [];
	handelsetabeller.farderaventyr[1].subval[1][2][0].vald = 0;
	handelsetabeller.farderaventyr[1].subval[1][2][0].talighet = {};
	handelsetabeller.farderaventyr[1].subval[1][2][0].talighet.varde=-2;
	handelsetabeller.farderaventyr[1].subval[1][2][0].rubrik="Tålighet -2";
	handelsetabeller.farderaventyr[1].subval[1][2][0].beskrivninghakvaldbas="-2 Tålighet. ";
	
	handelsetabeller.farderaventyr[1].subval[1].push([]);
	handelsetabeller.farderaventyr[1].subval[1][3][0] = {};
	handelsetabeller.farderaventyr[1].subval[1][3][0].valdasub = [];
	handelsetabeller.farderaventyr[1].subval[1][3][0].vald = 0;
	handelsetabeller.farderaventyr[1].subval[1][3][0].rorlighet = {};
	handelsetabeller.farderaventyr[1].subval[1][3][0].rorlighet.varde=-2;
	handelsetabeller.farderaventyr[1].subval[1][3][0].rubrik="Rörlighet -2";
	handelsetabeller.farderaventyr[1].subval[1][3][0].beskrivninghakvaldbas="-2 Rörlighet. ";
	
	handelsetabeller.farderaventyr[1].subval[1].push([]);
	handelsetabeller.farderaventyr[1].subval[1][4][0] = {};
	handelsetabeller.farderaventyr[1].subval[1][4][0].valdasub = [];
	handelsetabeller.farderaventyr[1].subval[1][4][0].vald = 0;
	handelsetabeller.farderaventyr[1].subval[1][4][0].uppfattning = {};
	handelsetabeller.farderaventyr[1].subval[1][4][0].uppfattning.varde=-2;
	handelsetabeller.farderaventyr[1].subval[1][4][0].rubrik="Uppfattning -2";
	handelsetabeller.farderaventyr[1].subval[1][4][0].beskrivninghakvaldbas="-2 Uppfattning. ";
	
	handelsetabeller.farderaventyr[1].subval.push([[]]);
	handelsetabeller.farderaventyr[1].subval[2][0][0] = {};
	handelsetabeller.farderaventyr[1].subval[2][0][0].antalsubval=1;
	handelsetabeller.farderaventyr[1].subval[2][0][0].valdasub=[];
	
	handelsetabeller.farderaventyr[1].subval[2].push([]);
	handelsetabeller.farderaventyr[1].subval[2][1][0] = {};
	handelsetabeller.farderaventyr[1].subval[2][1][0].valdasub = [];
	handelsetabeller.farderaventyr[1].subval[2][1][0].vald = 0;
	handelsetabeller.farderaventyr[1].subval[2][1][0].vilja = {};
	handelsetabeller.farderaventyr[1].subval[2][1][0].vilja.varde=4;
	handelsetabeller.farderaventyr[1].subval[2][1][0].rubrik="Vilja \+1T6";
	handelsetabeller.farderaventyr[1].subval[2][1][0].beskrivninghakvaldbas="\+1T6 Vilja.";
	
	handelsetabeller.farderaventyr[1].subval[2].push([]);
	handelsetabeller.farderaventyr[1].subval[2][2][0] = {};
	handelsetabeller.farderaventyr[1].subval[2][2][0].valdasub = [];
	handelsetabeller.farderaventyr[1].subval[2][2][0].vald = 0;
	handelsetabeller.farderaventyr[1].subval[2][2][0].psyke = {};
	handelsetabeller.farderaventyr[1].subval[2][2][0].psyke.varde=4;
	handelsetabeller.farderaventyr[1].subval[2][2][0].rubrik="Psyke \+1T6";
	handelsetabeller.farderaventyr[1].subval[2][2][0].beskrivninghakvaldbas="\+1T6 Psyke.";
	
	handelsetabeller.farderaventyr[1].subval[2].push([]);
	handelsetabeller.farderaventyr[1].subval[2][3][0] = {};
	handelsetabeller.farderaventyr[1].subval[2][3][0].valdasub = [];
	handelsetabeller.farderaventyr[1].subval[2][3][0].vald = 0;
	handelsetabeller.farderaventyr[1].subval[2][3][0].visdom = {};
	handelsetabeller.farderaventyr[1].subval[2][3][0].visdom.varde=4;
	handelsetabeller.farderaventyr[1].subval[2][3][0].rubrik="Visdom \+1T6";
	handelsetabeller.farderaventyr[1].subval[2][3][0].beskrivninghakvaldbas="\+1T6 Visdom.";
	
	
	handelsetabeller.farderaventyr[1].subval[2].push([]);
	handelsetabeller.farderaventyr[1].subval[2][4][0] = {};
	handelsetabeller.farderaventyr[1].subval[2][4][0].valdasub = [];
	handelsetabeller.farderaventyr[1].subval[2][4][0].vald = 0;
	handelsetabeller.farderaventyr[1].subval[2][4][0].utstralning = {};
	handelsetabeller.farderaventyr[1].subval[2][4][0].utstralning.varde=4;
	handelsetabeller.farderaventyr[1].subval[2][1][0].rubrik="Utstrålning \+1T6";
	handelsetabeller.farderaventyr[1].subval[2][1][0].beskrivninghakvaldbas="\+1T6. Utstrålning ";
	
	handelsetabeller.farderaventyr[2] = {}; 
	handelsetabeller.farderaventyr[2].subval = [[[]]]; 
	handelsetabeller.farderaventyr[2].vald = 0; 
	handelsetabeller.farderaventyr[2].rubrik = "Andningsteknik"
	handelsetabeller.farderaventyr[2].beskrivning = "Rollpersonen har lärt sig olika tekniker för att kontrollera andningen och kan till och med spela död under en kortare tid."
	handelsetabeller.farderaventyr[2].beskrivninghak = "Expertisen Spela död 4T6. Ignorerar efterverkningen Omtöcknad och får en bonus på \+3T6 när det gäller att hålla andan eller uthärda syrebrist, exempelvis vid dykning eller strypning"
	handelsetabeller.farderaventyr[2].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[2].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[2].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[2].subval[0][0][0].speladod = {};
	handelsetabeller.farderaventyr[2].subval[0][0][0].speladod.enheter=3; 
	handelsetabeller.farderaventyr[2].subval[0][0][0].formaga="Ignorerar efterverkningen Omtöcknad" + "\n" + "Bonus på \+3T6 för att motstå syrebrist"; 
	
	//handelsetabeller.farderaventyr[2].subval[0].push([]);
	//handelsetabeller.farderaventyr[2].subval[0][1][0] = {}; 
	//handelsetabeller.farderaventyr[2].subval[0][1][0].valdasub = []; 
	//handelsetabeller.farderaventyr[2].subval[0][1][0].vald = 0; 
	//handelsetabeller.farderaventyr[2].subval[0][1][0].formaga="Bonus på \+3T6 för att motstå syrebrist"; 

	
	handelsetabeller.farderaventyr[3] = {}; 
	handelsetabeller.farderaventyr[3].subval = [[[]]]; 
	handelsetabeller.farderaventyr[3].vald = 0; 
	handelsetabeller.farderaventyr[3].rubrik = "Ansamlad kunskap"
	handelsetabeller.farderaventyr[3].beskrivning = "Personen har lärt sig en hel del under sina resor."
	handelsetabeller.farderaventyr[3].beskrivninghak = "2 poäng Expertiser"
	handelsetabeller.farderaventyr[3].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[3].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[3].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[3].subval[0][0][0].expertispoang=2; 

	handelsetabeller.farderaventyr[4] = {}; 
	handelsetabeller.farderaventyr[4].subval = [[[]]]; 
	handelsetabeller.farderaventyr[4].vald = 0; 
	handelsetabeller.farderaventyr[4].rubrik = "Bakhåll"
	handelsetabeller.farderaventyr[4].beskrivning = "Rollpersonen har kunskapen om hur man förbereder ett bakhåll men även hur man undviker ett."
	handelsetabeller.farderaventyr[4].beskrivninghak = "\+1 Uppfattning. Lättlärd i Gömma, Krigföring och Spåra"
	handelsetabeller.farderaventyr[4].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[4].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[4].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[4].subval[0][0][0].uppfattning = {};
	handelsetabeller.farderaventyr[4].subval[0][0][0].uppfattning.varde=1 ; 
	handelsetabeller.farderaventyr[4].subval[0][0][0].gomma = {};
	handelsetabeller.farderaventyr[4].subval[0][0][0].gomma.lattlard=1 ;
	handelsetabeller.farderaventyr[4].subval[0][0][0].krigforing = {};
	handelsetabeller.farderaventyr[4].subval[0][0][0].krigforing.lattlard=1 ;
	handelsetabeller.farderaventyr[4].subval[0][0][0].spara = {};
	handelsetabeller.farderaventyr[4].subval[0][0][0].spara.lattlard=1 ;
	
	handelsetabeller.farderaventyr[5] = {}; 
	handelsetabeller.farderaventyr[5].subval = [[[]]]; 
	handelsetabeller.farderaventyr[5].vald = 0; 
	handelsetabeller.farderaventyr[5].rubrik = "Balansens mästare"
	handelsetabeller.farderaventyr[5].beskrivning = "Rollpersonen har mycket god balans och kan gå på slak lina, klättra efter smala fasader och har en förmåga att alltid landa på fötter."
	handelsetabeller.farderaventyr[5].beskrivninghak = "\+2 Rörlighet, \+1 Uppfattning. Kännetecknet Balanssinne 4T6. Ignorerar efterverkningen Faller då denne genast kommer upp på fötter igen."
	handelsetabeller.farderaventyr[5].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[5].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[5].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[5].subval[0][0][0].rorlighet = {};
	handelsetabeller.farderaventyr[5].subval[0][0][0].rorlighet.varde=2 ; 
	handelsetabeller.farderaventyr[5].subval[0][0][0].uppfattning = {};
	handelsetabeller.farderaventyr[5].subval[0][0][0].uppfattning.varde=1 ;
	handelsetabeller.farderaventyr[5].subval[0][0][0].balanssinne = {};
	handelsetabeller.farderaventyr[5].subval[0][0][0].balanssinne.enheter=3 ;
	handelsetabeller.farderaventyr[5].subval[0][0][0].formaga="Ignorerar efterverkningen Faller";
	
	
	
	
	handelsetabeller.farderaventyr[6] = {}; 
	handelsetabeller.farderaventyr[6].subval = [[[]]]; 
	handelsetabeller.farderaventyr[6].vald = 0; 
	handelsetabeller.farderaventyr[6].rubrik = "Barn"
	handelsetabeller.farderaventyr[6].beskrivning = "Personen är förälder. Kanske bor denne fortfarande med sin partner och barnet eller så är barnet hemma medan personen är på sina färder."
	handelsetabeller.farderaventyr[6].beskrivningvaldbas="";
	handelsetabeller.farderaventyr[6].beskrivninghak = "\+2 Vilja. Slå två gånger på bakgrundstabellen och välj en som visar vem personen fick barnet med. Bestäm dessutom en lämplig ålder på barnet"
	handelsetabeller.farderaventyr[6].beskrivninghakvaldbas = "\+2 Vilja.";
	handelsetabeller.farderaventyr[6].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[6].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[6].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[6].subval[0][0][0].vilja = {};
	handelsetabeller.farderaventyr[6].subval[0][0][0].vilja.varde=2;
	
	handelsetabeller.farderaventyr[6].subval.push([[]]);
	handelsetabeller.farderaventyr[6].subval[1][0][0] ={};
	handelsetabeller.farderaventyr[6].subval[1][0][0].antalsubval=1;
	handelsetabeller.farderaventyr[6].subval[1][0][0].valdasub=[];
	
	handelsetabeller.farderaventyr[6].subval[1].push([]);
	handelsetabeller.farderaventyr[6].subval[1][1][0] = {}; 
	handelsetabeller.farderaventyr[6].subval[1][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[6].subval[1][1][0].vald = 0; 
	handelsetabeller.farderaventyr[6].subval[1][1][0].kontaktenhetbool=[0] ; 
	handelsetabeller.farderaventyr[6].subval[1][1][0].ovrigtbas="Har ett barn tillsammans med kontakt1_obestamd."
	handelsetabeller.farderaventyr[6].subval[1][1][0].beskrivningvaldbas="Har ett barn tillsammans med kontakt1_obestamd. Om de bor tillsammans eller ej avgörs av spelaren."
	
	
	handelsetabeller.farderaventyr[7] = {}; 
	handelsetabeller.farderaventyr[7].subval = [[[]]]; 
	handelsetabeller.farderaventyr[7].vald = 0; 
	handelsetabeller.farderaventyr[7].rubrik = "Begravning"
	handelsetabeller.farderaventyr[7].beskrivning = "Rollpersonen har varit med och begravt en av sina närmaste vänner. Detta var en gripande händelse som satt sina spår."
	handelsetabeller.farderaventyr[7].beskrivninghak = "Expertisen Begravningsriter 4T6. 4 valfria enheter som denne lärt sig av den döde vännen"
	handelsetabeller.farderaventyr[7].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[7].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[7].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[7].subval[0][0][0].begravningsriter = {};
	handelsetabeller.farderaventyr[7].subval[0][0][0].begravningsriter.enheter=3; 
	handelsetabeller.farderaventyr[7].subval[0][0][0].valfriaenheter=4;
	handelsetabeller.farderaventyr[7].subval[0][0][0].ovrigt="Har begravt en av sina närmaste vänner."
	
	handelsetabeller.farderaventyr[8] = {}; 
	handelsetabeller.farderaventyr[8].subval = [[[]]]; 
	handelsetabeller.farderaventyr[8].vald = 0; 
	handelsetabeller.farderaventyr[8].rubrik = "Bevittnat massaker"
	handelsetabeller.farderaventyr[8].beskrivning = "Rollpersonen har bevittnat en blodig massaker där en mängd personer blivit dräpta. Detta kan vara inkvisitionen som gått fram och straffat kättare, stråtrövare som plundrat en by eller ett regelrätt slag. Detta har satt sina spår i personen och denne har blivit något mer kylig och innesluten."
	handelsetabeller.farderaventyr[8].beskrivninghak = "2 Avtrubbningskryss för våld"
	handelsetabeller.farderaventyr[8].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[8].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[8].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[8].subval[0][0][0].avtrubbningvald=2 ; 
	handelsetabeller.farderaventyr[8].subval[0][0][0].ovrigt="Har bevittnat en blodig massaker."
	
	handelsetabeller.farderaventyr[9] = {}; 
	handelsetabeller.farderaventyr[9].subval = [[[]]]; 
	handelsetabeller.farderaventyr[9].vald = 0; 
	handelsetabeller.farderaventyr[9].rubrik = "Bosättning i vildmarken"
	handelsetabeller.farderaventyr[9].beskrivning = "Rollpersonen känner till en mindre bosättning som ligger långt ifrån civilisationen och har spenderat en kortare tid där."
	handelsetabeller.farderaventyr[9].beskrivninghak = "Lättlärd i Jakt \& fiske. 2 enheter Sociala färdigheter, 2 enheter Vildmarksfärdigheter. Rollpersonen kan introducera bosättningen under en vildmarksfärd om de behöver tid att återhämta sig, införskaffa proviant och kanske läka skador"
	handelsetabeller.farderaventyr[9].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[9].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[9].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[9].subval[0][0][0].jaktfiske = {};
	handelsetabeller.farderaventyr[9].subval[0][0][0].jaktfiske.lattlard=1;
	handelsetabeller.farderaventyr[9].subval[0][0][0].socialafardigheterenheter=2;
	handelsetabeller.farderaventyr[9].subval[0][0][0].vildmarksfardigheterenheter=2;
	handelsetabeller.farderaventyr[9].subval[0][0][0].resurser="Bosättning långt ifrån civilisationen" ; 

	handelsetabeller.farderaventyr[10] = {}; 
	handelsetabeller.farderaventyr[10].subval = [[[]]]; 
	handelsetabeller.farderaventyr[10].vald = 0; 
	handelsetabeller.farderaventyr[10].rubrik = "Bragd"
	handelsetabeller.farderaventyr[10].beskrivning = "Rollpersonen har utfört en bragd som är vida känd. Folk känner igen rollpersonen och många talar gott om denne. Vad som hände och om det över huvud taget ligger någon sanning i det hela är upp till spelaren."
	handelsetabeller.farderaventyr[10].beskrivninghak = "2 valfria enheter. 1 poäng Expertiser kopplat till bragden"
	handelsetabeller.farderaventyr[10].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[10].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[10].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[10].subval[0][0][0].valfriaenheter=2; 
	handelsetabeller.farderaventyr[10].subval[0][0][0].expertispoang=1;
	handelsetabeller.farderaventyr[10].subval[0][0][0].ovrigt="Har utför en bragd."
	
	handelsetabeller.farderaventyr[11] = {}; 
	handelsetabeller.farderaventyr[11].subval = [[[]]]; 
	handelsetabeller.farderaventyr[11].vald = 0; 
	handelsetabeller.farderaventyr[11].rubrik = "Drabbad av pest"
	handelsetabeller.farderaventyr[11].beskrivning = "Rollpersonen har drabbats av pest men är otroligt nog friskare nu."
	handelsetabeller.farderaventyr[11].beskrivninghak = "\+1 Tålighet. Kännetecknet Sjukligt utseende 4T6"
	handelsetabeller.farderaventyr[11].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[11].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[11].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[11].subval[0][0][0].talighet = {};
	handelsetabeller.farderaventyr[11].subval[0][0][0].talighet.varde=1; 
	handelsetabeller.farderaventyr[11].subval[0][0][0].sjukligtutseende = {};
	handelsetabeller.farderaventyr[11].subval[0][0][0].sjukligtutseende.enheter=3;
	handelsetabeller.farderaventyr[11].subval[0][0][0].ovrigt="Har drabbats av pest.";
	
	handelsetabeller.farderaventyr[12] = {}; 
	handelsetabeller.farderaventyr[12].subval = [[[]]]; 
	handelsetabeller.farderaventyr[12].vald = 0; 
	handelsetabeller.farderaventyr[12].rubrik = "Dresserat djur"
	handelsetabeller.farderaventyr[12].beskrivning = "Rollpersonen har ett dresserat djur i sin ägo. Detta kan vara något alldagligt som en korp eller hund eller något mer exotiskt såsom en blodflygare, varg eller frostuggla. Djuret är mycket tillgivet rollpersonen och kan förstå enklare kommandon."
	handelsetabeller.farderaventyr[12].beskrivninghak = "\+2 Vilja. Expertisen Djurträning 4T6. 4 enheter Vildmarksfärdigheter"
	handelsetabeller.farderaventyr[12].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[12].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[12].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[12].subval[0][0][0].vilja = {};
	handelsetabeller.farderaventyr[12].subval[0][0][0].vilja.varde=2 ; 
	handelsetabeller.farderaventyr[12].subval[0][0][0].djurtraning = {};
	handelsetabeller.farderaventyr[12].subval[0][0][0].djurtraning.enheter=3 ; 
	handelsetabeller.farderaventyr[12].subval[0][0][0].vildmarksfardigheterenheter=4 ; 
	handelsetabeller.farderaventyr[12].subval[0][0][0].resurser="Äger ett dresserat djur" ; 
	
	handelsetabeller.farderaventyr[13] = {}; 
	handelsetabeller.farderaventyr[13].subval = [[[]]]; 
	handelsetabeller.farderaventyr[13].vald = 0; 
	handelsetabeller.farderaventyr[13].rubrik = "Dryckesvisor"
	handelsetabeller.farderaventyr[13].beskrivning = "Personen har lärt sig ett flertal dryckesvisor efter kvällarna runt lägerelden samt hur man stjälper i sig stora mängder vin och mjöd och fortfarande står på benen."
	handelsetabeller.farderaventyr[13].beskrivninghak = "Lättlärd i Sång \& musik. Expertisen Supa 4T6"
	handelsetabeller.farderaventyr[13].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[13].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[13].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[13].subval[0][0][0].sangmusik = {};
	handelsetabeller.farderaventyr[13].subval[0][0][0].sangmusik.lattlard=1; 
	handelsetabeller.farderaventyr[13].subval[0][0][0].supa = {};
	handelsetabeller.farderaventyr[13].subval[0][0][0].supa.enheter = 3; 

	handelsetabeller.farderaventyr[14] = {}; 
	handelsetabeller.farderaventyr[14].subval = [[[]]]; 
	handelsetabeller.farderaventyr[14].vald = 0; 
	handelsetabeller.farderaventyr[14].rubrik = "Dräpt ett monster"
	handelsetabeller.farderaventyr[14].beskrivning = "Rollpersonen har dräpt ett monster genom list, utan att behöva dra vapen."
	handelsetabeller.farderaventyr[14].beskrivninghak = "3 enheter Rörelsefärdigheter, 3 enheter Vildmarksfärdigheter"
	handelsetabeller.farderaventyr[14].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[14].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[14].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[14].subval[0][0][0].rorelsefardigheterenheter = 3; 
	handelsetabeller.farderaventyr[14].subval[0][0][0].vildmarksfardigheterenheter = 3; 
	handelsetabeller.farderaventyr[14].subval[0][0][0].ovrigt= "Har dräpt ett monster genom list."
	
	handelsetabeller.farderaventyr[15] = {}; 
	handelsetabeller.farderaventyr[15].subval = [[[]]]; 
	handelsetabeller.farderaventyr[15].vald = 0; 
	handelsetabeller.farderaventyr[15].rubrik = "En oväntad resa"
	handelsetabeller.farderaventyr[15].beskrivning = "Rollpersonen har deltagit i en expedition för att undersöka en historisk plats."
	handelsetabeller.farderaventyr[15].beskrivninghak = "4 enheter Vildmarksfärdigheter. Lättlärd i Historia"
	handelsetabeller.farderaventyr[15].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[15].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[15].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[15].subval[0][0][0].vildmarksfardigheterenheter = 4; 
	handelsetabeller.farderaventyr[15].subval[0][0][0].historia = {};
	handelsetabeller.farderaventyr[15].subval[0][0][0].historia.lattlard=1;
	handelsetabeller.farderaventyr[15].subval[0][0][0].ovrigt="Har deltagit i en expedition för att undersöka en historisk plats.";

	handelsetabeller.farderaventyr[16] = {}; 
	handelsetabeller.farderaventyr[16].subval = [[[]]]; 
	handelsetabeller.farderaventyr[16].vald = 0; 
	handelsetabeller.farderaventyr[16].rubrik = "Ett med naturen"
	handelsetabeller.farderaventyr[16].beskrivning = "Rollpersonen är ett med naturen och litar många gånger till sin intuition på sina färder i vildmarken. Förutom att rollpersonen sällan går vilse eller drabbas av missöden har denne även ett skarpt sinne och är mycket kvick."
	handelsetabeller.farderaventyr[16].beskrivninghak = "\+2 Psyke. 2 enheter Vildmarksfärdigheter"
	handelsetabeller.farderaventyr[16].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[16].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[16].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[16].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.farderaventyr[16].subval[0][0][0].psyke = {};
	handelsetabeller.farderaventyr[16].subval[0][0][0].psyke.varde =2; 

	handelsetabeller.farderaventyr[17] = {}; 
	handelsetabeller.farderaventyr[17].subval = [[[]]]; 
	handelsetabeller.farderaventyr[17].vald = 0; 
	handelsetabeller.farderaventyr[17].rubrik = "Exceptionellt föremål"
	handelsetabeller.farderaventyr[17].beskrivning = "Personen har kommit över ett exceptionellt föremål av något slag. Det kan vara i stort sett vad som helst, ett musikinstrument, dyrkar, kirurgiska instrument, ett rep eller liknande, dock inte ett vapen."
	handelsetabeller.farderaventyr[17].beskrivninghak = "Välj en passande färdighet som varken är Undvika, en Stridsfärdighet eller Mystikfärdighet. Till denna färdighet ger föremålet \+1T6 i bonus när man använder det till vad det är menat för"
	handelsetabeller.farderaventyr[17].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[17].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[17].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[17].subval[0][0][0].resurs="Ett föremål som ger \+1T6 till en specifik färdighet, dock ej Undvika eller någon Stridsfärdighet alternativt Mystikfärdighet"; 

	handelsetabeller.farderaventyr[18] = {}; 
	handelsetabeller.farderaventyr[18].subval = [[[]]]; 
	handelsetabeller.farderaventyr[18].vald = 0; 
	handelsetabeller.farderaventyr[18].rubrik = "Exceptionell vildmarksutrustning"
	handelsetabeller.farderaventyr[18].beskrivning = "Rollpersonen har kommit över exceptionell vildmarksutrustning. Den innehåller allt som behövs för att överleva längre tider i vildmarken, exempelvis ett tält för två personer, kokkärl och kedja, en stor vattensäck, ett par lyktor, en kortbåge och en jaktkniv."
	handelsetabeller.farderaventyr[18].beskrivninghak = "3 enheter Vildmarksfärdigheter. Utrustningen ger bonus \+1T6 på slag med Vildmarksvana"
	handelsetabeller.farderaventyr[18].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[18].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[18].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[18].subval[0][0][0].vildmarksfardigheterenheter = 3; 
	handelsetabeller.farderaventyr[18].subval[0][0][0].resurs="Exceptionell vildmarksutrustning som ger \+1T6 på slag med Vildmarksvana.";
	
	handelsetabeller.farderaventyr[19] = {}; 
	handelsetabeller.farderaventyr[19].subval = [[[]]]; 
	handelsetabeller.farderaventyr[19].vald = 0; 
	handelsetabeller.farderaventyr[19].rubrik = "Fel tid på fel plats"
	handelsetabeller.farderaventyr[19].beskrivning = "Rollpersonen har varit vid fel tid och på fel plats. Välj ett av följande alternativ: Pryglad, Tid som straffånge, eller Skeppsbrott."
	handelsetabeller.farderaventyr[19].beskrivningvaldbas="";
	handelsetabeller.farderaventyr[19].beskrivninghak = "Pryglad: \+2 Tålighet. 1 Avtrubbningskryss för utsatthet. Tid som straffånge:  Lättlärd i Skumraskaffärer. 2 enheter Stridsfärdigheter. Skeppsbrott: 4 enheter Vildmarksfärdigheter."
	handelsetabeller.farderaventyr[19].beskrivninghakvaldbas="";
	
	handelsetabeller.farderaventyr[19].subval[0][0][0] = {}; 	
	handelsetabeller.farderaventyr[19].subval[0][0][0].valdasub = []; 	
	handelsetabeller.farderaventyr[19].subval[0][0][0].vald = 0; 	
	
	handelsetabeller.farderaventyr[19].subval[0].push([]); 	
	handelsetabeller.farderaventyr[19].subval[0][1][0] = {}; 	
	handelsetabeller.farderaventyr[19].subval[0][1][0].valdasub = []; 	
	handelsetabeller.farderaventyr[19].subval[0][1][0].vald = 0; 	
	
	handelsetabeller.farderaventyr[19].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.farderaventyr[19].subval[0][1][1] = {}; 
	handelsetabeller.farderaventyr[19].subval[0][1][1].valdasub = []; 
	handelsetabeller.farderaventyr[19].subval[0][1][1].vald = 0; 
	handelsetabeller.farderaventyr[19].subval[0][1][1].talighet = {};
	handelsetabeller.farderaventyr[19].subval[0][1][1].talighet.varde =2; 
	handelsetabeller.farderaventyr[19].subval[0][1][1].avtrubbningutsatthet = 1; 
	handelsetabeller.farderaventyr[19].subval[0][1][1].rubrik="Pryglad" 
	handelsetabeller.farderaventyr[19].subval[0][1][1].ovrigt="Har blivit pryglad." 
	handelsetabeller.farderaventyr[19].subval[0][1][1].beskrivningvaldbas="Personen har blivit pryglad." 
	handelsetabeller.farderaventyr[19].subval[0][1][1].beskrivninghakvaldbas="+2 Tålighet. 1 Avtrubbningskryss för utsatthet." 
	
	
	handelsetabeller.farderaventyr[19].subval[0][1][2] = {}; 
	handelsetabeller.farderaventyr[19].subval[0][1][2].valdasub = []; 
	handelsetabeller.farderaventyr[19].subval[0][1][2].vald = 0; 
	handelsetabeller.farderaventyr[19].subval[0][1][2].skumraskaffarer = {};
	handelsetabeller.farderaventyr[19].subval[0][1][2].skumraskaffarer.lattlard=1; 
	handelsetabeller.farderaventyr[19].subval[0][1][2].stridsfardigheterenheter = 2; 
	handelsetabeller.farderaventyr[19].subval[0][1][2].rubrik="Tid som straffånge" 
	handelsetabeller.farderaventyr[19].subval[0][1][2].ovrigt="Har varit straffånge." 
	handelsetabeller.farderaventyr[19].subval[0][1][2].beskrivningvaldbas="Personen har varit straffånge." 
	handelsetabeller.farderaventyr[19].subval[0][1][2].beskrivninghakvaldbas="Lättlärd i Skumraskaffärer. 2 enheter Stridsfärdigheter." 
	
	handelsetabeller.farderaventyr[19].subval[0][1][3] = {}; 
	handelsetabeller.farderaventyr[19].subval[0][1][3].valdasub = []; 
	handelsetabeller.farderaventyr[19].subval[0][1][3].vald = 0; 
	handelsetabeller.farderaventyr[19].subval[0][1][3].vildmarksfardigheterenheter = 4; 
	handelsetabeller.farderaventyr[19].subval[0][1][3].rubrik="Skeppsbrott" 
	handelsetabeller.farderaventyr[19].subval[0][1][3].ovrigt="Har varit med om ett skeppsbrott." 
	handelsetabeller.farderaventyr[19].subval[0][1][3].beskrivningvaldbas="Personen har varit med om ett skeppsbrott." 
	handelsetabeller.farderaventyr[19].subval[0][1][3].beskrivninghakvaldbas="4 enheter Vildmarksfärdigheter" 
	
	handelsetabeller.farderaventyr[20] = {}; 
	handelsetabeller.farderaventyr[20].subval = [[[]]]; 
	handelsetabeller.farderaventyr[20].vald = 0; 
	handelsetabeller.farderaventyr[20].rubrik = "Kvicktänkt"
	handelsetabeller.farderaventyr[20].beskrivning = "Rollpersonen är mycket kvicktänkt och kan allt som oftast komma på en bra lösning på brådskande problem."
	handelsetabeller.farderaventyr[20].beskrivninghak = "\+2 Psyke. Expertisen Flyktvägar 4T6"
	handelsetabeller.farderaventyr[20].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[20].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[20].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[20].subval[0][0][0].psyke = {};
	handelsetabeller.farderaventyr[20].subval[0][0][0].psyke.varde =2; 
	handelsetabeller.farderaventyr[20].subval[0][0][0].flyktvagar = {};
	handelsetabeller.farderaventyr[20].subval[0][0][0].flyktvagar.enheter = 3; 

	handelsetabeller.farderaventyr[21] = {}; 
	handelsetabeller.farderaventyr[21].subval = [[[]]]; 
	handelsetabeller.farderaventyr[21].vald = 0; 
	handelsetabeller.farderaventyr[21].rubrik = "Flytt från monster"
	handelsetabeller.farderaventyr[21].beskrivning = "Rollpersonen har flytt från ett monster som visade sig vara mycket farligare än vad rollpersonen först hade trott."
	handelsetabeller.farderaventyr[21].beskrivninghak = "Expertisen Monsterkunskap 4T6. 3 enheter Rörelsefärdigheter"
	handelsetabeller.farderaventyr[21].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[21].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[21].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[21].subval[0][0][0].rorelsefardigheterenheter = 3; 
	handelsetabeller.farderaventyr[21].subval[0][0][0].monsterkunskap = {};
	handelsetabeller.farderaventyr[21].subval[0][0][0].monsterkunskap.enheter = 3; 
	handelsetabeller.farderaventyr[21].subval[0][0][0].ovrigt="Har flytt från ett monster.";

	handelsetabeller.farderaventyr[22] = {}; 
	handelsetabeller.farderaventyr[22].subval = [[[]]]; 
	handelsetabeller.farderaventyr[22].vald = 0; 
	handelsetabeller.farderaventyr[22].rubrik = "Främling i fara"
	handelsetabeller.farderaventyr[22].beskrivning = "Rollpersonen har kommit i en situation där en främling varit i stor fara. Det kan ha varit en person som fastnat i ett brinnande hus, någon som håller på att drunkna eller blir misshandlad av en uppretad folkmassa. Att försöka rädda främlingen innebar stor fara och spelaren får välja om denne undsatt främlingen eller ej."
	handelsetabeller.farderaventyr[22].beskrivningvaldbas="";
	handelsetabeller.farderaventyr[22].beskrivninghak = "Undsatt främlingen: –1 Rörlighet på grund av en skada som rollpersonen ådrog sig. Slå två gånger på bakgrundstabellen och välj en som visar vem främlingen är. Rollpersonen får välja en av de två enhetsgrupperna, detta är sådant som rollpersonen lärt sig av främlingen. Lämnat främlingen: 1 poäng Expertiser då rollpersonen spenderat tiden med andra saker"
	handelsetabeller.farderaventyr[22].beskrivninghakvaldbas="";
	handelsetabeller.farderaventyr[22].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[22].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[22].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[22].subval.push([[]]);
	
	handelsetabeller.farderaventyr[22].subval[1][0][0] = {}; 
	handelsetabeller.farderaventyr[22].subval[1][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[22].subval[1][0][0].vald = 0; 
	handelsetabeller.farderaventyr[22].subval[1][0][0].antalsubval = 1; 
	
	handelsetabeller.farderaventyr[22].subval[1].push([]);
	handelsetabeller.farderaventyr[22].subval[1][1][0] = {}; 
	handelsetabeller.farderaventyr[22].subval[1][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[22].subval[1][1][0].vald = 0; 
	handelsetabeller.farderaventyr[22].subval[1][1][0].antalsubval = 1; 
	
	handelsetabeller.farderaventyr[22].subval[1][1][0].rubrik="Undsatt främlingen"
	handelsetabeller.farderaventyr[22].subval[1][1][0].rorlighet = {};
	handelsetabeller.farderaventyr[22].subval[1][1][0].rorlighet.varde=-1;
	handelsetabeller.farderaventyr[22].subval[1][1][0].kontaktenhetbool=[1];
	handelsetabeller.farderaventyr[22].subval[1][1][0].kontaktbas="Har undsatt en kontakt1_obestamd i stor fara.";
	handelsetabeller.farderaventyr[22].subval[1][1][0].subvalrubrikbas="Välj vad rollpersonen lärt sig av kontakt1_bestamd:";
	handelsetabeller.farderaventyr[22].subval[1][1][0].beskrivningvaldbas="Rollpersonen undsatt kontakt1_obestamd som befunnit sig i stor fara. Det kan ha varit så att denne fastnat i ett brinnande hus, höll på att drunkna eller blev misshandlad av en uppretad folkmassa.";
	handelsetabeller.farderaventyr[22].subval[1][1][0].beskrivninghakvaldbas="–1 Rörlighet på grund av en skada som rollpersonen ådrog sig. ";
	
	handelsetabeller.farderaventyr[22].subval[1][1][1] = {};  // Fylls med färdighetsgruppval
	handelsetabeller.farderaventyr[22].subval[1][1][1].valdasub = [];  // Fylls med färdighetsgruppval
	handelsetabeller.farderaventyr[22].subval[1][1][1].vald = 0;  // Fylls med färdighetsgruppval
	handelsetabeller.farderaventyr[22].subval[1][1][2] = {}; 	// Fylls med färdighetsgruppval
	handelsetabeller.farderaventyr[22].subval[1][1][2].valdasub = []; 	// Fylls med färdighetsgruppval
	handelsetabeller.farderaventyr[22].subval[1][1][2].vald = 0; 	// Fylls med färdighetsgruppval
	
	handelsetabeller.farderaventyr[22].subval[1].push([])
	handelsetabeller.farderaventyr[22].subval[1][2][0] = {}; 
	handelsetabeller.farderaventyr[22].subval[1][2][0].valdasub = []; 
	handelsetabeller.farderaventyr[22].subval[1][2][0].vald = 0; 
	handelsetabeller.farderaventyr[22].subval[1][2][0].rubrik="Lämnat främlingen"
	handelsetabeller.farderaventyr[22].subval[1][2][0].ovrigt="Har lämnat en främling som befunnit sig i stor fara."
	handelsetabeller.farderaventyr[22].subval[1][2][0].expertispoang=1;
	handelsetabeller.farderaventyr[22].subval[1][2][0].beskrivningvaldbas="Rollpersonen har lämnat en främling som befunnit sig i stor fara. Det kan ha varit så att denne fastnat i ett brinnande hus, höll på att drunkna eller blev misshandlad av en uppretad folkmassa.";
	handelsetabeller.farderaventyr[22].subval[1][2][0].beskrivninghakvaldbas="1 poäng Expertiser då rollpersonen spenderat tiden med andra saker;";

	handelsetabeller.farderaventyr[23] = {}; 
	handelsetabeller.farderaventyr[23].subval = [[[]]]; 
	handelsetabeller.farderaventyr[23].vald = 0; 
	handelsetabeller.farderaventyr[23].rubrik = "Fångad av vildar"
	handelsetabeller.farderaventyr[23].beskrivning = "Personen har under en av sina resor blivit infångad av primitiva vildar. Detta kan vara allt från inavlade bönder, en kamoriansk stam eller liknande."
	handelsetabeller.farderaventyr[23].beskrivninghak = "2 Språkenheter. 1 Avtrubbningskryss för utsatthet"
	handelsetabeller.farderaventyr[23].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[23].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[23].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[23].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.farderaventyr[23].subval[0][0][0].sprakenheter=2;
	handelsetabeller.farderaventyr[23].subval[0][0][0].ovrigt="Har blivit fångad av vildar."
	
	handelsetabeller.farderaventyr[24] = {}; 
	handelsetabeller.farderaventyr[24].subval = [[[]]]; 
	handelsetabeller.farderaventyr[24].vald = 0; 
	handelsetabeller.farderaventyr[24].rubrik = "Färdats över haven"
	handelsetabeller.farderaventyr[24].beskrivning = "Rollpersonen har färdats över många hav och lärt sig mycket på sina resor."
	handelsetabeller.farderaventyr[24].beskrivninghak = "Lättlärd i Sjömannaskap. 2 enheter Kunskapsfärdigheter. 2 Språkenheter"
	handelsetabeller.farderaventyr[24].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[24].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[24].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[24].subval[0][0][0].kunskapsfardigheterenheter = 2; 
	handelsetabeller.farderaventyr[24].subval[0][0][0].sjomannaskap = {};
	handelsetabeller.farderaventyr[24].subval[0][0][0].sjomannaskap.lattlard=1; 

	handelsetabeller.farderaventyr[25] = {}; 
	handelsetabeller.farderaventyr[25].subval = [[[]]]; 
	handelsetabeller.farderaventyr[25].vald = 0; 
	handelsetabeller.farderaventyr[25].rubrik = "Färd genom Skugglandet"
	handelsetabeller.farderaventyr[25].beskrivning = "Personen har blivit indragen i det mystiska Skugglandet då denne var i civilisationens utkanter. Detta har på något sätt märkt personen och denne var inte densamme när denne kom ut därifrån."
	handelsetabeller.farderaventyr[25].beskrivninghak = "\+2 i valfritt grundattribut, 1 poäng Kännetecken."
	handelsetabeller.farderaventyr[25].beskrivninghakvaldbas = "";
	
	handelsetabeller.farderaventyr[25].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[25].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[25].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[25].subval[0][0][0].kanneteckenpoang = 1; 
	handelsetabeller.farderaventyr[25].subval[0][0][0].ovrigt="Har blivit indragen i det mystiska Skugglandet."
	
	handelsetabeller.farderaventyr[25].subval[0].push([]);
	handelsetabeller.farderaventyr[25].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[25].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[25].subval[0][1][0].vald = 0; 
	
	handelsetabeller.farderaventyr[25].subval[0][1][0].antalsubval = 1; 
	
	handelsetabeller.farderaventyr[25].subval[0][1][1] = {};
	handelsetabeller.farderaventyr[25].subval[0][1][1].valdasub = [];
	handelsetabeller.farderaventyr[25].subval[0][1][1].vald = 0;
	handelsetabeller.farderaventyr[25].subval[0][1][1].styrka = {};
	handelsetabeller.farderaventyr[25].subval[0][1][1].styrka.varde=2;
	handelsetabeller.farderaventyr[25].subval[0][1][1].rubrik="Styrka"
	handelsetabeller.farderaventyr[25].subval[0][1][1].beskrivninghakvaldbas="\+2 Styrka. 1 poäng Kännetecken"
	
	handelsetabeller.farderaventyr[25].subval[0][1][2] = {};
	handelsetabeller.farderaventyr[25].subval[0][1][2].valdasub = [];
	handelsetabeller.farderaventyr[25].subval[0][1][2].vald = 0;
	handelsetabeller.farderaventyr[25].subval[0][1][2].talighet = {};
	handelsetabeller.farderaventyr[25].subval[0][1][2].talighet.varde=2;
	handelsetabeller.farderaventyr[25].subval[0][1][2].rubrik="Tålighet"
	handelsetabeller.farderaventyr[25].subval[0][1][2].beskrivninghakvaldbas="\+2 Tålighet. 1 poäng Kännetecken"
	
	handelsetabeller.farderaventyr[25].subval[0][1][3] = {};
	handelsetabeller.farderaventyr[25].subval[0][1][3].valdasub = [];
	handelsetabeller.farderaventyr[25].subval[0][1][3].vald = 0;
	handelsetabeller.farderaventyr[25].subval[0][1][3].rorlighet = {};
	handelsetabeller.farderaventyr[25].subval[0][1][3].rorlighet.varde=2;
	handelsetabeller.farderaventyr[25].subval[0][1][3].rubrik="Rörlighet"
	handelsetabeller.farderaventyr[25].subval[0][1][3].beskrivninghakvaldbas="\+2 Rörlighet. 1 poäng Kännetecken"
	
	handelsetabeller.farderaventyr[25].subval[0][1][4] = {};
	handelsetabeller.farderaventyr[25].subval[0][1][4].valdasub = [];
	handelsetabeller.farderaventyr[25].subval[0][1][4].vald = 0;
	handelsetabeller.farderaventyr[25].subval[0][1][4].uppfattning = {};
	handelsetabeller.farderaventyr[25].subval[0][1][4].uppfattning.varde=2;
	handelsetabeller.farderaventyr[25].subval[0][1][4].rubrik="Uppfattning"
	handelsetabeller.farderaventyr[25].subval[0][1][4].beskrivninghakvaldbas="\+2 Uppfattning. 1 poäng Kännetecken"
	
	handelsetabeller.farderaventyr[25].subval[0][1][5] = {};
	handelsetabeller.farderaventyr[25].subval[0][1][5].valdasub = [];
	handelsetabeller.farderaventyr[25].subval[0][1][5].vald = 0;
	handelsetabeller.farderaventyr[25].subval[0][1][5].vilja = {};
	handelsetabeller.farderaventyr[25].subval[0][1][5].vilja.varde=2;
	handelsetabeller.farderaventyr[25].subval[0][1][5].rubrik="Vilja"
	handelsetabeller.farderaventyr[25].subval[0][1][5].beskrivninghakvaldbas="\+2 Vilja. 1 poäng Kännetecken"
	
	handelsetabeller.farderaventyr[25].subval[0][1][6] = {};
	handelsetabeller.farderaventyr[25].subval[0][1][6].valdasub = [];
	handelsetabeller.farderaventyr[25].subval[0][1][6].vald = 0;
	handelsetabeller.farderaventyr[25].subval[0][1][6].psyke = {};
	handelsetabeller.farderaventyr[25].subval[0][1][6].psyke.varde=2;
	handelsetabeller.farderaventyr[25].subval[0][1][6].rubrik="Psyke"
	handelsetabeller.farderaventyr[25].subval[0][1][6].beskrivninghakvaldbas="\+2 Psyke. 1 poäng Kännetecken"
	
	handelsetabeller.farderaventyr[25].subval[0][1][7] = {};
	handelsetabeller.farderaventyr[25].subval[0][1][7].valdasub = [];
	handelsetabeller.farderaventyr[25].subval[0][1][7].vald = 0;
	handelsetabeller.farderaventyr[25].subval[0][1][7].visdom = {};
	handelsetabeller.farderaventyr[25].subval[0][1][7].visdom.varde=2;
	handelsetabeller.farderaventyr[25].subval[0][1][7].rubrik="Visdom"
	handelsetabeller.farderaventyr[25].subval[0][1][7].beskrivninghakvaldbas="\+2 Visdom. 1 poäng Kännetecken"
	
	handelsetabeller.farderaventyr[25].subval[0][1][8] = {};
	handelsetabeller.farderaventyr[25].subval[0][1][8].valdasub = [];
	handelsetabeller.farderaventyr[25].subval[0][1][8].vald = 0;
	handelsetabeller.farderaventyr[25].subval[0][1][8].utstralning = {};
	handelsetabeller.farderaventyr[25].subval[0][1][8].utstralning.varde=2;
	handelsetabeller.farderaventyr[25].subval[0][1][8].rubrik="Utstrålning"
	handelsetabeller.farderaventyr[25].subval[0][1][8].beskrivninghakvaldbas="\+2 Tålighet. 1 poäng Kännetecken"
	

	handelsetabeller.farderaventyr[26] = {}; 
	handelsetabeller.farderaventyr[26].subval = [[[]]]; 
	handelsetabeller.farderaventyr[26].vald = 0; 
	handelsetabeller.farderaventyr[26].rubrik = "Följe med underhållare"
	handelsetabeller.farderaventyr[26].beskrivning = "Under en tid följde rollpersonen med ett följe med vandrande underhållare där denne lärde sig deras värv."
	handelsetabeller.farderaventyr[26].beskrivninghak = "Lättlärd i Dansa samt Sång \& musik"
	handelsetabeller.farderaventyr[26].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[26].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[26].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[26].subval[0][0][0].dansa = {};
	handelsetabeller.farderaventyr[26].subval[0][0][0].dansa.lattlard=1; 
	handelsetabeller.farderaventyr[26].subval[0][0][0].sangmusik = {};
	handelsetabeller.farderaventyr[26].subval[0][0][0].sangmusik.lattlard=1; 
	handelsetabeller.farderaventyr[26].subval[0][0][0].ovrigt="Har slått följe med vandrande underhållare.";

	handelsetabeller.farderaventyr[27] = {}; 
	handelsetabeller.farderaventyr[27].subval = [[[]]]; 
	handelsetabeller.farderaventyr[27].vald = 0; 
	handelsetabeller.farderaventyr[27].rubrik = "Följer sitt hjärta"
	handelsetabeller.farderaventyr[27].beskrivning = "Rollpersonen har märkt att denne mår som bäst när denne följer sitt hjärta.";
	handelsetabeller.farderaventyr[27].beskrivninghak = "Får igen ytterligare 1 Fokus varje gång rollpersonen får igen Fokus på grund av ett karaktärsdrag";
	handelsetabeller.farderaventyr[27].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[27].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[27].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[27].subval[0][0][0].formaga="Får igen ytterligare 1 Fokus varje gång rollpersonen får igen Fokus på grund av ett karaktärsdrag";
	
	handelsetabeller.farderaventyr[28] = {}; 
	handelsetabeller.farderaventyr[28].subval = [[[]]]; 
	handelsetabeller.farderaventyr[28].vald = 0; 
	handelsetabeller.farderaventyr[28].rubrik = "Föremål från forntida rike"
	handelsetabeller.farderaventyr[28].beskrivning = "Rollpersonen har under sina äventyr kommit över ett mycket legendariskt föremål.";
	handelsetabeller.farderaventyr[28].beskrivninghak = "Föremålet är värt 4T6×100 silver för en samlare och ger \+1T6 på slag där den kommer till användning. Så länge rollpersonen har det i sin ägo ger den dessutom \+1T6 på alla slag i sociala konflikter som är mot personer som är intresserade av historia eller kultur";
	handelsetabeller.farderaventyr[28].beskrivninghakvaldbas = "";
	
	handelsetabeller.farderaventyr[28].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[28].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[28].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[28].subval[0][0][0].resurs="Har kommit över ett legendariskt föremål som är värt varde1_resultat för en samlare. Det ger dessutom \+1T6 på alla slag i sociala konflikter som är mot personer som är intresserade av historia eller kultur.";
	handelsetabeller.farderaventyr[28].subval[0][0][0].resursbas="Har kommit över ett legendariskt föremål som är värt varde1_resultat för en samlare. Det ger dessutom \+1T6 på alla slag i sociala konflikter som är mot personer som är intresserade av historia eller kultur.";
	
	handelsetabeller.farderaventyr[28].subval[0][0][0].vardeslag=["4T6x100"];
	handelsetabeller.farderaventyr[28].subval[0][0][0].beskrivninghakvaldbas = "Föremålet är värt varde1_resultat silver för en samlare och ger \+1T6 på slag där den kommer till användning. Så länge rollpersonen har det i sin ägo ger den dessutom \+1T6 på alla slag i sociala konflikter som är mot personer som är intresserade av historia eller kultur";


	handelsetabeller.farderaventyr[29] = {}; 
	handelsetabeller.farderaventyr[29].subval = [[[]]]; 
	handelsetabeller.farderaventyr[29].vald = 0; 
	handelsetabeller.farderaventyr[29].rubrik = "Förhållande med person av främmande folkslag"
	handelsetabeller.farderaventyr[29].beskrivning = "Rollpersonen har haft ett förhållande med en person av ett folkslag annat än sitt eget. Kanske är det en alv, kamorian, adasier, zhan eller liknande."
	handelsetabeller.farderaventyr[29].beskrivninghak = "Lättlärd i Kulturkännedom. 1 poäng Expertiser som visar vad rollpersonen har lärt sig av sin partner. 2 Språkenheter för folkslagets språk"
	handelsetabeller.farderaventyr[29].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[29].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[29].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[29].subval[0][0][0].kulturkannedom = {};
	handelsetabeller.farderaventyr[29].subval[0][0][0].kulturkannedom.lattlard=1; 
	handelsetabeller.farderaventyr[29].subval[0][0][0].expertispoang = 1; 
	handelsetabeller.farderaventyr[29].subval[0][0][0].sprakenheter=2;
	handelsetabeller.farderaventyr[29].subval[0][0][0].kontakt="Har haft ett förhållande med en person av ett folkslag annat än sitt eget";

	handelsetabeller.farderaventyr[30] = {}; 
	handelsetabeller.farderaventyr[30].subval = [[[]]]; 
	handelsetabeller.farderaventyr[30].vald = 0; 
	handelsetabeller.farderaventyr[30].rubrik = "God hörsel"
	handelsetabeller.farderaventyr[30].beskrivning = "Rollpersonen har mycket god hörsel."
	handelsetabeller.farderaventyr[30].beskrivninghak = "\+1T6 Vaksamhet. Kännetecknet God hörsel 4T6"
	handelsetabeller.farderaventyr[30].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[30].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[30].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[30].subval[0][0][0].vaksamhet = {};
	handelsetabeller.farderaventyr[30].subval[0][0][0].vaksamhet.bonus = 4; 

	handelsetabeller.farderaventyr[31] = {}; 
	handelsetabeller.farderaventyr[31].subval = [[[]]]; 
	handelsetabeller.farderaventyr[31].vald = 0; 
	handelsetabeller.farderaventyr[31].rubrik = "Gravt misslyckande"
	handelsetabeller.farderaventyr[31].beskrivning = "Rollpersonen har begått ett gravt misslyckande. Denne har försökt göra något som misslyckats katastrofalt. Kanske har denne lett ett skepp på grund, råkat förgifta en vän, bränt ned familjens gård eller avslöjat en hemlighet. Detta misslyckande är känt i rollpersonens kretsar och det talas bakom dennes rygg."
	handelsetabeller.farderaventyr[31].beskrivninghak = "1 poäng Expertiser som på något sätt kopplat till misslyckandet. 1 Avtrubbningskryss för utsatthet"
	handelsetabeller.farderaventyr[31].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[31].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[31].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[31].subval[0][0][0].expertispoang = 1; 
	handelsetabeller.farderaventyr[31].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.farderaventyr[31].subval[0][0][0].ovrigt="Har begått ett gravt misslyckande.";
	
	
	handelsetabeller.farderaventyr[32] = {}; 
	handelsetabeller.farderaventyr[32].subval = [[[]]]; 
	handelsetabeller.farderaventyr[32].vald = 0; 
	handelsetabeller.farderaventyr[32].rubrik = "Gömställe"
	handelsetabeller.farderaventyr[32].beskrivning = "Rollpersonen har ett gömställe som denne och dennes vänner kan söka skydd i. Detta kan vara allt från ett ensligt bergskloster till en krypta, en lönngång in bakom en bokhylla i ett slott eller en stuga djupt in i skogen. Rollpersonen är mycket rädd om att avslöja stället och är därför mycket vaksam."
	handelsetabeller.farderaventyr[32].beskrivninghak = "\+2 Uppfattning. Lättlärd i Speja. Rollpersonen kan etablera gömstället i spel när denna finner det lämpligt"
	handelsetabeller.farderaventyr[32].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[32].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[32].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[32].subval[0][0][0].speja = {};
	handelsetabeller.farderaventyr[32].subval[0][0][0].speja.lattlard=1; 
	handelsetabeller.farderaventyr[32].subval[0][0][0].uppfattning = {};
	handelsetabeller.farderaventyr[32].subval[0][0][0].uppfattning.varde =2; 
	handelsetabeller.farderaventyr[32].subval[0][0][0].resurs="Har ett gömställe."
	
	handelsetabeller.farderaventyr[33] = {}; 
	handelsetabeller.farderaventyr[33].subval = [[[]]]; 
	handelsetabeller.farderaventyr[33].vald = 0; 
	handelsetabeller.farderaventyr[33].rubrik = "Havssjäl"
	handelsetabeller.farderaventyr[33].beskrivning = "Rollpersonen trivs på sjöar och hav. Ett skepps knarrande skrov och vågornas skvalpningar gör att denne kan slappna av och känna sig som hemma."
	handelsetabeller.farderaventyr[33].beskrivninghak = "Lättlärd i Simma och Sjömannaskap. Ytterligare 2 Fokus återfås i början av varje spelmöte när rollpersonen befinner sig på ett skepp eller så pass nära havet att denne kan höra vågornas brus"
	handelsetabeller.farderaventyr[33].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[33].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[33].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[33].subval[0][0][0].simma = {};
	handelsetabeller.farderaventyr[33].subval[0][0][0].simma.lattlard=1; 
	handelsetabeller.farderaventyr[33].subval[0][0][0].sjomannaskap = {};
	handelsetabeller.farderaventyr[33].subval[0][0][0].sjomannaskap.lattlard=1;
	handelsetabeller.farderaventyr[33].subval[0][0][0].formaga="Ytterligare 2 Fokus återfås i början av varje spelmöte när rollpersonen befinner sig på ett skepp eller nära havet.";
	
	handelsetabeller.farderaventyr[34] = {}; 
	handelsetabeller.farderaventyr[34].subval = [[[]]]; 
	handelsetabeller.farderaventyr[34].vald = 0; 
	handelsetabeller.farderaventyr[34].rubrik = "Hemlig identitet"
	handelsetabeller.farderaventyr[34].beskrivning = "Rollpersonen har egentligen en annan bakgrund och ett annat namn men har tvingats fly och ta sig an en ny identitet för att komma undan de som letar efter denne. Varför rollpersonen tvingats fly är upp till spelaren och spelledaren."
	handelsetabeller.farderaventyr[34].beskrivningvaldbas = "";
	handelsetabeller.farderaventyr[34].beskrivninghak = "Slå två gånger på bakgrundstabellen och välj en som visar den andra bakgrunden. Rollpersonen får välja en av färdighetsgrupperna från denna bakgrund";
	handelsetabeller.farderaventyr[34].beskrivninghakvaldbas="";
	
	handelsetabeller.farderaventyr[34].subval[0][0][0] = {};
	handelsetabeller.farderaventyr[34].subval[0][0][0].valdasub = [];
	handelsetabeller.farderaventyr[34].subval[0][0][0].vald = 0;
	
	handelsetabeller.farderaventyr[34].subval[0].push([]);
	handelsetabeller.farderaventyr[34].subval[0][1][0] = {};
	handelsetabeller.farderaventyr[34].subval[0][1][0].valdasub = [];
	handelsetabeller.farderaventyr[34].subval[0][1][0].vald = 0;
	
	handelsetabeller.farderaventyr[34].subval[0][1][0].ovrigt="Har en hemlig bakgrund som kontakt1_rubrikliten som denne tvingats lämna."
	handelsetabeller.farderaventyr[34].subval[0][1][0].ovrigtbas="Har en hemlig bakgrund som kontakt1_rubrikliten som denne tvingats lämna."
	
	handelsetabeller.farderaventyr[34].subval[0][1][0].kontaktenhetbool=[1];	
	handelsetabeller.farderaventyr[34].subval[0][1][0].antalsubval=1;
	handelsetabeller.farderaventyr[34].subval[0][1][0].subvalrubrikbas="Välj vad rollpersonen lärt sig genom sin hemliga identitet som kontakt1_rubrikliten:";
	handelsetabeller.farderaventyr[34].subval[0][1][0].beskrivningvaldbas="Rollpersonen har egentligen en bakgrund som kontakt1_rubrikliten och ett annat namn men har tvingats fly och ta sig an en ny identitet för att komma undan de som letar efter denne. Varför rollpersonen tvingats fly är upp till spelaren och spelledaren."
	handelsetabeller.farderaventyr[34].subval[0][1][1] = {};
	handelsetabeller.farderaventyr[34].subval[0][1][1].vald = 0;
	handelsetabeller.farderaventyr[34].subval[0][1][2] = {};
	handelsetabeller.farderaventyr[34].subval[0][1][2].vald = 0;
	
	
	handelsetabeller.farderaventyr[35] = {}; 
	handelsetabeller.farderaventyr[35].subval = [[[]]]; 
	handelsetabeller.farderaventyr[35].vald = 0; 
	handelsetabeller.farderaventyr[35].rubrik = "Hittat kropp"
	handelsetabeller.farderaventyr[35].beskrivning = "Rollpersonen har hittat liket av en död person. Personen kan antingen ha plundrat kroppen på allt den har eller försökt återföra den till dess anhöriga."
	handelsetabeller.farderaventyr[35].beskrivningvaldbas = "";
	handelsetabeller.farderaventyr[35].beskrivninghak = "Plundrat: 2T6×10 silver. 2 enheter Rörelsefärdigheter. Återfört: 4T6+50 silver. 3 enheter Sociala färdigheter";
	handelsetabeller.farderaventyr[35].beskrivninghakvaldbas = "";
	handelsetabeller.farderaventyr[35].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[35].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[35].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[35].subval[0].push([]);
	handelsetabeller.farderaventyr[35].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[35].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[35].subval[0][1][0].vald = 0; 
	
	handelsetabeller.farderaventyr[35].subval[0][1][0].antalsubval=1; 
	
	handelsetabeller.farderaventyr[35].subval[0][1][1] = {}; 
	handelsetabeller.farderaventyr[35].subval[0][1][1].valdasub = []; 
	handelsetabeller.farderaventyr[35].subval[0][1][1].vald = 0; 
	
	handelsetabeller.farderaventyr[35].subval[0][1][1].rubrik="Plundrat den döde på allt" 
	handelsetabeller.farderaventyr[35].subval[0][1][1].rorelsefardigheterenheter = 2; 
	handelsetabeller.farderaventyr[35].subval[0][1][1].pengarslag="2T6x10";
	handelsetabeller.farderaventyr[35].subval[0][1][1].beskrivningvaldbas="Rollpersonen har plundrat liket av en död person.";
	handelsetabeller.farderaventyr[35].subval[0][1][1].ovrigtbas="Rollpersonen har plundrat liket av en död person.";
	handelsetabeller.farderaventyr[35].subval[0][1][1].beskrivninghakvaldbas="pengar_resultat silver. 2 enheter Rörelsefärdigheter.";
	
	
	handelsetabeller.farderaventyr[35].subval[0][1][2] = {}; 
	handelsetabeller.farderaventyr[35].subval[0][1][2].valdasub = []; 
	handelsetabeller.farderaventyr[35].subval[0][1][2].vald = 0; 
	
	handelsetabeller.farderaventyr[35].subval[0][1][2].rubrik="Återfört den dödes tillhörigheter"
	handelsetabeller.farderaventyr[35].subval[0][1][2].socialafardigheterenheter = 3; 
	handelsetabeller.farderaventyr[35].subval[0][1][2].pengarslag="4T6p50"; 
	handelsetabeller.farderaventyr[35].subval[0][1][2].beskrivningvaldbas="Rollpersonen har hittat en död person och återfört kroppen till dess anhöriga.";
	handelsetabeller.farderaventyr[35].subval[0][1][2].ovrigtbas="Rollpersonen har hittat en död person och återfört kroppen till dess anhöriga.";
	
	handelsetabeller.farderaventyr[35].subval[0][1][2].beskrivninghakvaldbas="pengar_resultat silver. 3 enheter Sociala färdigheter.";
	

	handelsetabeller.farderaventyr[36] = {}; 
	handelsetabeller.farderaventyr[36].subval = [[[]]]; 
	handelsetabeller.farderaventyr[36].vald = 0; 
	handelsetabeller.farderaventyr[36].rubrik = "Hjälpt befolkning"
	handelsetabeller.farderaventyr[36].beskrivning = "Rollpersonen har hjälpt befolkningen i en stadsdel eller by på något sätt. Detta kan vara en fråga om pengar, beskydd eller bara givit dem upprättelse. Befolkningen är mycket tacksam och alla ser på rollpersonen med varma hjärtan och denne är alltid välkommen till dem."
	handelsetabeller.farderaventyr[36].beskrivninghak = "Exceptionellt föremål i gåva. Om det är ett vapen så ökar dess skada med \+1T6, om det är en rustning så ökar samtliga Pansarvärden med \+3, om det är ett föremål så ger det \+1T6 bonus till en färdighet när det används (ej till Undvika, Stridsfärdigheter eller Mystikfärdigheter)";
	handelsetabeller.farderaventyr[36].beskrivninghakvaldbas="";
	
	handelsetabeller.farderaventyr[36].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[36].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[36].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[36].subval[0][0][0].kontakt="Har hjälpt befolkningen i en stadsdel eller by på något sätt och är alltid välkommen dit." 
	handelsetabeller.farderaventyr[36].subval[0].push([]);
	handelsetabeller.farderaventyr[36].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[36].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[36].subval[0][1][0].vald = 0; 
	
	handelsetabeller.farderaventyr[36].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[36].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[36].subval[0][1][0].vald = 0; 
	
	handelsetabeller.farderaventyr[36].subval[0][1][0].antalsubval=1; 
	
	handelsetabeller.farderaventyr[36].subval[0][1][1] = {}; 
	handelsetabeller.farderaventyr[36].subval[0][1][1].valdasub = []; 
	handelsetabeller.farderaventyr[36].subval[0][1][1].vald = 0; 
	
	handelsetabeller.farderaventyr[36].subval[0][1][1].rubrik="Exceptionellt vapen"; 
	handelsetabeller.farderaventyr[36].subval[0][1][1].vapen="Ett vapen med skada \+1T6" ;
	handelsetabeller.farderaventyr[36].subval[0][1][1].beskrivninghakvaldbas="Ett vapen i gåva, med skada \+1T6" ;
	
	handelsetabeller.farderaventyr[36].subval[0][1][2] = {}; 
	handelsetabeller.farderaventyr[36].subval[0][1][2].valdasub = []; 
	handelsetabeller.farderaventyr[36].subval[0][1][2].vald = 0; 
	
	handelsetabeller.farderaventyr[36].subval[0][1][2].rubrik="Exceptionell rustning"; 
	handelsetabeller.farderaventyr[36].subval[0][1][2].rustning="En rustning med \+3 på samtliga pansarvärden.";
	handelsetabeller.farderaventyr[36].subval[0][1][2].beskrivninghakvaldbas="En rustning i gåva, med \+3 på samtliga pansarvärden.";
	
	handelsetabeller.farderaventyr[36].subval[0][1][3] = {}; 
	handelsetabeller.farderaventyr[36].subval[0][1][3].valdasub = []; 
	handelsetabeller.farderaventyr[36].subval[0][1][3].vald = 0; 
	
	handelsetabeller.farderaventyr[36].subval[0][1][3].rubrik="Exceptionellt föremål"; 
	handelsetabeller.farderaventyr[36].subval[0][1][3].resurs="Ett exceptionellt föremål som ger \+1T6 bonus när det används till en specifik färdighet \(dock ej Undvika\).";
	handelsetabeller.farderaventyr[36].subval[0][1][3].beskrivninghakvaldbas="Ett exceptionellt föremål i gåva som ger \+1T6 bonus när det används till en specifik färdighet \(dock ej Undvika\).";
	

	handelsetabeller.farderaventyr[37] = {}; 
	handelsetabeller.farderaventyr[37].subval = [[[]]]; 
	handelsetabeller.farderaventyr[37].vald = 0; 
	handelsetabeller.farderaventyr[37].rubrik = "Händig"
	handelsetabeller.farderaventyr[37].beskrivning = "Rollpersonen tycker om att hålla händerna sysselsatta samtidigt som denne låter hjärnan arbeta."
	handelsetabeller.farderaventyr[37].beskrivninghak = "\+2 Rörlighet. Expertisen Lappa \& laga 4T6. 2 poäng Hantverk"
	handelsetabeller.farderaventyr[37].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[37].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[37].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[37].subval[0][0][0].rorlighet = {};
	handelsetabeller.farderaventyr[37].subval[0][0][0].rorlighet.varde =2; 
	handelsetabeller.farderaventyr[37].subval[0][0][0].hantverkpoang = 2; 
	handelsetabeller.farderaventyr[37].subval[0][0][0].lappalaga = {};
	handelsetabeller.farderaventyr[37].subval[0][0][0].lappalaga.enheter = 3; 

	handelsetabeller.farderaventyr[38] = {}; 
	handelsetabeller.farderaventyr[38].subval = [[[]]]; 
	handelsetabeller.farderaventyr[38].vald = 0; 
	handelsetabeller.farderaventyr[38].rubrik = "Ihärdig"
	handelsetabeller.farderaventyr[38].beskrivning = "Rollpersonen ger inte upp. Även i de största motgångar så kan denne kämpa vidare."
	handelsetabeller.farderaventyr[38].beskrivninghak = "\+1T6 Vilja. Lättlärd i Vildmarksvana"
	handelsetabeller.farderaventyr[38].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[38].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[38].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[38].subval[0][0][0].vildmarksvana = {};
	handelsetabeller.farderaventyr[38].subval[0][0][0].vildmarksvana.lattlard=1; 
	handelsetabeller.farderaventyr[38].subval[0][0][0].vilja = {};
	handelsetabeller.farderaventyr[38].subval[0][0][0].vilja.varde = 4; 

	handelsetabeller.farderaventyr[39] = {}; 
	handelsetabeller.farderaventyr[39].subval = [[[]]]; 
	handelsetabeller.farderaventyr[39].vald = 0; 
	handelsetabeller.farderaventyr[39].rubrik = "Infångad och torterad"
	handelsetabeller.farderaventyr[39].beskrivning = "Personen har blivit infångad och torterad och bär fortfarande ärr på sin kropp över detta. Exakt varför och av vilka är upp till spelaren och spelledaren."
	handelsetabeller.farderaventyr[39].beskrivninghak = "1 Avtrubbningskryss för utsatthet. \+2 Livskraft vid Chockslag"
	handelsetabeller.farderaventyr[39].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[39].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[39].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[39].subval[0][0][0].livskraft = {};
	handelsetabeller.farderaventyr[39].subval[0][0][0].livskraft.egenskap ="\+2 vid Chockslag"; 
	handelsetabeller.farderaventyr[39].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.farderaventyr[39].subval[0][0][0].ovrigt="Har blivit infångad och torterad."; 	
	handelsetabeller.farderaventyr[39].subval[0][0][0].utseende="Ärr från tortyr";

	handelsetabeller.farderaventyr[40] = {}; 
	handelsetabeller.farderaventyr[40].subval = [[[]]]; 
	handelsetabeller.farderaventyr[40].vald = 0; 
	handelsetabeller.farderaventyr[40].rubrik = "Infört en tradition"
	handelsetabeller.farderaventyr[40].beskrivning = "Rollpersonen har infört en tradition som blivit spridd i ett område. Rollpersonen är mycket populär och ses som traditionens grundare."
	handelsetabeller.farderaventyr[40].beskrivninghak = "\+2 Utstrålning. Rollpersonen får 4T6 i en valfri Expertis som på något sätt är kopplad till traditionen";
	handelsetabeller.farderaventyr[40].beskrivninghakvaldbas = "\+2 Utstrålning. ";
	handelsetabeller.farderaventyr[40].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[40].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[40].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[40].subval[0][0][0].utstralning = {};
	handelsetabeller.farderaventyr[40].subval[0][0][0].utstralning.varde =2; 
	
	handelsetabeller.farderaventyr[40].subval[0].push([]);
	handelsetabeller.farderaventyr[40].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[40].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[40].subval[0][1][0].vald = 0; 
	
	
	handelsetabeller.farderaventyr[40].subval[0][1][0].subvalrubrik="4T6 i valfri Expertis" 
	handelsetabeller.farderaventyr[40].subval[0][1][0].antalsubval=1;
	
	
	for(i=0;i<expertislista.length; i++){
		handelsetabeller.farderaventyr[40].subval[0][1][i+1] = {};
		handelsetabeller.farderaventyr[40].subval[0][1][i+1].valdasub = [];
		handelsetabeller.farderaventyr[40].subval[0][1][i+1].vald = 0;
		handelsetabeller.farderaventyr[40].subval[0][1][i+1][expertislista[i]] = {};
		handelsetabeller.farderaventyr[40].subval[0][1][i+1][expertislista[i]].enheter=3;
		handelsetabeller.farderaventyr[40].subval[0][1][i+1].rubrik= fardighetsobjekt[expertislista[i]].rubrik;
		handelsetabeller.farderaventyr[40].subval[0][1][i+1].ovrigt="Har infört en tradition som är kopplad till färdigheten " + fardighetsobjekt[expertislista[i]].rubrik + ".";
		handelsetabeller.farderaventyr[40].subval[0][1][i+1].beskrivninghakvaldbas="4T6 i " + fardighetsobjekt[expertislista[i]].rubrik + " vilket på något sätt är kopplat till traditionen."; 
	}
	
	
	handelsetabeller.farderaventyr[41] = {}; 
	handelsetabeller.farderaventyr[41].subval = [[[]]]; 
	handelsetabeller.farderaventyr[41].vald = 0; 
	handelsetabeller.farderaventyr[41].rubrik = "Kartsamling"
	handelsetabeller.farderaventyr[41].beskrivning = "Rollpersonen har en stor kartsamling över de flesta civiliserade områden som denne kan konsultera på sina resor."
	handelsetabeller.farderaventyr[41].beskrivninghak = "\+2 Visdom. Lättlärd i Geografi. Rollpersonen får även bonus \+1T6 om denne kan använda kartorna för att planera resor och liknande"
	handelsetabeller.farderaventyr[41].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[41].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[41].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[41].subval[0][0][0].geografi = {};
	handelsetabeller.farderaventyr[41].subval[0][0][0].geografi.lattlard=1; 
	handelsetabeller.farderaventyr[41].subval[0][0][0].visdom = {};
	handelsetabeller.farderaventyr[41].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.farderaventyr[41].subval[0][0][0].resurs="Stor kartsamling som ger \+1T6 bonus för att planera resor."

	handelsetabeller.farderaventyr[42] = {}; 
	handelsetabeller.farderaventyr[42].subval = [[[]]]; 
	handelsetabeller.farderaventyr[42].vald = 0; 
	handelsetabeller.farderaventyr[42].rubrik = "Klättrare"
	handelsetabeller.farderaventyr[42].beskrivning = "Personen är mycket skicklig på att klättra och kan snabbt ta sig upp för både träd, rep och murar. Dessutom har personen tränat upp sin fysik."
	handelsetabeller.farderaventyr[42].beskrivninghak = "\+2 Styrka, \+2 Rörlighet. Lättlärd i Klättra"
	handelsetabeller.farderaventyr[42].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[42].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[42].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[42].subval[0][0][0].klattra = {};
	handelsetabeller.farderaventyr[42].subval[0][0][0].klattra.lattlard=1; 
	handelsetabeller.farderaventyr[42].subval[0][0][0].styrka = {};
	handelsetabeller.farderaventyr[42].subval[0][0][0].styrka.varde =2; 
	handelsetabeller.farderaventyr[42].subval[0][0][0].rorlighet = {};
	handelsetabeller.farderaventyr[42].subval[0][0][0].rorlighet.varde =2; 

	handelsetabeller.farderaventyr[43] = {}; 
	handelsetabeller.farderaventyr[43].subval = [[[]]]; 
	handelsetabeller.farderaventyr[43].vald = 0; 
	handelsetabeller.farderaventyr[43].rubrik = "Koordinerad"
	handelsetabeller.farderaventyr[43].beskrivning = "Rollpersonen har en naturlig fallenhet för snabbhet och koordination."
	handelsetabeller.farderaventyr[43].beskrivninghak = "När rollpersonen använder Fokus för att ge bonus till en Rörelsefärdighet så får denne ytterligare \+1T6 bonus"
	handelsetabeller.farderaventyr[43].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[43].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[43].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[43].subval[0][0][0].formaga="När rollpersonen använder Fokus för att ge bonus till en Rörelsefärdighet så får denne ytterligare \+1T6 bonus."
	handelsetabeller.farderaventyr[44] = {}; 
	handelsetabeller.farderaventyr[44].subval = [[[]]]; 
	handelsetabeller.farderaventyr[44].vald = 0; 
	
	handelsetabeller.farderaventyr[44].rubrik = "Kärnfrisk"
	handelsetabeller.farderaventyr[44].beskrivning = "Rollpersonen blir så gott som aldrig sjuk och är också mycket uthållig."
	handelsetabeller.farderaventyr[44].beskrivninghak = "\+2 Tålighet. \+1T6 Livskraft vid Infektionsslag"
	handelsetabeller.farderaventyr[44].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[44].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[44].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[44].subval[0][0][0].talighet = {};
	handelsetabeller.farderaventyr[44].subval[0][0][0].talighet.varde =2; 
	handelsetabeller.farderaventyr[44].subval[0][0][0].livskraft = {};
	handelsetabeller.farderaventyr[44].subval[0][0][0].livskraft.egenskap = "\+1T6 vid Infektionsslag."; 

	handelsetabeller.farderaventyr[45] = {}; 
	handelsetabeller.farderaventyr[45].subval = [[[]]]; 
	handelsetabeller.farderaventyr[45].vald = 0; 
	handelsetabeller.farderaventyr[45].rubrik = "Levt i annat land"
	handelsetabeller.farderaventyr[45].beskrivning = "Personen har spenderat en del tid i ett annat land och har lärt sig språket samt kulturen."
	handelsetabeller.farderaventyr[45].beskrivninghak = "3 enheter Kunskapsfärdigheter. 2 Språkenheter"
	handelsetabeller.farderaventyr[45].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[45].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[45].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[45].subval[0][0][0].kunskapsfardigheterenheter = 3; 
	handelsetabeller.farderaventyr[45].subval[0][0][0].sprakenheter=2;
	
	handelsetabeller.farderaventyr[46] = {}; 
	handelsetabeller.farderaventyr[46].subval = [[[]]]; 
	handelsetabeller.farderaventyr[46].vald = 0; 
	handelsetabeller.farderaventyr[46].rubrik = "Levt i exil"
	handelsetabeller.farderaventyr[46].beskrivning = "Rollpersonen har levt i exil för att undkomma krav på hämnd för ett brott denne inte begått."
	handelsetabeller.farderaventyr[46].beskrivninghak = "3 enheter Vildmarksfärdigheter. 1 Språkenhet"
	handelsetabeller.farderaventyr[46].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[46].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[46].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[46].subval[0][0][0].vildmarksfardigheterenheter = 3; 
	handelsetabeller.farderaventyr[46].subval[0][0][0].sprakenheter=1;
	
	handelsetabeller.farderaventyr[47] = {}; 
	handelsetabeller.farderaventyr[47].subval = [[[]]]; 
	handelsetabeller.farderaventyr[47].vald = 0; 
	handelsetabeller.farderaventyr[47].rubrik = "List"
	handelsetabeller.farderaventyr[47].beskrivning = "Rollpersonen har använt sin list för att ta sig över till synes övermäktiga hinder ute i vildmarken. Med knapp utrustning lyckas rollpersonen nästan alltid komma på något sätt att lösa problemet."
	handelsetabeller.farderaventyr[47].beskrivninghak = "\+2 Psyke. 3 enheter Vildmarksfärdigheter"
	handelsetabeller.farderaventyr[47].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[47].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[47].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[47].subval[0][0][0].vildmarksfardigheterenheter = 3; 
	handelsetabeller.farderaventyr[47].subval[0][0][0].psyke = {};
	handelsetabeller.farderaventyr[47].subval[0][0][0].psyke.varde =2; 

	handelsetabeller.farderaventyr[48] = {}; 
	handelsetabeller.farderaventyr[48].subval = [[[]]]; 
	handelsetabeller.farderaventyr[48].vald = 0; 
	handelsetabeller.farderaventyr[48].rubrik = "Lokalsinne"
	handelsetabeller.farderaventyr[48].beskrivning = "Rollpersonen har ett mycket gott lokalsinne."
	handelsetabeller.farderaventyr[48].beskrivninghak = "Lättlärd i Orientering. Expertisen Grottsystem 4T6"
	handelsetabeller.farderaventyr[48].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[48].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[48].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[48].subval[0][0][0].orientering = {};
	handelsetabeller.farderaventyr[48].subval[0][0][0].orientering.lattlard=1; 
	handelsetabeller.farderaventyr[48].subval[0][0][0].grottsystem = {};
	handelsetabeller.farderaventyr[48].subval[0][0][0].grottsystem.enheter = 3; 

	handelsetabeller.farderaventyr[49] = {}; 
	handelsetabeller.farderaventyr[49].subval = [[[]]]; 
	handelsetabeller.farderaventyr[49].vald = 0; 
	handelsetabeller.farderaventyr[49].rubrik = "Lurat döden"
	handelsetabeller.farderaventyr[49].beskrivning = "Rollpersonen har varit nära att dö. Det kan antingen röra sig om en olycka såsom att denne höll på att drunkna eller brinna inne eller kanske att denne skulle bli dräpt men undkom med blotta förskräckelsen. Rollpersonen lärde sig dock att med självkontroll och ett kyligt sinne kan man klara sig från även de mest farliga situationer."
	handelsetabeller.farderaventyr[49].beskrivninghak = "1 Avtrubbningskryss för våld. \+1T6 Självkontroll vid Skräck"
	handelsetabeller.farderaventyr[49].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[49].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[49].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[49].subval[0][0][0].sjalvkontroll = {};
	handelsetabeller.farderaventyr[49].subval[0][0][0].sjalvkontroll.egenskap = "\+1T6 vid Skräck."; 
	handelsetabeller.farderaventyr[49].subval[0][0][0].avtrubbningvald = 1; 
	handelsetabeller.farderaventyr[49].subval[0][0][0].ovrigt="Har varit nära att dö."

	handelsetabeller.farderaventyr[50] = {}; 
	handelsetabeller.farderaventyr[50].subval = [[[]]]; 
	handelsetabeller.farderaventyr[50].vald = 0; 
	handelsetabeller.farderaventyr[50].rubrik = "Lång expedition"
	handelsetabeller.farderaventyr[50].beskrivning = "Rollpersonen har deltagit i en lång expedition."
	handelsetabeller.farderaventyr[50].beskrivninghak = "4 enheter Vildmarksfärdigheter"
	handelsetabeller.farderaventyr[50].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[50].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[50].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[50].subval[0][0][0].vildmarksfardigheterenheter = 4; 
	handelsetabeller.farderaventyr[50].subval[0][0][0].ovrigt="Har deltagit i en lång expedition."
	
	handelsetabeller.farderaventyr[51] = {}; 
	handelsetabeller.farderaventyr[51].subval = [[[]]]; 
	handelsetabeller.farderaventyr[51].vald = 0; 
	handelsetabeller.farderaventyr[51].rubrik = "Mörkersyn"
	handelsetabeller.farderaventyr[51].beskrivning = "Rollpersonen kan se i kompakt mörker i exempelvis grottor eller tunnlar. När mörkersynen aktiveras skimrar personens ögon i rött, dock inte tillräckligt för att lysa upp rummet."
	handelsetabeller.farderaventyr[51].beskrivninghak = "\+3 Uppfattning. Rollpersonen får kännetecknet Mörkersyn 4T6."
	handelsetabeller.farderaventyr[51].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[51].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[51].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[51].subval[0][0][0].uppfattning = {};
	handelsetabeller.farderaventyr[51].subval[0][0][0].uppfattning.varde =3; 
	handelsetabeller.farderaventyr[51].subval[0][0][0].morkersyn = {};
	handelsetabeller.farderaventyr[51].subval[0][0][0].morkersyn.enheter = 3; 
	handelsetabeller.farderaventyr[51].subval[0][0][0].formaga="Kan se i kompakt mörker."

	handelsetabeller.farderaventyr[52] = {}; 
	handelsetabeller.farderaventyr[52].subval = [[[]]]; 
	handelsetabeller.farderaventyr[52].vald = 0; 
	handelsetabeller.farderaventyr[52].rubrik = "Möte med det övernaturliga"
	handelsetabeller.farderaventyr[52].beskrivning = "Rollpersonen har mött något övernaturligt väsen, kanske en demon eller en talande vandöd. Hur rollpersonen flydde från väsendet minns ej denne."
	handelsetabeller.farderaventyr[52].beskrivninghak = "2 Avtrubbningskryss för övernaturligt"
	handelsetabeller.farderaventyr[52].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[52].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[52].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[52].subval[0][0][0].avtrubbningovernaturligt = 2; 
	handelsetabeller.farderaventyr[52].subval[0][0][0].ovrigt="Har mött ett övernaturligt väsen."
	
	handelsetabeller.farderaventyr[53] = {}; 
	handelsetabeller.farderaventyr[53].subval = [[[]]]; 
	handelsetabeller.farderaventyr[53].vald = 0; 
	handelsetabeller.farderaventyr[53].rubrik = "Namnet förevigat"
	handelsetabeller.farderaventyr[53].beskrivning = "Rollpersonen har fått en plats, ett skepp, en väg, naturformation eller något liknande uppkallat efter sig. Exakt hur detta kommer sig får spelaren och spelledaren bestämma."
	handelsetabeller.farderaventyr[53].beskrivninghak = "\+2 i valfritt grundattribut. Lättlärd i valfri Kunskapsfärdighet eller Vildmarksfärdighet"
	handelsetabeller.farderaventyr[53].beskrivninghakvaldbas = "";
	
	handelsetabeller.farderaventyr[53].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[53].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[53].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[53].subval[0][0][0].ovrigt="Har fått namnet förevigat."
	
	handelsetabeller.farderaventyr[53].subval[0].push([]);
	handelsetabeller.farderaventyr[53].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[53].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[53].subval[0][1][0].vald = 0; 
	
	handelsetabeller.farderaventyr[53].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.farderaventyr[53].subval[0][1][1] = {};
	handelsetabeller.farderaventyr[53].subval[0][1][1].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[0][1][1].vald = 0;
	handelsetabeller.farderaventyr[53].subval[0][1][1].styrka = {};
	handelsetabeller.farderaventyr[53].subval[0][1][1].styrka.varde=2;
	handelsetabeller.farderaventyr[53].subval[0][1][1].rubrik="Styrka"
	handelsetabeller.farderaventyr[53].subval[0][1][1].beskrivninghakvaldbas="\+2 Styrka. ";
	
	handelsetabeller.farderaventyr[53].subval[0][1][2] = {};
	handelsetabeller.farderaventyr[53].subval[0][1][2].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[0][1][2].vald = 0;
	handelsetabeller.farderaventyr[53].subval[0][1][2].talighet = {};
	handelsetabeller.farderaventyr[53].subval[0][1][2].talighet.varde=2;
	handelsetabeller.farderaventyr[53].subval[0][1][2].rubrik="Tålighet"
	handelsetabeller.farderaventyr[53].subval[0][1][2].beskrivninghakvaldbas="\+2 Tålighet. ";
	
	handelsetabeller.farderaventyr[53].subval[0][1][3] = {};
	handelsetabeller.farderaventyr[53].subval[0][1][3].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[0][1][3].vald = 0;
	handelsetabeller.farderaventyr[53].subval[0][1][3].rorlighet = {};
	handelsetabeller.farderaventyr[53].subval[0][1][3].rorlighet.varde=2;
	handelsetabeller.farderaventyr[53].subval[0][1][3].rubrik="Rörlighet"
	handelsetabeller.farderaventyr[53].subval[0][1][3].beskrivninghakvaldbas="\+2 Rörlighet. ";
	
	handelsetabeller.farderaventyr[53].subval[0][1][4] = {};
	handelsetabeller.farderaventyr[53].subval[0][1][4].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[0][1][4].vald = 0;
	handelsetabeller.farderaventyr[53].subval[0][1][4].uppfattning = {};
	handelsetabeller.farderaventyr[53].subval[0][1][4].uppfattning.varde=2;
	handelsetabeller.farderaventyr[53].subval[0][1][4].rubrik="Uppfattning"
	handelsetabeller.farderaventyr[53].subval[0][1][4].beskrivninghakvaldbas="\+2 Uppfattning. ";
	
	handelsetabeller.farderaventyr[53].subval[0][1][5] = {};
	handelsetabeller.farderaventyr[53].subval[0][1][5].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[0][1][5].vald = 0;
	handelsetabeller.farderaventyr[53].subval[0][1][5].vilja = {};
	handelsetabeller.farderaventyr[53].subval[0][1][5].vilja.varde=2;
	handelsetabeller.farderaventyr[53].subval[0][1][5].rubrik="Vilja"
	handelsetabeller.farderaventyr[53].subval[0][1][5].beskrivninghakvaldbas="\+2 Vilja. ";
	
	handelsetabeller.farderaventyr[53].subval[0][1][6] = {};
	handelsetabeller.farderaventyr[53].subval[0][1][6].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[0][1][6].vald = 0;
	handelsetabeller.farderaventyr[53].subval[0][1][6].psyke = {};
	handelsetabeller.farderaventyr[53].subval[0][1][6].psyke.varde=2;
	handelsetabeller.farderaventyr[53].subval[0][1][6].rubrik="Psyke"
	handelsetabeller.farderaventyr[53].subval[0][1][6].beskrivninghakvaldbas="\+2 Psyke. ";
	
	handelsetabeller.farderaventyr[53].subval[0][1][7] = {};
	handelsetabeller.farderaventyr[53].subval[0][1][7].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[0][1][7].vald = 0;
	handelsetabeller.farderaventyr[53].subval[0][1][7].visdom = {};
	handelsetabeller.farderaventyr[53].subval[0][1][7].visdom.varde=2;
	handelsetabeller.farderaventyr[53].subval[0][1][7].rubrik="Visdom"
	handelsetabeller.farderaventyr[53].subval[0][1][7].beskrivninghakvaldbas="\+2 Visdom. ";
	
	handelsetabeller.farderaventyr[53].subval[0][1][8] = {};
	handelsetabeller.farderaventyr[53].subval[0][1][8].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[0][1][8].vald = 0;
	handelsetabeller.farderaventyr[53].subval[0][1][8].utstralning = {};
	handelsetabeller.farderaventyr[53].subval[0][1][8].utstralning.varde=2;
	handelsetabeller.farderaventyr[53].subval[0][1][8].rubrik="Utstrålning"
	handelsetabeller.farderaventyr[53].subval[0][1][8].beskrivninghakvaldbas="\+2 Utstrålning. ";
	
	handelsetabeller.farderaventyr[53].subval.push([[]]);
	handelsetabeller.farderaventyr[53].subval[1][0][0] = {};
	handelsetabeller.farderaventyr[53].subval[1][0][0].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[1][0][0].vald = 0;
	handelsetabeller.farderaventyr[53].subval[1][0][0].antalsubval=1;
	
	handelsetabeller.farderaventyr[53].subval[1].push([]);
	handelsetabeller.farderaventyr[53].subval[1][1][0] = {};
	handelsetabeller.farderaventyr[53].subval[1][1][0].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[1][1][0].vald = 0;
	handelsetabeller.farderaventyr[53].subval[1][1][0] = {};
	handelsetabeller.farderaventyr[53].subval[1][1][0].lattlardkunskapsfardigheter=1;
	handelsetabeller.farderaventyr[53].subval[1][1][0].rubrik="Lättlärd i valfri Kunskapsfärdighet.";
	handelsetabeller.farderaventyr[53].subval[1][1][0].beskrivninghakvaldbas="Lättlärd i valfri Kunskapsfärdighet.";
	
	handelsetabeller.farderaventyr[53].subval[1].push([]);
	handelsetabeller.farderaventyr[53].subval[1][2][0] = {};
	handelsetabeller.farderaventyr[53].subval[1][2][0].valdasub = [];
	handelsetabeller.farderaventyr[53].subval[1][2][0].vald = 0;
	handelsetabeller.farderaventyr[53].subval[1][2][0] = {};
	handelsetabeller.farderaventyr[53].subval[1][2][0].lattlardvildmarksfardigheter=1;
	handelsetabeller.farderaventyr[53].subval[1][2][0].rubrik="Lättlärd i valfri Vildmarksfärdighet.";
	handelsetabeller.farderaventyr[53].subval[1][2][0].beskrivninghakvaldbas="Lättlärd i valfri Vildmarksfärdighet.";
	
	
	handelsetabeller.farderaventyr[54] = {}; 
	handelsetabeller.farderaventyr[54].subval = [[[]]]; 
	handelsetabeller.farderaventyr[54].vald = 0; 
	handelsetabeller.farderaventyr[54].rubrik = "Nattsyn"
	handelsetabeller.farderaventyr[54].beskrivning = "Personen ser mycket bra under ljussvaga förhållanden och kan navigera sig fram i mörker (dock inte totalt mörker) utan svårigheter."
	handelsetabeller.farderaventyr[54].beskrivninghak = "\+3 i Uppfattning. Rollpersonen får kännetecknet Nattsyn 4T6"
	handelsetabeller.farderaventyr[54].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[54].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[54].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[54].subval[0][0][0].nattsyn = {};
	handelsetabeller.farderaventyr[54].subval[0][0][0].nattsyn.enheter = 3; 
	handelsetabeller.farderaventyr[54].subval[0][0][0].formaga="Ser mycket bra under ljussvaga förhållanden."
	
	handelsetabeller.farderaventyr[55] = {}; 
	handelsetabeller.farderaventyr[55].subval = [[[]]]; 
	handelsetabeller.farderaventyr[55].vald = 0; 
	handelsetabeller.farderaventyr[55].rubrik = "Omvändande händelse"
	handelsetabeller.farderaventyr[55].beskrivning = "Rollpersonen har varit med om en omvändande händelse och få som kände rollpersonen förr skulle ens tro att detta är samme person. En pacifist har blivit våldsam, en lögnare hederlig, en kysk blivit vilt sexuellt utlevande."
	handelsetabeller.farderaventyr[55].beskrivninghak = "Rollpersonen får välja ett primärt karaktärsdrag som denne tidigare hade och sedan förklara hur detta försvann och ersattes med det nya. 4 valfria enheter som ska placeras på färdigheter knutna till det gamla karaktärsdraget"
	handelsetabeller.farderaventyr[55].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[55].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[55].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[55].subval[0][0][0].karaktarsdrag="Har varit med om en omvändande händelse som bytte dennes primära karaktärsdrag mot dess motsats." 
	handelsetabeller.farderaventyr[55].subval[0][0][0].valfriaenheter=4;
	
	handelsetabeller.farderaventyr[56] = {}; 
	handelsetabeller.farderaventyr[56].subval = [[[]]]; 
	handelsetabeller.farderaventyr[56].vald = 0; 
	handelsetabeller.farderaventyr[56].rubrik = "Onaturlig storm"
	handelsetabeller.farderaventyr[56].beskrivning = "Rollpersonen har hamnat mitt i ett oväder som var laddat av magisk kraft och slet sönder barriärerna mellan världar och fjärran sfärer. När sedan rollpersonen kom ut från stormen har magisk kraft haft mycket svårt att bita på denne."
	handelsetabeller.farderaventyr[56].beskrivninghak = "Inga mystiska verk kan ha rollpersonen som direkt mål, oavsett magnitud. Dock påverkas rollpersonen indirekt av verk som lagts på ett område. Svårlärd i alla Mystikfärdigheter"
	handelsetabeller.farderaventyr[56].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[56].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[56].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[56].subval[0][0][0] = {};
	handelsetabeller.farderaventyr[56].subval[0][0][0].lattlardallamystikfardigheter=-1;
	handelsetabeller.farderaventyr[56].subval[0][0][0].ovrigt="Har varit med om en onaturlig storm."
	handelsetabeller.farderaventyr[56].subval[0][0][0].formaga="Inga mystiska verk kan ha rollpersonen som direkt mål, oavsett magnitud."
	
	handelsetabeller.farderaventyr[57] = {}; 
	handelsetabeller.farderaventyr[57].subval = [[[]]]; 
	handelsetabeller.farderaventyr[57].vald = 0; 
	handelsetabeller.farderaventyr[57].rubrik = "Ordnar sin egen mat"
	handelsetabeller.farderaventyr[57].beskrivning = "Rollpersonen har mer än en gång tvingats ordna sin egen mat och har blivit något av en expert att hitta ätbara saker och tillaga dessa på bästa möjliga sätt."
	handelsetabeller.farderaventyr[57].beskrivninghak = "Lättlärd i Naturlära och Jakt \& fiske. Hantverket Kock 4T6"
	handelsetabeller.farderaventyr[57].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[57].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[57].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[57].subval[0][0][0].naturlara = {};
	handelsetabeller.farderaventyr[57].subval[0][0][0].naturlara.lattlard=1; 
	handelsetabeller.farderaventyr[57].subval[0][0][0].jaktfiske = {};
	handelsetabeller.farderaventyr[57].subval[0][0][0].jaktfiske.lattlard=1; 
	handelsetabeller.farderaventyr[57].subval[0][0][0].kock = {};
	handelsetabeller.farderaventyr[57].subval[0][0][0].kock.enheter = 3; 

	handelsetabeller.farderaventyr[58] = {}; 
	handelsetabeller.farderaventyr[58].subval = [[[]]]; 
	handelsetabeller.farderaventyr[58].vald = 0; 
	handelsetabeller.farderaventyr[58].rubrik = "Orädd"
	handelsetabeller.farderaventyr[58].beskrivning = "Rollpersonen är nästintill totalt orädd. Denne kan stirra skräcken i vitögat och skratta åt den. Detta kanske beror på dumdristig naivitet, extrem viljestyrka eller ren och skär dödsdrift."
	handelsetabeller.farderaventyr[58].beskrivninghak = "\+3T6 Självkontroll vid Skräck"
	handelsetabeller.farderaventyr[58].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[58].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[58].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[58].subval[0][0][0].sjalvkontroll = {};
	handelsetabeller.farderaventyr[58].subval[0][0][0].sjalvkontroll.egenskap = "\+3T6 vid Skräck"; 

	handelsetabeller.farderaventyr[59] = {}; 
	handelsetabeller.farderaventyr[59].subval = [[[]]]; 
	handelsetabeller.farderaventyr[59].vald = 0; 
	handelsetabeller.farderaventyr[59].rubrik = "Plundringsgods"
	handelsetabeller.farderaventyr[59].beskrivning = "Rollpersonen har kommit över plundringsgods genom att stjäla det av plundrarna på en av sina många resor. Dock var godset inte till någon användning för rollpersonen så denne har istället fått fokusera på att få grejerna sålda."
	handelsetabeller.farderaventyr[59].beskrivninghak = "Lättlärd i Smyga. Expertisen Kränga 4T6"
	handelsetabeller.farderaventyr[59].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[59].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[59].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[59].subval[0][0][0].smyga = {};
	handelsetabeller.farderaventyr[59].subval[0][0][0].smyga.lattlard=1; 
	handelsetabeller.farderaventyr[59].subval[0][0][0].kranga = {};
	handelsetabeller.farderaventyr[59].subval[0][0][0].kranga.enheter = 3; 
	handelsetabeller.farderaventyr[59].subval[0][0][0].ovrigt="Har kommit över plundringsgods."
	
	handelsetabeller.farderaventyr[60] = {}; 
	handelsetabeller.farderaventyr[60].subval = [[[]]]; 
	handelsetabeller.farderaventyr[60].vald = 0; 
	handelsetabeller.farderaventyr[60].rubrik = "Publikfriare"
	handelsetabeller.farderaventyr[60].beskrivning = "Personen har under en tid livnärt sig med att spela musik, berätta sagor och gyckla. Att stå på en scen och få ta emot publikens jubel är bland det bästa denne vet."
	handelsetabeller.farderaventyr[60].beskrivninghak = "3 enheter Sociala färdigheter och rollpersonen återfår dessutom 1 Fokus varje gång denne uppträder inför publik"
	handelsetabeller.farderaventyr[60].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[60].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[60].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[60].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.farderaventyr[60].subval[0][0][0].formaga="Återfår 1 Fokus varje gång denne uppträder inför publik."
	handelsetabeller.farderaventyr[60].subval[0][0][0].ovrigt="Har under en tid livnärt sig med att spela musik, berätta sagor och gyckla."
	
	handelsetabeller.farderaventyr[61] = {}; 
	handelsetabeller.farderaventyr[61].subval = [[[]]]; 
	handelsetabeller.farderaventyr[61].vald = 0; 
	handelsetabeller.farderaventyr[61].rubrik = "På fiendemark"
	handelsetabeller.farderaventyr[61].beskrivning = "Rollpersonen har under en längre tid vistats på fiendemark. Detta kan vara i form av en expedition ut i det otyglade Kamor, som spion, legosoldat eller på en långvarig kampanj. Rollpersonen lärde sig en del om den främmande kulturen."
	handelsetabeller.farderaventyr[61].beskrivninghak = "\+2 Visdom. 4 enheter Kunskapsfärdigheter. 2 Språkenheter"
	handelsetabeller.farderaventyr[61].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[61].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[61].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[61].subval[0][0][0].kunskapsfardigheterenheter = 4; 
	handelsetabeller.farderaventyr[61].subval[0][0][0].visdom = {};
	handelsetabeller.farderaventyr[61].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.farderaventyr[61].subval[0][0][0].ovrigt="Har under en längre tid vistats på fiendemark."

	handelsetabeller.farderaventyr[62] = {}; 
	handelsetabeller.farderaventyr[62].subval = [[[]]]; 
	handelsetabeller.farderaventyr[62].vald = 0; 
	handelsetabeller.farderaventyr[62].rubrik = "Resa över Mundana"
	handelsetabeller.farderaventyr[62].beskrivning = "Rollpersonen har företagit en resa som fört denne till ett flertal av Mundanas länder. Resan har mest troligt tagit några års tid och under denna tid har rollpersonen hunnit uppleva främmande kulturer, spännande möten och dramatiska äventyr. "
	handelsetabeller.farderaventyr[62].beskrivninghak = "Lättlärd i Kulturkännedom. 3 enheter Vildmarksfärdigheter, 3 enheter Kunskapsfärdigheter. Rollpersonen har dock dragit på sig en underlig sjukdom eller blivit skadad i ett överfall eller olycka. Välj: –2 Styrka, Tålighet eller Rörlighet. "
	handelsetabeller.farderaventyr[62].beskrivninghakvaldbas = "Lättlärd i Kulturkännedom. 3 enheter Vildmarksfärdigheter, 3 enheter Kunskapsfärdigheter. "
	handelsetabeller.farderaventyr[62].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[62].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[62].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[62].subval[0][0][0].kulturkannedom = {};
	handelsetabeller.farderaventyr[62].subval[0][0][0].kulturkannedom.lattlard=1;
	handelsetabeller.farderaventyr[62].subval[0][0][0].vildmarksfardigheterenheter=3;
	handelsetabeller.farderaventyr[62].subval[0][0][0].kunskapsfardigheterenheter=3;
	handelsetabeller.farderaventyr[62].subval[0][0][0].ovrigt="Har rest över Mundana."
	
	handelsetabeller.farderaventyr[62].subval[0].push([]); 
	handelsetabeller.farderaventyr[62].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[62].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[62].subval[0][1][0].vald = 0; 
	
	handelsetabeller.farderaventyr[62].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.farderaventyr[62].subval[0][1][1] = {}; 
	handelsetabeller.farderaventyr[62].subval[0][1][1].valdasub = []; 
	handelsetabeller.farderaventyr[62].subval[0][1][1].vald = 0; 
	handelsetabeller.farderaventyr[62].subval[0][1][1].styrka = {};
	handelsetabeller.farderaventyr[62].subval[0][1][1].styrka.varde=-2;
	handelsetabeller.farderaventyr[62].subval[0][1][1].ovrigt="Har dragit på sig en underlig sjukdom eller blivit skadad i ett överfall eller olycka, vilket sänkt dennes Styrka.";
	handelsetabeller.farderaventyr[62].subval[0][1][1].beskrivningvaldbas="Rollpersonen har dock dragit på sig en underlig sjukdom eller blivit skadad i ett överfall eller olycka, vilket sänkt dennes Styrka.";
	handelsetabeller.farderaventyr[62].subval[0][1][1].beskrivninghakvaldbas="-2 Styrka.";
	
	
	handelsetabeller.farderaventyr[62].subval[0][1][2] = {}; 
	handelsetabeller.farderaventyr[62].subval[0][1][2].valdasub = []; 
	handelsetabeller.farderaventyr[62].subval[0][1][2].vald = 0; 
	handelsetabeller.farderaventyr[62].subval[0][1][2].talighet = {};
	handelsetabeller.farderaventyr[62].subval[0][1][2].talighet.varde=-2;
	handelsetabeller.farderaventyr[62].subval[0][1][2].ovrigt="Har dragit på sig en underlig sjukdom eller blivit skadad i ett överfall eller olycka, vilket sänkt dennes Tålighet.";
	handelsetabeller.farderaventyr[62].subval[0][1][2].beskrivningvaldbas="Rollpersonen har dock dragit på sig en underlig sjukdom eller blivit skadad i ett överfall eller olycka, vilket sänkt dennes Tålighet.";
	handelsetabeller.farderaventyr[62].subval[0][1][2].beskrivninghakvaldbas="-2 Tålighet.";
	
	
	handelsetabeller.farderaventyr[62].subval[0][1][3] = {}; 
	handelsetabeller.farderaventyr[62].subval[0][1][3].valdasub = []; 
	handelsetabeller.farderaventyr[62].subval[0][1][3].vald = 0; 
	handelsetabeller.farderaventyr[62].subval[0][1][3].rorlighet = {};
	handelsetabeller.farderaventyr[62].subval[0][1][3].rorlighet.varde=-2;
	handelsetabeller.farderaventyr[62].subval[0][1][3].ovrigt="Har dragit på sig en underlig sjukdom eller blivit skadad i ett överfall eller olycka, vilket sänkt dennes Rörlighet.";
	handelsetabeller.farderaventyr[62].subval[0][1][3].beskrivningvaldbas="Rollpersonen har dock dragit på sig en underlig sjukdom eller blivit skadad i ett överfall eller olycka, vilket sänkt dennes Rörlighet.";
	handelsetabeller.farderaventyr[62].subval[0][1][3].beskrivninghakvaldbas="-2 Rörlighet.";
	
	
	handelsetabeller.farderaventyr[63] = {}; 
	handelsetabeller.farderaventyr[63].subval = [[[]]]; 
	handelsetabeller.farderaventyr[63].vald = 0; 
	handelsetabeller.farderaventyr[63].rubrik = "Riddjur med ekipage"
	handelsetabeller.farderaventyr[63].beskrivning = "Rollpersonen äger av någon anledning en fyrhjulig vagn och två starka hästar. Dessa är trogna rollpersonen och har följt med på de flesta av dennes senare äventyr."
	handelsetabeller.farderaventyr[63].beskrivninghak = "Lättlärd i Köra vagn. 2 enheter Vildmarksfärdigheter"
	handelsetabeller.farderaventyr[63].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[63].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[63].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[63].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.farderaventyr[63].subval[0][0][0].koravagn = {};
	handelsetabeller.farderaventyr[63].subval[0][0][0].koravagn.lattlard=1; 
	handelsetabeller.farderaventyr[63].subval[0][0][0].resurs="Fyrhjulig vagn med två starka hästar."

	handelsetabeller.farderaventyr[64] = {}; 
	handelsetabeller.farderaventyr[64].subval = [[[]]]; 
	handelsetabeller.farderaventyr[64].vald = 0; 
	handelsetabeller.farderaventyr[64].rubrik = "Rikligt belönad"
	handelsetabeller.farderaventyr[64].beskrivning = "Rollpersonen har blivit rikligt belönad men mycket av pengarna har spenderats på tavernor och spelhålor."
	handelsetabeller.farderaventyr[64].beskrivninghak = "2 enheter Sociala färdigheter. Lättlärd i Spel \& dobbel. En smärre del återstår av belöningen och startbelopp ökar med 2T6×10 silver"
	handelsetabeller.farderaventyr[64].beskrivninghakvaldbas = "2 enheter Sociala färdigheter. Lättlärd i Spel \& dobbel. "
	handelsetabeller.farderaventyr[64].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[64].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[64].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[64].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.farderaventyr[64].subval[0][0][0].speldobbel = {};
	handelsetabeller.farderaventyr[64].subval[0][0][0].speldobbel.lattlard=1; 
	handelsetabeller.farderaventyr[64].subval[0][0][0].ovrigt="Har blivit rikligt belönad men mycket av pengarna har spenderats på tavernor."
	handelsetabeller.farderaventyr[64].subval[0][0][0].pengarslag = "2T6x10" 
	handelsetabeller.farderaventyr[64].subval[0][0][0].beskrivninghakvaldbas = "En smärre del återstår av belöningen och startbelopp ökar med pengar_resultat silver."; 
	

	handelsetabeller.farderaventyr[65] = {}; 
	handelsetabeller.farderaventyr[65].subval = [[[]]]; 
	handelsetabeller.farderaventyr[65].vald = 0; 
	handelsetabeller.farderaventyr[65].rubrik = "Rätt tid på rätt plats"
	handelsetabeller.farderaventyr[65].beskrivning = "Rollpersonen har varit på rätt tid vid rätt plats. Välj ett av följande alternativ. Hittat skatt, Upptäckt sammansvärjning eller Utfört hjältedåd."
	handelsetabeller.farderaventyr[65].beskrivningvaldbas = ""
	handelsetabeller.farderaventyr[65].beskrivninghak = "Hittat skatt: 2 enheter Vildmarksfärdigheter. 1T6×500 silver. Upptäckt sammansvärjning: \+1 Uppfattning, 2 enheter Sociala färdigheter. Utfört hjältedåd: 4 enheter Stridsfärdigheter. Slå två gånger på bakgrundstabellen och välj en som visar en person som rollpersonen räddat."
	handelsetabeller.farderaventyr[65].beskrivninghakvaldbas = ""
	
	handelsetabeller.farderaventyr[65].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[65].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[65].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[65].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	
	handelsetabeller.farderaventyr[65].subval.push([[]]); 
	handelsetabeller.farderaventyr[65].subval[1][0][0] = {}; 
	handelsetabeller.farderaventyr[65].subval[1][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[65].subval[1][0][0].vald = 0; 
	handelsetabeller.farderaventyr[65].subval[1][0][0].antalsubval = 1; 
	
	handelsetabeller.farderaventyr[65].subval[1].push([]); 
	handelsetabeller.farderaventyr[65].subval[1][1][0] = {}; 
	handelsetabeller.farderaventyr[65].subval[1][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[65].subval[1][1][0].vald = 0; 
	handelsetabeller.farderaventyr[65].subval[1][1][0].rubrik="Hittat skatt"
	handelsetabeller.farderaventyr[65].subval[1][1][0].pengarslag="1T6x500";
	handelsetabeller.farderaventyr[65].subval[1][1][0].ovrigt="Har hittat en skatt."
	handelsetabeller.farderaventyr[65].subval[1][1][0].beskrivningvaldbas="Rollpersonen har varit på rätt tid vid rätt plats och hittat en skatt."
	handelsetabeller.farderaventyr[65].subval[1][1][0].beskrivninghakvaldbas="2 enheter Vildmarksfärdigheter. pengar_resultat silver."
	
	handelsetabeller.farderaventyr[65].subval[1].push([]); 
	handelsetabeller.farderaventyr[65].subval[1][2][0] = {}; 
	handelsetabeller.farderaventyr[65].subval[1][2][0].valdasub = []; 
	handelsetabeller.farderaventyr[65].subval[1][2][0].vald = 0; 
	handelsetabeller.farderaventyr[65].subval[1][2][0].rubrik="Upptäckt sammansvärjning"
	handelsetabeller.farderaventyr[65].subval[1][2][0].ovrigt="Har upptäckt en sammansvärjning"
	handelsetabeller.farderaventyr[65].subval[1][2][0].uppfattning = {};
	handelsetabeller.farderaventyr[65].subval[1][2][0].uppfattning.varde=1;
	handelsetabeller.farderaventyr[65].subval[1][2][0].socialafardigheterenheter=2;
	handelsetabeller.farderaventyr[65].subval[1][2][0].beskrivningvaldbas="Rollpersonen har varit på rätt tid vid rätt plats och upptäckt en sammansvärjning."
	handelsetabeller.farderaventyr[65].subval[1][2][0].beskrivninghakvaldbas="\+1 Uppfattning, 2 enheter Sociala färdigheter."
	
	
	handelsetabeller.farderaventyr[65].subval[1].push([]); 
	handelsetabeller.farderaventyr[65].subval[1][3][0] = {}; 
	handelsetabeller.farderaventyr[65].subval[1][3][0].valdasub = []; 
	handelsetabeller.farderaventyr[65].subval[1][3][0].vald = 0; 
	handelsetabeller.farderaventyr[65].subval[1][3][0].rubrik="Utfört hjältedåd"
	handelsetabeller.farderaventyr[65].subval[1][3][0].stridsfardigheterenheter=4;
	handelsetabeller.farderaventyr[65].subval[1][3][0].kontaktbas="Har räddat kontakt1_obestamd i ett hjältedåd."
	handelsetabeller.farderaventyr[65].subval[1][3][0].kontaktenhetbool=[0];
	handelsetabeller.farderaventyr[65].subval[1][3][0].beskrivningvaldbas="Rollpersonen har varit på rätt tid vid rätt plats och räddat kontakt1_obestamd."
	handelsetabeller.farderaventyr[65].subval[1][3][0].beskrivninghakvaldbas="4 enheter Stridsfärdigheter."
	
	handelsetabeller.farderaventyr[66] = {}; 
	handelsetabeller.farderaventyr[66].subval = [[[]]]; 
	handelsetabeller.farderaventyr[66].vald = 0; 
	handelsetabeller.farderaventyr[66].rubrik = "Sedd som hjälte"
	handelsetabeller.farderaventyr[66].beskrivning = "Rollpersonen är sedd som hjälte i trakten och är mycket uppskattad av de flesta, de lite mer avundsjuka undantagna."
	handelsetabeller.farderaventyr[66].beskrivninghak = "\+2 Utstrålning. 2 enheter Sociala färdigheter"
	handelsetabeller.farderaventyr[66].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[66].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[66].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[66].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.farderaventyr[66].subval[0][0][0].utstralning = {};
	handelsetabeller.farderaventyr[66].subval[0][0][0].utstralning.varde =2; 
	handelsetabeller.farderaventyr[66].subval[0][0][0].ovrigt="Är sedd som hjälte i trakten."
	
	handelsetabeller.farderaventyr[67] = {}; 
	handelsetabeller.farderaventyr[67].subval = [[[]]]; 
	handelsetabeller.farderaventyr[67].vald = 0; 
	handelsetabeller.farderaventyr[67].rubrik = "Skarpsynt"
	handelsetabeller.farderaventyr[67].beskrivning = "Rollpersonen har mycket skarp blick."
	handelsetabeller.farderaventyr[67].beskrivninghak = "\+1T6 Uppfattning. Lättlärd i Genomsöka"
	handelsetabeller.farderaventyr[67].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[67].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[67].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[67].subval[0][0][0].genomsoka = {};
	handelsetabeller.farderaventyr[67].subval[0][0][0].genomsoka.lattlard=1; 
	handelsetabeller.farderaventyr[67].subval[0][0][0].uppfattning = {};
	handelsetabeller.farderaventyr[67].subval[0][0][0].uppfattning.varde = 4; 

	handelsetabeller.farderaventyr[68] = {}; 
	handelsetabeller.farderaventyr[68].subval = [[[]]]; 
	handelsetabeller.farderaventyr[68].vald = 0; 
	handelsetabeller.farderaventyr[68].rubrik = "Skicklig hantverkare"
	handelsetabeller.farderaventyr[68].beskrivning = "Rollpersonen har en fallenhet för hantverk och tycker om att arbeta med händerna."
	handelsetabeller.farderaventyr[68].beskrivninghak = "4 poäng Hantverk"
	handelsetabeller.farderaventyr[68].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[68].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[68].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[68].subval[0][0][0].hantverkpoang = 4; 

	handelsetabeller.farderaventyr[69] = {}; 
	handelsetabeller.farderaventyr[69].subval = [[[]]]; 
	handelsetabeller.farderaventyr[69].vald = 0; 
	handelsetabeller.farderaventyr[69].rubrik = "Skicklig simmare"
	handelsetabeller.farderaventyr[69].beskrivning = "Personen är som en fisk i vattnet och kan simma snabbt och långt. Dessutom har personen ökat upp sin fysik."
	handelsetabeller.farderaventyr[69].beskrivninghak = "\+1 Styrka, \+2 Tålighet. Lättlärd i Simma"
	handelsetabeller.farderaventyr[69].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[69].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[69].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[69].subval[0][0][0].simma = {};
	handelsetabeller.farderaventyr[69].subval[0][0][0].simma.lattlard=1; 
	handelsetabeller.farderaventyr[69].subval[0][0][0].styrka = {};
	handelsetabeller.farderaventyr[69].subval[0][0][0].styrka.varde =1; 
	handelsetabeller.farderaventyr[69].subval[0][0][0].talighet = {};
	handelsetabeller.farderaventyr[69].subval[0][0][0].talighet.varde =2; 

	handelsetabeller.farderaventyr[70] = {}; 
	handelsetabeller.farderaventyr[70].subval = [[[]]]; 
	handelsetabeller.farderaventyr[70].vald = 0; 
	handelsetabeller.farderaventyr[70].rubrik = "Räddat ädling"
	handelsetabeller.farderaventyr[70].beskrivning = "Rollpersonen har under en av sina färder räddat en ung ädling från stor fara. Rollpersonen har fått en riklig belöning och levt ett liv i lyx en tid."
	handelsetabeller.farderaventyr[70].beskrivninghak = "Lättlärd i Hovliv. 2 enheter Sociala färdigheter. Startbelopp ökar med 3T6×10 silver"
	handelsetabeller.farderaventyr[70].beskrivninghakvaldbas = "Lättlärd i Hovliv. 2 enheter Sociala färdigheter. "
	
	handelsetabeller.farderaventyr[70].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[70].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[70].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[70].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.farderaventyr[70].subval[0][0][0].hovliv = {};
	handelsetabeller.farderaventyr[70].subval[0][0][0].hovliv.lattlard=1; 
	handelsetabeller.farderaventyr[70].subval[0][0][0].pengarslag ="3T6x10"; 
	handelsetabeller.farderaventyr[70].subval[0][0][0].beskrivninghakvaldbas = "Startbelopp ökar med pengar_resultat silver.";

	handelsetabeller.farderaventyr[71] = {}; 
	handelsetabeller.farderaventyr[71].subval = [[[]]]; 
	handelsetabeller.farderaventyr[71].vald = 0; 
	handelsetabeller.farderaventyr[71].rubrik = "Sans och vett"
	handelsetabeller.farderaventyr[71].beskrivning = "Rollpersonen har under sina resor blivit allmänbildad och lärt sig både ett och annat."
	handelsetabeller.farderaventyr[71].beskrivninghak = "\+1T6 Visdom. 3 valfria enheter"
	handelsetabeller.farderaventyr[71].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[71].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[71].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[71].subval[0][0][0].valfriaenheter=3; 
	handelsetabeller.farderaventyr[71].subval[0][0][0].visdom = {};
	handelsetabeller.farderaventyr[71].subval[0][0][0].visdom.varde = 4; 

	handelsetabeller.farderaventyr[72] = {}; 
	handelsetabeller.farderaventyr[72].subval = [[[]]]; 
	handelsetabeller.farderaventyr[72].vald = 0; 
	handelsetabeller.farderaventyr[72].rubrik = "Sjökort"
	handelsetabeller.farderaventyr[72].beskrivning = "Rollpersonen har tillbringat en tid på havet och har kommit över en samling sjökort som denne lärt sig använda. Dessa används för att navigera i ett valt område."
	handelsetabeller.farderaventyr[72].beskrivninghak = "\+2 Visdom. Lättlärd i Navigation och Sjömannaskap. Rollpersonen får även bonus \+1T6 om denne kan använda sjökorten för att planera havsresor och liknande"
	handelsetabeller.farderaventyr[72].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[72].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[72].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[72].subval[0][0][0].navigation = {};
	handelsetabeller.farderaventyr[72].subval[0][0][0].navigation.lattlard=1; 
	handelsetabeller.farderaventyr[72].subval[0][0][0].sjomannaskap = {};
	handelsetabeller.farderaventyr[72].subval[0][0][0].sjomannaskap.lattlard=1; 
	handelsetabeller.farderaventyr[72].subval[0][0][0].visdom = {};
	handelsetabeller.farderaventyr[72].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.farderaventyr[72].subval[0][0][0].resurs="Sjökort som ger bonus \+1T6 för att planera havsresor."
	
	handelsetabeller.farderaventyr[73] = {}; 
	handelsetabeller.farderaventyr[73].subval = [[[]]]; 
	handelsetabeller.farderaventyr[73].vald = 0; 
	handelsetabeller.farderaventyr[73].rubrik = "Skicklig jägare"
	handelsetabeller.farderaventyr[73].beskrivning = "Rollpersonen är en skicklig jägare och vet precis var man finner småvilt, hur man plundrar bon på ägg eller bara hittar ätbara rötter."
	handelsetabeller.farderaventyr[73].beskrivninghak = "\+1 Uppfattning. Lättlärd i Genomsöka och Jakt \& fiske"
	handelsetabeller.farderaventyr[73].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[73].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[73].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[73].subval[0][0][0].genomsoka = {};
	handelsetabeller.farderaventyr[73].subval[0][0][0].genomsoka.lattlard=1; 
	handelsetabeller.farderaventyr[73].subval[0][0][0].jaktfiske = {};
	handelsetabeller.farderaventyr[73].subval[0][0][0].jaktfiske.lattlard=1; 
	handelsetabeller.farderaventyr[73].subval[0][0][0].uppfattning = {};
	handelsetabeller.farderaventyr[73].subval[0][0][0].uppfattning.varde =1; 

	handelsetabeller.farderaventyr[74] = {}; 
	handelsetabeller.farderaventyr[74].subval = [[[]]]; 
	handelsetabeller.farderaventyr[74].vald = 0; 
	handelsetabeller.farderaventyr[74].rubrik = "Skrockfull"
	handelsetabeller.farderaventyr[74].beskrivning = "Rollpersonen har sett mycket och blivit skrockfull efter alla sina färder. Denne tenderar att be vid vägkors och kapell, korsa sig när någon märker den mörkes namn och passa sig för platser som har onda omen över sig."
	handelsetabeller.farderaventyr[74].beskrivninghak = "\+2 Uppfattning. Lättlärd i Ockultism"
	handelsetabeller.farderaventyr[74].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[74].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[74].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[74].subval[0][0][0].ockultism = {};
	handelsetabeller.farderaventyr[74].subval[0][0][0].ockultism.lattlard=1; 
	handelsetabeller.farderaventyr[74].subval[0][0][0].uppfattning = {};
	handelsetabeller.farderaventyr[74].subval[0][0][0].uppfattning.varde =2; 
	handelsetabeller.farderaventyr[74].subval[0][0][0].ovrigt="Är skrockfull."

	handelsetabeller.farderaventyr[75] = {}; 
	handelsetabeller.farderaventyr[75].subval = [[[]]]; 
	handelsetabeller.farderaventyr[75].vald = 0; 
	handelsetabeller.farderaventyr[75].rubrik = "Skuld till väsen"
	handelsetabeller.farderaventyr[75].beskrivning = "Personen står i skuld till ett väsen som denne mött under sina resor. Detta kan vara en demon, en sagitaur, ett skogsrå eller något liknande."
	handelsetabeller.farderaventyr[75].beskrivninghak = "2 enheter Kunskapsfärdigheter, 2 enheter Vildmarksfärdigheter"
	handelsetabeller.farderaventyr[75].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[75].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[75].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[75].subval[0][0][0].kunskapsfardigheterenheter = 2; 
	handelsetabeller.farderaventyr[75].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.farderaventyr[75].subval[0][0][0].ovrigt="Står i skuld till ett väsen."
	
	handelsetabeller.farderaventyr[76] = {}; 
	handelsetabeller.farderaventyr[76].subval = [[[]]]; 
	handelsetabeller.farderaventyr[76].vald = 0; 
	handelsetabeller.farderaventyr[76].rubrik = "Skumma krogar"
	handelsetabeller.farderaventyr[76].beskrivning = "Rollpersonen känner väl till skumma krogar och är antingen där för att släcka sin törst eller leta arbete. Det dricks en hel del och blir mycket spelande."
	handelsetabeller.farderaventyr[76].beskrivninghak = "Lättlärd i Slagsmål och Spel \& dobbel. Expertisen Supa 4T6"
	handelsetabeller.farderaventyr[76].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[76].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[76].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[76].subval[0][0][0].slagsmal = {};
	handelsetabeller.farderaventyr[76].subval[0][0][0].slagsmal.lattlard=1; 
	handelsetabeller.farderaventyr[76].subval[0][0][0].speldobbel = {};
	handelsetabeller.farderaventyr[76].subval[0][0][0].speldobbel.lattlard=1; 
	handelsetabeller.farderaventyr[76].subval[0][0][0].supa = {};
	handelsetabeller.farderaventyr[76].subval[0][0][0].supa.enheter = 3; 
	handelsetabeller.farderaventyr[76].subval[0][0][0].resurs="Känner till skumma krogar."

	handelsetabeller.farderaventyr[77] = {}; 
	handelsetabeller.farderaventyr[77].subval = [[[]]]; 
	handelsetabeller.farderaventyr[77].vald = 0; 
	handelsetabeller.farderaventyr[77].rubrik = "Snabb"
	handelsetabeller.farderaventyr[77].beskrivning = "Personen rör sig snabbt och smidigt."
	handelsetabeller.farderaventyr[77].beskrivninghak = "Lättlärd i Hoppa. 2 enheter Rörelsefärdigheter. \+1T6 Förflyttning"
	handelsetabeller.farderaventyr[77].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[77].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[77].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[77].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.farderaventyr[77].subval[0][0][0].hoppa = {};
	handelsetabeller.farderaventyr[77].subval[0][0][0].hoppa.lattlard=1; 
	handelsetabeller.farderaventyr[77].subval[0][0][0].forflyttning = {};
	handelsetabeller.farderaventyr[77].subval[0][0][0].forflyttning.bonus = 4; 

	handelsetabeller.farderaventyr[78] = {}; 
	handelsetabeller.farderaventyr[78].subval = [[[]]]; 
	handelsetabeller.farderaventyr[78].vald = 0; 
	handelsetabeller.farderaventyr[78].rubrik = "Snabb och smidig"
	handelsetabeller.farderaventyr[78].beskrivning = "Rollpersonen är snabb, smidig, gänglig och har en akrobatisk och slank kropp."
	handelsetabeller.farderaventyr[78].beskrivninghak = "–2 Styrka, \+2 Rörlighet, \+2 Reaktion, \+2 Förflyttning"
	handelsetabeller.farderaventyr[78].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[78].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[78].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[78].subval[0][0][0].styrka = {};
	handelsetabeller.farderaventyr[78].subval[0][0][0].styrka.varde =-2; 
	handelsetabeller.farderaventyr[78].subval[0][0][0].rorlighet = {};
	handelsetabeller.farderaventyr[78].subval[0][0][0].rorlighet.varde =2; 
	handelsetabeller.farderaventyr[78].subval[0][0][0].forflyttning = {};
	handelsetabeller.farderaventyr[78].subval[0][0][0].forflyttning.bonus =2; 
	handelsetabeller.farderaventyr[78].subval[0][0][0].reaktion = {};
	handelsetabeller.farderaventyr[78].subval[0][0][0].reaktion.bonus =2; 

	handelsetabeller.farderaventyr[79] = {}; 
	handelsetabeller.farderaventyr[79].subval = [[[]]]; 
	handelsetabeller.farderaventyr[79].vald = 0; 
	handelsetabeller.farderaventyr[79].rubrik = "Sover djupt"
	handelsetabeller.farderaventyr[79].beskrivning = "Rollpersonen sover mycket djupt och har en förmåga att kunna somna var som helst och är mycket svår att väcka. Det kräver att man skakar denne, skriker högt eller ger ordentligt med örfilar eller kastar en hink vatten över denne. Fördelen med denna djupa sömn är att rollpersonen vaknar utvilad och pigg även efter de mest miserabla förhållanden."
	handelsetabeller.farderaventyr[79].beskrivninghak = "Rollpersonen blir endast väckt av någon om denne aktivt försöker väcka rollpersonen, och trots detta får rollpersonen tidigast agera 3 stridsrundor senare. Den djupa sömnen gör dock att rollpersonen får igen ytterligare 2 Fokus i början av varje spelmöte"
	handelsetabeller.farderaventyr[79].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[79].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[79].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[79].subval[0][0][0].formaga="Sover mycket djupt." + "\n" + "Får igen ytterligare 2 Fokus i början av varje spelmöte."
	
	handelsetabeller.farderaventyr[80] = {}; 
	handelsetabeller.farderaventyr[80].subval = [[[]]]; 
	handelsetabeller.farderaventyr[80].vald = 0; 
	handelsetabeller.farderaventyr[80].rubrik = "Splittrat ett äktenskap"
	handelsetabeller.farderaventyr[80].beskrivning = "Rollpersonen har på ett eller annat sätt lyckats splittra ett äktenskap. Det kan vara på grund av otrohet, att denne dragit upp massor med hemligheter till ytan eller att rollpersonen bara sagt olämpliga saker under själva vigseln som fått allt att falla samman. Båda familjerna är ogillande inställd till rollpersonen och denne har tvingats hålla sig undan från dem."
	handelsetabeller.farderaventyr[80].beskrivninghak = "2 enheter Rörelsefärdigheter, 2 enheter Vildmarksfärdigheter"
	handelsetabeller.farderaventyr[80].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[80].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[80].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[80].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.farderaventyr[80].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.farderaventyr[80].subval[0][0][0].ovrigt="Har splittrat ett äktenskap."
	
	handelsetabeller.farderaventyr[81] = {}; 
	handelsetabeller.farderaventyr[81].subval = [[[]]]; 
	handelsetabeller.farderaventyr[81].vald = 0; 
	handelsetabeller.farderaventyr[81].rubrik = "Stor kartsamling"
	handelsetabeller.farderaventyr[81].beskrivning = "Rollpersonen har en stor samling kartor i sin ägo."
	handelsetabeller.farderaventyr[81].beskrivninghak = "Kartorna ger rollpersonen \+1T6 på alla Geografi- eller Orienteringsslag när dessa kan användas. Hantverket Kartritare 4T6"
	handelsetabeller.farderaventyr[81].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[81].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[81].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[81].subval[0][0][0].kartritare = {};
	handelsetabeller.farderaventyr[81].subval[0][0][0].kartritare.enheter=3;
	handelsetabeller.farderaventyr[81].subval[0][0][0].resurs="Stor kartsamling som ger \+1T6 på Geografi- eller Orienteringsslag."
	
	handelsetabeller.farderaventyr[82] = {}; 
	handelsetabeller.farderaventyr[82].subval = [[[]]]; 
	handelsetabeller.farderaventyr[82].vald = 0; 
	handelsetabeller.farderaventyr[82].rubrik = "Stor upptäckt"
	handelsetabeller.farderaventyr[82].beskrivning = "Personen har gjort en stor upptäckt som gjort denne känd i hela riket (i alla fall bland de lärda och bildade). Detta kan röra sig om att personen funnit en ruinstad, en artefakt, en ny viktig handelsled, vad som hände med en försvunnen expedition eller liknande."
	handelsetabeller.farderaventyr[82].beskrivninghak = "Välj mellan 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter eller 4 enheter Vildmarksfärdigheter. Startbelopp ökar med 2T6×10 silver.";
	handelsetabeller.farderaventyr[82].beskrivninghakvaldbas = "";
	handelsetabeller.farderaventyr[82].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[82].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[82].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[82].subval[0][0][0].ovrigt="Har gjort en stor upptäckt som gjort denne känd i hela riket."
	
	
	handelsetabeller.farderaventyr[82].subval[0].push([]); 
	
	handelsetabeller.farderaventyr[82].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[82].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[82].subval[0][1][0].vald = 0; 
	
	handelsetabeller.farderaventyr[82].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.farderaventyr[82].subval[0][1][1] = {}; 
	handelsetabeller.farderaventyr[82].subval[0][1][1].valdasub = []; 
	handelsetabeller.farderaventyr[82].subval[0][1][1].vald = 0; 
	
	handelsetabeller.farderaventyr[82].subval[0][1][1].kunskapsfardigheterenheter=4;
	handelsetabeller.farderaventyr[82].subval[0][1][1].pengarslag="2T6x10";
	handelsetabeller.farderaventyr[82].subval[0][1][1].rubrik="4 enheter Kunskapsfärdigheter."
	handelsetabeller.farderaventyr[82].subval[0][1][1].beskrivninghakvaldbas="4 enheter Kunskapsfärdigheter. Startbelopp ökar med pengar_resultat silver."
	
	
	handelsetabeller.farderaventyr[82].subval[0][1][2] = {}; 
	handelsetabeller.farderaventyr[82].subval[0][1][2].valdasub = []; 
	handelsetabeller.farderaventyr[82].subval[0][1][2].vald = 0; 
	
	handelsetabeller.farderaventyr[82].subval[0][1][2].socialafardigheterenheter=4;
	handelsetabeller.farderaventyr[82].subval[0][1][2].pengarslag="2T6x10";
	handelsetabeller.farderaventyr[82].subval[0][1][2].rubrik="4 enheter Sociala färdigheter."
	handelsetabeller.farderaventyr[82].subval[0][1][2].beskrivninghakvaldbas="4 enheter Sociala färdigheter. Startbelopp ökar med pengar_resultat silver."
	
	handelsetabeller.farderaventyr[82].subval[0][1][3] = {}; 
	handelsetabeller.farderaventyr[82].subval[0][1][3].valdasub = []; 
	handelsetabeller.farderaventyr[82].subval[0][1][3].vald = 0; 
	
	handelsetabeller.farderaventyr[82].subval[0][1][3].vildmarksfardigheterenheter=4;
	handelsetabeller.farderaventyr[82].subval[0][1][3].pengarslag="2T6x10";
	handelsetabeller.farderaventyr[82].subval[0][1][3].rubrik="4 enheter Vildmarksfärdigheter."
	handelsetabeller.farderaventyr[82].subval[0][1][3].beskrivninghakvaldbas="4 enheter Vildmarksfärdigheter. Startbelopp ökar med pengar_resultat silver."
	

	handelsetabeller.farderaventyr[83] = {}; 
	handelsetabeller.farderaventyr[83].subval = [[[]]]; 
	handelsetabeller.farderaventyr[83].vald = 0; 
	handelsetabeller.farderaventyr[83].rubrik = "Sånger och sagor"
	handelsetabeller.farderaventyr[83].beskrivning = "Rollpersonen har under sina resor samlat på sig en mängd sånger och sagor."
	handelsetabeller.farderaventyr[83].beskrivninghak = "\+2 Utstrålning. Lättlärd i Sång \& musik och Berättarkonst"
	handelsetabeller.farderaventyr[83].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[83].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[83].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[83].subval[0][0][0].sangmusik = {};
	handelsetabeller.farderaventyr[83].subval[0][0][0].sangmusik.lattlard=1; 
	handelsetabeller.farderaventyr[83].subval[0][0][0].berattarkonst = {};
	handelsetabeller.farderaventyr[83].subval[0][0][0].berattarkonst.lattlard=1; 
	handelsetabeller.farderaventyr[83].subval[0][0][0].utstralning = {};
	handelsetabeller.farderaventyr[83].subval[0][0][0].utstralning.varde =2; 

	handelsetabeller.farderaventyr[84] = {}; 
	handelsetabeller.farderaventyr[84].subval = [[[]]]; 
	handelsetabeller.farderaventyr[84].vald = 0; 
	handelsetabeller.farderaventyr[84].rubrik = "Talangfull"
	handelsetabeller.farderaventyr[84].beskrivning = "Rollpersonen har ett flertal talanger inom vitt skilda områden."
	handelsetabeller.farderaventyr[84].beskrivninghak = "Lättlärd i en Kunskapsfärdighet, en Rörelsefärdighet, en Social färdighet samt en Vildmarksfärdighet."
	handelsetabeller.farderaventyr[84].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[84].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[84].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[84].subval[0][0][0] = {};
	handelsetabeller.farderaventyr[84].subval[0][0][0].lattlardkunskapsfardigheter=1;
	handelsetabeller.farderaventyr[84].subval[0][0][0] = {};
	handelsetabeller.farderaventyr[84].subval[0][0][0].lattlardrorelsefardigheter=1;
	handelsetabeller.farderaventyr[84].subval[0][0][0] = {};
	handelsetabeller.farderaventyr[84].subval[0][0][0].lattlardsocialafardigheter=1;
	handelsetabeller.farderaventyr[84].subval[0][0][0] = {};
	handelsetabeller.farderaventyr[84].subval[0][0][0].lattlardvildmarksfardigheter=1;
	
	
	handelsetabeller.farderaventyr[85] = {}; 
	handelsetabeller.farderaventyr[85].subval = [[[]]]; 
	handelsetabeller.farderaventyr[85].vald = 0; 
	handelsetabeller.farderaventyr[85].rubrik = "Trofé"
	handelsetabeller.farderaventyr[85].beskrivning = "Rollpersonen har kommit över en ståtlig trofé. Det kan vara en tand från ett monster, en missgärningsmans avhuggna huvud eller något liknande."
	handelsetabeller.farderaventyr[85].beskrivninghak = "4 valfria enheter som förklarar hur rollpersonen kom över trofén"
	handelsetabeller.farderaventyr[85].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[85].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[85].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[85].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.farderaventyr[85].subval[0][0][0].resurs="En ståtlig trofé."

	handelsetabeller.farderaventyr[86] = {}; 
	handelsetabeller.farderaventyr[86].subval = [[[]]]; 
	handelsetabeller.farderaventyr[86].vald = 0; 
	handelsetabeller.farderaventyr[86].rubrik = "Tur"
	handelsetabeller.farderaventyr[86].beskrivning = "Rollpersonen har en naturlig tur."
	handelsetabeller.farderaventyr[86].beskrivninghak = "En gång per spelmöte kan spelaren slå om ett valfritt färdighetsslag som denne just misslyckats med eller om denne blivit missnöjd över resultatet"
	handelsetabeller.farderaventyr[86].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[86].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[86].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[86].subval[0][0][0].formaga="En gång per spelmöte kan spelaren slå om ett valfritt färdighetsslag."
	

	handelsetabeller.farderaventyr[87] = {}; 
	handelsetabeller.farderaventyr[87].subval = [[[]]]; 
	handelsetabeller.farderaventyr[87].vald = 0; 
	handelsetabeller.farderaventyr[87].rubrik = "Udda beteende"
	handelsetabeller.farderaventyr[87].beskrivning = "Rollpersonen har anammat ett udda beteende. Detta kan bero på fruktansvärda saker som denne upplevt eller att rollpersonen fått ett slag mot huvudet. Efter händelsen så stod inte allt rätt till."
	handelsetabeller.farderaventyr[87].beskrivninghak = "Rollpersonen får en Tvångshandling. Välj mellan 4 enheter Rörelsefärdigheter och 4 enheter Vildmarksfärdigheter som på något sätt är kopplade till denna tvångshandling";
	handelsetabeller.farderaventyr[87].beskrivninghakvaldbas = "Rollpersonen får en Tvångshandling. "; 
	handelsetabeller.farderaventyr[87].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[87].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[87].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[87].subval[0].push([]);
	handelsetabeller.farderaventyr[87].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[87].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[87].subval[0][1][0].vald = 0; 
	
	handelsetabeller.farderaventyr[87].subval[0][1][0].antalsubval=1; 
	
	handelsetabeller.farderaventyr[87].subval[0][1][1] = {}; 
	handelsetabeller.farderaventyr[87].subval[0][1][1].valdasub = []; 
	handelsetabeller.farderaventyr[87].subval[0][1][1].vald = 0; 
	handelsetabeller.farderaventyr[87].subval[0][1][1].kunskapsfardigheterenheter=4;
	handelsetabeller.farderaventyr[87].subval[0][1][1].formaga="Har en tvångshandling knuten till vissa Kunskapsfärdigheter."
	handelsetabeller.farderaventyr[87].subval[0][1][1].rubrik="4 enheter Kunskapsfärdigheter som är knutna till tvångshandlingen."
	handelsetabeller.farderaventyr[87].subval[0][1][1].beskrivninghakvaldbas="4 enheter Kunskapsfärdigheter som är knutna till tvångshandlingen.";
	
	
	handelsetabeller.farderaventyr[87].subval[0][1][2] = {}; 
	handelsetabeller.farderaventyr[87].subval[0][1][2].valdasub = []; 
	handelsetabeller.farderaventyr[87].subval[0][1][2].vald = 0; 
	handelsetabeller.farderaventyr[87].subval[0][1][2].vildmarksfardigheterenheter=4;
	handelsetabeller.farderaventyr[87].subval[0][1][2].formaga="Har en tvångshandling knuten till vissa Vildmarksfärdigheter."
	handelsetabeller.farderaventyr[87].subval[0][1][2].rubrik="4 enheter Vildmarksfärdigheter som är knutna till tvångshandlingen."
	handelsetabeller.farderaventyr[87].subval[0][1][2].beskrivninghakvaldbas="4 enheter Vildmarksfärdigheter som är knutna till tvångshandlingen.";
	

	handelsetabeller.farderaventyr[88] = {}; 
	handelsetabeller.farderaventyr[88].subval = [[[]]]; 
	handelsetabeller.farderaventyr[88].vald = 0; 
	handelsetabeller.farderaventyr[88].rubrik = "Uppmärksam"
	handelsetabeller.farderaventyr[88].beskrivning = "Rollpersonen är mycket uppmärksam."
	handelsetabeller.farderaventyr[88].beskrivninghak = "\+1T6 Uppfattning. Lättlärd i Speja"
	handelsetabeller.farderaventyr[88].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[88].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[88].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[88].subval[0][0][0].speja = {};
	handelsetabeller.farderaventyr[88].subval[0][0][0].speja.lattlard=1; 
	handelsetabeller.farderaventyr[88].subval[0][0][0].uppfattning = {};
	handelsetabeller.farderaventyr[88].subval[0][0][0].uppfattning.varde = 4; 

	handelsetabeller.farderaventyr[89] = {}; 
	handelsetabeller.farderaventyr[89].subval = [[[]]]; 
	handelsetabeller.farderaventyr[89].vald = 0; 
	handelsetabeller.farderaventyr[89].rubrik = "Utforskat bortglömd plats"
	handelsetabeller.farderaventyr[89].beskrivning = "Rollpersonen har via skrifter och sägner funnit en bortglömd plats som denne utforskat. Det kan vara en tempelruin, ett gravkummel eller något liknande. Även om rollpersonen inte fann mycket av värde så skänkte det ändå erfarenhet och kunnande."
	handelsetabeller.farderaventyr[89].beskrivninghak = "4 enheter Rörelsefärdigheter"
	handelsetabeller.farderaventyr[89].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[89].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[89].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[89].subval[0][0][0].rorelsefardigheterenheter = 4; 
	handelsetabeller.farderaventyr[89].subval[0][0][0].ovrigt="Har utforskat en bortglömd plats."
	
	handelsetabeller.farderaventyr[90] = {}; 
	handelsetabeller.farderaventyr[90].subval = [[[]]]; 
	handelsetabeller.farderaventyr[90].vald = 0; 
	handelsetabeller.farderaventyr[90].rubrik = "Vandrare"
	handelsetabeller.farderaventyr[90].beskrivning = "Personen är en uthållig vandrare och kan gå långt och snabbt utan att bli utmattad."
	handelsetabeller.farderaventyr[90].beskrivninghak = "\+2 Tålighet, \+2 Rörlighet. Lättlärd i Marsch"
	handelsetabeller.farderaventyr[90].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[90].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[90].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[90].subval[0][0][0].marsch = {};
	handelsetabeller.farderaventyr[90].subval[0][0][0].marsch.lattlard=1; 
	handelsetabeller.farderaventyr[90].subval[0][0][0].talighet = {};
	handelsetabeller.farderaventyr[90].subval[0][0][0].talighet.varde =2; 
	handelsetabeller.farderaventyr[90].subval[0][0][0].rorlighet = {};
	handelsetabeller.farderaventyr[90].subval[0][0][0].rorlighet.varde =2; 

	handelsetabeller.farderaventyr[91] = {}; 
	handelsetabeller.farderaventyr[91].subval = [[[]]]; 
	handelsetabeller.farderaventyr[91].vald = 0; 
	handelsetabeller.farderaventyr[91].rubrik = "Vig"
	handelsetabeller.farderaventyr[91].beskrivning = "Rollpersonen är mycket vig."
	handelsetabeller.farderaventyr[91].beskrivninghak = "\+2 Rörlighet. Lättlärd i Hoppa"
	handelsetabeller.farderaventyr[91].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[91].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[91].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[91].subval[0][0][0].hoppa = {};
	handelsetabeller.farderaventyr[91].subval[0][0][0].hoppa.lattlard=1; 
	handelsetabeller.farderaventyr[91].subval[0][0][0].rorlighet = {};
	handelsetabeller.farderaventyr[91].subval[0][0][0].rorlighet.varde =2; 

	handelsetabeller.farderaventyr[92] = {}; 
	handelsetabeller.farderaventyr[92].subval = [[[]]]; 
	handelsetabeller.farderaventyr[92].vald = 0; 
	handelsetabeller.farderaventyr[92].rubrik = "Vildmarkens röst"
	handelsetabeller.farderaventyr[92].beskrivning = "Rollpersonen har en naturlig fallenhet för att koncentrera sig, lyssna till sitt inre och lita till sin intuition."
	handelsetabeller.farderaventyr[92].beskrivninghak = "När rollpersonen använder Fokus för att ge bonus till en Vildmarksfärdighet så får denne ytterligare \+1T6 bonus"
	handelsetabeller.farderaventyr[92].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[92].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[92].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[92].subval[0][0][0].formaga="När rollpersonen använder Fokus för att ge bonus till en Vildmarksfärdighet så får denne ytterligare \+1T6 bonus."
	
	handelsetabeller.farderaventyr[93] = {}; 
	handelsetabeller.farderaventyr[93].subval = [[[]]]; 
	handelsetabeller.farderaventyr[93].vald = 0; 
	handelsetabeller.farderaventyr[93].rubrik = "Vildmarksliv"
	handelsetabeller.farderaventyr[93].beskrivning = "Personen har överlevt en lång tid i vildmarken."
	handelsetabeller.farderaventyr[93].beskrivninghak = "Lättlärd i alla Vildmarksfärdigheter"
	handelsetabeller.farderaventyr[93].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[93].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[93].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[93].subval[0][0][0] = {};
	handelsetabeller.farderaventyr[93].subval[0][0][0].lattlardallavildmarksfardigheter=1; 

	handelsetabeller.farderaventyr[94] = {}; 
	handelsetabeller.farderaventyr[94].subval = [[[]]]; 
	handelsetabeller.farderaventyr[94].vald = 0; 
	handelsetabeller.farderaventyr[94].rubrik = "Vägvisare"
	handelsetabeller.farderaventyr[94].beskrivning = "Rollpersonen har umgåtts mycket med en vägvisare som lärt ut ett och annat."
	handelsetabeller.farderaventyr[94].beskrivninghak = "Lättlärd i Orientering. 4 enheter Vildmarksfärdigheter"
	handelsetabeller.farderaventyr[94].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[94].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[94].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[94].subval[0][0][0].vildmarksfardigheterenheter = 4; 
	handelsetabeller.farderaventyr[94].subval[0][0][0].orientering = {};
	handelsetabeller.farderaventyr[94].subval[0][0][0].orientering.lattlard=1; 
	handelsetabeller.farderaventyr[94].subval[0][0][0].kontakt="Har umgåtts mycket med en vägvisare."
	
	handelsetabeller.farderaventyr[95] = {}; 
	handelsetabeller.farderaventyr[95].subval = [[[]]]; 
	handelsetabeller.farderaventyr[95].vald = 0; 
	handelsetabeller.farderaventyr[95].rubrik = "Vän med värdshusvärd"
	handelsetabeller.farderaventyr[95].beskrivning = "Rollpersonen har blivit mycket god vän med en värdshusvärd och får bo på dennes värdshus gratis och slipper betala för mat och dryck. Kanske har rollpersonen hjälpt värdshusvärden med något eller så äger denne en del av verksamheten."
	handelsetabeller.farderaventyr[95].beskrivninghak = "Lättlärd i Charm. 2 enheter Sociala färdigheter. Rollpersonen kan etablera värdshuset då det passar i spel"
	handelsetabeller.farderaventyr[95].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[95].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[95].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[95].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.farderaventyr[95].subval[0][0][0].charm = {};
	handelsetabeller.farderaventyr[95].subval[0][0][0].charm.lattlard=1; 
	handelsetabeller.farderaventyr[95].subval[0][0][0].kontakt="Vän med värdshusvärd."
	
	
	handelsetabeller.farderaventyr[96] = {}; 
	handelsetabeller.farderaventyr[96].subval = [[[]]]; 
	handelsetabeller.farderaventyr[96].vald = 0; 
	handelsetabeller.farderaventyr[96].rubrik = "Återförenat ett älskande par"
	handelsetabeller.farderaventyr[96].beskrivning = "Rollpersonen har lyckats återföra ett älskande par. Kanske blev den ena kidnappad, bortrövad eller gift mot sin vilja eller så skildes de åt av krig, skeppsbrott eller någon annan dramatisk händelse. Rollpersonen ansträngde sig dock för att återförena de unga tu."
	handelsetabeller.farderaventyr[96].beskrivningvaldbas = ""; 
	handelsetabeller.farderaventyr[96].beskrivninghak = "Slå två gånger på bakgrundstabellen och välj en som visar den sociala sfär där paret hör hemma. Rollpersonen får välja en av färdighetsgrupperna från denna bakgrund";
	handelsetabeller.farderaventyr[96].beskrivninghakvaldbas = "";
	
	handelsetabeller.farderaventyr[96].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[96].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[96].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[96].subval[0].push([]);
	handelsetabeller.farderaventyr[96].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[96].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[96].subval[0][1][0].vald = 0; 
	
	handelsetabeller.farderaventyr[96].subval[0][1][0].kontaktbas="Återförenat ett älskande par som är kontakt1_pluralobestamd."; 
	handelsetabeller.farderaventyr[96].subval[0][1][0].kontaktenhetbool=[1];
	handelsetabeller.farderaventyr[96].subval[0][1][0].antalsubval=1;
	handelsetabeller.farderaventyr[96].subval[0][1][0].subvalrubrik="Välj vad rollpersonen lärt sig av det återförenade paret:";
	handelsetabeller.farderaventyr[96].subval[0][1][0].beskrivningvaldbas = "Rollpersonen har lyckats återföra ett älskande par som är kontakt1_pluralobestamd. Kanske blev den ena kidnappad, bortrövad eller gift mot sin vilja eller så skildes de åt av krig, skeppsbrott eller någon annan dramatisk händelse. Rollpersonen ansträngde sig dock för att återförena de unga tu.";
	

	handelsetabeller.farderaventyr[97] = {}; 
	handelsetabeller.farderaventyr[97].subval = [[[]]]; 
	handelsetabeller.farderaventyr[97].vald = 0; 
	handelsetabeller.farderaventyr[97].rubrik = "Älskare"
	handelsetabeller.farderaventyr[97].beskrivning = "Rollpersonen har en älskare eller älskarinna som denne har en kärleksrelation med. Detta är något som sker i hemlighet på grund av rollpersonens eller partnerns situation."
	handelsetabeller.farderaventyr[97].beskrivningvaldbas = "";
	handelsetabeller.farderaventyr[97].beskrivninghak = "Slå två gånger på bakgrundstabellen och välj en som visar vem älskaren är. Rollpersonen har lärt sig en del av sin partner och får därför välja en av färdighetsgrupperna som är knuten till dennes bakgrund."
	handelsetabeller.farderaventyr[97].beskrivninghakvaldbas = ""; 
	handelsetabeller.farderaventyr[97].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[97].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[97].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[97].subval[0].push([]); 
	
	handelsetabeller.farderaventyr[97].subval[0][1][0] = {}; 
	handelsetabeller.farderaventyr[97].subval[0][1][0].valdasub = []; 
	handelsetabeller.farderaventyr[97].subval[0][1][0].vald = 0; 
	
	
	handelsetabeller.farderaventyr[97].subval[0][1][0].beskrivningvaldbas="Rollpersonen har en älskare eller älskarinna som är kontakt1_rubrikliten som denne har en kärleksrelation med. Detta är något som sker i hemlighet på grund av rollpersonens eller partnerns situation." 
	handelsetabeller.farderaventyr[97].subval[0][1][0].kontaktbas="En älskare eller älskarinna som är kontakt1_rubrikliten." 
	handelsetabeller.farderaventyr[97].subval[0][1][0].kontaktenhetbool=[1];
	handelsetabeller.farderaventyr[97].subval[0][1][0].antalsubval=1;
	handelsetabeller.farderaventyr[97].subval[0][1][0].subvalrubrik="Välj vad rollpersonen lärt sig av sin älskare eller älskarinna:";

	handelsetabeller.farderaventyr[98] = {}; 
	handelsetabeller.farderaventyr[98].subval = [[[]]]; 
	handelsetabeller.farderaventyr[98].vald = 0; 
	handelsetabeller.farderaventyr[98].rubrik = "Överlevt förföljelser"
	handelsetabeller.farderaventyr[98].beskrivning = "Rollpersonen har klarat livhanken när dennes vänner och familjemedlemmar dödats eller försvunnit. Kanske tillhör familjen en hatad släkt eller så tros de vara medlemmar i en förbjuden kyrka."
	handelsetabeller.farderaventyr[98].beskrivninghak = "Lättlärd i Gömma. Expertisen Vädja 4T6"
	handelsetabeller.farderaventyr[98].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[98].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[98].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[98].subval[0][0][0].gomma = {};
	handelsetabeller.farderaventyr[98].subval[0][0][0].gomma.lattlard=1; 
	handelsetabeller.farderaventyr[98].subval[0][0][0].vadja = {};
	handelsetabeller.farderaventyr[98].subval[0][0][0].vadja.enheter = 3; 
	handelsetabeller.farderaventyr[98].subval[0][0][0].ovrigt="Överlevt förföljelser."
	
	handelsetabeller.farderaventyr[99] = {}; 
	handelsetabeller.farderaventyr[99].subval = [[[]]]; 
	handelsetabeller.farderaventyr[99].vald = 0; 
	handelsetabeller.farderaventyr[99].rubrik = "Övernaturlig kroppskontroll"
	handelsetabeller.farderaventyr[99].beskrivning = "Rollpersonen har en otrolig kontroll över sin kropp och känner varje muskel ut i fingerspetsarna. Varje rörelse är till synes perfekt."
	handelsetabeller.farderaventyr[99].beskrivninghak = "Lättlärd i alla Rörelsefärdigheter"
	handelsetabeller.farderaventyr[99].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[99].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[99].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[99].subval[0][0][0] = {};
	handelsetabeller.farderaventyr[99].subval[0][0][0].lattlardallarorelsefardigheter=1; 

	handelsetabeller.farderaventyr[100] = {}; 
	handelsetabeller.farderaventyr[100].subval = [[[]]]; 
	handelsetabeller.farderaventyr[100].vald = 0; 
	handelsetabeller.farderaventyr[100].rubrik = "Händelserikt liv"
	handelsetabeller.farderaventyr[100].beskrivning = "Rollpersonen har haft ett händelserikt liv."
	handelsetabeller.farderaventyr[100].beskrivninghak = "1 extra slag på valfri händelsetabell och slå dessutom om detta slag"
	handelsetabeller.farderaventyr[100].subval[0][0][0] = {}; 
	handelsetabeller.farderaventyr[100].subval[0][0][0].valdasub = []; 
	handelsetabeller.farderaventyr[100].subval[0][0][0].vald = 0; 
	handelsetabeller.farderaventyr[100].subval[0][0][0].valfriatabellslag=1;

	
	for (i=1; i< handelsetabeller.farderaventyr.length; i++){
		handelsetabeller.farderaventyr[i].tabellnamn = "Färder \& äventyr";
		handelsetabeller.farderaventyr[i].typ = "handelsetabellslag";
		handelsetabeller.farderaventyr[i].aktiverad = 0;
	
		if ("beskrivningvaldbas" in handelsetabeller.farderaventyr[i]){
			
		}else{
			handelsetabeller.farderaventyr[i].beskrivningvaldbas=handelsetabeller.farderaventyr[i].beskrivning;
		}
		
		if ("beskrivninghakvaldbas" in handelsetabeller.farderaventyr[i]){
			
		}else{
			handelsetabeller.farderaventyr[i].beskrivninghakvaldbas=handelsetabeller.farderaventyr[i].beskrivninghak;
		}
		
		if ("nummer" in handelsetabeller.farderaventyr[i]){
			
		}else{
			handelsetabeller.farderaventyr[i].nummer=i;
		}
	}
    
    // --- //
    
	
	
    handelsetabeller.intrigerillgarningar = [];
    
    handelsetabeller.intrigerillgarningar[0] = {};    
    handelsetabeller.intrigerillgarningar[0].subval = [[[]]];    
    handelsetabeller.intrigerillgarningar[0].vald = 0;    
    handelsetabeller.intrigerillgarningar[0].rubrik="Intriger \& illgärningar";
	handelsetabeller.intrigerillgarningar[0].namn="intrigerillgarningar";
	
	
	
	handelsetabeller.intrigerillgarningar[1] = {}; 
	handelsetabeller.intrigerillgarningar[1].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[1].vald = 0; 
	handelsetabeller.intrigerillgarningar[1].rubrik = "Allt går att köpa för pengar"
	handelsetabeller.intrigerillgarningar[1].beskrivning = "Rollpersonen har insett att allt går att köpa för pengar och är van att muta sig fram i samhället."
	handelsetabeller.intrigerillgarningar[1].beskrivninghak = "3 enheter Sociala färdigheter. Startbelopp ökar med 2T6×20 silver"
	handelsetabeller.intrigerillgarningar[1].beskrivninghakvaldbas = "3 enheter Sociala färdigheter. ";
	
	handelsetabeller.intrigerillgarningar[1].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[1].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[1].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[1].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.intrigerillgarningar[1].subval[0][0][0].pengarslag = "2T6x20" ; 
	handelsetabeller.intrigerillgarningar[1].subval[0][0][0].beskrivninghakvaldbas="Startbelopp ökar med pengar_resultat silver";

	handelsetabeller.intrigerillgarningar[2] = {}; 
	handelsetabeller.intrigerillgarningar[2].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[2].vald = 0; 
	handelsetabeller.intrigerillgarningar[2].rubrik = "Arv"
	handelsetabeller.intrigerillgarningar[2].beskrivning = "Rollpersonen har kommit över ett arv av en avlägsen släkting eller välgörare. Detta har mångdubblat rollpersonens förmögenhet. Rollpersonen har haft en tid då denne bara levt på pengarna vilket gjort att denne anammat en del underliga vanor."
	handelsetabeller.intrigerillgarningar[2].beskrivninghak = "1 poäng Expertiser. Startbelopp ökar med 1000 silver"
	handelsetabeller.intrigerillgarningar[2].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[2].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[2].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[2].subval[0][0][0].expertispoang = 1; 
	handelsetabeller.intrigerillgarningar[2].subval[0][0][0].ovrigt="Arv av en avlägsen släkting eller välgörare."
	handelsetabeller.intrigerillgarningar[2].subval[0][0][0].pengarresultat =1000; 

	handelsetabeller.intrigerillgarningar[3] = {}; 
	handelsetabeller.intrigerillgarningar[3].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[3].vald = 0; 
	handelsetabeller.intrigerillgarningar[3].rubrik = "Avslöjat ett brott"
	handelsetabeller.intrigerillgarningar[3].beskrivning = "Rollpersonen har avslöjat ett brott som begåtts vilket brottslingen blev dömd för. Vad det var för brott och därmed vilket straff avgör spelaren.";
	handelsetabeller.intrigerillgarningar[3].beskrivningvaldbas = ""; 
	handelsetabeller.intrigerillgarningar[3].beskrivninghak = "4 enheter Sociala färdigheter. Slå två gånger på bakgrundstabellen och välj en som visar vem som blev avslöjad. Denne hatar rollpersonen";
	handelsetabeller.intrigerillgarningar[3].beskrivninghakvaldbas = "4 enheter Sociala färdigheter."; 
	handelsetabeller.intrigerillgarningar[3].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[3].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[3].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[3].subval[0][0][0].socialafardigheterenheter=4;
	handelsetabeller.intrigerillgarningar[3].subval[0][0][0].ovrigt="Avslöjat ett brott."
	handelsetabeller.intrigerillgarningar[3].subval[0][0][0].kontaktbas="Har avslöjat ett brott som begåtts av kontakt1_obestamd."
	handelsetabeller.intrigerillgarningar[3].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[3].subval[0][0][0].beskrivningvaldbas = "Rollpersonen har avslöjat ett brott som begåtts av kontakt1_obestamd vilket denne blev dömd för. kontakt1_Bestamd hatar nu rollpersonen för detta. Vad det var för brott och därmed vilket straff avgör spelaren.";
	

	handelsetabeller.intrigerillgarningar[4] = {}; 
	handelsetabeller.intrigerillgarningar[4].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[4].vald = 0; 
	handelsetabeller.intrigerillgarningar[4].rubrik = "Avslöjat förrädare"
	handelsetabeller.intrigerillgarningar[4].beskrivning = "Rollpersonen har via sin insiktsfullhet lyckats avslöja en förrädare."
	handelsetabeller.intrigerillgarningar[4].beskrivninghak = "Lättlärd i Genomskåda. 2 enheter Sociala färdigheter. Slå två gånger på bakgrundstabellen och välj en som visar vem förrädaren var"
	handelsetabeller.intrigerillgarningar[4].beskrivningvaldbas = "";
	handelsetabeller.intrigerillgarningar[4].beskrivninghakvaldbas = "Lättlärd i Genomskåda. 2 enheter Sociala färdigheter. ";
	handelsetabeller.intrigerillgarningar[4].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[4].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[4].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[4].subval[0][0][0].ovrigt="Avslöjat förrädare."
	handelsetabeller.intrigerillgarningar[4].subval[0][0][0].genomskada = {};
	handelsetabeller.intrigerillgarningar[4].subval[0][0][0].genomskada.lattlard=1;
	handelsetabeller.intrigerillgarningar[4].subval[0][0][0].socialafardigheterenheter=2;
	handelsetabeller.intrigerillgarningar[4].subval[0][0][0].kontaktbas="Har avslöjat förrädare, som är kontakt1_rubrikliten.";
	handelsetabeller.intrigerillgarningar[4].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[4].subval[0][0][0].beskrivningvaldbas="Rollpersonen har via sin insiktsfullhet lyckats avslöja kontakt1_obestamd som förrädare.";

	handelsetabeller.intrigerillgarningar[5] = {}; 
	handelsetabeller.intrigerillgarningar[5].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[5].vald = 0; 
	handelsetabeller.intrigerillgarningar[5].rubrik = "Begått illdåd"
	handelsetabeller.intrigerillgarningar[5].beskrivning = "Personen har begått ett dåd som denne lider samvetskval över. Vilket dåd det rör sig om och vilka som vet om detta är upp till spelaren och spelledaren."
	handelsetabeller.intrigerillgarningar[5].beskrivninghak = "2 valfria enheter knutna till dådet. 1 Avtrubbningskryss för utsatthet";
	handelsetabeller.intrigerillgarningar[5].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[5].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[5].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[5].subval[0][0][0].valfriaenheter=2; 
	handelsetabeller.intrigerillgarningar[5].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.intrigerillgarningar[5].subval[0][0][0].ovrigt="Begått illdåd."

	handelsetabeller.intrigerillgarningar[6] = {}; 
	handelsetabeller.intrigerillgarningar[6].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[6].vald = 0; 
	handelsetabeller.intrigerillgarningar[6].rubrik = "Beroende"
	handelsetabeller.intrigerillgarningar[6].beskrivning = "Rollpersonen har blivit beroende av en stimulerande drog, exempelvis Isha’al-blommans extrakt eller måhända det dövande alvgräset."
	handelsetabeller.intrigerillgarningar[6].beskrivninghak = "Lättlärd i Gifter \& droger. Det sekundära karaktärsdraget är Droger vilket är Låst och en Svaghet. Rollpersonen har 10 doser av drogen från början"
	handelsetabeller.intrigerillgarningar[6].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[6].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[6].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[6].subval[0][0][0].gifterdroger = {};
	handelsetabeller.intrigerillgarningar[6].subval[0][0][0].gifterdroger.lattlard=1; 
	handelsetabeller.intrigerillgarningar[6].subval[0][0][0].ovrigt="Beroende av en drog."
	handelsetabeller.intrigerillgarningar[6].subval[0][0][0].resurs="10 doser av en drog."
	handelsetabeller.intrigerillgarningar[6].subval[0][0][0].karaktarsdrag="Det sekundära karaktärsdraget är Droger vilket är Låst och en Svaghet.";
	
	handelsetabeller.intrigerillgarningar[7] = {}; 
	handelsetabeller.intrigerillgarningar[7].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[7].vald = 0; 
	handelsetabeller.intrigerillgarningar[7].rubrik = "Betald tystnad"
	handelsetabeller.intrigerillgarningar[7].beskrivning = "Rollpersonen känner till en hemlighet som denne fått betalt för att hålla tyst om. Vad det är för hemlighet får spelaren och spelledaren komma överens om. Om rollpersonen avslöjar hemligheten skulle denne förmodligen behöva oroa sig för mer än att behöva betala tillbaka pengarna..."
	handelsetabeller.intrigerillgarningar[7].beskrivningvaldbas = ""; 
	handelsetabeller.intrigerillgarningar[7].beskrivninghak = "1 Avtrubbningskryss för utsatthet. Startbelopp ökar med 2T6×100 silver. Slå två slag på bakgrundstabellen för att avgöra vem som har betalt rollpersonen för dennes tystnad"
	handelsetabeller.intrigerillgarningar[7].beskrivninghakvaldbas = "1 Avtrubbningskryss för utsatthet. ";
	
	handelsetabeller.intrigerillgarningar[7].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[7].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[7].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[7].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.intrigerillgarningar[7].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[7].subval[0][0][0].ovrigt="Känner till en hemlighet som denne fått betalt för att hålla tyst om."
	handelsetabeller.intrigerillgarningar[7].subval[0][0][0].pengarslag = "2T6x100"; 
	handelsetabeller.intrigerillgarningar[7].subval[0][0][0].beskrivningvaldbas = "Rollpersonen känner till en hemlighet som denne fått betalt av kontakt1_obestamd för att hålla tyst om. Vad det är för hemlighet får spelaren och spelledaren komma överens om. Om rollpersonen avslöjar hemligheten skulle denne förmodligen behöva oroa sig för mer än att behöva betala tillbaka pengarna...";
	handelsetabeller.intrigerillgarningar[7].subval[0][0][0].beskrivninghakvaldbas = "Startbelopp ökar med pengar_resultat silver.";

	handelsetabeller.intrigerillgarningar[8] = {}; 
	handelsetabeller.intrigerillgarningar[8].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[8].vald = 0; 
	handelsetabeller.intrigerillgarningar[8].rubrik = "Bra i sängen"
	handelsetabeller.intrigerillgarningar[8].beskrivning = "Rollpersonen är mycket uppskattad i sängkammaren och vet exakt vad som måste göras för att tillfredsställa en partner."
	handelsetabeller.intrigerillgarningar[8].beskrivningvaldbas = "Rollpersonen är mycket uppskattad i sängkammaren och vet exakt vad som måste göras för att tillfredsställa en partner. "
	
	handelsetabeller.intrigerillgarningar[8].beskrivninghak = "Expertisen Behaga 4T6. Slå fram två personer på bakgrundstabellen som visar vilka rollpersonen har idkat umgänge med och som är intresserade av att göra det igen"
	handelsetabeller.intrigerillgarningar[8].beskrivninghakvaldbas = "Expertisen Behaga 4T6. ";
	handelsetabeller.intrigerillgarningar[8].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[8].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[8].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[8].subval[0][0][0].behaga = {};
	handelsetabeller.intrigerillgarningar[8].subval[0][0][0].behaga.enheter=3;
	handelsetabeller.intrigerillgarningar[8].subval[0][0][0].kontaktbas="Är mycket uppskattad i sängkammaren, framför allt av två personer: kontakt1_obestamd och kontakt2_obestamd."
	handelsetabeller.intrigerillgarningar[8].subval[0][0][0].kontaktenhetbool=[0,0];
	handelsetabeller.intrigerillgarningar[8].subval[0][0][0].beskrivningvaldbas="Bland rollpersonens partners finns kontakt1_obestamd och kontakt2_obestamd.";

	handelsetabeller.intrigerillgarningar[9] = {}; 
	handelsetabeller.intrigerillgarningar[9].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[9].vald = 0; 
	handelsetabeller.intrigerillgarningar[9].rubrik = "Charmant"
	handelsetabeller.intrigerillgarningar[9].beskrivning = "Rollpersonen har ett charmant och socialt kompetent beteende och det finns något speciellt över denne som gör att personer har en tendens att lyssna på vad denne säger."
	handelsetabeller.intrigerillgarningar[9].beskrivninghak = "\+2 Utstrålning. 4 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[9].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[9].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[9].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[9].subval[0][0][0].socialafardigheterenheter = 4; 
	handelsetabeller.intrigerillgarningar[9].subval[0][0][0].utstralning = {};
	handelsetabeller.intrigerillgarningar[9].subval[0][0][0].utstralning.varde =2; 

	handelsetabeller.intrigerillgarningar[10] = {}; 
	handelsetabeller.intrigerillgarningar[10].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[10].vald = 0; 
	handelsetabeller.intrigerillgarningar[10].rubrik = "Dansare"
	handelsetabeller.intrigerillgarningar[10].beskrivning = "Rollpersonen är en skicklig dansare. Detta kan röra sig om allt från eldiga uppvisningar, stilig pardans eller akrobatiska konststycken tänkta som underhållning. Dansen har hjälpt personen att hålla sig i form."
	handelsetabeller.intrigerillgarningar[10].beskrivninghak = "\+1 Rörlighet, \+1 Utstrålning. Lättlärd i Dansa"
	handelsetabeller.intrigerillgarningar[10].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[10].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[10].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[10].subval[0][0][0].dansa = {};
	handelsetabeller.intrigerillgarningar[10].subval[0][0][0].dansa.lattlard=1; 
	handelsetabeller.intrigerillgarningar[10].subval[0][0][0].rorlighet = {};
	handelsetabeller.intrigerillgarningar[10].subval[0][0][0].rorlighet.varde =1; 
	handelsetabeller.intrigerillgarningar[10].subval[0][0][0].utstralning = {};
	handelsetabeller.intrigerillgarningar[10].subval[0][0][0].utstralning.varde =1; 

	handelsetabeller.intrigerillgarningar[11] = {}; 
	handelsetabeller.intrigerillgarningar[11].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[11].vald = 0; 
	handelsetabeller.intrigerillgarningar[11].rubrik = "Deltagit i mycket fin tillställning"
	handelsetabeller.intrigerillgarningar[11].beskrivning = "Rollpersonen har deltagit i en mycket fin tillställning där flertalet högt uppsatta personer var närvarande. Festen är ihågkommen som en av de trevligaste i mannaminne och rollpersonen gjorde ett mycket gott intryck."
	handelsetabeller.intrigerillgarningar[11].beskrivninghak = "\+2 Intryck. Lättlärd i Hovliv. 2 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[11].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[11].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[11].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[11].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[11].subval[0][0][0].hovliv = {};
	handelsetabeller.intrigerillgarningar[11].subval[0][0][0].hovliv.lattlard=1; 
	handelsetabeller.intrigerillgarningar[11].subval[0][0][0].intryck = {};
	handelsetabeller.intrigerillgarningar[11].subval[0][0][0].intryck.bonus =2; 
	handelsetabeller.intrigerillgarningar[11].subval[0][0][0].ovrigt="Deltagit i mycket fin tillställning."
	
	handelsetabeller.intrigerillgarningar[12] = {}; 
	handelsetabeller.intrigerillgarningar[12].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[12].vald = 0; 
	handelsetabeller.intrigerillgarningar[12].rubrik = "Dolkmästare"
	handelsetabeller.intrigerillgarningar[12].beskrivning = "Personen har lärt sig vikten av att kunna försvara sig eller röja undan motståndare."
	handelsetabeller.intrigerillgarningar[12].beskrivninghak = "Lättlärd i Dolk. Alla dolkar gör \+1T6 skada när rollpersonen använder dem"
	handelsetabeller.intrigerillgarningar[12].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[12].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[12].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[12].subval[0][0][0].dolk = {};
	handelsetabeller.intrigerillgarningar[12].subval[0][0][0].dolk.lattlard=1; 
	handelsetabeller.intrigerillgarningar[12].subval[0][0][0].formaga="Alla dolkar gör \+1T6 skada när rollpersonen använder dem.";

	handelsetabeller.intrigerillgarningar[13] = {}; 
	handelsetabeller.intrigerillgarningar[13].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[13].vald = 0; 
	handelsetabeller.intrigerillgarningar[13].rubrik = "Dricker för mycket"
	handelsetabeller.intrigerillgarningar[13].beskrivning = "Rollpersonen mår bäst när denne är berusad. När det susar i huvudet och kroppen är varm och mjuk efter att ha stjälpt i sig vin och mjöd känns det som allra bäst. Detta gör att rollpersonen har mycket svårt att låta bli alkohol och det händer ofta att denne tar sig ett glas för mycket."
	handelsetabeller.intrigerillgarningar[13].beskrivningvaldbas = "Rollpersonen mår bäst när denne är berusad. När det susar i huvudet och kroppen är varm och mjuk efter att ha stjälpt i sig vin och mjöd känns det som allra bäst. Detta gör att rollpersonen har mycket svårt att låta bli alkohol och det händer ofta att denne tar sig ett glas för mycket. "
	handelsetabeller.intrigerillgarningar[13].beskrivninghak = "Expertisen Supa 4T6. Det sekundära karaktärsdraget är Supa och är Låst. Rollpersonen har lärt känna en dryckeskamrat. Slå två gånger på bakgrundstabellen och välj en som visar dryckeskamraten är. Spelaren kan etablera denne i spel när det passar"
	handelsetabeller.intrigerillgarningar[13].beskrivninghakvaldbas = "Expertisen Supa 4T6. Det sekundära karaktärsdraget är Supa och är Låst. "
	handelsetabeller.intrigerillgarningar[13].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[13].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[13].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[13].subval[0][0][0].supa = {};
	handelsetabeller.intrigerillgarningar[13].subval[0][0][0].supa.enheter=3;
	handelsetabeller.intrigerillgarningar[13].subval[0][0][0].ovrigt="Dricker för mycket."
	handelsetabeller.intrigerillgarningar[13].subval[0][0][0].kontaktbas="Dryckeskamrat med kontakt1_obestamd."
	handelsetabeller.intrigerillgarningar[13].subval[0][0][0].karaktarsdrag="Det sekundära karaktärsdraget är Supa och är Låst. "
	handelsetabeller.intrigerillgarningar[13].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[13].subval[0][0][0].beskrivningvaldbas="Rollpersonens bästa dryckeskamrat är kontakt1_obestamd.";
	
	
	handelsetabeller.intrigerillgarningar[14] = {}; 
	handelsetabeller.intrigerillgarningar[14].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[14].vald = 0; 
	handelsetabeller.intrigerillgarningar[14].rubrik = "Dubbelliv"
	handelsetabeller.intrigerillgarningar[14].beskrivning = "Rollpersonen har levt två separata liv. Det kanske handlade om två olika familjer eller att personen har flytt från en ohållbar situation.";
	handelsetabeller.intrigerillgarningar[14].beskrivningvaldbas = "";
	handelsetabeller.intrigerillgarningar[14].beskrivninghak = "Slå två gånger på bakgrundstabellen och välj en som visar vad det andra livet handlar om. Rollpersonen får välja en av färdighetsgrupperna från denna bakgrund"
	handelsetabeller.intrigerillgarningar[14].beskrivninghakvaldbas = "";
	handelsetabeller.intrigerillgarningar[14].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[14].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[14].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[14].subval[0].push([]);
	handelsetabeller.intrigerillgarningar[14].subval[0][1][0] = {}; 
	handelsetabeller.intrigerillgarningar[14].subval[0][1][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[14].subval[0][1][0].vald = 0; 
	
	handelsetabeller.intrigerillgarningar[14].subval[0][1][0].ovrigtbas="Har levt två separata liv, där det andra livet varit som kontakt1_rubrikliten."
	handelsetabeller.intrigerillgarningar[14].subval[0][1][0].beskrivningvaldbas="Rollpersonen har levt två separata liv, där det andra livet varit som kontakt1_rubrikliten. Det kanske handlade om två olika familjer eller att personen har flytt från en ohållbar situation."
	
	handelsetabeller.intrigerillgarningar[14].subval[0][1][0].kontaktenhetbool=[1];
	handelsetabeller.intrigerillgarningar[14].subval[0][1][0].subvalrubrikbas="Välj vad rollpersonen lärt sig genom livet som kontakt1_rubrikliten:";
	
	handelsetabeller.intrigerillgarningar[15] = {}; 
	handelsetabeller.intrigerillgarningar[15].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[15].vald = 0; 
	handelsetabeller.intrigerillgarningar[15].rubrik = "Dödat för att bevara hemlighet"
	handelsetabeller.intrigerillgarningar[15].beskrivning = "Rollpersonen har tvingats att döda för att bevara en hemlighet av något slag. Vem och varför måste bestämmas."
	handelsetabeller.intrigerillgarningar[15].beskrivninghak = "2 enheter Rörelsefärdigheter, 2 enheter Sociala färdigheter, 2 enheter Stridsfärdigheter"
	handelsetabeller.intrigerillgarningar[15].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[15].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[15].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[15].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[15].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[15].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[15].subval[0][0][0].ovrigt="Dödat för att bevara en hemlighet."
	
	handelsetabeller.intrigerillgarningar[16] = {}; 
	handelsetabeller.intrigerillgarningar[16].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[16].vald = 0; 
	handelsetabeller.intrigerillgarningar[16].rubrik = "Dödat uppsatt person"
	handelsetabeller.intrigerillgarningar[16].beskrivning = "Personen har dödat en uppsatt och viktig person. Det kan vara en inkvisitor, präst, ädling eller brottsling i undre världen. Hur och varför detta skedde måste besvaras."
	handelsetabeller.intrigerillgarningar[16].beskrivninghak = "2 enheter Rörelsefärdigheter. 2 enheter Stridsfärdigheter"
	handelsetabeller.intrigerillgarningar[16].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[16].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[16].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[16].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[16].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[15].subval[0][0][0].ovrigt="Dödat en uppsatt person."
	
	handelsetabeller.intrigerillgarningar[17] = {}; 
	handelsetabeller.intrigerillgarningar[17].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[17].vald = 0; 
	handelsetabeller.intrigerillgarningar[17].rubrik = "En kniv i ryggen"
	handelsetabeller.intrigerillgarningar[17].beskrivning = "Personen har blivit attackerad och överfallen av en person som denne trodde sig vara sin vän. Sedan dess är personen alltid på helspänn."
	handelsetabeller.intrigerillgarningar[17].beskrivninghak = "\+2 Uppfattning. \+1T6 Reaktion"
	handelsetabeller.intrigerillgarningar[17].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[17].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[17].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[17].subval[0][0][0].uppfattning = {};
	handelsetabeller.intrigerillgarningar[17].subval[0][0][0].uppfattning.varde =2; 
	handelsetabeller.intrigerillgarningar[17].subval[0][0][0].reaktion = {};
	handelsetabeller.intrigerillgarningar[17].subval[0][0][0].reaktion.bonus = 4; 
	handelsetabeller.intrigerillgarningar[17].subval[0][0][0].ovrigt="Har fått en kniv i ryggen."

	handelsetabeller.intrigerillgarningar[18] = {}; 
	handelsetabeller.intrigerillgarningar[18].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[18].vald = 0; 
	handelsetabeller.intrigerillgarningar[18].rubrik = "Enat fraktioner"
	handelsetabeller.intrigerillgarningar[18].beskrivning = "Rollpersonen har lyckats ena två eller flera fraktioner som varit splittrade. Rollpersonen ses som en diplomatisk och vis person efter detta."
	handelsetabeller.intrigerillgarningar[18].beskrivninghak = "\+2 Vilja. Lättlärd i Ledarskap"
	handelsetabeller.intrigerillgarningar[18].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[18].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[18].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[18].subval[0][0][0].ledarskap = {};
	handelsetabeller.intrigerillgarningar[18].subval[0][0][0].ledarskap.lattlard=1; 
	handelsetabeller.intrigerillgarningar[18].subval[0][0][0].vilja = {};
	handelsetabeller.intrigerillgarningar[18].subval[0][0][0].vilja.varde =2; 
	handelsetabeller.intrigerillgarningar[18].subval[0][0][0].ovrigt="Har enat fraktioner."
	
	handelsetabeller.intrigerillgarningar[19] = {}; 
	handelsetabeller.intrigerillgarningar[19].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[19].vald = 0; 
	handelsetabeller.intrigerillgarningar[19].rubrik = "Erbjuden gemål"
	handelsetabeller.intrigerillgarningar[19].beskrivning = "Rollpersonen har haft chansen att gifta sig med dottern eller sonen till en rival."
	handelsetabeller.intrigerillgarningar[19].beskrivningvaldbas = "";
	handelsetabeller.intrigerillgarningar[19].beskrivninghak = "Om gift: \+2 Vilja. Startbelopp ökar med 2T6×50 silver. Ej giftermål: 2 valfria enheter"
	handelsetabeller.intrigerillgarningar[19].beskrivninghakvaldbas = "";
	handelsetabeller.intrigerillgarningar[19].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[19].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[19].subval[0][0][0].vald = 0; 
	
	handelsetabeller.intrigerillgarningar[19].subval[0].push([]);
	handelsetabeller.intrigerillgarningar[19].subval[0][1][0] = {}; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.intrigerillgarningar[19].subval[0][1][1] = {}; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][1].valdasub = []; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][1].vald = 0; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][1].vilja = {};
	handelsetabeller.intrigerillgarningar[19].subval[0][1][1].vilja.varde =2; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][1].kontakt="Gift sig med sonen eller dottern till en rival." 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][1].beskrivningvaldbas="Rollpersonen har gift sig med sonen eller dottern till en rival." 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][1].beskrivninghakvaldbas="\+2 Vilja. pengar_resultat silver.";	
	handelsetabeller.intrigerillgarningar[19].subval[0][1][1].pengarslag="2T6x50"; 

	handelsetabeller.intrigerillgarningar[19].subval[0][1][2] = {}; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][2].valdasub = []; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][2].vald = 0; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][2].valfriaenheter=2; 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][2].ovrigt="Har tackat nej till att gifta sig med sonen eller dottern till en rival." 
	handelsetabeller.intrigerillgarningar[19].subval[0][1][2].beskrivningvaldbas="Rollpersonen har tackat nej till att gifta sig med sonen eller dottern till en rival." ;
	handelsetabeller.intrigerillgarningar[19].subval[0][1][2].beskrivninghakvaldbas="2 valfria enheter";
	
	handelsetabeller.intrigerillgarningar[20] = {}; 
	handelsetabeller.intrigerillgarningar[20].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[20].vald = 0; 
	handelsetabeller.intrigerillgarningar[20].rubrik = "Fastighet"
	handelsetabeller.intrigerillgarningar[20].beskrivning = "Rollpersonen äger en fastighet som anstår denne. Rika rollpersoner har förmodligen stora trädgårdar kring huset och många rum för gäster och tjänare, medan det för en simpel köpman kan röra sig om ett hus på egen tomt i staden med ett vindsrum för husan."
	handelsetabeller.intrigerillgarningar[20].beskrivninghak = "2 poäng Hantverk kopplade till fastigheten. Spelaren kan introducera fastigheten i spelet när denna finner det lämpligt"
	handelsetabeller.intrigerillgarningar[20].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[20].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[20].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[20].subval[0][0][0].hantverkpoang = 2;
	handelsetabeller.intrigerillgarningar[20].subval[0][0][0].resurs="Äger en fastighet."

	handelsetabeller.intrigerillgarningar[21] = {}; 
	handelsetabeller.intrigerillgarningar[21].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[21].vald = 0; 
	handelsetabeller.intrigerillgarningar[21].rubrik = "Favorithak"
	handelsetabeller.intrigerillgarningar[21].beskrivning = "Rollpersonen har ett favorithak som denne besöker. Detta kan vara allt från ett sjaskigt värdshus i hamnen till en fashionabel bordell i de finare delarna eller en lyxig taverna för de allra rikaste. Denne har lärt sig mycket av alla diskussioner som tagit plats där och har därmed blivit mer allmänbildad."
	handelsetabeller.intrigerillgarningar[21].beskrivninghak = "\+2 Visdom. 2 enheter Sociala färdigheter. Spelaren kan etablera favorithaket i spel när det är lämpligt och om spelledaren bedömer det troligt"
	handelsetabeller.intrigerillgarningar[21].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[21].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[21].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[21].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[21].subval[0][0][0].visdom = {};
	handelsetabeller.intrigerillgarningar[21].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.intrigerillgarningar[21].subval[0][0][0].resurs="Har ett favorithak."
	
	handelsetabeller.intrigerillgarningar[22] = {}; 
	handelsetabeller.intrigerillgarningar[22].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[22].vald = 0; 
	handelsetabeller.intrigerillgarningar[22].rubrik = "Fått efterhängsen friare"
	handelsetabeller.intrigerillgarningar[22].beskrivning = "Rollpersonen har en man eller kvinna som är efterhängsen och desperat vill ha rollpersonen som sin. Problemet är bara att rollpersonen inte står ut med personen och gör det bästa för att kunna komma undan denne."
	handelsetabeller.intrigerillgarningar[22].beskrivningvaldbas = "";
	handelsetabeller.intrigerillgarningar[22].beskrivninghak = "\+1 Rörlighet, \+2 Uppfattning. 2 enheter Rörelsefärdigheter. Slå två gånger på bakgrundstabellen och välj en som visar vem friaren är"
	handelsetabeller.intrigerillgarningar[22].beskrivninghakvaldbas = "\+1 Rörlighet, \+2 Uppfattning. 2 enheter Rörelsefärdigheter. ";
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0].rorlighet = {};
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0].rorlighet.varde=1;
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0].uppfattning = {};
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0].uppfattning.varde=2;
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0].rorelsefardigheterenheter=2;
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0].kontaktbas="Har en efterhängsen friare som är kontakt1_rubrikliten."
	handelsetabeller.intrigerillgarningar[22].subval[0][0][0].beskrivningvaldbas = "Rollpersonen förföljs av kontakt1_obestamd som är efterhängsen och desperat vill ha rollpersonen som sin. Problemet är bara att rollpersonen inte står ut med personen och gör det bästa för att kunna komma undan denne.";
	

	handelsetabeller.intrigerillgarningar[23] = {}; 
	handelsetabeller.intrigerillgarningar[23].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[23].vald = 0; 
	handelsetabeller.intrigerillgarningar[23].rubrik = "Fått person avrättad"
	handelsetabeller.intrigerillgarningar[23].beskrivning = "Rollpersonen har genom maktspel och kontakter fått en person avrättad. Exakt varför och på vilket sätt personen blev dräpt måste etableras."
	handelsetabeller.intrigerillgarningar[23].beskrivningvaldbas = "";
	handelsetabeller.intrigerillgarningar[23].beskrivninghak = "2 enheter Sociala färdigheter. 1 Avtrubbningskryss för våld. Slå två gånger på bakgrundstabellen och välj en som visar vem som avrättats"
	handelsetabeller.intrigerillgarningar[23].beskrivninghakvaldbas = "2 enheter Sociala färdigheter. 1 Avtrubbningskryss för våld."; 
	handelsetabeller.intrigerillgarningar[23].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[23].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[23].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[23].subval[0][0][0].socialafardigheterenheter=2; 
	handelsetabeller.intrigerillgarningar[23].subval[0][0][0].avtrubbningvald=1;
	handelsetabeller.intrigerillgarningar[23].subval[0][0][0].kontaktbas="Fått kontakt1_obestamd avrättad.";
	handelsetabeller.intrigerillgarningar[23].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[23].subval[0][0][0].beskrivningvaldbas = "Rollpersonen har genom maktspel och kontakter fått kontakt1_obestamd avrättad. Exakt varför och på vilket sätt personen blev dräpt måste etableras.";
	
	handelsetabeller.intrigerillgarningar[24] = {}; 
	handelsetabeller.intrigerillgarningar[24].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[24].vald = 0; 
	handelsetabeller.intrigerillgarningar[24].rubrik = "Förälskad"
	handelsetabeller.intrigerillgarningar[24].beskrivning = "Rollpersonen är djupt förälskad i en person och är nästan beredd att göra allt för denne. Spelaren bestämmer detaljerna kring personen, kanske är förälskelsen bemött eller så nyttjar personen endast rollpersonen för sina egna ändamål."
	handelsetabeller.intrigerillgarningar[24].beskrivningvaldbas = "";
	handelsetabeller.intrigerillgarningar[24].beskrivninghak = "2 enheter Rörelsefärdigheter, 2 enheter Sociala färdigheter. Slå två gånger på bakgrundstabellen och välj en som visar vem rollpersonen är förälskad i"
	handelsetabeller.intrigerillgarningar[24].beskrivninghakvaldbas = "2 enheter Rörelsefärdigheter, 2 enheter Sociala färdigheter.";
	handelsetabeller.intrigerillgarningar[24].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[24].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[24].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[24].subval[0][0][0].rorelsefardigheterenheter=2;
	handelsetabeller.intrigerillgarningar[24].subval[0][0][0].socialafardigheterenheter=2;
	handelsetabeller.intrigerillgarningar[24].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[24].subval[0][0][0].kontaktbas="Är förälskad i kontakt1_obestamd.";
	handelsetabeller.intrigerillgarningar[24].subval[0][0][0].beskrivningvaldbas = "Rollpersonen är djupt förälskad i kontakt1_obestamd och är nästan beredd att göra allt för denne. Spelaren bestämmer detaljerna kring personen, kanske är förälskelsen bemött eller så nyttjar personen endast rollpersonen för sina egna ändamål.";

	handelsetabeller.intrigerillgarningar[25] = {}; 
	handelsetabeller.intrigerillgarningar[25].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[25].vald = 0; 
	handelsetabeller.intrigerillgarningar[25].rubrik = "Förbjudet förhållande"
	handelsetabeller.intrigerillgarningar[25].beskrivning = "Rollpersonen har eller har haft ett förbjudet förhållande. Detta kan röra sig om en person av samma kön, ett förhållande med någon inom familjen (exempelvis ett syskon) eller med någon av ett folk som ses som smutsigt och förkastligt. Skulle detta komma ut skulle många ogilla och bli äcklade av personen och denne riskerar att bli straffad."
	handelsetabeller.intrigerillgarningar[25].beskrivninghak = "Lättlärd i Dupera. Expertisen Förklädnad 4T6"
	handelsetabeller.intrigerillgarningar[25].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[25].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[25].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[25].subval[0][0][0].dupera = {};
	handelsetabeller.intrigerillgarningar[25].subval[0][0][0].dupera.lattlard=1; 
	handelsetabeller.intrigerillgarningar[25].subval[0][0][0].forkladnad = {};
	handelsetabeller.intrigerillgarningar[25].subval[0][0][0].forkladnad.enheter=3; 
	handelsetabeller.intrigerillgarningar[25].subval[0][0][0].kontakt="Har ett förbjudet förhållande.";

	handelsetabeller.intrigerillgarningar[26] = {}; 
	handelsetabeller.intrigerillgarningar[26].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[26].vald = 0; 
	handelsetabeller.intrigerillgarningar[26].rubrik = "Förförelsens blick"
	handelsetabeller.intrigerillgarningar[26].beskrivning = "Kanske är det en magisk förmåga eller så är det något med rollpersonen och dennes aura. Denne kan hursomhelst använda sin blick för att få personer knäsvaga och desperata efter rollpersonen."
	handelsetabeller.intrigerillgarningar[26].beskrivninghak = "Kännetecknet Trollbindande blick 4T6. Genom att lyckas med ett motståndsslag mot en motparts Självkontroll kan rollpersonen trollbinda denne för 1 Fokus. Under resten av scenen kommer motparten att vara upp över öronen förälskad i rollpersonen och desperat över att få dennes gunst. Om motparten i normala fall skulle finna rollpersonen motbjudande kan det vara lämpligt att ge bonustärningar på Självkontrollslaget"
	handelsetabeller.intrigerillgarningar[26].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[26].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[26].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[26].subval[0][0][0].trollbindandeblick = {};
	handelsetabeller.intrigerillgarningar[26].subval[0][0][0].trollbindandeblick.enheter = 3; 
	handelsetabeller.intrigerillgarningar[26].subval[0][0][0].formaga="Genom att lyckas med ett motståndsslag med Trollbindande blick mot en motparts Självkontroll kan rollpersonen trollbinda denne för 1 Fokus.";
	
	handelsetabeller.intrigerillgarningar[27] = {}; 
	handelsetabeller.intrigerillgarningar[27].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[27].vald = 0; 
	handelsetabeller.intrigerillgarningar[27].rubrik = "Förlorat i duell"
	handelsetabeller.intrigerillgarningar[27].beskrivning = "Konflikten eskalerade och det hela urartade i en duell mellan rollpersonen och dennes motståndare framför en stor grupp andra. Det kan ha varit allt ifrån ett slagsmål till korsade svärd och ordväxlingar men rollpersonen var den som förlorade och blev förnedrad av sin motståndare."
	handelsetabeller.intrigerillgarningar[27].beskrivninghak = "–2 Vilja. 4 valfria enheter knutna till duellen. 1 Avtrubbningskryss för utsatthet"
	handelsetabeller.intrigerillgarningar[27].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[27].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[27].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[27].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.intrigerillgarningar[27].subval[0][0][0].vilja = {};
	handelsetabeller.intrigerillgarningar[27].subval[0][0][0].vilja.varde =-2; 
	handelsetabeller.intrigerillgarningar[27].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.intrigerillgarningar[27].subval[0][0][0].ovrigt="Har förlorat en duell."
	
	handelsetabeller.intrigerillgarningar[28] = {}; 
	handelsetabeller.intrigerillgarningar[28].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[28].vald = 0; 
	handelsetabeller.intrigerillgarningar[28].rubrik = "Förlorat rättegång"
	handelsetabeller.intrigerillgarningar[28].beskrivning = "Rollpersonen var med om en rättegång där dennes sida förlorade stort. Den segrande sidan har hånat rollpersonen sedan dess och förlusten har plågat rollpersonen."
	handelsetabeller.intrigerillgarningar[28].beskrivningvaldbas = "";
	
	handelsetabeller.intrigerillgarningar[28].beskrivninghak = "2 enheter Kunskapsfärdigheter, 2 enheter Sociala färdigheter. 1 Avtrubbningskryss för utsatthet. Slå två gånger på bakgrundstabellen och välj en som visar vem som vann mot rollpersonen. Om rollpersonen får tillfälle att hämnas på den som vann återfås 5 Fokus"
	
	handelsetabeller.intrigerillgarningar[28].beskrivninghakvaldbas = "2 enheter Kunskapsfärdigheter, 2 enheter Sociala färdigheter. 1 Avtrubbningskryss för utsatthet. " 
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0].kunskapsfardigheterenheter=2; 
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0].socialafardigheterenheter=2;
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0].avtrubbningutsatthet=1;
	
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0].formagabas="Om rollpersonen får tillfälle att hämnas på kontakt1_bestamd som vann en rättegång mot denne återfås 5 Fokus." 
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0].kontaktbas="Har förlorat rättegång mot kontakt1_obestamd.";
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0].beskrivningvaldbas = "Rollpersonen har varit med om en rättegång mot kontakt1_obestamd och förlorat stort. kontakt1_Bestamd har hånat rollpersonen sedan dess och förlusten har plågat rollpersonen.";
	handelsetabeller.intrigerillgarningar[28].subval[0][0][0].beskrivninghakvaldbas = "Om rollpersonen får tillfälle att hämnas på kontakt1_bestamd återfås 5 Fokus";
	
	handelsetabeller.intrigerillgarningar[29] = {}; 
	handelsetabeller.intrigerillgarningar[29].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[29].vald = 0; 
	handelsetabeller.intrigerillgarningar[29].rubrik = "Förlorat sin älskade"
	handelsetabeller.intrigerillgarningar[29].beskrivning = "Rollpersonen har förlorat sin älskade och är sedan dess bittrare än innan."
	handelsetabeller.intrigerillgarningar[29].beskrivninghak = "–1 Vilja. 2 Avtrubbningskryss för utsatthet"
	handelsetabeller.intrigerillgarningar[29].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[29].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[29].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[29].subval[0][0][0].vilja = {};
	handelsetabeller.intrigerillgarningar[29].subval[0][0][0].vilja.varde =-1; 
	handelsetabeller.intrigerillgarningar[29].subval[0][0][0].avtrubbningutsatthet = 2; 
	handelsetabeller.intrigerillgarningar[29].subval[0][0][0].kontakt="Har förlorat sin älskade.";
	
	handelsetabeller.intrigerillgarningar[30] = {}; 
	handelsetabeller.intrigerillgarningar[30].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[30].vald = 0; 
	handelsetabeller.intrigerillgarningar[30].rubrik = "Förrått sin bästa vän"
	handelsetabeller.intrigerillgarningar[30].beskrivning = "Rollpersonen har förrått sin bästa vän. Kanske var denne tvingad att göra så eller så var det ren maktlystnad som drev denne. Vännen blev utstött och sattes kanske i fängelse eller fick någon annan form av straff medan rollpersonen fick makt och erkännande."
	handelsetabeller.intrigerillgarningar[30].beskrivningvaldbas = "Rollpersonen har förrått sin bästa vän. Kanske var denne tvingad att göra så eller så var det ren maktlystnad som drev denne. Vännen blev utstött och sattes kanske i fängelse eller fick någon annan form av straff medan rollpersonen fick makt och erkännande. "
	handelsetabeller.intrigerillgarningar[30].beskrivninghak = "\+2 Vilja. 1 Avtrubbningskryss för utsatthet. Slå två gånger på bakgrundstabellen och välj en som visar vilket liv den forna vännen lever nu. Denne är garanterat ute efter hämnd"
	handelsetabeller.intrigerillgarningar[30].beskrivninghakvaldbas = "\+2 Vilja. 1 Avtrubbningskryss för utsatthet. ";
	handelsetabeller.intrigerillgarningar[30].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[30].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[30].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[30].subval[0][0][0].vilja = {};
	handelsetabeller.intrigerillgarningar[30].subval[0][0][0].vilja.varde=2; 
	handelsetabeller.intrigerillgarningar[30].subval[0][0][0].avtrubbningutsatthet=1; 
	handelsetabeller.intrigerillgarningar[30].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[30].subval[0][0][0].kontaktbas="Förrått sin bästa vän, denne är numera kontakt1_rubrikliten.";
	handelsetabeller.intrigerillgarningar[30].subval[0][0][0].beskrivningvaldbas = "Numera lever vännen som kontakt1_rubrikliten och är garanterat ute efter hämnd.";
	
	handelsetabeller.intrigerillgarningar[31] = {}; 
	handelsetabeller.intrigerillgarningar[31].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[31].vald = 0; 
	handelsetabeller.intrigerillgarningar[31].rubrik = "Förtalad"
	handelsetabeller.intrigerillgarningar[31].beskrivning = "Rollpersonen har blivit utsatt för förtal och illasinnade rykten har spridits om rollpersonens förehavanden. Exakt vad ryktena innehåller är upp till spelaren."
	handelsetabeller.intrigerillgarningar[31].beskrivningvaldbas = "";
	handelsetabeller.intrigerillgarningar[31].beskrivninghak = "1 Avtrubbningskryss för utsatthet. Slå två gånger på bakgrundstabellen och välj en som visar vem som spridit ryktena"
	handelsetabeller.intrigerillgarningar[31].beskrivninghakvaldbas = "1 Avtrubbningskryss för utsatthet. ";
	handelsetabeller.intrigerillgarningar[31].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[31].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[31].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[31].subval[0][0][0].avtrubbningutsatthet=1; 
	handelsetabeller.intrigerillgarningar[31].subval[0][0][0].kontaktbas="Har blivit utsatt för förtal av kontakt1_obestamd.";
	handelsetabeller.intrigerillgarningar[31].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[31].subval[0][0][0].beskrivningvaldbas = "Rollpersonen har blivit utsatt för förtal av kontakt1_obestamd och illasinnade rykten har spridits om rollpersonens förehavanden. Exakt vad ryktena innehåller är upp till spelaren.";

	handelsetabeller.intrigerillgarningar[32] = {}; 
	handelsetabeller.intrigerillgarningar[32].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[32].vald = 0; 
	handelsetabeller.intrigerillgarningar[32].rubrik = "Genomskådande"
	handelsetabeller.intrigerillgarningar[32].beskrivning = "Rollpersonen ser igenom lögner och falskspel."
	handelsetabeller.intrigerillgarningar[32].beskrivninghak = "\+2 Uppfattning. Lättlärd i Genomskåda"
	handelsetabeller.intrigerillgarningar[32].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[32].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[32].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[32].subval[0][0][0].genomskada = {};
	handelsetabeller.intrigerillgarningar[32].subval[0][0][0].genomskada.lattlard=1; 
	handelsetabeller.intrigerillgarningar[32].subval[0][0][0].uppfattning = {};
	handelsetabeller.intrigerillgarningar[32].subval[0][0][0].uppfattning.varde =2; 

	handelsetabeller.intrigerillgarningar[33] = {}; 
	handelsetabeller.intrigerillgarningar[33].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[33].vald = 0; 
	handelsetabeller.intrigerillgarningar[33].rubrik = "Gentjänst"
	handelsetabeller.intrigerillgarningar[33].beskrivning = "Rollpersonen har utfört en tjänst åt en person som denne kan kräva tillbaka under spelets gång.";
	handelsetabeller.intrigerillgarningar[33].beskrivningvaldbas = "";
	handelsetabeller.intrigerillgarningar[33].beskrivninghak = "Slå två gånger på bakgrundstabellen och välj en som visar vem rollpersonen kan kräva in gentjänsten av när det passar. Rollpersonen får välja en av färdighetsgrupperna från denna bakgrund"
	handelsetabeller.intrigerillgarningar[33].beskrivninghakvaldbas = "";
	handelsetabeller.intrigerillgarningar[33].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[33].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[33].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[33].subval[0].push([]);
	handelsetabeller.intrigerillgarningar[33].subval[0][1][0] = {}; 
	handelsetabeller.intrigerillgarningar[33].subval[0][1][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[33].subval[0][1][0].vald = 0; 
	
	handelsetabeller.intrigerillgarningar[33].subval[0][1][0].kontaktbas="Har utfört en tjänst åt kontakt1_obestamd och kan kräva tillbaka en gentjänst."
	handelsetabeller.intrigerillgarningar[33].subval[0][1][0].kontaktenhetbool=[1];
	handelsetabeller.intrigerillgarningar[33].subval[0][1][0].subvalrubrikbas="Välj vad rollpersonen lärt sig av kontakt1_bestamd:";
	handelsetabeller.intrigerillgarningar[33].subval[0][1][0].beskrivningvaldbas = "Rollpersonen har utfört en tjänst åt kontakt1_obestamd som denne kan kräva tillbaka under spelets gång.";
	handelsetabeller.intrigerillgarningar[33].subval[0][1].push();
	handelsetabeller.intrigerillgarningar[33].subval[0][1].push();
	


	handelsetabeller.intrigerillgarningar[34] = {}; 
	handelsetabeller.intrigerillgarningar[34].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[34].vald = 0; 
	handelsetabeller.intrigerillgarningar[34].rubrik = "Giftflaska"
	handelsetabeller.intrigerillgarningar[34].beskrivning = "Rollpersonen har en liten flaska fylld med ett livsfarligt nervgift. Varför rollpersonen bemödat sig få tag på det är upp till spelaren men denne har även testat giftet på sig själv."
	handelsetabeller.intrigerillgarningar[34].beskrivninghak = "\+2 Tålighet. Lättlärd i Gifter \& droger. Rollpersonen har dessutom 2 doser nervgift, vars svårighet att motstå är 4 högre än normalt"
	handelsetabeller.intrigerillgarningar[34].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[34].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[34].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[34].subval[0][0][0].gifterdroger = {};
	handelsetabeller.intrigerillgarningar[34].subval[0][0][0].gifterdroger.lattlard=1; 
	handelsetabeller.intrigerillgarningar[34].subval[0][0][0].talighet = {};
	handelsetabeller.intrigerillgarningar[34].subval[0][0][0].talighet.varde =2; 
	handelsetabeller.intrigerillgarningar[34].subval[0][0][0].resurs="2 doser nervgift, vars svårighet att motstå är 4 högre än normalt."
	
	handelsetabeller.intrigerillgarningar[35] = {}; 
	handelsetabeller.intrigerillgarningar[35].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[35].vald = 0; 
	handelsetabeller.intrigerillgarningar[35].rubrik = "Gifttålig"
	handelsetabeller.intrigerillgarningar[35].beskrivning = "Personen är tålig då det gäller att motstå gifter."
	handelsetabeller.intrigerillgarningar[35].beskrivninghak = "Immun mot alla gifter"
	handelsetabeller.intrigerillgarningar[35].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[35].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[35].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[35].formaga="Immun mot alla gifter."

	handelsetabeller.intrigerillgarningar[36] = {}; 
	handelsetabeller.intrigerillgarningar[36].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[36].vald = 0; 
	handelsetabeller.intrigerillgarningar[36].rubrik = "Hemlig kunskap"
	handelsetabeller.intrigerillgarningar[36].beskrivning = "Rollpersonen vet om en hemlighet kring en viktig person. Hur stor makt han eller hon får över denne kan skilja sig beroende på hemlighetens natur. Det kan vara kätterska vanor, stora skuldebrev eller något annat."
	handelsetabeller.intrigerillgarningar[36].beskrivningvaldbas = "";
	handelsetabeller.intrigerillgarningar[36].beskrivninghak = "Slå två gånger på bakgrundstabellen och välj en som visar vem rollpersonen känner till en hemlighet om. Rollpersonen får välja en av färdighetsgrupperna från denna bakgrund"
	handelsetabeller.intrigerillgarningar[36].beskrivninghakvaldbas = ""; 
	handelsetabeller.intrigerillgarningar[36].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[36].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[36].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[36].subval[0].push([]); 
	handelsetabeller.intrigerillgarningar[36].subval[0][1][0] = {}; 
	handelsetabeller.intrigerillgarningar[36].subval[0][1][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[36].subval[0][1][0].vald = 0; 
	
	handelsetabeller.intrigerillgarningar[36].subval[0][1][0].kontaktbas="Vet en hemlighet kring kontakt1_obestamd."
	handelsetabeller.intrigerillgarningar[36].subval[0][1][0].kontaktenhetbool=[1];
	handelsetabeller.intrigerillgarningar[36].subval[0][1][0].subvalrubrikbas="Välj vad rollpersonen lärt sig genom kontakt1_bestamd:";
	handelsetabeller.intrigerillgarningar[36].subval[0][1][0].beskrivningvaldbas = "Rollpersonen vet om en hemlighet kring en viktig person som är kontakt1_rubrikliten. ";
	handelsetabeller.intrigerillgarningar[36].subval[0][1][0].beskrivninghakvaldbas="Hur stor makt han eller hon får över denne kan skilja sig beroende på hemlighetens natur. Det kan vara kätterska vanor, stora skuldebrev eller något annat. ";
	
	handelsetabeller.intrigerillgarningar[37] = {}; 
	handelsetabeller.intrigerillgarningar[37].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[37].vald = 0; 
	handelsetabeller.intrigerillgarningar[37].rubrik = "Hemligt alter ego"
	handelsetabeller.intrigerillgarningar[37].beskrivning = "Rollpersonen har ett hemligt alter ego som denne antar. Kanske är det en person med en annan social status än vad rollpersonen egentligen har eller så kanske rollpersonen är förklädd till det motsatta könet för att på så vis få tillträde till andra yrken eller sällskap."
	handelsetabeller.intrigerillgarningar[37].beskrivninghak = "Expertisen Förklädnad 4T6. 3 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[37].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[37].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[37].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[37].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.intrigerillgarningar[37].subval[0][0][0].forkladnad = {};
	handelsetabeller.intrigerillgarningar[37].subval[0][0][0].forkladnad.enheter = 3;
	handelsetabeller.intrigerillgarningar[37].subval[0][0][0].ovrigt="Har ett hemligt alter ego."
	
	handelsetabeller.intrigerillgarningar[38] = {}; 
	handelsetabeller.intrigerillgarningar[38].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[38].vald = 0; 
	handelsetabeller.intrigerillgarningar[38].rubrik = "Hovliv och diplomati"
	handelsetabeller.intrigerillgarningar[38].beskrivning = "Rollpersonen har insikt i hovlivet och hur man bäst för sig där samt vilka man ska tala med och vilka man bör akta sig för."
	handelsetabeller.intrigerillgarningar[38].beskrivninghak = "\+2 Utstrålning. Lättlärd i Hovliv"
	handelsetabeller.intrigerillgarningar[38].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[38].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[38].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[38].subval[0][0][0].hovliv = {};
	handelsetabeller.intrigerillgarningar[38].subval[0][0][0].hovliv.lattlard=1; 
	handelsetabeller.intrigerillgarningar[38].subval[0][0][0].utstralning = {};
	handelsetabeller.intrigerillgarningar[38].subval[0][0][0].utstralning.varde =2; 

	handelsetabeller.intrigerillgarningar[39] = {}; 
	handelsetabeller.intrigerillgarningar[39].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[39].vald = 0; 
	handelsetabeller.intrigerillgarningar[39].rubrik = "Håller fester och bjudningar"
	handelsetabeller.intrigerillgarningar[39].beskrivning = "Rollpersonen brukar hålla i fester och bjudningar. Det kan vara allt ifrån orgier och regelrätta fylleslag till stela sammankomster där personer smuttar på vinglas och talar politik, religion och andra viktiga ting."
	handelsetabeller.intrigerillgarningar[39].beskrivninghak = "Expertisen Hålla bjudningar 4T6. 3 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[39].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[39].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[39].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[39].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.intrigerillgarningar[39].subval[0][0][0].hallabjudningar = {};
	handelsetabeller.intrigerillgarningar[39].subval[0][0][0].hallabjudningar.enheter = 3; 

	handelsetabeller.intrigerillgarningar[40] = {}; 
	handelsetabeller.intrigerillgarningar[40].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[40].vald = 0; 
	handelsetabeller.intrigerillgarningar[40].rubrik = "Illegal verksamhet"
	handelsetabeller.intrigerillgarningar[40].beskrivning = "Rollpersonen har en del i en vinstgivande men illegal verksamhet eller en som bara är ogillad och föraktad. Det kan röra sig om slavhandel, droghandel, häleri, prostitution eller liknande."
	handelsetabeller.intrigerillgarningar[40].beskrivninghak = "\+2 Psyke. Lättlärd i Handel och Skumraskaffärer. Verksamheten ger varje månad en inkomst på 4T6×5 silver. Nytt slag slås varje månad"
	handelsetabeller.intrigerillgarningar[40].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[40].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[40].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[40].subval[0][0][0].handel = {};
	handelsetabeller.intrigerillgarningar[40].subval[0][0][0].handel.lattlard=1; 
	handelsetabeller.intrigerillgarningar[40].subval[0][0][0].skumraskaffarer = {};
	handelsetabeller.intrigerillgarningar[40].subval[0][0][0].skumraskaffarer.lattlard=1; 
	handelsetabeller.intrigerillgarningar[40].subval[0][0][0].psyke = {};
	handelsetabeller.intrigerillgarningar[40].subval[0][0][0].psyke.varde =2; 
	handelsetabeller.intrigerillgarningar[40].subval[0][0][0].resurs="En del i en vinstgivande men illegal eller föraktad verksamhet som varje månad ger en inkomst på 4T6×5 silver."

	handelsetabeller.intrigerillgarningar[41] = {}; 
	handelsetabeller.intrigerillgarningar[41].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[41].vald = 0; 
	handelsetabeller.intrigerillgarningar[41].rubrik = "Information"
	handelsetabeller.intrigerillgarningar[41].beskrivning = "Rollpersonen har fått tag på information om något som egentligen inte skulle nå dennes öron. Exakt vad det är för information kan framkomma senare under spelets gång. Rollpersonen kan antingen använda informationen som handelsvara eller för att tjäna sina egna intressen.";
	handelsetabeller.intrigerillgarningar[41].beskrivninghak = "\+2 Visdom. För rätt person har informationen ett värde på 1T6×200 silver"
	handelsetabeller.intrigerillgarningar[41].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[41].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[41].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[41].subval[0][0][0].visdom = {};
	handelsetabeller.intrigerillgarningar[41].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.intrigerillgarningar[41].subval[0][0][0].ovrigt="Har fått tag på information om något som egentligen inte skulle nå dennes öron. För rätt person har informationen ett värde på 1T6×200 silver."
	
	handelsetabeller.intrigerillgarningar[42] = {}; 
	handelsetabeller.intrigerillgarningar[42].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[42].vald = 0; 
	handelsetabeller.intrigerillgarningar[42].rubrik = "Inger förtroende och sympati"
	handelsetabeller.intrigerillgarningar[42].beskrivning = "De allra flesta som kommit i kontakt med rollpersonen har fått ett gott intryck av denne."
	handelsetabeller.intrigerillgarningar[42].beskrivninghak = "\+2 Intryck. Expertisen Se oskyldig ut 4T6. Kännetecknet Hederligt intryck 4T6"
	handelsetabeller.intrigerillgarningar[42].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[42].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[42].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[42].subval[0][0][0].intryck = {};
	handelsetabeller.intrigerillgarningar[42].subval[0][0][0].intryck.bonus =2; 
	handelsetabeller.intrigerillgarningar[42].subval[0][0][0].seoskyldigut = {};
	handelsetabeller.intrigerillgarningar[42].subval[0][0][0].seoskyldigut.enheter = 3; 
	handelsetabeller.intrigerillgarningar[42].subval[0][0][0].hederligtintryck = {};
	handelsetabeller.intrigerillgarningar[42].subval[0][0][0].hederligtintryck.enheter = 3; 

	handelsetabeller.intrigerillgarningar[43] = {}; 
	handelsetabeller.intrigerillgarningar[43].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[43].vald = 0; 
	handelsetabeller.intrigerillgarningar[43].rubrik = "Inkomstbringande verksamhet"
	handelsetabeller.intrigerillgarningar[43].beskrivning = "Rollpersonen har en andel i en vinstgivande verksamhet, exempelvis en kvarn eller ett bageri för mindre förnäma rollpersoner eller ett handelskompani eller en akademi för en rikare rollperson. Med verksamheten som fasad kan rollpersonen köpa in varor av privat slag, knyta kontakter till sig och sin familj eller helt enkelt dryga ut familjekassan med hederlig handel."
	handelsetabeller.intrigerillgarningar[43].beskrivninghak = "\+2 Visdom. Lättlärd i Handel och Kalkylera. Verksamheten ger varje månad en inkomst på 2T6×10 silver. Nytt slag slås varje månad"
	handelsetabeller.intrigerillgarningar[43].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[43].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[43].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[43].subval[0][0][0].handel = {};
	handelsetabeller.intrigerillgarningar[43].subval[0][0][0].handel.lattlard=1; 
	handelsetabeller.intrigerillgarningar[43].subval[0][0][0].kalkylera = {};
	handelsetabeller.intrigerillgarningar[43].subval[0][0][0].kalkylera.lattlard=1; 
	handelsetabeller.intrigerillgarningar[43].subval[0][0][0].visdom = {};
	handelsetabeller.intrigerillgarningar[43].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.intrigerillgarningar[43].subval[0][0][0].resurs="En andel i en vinstgivande verksamhet som varje månad ger en inkomst på 2T6×10 silver. ";

	handelsetabeller.intrigerillgarningar[44] = {}; 
	handelsetabeller.intrigerillgarningar[44].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[44].vald = 0; 
	handelsetabeller.intrigerillgarningar[44].rubrik = "Insikt i fiendens planer"
	handelsetabeller.intrigerillgarningar[44].beskrivning = "Rollpersonen har fått insikt i fienders planer. Kanske har detta skett genom tortyr, manipulation, mutor eller regelrätt spionerande. Exakt vilka fienden är och vilka planer det handlade om är upp till spelaren."
	handelsetabeller.intrigerillgarningar[44].beskrivninghak = "\+2 i valfritt grundattribut. Lättlärd i valfri färdighet. Dessa ska vara kopplade till hur rollpersonen kom över planerna"
	handelsetabeller.intrigerillgarningar[44].beskrivninghakvaldbas = "";
	
	handelsetabeller.intrigerillgarningar[44].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[44].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[44].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[44].subval[0][0][0] = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][0][0].lattlardvalfri=1;
	
	handelsetabeller.intrigerillgarningar[44].subval[0].push([]);
	
	handelsetabeller.intrigerillgarningar[44].subval[0][1][0] = {}; 
	handelsetabeller.intrigerillgarningar[44].subval[0][1][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[44].subval[0][1][0].vald = 0; 
	
	handelsetabeller.intrigerillgarningar[44].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.intrigerillgarningar[44].subval[0][1][1] = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][1].valdasub = [];
	handelsetabeller.intrigerillgarningar[44].subval[0][1][1].vald = 0;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][1].styrka = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][1].styrka.varde=2;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][1].rubrik="Styrka"
	handelsetabeller.intrigerillgarningar[44].subval[0][1][1].beskrivninghakvaldbas = "\+2 Styrka. Lättlärd i valfri färdighet. Dessa ska vara kopplade till hur rollpersonen kom över planerna. ";
	
	handelsetabeller.intrigerillgarningar[44].subval[0][1][2] = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][2].valdasub = [];
	handelsetabeller.intrigerillgarningar[44].subval[0][1][2].vald = 0;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][2].talighet = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][2].talighet.varde=2;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][2].rubrik="Tålighet"
	handelsetabeller.intrigerillgarningar[44].subval[0][1][2].beskrivninghakvaldbas = "\+2 Tålighet. Lättlärd i valfri färdighet. Dessa ska vara kopplade till hur rollpersonen kom över planerna. ";
	
	
	handelsetabeller.intrigerillgarningar[44].subval[0][1][3] = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][3].valdasub = [];
	handelsetabeller.intrigerillgarningar[44].subval[0][1][3].vald = 0;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][3].rorlighet = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][3].rorlighet.varde=2;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][3].rubrik="Rörlighet"
	handelsetabeller.intrigerillgarningar[44].subval[0][1][3].beskrivninghakvaldbas = "\+2 Rörlighet. Lättlärd i valfri färdighet. Dessa ska vara kopplade till hur rollpersonen kom över planerna. ";
	
	
	handelsetabeller.intrigerillgarningar[44].subval[0][1][4] = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][4].valdasub = [];
	handelsetabeller.intrigerillgarningar[44].subval[0][1][4].vald = 0;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][4].uppfattning = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][4].uppfattning.varde=2;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][4].rubrik="Uppfattning"
	handelsetabeller.intrigerillgarningar[44].subval[0][1][4].beskrivninghak = "\+2 Uppfattning. Lättlärd i valfri färdighet. Dessa ska vara kopplade till hur rollpersonen kom över planerna";
	
	handelsetabeller.intrigerillgarningar[44].subval[0][1][5] = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][5].valdasub = [];
	handelsetabeller.intrigerillgarningar[44].subval[0][1][5].vald = 0;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][5].vilja = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][5].vilja.varde=2;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][5].rubrik="Vilja"
	handelsetabeller.intrigerillgarningar[44].subval[0][1][5].beskrivninghakvaldbas = "\+2 Vilja. Lättlärd i valfri färdighet. Dessa ska vara kopplade till hur rollpersonen kom över planerna";
	
	
	handelsetabeller.intrigerillgarningar[44].subval[0][1][6] = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][6].valdasub = [];
	handelsetabeller.intrigerillgarningar[44].subval[0][1][6].vald = 0;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][6].psyke = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][6].psyke.varde=2;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][6].rubrik="Psyke"
	handelsetabeller.intrigerillgarningar[44].subval[0][1][6].beskrivninghakvaldbas = "\+2 Psyke. Lättlärd i valfri färdighet. Dessa ska vara kopplade till hur rollpersonen kom över planerna";
	
	
	handelsetabeller.intrigerillgarningar[44].subval[0][1][7] = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][7].valdasub = [];
	handelsetabeller.intrigerillgarningar[44].subval[0][1][7].vald = 0;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][7].visdom = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][7].visdom.varde=2;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][7].rubrik="Visdom"
	handelsetabeller.intrigerillgarningar[44].subval[0][1][7].beskrivninghakvaldbas = "\+2 Visdom. Lättlärd i valfri färdighet. Dessa ska vara kopplade till hur rollpersonen kom över planerna";
	
	
	handelsetabeller.intrigerillgarningar[44].subval[0][1][8] = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][8].valdasub = [];
	handelsetabeller.intrigerillgarningar[44].subval[0][1][8].vald = 0;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][8].utstralning = {};
	handelsetabeller.intrigerillgarningar[44].subval[0][1][8].utstralning.varde=2;
	handelsetabeller.intrigerillgarningar[44].subval[0][1][8].rubrik="Utstrålning"
	handelsetabeller.intrigerillgarningar[44].subval[0][1][8].beskrivninghakvaldbas = "\+2 Utstrålning. Lättlärd i valfri färdighet. Dessa ska vara kopplade till hur rollpersonen kom över planerna.";
	
	
	handelsetabeller.intrigerillgarningar[45] = {}; 
	handelsetabeller.intrigerillgarningar[45].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[45].vald = 0; 
	handelsetabeller.intrigerillgarningar[45].rubrik = "Insikt i undre världen"
	handelsetabeller.intrigerillgarningar[45].beskrivning = "Rollpersonen har god inblick i den undre världens beskaffenheter."
	handelsetabeller.intrigerillgarningar[45].beskrivninghak = "Lättlärd i Skumraskaffärer. Expertisen Kloaksystem 4T6"
	handelsetabeller.intrigerillgarningar[45].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[45].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[45].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[45].subval[0][0][0].skumraskaffarer = {};
	handelsetabeller.intrigerillgarningar[45].subval[0][0][0].skumraskaffarer.lattlard=1; 
	handelsetabeller.intrigerillgarningar[45].subval[0][0][0].kloaksystem = {};
	handelsetabeller.intrigerillgarningar[45].subval[0][0][0].kloaksystem.enheter = 3; 

	handelsetabeller.intrigerillgarningar[46] = {}; 
	handelsetabeller.intrigerillgarningar[46].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[46].vald = 0; 
	handelsetabeller.intrigerillgarningar[46].rubrik = "Kidnappad"
	handelsetabeller.intrigerillgarningar[46].beskrivning = "Personen blev av en eller annan anledning kidnappad men blev friköpt eller lyckades rymma. Under tiden lärde sig denne dock något av antingen kidnapparna eller någon av de andra som blev kidnappade."
	handelsetabeller.intrigerillgarningar[46].beskrivninghak = "1 poäng Expertiser. 1 Avtrubbningskryss för utsatthet"
	handelsetabeller.intrigerillgarningar[46].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[46].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[46].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[46].subval[0][0][0].expertispoang = 1; 
	handelsetabeller.intrigerillgarningar[46].subval[0][0][0].avtrubbningutsatthet = 1; 
	

	handelsetabeller.intrigerillgarningar[47] = {}; 
	handelsetabeller.intrigerillgarningar[47].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[47].vald = 0; 
	handelsetabeller.intrigerillgarningar[47].rubrik = "Kontrakt"
	handelsetabeller.intrigerillgarningar[47].beskrivning = "Rollpersonen har ett dokument som bevisar ett samarbete mellan denne och en grupp eller person. Vad kontraktet går ut på är upp till spelaren, men det ska vara förmånligt för alla inblandade. Det kan vara så att rollpersonen har rabatt hos en viss butiksinnehavare mot att denne sprider ordet om butiken, eller att rollpersonen åker billigare med en viss färjekarl därför att han eller hon är bortlovad med dennes dotter."
	handelsetabeller.intrigerillgarningar[47].beskrivninghak = "4 valfria enheter som är kopplade till det som står i kontraktet"
	handelsetabeller.intrigerillgarningar[47].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[47].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[47].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[47].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.intrigerillgarningar[47].subval[0][0][0].resurs="Har ett förmånligt kontrakt."
	
	handelsetabeller.intrigerillgarningar[48] = {}; 
	handelsetabeller.intrigerillgarningar[48].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[48].vald = 0; 
	handelsetabeller.intrigerillgarningar[48].rubrik = "Korrumperad"
	handelsetabeller.intrigerillgarningar[48].beskrivning = "Rollpersonen kan inte hjälpa det men makt, pengar, sex, dekadens eller bara kontroll är så lockande och svårt att stå emot."
	handelsetabeller.intrigerillgarningar[48].beskrivninghak = "2 Avtrubbningskryss för utsatthet. Rollpersonen får välja mellan Makt, Rikedom eller Sex som sitt sekundära karaktärsdrag som också är Låst"
	handelsetabeller.intrigerillgarningar[48].beskrivninghakvaldbas = "2 Avtrubbningskryss för utsatthet. ";
	handelsetabeller.intrigerillgarningar[48].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[48].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[48].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[48].subval[0][0][0].avtrubbningutsatthet=2; 
	
	handelsetabeller.intrigerillgarningar[48].subval[0].push([]);
	handelsetabeller.intrigerillgarningar[48].subval[0][1][0] = {}; 
	handelsetabeller.intrigerillgarningar[48].subval[0][1][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[48].subval[0][1][0].vald = 0; 
	
	
	handelsetabeller.intrigerillgarningar[48].subval[0][1][0].antalsubval=1;
	handelsetabeller.intrigerillgarningar[48].subval[0][0][0].subvalrubrik="Välj ett sekundärt karaktärsdrag som dessutom är Låst";
	
	handelsetabeller.intrigerillgarningar[48].subval[0][1][1] = {}; 
	handelsetabeller.intrigerillgarningar[48].subval[0][1][1].valdasub = []; 
	handelsetabeller.intrigerillgarningar[48].subval[0][1][1].vald = 0; 
	
	handelsetabeller.intrigerillgarningar[48].subval[0][1][1].rubrik="Makt";
	handelsetabeller.intrigerillgarningar[48].subval[0][1][1].karaktarsdrag="Det sekundära karaktärsdraget är Makt, vilket dessutom är Låst";
	handelsetabeller.intrigerillgarningar[48].subval[0][1][1].beskrivninghakvaldbas="Det sekundära karaktärsdraget är Makt, vilket dessutom är Låst";
	
	handelsetabeller.intrigerillgarningar[48].subval[0][1][2] = {}; 
	handelsetabeller.intrigerillgarningar[48].subval[0][1][2].valdasub = []; 
	handelsetabeller.intrigerillgarningar[48].subval[0][1][2].vald = 0; 
	
	handelsetabeller.intrigerillgarningar[48].subval[0][1][2].rubrik="Rikedom";
	handelsetabeller.intrigerillgarningar[48].subval[0][1][2].karaktarsdrag="Det sekundära karaktärsdraget är Rikedom, vilket dessutom är Låst";
	handelsetabeller.intrigerillgarningar[48].subval[0][1][2].beskrivninghakvaldbas="Det sekundära karaktärsdraget är Rikedom, vilket dessutom är Låst";
	
	handelsetabeller.intrigerillgarningar[48].subval[0][1][3] = {}; 
	handelsetabeller.intrigerillgarningar[48].subval[0][1][3].valdasub = []; 
	handelsetabeller.intrigerillgarningar[48].subval[0][1][3].vald = 0; 
	
	handelsetabeller.intrigerillgarningar[48].subval[0][1][3].rubrik="Sex";
	handelsetabeller.intrigerillgarningar[48].subval[0][1][3].karaktarsdrag="Det sekundära karaktärsdraget är Sex, vilket dessutom är Låst";
	handelsetabeller.intrigerillgarningar[48].subval[0][1][3].beskrivninghakvaldbas="Det sekundära karaktärsdraget är Sex, vilket dessutom är Låst";
	 

	handelsetabeller.intrigerillgarningar[49] = {}; 
	handelsetabeller.intrigerillgarningar[49].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[49].vald = 0; 
	handelsetabeller.intrigerillgarningar[49].rubrik = "Lurad"
	handelsetabeller.intrigerillgarningar[49].beskrivning = "Personen har blivit lurad av en person som denne litat på. Detta har antingen kostat personen mycket pengar, heder eller ära."
	handelsetabeller.intrigerillgarningar[49].beskrivningvaldbas = "";
	
	handelsetabeller.intrigerillgarningar[49].beskrivninghak = "1 Avtrubbningskryss för utsatthet. Slå två gånger på bakgrundstabellen och välj en som visar vem som lurat personen. Om rollpersonen får tillfälle att hämnas på den som lurade denne återfås 5 Fokus"
	handelsetabeller.intrigerillgarningar[49].beskrivninghak = "1 Avtrubbningskryss för utsatthet. ";
	handelsetabeller.intrigerillgarningar[49].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[49].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[49].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[49].subval[0][0][0].avtrubbningutsatthet=1;
	handelsetabeller.intrigerillgarningar[49].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[49].subval[0][0][0].kontaktbas="Har blivit lurad av kontakt1_obestamd.";
	handelsetabeller.intrigerillgarningar[49].subval[0][0][0].beskrivningvaldbas = "Personen har blivit lurad av kontakt1_obestamd som denne litat på. Detta har antingen kostat personen mycket pengar, heder eller ära."
	handelsetabeller.intrigerillgarningar[49].subval[0][0][0].beskrivninghakvaldbas = "Om rollpersonen får tillfälle att hämnas på kontakt1_bestamd återfås 5 Fokus";
	
	
	handelsetabeller.intrigerillgarningar[50] = {}; 
	handelsetabeller.intrigerillgarningar[50].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[50].vald = 0; 
	handelsetabeller.intrigerillgarningar[50].rubrik = "Låsdyrkar"
	handelsetabeller.intrigerillgarningar[50].beskrivning = "Rollpersonen har en samling låsdyrkar av superb kvalité. Dyrkarna har varierande storlek och kan användas för att låsa upp allt ifrån ytterdörrar till smyckesskrin."
	handelsetabeller.intrigerillgarningar[50].beskrivninghak = "\+2 Rörlighet. Lättlärd i Fingerfärdighet och Låsdyrkning. Låsdyrkarna ger \+1T6 i bonus till alla slag för att öppna lås"
	handelsetabeller.intrigerillgarningar[50].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[50].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[50].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[50].subval[0][0][0].fingerfardighet = {};
	handelsetabeller.intrigerillgarningar[50].subval[0][0][0].fingerfardighet.lattlard=1; 
	handelsetabeller.intrigerillgarningar[50].subval[0][0][0].lasdyrkning = {};
	handelsetabeller.intrigerillgarningar[50].subval[0][0][0].lasdyrkning.lattlard=1; 
	handelsetabeller.intrigerillgarningar[50].subval[0][0][0].rorlighet = {};
	handelsetabeller.intrigerillgarningar[50].subval[0][0][0].rorlighet.varde =2; 
	handelsetabeller.intrigerillgarningar[50].subval[0][0][0].resurs="Låsdyrkar som ger \+1T6 i bonus till alla slag för att öppna lås."
	
	handelsetabeller.intrigerillgarningar[51] = {}; 
	handelsetabeller.intrigerillgarningar[51].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[51].vald = 0; 
	handelsetabeller.intrigerillgarningar[51].rubrik = "Lögnernas mästare"
	handelsetabeller.intrigerillgarningar[51].beskrivning = "Rollpersonen är en mästare på att få folk att tro på denne även när det som sägs inte är sant."
	handelsetabeller.intrigerillgarningar[51].beskrivninghak = "Lättlärd i Dupera. Hantverket Förfalskare 4T6"
	handelsetabeller.intrigerillgarningar[51].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[51].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[51].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[51].subval[0][0][0].dupera = {};
	handelsetabeller.intrigerillgarningar[51].subval[0][0][0].dupera.lattlard=1; 
	handelsetabeller.intrigerillgarningar[51].subval[0][0][0].forfalskare = {};
	handelsetabeller.intrigerillgarningar[51].subval[0][0][0].forfalskare.enheter = 3; 

	handelsetabeller.intrigerillgarningar[52] = {}; 
	handelsetabeller.intrigerillgarningar[52].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[52].vald = 0; 
	handelsetabeller.intrigerillgarningar[52].rubrik = "Lömskt beteende"
	handelsetabeller.intrigerillgarningar[52].beskrivning = "Rollpersonen har ett mycket lömskt beteende och manipulerar sin omgivning."
	handelsetabeller.intrigerillgarningar[52].beskrivninghak = "Expertiserna Korrumpera 4T6 och Peka ut syndabockar 4T6"
	handelsetabeller.intrigerillgarningar[52].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[52].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[52].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[52].subval[0][0][0].korrumpera = {};
	handelsetabeller.intrigerillgarningar[52].subval[0][0][0].korrumpera.enheter = 3; 
	handelsetabeller.intrigerillgarningar[52].subval[0][0][0].pekautsyndabockar = {};
	handelsetabeller.intrigerillgarningar[52].subval[0][0][0].pekautsyndabockar.enheter = 3; 

	handelsetabeller.intrigerillgarningar[53] = {}; 
	handelsetabeller.intrigerillgarningar[53].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[53].vald = 0; 
	handelsetabeller.intrigerillgarningar[53].rubrik = "Löst tvist"
	handelsetabeller.intrigerillgarningar[53].beskrivning = "Rollpersonen har löst en tvist som länge skapat splittring och dispyter. Detta kan vara allt ifrån äganderätt till ett särskilt område, religiösa spörsmål eller ett bråk mellan två byar eller släkter. Tvisten tog lång tid att lösa och krävde en hel del tankearbete och diplomati från rollpersonens sida."
	handelsetabeller.intrigerillgarningar[53].beskrivninghak = "\+1 Psyke, \+1 Utstrålning. 3 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[53].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[53].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[53].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[53].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.intrigerillgarningar[53].subval[0][0][0].psyke = {};
	handelsetabeller.intrigerillgarningar[53].subval[0][0][0].psyke.varde =1; 
	handelsetabeller.intrigerillgarningar[53].subval[0][0][0].utstralning = {};
	handelsetabeller.intrigerillgarningar[53].subval[0][0][0].utstralning.varde =1; 
	handelsetabeller.intrigerillgarningar[53].subval[0][0][0].ovrigt="Har löst en tvist." 


	handelsetabeller.intrigerillgarningar[54] = {}; 
	handelsetabeller.intrigerillgarningar[54].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[54].vald = 0; 
	handelsetabeller.intrigerillgarningar[54].rubrik = "Manipulativ"
	handelsetabeller.intrigerillgarningar[54].beskrivning = "Rollpersonen har lärt sig hur man manipulerar och kontrollerar andra individer för att få dem att göra som man vill."
	handelsetabeller.intrigerillgarningar[54].beskrivninghak = "\+1 Psyke. 4 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[54].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[54].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[54].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[54].subval[0][0][0].socialafardigheterenheter = 4; 
	handelsetabeller.intrigerillgarningar[54].subval[0][0][0].psyke = {};
	handelsetabeller.intrigerillgarningar[54].subval[0][0][0].psyke.varde =1; 

	handelsetabeller.intrigerillgarningar[55] = {}; 
	handelsetabeller.intrigerillgarningar[55].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[55].vald = 0; 
	handelsetabeller.intrigerillgarningar[55].rubrik = "Musikalisk talang"
	handelsetabeller.intrigerillgarningar[55].beskrivning = "Rollpersonen har en musikalisk talang som uppskattas av de flesta."
	handelsetabeller.intrigerillgarningar[55].beskrivninghak = "Lättlärd i Sång \& musik. Expertisen Komponera musik 4T6"
	handelsetabeller.intrigerillgarningar[55].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[55].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[55].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[55].subval[0][0][0].sangmusik = {};
	handelsetabeller.intrigerillgarningar[55].subval[0][0][0].sangmusik.lattlard=1; 
	handelsetabeller.intrigerillgarningar[55].subval[0][0][0].komponeramusik = {};
	handelsetabeller.intrigerillgarningar[55].subval[0][0][0].komponeramusik.enheter = 3; 

	handelsetabeller.intrigerillgarningar[56] = {}; 
	handelsetabeller.intrigerillgarningar[56].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[56].vald = 0; 
	handelsetabeller.intrigerillgarningar[56].rubrik = "Mutat makthavare"
	handelsetabeller.intrigerillgarningar[56].beskrivning = "Rollpersonen har blivit ertappad som kättare eller något annat brottsligt men mutat en makthavare för att denne skulle hemlighålla vad rollpersonen gjort. Exakt vad är upp till spelledaren."
	handelsetabeller.intrigerillgarningar[56].beskrivninghak = "Expertisen Muta 4T6. 2 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[56].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[56].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[56].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[56].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[56].subval[0][0][0].muta = {};
	handelsetabeller.intrigerillgarningar[56].subval[0][0][0].muta.enheter = 3; 
	handelsetabeller.intrigerillgarningar[56].subval[0][0][0].ovrigt="Har blivit ertappad för ett brott och därefter mutat makthavare för att hålla brottet hemligt."
	

	handelsetabeller.intrigerillgarningar[57] = {}; 
	handelsetabeller.intrigerillgarningar[57].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[57].vald = 0; 
	handelsetabeller.intrigerillgarningar[57].rubrik = "Mutor"
	handelsetabeller.intrigerillgarningar[57].beskrivning = "Rollpersonen har ett stort nätverk i sin sociala sfär och vidarebefordrar kontakter, tjänster och information. I gengäld så får denne ett ständigt tillflöde av silver."
	handelsetabeller.intrigerillgarningar[57].beskrivningvaldbas = "Rollpersonen har ett stort nätverk i sin sociala sfär och vidarebefordrar kontakter, tjänster och information. I gengäld så får denne ett ständigt tillflöde av silver. "
	
	handelsetabeller.intrigerillgarningar[57].beskrivninghak = "2 enheter Sociala färdigheter. Slå två gånger på bakgrundstabellen och välj en som visar vilka kontakter som rollpersonen kan introducera i spel och använda sig av. Mutorna ger varje månad en inkomst på 4T6×5 silver"
	handelsetabeller.intrigerillgarningar[57].beskrivninghakvaldbas = "2 enheter Sociala färdigheter. Mutorna ger varje månad en inkomst på 4T6×5 silver. "
	
	handelsetabeller.intrigerillgarningar[57].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[57].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[57].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[57].subval[0][0][0].socialafardigheterenheter=2;
	handelsetabeller.intrigerillgarningar[57].subval[0][0][0].resurs="Mutor som varje månad	ger en inkomst på 4T6×5 silver."
	handelsetabeller.intrigerillgarningar[57].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[57].subval[0][0][0].kontaktbas="Känner kontakt1_obestamd som är inblandad i mutaffärer med rollpersonen.";
	handelsetabeller.intrigerillgarningar[57].subval[0][0][0].beskrivningvaldbas = "I rollpersonens nätverk finns bland annat kontakt1_obestamd.";
	
	handelsetabeller.intrigerillgarningar[58] = {}; 
	handelsetabeller.intrigerillgarningar[58].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[58].vald = 0; 
	handelsetabeller.intrigerillgarningar[58].rubrik = "Märkt"
	handelsetabeller.intrigerillgarningar[58].beskrivning = "Personen har blivit märkt av en fiende som en varning eller ett hot. Detta kan röra sig om ett ärr, ett brännmärke eller en tatuering, som finns någonstans på personens kropp."
	handelsetabeller.intrigerillgarningar[58].beskrivninghak = "1 Avtrubbningskryss för utsatthet eller våld. Om märket upptäcks eller avslöjas får rollpersonen –1T6 på ett av slagen i alla sociala konflikter"
	handelsetabeller.intrigerillgarningar[58].beskrivninghakvaldbas = "Om märket upptäcks eller avslöjas får rollpersonen –1T6 på ett av slagen i alla sociala konflikter. ";
	
	handelsetabeller.intrigerillgarningar[58].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[58].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[58].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[58].subval[0][0][0].utseende="Märkt av en fiende \(exempelvis ärr, brännmärke eller tatuering\)."
	
	handelsetabeller.intrigerillgarningar[58].subval[0].push([]);
	handelsetabeller.intrigerillgarningar[58].subval[0][1][0] = {}; 
	handelsetabeller.intrigerillgarningar[58].subval[0][1][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[58].subval[0][1][0].vald = 0; 
	
	handelsetabeller.intrigerillgarningar[58].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.intrigerillgarningar[58].subval[0][1][1] = {};
	handelsetabeller.intrigerillgarningar[58].subval[0][1][1].valdasub = [];
	handelsetabeller.intrigerillgarningar[58].subval[0][1][1].vald = 0;
	handelsetabeller.intrigerillgarningar[58].subval[0][1][1].avtrubbningutsatthet=1;
	handelsetabeller.intrigerillgarningar[58].subval[0][1][1].rubrik="1 Avtrubbningskryss \(utsatthet\)"
	handelsetabeller.intrigerillgarningar[58].subval[0][1][1].beskrivninghakvaldbas="1 Avtrubbningskryss \(utsatthet\)";
	
	handelsetabeller.intrigerillgarningar[58].subval[0][1][2] = {};
	handelsetabeller.intrigerillgarningar[58].subval[0][1][2].valdasub = [];
	handelsetabeller.intrigerillgarningar[58].subval[0][1][2].vald = 0;
	handelsetabeller.intrigerillgarningar[58].subval[0][1][2].avtrubbningvald=1;
	handelsetabeller.intrigerillgarningar[58].subval[0][1][2].rubrik="1 Avtrubbningskryss \(våld\)"
	handelsetabeller.intrigerillgarningar[58].subval[0][1][2].beskrivninghakvaldbas="1 Avtrubbningskryss \(våld\)";
	
	
	handelsetabeller.intrigerillgarningar[59] = {}; 
	handelsetabeller.intrigerillgarningar[59].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[59].vald = 0; 
	handelsetabeller.intrigerillgarningar[59].rubrik = "Nymfoman"
	handelsetabeller.intrigerillgarningar[59].beskrivning = "Rollpersonen är besatt vid att kopulera och strävar allt som oftast för att få göra detta."
	handelsetabeller.intrigerillgarningar[59].beskrivningvaldbas = "Rollpersonen är besatt vid att kopulera och strävar allt som oftast för att få göra detta. ";
	handelsetabeller.intrigerillgarningar[59].beskrivninghak = "Expertisen Flörta 4T6. Slå tre gånger på bakgrundstabellen för att ta reda på rollpersonens tre senaste erövringar. Rollpersonen får karaktärsdraget Sex som är Låst (valfritt om det är primärt eller sekundärt)"
	handelsetabeller.intrigerillgarningar[59].beskrivninghakvaldbas = "Expertisen Flörta 4T6. Rollpersonen får karaktärsdraget Sex som är Låst (valfritt om det är primärt eller sekundärt)"
	
	handelsetabeller.intrigerillgarningar[59].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[59].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[59].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[59].subval[0][0][0].florta = {};
	handelsetabeller.intrigerillgarningar[59].subval[0][0][0].florta.enheter=3;
	handelsetabeller.intrigerillgarningar[59].subval[0][0][0].ovrigtbas="Är nymfoman. Rollpersonens tre senaste erövringar är kontakt1_obestamd, kontakt2_obestamd och kontakt3_obestamd."
	handelsetabeller.intrigerillgarningar[59].subval[0][0][0].beskrivningvaldbas="Rollpersonens tre senaste erövringar är kontakt1_obestamd, kontakt2_obestamd och kontakt3_obestamd."
	handelsetabeller.intrigerillgarningar[59].subval[0][0][0].karaktarsdrag="Karaktärsdraget Sex är Låst \(valfritt om det är primärt eller sekundärt\)"
	handelsetabeller.intrigerillgarningar[59].subval[0][0][0].kontaktenhetbool=[0,0,0];
	
	handelsetabeller.intrigerillgarningar[60] = {}; 
	handelsetabeller.intrigerillgarningar[60].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[60].vald = 0; 
	handelsetabeller.intrigerillgarningar[60].rubrik = "Orgier"
	handelsetabeller.intrigerillgarningar[60].beskrivning = "Rollpersonen har en passion för orgier. Detta kan vara allt från en handfull smutsiga hamnskökor och några krus billigt vin till galna tillställningar där inoljade slavar lyder minsta befallning. Detta leverne ses naturligtvis som dekadent och syndigt av många."
	handelsetabeller.intrigerillgarningar[60].beskrivninghak = "\+2 Tålighet. 2 poäng Expertiser som ska symbolisera vad personen har lärt sig eller hur denne har påverkats av det dekadenta livet"
	handelsetabeller.intrigerillgarningar[60].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[60].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[60].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[60].subval[0][0][0].talighet = {};
	handelsetabeller.intrigerillgarningar[60].subval[0][0][0].talighet.varde=2;
	handelsetabeller.intrigerillgarningar[60].subval[0][0][0].expertispoang=2;
	handelsetabeller.intrigerillgarningar[60].subval[0][0][0].ovrigt="Har en passion för orgier."	
	
	handelsetabeller.intrigerillgarningar[61] = {}; 
	handelsetabeller.intrigerillgarningar[61].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[61].vald = 0; 
	handelsetabeller.intrigerillgarningar[61].rubrik = "Osmaklig handling"
	handelsetabeller.intrigerillgarningar[61].beskrivning = "Rollpersonen har utfört en osmaklig handling som denne skäms och äcklas av."
	handelsetabeller.intrigerillgarningar[61].beskrivninghak = "Expertiserna Perversiteter 4T6 och Äckla 4T6."
	handelsetabeller.intrigerillgarningar[61].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[61].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[61].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[61].subval[0][0][0].perversiteter = {};
	handelsetabeller.intrigerillgarningar[61].subval[0][0][0].perversiteter.enheter = 3; 
	handelsetabeller.intrigerillgarningar[61].subval[0][0][0].ackla = {};
	handelsetabeller.intrigerillgarningar[61].subval[0][0][0].ackla.enheter = 3; 
	handelsetabeller.intrigerillgarningar[61].subval[0][0][0].ovrigt="Rollpersonen har utfört en osmaklig handling som denne skäms och äcklas av."

	
	handelsetabeller.intrigerillgarningar[62] = {}; 
	handelsetabeller.intrigerillgarningar[62].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[62].vald = 0; 
	handelsetabeller.intrigerillgarningar[62].rubrik = "Otrohetsdrama"
	handelsetabeller.intrigerillgarningar[62].beskrivning = "Rollpersonen har varit en del i ett otrohetsdrama som slutade med att alla inblandades vänskap byttes till osämja. Vilken skuld rollpersonen har i det hela är upp till spelaren att bestämma."
	handelsetabeller.intrigerillgarningar[62].beskrivninghak = "2 Avtrubbningskryss för utsatthet"
	handelsetabeller.intrigerillgarningar[62].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[62].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[62].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[62].subval[0][0][0].avtrubbningutsatthet = 2; 
	handelsetabeller.intrigerillgarningar[62].subval[0][0][0].ovrigt="Har varit en del i ett otrohetsdrama."

	handelsetabeller.intrigerillgarningar[63] = {}; 
	handelsetabeller.intrigerillgarningar[63].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[63].vald = 0; 
	handelsetabeller.intrigerillgarningar[63].rubrik = "Passionsbrott"
	handelsetabeller.intrigerillgarningar[63].beskrivning = "Rollpersonen har blivit fälld för passionsbrott och blivit häcklad offentlig för att sona sina synder. Exakt vad brottet rör sig om är upp till spelaren att bestämma."
	handelsetabeller.intrigerillgarningar[63].beskrivninghak = "Expertisen Perversiteter 4T6. 1 Avtrubbningskryss för utsatthet"
	handelsetabeller.intrigerillgarningar[63].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[63].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[63].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[63].subval[0][0][0].perversiteter = {};
	handelsetabeller.intrigerillgarningar[63].subval[0][0][0].perversiteter.enheter = 3; 
	handelsetabeller.intrigerillgarningar[63].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.intrigerillgarningar[63].subval[0][0][0].ovrigt="Har blivit fälld för passionsbrott och blivit häcklad offentlig för att sona sina synder."
	
	handelsetabeller.intrigerillgarningar[64] = {}; 
	handelsetabeller.intrigerillgarningar[64].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[64].vald = 0; 
	handelsetabeller.intrigerillgarningar[64].rubrik = "Problematiskt syskon"
	handelsetabeller.intrigerillgarningar[64].beskrivning = "Rollpersonen har en bror eller en syster som gång på gång ställer till det. Detta kan röra sig om ett odugligt syskon som saknar social kompetens eller någon som utför föraktade dåd, skapar konflikter och drar rollpersonens namn i smutsen."
	handelsetabeller.intrigerillgarningar[64].beskrivningvaldbas = "";
	
	handelsetabeller.intrigerillgarningar[64].beskrivninghak = "\+2 Vilja. 1 Avtrubbningskryss för utsatthet. Slå två gånger på bakgrundstabellen och välj en som visar vilken situation syskonet är i"
	handelsetabeller.intrigerillgarningar[64].beskrivninghakvaldbas = "\+2 Vilja. ";
	
	handelsetabeller.intrigerillgarningar[64].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[64].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[64].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[64].subval[0][0][0].vilja = {};
	handelsetabeller.intrigerillgarningar[64].subval[0][0][0].vilja.varde=2;
	handelsetabeller.intrigerillgarningar[64].subval[0][0][0].avtrubbningutsatthet=1; 
	handelsetabeller.intrigerillgarningar[64].subval[0][0][0].kontaktenhetbool=[0]; 
	handelsetabeller.intrigerillgarningar[64].subval[0][0][0].kontaktbas="Har ett problematisk syskon som är kontakt1_rubrikliten."; 
	handelsetabeller.intrigerillgarningar[64].subval[0][0][0].beskrivningvaldbas = "Rollpersonen har en bror eller en syster som är kontakt1_rubrikliten och som gång på gång ställer till det. Detta kan röra sig om ett odugligt syskon som saknar social kompetens eller någon som utför föraktade dåd, skapar konflikter och drar rollpersonens namn i smutsen.";
	
	

	handelsetabeller.intrigerillgarningar[65] = {}; 
	handelsetabeller.intrigerillgarningar[65].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[65].vald = 0; 
	handelsetabeller.intrigerillgarningar[65].rubrik = "Satt dit någon"
	handelsetabeller.intrigerillgarningar[65].beskrivning = "Rollpersonen har satt dit en motståndare för ett brott som denne inte hade begått. Det kanske till och med var det rollpersonen själv som gjort detta?"
	handelsetabeller.intrigerillgarningar[65].beskrivningvaldbas = "";

	handelsetabeller.intrigerillgarningar[65].beskrivninghak = "Expertisen Skylla på andra 4T6. 2 enheter Sociala färdigheter. Slå två gånger på bakgrundstabellen och välj en som visar vem som rollpersonen satt dit"
	handelsetabeller.intrigerillgarningar[65].beskrivninghakvaldbas = "Expertisen Skylla på andra 4T6. 2 enheter Sociala färdigheter. ";
	
	handelsetabeller.intrigerillgarningar[65].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[65].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[65].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[65].subval[0][0][0].skyllapaandra = {};
	handelsetabeller.intrigerillgarningar[65].subval[0][0][0].skyllapaandra.enheter=3;
	handelsetabeller.intrigerillgarningar[65].subval[0][0][0].socialafardigheterenheter=2;
	handelsetabeller.intrigerillgarningar[65].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[65].subval[0][0][0].kontaktbas="Har satt dit kontakt1_obestamd.";
	handelsetabeller.intrigerillgarningar[65].subval[0][0][0].beskrivningvaldbas = "Rollpersonen har satt dit kontakt1_obestamd för ett brott som denne inte hade begått. Det kanske till och med var det rollpersonen själv som gjort detta?";
	
	

	handelsetabeller.intrigerillgarningar[66] = {}; 
	handelsetabeller.intrigerillgarningar[66].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[66].vald = 0; 
	handelsetabeller.intrigerillgarningar[66].rubrik = "Segrat i duell"
	handelsetabeller.intrigerillgarningar[66].beskrivning = "Konflikter eskalerade och det hela urartade i en duell mellan rollpersonen och dennes motståndare framför en stor grupp andra. Det kan ha varit allt ifrån ett slagsmål till korsade svärd och ordväxlingar men rollpersonen gick segrande från det hela med sin heder i behåll medan motståndaren blev förnedrad och nu hatar rollpersonen djupt."
	handelsetabeller.intrigerillgarningar[66].beskrivningvaldbas = "";
	
	handelsetabeller.intrigerillgarningar[66].beskrivninghak = "\+2 Vilja. 3 valfria enheter som är knutna till duellen. Slå två gånger på bakgrundstabellen och välj en som visar vem som är rollpersonens fiende"
	handelsetabeller.intrigerillgarningar[66].beskrivninghakvaldbas = "\+2 Vilja. 3 valfria enheter som är knutna till duellen. ";
	
	handelsetabeller.intrigerillgarningar[66].subval[0][0][0] = {};
	handelsetabeller.intrigerillgarningar[66].subval[0][0][0].valdasub = [];
	handelsetabeller.intrigerillgarningar[66].subval[0][0][0].vald = 0;
	handelsetabeller.intrigerillgarningar[66].subval[0][0][0].vilja = {};
	handelsetabeller.intrigerillgarningar[66].subval[0][0][0].vilja.varde=2;
	handelsetabeller.intrigerillgarningar[66].subval[0][0][0].valfriaenheter=3;
	handelsetabeller.intrigerillgarningar[66].subval[0][0][0].kontaktbas="Har segrat i en duell mot kontakt1_obestamd";
	handelsetabeller.intrigerillgarningar[66].subval[0][0][0].beskrivningvaldbas="Konflikter eskalerade och det hela urartade i en duell mellan rollpersonen och kontakt1_obestamd framför en stor grupp andra. Det kan ha varit allt ifrån ett slagsmål till korsade svärd och ordväxlingar men rollpersonen gick segrande från det hela med sin heder i behåll medan kontakt1_bestamd blev förnedrad och nu hatar rollpersonen djupt.";
	
	handelsetabeller.intrigerillgarningar[66].subval[0][0][0].kontaktenhetbool=[0];
	
	handelsetabeller.intrigerillgarningar[67] = {}; 
	handelsetabeller.intrigerillgarningar[67].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[67].vald = 0; 
	handelsetabeller.intrigerillgarningar[67].rubrik = "Ser personers svagheter"
	handelsetabeller.intrigerillgarningar[67].beskrivning = "Rollpersonen har en förmåga att se personers svagheter och utnyttja dessa för att få personer att göra som denne vill. Genom att använda rätt ord så kan rollpersonen linda dessa runt sitt finger och de som försöker gå emot rollpersonen kommer må ytterst dåligt av detta."
	handelsetabeller.intrigerillgarningar[67].beskrivninghak = "3 enheter Sociala färdigheter. Om rollpersonen vinner en social konflikt ökar Kontroll med \+2"
	handelsetabeller.intrigerillgarningar[67].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[67].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[67].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[67].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.intrigerillgarningar[67].subval[0][0][0].formaga="Om rollpersonen vinner en social konflikt ökar Kontroll med \+2."
	
	handelsetabeller.intrigerillgarningar[68] = {}; 
	handelsetabeller.intrigerillgarningar[68].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[68].vald = 0; 
	handelsetabeller.intrigerillgarningar[68].rubrik = "Silvertunga"
	handelsetabeller.intrigerillgarningar[68].beskrivning = "Rollpersonen vet hur denne ska lägga orden rätt för att få folk att lyssna."
	handelsetabeller.intrigerillgarningar[68].beskrivninghak = "\+2 Utstrålning. Lättlärd i Charm"
	handelsetabeller.intrigerillgarningar[68].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[68].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[68].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[68].subval[0][0][0].charm = {};
	handelsetabeller.intrigerillgarningar[68].subval[0][0][0].charm.lattlard=1; 
	handelsetabeller.intrigerillgarningar[68].subval[0][0][0].utstralning = {};
	handelsetabeller.intrigerillgarningar[68].subval[0][0][0].utstralning.varde =2; 

	handelsetabeller.intrigerillgarningar[69] = {}; 
	handelsetabeller.intrigerillgarningar[69].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[69].vald = 0; 
	handelsetabeller.intrigerillgarningar[69].rubrik = "Skapat splittring"
	handelsetabeller.intrigerillgarningar[69].beskrivning = "Rollpersonen har med mening eller av misstag skapat splittring och en stor fejd har uppstått på grund av dennes agerande. Det kan vara allt ifrån ett bråk till stridigheter och lönnmord. Exakt vad som föranledde allt detta är upp till spelaren och spelledaren."
	handelsetabeller.intrigerillgarningar[69].beskrivninghak = "2 enheter Sociala färdigheter. 1 Avtrubbningskryss för utsatthet"
	handelsetabeller.intrigerillgarningar[69].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[69].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[69].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[69].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[69].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.intrigerillgarningar[69].subval[0][0][0].ovrigt="Har med mening eller av misstag skapat splittring som lett till en stor fejd."

	handelsetabeller.intrigerillgarningar[70] = {}; 
	handelsetabeller.intrigerillgarningar[70].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[70].vald = 0; 
	handelsetabeller.intrigerillgarningar[70].rubrik = "Skarpa argument"
	handelsetabeller.intrigerillgarningar[70].beskrivning = "Rollpersonen är mycket duktig på att övertala folk."
	handelsetabeller.intrigerillgarningar[70].beskrivninghak = "Lättlärd i Argumentera. 2 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[70].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[70].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[70].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[70].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[70].subval[0][0][0].argumentera = {};
	handelsetabeller.intrigerillgarningar[70].subval[0][0][0].argumentera.lattlard=1; 

	handelsetabeller.intrigerillgarningar[71] = {}; 
	handelsetabeller.intrigerillgarningar[71].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[71].vald = 0; 
	handelsetabeller.intrigerillgarningar[71].rubrik = "Skuggornas mästare"
	handelsetabeller.intrigerillgarningar[71].beskrivning = "Rollpersonen är tränad att hålla sig tyst och obemärkt. Denne kan lätt försvinna i skuggorna och ta sig fram smidigt och ljudlöst."
	handelsetabeller.intrigerillgarningar[71].beskrivninghak = "Lättlärd i Smyga. 4 enheter Rörelsefärdigheter, 2 enheter Vildmarksfärdigheter"
	handelsetabeller.intrigerillgarningar[71].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[71].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[71].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[71].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[71].subval[0][0][0].rorelsefardigheterenheter = 4; 
	handelsetabeller.intrigerillgarningar[71].subval[0][0][0].smyga = {};
	handelsetabeller.intrigerillgarningar[71].subval[0][0][0].smyga.lattlard=1; 

	handelsetabeller.intrigerillgarningar[72] = {}; 
	handelsetabeller.intrigerillgarningar[72].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[72].vald = 0; 
	handelsetabeller.intrigerillgarningar[72].rubrik = "Skyddsling"
	handelsetabeller.intrigerillgarningar[72].beskrivning = "Rollpersonen har en skyddsling som denne har lovat att se efter och ta hand om. Vem denna skyddsling är får spelaren bestämma men skulle den förolyckas eller hamna i fara kommer rollpersonen lida stora kval."
	handelsetabeller.intrigerillgarningar[72].beskrivningvaldbas = ""
	handelsetabeller.intrigerillgarningar[72].beskrivninghak = "Lättlärd i Undervisa. 4 valfria enheter. Slå två gånger på bakgrundstabellen och välj en som visar vilket ursprung skyddslingen har. Skulle skyddslingen dö utsätts rollpersonen för Nedbrytning 60"
	handelsetabeller.intrigerillgarningar[72].beskrivninghakvaldbas = "Lättlärd i Undervisa. 4 valfria enheter. Skulle skyddslingen dö utsätts rollpersonen för Nedbrytning 60.";
	
	handelsetabeller.intrigerillgarningar[72].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[72].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[72].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[72].subval[0][0][0].undervisa = {};
	handelsetabeller.intrigerillgarningar[72].subval[0][0][0].undervisa.lattlard=1;
	handelsetabeller.intrigerillgarningar[72].subval[0][0][0].valfriaenheter=4;
	handelsetabeller.intrigerillgarningar[72].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[72].subval[0][0][0].kontaktbas="Har en skyddsling som är kontakt1_rubrikliten. Skulle skyddslingen dö utsätts rollpersonen för Nedbrytning 60."; 
	handelsetabeller.intrigerillgarningar[72].subval[0][0][0].beskrivningvaldbas="Rollpersonen har en skyddsling som är kontakt1_rubrikliten som denne har lovat att se efter och ta hand om. Vem denna skyddsling är får spelaren bestämma men skulle den förolyckas eller hamna i fara kommer rollpersonen lida stora kval.";
	
	handelsetabeller.intrigerillgarningar[73] = {}; 
	handelsetabeller.intrigerillgarningar[73].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[73].vald = 0; 
	handelsetabeller.intrigerillgarningar[73].rubrik = "Skyldig tjänst"
	handelsetabeller.intrigerillgarningar[73].beskrivning = "Rollpersonen är skyldig en person en stor tjänst. Denne kan komma att kräva in tjänsten närhelst denne önskar. Personen kan ha räddat rollpersonens liv, hjälpt denne ekonomiskt när denne var i som mest nöd eller skyddat denne på bekostnad av sig själv. Hur som helst var det nära att rollpersonen höll på att gå under."
	handelsetabeller.intrigerillgarningar[73].beskrivningvaldbas = "";
	handelsetabeller.intrigerillgarningar[73].beskrivninghak = "3 Avtrubbningskryss i valfria kategorier. Slå två gånger på bakgrundstabellen och välj en som visar vem som kan ha hjälpt rollpersonen"
	handelsetabeller.intrigerillgarningar[73].beskrivninghakvaldbas = "3 Avtrubbningskryss i valfria kategorier.";
	handelsetabeller.intrigerillgarningar[73].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[73].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[73].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[73].subval[0][0][0].avtrubbningvalfri=3;
	handelsetabeller.intrigerillgarningar[73].subval[0][0][0].kontaktbas="Är skyldig kontakt1_obestamd en stor tjänst."
	handelsetabeller.intrigerillgarningar[73].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[73].subval[0][0][0].beskrivningvaldbas="Rollpersonen är skyldig kontakt1_obestamd en stor tjänst. kontakt1_Bestamd kan komma att kräva in tjänsten närhelst denne önskar. Personen kan ha räddat rollpersonens liv, hjälpt denne ekonomiskt när denne var i som mest nöd eller skyddat denne på bekostnad av sig själv. Hur som helst var det nära att rollpersonen höll på att gå under.";

	
	handelsetabeller.intrigerillgarningar[74] = {}; 
	handelsetabeller.intrigerillgarningar[74].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[74].vald = 0; 
	handelsetabeller.intrigerillgarningar[74].rubrik = "Släktfejd"
	handelsetabeller.intrigerillgarningar[74].beskrivning = "Rollpersonens släkt har drabbats av en svår och långvarig fejd med en annan släkt och konflikten är ännu inte är riktigt löst. Vad konflikten beror på och hur relationen mellan släkterna var innan är upp till spelaren att bestämma."
	handelsetabeller.intrigerillgarningar[74].beskrivninghak = "3 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[74].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[74].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[74].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[74].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.intrigerillgarningar[74].subval[0][0][0].ovrigt="Rollpersonens släkt har drabbats av en svår och långvarig fejd med en annan släkt.";
	
	handelsetabeller.intrigerillgarningar[75] = {}; 
	handelsetabeller.intrigerillgarningar[75].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[75].vald = 0; 
	handelsetabeller.intrigerillgarningar[75].rubrik = "Smycken"
	handelsetabeller.intrigerillgarningar[75].beskrivning = "Rollpersonen har fått tag på överdådiga smycken i guld och silver beströdda med ädelstenar. Smyckena har makten att trollbinda allt från potentiella friare till klåfingriga tjuvar. Dessa smycken kan vara arvegods, stulna, skänkta som gåva, funna eller liknande."
	handelsetabeller.intrigerillgarningar[75].beskrivninghak = "2 enheter Sociala färdigheter. \+1T6 vid sociala situationer då personer kan bli imponerade av smyckena. Smyckena är värda 1T6×500 silver"
	handelsetabeller.intrigerillgarningar[75].beskrivninghakvaldbas = "2 enheter Sociala färdigheter. \+1T6 vid sociala situationer då personer kan bli imponerade av smyckena. ";

	handelsetabeller.intrigerillgarningar[75].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[75].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[75].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[75].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[75].subval[0][0][0].resurs = "Överdådiga smycken som är värda varde1_resultat, och som dessutom ger \+1T6 vid sociala situationer då personer kan bli imponerade av dessa" ; 
	handelsetabeller.intrigerillgarningar[75].subval[0][0][0] = {};
	handelsetabeller.intrigerillgarningar[75].subval[0][0][0].vardeslag=["1T6x500"];
	handelsetabeller.intrigerillgarningar[75].subval[0][0][0].beskrivninghakvaldbas = "Smyckena är värda varde1_resultat silver.";

	
	handelsetabeller.intrigerillgarningar[76] = {}; 
	handelsetabeller.intrigerillgarningar[76].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[76].vald = 0; 
	handelsetabeller.intrigerillgarningar[76].rubrik = "Snabbtänkt"
	handelsetabeller.intrigerillgarningar[76].beskrivning = "Rollpersonen passar in i så gott som alla sällskap och kan i rätt tid vara övertygande och manipulativ."
	handelsetabeller.intrigerillgarningar[76].beskrivninghak = "När rollpersonen använder Fokus för att ge bonus till en Social färdighet får denne ytterligare \+1T6 bonus"
	handelsetabeller.intrigerillgarningar[76].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[76].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[76].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[76].subval[0][0][0].formaga="När rollpersonen använder Fokus för att ge bonus till en Social färdighet får denne ytterligare \+1T6 bonus."
	
	handelsetabeller.intrigerillgarningar[77] = {}; 
	handelsetabeller.intrigerillgarningar[77].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[77].vald = 0; 
	handelsetabeller.intrigerillgarningar[77].rubrik = "Social kameleont"
	handelsetabeller.intrigerillgarningar[77].beskrivning = "Rollpersonen har en unik förmåga att känna av andras svagheter, se deras begär, veta hur man ska stryka dem medhårs eller skrämma dem."
	handelsetabeller.intrigerillgarningar[77].beskrivninghak = "Lättlärd i alla Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[77].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[77].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[77].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[77].subval[0][0][0] = {};
	handelsetabeller.intrigerillgarningar[77].subval[0][0][0].lattlardallasocialafardigheter=1; 

	handelsetabeller.intrigerillgarningar[78] = {}; 
	handelsetabeller.intrigerillgarningar[78].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[78].vald = 0; 
	handelsetabeller.intrigerillgarningar[78].rubrik = "Sover lätt"
	handelsetabeller.intrigerillgarningar[78].beskrivning = "Om man vill leva länge så är det bäst att man sover lätt."
	handelsetabeller.intrigerillgarningar[78].beskrivninghak = "Personen behöver endast sova fyra timmar per natt och har dessutom inga avdrag för att vakna eller uppfatta något i sin närhet när denne är nyvaken"
	handelsetabeller.intrigerillgarningar[78].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[78].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[78].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[78].subval[0][0][0].formaga="Personen behöver endast sova fyra timmar per natt och har dessutom inga avdrag när denne är nyvaken."
	
	handelsetabeller.intrigerillgarningar[79] = {}; 
	handelsetabeller.intrigerillgarningar[79].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[79].vald = 0; 
	handelsetabeller.intrigerillgarningar[79].rubrik = "Spela dum"
	handelsetabeller.intrigerillgarningar[79].beskrivning = "Rollpersonen har lärt sig att man kan komma undan från de flesta situationer genom att spela dum, efterbliven eller bara ordentligt korkad."
	handelsetabeller.intrigerillgarningar[79].beskrivninghak = "2 enheter Sociala färdigheter. Expertisen Skådespel 4T6. Återfår dessutom 1 Fokus varje scen denne lyckas lura någon att denne är en imbecill"
	handelsetabeller.intrigerillgarningar[79].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[79].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[79].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[79].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[79].subval[0][0][0].skadespel = {};
	handelsetabeller.intrigerillgarningar[79].subval[0][0][0].skadespel.enheter = 3; 
	handelsetabeller.intrigerillgarningar[79].subval[0][0][0].formaga="Återfår 1 Fokus varje scen denne lyckas lura någon att denne är en imbecill."

	handelsetabeller.intrigerillgarningar[80] = {}; 
	handelsetabeller.intrigerillgarningar[80].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[80].vald = 0; 
	handelsetabeller.intrigerillgarningar[80].rubrik = "Spionerat på någon"
	handelsetabeller.intrigerillgarningar[80].beskrivning = "Rollpersonen har under lång tid spionerat på en person i sin närhet. Exakt varför är upp till spelaren och spelledaren men rollpersonen är uppmärksam och lägger märke till detaljer."
	handelsetabeller.intrigerillgarningar[80].beskrivninghak = "\+2 Uppfattning. Lättlärd i Genomsöka. 2 enheter Rörelsefärdigheter, 2 enheter Vildmarksfärdigheter"
	handelsetabeller.intrigerillgarningar[80].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[80].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[80].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[80].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[80].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[80].subval[0][0][0].genomsoka = {};
	handelsetabeller.intrigerillgarningar[80].subval[0][0][0].genomsoka.lattlard=1; 
	handelsetabeller.intrigerillgarningar[80].subval[0][0][0].uppfattning = {};
	handelsetabeller.intrigerillgarningar[80].subval[0][0][0].uppfattning.varde =2; 
	handelsetabeller.intrigerillgarningar[80].subval[0][0][0].kontakt="Rollpersonen har under lång tid spionerat på en person i sin närhet."

	handelsetabeller.intrigerillgarningar[81] = {}; 
	handelsetabeller.intrigerillgarningar[81].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[81].vald = 0; 
	handelsetabeller.intrigerillgarningar[81].rubrik = "Sprider rykten"
	handelsetabeller.intrigerillgarningar[81].beskrivning = "Rollpersonen vet exakt vilka man ska prata med för att få rykten att spridas. Ryktet bör vara enkelt och fåordigt, exempelvis Prospektorn är en magiker eller Min vän har dräpt en drake. Efter att ryktet börjat sprida sig har rollpersonen inte längre någon makt över det utan ryktet kan mutera och ändra form till någonting helt annat. Huruvida folk tror på ryktet eller bara sprider det för att det är lustigt är upp till spelledaren."
	handelsetabeller.intrigerillgarningar[81].beskrivninghak = "Expertisen Rykten \& skvaller 4T6. Genom att spendera en scen i en miljö med andra personer, exempelvis en taverna, marknad eller ett marknad, och lyckas med ett slag med Expertisen så etablerar rollpersonen ett rykte som sprids i området"
	handelsetabeller.intrigerillgarningar[81].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[81].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[81].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[81].subval[0][0][0].ryktenskvaller = {};
	handelsetabeller.intrigerillgarningar[81].subval[0][0][0].ryktenskvaller.enheter=3;
	handelsetabeller.intrigerillgarningar[81].subval[0][0][0].formaga="Genom att spendera en scen i en miljö med andra personer, och lyckas med ett slag med Rykten \& skvaller så etablerar rollpersonen ett rykte som sprids i området."

	handelsetabeller.intrigerillgarningar[82] = {}; 
	handelsetabeller.intrigerillgarningar[82].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[82].vald = 0; 
	handelsetabeller.intrigerillgarningar[82].rubrik = "Stulit information"
	handelsetabeller.intrigerillgarningar[82].beskrivning = "Rollpersonen har kommit över och stulit viktig information. Detta kan vara handelskontrakt, dekret från en ädling, kärleksbrev eller bekännelser som inte får komma ut eller som ska spridas till så många som möjligt."
	handelsetabeller.intrigerillgarningar[82].beskrivninghak = "Lättlärd i Fingerfärdighet. 2 enheter Rörelsefärdigheter, 2 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[82].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[82].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[82].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[82].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[82].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[82].subval[0][0][0].fingerfardighet = {};
	handelsetabeller.intrigerillgarningar[82].subval[0][0][0].fingerfardighet.lattlard=1; 
	handelsetabeller.intrigerillgarningar[82].subval[0][0][0].ovrigt="Rollpersonen har kommit över och stulit viktig information."

	handelsetabeller.intrigerillgarningar[83] = {}; 
	handelsetabeller.intrigerillgarningar[83].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[83].vald = 0; 
	handelsetabeller.intrigerillgarningar[83].rubrik = "Svarta marknaden"
	handelsetabeller.intrigerillgarningar[83].beskrivning = "Rollpersonen har en insikt i den svarta marknaden och kan få tag på förbjudna droger, kättersk litteratur och allehanda ljusskygga individer."
	handelsetabeller.intrigerillgarningar[83].beskrivningvaldbas = "Rollpersonen har en insikt i den svarta marknaden och kan få tag på förbjudna droger, kättersk litteratur och allehanda ljusskygga individer. ";
	handelsetabeller.intrigerillgarningar[83].beskrivninghak = "\+2 Vilja. Lättlärd i Skumraskaffärer. Dessutom har rollpersonen en kontakt som vet hur och var man hittar rätt saker och rätt personer. Slå två gånger på bakgrundstabellen och välj en som visar vem kontakten är";
	handelsetabeller.intrigerillgarningar[83].beskrivninghakvaldbas = "\+2 Vilja. Lättlärd i Skumraskaffärer. ";
	handelsetabeller.intrigerillgarningar[83].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[83].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[83].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[83].subval[0][0][0].vilja = {};
	handelsetabeller.intrigerillgarningar[83].subval[0][0][0].vilja.varde=2;
	handelsetabeller.intrigerillgarningar[83].subval[0][0][0].skumraskaffarer = {};
	handelsetabeller.intrigerillgarningar[83].subval[0][0][0].skumraskaffarer.lattlard=1;
	handelsetabeller.intrigerillgarningar[83].subval[0][0][0].kontaktbas="Känner kontakt1_obestamd som vet hur och var man hittar rätt saker och personer på svarta marknaden,"
	handelsetabeller.intrigerillgarningar[83].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[83].subval[0][0][0].beskrivningvaldbas="Bland rollpersonens kontakter i den undre världen finns kontakt1_obestamd.";
	
	
	handelsetabeller.intrigerillgarningar[84] = {}; 
	handelsetabeller.intrigerillgarningar[84].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[84].vald = 0; 
	handelsetabeller.intrigerillgarningar[84].rubrik = "Svikit en vän"
	handelsetabeller.intrigerillgarningar[84].beskrivning = "Rollpersonen har vid ett tillfälle satt dit en vän för ett brott som denne själv har gjort. Vilket brott det rör sig om och hur personerna kände varandra bestämmer spelaren i samråd med spelledaren. Rollpersonen försöker nu finna ett sätt att återgälda denne."
	handelsetabeller.intrigerillgarningar[84].beskrivninghak = "Expertisen Skylla på andra 4T6. Dessutom har rollpersonen som mål att gottgöra sin vän och återfår omedelbart 5 Fokus om detta sker"
	handelsetabeller.intrigerillgarningar[84].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[84].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[84].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[84].subval[0][0][0].skyllapaandra = {};
	handelsetabeller.intrigerillgarningar[84].subval[0][0][0].skyllapaandra.enheter = 3; 
	handelsetabeller.intrigerillgarningar[84].subval[0][0][0].kontakt="Rollpersonen har vid ett tillfälle satt dit en vän för ett brott som denne själv har gjort. Om rollpersonen lyckas gottgöra sin vän återfås omedelbart 5 Fokus."
	
	handelsetabeller.intrigerillgarningar[85] = {}; 
	handelsetabeller.intrigerillgarningar[85].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[85].vald = 0; 
	handelsetabeller.intrigerillgarningar[85].rubrik = "Svårt moraliskt beslut"
	handelsetabeller.intrigerillgarningar[85].beskrivning = "Rollpersonen har tvingats till ett svårt moraliskt beslut. Det kan röra sig om att tvingas dräpa en person som var oskyldig för att bevara en hemlighet, ta ett barn från en gråtande moder eller något annat som plågat rollpersonens psyke. Rollpersonen har dock blivit härdad av det hela."
	handelsetabeller.intrigerillgarningar[85].beskrivninghak = "1 Avtrubbningskryss i valfri kategori. \+1T6 Självkontroll vid Nedbrytning"
	handelsetabeller.intrigerillgarningar[85].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[85].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[85].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[85].subval[0][0][0].sjalvkontroll = {};
	handelsetabeller.intrigerillgarningar[85].subval[0][0][0].sjalvkontroll.egenskap = "\+1T6 vid Nedbrytning"; 
	handelsetabeller.intrigerillgarningar[85].subval[0][0][0].avtrubbningvalfri = 1; 
	handelsetabeller.intrigerillgarningar[85].subval[0][0][0].ovrigt="Har tvingats till ett svårt moraliskt beslut."

	handelsetabeller.intrigerillgarningar[86] = {}; 
	handelsetabeller.intrigerillgarningar[86].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[86].vald = 0; 
	handelsetabeller.intrigerillgarningar[86].rubrik = "Tjänst att inkräva"
	handelsetabeller.intrigerillgarningar[86].beskrivning = "Rollpersonen har en stor tjänst att inkräva av en person som denne när som helst kan utnyttja. Rollpersonen kan ha räddat personens liv eller anseende."
	handelsetabeller.intrigerillgarningar[86].beskrivningvaldbas = "";
	
	handelsetabeller.intrigerillgarningar[86].beskrivninghak = "\+2 i valfritt grundattribut som bör vara kopplat till hur denne hjälpt personen i fråga. Slå två gånger på bakgrundstabellen och välj en som visar vem som rollpersonen kan ha hjälpt.";
	handelsetabeller.intrigerillgarningar[86].beskrivninghakvaldbas = "";
	
	handelsetabeller.intrigerillgarningar[86].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[86].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[86].subval[0][0][0].vald = 0; 
	
	
	handelsetabeller.intrigerillgarningar[86].subval[0].push([]);
	handelsetabeller.intrigerillgarningar[86].subval[0][1][0] = {}; 
	handelsetabeller.intrigerillgarningar[86].subval[0][1][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[86].subval[0][1][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[86].subval[0][1][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[86].subval[0][1][0].kontaktbas="Har en tjänst att inkräva från kontakt1_obestamd."
	handelsetabeller.intrigerillgarningar[86].subval[0][1][0].beskrivningvaldbas = "Rollpersonen har en stor tjänst att inkräva av kontakt1_obestamd som denne när som helst kan utnyttja. Rollpersonen kan ha räddat personens liv eller anseende.";
	
	
	handelsetabeller.intrigerillgarningar[86].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.intrigerillgarningar[86].subval[0][1][1] = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][1].valdasub = [];
	handelsetabeller.intrigerillgarningar[86].subval[0][1][1].vald = 0;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][1].styrka = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][1].styrka.varde=2;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][1].rubrik="Styrka"
	handelsetabeller.intrigerillgarningar[86].subval[0][1][1].beskrivninghakvaldbas = "\+2 i Styrka, vilket bör vara kopplat till hur rollpersonen hjälpt kontakt1sup_bestamd.";
	
	
	handelsetabeller.intrigerillgarningar[86].subval[0][1][2] = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][2].valdasub = [];
	handelsetabeller.intrigerillgarningar[86].subval[0][1][2].vald = 0;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][2].talighet = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][2].talighet.varde=2;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][2].rubrik="Tålighet"
	handelsetabeller.intrigerillgarningar[86].subval[0][1][2].beskrivninghakvaldbas = "\+2 i Tålighet, vilket bör vara kopplat till hur rollpersonen hjälpt kontakt1sup_bestamd.";
	
	handelsetabeller.intrigerillgarningar[86].subval[0][1][3] = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][3].valdasub = [];
	handelsetabeller.intrigerillgarningar[86].subval[0][1][3].vald = 0;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][3].rorlighet = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][3].rorlighet.varde=2;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][3].rubrik="Rörlighet"
	handelsetabeller.intrigerillgarningar[86].subval[0][1][3].beskrivninghakvaldbas = "\+2 i Rörlighet, vilket bör vara kopplat till hur rollpersonen hjälpt kontakt1sup_bestamd.";
	
	handelsetabeller.intrigerillgarningar[86].subval[0][1][4] = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][4].valdasub = [];
	handelsetabeller.intrigerillgarningar[86].subval[0][1][4].vald = 0;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][4].uppfattning = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][4].uppfattning.varde=2;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][4].rubrik="Uppfattning"
	handelsetabeller.intrigerillgarningar[86].subval[0][1][4].beskrivninghakvaldbas = "\+2 i Upfattning, vilket bör vara kopplat till hur rollpersonen hjälpt kontakt1sup_bestamd.";
	
	handelsetabeller.intrigerillgarningar[86].subval[0][1][5] = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][5].valdasub = [];
	handelsetabeller.intrigerillgarningar[86].subval[0][1][5].vald = 0;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][5].vilja = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][5].vilja.varde=2;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][5].rubrik="Vilja"
	handelsetabeller.intrigerillgarningar[86].subval[0][1][5].beskrivninghakvaldbas = "\+2 i Vilja, vilket bör vara kopplat till hur rollpersonen hjälpt kontakt1sup_bestamd.";
	
	handelsetabeller.intrigerillgarningar[86].subval[0][1][6] = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][6].valdasub = [];
	handelsetabeller.intrigerillgarningar[86].subval[0][1][6].vald = 0;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][6].psyke = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][6].psyke.varde=2;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][6].rubrik="Psyke"
	handelsetabeller.intrigerillgarningar[86].subval[0][1][6].beskrivninghakvaldbas = "\+2 i Psyke, vilket bör vara kopplat till hur rollpersonen hjälpt kontakt1sup_bestamd.";
	
	handelsetabeller.intrigerillgarningar[86].subval[0][1][7] = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][7].valdasub = [];
	handelsetabeller.intrigerillgarningar[86].subval[0][1][7].vald = 0;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][7].visdom = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][7].visdom.varde=2;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][7].rubrik="Visdom"
	handelsetabeller.intrigerillgarningar[86].subval[0][1][7].beskrivninghakvaldbas = "\+2 i Visdom, vilket bör vara kopplat till hur rollpersonen hjälpt kontakt1sup_bestamd.";
	
	handelsetabeller.intrigerillgarningar[86].subval[0][1][8] = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][8].valdasub = [];
	handelsetabeller.intrigerillgarningar[86].subval[0][1][8].vald = 0;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][8].utstralning = {};
	handelsetabeller.intrigerillgarningar[86].subval[0][1][8].utstralning.varde=2;
	handelsetabeller.intrigerillgarningar[86].subval[0][1][8].rubrik="Utstrålning"
	handelsetabeller.intrigerillgarningar[86].subval[0][1][8].beskrivninghakvaldbas = "\+2 i Utstrålning, vilket bör vara kopplat till hur rollpersonen hjälpt kontakt1sup_bestamd.";
	

	handelsetabeller.intrigerillgarningar[87] = {}; 
	handelsetabeller.intrigerillgarningar[87].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[87].vald = 0; 
	handelsetabeller.intrigerillgarningar[87].rubrik = "Tränad till lönnmördare"
	handelsetabeller.intrigerillgarningar[87].beskrivning = "Rollpersonen har blivit tränad i konsten att dräpa andra i det tysta. Vilka som har gjort detta och varför är upp till spelledaren och spelaren att bestämma."
	handelsetabeller.intrigerillgarningar[87].beskrivninghak = "2 enheter Stridsfärdigheter, 2 enheter Rörelsefärdigheter. 1 Avtrubbningskryss för våld.";
	handelsetabeller.intrigerillgarningar[87].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[87].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[87].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[87].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[87].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[87].subval[0][0][0].avtrubbningvald = 1; 
	handelsetabeller.intrigerillgarningar[87].subval[0][0][0].ovrigt="Har blivit tränad till lönnmördare."
	
	handelsetabeller.intrigerillgarningar[88] = {}; 
	handelsetabeller.intrigerillgarningar[88].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[88].vald = 0; 
	handelsetabeller.intrigerillgarningar[88].rubrik = "Tränad till spion"
	handelsetabeller.intrigerillgarningar[88].beskrivning = "Rollpersonen har blivit tränad till att spionera. Denne har lärt sig att lägga saker på minnet, samt ta sig in obemärkt och tyst på platser."
	handelsetabeller.intrigerillgarningar[88].beskrivninghak = "Lättlärd i Låsdyrkning. 2 enheter Kunskapsfärdigheter, 2 enheter Rörelsefärdigheter"
	handelsetabeller.intrigerillgarningar[88].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[88].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[88].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[88].subval[0][0][0].kunskapsfardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[88].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[88].subval[0][0][0].lasdyrkning = {};
	handelsetabeller.intrigerillgarningar[88].subval[0][0][0].lasdyrkning.lattlard=1; 
	handelsetabeller.intrigerillgarningar[88].subval[0][0][0].ovrigt="Har blivit tränad till spion."
	
	handelsetabeller.intrigerillgarningar[89] = {}; 
	handelsetabeller.intrigerillgarningar[89].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[89].vald = 0; 
	handelsetabeller.intrigerillgarningar[89].rubrik = "Udda läggning"
	handelsetabeller.intrigerillgarningar[89].beskrivning = "Rollpersonen har en udda sexuell läggning som inte är accepterad av samhället. Detta kan röra sig om homosexualitet, någon form av fetischism, dominans \& underkastelse eller en attraktion till andra folkslag såsom tiraker, dvärgar, misslor eller alver eller något helt annat. Rollpersonen har fått hålla denna hemlig och utåt sett är det ingen som känner till den."
	handelsetabeller.intrigerillgarningar[89].beskrivninghak = "3 enheter Sociala färdigheter. 1 Avtrubbningskryss för utsatthet"
	handelsetabeller.intrigerillgarningar[89].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[89].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[89].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[89].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.intrigerillgarningar[89].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.intrigerillgarningar[89].subval[0][0][0].ovrigt="Har en udda läggning."

	handelsetabeller.intrigerillgarningar[90] = {}; 
	handelsetabeller.intrigerillgarningar[90].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[90].vald = 0; 
	handelsetabeller.intrigerillgarningar[90].rubrik = "Upptäckt en konspiration"
	handelsetabeller.intrigerillgarningar[90].beskrivning = "Rollpersonen känner till en konspiration av makthavare och ockulta sekter som styr i långt mycket större utsträckning än vad någon anar. Får konspiratörerna reda på att rollpersonen vet om deras planer är denne riktigt illa ute."
	handelsetabeller.intrigerillgarningar[90].beskrivninghak = "3 enheter Kunskapsfärdigheter"
	handelsetabeller.intrigerillgarningar[90].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[90].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[90].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[90].subval[0][0][0].kunskapsfardigheterenheter = 3; 
	handelsetabeller.intrigerillgarningar[90].subval[0][0][0].ovrigt="Har upptäckt en konspiration."

	handelsetabeller.intrigerillgarningar[91] = {}; 
	handelsetabeller.intrigerillgarningar[91].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[91].vald = 0; 
	handelsetabeller.intrigerillgarningar[91].rubrik = "Uppviglare"
	handelsetabeller.intrigerillgarningar[91].beskrivning = "Rollpersonen har vid ett flertal tillfällen fått folk att försöka sätta till motvärn mot sina överordnade och denne är därför illa sedd av makthavarna."
	handelsetabeller.intrigerillgarningar[91].beskrivninghak = "Expertisen Uppvigla 4T6. 3 enheter Sociala färdigheter"
	handelsetabeller.intrigerillgarningar[91].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[91].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[91].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[91].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.intrigerillgarningar[91].subval[0][0][0].uppvigla = {};
	handelsetabeller.intrigerillgarningar[91].subval[0][0][0].uppvigla.enheter = 3; 
	handelsetabeller.intrigerillgarningar[91].subval[0][0][0].ovrigt="Har vid ett flertal tillfällen uppviglat folk till uppror mot sina överordnade."

	handelsetabeller.intrigerillgarningar[92] = {}; 
	handelsetabeller.intrigerillgarningar[92].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[92].vald = 0; 
	handelsetabeller.intrigerillgarningar[92].rubrik = "Utmärkande släktdrag"
	handelsetabeller.intrigerillgarningar[92].beskrivning = "Rollpersonen kommer från en släkt som är speciell och annorlunda. Det finns ett drag som går i släkten som även rollpersonen har ärvt."
	handelsetabeller.intrigerillgarningar[92].beskrivninghak = "\+2 i valfritt grundattribut. 2 poäng Kännetecken som är genomgående för alla medlemmar i släkten"
	handelsetabeller.intrigerillgarningar[92].beskrivninghakvaldbas = "2 poäng Kännetecken som är genomgående för alla medlemmar i släkten. ";
	
	handelsetabeller.intrigerillgarningar[92].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[92].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[92].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[92].subval[0][0][0].kanneteckenpoang = 2; 
	handelsetabeller.intrigerillgarningar[92].subval[0][0][0].utseende="Har ett utmärkande släktdrag."

	handelsetabeller.intrigerillgarningar[92].subval[0].push([]);
	handelsetabeller.intrigerillgarningar[92].subval[0][1][0] = {}; 
	handelsetabeller.intrigerillgarningar[92].subval[0][1][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[92].subval[0][1][0].vald = 0; 
	
	handelsetabeller.intrigerillgarningar[92].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.intrigerillgarningar[92].subval[0][1][1] = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][1].valdasub = [];
	handelsetabeller.intrigerillgarningar[92].subval[0][1][1].vald = 0;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][1].styrka = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][1].styrka.varde=2;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][1].rubrik="Styrka"
	handelsetabeller.intrigerillgarningar[92].subval[0][1][1].beskrivninghakvaldbas = "\+2 i Styrka.";
	
	
	handelsetabeller.intrigerillgarningar[92].subval[0][1][2] = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][2].valdasub = [];
	handelsetabeller.intrigerillgarningar[92].subval[0][1][2].vald = 0;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][2].talighet = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][2].talighet.varde=2;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][2].rubrik="Tålighet"
	handelsetabeller.intrigerillgarningar[92].subval[0][1][2].beskrivninghakvaldbas = "\+2 i Tålighet.";
	
	handelsetabeller.intrigerillgarningar[92].subval[0][1][3] = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][3].valdasub = [];
	handelsetabeller.intrigerillgarningar[92].subval[0][1][3].vald = 0;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][3].rorlighet = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][3].rorlighet.varde=2;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][3].rubrik="Rörlighet"
	handelsetabeller.intrigerillgarningar[92].subval[0][1][3].beskrivninghakvaldbas = "\+2 i Rörlighet.";
	
	handelsetabeller.intrigerillgarningar[92].subval[0][1][4] = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][4].valdasub = [];
	handelsetabeller.intrigerillgarningar[92].subval[0][1][4].vald = 0;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][4].uppfattning = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][4].uppfattning.varde=2;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][4].rubrik="Uppfattning"
	handelsetabeller.intrigerillgarningar[92].subval[0][1][4].beskrivninghakvaldbas = "\+2 i Uppfattning.";
	
	handelsetabeller.intrigerillgarningar[92].subval[0][1][5] = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][5].valdasub = [];
	handelsetabeller.intrigerillgarningar[92].subval[0][1][5].vald = 0;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][5].vilja = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][5].vilja.varde=2;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][5].rubrik="Vilja"
	handelsetabeller.intrigerillgarningar[92].subval[0][1][5].beskrivninghakvaldbas = "\+2 i Vilja.";
	
	handelsetabeller.intrigerillgarningar[92].subval[0][1][6] = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][6].valdasub = [];
	handelsetabeller.intrigerillgarningar[92].subval[0][1][6].vald = 0;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][6].psyke = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][6].psyke.varde=2;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][6].rubrik="Psyke"
	handelsetabeller.intrigerillgarningar[92].subval[0][1][6].beskrivninghakvaldbas = "\+2 i Psyke.";
	
	handelsetabeller.intrigerillgarningar[92].subval[0][1][7] = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][7].valdasub = [];
	handelsetabeller.intrigerillgarningar[92].subval[0][1][7].vald = 0;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][7].visdom = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][7].visdom.varde=2;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][7].rubrik="Visdom"
	handelsetabeller.intrigerillgarningar[92].subval[0][1][7].beskrivninghakvaldbas = "\+2 i Visdom.";
	
	handelsetabeller.intrigerillgarningar[92].subval[0][1][8] = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][8].valdasub = [];
	handelsetabeller.intrigerillgarningar[92].subval[0][1][8].vald = 0;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][8].utstralning = {};
	handelsetabeller.intrigerillgarningar[92].subval[0][1][8].utstralning.varde=2;
	handelsetabeller.intrigerillgarningar[92].subval[0][1][8].rubrik="Utstrålning"
	handelsetabeller.intrigerillgarningar[92].subval[0][1][8].beskrivninghakvaldbas = "\+2 i Utstrålning.";
	
	
	handelsetabeller.intrigerillgarningar[93] = {}; 
	handelsetabeller.intrigerillgarningar[93].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[93].vald = 0; 
	handelsetabeller.intrigerillgarningar[93].rubrik = "Vackra kläder"
	handelsetabeller.intrigerillgarningar[93].beskrivning = "Rollpersonen har ett intresse för kläder och har en stor uppsättning plagg speciellt skräddarsydda för denne."
	handelsetabeller.intrigerillgarningar[93].beskrivninghak = "\+2 Utstrålning. När rollpersonen är klädd i sina vackra kläder får denne \+1T6 Intryck"
	handelsetabeller.intrigerillgarningar[93].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[93].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[93].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[93].subval[0][0][0].utstralning = {};
	handelsetabeller.intrigerillgarningar[93].subval[0][0][0].utstralning.varde =2; 
	handelsetabeller.intrigerillgarningar[93].subval[0][0][0].intryck = {};
	handelsetabeller.intrigerillgarningar[93].subval[0][0][0].intryck.bonus = 4; 
	handelsetabeller.intrigerillgarningar[93].subval[0][0][0].resurs="Har vackra kläder som ger en bonus på \+1T6 till Intryck."

	handelsetabeller.intrigerillgarningar[94] = {}; 
	handelsetabeller.intrigerillgarningar[94].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[94].vald = 0; 
	handelsetabeller.intrigerillgarningar[94].rubrik = "Vadslagare"
	handelsetabeller.intrigerillgarningar[94].beskrivning = "Rollpersonen har arrangerat vadslagning vid olika uppvisningsstrider såsom dueller, tornerspel eller gladiatorkamper. Genom detta har denne tjänat sig en hacka och dessutom smort sitt munläder."
	handelsetabeller.intrigerillgarningar[94].beskrivninghak = "2 enheter Sociala färdigheter. Startbelopp ökar med 2T6×10 silver."
	handelsetabeller.intrigerillgarningar[94].beskrivninghakvaldbas = "2 enheter Sociala färdigheter. ";
	
	handelsetabeller.intrigerillgarningar[94].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[94].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[94].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[94].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.intrigerillgarningar[94].subval[0][0][0].ovrigt="Har arrangerat vadslagning vid olika uppvisningsstrider." 
	handelsetabeller.intrigerillgarningar[94].subval[0][0][0].pengarslag="2T6x10"; 
	handelsetabeller.intrigerillgarningar[94].subval[0][0][0].beskrivninghakvaldbas="Startbelopp ökar med pengar_resultat silver."; 

	handelsetabeller.intrigerillgarningar[95] = {}; 
	handelsetabeller.intrigerillgarningar[95].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[95].vald = 0; 
	handelsetabeller.intrigerillgarningar[95].rubrik = "Vunnit rättegång"
	handelsetabeller.intrigerillgarningar[95].beskrivning = "Rollpersonen har varit med om en stor och omvälvande rättegång som slutade med att rollpersonens sida vann. Den förlorande sidan ser nu rollpersonen som sin ärkefiende."
	handelsetabeller.intrigerillgarningar[95].beskrivningvaldbas = "";
	
	handelsetabeller.intrigerillgarningar[95].beskrivninghak = "2 enheter Kunskapsfärdigheter, 2 enheter Sociala färdigheter. Lättlärd i Lagkunskap. Slå två gånger på bakgrundstabellen och välj en som visar vem rollpersonen vann emot."
	handelsetabeller.intrigerillgarningar[95].beskrivninghakvaldbas = "2 enheter Kunskapsfärdigheter, 2 enheter Sociala färdigheter. Lättlärd i Lagkunskap. ";
	
	handelsetabeller.intrigerillgarningar[95].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[95].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[95].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[95].subval[0][0][0].kunskapsfardigheterenheter=2;	
	handelsetabeller.intrigerillgarningar[95].subval[0][0][0].socialafardigheterenheter=2;
	handelsetabeller.intrigerillgarningar[95].subval[0][0][0].lagkunskap = {};
	handelsetabeller.intrigerillgarningar[95].subval[0][0][0].lagkunskap.lattlard=1;
	handelsetabeller.intrigerillgarningar[95].subval[0][0][0].kontaktbas="Har vunnit en rättegång mot kontakt1_obestamd."
	handelsetabeller.intrigerillgarningar[95].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[95].subval[0][0][0].beskrivningvaldbas = "Rollpersonen har varit med om en stor och omvälvande rättegång mot kontakt1_obestamd som slutade med att rollpersonens sida vann. kontakt1_Bestamd ser nu rollpersonen som sin ärkefiende.";
	
	
	handelsetabeller.intrigerillgarningar[96] = {}; 
	handelsetabeller.intrigerillgarningar[96].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[96].vald = 0; 
	handelsetabeller.intrigerillgarningar[96].rubrik = "Vårdar sitt utseende"
	handelsetabeller.intrigerillgarningar[96].beskrivning = "Rollpersonen vårdar sitt utseende och ser till att alltid vara fräsch. Till sin hjälp tar denne kosmetika och dyra parfymer. I vissa kretsar kan detta vara provocerande men ingen kan förneka att rollpersonen luktar gott och ser välvårdad ut."
	handelsetabeller.intrigerillgarningar[96].beskrivninghak = "\+2 Utstrålning. Expertisen Parfymer \& kosmetika 4T6"
	handelsetabeller.intrigerillgarningar[96].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[96].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[96].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[96].subval[0][0][0].utstralning = {};
	handelsetabeller.intrigerillgarningar[96].subval[0][0][0].utstralning.varde =2; 
	handelsetabeller.intrigerillgarningar[96].subval[0][0][0].parfymerkosmetika = {};
	handelsetabeller.intrigerillgarningar[96].subval[0][0][0].parfymerkosmetika.enheter = 3; 
	handelsetabeller.intrigerillgarningar[96].subval[0][0][0].ovrigt="Vårdar sitt utseende."
	
	handelsetabeller.intrigerillgarningar[97] = {}; 
	handelsetabeller.intrigerillgarningar[97].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[97].vald = 0; 
	handelsetabeller.intrigerillgarningar[97].rubrik = "Äger slav"
	handelsetabeller.intrigerillgarningar[97].beskrivning = "Personen har en slav i sin ägo. Denne hjälper till med allehanda sysslor och passar upp personen efter förmåga."
	handelsetabeller.intrigerillgarningar[97].beskrivningvaldbas = "";
	
	handelsetabeller.intrigerillgarningar[97].beskrivninghak = "Slå två gånger på bakgrundstabellen och välj en som visar vilken ursprung slaven hade. Om denne var ädling, präst eller liknande får man förutsätta att slaven inte är jargisk medborgare från början. Hur personen blev slav är upp till spelaren att bestämma"
	handelsetabeller.intrigerillgarningar[97].beskrivninghakvaldbas = ""; 
	handelsetabeller.intrigerillgarningar[97].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[97].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[97].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[97].subval[0][0][0].kontaktbas="Äger en slav som tidigare var kontakt1_rubrikliten."
	handelsetabeller.intrigerillgarningar[97].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[97].subval[0][0][0].beskrivningvaldbas = "Personen har en slav i sin ägo. Denne hjälper till med allehanda sysslor och passar upp personen efter förmåga. Slaven var tidigare kontakt1_obestamd."
	handelsetabeller.intrigerillgarningar[97].subval[0][0][0].beskrivninghakvaldbas = "Om slaven var ädling, präst eller liknande får man förutsätta att slaven inte är jargisk medborgare från början. Hur personen blev slav är upp till spelaren att bestämma.";

	
	handelsetabeller.intrigerillgarningar[98] = {}; 
	handelsetabeller.intrigerillgarningar[98].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[98].vald = 0; 
	handelsetabeller.intrigerillgarningar[98].rubrik = "Älskare"
	handelsetabeller.intrigerillgarningar[98].beskrivning = "Personen har en älskare eller älskarinna som känner till dennes alla svagheter och hemligheter.";
	handelsetabeller.intrigerillgarningar[98].beskrivningvaldbas = "";
	
	handelsetabeller.intrigerillgarningar[98].beskrivninghak = "4 valfria enheter som personen lärt sig av sin käresta. Slå två gånger på bakgrundstabellen och välj en som visar vem älskaren eller älskarinnan är"
	handelsetabeller.intrigerillgarningar[98].beskrivninghakvaldbas = "4 valfria enheter som personen lärt sig av sin käresta. ";
	handelsetabeller.intrigerillgarningar[98].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[98].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[98].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[98].subval[0][0][0].kontaktbas="Har en älskare eller älskarinna som är kontakt1_rubrikliten."
	handelsetabeller.intrigerillgarningar[98].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.intrigerillgarningar[98].subval[0][0][0].valfriaenheter=4;
	handelsetabeller.intrigerillgarningar[98].subval[0][0][0].beskrivningvaldbas = "Personen har en älskare eller älskarinna som är kontakt1_rubrikliten och som känner till dennes alla svagheter och hemligheter. ";
	
	handelsetabeller.intrigerillgarningar[99] = {}; 
	handelsetabeller.intrigerillgarningar[99].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[99].vald = 0; 
	handelsetabeller.intrigerillgarningar[99].rubrik = "Älskare åt uppsatt person"
	handelsetabeller.intrigerillgarningar[99].beskrivning = "Personen är älskare eller älskarinna till en uppsatt och inflytelserik person."
	handelsetabeller.intrigerillgarningar[99].beskrivninghak = "2 poäng Expertiser som rollpersonen lärt sig av sin älskare. Vem den uppsatte personen är avgörs av spelaren och spelledaren"
	handelsetabeller.intrigerillgarningar[99].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[99].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[99].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[99].subval[0][0][0].expertispoang = 2; 
	handelsetabeller.intrigerillgarningar[99].subval[0][0][0].kontakt="Är älskare eller älskarinna åt en uppsatt och inflytelserik person."

	handelsetabeller.intrigerillgarningar[100] = {}; 
	handelsetabeller.intrigerillgarningar[100].subval = [[[]]]; 
	handelsetabeller.intrigerillgarningar[100].vald = 0; 
	handelsetabeller.intrigerillgarningar[100].rubrik = "Händelserikt liv"
	handelsetabeller.intrigerillgarningar[100].beskrivning = "Rollpersonen har haft ett händelserikt liv."
	handelsetabeller.intrigerillgarningar[100].beskrivninghak = "1 extra slag på valfri händelsetabell och slå dessutom om detta slag"
	handelsetabeller.intrigerillgarningar[100].subval[0][0][0] = {}; 
	handelsetabeller.intrigerillgarningar[100].subval[0][0][0].valdasub = []; 
	handelsetabeller.intrigerillgarningar[100].subval[0][0][0].vald = 0; 
	handelsetabeller.intrigerillgarningar[100].subval[0][0][0].valfriatabellslag=1;

	
	for (i=1; i< handelsetabeller.intrigerillgarningar.length; i++){
		handelsetabeller.intrigerillgarningar[i].tabellnamn = "Intriger \& illgärningar";
		handelsetabeller.intrigerillgarningar[i].typ = "handelsetabellslag";
		handelsetabeller.intrigerillgarningar[i].aktiverad=0;
		if ("beskrivningvaldbas" in handelsetabeller.intrigerillgarningar[i]){
			
		}else{
			handelsetabeller.intrigerillgarningar[i].beskrivningvaldbas=handelsetabeller.intrigerillgarningar[i].beskrivning;
		}
		
		if ("beskrivninghakvaldbas" in handelsetabeller.intrigerillgarningar[i]){
			
		}else{
			handelsetabeller.intrigerillgarningar[i].beskrivninghakvaldbas=handelsetabeller.intrigerillgarningar[i].beskrivninghak;
		}
		
		if ("nummer" in handelsetabeller.intrigerillgarningar[i]){
			
		}else{
			handelsetabeller.intrigerillgarningar[i].nummer=i;
		}
	}

    // --- //
    
    handelsetabeller.kunskapmysterier = [];
    
    handelsetabeller.kunskapmysterier[0] = {};    
    handelsetabeller.kunskapmysterier[0].subval = [[[]]];    
    handelsetabeller.kunskapmysterier[0].vald = 0;    
    handelsetabeller.kunskapmysterier[0].rubrik="Kunskap \& mysterier";
	handelsetabeller.kunskapmysterier[0].namn="kunskapmysterier";
	
	handelsetabeller.kunskapmysterier[1] = {}; 
	handelsetabeller.kunskapmysterier[1].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[1].vald = 0; 
	handelsetabeller.kunskapmysterier[1].rubrik = "Analytiskt sinne"
	handelsetabeller.kunskapmysterier[1].beskrivning = "Rollpersonen har ett analytiskt sinne och är snabbtänkt och kalkylerande."
	handelsetabeller.kunskapmysterier[1].beskrivninghak = "\+1T6 Psyke. Lättlärd i Kalkylera. Expertisen Logik 4T6. 2 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[1].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[1].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[1].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[1].subval[0][0][0].kunskapsfardigheterenheter = 2; 
	handelsetabeller.kunskapmysterier[1].subval[0][0][0].kalkylera = {};
	handelsetabeller.kunskapmysterier[1].subval[0][0][0].kalkylera.lattlard=1; 
	handelsetabeller.kunskapmysterier[1].subval[0][0][0].psyke = {};
	handelsetabeller.kunskapmysterier[1].subval[0][0][0].psyke.varde = 4; 
	handelsetabeller.kunskapmysterier[1].subval[0][0][0].logik = {};
	handelsetabeller.kunskapmysterier[1].subval[0][0][0].logik.enheter = 3; 

	handelsetabeller.kunskapmysterier[2] = {}; 
	handelsetabeller.kunskapmysterier[2].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[2].vald = 0; 
	handelsetabeller.kunskapmysterier[2].rubrik = "Apokryfiska kunskaper"
	handelsetabeller.kunskapmysterier[2].beskrivning = "Rollpersonen har kunskap om passager i religiösa skrifter som denne kan utnyttja för att nå djupare insikter samt att övertala och kontrollera personer."
	handelsetabeller.kunskapmysterier[2].beskrivninghak = "Lättlärd i Teologi. I situationer där rollpersonen använder Fokus för Sociala färdigheter eller Kunskapsfärdigheter och knyter detta till religion så får denne ytterligare \+1T6 bonus"
	handelsetabeller.kunskapmysterier[2].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[2].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[2].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[2].subval[0][0][0].teologi = {};
	handelsetabeller.kunskapmysterier[2].subval[0][0][0].teologi.lattlard=1; 
	handelsetabeller.kunskapmysterier[2].subval[0][0][0].formaga="I situationer där rollpersonen använder Fokus för Sociala färdigheter eller Kunskapsfärdigheter och knyter detta till religion så får denne ytterligare \+1T6 bonus på grund av sina apokryfiska kunskaper."

	handelsetabeller.kunskapmysterier[3] = {}; 
	handelsetabeller.kunskapmysterier[3].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[3].vald = 0; 
	handelsetabeller.kunskapmysterier[3].rubrik = "Arvinge"
	handelsetabeller.kunskapmysterier[3].beskrivning = "Rollpersonen är arvtagare till en omsjungen hjälte och har höga förväntningar på sig. Vad anfadern eller anmodern var känd får spelaren och spelledaren bestämma i samråd."
	handelsetabeller.kunskapmysterier[3].beskrivninghak = "4 valfria enheter att placera ut på färdigheter som är knutna till släktens rykte"
	handelsetabeller.kunskapmysterier[3].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[3].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[3].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[3].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.kunskapmysterier[3].subval[0][0][0].ovrigt="Arvtagare till en omsjungen hjälte."

	handelsetabeller.kunskapmysterier[4] = {}; 
	handelsetabeller.kunskapmysterier[4].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[4].vald = 0; 
	handelsetabeller.kunskapmysterier[4].rubrik = "Asketiskt liv"
	handelsetabeller.kunskapmysterier[4].beskrivning = "Rollpersonen har levt ett asketiskt och disciplinerat liv under en tid för att kunna fokusera på en särskild framtida uppgift. Spelaren bestämmer vad denna uppgift är för något."
	handelsetabeller.kunskapmysterier[4].beskrivninghak = "2 valfria enheter knutna till den framtida uppgiften. \+1T6 Självkontroll"
	handelsetabeller.kunskapmysterier[4].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[4].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[4].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[4].subval[0][0][0].valfriaenheter=2; 
	handelsetabeller.kunskapmysterier[4].subval[0][0][0].sjalvkontroll = {};
	handelsetabeller.kunskapmysterier[4].subval[0][0][0].sjalvkontroll.bonus = 4;
	handelsetabeller.kunskapmysterier[4].subval[0][0][0].ovrigt="Har levt ett asketiskt liv."	

	handelsetabeller.kunskapmysterier[5] = {}; 
	handelsetabeller.kunskapmysterier[5].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[5].vald = 0; 
	handelsetabeller.kunskapmysterier[5].rubrik = "Avslöjat mörk familjehemlighet"
	handelsetabeller.kunskapmysterier[5].beskrivning = "Rollpersonen har avslöjat en mörk familjehemlighet, exakt vad det rör sig om är upp till spelaren. Hursomhelst har familjen delats i två läger, dels de som tycker det var rätt att avslöja och dels de som hävdar att rollpersonen far med osanning och drar familjens rykte i smutsen."
	handelsetabeller.kunskapmysterier[5].beskrivninghak = "\+1 Vilja, \+1 Utstrålning. 2 enheter Sociala färdigheter"
	handelsetabeller.kunskapmysterier[5].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[5].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[5].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[5].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.kunskapmysterier[5].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[5].subval[0][0][0].vilja.varde =1; 
	handelsetabeller.kunskapmysterier[5].subval[0][0][0].utstralning = {};
	handelsetabeller.kunskapmysterier[5].subval[0][0][0].utstralning.varde =1; 
	handelsetabeller.kunskapmysterier[5].subval[0][0][0].kontakt="Splittrad familj efter att denne avslöjat mörk familjehemlighet."

	handelsetabeller.kunskapmysterier[6] = {}; 
	handelsetabeller.kunskapmysterier[6].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[6].vald = 0; 
	handelsetabeller.kunskapmysterier[6].rubrik = "Befriat kättare"
	handelsetabeller.kunskapmysterier[6].beskrivning = "Rollpersonen har befriat en fånge som var dömd till döden för kätteri."
	handelsetabeller.kunskapmysterier[6].beskrivninghak = "Lättlärd i Gömma och Smyga. Rollpersonen lärde sig även ett och annat av kättaren. Välj mellan 2 enheter Kunskapsfärdigheter och 2 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[6].beskrivninghakvaldbas = "Lättlärd i Gömma och Smyga. ";
	handelsetabeller.kunskapmysterier[6].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[6].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[6].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[6].subval[0][0][0].gomma = {};
	handelsetabeller.kunskapmysterier[6].subval[0][0][0].gomma.lattlard=1; 
	handelsetabeller.kunskapmysterier[6].subval[0][0][0].smyga = {};
	handelsetabeller.kunskapmysterier[6].subval[0][0][0].smyga.lattlard=1;
	handelsetabeller.kunskapmysterier[6].subval[0][0][0].kontakt="Har befriat en kättare";
	
	handelsetabeller.kunskapmysterier[6].subval[0].push([]);
	handelsetabeller.kunskapmysterier[6].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[6].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[6].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[6].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[6].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[6].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[6].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[6].subval[0][1][1].kunskapsfardigheterenheter=2;
	handelsetabeller.kunskapmysterier[6].subval[0][1][1].rubrik="2 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[6].subval[0][1][1].beskrivninghakvaldbas="2 enheter Kunskapsfärdigheter"
	
	
	handelsetabeller.kunskapmysterier[6].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[6].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[6].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[6].subval[0][1][2].mystikfardigheterenheter=2;
	handelsetabeller.kunskapmysterier[6].subval[0][1][2].rubrik="2 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[6].subval[0][1][2].beskrivninghakvaldbas="2 enheter Mystikfärdigheter"
	

	handelsetabeller.kunskapmysterier[7] = {}; 
	handelsetabeller.kunskapmysterier[7].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[7].vald = 0; 
	handelsetabeller.kunskapmysterier[7].rubrik = "Besökt helgedomar"
	handelsetabeller.kunskapmysterier[7].beskrivning = "Personen har besökt heliga platser under sina resor och mött en hel del präster och troende."
	handelsetabeller.kunskapmysterier[7].beskrivninghak = "3 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[7].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[7].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[7].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[7].subval[0][0][0].mystikfardigheterenheter = 3; 

	handelsetabeller.kunskapmysterier[8] = {}; 
	handelsetabeller.kunskapmysterier[8].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[8].vald = 0; 
	handelsetabeller.kunskapmysterier[8].rubrik = "Blivit av med förbannelse"
	handelsetabeller.kunskapmysterier[8].beskrivning = "Rollpersonen har blivit av med en förbannelse som vilat över denne. Var förbannelsen kom ifrån, hur den hävdes och hur den var avgörs av spelaren."
	handelsetabeller.kunskapmysterier[8].beskrivninghak = "Välj mellan 4 enheter Kunskapsfärdigheter och 4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[8].beskrivninghakvaldbas = "";
	
	handelsetabeller.kunskapmysterier[8].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[8].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[8].subval[0][0][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[8].subval[0][0][0].ovrigt="Har blivit av med förbannelse."
	handelsetabeller.kunskapmysterier[8].subval[0].push([]);
	handelsetabeller.kunskapmysterier[8].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[8].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[8].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[8].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[8].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[8].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[8].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[8].subval[0][1][1].kunskapsfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[8].subval[0][1][1].rubrik="4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[8].subval[0][1][1].beskrivninghakvaldbas="4 enheter Kunskapsfärdigheter"
	
	handelsetabeller.kunskapmysterier[8].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[8].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[8].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[8].subval[0][1][2].mystikfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[8].subval[0][1][2].rubrik="4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[8].subval[0][1][2].beskrivninghakvaldbas="4 enheter Mystikfärdigheter"
	

	handelsetabeller.kunskapmysterier[9] = {}; 
	handelsetabeller.kunskapmysterier[9].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[9].vald = 0; 
	handelsetabeller.kunskapmysterier[9].rubrik = "Botemedel mot sjukdom"
	handelsetabeller.kunskapmysterier[9].beskrivning = "Rollpersonen har upptäckt ett botemedel mot en sjukdom som härjat i trakten. "
	handelsetabeller.kunskapmysterier[9].beskrivninghak = "Lättlärd i Kirurgi och Läkekonst. Slå två gånger på bakgrundstabellen för att ta reda på vilka som blivit hjälpta av rollpersonen och som nu är evigt tacksamma."
	handelsetabeller.kunskapmysterier[9].beskrivninghakvaldbas = "Lättlärd i Kirurgi och Läkekonst. ";
	handelsetabeller.kunskapmysterier[9].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[9].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[9].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[9].subval[0][0][0].kirurgi = {};
	handelsetabeller.kunskapmysterier[9].subval[0][0][0].kirurgi.lattlard=1; 
	handelsetabeller.kunskapmysterier[9].subval[0][0][0].lakekonst = {};
	handelsetabeller.kunskapmysterier[9].subval[0][0][0].lakekonst.lattlard=1; 
	handelsetabeller.kunskapmysterier[9].subval[0][0][0].kontaktbas="Har upptäckt ett botemedel mot en sjukdom och på så vis hjälpt kontakt1_pluralobestamd och kontakt2_pluralobestamd, vilka nu är evigt tacksamma.";
	handelsetabeller.kunskapmysterier[9].subval[0][0][0].kontaktenhetbool=[0,0];
	handelsetabeller.kunskapmysterier[9].subval[0][0][0].beskrivningvaldbas="Bland de hjälpta finns kontakt1_pluralobestamd och kontakt2_pluralobestamd, vilka nu är evigt tacksamma.";
	
	
	handelsetabeller.kunskapmysterier[10] = {}; 
	handelsetabeller.kunskapmysterier[10].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[10].vald = 0; 
	handelsetabeller.kunskapmysterier[10].rubrik = "Ceremonimästare"
	handelsetabeller.kunskapmysterier[10].beskrivning = "Rollpersonen är en erkänd ceremonimästare och denne frågas ofta om råd i frågor som rör det ceremoniella."
	handelsetabeller.kunskapmysterier[10].beskrivninghak = "Lättlärd i Ceremoni och Kanalisera. 3 mysterier"
	handelsetabeller.kunskapmysterier[10].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[10].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[10].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[10].subval[0][0][0].ceremoni = {};
	handelsetabeller.kunskapmysterier[10].subval[0][0][0].ceremoni.lattlard=1; 
	handelsetabeller.kunskapmysterier[10].subval[0][0][0].kanalisera = {};
	handelsetabeller.kunskapmysterier[10].subval[0][0][0].kanalisera.lattlard=1; 
	handelsetabeller.kunskapmysterier[10].subval[0][0][0].mysterier=3; 

	
	handelsetabeller.kunskapmysterier[11] = {}; 
	handelsetabeller.kunskapmysterier[11].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[11].vald = 0; 
	handelsetabeller.kunskapmysterier[11].rubrik = "Deltagit i rit"
	handelsetabeller.kunskapmysterier[11].beskrivning = "Rollpersonen har deltagit i en viktig rit och utmärkt sig vilket har gett gillande, erkännande och ett visst mått av avund av de övriga som deltog i riten eller bara tittade på."
	handelsetabeller.kunskapmysterier[11].beskrivninghak = "Välj mellan 4 enheter Kunskapsfärdigheter och 4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[11].beskrivninghakvaldbas = "";
	
	handelsetabeller.kunskapmysterier[11].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[11].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[11].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[11].subval[0][0][0].ovrigt="Har deltagit i en viktig rit." 
	
	handelsetabeller.kunskapmysterier[11].subval[0].push([]);
	handelsetabeller.kunskapmysterier[11].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[11].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[11].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[11].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[11].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[11].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[11].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[11].subval[0][1][1].kunskapsfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[11].subval[0][1][1].rubrik="4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[11].subval[0][1][1].beskrivninghakvaldbas="4 enheter Kunskapsfärdigheter"
	
	handelsetabeller.kunskapmysterier[11].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[11].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[11].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[11].subval[0][1][2].mystikfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[11].subval[0][1][2].rubrik="4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[11].subval[0][1][2].beskrivninghakvaldbas="4 enheter Mystikfärdigheter"
	
	
	handelsetabeller.kunskapmysterier[12] = {}; 
	handelsetabeller.kunskapmysterier[12].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[12].vald = 0; 
	handelsetabeller.kunskapmysterier[12].rubrik = "Demonisk avkomma"
	handelsetabeller.kunskapmysterier[12].beskrivning = "Rollpersonen har fått en avkomma tillsammans med en demon. Var demonen och barnet nu befinner sig vet inte rollpersonen och denne kastas mellan känslor av avsmak, kärlek och längtan."
	handelsetabeller.kunskapmysterier[12].beskrivninghak = "2 Avtrubbningskryss för övernaturligt"
	handelsetabeller.kunskapmysterier[12].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[12].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[12].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[12].subval[0][0][0].avtrubbningovernaturligt = 2; 
	handelsetabeller.kunskapmysterier[12].subval[0][0][0].kontakt="Har en avkomma tillsammans med en demon."

	handelsetabeller.kunskapmysterier[13] = {}; 
	handelsetabeller.kunskapmysterier[13].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[13].vald = 0; 
	handelsetabeller.kunskapmysterier[13].rubrik = "Djurens frände"
	handelsetabeller.kunskapmysterier[13].beskrivning = "Rollpersonen har mycket god hand om djur och dessa trivs i rollpersonens närhet. Genom sin blotta närvaro kan rollpersonen lugna ett skrämt eller aggressivt djur."
	handelsetabeller.kunskapmysterier[13].beskrivninghak = "2 enheter Vildmarksfärdigheter. Kännetecknet Djurvän 4T6"
	handelsetabeller.kunskapmysterier[13].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[13].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[13].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[13].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.kunskapmysterier[13].subval[0][0][0].djurvan = {};
	handelsetabeller.kunskapmysterier[13].subval[0][0][0].djurvan.enheter = 3; 
	handelsetabeller.kunskapmysterier[13].subval[0][0][0].formaga="Genom sin blotta närvaro kan rollpersonen lugna ett skrämt eller aggressivt djur.";
	

	handelsetabeller.kunskapmysterier[14] = {}; 
	handelsetabeller.kunskapmysterier[14].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[14].vald = 0; 
	handelsetabeller.kunskapmysterier[14].rubrik = "Drar till sig det övernaturliga"
	handelsetabeller.kunskapmysterier[14].beskrivning = "Rollpersonen har en aura som drar till sig övernaturliga väsen. När en demon, ande eller vandöd finns i området är det rollpersonen som de upptäcker först. Konstiga saker tenderar att hända i rollpersonens närhet och vissa ser säkerligen denne som ett ondskefullt omen. Rollpersonen har dock härdats av detta och är nu beredd på det mesta."
	handelsetabeller.kunskapmysterier[14].beskrivninghak = "\+1 Vilja. 2 Avtrubbningskryss för övernaturligt"
	handelsetabeller.kunskapmysterier[14].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[14].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[14].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[14].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[14].subval[0][0][0].vilja.varde =1; 
	handelsetabeller.kunskapmysterier[14].subval[0][0][0].avtrubbningovernaturligt = 2; 
	handelsetabeller.kunskapmysterier[14].subval[0][0][0].formaga="Har en aura som drar till sig övernaturliga väsen."

	
	handelsetabeller.kunskapmysterier[15] = {}; 
	handelsetabeller.kunskapmysterier[15].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[15].vald = 0; 
	handelsetabeller.kunskapmysterier[15].rubrik = "Drömmar från ett annat liv"
	handelsetabeller.kunskapmysterier[15].beskrivning = "Rollpersonen får drömmar och minnesglimtar från något som verkar ha varit ett tidigare liv. Denne har färdigheter och kunskap som denne inte borde kunna ha."
	handelsetabeller.kunskapmysterier[15].beskrivninghak = "4 valfria enheter"
	handelsetabeller.kunskapmysterier[15].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[15].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[15].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[15].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.kunskapmysterier[15].subval[0][0][0].formaga="Får drömmar och minnesglimtar från ett tidigare liv."

	
	handelsetabeller.kunskapmysterier[16] = {}; 
	handelsetabeller.kunskapmysterier[16].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[16].vald = 0; 
	handelsetabeller.kunskapmysterier[16].rubrik = "Elementkännare"
	handelsetabeller.kunskapmysterier[16].beskrivning = "Rollpersonen har en förmåga att känna sig till vilka element som finns i närheten."
	handelsetabeller.kunskapmysterier[16].beskrivninghak = "\+1 Uppfattning. Rollpersonen kan så gott som alltid känna sig till om det finns guld i berget, vatten under jorden eller liknande. Kännetecknet Elementkännare 4T6"
	handelsetabeller.kunskapmysterier[16].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[16].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[16].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[16].subval[0][0][0].uppfattning = {};
	handelsetabeller.kunskapmysterier[16].subval[0][0][0].uppfattning.varde=1;
	handelsetabeller.kunskapmysterier[16].subval[0][0][0].elementkannare = {};
	handelsetabeller.kunskapmysterier[16].subval[0][0][0].elementkannare.enheter=3;
	

	handelsetabeller.kunskapmysterier[17] = {}; 
	handelsetabeller.kunskapmysterier[17].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[17].vald = 0; 
	handelsetabeller.kunskapmysterier[17].rubrik = "En tid som död"
	handelsetabeller.kunskapmysterier[17].beskrivning = "Rollpersonen har till synes dött men sedan kommit tillbaka till livet. Kanske drunknade denne, blev allvarligt skadad i strid eller fick i sig ett dödligt gift. När rollpersonen vaknade upp så var denne för evigt förändrad."
	handelsetabeller.kunskapmysterier[17].beskrivninghak = "4 valfria enheter. \+1T6 Självkontroll vid Nedbrytning"
	handelsetabeller.kunskapmysterier[17].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[17].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[17].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[17].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.kunskapmysterier[17].subval[0][0][0].sjalvkontroll = {};
	handelsetabeller.kunskapmysterier[17].subval[0][0][0].sjalvkontroll.egenskap = "\+1T6 vid Nedbrytning"; 
	handelsetabeller.kunskapmysterier[17].subval[0][0][0].ovrigt="Har till synes dött men sedan kommit tillbaka till livet."

	handelsetabeller.kunskapmysterier[18] = {}; 
	handelsetabeller.kunskapmysterier[18].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[18].vald = 0; 
	handelsetabeller.kunskapmysterier[18].rubrik = "Exceptionellt minne"
	handelsetabeller.kunskapmysterier[18].beskrivning = "Rollpersonen har mycket gott minne och har en förmåga att minnas detaljer av allehanda slag."
	handelsetabeller.kunskapmysterier[18].beskrivninghak = "\+1T6 Visdom. Lättlärd i alla Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[18].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[18].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[18].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[18].subval[0][0][0] = {};
	handelsetabeller.kunskapmysterier[18].subval[0][0][0].lattlardallakunskapsfardigheter=1; 
	handelsetabeller.kunskapmysterier[18].subval[0][0][0].visdom = {};
	handelsetabeller.kunskapmysterier[18].subval[0][0][0].visdom.varde = 4;
	handelsetabeller.kunskapmysterier[18].subval[0][0][0].formaga="Exceptionellt minne."


	handelsetabeller.kunskapmysterier[19] = {}; 
	handelsetabeller.kunskapmysterier[19].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[19].vald = 0; 
	handelsetabeller.kunskapmysterier[19].rubrik = "Experiment"
	handelsetabeller.kunskapmysterier[19].beskrivning = "Rollpersonen har experimenterat med (eller blivit utsatt för) olika preparat som på något sätt förvridit dennes sinne och kropp. Detta kan vara allt ifrån alkemiska mixturer till svampar eller droger."
	handelsetabeller.kunskapmysterier[19].beskrivninghak = "–3 Styrka, Tålighet eller Rörlighet. \+1T6 Vilja eller Psyke"
	handelsetabeller.kunskapmysterier[19].beskrivninghakvaldbas = "";
	
	handelsetabeller.kunskapmysterier[19].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[19].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[19].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[19].subval[0][0][0].ovrigt="Har experimenterat med (eller blivit utsatt för) olika preparat som på något sätt förvridit dennes sinne och kropp.";
	
	handelsetabeller.kunskapmysterier[19].subval.push([[]]); 
	handelsetabeller.kunskapmysterier[19].subval[1][0][0] = {}; 
	handelsetabeller.kunskapmysterier[19].subval[1][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[19].subval[1][0][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[19].subval[1].push([]); 
	handelsetabeller.kunskapmysterier[19].subval[1][1][0] = {}; 
	handelsetabeller.kunskapmysterier[19].subval[1][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[19].subval[1][1][0].vald = 0; 
	handelsetabeller.kunskapmysterier[19].subval[1][1][0].styrka = {};
	handelsetabeller.kunskapmysterier[19].subval[1][1][0].styrka.varde=-3;
	handelsetabeller.kunskapmysterier[19].subval[1][1][0].rubrik="-3 Styrka";	
	handelsetabeller.kunskapmysterier[19].subval[1][1][0].beskrivninghakvaldbas="-3 Styrka. ";	
	
	
	handelsetabeller.kunskapmysterier[19].subval[1].push([]); 
	handelsetabeller.kunskapmysterier[19].subval[1][2][0] = {}; 
	handelsetabeller.kunskapmysterier[19].subval[1][2][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[19].subval[1][2][0].vald = 0; 
	handelsetabeller.kunskapmysterier[19].subval[1][2][0].talighet = {};
	handelsetabeller.kunskapmysterier[19].subval[1][2][0].talighet.varde=-3;
	handelsetabeller.kunskapmysterier[19].subval[1][2][0].rubrik="-3 Tålighet";	
	handelsetabeller.kunskapmysterier[19].subval[1][2][0].beskrivninghakvaldbas="-3 Tålighet. ";	
	
	
	handelsetabeller.kunskapmysterier[19].subval[1].push([]); 
	handelsetabeller.kunskapmysterier[19].subval[1][3][0] = {}; 
	handelsetabeller.kunskapmysterier[19].subval[1][3][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[19].subval[1][3][0].vald = 0; 
	handelsetabeller.kunskapmysterier[19].subval[1][3][0].rorlighet = {};
	handelsetabeller.kunskapmysterier[19].subval[1][3][0].rorlighet.varde=-3;
	handelsetabeller.kunskapmysterier[19].subval[1][3][0].rubrik="-3 Rörlighet";	
	handelsetabeller.kunskapmysterier[19].subval[1][3][0].beskrivninghakvaldbas="-3 Rörlighet. ";	
	
	handelsetabeller.kunskapmysterier[19].subval.push([[]]); 
	handelsetabeller.kunskapmysterier[19].subval[2][0][0] = {}; 
	handelsetabeller.kunskapmysterier[19].subval[2][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[19].subval[2][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[19].subval[2].push([]); 
	
	handelsetabeller.kunskapmysterier[19].subval[2][1][0] = {}; 
	handelsetabeller.kunskapmysterier[19].subval[2][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[19].subval[2][1][0].vald = 0; 
	handelsetabeller.kunskapmysterier[19].subval[2][1][0].vilja = {};
	handelsetabeller.kunskapmysterier[19].subval[2][1][0].vilja.varde=4;
	handelsetabeller.kunskapmysterier[19].subval[2][1][0].rubrik="\+1T6 Vilja";	
	handelsetabeller.kunskapmysterier[19].subval[2][1][0].beskrivninghakvaldbas="\+1T6 Vilja.";	
	
	
	handelsetabeller.kunskapmysterier[19].subval[2].push([]); 
	handelsetabeller.kunskapmysterier[19].subval[2][2][0] = {}; 
	handelsetabeller.kunskapmysterier[19].subval[2][2][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[19].subval[2][2][0].vald = 0; 
	handelsetabeller.kunskapmysterier[19].subval[2][1][0].psyke = {};
	handelsetabeller.kunskapmysterier[19].subval[2][1][0].psyke.varde=4;
	handelsetabeller.kunskapmysterier[19].subval[2][1][0].rubrik="\+1T6 Psyke";	
	handelsetabeller.kunskapmysterier[19].subval[2][1][0].beskrivninghakvaldbas="\+1T6 Psyke.";	
	

	handelsetabeller.kunskapmysterier[20] = {}; 
	handelsetabeller.kunskapmysterier[20].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[20].vald = 0; 
	handelsetabeller.kunskapmysterier[20].rubrik = "Familiarii"
	handelsetabeller.kunskapmysterier[20].beskrivning = "Rollpersonen har ett mindre djur med en ande bunden till sig. Det kan exempelvis vara en fladdermus, en råtta, en padda, en korp eller en orm."
	handelsetabeller.kunskapmysterier[20].beskrivninghak = "Lättlärd i Naturlära. 3 enheter Mystikfärdigheter. Djuret beter sig normalt och kan inte tala. Det kan däremot tänka logiskt och förstå vad rollpersonen säger och frakta meddelanden till rätt personer och liknande"
	handelsetabeller.kunskapmysterier[20].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[20].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[20].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[20].subval[0][0][0].mystikfardigheterenheter = 3; 
	handelsetabeller.kunskapmysterier[20].subval[0][0][0].naturlara = {};
	handelsetabeller.kunskapmysterier[20].subval[0][0][0].naturlara.lattlard=1; 
	handelsetabeller.kunskapmysterier[20].subval[0][0][0].resurs="Har ett mindre djur med en ande bunden till sig.";

	handelsetabeller.kunskapmysterier[21] = {}; 
	handelsetabeller.kunskapmysterier[21].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[21].vald = 0; 
	handelsetabeller.kunskapmysterier[21].rubrik = "Formelsamling"
	handelsetabeller.kunskapmysterier[21].beskrivning = "Rollpersonen har en formelsamling i sin ägo."
	handelsetabeller.kunskapmysterier[21].beskrivninghak = "I boken finns instruktioner till 5 mysterier. 2 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[21].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[21].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[21].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[21].subval[0][0][0].mystikfardigheterenheter = 2; 
	handelsetabeller.kunskapmysterier[21].subval[0][0][0].resurs="En formelsamling med instruktioner till 5 mysterier.";

	handelsetabeller.kunskapmysterier[22] = {}; 
	handelsetabeller.kunskapmysterier[22].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[22].vald = 0; 
	handelsetabeller.kunskapmysterier[22].rubrik = "Funnit förlorad kunskap"
	handelsetabeller.kunskapmysterier[22].beskrivning = "Rollpersonen har funnit kunskap som länge tros har varit förlorad. Detta har gjort denne känd i sina kretsar. Det kan röra sig om skrifter av ett helgon, en magisk bok eller kanske ett recept eller en karta av något slag. Rollpersonen har tagit del av kunskapen och diskuterat med många i sina kretsar vilket ökat dennes bildning."
	handelsetabeller.kunskapmysterier[22].beskrivninghak = "\+2 Visdom. 4 valfria enheter"
	handelsetabeller.kunskapmysterier[22].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[22].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[22].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[22].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.kunskapmysterier[22].subval[0][0][0].visdom = {};
	handelsetabeller.kunskapmysterier[22].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.kunskapmysterier[22].subval[0][0][0].ovrigt="Har funnit kunskap som länge tros har varit förlorad.";

	handelsetabeller.kunskapmysterier[23] = {}; 
	handelsetabeller.kunskapmysterier[23].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[23].vald = 0; 
	handelsetabeller.kunskapmysterier[23].rubrik = "Fått medaljong"
	handelsetabeller.kunskapmysterier[23].beskrivning = "En mystisk man har under en mörk och regnig natt överlämnat en medaljong till rollpersonen. Den tycks ha en inneboende styrka som rollpersonen kan ta del av."
	handelsetabeller.kunskapmysterier[23].beskrivninghak = "En gång per spelmöte kan medaljongen användas för att ge rollpersonen en bonus på \+1T6 för ett tärningsslag"
	handelsetabeller.kunskapmysterier[23].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[23].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[23].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[23].subval[0][0][0].resurs="En medaljong som rollpersonen fått av en mystisk man. En gång per spelmöte kan medaljongen användas för att ge rollpersonen en bonus på \+1T6 för ett tärningsslag.";

	handelsetabeller.kunskapmysterier[24] = {}; 
	handelsetabeller.kunskapmysterier[24].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[24].vald = 0; 
	handelsetabeller.kunskapmysterier[24].rubrik = "Föraktfull"
	handelsetabeller.kunskapmysterier[24].beskrivning = "Rollpersonen känner förakt för en viss typ av individer och har även blivit envis kring det. Detta kan röra sig om en samhällsgrupp såsom bönder eller präster eller ett folkslag såsom alver, zhaner, dvärgar eller liknande."
	handelsetabeller.kunskapmysterier[24].beskrivninghak = "\+1 Vilja. 1 Avtrubbningskryss för utsatthet. –1T6 i alla sociala situationer då denne måste umgås med dessa typer av individer då det inte gäller hot eller förnedring"
	handelsetabeller.kunskapmysterier[24].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[24].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[24].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[24].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[24].subval[0][0][0].vilja.varde=1;; 
	handelsetabeller.kunskapmysterier[24].subval[0][0][0].avtrubbningutsatthet=1;
	handelsetabeller.kunskapmysterier[24].subval[0][0][0].formaga="Känner förakt för en viss typ av individer. –1T6 i alla sociala situationer då denne måste umgås med dessa typer av individer då det inte gäller hot eller förnedring";
	
	

	handelsetabeller.kunskapmysterier[25] = {}; 
	handelsetabeller.kunskapmysterier[25].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[25].vald = 0; 
	handelsetabeller.kunskapmysterier[25].rubrik = "Förbannelse"
	handelsetabeller.kunskapmysterier[25].beskrivning = "Rollpersonen har en förbannelse som vilar över denne. Hur denna kom till är upp till spelaren. Mycket tid har lagts på att försöka förstå hur man blir av med förbannelsen men ännu utan framgång."
	handelsetabeller.kunskapmysterier[25].beskrivninghak = "Välj mellan 4 enheter Kunskapsfärdigheter och 4 enheter Mystikfärdigheter. Det kan röra sig om att rollpersonen alltid går vilse i skogen, inte kan öppna dörrar eller att denne alltid drar till sig spöken och övernaturligheter"
	handelsetabeller.kunskapmysterier[25].beskrivninghak = "Förbannelsen kan röra sig om att rollpersonen alltid går vilse i skogen, inte kan öppna dörrar eller att denne alltid drar till sig spöken och övernaturligheter. "
	
	handelsetabeller.kunskapmysterier[25].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[25].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[25].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[25].subval[0][0][0].formaga="Har en förbannelse vilande över sig.";
	
	handelsetabeller.kunskapmysterier[25].subval[0].push([]);
	handelsetabeller.kunskapmysterier[25].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[25].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[25].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[25].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[25].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[25].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[25].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[25].subval[0][1][1].kunskapsfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[25].subval[0][1][1].rubrik="4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[25].subval[0][1][1].beskrivninghakvaldbas="4 enheter Kunskapsfärdigheter."
	
	
	handelsetabeller.kunskapmysterier[25].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[25].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[25].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[25].subval[0][1][2].mystikfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[25].subval[0][1][2].rubrik="4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[25].subval[0][1][2].beskrivninghakvaldbas ="4 enheter Mystikfärdigheter."

	handelsetabeller.kunskapmysterier[26] = {}; 
	handelsetabeller.kunskapmysterier[26].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[26].vald = 0; 
	handelsetabeller.kunskapmysterier[26].rubrik = "Förbjuden kult"
	handelsetabeller.kunskapmysterier[26].beskrivning = "Personen är eller har varit medlem i en kult. Detta kan vara en religiös avart såsom lamiakulten, glutharianerna eller Xinukulten. Skulle tiden i kulten avslöjas riskerar personen att bli förkastad eller till och med avrättad."
	handelsetabeller.kunskapmysterier[26].beskrivninghak = "Välj mellan 4 enheter Kunskapsfärdigheter och 4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[26].beskrivninghakvaldbas = "";
	
	handelsetabeller.kunskapmysterier[26].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[26].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[26].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[26].subval[0][0][0].ovrigt="Är eller har varit medlem i en förbjuden kult.";
	
	handelsetabeller.kunskapmysterier[26].subval[0].push([]);
	handelsetabeller.kunskapmysterier[26].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[26].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[26].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[26].subval[0][1][0].antalsubval=1;
	
	
	handelsetabeller.kunskapmysterier[26].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[26].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[26].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[26].subval[0][1][1].kunskapsfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[26].subval[0][1][1].rubrik="4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[26].subval[0][1][1].beskrivninghakvaldbas="4 enheter Kunskapsfärdigheter."
	
	handelsetabeller.kunskapmysterier[26].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[26].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[26].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[26].subval[0][1][2].mystikfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[26].subval[0][1][2].rubrik="4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[26].subval[0][1][2].beskrivninghakvaldbas="4 enheter Mystikfärdigheter."
	

	handelsetabeller.kunskapmysterier[27] = {}; 
	handelsetabeller.kunskapmysterier[27].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[27].vald = 0; 
	handelsetabeller.kunskapmysterier[27].rubrik = "Förbjuden kunskap"
	handelsetabeller.kunskapmysterier[27].beskrivning = "Personen har kommit över förbjuden kunskap och lärt sig nyttja denna. Rollpersonen har dock fått en fiende som är ute efter hämnd då denne blivit lurad på kunskapen."
	handelsetabeller.kunskapmysterier[27].beskrivningvaldbas = "";
	
	handelsetabeller.kunskapmysterier[27].beskrivninghak = "6 enheter Mystikfärdigheter. 2 mysterier. Slå två gånger på bakgrundstabellen och välj en som visar vem som är ute efter rollpersonen"
	handelsetabeller.kunskapmysterier[27].beskrivninghakvaldbas = "6 enheter Mystikfärdigheter. 2 mysterier. ";
	
	handelsetabeller.kunskapmysterier[27].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[27].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[27].subval[0][0][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[27].subval[0][0][0].mystikfardigheterenheter=6;
	handelsetabeller.kunskapmysterier[27].subval[0][0][0].mysterier=2;
	handelsetabeller.kunskapmysterier[27].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.kunskapmysterier[27].subval[0][0][0].kontaktbas="kontakt1_Obestamd är ute efter rollpersonen då denne fått tag på förbjuden kunskap."
	handelsetabeller.kunskapmysterier[27].subval[0][0][0].beskrivningvaldbas = "Personen har kommit över förbjuden kunskap och lärt sig nyttja denna. Rollpersonen har dock fått en fiende i form av kontakt1_obestamd som är ute efter hämnd då denne blivit lurad på kunskapen."
	

	handelsetabeller.kunskapmysterier[28] = {}; 
	handelsetabeller.kunskapmysterier[28].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[28].vald = 0; 
	handelsetabeller.kunskapmysterier[28].rubrik = "Förbjuden sammanslutning"
	handelsetabeller.kunskapmysterier[28].beskrivning = "Rollpersonen är eller har varit medlem i en sammanslutning som är bannlyst av de styrande. Detta kan röra sig om en politisk sammansvärjning eller en grupp personer som gått samman för att komma över kunskap eller uppnå ett mål."
	handelsetabeller.kunskapmysterier[28].beskrivninghak = "\+2 Psyke, \+1 Visdom. Välj mellan 4 enheter Kunskapsfärdigheter och 4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[28].beskrivninghak = "\+2 Psyke, \+1 Visdom. ";
	
	handelsetabeller.kunskapmysterier[28].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[28].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[28].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[28].subval[0][0][0].ovrigt="Är eller har varit medlem i en förbjuden sammanslutning."
	
	handelsetabeller.kunskapmysterier[28].subval[0].push([]);
	handelsetabeller.kunskapmysterier[28].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[28].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[28].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[28].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[28].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[28].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[28].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[28].subval[0][1][1].kunskapsfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[28].subval[0][1][1].rubrik="4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[28].subval[0][1][1].beskrivninghakvaldbas="4 enheter Kunskapsfärdigheter."
	
	handelsetabeller.kunskapmysterier[28].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[28].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[28].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[28].subval[0][1][2].mystikfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[28].subval[0][1][2].rubrik="4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[28].subval[0][1][2].beskrivninghakvaldbas="4 enheter Mystikfärdigheter."
	

	handelsetabeller.kunskapmysterier[29] = {}; 
	handelsetabeller.kunskapmysterier[29].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[29].vald = 0; 
	handelsetabeller.kunskapmysterier[29].rubrik = "Förbjuden skrift"
	handelsetabeller.kunskapmysterier[29].beskrivning = "Rollpersonen har kommit över en förbjuden skrift. Denna lunta kan vara allt från en ockult bok till en politisk satir som hånar makten. Boken är värdefull men att ha den i sin ägo är i sig farligt."
	handelsetabeller.kunskapmysterier[29].beskrivninghak = "\+2 Visdom. 4 valfria enheter"
	handelsetabeller.kunskapmysterier[29].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[29].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[29].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[29].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.kunskapmysterier[29].subval[0][0][0].visdom = {};
	handelsetabeller.kunskapmysterier[29].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.kunskapmysterier[29].subval[0][0][0].resurs="En förbjuden skrift.";

	handelsetabeller.kunskapmysterier[30] = {}; 
	handelsetabeller.kunskapmysterier[30].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[30].vald = 0; 
	handelsetabeller.kunskapmysterier[30].rubrik = "Fördjupad självinsikt"
	handelsetabeller.kunskapmysterier[30].beskrivning = "Rollpersonen har spenderat tid antingen i ensam bön och meditation eller tillsammans med en läromästare som väglett denne till att få en fördjupad självinsikt i sin personlighet. Detta har gett rollpersonen en nästan orubblig vilja."
	handelsetabeller.kunskapmysterier[30].beskrivninghak = "\+1T6 Vilja. Expertisen Meditera 4T6"
	handelsetabeller.kunskapmysterier[30].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[30].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[30].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[30].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[30].subval[0][0][0].vilja.varde = 4; 
	handelsetabeller.kunskapmysterier[30].subval[0][0][0].meditera = {};
	handelsetabeller.kunskapmysterier[30].subval[0][0][0].meditera.enheter = 3; 

	handelsetabeller.kunskapmysterier[31] = {}; 
	handelsetabeller.kunskapmysterier[31].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[31].vald = 0; 
	handelsetabeller.kunskapmysterier[31].rubrik = "Försvaga vandöd"
	handelsetabeller.kunskapmysterier[31].beskrivning = "Rollpersonen har en förmåga som försvagar vandöda."
	handelsetabeller.kunskapmysterier[31].beskrivninghak = "Alla vandöda, oavsett rang, får –1T6 på alla slag om de befinner sig inom Kort avstånd från rollpersonen"
	handelsetabeller.kunskapmysterier[31].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[31].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[31].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[31].subval[0][0][0].formaga="Alla vandöda, oavsett rang, får –1T6 på alla slag om de befinner sig inom Kort avstånd från rollpersonen."; 

	handelsetabeller.kunskapmysterier[32] = {}; 
	handelsetabeller.kunskapmysterier[32].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[32].vald = 0; 
	handelsetabeller.kunskapmysterier[32].rubrik = "Givmild beskyddare"
	handelsetabeller.kunskapmysterier[32].beskrivning = "Rollpersonen har en givmild beskyddare som har gett denne en ansenlig summa pengar för att kunna fortsätta med att studera världens mysterier. Varför beskyddaren har gjort detta är inte tydligt men det tycks som att denne förväntar sig någon typ av gentjänst."
	handelsetabeller.kunskapmysterier[32].beskrivningvaldbas = "";
	handelsetabeller.kunskapmysterier[32].beskrivninghak = "3 enheter Kunskapsfärdigheter. Slå två gånger på bakgrundstabellen och välj en som visar vem beskyddaren är. Startbeloppet ökar med 2T6×10 silver."
	handelsetabeller.kunskapmysterier[32].beskrivninghakvaldbas = "3 enheter Kunskapsfärdigheter. ";
	
	handelsetabeller.kunskapmysterier[32].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[32].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[32].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[32].subval[0][0][0].kunskapsfardigheterenheter=3;
	handelsetabeller.kunskapmysterier[32].subval[0][0][0].pengarslag="2T6x10";
	handelsetabeller.kunskapmysterier[32].subval[0][0][0].kontaktbas="kontakt1_Obestamd	är beskyddare åt rollpersonen."
	handelsetabeller.kunskapmysterier[32].subval[0][0][0].beskrivninghakvaldbas="Startbeloppet ökar med pengar_resultat silver."
	handelsetabeller.kunskapmysterier[32].subval[0][0][0].beskrivningvaldbas = "Rollpersonen har en givmild beskyddare som är kontakt1_rubrikliten som har gett denne en ansenlig summa pengar för att kunna fortsätta med att studera världens mysterier. Varför beskyddaren har gjort detta är inte tydligt men det tycks som att denne förväntar sig någon typ av gentjänst."
	handelsetabeller.kunskapmysterier[32].subval[0][0][0].kontaktenhetbool=[0];
	

	handelsetabeller.kunskapmysterier[33] = {}; 
	handelsetabeller.kunskapmysterier[33].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[33].vald = 0; 
	handelsetabeller.kunskapmysterier[33].rubrik = "Glömd kunskap"
	handelsetabeller.kunskapmysterier[33].beskrivning = "Rollpersonen har kunskap om någonting mystiskt som få känner till. Det kan exempelvis röra sig om platsen för ett gammalt gravfält, en högmagisk plats, en gammal kultplats eller ett försvunnet tempel, alternativt kan det handla om hur man kommer i kontakt med en demon, var det går att få tag på skrifter om dödsmagi eller hur man gör för att komma till underjorden."
	handelsetabeller.kunskapmysterier[33].beskrivninghak = "4 valfria enheter som kan kopplas till denna kunskap"
	handelsetabeller.kunskapmysterier[33].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[33].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[33].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[33].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.kunskapmysterier[33].subval[0][0][0].ovrigt="Har kunskap om någonting mystiskt som få känner till.";

	
	handelsetabeller.kunskapmysterier[34] = {}; 
	handelsetabeller.kunskapmysterier[34].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[34].vald = 0; 
	handelsetabeller.kunskapmysterier[34].rubrik = "Går i sömnen"
	handelsetabeller.kunskapmysterier[34].beskrivning = "Rollpersonen går då och då i sömnen. Det händer att denne vaknar på en annan plats än sin säng och blir ibland väckt när under sin sömngång och är då mycket förvirrad de första minuterna. Rollpersonen tycks dock genom sin säregna sömn fått en djupare förståelse inom vissa områden då denne grubblar på problemen innan läggdags och vaknar med lösningen."
	handelsetabeller.kunskapmysterier[34].beskrivninghak = "Lättlärd i 3 valfria Kunskapsfärdigheter eller Mystikfärdigheter";
	handelsetabeller.kunskapmysterier[34].beskrivninghakvaldbas = "";
	
	handelsetabeller.kunskapmysterier[34].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[34].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[34].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[34].subval[0][0][0].formaga="Går i sömnen";
	
	handelsetabeller.kunskapmysterier[34].subval[0].push([]);
	handelsetabeller.kunskapmysterier[34].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[34].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[34].subval[0][1][0].vald = 0; 
	handelsetabeller.kunskapmysterier[34].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[34].subval[0][1][1] = {}; 
	handelsetabeller.kunskapmysterier[34].subval[0][1][1].valdasub = []; 
	handelsetabeller.kunskapmysterier[34].subval[0][1][1].vald = 0; 
	handelsetabeller.kunskapmysterier[34].subval[0][1][1].lattlardkunskapsfardigheter=3;
	handelsetabeller.kunskapmysterier[34].subval[0][1][1].rubrik="Lättlärd i 3 valfria Kunskapsfärdigheter."
	handelsetabeller.kunskapmysterier[34].subval[0][1][1].beskrivninghakvaldbas="Lättlärd i 3 valfria Kunskapsfärdigheter."
	
	
	handelsetabeller.kunskapmysterier[34].subval[0][1][2] = {}; 
	handelsetabeller.kunskapmysterier[34].subval[0][1][2].valdasub = []; 
	handelsetabeller.kunskapmysterier[34].subval[0][1][2].vald = 0; 
	handelsetabeller.kunskapmysterier[34].subval[0][1][2].lattlardmystikfardigheter=3;
	handelsetabeller.kunskapmysterier[34].subval[0][1][2].rubrik="Lättlärd i 3 valfria Mystikfärdigheter."
	handelsetabeller.kunskapmysterier[34].subval[0][1][2].beskrivninghakvaldbas="Lättlärd i 3 valfria Mystikfärdigheter."
	

	handelsetabeller.kunskapmysterier[35] = {}; 
	handelsetabeller.kunskapmysterier[35].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[35].vald = 0; 
	handelsetabeller.kunskapmysterier[35].rubrik = "Hedniska riter"
	handelsetabeller.kunskapmysterier[35].beskrivning = "Rollpersonen har hänfallit åt hedniska riter som strider mot den inhemska religionen. Det kan röra sig om blodsoffer, böner till mörka makter eller schamanistiska ritualer. Om detta blir påkommet så kan rollpersonen riskera sitt liv och dessutom bli misstrodd och fruktad."
	handelsetabeller.kunskapmysterier[35].beskrivninghak = "\+2 Psyke, \+1 Vilja. Lättlärd i Ockultism"
	handelsetabeller.kunskapmysterier[35].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[35].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[35].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[35].subval[0][0][0].ockultism = {};
	handelsetabeller.kunskapmysterier[35].subval[0][0][0].ockultism.lattlard=1; 
	handelsetabeller.kunskapmysterier[35].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[35].subval[0][0][0].vilja.varde =1; 
	handelsetabeller.kunskapmysterier[35].subval[0][0][0].psyke = {};
	handelsetabeller.kunskapmysterier[35].subval[0][0][0].psyke.varde =2; 
	handelsetabeller.kunskapmysterier[35].subval[0][0][0].ovrigt="Har ägnat sig åt hedniska riter som strider mot den inhemska religionen.";

	handelsetabeller.kunskapmysterier[36] = {}; 
	handelsetabeller.kunskapmysterier[36].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[36].vald = 0; 
	handelsetabeller.kunskapmysterier[36].rubrik = "Heligt föremål"
	handelsetabeller.kunskapmysterier[36].beskrivning = "Rollpersonen har ett föremål som används inom trosutövandet i dennes religion. Det kan till exempel vara en helig skrift, en religiös symbol eller en offerkniv."
	handelsetabeller.kunskapmysterier[36].beskrivninghak = "Lättlärd i Teologi. Rollpersonen får ett heligt föremål"
	handelsetabeller.kunskapmysterier[36].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[36].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[36].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[36].subval[0][0][0].teologi = {};
	handelsetabeller.kunskapmysterier[36].subval[0][0][0].teologi.lattlard=1; 
	handelsetabeller.kunskapmysterier[36].subval[0][0][0].heligaforemal=1; 
	

	handelsetabeller.kunskapmysterier[37] = {}; 
	handelsetabeller.kunskapmysterier[37].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[37].vald = 0; 
	handelsetabeller.kunskapmysterier[37].rubrik = "Hemligt bibliotek"
	handelsetabeller.kunskapmysterier[37].beskrivning = "Rollpersonen har tillgång till ett hemligt bibliotek."
	handelsetabeller.kunskapmysterier[37].beskrivninghak = "Välj mellan 4 enheter Kunskapsfärdigheter och 4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[37].beskrivninghakvaldbas = "";
	
	handelsetabeller.kunskapmysterier[37].subval[0][0][0] = {};
	handelsetabeller.kunskapmysterier[37].subval[0][0][0].valdasub = [];
	handelsetabeller.kunskapmysterier[37].subval[0][0][0].vald = 0;
	handelsetabeller.kunskapmysterier[37].subval[0][0][0].resurs="Har tillgång till ett hemligt bibliotek.";
	
	handelsetabeller.kunskapmysterier[37].subval[0].push([]);
	handelsetabeller.kunskapmysterier[37].subval[0][1][0] = {};
	handelsetabeller.kunskapmysterier[37].subval[0][1][0].valdasub = [];
	handelsetabeller.kunskapmysterier[37].subval[0][1][0].vald = 0;
	
	handelsetabeller.kunskapmysterier[37].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[37].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[37].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[37].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[37].subval[0][1][1].kunskapsfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[37].subval[0][1][1].rubrik="4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[37].subval[0][1][1].beskrivninghakvaldbas="4 enheter Kunskapsfärdigheter."
	
	handelsetabeller.kunskapmysterier[37].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[37].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[37].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[37].subval[0][1][2].mystikfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[37].subval[0][1][2].rubrik="4 enheter Mystikfärdigheter"	
	handelsetabeller.kunskapmysterier[37].subval[0][1][2].beskrivninghakvaldbas="4 enheter Mystikfärdigheter."	
	

	handelsetabeller.kunskapmysterier[38] = {}; 
	handelsetabeller.kunskapmysterier[38].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[38].vald = 0; 
	handelsetabeller.kunskapmysterier[38].rubrik = "Historisk förebild"
	handelsetabeller.kunskapmysterier[38].beskrivning = "Rollpersonen har en historisk förebild som denne har studerat och försökt lära så mycket det bara går om. Detta kan vara ett helgon, en filosof, en stor ledare eller liknande. Rollpersonen är beredd att betala stora summor och ta stora risker för att få en djupare insikt i denna individs liv."
	handelsetabeller.kunskapmysterier[38].beskrivninghak = "\+2 i två valfria grundattribut, knutet till förebildens ideal. Rollpersonen har en Expertis med samma namn som den historiska förebilden och får 4T6 i denna."
	handelsetabeller.kunskapmysterier[38].beskrivninghakvaldbas = "Rollpersonen har en Expertis med samma namn som den historiska förebilden och får 4T6 i denna. "
	
	handelsetabeller.kunskapmysterier[38].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[38].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[38].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[38].subval[0][0][0].ovrigt="Har en historisk förebild. Rollpersonen har en Expertis med samma namn som den historiska förebilden och får 4T6 i denna. ";
	
	handelsetabeller.kunskapmysterier[38].subval.push([[]]);
	handelsetabeller.kunskapmysterier[38].subval[1][0][0] = {}; 
	handelsetabeller.kunskapmysterier[38].subval[1][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[38].subval[1][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[38].subval[1][0][0].antalsubval=2;
	
	handelsetabeller.kunskapmysterier[38].subval[1].push([]);
	handelsetabeller.kunskapmysterier[38].subval[1][1][0] = {};
	handelsetabeller.kunskapmysterier[38].subval[1][1][0].valdasub = [];
	handelsetabeller.kunskapmysterier[38].subval[1][1][0].vald = 0;
	handelsetabeller.kunskapmysterier[38].subval[1][1][0].styrka = {};
	handelsetabeller.kunskapmysterier[38].subval[1][1][0].styrka.varde=2;
	handelsetabeller.kunskapmysterier[38].subval[1][1][0].rubrik="\+2 Styrka"
	handelsetabeller.kunskapmysterier[38].subval[1][1][0].beskrivninghakvaldbas="\+2 Styrka. "
	
	
	handelsetabeller.kunskapmysterier[38].subval[1].push([]);
	handelsetabeller.kunskapmysterier[38].subval[1][2][0] = {};
	handelsetabeller.kunskapmysterier[38].subval[1][2][0].valdasub = [];
	handelsetabeller.kunskapmysterier[38].subval[1][2][0].vald = 0;
	handelsetabeller.kunskapmysterier[38].subval[1][2][0].talighet = {};
	handelsetabeller.kunskapmysterier[38].subval[1][2][0].talighet.varde=2;
	handelsetabeller.kunskapmysterier[38].subval[1][2][0].rubrik="\+2 Tålighet"
	handelsetabeller.kunskapmysterier[38].subval[1][2][0].beskrivninghakvaldbas="\+2 Tålighet. "
	
	handelsetabeller.kunskapmysterier[38].subval[1].push([]);
	handelsetabeller.kunskapmysterier[38].subval[1][3][0] = {};
	handelsetabeller.kunskapmysterier[38].subval[1][3][0].valdasub = [];
	handelsetabeller.kunskapmysterier[38].subval[1][3][0].vald = 0;
	handelsetabeller.kunskapmysterier[38].subval[1][3][0].rorlighet = {};
	handelsetabeller.kunskapmysterier[38].subval[1][3][0].rorlighet.varde=2;
	handelsetabeller.kunskapmysterier[38].subval[1][3][0].rubrik="\+2 Rörlighet"
	handelsetabeller.kunskapmysterier[38].subval[1][3][0].beskrivninghakvaldbas="\+2 Rörlighet. "
	
	handelsetabeller.kunskapmysterier[38].subval[1].push([]);
	handelsetabeller.kunskapmysterier[38].subval[1][4][0] = {};
	handelsetabeller.kunskapmysterier[38].subval[1][4][0].valdasub = [];
	handelsetabeller.kunskapmysterier[38].subval[1][4][0].vald = 0;
	handelsetabeller.kunskapmysterier[38].subval[1][4][0].uppfattning = {};
	handelsetabeller.kunskapmysterier[38].subval[1][4][0].uppfattning.varde=2;
	handelsetabeller.kunskapmysterier[38].subval[1][4][0].rubrik="\+2 Uppfattning"
	handelsetabeller.kunskapmysterier[38].subval[1][4][0].beskrivninghakvaldbas="\+2 Uppfattning. "
	
	handelsetabeller.kunskapmysterier[38].subval[1].push([]);
	handelsetabeller.kunskapmysterier[38].subval[1][5][0] = {};
	handelsetabeller.kunskapmysterier[38].subval[1][5][0].valdasub = [];
	handelsetabeller.kunskapmysterier[38].subval[1][5][0].vald = 0;
	handelsetabeller.kunskapmysterier[38].subval[1][5][0].vilja = {};
	handelsetabeller.kunskapmysterier[38].subval[1][5][0].vilja.varde=2;
	handelsetabeller.kunskapmysterier[38].subval[1][5][0].rubrik="\+2 Vilja"
	handelsetabeller.kunskapmysterier[38].subval[1][5][0].beskrivninghakvaldbas="\+2 Vilja. "
	
	handelsetabeller.kunskapmysterier[38].subval[1].push([]);
	handelsetabeller.kunskapmysterier[38].subval[1][6][0] = {};
	handelsetabeller.kunskapmysterier[38].subval[1][6][0].valdasub = [];
	handelsetabeller.kunskapmysterier[38].subval[1][6][0].vald = 0;
	handelsetabeller.kunskapmysterier[38].subval[1][6][0].psyke = {};
	handelsetabeller.kunskapmysterier[38].subval[1][6][0].psyke.varde=2;
	handelsetabeller.kunskapmysterier[38].subval[1][6][0].rubrik="\+2 Psyke"
	handelsetabeller.kunskapmysterier[38].subval[1][6][0].beskrivninghakvaldbas="\+2 Psyke. "
	
	handelsetabeller.kunskapmysterier[38].subval[1].push([]);
	handelsetabeller.kunskapmysterier[38].subval[1][7][0] = {};
	handelsetabeller.kunskapmysterier[38].subval[1][7][0].valdasub = [];
	handelsetabeller.kunskapmysterier[38].subval[1][7][0].vald = 0;
	handelsetabeller.kunskapmysterier[38].subval[1][7][0].visdom = {};
	handelsetabeller.kunskapmysterier[38].subval[1][7][0].visdom.varde=2;
	handelsetabeller.kunskapmysterier[38].subval[1][7][0].rubrik="\+2 Visdom"
	handelsetabeller.kunskapmysterier[38].subval[1][7][0].beskrivninghakvaldbas="\+2 Visdom. "
	
	handelsetabeller.kunskapmysterier[38].subval[1].push([]);
	handelsetabeller.kunskapmysterier[38].subval[1][8][0] = {};
	handelsetabeller.kunskapmysterier[38].subval[1][8][0].valdasub = [];
	handelsetabeller.kunskapmysterier[38].subval[1][8][0].vald = 0;
	handelsetabeller.kunskapmysterier[38].subval[1][8][0].utstralning = {};
	handelsetabeller.kunskapmysterier[38].subval[1][8][0].utstralning.varde=2;
	handelsetabeller.kunskapmysterier[38].subval[1][8][0].rubrik="\+2 Utstrålning"
	handelsetabeller.kunskapmysterier[38].subval[1][8][0].beskrivninghakvaldbas="\+2 Utstrålning. "
	
	

	handelsetabeller.kunskapmysterier[39] = {}; 
	handelsetabeller.kunskapmysterier[39].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[39].vald = 0; 
	handelsetabeller.kunskapmysterier[39].rubrik = "Hoppfull"
	handelsetabeller.kunskapmysterier[39].beskrivning = "Rollpersonen har ett starkt självförtroende och ett hopp som aldrig sviker."
	handelsetabeller.kunskapmysterier[39].beskrivninghak = "\+2T6 Självkontroll vid Nedbrytning"
	handelsetabeller.kunskapmysterier[39].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[39].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[39].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[39].subval[0][0][0].sjalvkontroll = {};
	handelsetabeller.kunskapmysterier[39].subval[0][0][0].sjalvkontroll.egenskap ="\+2T6 vid Nedbrytning"; 

	handelsetabeller.kunskapmysterier[40] = {}; 
	handelsetabeller.kunskapmysterier[40].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[40].vald = 0; 
	handelsetabeller.kunskapmysterier[40].rubrik = "Hängiven följeslagare"
	handelsetabeller.kunskapmysterier[40].beskrivning = "Rollpersonen har haft en hängiven följeslagare som har försökt göra allt för att bevisa sig för denne. Rollpersonen har försökt lära följeslagaren hur man klarar sig själv då denne är mer hängiven än klok. Vad som har hänt med följeslagaren är upp till spelaren."
	handelsetabeller.kunskapmysterier[40].beskrivninghak = "Lättlärd i Undervisa. 2 enheter Sociala färdigheter, 2 enheter Kunskapsfärdigheter. Slå två gånger på bakgrundstabellen och välj en som visar vilken typ av följeslagare det rörde sig om"
	handelsetabeller.kunskapmysterier[40].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[40].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[40].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[40].subval[0][0][0].undervisa = {};
	handelsetabeller.kunskapmysterier[40].subval[0][0][0].undervisa.lattlard=1; 
	handelsetabeller.kunskapmysterier[40].subval[0][0][0].socialafardigheterenheter=2;
	handelsetabeller.kunskapmysterier[40].subval[0][0][0].kunskapsfardigheterenheter=2;
	handelsetabeller.kunskapmysterier[40].subval[0][0][0].kontaktbas="Har en hängiven följeslagare som är kontakt1_rubrikliten.";
	

	handelsetabeller.kunskapmysterier[41] = {}; 
	handelsetabeller.kunskapmysterier[41].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[41].vald = 0; 
	handelsetabeller.kunskapmysterier[41].rubrik = "Insikt i köttet"
	handelsetabeller.kunskapmysterier[41].beskrivning = "Rollpersonen har ett skarpt psyke och en stadig hand och har lärt sig kirurgins ovanliga konst. Denne är kunnig i både trepanering, öppning av buk och bröst samt hur man syr igen sår och botar inre skador."
	handelsetabeller.kunskapmysterier[41].beskrivninghak = "Lättlärd i Kirurgi. Rollpersonen får aldrig några komplikationer när denne utför operationer"
	handelsetabeller.kunskapmysterier[41].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[41].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[41].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[41].subval[0][0][0].kirurgi = {};
	handelsetabeller.kunskapmysterier[41].subval[0][0][0].kirurgi.lattlard=1; 
	handelsetabeller.kunskapmysterier[41].subval[0][0][0].formaga="Rollpersonen får aldrig några komplikationer när denne utför operationer.";

	handelsetabeller.kunskapmysterier[42] = {}; 
	handelsetabeller.kunskapmysterier[42].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[42].vald = 0; 
	handelsetabeller.kunskapmysterier[42].rubrik = "Intensiva studier"
	handelsetabeller.kunskapmysterier[42].beskrivning = "Rollpersonen fascineras oerhört av ett fåtal ämnen som denne har införskaffat stor kunskap om genom intensiva studier. Det finns få saker som rollpersonen finner lika intressant som att tala om sina favoritämnen och sprida detta intresse till nära och bekanta. Tyvärr har rollpersonens ensidiga intresse inneburit att de mer sociala delarna av rollpersonens liv försummats."
	handelsetabeller.kunskapmysterier[42].beskrivninghak = "\+2 Psyke, \+2 Visdom, –2 Utstrålning. 3 enheter Kunskapsfärdigheter. Lättlärd i 2 valfria Kunskapsfärdigheter. Svårlärd i 2 valfria Sociala färdigheter"
	handelsetabeller.kunskapmysterier[42].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[42].subval[0][0][0] = {};
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].lattlardkunskapsfardigheter=2; 
	handelsetabeller.kunskapmysterier[42].subval[0][0][0] = {};
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].lattlardsocialafardigheter=-2; 
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].kunskapsfardigheterenheter = 3; 
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].psyke = {};
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].psyke.varde =2; 
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].visdom = {};
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].utstralning = {};
	handelsetabeller.kunskapmysterier[42].subval[0][0][0].utstralning.varde =-2; 

	handelsetabeller.kunskapmysterier[43] = {}; 
	handelsetabeller.kunskapmysterier[43].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[43].vald = 0; 
	handelsetabeller.kunskapmysterier[43].rubrik = "Iögonfallande drag"
	handelsetabeller.kunskapmysterier[43].beskrivning = "Rollpersonens drag är något utöver det vanliga och denne utmärker sig ofta vid olika sammankomster."
	handelsetabeller.kunskapmysterier[43].beskrivninghak = "3 poäng Kännetecken. Varje gång rollpersonen använder Fokus för något Kännetecken får denne ytterligare \+1T6 bonus"
	handelsetabeller.kunskapmysterier[43].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[43].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[43].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[43].subval[0][0][0].kanneteckenpoang = 3; 
	handelsetabeller.kunskapmysterier[43].subval[0][0][0].utseende="Rollpersonens drag är något utöver det vanliga och denne utmärker sig ofta vid olika sammankomster.";
	handelsetabeller.kunskapmysterier[43].subval[0][0][0].formaga="Varje gång rollpersonen använder Fokus för något Kännetecken får denne ytterligare \+1T6 bonus";

	handelsetabeller.kunskapmysterier[44] = {}; 
	handelsetabeller.kunskapmysterier[44].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[44].vald = 0; 
	handelsetabeller.kunskapmysterier[44].rubrik = "Jordesoldatens välsignelse"
	handelsetabeller.kunskapmysterier[44].beskrivning = "Rollpersonen sägs vara välsignad av Jordesoldaten och har en hel del gemensamt med honom."
	handelsetabeller.kunskapmysterier[44].beskrivninghak = "Expertisen Behaga 4T6, Hantverket Skomakare 4T6. 2 enheter Stridsfärdigheter"
	handelsetabeller.kunskapmysterier[44].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[44].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[44].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[44].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.kunskapmysterier[44].subval[0][0][0].behaga = {};
	handelsetabeller.kunskapmysterier[44].subval[0][0][0].behaga.enheter = 3; 
	handelsetabeller.kunskapmysterier[44].subval[0][0][0].skomakare = {};
	handelsetabeller.kunskapmysterier[44].subval[0][0][0].skomakare.enheter = 3; 
	handelsetabeller.kunskapmysterier[44].subval[0][0][0].ovrigt="Sägs vara välsignad av Jordesoldaten";

	handelsetabeller.kunskapmysterier[45] = {}; 
	handelsetabeller.kunskapmysterier[45].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[45].vald = 0; 
	handelsetabeller.kunskapmysterier[45].rubrik = "Järnvilja"
	handelsetabeller.kunskapmysterier[45].beskrivning = "Rollpersonen har en vilja av järn och är mycket svår att skrämma, påverka och bryta ned."
	handelsetabeller.kunskapmysterier[45].beskrivninghak = "\+1T6 Vilja"
	handelsetabeller.kunskapmysterier[45].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[45].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[45].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[45].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[45].subval[0][0][0].vilja.varde = 4; 

	handelsetabeller.kunskapmysterier[46] = {}; 
	handelsetabeller.kunskapmysterier[46].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[46].vald = 0; 
	handelsetabeller.kunskapmysterier[46].rubrik = "Kastat förbannelse"
	handelsetabeller.kunskapmysterier[46].beskrivning = "Rollpersonen har i vredesmod uttalat en förbannelse mot en nära vän, och orden blev egendomligt nog till verklighet. Vännen har brutit med rollpersonen efter alla problem som uppstått. Rollpersonen har studerat en hel del mystik för att råda bot på förbannelse och rentvå sitt samvete men ännu utan resultat."
	handelsetabeller.kunskapmysterier[46].beskrivninghak = "Vad förbannelsen går ut på får spelaren bestämma men det kan exempelvis röra sig om impotens, stumhet eller att personen hemsöks av mardrömmar. Välj mellan 4 enheter Kunskapsfärdigheter och 4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[46].beskrivninghakvaldbas = "Vad förbannelsen går ut på får spelaren bestämma men det kan exempelvis röra sig om impotens, stumhet eller att personen hemsöks av mardrömmar. ";
	
	handelsetabeller.kunskapmysterier[46].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[46].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[46].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[46].subval[0][0][0].kontakt="Har kastat en förbannelse mot en nära vän.";
	
	handelsetabeller.kunskapmysterier[46].subval[0].push([]);
	handelsetabeller.kunskapmysterier[46].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[46].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[46].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[46].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[46].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[46].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[46].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[46].subval[0][1][1].kunskapsfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[46].subval[0][1][1].rubrik="4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[46].subval[0][1][1].beskrivninghakvaldbas="4 enheter Kunskapsfärdigheter. "
	
	handelsetabeller.kunskapmysterier[46].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[46].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[46].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[46].subval[0][1][2].mystikfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[46].subval[0][1][2].rubrik="4 enheter Mystikfärdigheter"	
	handelsetabeller.kunskapmysterier[46].subval[0][1][2].beskrivninghakvaldbas="4 enheter Mystikfärdigheter. "	
	

	handelsetabeller.kunskapmysterier[47] = {}; 
	handelsetabeller.kunskapmysterier[47].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[47].vald = 0; 
	handelsetabeller.kunskapmysterier[47].rubrik = "Kommit över hemlighet"
	handelsetabeller.kunskapmysterier[47].beskrivning = "Rollpersonen har kommit över en hemlighet som inte var menad för denne. De som vill undanhålla hemligheten har dock börjat komma rollpersonen på spåren och de kommer garanterat se till att deras hemlighet inte sprids vidare."
	handelsetabeller.kunskapmysterier[47].beskrivninghak = "4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[47].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[47].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[47].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[47].subval[0][0][0].kunskapsfardigheterenheter = 4; 
	handelsetabeller.kunskapmysterier[47].subval[0][0][0].resurs="Har kommit över en hemlighet som inte var menad för denne.";

	handelsetabeller.kunskapmysterier[48] = {}; 
	handelsetabeller.kunskapmysterier[48].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[48].vald = 0; 
	handelsetabeller.kunskapmysterier[48].rubrik = "Koncentrerad"
	handelsetabeller.kunskapmysterier[48].beskrivning = "Rollpersonen är mycket fokuserad när det gäller."
	handelsetabeller.kunskapmysterier[48].beskrivninghak = "När rollpersonen använder Fokus för att ge bonus till en Kunskapsfärdighet får denne ytterligare \+1T6 bonus"
	handelsetabeller.kunskapmysterier[48].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[48].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[48].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[48].subval[0][0][0].formaga="När rollpersonen använder Fokus för att ge bonus till en Kunskapsfärdighet får denne ytterligare \+1T6 bonus.";

	handelsetabeller.kunskapmysterier[49] = {}; 
	handelsetabeller.kunskapmysterier[49].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[49].vald = 0; 
	handelsetabeller.kunskapmysterier[49].rubrik = "Kontakt med det mystiska"
	handelsetabeller.kunskapmysterier[49].beskrivning = "Rollpersonen har, när denne koncentrerar sig, en osedvanlig förmåga att tämja och kontrollera världens och gudarnas mystiska gåvor."
	handelsetabeller.kunskapmysterier[49].beskrivninghak = "När rollpersonen använder Fokus för att ge bonus till Mystikfärdigheter så får denne ytterligare \+1T6 bonus"
	handelsetabeller.kunskapmysterier[49].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[49].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[49].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[49].subval[0][0][0].formaga = "När rollpersonen använder Fokus för att ge bonus till Mystikfärdigheter så får denne ytterligare \+1T6 bonus"
	
	handelsetabeller.kunskapmysterier[50] = {}; 
	handelsetabeller.kunskapmysterier[50].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[50].vald = 0; 
	handelsetabeller.kunskapmysterier[50].rubrik = "Konverterad"
	handelsetabeller.kunskapmysterier[50].beskrivning = "En gång i tiden var rollpersonen vilse men fann till slut lyckan och stabiliteten i sin tro. Denne är nu djupt troende och det är upp till spelaren om denne tillhörde en annan religion innan konverteringen."
	handelsetabeller.kunskapmysterier[50].beskrivningvaldbas = "";
	
	handelsetabeller.kunskapmysterier[50].beskrivninghak = "3 enheter Kunskapsfärdigheter. Lättlärd i Teologi. Slå två gånger på bakgrundstabellen och välj en som visar vem som konverterade rollpersonen. Det sekundära karaktärsdraget är Övertygelse och är Låst"
	handelsetabeller.kunskapmysterier[50].beskrivninghakvaldbas = "3 enheter Kunskapsfärdigheter. Lättlärd i Teologi. Det sekundära karaktärsdraget är Övertygelse och är Låst. "
	
	handelsetabeller.kunskapmysterier[50].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[50].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[50].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[50].subval[0][0][0].kunskapsfardigheterenheter=3;
	handelsetabeller.kunskapmysterier[50].subval[0][0][0].teologi = {};
	handelsetabeller.kunskapmysterier[50].subval[0][0][0].teologi.lattlard=1;
	handelsetabeller.kunskapmysterier[50].subval[0][0][0].kontaktbas="Har blivit konverterad av kontakt1_obestamd.";
	handelsetabeller.kunskapmysterier[50].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.kunskapmysterier[50].subval[0][0][0].beskrivningvaldbas = "En gång i tiden var rollpersonen vilse men fann efter att ha blivit konverterad av kontakt1_obestamd till slut lyckan och stabiliteten i sin tro. Rollpersonen är nu djupt troende och det är upp till spelaren om denne tillhörde en annan religion innan konverteringen. "
	
	handelsetabeller.kunskapmysterier[50].subval[0][0][0].karaktarsdrag="Det sekundära karaktärsdraget är Övertygelse och är Låst.";
	
	handelsetabeller.kunskapmysterier[51] = {}; 
	handelsetabeller.kunskapmysterier[51].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[51].vald = 0; 
	handelsetabeller.kunskapmysterier[51].rubrik = "Kraftens mästare"
	handelsetabeller.kunskapmysterier[51].beskrivning = "Rollpersonen är en nod för Mundanas mystiska krafter. Denne har en naturlig fallenhet för att kontrollera dessa och kan med rätt träning och erfarenhet bli en av Mundanas främsta."
	handelsetabeller.kunskapmysterier[51].beskrivninghak = "Lättlärd i alla Mystikfärdigheter. 2 mysterier"
	handelsetabeller.kunskapmysterier[51].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[51].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[51].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[51].subval[0][0][0] = {};
	handelsetabeller.kunskapmysterier[51].subval[0][0][0].lattlardallamystikfardigheter=1; 
	handelsetabeller.kunskapmysterier[51].subval[0][0][0].mysterier=2;

	handelsetabeller.kunskapmysterier[52] = {}; 
	handelsetabeller.kunskapmysterier[52].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[52].vald = 0; 
	handelsetabeller.kunskapmysterier[52].rubrik = "Kraft från väven"
	handelsetabeller.kunskapmysterier[52].beskrivning = "Rollpersonens kropp hålls vid liv av den magiska vävens energier."
	handelsetabeller.kunskapmysterier[52].beskrivninghak = "Denne behöver inte behöver äta eller dricka för att ge sin kropp näring. De enda tillfällen då detta är nödvändigt är om rollpersonen befinner sig på magidöda områden. Då dessa områden är väldigt ovanliga så är detta sällan något problem"
	handelsetabeller.kunskapmysterier[52].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[52].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[52].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[52].subval[0][0][0].formaga="Behöver inte behöver äta eller dricka för att ge sin kropp näring, förutom då denne befinner sig på magidöda områden.";
	
	handelsetabeller.kunskapmysterier[53] = {}; 
	handelsetabeller.kunskapmysterier[53].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[53].vald = 0; 
	handelsetabeller.kunskapmysterier[53].rubrik = "Kunskap om de mörka makterna"
	handelsetabeller.kunskapmysterier[53].beskrivning = "Rollpersonen har studerat demoner, spöken, andar och gastar samt hemliga sällskap och kulter. Denne har en stor samling böcker i ämnet som om de skulle bli påkomna bli svåra att förklara."
	handelsetabeller.kunskapmysterier[53].beskrivninghak = "\+1 Visdom. Lättlärd i Filosofi och Ockultism"
	handelsetabeller.kunskapmysterier[53].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[53].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[53].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[53].subval[0][0][0].filosofi = {};
	handelsetabeller.kunskapmysterier[53].subval[0][0][0].filosofi.lattlard=1; 
	handelsetabeller.kunskapmysterier[53].subval[0][0][0].ockultism = {};
	handelsetabeller.kunskapmysterier[53].subval[0][0][0].ockultism.lattlard=1; 
	handelsetabeller.kunskapmysterier[53].subval[0][0][0].visdom = {};
	handelsetabeller.kunskapmysterier[53].subval[0][0][0].visdom.varde =1; 

	handelsetabeller.kunskapmysterier[54] = {}; 
	handelsetabeller.kunskapmysterier[54].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[54].vald = 0; 
	handelsetabeller.kunskapmysterier[54].rubrik = "Känslokall"
	handelsetabeller.kunskapmysterier[54].beskrivning = "Rollpersonen är ovanligt känslokall och oberörd."
	handelsetabeller.kunskapmysterier[54].beskrivninghak = "Fördela 3 Avtrubbningskryss fritt"
	handelsetabeller.kunskapmysterier[54].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[54].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[54].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[54].subval[0][0][0].avtrubbningvalfri=3;

	handelsetabeller.kunskapmysterier[55] = {}; 
	handelsetabeller.kunskapmysterier[55].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[55].vald = 0; 
	handelsetabeller.kunskapmysterier[55].rubrik = "Ljusbringarens välsignelse"
	handelsetabeller.kunskapmysterier[55].beskrivning = "Rollpersonen sägs vara välsignad av Ljusbringaren och har en hel del gemensamt med honom."
	handelsetabeller.kunskapmysterier[55].beskrivninghak = "Expertiserna Tolka religiösa skrifter och Uppvigla 4T6 vardera. Lättlärd i Krigföring"
	handelsetabeller.kunskapmysterier[55].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[55].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[55].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[55].subval[0][0][0].krigforing = {};
	handelsetabeller.kunskapmysterier[55].subval[0][0][0].krigforing.lattlard=1; 
	handelsetabeller.kunskapmysterier[55].subval[0][0][0].uppvigla = {};
	handelsetabeller.kunskapmysterier[55].subval[0][0][0].uppvigla.enheter = 3; 
	handelsetabeller.kunskapmysterier[55].subval[0][0][0].tolkareligiosaskrifter = {};
	handelsetabeller.kunskapmysterier[55].subval[0][0][0].tolkareligiosaskrifter.enheter = 3; 
	handelsetabeller.kunskapmysterier[55].subval[0][0][0].ovrigt="Sägs vara välsignad av Ljusbringaren.";

	handelsetabeller.kunskapmysterier[56] = {}; 
	handelsetabeller.kunskapmysterier[56].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[56].vald = 0; 
	handelsetabeller.kunskapmysterier[56].rubrik = "Lyft förbannelse"
	handelsetabeller.kunskapmysterier[56].beskrivning = "En förbannelse har varit kastad över en familj, person eller plats. Rollpersonen har med hjälp av efterforskningar lyckats lyfta förbannelsen och har samtidigt fått en insikt i det övernaturliga."
	handelsetabeller.kunskapmysterier[56].beskrivninghak = "Lättlärd i Ockultism. 4 enheter Kunskapsfärdigheter. 1 Avtrubbningskryss för övernaturligt"
	handelsetabeller.kunskapmysterier[56].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[56].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[56].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[56].subval[0][0][0].kunskapsfardigheterenheter = 4; 
	handelsetabeller.kunskapmysterier[56].subval[0][0][0].ockultism = {};
	handelsetabeller.kunskapmysterier[56].subval[0][0][0].ockultism.lattlard=1; 
	handelsetabeller.kunskapmysterier[56].subval[0][0][0].avtrubbningovernaturligt = 1; 
	handelsetabeller.kunskapmysterier[56].subval[0][0][0].ovrigt="Har lyft en förbannelse.";

	handelsetabeller.kunskapmysterier[57] = {}; 
	handelsetabeller.kunskapmysterier[57].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[57].vald = 0; 
	handelsetabeller.kunskapmysterier[57].rubrik = "Läkande beröring"
	handelsetabeller.kunskapmysterier[57].beskrivning = "Rollpersonen har en mystisk förmåga som vid längre kontakt får sår att läka snabbare och smärta att försvinna. Om detta framställs på fel sätt finns det risk att rollpersonen blir anklagad för häxeri av Daakkyrkan."
	handelsetabeller.kunskapmysterier[57].beskrivninghak = "Lättlärd i Läkekonst. Om rollpersonen vårdar eller på annat sätt är konstant intill med en annan person så ökar personens Läkningstakt med 2"
	handelsetabeller.kunskapmysterier[57].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[57].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[57].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[57].subval[0][0][0].lakekonst = {};
	handelsetabeller.kunskapmysterier[57].subval[0][0][0].lakekonst.lattlard=1;
	handelsetabeller.kunskapmysterier[57].subval[0][0][0].formaga="Om rollpersonen vårdar eller på annat sätt är konstant intill med en annan person så ökar personens Läkningstakt med 2.";
	
	handelsetabeller.kunskapmysterier[58] = {}; 
	handelsetabeller.kunskapmysterier[58].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[58].vald = 0; 
	handelsetabeller.kunskapmysterier[58].rubrik = "Lärling"
	handelsetabeller.kunskapmysterier[58].beskrivning = "Rollpersonen har en lärling som försöker lära sig dennes värv. Lärlingen följer med rollpersonen på dennes resor och passar även upp och hjälper till i rollpersonens sysslor. Lärlingen är dock ingen slav utan har egen vilja och kan även ha en egen agenda. Vad för typ av lärling det är får spelaren bestämma."
	handelsetabeller.kunskapmysterier[58].beskrivninghak = "\+2 Psyke. Lättlärd i Undervisa"
	handelsetabeller.kunskapmysterier[58].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[58].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[58].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[58].subval[0][0][0].undervisa = {};
	handelsetabeller.kunskapmysterier[58].subval[0][0][0].undervisa.lattlard=1; 
	handelsetabeller.kunskapmysterier[58].subval[0][0][0].psyke = {};
	handelsetabeller.kunskapmysterier[58].subval[0][0][0].psyke.varde =2; 
	handelsetabeller.kunskapmysterier[58].subval[0][0][0].kontakt="Har en lärling.";

	handelsetabeller.kunskapmysterier[59] = {}; 
	handelsetabeller.kunskapmysterier[59].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[59].vald = 0; 
	handelsetabeller.kunskapmysterier[59].rubrik = "Lärling åt lärd man"
	handelsetabeller.kunskapmysterier[59].beskrivning = "Personen har blivit utbildad av en lärd man."
	handelsetabeller.kunskapmysterier[59].beskrivninghak = "\+2 Visdom. Lättlärd i Filosofi. 3 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[59].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[59].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[59].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[59].subval[0][0][0].kunskapsfardigheterenheter = 3; 
	handelsetabeller.kunskapmysterier[59].subval[0][0][0].filosofi = {};
	handelsetabeller.kunskapmysterier[59].subval[0][0][0].filosofi.lattlard=1; 
	handelsetabeller.kunskapmysterier[59].subval[0][0][0].visdom = {};
	handelsetabeller.kunskapmysterier[59].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.kunskapmysterier[59].subval[0][0][0].kontakt="Har blivit utbildad av en lärd man.";

	handelsetabeller.kunskapmysterier[60] = {}; 
	handelsetabeller.kunskapmysterier[60].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[60].vald = 0; 
	handelsetabeller.kunskapmysterier[60].rubrik = "Lärling åt mystiker"
	handelsetabeller.kunskapmysterier[60].beskrivning = "Rollpersonen har varit lärling hos en mystiker under sina många resor."
	handelsetabeller.kunskapmysterier[60].beskrivninghak = "2 enheter Kunskapsfärdigheter och 2 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[60].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[60].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[60].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[60].subval[0][0][0].kunskapsfardigheterenheter=2;
	handelsetabeller.kunskapmysterier[60].subval[0][0][0].mystikfardigheterenheter=2;
	handelsetabeller.kunskapmysterier[60].subval[0][0][0].kontakt="Har varit lärling hos en mystiker.";

	
	handelsetabeller.kunskapmysterier[61] = {}; 
	handelsetabeller.kunskapmysterier[61].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[61].vald = 0; 
	handelsetabeller.kunskapmysterier[61].rubrik = "Medicinskt kunnande"
	handelsetabeller.kunskapmysterier[61].beskrivning = "Rollpersonen vet hur man vårdar de sjuka och skadade och har en intuitiv känsla för vilka läkeväxter som hjälper mot respektive åkommor. Rollpersonen har företagit en längre resa i jakten på läkeväxter och de mixturer man kan framställa av dessa."
	handelsetabeller.kunskapmysterier[61].beskrivninghak = "Lättlärd i Läkekonst och Naturlära. 3 enheter Vildmarksfärdigheter"
	handelsetabeller.kunskapmysterier[61].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[61].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[61].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[61].subval[0][0][0].vildmarksfardigheterenheter = 3; 
	handelsetabeller.kunskapmysterier[61].subval[0][0][0].lakekonst = {};
	handelsetabeller.kunskapmysterier[61].subval[0][0][0].lakekonst.lattlard=1; 
	handelsetabeller.kunskapmysterier[61].subval[0][0][0].naturlara = {};
	handelsetabeller.kunskapmysterier[61].subval[0][0][0].naturlara.lattlard=1; 

	handelsetabeller.kunskapmysterier[62] = {}; 
	handelsetabeller.kunskapmysterier[62].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[62].vald = 0; 
	handelsetabeller.kunskapmysterier[62].rubrik = "Mentor"
	handelsetabeller.kunskapmysterier[62].beskrivning = "Rollpersonen har en mentor som har väglett personen genom livet. Mentorn behöver inte vara en läromästare som så utan kan vara en vän, tjänare eller ett resesällskap. Rollpersonen känner tacksamhet inför sin mentor och skulle göra allt för att hjälpa denne."
	handelsetabeller.kunskapmysterier[62].beskrivning = "";
	
	handelsetabeller.kunskapmysterier[62].beskrivninghak = "Slå två gånger på bakgrundstabellen och välj en som visar vem mentorn är. Rollpersonen får välja en av färdighetsgrupperna från denna bakgrund"
	handelsetabeller.kunskapmysterier[62].beskrivninghakvaldbas = "";
	
	handelsetabeller.kunskapmysterier[62].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[62].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[62].subval[0][0][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[62].subval[0].push([]);
	handelsetabeller.kunskapmysterier[62].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[62].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[62].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[62].subval[0][1][0].kontaktbas="Har en mentor som är kontakt1_rubrikliten.";
	handelsetabeller.kunskapmysterier[62].subval[0][1][0].kontaktenhetbool=[1];
	handelsetabeller.kunskapmysterier[62].subval[0][1][0].antalsubval=1;
	handelsetabeller.kunskapmysterier[62].subval[0][1][0].subvalrubrik="Välj vad rollpersonen lärt sig av sin mentor:";
	handelsetabeller.kunskapmysterier[62].subval[0][1][0].beskrivningvaldbas = "Rollpersonen har en mentor som har väglett personen genom livet. Mentorn är kontakt1_rubrikliten och behöver inte vara en läromästare som så utan kan vara en vän, tjänare eller ett resesällskap. Rollpersonen känner tacksamhet inför sin mentor och skulle göra allt för att hjälpa denne. "
	
	
	handelsetabeller.kunskapmysterier[63] = {}; 
	handelsetabeller.kunskapmysterier[63].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[63].vald = 0; 
	handelsetabeller.kunskapmysterier[63].rubrik = "Milargoks välsignelse"
	handelsetabeller.kunskapmysterier[63].beskrivning = "Rollpersonen sägs vara välsignad av profeten Milargok och har en hel del gemensamt med honom."
	handelsetabeller.kunskapmysterier[63].beskrivninghak = "Expertisen Författa 4T6. Kännetecknet Sjukligt utseende 4T6. Lättlärd i Teologi och Undervisa"
	handelsetabeller.kunskapmysterier[63].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].teologi = {};
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].teologi.lattlard=1; 
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].undervisa = {};
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].undervisa.lattlard=1; 
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].forfatta = {};
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].forfatta.enheter = 3; 
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].sjukligtutseende = {};
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].sjukligtutseende.enheter = 3; 
	handelsetabeller.kunskapmysterier[63].subval[0][0][0].ovrigt="Sägs vara välsignad av Milargok.";

	handelsetabeller.kunskapmysterier[64] = {}; 
	handelsetabeller.kunskapmysterier[64].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[64].vald = 0; 
	handelsetabeller.kunskapmysterier[64].rubrik = "Minnesförlust"
	handelsetabeller.kunskapmysterier[64].beskrivning = "Det finns en tid i rollpersonens liv som är blankt. Rollpersonen har inget minne av vad som skett under denna period och detta kan röra sig om några dagar till ett flertal år."
	handelsetabeller.kunskapmysterier[64].beskrivninghak = "4 valfria enheter som representerar sådant som rollpersonen lärt sig under den tid som glömts. 1 Avtrubbningskryss för utsatthet"
	handelsetabeller.kunskapmysterier[64].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[64].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[64].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[64].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.kunskapmysterier[64].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.kunskapmysterier[64].subval[0][0][0].ovrigt="Lider av en minnesförlust från en del av livet.";	

	handelsetabeller.kunskapmysterier[65] = {}; 
	handelsetabeller.kunskapmysterier[65].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[65].vald = 0; 
	handelsetabeller.kunskapmysterier[65].rubrik = "Mörk hemlighet"
	handelsetabeller.kunskapmysterier[65].beskrivning = "Rollpersonen har en mörk hemlighet som denne har dolt för omvärlden. Om den avslöjas kommer hela rollpersonens liv att rasera, exakta detaljer är upp till spelaren. En person känner till hemligheten och denne tvekar inte att nyttja rollpersonen för diverse tjänster och uppdrag med det ständiga hotet att avslöja vad rollpersonen gjort."
	handelsetabeller.kunskapmysterier[65].beskrivningvaldbas = "Rollpersonen har en mörk hemlighet som denne har dolt för omvärlden. Om den avslöjas kommer hela rollpersonens liv att rasera, exakta detaljer är upp till spelaren. ";
	handelsetabeller.kunskapmysterier[65].beskrivninghak = "\+2 i valfritt grundattribut och 4 valfria enheter som är kopplade till hemligheten. Slå två gånger på bakgrundstabellen och välj en som visar vem känner till rollpersonens hemlighet"
	handelsetabeller.kunskapmysterier[65].beskrivninghak = "4 valfria enheter som är kopplade till hemligheten. ";
	
	handelsetabeller.kunskapmysterier[65].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[65].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[65].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[65].subval[0][0][0].valfriaenheter=4;
	handelsetabeller.kunskapmysterier[65].subval[0][0][0].kontakt="kontakt1_Obestamd känner till rollpersonens mörka hemlighet.";
	handelsetabeller.kunskapmysterier[65].subval[0][0][0].beskrivningvaldbas = "kontakt1_Obestamd känner till hemligheten och denne tvekar inte att nyttja rollpersonen för diverse tjänster och uppdrag med det ständiga hotet att avslöja vad rollpersonen gjort. ";
	
	
	handelsetabeller.kunskapmysterier[65].subval[0].push([]);
	handelsetabeller.kunskapmysterier[65].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[65].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[65].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[65].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[65].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[65].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[65].subval[0][1][1].styrka = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][1].styrka.varde=2;
	handelsetabeller.kunskapmysterier[65].subval[0][1][1].rubrik="\+2 Styrka"
	handelsetabeller.kunskapmysterier[65].subval[0][1][1].beskrivninghakvaldbas="\+2 Styrka. "
	
	handelsetabeller.kunskapmysterier[65].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[65].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[65].subval[0][1][2].talighet = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][2].talighet.varde=2;
	handelsetabeller.kunskapmysterier[65].subval[0][1][2].rubrik="\+2 Tålighet"
	handelsetabeller.kunskapmysterier[65].subval[0][1][2].beskrivninghakvaldbas="\+2 Tålighet. "
	
	handelsetabeller.kunskapmysterier[65].subval[0][1][3] = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][3].valdasub = [];
	handelsetabeller.kunskapmysterier[65].subval[0][1][3].vald = 0;
	handelsetabeller.kunskapmysterier[65].subval[0][1][3].rorlighet = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][3].rorlighet.varde=2;
	handelsetabeller.kunskapmysterier[65].subval[0][1][3].rubrik="\+2 Rörlighet"
	handelsetabeller.kunskapmysterier[65].subval[0][1][3].beskrivninghakvaldbas="\+2 Rörlighet. "
	
	handelsetabeller.kunskapmysterier[65].subval[0][1][4] = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][4].valdasub = [];
	handelsetabeller.kunskapmysterier[65].subval[0][1][4].vald = 0;
	handelsetabeller.kunskapmysterier[65].subval[0][1][4].uppfattning = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][4].uppfattning.varde=2;
	handelsetabeller.kunskapmysterier[65].subval[0][1][4].rubrik="\+2 Uppfattning"
	handelsetabeller.kunskapmysterier[65].subval[0][1][4].beskrivninghakvaldbas="\+2 Uppfattning. "
	
	handelsetabeller.kunskapmysterier[65].subval[0][1][5] = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][5].valdasub = [];
	handelsetabeller.kunskapmysterier[65].subval[0][1][5].vald = 0;
	handelsetabeller.kunskapmysterier[65].subval[0][1][5].vilja = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][5].vilja.varde=2;
	handelsetabeller.kunskapmysterier[65].subval[0][1][5].rubrik="\+2 Vilja"
	handelsetabeller.kunskapmysterier[65].subval[0][1][5].beskrivninghakvaldbas="\+2 Vilja. "
	
	handelsetabeller.kunskapmysterier[65].subval[0][1][6] = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][6].valdasub = [];
	handelsetabeller.kunskapmysterier[65].subval[0][1][6].vald = 0;
	handelsetabeller.kunskapmysterier[65].subval[0][1][6].psyke = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][6].psyke.varde=2;
	handelsetabeller.kunskapmysterier[65].subval[0][1][6].rubrik="\+2 Psyke"
	handelsetabeller.kunskapmysterier[65].subval[0][1][6].beskrivninghakvaldbas="\+2 Psyke. "
	
	handelsetabeller.kunskapmysterier[65].subval[0][1][7] = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][7].valdasub = [];
	handelsetabeller.kunskapmysterier[65].subval[0][1][7].vald = 0;
	handelsetabeller.kunskapmysterier[65].subval[0][1][7].visdom = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][7].visdom.varde=2;
	handelsetabeller.kunskapmysterier[65].subval[0][1][7].rubrik="\+2 Visdom"
	handelsetabeller.kunskapmysterier[65].subval[0][1][7].beskrivninghakvaldbas="\+2 Visdom. "
	
	handelsetabeller.kunskapmysterier[65].subval[0][1][8] = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][8].valdasub = [];
	handelsetabeller.kunskapmysterier[65].subval[0][1][8].vald = 0;
	handelsetabeller.kunskapmysterier[65].subval[0][1][8].utstralning = {};
	handelsetabeller.kunskapmysterier[65].subval[0][1][8].utstralning.varde=2;
	handelsetabeller.kunskapmysterier[65].subval[0][1][8].rubrik="\+2 Utstrålning"
	handelsetabeller.kunskapmysterier[65].subval[0][1][8].beskrivninghakvaldbas="\+2 Utstrålning. "
	
	
	

	handelsetabeller.kunskapmysterier[66] = {}; 
	handelsetabeller.kunskapmysterier[66].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[66].vald = 0; 
	handelsetabeller.kunskapmysterier[66].rubrik = "Möte med det fasansfulla"
	handelsetabeller.kunskapmysterier[66].beskrivning = "Rollpersonen har stött på något fasansfullt och övernaturligt. Det kan handla om en demon som föds fram ur en människokropp, en gast av en tidigare vän eller något annat ohyggligt. Detta har gjort rollpersonen något skakad men samtidigt härdad."
	handelsetabeller.kunskapmysterier[66].beskrivninghak = "–2 Vilja. 3 Avtrubbningskryss för övernaturligt"
	handelsetabeller.kunskapmysterier[66].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[66].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[66].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[66].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[66].subval[0][0][0].vilja.varde =-2; 
	handelsetabeller.kunskapmysterier[66].subval[0][0][0].avtrubbningovernaturligt = 3; 
	handelsetabeller.kunskapmysterier[66].subval[0][0][0].ovrigt="Har stött på något fasansfullt och övernaturligt.";

	handelsetabeller.kunskapmysterier[67] = {}; 
	handelsetabeller.kunskapmysterier[67].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[67].vald = 0; 
	handelsetabeller.kunskapmysterier[67].rubrik = "Möte med det okända"
	handelsetabeller.kunskapmysterier[67].beskrivning = "Rollpersonen har haft ett möte med de okända. Det kan röra sig om en religiös uppenbarelse, en demonisk nedkallning eller en färd in i Skugglandet. Detta har förändrat rollpersonen för alltid på något sätt."
	handelsetabeller.kunskapmysterier[67].beskrivninghak = "\+2 i valfritt grundattribut eller 4 valfria enheter. 1 poäng Kännetecken"
	handelsetabeller.kunskapmysterier[67].beskrivninghakvaldbas = "1 poäng Kännetecken. "
	
	handelsetabeller.kunskapmysterier[67].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[67].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[67].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[67].subval[0][0][0].ovrigt="Har haft ett möte med det okända.";
	handelsetabeller.kunskapmysterier[67].subval[0][0][0].kanneteckenpoang=1;;
	
	handelsetabeller.kunskapmysterier[67].subval.push([[]]); 
	handelsetabeller.kunskapmysterier[67].subval[1].push([]); 
	handelsetabeller.kunskapmysterier[67].subval[1][0][0] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][0][0].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][0][0].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][0][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[67].subval[1][1][0] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][0].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][1][0].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][1][0].antalsubval=1;
	handelsetabeller.kunskapmysterier[67].subval[1][1][0].rubrik="\+2 i valfritt grundattribut. ";
	
	
	handelsetabeller.kunskapmysterier[67].subval[1][1][1] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][1][1].styrka = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][1].styrka.varde=2;
	handelsetabeller.kunskapmysterier[67].subval[1][1][1].rubrik="\+2 Styrka"
	handelsetabeller.kunskapmysterier[67].subval[1][1][1].beskrivninghakvaldbas="\+2 Styrka. "
	
	handelsetabeller.kunskapmysterier[67].subval[1][1][2] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][1][2].talighet = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][2].talighet.varde=2;
	handelsetabeller.kunskapmysterier[67].subval[1][1][2].rubrik="\+2 Tålighet"
	handelsetabeller.kunskapmysterier[67].subval[1][1][2].beskrivninghakvaldbas="\+2 Tålighet. "
	
	handelsetabeller.kunskapmysterier[67].subval[1][1][3] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][3].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][1][3].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][1][3].rorlighet = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][3].rorlighet.varde=2;
	handelsetabeller.kunskapmysterier[67].subval[1][1][3].rubrik="\+2 Rörlighet"
	handelsetabeller.kunskapmysterier[67].subval[1][1][3].beskrivninghakvaldbas="\+2 Rörlighet. "
	
	handelsetabeller.kunskapmysterier[67].subval[1][1][4] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][4].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][1][4].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][1][4].uppfattning = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][4].uppfattning.varde=2;
	handelsetabeller.kunskapmysterier[67].subval[1][1][4].rubrik="\+2 Uppfattning"
	handelsetabeller.kunskapmysterier[67].subval[1][1][4].beskrivninghakvaldbas="\+2 Uppfattning. "
	
	handelsetabeller.kunskapmysterier[67].subval[1][1][5] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][5].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][1][5].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][1][5].vilja = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][5].vilja.varde=2;
	handelsetabeller.kunskapmysterier[67].subval[1][1][5].rubrik="\+2 Vilja"
	handelsetabeller.kunskapmysterier[67].subval[1][1][5].beskrivninghakvaldbas="\+2 Vilja. "
	
	handelsetabeller.kunskapmysterier[67].subval[1][1][6] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][6].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][1][6].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][1][6].psyke = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][6].psyke.varde=2;
	handelsetabeller.kunskapmysterier[67].subval[1][1][6].rubrik="\+2 Psyke"
	handelsetabeller.kunskapmysterier[67].subval[1][1][6].beskrivninghakvaldbas="\+2 Psyke. "
	
	handelsetabeller.kunskapmysterier[67].subval[1][1][7] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][7].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][1][7].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][1][7].visdom = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][7].visdom.varde=2;
	handelsetabeller.kunskapmysterier[67].subval[1][1][7].rubrik="\+2 Visdom"
	handelsetabeller.kunskapmysterier[67].subval[1][1][7].beskrivninghakvaldbas="\+2 Visdom. "
	
	handelsetabeller.kunskapmysterier[67].subval[1][1][8] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][8].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][1][8].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][1][8].utstralning = {};
	handelsetabeller.kunskapmysterier[67].subval[1][1][8].utstralning.varde=2;
	handelsetabeller.kunskapmysterier[67].subval[1][1][8].rubrik="\+2 Utstrålning"
	handelsetabeller.kunskapmysterier[67].subval[1][1][8].beskrivninghakvaldbas="\+2 Utstrålning. "
	
	handelsetabeller.kunskapmysterier[67].subval[1].push([]);
	handelsetabeller.kunskapmysterier[67].subval[1][2][0] = {};
	handelsetabeller.kunskapmysterier[67].subval[1][2][0].valdasub = [];
	handelsetabeller.kunskapmysterier[67].subval[1][2][0].vald = 0;
	handelsetabeller.kunskapmysterier[67].subval[1][2][0].valfriaenheter=4;
	handelsetabeller.kunskapmysterier[67].subval[1][2][0].rubrik="4 valfria enheter. ";
	

	handelsetabeller.kunskapmysterier[68] = {}; 
	handelsetabeller.kunskapmysterier[68].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[68].vald = 0; 
	handelsetabeller.kunskapmysterier[68].rubrik = "Mött spåkvinna"
	handelsetabeller.kunskapmysterier[68].beskrivning = "En spåkvinna har förutsett de skeenden som kommer drabba personen och även dennes död. Välj om rollpersonen tror på spådomarna och har försökt lära sig mer om dem eller om rollpersonen anser att denne själv har full kontroll på sitt öde."
	handelsetabeller.kunskapmysterier[68].beskrivningvaldbas = "En spåkvinna har förutsett de skeenden som kommer drabba personen och även dennes död. ";
	
	handelsetabeller.kunskapmysterier[68].beskrivninghak = "Tror på spådomarna: 3 enheter Mystikfärdigheter. 1 Avtrubbningskryss för övernaturligt. Tror på sitt eget öde: 4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[68].beskrivninghakvaldbas = "";
	
	handelsetabeller.kunskapmysterier[68].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[68].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[68].subval[0][0][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[68].subval[0].push([]);
	handelsetabeller.kunskapmysterier[68].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[68].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[68].subval[0][1][0].vald = 0; 
	handelsetabeller.kunskapmysterier[68].subval[0][1][0].antalsubval=1; 
	
	
	handelsetabeller.kunskapmysterier[68].subval[0][1][1] = {}; 
	handelsetabeller.kunskapmysterier[68].subval[0][1][1].valdasub = []; 
	handelsetabeller.kunskapmysterier[68].subval[0][1][1].vald = 0; 
	handelsetabeller.kunskapmysterier[68].subval[0][1][1].rubrik="Tror på spådomarna"; 
	handelsetabeller.kunskapmysterier[68].subval[0][1][1].ovrigt="Har blivit spådd av en spåkvinna och trott på spådomarna"
	handelsetabeller.kunskapmysterier[68].subval[0][1][1].mystikfardigheterenheter = 3; 
	handelsetabeller.kunskapmysterier[68].subval[0][1][1].avtrubbningovernaturligt = 1; 
	handelsetabeller.kunskapmysterier[68].subval[0][1][1].beskrivningvaldbas = "Rollpersonen tror på spådomarna och har försökt lära sig mer om dem. ";
	handelsetabeller.kunskapmysterier[68].subval[0][1][1].beskrivninghakvaldbas = "3 enheter Mystikfärdigheter. 1 Avtrubbningskryss för övernaturligt. ";
	
	handelsetabeller.kunskapmysterier[68].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[68].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[68].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[68].subval[0][1][2].rubrik="Tror på sitt eget öde";	
	handelsetabeller.kunskapmysterier[68].subval[0][1][2].ovrigt="Har blivit spådd av en spåkvinna men trott på sitt ege öde.";
	handelsetabeller.kunskapmysterier[68].subval[0][1][2].kunskapsfardigheterenheter = 4; 
	handelsetabeller.kunskapmysterier[68].subval[0][1][2].beskrivningvaldbas = "Rollpersonen anser dock att denne själv har full kontroll på sitt öde. ";
	handelsetabeller.kunskapmysterier[68].subval[0][1][2].beskrivninghakvaldbas = "4 enheter Kunskapsfärdigheter";
	
	
	handelsetabeller.kunskapmysterier[69] = {}; 
	handelsetabeller.kunskapmysterier[69].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[69].vald = 0; 
	handelsetabeller.kunskapmysterier[69].rubrik = "Mött svartkonstnär"
	handelsetabeller.kunskapmysterier[69].beskrivning = "Personen stötte ihop med en svartkonstnär och hade valet av att avslöja denne för inkvisitionen eller ta lärdom av denne."
	handelsetabeller.kunskapmysterier[69].beskrivningvaldbas = "";
	
	handelsetabeller.kunskapmysterier[69].beskrivninghak = "Överlämnat svartkonstnären till inkvisitionen: 4T6×10 silver. 2 enheter Sociala färdigheter. Tagit lärdom av svartkonstnären: 4 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[69].beskrivninghakvaldbas = "";
	handelsetabeller.kunskapmysterier[69].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[69].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[69].subval[0][0][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[69].subval[0].push([]);
	handelsetabeller.kunskapmysterier[69].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][0].vald = 0; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][0].antalsubval=1;
	
	
	handelsetabeller.kunskapmysterier[69].subval[0][1][1] = {}; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][1].valdasub = []; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][1].vald = 0; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][1].rubrik="Överlämnat svartkonstnären till inkvisitionen";
	handelsetabeller.kunskapmysterier[69].subval[0][1][1].kontakt="Har överlämnat en svartkonstnär till invisitionen.";
	
	handelsetabeller.kunskapmysterier[69].subval[0][1][1].pengarslag="4T6x10"; 
	
	handelsetabeller.kunskapmysterier[69].subval[0][1][1].socialafardigheterenheter = 2; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][1].beskrivningvaldbas = "Personen har stött ihop med en svartkonstnär och valde att avslöja denne för inkvisitionen.";
	handelsetabeller.kunskapmysterier[69].subval[0][1][1].beskrivninghakvaldbas = "pengar_resultat silver. 2 enheter Sociala färdigheter. ";
	
	
	handelsetabeller.kunskapmysterier[69].subval[0][1][2] = {}; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][2].valdasub = []; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][2].vald = 0; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][2].rubrik="Tagit lärdom av svartkonstnären"
	handelsetabeller.kunskapmysterier[69].subval[0][1][2].mystikfardigheterenheter = 4; 
	handelsetabeller.kunskapmysterier[69].subval[0][1][2].kontakt="Har tagit lärdom av en svartkonstnär.";
	handelsetabeller.kunskapmysterier[69].subval[0][1][2].beskrivningvaldbas = "Personen har tagit lärdom av en svartkonstnär. ";
	handelsetabeller.kunskapmysterier[69].subval[0][1][2].beskrivninghakvaldbas = "4 enheter Mystikfärdigheter. ";
	
	
	handelsetabeller.kunskapmysterier[70] = {}; 
	handelsetabeller.kunskapmysterier[70].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[70].vald = 0; 
	handelsetabeller.kunskapmysterier[70].rubrik = "Närvaro"
	handelsetabeller.kunskapmysterier[70].beskrivning = "Rollpersonen har en särdeles stark närvaro på gränsen till det mystiska. Det tycks omöjligt för andra att inte lägga märke till rollpersonen oavsett om det rör sig om ett enkelt samtal vid bordet eller ett tal inför massan."
	handelsetabeller.kunskapmysterier[70].beskrivninghak = "\+1T6 Intryck"
	handelsetabeller.kunskapmysterier[70].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[70].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[70].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[70].subval[0][0][0].intryck = {};
	handelsetabeller.kunskapmysterier[70].subval[0][0][0].intryck.bonus = 4; 

	handelsetabeller.kunskapmysterier[71] = {}; 
	handelsetabeller.kunskapmysterier[71].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[71].vald = 0; 
	handelsetabeller.kunskapmysterier[71].rubrik = "Offerriter"
	handelsetabeller.kunskapmysterier[71].beskrivning = "Rollpersonen har lärt sig att utföra offerriter till någon typ av varelse eller väsen. Detta kan vara till en gudom, demon, skuggväsen, spöke eller gast. Offret lättar rollpersonens sinne och skänker energi och kraft tillbaka. Själva riten tar omkring 10 minuter att utföra."
	handelsetabeller.kunskapmysterier[71].beskrivninghak = "En gång per spelmöte kan rollpersonen återfå Fokus genom att offra levande varelser. Litet djur ger 1 Fokus. Medelstort djur ger 2 Fokus. Stort djur ger 4 Fokus. Människa eller annan humanoid ger 8 Fokus"
	handelsetabeller.kunskapmysterier[71].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[71].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[71].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[71].subval[0][0][0].formaga="En gång per spelmöte kan rollpersonen återfå Fokus genom att offra levande varelser. Litet djur ger 1 Fokus. Medelstort djur ger 2 Fokus. Stort djur ger 4 Fokus. Människa eller annan humanoid ger 8 Fokus";
	
	handelsetabeller.kunskapmysterier[72] = {}; 
	handelsetabeller.kunskapmysterier[72].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[72].vald = 0; 
	handelsetabeller.kunskapmysterier[72].rubrik = "Orsakat olycka"
	handelsetabeller.kunskapmysterier[72].beskrivning = "Rollpersonen har orsakat en allvarlig olycka som kostat en eller flera personer livet. Det kan röra sig om en brand, en drunkningsolycka eller ett skämt som gått fel. Många anklagar rollpersonen för detta."
	handelsetabeller.kunskapmysterier[72].beskrivninghak = "\+2 Vilja. 2 Avtrubbningskryss för utsatthet, 1 Avtrubbningskryss för våld"
	handelsetabeller.kunskapmysterier[72].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[72].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[72].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[72].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[72].subval[0][0][0].vilja.varde =2; 
	handelsetabeller.kunskapmysterier[72].subval[0][0][0].avtrubbningutsatthet = 2; 
	handelsetabeller.kunskapmysterier[72].subval[0][0][0].avtrubbningvald = 1; 
	handelsetabeller.kunskapmysterier[72].subval[0][0][0].ovrigt="Har orsakat en allvarlig olycka.";

	handelsetabeller.kunskapmysterier[73] = {}; 
	handelsetabeller.kunskapmysterier[73].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[73].vald = 0; 
	handelsetabeller.kunskapmysterier[73].rubrik = "Pakt med mörka makter"
	handelsetabeller.kunskapmysterier[73].beskrivning = "Rollpersonen har slutit en pakt med en mörk makt såsom en demon eller förbjuden gudom. Detta väsen har tre tjänster att utkräva av rollpersonen för den kunskap och makt som denne vunnit av pakten. Vilka tjänsterna är bestäms av spelaren och spelledaren."
	handelsetabeller.kunskapmysterier[73].beskrivninghak = "\+2 Vilja, \+2 Psyke. 1 Avtrubbningskryss för övernaturligt. Välj mellan 4 mysterier eller 3 valfria enheter"
	handelsetabeller.kunskapmysterier[73].beskrivninghakvaldbas = "\+2 Vilja, \+2 Psyke. 1 Avtrubbningskryss för övernaturligt. ";
	
	handelsetabeller.kunskapmysterier[73].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[73].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[73].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[73].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[73].subval[0][0][0].vilja.varde=2; 
	handelsetabeller.kunskapmysterier[73].subval[0][0][0].psyke = {};
	handelsetabeller.kunskapmysterier[73].subval[0][0][0].psyke.varde=2;	
	handelsetabeller.kunskapmysterier[73].subval[0][0][0].avtrubbningovernaturligt=1;
	
	handelsetabeller.kunskapmysterier[73].subval[0].push([]);
	handelsetabeller.kunskapmysterier[73].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[73].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[73].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[73].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[73].subval[0][1][1] = {}; 
	handelsetabeller.kunskapmysterier[73].subval[0][1][1].valdasub = []; 
	handelsetabeller.kunskapmysterier[73].subval[0][1][1].vald = 0; 
	handelsetabeller.kunskapmysterier[73].subval[0][1][1].rubrik="4 mysterier";
	handelsetabeller.kunskapmysterier[73].subval[0][1][1].beskrivninghakvaldbas="4 mysterier. ";
	handelsetabeller.kunskapmysterier[73].subval[0][1][1].mysterier=4;
	
	handelsetabeller.kunskapmysterier[73].subval[0][1][2] = {}; 
	handelsetabeller.kunskapmysterier[73].subval[0][1][2].valdasub = []; 
	handelsetabeller.kunskapmysterier[73].subval[0][1][2].vald = 0; 
	handelsetabeller.kunskapmysterier[73].subval[0][1][2].rubrik="3 valfria enheter";
	handelsetabeller.kunskapmysterier[73].subval[0][1][2].beskrivninghakvaldbas="3 valfria enheter. ";
	handelsetabeller.kunskapmysterier[73].subval[0][1][2].valfriaenheter=3;
	
	

	handelsetabeller.kunskapmysterier[74] = {}; 
	handelsetabeller.kunskapmysterier[74].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[74].vald = 0; 
	handelsetabeller.kunskapmysterier[74].rubrik = "Pakt med väsen"
	handelsetabeller.kunskapmysterier[74].beskrivning = "Personen har slutit en pakt med någon typ av väsen; det kan röra sig om ett skogsrå, ett skuggväsen, ett troll eller kanske en drake. Exakt vad pakten rör sig om är upp till spelaren och spelledaren."
	handelsetabeller.kunskapmysterier[74].beskrivninghak = "4 valfria enheter knutna till pakten"
	handelsetabeller.kunskapmysterier[74].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[74].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[74].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[74].subval[0][0][0].valfriaenheter=4; 
	handelsetabeller.kunskapmysterier[74].subval[0][0][0].kontakt="Har slutit en pakt med någon typ av väsen.";

	handelsetabeller.kunskapmysterier[75] = {}; 
	handelsetabeller.kunskapmysterier[75].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[75].vald = 0; 
	handelsetabeller.kunskapmysterier[75].rubrik = "Provat underliga droger"
	handelsetabeller.kunskapmysterier[75].beskrivning = "Rollpersonen har provat en underlig drogmixtur som har haft en sällsam effekt. Under ett rus upplevde rollpersonen skrämmande och fascinerande händelser och efter upplevelsen så var denne förändrad. Exakt vad denne fick för insikt under ruset är upp till spelaren."
	handelsetabeller.kunskapmysterier[75].beskrivninghak = "\+2 Vilja, Psyke, Visdom eller Utstrålning"
	handelsetabeller.kunskapmysterier[75].beskrivninghak = "";
	
	handelsetabeller.kunskapmysterier[75].subval[0][0][0] = {};
	handelsetabeller.kunskapmysterier[75].subval[0][0][0].valdasub = [];
	handelsetabeller.kunskapmysterier[75].subval[0][0][0].vald = 0;
	handelsetabeller.kunskapmysterier[75].subval[0][0][0].ovrigt="Har provat underliga droger.";
	
	handelsetabeller.kunskapmysterier[75].subval[0].push([]);
	handelsetabeller.kunskapmysterier[75].subval[0][1][0] = {};
	handelsetabeller.kunskapmysterier[75].subval[0][1][0].valdasub = [];
	handelsetabeller.kunskapmysterier[75].subval[0][1][0].vald = 0;
	
	handelsetabeller.kunskapmysterier[75].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[75].subval[0][1][1] = {}; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][1].valdasub = []; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][1].vald = 0; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][1].rubrik="\+2 Vilja"; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][1].beskrivninghakvaldbas="\+2 Vilja. "; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][1].vilja = {};
	handelsetabeller.kunskapmysterier[75].subval[0][1][1].vilja.varde=2;
	
	handelsetabeller.kunskapmysterier[75].subval[0][1][2] = {}; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][2].valdasub = []; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][2].vald = 0; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][2].rubrik="\+2 Visdom"; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][2].beskrivninghakvaldbas="\+2 Visdom. "; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][2].visdom = {};
	handelsetabeller.kunskapmysterier[75].subval[0][1][2].visdom.varde=2;
	
	handelsetabeller.kunskapmysterier[75].subval[0][1][3] = {}; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][3].valdasub = []; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][3].vald = 0; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][3].rubrik="\+2 Utstrålning"; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][3].beskrivninghakvaldbas="\+2 Utstrålning. "; 
	handelsetabeller.kunskapmysterier[75].subval[0][1][3].utstralning = {};
	handelsetabeller.kunskapmysterier[75].subval[0][1][3].utstralning.varde=2;
	
	

	handelsetabeller.kunskapmysterier[76] = {}; 
	handelsetabeller.kunskapmysterier[76].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[76].vald = 0; 
	handelsetabeller.kunskapmysterier[76].rubrik = "Pyrotropisk dragning"
	handelsetabeller.kunskapmysterier[76].beskrivning = "Rollpersonen har en onaturlig dragning till eldens element och eld tycks inte skada rollpersonen till samma grad som andra. Fascinationen har dock lett till att rollpersonen tenderar att försöka lösa sina problem med just eld."
	handelsetabeller.kunskapmysterier[76].beskrivninghak = "Rollpersonen får ett Eldskydd på 2T6. En gång per spelmöte kan rollpersonen få igen 3 Fokus genom att lösa ett problem med eld, exempelvis bränna ner ett hus eller sätta eld på en person"
	handelsetabeller.kunskapmysterier[76].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[76].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[76].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[76].subval[0][0][0].formaga="Har ett Eldskydd på 2T6." + "\n" + "En gång per spelmöte kan rollpersonen få igen 3 Fokus genom att lösa ett problem med eld, exempelvis bränna ner ett hus eller sätta eld på en person";
	
	handelsetabeller.kunskapmysterier[77] = {}; 
	handelsetabeller.kunskapmysterier[77].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[77].vald = 0; 
	handelsetabeller.kunskapmysterier[77].rubrik = "Religiös upplevelse"
	handelsetabeller.kunskapmysterier[77].beskrivning = "Rollpersonen har under sina färder varit med om en religiös upplevelse. Det kan vara i form av ett mirakel som denne skådat, en syn som denne upplevt eller något liknande."
	handelsetabeller.kunskapmysterier[77].beskrivninghak = "Lättlärd i Teologi. 4 enheter Kunskapsfärdigheter då denne försökt lära sig så mycket som möjligt från upplevelsen"
	handelsetabeller.kunskapmysterier[77].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[77].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[77].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[77].subval[0][0][0].kunskapsfardigheterenheter = 4; 
	handelsetabeller.kunskapmysterier[77].subval[0][0][0].teologi = {};
	handelsetabeller.kunskapmysterier[77].subval[0][0][0].teologi.lattlard=1; 
	handelsetabeller.kunskapmysterier[77].subval[0][0][0].ovrigt="Har varit med om en religiös händelse.";

	handelsetabeller.kunskapmysterier[78] = {}; 
	handelsetabeller.kunskapmysterier[78].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[78].vald = 0; 
	handelsetabeller.kunskapmysterier[78].rubrik = "Relik"
	handelsetabeller.kunskapmysterier[78].beskrivning = "Rollpersonen har kommit över ett kraftfullt heligt föremål. Reliken är både omtalad och känd bland dem inom religionen. Exakt hur rollpersonen kommit över denna bör definieras."
	handelsetabeller.kunskapmysterier[78].beskrivninghak = "Lättlärd i Teologi. Rollpersonen får en valfri relik"
	handelsetabeller.kunskapmysterier[78].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[78].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[78].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[78].subval[0][0][0].teologi = {};
	handelsetabeller.kunskapmysterier[78].subval[0][0][0].teologi.lattlard=1; 
	handelsetabeller.kunskapmysterier[78].subval[0][0][0].resurs="Har kommit över en relik";

	handelsetabeller.kunskapmysterier[79] = {}; 
	handelsetabeller.kunskapmysterier[79].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[79].vald = 0; 
	handelsetabeller.kunskapmysterier[79].rubrik = "Repellera vandöd"
	handelsetabeller.kunskapmysterier[79].beskrivning = "Rollpersonen besitter en förmåga att få vandöda att hålla sig borta."
	handelsetabeller.kunskapmysterier[79].beskrivninghak = "Vandöda med rang 16 eller lägre kan inte attackera rollpersonen. Vandöda av högre rang påverkas inte av förmågan. ";
	handelsetabeller.kunskapmysterier[79].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[79].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[79].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[79].subval[0][0][0].formaga = "Vandöda med rang 16 eller lägre kan inte attackera rollpersonen. Vandöda av högre rang påverkas inte av förmågan. "; 


	handelsetabeller.kunskapmysterier[80] = {}; 
	handelsetabeller.kunskapmysterier[80].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[80].vald = 0; 
	handelsetabeller.kunskapmysterier[80].rubrik = "Sedd som helgon"
	handelsetabeller.kunskapmysterier[80].beskrivning = "Rollpersonen anses av en eller annan anledning utfört ett mirakel och det finns de som menar på att denne är i förbund med högre makter. Rollpersonen har fått ett mindre följe fanatiker som följer efter denne och har en tendens att dyka upp vid exakt fel tidpunkt. De skulle gå i döden för rollpersonen och är övertygad att denne är i förbund med makterna."
	handelsetabeller.kunskapmysterier[80].beskrivningvaldbas = "Rollpersonen anses av en eller annan anledning utfört ett mirakel och det finns de som menar på att denne är i förbund med högre makter. ";
	
	handelsetabeller.kunskapmysterier[80].beskrivninghak = "1 Avtrubbningskryss för utsatthet. Slå tre gånger på bakgrundstabellen för att ta reda på de tre personer som är mest fanatiska och de som kommer gå längst för att hjälpa rollpersonen. De är dock smått galna och kan inte förväntas fungera normalt"
	handelsetabeller.kunskapmysterier[80].beskrivninghakvaldbas = "1 Avtrubbningskryss för utsatthet. ";
	handelsetabeller.kunskapmysterier[80].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[80].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[80].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[80].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.kunskapmysterier[80].subval[0][0][0].kontaktbas="Är sedd som helgon, bland de mest fanatiska finns kontakt1_obestamd, kontakt2_obestamd och kontakt3_obestamd";
	handelsetabeller.kunskapmysterier[80].subval[0][0][0].kontaktenhetbool=[0,0,0];
	handelsetabeller.kunskapmysterier[80].subval[0][0][0].beskrivningvaldbas="Rollpersonen har fått ett mindre följe fanatiker bestående av bland andra kontakt1_obestamd, kontakt2_obestamd och kontakt3_obestamd, vilka följer efter denne och har en tendens att dyka upp vid exakt fel tidpunkt. Fanatikerna är smått galna och kan inte förväntas agera normalt. De skulle gå i döden för rollpersonen och är övertygad att denne är i förbund med makterna. ";

	handelsetabeller.kunskapmysterier[81] = {}; 
	handelsetabeller.kunskapmysterier[81].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[81].vald = 0; 
	handelsetabeller.kunskapmysterier[81].rubrik = "Skrock och sagor"
	handelsetabeller.kunskapmysterier[81].beskrivning = "Rollpersonen är insatt i det mesta som rör sägner och vidskepelse och berättar gärna för andra vad som för tur respektive otur med sig."
	handelsetabeller.kunskapmysterier[81].beskrivninghak = "Expertiserna Folktro och Vidskepelse 4T6 vardera. Lättlärd i Berättarkonst och Ockultism"
	handelsetabeller.kunskapmysterier[81].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[81].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[81].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[81].subval[0][0][0].berattarkonst = {};
	handelsetabeller.kunskapmysterier[81].subval[0][0][0].berattarkonst.lattlard=1; 
	handelsetabeller.kunskapmysterier[81].subval[0][0][0].ockultism = {};
	handelsetabeller.kunskapmysterier[81].subval[0][0][0].ockultism.lattlard=1; 
	handelsetabeller.kunskapmysterier[81].subval[0][0][0].vidskepelse = {};
	handelsetabeller.kunskapmysterier[81].subval[0][0][0].vidskepelse.enheter = 3; 

	handelsetabeller.kunskapmysterier[82] = {}; 
	handelsetabeller.kunskapmysterier[82].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[82].vald = 0; 
	handelsetabeller.kunskapmysterier[82].rubrik = "Strikt läromästare"
	handelsetabeller.kunskapmysterier[82].beskrivning = "Rollpersonen har haft en mycket strikt läromästare som förutom förespråkat utvecklingen av sinnet så måste man även stärka sin kropp med fysiska övningar."
	handelsetabeller.kunskapmysterier[82].beskrivninghak = "\+1 Styrka, \+1 Tålighet, \+1 Rörlighet. 2 enheter Rörelsefärdigheter"
	handelsetabeller.kunskapmysterier[82].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[82].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[82].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[82].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.kunskapmysterier[82].subval[0][0][0].styrka = {};
	handelsetabeller.kunskapmysterier[82].subval[0][0][0].styrka.varde =1; 
	handelsetabeller.kunskapmysterier[82].subval[0][0][0].talighet = {};
	handelsetabeller.kunskapmysterier[82].subval[0][0][0].talighet.varde =1; 
	handelsetabeller.kunskapmysterier[82].subval[0][0][0].rorlighet = {};
	handelsetabeller.kunskapmysterier[82].subval[0][0][0].rorlighet.varde =1; 
	handelsetabeller.kunskapmysterier[82].subval[0][0][0].kontakt="Har haft en mycket strikt läromästare.";

	
	handelsetabeller.kunskapmysterier[83] = {}; 
	handelsetabeller.kunskapmysterier[83].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[83].vald = 0; 
	handelsetabeller.kunskapmysterier[83].rubrik = "Smärtans klarhet"
	handelsetabeller.kunskapmysterier[83].beskrivning = "Rollpersonen har lärt sig att tygla ett kaotiskt sinne med hjälp av smärta. Kanske är denne en fanatisk udarit eller har bara lärt sig att fysisk smärta kan rensa själen från grumliga tankar. Rollpersonen måste under en scen utföra någon typ av rit som att piska sig själv, skära sin arm eller liknande för att åtnjuta effekten av detta."
	handelsetabeller.kunskapmysterier[83].beskrivninghak = "En gång per spelmöte kan rollpersonen åsamka sig själv ett kryss Smärta och får då genast igen 3 Fokus"
	handelsetabeller.kunskapmysterier[83].subval[0][0][0] = {};
	handelsetabeller.kunskapmysterier[83].subval[0][0][0].valdasub = [];
	handelsetabeller.kunskapmysterier[83].subval[0][0][0].vald = 0;
	handelsetabeller.kunskapmysterier[83].subval[0][0][0].ovrigt="Har lärt sig att tygla ett kaotiskt sinne med hjälp av smärta.";
	handelsetabeller.kunskapmysterier[83].subval[0][0][0].formaga="En gång per spelmöte kan rollpersonen åsamka sig själv ett kryss Smärta och får då genast igen 3 Fokus";

	handelsetabeller.kunskapmysterier[84] = {}; 
	handelsetabeller.kunskapmysterier[84].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[84].vald = 0; 
	handelsetabeller.kunskapmysterier[84].rubrik = "Sorgetyngd"
	handelsetabeller.kunskapmysterier[84].beskrivning = "En stor sorg vilar på rollpersonens axlar. Något i det förflutna kommer då och då tillbaka för att sprida sin svarta galla över rollpersonens sinne. Det kanske är någon som dött, ett beslut som rollpersonen ångrar eller en förälskelse som slutat olyckligt. Rollpersonen har sänkt sig i arbete för att dränka sorgen men den finns alltid där och skaver."
	handelsetabeller.kunskapmysterier[84].beskrivninghak = "Rollpersonen får det störningen Deprimerad men allt arbete som denne lagt ned har gett avkastning. Välj mellan 6 enheter Kunskapsfärdigheter och 6 enheter Mystikfärdigheter"
	handelsetabeller.kunskapmysterier[84].beskrivninghakvaldbas = "Rollpersonen får det störningen Deprimerad men allt arbete som denne lagt ned har gett avkastning. ";
	
	handelsetabeller.kunskapmysterier[84].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[84].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[84].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[84].subval[0][0][0].ovrigt="Har störningen Deprimerad";
	
	handelsetabeller.kunskapmysterier[84].subval[0].push([]);
	handelsetabeller.kunskapmysterier[84].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[84].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[84].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[84].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[84].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[84].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[84].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[84].subval[0][1][1].kunskapsfardigheterenheter=6;
	handelsetabeller.kunskapmysterier[84].subval[0][1][1].rubrik="6 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[84].subval[0][1][1].beskrivninghakvaldbas="6 enheter Kunskapsfärdigheter. ";
	
	handelsetabeller.kunskapmysterier[84].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[84].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[84].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[84].subval[0][1][2].mystikfardigheterenheter=6;
	handelsetabeller.kunskapmysterier[84].subval[0][1][2].rubrik="6 enheter Mystikfärdigheter"	
	handelsetabeller.kunskapmysterier[84].subval[0][1][2].beskrivninghakvaldbas="6 enheter Mystikfärdigheter. ";	
	

	handelsetabeller.kunskapmysterier[85] = {}; 
	handelsetabeller.kunskapmysterier[85].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[85].vald = 0; 
	handelsetabeller.kunskapmysterier[85].rubrik = "Spetskunskap"
	handelsetabeller.kunskapmysterier[85].beskrivning = "Rollpersonen har en förmåga att vara riktigt skicklig på obskyra färdigheter."
	handelsetabeller.kunskapmysterier[85].beskrivninghak = "3 poäng Expertiser. Varje gång denne använder Fokus för någon Expertis får denne ytterligare \+1T6 bonus"
	handelsetabeller.kunskapmysterier[85].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[85].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[85].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[85].subval[0][0][0].expertispoang = 3; 
	handelsetabeller.kunskapmysterier[85].subval[0][0][0].formaga="Varje gång Fokus används för någon Expertis ges  ytterligare \+1T6 bonus."

	handelsetabeller.kunskapmysterier[86] = {}; 
	handelsetabeller.kunskapmysterier[86].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[86].vald = 0; 
	handelsetabeller.kunskapmysterier[86].rubrik = "Språksinne"
	handelsetabeller.kunskapmysterier[86].beskrivning = "Rollpersonen har en stor talang för språk."
	handelsetabeller.kunskapmysterier[86].beskrivninghak = "\+2 Visdom. 6 Språkenheter"
	handelsetabeller.kunskapmysterier[86].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[86].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[86].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[86].subval[0][0][0].visdom = {};
	handelsetabeller.kunskapmysterier[86].subval[0][0][0].visdom.varde =2; 
	handelsetabeller.kunskapmysterier[86].subval[0][0][0].sprakenheter=6;

	handelsetabeller.kunskapmysterier[87] = {}; 
	handelsetabeller.kunskapmysterier[87].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[87].vald = 0; 
	handelsetabeller.kunskapmysterier[87].rubrik = "Synsk"
	handelsetabeller.kunskapmysterier[87].beskrivning = "Rollpersonen har en förmåga att få glimtar från den nära framtiden och kan snabbt reagera på detta."
	handelsetabeller.kunskapmysterier[87].beskrivninghak = "Personen har en förmåga att förnimma saker innan de sker. \+2T6 Vaksamhet"
	handelsetabeller.kunskapmysterier[87].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[87].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[87].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[87].subval[0][0][0].vaksamhet = {};
	handelsetabeller.kunskapmysterier[87].subval[0][0][0].vaksamhet.bonus = 8; 
	handelsetabeller.kunskapmysterier[87].subval[0][0][0].formaga="Har en förmåga att förnimma saker innan de sker.";

	handelsetabeller.kunskapmysterier[88] = {}; 
	handelsetabeller.kunskapmysterier[88].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[88].vald = 0; 
	handelsetabeller.kunskapmysterier[88].rubrik = "Tala med djuren"
	handelsetabeller.kunskapmysterier[88].beskrivning = "Rollpersonen kan tala med djur av alla de slag."
	handelsetabeller.kunskapmysterier[88].beskrivninghak = "Lättlärd i Naturlära. Expertisen Djurträning 4T6. Rollpersonen kan kommunicera med djur, observera dock att de flesta djur inte är särskilt intelligenta utan agerar mer på instinkt och kommunikationen blir därefter"
	handelsetabeller.kunskapmysterier[88].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[88].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[88].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[88].subval[0][0][0].naturlara = {};
	handelsetabeller.kunskapmysterier[88].subval[0][0][0].naturlara.lattlard=1; 
	handelsetabeller.kunskapmysterier[88].subval[0][0][0].djurtraning = {};
	handelsetabeller.kunskapmysterier[88].subval[0][0][0].djurtraning.enheter = 3; 
	handelsetabeller.kunskapmysterier[88].subval[0][0][0].formaga="Kan tala med djur.";

	
	handelsetabeller.kunskapmysterier[89] = {}; 
	handelsetabeller.kunskapmysterier[89].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[89].vald = 0; 
	handelsetabeller.kunskapmysterier[89].rubrik = "Teoretiker"
	handelsetabeller.kunskapmysterier[89].beskrivning = "Rollpersonen är mycket kunnig inom teori av mystisk karaktär."
	handelsetabeller.kunskapmysterier[89].beskrivninghak = "Lättlärd i Teologi och Teoretisk magi. Expertisen Astrologi 4T6"
	handelsetabeller.kunskapmysterier[89].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[89].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[89].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[89].subval[0][0][0].teologi = {};
	handelsetabeller.kunskapmysterier[89].subval[0][0][0].teologi.lattlard=1; 
	handelsetabeller.kunskapmysterier[89].subval[0][0][0].teoretiskmagi = {};
	handelsetabeller.kunskapmysterier[89].subval[0][0][0].teoretiskmagi.lattlard=1; 
	handelsetabeller.kunskapmysterier[89].subval[0][0][0].astrologi = {};
	handelsetabeller.kunskapmysterier[89].subval[0][0][0].astrologi.enheter = 3; 

	handelsetabeller.kunskapmysterier[90] = {}; 
	handelsetabeller.kunskapmysterier[90].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[90].vald = 0; 
	handelsetabeller.kunskapmysterier[90].rubrik = "Tid av galenskap"
	handelsetabeller.kunskapmysterier[90].beskrivning = "Rollpersonen led under en tid av någon typ av galenskap som denne nu är fri från. Galenskapen har dock lyckats rasera rollpersonens rykte och många ser denne som tokig, farlig eller opålitlig. Vad som orsakade galenskapen och hur rollpersonen sedan blev fri från den är upp till spelaren. Rollpersonen har dock fått en insikt i sitt eget sinne och tänker klarare och snabbare än någonsin innan."
	handelsetabeller.kunskapmysterier[90].beskrivninghak = "\+3 Psyke. Slå två slag på tabellen för störningar och välj en av dessa. Detta är den typ av galenskap som rollpersonen led av men nu är fri ifrån"
	handelsetabeller.kunskapmysterier[90].subval[0][0][0] = {};
	handelsetabeller.kunskapmysterier[90].subval[0][0][0].valdasub = [];
	handelsetabeller.kunskapmysterier[90].subval[0][0][0].vald = 0;
	handelsetabeller.kunskapmysterier[90].subval[0][0][0].psyke = {};
	handelsetabeller.kunskapmysterier[90].subval[0][0][0].psyke.varde=3;
	handelsetabeller.kunskapmysterier[90].subval[0][0][0].ovrigt="Slå två slag på tabellen för störningar och välj en av dessa. Detta är den typ av galenskap som rollpersonen led av men nu är fri ifrån";	

	handelsetabeller.kunskapmysterier[91] = {}; 
	handelsetabeller.kunskapmysterier[91].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[91].vald = 0; 
	handelsetabeller.kunskapmysterier[91].rubrik = "Tidskänsla"
	handelsetabeller.kunskapmysterier[91].beskrivning = "Rollpersonen har en mycket exakt tidskänsla och kan så gott som alltid veta vilken tid på dagen det är även om denne är inomhus eller djupt under mark."
	handelsetabeller.kunskapmysterier[91].beskrivninghak = "\+2 Uppfattning, \+2 Psyke"
	handelsetabeller.kunskapmysterier[91].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[91].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[91].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[91].subval[0][0][0].uppfattning = {};
	handelsetabeller.kunskapmysterier[91].subval[0][0][0].uppfattning.varde =2; 
	handelsetabeller.kunskapmysterier[91].subval[0][0][0].psyke = {};
	handelsetabeller.kunskapmysterier[91].subval[0][0][0].psyke.varde =2; 
	handelsetabeller.kunskapmysterier[91].subval[0][0][0].formaga="Har en mycket exakt tidskänsla.";

	handelsetabeller.kunskapmysterier[92] = {}; 
	handelsetabeller.kunskapmysterier[92].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[92].vald = 0; 
	handelsetabeller.kunskapmysterier[92].rubrik = "Tolkat stjärnorna"
	handelsetabeller.kunskapmysterier[92].beskrivning = "Rollpersonen har tolkat stjärnorna och förutsett en viktig händelse. Av många ses rollpersonen på med beundran medan andra är avundsjuka och beskyller rollpersonen för att vara kättare."
	handelsetabeller.kunskapmysterier[92].beskrivninghak = "Expertisen Astrologi 4T6. 3 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[92].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[92].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[92].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[92].subval[0][0][0].kunskapsfardigheterenheter = 3; 
	handelsetabeller.kunskapmysterier[92].subval[0][0][0].astrologi = {};
	handelsetabeller.kunskapmysterier[92].subval[0][0][0].astrologi.enheter = 3; 
	handelsetabeller.kunskapmysterier[92].subval[0][0][0].ovrigt="Har tolkat stjärnorna och förutsett en viktig händelse.";
	
	handelsetabeller.kunskapmysterier[93] = {}; 
	handelsetabeller.kunskapmysterier[93].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[93].vald = 0; 
	handelsetabeller.kunskapmysterier[93].rubrik = "Torterad"
	handelsetabeller.kunskapmysterier[93].beskrivning = "Rollpersonen har blivit infångad och torterad av någon anledning. Kanske är det inkvisitionen som försökt avslöja denne som kättare eller så har någon försökt tvinga ut kunskap och hemligheter ur rollpersonen. Kroppen bär fortfarande märken av tortyren men rollpersonen har blivit stärkt i sitt sinne och sin övertygelse."
	handelsetabeller.kunskapmysterier[93].beskrivninghak = "2 valfria enheter. 1 Avtrubbningskryss vardera för både utsatthet och våld"
	handelsetabeller.kunskapmysterier[93].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[93].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[93].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[93].subval[0][0][0].valfriaenheter=2; 
	handelsetabeller.kunskapmysterier[93].subval[0][0][0].avtrubbningutsatthet=1; 
	handelsetabeller.kunskapmysterier[93].subval[0][0][0].avtrubbningvald=1; 
	handelsetabeller.kunskapmysterier[93].subval[0][0][0].ovrigt="Har blivit torterad.";
	handelsetabeller.kunskapmysterier[93].subval[0][0][0].utseende="Märken från tortyr.";
	

	handelsetabeller.kunskapmysterier[94] = {}; 
	handelsetabeller.kunskapmysterier[94].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[94].vald = 0; 
	handelsetabeller.kunskapmysterier[94].rubrik = "Udars välsignelse"
	handelsetabeller.kunskapmysterier[94].beskrivning = "Rollpersonen sägs vara välsignad av profeten Udar och har en hel del gemensamt med henne."
	handelsetabeller.kunskapmysterier[94].beskrivninghak = "Expertisen Flagellera 4T6. Lättlärd i Argumentera. \+2 Vilja"
	handelsetabeller.kunskapmysterier[94].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[94].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[94].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[94].subval[0][0][0].flagellera = {};
	handelsetabeller.kunskapmysterier[94].subval[0][0][0].flagellera.enheter=3 ; 
	handelsetabeller.kunskapmysterier[94].subval[0][0][0].argumentera = {};
	handelsetabeller.kunskapmysterier[94].subval[0][0][0].argumentera.lattlard=1;
	handelsetabeller.kunskapmysterier[94].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[94].subval[0][0][0].vilja.varde=2;
	handelsetabeller.kunskapmysterier[94].subval[0][0][0].ovrigt="Sägs vara välsignad av Udar.";
	
	handelsetabeller.kunskapmysterier[95] = {}; 
	handelsetabeller.kunskapmysterier[95].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[95].vald = 0; 
	handelsetabeller.kunskapmysterier[95].rubrik = "Udda kunnande"
	handelsetabeller.kunskapmysterier[95].beskrivning = "Rollpersonen har en stor mängd udda kunskaper."
	handelsetabeller.kunskapmysterier[95].beskrivninghak = "4 poäng Expertiser"
	handelsetabeller.kunskapmysterier[95].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[95].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[95].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[95].subval[0][0][0].expertispoang = 4; 

	handelsetabeller.kunskapmysterier[96] = {}; 
	handelsetabeller.kunskapmysterier[96].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[96].vald = 0; 
	handelsetabeller.kunskapmysterier[96].rubrik = "Undersökt mystisk plats"
	handelsetabeller.kunskapmysterier[96].beskrivning = "Rollpersonen har undersökt en mystisk plats. Det kan vara ett högmagiskt område, en bortglömd ruin eller en förtrollad glänta. Rollpersonen fylldes med insikt och hittade någon typ av föremål som är mycket värdefullt om man kan hitta rätt köpare."
	handelsetabeller.kunskapmysterier[96].beskrivninghak = "Välj mellan 4 enheter Kunskapsfärdigheter och 4 enheter Mystikfärdigheter. Rollpersonen har även ett mystiskt föremål som är värt 4T6×50 silver om man hittar rätt köpare"
	handelsetabeller.kunskapmysterier[96].beskrivninghakvaldbas = "";
	
	handelsetabeller.kunskapmysterier[96].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[96].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[96].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[96].subval[0][0][0].resurs="Ett mystiskt föremål som är värt varde1_resultat om man hittar rätt köpare";
	handelsetabeller.kunskapmysterier[96].subval[0][0][0] = {};
	handelsetabeller.kunskapmysterier[96].subval[0][0][0].vardeslag=["4T6x50"];
	handelsetabeller.kunskapmysterier[96].subval[0][0][0].beskrivninghakvaldbas="Föremålet är värt varde1_resultat om man hittar rätt köpare.";
	
	
	handelsetabeller.kunskapmysterier[96].subval[0].push([]);
	handelsetabeller.kunskapmysterier[96].subval[0][1][0] = {}; 
	handelsetabeller.kunskapmysterier[96].subval[0][1][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[96].subval[0][1][0].vald = 0; 
	
	handelsetabeller.kunskapmysterier[96].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.kunskapmysterier[96].subval[0][1][1] = {};
	handelsetabeller.kunskapmysterier[96].subval[0][1][1].valdasub = [];
	handelsetabeller.kunskapmysterier[96].subval[0][1][1].vald = 0;
	handelsetabeller.kunskapmysterier[96].subval[0][1][1].kunskapsfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[96].subval[0][1][1].rubrik="4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[96].subval[0][1][1].beskrivninghakvaldbas="4 enheter Kunskapsfärdigheter. "
	
	handelsetabeller.kunskapmysterier[96].subval[0][1][2] = {};
	handelsetabeller.kunskapmysterier[96].subval[0][1][2].valdasub = [];
	handelsetabeller.kunskapmysterier[96].subval[0][1][2].vald = 0;
	handelsetabeller.kunskapmysterier[96].subval[0][1][2].mystikfardigheterenheter=4;
	handelsetabeller.kunskapmysterier[96].subval[0][1][2].rubrik="4 enheter Mystikfärdigheter"	
	handelsetabeller.kunskapmysterier[96].subval[0][1][2].beskrivninghakvaldbas="4 enheter Mystikfärdigheter. "	
	

	handelsetabeller.kunskapmysterier[97] = {}; 
	handelsetabeller.kunskapmysterier[97].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[97].vald = 0; 
	handelsetabeller.kunskapmysterier[97].rubrik = "Utskrattad"
	handelsetabeller.kunskapmysterier[97].beskrivning = "Rollpersonen har blivit utskrattad av sin gruppering i samhället. I det område där denne kommer från så ser man på denne med förakt och skrattar åt denne bakom ryggen. Det kan vara något som denne gjort av misstag eller något som denne blivit utsatt för. Att söka upprättelse för detta skulle göra mycket för dennes heder."
	handelsetabeller.kunskapmysterier[97].beskrivninghak = "2 Avtrubbningskryss för utsatthet"
	handelsetabeller.kunskapmysterier[97].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[97].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[97].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[97].subval[0][0][0].avtrubbningutsatthet = 2; 
	handelsetabeller.kunskapmysterier[97].subval[0][0][0].ovrigt="Har blivit utskrattad."

	handelsetabeller.kunskapmysterier[98] = {}; 
	handelsetabeller.kunskapmysterier[98].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[98].vald = 0; 
	handelsetabeller.kunskapmysterier[98].rubrik = "Välutbildad"
	handelsetabeller.kunskapmysterier[98].beskrivning = "Rollpersonen har spenderat en lång tid i studier och är numera både välutbildad och kunnig."
	handelsetabeller.kunskapmysterier[98].beskrivninghak = "\+3 Visdom. 4 enheter Kunskapsfärdigheter"
	handelsetabeller.kunskapmysterier[98].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[98].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[98].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[98].subval[0][0][0].kunskapsfardigheterenheter = 4; 
	handelsetabeller.kunskapmysterier[98].subval[0][0][0].visdom = {};
	handelsetabeller.kunskapmysterier[98].subval[0][0][0].visdom.varde =3; 

	handelsetabeller.kunskapmysterier[99] = {}; 
	handelsetabeller.kunskapmysterier[99].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[99].vald = 0; 
	handelsetabeller.kunskapmysterier[99].rubrik = "Vän med väsen"
	handelsetabeller.kunskapmysterier[99].beskrivning = "Rollpersonen har en vänskap med ett övernaturligt väsen som många skulle se på med fruktan eller förakta. Det kan vara ett troll, en sagitaur, en lamia, ett spöke, ett skuggväsen eller något annat som ses som övernaturligt. Exakt hur vänskapen uppstod är upp till spelaren men denne har nu en förståelse för liknande väsen och drar sig från att skada dessa."
	handelsetabeller.kunskapmysterier[99].beskrivninghak = "\+1 Vilja, \+2 Visdom. 3 valfria enheter som denne lärt sig av väsendet"
	handelsetabeller.kunskapmysterier[99].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[99].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[99].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[99].subval[0][0][0].valfriaenheter=3; 
	handelsetabeller.kunskapmysterier[99].subval[0][0][0].vilja = {};
	handelsetabeller.kunskapmysterier[99].subval[0][0][0].vilja.varde =1; 
	handelsetabeller.kunskapmysterier[99].subval[0][0][0].visdom = {};
	handelsetabeller.kunskapmysterier[99].subval[0][0][0].visdom.varde =2; 

	handelsetabeller.kunskapmysterier[100] = {}; 
	handelsetabeller.kunskapmysterier[100].subval = [[[]]]; 
	handelsetabeller.kunskapmysterier[100].vald = 0; 
	handelsetabeller.kunskapmysterier[100].rubrik = "Händelserikt liv"
	handelsetabeller.kunskapmysterier[100].beskrivning = "Rollpersonen har haft ett händelserikt liv."
	handelsetabeller.kunskapmysterier[100].beskrivninghak = "1 extra slag på valfri händelsetabell och slå dessutom om detta slag"
	handelsetabeller.kunskapmysterier[100].subval[0][0][0] = {}; 
	handelsetabeller.kunskapmysterier[100].subval[0][0][0].valdasub = []; 
	handelsetabeller.kunskapmysterier[100].subval[0][0][0].vald = 0; 
	handelsetabeller.kunskapmysterier[100].subval[0][0][0].valfriatabellslag=1;

	
	
	for (i=1; i< handelsetabeller.kunskapmysterier.length; i++){
		handelsetabeller.kunskapmysterier[i].tabellnamn = "Kunskap \& mysterier";
		handelsetabeller.kunskapmysterier[i].typ = "handelsetabellslag";
		handelsetabeller.kunskapmysterier[i].aktiverad=0;
		
		if ("beskrivningvaldbas" in handelsetabeller.kunskapmysterier[i]){
			
		}else{
			handelsetabeller.kunskapmysterier[i].beskrivningvaldbas=handelsetabeller.kunskapmysterier[i].beskrivning;
		}
		
		if ("beskrivninghakvaldbas" in handelsetabeller.kunskapmysterier[i]){
			
		}else{
			handelsetabeller.kunskapmysterier[i].beskrivninghakvaldbas=handelsetabeller.kunskapmysterier[i].beskrivninghak;
		}
		
		if ("nummer" in handelsetabeller.kunskapmysterier[i]){
			
		}else{
			handelsetabeller.kunskapmysterier[i].nummer=i;
		}
	}
    
	
	
	
    // --- //
    
    handelsetabeller.striderdrabbningar = [];
    
    handelsetabeller.striderdrabbningar[0] = {};    
    handelsetabeller.striderdrabbningar[0].subval = [[[]]];    
    handelsetabeller.striderdrabbningar[0].vald = 0;    
    handelsetabeller.striderdrabbningar[0].rubrik="Strider \& drabbningar";
	handelsetabeller.striderdrabbningar[0].namn="striderdrabbningar";
	
	handelsetabeller.striderdrabbningar[1] = {}; 
	handelsetabeller.striderdrabbningar[1].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[1].vald = 0; 
	handelsetabeller.striderdrabbningar[1].rubrik = "Aktivt liv"
	handelsetabeller.striderdrabbningar[1].beskrivning = "Rollpersonen har lärt sig att det är viktigt att hålla sig aktiv och inte låta kroppen förfalla. Denne tar därför gärna långa promenader, utför styrkeövningar och testar sina fysiska gränser likväl som de mentala."
	handelsetabeller.striderdrabbningar[1].beskrivninghak = "\+1 Styrka, \+1 Tålighet, \+1 Rörlighet. 1 enhet Rörelsefärdigheter"
	handelsetabeller.striderdrabbningar[1].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[1].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[1].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[1].subval[0][0][0].rorelsefardigheterenheter = 1; 
	handelsetabeller.striderdrabbningar[1].subval[0][0][0].styrka = {};
	handelsetabeller.striderdrabbningar[1].subval[0][0][0].styrka.varde =1; 
	handelsetabeller.striderdrabbningar[1].subval[0][0][0].talighet = {};
	handelsetabeller.striderdrabbningar[1].subval[0][0][0].talighet.varde =1; 
	handelsetabeller.striderdrabbningar[1].subval[0][0][0].rorlighet = {};
	handelsetabeller.striderdrabbningar[1].subval[0][0][0].rorlighet.varde =1; 

	handelsetabeller.striderdrabbningar[2] = {}; 
	handelsetabeller.striderdrabbningar[2].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[2].vald = 0; 
	handelsetabeller.striderdrabbningar[2].rubrik = "Ambidexter"
	handelsetabeller.striderdrabbningar[2].beskrivning = "Rollpersonen kan använda båda sina händer samtidigt i strid och har lika bra kontroll över dem."
	handelsetabeller.striderdrabbningar[2].beskrivninghak = "\+1 Rörlighet. När rollpersonen har ett vapen i varje hand ökar aldrig Utmattning från valet av försvarstaktik"
	handelsetabeller.striderdrabbningar[2].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[2].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[2].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[2].subval[0][0][0].rorlighet = {};
	handelsetabeller.striderdrabbningar[2].subval[0][0][0].rorlighet.varde =1; 
	handelsetabeller.striderdrabbningar[2].subval[0][0][0].formaga="Ambidexter: när rollpersonen har ett vapen i varje hand ökar aldrig Utmattning från valet av försvarstaktik.";

	handelsetabeller.striderdrabbningar[3] = {}; 
	handelsetabeller.striderdrabbningar[3].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[3].vald = 0; 
	handelsetabeller.striderdrabbningar[3].rubrik = "Armstyrka"
	handelsetabeller.striderdrabbningar[3].beskrivning = "Rollpersonen har en stor styrka i sina armar och ett starkt grepp."
	handelsetabeller.striderdrabbningar[3].beskrivninghak = "\+3 Styrka. Ignorerar efterverkningen Tappar"
	handelsetabeller.striderdrabbningar[3].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[3].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[3].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[3].subval[0][0][0].styrka = {};
	handelsetabeller.striderdrabbningar[3].subval[0][0][0].styrka.varde =3; 
	handelsetabeller.striderdrabbningar[3].subval[0][0][0].formaga="Ignorerar efterverkningen Tappar.";
	

	handelsetabeller.striderdrabbningar[4] = {}; 
	handelsetabeller.striderdrabbningar[4].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[4].vald = 0; 
	handelsetabeller.striderdrabbningar[4].rubrik = "Avståndsbedömare"
	handelsetabeller.striderdrabbningar[4].beskrivning = "Personen är mycket bra på att bedöma avstånd."
	handelsetabeller.striderdrabbningar[4].beskrivninghak = "\+2 Uppfattning. Lättlärd i Armborst, Båge och Kastvapen"
	handelsetabeller.striderdrabbningar[4].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].armborst = {};
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].armborst.lattlard=1; 
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].bage = {};
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].bage.lattlard=1; 
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].kastvapen = {};
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].kastvapen.lattlard=1; 
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].uppfattning = {};
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].uppfattning.varde =2; 
	handelsetabeller.striderdrabbningar[4].subval[0][0][0].formaga="Är mycket bra på att bedöma avstånd.";

	handelsetabeller.striderdrabbningar[5] = {}; 
	handelsetabeller.striderdrabbningar[5].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[5].vald = 0; 
	handelsetabeller.striderdrabbningar[5].rubrik = "Avvärjt uppror"
	handelsetabeller.striderdrabbningar[5].beskrivning = "När slitningarna inom armén var som störst och ett uppror mot befälen tycktes oundvikligt lyckades rollpersonen mana till lugn och höll på så vis revolten borta."
	handelsetabeller.striderdrabbningar[5].beskrivninghak = "Expertisen Soldatliv 4T6. Lättlärd i Ledarskap. 2 enheter Sociala färdigheter"
	handelsetabeller.striderdrabbningar[5].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[5].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[5].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[5].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[5].subval[0][0][0].ledarskap = {};
	handelsetabeller.striderdrabbningar[5].subval[0][0][0].ledarskap.lattlard=1; 
	handelsetabeller.striderdrabbningar[5].subval[0][0][0].soldatliv = {};
	handelsetabeller.striderdrabbningar[5].subval[0][0][0].soldatliv.enheter = 3; 
	handelsetabeller.striderdrabbningar[5].subval[0][0][0].ovrigt="Har avvärjt ett uppror.";
	
	handelsetabeller.striderdrabbningar[6] = {}; 
	handelsetabeller.striderdrabbningar[6].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[6].vald = 0; 
	handelsetabeller.striderdrabbningar[6].rubrik = "Belägring"
	handelsetabeller.striderdrabbningar[6].beskrivning = "Rollpersonen har deltagit vid en belägring."
	handelsetabeller.striderdrabbningar[6].beskrivninghak = "Lättlärd i Krigföring, Expertisen Krigsmaskiner 4T6"
	handelsetabeller.striderdrabbningar[6].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[6].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[6].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[6].subval[0][0][0].krigforing = {};
	handelsetabeller.striderdrabbningar[6].subval[0][0][0].krigforing.lattlard=1; 
	handelsetabeller.striderdrabbningar[6].subval[0][0][0].krigsmaskiner = {};
	handelsetabeller.striderdrabbningar[6].subval[0][0][0].krigsmaskiner.enheter = 3; 
	handelsetabeller.striderdrabbningar[6].subval[0][0][0].ovrigt="Har avvärjt ett uppror";
	
	handelsetabeller.striderdrabbningar[7] = {}; 
	handelsetabeller.striderdrabbningar[7].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[7].vald = 0; 
	handelsetabeller.striderdrabbningar[7].rubrik = "Besegrat monster"
	handelsetabeller.striderdrabbningar[7].beskrivning = "Rollpersonen har besegrat ett monster i strid och är hyllad i omgivningen som tidigare plågades av besten."
	handelsetabeller.striderdrabbningar[7].beskrivninghak = "Expertisen Monsterkunskap 4T6. 2 enheter Stridsfärdigheter, 2 enheter Vildmarksfärdigheter"
	handelsetabeller.striderdrabbningar[7].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[7].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[7].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[7].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[7].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[7].subval[0][0][0].monsterkunskap = {};
	handelsetabeller.striderdrabbningar[7].subval[0][0][0].monsterkunskap.enheter = 3; 
	handelsetabeller.striderdrabbningar[7].subval[0][0][0].ovrigt="Har besegrat ett monster i strid.";

	handelsetabeller.striderdrabbningar[8] = {}; 
	handelsetabeller.striderdrabbningar[8].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[8].vald = 0; 
	handelsetabeller.striderdrabbningar[8].rubrik = "Bita ihop"
	handelsetabeller.striderdrabbningar[8].beskrivning = "Personen kan bita ihop och bortse från hur ont denne har."
	handelsetabeller.striderdrabbningar[8].beskrivninghak = "För 1 Fokus kan personen ignorera samtliga avdrag från Smärta under en stridsrunda eller för en handling utanför strid"
	handelsetabeller.striderdrabbningar[8].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[8].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[8].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[8].subval[0][0][0].formaga="För 1 Fokus kan personen ignorera samtliga avdrag från Smärta under en stridsrunda eller för en handling utanför strid.";
	
	handelsetabeller.striderdrabbningar[9] = {}; 
	handelsetabeller.striderdrabbningar[9].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[9].vald = 0; 
	handelsetabeller.striderdrabbningar[9].rubrik = "Bärsärkaraseri"
	handelsetabeller.striderdrabbningar[9].beskrivning = "Personen kan försätta sig i bärsärkaraseri under strid."
	handelsetabeller.striderdrabbningar[9].beskrivninghak = "Om rollpersonen spenderar 1 Fokus under en scen gör alla Kraftfulla anfall som denne utför \+1T6 i skada. Likaså ignorerar personen –1T6 Smärta. Personen får dock inte använda försvarstaktiken Defensivt försvar under bärsärkagången"
	handelsetabeller.striderdrabbningar[9].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[9].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[9].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[9].subval[0][0][0].formaga="Bärsärkaraseri: Om rollpersonen spenderar 1 Fokus under en scen gör alla Kraftfulla anfall som denne utför \+1T6 i skada. Likaså ignorerar personen –1T6 Smärta. Personen får dock inte använda försvarstaktiken Defensivt försvar under bärsärkagången.";

	
	handelsetabeller.striderdrabbningar[10] = {}; 
	handelsetabeller.striderdrabbningar[10].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[10].vald = 0; 
	handelsetabeller.striderdrabbningar[10].rubrik = "Chockresistent"
	handelsetabeller.striderdrabbningar[10].beskrivning = "Rollpersonen har en förmåga att hålla sig vid medvetande hur illa tilltygad denne än är."
	handelsetabeller.striderdrabbningar[10].beskrivninghak = "\+2 Livskraft vid Chockslag"
	handelsetabeller.striderdrabbningar[10].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[10].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[10].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[10].subval[0][0][0].livskraft = {};
	handelsetabeller.striderdrabbningar[10].subval[0][0][0].livskraft.egenskap ="\+2 vid Chockslag."; 

	handelsetabeller.striderdrabbningar[11] = {}; 
	handelsetabeller.striderdrabbningar[11].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[11].vald = 0; 
	handelsetabeller.striderdrabbningar[11].rubrik = "Destruktivt förhållande"
	handelsetabeller.striderdrabbningar[11].beskrivning = "Rollpersonen har varit involverad i ett destruktivt förhållande. Det har varit passionerat men farligt och till slut insåg rollpersonen att detta kostade mer än det smakade och drog sig ur. Den som rollpersonen var tillsammans med känner sig försmådd och är nu mycket hatisk gentemot denne."
	handelsetabeller.striderdrabbningar[11].beskrivningvaldbas = "";
	
	handelsetabeller.striderdrabbningar[11].beskrivninghak = "Slå två gånger på bakgrundstabellen och välj en som visar vem rollpersonen hade förhållandet med. Rollpersonen får välja en av färdighetsgrupperna från denna bakgrund. Detta symboliserar det rollpersonen lärt sig av att spendera tid med sin före detta"
	handelsetabeller.striderdrabbningar[11].beskrivninghakvaldbas = "";
	
	handelsetabeller.striderdrabbningar[11].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[11].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[11].subval[0][0][0].vald = 0; 
	
	handelsetabeller.striderdrabbningar[11].subval[0].push([]); 
	handelsetabeller.striderdrabbningar[11].subval[0][1][0] = {}; 
	handelsetabeller.striderdrabbningar[11].subval[0][1][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[11].subval[0][1][0].vald = 0; 
	
	handelsetabeller.striderdrabbningar[11].subval[0][1][0].kontaktbas="Har varit involverad i ett destruktivt förhållande med kontakt1_obestamd. Denne känner nu ett stort hat mot rollpersonen.";
	handelsetabeller.striderdrabbningar[11].subval[0][1][0].beskrivningvaldbas = "Rollpersonen har varit involverad i ett destruktivt förhållande med kontakt1_obestamd. Det har varit passionerat men farligt och till slut insåg rollpersonen att detta kostade mer än det smakade och drog sig ur. kontakt1_Bestamd känner sig försmådd och är nu mycket hatisk gentemot rollpersonen.";
	
	handelsetabeller.striderdrabbningar[11].subval[0][1][0].kontaktenhetbool=[1];
	handelsetabeller.striderdrabbningar[11].subval[0][1][0].subvalrubrikbas="Välj vad rollpersonen lärt sig under det destruktiva förhållandet med kontakt1_bestamd:";

	handelsetabeller.striderdrabbningar[12] = {}; 
	handelsetabeller.striderdrabbningar[12].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[12].vald = 0; 
	handelsetabeller.striderdrabbningar[12].rubrik = "Drabbning till havs"
	handelsetabeller.striderdrabbningar[12].beskrivning = "Rollpersonen har spenderat en tid till havs och deltagit i en kamp på fartyg."
	handelsetabeller.striderdrabbningar[12].beskrivninghak = "Lättlärd i Simma och Sjömannaskap. 2 enheter Vildmarksfärdigheter"
	handelsetabeller.striderdrabbningar[12].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[12].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[12].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[12].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[12].subval[0][0][0].simma = {};
	handelsetabeller.striderdrabbningar[12].subval[0][0][0].simma.lattlard=1; 
	handelsetabeller.striderdrabbningar[12].subval[0][0][0].sjomannaskap = {};
	handelsetabeller.striderdrabbningar[12].subval[0][0][0].sjomannaskap.lattlard=1; 
	handelsetabeller.striderdrabbningar[12].subval[0][0][0].ovrigt="Har varit med i en drabbning till havs.";

	handelsetabeller.striderdrabbningar[13] = {}; 
	handelsetabeller.striderdrabbningar[13].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[13].vald = 0; 
	handelsetabeller.striderdrabbningar[13].rubrik = "Dragning till våld"
	handelsetabeller.striderdrabbningar[13].beskrivning = "Rollpersonen har en dragning till våld och våldsamheter. Detta kan röra sig om en besatthet vid gladiatorstrider, hetsa folk till att starta bråk eller själv hänge sig åt detta på egen hand."
	handelsetabeller.striderdrabbningar[13].beskrivninghak = "\+2 Styrka. 4 enheter Stridsfärdigheter. Det sekundära karaktärsdraget är Kamp och är Låst"
	handelsetabeller.striderdrabbningar[13].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[13].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[13].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[13].subval[0][0][0].stridsfardigheterenheter = 4; 
	handelsetabeller.striderdrabbningar[13].subval[0][0][0].styrka = {};
	handelsetabeller.striderdrabbningar[13].subval[0][0][0].styrka.varde =2; 
	handelsetabeller.striderdrabbningar[13].subval[0][0][0].karaktarsdrag="Det sekundära karaktärsdraget är Kamp och är Låst.";

	
	handelsetabeller.striderdrabbningar[14] = {}; 
	handelsetabeller.striderdrabbningar[14].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[14].vald = 0; 
	handelsetabeller.striderdrabbningar[14].rubrik = "Dräpande anfall"
	handelsetabeller.striderdrabbningar[14].beskrivning = "Rollpersonen har blivit tränad av en vapenmästare att utdela dräpande anfall."
	handelsetabeller.striderdrabbningar[14].beskrivninghak = "\+2 Grundskada. När rollpersonen träffat sitt mål (men innan skadan är framslagen) kan denne spendera 1 Fokus för att göra \+1T6 skada. Som mest 2 Fokus kan användas på detta sätt och således öka skadan med \+2T6."
	handelsetabeller.striderdrabbningar[14].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[14].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[14].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[14].subval[0][0][0].grundskada = {};
	handelsetabeller.striderdrabbningar[14].subval[0][0][0].grundskada.bonus =2; 
	handelsetabeller.striderdrabbningar[14].subval[0][0][0].formaga="När rollpersonen träffat sitt mål (men innan skadan är framslagen) kan denne spendera 1 Fokus för att göra \+1T6 skada. Som mest 2 Fokus kan användas på detta sätt och således öka skadan med \+2T6.";

	handelsetabeller.striderdrabbningar[15] = {}; 
	handelsetabeller.striderdrabbningar[15].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[15].vald = 0; 
	handelsetabeller.striderdrabbningar[15].rubrik = "Dräpt kamrat"
	handelsetabeller.striderdrabbningar[15].beskrivning = "I stridens hetta har rollpersonen råkat dräpa en kamrat och en vapenbroder. Det var ett misstag men övriga kämpar betraktar fortfarande detta med viss misstänksamhet och några tror att rollpersonen hade något otalt med vännen och dräpte denne med mening."
	handelsetabeller.striderdrabbningar[15].beskrivninghak = "1 Avtrubbningskryss för utsatthet, 1 Avtrubbningskryss för våld"
	handelsetabeller.striderdrabbningar[15].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[15].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[15].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[15].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.striderdrabbningar[15].subval[0][0][0].avtrubbningvald = 1; 
	handelsetabeller.striderdrabbningar[15].subval[0][0][0].ovrigt="Har råkat dräpa en kamrat.";

	handelsetabeller.striderdrabbningar[16] = {}; 
	handelsetabeller.striderdrabbningar[16].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[16].vald = 0; 
	handelsetabeller.striderdrabbningar[16].rubrik = "Dubbelhänt"
	handelsetabeller.striderdrabbningar[16].beskrivning = "Rollpersonen kan använda båda händerna lika bra och får inget avdrag om denne skulle använda fel hand i någon situation."
	handelsetabeller.striderdrabbningar[16].beskrivninghak = "\+1 Rörlighet. När rollpersonen har ett vapen i varje hand ökar vapenskadan med \+2"
	handelsetabeller.striderdrabbningar[16].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[16].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[16].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[16].subval[0][0][0].rorlighet = {};
	handelsetabeller.striderdrabbningar[16].subval[0][0][0].rorlighet.varde =1;
	handelsetabeller.striderdrabbningar[16].subval[0][0][0].formaga="Dubbelhänt: När rollpersonen har ett vapen i varje hand ökar vapenskadan med \+2.";	

	handelsetabeller.striderdrabbningar[17] = {}; 
	handelsetabeller.striderdrabbningar[17].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[17].vald = 0; 
	handelsetabeller.striderdrabbningar[17].rubrik = "Eldigt stridstal"
	handelsetabeller.striderdrabbningar[17].beskrivning = "Rollpersonen har inför en drabbning hållit ett eldigt och passionerat stridstal och insett hur viktigt det är att använda orden på rätt sätt för att stärka soldaternas moral."
	handelsetabeller.striderdrabbningar[17].beskrivninghak = "Lättlärd i Argumentera. 3 enheter Sociala färdigheter"
	handelsetabeller.striderdrabbningar[17].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[17].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[17].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[17].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.striderdrabbningar[17].subval[0][0][0].argumentera = {};
	handelsetabeller.striderdrabbningar[17].subval[0][0][0].argumentera.lattlard=1; 
	handelsetabeller.striderdrabbningar[17].subval[0][0][0].ovrigt="Har hållt ett eldigt stridstal.";

	handelsetabeller.striderdrabbningar[18] = {}; 
	handelsetabeller.striderdrabbningar[18].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[18].vald = 0; 
	handelsetabeller.striderdrabbningar[18].rubrik = "Eskort åt bortskämd ädling"
	handelsetabeller.striderdrabbningar[18].beskrivning = "Rollpersonen har varit beväpnad eskort åt en odräglig och bortskämd ädling som med sitt växlande humör, dryga tilltal och syrliga kommentarer nästintill drivit rollpersonen till vansinne."
	handelsetabeller.striderdrabbningar[18].beskrivninghak = "3 enheter Sociala färdigheter. 3 Avtrubbningskryss för utsatthet"
	handelsetabeller.striderdrabbningar[18].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[18].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[18].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[18].subval[0][0][0].socialafardigheterenheter = 3; 
	handelsetabeller.striderdrabbningar[18].subval[0][0][0].avtrubbningutsatthet = 3; 
	handelsetabeller.striderdrabbningar[18].subval[0][0][0].kontakt="Har varit beväpnad eskort åt en odräglig och bortskämd ädling";

	handelsetabeller.striderdrabbningar[19] = {}; 
	handelsetabeller.striderdrabbningar[19].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[19].vald = 0; 
	handelsetabeller.striderdrabbningar[19].rubrik = "Exotisk stridskonst"
	handelsetabeller.striderdrabbningar[19].beskrivning = "Rollpersonen har tränats i en exotisk stridskonst. Det kan vara något från Sungmunkarna i västländerna eller kanske adasiernas ormlika stridstekniker från Maazenträsken. Hur som helst har rollpersonen lärt sig att använda sin kropp för att orsaka ofantlig skada gentemot en motståndare."
	handelsetabeller.striderdrabbningar[19].beskrivninghak = "Lättlärd i Slagsmål. 3 enheter Stridsfärdigheter. Alla obeväpnade attacker får egenskapen Vådlig"
	handelsetabeller.striderdrabbningar[19].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[19].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[19].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[19].subval[0][0][0].stridsfardigheterenheter = 3; 
	handelsetabeller.striderdrabbningar[19].subval[0][0][0].slagsmal = {};
	handelsetabeller.striderdrabbningar[19].subval[0][0][0].slagsmal.lattlard=1; 
	handelsetabeller.striderdrabbningar[19].subval[0][0][0].formaga="Alla obeväpnade attacker får egenskapen Vådlig";
	handelsetabeller.striderdrabbningar[19].subval[0][0][0].ovrigt="Har tränats i en exotisk stridskonst.";

	
	handelsetabeller.striderdrabbningar[20] = {}; 
	handelsetabeller.striderdrabbningar[20].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[20].vald = 0; 
	handelsetabeller.striderdrabbningar[20].rubrik = "Farlig förbindelse"
	handelsetabeller.striderdrabbningar[20].beskrivning = "Rollpersonen har eller har haft en farlig förbindelse med en person som skulle räknas till fienden. Förhållandet är hemligt och skulle det avslöjas skulle det försätta båda i fara och kanske orsaka en stor skandal. Rollpersonen har fortfarande känslor för personen ifråga."
	handelsetabeller.striderdrabbningar[20].beskrivninghak = "2 enheter Sociala färdigheter, 2 enheter Rörelsefärdigheter"
	handelsetabeller.striderdrabbningar[20].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[20].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[20].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[20].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[20].subval[0][0][0].socialafardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[20].subval[0][0][0].kontakt="Har eller har haft en farlig förbindelse med en person som skulle räknas till fienden.";

	handelsetabeller.striderdrabbningar[21] = {}; 
	handelsetabeller.striderdrabbningar[21].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[21].vald = 0; 
	handelsetabeller.striderdrabbningar[21].rubrik = "Fiende inom familjen"
	handelsetabeller.striderdrabbningar[21].beskrivning = "Rollpersonen har en fiende som ursprungligen kommer från dennes familj. Detta kan vara fader, moder, syster, broder, son eller dotter. Fienden har upprepade gånger försökt slå sina klor i rollpersonen och om inte döda så fånga in och oskadliggöra denne. Rollpersonen har vid ett tillfälle tvingats fly långt ut i vildmarken för att undkomma. Trots fiendeskapet skulle rollpersonen ha mycket svårt att dräpa sin släkting."
	handelsetabeller.striderdrabbningar[21].beskrivninghak = "4 enheter Vildmarksfärdigheter. Skulle rollpersonen döda sin släkting utsätts denne för Nedbrytning 60. Om någon annan skulle döda fienden drabbas rollpersonen istället av Nedbrytning 45"
	handelsetabeller.striderdrabbningar[21].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[21].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[21].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[21].subval[0][0][0].vildmarksfardigheterenheter = 4; 
	handelsetabeller.striderdrabbningar[21].subval[0][0][0].kontakt="Har en fiende som ursprungligen kommer från dennes familj. Skulle rollpersonen döda sin släkting utsätts denne för Nedbrytning 60. Om någon annan skulle döda fienden drabbas rollpersonen istället av Nedbrytning 45.";

	handelsetabeller.striderdrabbningar[22] = {}; 
	handelsetabeller.striderdrabbningar[22].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[22].vald = 0; 
	handelsetabeller.striderdrabbningar[22].rubrik = "Finna blotta"
	handelsetabeller.striderdrabbningar[22].beskrivning = "Rollpersonen kan när det gäller finna en blotta i den skickligaste motståndarens gard och låta attacken träffa där den gör som mest skada."
	handelsetabeller.striderdrabbningar[22].beskrivninghak = "\+2 Uppfattning. För 1 Fokus får rollpersonen välja vilken kroppsdel attacken träffar. Detta gör denne innan några Övertag har använts."
	handelsetabeller.striderdrabbningar[22].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[22].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[22].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[22].subval[0][0][0].uppfattning = {};
	handelsetabeller.striderdrabbningar[22].subval[0][0][0].uppfattning.varde=2;
	handelsetabeller.striderdrabbningar[22].subval[0][0][0].formaga="För 1 Fokus får rollpersonen välja vilken kroppsdel attacken träffar. Detta gör denne innan några Övertag har använts.";

	handelsetabeller.striderdrabbningar[23] = {}; 
	handelsetabeller.striderdrabbningar[23].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[23].vald = 0; 
	handelsetabeller.striderdrabbningar[23].rubrik = "Flytt från fångenskap"
	handelsetabeller.striderdrabbningar[23].beskrivning = "Rollpersonen har varit fånge men lyckats fly från fångenskapen."
	handelsetabeller.striderdrabbningar[23].beskrivninghak = "Expertisen Utbrytarkonst 4T6. 4 enheter Rörelsefärdigheter"
	handelsetabeller.striderdrabbningar[23].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[23].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[23].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[23].subval[0][0][0].rorelsefardigheterenheter = 4; 
	handelsetabeller.striderdrabbningar[23].subval[0][0][0].utbrytarkonst = {};
	handelsetabeller.striderdrabbningar[23].subval[0][0][0].utbrytarkonst.enheter = 3; 
	handelsetabeller.striderdrabbningar[23].subval[0][0][0].ovrigt="Har flytt från fångenskap."
	
	handelsetabeller.striderdrabbningar[24] = {}; 
	handelsetabeller.striderdrabbningar[24].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[24].vald = 0; 
	handelsetabeller.striderdrabbningar[24].rubrik = "Frisk"
	handelsetabeller.striderdrabbningar[24].beskrivning = "Personen är mycket frisk och drabbas sällan av sjukdomar och infektioner."
	handelsetabeller.striderdrabbningar[24].beskrivninghak = "\+2 Tålighet. \+2T6 Livskraft vid Infektionsslag"
	handelsetabeller.striderdrabbningar[24].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[24].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[24].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[24].subval[0][0][0].talighet = {};
	handelsetabeller.striderdrabbningar[24].subval[0][0][0].talighet.varde =2; 
	handelsetabeller.striderdrabbningar[24].subval[0][0][0].livskraft = {};
	handelsetabeller.striderdrabbningar[24].subval[0][0][0].livskraft.egenskap = "\+2T6 vid Infektionsslag"; 

	handelsetabeller.striderdrabbningar[25] = {}; 
	handelsetabeller.striderdrabbningar[25].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[25].vald = 0; 
	handelsetabeller.striderdrabbningar[25].rubrik = "Fruktansvärd handling"
	handelsetabeller.striderdrabbningar[25].beskrivning = "Rollpersonen har begått en fruktansvärd handling. Detta är något som rollpersonen mår mycket dåligt över än i denna dag och antingen försöker hålla hemligt eller skäms över. Exakt vad det är får spelaren bestämma men det är något som får rollpersonen att känna stor skuld och denne skulle göra vad som helst för att kunna få det hela ogjort."
	handelsetabeller.striderdrabbningar[25].beskrivninghak = "2 Avtrubbningskryss för utsatthet"
	handelsetabeller.striderdrabbningar[25].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[25].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[25].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[25].subval[0][0][0].ovrigt="Har begått en fruktansvärd handling."
	handelsetabeller.striderdrabbningar[25].subval[0][0][0].avtrubbningutsatthet = 2; 

	handelsetabeller.striderdrabbningar[26] = {}; 
	handelsetabeller.striderdrabbningar[26].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[26].vald = 0; 
	handelsetabeller.striderdrabbningar[26].rubrik = "Fånge"
	handelsetabeller.striderdrabbningar[26].beskrivning = "Rollpersonen har blivit infångad och hållts fängslad. Kanske för att användas till grovarbete eller så satt denne bara djupt i en fängelsehåla under veckor, månader eller kanske till och med år. Personen lärde sig under denna tid känna andra medfångar. "
	handelsetabeller.striderdrabbningar[26].beskrivningvaldbas = "Rollpersonen har blivit infångad och hållts fängslad. Kanske för att användas till grovarbete eller så satt denne bara djupt i en fängelsehåla under veckor, månader eller kanske till och med år. ";
	
	handelsetabeller.striderdrabbningar[26].beskrivninghak = "1 poäng Expertiser. Slå två gånger på bakgrundstabellen och välj en som visar vem en medfånge numera är. Denna kan personen etablera i spel så länge spelledaren finner det lämpligt"
	handelsetabeller.striderdrabbningar[26].beskrivninghakvaldbas = "1 poäng Expertiser. ";
	
	handelsetabeller.striderdrabbningar[26].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[26].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[26].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[26].subval[0][0][0].expertispoang=1; 
	handelsetabeller.striderdrabbningar[26].subval[0][0][0].ovrigtbas="Har hållts som fånge tillsammans med kontakt1_obestamd."
	handelsetabeller.striderdrabbningar[26].subval[0][0][0].kontaktbas="Har haft kontakt1_obestamd som medfånge.";
	handelsetabeller.striderdrabbningar[26].subval[0][0][0].beskrivningvaldbas="Personen lärde sig under denna tid känna andra medfångar, däribland kontakt1_obestamd.";
	handelsetabeller.striderdrabbningar[26].subval[0][0][0].kontaktenhetbool=[0];

	
	handelsetabeller.striderdrabbningar[27] = {}; 
	handelsetabeller.striderdrabbningar[27].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[27].vald = 0; 
	handelsetabeller.striderdrabbningar[27].rubrik = "Förlorat vapenbröder"
	handelsetabeller.striderdrabbningar[27].beskrivning = "Kamrater har dött i en strid och personen försökte rädda dem men kunde inte. Detta har satt sina tydliga spår."
	handelsetabeller.striderdrabbningar[27].beskrivninghak = "1 Avtrubbningskryss för både utsatthet och våld"
	handelsetabeller.striderdrabbningar[27].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[27].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[27].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[27].subval[0][0][0].avtrubbningutsatthet=1;
	handelsetabeller.striderdrabbningar[27].subval[0][0][0].avtrubbningvald=1;
	handelsetabeller.striderdrabbningar[27].subval[0][0][0].ovrigt="Förlorat kamrater i strid."
	
	handelsetabeller.striderdrabbningar[28] = {}; 
	handelsetabeller.striderdrabbningar[28].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[28].vald = 0; 
	handelsetabeller.striderdrabbningar[28].rubrik = "Förnedrat furste"
	handelsetabeller.striderdrabbningar[28].beskrivning = "Rollpersonen har råkat förnedra en furste eller annan högt uppsatt person och denne har nu svurit att fånga rollpersonen och se till att denne blir avrättad på det mest groteska sätt. Rollpersonen har fått ett pris på sitt huvud. Vem fursten är och vad som hände är upp till spelaren och spelledaren."
	handelsetabeller.striderdrabbningar[28].beskrivninghak = "3 enheter Rörelsefärdigheter, 3 enheter Vildmarksfärdigheter. Dessutom har rollpersonen ett pris på 500 silver på sitt huvud"
	handelsetabeller.striderdrabbningar[28].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[28].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[28].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[28].subval[0][0][0].rorelsefardigheterenheter = 3; 
	handelsetabeller.striderdrabbningar[28].subval[0][0][0].vildmarksfardigheterenheter = 3; 
	handelsetabeller.striderdrabbningar[28].subval[0][0][0].ovrigt="Har förnedrat en högt uppsatt person och har därför ett pris på 500 silver på sitt huvud.";

	handelsetabeller.striderdrabbningar[29] = {}; 
	handelsetabeller.striderdrabbningar[29].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[29].vald = 0; 
	handelsetabeller.striderdrabbningar[29].rubrik = "Förutse motståndarens drag"
	handelsetabeller.striderdrabbningar[29].beskrivning = "Rollpersonen har blivit tränad i en stridskonst och kan förutse sin motståndares drag i strid."
	handelsetabeller.striderdrabbningar[29].beskrivninghak = "När rollpersonen vinner ett motståndsslag i strid kan denne spendera 2 Fokus för att få 1 extra Övertag"
	handelsetabeller.striderdrabbningar[29].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[29].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[29].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[29].subval[0][0][0].formaga="När rollpersonen vinner ett motståndsslag i strid kan denne spendera 2 Fokus för att få 1 extra Övertag";
	
	handelsetabeller.striderdrabbningar[30] = {}; 
	handelsetabeller.striderdrabbningar[30].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[30].vald = 0; 
	handelsetabeller.striderdrabbningar[30].rubrik = "Genialisk taktisk manöver"
	handelsetabeller.striderdrabbningar[30].beskrivning = "Rollpersonen har under en strid utfört en genial taktisk manöver som gav denne segern. Rollpersonen har efter detta studerat taktik och strategi för att bättre kunna förutse motståndarnas agerande."
	handelsetabeller.striderdrabbningar[30].beskrivninghak = "Lättlärd i Krigföring. 3 enheter Kunskapsfärdigheter"
	handelsetabeller.striderdrabbningar[30].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[30].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[30].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[30].subval[0][0][0].kunskapsfardigheterenheter = 3; 
	handelsetabeller.striderdrabbningar[30].subval[0][0][0].krigforing = {};
	handelsetabeller.striderdrabbningar[30].subval[0][0][0].krigforing.lattlard=1; 
	handelsetabeller.striderdrabbningar[30].subval[0][0][0].ovrigt="Har under en strid utfört en genial taktisk manöver som gav denne segern.";

	handelsetabeller.striderdrabbningar[31] = {}; 
	handelsetabeller.striderdrabbningar[31].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[31].vald = 0; 
	handelsetabeller.striderdrabbningar[31].rubrik = "Ger inte upp"
	handelsetabeller.striderdrabbningar[31].beskrivning = "Rollpersonen ger inte upp även om denne blir svårt skadad."
	handelsetabeller.striderdrabbningar[31].beskrivninghak = "Alla avdrag från Smärta minskar med 1T6"
	handelsetabeller.striderdrabbningar[31].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[31].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[31].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[31].subval[0][0][0].formaga="Alla avdrag från Smärta minskar med 1T6";

	handelsetabeller.striderdrabbningar[32] = {}; 
	handelsetabeller.striderdrabbningar[32].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[32].vald = 0; 
	handelsetabeller.striderdrabbningar[32].rubrik = "Gladiatorkamp"
	handelsetabeller.striderdrabbningar[32].beskrivning = "Rollpersonen har spenderat en tid som gladiator. Detta kan antingen röra sig om ett straff eller så har denne valt detta själv för att vinna ära och rikedom. Rollpersonen har lärt sig att det är viktigt att vinna publikens gillande och kämpa på ett sätt som är dramatiskt och nyskapande."
	handelsetabeller.striderdrabbningar[32].beskrivninghak = "\+2 Intryck. 3 enheter Stridsfärdigheter"
	handelsetabeller.striderdrabbningar[32].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[32].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[32].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[32].subval[0][0][0].stridsfardigheterenheter = 3; 
	handelsetabeller.striderdrabbningar[32].subval[0][0][0].intryck = {};
	handelsetabeller.striderdrabbningar[32].subval[0][0][0].intryck.bonus =2; 
	handelsetabeller.striderdrabbningar[32].subval[0][0][0].ovrigt="Har spenderat en tid som gladiator.";

	handelsetabeller.striderdrabbningar[33] = {}; 
	handelsetabeller.striderdrabbningar[33].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[33].vald = 0; 
	handelsetabeller.striderdrabbningar[33].rubrik = "God kondition"
	handelsetabeller.striderdrabbningar[33].beskrivning = "Personen har mycket god kondition och resistens gentemot yttre påfrestningar."
	handelsetabeller.striderdrabbningar[33].beskrivninghak = "\+1T6 Tålighet"
	handelsetabeller.striderdrabbningar[33].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[33].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[33].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[33].subval[0][0][0].talighet = {};
	handelsetabeller.striderdrabbningar[33].subval[0][0][0].talighet.varde = 4; 

	handelsetabeller.striderdrabbningar[34] = {}; 
	handelsetabeller.striderdrabbningar[34].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[34].vald = 0; 
	handelsetabeller.striderdrabbningar[34].rubrik = "Hederskodex"
	handelsetabeller.striderdrabbningar[34].beskrivning = "Rollpersonen har en hederskodex som styr dennes liv. Detta kan röra sig om att inte skada kvinnor, dräpa en obeväpnad motståndare, aldrig ta en levande fånge, bryta en ed och så vidare."
	handelsetabeller.striderdrabbningar[34].beskrivninghak = "\+3 Vilja. Ett av karaktärsdragen måste vara kopplad till denna hederskodex. Karaktärsdraget är dessutom Låst. Försvinner det så försvinner hederskodexen"
	handelsetabeller.striderdrabbningar[34].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[34].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[34].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[34].subval[0][0][0].vilja = {};
	handelsetabeller.striderdrabbningar[34].subval[0][0][0].vilja.varde =3; 
	handelsetabeller.striderdrabbningar[34].subval[0][0][0].karaktarsdrag="Har en hederskodex som styr dennes liv. Ett av karaktärsdragen måste vara kopplad till dennes hederskodex. Karaktärsdraget är dessutom Låst. Försvinner det så försvinner hederskodexen."

	handelsetabeller.striderdrabbningar[35] = {}; 
	handelsetabeller.striderdrabbningar[35].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[35].vald = 0; 
	handelsetabeller.striderdrabbningar[35].rubrik = "Helare"
	handelsetabeller.striderdrabbningar[35].beskrivning = "Rollpersonen har tagit hand om sårade."
	handelsetabeller.striderdrabbningar[35].beskrivninghak = "Lättlärd i Läkekonst. 2 enheter Kunskapsfärdigheter"
	handelsetabeller.striderdrabbningar[35].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[35].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[35].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[35].subval[0][0][0].kunskapsfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[35].subval[0][0][0].lakekonst = {};
	handelsetabeller.striderdrabbningar[35].subval[0][0][0].lakekonst.lattlard=1; 
	handelsetabeller.striderdrabbningar[35].subval[0][0][0].ovrigt="Har tagit hand om sårade.";

	handelsetabeller.striderdrabbningar[36] = {}; 
	handelsetabeller.striderdrabbningar[36].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[36].vald = 0; 
	handelsetabeller.striderdrabbningar[36].rubrik = "Hemsökt av gast"
	handelsetabeller.striderdrabbningar[36].beskrivning = "Rollpersonen har dräpt en person och av någon anledning har dess ande dröjt sig kvar i världen och uppenbarar sig då och då för rollpersonen i drömmar, syner eller när denne är ensam. Gasten plågar rollpersonen och vill att denne ska återbetala sin skuld genom ett utföra tre uppgifter (som spelledaren bestämmer). Vem det var som rollpersonen dödade som dröjde sig kvar som gast kan vara viktigt att avgöra."
	handelsetabeller.striderdrabbningar[36].beskrivningvaldbas = "";
	handelsetabeller.striderdrabbningar[36].beskrivninghak = "Lättlärd i Ockultism. 2 enheter Kunskapsfärdigheter. 2 Avtrubbningskryss för övernaturligt. Slå två gånger på bakgrundstabellen och välj en som visar vem den döde var"
	handelsetabeller.striderdrabbningar[36].beskrivninghakvaldbas = "Lättlärd i Ockultism. 2 enheter Kunskapsfärdigheter. 2 Avtrubbningskryss för övernaturligt. ";
	
	handelsetabeller.striderdrabbningar[36].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[36].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[36].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[36].subval[0][0][0].ockultism = {};
	handelsetabeller.striderdrabbningar[36].subval[0][0][0].ockultism.lattlard=1;
	handelsetabeller.striderdrabbningar[36].subval[0][0][0].kunskapsfardigheterenheter=2;
	handelsetabeller.striderdrabbningar[36].subval[0][0][0].avtrubbningovernaturligt=2;
	handelsetabeller.striderdrabbningar[36].subval[0][0][0].beskrivningvaldbas = "Rollpersonen har dräpt kontakt1_obestamd och av någon anledning har dennes ande dröjt sig kvar i världen och uppenbarar sig då och då för rollpersonen i drömmar, syner eller när denne är ensam. Gasten plågar rollpersonen och vill att denne ska återbetala sin skuld genom ett utföra tre uppgifter (som spelledaren bestämmer). Vem det var som rollpersonen dödade som dröjde sig kvar som gast kan vara viktigt att avgöra. "
	
	handelsetabeller.striderdrabbningar[36].subval[0][0][0].kontaktbas="Har dräpt kontakt1_obestamd som sen hemsökt rollpersonen för att få denne att utföra tre uppgifter och på så vis återbetala sin skuld.";
	handelsetabeller.striderdrabbningar[36].subval[0][0][0].kontaktenhetbool=[0];
	 

	handelsetabeller.striderdrabbningar[37] = {}; 
	handelsetabeller.striderdrabbningar[37].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[37].vald = 0; 
	handelsetabeller.striderdrabbningar[37].rubrik = "Hårdhudad"
	handelsetabeller.striderdrabbningar[37].beskrivning = "Rollpersonen klarar av att ta stryk och ignorerar de flesta mindre skador med en axelryckning."
	handelsetabeller.striderdrabbningar[37].beskrivninghak = "\+2 Grundrustning. \+2T6 på alla amputations- och brytriskslag"
	handelsetabeller.striderdrabbningar[37].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[37].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[37].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[37].subval[0][0][0].grundrustning = {};
	handelsetabeller.striderdrabbningar[37].subval[0][0][0].grundrustning.bonus =2; 
	handelsetabeller.striderdrabbningar[37].subval[0][0][0].formaga="\+2T6 på alla amputations- och brytriskslag";

	handelsetabeller.striderdrabbningar[38] = {}; 
	handelsetabeller.striderdrabbningar[38].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[38].vald = 0; 
	handelsetabeller.striderdrabbningar[38].rubrik = "Kastmästare"
	handelsetabeller.striderdrabbningar[38].beskrivning = "Rollpersonen är mycket skicklig att bruka kastvapen."
	handelsetabeller.striderdrabbningar[38].beskrivninghak = "Lättlärd i Kastvapen. Alla kastvapen gör \+2T6 skada för rollpersonen"
	handelsetabeller.striderdrabbningar[38].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[38].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[38].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[38].subval[0][0][0].kastvapen = {};
	handelsetabeller.striderdrabbningar[38].subval[0][0][0].kastvapen.lattlard=1; 
	handelsetabeller.striderdrabbningar[38].subval[0][0][0].formaga="Alla kastvapen gör \+2T6 skada för rollpersonen.";

	handelsetabeller.striderdrabbningar[39] = {}; 
	handelsetabeller.striderdrabbningar[39].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[39].vald = 0; 
	handelsetabeller.striderdrabbningar[39].rubrik = "Kontakt med makterna"
	handelsetabeller.striderdrabbningar[39].beskrivning = "Rollpersonen har företagit en resa med en präst eller tillbringat en tid i ett kloster och blivit undervisad i de övernaturliga makter som styr världen. Rollpersonen har en respekt inför dessa och känner att de är med denne i stridens hetta om denne blidkat dem. Om rollpersonen hinner be en bön eller förrätta ett enkelt offer innan striden (tar cirka fem minuter) så känner rollpersonen sig stark inför drabbningen."
	handelsetabeller.striderdrabbningar[39].beskrivninghak = "Om bönen/offret skett och Fokus används under striden så får denne ytterligare \+1T6 bonus. Så fort striden är över så försvinner denna egenskap"
	handelsetabeller.striderdrabbningar[39].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[39].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[39].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[39].subval[0][0][0].ovrigt="Har företagit en resa med en präst eller tillbringat en tid i ett kloster.";
	handelsetabeller.striderdrabbningar[39].subval[0][0][0].formaga="Om rollpersonen hinner be en bön eller förrätta ett enkelt offer innan en strid (tar cirka fem minuter) får rollpersonen ytterligare \+1T6 bonus om denne använder Fokus under striden.";

	handelsetabeller.striderdrabbningar[40] = {}; 
	handelsetabeller.striderdrabbningar[40].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[40].vald = 0; 
	handelsetabeller.striderdrabbningar[40].rubrik = "Kraftigt byggd"
	handelsetabeller.striderdrabbningar[40].beskrivning = "Rollpersonen har kraftig kroppsbyggnad och kan därmed hantera större vapen."
	handelsetabeller.striderdrabbningar[40].beskrivninghak = "\+1T6 Kroppsbyggnad"
	handelsetabeller.striderdrabbningar[40].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[40].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[40].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[40].subval[0][0][0].kroppsbyggnad = {};
	handelsetabeller.striderdrabbningar[40].subval[0][0][0].kroppsbyggnad.bonus = 4; 

	handelsetabeller.striderdrabbningar[41] = {}; 
	handelsetabeller.striderdrabbningar[41].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[41].vald = 0; 
	handelsetabeller.striderdrabbningar[41].rubrik = "Krigsskada"
	handelsetabeller.striderdrabbningar[41].beskrivning = "Personen har fått sin kropp sargad och någonstans på kroppen finns det ett stort ärr som talar sitt tydliga språk."
	handelsetabeller.striderdrabbningar[41].beskrivninghak = "Välj mellan –2 Tålighet och –2 Rörlighet. \+1T6 Vilja. Kännetecknet Ärr 4T6"
	handelsetabeller.striderdrabbningar[41].beskrivninghakvaldbas = "Kännetecknet Ärr 4T6. \+1T6 Vilja. "
	
	handelsetabeller.striderdrabbningar[41].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[41].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[41].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[41].subval[0][0][0].vilja = {};
	handelsetabeller.striderdrabbningar[41].subval[0][0][0].vilja.varde=4;
	handelsetabeller.striderdrabbningar[41].subval[0][0][0].arr = {};
	handelsetabeller.striderdrabbningar[41].subval[0][0][0].arr.enheter=3;
	
	handelsetabeller.striderdrabbningar[41].subval[0].push([]);
	handelsetabeller.striderdrabbningar[41].subval[0][1][0] = {}; 
	handelsetabeller.striderdrabbningar[41].subval[0][1][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[41].subval[0][1][0].vald = 0; 
	handelsetabeller.striderdrabbningar[41].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.striderdrabbningar[41].subval[0][1][1] = {}; 
	handelsetabeller.striderdrabbningar[41].subval[0][1][1].valdasub = []; 
	handelsetabeller.striderdrabbningar[41].subval[0][1][1].vald = 0; 
	handelsetabeller.striderdrabbningar[41].subval[0][1][1].rubrik="-2 Tålighet";
	handelsetabeller.striderdrabbningar[41].subval[0][1][1].beskrivninghakvaldbas="-2 Tålighet. ";
	
	handelsetabeller.striderdrabbningar[41].subval[0][1][1].talighet = {};
	handelsetabeller.striderdrabbningar[41].subval[0][1][1].talighet.varde=-2;
	
	handelsetabeller.striderdrabbningar[41].subval[0][1][2] = {}; 
	handelsetabeller.striderdrabbningar[41].subval[0][1][2].valdasub = []; 
	handelsetabeller.striderdrabbningar[41].subval[0][1][2].vald = 0; 
	handelsetabeller.striderdrabbningar[41].subval[0][1][2].rubrik="-2 Rörlighet";
	handelsetabeller.striderdrabbningar[41].subval[0][1][2].beskrivninhakvald="-2 Rörlighet. ";
	
	handelsetabeller.striderdrabbningar[41].subval[0][1][2].rorlighet = {};
	handelsetabeller.striderdrabbningar[41].subval[0][1][2].rorlighet.varde=-2;
	

	handelsetabeller.striderdrabbningar[42] = {}; 
	handelsetabeller.striderdrabbningar[42].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[42].vald = 0; 
	handelsetabeller.striderdrabbningar[42].rubrik = "Kurirryttare"
	handelsetabeller.striderdrabbningar[42].beskrivning = "Rollpersonen har under en tid fraktat viktiga meddelanden på förseglade dokument mellan uppsatta herrar och härförare. Detta har gett rollpersonen stor vana på hästryggen samt vilka vägar man ska välja för att ta sig fram på snabbast möjliga sätt."
	handelsetabeller.striderdrabbningar[42].beskrivninghak = "\+2 Tålighet. Lättlärd i Rida och Geografi"
	handelsetabeller.striderdrabbningar[42].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[42].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[42].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[42].subval[0][0][0].rida = {};
	handelsetabeller.striderdrabbningar[42].subval[0][0][0].rida.lattlard=1; 
	handelsetabeller.striderdrabbningar[42].subval[0][0][0].geografi = {};
	handelsetabeller.striderdrabbningar[42].subval[0][0][0].geografi.lattlard=1; 
	handelsetabeller.striderdrabbningar[42].subval[0][0][0].talighet = {};
	handelsetabeller.striderdrabbningar[42].subval[0][0][0].talighet.varde =2; 
	handelsetabeller.striderdrabbningar[42].subval[0][0][0].ovrigt="Har under en tid fraktat viktiga meddelanden på förseglade dokument mellan uppsatta herrar och härförare.";

	handelsetabeller.striderdrabbningar[43] = {}; 
	handelsetabeller.striderdrabbningar[43].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[43].vald = 0; 
	handelsetabeller.striderdrabbningar[43].rubrik = "Kännedom om nervpunkter"
	handelsetabeller.striderdrabbningar[43].beskrivning = "Personen vet exakt var man ska slå med staven för att åsamka stark smärta och stor skada i närstrid."
	handelsetabeller.striderdrabbningar[43].beskrivninghak = "Lättlärd i Stav. Alla stavar gör \+1T6 skada för rollpersonen"
	handelsetabeller.striderdrabbningar[43].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[43].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[43].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[43].subval[0][0][0].stav = {};
	handelsetabeller.striderdrabbningar[43].subval[0][0][0].stav.lattlard=1; 
	handelsetabeller.striderdrabbningar[43].subval[0][0][0].formaga="Alla stavar gör \+1T6 skada";

	handelsetabeller.striderdrabbningar[44] = {}; 
	handelsetabeller.striderdrabbningar[44].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[44].vald = 0; 
	handelsetabeller.striderdrabbningar[44].rubrik = "Lett räd"
	handelsetabeller.striderdrabbningar[44].beskrivning = "Rollpersonen har deltagit i en väpnad räd och nedgjort en överväldigande mängd fiender innan de visste vad som var på gång. Rollpersonen lärde sig både taktik och vikten av disciplin under denna korta men blodiga drabbning."
	handelsetabeller.striderdrabbningar[44].beskrivninghak = "Lättlärd i Krigföring och Ledarskap"
	handelsetabeller.striderdrabbningar[44].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[44].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[44].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[44].subval[0][0][0].krigforing = {};
	handelsetabeller.striderdrabbningar[44].subval[0][0][0].krigforing.lattlard=1; 
	handelsetabeller.striderdrabbningar[44].subval[0][0][0].ledarskap = {};
	handelsetabeller.striderdrabbningar[44].subval[0][0][0].ledarskap.lattlard=1; 
	handelsetabeller.striderdrabbningar[44].subval[0][0][0].ovrigt="Har deltagit i en väpnad räd och nedgjort en överväldigande mängd fiender.";

	handelsetabeller.striderdrabbningar[45] = {}; 
	handelsetabeller.striderdrabbningar[45].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[45].vald = 0; 
	handelsetabeller.striderdrabbningar[45].rubrik = "Levande vapen"
	handelsetabeller.striderdrabbningar[45].beskrivning = "Rollpersonen är ett levande vapen och vet instinktivt hur man orsakar mest skada på sina motståndare när denne är obeväpnad. I närstrid kan denne bryta ben, krossa näsor och slå sönder bröstkorgen. Detta kanske är snabba smidiga manövrer eller ett våldsamt ursinne."
	handelsetabeller.striderdrabbningar[45].beskrivninghak = "Lättlärd i Slagsmål. Alla obeväpnade och naturliga anfall gör \+2T6 skada för rollpersonen"
	handelsetabeller.striderdrabbningar[45].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[45].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[45].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[45].subval[0][0][0].slagsmal = {};
	handelsetabeller.striderdrabbningar[45].subval[0][0][0].slagsmal.lattlard=1; 
	handelsetabeller.striderdrabbningar[45].subval[0][0][0].formaga="Alla obeväpnade och naturliga anfall gör \+2T6 skada"; 

	
	handelsetabeller.striderdrabbningar[46] = {}; 
	handelsetabeller.striderdrabbningar[46].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[46].vald = 0; 
	handelsetabeller.striderdrabbningar[46].rubrik = "Livvakt åt befälhavare"
	handelsetabeller.striderdrabbningar[46].beskrivning = "Rollpersonen har varit livvakt åt någon typ av befälhavare och har under tiden som livvakt hunnit lära sig både ett och annat bara genom att lyssna och iaktta."
	handelsetabeller.striderdrabbningar[46].beskrivninghak = "4 enheter Kunskapsfärdigheter. ";
	handelsetabeller.striderdrabbningar[46].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[46].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[46].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[46].subval[0][0][0].kunskapsfardigheterenheter = 4; 
	handelsetabeller.striderdrabbningar[46].subval[0][0][0].kontakt="Har varit livvakt åt en befälhavare.";

	handelsetabeller.striderdrabbningar[47] = {}; 
	handelsetabeller.striderdrabbningar[47].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[47].vald = 0; 
	handelsetabeller.striderdrabbningar[47].rubrik = "Lång resa"
	handelsetabeller.striderdrabbningar[47].beskrivning = "Personen har företagit en lång resa, en stor del av denna har varit till fots."
	handelsetabeller.striderdrabbningar[47].beskrivninghak = "\+2 Tålighet. Lättlärd i Marsch. ";
	handelsetabeller.striderdrabbningar[47].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[47].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[47].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[47].subval[0][0][0].marsch = {};
	handelsetabeller.striderdrabbningar[47].subval[0][0][0].marsch.lattlard=1; 
	handelsetabeller.striderdrabbningar[47].subval[0][0][0].talighet = {};
	handelsetabeller.striderdrabbningar[47].subval[0][0][0].talighet.varde =2; 
	handelsetabeller.striderdrabbningar[47].subval[0][0][0].ovrigt="Har företagit en lång resa, varav en stor del till fots.";

	handelsetabeller.striderdrabbningar[48] = {}; 
	handelsetabeller.striderdrabbningar[48].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[48].vald = 0; 
	handelsetabeller.striderdrabbningar[48].rubrik = "Läkekött"
	handelsetabeller.striderdrabbningar[48].beskrivning = "Rollpersonen har mycket gott läkekött. ";
	handelsetabeller.striderdrabbningar[48].beskrivninghak = "Läkningstakten ökar med 1, vilket innebär att rollpersonen läker de flesta skador dubbelt så fort. ";
	handelsetabeller.striderdrabbningar[48].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[48].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[48].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[48].subval[0][0][0].lakningstakt = {};
	handelsetabeller.striderdrabbningar[48].subval[0][0][0].lakningstakt.bonus=1;; 

	
	handelsetabeller.striderdrabbningar[49] = {}; 
	handelsetabeller.striderdrabbningar[49].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[49].vald = 0; 
	handelsetabeller.striderdrabbningar[49].rubrik = "Läser av motståndaren"
	handelsetabeller.striderdrabbningar[49].beskrivning = "Rollpersonen har lärt sig att läsa av motståndaren och situationen och agerar allt som oftast först då det blir stridigheter."
	handelsetabeller.striderdrabbningar[49].beskrivninghak = "\+1T6 Reaktion"
	handelsetabeller.striderdrabbningar[49].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[49].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[49].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[49].subval[0][0][0].reaktion = {};
	handelsetabeller.striderdrabbningar[49].subval[0][0][0].reaktion.bonus = 4; 

	handelsetabeller.striderdrabbningar[50] = {}; 
	handelsetabeller.striderdrabbningar[50].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[50].vald = 0; 
	handelsetabeller.striderdrabbningar[50].rubrik = "Lätt beväpning"
	handelsetabeller.striderdrabbningar[50].beskrivning = "Rollpersonen har ett vanligt vapen såsom en dolk, några kastknivar, eller en kortbåge och ett koger med pilar. Personen har dessutom tränat i att använda detta vapen.";
	handelsetabeller.striderdrabbningar[50].beskrivningvaldbas = ""; 
	handelsetabeller.striderdrabbningar[50].beskrivninghak = "\+2 Rörlighet. Lättlärd i den aktuella stridsfärdigheten. Rollpersonen får ett vapen (eller tre om det är ett kastvapen) av denna typ vars kvalité gör att skadan ökar med \+2"
	handelsetabeller.striderdrabbningar[50].beskrivninghakvaldbas = "\+2 Rörlighet. ";
	
	handelsetabeller.striderdrabbningar[50].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[50].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[50].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[50].subval[0][0][0].rorlighet = {};
	handelsetabeller.striderdrabbningar[50].subval[0][0][0].rorlighet.varde=2;
	handelsetabeller.striderdrabbningar[50].subval[0][0][0] = {};
	
	
	handelsetabeller.striderdrabbningar[50].subval[0].push([]);
	
	handelsetabeller.striderdrabbningar[50].subval[0][1][0] = {}; 
	handelsetabeller.striderdrabbningar[50].subval[0][1][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[50].subval[0][1][0].vald = 0; 
	handelsetabeller.striderdrabbningar[50].subval[0][1][0].antalsubval=1; 
	
	handelsetabeller.striderdrabbningar[50].subval[0][1][1] = {}; 
	handelsetabeller.striderdrabbningar[50].subval[0][1][1].valdasub = []; 
	handelsetabeller.striderdrabbningar[50].subval[0][1][1].vald = 0; 
	handelsetabeller.striderdrabbningar[50].subval[0][1][1].rubrik="Närstrids- eller skjutvapen";
	
	handelsetabeller.striderdrabbningar[50].subval[0][1][1].beskrivning="Ett närstrids- eller skjutvapen knutet till rollpersonens lättlärda stridsfärdighet, med skada \+2";
	handelsetabeller.striderdrabbningar[50].subval[0][1][1].vapen="Ett vapen knutet till rollpersonens lättlärda stridsfärdighet, med skada \+2";
	handelsetabeller.striderdrabbningar[50].subval[0][1][1].beskrivningvaldbas= "Rollpersonen har ett vanligt vapen såsom en dolk eller en kortbåge och ett koger med pilar. Personen har dessutom tränat i att använda detta vapen.";
	handelsetabeller.striderdrabbningar[50].subval[0][1][1].beskrivninghakvaldbas = "Lättlärd i den aktuella stridsfärdigheten. Rollpersonen får ett vapen av denna typ vars kvalité gör att skadan ökar med \+2. ";
	handelsetabeller.striderdrabbningar[50].subval[0][1][1].lattlardstridsfardigheter=1;
	
	handelsetabeller.striderdrabbningar[50].subval[0][1][2] = {}; 
	handelsetabeller.striderdrabbningar[50].subval[0][1][2].valdasub = []; 
	handelsetabeller.striderdrabbningar[50].subval[0][1][2].vald = 0; 
	handelsetabeller.striderdrabbningar[50].subval[0][1][2].rubrik="Kastvapen";
	
	handelsetabeller.striderdrabbningar[50].subval[0][1][2].beskrivning="Tre kastvapen med skada \+2. ";
	handelsetabeller.striderdrabbningar[50].subval[0][1][2].vapen="Tre kastvapen med skada \+2. ";
	handelsetabeller.striderdrabbningar[50].subval[0][1][2].beskrivningvaldbas= "Rollpersonen har ett vanliga kastvapen såsom kastknivar eller kastspjut. Personen har dessutom tränat i att använda dessa vapen.";
	handelsetabeller.striderdrabbningar[50].subval[0][1][2].beskrivninghakvaldbas= "Lättlärd i Kastvapen. Rollpersonen får tre kastvapen vars kvalité gör att skadan ökar med \+2. ";
	handelsetabeller.striderdrabbningar[50].subval[0][1][2].kastvapen={};
	handelsetabeller.striderdrabbningar[50].subval[0][1][2].kastvapen.lattlard=1;
	
	
	

	handelsetabeller.striderdrabbningar[51] = {}; 
	handelsetabeller.striderdrabbningar[51].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[51].vald = 0; 
	handelsetabeller.striderdrabbningar[51].rubrik = "Lätt rustad"
	handelsetabeller.striderdrabbningar[51].beskrivning = "Rollpersonen har kommit över en lätt rustning av god kvalité."
	handelsetabeller.striderdrabbningar[51].beskrivninghak = "\+3 Rörlighet. Rollpersonen har en valfri rustning i något av materialen härdat läder, nitläder eller ringläder. Denna rustning är av utmärkt kvalité vilket gör att dess Pansarvärde ökar med \+2"
	handelsetabeller.striderdrabbningar[51].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[51].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[51].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[51].subval[0][0][0].rorlighet = {};
	handelsetabeller.striderdrabbningar[51].subval[0][0][0].rorlighet.varde=3;
	handelsetabeller.striderdrabbningar[51].subval[0][0][0].rustning="En lätt rustning med \+2 i pansarvärden.";

	handelsetabeller.striderdrabbningar[52] = {}; 
	handelsetabeller.striderdrabbningar[52].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[52].vald = 0; 
	handelsetabeller.striderdrabbningar[52].rubrik = "Medeltung beväpning"
	handelsetabeller.striderdrabbningar[52].beskrivning = "Rollpersonen har ett ovanligt vapen, exempelvis stridssvärd, bredyxa eller liknande och vet hur man brukar detta. Vapnet är av utmärkt kvalité."
	handelsetabeller.striderdrabbningar[52].beskrivninghak = "\+2 Rörlighet. Lättlärd i den aktuella stridsfärdigheten. Rollpersonen får ett vapen av denna typ vars kvalité gör att skadan ökar med \+2"
	handelsetabeller.striderdrabbningar[52].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[52].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[52].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[52].subval[0][0][0].rorlighet = {};
	handelsetabeller.striderdrabbningar[52].subval[0][0][0].rorlighet.varde =2; 
	handelsetabeller.striderdrabbningar[52].subval[0][0][0] = {};
	handelsetabeller.striderdrabbningar[52].subval[0][0][0].lattlardstridsfardigheter=1;
	handelsetabeller.striderdrabbningar[52].subval[0][0][0].vapen="Ett ovanligt vapen knutet till rollpersonens lättlärda stridsfärdighet som har skada \+2";

	handelsetabeller.striderdrabbningar[53] = {}; 
	handelsetabeller.striderdrabbningar[53].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[53].vald = 0; 
	handelsetabeller.striderdrabbningar[53].rubrik = "Medeltungt rustad"
	handelsetabeller.striderdrabbningar[53].beskrivning = "Rollpersonen har kommit över en medeltung rustning av god kvalité."
	handelsetabeller.striderdrabbningar[53].beskrivninghak = "\+3 Tålighet. Rollpersonen har en valfri rustning i något av materialen ringbrynja, lamellpansar, fjällpansar eller tunnplåt. Denna rustning är av utmärkt kvalité vilket gör att dess Pansarvärde ökar med \+2"
	handelsetabeller.striderdrabbningar[53].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[53].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[53].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[53].subval[0][0][0].rustning="En medeltung rustning med \+2 i pansarvärden.";

	handelsetabeller.striderdrabbningar[54] = {}; 
	handelsetabeller.striderdrabbningar[54].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[54].vald = 0; 
	handelsetabeller.striderdrabbningar[54].rubrik = "Mirakulös uthållighet"
	handelsetabeller.striderdrabbningar[54].beskrivning = "Rollpersonens kropp har en mirakulös förmåga att återhämta sig både från infektioner, blödning och inre skador."
	handelsetabeller.striderdrabbningar[54].beskrivninghak = "\+1T6 Livskraft vid Infektionsslag och Blödningsslag. Om rollpersonen får en Inre skada får denne slå två slag på tabellen och välja det lägsta resultatet varje gång"
	handelsetabeller.striderdrabbningar[54].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[54].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[54].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[54].subval[0][0][0].livskraft = {};
	handelsetabeller.striderdrabbningar[54].subval[0][0][0].livskraft.egenskap="\+1T6 vid Infektionsslag" + "\n" + "\+1T6 vid Blödningsslag";
	handelsetabeller.striderdrabbningar[54].subval[0][0][0].formaga="Om rollpersonen får en Inre skada får denne slå två slag på tabellen och välja det lägsta resultatet varje gång";
	

	handelsetabeller.striderdrabbningar[55] = {}; 
	handelsetabeller.striderdrabbningar[55].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[55].vald = 0; 
	handelsetabeller.striderdrabbningar[55].rubrik = "Misshandlad och förnedrad"
	handelsetabeller.striderdrabbningar[55].beskrivning = "Rollpersonen har blivit misshandlad och förnedrad inför folk och många pratar om detta när inte rollpersonen hör. Exakt vem eller vilka som gjorde detta och varför får spelaren komma fram till. Hur som helst har rollpersonen svurit att detta aldrig ska hända igen."
	handelsetabeller.striderdrabbningar[55].beskrivninghak = "3 enheter Stridsfärdigheter. 1 Avtrubbningskryss vardera för både utsatthet och våld"
	handelsetabeller.striderdrabbningar[55].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[55].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[55].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[55].subval[0][0][0].stridsfardigheterenheter = 3; 
	handelsetabeller.striderdrabbningar[55].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.striderdrabbningar[55].subval[0][0][0].avtrubbningutsatthet = 1;
	handelsetabeller.striderdrabbningar[55].subval[0][0][0].ovrigt="Har blivit misshandlad och förnedrad.";
	
	

	handelsetabeller.striderdrabbningar[56] = {}; 
	handelsetabeller.striderdrabbningar[56].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[56].vald = 0; 
	handelsetabeller.striderdrabbningar[56].rubrik = "Många liv på sitt samvete"
	handelsetabeller.striderdrabbningar[56].beskrivning = "Rollpersonen har många liv på sitt samvete och detta har gjort denne både känslokall och hjärtlös. Dessutom är denne känd för sin grymhet. Rollpersonen har en fiende som svurit att hämnas och som är på jakt efter denne. Fienden kommer inte att attackera rollpersonen rätt på utan vänta på rätt ögonblick och sparka undan benen för denne. "
	handelsetabeller.striderdrabbningar[56].beskrivningvaldbas = "Rollpersonen har många liv på sitt samvete och detta har gjort denne både känslokall och hjärtlös. Dessutom är denne känd för sin grymhet. ";
	
	handelsetabeller.striderdrabbningar[56].beskrivninghak = "2 Avtrubbningskryss för våld. Slå två gånger på bakgrundstabellen och välj en som visar vem fienden är"
	handelsetabeller.striderdrabbningar[56].beskrivninghakvaldbas = "2 Avtrubbningskryss för våld. ";
	handelsetabeller.striderdrabbningar[56].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[56].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[56].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[56].subval[0][0][0].avtrubbningvald=2;
	handelsetabeller.striderdrabbningar[56].subval[0][0][0].ovrigt="Har många liv på sitt samvete";
	handelsetabeller.striderdrabbningar[56].subval[0][0][0].kontaktbas="kontakt1_Obestamd är rollpersonens fiende och har lovat att hämnas.";
	handelsetabeller.striderdrabbningar[56].subval[0][0][0].kontaktenhetbool=[0];
	handelsetabeller.striderdrabbningar[56].subval[0][0][0].beskrivningvaldbas= "Rollpersonen har en fiende i form av kontakt1_obestamd som svurit att hämnas och som är på jakt efter denne. Fienden kommer inte att attackera rollpersonen rätt på utan vänta på rätt ögonblick och sparka undan benen för denne. ";
	
	handelsetabeller.striderdrabbningar[57] = {}; 
	handelsetabeller.striderdrabbningar[57].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[57].vald = 0; 
	handelsetabeller.striderdrabbningar[57].rubrik = "Mästersmitt vapen"
	handelsetabeller.striderdrabbningar[57].beskrivning = "Rollpersonen har kommit över ett mästersmitt vapen. Detta kan röra sig om ett arvegods, något som blivit plundrat eller skänkts som gåva. Vapnet är vackert och eftertraktat och har troligtvis både ett eget namn och en historia."
	handelsetabeller.striderdrabbningar[57].beskrivninghak = "Rollpersonen har från början ett närstridsvapen vars skada ökar med \+1T6 och som dessutom har vapenegenskapen Vådlig"
	handelsetabeller.striderdrabbningar[57].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[57].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[57].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[57].subval[0][0][0].vapen="Ett närstridsvapen vars skada ökar med \+1T6 och som dessutom har vapenegenskapen Vådlig.";

	
	handelsetabeller.striderdrabbningar[58] = {}; 
	handelsetabeller.striderdrabbningar[58].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[58].vald = 0; 
	handelsetabeller.striderdrabbningar[58].rubrik = "Mött rustningsmästare"
	handelsetabeller.striderdrabbningar[58].beskrivning = "Rollpersonen har mött en skicklig rustmästare som har konstruerat en helrustning till rollpersonen utefter dennes önskemål."
	handelsetabeller.striderdrabbningar[58].beskrivninghak = "Rollpersonen får en helrustning av valfri typ. Välj: Rustningens Belastning är 8 lägre än normalt eller så har den sitt Pansarvärde ökat med \+3"
	handelsetabeller.striderdrabbningar[58].beskrivninghakvaldbas = "Rollpersonen får en helrustning av valfri typ. ";
	
	handelsetabeller.striderdrabbningar[58].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[58].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[58].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[58].subval[0].push([]);
	handelsetabeller.striderdrabbningar[58].subval[0][1][0] = {}; 
	handelsetabeller.striderdrabbningar[58].subval[0][1][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[58].subval[0][1][0].vald = 0; 
	handelsetabeller.striderdrabbningar[58].subval[0][1][0].antalsubval=1; 
	
	handelsetabeller.striderdrabbningar[58].subval[0][1][1] = {};
	handelsetabeller.striderdrabbningar[58].subval[0][1][1].valdasub = [];
	handelsetabeller.striderdrabbningar[58].subval[0][1][1].vald = 0;
	handelsetabeller.striderdrabbningar[58].subval[0][1][1].rubrik="Rustningens belastning är 8 lägre än normalt";
	handelsetabeller.striderdrabbningar[58].subval[0][1][1].rustning="En helrustning vars belastning är 8 lägre än normalt";
	handelsetabeller.striderdrabbningar[58].subval[0][1][1].beskrivninghakvaldbas="Rustningens belastning är 8 lägre än normalt. ";
	
	handelsetabeller.striderdrabbningar[58].subval[0][1][2] = {}; 
	handelsetabeller.striderdrabbningar[58].subval[0][1][2].valdasub = []; 
	handelsetabeller.striderdrabbningar[58].subval[0][1][2].vald = 0; 
	handelsetabeller.striderdrabbningar[58].subval[0][1][2].rubrik="Rustningens pansarvärde är 2 högre än normalt";
	handelsetabeller.striderdrabbningar[58].subval[0][1][2].rustning="En helrustning med pansarvärden \+2.";
	handelsetabeller.striderdrabbningar[58].subval[0][1][2].beskrivninghakvaldbas="Rustningen har pansarvärden \+2. ";
	
	handelsetabeller.striderdrabbningar[59] = {}; 
	handelsetabeller.striderdrabbningar[59].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[59].vald = 0; 
	handelsetabeller.striderdrabbningar[59].rubrik = "Njuter av striden"
	handelsetabeller.striderdrabbningar[59].beskrivning = "Rollpersonen har funnit av att strida och dräpa sina motståndare. Kanske är detta en öppen passion eller en dold skam som plågar rollpersonens sinne. När strid utbryter har rollpersonen mycket svårt för att hålla igen sina anfall och det hela eskalerar snabbt till blodigt allvar."
	handelsetabeller.striderdrabbningar[59].beskrivninghak = "2 enheter Stridsfärdigheter. 1 Avtrubbningskryss för våld. Det sekundära karaktärsdraget är från början Kamp och är Låst"
	handelsetabeller.striderdrabbningar[59].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[59].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[59].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[59].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[59].subval[0][0][0].avtrubbningvald = 1; 
	handelsetabeller.striderdrabbningar[59].subval[0][0][0].karaktarsdrag="Det sekundära karaktärsdraget är från början Kamp och är Låst.";

	handelsetabeller.striderdrabbningar[60] = {}; 
	handelsetabeller.striderdrabbningar[60].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[60].vald = 0; 
	handelsetabeller.striderdrabbningar[60].rubrik = "Packåsna"
	handelsetabeller.striderdrabbningar[60].beskrivning = "Rollpersonen orkar bära betydligt mer än gemene man utan att bli uttröttad."
	handelsetabeller.striderdrabbningar[60].beskrivninghak = "\+1 Tålighet. När rollpersonen beräknar sin totala Belastning dras 8 ifrån värdet (som lägst 0)"
	handelsetabeller.striderdrabbningar[60].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[60].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[60].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[60].subval[0][0][0].talighet = {};
	handelsetabeller.striderdrabbningar[60].subval[0][0][0].talighet.varde =1; 
	handelsetabeller.striderdrabbningar[60].subval[0][0][0].grundbelastning = {};
	handelsetabeller.striderdrabbningar[60].subval[0][0][0].grundbelastning.varde =-8; 
	

	handelsetabeller.striderdrabbningar[61] = {}; 
	handelsetabeller.striderdrabbningar[61].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[61].vald = 0; 
	handelsetabeller.striderdrabbningar[61].rubrik = "Reslig"
	handelsetabeller.striderdrabbningar[61].beskrivning = "Rollpersonen är reslig och är vanligen ett huvud högre än de flesta andra av samma folkslag och kön. Detta förlorar dock denne på i smidighet."
	handelsetabeller.striderdrabbningar[61].beskrivninghak = "\+2 Kroppsbyggnad, \+2 Intryck, –2 Rörlighet"
	handelsetabeller.striderdrabbningar[61].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[61].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[61].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[61].subval[0][0][0].rorlighet = {};
	handelsetabeller.striderdrabbningar[61].subval[0][0][0].rorlighet.varde =-2; 
	handelsetabeller.striderdrabbningar[61].subval[0][0][0].intryck = {};
	handelsetabeller.striderdrabbningar[61].subval[0][0][0].intryck.bonus =2; 
	handelsetabeller.striderdrabbningar[61].subval[0][0][0].kroppsbyggnad = {};
	handelsetabeller.striderdrabbningar[61].subval[0][0][0].kroppsbyggnad.bonus =2; 

	handelsetabeller.striderdrabbningar[62] = {}; 
	handelsetabeller.striderdrabbningar[62].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[62].vald = 0; 
	handelsetabeller.striderdrabbningar[62].rubrik = "Respektingivande ärr"
	handelsetabeller.striderdrabbningar[62].beskrivning = "Rollpersonen har varit med om en våldsam situation som har resulterat i ett ärr rätt över dennes ansikte. Detta kan vara klösmärkena efter ett vilddjur eller monster eller märket av en klinga. Rollpersonens utseende är mycket lätt att komma ihåg och de flesta nämner ärret som det första när de skulle välja att beskriva denne. Ärret gör dock att rollpersonen ser farlig ut och de flesta undviker att bråka med denne."
	handelsetabeller.striderdrabbningar[62].beskrivninghak = "Lättlärd i Injaga fruktan. Kännetecknet Ärr 4T6"
	handelsetabeller.striderdrabbningar[62].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[62].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[62].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[62].subval[0][0][0].injagafruktan = {};
	handelsetabeller.striderdrabbningar[62].subval[0][0][0].injagafruktan.lattlard=1; 
	handelsetabeller.striderdrabbningar[62].subval[0][0][0].arr = {};
	handelsetabeller.striderdrabbningar[62].subval[0][0][0].arr.enheter = 3; 
	handelsetabeller.striderdrabbningar[62].subval[0][0][0].utseende="Ett respektingivande ärr rätt över ansiktet."; 
	
	handelsetabeller.striderdrabbningar[63] = {}; 
	handelsetabeller.striderdrabbningar[63].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[63].vald = 0; 
	handelsetabeller.striderdrabbningar[63].rubrik = "Råstark"
	handelsetabeller.striderdrabbningar[63].beskrivning = "Rollpersonen vet hur man åsamkar skada på omgivningen."
	handelsetabeller.striderdrabbningar[63].beskrivninghak = "\+2 Kroppsbyggnad,+2 Grundskada"
	handelsetabeller.striderdrabbningar[63].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[63].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[63].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[63].subval[0][0][0].kroppsbyggnad = {};
	handelsetabeller.striderdrabbningar[63].subval[0][0][0].kroppsbyggnad.bonus =2; 
	handelsetabeller.striderdrabbningar[63].subval[0][0][0].grundskada = {};
	handelsetabeller.striderdrabbningar[63].subval[0][0][0].grundskada.bonus =2; 

	handelsetabeller.striderdrabbningar[64] = {}; 
	handelsetabeller.striderdrabbningar[64].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[64].vald = 0; 
	handelsetabeller.striderdrabbningar[64].rubrik = "Saknar öga"
	handelsetabeller.striderdrabbningar[64].beskrivning = "Under en drabbning fick rollpersonen sitt öga skadat så pass allvarligt att denne förlorade synen på ögat. Detta minskade dennes stridsförmåga något men rollpersonen övervann sitt hinder och med vilja och träning så har denne kämpat sig till lika skicklig om inte skickligare än innan."
	handelsetabeller.striderdrabbningar[64].beskrivninghak = "\+2 Vilja. Lättlärd i Injaga fruktan"
	handelsetabeller.striderdrabbningar[64].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[64].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[64].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[64].subval[0][0][0].injagafruktan = {};
	handelsetabeller.striderdrabbningar[64].subval[0][0][0].injagafruktan.lattlard=1; 
	handelsetabeller.striderdrabbningar[64].subval[0][0][0].vilja = {};
	handelsetabeller.striderdrabbningar[64].subval[0][0][0].vilja.varde =2; 
	handelsetabeller.striderdrabbningar[64].subval[0][0][0].utseende="Saknar ett öga";
	

	handelsetabeller.striderdrabbningar[65] = {}; 
	handelsetabeller.striderdrabbningar[65].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[65].vald = 0; 
	handelsetabeller.striderdrabbningar[65].rubrik = "Sargande anfall"
	handelsetabeller.striderdrabbningar[65].beskrivning = "Rollpersonen har lärt sig att dela ut sargande anfall. Hur man vrider om svärdet i såret, slår mot leder, genomborrar bröstkorgen och armbågar ut tänder. Attackerna är mycket brutala och groteska."
	handelsetabeller.striderdrabbningar[65].beskrivninghak = "\+2 Grundskada. \+1 på tabellslag för Allvarliga skador"
	handelsetabeller.striderdrabbningar[65].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[65].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[65].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[65].subval[0][0][0].grundskada = {};
	handelsetabeller.striderdrabbningar[65].subval[0][0][0].grundskada.bonus =2; 
	handelsetabeller.striderdrabbningar[65].subval[0][0][0].formaga="\+1 på tabellslag för Allvarliga skador.";

	handelsetabeller.striderdrabbningar[66] = {}; 
	handelsetabeller.striderdrabbningar[66].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[66].vald = 0; 
	handelsetabeller.striderdrabbningar[66].rubrik = "Seglivad"
	handelsetabeller.striderdrabbningar[66].beskrivning = "Rollpersonen har en exceptionell förmåga att hålla sig vid liv även efter svåra skador."
	handelsetabeller.striderdrabbningar[66].beskrivninghak = "\+2 på Livskraft vid alla Dödsslag samt Infektionsslag"
	handelsetabeller.striderdrabbningar[66].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[66].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[66].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[66].subval[0][0][0].livskraft = {};
	handelsetabeller.striderdrabbningar[66].subval[0][0][0].livskraft.egenskap="\+2 på Dödsslag." + "\n" + "\+2 på Infektionsslag.";

	handelsetabeller.striderdrabbningar[67] = {}; 
	handelsetabeller.striderdrabbningar[67].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[67].vald = 0; 
	handelsetabeller.striderdrabbningar[67].rubrik = "Skadad arm"
	handelsetabeller.striderdrabbningar[67].beskrivning = "Rollpersonen har fått sin vapenarm skadad i strid. Denne är kanske stelare och långsammare eller saknar ett eller två fingrar. ";
	handelsetabeller.striderdrabbningar[67].beskrivninghak = "Välj mellan –2 Styrka eller –2 Rörlighet. Däremot har rollpersonen lagt tid på att öva upp sin skicklighet för att inte låta armen hejda denne och får därför 4 enheter Stridsfärdigheter"
	handelsetabeller.striderdrabbningar[67].beskrivninghakvaldbas = "";
	
	handelsetabeller.striderdrabbningar[67].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[67].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[67].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[67].subval[0][0][0].stridsfardigheterenheter=4;
	handelsetabeller.striderdrabbningar[67].subval[0][0][0].ovrigt="Har fått sin arm skadat i strid.";
	handelsetabeller.striderdrabbningar[67].subval[0].push([]);
	
	handelsetabeller.striderdrabbningar[67].subval[0][1][0] = {}; 
	handelsetabeller.striderdrabbningar[67].subval[0][1][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[67].subval[0][1][0].vald = 0; 
	handelsetabeller.striderdrabbningar[67].subval[0][1][0].antalsubval=1;
	handelsetabeller.striderdrabbningar[67].subval[0][1][1] = {}; 
	handelsetabeller.striderdrabbningar[67].subval[0][1][1].valdasub = []; 
	handelsetabeller.striderdrabbningar[67].subval[0][1][1].vald = 0; 
	handelsetabeller.striderdrabbningar[67].subval[0][1][1].styrka = {};
	handelsetabeller.striderdrabbningar[67].subval[0][1][1].styrka.varde=-2;
	handelsetabeller.striderdrabbningar[67].subval[0][1][1].rubrik="-2 Styrka"
	handelsetabeller.striderdrabbningar[67].subval[0][1][1].beskrivninghakvaldbas = "–2 Styrka. Däremot har rollpersonen lagt tid på att öva upp sin skicklighet för att inte låta armen hejda denne och får därför 4 enheter Stridsfärdigheter. ";
	
	
	handelsetabeller.striderdrabbningar[67].subval[0][1][2] = {}; 
	handelsetabeller.striderdrabbningar[67].subval[0][1][2].valdasub = []; 
	handelsetabeller.striderdrabbningar[67].subval[0][1][2].vald = 0; 
	handelsetabeller.striderdrabbningar[67].subval[0][1][2].rorlighet = {};
	handelsetabeller.striderdrabbningar[67].subval[0][1][2].rorlighet.varde=-2;
	handelsetabeller.striderdrabbningar[67].subval[0][1][2].rubrik="-2 Rörlighet"
	handelsetabeller.striderdrabbningar[67].subval[0][1][1].beskrivninghakvaldbas = "–2 Rörlighet. Däremot har rollpersonen lagt tid på att öva upp sin skicklighet för att inte låta armen hejda denne och får därför 4 enheter Stridsfärdigheter. ";
	

	handelsetabeller.striderdrabbningar[68] = {}; 
	handelsetabeller.striderdrabbningar[68].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[68].vald = 0; 
	handelsetabeller.striderdrabbningar[68].rubrik = "Skadat ben"
	handelsetabeller.striderdrabbningar[68].beskrivning = "Rollpersonen har fått sitt ben skadat i strid. Det är kanske långsammare och stelare och rollpersonen har en distinkt haltning."
	handelsetabeller.striderdrabbningar[68].beskrivninghak = "Välj mellan –2 Rörlighet eller –2 Tålighet. –1T6 Förflyttning. Rollpersonen har dock försökt träna upp sin snabbhet och smidighet för att kompensera detta: 4 enheter Rörelsefärdigheter"
	handelsetabeller.striderdrabbningar[68].beskrivninghakvaldbas = "";
	
	handelsetabeller.striderdrabbningar[68].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[68].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[68].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[68].subval[0][0][0].forflyttning = {};
	handelsetabeller.striderdrabbningar[68].subval[0][0][0].forflyttning.bonus=-4;
	handelsetabeller.striderdrabbningar[68].subval[0][0][0].rorelsefardigheterenheter=4;
	handelsetabeller.striderdrabbningar[68].subval[0][0][0].ovrigt="Har fått sitt ben skadat i strid.";
	handelsetabeller.striderdrabbningar[68].subval[0].push([]);
	
	handelsetabeller.striderdrabbningar[68].subval[0][1][0] = {}; 
	handelsetabeller.striderdrabbningar[68].subval[0][1][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[68].subval[0][1][0].vald = 0; 
	handelsetabeller.striderdrabbningar[68].subval[0][1][0].antalsubval=1;
	handelsetabeller.striderdrabbningar[68].subval[0][1][1] = {}; 
	handelsetabeller.striderdrabbningar[68].subval[0][1][1].valdasub = []; 
	handelsetabeller.striderdrabbningar[68].subval[0][1][1].vald = 0; 
	handelsetabeller.striderdrabbningar[68].subval[0][1][1].rorlighet = {};
	handelsetabeller.striderdrabbningar[68].subval[0][1][1].rorlighet.varde=-2;
	handelsetabeller.striderdrabbningar[68].subval[0][1][1].rubrik="-2 Rörlighet"
	handelsetabeller.striderdrabbningar[68].subval[0][1][1].beskrivninghakvaldbas = "–2 Rörlighet, –1T6 Förflyttning. Rollpersonen har dock försökt träna upp sin snabbhet och smidighet för att kompensera detta: 4 enheter Rörelsefärdigheter. ";
	
	
	handelsetabeller.striderdrabbningar[68].subval[0][1][2] = {}; 
	handelsetabeller.striderdrabbningar[68].subval[0][1][2].valdasub = []; 
	handelsetabeller.striderdrabbningar[68].subval[0][1][2].vald = 0; 
	handelsetabeller.striderdrabbningar[68].subval[0][1][2].talighet = {};
	handelsetabeller.striderdrabbningar[68].subval[0][1][2].talighet.varde=-2;
	handelsetabeller.striderdrabbningar[68].subval[0][1][2].rubrik="-2 Tålighet"
	handelsetabeller.striderdrabbningar[68].subval[0][1][2].beskrivninghakvaldbas = "–2 Tålighet, –1T6 Förflyttning. Rollpersonen har dock försökt träna upp sin snabbhet och smidighet för att kompensera detta: 4 enheter Rörelsefärdigheter. ";
	

	handelsetabeller.striderdrabbningar[69] = {}; 
	handelsetabeller.striderdrabbningar[69].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[69].vald = 0; 
	handelsetabeller.striderdrabbningar[69].rubrik = "Skonat en fiende"
	handelsetabeller.striderdrabbningar[69].beskrivning = "Rollpersonen har skonat en fiende i strid som nu är mycket tacksam."
	handelsetabeller.striderdrabbningar[69].beskrivninghak = "2 valfria enheter knutna till det rollpersonen lärt sig av den skonade"
	handelsetabeller.striderdrabbningar[69].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[69].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[69].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[69].subval[0][0][0].valfriaenheter=2; 
	handelsetabeller.striderdrabbningar[69].subval[0][0][0].kontakt="Har skonat en fiende som nu är mycket tacksam.";

	handelsetabeller.striderdrabbningar[70] = {}; 
	handelsetabeller.striderdrabbningar[70].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[70].vald = 0; 
	handelsetabeller.striderdrabbningar[70].rubrik = "Skyddat befolkning"
	handelsetabeller.striderdrabbningar[70].beskrivning = "Rollpersonen har skyddat befolkningen i en stadsdel eller by med risk för sitt eget liv. Dessa är mycket tacksamma och ser rollpersonen som en hjälte."
	handelsetabeller.striderdrabbningar[70].beskrivninghak = "1 poäng Expertiser som visar vad rollpersonen lärde sig under sin tid bland befolkningen. Av belöningen kvarstår en del och startbeloppet ökar med 2T6×10 silver. ";
	handelsetabeller.striderdrabbningar[70].beskrivninghakvaldbas = "1 poäng Expertiser som visar vad rollpersonen lärde sig under sin tid bland befolkningen. ";
	
	handelsetabeller.striderdrabbningar[70].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[70].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[70].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[70].subval[0][0][0].expertispoang = 1; 
	handelsetabeller.striderdrabbningar[70].subval[0][0][0].kontakt="Har skyddat befolkningen i en stadsdel eller by, dessa nu är mycket tacksamma.";
	handelsetabeller.striderdrabbningar[70].subval[0][0][0].pengarslag="2T6x10"; 
	handelsetabeller.striderdrabbningar[70].subval[0][0][0].beskrivninghakvaldbas = "Av belöningen kvarstår en del och startbeloppet ökar med pengar_resultat silver. ";
	
	
	handelsetabeller.striderdrabbningar[71] = {}; 
	handelsetabeller.striderdrabbningar[71].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[71].vald = 0; 
	handelsetabeller.striderdrabbningar[71].rubrik = "Skärmytsling i bergspass"
	handelsetabeller.striderdrabbningar[71].beskrivning = "Rollpersonen har varit inblandad i stridigheter uppe i bergen. Denne har lärt sig använda den branta terrängen för att kunna överraska och komma runt sina motståndare."
	handelsetabeller.striderdrabbningar[71].beskrivninghak = "Lättlärd i Klättra. 2 enheter Rörelsefärdigheter, 2 enheter Stridsfärdigheter"
	handelsetabeller.striderdrabbningar[71].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[71].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[71].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[71].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[71].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[71].subval[0][0][0].klattra = {};
	handelsetabeller.striderdrabbningar[71].subval[0][0][0].klattra.lattlard=1; 
	handelsetabeller.striderdrabbningar[71].subval[0][0][0].ovrigt="Har varit inblandad i stridigheter uppe i bergen.";
	
	handelsetabeller.striderdrabbningar[72] = {}; 
	handelsetabeller.striderdrabbningar[72].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[72].vald = 0; 
	handelsetabeller.striderdrabbningar[72].rubrik = "Skärmytsling i skog"
	handelsetabeller.striderdrabbningar[72].beskrivning = "Rollpersonen har varit inblandad i stridigheter i en djup och tät skog. Denne lärde sig använda skogsterrängen till sin fördel och hur man lägger sig i bakhåll och överraskar motståndarna."
	handelsetabeller.striderdrabbningar[72].beskrivninghak = "Lättlärd i Spåra. 2 enheter Stridsfärdigheter, 2 enheter Vildmarksfärdigheter"
	handelsetabeller.striderdrabbningar[72].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[72].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[72].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[72].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[72].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[72].subval[0][0][0].spara = {};
	handelsetabeller.striderdrabbningar[72].subval[0][0][0].spara.lattlard=1; 
	handelsetabeller.striderdrabbningar[72].subval[0][0][0].ovrigt="Har varit inblandad i stridigheter i en djup och tät skog.";
	
	handelsetabeller.striderdrabbningar[73] = {}; 
	handelsetabeller.striderdrabbningar[73].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[73].vald = 0; 
	handelsetabeller.striderdrabbningar[73].rubrik = "Skärmytsling i träskmark"
	handelsetabeller.striderdrabbningar[73].beskrivning = "Rollpersonen har varit inblandad i stridigheter i träskmark. Denne tvingades att lära sig att använda den vådliga terrängen till sin fördel."
	handelsetabeller.striderdrabbningar[73].beskrivninghak = "Lättlärd i Simma. 2 enheter Rörelsefärdigheter, 2 enheter Stridsfärdigheter"
	handelsetabeller.striderdrabbningar[73].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[73].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[73].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[73].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[73].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[73].subval[0][0][0].simma = {};
	handelsetabeller.striderdrabbningar[73].subval[0][0][0].simma.lattlard=1; 
	handelsetabeller.striderdrabbningar[73].subval[0][0][0].ovrigt="Har varit inblandad i stridigheter i träskmark.";
	
	handelsetabeller.striderdrabbningar[74] = {}; 
	handelsetabeller.striderdrabbningar[74].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[74].vald = 0; 
	handelsetabeller.striderdrabbningar[74].rubrik = "Skärmytsling i vinterlandskap"
	handelsetabeller.striderdrabbningar[74].beskrivning = "Rollpersonen har varit inblandad i stridigheter under den bitande vintern. Denne har lärt sig att ta sig fram i djup snö och klara sig trots den stränga kölden."
	handelsetabeller.striderdrabbningar[74].beskrivninghak = "Expertisen Skidor \& skridskor 4T6. 2 enheter Stridsfärdigheter, 2 enheter Vildmarksfärdigheter"
	handelsetabeller.striderdrabbningar[74].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[74].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[74].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[74].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[74].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[74].subval[0][0][0].skidorskridskor = {};
	handelsetabeller.striderdrabbningar[74].subval[0][0][0].skidorskridskor.enheter = 3; 
	handelsetabeller.striderdrabbningar[74].subval[0][0][0].ovrigt="Har varit inblandad i stridigheter i ett vinterlandskap.";
	
	handelsetabeller.striderdrabbningar[75] = {}; 
	handelsetabeller.striderdrabbningar[75].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[75].vald = 0; 
	handelsetabeller.striderdrabbningar[75].rubrik = "Skärmytsling i öken"
	handelsetabeller.striderdrabbningar[75].beskrivning = "Rollpersonen har varit inblandad i stridigheter i ett ökenlandskap och lärt sig överleva och finna vatten i det torra landskapet."
	handelsetabeller.striderdrabbningar[75].beskrivninghak = "Lättlärd i Vildmarksvana. 2 enheter Stridsfärdigheter, 2 enheter Vildmarksfärdigheter"
	handelsetabeller.striderdrabbningar[75].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[75].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[75].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[75].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[75].subval[0][0][0].vildmarksfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[75].subval[0][0][0].vildmarksvana = {};
	handelsetabeller.striderdrabbningar[75].subval[0][0][0].vildmarksvana.lattlard=1; 
	handelsetabeller.striderdrabbningar[75].subval[0][0][0].ovrigt="Har varit inblandad i stridigheter i ett ökenlandskap.";
	
	handelsetabeller.striderdrabbningar[76] = {}; 
	handelsetabeller.striderdrabbningar[76].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[76].vald = 0; 
	handelsetabeller.striderdrabbningar[76].rubrik = "Snabba reflexer"
	handelsetabeller.striderdrabbningar[76].beskrivning = "Personen undviker fara mycket skickligt."
	handelsetabeller.striderdrabbningar[76].beskrivninghak = "\+2 Reaktion. Lättlärd i Undvika"
	handelsetabeller.striderdrabbningar[76].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[76].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[76].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[76].subval[0][0][0].undvika = {};
	handelsetabeller.striderdrabbningar[76].subval[0][0][0].undvika.lattlard=1; 
	handelsetabeller.striderdrabbningar[76].subval[0][0][0].reaktion = {};
	handelsetabeller.striderdrabbningar[76].subval[0][0][0].reaktion.bonus =2; 

	handelsetabeller.striderdrabbningar[77] = {}; 
	handelsetabeller.striderdrabbningar[77].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[77].vald = 0; 
	handelsetabeller.striderdrabbningar[77].rubrik = "Snabbt vapen"
	handelsetabeller.striderdrabbningar[77].beskrivning = "Rollpersonen har kommit över ett snabbt och välbalanserat vapen."
	handelsetabeller.striderdrabbningar[77].beskrivninghak = "2 enheter Stridsfärdigheter. Rollpersonen har ett valfritt vapen som denne kan bära i en hand. Detta vapen har vapenegenskapen Snabb. ";
	handelsetabeller.striderdrabbningar[77].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[77].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[77].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[77].subval[0][0][0].stridsfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[77].subval[0][0][0].vapen="Ett enhandsvapen med vapenegenskapen Snabb";

	handelsetabeller.striderdrabbningar[78] = {}; 
	handelsetabeller.striderdrabbningar[78].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[78].vald = 0; 
	handelsetabeller.striderdrabbningar[78].rubrik = "Stoppat övergrepp i krig"
	handelsetabeller.striderdrabbningar[78].beskrivning = "Rollpersonen har under ett krig denne varit med om hindrat ett övergrepp som dennes styrka hade planerat att utföra. Sedan dess är denne hyllad som hjälte i trakten. Rollpersonens forne befälhavare är dock inte lika vänligt inställd till rollpersonen och är nu inriktad på hämnd."
	handelsetabeller.striderdrabbningar[78].beskrivninghak = "4 enheter Sociala färdigheter"
	handelsetabeller.striderdrabbningar[78].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[78].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[78].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[78].subval[0][0][0].socialafardigheterenheter = 4; 
	handelsetabeller.striderdrabbningar[78].subval[0][0][0].kontakt="Efter att rollpersonen stoppat ett planerat övergrepp är nu dennes forne befälhavare inriktad på hämnd.";
	
	handelsetabeller.striderdrabbningar[79] = {}; 
	handelsetabeller.striderdrabbningar[79].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[79].vald = 0; 
	handelsetabeller.striderdrabbningar[79].rubrik = "Striden i blodet"
	handelsetabeller.striderdrabbningar[79].beskrivning = "Rollpersonen har en exceptionell vapenaffinitet och kan läsa av striden och sin motståndare."
	handelsetabeller.striderdrabbningar[79].beskrivninghak = "Lättlärd i alla Stridsfärdigheter"
	handelsetabeller.striderdrabbningar[79].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[79].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[79].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[79].subval[0][0][0] = {};
	handelsetabeller.striderdrabbningar[79].subval[0][0][0].lattlardallastridsfardigheter=1; 

	handelsetabeller.striderdrabbningar[80] = {}; 
	handelsetabeller.striderdrabbningar[80].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[80].vald = 0; 
	handelsetabeller.striderdrabbningar[80].rubrik = "Stridens hjälte"
	handelsetabeller.striderdrabbningar[80].beskrivning = "Rollpersonen har under en strid lyckats besegra ett flertal farliga motståndare på egen hand och om dennes dåd talas det om vida omkring. Många vill att rollpersonen ska berätta historien om hur detta gick till och gärna visa upp sin skicklighet."
	handelsetabeller.striderdrabbningar[80].beskrivninghak = "\+2 Intryck. 4 enheter Stridsfärdigheter"
	handelsetabeller.striderdrabbningar[80].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[80].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[80].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[80].subval[0][0][0].stridsfardigheterenheter = 4; 
	handelsetabeller.striderdrabbningar[80].subval[0][0][0].intryck = {};
	handelsetabeller.striderdrabbningar[80].subval[0][0][0].intryck.bonus =2; 
	handelsetabeller.striderdrabbningar[80].subval[0][0][0].ovrigt="Har under en strid lyckats besegra ett flertal farliga motståndare på egen hand och om dennes dåd talas det om vida omkring.";

	handelsetabeller.striderdrabbningar[81] = {}; 
	handelsetabeller.striderdrabbningar[81].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[81].vald = 0; 
	handelsetabeller.striderdrabbningar[81].rubrik = "Stridskväden"
	handelsetabeller.striderdrabbningar[81].beskrivning = "Rollpersonen har memorerat en mängd stridskväden som berättar om legendariska slag, tappra kämpar, gudar, demoner och monster. Detta har gett rollpersonen en insikt i historien samt att denne har lärt sig att framföra dem på bästa möjliga sätt."
	handelsetabeller.striderdrabbningar[81].beskrivninghak = "\+2 Utstrålning. Lättlärd i Berättarkonst och Historia"
	handelsetabeller.striderdrabbningar[81].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[81].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[81].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[81].subval[0][0][0].berattarkonst = {};
	handelsetabeller.striderdrabbningar[81].subval[0][0][0].berattarkonst.lattlard=1; 
	handelsetabeller.striderdrabbningar[81].subval[0][0][0].historia = {};
	handelsetabeller.striderdrabbningar[81].subval[0][0][0].historia.lattlard=1; 
	handelsetabeller.striderdrabbningar[81].subval[0][0][0].utstralning = {};
	handelsetabeller.striderdrabbningar[81].subval[0][0][0].utstralning.varde =2; 

	handelsetabeller.striderdrabbningar[82] = {}; 
	handelsetabeller.striderdrabbningar[82].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[82].vald = 0; 
	handelsetabeller.striderdrabbningar[82].rubrik = "Stridstränad"
	handelsetabeller.striderdrabbningar[82].beskrivning = "Rollpersonen har blivit tränad i strid av en vapenmästare eller ett hyrsvärd."
	handelsetabeller.striderdrabbningar[82].beskrivninghak = "\+2 Styrka. 3 enheter Stridsfärdigheter"
	handelsetabeller.striderdrabbningar[82].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[82].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[82].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[82].subval[0][0][0].stridsfardigheterenheter = 3; 
	handelsetabeller.striderdrabbningar[82].subval[0][0][0].styrka = {};
	handelsetabeller.striderdrabbningar[82].subval[0][0][0].styrka.varde =2; 
	handelsetabeller.striderdrabbningar[82].subval[0][0][0].kontakt="Har blivit tränad i strid av en vapenmästare eller ett hyrsvärd.";

	handelsetabeller.striderdrabbningar[83] = {}; 
	handelsetabeller.striderdrabbningar[83].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[83].vald = 0; 
	handelsetabeller.striderdrabbningar[83].rubrik = "Strid till häst"
	handelsetabeller.striderdrabbningar[83].beskrivning = "Rollpersonen har spenderat lång tid på hästryggen och lärt sig att strida på det sättet."
	handelsetabeller.striderdrabbningar[83].beskrivninghak = "\+1 Styrka, \+2 Tålighet. Lättlärd i Rida och Spjut"
	handelsetabeller.striderdrabbningar[83].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[83].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[83].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[83].subval[0][0][0].rida = {};
	handelsetabeller.striderdrabbningar[83].subval[0][0][0].rida.lattlard=1; 
	handelsetabeller.striderdrabbningar[83].subval[0][0][0].spjut = {};
	handelsetabeller.striderdrabbningar[83].subval[0][0][0].spjut.lattlard=1; 
	handelsetabeller.striderdrabbningar[83].subval[0][0][0].styrka = {};
	handelsetabeller.striderdrabbningar[83].subval[0][0][0].styrka.varde =1; 
	handelsetabeller.striderdrabbningar[83].subval[0][0][0].talighet = {};
	handelsetabeller.striderdrabbningar[83].subval[0][0][0].talighet.varde =2; 

	handelsetabeller.striderdrabbningar[84] = {}; 
	handelsetabeller.striderdrabbningar[84].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[84].vald = 0; 
	handelsetabeller.striderdrabbningar[84].rubrik = "Ståndaktig"
	handelsetabeller.striderdrabbningar[84].beskrivning = "När rollpersonen väl intagit sin stridsposition tycks denne vara orubblig."
	handelsetabeller.striderdrabbningar[84].beskrivninghak = "\+1 Kroppsbyggnad. Ignorerar efterverkningen Tillbakaknuffad. När rollpersonen använder försvarstaktiken Defensivt försvar så får denne \+2T6 i bonus istället för \+1T6"
	handelsetabeller.striderdrabbningar[84].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[84].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[84].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[84].subval[0][0][0].kroppsbyggnad = {};
	handelsetabeller.striderdrabbningar[84].subval[0][0][0].kroppsbyggnad.bonus =1; 
	handelsetabeller.striderdrabbningar[84].subval[0][0][0].formaga="Ignorerar efterverkningen Tillbakaknuffad." + "\n" + "När rollpersonen använder försvarstaktiken Defensivt försvar så får denne \+2T6 i bonus istället för \+1T6";
	

	handelsetabeller.striderdrabbningar[85] = {}; 
	handelsetabeller.striderdrabbningar[85].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[85].vald = 0; 
	handelsetabeller.striderdrabbningar[85].rubrik = "Svepande anfall";
	handelsetabeller.striderdrabbningar[85].beskrivning = "Rollpersonen har tränat sig i att utdela svepande anfall. Denne kan attackera alla fiender runt sig utan större svårighet så länge som rollpersonen har kontroll över striden.";
	handelsetabeller.striderdrabbningar[85].beskrivninghak = "Anfallstaktiken Gruppanfall ger inget avdrag på att träffa för rollpersonen";
	handelsetabeller.striderdrabbningar[85].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[85].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[85].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[85].subval[0][0][0].formaga="Anfallstaktiken Gruppanfall ger inget avdrag på att träffa för rollpersonen";

	
	handelsetabeller.striderdrabbningar[86] = {}; 
	handelsetabeller.striderdrabbningar[86].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[86].vald = 0; 
	handelsetabeller.striderdrabbningar[86].rubrik = "Tagen för död"
	handelsetabeller.striderdrabbningar[86].beskrivning = "Rollpersonen blev under en strid allvarligt skadad och när tumultet var över togs denne för död. Kanske blev denne plundrad på alla värdesaker eller lagd i en kista i ett mausoleum men hur som helst var det i sista stund en person som insåg att rollpersonen var vid liv och räddade således dennes liv. Rollperson har en tacksamhetsskuld till denna person och är sedan händelsen förändrad på något sätt."
	handelsetabeller.striderdrabbningar[86].beskrivningvaldbas = "Rollpersonen blev under en strid allvarligt skadad och när tumultet var över togs denne för död. Kanske blev denne plundrad på alla värdesaker eller lagd i en kista i ett mausoleum men hur som helst var det i sista stund en person som insåg att rollpersonen var vid liv och räddade således dennes liv. ";
	
	handelsetabeller.striderdrabbningar[86].beskrivninghak = "\+1 Livskraft. 1 poäng Kännetecken. Slå två gånger på bakgrundstabellen och välj en som visar vem som räddade rollpersonen och som rollpersonen står i skuld till"
	handelsetabeller.striderdrabbningar[86].beskrivninghakvaldbas = "\+1 Livskraft. 1 poäng Kännetecken. ";
	
	handelsetabeller.striderdrabbningar[86].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[86].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[86].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[86].subval[0][0][0].livskraft = {};
	handelsetabeller.striderdrabbningar[86].subval[0][0][0].livskraft.bonus=1; 
	handelsetabeller.striderdrabbningar[86].subval[0][0][0].kanneteckenpoang=1;
	
	handelsetabeller.striderdrabbningar[86].subval[0][0][0].kontaktbas="Har varit tagen för död men blivit räddad av kontakt1_obestamd";		
	handelsetabeller.striderdrabbningar[86].subval[0][0][0].beskrivningvaldbas = "Rollperson har en tacksamhetsskuld till denna person (som är kontakt1_rubrikliten) och är sedan händelsen förändrad på något sätt. ";


	handelsetabeller.striderdrabbningar[87] = {}; 
	handelsetabeller.striderdrabbningar[87].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[87].vald = 0; 
	handelsetabeller.striderdrabbningar[87].rubrik = "Tagit kommandot"
	handelsetabeller.striderdrabbningar[87].beskrivning = "Under en stridighet där sidan som rollpersonen kämpade på såg ut att förlora så utmärkte sig rollpersonen genom att ta kommandot och fylla kämparna med stridsglöd."
	handelsetabeller.striderdrabbningar[87].beskrivninghak = "\+2 Vilja, \+2 Utstrålning. Lättlärd i Ledarskap"
	handelsetabeller.striderdrabbningar[87].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[87].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[87].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[87].subval[0][0][0].ledarskap = {};
	handelsetabeller.striderdrabbningar[87].subval[0][0][0].ledarskap.lattlard=1; 
	handelsetabeller.striderdrabbningar[87].subval[0][0][0].vilja = {};
	handelsetabeller.striderdrabbningar[87].subval[0][0][0].vilja.varde =2; 
	handelsetabeller.striderdrabbningar[87].subval[0][0][0].utstralning = {};
	handelsetabeller.striderdrabbningar[87].subval[0][0][0].utstralning.varde =2; 
	handelsetabeller.striderdrabbningar[87].subval[0][0][0].ovrigt="Har tagit kommandot under en strid som såg ut att gå förlorad";

	handelsetabeller.striderdrabbningar[88] = {}; 
	handelsetabeller.striderdrabbningar[88].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[88].vald = 0; 
	handelsetabeller.striderdrabbningar[88].rubrik = "Tung beväpning"
	handelsetabeller.striderdrabbningar[88].beskrivning = "Rollpersonen är tungt beväpnad och vet hur man använder dessa redskap. Exempelvis kan det röra sig om en stor stridshammare med tvåhandsfattning, ett tungt armborst med lod eller ett storsvärd."
	handelsetabeller.striderdrabbningar[88].beskrivninghak = "\+3 Styrka. Lättlärd i den aktuella stridsfärdigheten. Rollpersonen får ett vapen av denna typ vars kvalité gör att skadan ökar med \+2"
	handelsetabeller.striderdrabbningar[88].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[88].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[88].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[88].subval[0][0][0].styrka = {};
	handelsetabeller.striderdrabbningar[88].subval[0][0][0].styrka.varde =3;
	handelsetabeller.striderdrabbningar[88].subval[0][0][0].lattlardstridsfardigheter=1;
	handelsetabeller.striderdrabbningar[88].subval[0][0][0].vapen="Har ett vapen i sin lättlärda stridsfärdighet som gör \+2 i Skada.";
	

	handelsetabeller.striderdrabbningar[89] = {}; 
	handelsetabeller.striderdrabbningar[89].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[89].vald = 0; 
	handelsetabeller.striderdrabbningar[89].rubrik = "Tung rustning"
	handelsetabeller.striderdrabbningar[89].beskrivning = "Rollpersonen har kommit över en tung rustning av god kvalité."
	handelsetabeller.striderdrabbningar[89].beskrivninghak = "\+2 Styrka. Rollpersonen har en helrustning i plåt och dess utmärkta kvalité gör att Pansarvärdet ökar med \+2"
	handelsetabeller.striderdrabbningar[89].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[89].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[89].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[89].subval[0][0][0].styrka = {};
	handelsetabeller.striderdrabbningar[89].subval[0][0][0].styrka.varde =2; 
	handelsetabeller.striderdrabbningar[89].subval[0][0][0].rustning="En helrustning i plåt med \+2 i alla Pansarvärden";

	
	handelsetabeller.striderdrabbningar[90] = {}; 
	handelsetabeller.striderdrabbningar[90].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[90].vald = 0; 
	handelsetabeller.striderdrabbningar[90].rubrik = "Tyngd av skuld"
	handelsetabeller.striderdrabbningar[90].beskrivning = "Rollpersonen har i vredesmod eller av övertygelse dräpt en före detta vän för ett brott denne begått. Det visade sig sedan att vännen var oskyldig och rollpersonen är alltjämt tyngd av skuld efter det som inträffade. Rollpersonen har försökt gottgöra skulden och har en uppgift att utföra för att kunna rentvå sitt samvete (detta tas lämpligen fram av spelaren och spelledaren när rollpersonen är färdig)."
	handelsetabeller.striderdrabbningar[90].beskrivninghak = "4 valfria enheter som är knutet till skulden och vad denne måste göra för att upprätta denna"
	handelsetabeller.striderdrabbningar[90].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[90].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[90].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[90].subval[0][0][0].kontakt="Har dräpt en vän för ett brott denne visade sig vara oskyldig till. Rollpersonen är tyngd av skuld och har en uppgift att utföra för att rentvå sitt samvete.";
	handelsetabeller.striderdrabbningar[90].subval[0][0][0].valfriaenheter=4; 

	handelsetabeller.striderdrabbningar[91] = {}; 
	handelsetabeller.striderdrabbningar[91].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[91].vald = 0; 
	handelsetabeller.striderdrabbningar[91].rubrik = "Undvika avståndsvapen"
	handelsetabeller.striderdrabbningar[91].beskrivning = "Rollpersonen är mycket snabb och uppmärksam och har lärt sig att undvika och blockera projektilvapen och kastvapen."
	handelsetabeller.striderdrabbningar[91].beskrivninghak = "\+2 Uppfattning. Rollpersonen får \+1T6 när denne ska undvika eller blockera avståndsvapen"
	handelsetabeller.striderdrabbningar[91].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[91].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[91].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[91].subval[0][0][0].uppfattning = {};
	handelsetabeller.striderdrabbningar[91].subval[0][0][0].uppfattning.varde=2;
	handelsetabeller.striderdrabbningar[91].subval[0][0][0].formaga="Får \+1T6 när denne ska undvika eller blockera avståndsvapen";

	handelsetabeller.striderdrabbningar[92] = {}; 
	handelsetabeller.striderdrabbningar[92].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[92].vald = 0; 
	handelsetabeller.striderdrabbningar[92].rubrik = "Uppror"
	handelsetabeller.striderdrabbningar[92].beskrivning = "Ett uppror har rasat. Kanske är det bönder som har gjort uppror, religiösa oliktänkande som satt igång en revolt eller något liknande. Rollpersonen kan antingen ha kämpat med upprorsmännen eller med härmakten för att slå ned upproret."
	handelsetabeller.striderdrabbningar[92].beskrivningvaldbas = " ";
	
	handelsetabeller.striderdrabbningar[92].beskrivninghak = "Med upprorsmännen: Lättlärd i Krigföring och Vildmarksvana. 2 enheter Vildmarksfärdigheter, 2 enheter Rörelsefärdigheter. Med härmakten: Lättlärd i Krigföring och Ledarskap. 3 enheter Stridsfärdigheter"
	handelsetabeller.striderdrabbningar[92].beskrivninghakvaldbas = "";
	
	handelsetabeller.striderdrabbningar[92].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[92].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[92].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[92].subval[0].push([]);
	handelsetabeller.striderdrabbningar[92].subval[0][1][0] = {}; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][0].vald = 0; 
	
	handelsetabeller.striderdrabbningar[92].subval[0][1][0].antalsubval=1;
	
	handelsetabeller.striderdrabbningar[92].subval[0][1][1] = {}; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].valdasub = []; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].vald = 0; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].rubrik="Med upprorsmännen";
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].ovrigt="Har varit på revoltörernas sida i ett uppror."
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].rorelsefardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].vildmarksfardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].vildmarksvana = {};
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].vildmarksvana.lattlard=1; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].krigforing = {};
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].krigforing.lattlard=1; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].beskrivningvaldbas = "Rollpersonen har stått på revoltörernas sida i ett uppror. Kanske är det bönder som har gjort uppror, religiösa oliktänkande som satt igång en revolt eller något liknande. ";
	handelsetabeller.striderdrabbningar[92].subval[0][1][1].beskrivninghakvaldbas = "Lättlärd i Krigföring och Vildmarksvana. 2 enheter Vildmarksfärdigheter, 2 enheter Rörelsefärdigheter. ";
	
	
	
	handelsetabeller.striderdrabbningar[92].subval[0][1][2] = {};
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].valdasub = [];
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].vald = 0;
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].rubrik="Med härmakten"	
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].ovrigt="Har varit på härmaktens sida i ett uppror.";
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].ledarskap = {};
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].ledarskap.lattlard=1; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].krigforing = {};
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].krigforing.lattlard=1; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].stridsfardigheterenheter = 3; 
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].beskrivningvaldbas = "Rollpersonen har stått på härmaktens sida för att slå ner ett uppror. Kanske är det bönder som har gjort uppror, religiösa oliktänkande som satt igång en revolt eller något liknande. ";
	handelsetabeller.striderdrabbningar[92].subval[0][1][2].beskrivninghakvaldbas = "Lättlärd i Krigföring och Ledarskap. 3 enheter Stridsfärdigheter. ";
	

	handelsetabeller.striderdrabbningar[93] = {}; 
	handelsetabeller.striderdrabbningar[93].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[93].vald = 0; 
	handelsetabeller.striderdrabbningar[93].rubrik = "Undvikande manövrer"
	handelsetabeller.striderdrabbningar[93].beskrivning = "Rollpersonen kan befinna sig mitt bland en mängd fiender som alla stöter sina klingor mot denne och mirakulöst undvika och ducka undan alla deras attacker."
	handelsetabeller.striderdrabbningar[93].beskrivninghak = "Lättlärd i Undvika. När rollpersonen möter flera anfallare får denne en bonus till Undvika på \+1T6"
	handelsetabeller.striderdrabbningar[93].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[93].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[93].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[93].subval[0][0][0].undvika = {};
	handelsetabeller.striderdrabbningar[93].subval[0][0][0].undvika.lattlard=1; 
	handelsetabeller.striderdrabbningar[93].subval[0][0][0].formaga="När rollpersonen möter flera anfallare får denne en bonus till Undvika på \+1T6";
	
	handelsetabeller.striderdrabbningar[94] = {}; 
	handelsetabeller.striderdrabbningar[94].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[94].vald = 0; 
	handelsetabeller.striderdrabbningar[94].rubrik = "Uppvisningsstrider"
	handelsetabeller.striderdrabbningar[94].beskrivning = "Rollpersonen har deltagit i uppvisningsstrider. Det kan röra sig om allt från tornerspel, svärdsdueller i hovet till gladiatorstrider och knytnävskamper framför bybor."
	handelsetabeller.striderdrabbningar[94].beskrivninghak = "\+2 Intryck. Lättlärd i Dansa. 2 enheter Rörelsefärdigheter"
	handelsetabeller.striderdrabbningar[94].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[94].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[94].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[94].subval[0][0][0].rorelsefardigheterenheter = 2; 
	handelsetabeller.striderdrabbningar[94].subval[0][0][0].dansa = {};
	handelsetabeller.striderdrabbningar[94].subval[0][0][0].dansa.lattlard=1; 
	handelsetabeller.striderdrabbningar[94].subval[0][0][0].intryck = {};
	handelsetabeller.striderdrabbningar[94].subval[0][0][0].intryck.bonus =2; 
	handelsetabeller.striderdrabbningar[94].subval[0][0][0].ovrigt="Har deltagit i uppvisningsstrider.";

	handelsetabeller.striderdrabbningar[95] = {}; 
	handelsetabeller.striderdrabbningar[95].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[95].vald = 0; 
	handelsetabeller.striderdrabbningar[95].rubrik = "Vapen i gåva"
	handelsetabeller.striderdrabbningar[95].beskrivning = "Rollpersonen har blivit skänkt ett vapen i gåva av en högt uppsatt och viktigt individ. Exempelvis en befälhavare, präst eller härskare. Vapnet är rikligt utsmyckat och smitt av en mästersmed och rollpersonen har övat med det flitigt."
	handelsetabeller.striderdrabbningar[95].beskrivninghak = "Rollpersonen får ett vapen där skadevärdet ökar med \+1T6 och det är värt tio gånger mer. Rollpersonen är dessutom Lättlärd i Stridsfärdigheten som är kopplad till vapnet"
	handelsetabeller.striderdrabbningar[95].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[95].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[95].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[95].subval[0][0][0].vapen="Ett vapen där skadevärdet ökar med \+1T6 och det är värt tio gånger mer än normalt.";
	handelsetabeller.striderdrabbningar[95].subval[0][0][0] = {};
	handelsetabeller.striderdrabbningar[95].subval[0][0][0].lattlardstridsfardigheter=1;
	
	handelsetabeller.striderdrabbningar[96] = {}; 
	handelsetabeller.striderdrabbningar[96].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[96].vald = 0; 
	handelsetabeller.striderdrabbningar[96].rubrik = "Vapenspecialist"
	handelsetabeller.striderdrabbningar[96].beskrivning = "Rollpersonen är särskilt skicklig i att hantera en typ av vapen."
	handelsetabeller.striderdrabbningar[96].beskrivninghak = "Lättlärd i valfri Stridsfärdighet. Alla vapen av denna typ gör \+1T6 skada för rollpersonen"
	handelsetabeller.striderdrabbningar[96].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[96].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[96].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[96].subval[0][0][0] = {};
	handelsetabeller.striderdrabbningar[96].subval[0][0][0].lattlardstridsfardigheter=1; 
	handelsetabeller.striderdrabbningar[96].subval[0][0][0].formaga="Alla vapen som är kopplade till stridsfärdigheten som rollpersonen är lättlärd i gör \+1T6 skada.";
	
	handelsetabeller.striderdrabbningar[97] = {}; 
	handelsetabeller.striderdrabbningar[97].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[97].vald = 0; 
	handelsetabeller.striderdrabbningar[97].rubrik = "Våghals"
	handelsetabeller.striderdrabbningar[97].beskrivning = "Rollpersonen njuter av att hamna i farliga situationer och därefter undkomma dem med livet i behåll. Detta gör att denne ofta sätter sig i fara bara för att få känna detta härliga rus."
	handelsetabeller.striderdrabbningar[97].beskrivninghak = "\+2 Livskraft, \+1T6 Reaktion. Det sekundära karaktärsdraget är Mod och är dessutom Låst. Skulle det låsas upp och bytas kvarstår dock bonusen till Livskraft och Reaktion"
	handelsetabeller.striderdrabbningar[97].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[97].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[97].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[97].subval[0][0][0].reaktion = {};
	handelsetabeller.striderdrabbningar[97].subval[0][0][0].reaktion.bonus = 4; 
	handelsetabeller.striderdrabbningar[97].subval[0][0][0].livskraft = {};
	handelsetabeller.striderdrabbningar[97].subval[0][0][0].livskraft.bonus =2; 
	handelsetabeller.striderdrabbningar[97].subval[0][0][0].karaktarsdrag="Det sekundära karaktärsdraget är Mod och är dessutom Låst.";

	handelsetabeller.striderdrabbningar[98] = {}; 
	handelsetabeller.striderdrabbningar[98].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[98].vald = 0; 
	handelsetabeller.striderdrabbningar[98].rubrik = "Återhämtar smärta"
	handelsetabeller.striderdrabbningar[98].beskrivning = "Rollpersonen blir sällan utmattad och smärtsamma skador skakar denne av sig efter bara en kort tids vila."
	handelsetabeller.striderdrabbningar[98].beskrivninghak = "Läkningstakten för Smärta ökar med 3 vilket innebär att rollpersonen återfår ett kryss Smärta efter sex timmar istället för ett dygn"
	handelsetabeller.striderdrabbningar[98].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[98].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[98].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[98].subval[0][0][0].lakningstakt = {};
	handelsetabeller.striderdrabbningar[98].subval[0][0][0].lakningstakt.egenskap="Läkningstakten för Smärta ökar med 3";

	handelsetabeller.striderdrabbningar[99] = {}; 
	handelsetabeller.striderdrabbningar[99].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[99].vald = 0; 
	handelsetabeller.striderdrabbningar[99].rubrik = "Ödesdigert misstag"
	handelsetabeller.striderdrabbningar[99].beskrivning = "Rollpersonen har begått ett ödesdigert misstag. Detta kan ha gjort att en drabbning förlorades, att en fästning blev intagen eller att en person som rollpersonen skulle skydda blev kidnappad eller dödad. Folk anklagar rollpersonen både öppet eller bakom dennes rygg för misslyckandet."
	handelsetabeller.striderdrabbningar[99].beskrivninghak = "2 valfria enheter. 1 Avtrubbningskryss för utsatthet"
	handelsetabeller.striderdrabbningar[99].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[99].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[99].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[99].subval[0][0][0].valfriaenheter=2; 
	handelsetabeller.striderdrabbningar[99].subval[0][0][0].avtrubbningutsatthet = 1; 
	handelsetabeller.striderdrabbningar[99].subval[0][0][0].ovrigt="Har begått ett ödesdigert misstag och folk anklagar rollpersonen både öppet eller bakom dennes rygg för misslyckandet.";
	
	handelsetabeller.striderdrabbningar[100] = {}; 
	handelsetabeller.striderdrabbningar[100].subval = [[[]]]; 
	handelsetabeller.striderdrabbningar[100].vald = 0; 
	handelsetabeller.striderdrabbningar[100].rubrik = "Händelserikt liv"
	handelsetabeller.striderdrabbningar[100].beskrivning = "Rollpersonen har haft ett händelserikt liv."
	handelsetabeller.striderdrabbningar[100].beskrivninghak = "1 extra slag på valfri händelsetabell och slå dessutom om detta slag"
	handelsetabeller.striderdrabbningar[100].subval[0][0][0] = {}; 
	handelsetabeller.striderdrabbningar[100].subval[0][0][0].valdasub = []; 
	handelsetabeller.striderdrabbningar[100].subval[0][0][0].vald = 0; 
	handelsetabeller.striderdrabbningar[100].subval[0][0][0].valfriatabellslag=1;


	
	
	
	
	for (i=1; i< handelsetabeller.striderdrabbningar.length; i++){
		handelsetabeller.striderdrabbningar[i].tabellnamn = "Strider \& drabbningar";
		handelsetabeller.striderdrabbningar[i].typ = "handelsetabellslag";
		handelsetabeller.striderdrabbningar[i].aktiverad=0;
	
		if ("beskrivningvaldbas" in handelsetabeller.striderdrabbningar[i]){
			
		}else{
			handelsetabeller.striderdrabbningar[i].beskrivningvaldbas=handelsetabeller.striderdrabbningar[i].beskrivning;
		}
		
		if ("beskrivninghakvaldbas" in handelsetabeller.striderdrabbningar[i]){
			
		}else{
			handelsetabeller.striderdrabbningar[i].beskrivninghakvaldbas=handelsetabeller.striderdrabbningar[i].beskrivninghak;
		}
		
		if ("nummer" in handelsetabeller.striderdrabbningar[i]){
			
		}else{
			handelsetabeller.striderdrabbningar[i].nummer=i;
		}
	}
	
    // --- //
    
    
    /*
    
    for (m=0; m < handelsetabellista.length; m++){
     
     
    	for (n=0; n < handelsetabeller[handelsetabeller.lista[m]].length; n++){
    		handelsetabeller[handelsetabeller.lista[m]][n].tabellresultat = n;
        	handelsetabeller[handelsetabeller.lista[m]][n].tabellnamn = handelsetabellista[m];
        
		 } 
    }
//
	*/
	return handelsetabeller
}