function hamta_miljolistor (){
	
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

	
	
	var miljolista = ["hav", "hov", "landsbygd", "larosate", "stad", "undrevarlden", "vildmark"];
	
    var miljoobjekt={};
    miljoobjekt.lista=miljolista;
	
	var i;
	var j;
	var k;
	var s;
	var t;
    
    var hav = {};
    hav.subval = [[[]]];
    hav.vald = 0;
	miljoobjekt.hav=hav;
   	hav.rubrik = "Hav";
	hav.namn = "hav";
	hav.beskrivning="Över lugna vatten och stormpiskade hav färdas fartyg mellan Mundanas otaliga hamnstäder. På havet finns den verkliga livsnerven då det gäller handel och ska man resa snabbt mellan länder så tar man sig över haven. De som kontrollerar haven har en makt som kan ödelägga länder eller fylla deras kistor med guld. I denna miljö har man troligtvis rest vida omkring, upplevt stormar och stiltje samt sett andra länder och otaliga hamnkrogar. Man har saltet i blodet som det heter, är härdad och erfaren av det turbulenta livet till sjöss och har sett mer än de flesta kunnat drömma om."
   	hav.subval[0][0][0] = {};
   	hav.subval[0][0][0].valdasub = [];
   	hav.subval[0][0][0].vald = 0;
	hav.subval[0][0][0].farderaventyr = 1; 
	hav.subval[0][0][0].striderdrabbningar = 1;
	hav.subval[0][0][0].valfriatabellslag = 1;
	hav.subval[0][0][0].beskrivningtabeller = [["1 slag på Intriger \& illgärningar"],["1 slag på Strider \& drabbningar"], ["1 slag på valfri tabell"]];
	
	hav.subval[0][0][0].kunskapsfardigheterenheter = 1;
	hav.subval[0][0][0].rorelsefardigheterenheter = 4;
	hav.subval[0][0][0].stridsfardigheterenheter = 2;
	hav.subval[0][0][0].vildmarksfardigheterenheter = 8;
	hav.subval[0][0][0].beskrivningenheter=[["1 enhet Kunskapsfärdigheter"],["4 enheter Rörelsefärdigheter"],["2 enheter Stridsfärdigheter"],["8 enheter Vildmarksfärdigheter"]];
	
	hav.subval[0].push([]);
	hav.subval[0][1][0] = {};
	hav.subval[0][1][0].valdasub = [];
	hav.subval[0][1][0].vald = 0;
	hav.subval[0][1][0].rubrik="Fiskeutrustning";
	hav.subval[0][1][0].beskrivning="Bestående av nät, trettio meter rev, fem krokar, renskniv och en korg.";
	hav.subval[0][1][0].resurs="Fiskeutrustning";
	
	hav.subval[0].push([]);
	hav.subval[0][2][0] = {};
	hav.subval[0][2][0].valdasub = [];
	hav.subval[0][2][0].vald = 0;
	hav.subval[0][2][0].rubrik="Startbelopp";
	hav.subval[0][2][0].beskrivning="30 silver";
	hav.subval[0][2][0].pengar=30;
	
	hav.subval.push([[]]);
	hav.subval[1][0][0] = {};
	hav.subval[1][0][0].valdasub = [];
	hav.subval[1][0][0].vald = 0;
	hav.subval[1][0][0].antalsubval=2;
	hav.subval[1][0][0].valdasub=[];
	
	hav.subval[1].push([]);
	hav.subval[1][1][0] = {};
	hav.subval[1][1][0].valdasub = [];
	hav.subval[1][1][0].vald = 0;
	hav.subval[1][1][0].rubrik="Avtrubbning";
	hav.subval[1][1][0].beskrivning="Rollpersonen har sett det mesta och får 1 Avtrubbningskryss för utsatthet.";
	hav.subval[1][1][0].avtrubbningutsatthet=1;

	hav.subval[1].push([]);
	hav.subval[1][2][0] = {};
	hav.subval[1][2][0].valdasub = [];
	hav.subval[1][2][0].vald = 0;
	hav.subval[1][2][0].rubrik="Egendom";
	hav.subval[1][2][0].beskrivning="Ett litet torp, en nedgången gård vid havet eller en våning i stadens sämre delar. Lever rollpersonen invid vattnet (hamnstad eller by vid kusten eller vattendrag) så har denne även en roddbåt eller mindre segelbåt.";
	hav.subval[1][2][0].resurs="En mindre egendom samt en liten båt";
	
	hav.subval[1].push([]);
	hav.subval[1][3][0] = {};
	hav.subval[1][3][0].valdasub = [];
	hav.subval[1][3][0].vald = 0;
	hav.subval[1][3][0].rubrik="Som fisken i vattnet";
	hav.subval[1][3][0].beskrivning="Lättlärd i Simma.";
	hav.subval[1][3][0].simma = {};
	hav.subval[1][3][0].simma.lattlard=1;
	
	hav.subval[1].push([]);
	hav.subval[1][4][0] = {};
	hav.subval[1][4][0].valdasub = [];
	hav.subval[1][4][0].vald = 0;
	hav.subval[1][4][0].rubrik="Språk";
	hav.subval[1][4][0].beskrivning="2 Språkenheter.";
	hav.subval[1][4][0].sprakenheter=2;
	
	hav.subval[1].push([]);
	hav.subval[1][5][0] = {};
	hav.subval[1][5][0].valdasub = [];
	hav.subval[1][5][0].vald = 0;
	hav.subval[1][5][0].rubrik="Tubkikare";
	hav.subval[1][5][0].beskrivning="En tubkikare som gör det möjligt att se över stora avstånd. Bonus \+1T6 på färdigheten Speja vid situationer där tubkikaren kan användas.";
	hav.subval[1][5][0].resurs="En tubkikare som ger \+1T6 på Speja";
	
	hav.subval[1].push([]);
	hav.subval[1][6][0] = {};
	hav.subval[1][6][0].valdasub = [];
	hav.subval[1][6][0].vald = 0;
	hav.subval[1][6][0].rubrik="Pengar";
	hav.subval[1][6][0].beskrivning="4T6×3 silver.";
	hav.subval[1][6][0].beskrivningvaldbas="pengar_resultat silver.";
	
	hav.subval[1][6][0].pengarslag="4T6x3";
	
	
	var hov = {};
	hov.subval = [[[]]];
	hov.vald = 0;
   	miljoobjekt.hov=hov;
    hov.rubrik = "Hov";
	hov.namn = "hov";
	hov.beskrivning= "I hoven befinner man sig nära makten eller är själv en del av den. Bland de styrande finns ett eget språk, ett sätt att bete sig och ett intrigerande som genast stänger ute alla som saknar dessa viktiga pusselbitar av kunskap. I denna miljö har man med största sannolikhet varit med om skönhet och nöjen, storslagna bjudningar, skvaller och intriger samt politiskt maktspel som påverkat hela riket. Man är en av dem som har en insikt i de maktfaktorer som styr riket och hur man smälter in och manipulerar dessa på bästa möjliga sätt.";
	hov.subval[0][0][0] = {};
	hov.subval[0][0][0].valdasub = [];
	hov.subval[0][0][0].vald = 0;
	hov.subval[0][0][0].intrigerillgarningar = 2;
	hov.subval[0][0][0].valfriatabellslag = 1;
	hov.subval[0][0][0].beskrivningtabeller = [["2 slag på Intriger \& illgärningar"], ["1 slag på valfri tabell"]];
	
	hov.subval[0][0][0].kunskapsfardigheterenheter = 3;
	hov.subval[0][0][0].rorelsefardigheterenheter = 1;
	hov.subval[0][0][0].socialafardigheterenheter = 8;
	hov.subval[0][0][0].beskrivningenheter=[["3 enheter Kunskapsfärdigheter"],["1 enhet Rörelsefärdigheter"],["8 enheter Sociala färdigheter"]];
	
	hov.subval[0].push([]);
	hov.subval[0][1][0] = {};
	hov.subval[0][1][0].valdasub = [];
	hov.subval[0][1][0].vald = 0;
	hov.subval[0][1][0].rubrik="Luxuösa kläder";
	hov.subval[0][1][0].beskrivning="En uppsättning figursydda och lyxiga kläder av mycket god kvalitet. Smycken och värdeföremål värda 50 silver.";
	hov.subval[0][1][0].resurs="Figursydda och lyxiga kläder" + "\n" + "Smycken värda 50 silver";
	
	hov.subval[0].push([]);
	hov.subval[0][2][0] = {};
	hov.subval[0][2][0].valdasub = [];
	hov.subval[0][2][0].vald = 0;
	hov.subval[0][2][0].rubrik="Startbelopp";
	hov.subval[0][2][0].beskrivning="100 silver";
	hov.subval[0][2][0].pengar=100;
	
	hov.subval.push([[]]);
	hov.subval[1][0][0] = {};
	hov.subval[1][0][0].valdasub = [];
	hov.subval[1][0][0].vald = 0;
	hov.subval[1][0][0].antalsubval=2;
	hov.subval[1][0][0].valdasub=[];
	
	hov.subval[1].push([]);
	hov.subval[1][1][0] = {};
	hov.subval[1][1][0].valdasub = [];
	hov.subval[1][1][0].vald = 0;
	hov.subval[1][1][0].rubrik="Avtrubbning";
	hov.subval[1][1][0].beskrivning="I intrigernas spel blir många utslagna, därför är det viktigt att vara kylig och manipulativ. 1 Avtrubbningskryss för utsatthet.";
	hov.subval[1][1][0].avtrubbningutsatthet=1;

	hov.subval[1].push([]);
	hov.subval[1][2][0] = {};
	hov.subval[1][2][0].valdasub = [];
	hov.subval[1][2][0].vald = 0;
	hov.subval[1][2][0].rubrik="Egendom";
	hov.subval[1][2][0].beskrivning="Ett mindre gods på landet, ett ståtligt hus i stadens bättre delar eller en större våning i en borg eller ett palats.";
	hov.subval[1][2][0].resurs="Ett gods, ståtligt hus eller stor våning.";
	
	hov.subval[1].push([]);
	hov.subval[1][3][0] = {};
	hov.subval[1][3][0].valdasub = [];
	hov.subval[1][3][0].vald = 0;
	hov.subval[1][3][0].rubrik="Född med silversked";
	hov.subval[1][3][0].beskrivning="Lättlärd i färdigheten Hovliv.";
	hov.subval[1][3][0].hovliv = {};
	hov.subval[1][3][0].hovliv.lattlard=1;
	
	hov.subval[1].push([]);
	hov.subval[1][4][0] = {};
	hov.subval[1][4][0].valdasub = [];
	hov.subval[1][4][0].vald = 0;
	hov.subval[1][4][0].rubrik="Slav eller tjänare";
	hov.subval[1][4][0].beskrivning="En slav eller tjänare som lyder och passar upp rollpersonen.";
	hov.subval[1][4][0].resurs="Lydig tjänare.";
	
	hov.subval[1].push([]);
	hov.subval[1][5][0] = {};
	hov.subval[1][5][0].valdasub = [];
	hov.subval[1][5][0].vald = 0;
	hov.subval[1][5][0].rubrik="Ståtligt riddjur";
	hov.subval[1][5][0].beskrivning="Ett ståtligt och präktigt riddjur, exempelvis en stridshäst, en snövit ridhäst eller något annat som drar till sig uppmärksamhet.";
	hov.subval[1][5][0].resurs="Ett ståtligt riddjur";
	
	hov.subval[1].push([]);
	hov.subval[1][6][0] = {};
	hov.subval[1][6][0].valdasub = [];
	hov.subval[1][6][0].vald = 0;
	hov.subval[1][6][0].rubrik="Pengar";
	hov.subval[1][6][0].beskrivning="4T6×10 silver.";
	hov.subval[1][6][0].beskrivningvaldbas="pengar_resultat silver.";
	hov.subval[1][6][0].pengarslag="4T6x10";
	
	
	var landsbygd = {};
	landsbygd.subval = [[[]]];
	landsbygd.vald = 0;
   	miljoobjekt.landsbygd=landsbygd;
    landsbygd.rubrik = "Landsbygd";
	landsbygd.namn = "landsbygd";
	
	landsbygd.beskrivning= "Sädesfält, hagar, betande djur, utspridda byar, skogsdungar, ståtliga gods, glittrande sjöar, borgar och ensliga gårdar. På landsbygden föder befolkningen dem som lever i städerna. Man må vara långt ifrån makten men man skapar sina egna regler och lever på det som landet skänker en. I denna miljö har man lärt sig att ta hand om sig själv och varandra. Man är en av de händiga och kunniga som tycks klara sig i vilken situation som helst där man lever i gränslandet mellan civilisation och vildmark.";
	landsbygd.subval[0][0][0] = {};
	landsbygd.subval[0][0][0].valdasub = [];
	landsbygd.subval[0][0][0].vald = 0;
	landsbygd.subval[0][0][0].farderaventyr = 1;
	landsbygd.subval[0][0][0].striderdrabbningar = 1;
	landsbygd.subval[0][0][0].valfriatabellslag = 1;
	landsbygd.subval[0][0][0].beskrivningtabeller = [["1 slag på Färder \& äventyr"],["1 slag på Strider \& drabbningar"], ["1 slag på valfri tabell"]];
	
	landsbygd.subval[0][0][0].rorelsefardigheterenheter = 3;
	landsbygd.subval[0][0][0].socialafardigheterenheter = 3;
	landsbygd.subval[0][0][0].stridsfardigheterenheter = 2;
	landsbygd.subval[0][0][0].vildmarksfardigheterenheter = 4;
	landsbygd.subval[0][0][0].beskrivningenheter=[["3 enheter Rörelsefärdigheter"],["3 enheter Sociala färdigheter"],["2 enheter Stridsfärdigheter"],["4 enheter Vildmarksfärdigheter"]];
	
	landsbygd.subval[0].push([]);
	landsbygd.subval[0][1][0] = {};
	landsbygd.subval[0][1][0].valdasub = [];
	landsbygd.subval[0][1][0].vald = 0;
	landsbygd.subval[0][1][0].rubrik="Lägerutrustning";
	landsbygd.subval[0][1][0].beskrivning="Tält för fyra personer, lykta med en halv liter lampolja, två rejäla filtar, en liten kittel med tillhörande trefot och kedja, en träslev och en vattensäck.";
	landsbygd.subval[0][1][0].resurs="Lägerutrustning \(tält, lykta, filt, kittel\).";
	
	landsbygd.subval[0].push([]);
	landsbygd.subval[0][2][0] = {};
	landsbygd.subval[0][2][0].valdasub = [];
	landsbygd.subval[0][2][0].vald = 0;
	landsbygd.subval[0][2][0].rubrik="Startbelopp";
	landsbygd.subval[0][2][0].beskrivning="30 silver";
	landsbygd.subval[0][2][0].pengar=30;
	
	landsbygd.subval.push([[]]);
	landsbygd.subval[1][0][0] = {};
	landsbygd.subval[1][0][0].valdasub = [];
	landsbygd.subval[1][0][0].vald = 0;
	landsbygd.subval[1][0][0].antalsubval=2;
	landsbygd.subval[1][0][0].valdasub=[];
	
	landsbygd.subval[1].push([]);
	landsbygd.subval[1][1][0] = {};
	landsbygd.subval[1][1][0].valdasub = [];
	landsbygd.subval[1][1][0].vald = 0;
	landsbygd.subval[1][1][0].rubrik="Avtrubbning";
	landsbygd.subval[1][1][0].beskrivning="Livet på landet kan vara mycket hårt. 1 Avtrubbningskryss för våld.";
	landsbygd.subval[1][1][0].avtrubbningvald=1;

	landsbygd.subval[1].push([]);
	landsbygd.subval[1][2][0] = {};
	landsbygd.subval[1][2][0].valdasub = [];
	landsbygd.subval[1][2][0].vald = 0;
	landsbygd.subval[1][2][0].rubrik="Dragdjur och vagn";
	landsbygd.subval[1][2][0].beskrivning="En häst, oxe eller annat dragdjur samt en fyrhjulig vagn.";
	landsbygd.subval[1][2][0].resurs="Dragdjur och vagn.";
	
	landsbygd.subval[1].push([]);
	landsbygd.subval[1][3][0] = {};
	landsbygd.subval[1][3][0].valdasub = [];
	landsbygd.subval[1][3][0].vald = 0;
	landsbygd.subval[1][3][0].rubrik="Egendom";
	landsbygd.subval[1][3][0].beskrivning="Ett torp, ett hus i en by eller en ensligt belägen gård.";
	landsbygd.subval[1][3][0].resurs="Torp eller enslig gård.";
	
	landsbygd.subval[1].push([]);
	landsbygd.subval[1][4][0] = {};
	landsbygd.subval[1][4][0].valdasub = [];
	landsbygd.subval[1][4][0].vald = 0;
	landsbygd.subval[1][4][0].rubrik="Expertiser";
	landsbygd.subval[1][4][0].beskrivning="1 poäng Expertiser.";
	landsbygd.subval[1][4][0].expertispoang=1;
	
	landsbygd.subval[1].push([]);
	landsbygd.subval[1][5][0] = {};
	landsbygd.subval[1][5][0].valdasub = [];
	landsbygd.subval[1][5][0].vald = 0;
	landsbygd.subval[1][5][0].rubrik="Hantverk";
	landsbygd.subval[1][5][0].beskrivning="1 poäng Hantverk";
	landsbygd.subval[1][5][0].hantverkpoang=1;
	
	landsbygd.subval[1].push([]);
	landsbygd.subval[1][6][0] = {};
	landsbygd.subval[1][6][0].valdasub = [];
	landsbygd.subval[1][6][0].vald = 0;
	landsbygd.subval[1][6][0].rubrik="Pengar";
	landsbygd.subval[1][6][0].beskrivning="4T6×3 silver.";
	landsbygd.subval[1][6][0].beskrivningvaldbas="pengar_resultat silver.";
	landsbygd.subval[1][6][0].pengarslag="4T6x3";
	
	
	
	var larosate = {};
	larosate.subval = [[[]]];
	larosate.vald = 0;
    miljoobjekt.larosate=larosate;
    larosate.rubrik = "Lärosäte";
	larosate.namn = "larosate";
	
	larosate.beskrivning= "Under dunkla valv och bibliotekens hyllor samlas de lärda för att förmedla sin kunskap. Lärosäten kan vara allt ifrån kloster och magiakademier till universitet eller vapenskolor där man finner det viktigt att de som tränas är starka i sinnet likväl som med svärdet. I denna miljö har man fokuserat på kunskap och man har spenderat mycket tid på att skärpa sitt intellekt och sitt vetande. Det är här som urgammal kunskap uppnystas, innovationer skapas och unga sinnen slipas till knivskarpa förmågor. Man är beläst i det mesta och det finns få frågor man inte kan svara på eller situationer som man inte kan lösa.";
	larosate.subval[0][0][0] = {};
	larosate.subval[0][0][0].valdasub = [];
	larosate.subval[0][0][0].vald = 0;
	larosate.subval[0][0][0].kunskapmysterier = 2;
	larosate.subval[0][0][0].valfriatabellslag = 1;
	larosate.subval[0][0][0].beskrivningtabeller = [["2 slag på Kunskap \& mysterier"], ["1 slag på valfri tabell"]];
	
	larosate.subval[0][0][0].kunskapsfardigheterenheter = 8;
	larosate.subval[0][0][0].socialafardigheterenheter = 3;
	larosate.subval[0][0][0].valfriaenheter = 2;
	larosate.subval[0][0][0].beskrivningenheter=[["8 enheter Kunskapsfärdigheter"],["3 enheter Sociala färdigheter"],["2 valfria enheter"]];
	
	
	larosate.subval[0].push([]);
	larosate.subval[0][1][0] = {};
	larosate.subval[0][1][0].valdasub = [];
	larosate.subval[0][1][0].vald = 0;
	larosate.subval[0][1][0].rubrik="Skrivutrustning";
	larosate.subval[0][1][0].beskrivning="Papper, skrivdon, bläckhorn, sigillstämpel och vax för sigill.";
	larosate.subval[0][1][0].resurs="Skrivutrustning \(papper, bläck, stämpel, vax\).";
	
	larosate.subval[0].push([]);
	larosate.subval[0][2][0] = {};
	larosate.subval[0][2][0].valdasub = [];
	larosate.subval[0][2][0].vald = 0;
	larosate.subval[0][2][0].rubrik="Startbelopp";
	larosate.subval[0][2][0].beskrivning="50 silver";
	larosate.subval[0][2][0].pengar=50;
	
	larosate.subval.push([[]]);
	larosate.subval[1][0][0] = {};
	larosate.subval[1][0][0].valdasub = [];
	larosate.subval[1][0][0].vald = 0;
	larosate.subval[1][0][0].antalsubval=2;
	larosate.subval[1][0][0].valdasub=[];
	
	larosate.subval[1].push([]);
	larosate.subval[1][1][0] = {};
	larosate.subval[1][1][0].valdasub = [];
	larosate.subval[1][1][0].vald = 0;
	larosate.subval[1][1][0].rubrik="Avtrubbning";
	larosate.subval[1][1][0].beskrivning="I studierna av tjocka luntor och i läromästarnas undervisning har det berättats om många fasansfulla ting såsom demoner, andar och gastar. Detta har stärkt rollpersonens psyke och denne känner inte längre lika stor fruktan inför dessa varelser. 1 Avtrubbningskryss för övernaturligt.";
	larosate.subval[1][1][0].avtrubbningovernaturligt=1;

	
	larosate.subval[1].push([]);
	larosate.subval[1][2][0] = {};
	larosate.subval[1][2][0].valdasub = [];
	larosate.subval[1][2][0].vald = 0;
	larosate.subval[1][2][0].rubrik="Egendom";
	larosate.subval[1][2][0].beskrivning="En kammare i lärosätet, ett ensligt beläget torp eller en liten våning i stadens bättre delar.";
	larosate.subval[1][2][0].resurs="Kammare, torp eller liten våning.";
	
	larosate.subval[1].push([]);
	larosate.subval[1][3][0] = {};
	larosate.subval[1][3][0].valdasub = [];
	larosate.subval[1][3][0].vald = 0;
	larosate.subval[1][3][0].rubrik="Expertiser";
	larosate.subval[1][3][0].beskrivning="1 poäng Expertiser";
	larosate.subval[1][3][0].expertispoang=1;
	
	
	larosate.subval[1].push([]);
	larosate.subval[1][4][0] = {};
	larosate.subval[1][4][0].valdasub = [];
	larosate.subval[1][4][0].vald = 0;
	larosate.subval[1][4][0].rubrik="Hantverk";
	larosate.subval[1][4][0].beskrivning="1 poäng Hantverk.";
	larosate.subval[1][4][0].hantverkpoang=1;
	
	larosate.subval[1].push([]);
	larosate.subval[1][5][0] = {};
	larosate.subval[1][5][0].valdasub = [];
	larosate.subval[1][5][0].vald = 0;
	larosate.subval[1][5][0].rubrik="Språk";
	larosate.subval[1][5][0].beskrivning="2 enheter Språk";
	larosate.subval[1][5][0].sprakenheter=2;
	
	larosate.subval[1].push([]);
	larosate.subval[1][6][0] = {};
	larosate.subval[1][6][0].valdasub = [];
	larosate.subval[1][6][0].vald = 0;
	larosate.subval[1][6][0].rubrik="Pengar";
	larosate.subval[1][6][0].beskrivning="4T6×5 silver.";
	larosate.subval[1][6][0].beskrivningvaldbas="pengar_resultat silver.";
	larosate.subval[1][6][0].pengarslag="4T6x5";
	
	var stad = {};
	stad.subval = [[[]]];
	stad.vald = 0;
   	miljoobjekt.stad=stad;
    stad.rubrik = "Stad";
	stad.namn = "stad";
	
	stad.beskrivning= "Överfyllda marknadstorg, folkvimlande gator, tavernor och värdshus i rad, otaliga hantverkargillen, vilda domedagsprofeter, lättmutade stadsvakter, dramatiska skådespel, billiga skökor och tjocka köpmän. Det är i städerna som det händer. I denna miljö är man väl insatt i det sociala och dramatiska livet i en stad. Man hör nyheter från hela världen och befinner sig mitt i ett av rikets pumpande hjärtan där resenärer reser in och ut likt en evig blodström. Det är här man har förmågan att bygga sig ett namn och en rikedom utan att vara av vare sig adelsblod eller rätt folkslag. Åtminstone om man har rätt kunskap, världsvana och social skicklighet.";
	stad.subval[0][0][0] = {};
	stad.subval[0][0][0].valdasub = [];
	stad.subval[0][0][0].vald = 0;
	stad.subval[0][0][0].intrigerillgarningar = 1;
	stad.subval[0][0][0].kunskapmysterier= 1;
	stad.subval[0][0][0].valfriatabellslag = 1;
	stad.subval[0][0][0].beskrivningtabeller = [["1 slag på Intriger \& illgärningar"],["1 slag på Kunskap \& mysterier"], ["1 slag på valfri tabell"]];
		
	stad.subval[0][0][0].kunskapsfardigheterenheter = 2;
	stad.subval[0][0][0].rorelsefardigheterenheter = 3;
	stad.subval[0][0][0].socialafardigheterenheter = 5;
	stad.subval[0][0][0].stridsfardigheterenheter = 2;
	stad.subval[0][0][0].beskrivningenheter=[["2 enheter Kunskapsfärdigheter"],["3 enheter Rörelsefärdigheter"],["5 enheter Sociala färdigheter"],["2 enheter Stridsfärdigheter"]];
	
	
	stad.subval[0].push([]);
	stad.subval[0][1][0] = {};
	stad.subval[0][1][0].valdasub = [];
	stad.subval[0][1][0].vald = 0;
	stad.subval[0][1][0].rubrik="Finkläder";
	stad.subval[0][1][0].beskrivning="En uppsättning finare kläder som man vanligen bär vid festligheter och högtider.";
	stad.subval[0][1][0].resurs="Finkläder för fest och högtid.";
	
	stad.subval[0].push([]);
	stad.subval[0][2][0] = {};
	stad.subval[0][2][0].valdasub = [];
	stad.subval[0][2][0].vald = 0;
	stad.subval[0][2][0].rubrik="Startbelopp";
	stad.subval[0][2][0].beskrivning="60 silver";
	stad.subval[0][2][0].pengar=60;
	
	stad.subval.push([[]]);
	stad.subval[1][0][0] = {};
	stad.subval[1][0][0].valdasub = [];
	stad.subval[1][0][0].vald = 0;
	stad.subval[1][0][0].antalsubval=2;
	stad.subval[1][0][0].valdasub=[];
	
	stad.subval[1].push([]);
	stad.subval[1][1][0] = {};
	stad.subval[1][1][0].valdasub = [];
	stad.subval[1][1][0].vald = 0;
	stad.subval[1][1][0].rubrik="Avtrubbning";
	stad.subval[1][1][0].beskrivning="I staden är det viktigt att hålla sig vän med rätt personer och inte tappa ansiktet. 1 Avtrubbningskryss för utsatthet.";
	stad.subval[1][1][0].avtrubbningutsatthet=1;

	stad.subval[1].push([]);
	stad.subval[1][2][0] = {};
	stad.subval[1][2][0].valdasub = [];
	stad.subval[1][2][0].vald = 0;
	stad.subval[1][2][0].rubrik="Egendom";
	stad.subval[1][2][0].beskrivning="Ett litet hus i stadens sämre delar eller en våning i stadens bättre delar.";
	stad.subval[1][2][0].resurs="Ett litet hus eller våning i en stad.";
	
	stad.subval[1].push([]);
	stad.subval[1][3][0] = {};
	stad.subval[1][3][0].valdasub = [];
	stad.subval[1][3][0].vald = 0;
	stad.subval[1][3][0].rubrik="Expertiser";
	stad.subval[1][3][0].beskrivning="1 poäng Expertiser";
	stad.subval[1][3][0].expertispoang=1;
	
	stad.subval[1].push([]);
	stad.subval[1][4][0] = {};
	stad.subval[1][4][0].valdasub = [];
	stad.subval[1][4][0].vald = 0;
	stad.subval[1][4][0].rubrik="Hantverk";
	stad.subval[1][4][0].beskrivning="1 poäng Hantverk";
	stad.subval[1][4][0].hantverkpoang=1;
	
	stad.subval[1].push([]);
	stad.subval[1][5][0] = {};
	stad.subval[1][5][0].valdasub = [];
	stad.subval[1][5][0].vald = 0;
	stad.subval[1][5][0].rubrik="Språk";
	stad.subval[1][5][0].beskrivning="2 Språkenheter";
	stad.subval[1][5][0].sprakenheter=2;
	
	stad.subval[1].push([]);
	stad.subval[1][6][0] = {};
	stad.subval[1][6][0].valdasub = [];
	stad.subval[1][6][0].vald = 0;
	stad.subval[1][6][0].rubrik="Pengar";
	stad.subval[1][6][0].beskrivning="4T6×6 silver.";
	stad.subval[1][6][0].beskrivningvaldbas="pengar_resultat silver.";
	stad.subval[1][6][0].pengarslag="4T6x6";
   
   
	var undrevarlden = {};
	undrevarlden.subval = [[[]]];
	undrevarlden.vald = 0;
   	miljoobjekt.undrevarlden=undrevarlden;
    undrevarlden.rubrik = "Undre världen";
	undrevarlden.namn = "undrevarlden";
	
	undrevarlden.beskrivning= "Mörka gränder, smutsiga bordeller, fallfärdiga kyffen, slummiga områden, ensliga tillhåll och dunkla tavernor är hemmen för de utstötta som trotsar de lagar som de styrande tvingat på dem. I städernas sämre delar finns de som frossar på de rester som de där uppe lämnar efter sig eller inte är skickliga nog att bevaka. I denna miljö får man lära sig att livet är en ständig kamp där de svaga dukar under. Man har fått lära sig att kämpa för sin överlevnad och är mest troligt väl förtrogen med såväl bedrägerier som stölder.";
	undrevarlden.subval[0][0][0] = {};
	undrevarlden.subval[0][0][0].valdasub = [];
	undrevarlden.subval[0][0][0].vald = 0;
	undrevarlden.subval[0][0][0].intrigerillgarningar = 1;
	undrevarlden.subval[0][0][0].striderdrabbningar = 1;
	undrevarlden.subval[0][0][0].valfriatabellslag = 1;
	undrevarlden.subval[0][0][0].beskrivningtabeller = [["1 slag på Intriger \& illgärningar"],["1 slag på Strider \& drabbningar"], ["1 slag på valfri tabell"]];
	
	undrevarlden.subval[0][0][0].rorelsefardigheterenheter = 6;
	undrevarlden.subval[0][0][0].socialafardigheterenheter = 3;
	undrevarlden.subval[0][0][0].stridsfardigheterenheter = 3;
	undrevarlden.subval[0][0][0].beskrivningenheter=[["6 enheter Rörelsefärdigheter"],["3 enheter Sociala färdigheter"],["3 enheter Stridsfärdigheter"]];
	
	undrevarlden.subval[0].push([]);
	undrevarlden.subval[0][1][0] = {};
	undrevarlden.subval[0][1][0].valdasub = [];
	undrevarlden.subval[0][1][0].vald = 0;
	undrevarlden.subval[0][1][0].rubrik="Tjuvutrustning";
	undrevarlden.subval[0][1][0].beskrivning="En uppsättning låsdyrkar, fickspegel, vax, en fil, fem meter rep med änterhake, en liten säck och ett par mjuka skor.";
	undrevarlden.subval[0][1][0].resurs="Tjuvutrustning \(låsdyrkar, spegel, vax, fil, rep, änterhake, säck\).";
	
	undrevarlden.subval[0].push([]);
	undrevarlden.subval[0][2][0] = {};
	undrevarlden.subval[0][2][0].valdasub = [];
	undrevarlden.subval[0][2][0].vald = 0;
	undrevarlden.subval[0][2][0].rubrik="Startbelopp";
	undrevarlden.subval[0][2][0].beskrivning="20 silver";
	undrevarlden.subval[0][2][0].pengar=20;
	
	undrevarlden.subval.push([[]]);
	undrevarlden.subval[1][0][0] = {};
	undrevarlden.subval[1][0][0].valdasub = [];
	undrevarlden.subval[1][0][0].vald = 0;
	undrevarlden.subval[1][0][0].antalsubval=2;
	undrevarlden.subval[1][0][0].valdasub=[];
	
	undrevarlden.subval[1].push([]);
	undrevarlden.subval[1][1][0] = {};
	undrevarlden.subval[1][1][0].valdasub = [];
	undrevarlden.subval[1][1][0].vald = 0;
	undrevarlden.subval[1][1][0].rubrik="Avtrubbning";
	undrevarlden.subval[1][1][0].beskrivning="Livet i undre världen är mycket hårt. 1 Avtrubbningskryss för våld.";
	undrevarlden.subval[1][1][0].avtrubbningvald=1;

	undrevarlden.subval[1].push([]);
	undrevarlden.subval[1][2][0] = {};
	undrevarlden.subval[1][2][0].valdasub = [];
	undrevarlden.subval[1][2][0].vald = 0;
	undrevarlden.subval[1][2][0].rubrik="Dolt vapen";
	undrevarlden.subval[1][2][0].beskrivning="Ett litet vapen som är lätt att dölja. Det kan röra sig om en dolk som är gjord för att döljas under kläderna, en lång hårnål som kan användas som vapen, ett kortsvärd dolt i en stav eller något liknande. Det är mycket svårt (svårighet 18) att lista ut att rollpersonen är beväpnad för någon som genomsöker denne.";
	undrevarlden.subval[1][2][0].resurs="Ett dolt vapen.";
	
	undrevarlden.subval[1].push([]);
	undrevarlden.subval[1][3][0] = {};
	undrevarlden.subval[1][3][0].valdasub = [];
	undrevarlden.subval[1][3][0].vald = 0;
	undrevarlden.subval[1][3][0].rubrik="Egendom";
	undrevarlden.subval[1][3][0].beskrivning="En vindsvåning, ett litet hus i en gränd, ett rum på en smutsig taverna, en källarvåning eller liknande.";
	undrevarlden.subval[1][3][0].resurs="Vindsvåning, rum på taverna eller litet hus i en gränd.";
	
	undrevarlden.subval[1].push([]);
	undrevarlden.subval[1][4][0] = {};
	undrevarlden.subval[1][4][0].valdasub = [];
	undrevarlden.subval[1][4][0].vald = 0;
	undrevarlden.subval[1][4][0].rubrik="Född på gatan";
	undrevarlden.subval[1][4][0].beskrivning="Lättlärd i Skumraskaffärer.";
	undrevarlden.subval[1][4][0].skumraskaffarer = {};
	undrevarlden.subval[1][4][0].skumraskaffarer.lattlard=1;
	
	undrevarlden.subval[1].push([]);
	undrevarlden.subval[1][5][0] = {};
	undrevarlden.subval[1][5][0].valdasub = [];
	undrevarlden.subval[1][5][0].vald = 0;
	undrevarlden.subval[1][5][0].rubrik="Gifter";
	undrevarlden.subval[1][5][0].beskrivning="1 dos blodgift och 3 doser bedövande gift.";
	undrevarlden.subval[1][5][0].resurs="1 dos blodgift och 3 doser bedövande gift.";
	
	undrevarlden.subval[1].push([]);
	undrevarlden.subval[1][6][0] = {};
	undrevarlden.subval[1][6][0].valdasub = [];
	undrevarlden.subval[1][6][0].vald = 0;
	undrevarlden.subval[1][6][0].rubrik="Pengar";
	undrevarlden.subval[1][6][0].beskrivning="4T6×2 silver.";
	undrevarlden.subval[1][6][0].beskrivningvaldbas="pengar_resultat silver.";
	undrevarlden.subval[1][6][0].pengarslag="4T6x2";
   
   
	var vildmark = {};
	vildmark.subval = [[[]]];
	vildmark.vald = 0;
   	miljoobjekt.vildmark=vildmark;
    vildmark.rubrik = "Vildmark";
	vildmark.namn = "vildmark";
	
	vildmark.beskrivning= "Långt borta från städerna och byarna breder sig vildmarken ut sig. En otämjd best med otaliga faror och mångtaliga rikedomar. Bland kuperade slätter, djupa skogar, öknens ändlösa dyner, dimmiga träskmarker, frusna bergsryggar och ödsliga floddalar finns det dock de som skapat sig ett liv. I dessa miljöer måste man lita till sina kunskaper för att klara sig för dagen och man är skicklig på att ta sig fram och leva på det som naturen har att erbjuda.";
	vildmark.subval[0][0][0] = {};
	vildmark.subval[0][0][0].valdasub = [];
	vildmark.subval[0][0][0].vald = 0;
	vildmark.subval[0][0][0].farderaventyr = 1;
	vildmark.subval[0][0][0].striderdrabbningar = 1;
	vildmark.subval[0][0][0].valfriatabellslag = 1;
	vildmark.subval[0][0][0].beskrivningtabeller = [["1 slag på Färder \& äventyr"],["1 slag på Strider \& drabbningar"], ["1 slag på valfri tabell"]];
	
	
	vildmark.subval[0][0][0].rorelsefardigheterenheter = 2;
	vildmark.subval[0][0][0].stridsfardigheterenheter = 2;
	vildmark.subval[0][0][0].vildmarksfardigheterenheter = 8;
	vildmark.subval[0][0][0].beskrivningenheter=[["2 enheter Rörelsefärdigheter"],["2 enheter Stridsfärdigheter"],["8 enheter Vildmarksfärdigheter"]];
	
	vildmark.subval[0].push([]);
	vildmark.subval[0][1][0] = {};
	vildmark.subval[0][1][0].valdasub = [];
	vildmark.subval[0][1][0].vald = 0;
	vildmark.subval[0][1][0].rubrik="Jaktutrustning";
	vildmark.subval[0][1][0].beskrivning="Ett dussin snaror, jakthorn, slaktkniv, kortbåge eller kastspjut.";
	vildmark.subval[0][1][0].resurs="Jatktutrustning \(snaror, jakthorn, kniv, båge eller spjut\).";
	vildmark.subval[0][1][0].vanligtvapen=1;
	
	vildmark.subval[0].push([]);
	vildmark.subval[0][2][0] = {};
	vildmark.subval[0][2][0].valdasub = [];
	vildmark.subval[0][2][0].vald = 0;
	vildmark.subval[0][2][0].rubrik="Lägerutrustning";
	vildmark.subval[0][2][0].beskrivning="Tält för fyra personer, lykta med en halv liter lampolja, två rejäla filtar, en liten kittel med tillhörande trefot och kedja, en träslev och en vattensäck.";
	vildmark.subval[0][2][0].resurs="Lägerutrustning \(tält, lykta, filtar, kittel\).";
	
	
	vildmark.subval[0].push([]);
	vildmark.subval[0][3][0] = {};
	vildmark.subval[0][3][0].valdasub = [];
	vildmark.subval[0][3][0].vald = 0;
	vildmark.subval[0][3][0].rubrik="Startbelopp";
	vildmark.subval[0][3][0].beskrivning="20 silver";
	vildmark.subval[0][3][0].pengar=20;
	
	vildmark.subval.push([[]]);
	vildmark.subval[1][0][0] = {};
	vildmark.subval[1][0][0].valdasub = [];
	vildmark.subval[1][0][0].vald = 0;
	vildmark.subval[1][0][0].antalsubval=2;
	vildmark.subval[1][0][0].valdasub=[];
	
	vildmark.subval[1].push([]);
	vildmark.subval[1][1][0] = {};
	vildmark.subval[1][1][0].valdasub = [];
	vildmark.subval[1][1][0].vald = 0;
	vildmark.subval[1][1][0].rubrik="Avtrubbning";
	vildmark.subval[1][1][0].beskrivning="Livet i vildmarken kan ge många svåra umbäranden och man måste försvara sig mot vilddjur och bestar. 1 Avtrubbningskryss för våld.";
	vildmark.subval[1][1][0].avtrubbningvald=1;

	vildmark.subval[1].push([]);
	vildmark.subval[1][2][0] = {};
	vildmark.subval[1][2][0].valdasub = [];
	vildmark.subval[1][2][0].vald = 0;
	vildmark.subval[1][2][0].rubrik="Egendom";
	vildmark.subval[1][2][0].beskrivning="Ett hus långt ut i vildmarken, en naturlig grotta, en upprustad ruin, en stor koja, ett hus i en primitiv bosättning, eller liknande.";
	vildmark.subval[1][2][0].resurs="Hus i vildmarken, grotta, ruin eller koja.";
	
	vildmark.subval[1].push([]);
	vildmark.subval[1][3][0] = {};
	vildmark.subval[1][3][0].valdasub = [];
	vildmark.subval[1][3][0].vald = 0;
	vildmark.subval[1][3][0].rubrik="Född i vildmarken";
	vildmark.subval[1][3][0].beskrivning="Lättlärd i Vildmarksvana.";
	vildmark.subval[1][3][0].vildmarksvana = {};
	vildmark.subval[1][3][0].vildmarksvana.lattlard=1;
	
	vildmark.subval[1].push([]);
	vildmark.subval[1][4][0] = {};
	vildmark.subval[1][4][0].valdasub = [];
	vildmark.subval[1][4][0].vald = 0;
	vildmark.subval[1][4][0].rubrik="Riddjur";
	vildmark.subval[1][4][0].beskrivning="En häst, mulåsna eller liknande.";
	vildmark.subval[1][4][0].resurs="Ett riddjur";
	
	vildmark.subval[1].push([]);
	vildmark.subval[1][5][0] = {};
	vildmark.subval[1][5][0].valdasub = [];
	vildmark.subval[1][5][0].vald = 0;
	vildmark.subval[1][5][0].rubrik="Vildmarkskläder";
	vildmark.subval[1][5][0].beskrivning="Slitstarka kläder i naturliga färger som smälter in i terrängen. De är även varma och skyddar mot elementen. Bonus \+1T6 till färdigheten Gömma då man vistas i en terräng där kläderna smälter samman med landskapet.";
	vildmark.subval[1][5][0].resurs="Vildmarkskläder som ger \+1T6 på Gömma";
	
	vildmark.subval[1].push([]);
	vildmark.subval[1][6][0] = {};
	vildmark.subval[1][6][0].valdasub = [];
	vildmark.subval[1][6][0].vald = 0;
	vildmark.subval[1][6][0].rubrik="Pengar";
	vildmark.subval[1][6][0].beskrivning="4T6×2 silver.";
	vildmark.subval[1][6][0].beskrivningvaldbas="pengar_resultat silver.";
	vildmark.subval[1][6][0].pengarslag="4T6x2";
   

    
    
    /*
	// förmodligen battre med lista av objekt, därav kommentering

	var miljoobjektlista={};
	*/
	
	miljoobjekt.lista=miljolista;
	for (t = 0; t < miljoobjekt.lista.length; t++){
    	//miljoobjektlista[miljolista[i]] = window[miljolista[i]];
		miljoobjekt[miljolista[t]].aktiverad=0;
		
		// Sätter beskrivningvaldbas till beskrivning om den förra saknas
		for (i=0;i<miljoobjekt[miljolista[t]].subval.length;i++){
			for (j=0;j<miljoobjekt[miljolista[t]].subval[i].length;j++){
				for (k=0;k<miljoobjekt[miljolista[t]].subval[i][j].length;k++){
					if ("beskrivningvaldbas" in miljoobjekt[miljolista[t]].subval[i][j][k]){
					}else{
						if ("beskrivning" in miljoobjekt[miljolista[t]].subval[i][j][k]){
							miljoobjekt[miljolista[t]].subval[i][j][k].beskrivningvaldbas=miljoobjekt[miljolista[t]].subval[i][j][k].beskrivning;
						}
						
					}
				}	
			}		
		}
	}

	
    
    var miljoobjektlista=[];
	for (i = 0; i < miljolista.length; i++){
    	miljoobjektlista.push(window[miljolista[i]]);
    }
	
    // return [miljolista, miljoobjektlista];
    return miljoobjekt
}
