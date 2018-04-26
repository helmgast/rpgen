function hamta_folkslaglistor (){
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

	/* todo
	Summera namnlista, kvinnonamnlista och mansnamnlista till rot
	För in system för underrubrik för exempelvis provinser eller totemdjur
	
	*/
	
	var i;
	var j;
	var k;
	var s;
	var t;
	
	var folkslaglista = ["adasier", "cermirier", "cirefalier", "damarier", "fedaki", "genver", "ghor", "jahann", "jargier", "kamorian", "marnakhtirak", "missla", "pyar", "taup","thism", "utmarkare", "zolod"];
	//var folkslaglista = ["adasier", "cirefalier", "fedaki", "genver", "jahann", "jargier", "kamorian"];
	//var folkslaglista = ["zolod"];
	var folkslagobjekt={};
	folkslagobjekt.lista=folkslaglista;
	folkslagobjekt.rubriker=folkslaglista;
	//["adasier", "cermirier", "cirefalier", "damarier", "fedaki", "genver", "jahann", "jargier", "kamorian", "marnakhtirak", "missla", "pyar", "taup", "utmarkare", "zolod"];

	fardighetslistaobjekt = hamta_fardighetslistaobjekt(); // Behövs för zolods 5T6 Hantverksfärdighet
	hantverkfardigheter=fardighetslistaobjekt.hantverkfardigheter.lista;
	fardighetsobjekt=hamta_fardighetsobjekt();
    
    var adasier={};
	folkslagobjekt.adasier=adasier;
    adasier.rubrik="Adasier";
	adasier.namn="adasier";
	
	adasier.beskrivning="Adasiernas ursprung är Maazenträsket i södra Jargien men ett fåtal av dem har kommit att sprida sig till andra delar av Kejsardömet. De har en lätt grönaktig hy och rudimentär simhud mellan fingrarna och tårna. De verkar bara ha hår på huvudet och det är nästan alltid svart, långt och rakt. Ögonfärgerna är vanligtvis mörka." + "\n" + "För en adasier är familjen och deras gud Muaraks levnadsregler mycket viktiga. Detta gör att de ofta ses som kättare. Adasier är ofta mycket stolta över sin tro och sitt ursprung men tvingas dölja detta för att inte bli inkvisitionens offer. En typisk adasisk kvinna är cirka 160 cm lång och väger cirka 55 kg. En typisk adasisk man är cirka 165 cm lång och väger cirka 60 kg.";
	
	adasier.subval=[[[]]];
	adasier.subval[0][0][0]={};
	adasier.subval[0][0][0].valdasub = [];
	adasier.subval[0][0][0].vald = 0;
	adasier.subval[0][0][0].styrka = {};
	adasier.subval[0][0][0].styrka.varde=6;
	adasier.subval[0][0][0].talighet = {};
	adasier.subval[0][0][0].talighet.varde=11;
	adasier.subval[0][0][0].rorlighet = {};
	adasier.subval[0][0][0].rorlighet.varde=12;
	adasier.subval[0][0][0].uppfattning = {};
	adasier.subval[0][0][0].uppfattning.varde=10;
	adasier.subval[0][0][0].vilja = {};
	adasier.subval[0][0][0].vilja.varde=9;
	adasier.subval[0][0][0].psyke = {};
	adasier.subval[0][0][0].psyke.varde=7;
	adasier.subval[0][0][0].visdom = {};
	adasier.subval[0][0][0].visdom.varde=4;
	adasier.subval[0][0][0].utstralning = {};
	adasier.subval[0][0][0].utstralning.varde=7;
	adasier.subval[0][0][0].beskrivningattribut=[[["Styrka"],["1T6\+2"]],[["Tålighet"],["2T6\+3"]],[["Rörlighet"],["3T6"]],[["Uppfattning"],["2T6\+2"]],[["Vilja"],["2T6\+2"]],[["Psyke"],["1T6\+3"]],[["Visdom"],["1T6"]],[["Utstrålning"],["1T6\+3"]]]
	
	adasier.subval[0].push([]);
	adasier.subval[0][1][0]={};
	adasier.subval[0][1][0].valdasub = [];
	adasier.subval[0][1][0].vald = 0;
	adasier.subval[0][1][0].rubrik="Böjliga";
	adasier.subval[0][1][0].beskrivning="Adasier är smidiga och böjliga och kan lätt slingra sig ur rep och bojor. De börjar med expertisen Utbrytarkonst 4T6. De får även 2 enheter Rörelsefärdigheter.";
	adasier.subval[0][1][0].utbrytarkonst = {};
	adasier.subval[0][1][0].utbrytarkonst.enheter=3;
	adasier.subval[0][1][0].rorelsefardigheterenheter=2;

	adasier.subval[0].push([]);
	adasier.subval[0][2][0]={};
	adasier.subval[0][2][0].valdasub = [];
	adasier.subval[0][2][0].vald = 0;
	adasier.subval[0][2][0].rubrik="Dricka saltvatten";
	adasier.subval[0][2][0].beskrivning="Adasier kan dricka, och klara sig på, såväl bräckt som saltvatten. Saltet skiljs från vätskan och utsöndras via tårkanalerna likt små saltkristaller.";
	adasier.subval[0][2][0].formaga="Kan dricka saltvatten";

	adasier.subval[0].push([]);
	adasier.subval[0][3][0]={};
	adasier.subval[0][3][0].valdasub = [];
	adasier.subval[0][3][0].vald = 0;
	adasier.subval[0][3][0].rubrik="Naturliga simmare";
	adasier.subval[0][3][0].beskrivning="Färdigheten Simma är Lättlärd och adasiern börjar med 5T6 i den. Adasier har +3T6 på alla slag för att hålla andan.";
	adasier.subval[0][3][0].simma = {};
	adasier.subval[0][3][0].simma.lattlard=1;
	adasier.subval[0][3][0].simma.enheter=7;

	
	
	adasier.subval[0][3][0].formaga="Bonus \+3T6 för att hålla andan";

	adasier.subval[0].push([]);
	adasier.subval[0][4][0]={};
	adasier.subval[0][4][0].valdasub = [];
	adasier.subval[0][4][0].vald = 0;
	adasier.subval[0][4][0].rubrik="Träskens faror"
	adasier.subval[0][4][0].beskrivning="I Maazenträsken måste man lära sig bekämpa allehanda monster för att överleva. Alla närstridsvapen räknas som att de har vapenegenskapen Sargande i en adasiers händer. De får dessutom 1 extra slag på händelsetabellen Färder \& äventyr."
	adasier.subval[0][4][0].formaga="Alla närstridsvapen räknas som Sargande";
	adasier.subval[0][4][0].farderaventyr=1;
	
	
	adasier.subval[0].push([]);
	adasier.subval[0][5][0]={};
	adasier.subval[0][5][0].valdasub = [];
	adasier.subval[0][5][0].vald = 0;
	adasier.subval[0][5][0].antalsubval=4;
	
	adasier.subval[0][5][1]={};
	adasier.subval[0][5][1].valdasub = [];
	adasier.subval[0][5][1].vald = 0;
	adasier.subval[0][5][1].rubrik="Talade språk"
	adasier.subval[0][5][1].beskrivning="Adask, lägre jargiska"
	adasier.subval[0][5][1].taladesprak="Adask, lägre jargiska"
	adasier.subval[0][5][1].adask = {};
	adasier.subval[0][5][1].adask.enheter=1;
	adasier.subval[0][5][1].lagrejargiska = {};
	adasier.subval[0][5][1].lagrejargiska.enheter=1;
	
	adasier.subval[0][5][2]={};
	adasier.subval[0][5][2].valdasub = [];
	adasier.subval[0][5][2].vald = 0;
	adasier.subval[0][5][2].rubrik="Skriftspråk"
	adasier.subval[0][5][2].beskrivning="Inga."
	adasier.subval[0][5][2].skriftsprak="Inga."
	
	adasier.subval[0][5][3]={};
	adasier.subval[0][5][3].valdasub = [];
	adasier.subval[0][5][3].vald = 0;
	adasier.subval[0][5][3].rubrik="Kvinnonamn"
	adasier.subval[0][5][3].kvinnonamnlista=["Ada", "Bah", "Cazena", "Dagoi", "Eggiz", "Keza", "Liizi", "Maaneva", "Pazeri", "Taan", "Zaa"];
	adasier.subval[0][5][3].beskrivning="Ada, Bah, Cazena, Dagoi, Eggiz, Keza, Liizi, Maaneva, Pazeri, Taan, Zaa";
	
	adasier.subval[0][5][4]={};
	adasier.subval[0][5][4].valdasub = [];
	adasier.subval[0][5][4].vald = 0;
	adasier.subval[0][5][4].rubrik="Mansnamn"
	adasier.subval[0][5][4].beskrivning="Aanaz, Bzaar, Damer, Faahye, Gzir, Huuzen, Nan, Remus, Zaaz";
	adasier.subval[0][5][4].mansnamnlista=["Aanaz", "Bzaar", "Damer", "Faahye", "Gzir", "Huuzen", "Nan", "Remus", "Zaaz"];
	
    var cirefalier={};
	folkslagobjekt.cirefalier=cirefalier;
    cirefalier.rubrik="Cirefalier";
	cirefalier.namn="cirefalier";
	
	cirefalier.beskrivning = "Det cirefaliska folket har sitt ursprung på ögruppen Melorion söder om Jargien. De är kända för sin skicklighet som handelsmän och deras girighet är beryktad. De handlar med allt och alla så länge som det lönar sig." + "\n" + "Det är ovanligt att cirefalier gifter sig med människor från andra folk och den cirefaliska folkgruppen är därför trots sin spridning ofta ganska särpräglad och tätt sammanhållen. Inavel är vanligt bland cirefalierna och giftermål mellan syskon är accepterat inom det cirefaliska samväldet." + "\n" + "En cirefalier är lätt ljusbrun i hyn, har ofta mörkt hår och mörkt blå eller bruna ögon. De har vanligtvis ganska markerade drag, såsom tydliga hakor, näsor och pannor. En typisk cirefalisk kvinna är omkring 175 cm och väger cirka 70 kg. En typisk cirefalisk man är omkring 185 cm och väger cirka 80 kg."
	
	cirefalier.subval=[[[]]];
	cirefalier.subval[0][0][0]={};
	cirefalier.subval[0][0][0].valdasub = [];
	cirefalier.subval[0][0][0].vald = 0;
	cirefalier.subval[0][0][0].styrka = {};
	cirefalier.subval[0][0][0].styrka.varde=8;
	cirefalier.subval[0][0][0].talighet = {};
	cirefalier.subval[0][0][0].talighet.varde=8;
	cirefalier.subval[0][0][0].rorlighet = {};
	cirefalier.subval[0][0][0].rorlighet.varde=8;
	cirefalier.subval[0][0][0].uppfattning = {};
	cirefalier.subval[0][0][0].uppfattning.varde=6;
	cirefalier.subval[0][0][0].vilja = {};
	cirefalier.subval[0][0][0].vilja.varde=8;
	cirefalier.subval[0][0][0].psyke = {};
	cirefalier.subval[0][0][0].psyke.varde=8;
	cirefalier.subval[0][0][0].visdom = {};
	cirefalier.subval[0][0][0].visdom.varde=10;
	cirefalier.subval[0][0][0].utstralning = {};
	cirefalier.subval[0][0][0].utstralning.varde=10;
	cirefalier.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6"]],[["Tålighet"],["2T6"]],[["Rörlighet"],["2T6"]],[["Uppfattning"],["1T6\+2"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6"]],[["Visdom"],["2T6\+2"]],[["Utstrålning"],["2T6\+2"]]]
	
	cirefalier.subval[0].push([]);
	cirefalier.subval[0][1][0]={};
	cirefalier.subval[0][1][0].valdasub = [];
	cirefalier.subval[0][1][0].vald = 0;
	cirefalier.subval[0][1][0].rubrik="En plan i en plan";
	cirefalier.subval[0][1][0].beskrivning="1 extra slag på händelsetabellen Intriger \& illgärningar.";
	cirefalier.subval[0][1][0].intrigerillgarningar=1;

	cirefalier.subval[0].push([]);
	cirefalier.subval[0][2][0]={};
	cirefalier.subval[0][2][0].valdasub = [];
	cirefalier.subval[0][2][0].vald = 0;
	cirefalier.subval[0][2][0].rubrik="Förmögenhet";
	cirefalier.subval[0][2][0].beskrivning="Cirefalier tycks alltid ha pengar i börsen. De börjar spelet med 300 silver extra.";
	cirefalier.subval[0][2][0].pengar=300;

	cirefalier.subval[0].push([]);
	cirefalier.subval[0][3][0]={};
	cirefalier.subval[0][3][0].valdasub = [];
	cirefalier.subval[0][3][0].vald = 0;
	cirefalier.subval[0][3][0].rubrik="Köpmannaskap";
	cirefalier.subval[0][3][0].beskrivning="Alla cirefalier tycks ha handeln i blodet och är därmed Lättlärda i färdigheten Handel.";
	cirefalier.subval[0][3][0].handel = {};
	cirefalier.subval[0][3][0].handel.lattlard=1;
	
	cirefalier.subval[0].push([]);
	cirefalier.subval[0][4][0]={};
	cirefalier.subval[0][4][0].valdasub = [];
	cirefalier.subval[0][4][0].vald = 0;
	cirefalier.subval[0][4][0].rubrik="Välutbildade"
	cirefalier.subval[0][4][0].beskrivning="Cirefalierna är kända för att vara välutbildade och om barnen inte sätts i skola lär någon äldre släkting upp dem. De får 4 enheter Kunskapsfärdigheter och blir även Lättlärda i valfri Kunskapsfärdighet."
	cirefalier.subval[0][4][0].kunskapsfardigheterenheter=4;
	
	cirefalier.subval[0][4][0].lattlardkunskapsfardigheter=1;
	
	
	cirefalier.subval[0].push([]);
	cirefalier.subval[0][5][0]={};
	cirefalier.subval[0][5][0].valdasub = [];
	cirefalier.subval[0][5][0].vald = 0;
	cirefalier.subval[0][5][0].antalsubval=4;
	
	cirefalier.subval[0][5][1]={};
	cirefalier.subval[0][5][1].valdasub = [];
	cirefalier.subval[0][5][1].vald = 0;
	cirefalier.subval[0][5][1].rubrik="Talade språk"
	cirefalier.subval[0][5][1].beskrivning="Faliska, lägre jargiska" 
	
	cirefalier.subval[0][5][1].taladesprak="Faliska, lägre jargiska"
	cirefalier.subval[0][5][1].faliska = {};
	cirefalier.subval[0][5][1].faliska.enheter=1;
	cirefalier.subval[0][5][1].lagrejargiska = {};
	cirefalier.subval[0][5][1].lagrejargiska.enheter=1;
	
	cirefalier.subval[0][5][2]={};
	cirefalier.subval[0][5][2].valdasub = [];
	cirefalier.subval[0][5][2].vald = 0;
	cirefalier.subval[0][5][2].rubrik="Skriftspråk"
	cirefalier.subval[0][5][2].beskrivning="Falisk skrift."
	
	cirefalier.subval[0][5][2].skriftsprak="Falisk skrift."
	cirefalier.subval[0][5][2].faliskskrift = {};
	cirefalier.subval[0][5][2].faliskskrift.enheter=1;
	
	cirefalier.subval[0][5][3]={};
	cirefalier.subval[0][5][3].valdasub = [];
	cirefalier.subval[0][5][3].vald = 0;
	cirefalier.subval[0][5][3].rubrik="Kvinnonamn"
	cirefalier.subval[0][5][3].kvinnonamnlista=["Azita", "Crisma", "Gannima", "Harira", "Jhimorza", "Meleka", "Nimaza", "Rizima", "Szza", "Vamalla", "Zhra"];
	cirefalier.subval[0][5][3].beskrivning="Azita, Crisma, Gannima, Harira, Jhimorza, Meleka, Nimaza, Rizima, Szza, Vamalla, Zhra";
	
	cirefalier.subval[0][5][4]={};
	cirefalier.subval[0][5][4].valdasub = [];
	cirefalier.subval[0][5][4].vald = 0;
	cirefalier.subval[0][5][4].rubrik="Mansnamn"
	cirefalier.subval[0][5][4].beskrivning="Azit, Cerec, Durzmal, Ficon, Gordaz, Harori, Mzian, Pomerz, Relizer, Remacoz, Szmel, Zhizo";
	
	cirefalier.subval[0][5][4].mansnamnlista=["Azit", "Cerec", "Durzmal", "Ficon", "Gordaz", "Harori", "Mzian", "Pomerz", "Relizer", "Remacoz", "Szmel", "Zhizo"];
	
    var fedaki={};
	folkslagobjekt.fedaki=fedaki;
    fedaki.rubrik="Fedaki";
	fedaki.namn="fedaki";
	
	fedaki.beskrivning="Under den stora reningen när Kejsardömet enades under Daak förslavades en mängd folk. Ett av dessa var fedakerna (eller fekkers som många nedsättande kallar dem). De som idag inte är slavar är vagabonder som reser över riket och tar de anställningar de kan få, vanligen under skördarna. Eller så reser de mellan byar och städer och säljer hantverk, vävnader och enkla smycken." + "\n" + "De är illa ansedda och ses som opålitliga tjuvar som lever i synd och har band till mörka makter. Fedakerna själva är trots detta ofta starkt Daaktroende och enligt deras sägner kämpade de vid Ljusbringarens sida under reningen. Vissa går så långt som att säga att Ljusbringaren själv var en fedaki – något som inte ses med blida ögon av kyrkan." + "\n" + "En fedaki går omedelbart att känna igen på sina bärnstensfärgade och mandelformade ögon med fläckar av guld. Håret är allt som oftast svart och rikligt i ringlande lockar men några föds med ett eldrött hårsvall. En typisk fedakisk kvinna är 160 cm och väger 60 kg. En typisk fedakisk man är 170 cm och väger 70 kg."
	
	fedaki.subval=[[[]]];
	fedaki.subval[0][0][0]={};
	fedaki.subval[0][0][0].valdasub = [];
	fedaki.subval[0][0][0].vald = 0;
	fedaki.subval[0][0][0].styrka = {};
	fedaki.subval[0][0][0].styrka.varde=8;
	fedaki.subval[0][0][0].talighet = {};
	fedaki.subval[0][0][0].talighet.varde=7;
	fedaki.subval[0][0][0].rorlighet = {};
	fedaki.subval[0][0][0].rorlighet.varde=8;
	fedaki.subval[0][0][0].uppfattning = {};
	fedaki.subval[0][0][0].uppfattning.varde=9;
	fedaki.subval[0][0][0].vilja = {};
	fedaki.subval[0][0][0].vilja.varde=8;
	fedaki.subval[0][0][0].psyke = {};
	fedaki.subval[0][0][0].psyke.varde=10;
	fedaki.subval[0][0][0].visdom = {};
	fedaki.subval[0][0][0].visdom.varde=8;
	fedaki.subval[0][0][0].utstralning = {};
	fedaki.subval[0][0][0].utstralning.varde=8;
	fedaki.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6"]],[["Tålighet"],["1T6\+3"]],[["Rörlighet"],["2T6"]],[["Uppfattning"],["2T6\+1"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6\+2"]],[["Visdom"],["2T6"]],[["Utstrålning"],["2T6"]]]
	
	fedaki.subval[0].push([]);
	fedaki.subval[0][1][0]={};
	fedaki.subval[0][1][0].valdasub = [];
	fedaki.subval[0][1][0].vald = 0;
	fedaki.subval[0][1][0].rubrik="Hantverkare";
	fedaki.subval[0][1][0].beskrivning="Fedaker har en fallenhet för att skapa saker med sina händer. Vanligen handlar det om finsmiden eller vävnader, men de kan bli framstående i nästan vad som helst. De får 2 poäng Hantverk och är dessutom Lättlärda i Fingerfärdighet.";
	fedaki.subval[0][1][0].hantverkpoang=2;
	fedaki.subval[0][1][0].fingerfardighet = {};
	fedaki.subval[0][1][0].fingerfardighet.lattlard=1;
	

	fedaki.subval[0].push([]);
	fedaki.subval[0][2][0]={};
	fedaki.subval[0][2][0].valdasub = [];
	fedaki.subval[0][2][0].vald = 0;
	fedaki.subval[0][2][0].rubrik="På resande fot";
	fedaki.subval[0][2][0].beskrivning="Då de ständigt är på resande fot så upplever de många underliga ting. De får 1 extra slag på händelsetabellen Färder \& äventyr, dessutom får de ytterligare 2 enheter Vildmarksfärdigheter och 2 enheter Rörelsefärdigheter.";
	fedaki.subval[0][2][0].farderaventyr=1;
	fedaki.subval[0][2][0].vildmarksfardigheterenheter=2;
	fedaki.subval[0][2][0].rorelsefardigheterenheter=2;
	

	fedaki.subval[0].push([]);
	fedaki.subval[0][3][0]={};
	fedaki.subval[0][3][0].valdasub = [];
	fedaki.subval[0][3][0].vald = 0;
	fedaki.subval[0][3][0].rubrik="Skugglandets band";
	fedaki.subval[0][3][0].beskrivning="Skugglandsväsen tycks känna av fedakers närvaro och dras till dem. Detta ger fedaker 1 Avtrubbningskryss för övernaturligt.";
	fedaki.subval[0][3][0].avtrubbningovernaturligt=1;
	
	fedaki.subval[0].push([]);
	fedaki.subval[0][4][0]={};
	fedaki.subval[0][4][0].valdasub = [];
	fedaki.subval[0][4][0].vald = 0;
	fedaki.subval[0][4][0].rubrik="Slavfolk"
	fedaki.subval[0][4][0].beskrivning="De har blivit härdade av århundraden av slaveri och förtryck. 1 Avtrubbningskryss för utsatthet."
	fedaki.subval[0][4][0].avtrubbningutsatthet=1;
	
	fedaki.subval[0].push([]);
	fedaki.subval[0][5][0]={};
	fedaki.subval[0][5][0].valdasub = [];
	fedaki.subval[0][5][0].vald = 0;
	fedaki.subval[0][5][0].antalsubval=4;
	
	fedaki.subval[0][5][1]={};
	fedaki.subval[0][5][1].valdasub = [];
	fedaki.subval[0][5][1].vald = 0;
	fedaki.subval[0][5][1].rubrik="Talade språk"
	fedaki.subval[0][5][1].beskrivning="Vannai, lägre jargiska"
	fedaki.subval[0][5][1].taladesprak="Vannai, lägre jargiska"
	fedaki.subval[0][5][1].vannai = {};
	fedaki.subval[0][5][1].vannai.enheter=1;
	fedaki.subval[0][5][1].lagrejargiska = {};
	fedaki.subval[0][5][1].lagrejargiska.enheter=1;
	
	fedaki.subval[0][5][2]={};
	fedaki.subval[0][5][2].valdasub = [];
	fedaki.subval[0][5][2].vald = 0;
	fedaki.subval[0][5][2].rubrik="Skriftspråk"
	fedaki.subval[0][5][2].beskrivning="Inga."
	fedaki.subval[0][5][2].skriftsprak="Inga."
	
	fedaki.subval[0][5][3]={};
	fedaki.subval[0][5][3].valdasub = [];
	fedaki.subval[0][5][3].vald = 0;
	fedaki.subval[0][5][3].rubrik="Kvinnonamn"
	fedaki.subval[0][5][3].kvinnonamnlista=["Anesh", "Arax", "Aysel", "Bedisa", "Eliso", "Fidan", "Gadar", "Leyla", "Lusine", "Maral", "Marina", "Parvana", "Siran", "Talin", "Tamar", "Tinatini", "Vardo", "Yeva", "Zabel"];
	fedaki.subval[0][5][3].beskrivning="Anesh, Arax, Aysel, Bedisa, Eliso, Fidan, Gadar, Leyla, Lusine, Maral, Marina, Parvana, Siran, Talin, Tamar, Tinatini, Vardo, Yeva, Zabel";
	
	fedaki.subval[0][5][4]={};
	fedaki.subval[0][5][4].valdasub = [];
	fedaki.subval[0][5][4].vald = 0;
	fedaki.subval[0][5][4].rubrik="Mansnamn" 
	fedaki.subval[0][5][4].beskrivning="Anar, Ari, Armen, Avedis, Elzin, Garen, Imeda, Isidor, Jiran, Karen, Levon, Narek, Saba, Sahak, Sevan, Tamaz, Tural, Vahan, Vardan, Vugar";
	
	fedaki.subval[0][5][4].mansnamnlista=["Anar", "Ari", "Armen", "Avedis", "Elzin", "Garen", "Imeda", "Isidor", "Jiran", "Karen", "Levon", "Narek", "Saba", "Sahak", "Sevan", "Tamaz", "Tural", "Vahan", "Vardan", "Vugar"];
	
    var genver={};
	folkslagobjekt.genver=genver;
    genver.rubrik="Genver";
	genver.namn="genver";
	genver.beskrivning="Genverna är ett av Kejsardömets äldsta folk. Enligt berättelserna vallade de sina får vid Taberas kulle innan Tibara byggdes, de möttes för att handla på den plats som kom att bli Daval och de byggde klippbostäderna i Bolos innan jargierna kom dit. Men jargierna tog allt det och under årtusenden av jargisk expansion har genverna sakta med säkert tryckts tillbaka, från de bördiga slätterna till de ödsliga bergsområdena." + "\n" + "Numera finner man oftast genver i Kejsardömets utkanter där de kan vara hårdföra arbetare i gruvorna och skogarna, vägvisare bland bergen eller legoknektar som skyddar samhällen mot kamorianerna. Jargierna finner dem pålitliga men har svårt för ryktet om att de ägnar sig åt kannibalism och tidelag. Detta kommer från att genverna anser att djur och folkslag har samma ursprung och ska behandlas lika illa eller lika väl." + "\n" + "Genverna har genomgående något större anletsdrag, särskilt munnen och näsan och till viss del ögonen. De är något grövre än gemene jargier och deras hår är svart och rakt. En typisk genvisk kvinna är omkring 165 cm lång och väger cirka 65 kg. En typisk genvisk man är omkring 175 cm lång och väger cirka 75 kg."
	
	genver.subval=[[[]]];
	genver.subval[0][0][0]={};
	genver.subval[0][0][0].valdasub = [];
	genver.subval[0][0][0].vald = 0;
	genver.subval[0][0][0].styrka = {};
	genver.subval[0][0][0].styrka.varde=9;
	genver.subval[0][0][0].talighet = {};
	genver.subval[0][0][0].talighet.varde=10;
	genver.subval[0][0][0].rorlighet = {};
	genver.subval[0][0][0].rorlighet.varde=10;
	genver.subval[0][0][0].uppfattning = {};
	genver.subval[0][0][0].uppfattning.varde=6;
	genver.subval[0][0][0].vilja = {};
	genver.subval[0][0][0].vilja.varde=10;
	genver.subval[0][0][0].psyke = {};
	genver.subval[0][0][0].psyke.varde=7;
	genver.subval[0][0][0].visdom = {};
	genver.subval[0][0][0].visdom.varde=6;
	genver.subval[0][0][0].utstralning = {};
	genver.subval[0][0][0].utstralning.varde=8;
	genver.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6"]],[["Tålighet"],["2T6\+2"]],[["Rörlighet"],["2T6\+2"]],[["Uppfattning"],["1T6\+2"]],[["Vilja"],["2T6\+2"]],[["Psyke"],["1T6\+3"]],[["Visdom"],["1T6\+2"]],[["Utstrålning"],["2T6"]]]
	
	genver.subval[0].push([]);
	genver.subval[0][1][0]={};
	genver.subval[0][1][0].valdasub = [];
	genver.subval[0][1][0].vald = 0;
	genver.subval[0][1][0].rubrik="Känner bergen";
	genver.subval[0][1][0].beskrivning="Från tidig ålder lär sig genverna att utnyttja och få skydd av bergen. De får 4 enheter Vildmarksfärdigheter samt expertisen Känner bergen 4T6.";
	genver.subval[0][1][0].vildmarksfardigheterenheter=4;
	genver.subval[0][1][0].kannerbergen = {};
	genver.subval[0][1][0].kannerbergen.enheter=3;
	

	genver.subval[0].push([]);
	genver.subval[0][2][0]={};
	genver.subval[0][2][0].valdasub = [];
	genver.subval[0][2][0].vald = 0;
	genver.subval[0][2][0].rubrik="Starka ben";
	genver.subval[0][2][0].beskrivning="Genverna har starka nypor och ett starkare skelett än andra folkslag. Det är Lättlärda i Klättra och de får även en bonus på \+1T6 för alla Brytrisk- och Amputationsslag.";
	genver.subval[0][2][0].klattra = {};
	genver.subval[0][2][0].klattra.lattlard=1;
	genver.subval[0][2][0].formaga="\+1T6 på alla Brytrisk- och Amputationsslag."

	genver.subval[0].push([]);
	genver.subval[0][3][0]={};
	genver.subval[0][3][0].valdasub = [];
	genver.subval[0][3][0].vald = 0;
	genver.subval[0][3][0].rubrik="Stennäve";
	genver.subval[0][3][0].beskrivning="Genver har en förmåga att ta i med hela sin kropp i obeväpnad strid så att det känns att man träffas av Krolimbergen. Alla obeväpnade attacker har egenskapen Sargande. De får även 2 enheter Stridsfärdigheter.";
	genver.subval[0][3][0].stridsfardigheterenheter=2;
	genver.subval[0][3][0].formaga="Alla obeväpnade attacker har egenskapen Sargande."
	
	genver.subval[0].push([]);
	genver.subval[0][4][0]={};
	genver.subval[0][4][0].valdasub = [];
	genver.subval[0][4][0].vald = 0;
	genver.subval[0][4][0].rubrik="Överförande kraft"
	genver.subval[0][4][0].beskrivning="Enligt genverna kan man ta över en del av styrkan, själen eller viriliteten om man äter hjärtat, ögonen eller sädeskörtlarna hos en varelse. Det är extra potent om man gör det mot en motståndare man nyligen har besegrat vilket ger \+2 Fokus. Kan göras mot både större varelser och folkslag men högst en gång per spelmöte."
	genver.subval[0][4][0].formaga="\+2 Fokus om man äter hjärtat, ögonen eller sädeskörtlarna hos en nyligen besegrad fiende";
	
	genver.subval[0].push([]);
	genver.subval[0][5][0]={};
	genver.subval[0][5][0].valdasub = [];
	genver.subval[0][5][0].vald = 0;
	genver.subval[0][5][0].antalsubval=4;
	
	genver.subval[0][5][1]={};
	genver.subval[0][5][1].valdasub = [];
	genver.subval[0][5][1].vald = 0;
	genver.subval[0][5][1].rubrik="Talade språk"
	genver.subval[0][5][1].beskrivning="Genvero, lägre jargiska"
	genver.subval[0][5][1].taladesprak="Genvero, lägre jargiska"
	genver.subval[0][5][1].genvero = {};
	genver.subval[0][5][1].genvero.enheter=1;
	genver.subval[0][5][1].lagrejargiska = {};
	genver.subval[0][5][1].lagrejargiska.enheter=1;
	
	genver.subval[0][5][2]={};
	genver.subval[0][5][2].valdasub = [];
	genver.subval[0][5][2].vald = 0;
	genver.subval[0][5][2].rubrik="Skriftspråk"
	genver.subval[0][5][2].beskrivning="Inga."
	genver.subval[0][5][2].skriftsprak="Inga."
	
	genver.subval[0][5][3]={};
	genver.subval[0][5][3].valdasub = [];
	genver.subval[0][5][3].vald = 0;
	genver.subval[0][5][3].rubrik="Kvinnonamn";
	genver.subval[0][5][3].kvinnonamnlista=["Ancarui", "Arantlei", "Hanunia", "Hasti", "Larthi", "Ramtha", "Raunthu", "Seianti", "Sethra", "Tana", "Telesa", "Tanvil", "Tesnasa", "Tita", "Velia"];
	genver.subval[0][5][3].beskrivning="Ancarui, Arantlei, Hanunia, Hasti, Larthi, Ramtha, Raunthu, Seianti, Sethra, Tana, Telesa, Tanvil, Tesnasa, Tita, Velia";
	
	genver.subval[0][5][4]={};
	genver.subval[0][5][4].valdasub = [];
	genver.subval[0][5][4].vald = 0;
	genver.subval[0][5][4].rubrik="Mansnamn";
	genver.subval[0][5][4].beskrivning="Aranth, Arruns, Caneve, Escil, Fernet, Laris, Mamarse, Paleth, Sethre, Spethur, Taruin, Tefarie, Teges, Tite, Velthur";
	genver.subval[0][5][4].mansnamnlista=["Aranth", "Arruns", "Caneve", "Escil", "Fernet", "Laris", "Mamarse", "Paleth", "Sethre", "Spethur", "Taruin", "Tefarie", "Teges", "Tite", "Velthur"];
	
	
    var jahann={};
	folkslagobjekt.jahann=jahann;
    jahann.rubrik="Jahann";
	jahann.namn="jahann";
	jahann.beskrivning="Jahannerna är ett zhaniskt folk som har sitt ursprung i länderna i väster och av många anses de vara Kejsardömets yttersta fiender då Jargien i det förflutna varit i krig med Mûhad, ett av zhanernas starkaste fästen. Jahannerna är ansedda som fruktade ökenkrigare, giftmästare och kunniga handelsmän. Då jahannerna är den största zhaniska minoriteten i Jargien brukar jargier kalla dem för zhaner. Jahanner har varit i Jargien sedan det forna Ghalden-rikets fall och de bor i de västra provinserna, där de är betydligt mer accepterade än i de inre delarna av riket." + "\n" + "En jahann har olivfärgat skinn, ungefär lika mörkt som en kraftig solbränd jargier. Håret är vanligtvis korpsvart och ibland lockligt. Ögonen är ofta ljusa, vilket står som kontrast till deras i övrigt mörka drag. En typisk jahannisk kvinna är omkring 165 cm lång och väger cirka 60 kg. En typisk jahannisk man är cirka 175 cm lång och väger cirka 70 kg."
	
	jahann.subval=[[[]]];
	jahann.subval[0][0][0]={};
	jahann.subval[0][0][0].valdasub = [];
	jahann.subval[0][0][0].vald = 0;
	jahann.subval[0][0][0].styrka = {};
	jahann.subval[0][0][0].styrka.varde=8;
	jahann.subval[0][0][0].talighet = {};
	jahann.subval[0][0][0].talighet.varde=8;
	jahann.subval[0][0][0].rorlighet = {};
	jahann.subval[0][0][0].rorlighet.varde=8;
	jahann.subval[0][0][0].uppfattning = {};
	jahann.subval[0][0][0].uppfattning.varde=8;
	jahann.subval[0][0][0].vilja = {};
	jahann.subval[0][0][0].vilja.varde=9;
	jahann.subval[0][0][0].psyke = {};
	jahann.subval[0][0][0].psyke.varde=9;
	jahann.subval[0][0][0].visdom = {};
	jahann.subval[0][0][0].visdom.varde=8;
	jahann.subval[0][0][0].utstralning = {};
	jahann.subval[0][0][0].utstralning.varde=8;
	jahann.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6"]],[["Tålighet"],["2T6"]],[["Rörlighet"],["2T6"]],[["Uppfattning"],["2T6"]],[["Vilja"],["2T6\+1"]],[["Psyke"],["2T6\+1"]],[["Visdom"],["2T6"]],[["Utstrålning"],["2T6"]]]
	
	jahann.subval[0].push([]);
	jahann.subval[0][1][0]={};
	jahann.subval[0][1][0].valdasub = [];
	jahann.subval[0][1][0].vald = 0;
	jahann.subval[0][1][0].rubrik="Avspänd";
	jahann.subval[0][1][0].beskrivning="För jahanner är det viktigt att alltid visa ett avspänt och kontrollerat yttre. De får +2 Självkontroll.";
	jahann.subval[0][1][0].sjalvkontroll = {};
	jahann.subval[0][1][0].sjalvkontroll.bonus=2;

	jahann.subval[0].push([]);
	jahann.subval[0][2][0]={};
	jahann.subval[0][2][0].valdasub = [];
	jahann.subval[0][2][0].vald = 0;
	jahann.subval[0][2][0].rubrik="Sagor och myter";
	jahann.subval[0][2][0].beskrivning="De har en samlat på sig en stor mängd fantastiska berättelser tack vare sina zhaniska traditioner. Färdigheterna Berättarkonst och Ockultism är Lättlärda.";
	jahann.subval[0][2][0].berattarkonst = {};
	jahann.subval[0][2][0].berattarkonst.lattlard=1;
	jahann.subval[0][2][0].ockultism = {};
	jahann.subval[0][2][0].ockultism.lattlard=1;
	
	
	jahann.subval[0].push([]);
	jahann.subval[0][3][0]={};
	jahann.subval[0][3][0].valdasub = [];
	jahann.subval[0][3][0].vald = 0;
	jahann.subval[0][3][0].rubrik="Spetskompetens";
	jahann.subval[0][3][0].beskrivning="Jahannerna är kända för sin skicklighet i utvalda färdigheter. Allt från hantera vapen, svartkonst till att dansa och sjunga. De tränar sig till mästare inom ett område för att bli oöverträffade inom just detta. De får välja en valfri Lättlärd färdighet.";
	jahann.subval[0][3][0].lattlardvalfri=1;
	
	jahann.subval[0].push([]);
	jahann.subval[0][4][0]={};
	jahann.subval[0][4][0].valdasub = [];
	jahann.subval[0][4][0].vald = 0;
	jahann.subval[0][4][0].rubrik="Västerlandets mystik"
	jahann.subval[0][4][0].beskrivning="Jahannerna har insikter i många mysterier. De får därför 1 extra slag på händelsetabellen Kunskap \& mysterier."
	jahann.subval[0][4][0].kunskapmysterier=1;
	
	jahann.subval[0].push([]);
	jahann.subval[0][5][0]={};
	jahann.subval[0][5][0].valdasub = [];
	jahann.subval[0][5][0].vald = 0;
	jahann.subval[0][5][0].antalsubval=4;
	
	jahann.subval[0][5][1]={};
	jahann.subval[0][5][1].valdasub = [];
	jahann.subval[0][5][1].vald = 0;
	jahann.subval[0][5][1].rubrik="Talade språk"
	jahann.subval[0][5][1].beskrivning="Jahanniska, lägre jargiska"
	
	jahann.subval[0][5][1].taladesprak="Jahanniska, lägre jargiska"
	jahann.subval[0][5][1].jahanniska = {};
	jahann.subval[0][5][1].jahanniska.enheter=1;
	jahann.subval[0][5][1].lagrejargiska = {};
	jahann.subval[0][5][1].lagrejargiska.enheter=1;
	jahann.subval[0][5][1].valdasub = [];
	jahann.subval[0][5][1].vald = 0;
	
	jahann.subval[0][5][2]={};
	jahann.subval[0][5][2].valdasub = [];
	jahann.subval[0][5][2].vald = 0;
	jahann.subval[0][5][2].rubrik="Skriftspråk."
	jahann.subval[0][5][2].beskrivning="Inga."
	jahann.subval[0][5][2].skriftsprak="Inga."
	
	
	jahann.subval[0][5][3]={};
	jahann.subval[0][5][3].valdasub = [];
	jahann.subval[0][5][3].vald = 0;
	jahann.subval[0][5][3].rubrik="Kvinnonamn";
	// jahann.subval[0][5][3].kvinnonamnlista=["‘Akidja", "Amila", "Amoa", "Hadia", "Halke", "Ifrima", "Kalizha", "Lana", "Leile", "Nadira", "Nanaya", "Sab’a", "Sahra", "Salima", "Telle"];
	// 
	
	// jahann.subval[0][5][3].beskrivning="‘Akidja,Amila,Amoa,Hadia,Halke,Ifrima,Kalizha,Lana,Leile,Nadira,Nanaya,Sab’a,Sahra,Salima,Telle";
	jahann.subval[0][5][4]={};
	jahann.subval[0][5][4].valdasub = [];
	jahann.subval[0][5][4].vald = 0;
	jahann.subval[0][5][4].rubrik="Mansnamn";
	// jahann.subval[0][5][4].beskrivning="‘Asi,Ben Mhîma’a,Hamze,Isma’il,Khabi,Lahwan,Madjed,Mashkoh,Sabi’"‚ "Sabil,Sharim,Wahan,Zabin";
	// jahann.subval[0][5][4].mansnamnlista=["‘Asi", "Ben Mhîma’a", "Hamze", "Isma’il", "Khabi", "Lahwan","Madjed", "Mashkoh", "Sabi’"‚ "Sabil", "Sharim", "Wahan", "Zabin"];

	var jargier={};
	folkslagobjekt.jargier=jargier;
    jargier.rubrik="Jargier";
	jargier.namn="jargier";
	jargier.beskrivning="Jargierna utgör den självklara majoriteten av folken i det jargiska kejsardömet. De tillhör den vanariska folkgruppen som är spridd över stora delar av Mundana och är ofta uppblandade med andra människofolk." + "\n" + "Jargier är ljusa i hyn och hår- och ögonfärger finns av alla de slag. Deras kroppsbyggnad är normal och inte exceptionell på något sätt. En typisk jargisk kvinna är omkring 165 cm lång och väger cirka 60 kg. En typisk jargisk man är omkring 175 cm lång och väger cirka 70 kg."
	
	jargier.subval=[[[]]];
	jargier.subval[0][0][0]={};
	jargier.subval[0][0][0].valdasub = [];
	jargier.subval[0][0][0].vald = 0;
	jargier.subval[0][0][0].styrka = {};
	jargier.subval[0][0][0].styrka.varde=9;
	jargier.subval[0][0][0].talighet = {};
	jargier.subval[0][0][0].talighet.varde=9;
	jargier.subval[0][0][0].rorlighet = {};
	jargier.subval[0][0][0].rorlighet.varde=8;
	jargier.subval[0][0][0].uppfattning = {};
	jargier.subval[0][0][0].uppfattning.varde=8;
	jargier.subval[0][0][0].vilja = {};
	jargier.subval[0][0][0].vilja.varde=8;
	jargier.subval[0][0][0].psyke = {};
	jargier.subval[0][0][0].psyke.varde=8;
	jargier.subval[0][0][0].visdom = {};
	jargier.subval[0][0][0].visdom.varde=8;
	jargier.subval[0][0][0].utstralning = {};
	jargier.subval[0][0][0].utstralning.varde=8;
	jargier.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6\+1"]],[["Tålighet"],["2T6\+1"]],[["Rörlighet"],["2T6"]],[["Uppfattning"],["2T6"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6"]],[["Visdom"],["2T6"]],[["Utstrålning"],["2T6"]]]
	
	jargier.subval.push([[]]);
	jargier.subval[1][0][0]={};
	jargier.subval[1][0][0].valdasub = [];
	jargier.subval[1][0][0].vald = 0;
	jargier.subval[1][0][0].rubrik="Hemprovins";
	jargier.subval[1][0][0].beskrivning="Kejsardömet bestod tidigare av ett stort antal riken som slogs samman. Rollpersonens familj är från följande provins:";
	
	jargier.subval[1][0][0].antalsubval=1;

	jargier.subval[1].push([]);
	jargier.subval[1][1][0]={};
	jargier.subval[1][1][0].valdasub = [];
	jargier.subval[1][1][0].vald = 0;
	jargier.subval[1][1][0].rubrik="Daval, Mihrit \& Tibara";
	jargier.subval[1][1][0].beskrivning="Daval är Kejsardömets huvudstad med Kejsar Jargus hov, imponerande byggnadsverk och ett ständigt myller av folk. Mihrit är Kejsardömets till ytan minsta provins. Den styrs av ett råd av lärda och är känd som ett stort lärosäte med en mängd författare och filosofer bland befolkningen. Tibara är Daakkyrkans heliga stad och styrs av Aboraten. Staden är känd för sina många mässor, vallfärdande pilgrimer och sina enorma kopparklockor. ";
	jargier.subval[1][1][0].antalsubval=4;
	
	jargier.subval[1][1].push([]);
	jargier.subval[1][1][1]={};
	jargier.subval[1][1][1].valdasub = [];
	jargier.subval[1][1][1].vald = 0;
	jargier.subval[1][1][1].rubrik="Allmänbildning";
	jargier.subval[1][1][1].beskrivning="\+2 Visdom.";
	jargier.subval[1][1][1].visdom = {};
	jargier.subval[1][1][1].visdom.varde=2;
	
	jargier.subval[1][1].push([]);
	jargier.subval[1][1][2]={};
	jargier.subval[1][1][2].valdasub = [];
	jargier.subval[1][1][2].vald = 0;
	jargier.subval[1][1][2].rubrik="Kunskapstillgång";
	jargier.subval[1][1][2].beskrivning="1 extra slag på Kunskap & mysterier.";
	jargier.subval[1][1][2].kunskapmysterier=1;
	
	jargier.subval[1][1].push([]);
	jargier.subval[1][1][3]={};
	jargier.subval[1][1][3].valdasub = [];
	jargier.subval[1][1][3].vald = 0;
	jargier.subval[1][1][3].rubrik="Skickliga";
	jargier.subval[1][1][3].beskrivning="3 valfria enheter.";
	jargier.subval[1][1][3].valfriaenheter=3;
	
	
	jargier.subval[1][1].push([]);
	jargier.subval[1][1][4]={};
	jargier.subval[1][1][4].rubrik="Språkkunniga";
	jargier.subval[1][1][4].beskrivning="2 Språkenheter.";
	jargier.subval[1][1][4].sprakenheter=2;
	
	
	jargier.subval[1].push([]);
	jargier.subval[1][2][0]={};
	jargier.subval[1][2][0].valdasub = [];
	jargier.subval[1][2][0].vald = 0;
	jargier.subval[1][2][0].rubrik="Genrio";
	jargier.subval[1][2][0].beskrivning="Genrio är Kejsardömets nordvästligaste utpost. Området är oroligt då det ligger nära Krolimbergen där monster, tiraker, vilda kamorianstammar och andra styggelser har sin hemvist. Folket här är mer härdade av både klimat och faror.";
	jargier.subval[1][2][0].antalsubval=4;
	
	jargier.subval[1][2].push([]);
	jargier.subval[1][2][1]={};
	jargier.subval[1][2][1].rubrik="Farlig uppväxt";
	jargier.subval[1][2][1].beskrivning="1 extra slag på Strider \& drabbningar.";
	jargier.subval[1][2][1].striderdrabbningar=1;
	
	jargier.subval[1][2].push([]);
	jargier.subval[1][2][2]={};
	jargier.subval[1][2][2].rubrik="Härdade";
	jargier.subval[1][2][2].beskrivning="1 Avtrubbningskryss för våld.";
	jargier.subval[1][2][2].avtrubbningvald=1;
	
	jargier.subval[1][2].push([]);
	jargier.subval[1][2][3]={};
	jargier.subval[1][2][3].rubrik="Tränade";
	jargier.subval[1][2][3].beskrivning="3 enheter på Stridsfärdigheter.";
	jargier.subval[1][2][3].stridsfardigheterenheter=3;
	
	
	jargier.subval[1][2].push([]);
	jargier.subval[1][2][4]={};
	jargier.subval[1][2][4].rubrik="Tåliga";
	jargier.subval[1][2][4].beskrivning="\+1 Styrka och \+1 Tålighet.";
	jargier.subval[1][2][4].styrka = {};
	jargier.subval[1][2][4].styrka.varde=1;
	jargier.subval[1][2][4].talighet = {};
	jargier.subval[1][2][4].talighet.varde=1;
	
	jargier.subval[1].push([]);
	jargier.subval[1][3][0]={};
	jargier.subval[1][3][0].valdasub = [];
	jargier.subval[1][3][0].vald = 0;
	jargier.subval[1][3][0].rubrik="Jargien";
	jargier.subval[1][3][0].beskrivning="Provinsen Jargien är det jargiska kejsardömets vagga. Trots att huvudstaden för Kejsardömet numera är Daval anser de flesta invånarna i provinsen att de utgör Kejsardömets hjärta. Folket är stolta och hedersamma med enkla levnadsvanor.";
	jargier.subval[1][3][0].antalsubval=4;
	
	jargier.subval[1][3].push([]);
	jargier.subval[1][3][1]={};
	jargier.subval[1][3][1].rubrik="Enkla nöjen";
	jargier.subval[1][3][1].beskrivning="1 poäng Expertiser.";
	jargier.subval[1][3][1].expertispoang=1;
	
	jargier.subval[1][3].push([]);
	jargier.subval[1][3][2]={};
	jargier.subval[1][3][2].rubrik="Historiens hjärta";
	jargier.subval[1][3][2].beskrivning="1 extra slag på Kunskap & mysterier.";
	jargier.subval[1][3][2].kunskapmysterier=1;
	
	jargier.subval[1][3].push([]);
	jargier.subval[1][3][3]={};
	jargier.subval[1][3][3].rubrik="Klipska";
	jargier.subval[1][3][3].beskrivning="+2 Psyke.";
	jargier.subval[1][3][3].psyke = {};
	jargier.subval[1][3][3].psyke.varde=2;
	
	
	jargier.subval[1][3].push([]);
	jargier.subval[1][3][4]={};
	jargier.subval[1][3][4].rubrik="Stolt historia";
	jargier.subval[1][3][4].beskrivning="3 enheter på Kunskapsfardigheter.";
	jargier.subval[1][3][4].kunskapsfardigheterenheter=3;
	
	
	jargier.subval[1].push([]);
	jargier.subval[1][4][0]={};
	jargier.subval[1][4][0].valdasub = [];
	jargier.subval[1][4][0].vald = 0;
	jargier.subval[1][4][0].rubrik="Lemira";
	jargier.subval[1][4][0].beskrivning="Lemira är en långsträckt provins sydöst om Daval, som täcker upp två tredjedelar av Kejsardömets kust. Det är ett handelsområde med mängder av hamnstäder och bosättningar. Folket håller mycket starkt på sin gamla kultur med fokus på ödestro och stark heder.";
	jargier.subval[1][4][0].antalsubval=4;
	
	jargier.subval[1][4].push([]);
	jargier.subval[1][4][1]={};
	jargier.subval[1][4][1].rubrik="Hederligt beteende";
	jargier.subval[1][4][1].beskrivning="\+2 Intryck.";
	jargier.subval[1][4][1].intryck = {};
	jargier.subval[1][4][1].intryck.bonus=2;
	
	jargier.subval[1][4].push([]);
	jargier.subval[1][4][2]={};
	jargier.subval[1][4][2].rubrik="Härdade";
	jargier.subval[1][4][2].beskrivning="1 Avtrubbningskryss för utsatthet.";
	jargier.subval[1][4][2].avtrubbningutsatthet=1;
	
	jargier.subval[1][4].push([]);
	jargier.subval[1][4][3]={};
	jargier.subval[1][4][3].rubrik="Intrigerande";
	jargier.subval[1][4][3].beskrivning="1 extra slag på Intriger & illgärningar.";
	jargier.subval[1][4][3].intrigerillgarningar=1;
	
	
	jargier.subval[1][4].push([]);
	jargier.subval[1][4][4]={};
	jargier.subval[1][4][4].rubrik="Ödestro";
	jargier.subval[1][4][4].beskrivning="\+1 Självkontroll.";
	jargier.subval[1][4][4].sjalvkontroll = {};
	jargier.subval[1][4][4].sjalvkontroll.bonus=1;
	
	jargier.subval[1].push([]);
	jargier.subval[1][5][0]={};
	jargier.subval[1][5][0].valdasub = [];
	jargier.subval[1][5][0].vald = 0;
	jargier.subval[1][5][0].rubrik="Maulio";
	jargier.subval[1][5][0].beskrivning="Maulio är en provins som gränsar till Krolimbergen och till konungariket Drunok. Folket är praktiskt lagda och kända både för sin händighet och sin envishet. De sägs ha en stor aptit för mat och det goda i livet och har också en sundhet och friskhet som är över det normala.";
	jargier.subval[1][5][0].antalsubval=4;
	
	jargier.subval[1][5].push([]);
	jargier.subval[1][5][1]={};
	jargier.subval[1][5][1].rubrik="Envisa";
	jargier.subval[1][5][1].beskrivning="\+2 Vilja";
	jargier.subval[1][5][1].vilja = {};
	jargier.subval[1][5][1].vilja.varde=2;
	
	jargier.subval[1][5].push([]);
	jargier.subval[1][5][2]={};
	jargier.subval[1][5][2].rubrik="Gott läkekött";
	jargier.subval[1][5][2].beskrivning="\+1T6 Livskraft vid Infektionsslag.";
	jargier.subval[1][5][2].livskraft = {};
	jargier.subval[1][5][2].livskraft.egenskap="\+1T6 vid Infektionsslag";
	
	jargier.subval[1][5].push([]);
	jargier.subval[1][5][3]={};
	jargier.subval[1][5][3].rubrik="Händiga";
	jargier.subval[1][5][3].beskrivning="1 poäng Hantverk.";
	jargier.subval[1][5][3].hantverkpoang=1;
	
	jargier.subval[1][5].push([]);
	jargier.subval[1][5][4]={};
	jargier.subval[1][5][4].rubrik="Krigshistoria";
	jargier.subval[1][5][4].beskrivning="1 extra slag på Strider & drabbningar.";
	jargier.subval[1][5][4].striderdrabbningar=1;
	
	
	
	jargier.subval[1].push([]);
	jargier.subval[1][6][0]={};
	jargier.subval[1][6][0].valdasub = [];
	jargier.subval[1][6][0].vald = 0;
	jargier.subval[1][6][0].rubrik="Merun";
	jargier.subval[1][6][0].beskrivning="Kejsardömets till ytan största provins med många städer och uppodlade områden. De östra delarna är relativt öde och här finns allehanda faror. Folket är kända för att vara ärbara, dygdiga med en förkärlek för lantlivet samt att de är sparsamma eller rent av snåla.";
	jargier.subval[1][6][0].antalsubval=4;
	
	jargier.subval[1][6].push([]);
	jargier.subval[1][6][1]={};
	jargier.subval[1][6][1].rubrik="Lantliga nöjen";
	jargier.subval[1][6][1].beskrivning="1 poäng Expertiser.";
	jargier.subval[1][6][1].expertispoang=1;
	
	jargier.subval[1][6].push([]);
	jargier.subval[1][6][2]={};
	jargier.subval[1][6][2].rubrik="Sparsamma";
	jargier.subval[1][6][2].beskrivning="Börjar med 100 silver extra.";
	jargier.subval[1][6][2].pengar=100;
	
	jargier.subval[1][6].push([]);
	jargier.subval[1][6][3]={};
	jargier.subval[1][6][3].rubrik="Tålmodiga";
	jargier.subval[1][6][3].beskrivning="\+1 Vilja och \+1 Psyke.";
	jargier.subval[1][6][3].vilja = {};
	jargier.subval[1][6][3].vilja.varde=1;
	jargier.subval[1][6][3].psyke = {};
	jargier.subval[1][6][3].psyke.varde=1;
	
	
	jargier.subval[1][6].push([]);
	jargier.subval[1][6][4]={};
	jargier.subval[1][6][4].rubrik="Valmöjligheter";
	jargier.subval[1][6][4].beskrivning="1 extra slag på valfri händelsetabell.";
	jargier.subval[1][6][4].valfriatabellslag=1;
	
	jargier.subval[1].push([]);
	jargier.subval[1][7][0]={};
	jargier.subval[1][7][0].valdasub = [];
	jargier.subval[1][7][0].vald = 0;
	jargier.subval[1][7][0].rubrik="Okrana";
	jargier.subval[1][7][0].beskrivning="Okrana är en kejserlig provins som gränsar till Tarkas, den svarta öknen. Okrana utgör det yttersta gränsområdet mot vilda nomader, mûhadinska plundrare och fasansfulla bestar. Befolkningen lever långt från Kejsardömets lagar och anses av vissa ha ett upproriskt sinnelag.";
	jargier.subval[1][7][0].antalsubval=4;
	
	jargier.subval[1][7].push([]);
	jargier.subval[1][7][1]={};
	jargier.subval[1][7][1].rubrik="Insikt i mysterier";
	jargier.subval[1][7][1].beskrivning=" 1 Avtrubbningskryss för övernaturligt.";
	jargier.subval[1][7][1].avtrubbningovernaturligt=1;
	
	jargier.subval[1][7].push([]);
	jargier.subval[1][7][2]={};
	jargier.subval[1][7][2].rubrik="Kejsardömets utkant";
	jargier.subval[1][7][2].beskrivning="1 extra slag på Färder \& äventyr.";
	jargier.subval[1][7][2].farderaventyr=1;
	
	jargier.subval[1][7].push([]);
	jargier.subval[1][7][3]={};
	jargier.subval[1][7][3].rubrik="Tarkas gränsland";
	jargier.subval[1][7][3].beskrivning="3 enheter på Vildmarksfärdigheter.";
	jargier.subval[1][7][3].vildmarksfardigheterenheter=3;
	
	
	jargier.subval[1][7].push([]);
	jargier.subval[1][7][4]={};
	jargier.subval[1][7][4].rubrik="Uppmärksamma";
	jargier.subval[1][7][4].beskrivning="\+2 Reaktion.";
	jargier.subval[1][7][4].styrka = {};
	jargier.subval[1][7][4].styrka.varde=1;
	jargier.subval[1][7][4].talighet = {};
	jargier.subval[1][7][4].talighet.varde=1;
	
	
	jargier.subval[1].push([]);
	jargier.subval[1][8][0]={};
	jargier.subval[1][8][0].valdasub = [];
	jargier.subval[1][8][0].vald = 0;
	jargier.subval[1][8][0].rubrik="Rankun";
	jargier.subval[1][8][0].beskrivning="Nordväst om Daval ligger den rika och bördiga provinsen Rankun, som kallas för Kejsardömets hjärta. Där finns flera handelsstäder där de flesta lever ett gott liv och folket sällan ser de mörka sidorna av livet som finns i många av de andra provinserna.";
	jargier.subval[1][8][0].antalsubval=4;
	
	jargier.subval[1][8].push([]);
	jargier.subval[1][8][1]={};
	jargier.subval[1][8][1].rubrik="Fläckfri fasad";
	jargier.subval[1][8][1].beskrivning="1 extra slag på Intriger \& illgärningar. ";
	jargier.subval[1][8][1].intrigerillgarningar=1;
	
	jargier.subval[1][8].push([]);
	jargier.subval[1][8][2]={};
	jargier.subval[1][8][2].rubrik="Goda förhållanden";
	jargier.subval[1][8][2].beskrivning="\+2 Utstrålning.";
	jargier.subval[1][8][2].utstralning = {};
	jargier.subval[1][8][2].utstralning.varde=2;
	
	jargier.subval[1][8].push([]);
	jargier.subval[1][8][3]={};
	jargier.subval[1][8][3].rubrik="Ordens konst";
	jargier.subval[1][8][3].beskrivning="3 enheter på Sociala färdigheter.";
	jargier.subval[1][8][3].socialafardigheterenheter=3;
	
	
	jargier.subval[1][8].push([]);
	jargier.subval[1][8][4]={};
	jargier.subval[1][8][4].rubrik="Udda nöjen";
	jargier.subval[1][8][4].beskrivning="1 poäng Expertiser.";
	jargier.subval[1][8][4].expertispoang=1;
	
	
	jargier.subval[1].push([]);
	jargier.subval[1][9][0]={};
	jargier.subval[1][9][0].valdasub = [];
	jargier.subval[1][9][0].vald = 0;
	jargier.subval[1][9][0].rubrik="Sardan";
	jargier.subval[1][9][0].beskrivning="I norr, längs Krolimbergen, ligger provinsen Sardan. Till ytan är provinsen relativt stor, men det mesta består av vildmark. Gruvnäringen gör folket rikt men det finns många fasor i bergen som ställer till problem. Folket ses som lite egna och mer fysiska än intellektuellt skarpsinniga.";
	jargier.subval[1][9][0].antalsubval=4;
	
	jargier.subval[1][9].push([]);
	jargier.subval[1][9][1]={};
	jargier.subval[1][9][1].rubrik="Händiga";
	jargier.subval[1][9][1].beskrivning="1 poäng Hantverk.";
	jargier.subval[1][9][1].hantverkpoang=1;
	
	jargier.subval[1][9].push([]);
	jargier.subval[1][9][2]={};
	jargier.subval[1][9][2].rubrik="Kraftiga";
	jargier.subval[1][9][2].beskrivning="\+1 Kroppsbyggnad";
	jargier.subval[1][9][2].kroppsbyggnad = {};
	jargier.subval[1][9][2].kroppsbyggnad.bonus=1;
	
	jargier.subval[1][9].push([]);
	jargier.subval[1][9][3]={};
	jargier.subval[1][9][3].rubrik="Vaksamma";
	jargier.subval[1][9][3].beskrivning="\+2 Vaksamhet";
	jargier.subval[1][9][3].vaksamhet = {};
	jargier.subval[1][9][3].vaksamhet.bonus=2;
	
	
	jargier.subval[1][9].push([]);
	jargier.subval[1][9][4]={};
	jargier.subval[1][9][4].rubrik="Vildmarksland";
	jargier.subval[1][9][4].beskrivning="1 extra slag på Färder & äventyr.";
	jargier.subval[1][9][4].farderaventyr=1;
	
	
	jargier.subval[1].push([]);
	jargier.subval[1][10][0]={};
	jargier.subval[1][10][0].valdasub = [];
	jargier.subval[1][10][0].vald = 0;
	jargier.subval[1][10][0].rubrik="Kolonierna \& utrikes";
	jargier.subval[1][10][0].beskrivning="Jargier finns även i enklaver runtom i Mundana, såsom i det fjärran Consaber, det torra Asharien, Soldarns djupa skogar, träsklandet Västmark och det fruktade Damarien. Kejsardömet har även ett antal kolonier runtom i världen där folket kommit att bli egensinniga eftersom de är långt borta från moderlandet.";
	jargier.subval[1][10][0].antalsubval=4;
	
	jargier.subval[1][10].push([]);
	jargier.subval[1][10][1]={};
	jargier.subval[1][10][1].rubrik="Hemlandets språk";
	jargier.subval[1][10][1].beskrivning="2 Språkenheter.";
	jargier.subval[1][10][1].sprakenheter=2;
	
	jargier.subval[1][10].push([]);
	jargier.subval[1][10][2]={};
	jargier.subval[1][10][2].rubrik="Pilgrimsresor";
	jargier.subval[1][10][2].beskrivning="3 enheter på Vildmarksfärdigheter.";
	jargier.subval[1][10][2].vildmarksfardigheterenheter=3;
	
	jargier.subval[1][10].push([]);
	jargier.subval[1][10][3]={};
	jargier.subval[1][10][3].rubrik="Präglad av sin härkomst";
	jargier.subval[1][10][3].beskrivning="1 poäng Kännetecken.";
	jargier.subval[1][10][3].kanneteckenpoang=1;
	
	
	jargier.subval[1][10].push([]);
	jargier.subval[1][10][4]={};
	jargier.subval[1][10][4].rubrik="Tidigare äventyr";
	jargier.subval[1][10][4].beskrivning="1 extra slag på valfri händelsetabell";
	jargier.subval[1][10][4].valfriatabellslag=1;
	
	
	
	
	jargier.subval[0].push([]);
	jargier.subval[0][1][0]={};
	jargier.subval[0][1][0].valdasub = [];
	jargier.subval[0][1][0].vald = 0;
	jargier.subval[0][1][0].rubrik="Uthärdande";
	jargier.subval[0][1][0].beskrivning="Jargier är vana att härda ut in i det sista och får därför \+1 Livskraft.";
	jargier.subval[0][1][0].livskraft = {};
	jargier.subval[0][1][0].livskraft.bonus=1;
	
	
	
	jargier.subval[0].push([]);
	jargier.subval[0][2][0]={};
	jargier.subval[0][2][0].valdasub = [];
	jargier.subval[0][2][0].vald = 0;
	jargier.subval[0][2][0].antalsubval=4;
	
	jargier.subval[0][2][1]={};
	jargier.subval[0][2][1].rubrik="Talade språk"
	jargier.subval[0][2][1].beskrivning="Lägre jargiska"
	jargier.subval[0][2][1].taladesprak="Lägre jargiska"
	jargier.subval[0][2][1].lagrejargiska = {};
	jargier.subval[0][2][1].lagrejargiska.enheter=1;
	
	jargier.subval[0][2][2]={};
	jargier.subval[0][2][2].rubrik="Skriftspråk"
	jargier.subval[0][2][2].beskrivning="Inga."
	
	jargier.subval[0][2][2].skriftsprak="Inga."
	
	jargier.subval[0][2][3]={};
	jargier.subval[0][2][3].rubrik="Kvinnonamn";
	jargier.subval[0][2][3].kvinnonamnlista=["Anepa, Catleen, Cefone, Daynara, Eusebia, Felicie, Histalia, Ione, Luni, Maesta, Nivea, Preatra, Qulima, Ravia, Selina, Unine, Vitalia, Xandra, Yopatra, Zavia"];
	jargier.subval[0][2][3].beskrivning="Anepa, Catleen, Cefone, Daynara, Eusebia, Felicie, Histalia, Ione, Luni, Maesta, Nivea, Preatra, Qulima, Ravia, Selina, Unine, Vitalia, Xandra, Yopatra, Zavia";
	
	jargier.subval[0][2][4]={};
	jargier.subval[0][2][4].rubrik="Mansnamn"
	jargier.subval[0][2][4].beskrivning="Arcadius, Boethius, Caros, Damian, Elius, Galin, Hiberos, Ignatius, Keron, Leon, Marius, Nadian, Petros, Sarrius, Tatian, Uthos, Valerian, Yrgamos, Zenos";
	jargier.subval[0][2][4].mansnamnlista=["Arcadius, Boethius, Caros, Damian, Elius, Galin, Hiberos, Ignatius, Keron, Leon, Marius, Nadian, Petros, Sarrius, Tatian, Uthos, Valerian, Yrgamos, Zenos"];

	
    var kamorian={};
	folkslagobjekt.kamorian=kamorian;
    kamorian.rubrik="Kamorian";
	kamorian.namn="kamorian";
	kamorian.beskrivning="Kamorianerna är ett resligt och smidigt folk som har sitt ursprung i det skogsbeklädda och otämjda Kamor, norr om det jargiska kejsardömet. Där lever de i stammar knutna till totemdjur såsom vargen, svartbjörnen, ormen, korpen och så vidare. De flesta har kommit till Kejsardömet som slavar och många kamorianer som är födda i Jargien har aldrig sett sitt hemland." + "\n" + "De har skarpa sinnen och har vissa djuriska drag kopplade till ursprungsstammens totemdjur. Det kan röra sig om smala pupiller, vargliknande ögon, spetsiga hörntänder eller kloliknande naglar. Håret går vanligen i blont, brunt och rött även om det i ett fåtal stammar förekommer svart hår. En typisk kamoriansk kvinna är omkring 175 cm lång och väger cirka 70 kg. En typisk kamoriansk man är omkring 180 cm lång och väger cirka 85 kg."
	
	kamorian.subval=[[[]]];
	kamorian.subval[0][0][0]={};
	kamorian.subval[0][0][0].valdasub = [];
	kamorian.subval[0][0][0].vald = 0;
	
	kamorian.subval[0][0][0].styrka = {};
	kamorian.subval[0][0][0].styrka.varde=8;
	kamorian.subval[0][0][0].talighet = {};
	kamorian.subval[0][0][0].talighet.varde=8;
	kamorian.subval[0][0][0].rorlighet = {};
	kamorian.subval[0][0][0].rorlighet.varde=8;
	kamorian.subval[0][0][0].uppfattning = {};
	kamorian.subval[0][0][0].uppfattning.varde=8;
	kamorian.subval[0][0][0].vilja = {};
	kamorian.subval[0][0][0].vilja.varde=8;
	kamorian.subval[0][0][0].psyke = {};
	kamorian.subval[0][0][0].psyke.varde=8;
	kamorian.subval[0][0][0].visdom = {};
	kamorian.subval[0][0][0].visdom.varde=4;
	kamorian.subval[0][0][0].utstralning = {};
	kamorian.subval[0][0][0].utstralning.varde=8;
	kamorian.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6"]],[["Tålighet"],["2T6"]],[["Rörlighet"],["2T6"]],[["Uppfattning"],["2T6"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6"]],[["Visdom"],["1T6"]],[["Utstrålning"],["2T6"]]]
	
	kamorian.subval.push([[]]);
	kamorian.subval[1][0][0]={};
	kamorian.subval[1][0][0].valdasub = [];
	kamorian.subval[1][0][0].vald = 0;
	kamorian.subval[1][0][0].rubrik="Totemande";
	kamorian.subval[1][0][0].beskrivning="Via sitt ursprung har kamorianen ett naturligt band till ett totemdjur kopplat till riket Kamor. Detta totemdjur attackerar aldrig kamorianen utan kan istället hjälpa denne. Rollpersonen har följande totemdjur:";
	kamorian.subval[1][0][0].antalsubval=1;
	
	kamorian.subval[1].push([]);
	kamorian.subval[1][1][0]={};
	kamorian.subval[1][1][0].valdasub = [];
	kamorian.subval[1][1][0].vald = 0;
	kamorian.subval[1][1][0].rubrik="Blodulv";
	kamorian.subval[1][1][0].beskrivning="Folket har ofta svart eller mörkrött hår. Krökta klor och vassa tänder är mycket vanligt. \[+3 Styrka, +3 Tålighet, +1 Läkningstakt.\]";
	kamorian.subval[1][1][0].ovrigt="Totemdjur: blodulv"
	kamorian.subval[1][1][0].styrka = {};
	kamorian.subval[1][1][0].styrka.varde=3;
	kamorian.subval[1][1][0].talighet = {};
	kamorian.subval[1][1][0].talighet.varde=3;
	kamorian.subval[1][1][0].lakningstakt = {};
	kamorian.subval[1][1][0].lakningstakt.bonus=1;
	
	kamorian.subval[1].push([]);
	kamorian.subval[1][2][0]={};
	kamorian.subval[1][2][0].valdasub = [];
	kamorian.subval[1][2][0].vald = 0;
	kamorian.subval[1][2][0].rubrik="Frostvarg";
	kamorian.subval[1][2][0].beskrivning="De har ofta klarblå, mycket ljusa ögon. Håret är ofta vitt eller ljusgrått. \[+2 Styrka, +1T6 Tålighet, +2 Vilja.\]";
	kamorian.subval[1][2][0].ovrigt="Totemdjur: frostvarg"
	kamorian.subval[1][2][0].styrka = {};
	kamorian.subval[1][2][0].styrka.varde=2;
	kamorian.subval[1][2][0].talighet = {};
	kamorian.subval[1][2][0].talighet.varde=4;
	kamorian.subval[1][2][0].vilja = {};
	kamorian.subval[1][2][0].vilja.varde=2;
	
	kamorian.subval[1].push([]);
	kamorian.subval[1][3][0]={};
	kamorian.subval[1][3][0].valdasub = [];
	kamorian.subval[1][3][0].vald = 0;
	kamorian.subval[1][3][0].rubrik="Giftorm";
	kamorian.subval[1][3][0].beskrivning="Folket är smalt och på gränsen till klent men är mycket snabba och rörliga. \[+2 Tålighet, +2 Rörlighet, +1T6 Reaktion.\]";
	kamorian.subval[1][3][0].ovrigt="Totemdjur: giftorm"
	kamorian.subval[1][3][0].rorlighet = {};
	kamorian.subval[1][3][0].rorlighet.varde=2;
	kamorian.subval[1][3][0].talighet = {};
	kamorian.subval[1][3][0].talighet.varde=2;
	kamorian.subval[1][3][0].reaktion = {};
	kamorian.subval[1][3][0].reaktion.bonus=4;
	
	
	
	kamorian.subval[1].push([]);
	kamorian.subval[1][4][0]={};
	kamorian.subval[1][4][0].valdasub = [];
	kamorian.subval[1][4][0].vald = 0;
	kamorian.subval[1][4][0].rubrik="Gråvarg";
	kamorian.subval[1][4][0].beskrivning="Folket har ofta vargliknande ögon och vassa tänder. \[+2 Styrka, +1T6 Uppfattning, +2 Grundskada.\]";
	kamorian.subval[1][4][0].ovrigt="Totemdjur: gråvarg"
	kamorian.subval[1][4][0].styrka = {};
	kamorian.subval[1][4][0].styrka.varde=2;
	kamorian.subval[1][4][0].uppfattning = {};
	kamorian.subval[1][4][0].uppfattning.varde=4;
	kamorian.subval[1][4][0].grundskada = {};
	kamorian.subval[1][4][0].grundskada.bonus=2;
	
	kamorian.subval[1].push([]);
	kamorian.subval[1][5][0]={};
	kamorian.subval[1][5][0].valdasub = [];
	kamorian.subval[1][5][0].vald = 0;
	kamorian.subval[1][5][0].rubrik="Korp";
	kamorian.subval[1][5][0].beskrivning="Folket är smalt och något kortare. De har nästan alltid svart hår och svarta ögon. \[+2 Rörlighet, +2 Uppfattning, +1T6 Psyke.\]";
	kamorian.subval[1][5][0].ovrigt="Totemdjur: korp"
	kamorian.subval[1][5][0].rorlighet = {};
	kamorian.subval[1][5][0].rorlighet.varde=2;
	kamorian.subval[1][5][0].uppfattning = {};
	kamorian.subval[1][5][0].uppfattning.varde=2;
	kamorian.subval[1][5][0].psyke = {};
	kamorian.subval[1][5][0].psyke.varde=4;
	
	
	kamorian.subval[1].push([]);
	kamorian.subval[1][6][0]={};
	kamorian.subval[1][6][0].valdasub = [];
	kamorian.subval[1][6][0].vald = 0;
	kamorian.subval[1][6][0].rubrik="Stenbock";
	kamorian.subval[1][6][0].beskrivning="De har ofta timglasformade pupiller och mörkgrått eller svart hår. \[+2 Styrka, +2 Tålighet, +1T6 Vilja.\]";
	kamorian.subval[1][6][0].ovrigt="Totemdjur: stenbock"
	kamorian.subval[1][6][0].styrka = {};
	kamorian.subval[1][6][0].styrka.varde=2;
	kamorian.subval[1][6][0].talighet = {};
	kamorian.subval[1][6][0].talighet.varde=2;
	kamorian.subval[1][6][0].vilja = {};
	kamorian.subval[1][6][0].vilja.varde=4;
	
	kamorian.subval[1].push([]);
	kamorian.subval[1][7][0]={};
	kamorian.subval[1][7][0].valdasub = [];
	kamorian.subval[1][7][0].vald = 0;
	kamorian.subval[1][7][0].rubrik="Svartbjörn";
	kamorian.subval[1][7][0].beskrivning="Folket i svartbjörnens stam blir storväxta och männen har ofta vildvuxet skägg. Likaså får vissa klor på sina fingrar och vassare tänder. \[+1T6 Styrka, +2 Tålighet, –1T6 Rörlighet, +1T6 Kroppsbyggnad.\]";
	kamorian.subval[1][7][0].ovrigt="Totemdjur: svartbjörn"
	kamorian.subval[1][7][0].styrka = {};
	kamorian.subval[1][7][0].styrka.varde=4;
	kamorian.subval[1][7][0].talighet = {};
	kamorian.subval[1][7][0].talighet.varde=2;
	kamorian.subval[1][7][0].rorlighet = {};
	kamorian.subval[1][7][0].rorlighet.varde=-4;
	kamorian.subval[1][7][0].kroppsbyggnad = {};
	kamorian.subval[1][7][0].kroppsbyggnad.bonus=4;
	
	
	kamorian.subval[1].push([]);
	kamorian.subval[1][8][0]={};
	kamorian.subval[1][8][0].valdasub = [];
	kamorian.subval[1][8][0].vald = 0;
	kamorian.subval[1][8][0].rubrik="Vildsvin";
	kamorian.subval[1][8][0].beskrivning="Folket blir kortare men mer bastanta. Det är inte ovanligt med mindre betar i underkäken. \[+2 Styrka, +1T6 Tålighet, –2 Uppfattning, +2 Grundrustning.\]";
	kamorian.subval[1][8][0].ovrigt="Totemdjur: vildsvin"
	kamorian.subval[1][8][0].styrka = {};
	kamorian.subval[1][8][0].styrka.varde=2;
	kamorian.subval[1][8][0].talighet = {};
	kamorian.subval[1][8][0].talighet.varde=4;
	kamorian.subval[1][8][0].uppfattning = {};
	kamorian.subval[1][8][0].uppfattning.varde=-2;
	kamorian.subval[1][8][0].grundrustning = {};
	kamorian.subval[1][8][0].grundrustning.bonus=2;
	
	
	
	
	kamorian.subval[1].push([]);
	kamorian.subval[1][9][0]={};
	kamorian.subval[1][9][0].valdasub = [];
	kamorian.subval[1][9][0].vald = 0;
	kamorian.subval[1][9][0].rubrik="Vithjort";
	kamorian.subval[1][9][0].beskrivning="Folket är långa och spensliga och vanligen mycket snabba. \[+2 Tålighet, +1T6 Rörlighet, +2 Uppfattning.\]";
	kamorian.subval[1][9][0].ovrigt="Totemdjur: vithjort"
	kamorian.subval[1][9][0].rorlighet = {};
	kamorian.subval[1][9][0].rorlighet.varde=4;
	kamorian.subval[1][9][0].talighet = {};
	kamorian.subval[1][9][0].talighet.varde=2;
	kamorian.subval[1][9][0].uppfattning = {};
	kamorian.subval[1][9][0].uppfattning.varde=2;
	
	kamorian.subval[1].push([]);
	kamorian.subval[1][10][0]={};
	kamorian.subval[1][10][0].valdasub = [];
	kamorian.subval[1][10][0].vald = 0;
	kamorian.subval[1][10][0].rubrik="Utvald";
	kamorian.subval[1][10][0].beskrivning="Rollpersonen är en av hamnskiftarna, Mu’arche. Slå igen på tabellen (och slå om detta resultat om det kommer igen)." + "\n" + "Rollpersonen får förmågorna från den totemanden och kan dessutom hamnskifta till det djuret. Detta tar 10 rundor. Kläder, vapen och utrustning hamnskiftar ej med personen. Att skifta hamn är av inkvisitionen belagt med dödsstraff." + "\n" + "När rollpersonen är i djurhamn har den djurets egenskaper och färdigheter men behåller sitt mänskliga intellekt. Skulle man dö i sin djurhamn förvandlas liket tillbaka till människoform.";
	kamorian.subval[1][10][0].antalsubval=1;
	kamorian.subval[1][10][0].formaga="Rollpersonen är hamnskiftare \(Mu’arche\)"
	
	
	kamorian.subval[1][10].push([]);
	kamorian.subval[1][10][1]={};
	kamorian.subval[1][10][1].rubrik="Blodulv";
	kamorian.subval[1][10][1].beskrivning="Folket har ofta svart eller mörkrött hår. Krökta klor och vassa tänder är mycket vanligt. \[+3 Styrka, +3 Tålighet, +1 Läkningstakt.\]";
	kamorian.subval[1][10][1].ovrigt="Totemdjur: blodulv"
	kamorian.subval[1][10][1].styrka = {};
	kamorian.subval[1][10][1].styrka.varde=3;
	kamorian.subval[1][10][1].talighet = {};
	kamorian.subval[1][10][1].talighet.varde=3;
	kamorian.subval[1][10][1].lakningstakt = {};
	kamorian.subval[1][10][1].lakningstakt.bonus=1;
	
	kamorian.subval[1][10].push([]);
	kamorian.subval[1][10][2]={};
	kamorian.subval[1][10][2].rubrik="Frostvarg";
	kamorian.subval[1][10][2].beskrivning="De har ofta klarblå, mycket ljusa ögon. Håret är ofta vitt eller ljusgrått. \[+2 Styrka, +1T6 Tålighet, +2 Vilja.\]";
	kamorian.subval[1][10][2].ovrigt="Totemdjur: frostvarg"
	kamorian.subval[1][10][2].styrka = {};
	kamorian.subval[1][10][2].styrka.varde=2;
	kamorian.subval[1][10][2].talighet = {};
	kamorian.subval[1][10][2].talighet.varde=4;
	kamorian.subval[1][10][2].vilja = {};
	kamorian.subval[1][10][2].vilja.varde=2;
	
	kamorian.subval[1][10].push([]);
	kamorian.subval[1][10][3]={};
	kamorian.subval[1][10][3].rubrik="Giftorm";
	kamorian.subval[1][10][3].beskrivning="Folket är smalt och på gränsen till klent men är mycket snabba och rörliga. \[+2 Tålighet, +2 Rörlighet, +1T6 Reaktion.\]";
	kamorian.subval[1][10][3].ovrigt="Totemdjur: giftorm"
	kamorian.subval[1][10][3].rorlighet = {};
	kamorian.subval[1][10][3].rorlighet.varde=2;
	kamorian.subval[1][10][3].talighet = {};
	kamorian.subval[1][10][3].talighet.varde=2;
	kamorian.subval[1][10][3].reaktion = {};
	kamorian.subval[1][10][3].reaktion.bonus=4;
	
	
	
	kamorian.subval[1][10].push([]);
	kamorian.subval[1][10][4]={};
	kamorian.subval[1][10][4].rubrik="Gråvarg";
	kamorian.subval[1][10][4].beskrivning="Folket har ofta vargliknande ögon och vassa tänder. \[+2 Styrka, +1T6 Uppfattning, +2 Grundskada.\]";
	kamorian.subval[1][10][4].ovrigt="Totemdjur: gråvarg"
	kamorian.subval[1][10][4].styrka = {};
	kamorian.subval[1][10][4].styrka.varde=2;
	kamorian.subval[1][10][4].uppfattning = {};
	kamorian.subval[1][10][4].uppfattning.varde=4;
	kamorian.subval[1][10][4].grundskada = {};
	kamorian.subval[1][10][4].grundskada.bonus=2;
	
	kamorian.subval[1][10].push([]);
	kamorian.subval[1][10][5]={};
	kamorian.subval[1][10][5].rubrik="Korp";
	kamorian.subval[1][10][5].beskrivning="Folket är smalt och något kortare. De har nästan alltid svart hår och svarta ögon. \[+2 Rörlighet, +2 Uppfattning, +1T6 Psyke.\]";
	kamorian.subval[1][10][5].ovrigt="Totemdjur: korp"
	kamorian.subval[1][10][5].rorlighet = {};
	kamorian.subval[1][10][5].rorlighet.varde=2;
	kamorian.subval[1][10][5].uppfattning = {};
	kamorian.subval[1][10][5].uppfattning.varde=2;
	kamorian.subval[1][10][5].psyke = {};
	kamorian.subval[1][10][5].psyke.varde=4;
	
	
	kamorian.subval[1][10].push([]);
	kamorian.subval[1][10][6]={};
	kamorian.subval[1][10][6].rubrik="Stenbock";
	kamorian.subval[1][10][6].beskrivning="De har ofta timglasformade pupiller och mörkgrått eller svart hår. \[+2 Styrka, +2 Tålighet, +1T6 Vilja.\]";
	kamorian.subval[1][10][6].ovrigt="Totemdjur: stenbock"
	kamorian.subval[1][10][6].styrka = {};
	kamorian.subval[1][10][6].styrka.varde=2;
	kamorian.subval[1][10][6].talighet = {};
	kamorian.subval[1][10][6].talighet.varde=2;
	kamorian.subval[1][10][6].vilja = {};
	kamorian.subval[1][10][6].vilja.varde=4;
	
	kamorian.subval[1][10].push([]);
	kamorian.subval[1][10][7]={};
	kamorian.subval[1][10][7].rubrik="Svartbjörn";
	kamorian.subval[1][10][7].beskrivning="Folket i svartbjörnens stam blir storväxta och männen har ofta vildvuxet skägg. Likaså får vissa klor på sina fingrar och vassare tänder. \[+1T6 Styrka, +2 Tålighet, –1T6 Rörlighet, +1T6 Kroppsbyggnad.\]";
	kamorian.subval[1][10][7].ovrigt="Totemdjur: svartbjörn"
	kamorian.subval[1][10][7].styrka = {};
	kamorian.subval[1][10][7].styrka.varde=4;
	kamorian.subval[1][10][7].talighet = {};
	kamorian.subval[1][10][7].talighet.varde=2;
	kamorian.subval[1][10][7].rorlighet = {};
	kamorian.subval[1][10][7].rorlighet.varde=-4;
	kamorian.subval[1][10][7].kroppsbyggnad = {};
	kamorian.subval[1][10][7].kroppsbyggnad.bonus=4;
	
	
	kamorian.subval[1][10].push([]);
	kamorian.subval[1][10][8]={};
	kamorian.subval[1][10][8].rubrik="Vildsvin";
	kamorian.subval[1][10][8].beskrivning="Folket blir kortare men mer bastanta. Det är inte ovanligt med mindre betar i underkäken. \[+2 Styrka, +1T6 Tålighet, –2 Uppfattning, +2 Grundrustning.\]";
	kamorian.subval[1][10][8].ovrigt="Totemdjur: vildsvin"
	kamorian.subval[1][10][8].styrka = {};
	kamorian.subval[1][10][8].styrka.varde=2;
	kamorian.subval[1][10][8].talighet = {};
	kamorian.subval[1][10][8].talighet.varde=4;
	kamorian.subval[1][10][8].uppfattning = {};
	kamorian.subval[1][10][8].uppfattning.varde=-2;
	kamorian.subval[1][10][8].grundrustning = {};
	kamorian.subval[1][10][8].grundrustning.bonus=2;
	
	
	
	
	kamorian.subval[1][10].push([]);
	kamorian.subval[1][10][9]={};
	kamorian.subval[1][10][9].rubrik="Vithjort";
	kamorian.subval[1][10][9].beskrivning="Folket är långa och spensliga och vanligen mycket snabba. \[+2 Tålighet, +1T6 Rörlighet, +2 Uppfattning.\]";
	kamorian.subval[1][10][9].ovrigt="Totemdjur: vithjort"
	kamorian.subval[1][10][9].rorlighet = {};
	kamorian.subval[1][10][9].rorlighet.varde=4;
	kamorian.subval[1][10][9].talighet = {};
	kamorian.subval[1][10][9].talighet.varde=2;
	kamorian.subval[1][10][9].uppfattning = {};
	kamorian.subval[1][10][9].uppfattning.varde=2;
	
	
	
	
	
	
	
	kamorian.subval[0].push([]);
	kamorian.subval[0][1][0]={};
	kamorian.subval[0][1][0].valdasub = [];
	kamorian.subval[0][1][0].vald = 0;
	kamorian.subval[0][1][0].rubrik="Matsmältning";
	kamorian.subval[0][1][0].beskrivning="En kamorian har inga problem att äta rått kött och kroppen kan klara av att bryta ned även härsken och skämd mat.";
	kamorian.subval[0][1][0].formaga="Kan äta härsken och skämd mat";
	
	
	kamorian.subval[0].push([]);
	kamorian.subval[0][2][0]={};
	kamorian.subval[0][2][0].valdasub = [];
	kamorian.subval[0][2][0].vald = 0;
	kamorian.subval[0][2][0].rubrik="Vildmarkens band";
	kamorian.subval[0][2][0].beskrivning="Kamorianer har ett naturligt band till vildmarken. Färdigheterna Spåra och Vildmarksvana är Lättlärda.";
	kamorian.subval[0][2][0].spara = {};
	kamorian.subval[0][2][0].spara.lattlard=1;
	kamorian.subval[0][2][0].vildmarksvana = {};
	kamorian.subval[0][2][0].vildmarksvana.lattlard=1;
	
	
	kamorian.subval[0].push([]);
	kamorian.subval[0][3][0]={};
	kamorian.subval[0][3][0].valdasub = [];
	kamorian.subval[0][3][0].vald = 0;
	kamorian.subval[0][3][0].rubrik="Vildmarksliv";
	kamorian.subval[0][3][0].beskrivning="1 extra slag på händelsetabellen Färder & äventyr.";
	kamorian.subval[0][3][0].farderaventyr=1;
	
	
	
	kamorian.subval[0].push([]);
	kamorian.subval[0][4][0]={};
	kamorian.subval[0][4][0].valdasub = [];
	kamorian.subval[0][4][0].vald = 0;
	kamorian.subval[0][4][0].antalsubval=4;
	
	kamorian.subval[0][4][1]={};
	kamorian.subval[0][4][1].rubrik="Talade språk"
	kamorian.subval[0][4][1].beskrivning="Kamorianska, lägre jargiska"
	
	kamorian.subval[0][4][1].taladesprak="Kamorianska, lägre jargiska"
	kamorian.subval[0][4][1].kamorianska = {};
	kamorian.subval[0][4][1].kamorianska.enheter=1;
	kamorian.subval[0][4][1].lagrejargiska = {};
	kamorian.subval[0][4][1].lagrejargiska.enheter=1;
	
	kamorian.subval[0][4][2]={};
	kamorian.subval[0][4][2].rubrik="Skriftspråk"
	kamorian.subval[0][4][2].beskrivning="Inga."
	kamorian.subval[0][4][2].skriftsprak="Inga."
	
	kamorian.subval[0][4][3]={};
	kamorian.subval[0][4][3].rubrik="Kvinnonamn"
	
	// kamorian.subval[0][4][3].kvinnonamnlista=["Ar-pa", "Br’ho", "Eve-li", "Gh’a", "Hara", "Ke-ko", "Kv’ka", "Rh’ana", "Va-la", "Yl-ha"];
	// kamorian.subval[0][4][3].beskrivning="Ar-pa, Br’ho, Eve-li, Gh’a, Hara, Ke-ko, Kv’ka, Rh’ana, Va-la, Yl-ha";
	
	kamorian.subval[0][4][4]={};
	kamorian.subval[0][4][4].rubrik="Mansnamn"
	
	//kamorian.subval[0][4][4].beskrivning="Ba-vir, Chald, Den’al, Grasch, Ka’briko, No-vir, Urg, Va-lir";

	//kamorian.subval[0][4][4].mansnamnlista=["Ba-vir", "Chald", "Den’al", "Grasch", "Ka’briko", "No-vir", "Urg", "Va-lir"];

	
    var marnakhtirak={};
	folkslagobjekt.marnakhtirak=marnakhtirak;
    marnakhtirak.rubrik="Marnakhtirak";
	marnakhtirak.namn="marnakhtirak";
	marnakhtirak.beskrivning="Tirakerna är ett folkslag som är fruktat och hatat. De består av ett stort antal stammar indelade i olika ätter där vissa är mycket primitiva medan andra är minst lika civiliserade som människor. Trots detta är även de mest civiliserade tirakerna endast accepterade i de yttre delarna av Kejsardömet och även där är de offer för hat och fördomar." + "\n" + "Deras ansikten liknar människors men med större och mer framskjutet hakparti, en bred näsa samt en plattare panna. De har dessutom kraftiga huggtänder – speciellt i underkäken. Många dyrkar i hemlighet den mörka gudinnan Mahktah som enligt legenden är tirakernas skapare. Hon är en krigs- och fertilitetsgudinna som föraktar svaghet och feghet. Detta gör att många tiraker väljer krigaryrken för att hedra henne. Den tirakiska kulturen är matriarkal i sin maktstruktur." + "\n" + "En tirakisk kvinna är omkring 175 cm lång och väger runt 80 kg. En typisk tirakisk man är omkring 180 cm lång och väger runt 85 kg."
	
	
	marnakhtirak.subval=[[[]]];
	marnakhtirak.subval[0][0][0]={};
	marnakhtirak.subval[0][0][0].valdasub = [];
	marnakhtirak.subval[0][0][0].vald = 0;
	
	marnakhtirak.subval[0][0][0].styrka = {};
	marnakhtirak.subval[0][0][0].styrka.varde=10;
	marnakhtirak.subval[0][0][0].talighet = {};
	marnakhtirak.subval[0][0][0].talighet.varde=12;
	marnakhtirak.subval[0][0][0].rorlighet = {};
	marnakhtirak.subval[0][0][0].rorlighet.varde=8;
	marnakhtirak.subval[0][0][0].uppfattning = {};
	marnakhtirak.subval[0][0][0].uppfattning.varde=8;
	marnakhtirak.subval[0][0][0].vilja = {};
	marnakhtirak.subval[0][0][0].vilja.varde=8;
	marnakhtirak.subval[0][0][0].psyke = {};
	marnakhtirak.subval[0][0][0].psyke.varde=8;
	marnakhtirak.subval[0][0][0].visdom = {};
	marnakhtirak.subval[0][0][0].visdom.varde=8;
	marnakhtirak.subval[0][0][0].utstralning = {};
	marnakhtirak.subval[0][0][0].utstralning.varde=8;
	marnakhtirak.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6\+2"]],[["Tålighet"],["3T6"]],[["Rörlighet"],["2T6"]],[["Uppfattning"],["2T6"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6"]],[["Visdom"],["2T6"]],[["Utstrålning"],["2T6"]]]
	
	marnakhtirak.subval[0].push([]);
	marnakhtirak.subval[0][1][0]={};
	marnakhtirak.subval[0][1][0].valdasub = [];
	marnakhtirak.subval[0][1][0].vald = 0;
	marnakhtirak.subval[0][1][0].rubrik="Livet bland människorna";
	marnakhtirak.subval[0][1][0].beskrivning="Marnakhätten har sedan lång tid försökt finna sig en tillvaro i de mänskliga samhällena. De får 2 enheter Sociala färdigheter och kännetecknet Dåligt rykte 4T6.";
	marnakhtirak.subval[0][1][0].socialafardigheterenheter=2;
	marnakhtirak.subval[0][1][0].daligtrykte = {};
	marnakhtirak.subval[0][1][0].daligtrykte.enheter=3;
	
	marnakhtirak.subval[0].push([]);
	marnakhtirak.subval[0][2][0]={};
	marnakhtirak.subval[0][2][0].valdasub = [];
	marnakhtirak.subval[0][2][0].vald = 0;
	marnakhtirak.subval[0][2][0].rubrik="Luktsinne";
	marnakhtirak.subval[0][2][0].beskrivning="Tiraker har ett mycket skarpt luktsinne och kan spåra folk med hjälp av lukten. De får kännetecknet Luktsinne 4T6.";
	marnakhtirak.subval[0][2][0].luktsinne = {};
	marnakhtirak.subval[0][2][0].luktsinne.enheter=3;
	
	
	marnakhtirak.subval[0].push([]);
	marnakhtirak.subval[0][3][0]={};
	marnakhtirak.subval[0][3][0].valdasub = [];
	marnakhtirak.subval[0][3][0].vald = 0;
	marnakhtirak.subval[0][3][0].rubrik="Motståndskraft";
	marnakhtirak.subval[0][3][0].beskrivning="Tiraker är ett motståndskraftigt släkte. De får +1T6 på att bli fria från infektioner samt att motstå alkohol och gifter.";
	marnakhtirak.subval[0][3][0].livskraft = {};
	marnakhtirak.subval[0][3][0].livskraft.egenskap= "\+1T6 på att bli fria från infektioner" + "\n" + "\+1T6 för att motstå alkohol och gifter";
	
	marnakhtirak.subval[0].push([]);
	marnakhtirak.subval[0][4][0]={};
	marnakhtirak.subval[0][4][0].valdasub = [];
	marnakhtirak.subval[0][4][0].vald = 0;
	marnakhtirak.subval[0][4][0].rubrik="Mörkersyn"
	marnakhtirak.subval[0][4][0].beskrivning="Tiraker kan se i totalt mörker. Deras ögon lyser då rött. De får kännetecknet Mörkersyn 4T6."
	marnakhtirak.subval[0][4][0].morkersyn = {};
	marnakhtirak.subval[0][4][0].morkersyn.enheter=3;
	
	marnakhtirak.subval[0].push([]);
	marnakhtirak.subval[0][5][0]={};
	marnakhtirak.subval[0][5][0].valdasub = [];
	marnakhtirak.subval[0][5][0].vald = 0;
	marnakhtirak.subval[0][5][0].rubrik="Slagskämpar"
	marnakhtirak.subval[0][5][0].beskrivning="Tiraker är ihärdiga kämpar och livsfarliga i närstrid med sina klor. De är Lättlärda i Slagsmål och alla obeväpnade attacker har egenskapen Vådlig. Dessutom är de orädda då det kommer till våldsamheter och får 1 Avtrubbningskryss för våld."
	marnakhtirak.subval[0][5][0].slagsmal = {};
	marnakhtirak.subval[0][5][0].slagsmal.lattlard=1;
	marnakhtirak.subval[0][5][0].formaga="Alla obeväpnade attacker har egenskapen Vådlig";
	marnakhtirak.subval[0][5][0].avtrubbningvald=1;
	
	
	marnakhtirak.subval[0].push([]);
	marnakhtirak.subval[0][6][0]={};
	marnakhtirak.subval[0][6][0].valdasub = [];
	marnakhtirak.subval[0][6][0].vald = 0;
	marnakhtirak.subval[0][6][0].antalsubval=4;
	
	marnakhtirak.subval[0][6][1]={};
	
	marnakhtirak.subval[0][6][1].rubrik="Talade språk"
	marnakhtirak.subval[0][6][1].beskrivning="Sakhra, lägre jargiska"
	
	marnakhtirak.subval[0][6][1].taladesprak="Sakhra, lägre jargiska"
	marnakhtirak.subval[0][6][1].sakhra = {};
	marnakhtirak.subval[0][6][1].sakhra.enheter=1;
	marnakhtirak.subval[0][6][1].lagrejargiska = {};
	marnakhtirak.subval[0][6][1].lagrejargiska.enheter=1;
	
	marnakhtirak.subval[0][6][2]={};
	
	marnakhtirak.subval[0][6][2].rubrik="Skriftspråk"
	
	marnakhtirak.subval[0][6][2].skriftsprak="Inga."
	marnakhtirak.subval[0][6][2].beskrivning="Inga."
	
	marnakhtirak.subval[0][6][3]={};
	
	marnakhtirak.subval[0][6][3].rubrik="Kvinnonamn"
	marnakhtirak.subval[0][6][3].kvinnonamnlista=["Bizezel", "Dûra", "Ezel", "Haztah", "Reza", "Saza", "Umma", "Wulfa", "Xora", "Ynna", "Zûtah"];
	marnakhtirak.subval[0][6][3].beskrivning="Bizezel, Dûra, Ezel, Haztah, Reza, Saza, Umma, Wulfa, Xora, Ynna, Zûtah";
	
	
	marnakhtirak.subval[0][6][4]={};
	marnakhtirak.subval[0][6][4].rubrik="Mansnamn"
	
	marnakhtirak.subval[0][6][4].beskrivning="Arog, Dolomaz, Ekkim, Faath, Gragg, Maagrim, Olgakk, Shûlger, Ulag, Zuthzuth";

	marnakhtirak.subval[0][6][4].mansnamnlista=["Arog", "Dolomaz", "Ekkim", "Faath", "Gragg", "Maagrim", "Olgakk", "Shûlger", "Ulag", "Zuthzuth"];

	
    var missla={};
	folkslagobjekt.missla=missla;
    missla.rubrik="Missla";
	missla.namn="missla";
	missla.beskrivning="Misslor är ett kortvuxet folk som många misstar för alver. De håller sig vanligen för sig själva i små avlägsna byar men en del misslor har äventyrslustan i blodet och söker sig ut i människornas värld." + "\n" + "Misslor är slanka och så gott som enbart äldre misslor lägger på sig några extra kilon. Misslor har alltid ljus hy. Solbränna är ovanligt och mörka naturliga hudfärger förekommer inte alls. Hårfärgen varierar från ljusblont till mörkbrunt, och ögonfärgen är grön eller brun. Misslor har långa och spetsiga öron vilka riktar sig åt de håll de lyssnar samt står upp när de är glada och slokar när de är ledsna. En typisk missla, kvinna som man, är omkring 125 cm och väger cirka 35 kg."
	
	missla.subval=[[[]]];
	missla.subval[0][0][0]={};
	missla.subval[0][0][0].valdasub = [];
	missla.subval[0][0][0].vald = 0;
	missla.subval[0][0][0].styrka = {};
	missla.subval[0][0][0].styrka.varde=4;
	missla.subval[0][0][0].talighet = {};
	missla.subval[0][0][0].talighet.varde=6;
	missla.subval[0][0][0].rorlighet = {};
	missla.subval[0][0][0].rorlighet.varde=10;
	missla.subval[0][0][0].uppfattning = {};
	missla.subval[0][0][0].uppfattning.varde=12;
	missla.subval[0][0][0].vilja = {};
	missla.subval[0][0][0].vilja.varde=8;
	missla.subval[0][0][0].psyke = {};
	missla.subval[0][0][0].psyke.varde=8;
	missla.subval[0][0][0].visdom = {};
	missla.subval[0][0][0].visdom.varde=8;
	missla.subval[0][0][0].utstralning = {};
	missla.subval[0][0][0].utstralning.varde=8;
	missla.subval[0][0][0].beskrivningattribut=[[["Styrka"],["1T6"]],[["Tålighet"],["1T6\+2"]],[["Rörlighet"],["2T6\+2"]],[["Uppfattning"],["3T6"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6"]],[["Visdom"],["2T6"]],[["Utstrålning"],["2T6"]]]
	
	missla.subval[0].push([]);
	missla.subval[0][1][0]={};
	missla.subval[0][1][0].valdasub = [];
	missla.subval[0][1][0].vald = 0;
	missla.subval[0][1][0].rubrik="Absolut gehör";
	missla.subval[0][1][0].beskrivning="Färdigheten Sång \& musik är Lättlärd.";
	missla.subval[0][1][0].sangmusik = {};
	missla.subval[0][1][0].sangmusik.lattlard=1;

	missla.subval[0].push([]);
	missla.subval[0][2][0]={};
	missla.subval[0][2][0].valdasub = [];
	missla.subval[0][2][0].vald = 0;
	missla.subval[0][2][0].rubrik="Föra över känslor";
	missla.subval[0][2][0].beskrivning="Misslor kan föra över känslor till levande varelser vid beröring. De har lätt att trösta gråtande barn, lugna djur och dämpa ilskna känslor. De får kännetecknet Empatisk beröring 4T6.";
	missla.subval[0][2][0].empatiskberoring = {};
	missla.subval[0][2][0].empatiskberoring.enheter=3;
	missla.subval[0][2][0].formaga="Kan med färdigheten Empatisk beröring föra över känslor till levande varelser." 
	
	
	missla.subval[0].push([]);
	missla.subval[0][3][0]={};
	missla.subval[0][3][0].valdasub = [];
	missla.subval[0][3][0].vald = 0;
	missla.subval[0][3][0].rubrik="Kvick och flink";
	missla.subval[0][3][0].beskrivning="Misslor har lärt sig att hålla sig undan faror genom att flytta sig ur vägen. Färdigheten Undvika är Lättlärd.";
	missla.subval[0][3][0].undvika = {};
	missla.subval[0][3][0].undvika.lattlard=1;
	
	missla.subval[0].push([]);
	missla.subval[0][4][0]={};
	missla.subval[0][4][0].valdasub = [];
	missla.subval[0][4][0].vald = 0;
	missla.subval[0][4][0].rubrik="Skarpa sinnen"
	missla.subval[0][4][0].beskrivning="Misslor har ett bra luktsinne och en skarp hörsel. Vaksamhet ökar med +1T6 och de får även kännetecknet Luktsinne 4T6."
	missla.subval[0][4][0].vaksamhet = {};
	missla.subval[0][4][0].vaksamhet.bonus=4;
	missla.subval[0][4][0].luktsinne = {};
	missla.subval[0][4][0].luktsinne.enheter=3;
	
	missla.subval[0].push([]);
	missla.subval[0][5][0]={};
	missla.subval[0][5][0].valdasub = [];
	missla.subval[0][5][0].vald = 0;
	missla.subval[0][5][0].rubrik="Utbyta minnen"
	missla.subval[0][5][0].beskrivning="Om två misslor har kroppskontakt så kan de utbyta minnen med varandra. Detta har lett till misslornas motsvarighet till en kyss – de lägger pannorna mot varandra och tar del av varandras sinnen för ett kort ögonblick. En gång per spelmöte kan misslan få igen 2 Fokus på detta sätt."
	missla.subval[0][5][0].formaga="Kan utbyta minnen med en annan missla vid kroppskontakt, detta ger 2 Fokus en gång per spelmöte.";
	
	missla.subval[0].push([]);
	missla.subval[0][6][0]={};
	missla.subval[0][6][0].valdasub = [];
	missla.subval[0][6][0].vald = 0;
	missla.subval[0][6][0].antalsubval=4;
	
	missla.subval[0][6][1]={};
	missla.subval[0][6][1].rubrik="Talade språk"
	missla.subval[0][6][1].beskrivning="Laitha, lägre jargiska"

	
	
	missla.subval[0][6][1].taladesprak="Laitha, lägre jargiska"
	missla.subval[0][6][1].laitha = {};
	missla.subval[0][6][1].laitha.enheter=1;
	missla.subval[0][6][1].lagrejargiska = {};
	missla.subval[0][6][1].lagrejargiska.enheter=1;
	
	missla.subval[0][6][2]={};
	missla.subval[0][6][2].rubrik="Skriftspråk"
	missla.subval[0][6][2].skriftsprak="Inga."
	missla.subval[0][6][2].beskrivning="Inga."
	
	missla.subval[0][6][3]={};
	missla.subval[0][6][3].rubrik="Kvinnonamn"
	missla.subval[0][6][3].kvinnonamnlista=["Alvros", "Dusi", "Elni", "Fira", "Hisna", "Ita", "Jenna", "Kira", "Lissa", "Minna", "Peja", "Ruti", "Svinna", "Ulli", "Vemma"];
	missla.subval[0][6][3].beskrivning="Alvros, Dusi, Elni, Fira, Hisna, Ita, Jenna, Kira, Lissa, Minna, Peja, Ruti, Svinna, Ulli, Vemma";
	
	missla.subval[0][6][4]={};
	missla.subval[0][6][3].rubrik="Mansnamn"
	missla.subval[0][6][4].beskrivning="Asplöv, Dunlil, Husvid, Intva, Julle, Kasar, Nusse, Osin, Pretver, Snöboll, Uvrugg, Visfin, Ylle";
	missla.subval[0][6][4].mansnamnlista=["Asplöv", "Dunlil", "Husvid", "Intva", "Julle", "Kasar", "Nusse", "Osin", "Pretver", "Snöboll", "Uvrugg", "Visfin", "Ylle"];

	

	
    var pyar={};
	folkslagobjekt.pyar=pyar;
    pyar.rubrik="Pyar";
	pyar.namn="pyar";
	pyar.beskrivning="Pyar är en alvstam som lämnat de djupa skogarna och bor i människornas värld. De bor i egna byar, har sina egna kvarter i städerna eller reser genom riken i stora sällskap. Många försörjer sig som hantverkare eller handelsmän och är kända för sin tålmodighet och sin heder. De sköter ofta kontakten mellan människor och de övriga alvstammarna." + "\n" + "Pyaralver är människolika och förutom deras spetsiga öron och slankare kroppsbyggnad så är det svårt att se skillnad på dem och en jargier. En typisk kvinna av stam pyar är omkring 170 cm och väger cirka 60 kg. En typisk man av stam pyar är omkring 175 cm och väger cirka 65 kg."
	
	pyar.subval=[[[]]];
	pyar.subval[0][0][0]={};
	pyar.subval[0][0][0].valdasub = [];
	pyar.subval[0][0][0].vald = 0;
	pyar.subval[0][0][0].styrka = {};
	pyar.subval[0][0][0].styrka.varde=8;
	pyar.subval[0][0][0].talighet = {};
	pyar.subval[0][0][0].talighet.varde=8;
	pyar.subval[0][0][0].rorlighet = {};
	pyar.subval[0][0][0].rorlighet.varde=9;
	pyar.subval[0][0][0].uppfattning = {};
	pyar.subval[0][0][0].uppfattning.varde=9;
	pyar.subval[0][0][0].vilja = {};
	pyar.subval[0][0][0].vilja.varde=8;
	pyar.subval[0][0][0].psyke = {};
	pyar.subval[0][0][0].psyke.varde=8;
	pyar.subval[0][0][0].visdom = {};
	pyar.subval[0][0][0].visdom.varde=10;
	pyar.subval[0][0][0].utstralning = {};
	pyar.subval[0][0][0].utstralning.varde=10;
	pyar.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6"]],[["Tålighet"],["2T6"]],[["Rörlighet"],["2T6\+1"]],[["Uppfattning"],["2T6\+1"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6"]],[["Visdom"],["2T6\+2"]],[["Utstrålning"],["2T6\+2"]]]
	
	pyar.subval[0].push([]);
	pyar.subval[0][1][0]={};
	pyar.subval[0][1][0].valdasub = [];
	pyar.subval[0][1][0].vald = 0;
	pyar.subval[0][1][0].rubrik="Alviska ögat";
	pyar.subval[0][1][0].beskrivning="Pyar har en förtrollande utstrålning, och enligt många, vackert utseende och får därför bonus +2 Intryck.";
	pyar.subval[0][1][0].intryck = {};
	pyar.subval[0][1][0].intryck.bonus=2;

	pyar.subval[0].push([]);
	pyar.subval[0][2][0]={};
	pyar.subval[0][2][0].valdasub = [];
	pyar.subval[0][2][0].vald = 0;
	pyar.subval[0][2][0].rubrik="Biotropiskt fält";
	pyar.subval[0][2][0].beskrivning="Pyar genomströmmas av biotropisk kraft vilket stoppar blödningar. En pyaralv som blöder slår varje runda ett Livskraftslag mot blödningens svårighet för att se ifall den upphör. Detta sker efter att blödningen hanterats under rundan.";
	pyar.subval[0][2][0].formaga="Vid blödning får ett Livskraftslag mot blödningens svårighet slås varje runda för att stoppa blodflödet."
	
	
	pyar.subval[0].push([]);
	pyar.subval[0][3][0]={};
	pyar.subval[0][3][0].valdasub = [];
	pyar.subval[0][3][0].vald = 0;
	pyar.subval[0][3][0].rubrik="Långlivad";
	pyar.subval[0][3][0].beskrivning="Pyar lever inte för evigt men betydligt längre än någon människa eller dvärg. Av detta får de 4 enheter Kunskapsfärdigheter samt +2 Självkontroll.";
	pyar.subval[0][3][0].kunskapsfardigheterenheter=4;
	pyar.subval[0][3][0].sjalvkontroll = {};
	pyar.subval[0][3][0].sjalvkontroll.bonus=2;
	
	pyar.subval[0].push([]);
	pyar.subval[0][4][0]={};
	pyar.subval[0][4][0].valdasub = [];
	pyar.subval[0][4][0].vald = 0;
	pyar.subval[0][4][0].rubrik="Medlem i handelshus"
	pyar.subval[0][4][0].beskrivning="Som pyar är man alltid medlem i ett handelshus och hittar fränder världen över. De är Lättlärda i färdigheten Kulturkännedom samt att de får expertisen Kontakt i varje stad 4T6."
	pyar.subval[0][4][0].kulturkannedom = {};
	pyar.subval[0][4][0].kulturkannedom.lattlard=1;
	pyar.subval[0][4][0].kontaktivarjestad = {};
	pyar.subval[0][4][0].kontaktivarjestad.enheter=3;
	pyar.subval[0][4][0].ovrigt="Medlem i ett handelshus";
	
	pyar.subval[0].push([]);
	pyar.subval[0][5][0]={};
	pyar.subval[0][5][0].valdasub = [];
	pyar.subval[0][5][0].vald = 0;
	pyar.subval[0][5][0].rubrik="Nattsyn"
	pyar.subval[0][5][0].beskrivning="Pyar har god nattsyn och kan se bra i ljussvaga förhållanden. Är det totalt mörker ser de dock ingenting. De får kännetecknet Nattsyn 4T6."
	pyar.subval[0][5][0].nattsyn = {};
	pyar.subval[0][5][0].nattsyn.enheter=3;
	
	
	pyar.subval[0].push([]);
	pyar.subval[0][6][0]={};
	pyar.subval[0][6][0].valdasub = [];
	pyar.subval[0][6][0].vald = 0;
	pyar.subval[0][6][0].rubrik="Personkännare"
	pyar.subval[0][6][0].beskrivning="Efter lång tid bland andra folkslag har pyar lärt sig läsa av deras kroppsspråk. De är Lättlärda i färdigheten Genomskåda."
	pyar.subval[0][6][0].genomskada = {};
	pyar.subval[0][6][0].genomskada.lattlard=1;
	
	pyar.subval[0].push([]);
	pyar.subval[0][7][0]={};
	pyar.subval[0][7][0].valdasub = [];
	pyar.subval[0][7][0].vald = 0;
	pyar.subval[0][7][0].antalsubval=4;
	
	pyar.subval[0][7][1]={};
	pyar.subval[0][7][1].rubrik="Talade språk"
	pyar.subval[0][7][1].beskrivning="Felya sanari, lägre jargiska"
	pyar.subval[0][7][1].taladesprak="Felya sanari, lägre jargiska"
	pyar.subval[0][7][1].felyasanari = {};
	pyar.subval[0][7][1].felyasanari.enheter=1;
	pyar.subval[0][7][1].lagrejargiska = {};
	pyar.subval[0][7][1].lagrejargiska.enheter=1;
	
	pyar.subval[0][7][2]={};
	pyar.subval[0][7][2].rubrik="Skriftspråk"
	pyar.subval[0][7][2].beskrivning="Felya-nai, jargisk skrift."
	
	pyar.subval[0][7][2].skriftsprak="Felya-nai, jargisk skrift."
	pyar.subval[0][7][2].felyanai = {};
	pyar.subval[0][7][2].felyanai.enheter=1;
	pyar.subval[0][7][2].jargiskskrift = {};
	pyar.subval[0][7][2].jargiskskrift.enheter=1;
	
	pyar.subval[0][7][3]={};
	pyar.subval[0][7][3].rubrik="Kvinnonamn";
	pyar.subval[0][7][3].kvinnonamnlista=["Avaliel", "Ceranidel", "Evinal", "Gialari", "Ilian", "Odesse", "Siusad", "Tielesin", "Uliadi", "Yviol"];
	pyar.subval[0][7][3].beskrivning="Avaliel, Ceranidel, Evinal, Gialari, Ilian, Odesse, Siusad, Tielesin, Uliadi, Yviol";
	
	pyar.subval[0][7][4]={};
	pyar.subval[0][7][4].rubrik="Mansnamn"
	pyar.subval[0][7][4].beskrivning="Alean, Belion, Ceranidan, Edarion, Guderian, Isanion, Lunerian, Uanir, Ysanan";
	pyar.subval[0][7][4].mansnamnlista=["Alean", "Belion", "Ceranidan", "Edarion", "Guderian", "Isanion", "Lunerian", "Uanir", "Ysanan"];

	

	
    var taup={};
	folkslagobjekt.taup=taup;
    taup.rubrik="Taup";
	taup.namn="taup";
	taup.beskrivning="Tauperna är ett folk som är spridda över världen. I Kejsardömet har de alltid haft en hög ställning sedan de välsignades av både kyrkan och kejsaren för mer än tusen år sedan. De lever vanligen i städerna och nära varandra i stora familjer. Det händer dock att vissa blir utstötta eller väljer att vandra sin egen väg. Dessa omnämns av övriga tauper som fahr’tauq, de skamfyllda. Tauperna är väl införstådda med den jargiska kulturen men blandar sig inte in i politiken. Istället agerar de ofta rådgivare, taktiker och läromästare mot betalning. Varje förmögen släkt av rang har en taupisk rådgivare i sin sold för att dra nytta av deras knivskarpa intellekt." + "\n" + "Tauperna känns igen på sin snötvita hud som aldrig blir bränd av solen. Ögonen saknar iris och det enda som man ser är två kolsvarta pupiller. Håret är antingen vitt, grått eller, i mer sällsynta fall, kolsvart. Deras blod är vitt som mjölk och olikt något annat människofolks som man känner till. De har androgyna drag och både män och kvinnor blir mycket långa. Medellängden för båda könen är 195 cm och vikten är 70 kg. "
	
	taup.subval=[[[]]];
	taup.subval[0][0][0]={};
	taup.subval[0][0][0].valdasub = [];
	taup.subval[0][0][0].vald = 0;
	taup.subval[0][0][0].styrka = {};
	taup.subval[0][0][0].styrka.varde=8;
	taup.subval[0][0][0].talighet = {};
	taup.subval[0][0][0].talighet.varde=6;
	taup.subval[0][0][0].rorlighet = {};
	taup.subval[0][0][0].rorlighet.varde=6;
	taup.subval[0][0][0].uppfattning = {};
	taup.subval[0][0][0].uppfattning.varde=8;
	taup.subval[0][0][0].vilja = {};
	taup.subval[0][0][0].vilja.varde=8;
	taup.subval[0][0][0].psyke = {};
	taup.subval[0][0][0].psyke.varde=10;
	taup.subval[0][0][0].visdom = {};
	taup.subval[0][0][0].visdom.varde=14;
	taup.subval[0][0][0].utstralning = {};
	taup.subval[0][0][0].utstralning.varde=6;
	taup.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6"]],[["Tålighet"],["1T6\+2"]],[["Rörlighet"],["1T6\+2"]],[["Uppfattning"],["2T6"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6\+2"]],[["Visdom"],["3T6\+2"]],[["Utstrålning"],["1T6\+2"]]]
	
	taup.subval[0].push([]);
	taup.subval[0][1][0]={};
	taup.subval[0][1][0].valdasub = [];
	taup.subval[0][1][0].vald = 0;
	taup.subval[0][1][0].rubrik="Goda råd";
	taup.subval[0][1][0].beskrivning="Efter att en annan person har slagit för en Social färdighet eller en Kunskapsfärdighet kan taupen ge ett gott råd för att personen ska få slå om slaget. Detta kan max göras en gång per spelmöte. Taupen behöver inte ha tärningar i färdigheten.";
	taup.subval[0][1][0].formaga="Kan ge goda råd för att låta någon slå om ett slag för en Social färdighet eller en Kunskapsfärdighet, en gång per spelmöte";

	taup.subval[0].push([]);
	taup.subval[0][2][0]={};
	taup.subval[0][2][0].valdasub = [];
	taup.subval[0][2][0].vald = 0;
	taup.subval[0][2][0].rubrik="Högre insikt";
	taup.subval[0][2][0].beskrivning="Tauper har en medfödd förmåga att förnimma sin omgivning och näst intill förutspå händelser i den direkta framtiden. Detta är dock extremt ansträngande. Efter att taupen har fått fram resultatet av sitt tärningsslag och eventuella motståndsslag kan denne sänka sitt Välmående med 1 för att lägga till ytterligare 1T6 till resultatet. Detta kan ej göras på skadeslag.";
	taup.subval[0][2][0].formaga="Efter ett tärningsslag (ej skadeslag) kan Välmående sänkas med 1 för att få lägga till 1T6 till resultatet."
	
	
	taup.subval[0].push([]);
	taup.subval[0][3][0]={};
	taup.subval[0][3][0].valdasub = [];
	taup.subval[0][3][0].vald = 0;
	taup.subval[0][3][0].rubrik="Lärd";
	taup.subval[0][3][0].beskrivning="Tauperna har djupa kunskaper inom specifika områden där de försöker bli så kompetenta som möjligt. De får en valfri Lättlärd Kunskapsfärdighet eller Mystikfärdighet.";
	taup.subval[0][3][0].antalsubval=1;
	
	
	taup.subval[0][3][1]={};
	taup.subval[0][3][1].valdasub = [];
	taup.subval[0][3][1].vald = 0;
	taup.subval[0][3][1].rubrik="Lättlärd i valfri kunskapsfärdighet";
	taup.subval[0][3][1].beskrivning="";
	taup.subval[0][3][1].lattlardkunskapsfardigheter=1;
	
	taup.subval[0][3][2]={};
	taup.subval[0][3][2].valdasub = [];
	taup.subval[0][3][2].vald = 0;
	taup.subval[0][3][2].rubrik="Lättlärd i valfri mystikfärdighet";
	taup.subval[0][3][2].beskrivning="";
	taup.subval[0][3][2].lattlardmystikfardigheter=1;
	
	
	
	taup.subval[0].push([]);
	taup.subval[0][4][0]={};
	taup.subval[0][4][0].valdasub = [];
	taup.subval[0][4][0].vald = 0;
	taup.subval[0][4][0].rubrik="Vitt blod"
	taup.subval[0][4][0].beskrivning="Tauperna har ett ovanligt gott läkekött genom sitt vita blod. Enligt legenden blev det så när de slöt en pakt med ett urväsen. Deras Läkningstakt ökar med 1."
	taup.subval[0][4][0].lakningstakt = {};
	taup.subval[0][4][0].lakningstakt.bonus=1;
	
	taup.subval[0].push([]);
	taup.subval[0][5][0]={}
	taup.subval[0][5][0].valdasub = [];
	taup.subval[0][5][0].vald = 0;;
	taup.subval[0][5][0].antalsubval=4;
	
	taup.subval[0][5][1]={};
	taup.subval[0][5][1].rubrik="Talade språk"
	taup.subval[0][5][1].taladesprak="Eirov, lägre jargiska."
	taup.subval[0][5][1].beskrivning="Eirov, lägre jargiska."	
	taup.subval[0][5][1].eirov = {};
	taup.subval[0][5][1].eirov.enheter=1;
	taup.subval[0][5][1].lagrejargiska = {};
	taup.subval[0][5][1].lagrejargiska.enheter=1;
	
	taup.subval[0][5][2]={};
	taup.subval[0][5][2].rubrik="Skriftspråk"	
	taup.subval[0][5][2].beskrivning="Eirovisk skrift och jargisk skrift."	
	taup.subval[0][5][2].skriftsprak="Eirovisk skrift och jargisk skrift."
	taup.subval[0][5][2].eiroviskskrift = {};
	taup.subval[0][5][2].eiroviskskrift.enheter=1;
	taup.subval[0][5][2].jargiskskrift = {};
	taup.subval[0][5][2].jargiskskrift.enheter=1;
	
	taup.subval[0][5][3]={};
	taup.subval[0][5][3].rubrik="Kvinnonamn";
	
	taup.subval[0][5][3].kvinnonamnlista=["Aodev", "Asis", "Atolkes", "Averkes", "Eibes", "Emelis", "Eraniv", "Iedyv", "Ivenys", "Oadinges", "Opev", "Udenys", "Yfames", "Yidaniv", "Ysmanes"];
	taup.subval[0][5][3].beskrivning="Aodev, Asis, Atolkes, Averkes, Eibes, Emelis, Eraniv, Iedyv, Ivenys, Oadinges, Opev, Udenys, Yfames, Yidaniv, Ysmanes";
	
	
	taup.subval[0][5][4]={};
	taup.subval[0][5][4].rubrik="Mansnamn";
	taup.subval[0][5][4].beskrivning="Antonius, Aram, Aumotav, Edurav, Eirov, Eqov, Esionus, Iegenos, Ositav, Ousitus, Uacas, Udenov, Yicov, Ymar, Ytemus";

	taup.subval[0][5][4].mansnamnlista=["Antonius", "Aram", "Aumotav", "Edurav", "Eirov", "Eqov", "Esionus", "Iegenos", "Ositav", "Ousitus", "Uacas", "Udenov", "Yicov", "Ymar", "Ytemus"];

	

    var zolod={};
	folkslagobjekt.zolod=zolod;
    zolod.rubrik="Zolod";
    zolod.namn="zolod";
    zolod.beskrivning="Dvärgarna från Zolodklanen bor ofta i berg eller i byar som ligger nära människornas bosättningar och till skillnad från de övriga dvärgklanerna så rör de sig ofta på jordytan. De är alla underkastade guden Vontar, ett väsen som endast dvärgar kan svära sig till, och dvärgarnas liv är fyllda med strikta riter och sedvänjor till gudens ära." + "\n" + "För dvärgar är hedern det allra högsta. Att förlora sin heder är att förnedra alla sina förfäder och sin klan. En dvärg kan gå från att sitta skrattande och dricka öl till att slita upp sin yxa och klyva en annan dvärgs huvud för att denne uttalade sig fel om Vontar eller illa om klanen." + "\n" + "Både kvinnor och män har kraftig skäggväxt och det är mycket svårt för en människa att se skillnad mellan könen. Zolod är liksom andra dvärgar ett bastant och kortväxt folk. En typisk Zolod, kvinna som man, är omkring 135 cm lång och väger cirka 50 kg."
	
	zolod.subval=[[[]]];
	zolod.subval[0][0][0]={};
	zolod.subval[0][0][0].valdasub = [];
	zolod.subval[0][0][0].vald = 0;
	zolod.subval[0][0][0].styrka = {};
	zolod.subval[0][0][0].styrka.varde=10;
	zolod.subval[0][0][0].talighet = {};
	zolod.subval[0][0][0].talighet.varde=10;
	zolod.subval[0][0][0].rorlighet = {};
	zolod.subval[0][0][0].rorlighet.varde=8;
	zolod.subval[0][0][0].uppfattning = {};
	zolod.subval[0][0][0].uppfattning.varde=8;
	zolod.subval[0][0][0].vilja = {};
	zolod.subval[0][0][0].vilja.varde=10;
	zolod.subval[0][0][0].psyke = {};
	zolod.subval[0][0][0].psyke.varde=8;
	zolod.subval[0][0][0].visdom = {};
	zolod.subval[0][0][0].visdom.varde=8;
	zolod.subval[0][0][0].utstralning = {};
	zolod.subval[0][0][0].utstralning.varde=8;
	zolod.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6\+2"]],[["Tålighet"],["2T6\+2"]],[["Rörlighet"],["2T6"]],[["Uppfattning"],["2T6"]],[["Vilja"],["2T6\+2"]],[["Psyke"],["2T6"]],[["Visdom"],["2T6"]],[["Utstrålning"],["2T6"]]]
	
	zolod.subval[0].push([]);
	zolod.subval[0][1][0]={};
	zolod.subval[0][1][0].valdasub = [];
	zolod.subval[0][1][0].vald = 0;
	zolod.subval[0][1][0].rubrik="Fast mark";
	zolod.subval[0][1][0].beskrivning="Zolods balanssinne gör att de föredrar att ha fast mark under fötterna. Få saker är så beryktade såsom den dvärgiska sjösjukan. Färdigheterna Simma och Sjömannaskap är Svårlärda. De är vana att gå långa sträckor och är Lättlärda i Marsch.";
	zolod.subval[0][1][0].simma = {};
	zolod.subval[0][1][0].simma.lattlard=-1;
	zolod.subval[0][1][0].sjomannaskap = {};
	zolod.subval[0][1][0].sjomannaskap.lattlard=-1;
	zolod.subval[0][1][0].marsch = {};
	zolod.subval[0][1][0].marsch.lattlard=1;	
	zolod.subval[0][1][0].formaga="Sjösjuk";	
	
	
	zolod.subval[0].push([]);
	zolod.subval[0][2][0]={};
	zolod.subval[0][2][0].valdasub = [];
	zolod.subval[0][2][0].vald = 0;
	zolod.subval[0][2][0].rubrik="Hantverkare";
	zolod.subval[0][2][0].beskrivning="Zolod är kända för sin hantverksskicklighet. De får 5T6 i valfritt hantverk.";
	zolod.subval[0][2][0].antalsubval=1;
	
	for (h=0; h<hantverkfardigheter.length;h++){
		//zolod.subval[1].push([]);
		zolod.subval[0][2][h+1]={};
		zolod.subval[0][2][h+1].valdasub = [];
		zolod.subval[0][2][h+1].vald = 0;
		zolod.subval[0][2][h+1].rubrik=fardighetsobjekt[hantverkfardigheter[h]].rubrik;
		zolod.subval[0][2][h+1].beskrivning="";
		
		zolod.subval[0][2][h+1][hantverkfardigheter[h]] = {};
		zolod.subval[0][2][h+1][hantverkfardigheter[h]].enheter=7;
	}
	
	
	zolod.subval[0].push([]);
	zolod.subval[0][3][0]={};
	zolod.subval[0][3][0].valdasub = [];
	zolod.subval[0][3][0].vald = 0;
	zolod.subval[0][3][0].rubrik="Kort och kraftig";
	zolod.subval[0][3][0].beskrivning="En zolod kan bära tunga rustningar utan att hindras. De modifierar sin totala Belastning med –8 för att se hur belastade de är. De är dock ett kortvuxet släkte och får därför –1T6 Förflyttning.";
	zolod.subval[0][3][0].grundbelastning = {};
	zolod.subval[0][3][0].grundbelastning.bonus=-8;
	zolod.subval[0][3][0].forflyttning = {};
	zolod.subval[0][3][0].forflyttning.bonus=-4;
	zolod.subval[0][3][0].formaga="Modifierar total belastning med –8";
	
	zolod.subval[0].push([]);
	zolod.subval[0][4][0]={};
	zolod.subval[0][4][0].valdasub = [];
	zolod.subval[0][4][0].vald = 0;
	zolod.subval[0][4][0].rubrik="Mörkersyn"
	zolod.subval[0][4][0].beskrivning="Dvärgar kan se i totalt mörker. De får kännetecknet Mörkersyn 4T6."
	zolod.subval[0][4][0].morkersyn = {};
	zolod.subval[0][4][0].morkersyn.enheter=3;
	
	zolod.subval[0].push([]);
	zolod.subval[0][5][0]={};
	zolod.subval[0][5][0].valdasub = [];
	zolod.subval[0][5][0].vald = 0;
	zolod.subval[0][5][0].rubrik="Skarpt minne"
	zolod.subval[0][5][0].beskrivning="Zolod lägger allt på minnet, personer, platser, stensorter, bergsformationer, möjliga fyndigheter och liknande. Denna information som samlas in ska skänkas till de äldste i bergets djup. Zolod får kännetecknet Skarpt minne 4T6."
	zolod.subval[0][5][0].skarptminne = {};
	zolod.subval[0][5][0].skarptminne.enheter=3;
	
	zolod.subval[0].push([]);
	zolod.subval[0][6][0]={};
	zolod.subval[0][6][0].valdasub = [];
	zolod.subval[0][6][0].vald = 0;
	zolod.subval[0][6][0].rubrik="Vontars folk"
	zolod.subval[0][6][0].beskrivning="Dvärgarna är Vontars folk och är svurna att lyda gudens strikta regler. De får expertisen Vontars levnadsregler 4T6. Förolämpas zoloddvärgens klan, familj eller tro av en annan dvärg måste denne få upprättelse eller drabbas av Nedbrytning 40 (utsatthet)."
	zolod.subval[0][6][0].vontarslevnadsregler = {};
	zolod.subval[0][6][0].vontarslevnadsregler.enheter=3;
	zolod.subval[0][6][0].ovrigt="Förolämpas zoloddvärgens klan, familj eller tro av en annan dvärg måste denne få upprättelse eller drabbas av Nedbrytning 40 (utsatthet)."
	
	zolod.subval[0].push([]);
	zolod.subval[0][7][0]={};
	zolod.subval[0][7][0].valdasub = [];
	zolod.subval[0][7][0].vald = 0;
	zolod.subval[0][7][0].antalsubval=3;
	
	zolod.subval[0][7][1]={};
	zolod.subval[0][7][1].rubrik="Talade språk";
	zolod.subval[0][7][1].beskrivning="Rukh, lägre jargiska";
	zolod.subval[0][7][1].taladesprak="Rukh, lägre jargiska";
	zolod.subval[0][7][1].rukh = {};
	zolod.subval[0][7][1].rukh.enheter=1;
	zolod.subval[0][7][1].lagrejargiska = {};
	zolod.subval[0][7][1].lagrejargiska.enheter=1;
	
	zolod.subval[0][7][2]={};
	zolod.subval[0][7][2].rubrik="Skriftspråk";
	zolod.subval[0][7][2].beskrivning="Rukh-nekh.";
	zolod.subval[0][7][2].skriftsprak="Rukh-nekh.";
	zolod.subval[0][7][2].rukhnekh = {};
	zolod.subval[0][7][2].rukhnekh.enheter=1;
	
	
	zolod.subval[0][7][3]={};
	zolod.subval[0][7][3].rubrik="Kvinno- och mansnamn";
	zolod.subval[0][7][3].beskrivning="Borh, Bzot, Codher, Dhirkh, Drekh, Fotz, Ghesr, Ghidh, Jem, Jekh, Kammer, Khon, Liz, Murh, Narkh, Nenk, Parzim, Pazer, Rikh, Rhurn, Shuz, Spez, Tirzis, Vikaz, Zihr";
	zolod.subval[0][7][3].namnlista=["Borh", "Bzot", "Codher", "Dhirkh", "Drekh", "Fotz", "Ghesr", "Ghidh", "Jem", "Jekh", "Kammer", "Khon", "Liz", "Murh", "Narkh", "Nenk", "Parzim", "Pazer", "Rikh", "Rhurn", "Shuz", "Spez", "Tirzis", "Vikaz", "Zihr"];
	
	
	var cermirier={};
	folkslagobjekt.cermirier=cermirier;
    cermirier.rubrik="Cermirier";
	cermirier.namn="cermirier";
	cermirier.beskrivning="Cermiras mänskliga majoritetsbefolkning är mycket nära besläktad med asharierna, men undernäring och kyla har genom åren gjort dem något kortare och segare. De är kända för att vara arbetsamma och härdade och alltid på sin vakt mot faror som lurar." + "\n" + "Ofta anses de vara tystlåtna, hemlighetsfulla och svåra att komma in på livet, men väldigt gästvänliga när man väl gör det. Cermirier är bleka i hyn med allehanda hår- och ögonfärger, men somliga har nästan svartblått hår, vilket påstås vara ett tecken på skugglandsblod långt tillbaka i släkten. Männen är cirka 165 cm långa och kvinnorna runt 155 cm."
	
	cermirier.subval=[[[]]];
	cermirier.subval[0][0][0]={};
	cermirier.subval[0][0][0].valdasub = [];
	cermirier.subval[0][0][0].vald = 0;
	cermirier.subval[0][0][0].styrka = {};
	cermirier.subval[0][0][0].styrka.varde=8;
	cermirier.subval[0][0][0].talighet = {};
	cermirier.subval[0][0][0].talighet.varde=10;
	cermirier.subval[0][0][0].rorlighet = {};
	cermirier.subval[0][0][0].rorlighet.varde=8;
	cermirier.subval[0][0][0].uppfattning = {};
	cermirier.subval[0][0][0].uppfattning.varde=9;
	cermirier.subval[0][0][0].vilja = {};
	cermirier.subval[0][0][0].vilja.varde=8;
	cermirier.subval[0][0][0].psyke = {};
	cermirier.subval[0][0][0].psyke.varde=8;
	cermirier.subval[0][0][0].visdom = {};
	cermirier.subval[0][0][0].visdom.varde=8;
	cermirier.subval[0][0][0].utstralning = {};
	cermirier.subval[0][0][0].utstralning.varde=8;
	cermirier.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6"]],[["Tålighet"],["2T6\+2"]],[["Rörlighet"],["2T6"]],[["Uppfattning"],["2T6\+1"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6"]],[["Visdom"],["2T6"]],[["Utstrålning"],["2T6"]]]
	
	cermirier.subval[0].push([]);
	cermirier.subval[0][1][0]={};
	cermirier.subval[0][1][0].valdasub = [];
	cermirier.subval[0][1][0].vald = 0;
	cermirier.subval[0][1][0].rubrik="Gränslandsbor"
	cermirier.subval[0][1][0].beskrivning="Många cermirier har haft någon upplevelse av fasorna som ruvar i Mithera. De får 1 Avtrubbningskryss för övernaturligt."
	cermirier.subval[0][1][0].avtrubbningovernaturligt=1;
	
	cermirier.subval[0].push([]);
	cermirier.subval[0][2][0]={};
	cermirier.subval[0][2][0].valdasub = [];
	cermirier.subval[0][2][0].vald = 0;
	cermirier.subval[0][2][0].rubrik="Händiga"
	cermirier.subval[0][2][0].beskrivning="Cermira är känt för sina mäktiga hantverksgillen, och även bland nybyggare och bönder är hantverkskunskaper ofta oumbärliga för överlevnaden. Cermirier får 1 poäng Hantverk."
	cermirier.subval[0][2][0].hantverkpoang=1;
	
	cermirier.subval[0].push([]);
	cermirier.subval[0][3][0]={};
	cermirier.subval[0][3][0].valdasub = [];
	cermirier.subval[0][3][0].vald = 0;
	cermirier.subval[0][3][0].rubrik="Nybyggare"
	cermirier.subval[0][3][0].beskrivning="Vedermödor och vildmarksfärder är en naturlig del av livet för cermirier. De får 1 extra slag på tabellen för Färder \& äventyr."
	cermirier.subval[0][3][0].farderaventyr=1;
	
	cermirier.subval[0].push([]);
	cermirier.subval[0][4][0]={};
	cermirier.subval[0][4][0].valdasub = [];
	cermirier.subval[0][4][0].vald = 0;
	cermirier.subval[0][4][0].rubrik="Seglivade";
	cermirier.subval[0][4][0].beskrivning="Cermirier är naturligt begåvade med en ovilja att ge vika; kanske räds de Daaks dom, kanske är de bara härdade av snöstormarna. De får +1 i Livskraft.";
	cermirier.subval[0][4][0].livskraft = {};
	cermirier.subval[0][4][0].livskraft.bonus=1;	
	
	cermirier.subval[0].push([]);
	cermirier.subval[0][5][0]={};
	cermirier.subval[0][5][0].valdasub = [];
	cermirier.subval[0][5][0].vald = 0;
	cermirier.subval[0][5][0].antalsubval=4;
	
	cermirier.subval[0][5][1]={};
	cermirier.subval[0][5][1].valdasub = [];
	cermirier.subval[0][5][1].vald = 0;
	cermirier.subval[0][5][1].rubrik="Talade språk"
	cermirier.subval[0][5][1].beskrivning="Ashariska, lägre jargiska"
	
	cermirier.subval[0][5][1].taladesprak="Ashariska, lägre jargiska"
	cermirier.subval[0][5][1].ashariska = {};
	cermirier.subval[0][5][1].ashariska.enheter=1;
	cermirier.subval[0][5][1].lagrejargiska = {};
	cermirier.subval[0][5][1].lagrejargiska.enheter=1;
	cermirier.subval[0][5][1].valdasub = [];
	cermirier.subval[0][5][1].vald = 0;
	
	cermirier.subval[0][5][2]={};
	cermirier.subval[0][5][2].valdasub = [];
	cermirier.subval[0][5][2].vald = 0;
	cermirier.subval[0][5][2].rubrik="Skriftspråk."
	cermirier.subval[0][5][2].beskrivning="Inga."
	cermirier.subval[0][5][2].skriftsprak="Inga."
	
	cermirier.subval[0][5][3]={};
	cermirier.subval[0][5][3].valdasub = [];
	cermirier.subval[0][5][3].vald = 0;
	cermirier.subval[0][5][3].rubrik="Kvinnonamn"
	cermirier.subval[0][5][3].kvinnonamnlista=["Atla", "Borgun", "Brisa", "Ditte", "Eyr", "Ernidis", "Galda", "Hervor", "Holga", "Imbor", "Jorun", "Rana", "Sestrid", "Snöfrid", "Torvi", "Ulva", "Vala", "Valfrid", "Värun", "Yrsa", "Öllegård"];
	cermirier.subval[0][5][3].beskrivning="Atla, Borgun, Brisa, Ditte, Eyr, Ernidis, Galda, Hervor, Holga, Imbor, Jorun, Rana, Sestrid, Snöfrid, Torvi, Ulva, Vala, Valfrid, Värun, Yrsa, Öllegård.";
	
	cermirier.subval[0][5][4]={};
	cermirier.subval[0][5][4].valdasub = [];
	cermirier.subval[0][5][4].vald = 0;
	cermirier.subval[0][5][4].rubrik="Mansnamn"
	cermirier.subval[0][5][4].beskrivning="Adalrik, Bodvar, Dryggve, Enok, Estulv, Frenne, Gardar, Hammen, Ingjald, Jostein, Kabbe, Lothar, Otis, Roel, Sigmar, Säbjörn, Tingfast, Valdemar, Vidkun, Åsgeir, Ödmar.";
	cermirier.subval[0][5][4].mansnamnlista=["Adalrik", "Bodvar", "Dryggve", "Enok", "Estulv", "Frenne", "Gardar", "Hammen", "Ingjald", "Jostein", "Kabbe", "Lothar", "Otis", "Roel", "Sigmar", "Säbjörn", "Tingfast", "Valdemar", "Vidkun", "Åsgeir", "Ödmar"];
	
	
var utmarkare={};
	folkslagobjekt.utmarkare=utmarkare;
    utmarkare.rubrik="Utmarkare";
	utmarkare.namn="utmarkare";
	utmarkare.beskrivning="Utmarks befolkning lever till stor del på jakt, boskapsskötsel och mindre odlingar. Det är ett hårdfört och bistert folk som glömt sin nobla bakgrund även om de alltjämt minns de gamla familjenamnen. Familjerna har övergått till att bli klaner och även om det alltjämt finns lojalitet och samarbete inom dem så är det mer en fråga om att varje by har sin egen agenda och sitt eget styre. Utmarks folk, som kallas för utmarkarna, håller varken heder eller lojalitet särskilt högt. Om man inte är försiktig och litar på vem som helst så får man skylla sig själv är den generella åsikten." + "\n" + "En typisk utmarkisk kvinna är omkring 165 cm lång och väger cirka 60 kg. En typisk utmarkisk man är omkring 175 cm lång och väger cirka 70 kg."
	
	utmarkare.subval=[[[]]];
	utmarkare.subval[0][0][0]={};
	utmarkare.subval[0][0][0].valdasub = [];
	utmarkare.subval[0][0][0].vald = 0;
	utmarkare.subval[0][0][0].styrka = {};
	utmarkare.subval[0][0][0].styrka.varde=9;
	utmarkare.subval[0][0][0].talighet = {};
	utmarkare.subval[0][0][0].talighet.varde=9;
	utmarkare.subval[0][0][0].rorlighet = {};
	utmarkare.subval[0][0][0].rorlighet.varde=8;
	utmarkare.subval[0][0][0].uppfattning = {};
	utmarkare.subval[0][0][0].uppfattning.varde=8;
	utmarkare.subval[0][0][0].vilja = {};
	utmarkare.subval[0][0][0].vilja.varde=9;
	utmarkare.subval[0][0][0].psyke = {};
	utmarkare.subval[0][0][0].psyke.varde=8;
	utmarkare.subval[0][0][0].visdom = {};
	utmarkare.subval[0][0][0].visdom.varde=7;
	utmarkare.subval[0][0][0].utstralning = {};
	utmarkare.subval[0][0][0].utstralning.varde=8;
	utmarkare.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6\+1"]],[["Tålighet"],["2T6\+1"]],[["Rörlighet"],["2T6"]],[["Uppfattning"],["2T6"]],[["Vilja"],["2T6\+1"]],[["Psyke"],["2T6"]],[["Visdom"],["1T6\+3"]],[["Utstrålning"],["2T6"]]]
	
	utmarkare.subval[0].push([]);
	utmarkare.subval[0][1][0]={};
	utmarkare.subval[0][1][0].valdasub = [];
	utmarkare.subval[0][1][0].vald = 0;
	utmarkare.subval[0][1][0].rubrik="Att värna sin rätt"
	utmarkare.subval[0][1][0].beskrivning="Det enda man äger är det man kan försvara. Utmarkare får ett slag på tabellen Strider \& drabbningar och 2 enheter till Vildmarksfärdigheter."
	utmarkare.subval[0][1][0].striderdrabbningar=1;
	utmarkare.subval[0][1][0].vildmarksfardigheterenheter=2;
	
	utmarkare.subval[0].push([]);
	utmarkare.subval[0][2][0]={};
	utmarkare.subval[0][2][0].valdasub = [];
	utmarkare.subval[0][2][0].vald = 0;
	utmarkare.subval[0][2][0].rubrik="Hårt liv"
	utmarkare.subval[0][2][0].beskrivning="Den utsatta tillvaron i Utmark gör dess invånare avtrubbade inför världens fasor och prövningar. Utmarkare får 1 Avtrubbningskryss vardera för utsatthet och våld."
	utmarkare.subval[0][2][0].avtrubbningutsatthet=1;
	utmarkare.subval[0][2][0].avtrubbningvald=1;
	
	utmarkare.subval[0].push([]);
	utmarkare.subval[0][3][0]={};
	utmarkare.subval[0][3][0].valdasub = [];
	utmarkare.subval[0][3][0].vald = 0;
	utmarkare.subval[0][3][0].rubrik="Jordens magra skörd"
	utmarkare.subval[0][3][0].beskrivning="En utmarkare måste kunna livnära sig i ett krävande land. I Utmaningar för att samla föda eller färdas genom vildmarken får utmarkare alltid +1 Kontroll på slutresultatet."
	utmarkare.subval[0][3][0].formaga="\+1 Kontroll i Utmaningar för att samla föda eller färdas i vildmark";
	
	utmarkare.subval[0].push([]);
	utmarkare.subval[0][4][0]={};
	utmarkare.subval[0][4][0].valdasub = [];
	utmarkare.subval[0][4][0].vald = 0;
	utmarkare.subval[0][4][0].rubrik="Mot alla odds";
	utmarkare.subval[0][4][0].beskrivning="Utmark är oförlåtande och de som lever där tål mer än de flesta. Utmarkare får +2 i Livskraft.";
	utmarkare.subval[0][4][0].livskraft = {};
	utmarkare.subval[0][4][0].livskraft.bonus=2;	
	
	utmarkare.subval[0].push([]);
	utmarkare.subval[0][5][0]={};
	utmarkare.subval[0][5][0].valdasub = [];
	utmarkare.subval[0][5][0].vald = 0;
	utmarkare.subval[0][5][0].antalsubval=4;
	
	utmarkare.subval[0][5][1]={};
	utmarkare.subval[0][5][1].valdasub = [];
	utmarkare.subval[0][5][1].vald = 0;
	utmarkare.subval[0][5][1].rubrik="Talade språk"
	utmarkare.subval[0][5][1].beskrivning="Drunokiska med utmarkardialekt."
	
	utmarkare.subval[0][5][1].taladesprak="Drunokiska med utmarkardialekt."
	utmarkare.subval[0][5][1].drunokiska = {};
	utmarkare.subval[0][5][1].drunokiska.enheter=1;
	utmarkare.subval[0][5][1].valdasub = [];
	utmarkare.subval[0][5][1].vald = 0;
	
	utmarkare.subval[0][5][2]={};
	utmarkare.subval[0][5][2].valdasub = [];
	utmarkare.subval[0][5][2].vald = 0;
	utmarkare.subval[0][5][2].rubrik="Skriftspråk."
	utmarkare.subval[0][5][2].beskrivning="Inga."
	utmarkare.subval[0][5][2].skriftsprak="Inga."
	
	utmarkare.subval[0][5][3]={};
	utmarkare.subval[0][5][3].valdasub = [];
	utmarkare.subval[0][5][3].vald = 0;
	utmarkare.subval[0][5][3].rubrik="Kvinnonamn"
	utmarkare.subval[0][5][3].kvinnonamnlista=["Anna", "Desira", "Drusa", "Dolis", "Enis", "Efa", "Gynes", "Gun", "Ineva", "Ivlis", "Lenae", "Mianni", "Nina", "Patera", "Po", "Sabel", "Sala", "Selima", "Sara", "Vanis", "Villeni", "Ygea"];
	utmarkare.subval[0][5][3].beskrivning="Anna, Desira, Drusa, Dolis, Enis, Efa, Gynes, Gun, Ineva, Ivlis, Lenae, Mianni, Nina, Patera, Po, Sabel, Sala, Selima, Sara, Vanis, Villeni, Ygea.";
	
	utmarkare.subval[0][5][4]={};
	utmarkare.subval[0][5][4].valdasub = [];
	utmarkare.subval[0][5][4].vald = 0;
	utmarkare.subval[0][5][4].rubrik="Mansnamn"
	utmarkare.subval[0][5][4].beskrivning="Akala, Anin, Aros, Chelem, Dor, Gahallan, Garon, Halvam, Igos, Mael, Menon, Mikal, Naro, Palan, Pavane, Rehelm, Stagus, Tolrune, Valentin, Vite.";
	utmarkare.subval[0][5][4].mansnamnlista=["Akala", "Anin", "Aros", "Chelem", "Dor", "Gahallan", "Garon", "Halvam", "Igos", "Mael", "Menon", "Mikal", "Naro", "Palan", "Pavane", "Rehelm", "Stagus", "Tolrune", "Valentin", "Vite"];
	
	var damarier={};
	folkslagobjekt.damarier=damarier;
    damarier.rubrik="Damarier";
	damarier.namn="damarier";
	damarier.beskrivning="De flesta damarier är av vanariskt ursprung och härstammar från de folk som utvandrade från vad som numera är det jargiska kejsardömet under århundradena efter den stora reningen, även om det dessutom finns cirefalier, fedaker och andra folkgrupper bland deras förfäder. Deras hudfärg varierar mellan ljus och olivfärgad och de allra flesta har svart eller mörkbrunt hår, även om andra färger förekommer. Bruna och mörkblå ögon dominerar, men anmärkningsvärt många har gröna ögon, vilket antingen ses som ett tecken på svartkonst eller ett skönhetsdrag beroende på vem du frågar. Deras kroppsbyggnad är normalt ganska kraftig, men oftast något kortare än den genomsnittlige vanaren." + "\n" + "En damarisk man är omkring 170 cm lång och väger cirka 65 kg. En damarisk kvinna är omkring 160 cm lång och väger cirka 55 kg.";

	
	damarier.subval=[[[]]];
	damarier.subval[0][0][0]={};
	damarier.subval[0][0][0].valdasub = [];
	damarier.subval[0][0][0].vald = 0;
	
	damarier.subval[0][0][0].styrka = {};
	damarier.subval[0][0][0].styrka.varde=9;
	damarier.subval[0][0][0].talighet = {};
	damarier.subval[0][0][0].talighet.varde=9;
	damarier.subval[0][0][0].rorlighet = {};
	damarier.subval[0][0][0].rorlighet.varde=8;
	damarier.subval[0][0][0].uppfattning = {};
	damarier.subval[0][0][0].uppfattning.varde=8;
	damarier.subval[0][0][0].vilja = {};
	damarier.subval[0][0][0].vilja.varde=8;
	damarier.subval[0][0][0].psyke = {};
	damarier.subval[0][0][0].psyke.varde=8;
	damarier.subval[0][0][0].visdom = {};
	damarier.subval[0][0][0].visdom.varde=8;
	damarier.subval[0][0][0].utstralning = {};
	damarier.subval[0][0][0].utstralning.varde=8;
	damarier.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6\+1"]],[["Tålighet"],["2T6\+1"]],[["Rörlighet"],["2T6"]],[["Uppfattning"],["2T6"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6"]],[["Visdom"],["1T6"]],[["Utstrålning"],["2T6"]]]
	
	
	damarier.subval[0].push([]);
	damarier.subval[0][1][0]={};
	damarier.subval[0][1][0].rubrik="Stoiker";
	damarier.subval[0][1][0].beskrivning="Så gott som alla damarier får sedan barnsben lära sig vikten av att uthärda och stå ut, oavsett vilka prövningar livet medför.";
	damarier.subval[0][1][0].beskrivninghak="\+1 Livskraft.";
	damarier.subval[0][1][0].livskraft={};
	damarier.subval[0][1][0].livskraft.bonus=1;
	
	damarier.subval[0].push([]);
	damarier.subval[0][2][0]={};
	damarier.subval[0][2][0].rubrik="Luttrad";
	damarier.subval[0][2][0].beskrivning="Årtusenden av umbäranden och förtryck har gjort de flesta damarier envisa och tålmodiga.";
	damarier.subval[0][2][0].beskrivninghak="1 Avtrubbningskryss i valfri kategori.";
	damarier.subval[0][2][0].avtrubbningvalfri=1;
	

	
	damarier.subval.push([[]]);
	damarier.subval[1][0][0]={};
	damarier.subval[1][0][0].valdasub = [];
	damarier.subval[1][0][0].vald = 0;
	damarier.subval[1][0][0].rubrik="Fursten- och hertigdöme";
	damarier.subval[1][0][0].beskrivning="Skillnaderna är stora mellan olika delar av riket, välj därför ett ursprungsområde.";
	damarier.subval[1][0][0].antalsubval=1;
	
	damarier.subval[1].push([]);
	damarier.subval[1][1][0]={};
	damarier.subval[1][1][0].valdasub = [];
	damarier.subval[1][1][0].vald = 0;
	damarier.subval[1][1][0].rubrik="Targatia";
	damarier.subval[1][1][0].beskrivning="Targatia är området där huvudstaden Targus är belägen och där flera olika folkslag och religioner lever sida vid sida i ett tillstånd som växlar mellan fredlig samexistens och uttalat krig. Targatierna ser sig själva som de sanna damarierna och arvtagare till Damas den svarte, något som även den fattigaste livegne bonden känner enorm stolthet över. Stora delar av Targatia består av vindpinade heder och höga berg, och de flesta targatier för en hård tillvaro plågade både av klimatet och av despotiska adelsmän och storfurstar.";
	damarier.subval[1][1][0].ovrigt="Ursprung: Targatia"
	damarier.subval[1][1][0].antalsubval=4;
	
	damarier.subval[1][1].push();
	damarier.subval[1][1][1]={};
	damarier.subval[1][1][1].rubrik="Talade språk";
	damarier.subval[1][1][1].beskrivning="Targatiska, lägre jargiska (sydjargiska).";
	damarier.subval[1][1][1].targatiska = {};
	damarier.subval[1][1][1].targatiska.enheter=1;
	damarier.subval[1][1][1].lagrejargiska = {};
	damarier.subval[1][1][1].lagrejargiska.enheter=1;
	
	damarier.subval[1][1].push();
	damarier.subval[1][1][2]={};
	damarier.subval[1][1][2].rubrik="Skriftspråk";
	damarier.subval[1][1][2].beskrivning="Inga.";
	
	damarier.subval[1][1].push();
	damarier.subval[1][1][3]={};
	damarier.subval[1][1][3].rubrik="Hårdhudade";
	damarier.subval[1][1][3].beskrivning="Årtusenden av savengor och strider mot martellianer, tiraker, stråtrövare och monster har satt sina spår i den targatiska kulturen.";
	damarier.subval[1][1][3].beskrivninghak="1 extra slag på händelsetabellen Strider \& drabbningar.";
	damarier.subval[1][1][3].striderdrabbningar=1;
	
	damarier.subval[1][1].push();
	damarier.subval[1][1][4]={};
	damarier.subval[1][1][4].rubrik="Stolt";
	damarier.subval[1][1][4].beskrivning="Även den fattigaste targatiern ser sig själv som en representant för de sanna damarierna och en ättling till Damas den svartes förkämpar.";
	damarier.subval[1][1][4].beskrivninghak="\+1 Intryck";
	damarier.subval[1][1][4].intryck = {};
	damarier.subval[1][1][4].intryck.bonus=1;
	
	damarier.subval[1].push([]);
	damarier.subval[1][2][0]={};
	damarier.subval[1][2][0].valdasub = [];
	damarier.subval[1][2][0].vald = 0;
	damarier.subval[1][2][0].rubrik="Deogotha";
	damarier.subval[1][2][0].beskrivning="Deogotha ligger söder om Järvskogen och har en lång historia av krig mot alver och andra fasor från skogarna. Deogoterna har sedan tidernas gryning varit nära allierade med dvärgarna från Khazim-renk-Ghor och har haft några av Damariens främsta hantverkare, arkitekter och smeder. För hundra år sedan förstördes Deogothas största stad, Helm, i en ohelig katastrof och furstendömet har ännu inte återhämtat sig. Deogoterna är självständiga och har ett rykte om sig som krigiska och lättstötta. Många av dem lever dessutom nära skogarna och bergens vildmark och har blivit skickliga överlevare i detta obarmhärtiga land.";
	damarier.subval[1][2][0].ovrigt="Ursprung: Deogotha"
	damarier.subval[1][2][0].antalsubval=4;
	
	damarier.subval[1][2].push();
	damarier.subval[1][2][1]={};
	damarier.subval[1][2][1].rubrik="Talade språk";
	damarier.subval[1][2][1].beskrivning="Targatiska, lägre jargiska (sydjargiska).";
	damarier.subval[1][2][1].targatiska = {};
	damarier.subval[1][2][1].targatiska.enheter=1;
	damarier.subval[1][2][1].lagrejargiska = {};
	damarier.subval[1][2][1].lagrejargiska.enheter=1;
	
	damarier.subval[1][2].push();
	damarier.subval[1][2][2]={};
	damarier.subval[1][2][2].rubrik="Skriftspråk";
	damarier.subval[1][2][2].beskrivning="Inga.";
	
	damarier.subval[1][2].push();
	damarier.subval[1][2][3]={};
	damarier.subval[1][2][3].rubrik="Skrattar åt döden";
	damarier.subval[1][2][3].beskrivning="Deogoterna har rykte om sig att alltid bemöta tragedier och katastrofer med kärv galghumor. ";
	damarier.subval[1][2][3].beskrivninghak="1 Avtrubbningskryss för utsatthet.";
	damarier.subval[1][2][3].avtrubbningutsatthet=1;
	
	damarier.subval[1][2].push();
	damarier.subval[1][2][4]={};
	damarier.subval[1][2][4].rubrik="Sin egen lyckas smed";
	damarier.subval[1][2][4].beskrivning="I ett land där så mycket gått förlorat tvingas allt fler deogoter att ta ödet i sina egna händer och ge sig ut i världen för att finna lyckan.";
	damarier.subval[1][2][4].beskrivninghak="1 extra slag på händelsetabellen Färder \& äventyr.";
	damarier.subval[1][2][4].farderaventyr=1;
	
	damarier.subval[1].push([]);
	damarier.subval[1][3][0]={};
	damarier.subval[1][3][0].valdasub = [];
	damarier.subval[1][3][0].vald = 0;
	damarier.subval[1][3][0].rubrik="Hammarnäset";
	damarier.subval[1][3][0].beskrivning="Furstendömet Hammarnäset är ett rikt område med en lång tradition av sjöfart och krigare. Furstarna av Hammarnäs var alltid de största konkurrenterna med targatierna om storfurstendömets krona. Folket kallas martellianer (efter områdets jargiska namn Istmus Martelle) och sätter traditionellt disciplin, lojalitet och heder högt. Av alla damarier har martellianerna de starkaste banden till Kejsardömet i norr och deras språk är det som ligger närmast det jargiska. Hammarnäs är Damariens största och äldsta stad och det är i denna del av landet stödet för den nye storfursten är som starkast.";
	damarier.subval[1][3][0].ovrigt="Ursprung: Hammarnäset"
	damarier.subval[1][3][0].antalsubval=4;
	
	damarier.subval[1][3].push();
	damarier.subval[1][3][1]={};
	damarier.subval[1][3][1].rubrik="Talade språk";
	damarier.subval[1][3][1].beskrivning="Targatiska, lägre jargiska (sydjargiska).";
	damarier.subval[1][3][1].targatiska = {};
	damarier.subval[1][3][1].targatiska.enheter=1;
	damarier.subval[1][3][1].lagrejargiska = {};
	damarier.subval[1][3][1].lagrejargiska.enheter=1;
	
	damarier.subval[1][3].push();
	damarier.subval[1][3][2]={};
	damarier.subval[1][3][2].rubrik="Skriftspråk";
	damarier.subval[1][3][2].beskrivning="Inga.";
	
	damarier.subval[1][3].push();
	damarier.subval[1][3][3]={};
	damarier.subval[1][3][3].rubrik="God ton";
	damarier.subval[1][3][3].beskrivning="Hammarnäset är ett strikt hierarkiskt samhälle där en förmåga att föra sig är vitalt för den som önskar vinna omgivningens respekt. ";
	damarier.subval[1][3][3].beskrivninghak="2 enheter på Sociala färdigheter.";
	damarier.subval[1][3][3].socialafardigheterenheter=2;
	
	damarier.subval[1][3].push();
	damarier.subval[1][3][4]={};
	damarier.subval[1][3][4].rubrik="Militäriska";
	damarier.subval[1][3][4].beskrivning="Sedan urminnes tider har Hammarnäs varit en mötesplats för legoknektar och krigare. Idag är staden och stora delar av furstendömet helt kontrollerade av storfurstens flotta och armé, vars närvaro genomsyrar hela samhället.";
	damarier.subval[1][3][4].beskrivninghak="1 extra slag på händelsetabellen Strider \& drabbningar.";
	damarier.subval[1][3][4].striderdrabbningar=1;
	
	damarier.subval[1].push([]);
	damarier.subval[1][4][0]={};
	damarier.subval[1][4][0].valdasub = [];
	damarier.subval[1][4][0].vald = 0;
	damarier.subval[1][4][0].rubrik="Vallanborien";
	damarier.subval[1][4][0].beskrivning="Bortom Järvskogen ligger det land som utgör Vallanborien, de nordliga dalarnas land. Här har folket länge levt isolerade från omvärlden och har sedan tidernas begynnelse haft en särpräglad kultur och språk. Vallanborierna har länge styrts av ätten van Culnar och deras allierade. Såväl adeln som allmogen ägnar sig åt mystiska riter och trosuppfattningar som till och med de andra damariska hedningarna finner märkliga och skrämmande. I grevskapet Merdakh är en stor del av befolkningen fedaker.";
	damarier.subval[1][4][0].ovrigt="Ursprung: Vallanborien";
	damarier.subval[1][4][0].antalsubval=4;
	
	damarier.subval[1][4].push();
	damarier.subval[1][4][1]={};
	damarier.subval[1][4][1].rubrik="Talade språk";
	damarier.subval[1][4][1].beskrivning="Vallanboriska, lägre jargiska (sydjargiska).";
	damarier.subval[1][4][1].vallanboriska = {};
	damarier.subval[1][4][1].vallanboriska.enheter=1;
	damarier.subval[1][4][1].lagrejargiska = {};
	damarier.subval[1][4][1].lagrejargiska.enheter=1;
	
	damarier.subval[1][4].push();
	damarier.subval[1][4][2]={};
	damarier.subval[1][4][2].rubrik="Skriftspråk";
	damarier.subval[1][4][2].beskrivning="Inga.";
	
	damarier.subval[1][4].push();
	damarier.subval[1][4][3]={};
	damarier.subval[1][4][3].rubrik="Gränslandsfödda";
	damarier.subval[1][4][3].beskrivning="Det sägs att både Skugglandet och dödsriket gränsar till Vallanborien.";
	damarier.subval[1][4][3].beskrivninghak="1 Avtrubbningskryss för övernaturligt.";
	damarier.subval[1][4][3].avtrubbningovernaturligt=2;
	
	damarier.subval[1][4].push();
	damarier.subval[1][4][4]={};
	damarier.subval[1][4][4].rubrik="Skrock";
	damarier.subval[1][4][4].beskrivning="Vallanborierna betraktas ofta som vidskepliga och skrockfulla, även av andra damarier, men själva ser de sig som försiktiga och kunniga när det kommer till de många faror som lurar i mörkret utanför.";
	damarier.subval[1][4][4].beskrivninghak="1 extra slag på händelsetabellen Kunskap \& mysterier.";
	damarier.subval[1][4][4].kunskapmysterier=1;

	damarier.subval[1].push([]);
	damarier.subval[1][5][0]={};
	damarier.subval[1][5][0].valdasub = [];
	damarier.subval[1][5][0].vald = 0;
	damarier.subval[1][5][0].rubrik="Krylomar";
	damarier.subval[1][5][0].beskrivning="Hertigdömet Krylomar ligger i Krylons floddal vid gränsen mot Västmark. Kryloniterna är ett enkelt folk som ofta förtryckts av antingen de targatiska eller de martellianska furstarna och vars bördiga land vid flertalet tillfällen varit en krigsskådeplats mellan damariska furstar, storfurstendömet och Västmark. De allra flesta kryloniter är fattiga, livegna bönder som finner enkla nöjen i religionen och festligheter.";
	damarier.subval[1][5][0].ovrigt="Ursprung: Krylomar";
	damarier.subval[1][5][0].antalsubval=4;
	
	damarier.subval[1][5].push();
	damarier.subval[1][5][1]={};
	damarier.subval[1][5][1].rubrik="Talade språk";
	damarier.subval[1][5][1].beskrivning="Targatiska, lägre jargiska (sydjargiska).";
	damarier.subval[1][5][1].targatiska = {};
	damarier.subval[1][5][1].targatiska.enheter=1;
	damarier.subval[1][5][1].lagrejargiska = {};
	damarier.subval[1][5][1].lagrejargiska.enheter=1;
	
	damarier.subval[1][5].push();
	damarier.subval[1][5][2]={};
	damarier.subval[1][5][2].rubrik="Skriftspråk";
	damarier.subval[1][5][2].beskrivning="Inga.";
	
	damarier.subval[1][5].push();
	damarier.subval[1][5][3]={};
	damarier.subval[1][5][3].rubrik="Flitiga";
	damarier.subval[1][5][3].beskrivning="Kryloniterna är ett hårt arbetande folk, vare sig de vill eller ej. ";
	damarier.subval[1][5][3].beskrivninghak="1 poäng Hantverk.";
	damarier.subval[1][5][3].hantverkpoang=1;
	
	damarier.subval[1][5].push();
	damarier.subval[1][5][4]={};
	damarier.subval[1][5][4].rubrik="Äventyrslusta";
	damarier.subval[1][5][4].beskrivning="De kryloniter som vågat ta språnget bort från hemmets lugna härd ut i den skrämmande världen utanför får ofta uppleva både det ena och det andra.";
	damarier.subval[1][5][4].beskrivninghak="1 extra slag på händelsetabellen Färder \& äventyr.";
	damarier.subval[1][5][4].farderaventyr=1;
	
	damarier.subval[1].push([]);
	damarier.subval[1][6][0]={};
	damarier.subval[1][6][0].valdasub = [];
	damarier.subval[1][6][0].vald = 0;
	damarier.subval[1][6][0].rubrik="Porfyrien";
	damarier.subval[1][6][0].beskrivning="Porfyrien är ett hertigdöme vars folk alltid varit jordbrukare och handelsmän och deras rikedom har ofta gjort att de kunnat undgå mycket av det förtryck som plågat andra damarier. Landets överklass är till stor del köpmän snarare än adel och av alla Damariens provinser är porfyrierna de mest öppna och toleranta, även om maktstriderna mellan de härskande ätterna kan vara minst lika dödliga som i andra delar av landet. Landets kultur har starkt influerats av både Jargien och Melorion.";
	damarier.subval[1][6][0].ovrigt="Ursprung: Porfyrien";
	damarier.subval[1][6][0].antalsubval=4;
	
	damarier.subval[1][6].push();
	damarier.subval[1][6][1]={};
	damarier.subval[1][6][1].rubrik="Talade språk";
	damarier.subval[1][6][1].beskrivning="Targatiska, lägre jargiska (sydjargiska).";
	damarier.subval[1][6][1].targatiska = {};
	damarier.subval[1][6][1].targatiska.enheter=1;
	damarier.subval[1][6][1].lagrejargiska = {};
	damarier.subval[1][6][1].lagrejargiska.enheter=1;
	
	damarier.subval[1][6].push();
	damarier.subval[1][6][2]={};
	damarier.subval[1][6][2].rubrik="Skriftspråk";
	damarier.subval[1][6][2].beskrivning="Inga.";
	
	damarier.subval[1][6].push();
	damarier.subval[1][6][3]={};
	damarier.subval[1][6][3].rubrik="Språkkunniga";
	damarier.subval[1][6][3].beskrivning="Porfyrien är den del av Damarien som är mest öppen för andra länder och kulturer, och här kan man möta både pyaralver, cirefalier, jargier, sabrier och mûhadiner. ";
	damarier.subval[1][6][3].beskrivninghak="2 Språkenheter.";
	damarier.subval[1][6][3].sprakenheter=2;
	
	damarier.subval[1][6].push();
	damarier.subval[1][6][4]={};
	damarier.subval[1][6][4].rubrik="Intrigerande";
	damarier.subval[1][6][4].beskrivning="De kryloniter som vågat ta språnget bort från hemmets lugna härd ut i den skrämmande världen utanför får ofta uppleva både det ena och det andra.";
	damarier.subval[1][6][4].beskrivninghak="1 extra slag på händelsetabellen Intriger \& illgärningar.";
	damarier.subval[1][6][4].intrigerillgarningar=1;
	
	 

	
	
	
	damarier.subval.push([[]]);
	damarier.subval[2][0][0]={};
	damarier.subval[2][0][0].valdasub = [];
	damarier.subval[2][0][0].vald = 0;
	damarier.subval[2][0][0].rubrik="Religion";
	damarier.subval[2][0][0].beskrivning="Skillnaderna är stora mellan de olika religionerna. Välj en av följande:";
	damarier.subval[2][0][0].antalsubval=1;
	
	
	damarier.subval[2].push([]);
	damarier.subval[2][1][0]={};
	damarier.subval[2][1][0].valdasub = [];
	damarier.subval[2][1][0].vald = 0;
	damarier.subval[2][1][0].rubrik="Daakkyrkan";
	damarier.subval[2][1][0].beskrivning="Daakkyrkan är Damariens statsreligion, även om en majoritet av folket inte följer dess lära. Den är starkast bland adelsmännen, i städerna och längs kusten.";
	damarier.subval[2][1][0].ovrigt="Religion: Daakkyrkan";
	damarier.subval[2][1][0].antalsubval=1;
	
	damarier.subval[2][1].push();
	damarier.subval[2][1][1]={};
	damarier.subval[2][1][1].rubrik="S:t Henrudas arv";
	damarier.subval[2][1][1].beskrivning="Den damariska Daakkyrkan betonar starkt lärdomstraditionerna från S:t Henruda och profeten Milargok.";
	damarier.subval[2][1][1].kunskapsfardigheterenheter=3;
	damarier.subval[2][1][1].beskrivninghak="3 enheter på Kunskapsfärdigheter.";
	
	damarier.subval[2].push([]);
	damarier.subval[2][2][0]={};
	damarier.subval[2][2][0].valdasub = [];
	damarier.subval[2][2][0].vald = 0;
	damarier.subval[2][2][0].rubrik="Jordesoldatens vittnen";
	damarier.subval[2][2][0].beskrivning="Jordesoldatens vittnen är en av den jargiska moderkyrkan förbjuden grupp vars medlemmar följer vad de anser är den förste profetens sanna läror. Gruppen betonar enkelhet, jämlikhet, ärlighet och mod.";
	damarier.subval[2][2][0].ovrigt="Religion: Jordesoldatens vittnen";
	damarier.subval[2][2][0].antalsubval=1;
	
	damarier.subval[2][2].push();
	damarier.subval[2][2][1]={};
	damarier.subval[2][2][1].rubrik="Gudfruktig flit";
	damarier.subval[2][2][1].beskrivning="En god smed och en hederlig snickare hedrar Daak bättre än alla Tibaras prelater.";
	damarier.subval[2][2][1].hantverkpoang=2;
	damarier.subval[2][2][1].beskrivninghak="2 poäng Hantverk.";
	
	damarier.subval[2].push([]);
	damarier.subval[2][3][0]={};
	damarier.subval[2][3][0].valdasub = [];
	damarier.subval[2][3][0].vald = 0;
	damarier.subval[2][3][0].rubrik="Hedendomen";
	damarier.subval[2][3][0].beskrivning="Hedningar är ett samlingsnamn för de otaliga religiösa traditioner och läror som predikas runt om i Damarien och omfattar allt från den livsbejakande gudinnan Leticias anhängare till de sjömän som tillber havsguden Navare eller de galna siare och bedragare som följer den kaotiske Anordino.";
	damarier.subval[2][3][0].ovrigt="Religion: Hedendomen";
	damarier.subval[2][3][0].antalsubval=1;
	
	damarier.subval[2][3].push();
	damarier.subval[2][3][1]={};
	damarier.subval[2][3][1].rubrik="De gamla sagorna";
	damarier.subval[2][3][1].beskrivning="En av de främsta plikterna för de gamla gudarnas anhängare är att hålla de gamla berättelserna levande.";
	damarier.subval[2][3][1].berattarkonst={};
	damarier.subval[2][3][1].berattarkonst.enheter=2;
	damarier.subval[2][3][1].historia={};
	damarier.subval[2][3][1].historia.enheter=1;
	damarier.subval[2][3][1].ockultism={};
	damarier.subval[2][3][1].ockultism.enheter=1;
	damarier.subval[2][3][1].beskrivninghak="2 enheter Berättarkonst, 1 enhet Historia och 1 enhet Ockultism.";
	
	damarier.subval[2].push([]);
	damarier.subval[2][4][0]={};
	damarier.subval[2][4][0].valdasub = [];
	damarier.subval[2][4][0].vald = 0;
	damarier.subval[2][4][0].rubrik="Kristallorden";
	damarier.subval[2][4][0].beskrivning="Kristallorden är en stor, mäktig och krigisk grupp av damariska hedningar som främst följer dödsguden Dibuk och Modern, ödesgudinnan Arachna. De anser sig försvara mot allt som hotar Damariens hedningar men hyser ett särskilt hat mot vindmunkarna och deras skyddslingar.";
	damarier.subval[2][4][0].ovrigt="Religion: Kristallorden";
	damarier.subval[2][4][0].antalsubval=1;
	
	damarier.subval[2][4].push();
	damarier.subval[2][4][1]={};
	damarier.subval[2][4][1].rubrik="Crusatora";
	damarier.subval[2][4][1].beskrivning="Det är varje medlems plikt att med vapen i hand bekämpa de gamla gudarnas fiender. ";
	damarier.subval[2][4][1].avtrubbningvald=1;
	damarier.subval[2][4][1].stridsfardigheterenheter=3;
	damarier.subval[2][4][1].beskrivninghak="1 Avtrubbningskryss för våld och 3 enheter på Stridsfärdigheter.";

	damarier.subval[2].push([]);
	damarier.subval[2][5][0]={};
	damarier.subval[2][5][0].valdasub = [];
	damarier.subval[2][5][0].vald = 0;
	damarier.subval[2][5][0].rubrik="Vindtron";
	damarier.subval[2][5][0].beskrivning="De vindtroende följer de läror som predikas av munkarna från Vita klostret. Religionens anhängare tillber och söker balans mellan de fem vindarna och tillber även flera mindre andeväsen.";
	damarier.subval[2][5][0].ovrigt="Religion: Vindtron";
	damarier.subval[2][5][0].antalsubval=1;
	
	damarier.subval[2][5].push();
	damarier.subval[2][5][1]={};
	damarier.subval[2][5][1].rubrik="Hjärtevindens stillhet";
	damarier.subval[2][5][1].beskrivning="Endast genom inre frid kan en människa nå balans mellan vindarna och höra den femte vindens röst. ";
	damarier.subval[2][5][1].sjalvkontroll={};
	damarier.subval[2][5][1].sjalvkontroll.bonus=1;
	damarier.subval[2][5][1].beskrivninghak="\+1 Självkontroll.";
	
	damarier.subval[2].push([]);
	damarier.subval[2][6][0]={};
	damarier.subval[2][6][0].valdasub = [];
	damarier.subval[2][6][0].vald = 0;
	damarier.subval[2][6][0].rubrik="Hemliga sällskap";
	damarier.subval[2][6][0].beskrivning="Det finns många ljusskygga kulter och sällskap i Damarien som utövar sin tro i hemlighet. Dessa är ofta hatade och fruktade av de annars ganska toleranta damarierna. Exempel på sådana grupper är Commersium Lamia, Xinukulten eller malgoarhiterna.";
	damarier.subval[2][6][0].ovrigt="Religion: Hemligt sällskap";
	damarier.subval[2][6][0].antalsubval=1;
	
	damarier.subval[2][6].push();
	damarier.subval[2][6][1]={};
	damarier.subval[2][6][1].rubrik="I lönndom";
	damarier.subval[2][6][1].beskrivning="Medlemmar av hemliga sällskap måste snabbt lära sig hur man bäst skyddar sitt eget sällskaps hemligheter från utomståendes orena blickar genom att verka i det fördolda.  ";
	damarier.subval[2][6][1].dupera={};
	damarier.subval[2][6][1].dupera.enheter=2;
	damarier.subval[2][6][1].genomskada={};
	damarier.subval[2][6][1].genomskada.enheter=1;
	damarier.subval[2][6][1].skumraskaffarer={};
	damarier.subval[2][6][1].skumraskaffarer.enheter=1;
	damarier.subval[2][6][1].beskrivninghak="2 enheter Dupera, 1 enhet Genomskåda, 1 enhet Skumraskaffärer.";
	
	damarier.subval[2].push([]);
	damarier.subval[2][7][0]={};
	damarier.subval[2][7][0].valdasub = [];
	damarier.subval[2][7][0].vald = 0;
	damarier.subval[2][7][0].rubrik="Samoriska läran";
	damarier.subval[2][7][0].beskrivning="Samorismen är den dominerande religionen i Västmark, Asharien och Soldarn, men förekommer även i södra Damarien. De följer profeten Samor den heliges och Den eviga omvälvningens läror och tillber solgudarna Aurias och Pelias. Thamas regim förföljer samorier, då de ofta misstänks vara lojala mot Västmark och Soldarn, och många av dem utövar sin religion i hemlighet.";
	damarier.subval[2][7][0].ovrigt="Religion: Samoriska läran";
	damarier.subval[2][7][0].antalsubval=1;
	
	damarier.subval[2][7].push();
	damarier.subval[2][7][1]={};
	damarier.subval[2][7][1].rubrik="Förföljda";
	damarier.subval[2][7][1].beskrivning="De allt hårdare förföljelserna av Damariens samorier har lett till att många av dem tvingats genomgå svåra prövningar och utöva sin tro under stort hemlighetsmakeri. ";
	damarier.subval[2][7][1].dupera={};
	damarier.subval[2][7][1].dupera.enheter=1;
	damarier.subval[2][7][1].smyga={};
	damarier.subval[2][7][1].smyga.enheter=1;
	damarier.subval[2][7][1].avtrubbningutsatthet=1;
	damarier.subval[2][7][1].beskrivninghak="1 Avtrubbningskryss för utsatthet, 1 enhet Dupera och 1 enhet Smyga.";

	damarier.subval.push([[]]);
	damarier.subval[3][0][0]={};
	damarier.subval[3][0][0].valdasub = [];
	damarier.subval[3][0][0].vald = 0;
	damarier.subval[3][0][0].rubrik="Släktens relation till Thamas regim";
	damarier.subval[3][0][0].beskrivning="Välj eller slumpa vilken relation släkten har till Thamas regim:";
	damarier.subval[3][0][0].antalsubval=1;
	
	damarier.subval[3].push([]);
	damarier.subval[3][1][0]={};
	damarier.subval[3][1][0].rubrik="Utländska lojalister";
	damarier.subval[3][1][0].ovrigt="Rollpersonens familj är utländska lojalister.";
	damarier.subval[3][1][0].beskrivning="Rollpersonens familj är utlänningar, vanligtvis jargier eller cirefalier, som anlände till Damarien i samband med eller strax efter Thamas maktövertagande och som kommit upp sig i Damarien tack vare storfursten.";
	
	damarier.subval[3].push([]);
	damarier.subval[3][2][0]={};
	damarier.subval[3][2][0].rubrik="Damariska lojalister";
	damarier.subval[3][2][0].ovrigt="Rollpersonens familj är damariska lojalister.";
	damarier.subval[3][2][0].beskrivning="Rollpersonens familj har sina rötter i Damarien, men anslöt sig på ett tidigt stadium till Thamas sida i maktkampen. Tack vare detta har släkten belönats rikligt, men samtidigt skaffat sig många mäktiga fiender.";
	
	damarier.subval[3].push([]);
	damarier.subval[3][3][0]={};
	damarier.subval[3][3][0].rubrik="Neutrala";
	damarier.subval[3][3][0].ovrigt="Rollpersonens familj är neutralt inställda till Thamas regim.";
	damarier.subval[3][3][0].beskrivning="Rollpersonens familj har gjort vad de kunnat för att helt hålla sig utanför maktkampen som följde på Thamas maktövertagande. Denna neutralitet har gjort att de framstår som misstänkta både i lojalisternas och upprorsmännens ögon.";
	
	damarier.subval[3].push([]);
	damarier.subval[3][4][0]={};
	damarier.subval[3][4][0].rubrik="Oppurtunister";
	damarier.subval[3][4][0].ovrigt="Rollpersonens familj är oppurtunister.";
	damarier.subval[3][4][0].beskrivning="Rollpersonens familj har aldrig officiellt tagit ställning vare sig för eller emot storfurstens regim, men har framgångsrikt övertygat båda sidor att de skulle vara värdefulla allierade i händelse av konflikt. En dag kommer man vara tvungen att ta ställning en gång för alla, men detta ställningstagande skjuter släktens överhuvuden gärna på så länge som möjligt.";
	
	damarier.subval[3].push([]);
	damarier.subval[3][5][0]={};
	damarier.subval[3][5][0].rubrik="Splittrade";
	damarier.subval[3][5][0].ovrigt="Rollpersonens familj är splittrade vad gäller relationen till Thamas regim.";
	damarier.subval[3][5][0].beskrivning="Rollpersonens familj splittrades i samband med den vita fjäderns krig då vissa familjemedlemmar valde att stötta Thamas medan andra valde att bekämpa honom. Familjen är alltjämt delad mellan lojalister och rebeller och denna splittring skapar mycket ont blod mellan släktingarna.";
	
	damarier.subval[3].push([]);
	damarier.subval[3][6][0]={};
	damarier.subval[3][6][0].rubrik="Lojalistiska överlöpare";
	damarier.subval[3][6][0].ovrigt="Rollpersonens familj är lojalistiska överlöpare.";
	damarier.subval[3][6][0].beskrivning="Rollpersonens familj gjorde ursprungligen motstånd mot Thamas, men bytte så småningom sida. Dess medlemmar kämpar nu hårt för att bevisa sin lojalitet mot rikets nye herre, som officiellt förlåtit dem men alltjämt behandlar dem med misstänksamhet.";
	
	damarier.subval[3].push([]);
	damarier.subval[3][7][0]={};
	damarier.subval[3][7][0].rubrik="Rebelliska överlöpare";
	damarier.subval[3][7][0].ovrigt="Rollpersonens familj är rebelliska överlöpare.";
	damarier.subval[3][7][0].beskrivning="Rollpersonens familj var ursprungligen lojala anhängare till Thamas. Men av någon anledning, kanske på grund av att hovintriger berövat dem storfurstens gunst eller på grund av familjens avsky mot storfurstens alltmer maktfullkomliga styre, har de istället blivit hans fiender.";
	
	damarier.subval[3].push([]);
	damarier.subval[3][8][0]={};
	damarier.subval[3][8][0].rubrik="Rebeller";
	damarier.subval[3][8][0].ovrigt="Rollpersonens familj är rebeller.";
	damarier.subval[3][8][0].beskrivning="Rollpersonens familj har varit svurna fiender till storfursten och dennes hantlangare ända sedan de först besudlade Damariens jord med sina fötter. Familjen har på grund av detta drabbats av hård förföljelse, men det har bara gjort överlevarna än mer säkra på sin sak.";

	damarier.subval[3].push([]);
	damarier.subval[3][9][0]={};
	damarier.subval[3][9][0].rubrik="Lojalistiska ögontjänare";
	damarier.subval[3][9][0].ovrigt="Rollpersonens familj är lojalistiska ögontjänare.";
	damarier.subval[3][9][0].beskrivning="Rollpersonens familj är på ytan obrottsligt lojala mot storfurstens regim, men i hemlighet avskyr många av dess medlemmar starkt Thamas regentskap och skulle med glädje stödja en annan härskare, förutsatt att ett gott tillfälle visar sig.";

	damarier.subval[3].push([]);
	damarier.subval[3][10][0]={};
	damarier.subval[3][10][0].rubrik="Kuvade lojalister";
	damarier.subval[3][10][0].ovrigt="Rollpersonens familj är kuvade lojalister.";
	damarier.subval[3][10][0].beskrivning="Rollpersonens familj var tidigare neutrala eller aktiva fiender till Thamas, men efter att stora delar av släkten fängslats, avrättats eller tagits som gisslan av regimen är de flesta av dess medlemmar nu antingen lojala eller för rädda för att våga sätta sig upp mot storfursten.";

	var ghor={};
	folkslagobjekt.ghor=ghor;
    ghor.rubrik="Ghor";
	ghor.namn="ghor";
	ghor.beskrivning="Med sina över 180 000 invånare är det uråldriga Khazimrenk-Ghor det äldsta, mäktigaste och största av Mundanas alla dvärgfästen. Dess konung är informellt överhuvud över alla Ghordvärgar och har dessutom mycket högt anseende även bland andra dvärgklaner och människoriken. Den enorma dvärgastaden och dess invånare har sedan lång tid tillbaka haft ett starkt inflytande över alla de omkringliggande rikena på Asharinahalvön och många Ghordvärgar har ända sedan Damas den svartes dagar levt och verkat i Damarien. De är troligen Mundanas främsta stenhuggare och när det kommer till icke-magisk smideskonst står deras likar bara att finna bland roghandvärgarna. Ghordvärgarna i allmänhet och de från Khazim-renk-Ghor i synnerhet har rykte om sig att ofta ha en aningen arrogant attityd både mot människor och mot andradvärgar, då de aldrig tycks tröttna på att påminna demom sin status som den första klanen. De flesta av demär mycket politiskt och religiöst konservativa och ser inte sällan med misstro på dvärgar som de anser avvikit frånde gamla traditionerna och guden Vontars lagar." + "\n" + "Ghordvärgar, män som kvinnor, är i regel runt 140 cm långa, kraftigt byggda och väger ungefär 65 kg. Deras hår och skägg är oftast bruna och ögonen mörkblåa, även om många andra hår- och ögonfärger förekommer."
	
	ghor.subval=[[[]]];
	ghor.subval[0][0][0]={};
	ghor.subval[0][0][0].valdasub = [];
	ghor.subval[0][0][0].vald = 0;
	ghor.subval[0][0][0].styrka = {};
	ghor.subval[0][0][0].styrka.varde=12;
	ghor.subval[0][0][0].talighet = {};
	ghor.subval[0][0][0].talighet.varde=10;
	ghor.subval[0][0][0].rorlighet = {};
	ghor.subval[0][0][0].rorlighet.varde=7;
	ghor.subval[0][0][0].uppfattning = {};
	ghor.subval[0][0][0].uppfattning.varde=7;
	ghor.subval[0][0][0].vilja = {};
	ghor.subval[0][0][0].vilja.varde=10;
	ghor.subval[0][0][0].psyke = {};
	ghor.subval[0][0][0].psyke.varde=8;
	ghor.subval[0][0][0].visdom = {};
	ghor.subval[0][0][0].visdom.varde=8;
	ghor.subval[0][0][0].utstralning = {};
	ghor.subval[0][0][0].utstralning.varde=8;
	ghor.subval[0][0][0].beskrivningattribut=[[["Styrka"],["3T6"]],[["Tålighet"],["2T6\+2"]],[["Rörlighet"],["1T6\+3"]],[["Uppfattning"],["1T6\+3"]],[["Vilja"],["2T6\+2"]],[["Psyke"],["2T6"]],[["Visdom"],["2T6"]],[["Utstrålning"],["2T6"]]]
	
	ghor.subval[0].push([]);
	ghor.subval[0][1][0]={};
	ghor.subval[0][1][0].valdasub = [];
	ghor.subval[0][1][0].vald = 0;
	ghor.subval[0][1][0].rubrik="Stenens barn";
	ghor.subval[0][1][0].beskrivning="Ghordvärgar är väl anpassade för ett livunder marken, och är redo att försvara sina hem med livet som insats.";
	ghor.subval[0][1][0].beskrivninghak="De får expertisen Grottsystem 4T6 och 3 enheter Stridsfärdigheter."
	ghor.subval[0][1][0].grottsystem={};
	ghor.subval[0][1][0].grottsystem.enheter=3;
	ghor.subval[0][1][0].stridsfardigheterenheter=3;
	
	ghor.subval[0].push([]);
	ghor.subval[0][2][0]={};
	ghor.subval[0][2][0].valdasub = [];
	ghor.subval[0][2][0].vald = 0;
	ghor.subval[0][2][0].rubrik="Fast mark";
	ghor.subval[0][2][0].beskrivning="Dvärgarnas balanssinne gör att de föredrar att ha fast mark under fötterna. Få saker är så beryktadesom den dvärgiska sjösjukan."; 
	ghor.subval[0][2][0].beskrivninghak="Färdigheterna Simma och Sjömannaskap är Svårlärda. Dvärgar är vana att gå långasträckor och är Lättlärda i Marsch.";
	ghor.subval[0][2][0].marsch = {};
	ghor.subval[0][2][0].marsch.lattlard=1;
	ghor.subval[0][2][0].sjomannaskap = {};
	ghor.subval[0][2][0].sjomannaskap.lattlard=-1;
	ghor.subval[0][2][0].simma = {};
	ghor.subval[0][2][0].simma.lattlard=-1;
	ghor.subval[0][2][0].formaga="Sjösjuk";
	
	ghor.subval[0].push([]);
	ghor.subval[0][3][0]={};
	ghor.subval[0][3][0].valdasub = [];
	ghor.subval[0][3][0].vald = 0;
	ghor.subval[0][3][0].rubrik="Kort och kraftig";
	ghor.subval[0][3][0].beskrivning="En dvärg kan bära tunga rustningar utan att hindras. De modifierar sin totala Belastning med –8 för att se hur belastade de är. De är dock ett kortvuxet släkte och får därför –1T6 Förflyttning.";
	ghor.subval[0][3][0].grundbelastning = {};
	ghor.subval[0][3][0].grundbelastning.bonus=-8;
	ghor.subval[0][3][0].forflyttning = {};
	ghor.subval[0][3][0].forflyttning.bonus=-4;
	ghor.subval[0][3][0].formaga="Modifierar total belastning med –8";
	
	ghor.subval[0].push([]);
	ghor.subval[0][4][0]={};
	ghor.subval[0][4][0].valdasub = [];
	ghor.subval[0][4][0].vald = 0;
	ghor.subval[0][4][0].rubrik="Mörkersyn"
	ghor.subval[0][4][0].beskrivning="Dvärgar kan se i totalt mörker. De får kännetecknet Mörkersyn 4T6."
	ghor.subval[0][4][0].morkersyn = {};
	ghor.subval[0][4][0].morkersyn.enheter=3;
	
	ghor.subval[0].push([]);
	ghor.subval[0][5][0]={};
	ghor.subval[0][5][0].valdasub = [];
	ghor.subval[0][5][0].vald = 0;
	ghor.subval[0][5][0].rubrik="Jag står här"
	ghor.subval[0][5][0].beskrivning="Ghordvärgarna är ett konservativt folk som idealiserar de som hårdnackat vägrar tumma på sina principer.";
	ghor.subval[0][5][0].beskrivninghak="I sociala konflikter får dvärgen +1T6 på alla slag för att motstå försök att påverka eller ändra dennes åsikter och känslor."
	ghor.subval[0][5][0].skarptminne = {};
	ghor.subval[0][5][0].skarptminne.enheter=3;
	ghor.subval[0][5][0].formaga="I sociala konflikter får dvärgen +1T6 på alla slag för att motstå försök att påverka eller ändra dennes åsikter och känslor."
	
	ghor.subval[0].push([]);
	ghor.subval[0][6][0]={};
	ghor.subval[0][6][0].valdasub = [];
	ghor.subval[0][6][0].vald = 0;
	ghor.subval[0][6][0].rubrik="Vontars folk"
	ghor.subval[0][6][0].beskrivning="Dvärgarna är Vontars folk och är svurna att lyda gudens strikta regler. De får expertisen Vontars levnadsregler 4T6. Förolämpas ghordvärgens klan, familj eller tro av en annan dvärg måste denne få upprättelse eller drabbas av Nedbrytning 40 (utsatthet)."
	ghor.subval[0][6][0].vontarslevnadsregler = {};
	ghor.subval[0][6][0].vontarslevnadsregler.enheter=3;
	ghor.subval[0][6][0].ovrigt="Förolämpas ghordvärgens klan, familj eller tro av en annan dvärg måste denne få upprättelse eller drabbas av Nedbrytning 40 (utsatthet)."
	
	ghor.subval[0].push([]);
	ghor.subval[0][7][0]={};
	ghor.subval[0][7][0].valdasub = [];
	ghor.subval[0][7][0].vald = 0;
	ghor.subval[0][7][0].antalsubval=3;
	
	ghor.subval[0][7][1]={};
	ghor.subval[0][7][1].rubrik="Talade språk";
	ghor.subval[0][7][1].beskrivning="Rukh, lägre jargiska";
	ghor.subval[0][7][1].taladesprak="Rukh, lägre jargiska";
	ghor.subval[0][7][1].rukh = {};
	ghor.subval[0][7][1].rukh.enheter=1;
	ghor.subval[0][7][1].lagrejargiska = {};
	ghor.subval[0][7][1].lagrejargiska.enheter=1;
	
	ghor.subval[0][7][2]={};
	ghor.subval[0][7][2].rubrik="Skriftspråk";
	ghor.subval[0][7][2].beskrivning="Rukh-nekh.";
	ghor.subval[0][7][2].skriftsprak="Rukh-nekh.";
	ghor.subval[0][7][2].rukhnekh = {};
	ghor.subval[0][7][2].rukhnekh.enheter=1;
	
	
	ghor.subval[0][7][3]={};
	ghor.subval[0][7][3].rubrik="Kvinno- och mansnamn";
	ghor.subval[0][7][3].beskrivning="Anar, Arghim, Augun, Bivor, Durr, Dvaig, Dzahl, Funbir, Genar, Hanar, Haral, Hemn, Hrazim, Khezir, Khorim, Midur, Nekhem, Rolvi, Stiar, Trumbar, Turhan, Umber, Vathar, Veig, Zirim, Zimis";
	ghor.subval[0][7][3].namnlista=["Anar", " Arghim", " Augun", " Bivor", " Durr", " Dvaig", " Dzahl", " Funbir", " Genar", " Hanar", " Haral", " Hemn", " Hrazim", " Khezir", " Khorim", " Midur", " Nekhem", " Rolvi", " Stiar", " Trumbar", " Turhan", " Umber", " Vathar", " Veig", " Zirim", " Zimis"];
	
	var thism={};
	folkslagobjekt.thism=thism;
    thism.rubrik="Thism";
	thism.namn="thism";
	thism.beskrivning="Thismalverna i den damariska Järvskogen är kända som fruktansvärda krigare, kanske än mer än sina fränder på andra håll, och de försvarar vildsint sitt territorium. De är uppdelade på tre hus med delvis egna traditioner, även om de av nöd och sedvänja arbetar mycket nära varandra. " + "\n" + "Thism är ofta drygt 190 cm långa, ganska smalt byggda och väger ungefär 70 kg. De är oftast blonda eller brunhåriga, och ögonen är oftast klarblå. Bland Järvskogens alver tycks dock nötbruna ögon vara något vanligare än på andra håll."
	
	thism.subval=[[[]]];
	thism.subval[0][0][0]={};
	thism.subval[0][0][0].valdasub = [];
	thism.subval[0][0][0].vald = 0;
	thism.subval[0][0][0].styrka = {};
	thism.subval[0][0][0].styrka.varde=9;
	thism.subval[0][0][0].talighet = {};
	thism.subval[0][0][0].talighet.varde=9;
	thism.subval[0][0][0].rorlighet = {};
	thism.subval[0][0][0].rorlighet.varde=10;
	thism.subval[0][0][0].uppfattning = {};
	thism.subval[0][0][0].uppfattning.varde=10;
	thism.subval[0][0][0].vilja = {};
	thism.subval[0][0][0].vilja.varde=8;
	thism.subval[0][0][0].psyke = {};
	thism.subval[0][0][0].psyke.varde=8;
	thism.subval[0][0][0].visdom = {};
	thism.subval[0][0][0].visdom.varde=8;
	thism.subval[0][0][0].utstralning = {};
	thism.subval[0][0][0].utstralning.varde=8;
	thism.subval[0][0][0].beskrivningattribut=[[["Styrka"],["2T6\+1"]],[["Tålighet"],["2T6\+1"]],[["Rörlighet"],["2T6\+2"]],[["Uppfattning"],["2T6\+2"]],[["Vilja"],["2T6"]],[["Psyke"],["2T6"]],[["Visdom"],["2T6"]],[["Utstrålning"],["2T6"]]]
	
	
	thism.subval[0].push([]);
	thism.subval[0][1][0]={};
	thism.subval[0][1][0].valdasub = [];
	thism.subval[0][1][0].vald = 0;
	thism.subval[0][1][0].rubrik="Alviska drag";
	thism.subval[0][1][0].beskrivning="Thisms utstrålning och ädla drag gör att man omedelbart lägger märke till dem. ";
	thism.subval[0][1][0].beskrivninghak="\+2 Intryck";
	thism.subval[0][1][0].intryck = {};
	thism.subval[0][1][0].intryck.bonus=2;

	thism.subval[0].push([]);
	thism.subval[0][2][0]={};
	thism.subval[0][2][0].valdasub = [];
	thism.subval[0][2][0].vald = 0;
	thism.subval[0][2][0].rubrik="Alviska ögat";
	thism.subval[0][2][0].beskrivning="Det alviska ögat innebär man känner av när man blir iakttagen av en alv, men effekten är även omvänd så att alver känner av när de blir iakttagna.";
	thism.subval[0][2][0].beskrivninghak="Alver kan anstränga sig för att både förstärka och dölja effekten av det alviska ögat. Hur bra de är på detta mäts med kännetecknet Alviska ögat som de börjar med 3T6 i.";
	thism.subval[0][2][0].alviskaogat = {};
	thism.subval[0][2][0].alviskaogat.enheter=1;
	
	thism.subval[0].push([]);
	thism.subval[0][3][0]={};
	thism.subval[0][3][0].valdasub = [];
	thism.subval[0][3][0].vald = 0;
	thism.subval[0][3][0].rubrik="Biotropiskt fält";
	thism.subval[0][3][0].beskrivning="Alver genomströmmas av biotropisk kraft vilket stoppar blödningar.";
	thism.subval[0][3][0].beskrivninghak="En alv som blöder slår varje runda ett Livskraftslag mot blödningens svårighet för att se ifall den upphör. Detta sker efter att blödningen hanterats under rundan.";
	thism.subval[0][3][0].formaga="Vid blödning får ett Livskraftslag mot blödningens svårighet slås varje runda för att stoppa blodflödet."
	
	thism.subval[0].push([]);
	thism.subval[0][4][0]={};
	thism.subval[0][4][0].valdasub = [];
	thism.subval[0][4][0].vald = 0;
	thism.subval[0][4][0].rubrik="Förbannelsens folk"
	thism.subval[0][4][0].beskrivning="Tiden läker inga sår för den vars minnen inte bleknar med åren."
	thism.subval[0][4][0].beskrivninghak="Alver kan inte välja att höja Välmående vid början av ett spelmöte (enligt reglerna på sida 140 i Grundboken), men kan som vanligt återfå det genom att uppfylla karaktärsdrag.";
	thism.subval[0][4][0].formaga="Kan ej välja att höja Välmående vid början av ett spelmöte (enligt reglerna på sida 140 i Grundboken), men kan som vanligt återfå det genom att uppfylla karaktärsdrag.";
	
	thism.subval[0].push([]);
	thism.subval[0][5][0]={};
	thism.subval[0][5][0].valdasub = [];
	thism.subval[0][5][0].vald = 0;
	thism.subval[0][5][0].rubrik="Edsvuren"
	thism.subval[0][5][0].beskrivning="Thisms samhälle består av ett system av lojalitet och trohetseder som garanterar deras plats i hierarkin.";
	thism.subval[0][5][0].beskrivninghak="En thismalv får +1T6 på alla slag för Självkontroll där ett misslyckande skulle innebära att alven bryter en trohetsed eller går emot en överordnads instruktioner.";
	thism.subval[0][5][0].formaga="Får +1T6 på alla slag för Självkontroll där ett misslyckande skulle innebära att alven bryter en trohetsed eller går emot en överordnads instruktioner.";
	
	thism.subval[0].push([]);
	thism.subval[0][6][0]={};
	thism.subval[0][6][0].valdasub = [];
	thism.subval[0][6][0].vald = 0;
	thism.subval[0][6][0].rubrik="Långlivad";
	thism.subval[0][6][0].beskrivning="Thism lever inte för evigt men betydligt längre än någon människa eller dvärg. Av detta får de 4 enheter Kunskapsfärdigheter samt +2 Självkontroll.";
	thism.subval[0][6][0].kunskapsfardigheterenheter=4;
	thism.subval[0][6][0].sjalvkontroll = {};
	thism.subval[0][6][0].sjalvkontroll.bonus=2;
	
	
	thism.subval[0].push([]);
	thism.subval[0][7][0]={};
	thism.subval[0][7][0].valdasub = [];
	thism.subval[0][7][0].vald = 0;
	thism.subval[0][7][0].rubrik="Nattsyn"
	thism.subval[0][7][0].beskrivning="thism har god nattsyn och kan se bra i ljussvaga förhållanden. Är det totalt mörker ser de dock ingenting. De får kännetecknet Nattsyn 4T6."
	thism.subval[0][7][0].nattsyn = {};
	thism.subval[0][7][0].nattsyn.enheter=3;
	
	
	
	thism.subval[0].push([]);
	thism.subval[0][8][0]={};
	thism.subval[0][8][0].valdasub = [];
	thism.subval[0][8][0].vald = 0;
	thism.subval[0][8][0].antalsubval=2;
	
	thism.subval[0][8][1]={};
	thism.subval[0][8][1].rubrik="Kvinnonamn";
	thism.subval[0][8][1].kvinnonamnlista=["Avaliel", "Ceranidel", "Evinal", "Gialari", "Ilian", "Odesse", "Siusad", "Tielesin", "Uliadi", "Yviol"];
	thism.subval[0][8][1].beskrivning="Avaliel, Ceranidel, Evinal, Gialari, Ilian, Odesse, Siusad, Tielesin, Uliadi, Yviol";
	
	thism.subval[0][8][2]={};
	thism.subval[0][8][2].rubrik="Mansnamn";
	thism.subval[0][8][2].beskrivning="Alean, Belion, Ceranidan, Edarion, Guderian, Isanion, Lunerian, Uanir, Ysanan";
	thism.subval[0][8][2].mansnamnlista=["Alean", "Belion", "Ceranidan", "Edarion", "Guderian", "Isanion", "Lunerian", "Uanir", "Ysanan"];

	thism.subval.push([[]]);
	thism.subval[1][0][0]={};
	thism.subval[1][0][0].valdasub = [];
	thism.subval[1][0][0].vald = 0;
	thism.subval[1][0][0].rubrik="Hus";
	thism.subval[1][0][0].beskrivning="Beroende på vilket hus thismalven tillhör erhålls en av följande egenskaper:";
	thism.subval[1][0][0].antalsubval=1;
	

	
	thism.subval[1].push([]);
	thism.subval[1][1][0]={};
	thism.subval[1][1][0].valdasub = [];
	thism.subval[1][1][0].vald = 0;
	thism.subval[1][1][0].rubrik="vhic Amlosa";
	thism.subval[1][1][0].beskrivning="Många av Järvskogens främsta skarpskyttar och jägare har under historien kommit från detta hus, vars medlemmar har rykte om sig att vara tysta, förslagna och tålmodiga. Husets symbol är en rötkrälare. ";
	thism.subval[1][1][0].beskrivninghak="De är Lättlärda i Gömma och börjar med 4T6 i kännetecknet Alviska ögat samt 3 enheter för vildmarksfärdigheter.";
	thism.subval[1][1][0].ovrigt="Hus: vhic Amlosa"
	thism.subval[1][1][0].gomma={};
	thism.subval[1][1][0].gomma.lattlard=1;
	thism.subval[1][1][0].alviskaogat={};
	thism.subval[1][1][0].alviskaogat.enheter=2;
	thism.subval[1][1][0].vildmarksfardigheterenheter=3;
	thism.subval[1][1][0].antalsubval=2;
	
	thism.subval[1][1].push();
	thism.subval[1][1][1]={};
	thism.subval[1][1][1].rubrik="Talade språk";
	thism.subval[1][1][1].beskrivning="Felya telieoro.";
	thism.subval[1][1][1].felyatelieoro = {};
	thism.subval[1][1][1].felyatelieoro.enheter=1;
	
	thism.subval[1][1].push();
	thism.subval[1][1][2]={};
	thism.subval[1][1][2].rubrik="Skriftspråk";
	thism.subval[1][1][2].beskrivning="Inga.";
	
	thism.subval[1].push([]);
	thism.subval[1][2][0]={};
	thism.subval[1][2][0].valdasub = [];
	thism.subval[1][2][0].vald = 0;
	thism.subval[1][2][0].rubrik="vhic Nangalie";
	thism.subval[1][2][0].beskrivning="Då inga sanarialver lever i den dystra  Järvskogen  har många av de uppgifter som i Sunari  sköts av denna stam istället fallit på hus Nangalies  lott. Genom historien har drygt hälften av Sholye hen’oros ledare kommit från detta hus. Nangalies symbol är en bevingad orm."; 
	thism.subval[1][2][0].beskrivninghak="De är Lättlärda i Ledarskap  och får 3 enheter på Kunskapsfärdigheter.";
	thism.subval[1][2][0].ovrigt="Hus: vhic Nangalie"
	thism.subval[1][2][0].ledarskap={};
	thism.subval[1][2][0].ledarskap.lattlard=1;
	thism.subval[1][2][0].kunskapsfardigheterenheter=3;
	thism.subval[1][2][0].antalsubval=2;
	
	thism.subval[1][2].push();
	thism.subval[1][2][1]={};
	thism.subval[1][2][1].rubrik="Talade språk";
	thism.subval[1][2][1].beskrivning="Felya telieoro, felya sanari.";
	thism.subval[1][2][1].felyatelieoro = {};
	thism.subval[1][2][1].felyatelieoro.enheter=1;
	thism.subval[1][2][1].felyasanari = {};
	thism.subval[1][2][1].felyasanari.enheter=1;
	
	thism.subval[1][2].push();
	thism.subval[1][2][2]={};
	thism.subval[1][2][2].rubrik="Skriftspråk";
	thism.subval[1][2][2].beskrivning="Felya-nai.";
	thism.subval[1][2][2].felyanai = {};
	thism.subval[1][2][2].felyanai.enheter=1;
	
	thism.subval[1].push([]);
	thism.subval[1][3][0]={};
	thism.subval[1][3][0].valdasub = [];
	thism.subval[1][3][0].vald = 0;
	thism.subval[1][3][0].rubrik="vhic Vaksama";
	thism.subval[1][3][0].beskrivning="Hus Vaksama har ett rykte om sig som brutala och orädda krigare. Nästan alla Järvskogens molnryttare kommer från detta hus och det är ofta stridsmän från Vaksama som leder Sholye hen’oros alver i strid. Husets symbol är en heavé-drake. "; 
	thism.subval[1][3][0].beskrivninghak="De är Lättlärda i Krigföring och får 1 Avtrubbningskryss för våld samt 3 enheter stridsfärdigheter. ";
	thism.subval[1][3][0].ovrigt="Hus: vhic Vaksama"
	thism.subval[1][3][0].krigforing={};
	thism.subval[1][3][0].krigforing.lattlard=1;
	thism.subval[1][3][0].avtrubbningvald=2;
	thism.subval[1][3][0].stridsfardigheterenheter=3;
	thism.subval[1][3][0].antalsubval=2;
	
	thism.subval[1][3].push();
	thism.subval[1][3][1]={};
	thism.subval[1][3][1].rubrik="Talade språk";
	thism.subval[1][3][1].beskrivning="Felya telieoro";
	thism.subval[1][3][1].felyatelieoro = {};
	thism.subval[1][3][1].felyatelieoro.enheter=1;
	
	
	thism.subval[1][3].push();
	thism.subval[1][3][2]={};
	thism.subval[1][3][2].rubrik="Skriftspråk";
	thism.subval[1][3][2].beskrivning="Inga.";
	
	
	

	
	// förmodligen battre med lista av objekt, därav kommentering

	folkslagobjekt.rubriker=[];
	folkslagobjekt.lista=folkslaglista;
	for (t = 0; t < folkslagobjekt.lista.length; t++){
    	// folkslagobjektlista[folkslaglista[i]] = window[folkslaglista[i]];
		folkslagobjekt[folkslaglista[t]].aktiverad=0;
		folkslagobjekt.rubriker[t]=folkslagobjekt[folkslagobjekt.lista[t]].rubrik;
		
		// Sätter beskrivningvaldbas till beskrivning om den förra saknas
		for (i=0;i<folkslagobjekt[folkslaglista[t]].subval.length;i++){
			for (j=0;j<folkslagobjekt[folkslaglista[t]].subval[i].length;j++){
				for (k=0;k<folkslagobjekt[folkslaglista[t]].subval[i][j].length;k++){
					if ("beskrivningvaldbas" in folkslagobjekt[folkslaglista[t]].subval[i][j][k]){
					}else{
						if ("beskrivning" in folkslagobjekt[folkslaglista[t]].subval[i][j][k]){
							folkslagobjekt[folkslaglista[t]].subval[i][j][k].beskrivningvaldbas=folkslagobjekt[folkslaglista[t]].subval[i][j][k].beskrivning;
						}
						
					}
				}	
			}		
		}
    
	}
	
    
    

	var folkslagobjektlista=[];
	for (i = 0; i < folkslaglista.length; i++){
    	folkslagobjektlista.push(window[folkslaglista[i]]);
    }

	// return [folkslaglista, folkslagobjektlista]

	return folkslagobjekt
}
