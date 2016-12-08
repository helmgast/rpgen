/*
I Färdighet inom kategori
A. Välj en som höjs/sänks
B. Slumpa en inom kategori som höjs/sänks		Anropa IA.
C. Slumpa resten inom kategori som höjs/sänks	While-loop, anropa IA. Först kategorienheter, sen valfria.
D. Nolla alla inom kategori						For-loopa genom kategorifärdigheterna (kolla om färdighet finns inom prop) Ta hänsyn till enheter lagda på avtrubbning, språk och mystikmagi
E. Välj en lättlärd
F. Slumpa alla lättlärda inom kategori

II Språk
A. Välj en som köps 							Kräver gui-jobb
B. Ta bort en köpt
C. Ta bort alla köpta
D. Slumpa om en köpt
E. Slumpa resten till köp



III Övriga färdigheter
A. Välj en som höjs/sänks						Samma som IA.
B. Välj en som köps								Kräver gui-jobb, anrop IA.
C. Slumpa en höjning							Kräver lista på övriga färdigheter som rollpersonen kan rollperson.ovrigafardighetermedtarningar
D. Slumpa ett köp
E. Ta bort en köpt								


IV Avtrubbning
A. Välj en som höjs/sänks
B. Slumpa höjning 								Anropar IV.A
C. Nolla alla höjda

V Mystik & magi 								Lik II

VI Valfritt och resten



*/



function testfunktion_anvandenheter(){
	console.log("testfunktion_anvandenheter körs");
}

function aterstallrollperson(rollperson){
	
	var i;
	
	rollperson=nollarollperson(rollperson);
	if ("bakgund" in rollperson){
		rollperson= summerarollperson(rollperson, rollperson.bakgrund);
	}
	if ("folkslag" in rollperson){
		rollperson= summerarollperson(rollperson, rollperson.folkslag);
	}
	if ("attributtarningar" in rollperson){
		rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
	}
	if ("arketyp" in rollperson){
		rollperson= summerarollperson(rollperson, rollperson.arketyp);
	}
	if ("miljo" in rollperson){
		rollperson= summerarollperson(rollperson, rollperson.miljo);
	}
	if ("handelsetabellobjektlista" in rollperson){
	
		for (i=0;i<rollperson.handelsetabellobjektlista.length;i++){
			rollperson= summerarollperson(rollperson, rollperson.handelsetabellobjektlista[i]);
		}
	}
	
	if(rollperson.ovrigafardigheter.expertis.lista.length>0){
		
		rollperson=summerarollperson(rollperson, rollperson.ovrigafardigheter.expertis);
	}
	if(rollperson.ovrigafardigheter.hantverk.lista.length>0){
		rollperson=summerarollperson(rollperson, rollperson.ovrigafardigheter.hantverk);
	}
	if(rollperson.ovrigafardigheter.kannetecken.lista.length>0){
		rollperson=summerarollperson(rollperson, rollperson.ovrigafardigheter.kannetecken);
	}
	
	
	return rollperson
}


function borjaenhetsanvandning(rollperson){
	if ("anvandenheter" in rollperson){
		
		if (rollperson.anvandenheter.sparad==1){
			rollperson=aterstallrollperson(rollperson);
			rollperson.anvandenheter.sparad=0;
			console.log("återställer användenheter")
		}
		
	}else{
		rollperson.anvandenheter={};
		rollperson.anvandenheter.sparad=0;
		
	}
	
	//console.log("borjaenhetsanvandning, objekt skapas");
	
	
	fardighetslistaobjekt = hamta_fardighetslistaobjekt();
	rpvalmatris = hamta_rpvalmatris();
	fardighetsgrupplista = fardighetslistaobjekt.fardighetsgrupplista;
	
	var avtrubbningskategorier=["utsatthet","vald","overnaturligt"];
	var avtrubbningsfardighetsgrupper=["socialafardigheter","stridsfardigheter","mystikfardigheter"];
	
	var mystikmagikategorier=["mysterier", "besvarjelser", "ritualer"];
	
	var i;
	var j;
	var k;
	
	rollperson.anvandenheter.mystikmagikategorier=mystikmagikategorier;
	
	for (i=0;i<10;i++){
	
		if (fardighetsgrupplista[i] in rollperson.anvandenheter){
			
		}else{
			rollperson.anvandenheter[fardighetsgrupplista[i]]={};
		}
			
	}		
	for (i=0;i<6;i++){
		// Vanliga färdighetskategorier
		if (fardighetsgrupplista[i] in rollperson.anvandenheter){
			
		}else{
			rollperson.anvandenheter[fardighetsgrupplista[i]]={};
			
		}
		
		// Loopa igenom vanliga färdighetskategorier och fyll på lattlard
		if ("kvarlattlarda" in rollperson.anvandenheter[fardighetsgrupplista[i]]){
			
		}else{
			rollperson.anvandenheter[fardighetsgrupplista[i]].kvarlattlarda=rollperson[rpvalmatris[4][i]];
		}
		
		// Loopa igenom vanliga färdighetskategorier och fyll på lattlard
		if ("anvandalattlarda" in rollperson.anvandenheter[fardighetsgrupplista[i]]){
			
		}else{
			rollperson.anvandenheter[fardighetsgrupplista[i]].anvandalattlarda=0;
		}
		
		// Loopa igenom vanliga färdighetskategorier och fyll på lattlard
		if ("anvandavalfrialattlarda" in rollperson.anvandenheter[fardighetsgrupplista[i]]){
			
		}else{
			rollperson.anvandenheter[fardighetsgrupplista[i]].anvandavalfrialattlarda=0;
		}
		
		// Loopa igenom och fyll på enheter 
		if ("kvarenheter" in rollperson.anvandenheter[fardighetsgrupplista[i]]){
			
		}else{
			rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter=rollperson[fardighetsgrupplista[i] + "enheter"];
		}
		
		if ("anvandaenheter" in rollperson.anvandenheter[fardighetsgrupplista[i]]){
		}else{
			rollperson.anvandenheter[fardighetsgrupplista[i]].anvandaenheter=0;
		}
		
		// anvandaenheterovrigt summerar kategorienheter som använts till mysterier, stridskonster, avtrubbning och språk
		if ("anvandaenheterovrigt" in rollperson.anvandenheter[fardighetsgrupplista[i]]){
		}else{
			rollperson.anvandenheter[fardighetsgrupplista[i]].anvandaenheterovrigt=0;
		}
		
		if ("anvandavalfriaenheter" in rollperson.anvandenheter[fardighetsgrupplista[i]]){
		}else{
			rollperson.anvandenheter[fardighetsgrupplista[i]].anvandavalfriaenheter=0;
		}
		
		// Loopar igenom färdigheter
		for (j=0; j<fardighetslistaobjekt[fardighetsgrupplista[i]].lista.length;j++){
			
			// Skapar färdighetsobjekt
			if (fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j] in rollperson.anvandenheter){
				
			}else{
				rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]]={};
			}
			
			// Nollar lattlard per färdighet
			if ("lattlard" in rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]]){
				
			}else{
				rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard=0;
			}
			// Nollar enheter per färdighet
			if ("enheter" in rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]]){
				
			}else{
				rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter=0;
			}
			
			// .enhetertotal summerar enheter, lattlard och grundtarningar från både rollperson och rollperson.anvandenheter för förenkling av tärningsberäkning
			//rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enhetertotal = rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter + rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard + rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].grundtarningar + rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter + rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard;
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enhetertotal = raknaenhetertotal(rollperson,fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]);
			rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].tarningar= raknautfardighetstarningar(rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].grundtarningar, heaviside(rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard), rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter);
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].tarningartotal = raknautfardighetstarningar(rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].grundtarningar, heaviside(rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard+rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard), rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter+rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter);
			
		
		
		}
		
	}
	
	
	i=6;
	
	// Valfria lättlärda
	if ("kvarvalfrialattlarda" in rollperson.anvandenheter){
		
	}else{
		rollperson.anvandenheter.kvarvalfrialattlarda=rollperson.lattlardvalfri;
	}
	
	if ("anvandavalfrialattlarda" in rollperson.anvandenheter){
		
	}else{
		rollperson.anvandenheter.anvandavalfrialattlarda=0;
	}
	
	// Språk
	
	//console.log("borjaenhetsanvandning, språk");
	// Skapar lista med köpta  språk
	if ("sprakskrift" in rollperson.anvandenheter){
		
	}else{
		rollperson.anvandenheter.sprakskrift=[];
	}
	
	if ("sprakskrift" in rollperson){
		
	}else{
		rollperson.sprakskrift=[];
	}
	
	// Skapar lista med alla behärskade språk
	if ("allasprakskrift" in rollperson.anvandenheter){
		
	}else{
		rollperson.anvandenheter.allasprakskrift=rollperson.sprakskrift.concat(rollperson.anvandenheter.sprakskrift);
	}
	
	if ("kvarenheter" in rollperson.anvandenheter[fardighetsgrupplista[i]]){
		
	}else{
		rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter=rollperson.sprakenheter;
	}
	
	if ("anvandaenheter" in rollperson.anvandenheter[fardighetsgrupplista[i]]){
	}else{
		rollperson.anvandenheter[fardighetsgrupplista[i]].anvandaenheter=0;
	}
	
	//console.log("borjaenhetsanvandning, enheter till språk");
	for (i=0;i<6;i++){
		
	
		// Använda kunskapsenheter till språk (fardighetsgrupplista[0]=kunskapsenheter)
		if (fardighetsgrupplista[i] in rollperson.anvandenheter.sprakfardigheter){
				
		}else{
			rollperson.anvandenheter.sprakfardigheter[fardighetsgrupplista[i]]={};
		}
			
		if ("anvandaenheter" in rollperson.anvandenheter.sprakfardigheter[fardighetsgrupplista[i]]){
			
		}else{
			rollperson.anvandenheter.sprakfardigheter[fardighetsgrupplista[i]].anvandaenheter=0;
		}
		
		
		
	}

	if ("anvandavalfriaenheter" in rollperson.anvandenheter.sprakfardigheter){
	}else{
		rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter=0;
	}
		
	
	//console.log("borjaenhetsanvandning, loopar igenom språk");
	// Loopar igenom språk
	for (j=0; j<fardighetslistaobjekt[fardighetsgrupplista[i]].lista.length;j++){
			
		// Skapar färdighetsobjekt
		if (fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j] in rollperson.anvandenheter){
			
		}else{
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]]={};
		}
		
		// Nollar enheter per språk
		if ("enheter" in rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]]){
			
		}else{
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter=0;
		}
		// .enhetertotal summerar enheter, lattlard och grundtarningar från både rollperson och rollperson.anvandenheter 
		//rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enhetertotal = rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter + rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter;
		rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enhetertotal = raknaenhetertotal(rollperson,fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]);
		
	}	
	
	// Skapar lista med köpta övriga färdigheter
	//console.log("borjaenhetsanvandning, övriga färdigheter");
	if ("ovrigafardighetermedtarningar" in rollperson.anvandenheter){
		
	}else{
		rollperson.anvandenheter.ovrigafardighetermedtarningar=[];
	}
	
	if ("ovrigafardighetermedtarningar" in rollperson){
		
	}else{
		rollperson.ovrigafardighetermedtarningar=[];
	}
	rollperson.anvandenheter.allaovrigafardighetermedtarningar=rollperson.ovrigafardighetermedtarningar.concat(rollperson.anvandenheter.ovrigafardighetermedtarningar);
	
	
	
	if ("ovrigafardigheter" in rollperson.anvandenheter){
		
	}else{
		rollperson.anvandenheter.ovrigafardigheter={};
	}
	
	if ("anvandavalfriaenheter" in rollperson.anvandenheter.ovrigafardigheter){
		
	}else{
		rollperson.anvandenheter.ovrigafardigheter.anvandavalfriaenheter=0;
	}
	
	for (i=7;i<10;i++){
		// Förmodligen bättre att bokföra på rollperson.anvandenheter.ovrigafardigheter.anvandavalfriaenheter, finns ingen poäng i att särskilja expertiser, hantverk, kännetecken
		if ("anvandavalfriaenheter" in rollperson.anvandenheter[fardighetsgrupplista[i]]){
		
		}else{
			rollperson.anvandenheter[fardighetsgrupplista[i]].anvandavalfriaenheter=0;
		}
		
		// Loopar igenom övriga färdigheter
		for (j=0; j<fardighetslistaobjekt[fardighetsgrupplista[i]].lista.length;j++){
			
			// Skapar färdighetsobjekt under rollperson
			if (fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j] in rollperson){
				
			}else{
				rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]]={};
				rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter=0;
			}
			
			rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard=1; // Alla övriga färdigheter är lättlärda från start
			
			// Skapar färdighetsobjekt under anvandenheter
			if (fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j] in rollperson.anvandenheter){
				
			}else{
				rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]]={};
				rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter=0;
				
			}
			
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard=0; // Alla övriga färdigheter är lättlärda från start
			
			
			// Nollar enheter per färdighet under rollperson
			if ("enheter" in rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]]){
				
			}else{
				rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter=0;
			}
			
			// Nollar enheter per färdighet under anvandenheter
			if ("enheter" in rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]]){
				
			}else{
				rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter=0;
			}
			
			// .enhetertotal summerar enheter, lattlard och grundtarningar från både rollperson och rollperson.anvandenheter för förenkling av tärningsberäkning
			//rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enhetertotal = rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter + 1 + rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter;
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enhetertotal = raknaenhetertotal(rollperson, fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]);
			rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].tarningar= raknautfardighetstarningar(rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].grundtarningar, heaviside(rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard), rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter);
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].tarningartotal = raknautfardighetstarningar(rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].grundtarningar, heaviside(rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard+rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].lattlard), rollperson[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter+rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]].enheter);
		}
		
	}
	
	
	// valfria enheter
	
	if ("anvandavalfriaenheter" in rollperson.anvandenheter){
		
	}else{
		rollperson.anvandenheter.anvandavalfriaenheter=0;
	}
	
	if ("kvarvalfriaenheter" in rollperson.anvandenheter){
	}else{
		rollperson.anvandenheter.kvarvalfriaenheter = rollperson.valfriaenheter;
	}
	
	
	
	// Avtrubbning
	//console.log("borjaenhetsanvandning, avtrubbning");
	if ("avtrubbning" in rollperson.anvandenheter){
		
	}else{
		rollperson.anvandenheter.avtrubbning={};
	}
	
	// Kryss
	for (i=0;i<3;i++){
		if (avtrubbningskategorier[i] in rollperson.anvandenheter.avtrubbning){
		}else{
			rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i]]={};
		}
		
		
		if ("anvandavalfriakryss" in rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i]]){
		
		}else{
			rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i]].anvandavalfriakryss=0;
		}
		
		if ("anvandavalfriaenheter" in rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i]]){
		
		}else{
			rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i]].anvandavalfriaenheter=0;
		}
		
		if (avtrubbningskategorier[i] + "extrakryss" in rollperson.anvandenheter.avtrubbning){
			
		}else{
			rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i] + "extrakryss"]=0;
		}
		
		if (avtrubbningskategorier[i] + "krysstotal" in rollperson.anvandenheter.avtrubbning){
			
		}else{
			rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i] + "krysstotal"]=rollperson["avtrubbning" + avtrubbningskategorier[i]] + rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i] + "extrakryss"];
		}
	}
	
	if ("kvarvalfriakryss" in rollperson.anvandenheter.avtrubbning){
		
	}else{
		rollperson.anvandenheter.avtrubbning.kvarvalfriakryss=rollperson.avtrubbningvalfri;
	}
	
	if ("anvandavalfriakryss" in rollperson.anvandenheter.avtrubbning){
		
	}else{
		rollperson.anvandenheter.avtrubbning.anvandavalfriakryss=0;
	}
	
	// Använda enheter till avtrubbning
	for (i=0;i<6;i++){
		if (fardighetsgrupplista[i] in rollperson.anvandenheter.avtrubbning){
			
		}else{
			rollperson.anvandenheter.avtrubbning[fardighetsgrupplista[i]]={};
		}
		
		if ("anvandaenheter" in rollperson.anvandenheter.avtrubbning[fardighetsgrupplista[i]]){
			
		}else{
			rollperson.anvandenheter.avtrubbning[fardighetsgrupplista[i]].anvandaenheter=0;
		}
		
	}
	// Valfria enheter till avtrubbning
	if ("anvandavalfriaenheter" in rollperson.anvandenheter.avtrubbning){
	}else{
		rollperson.anvandenheter.avtrubbning.anvandavalfriaenheter=0;
	}
	
	
	
	
	
	// Mystik & magi
	//console.log("borjaenhetsanvandning, mystikmagi");
	if ("mystikmagi" in rollperson.anvandenheter){
		
	}else{
		rollperson.anvandenheter.mystikmagi={};
	}
	
	for (j=0;j<mystikmagikategorier.length;j++){
		if (mystikmagikategorier[j] + "lista" in rollperson.anvandenheter.mystikmagi){
			
		}else{
			rollperson.anvandenheter.mystikmagi[mystikmagikategorier[j] + "lista"]=[];
		}
		
		if ("kvar" + mystikmagikategorier[j] in rollperson.anvandenheter.mystikmagi){
			
		}else{
			if (mystikmagikategorier[j] in rollperson){
				// Om exvis "mysterier" finns under rollperson
				rollperson.anvandenheter.mystikmagi["kvar" + mystikmagikategorier[j]]=rollperson[mystikmagikategorier[j]];
			}else{
				// Om exvis "mysterier" inte finns under rollperson sätts startvärde 0
				rollperson.anvandenheter.mystikmagi["kvar" + mystikmagikategorier[j]]=0;
			}
		}
		
		if ("anvanda" + mystikmagikategorier[j] in rollperson.anvandenheter.mystikmagi){
			
		}else{
			// Startvärde 0
			rollperson.anvandenheter.mystikmagi["anvanda" + mystikmagikategorier[j]]=0;
			
		}
		
	}
	
	// Använda enheter till mystikmagi
	for (i=0;i<6;i++){
		if (fardighetsgrupplista[i] in rollperson.anvandenheter.mystikmagi){
			
		}else{
			rollperson.anvandenheter.mystikmagi[fardighetsgrupplista[i]]={};
		}
		
		if ("anvandaenheter" in rollperson.anvandenheter.mystikmagi[fardighetsgrupplista[i]]){
			
		}else{
			rollperson.anvandenheter.mystikmagi[fardighetsgrupplista[i]].anvandaenheter=0;
		}
		
	}
	// Valfria enheter till mystikmagi
	if ("anvandavalfriaenheter" in rollperson.anvandenheter.mystikmagi){
	}else{
		rollperson.anvandenheter.mystikmagi.anvandavalfriaenheter=0;
	}
	
	//console.log("borjaenhetsanvandning, slut av funktion");
	
	
	
	return rollperson;
}

function raknaenhetertotal(rollperson, fardighetsnamn){
	//console.log(fardighetsnamn)
	if (fardighetsnamn in rollperson.anvandenheter){
		
	}else{
		rollperson.anvandenheter[fardighetsnamn]={};
		rollperson.anvandenheter[fardighetsnamn].lattlard=0;
		rollperson.anvandenheter[fardighetsnamn].enheter=0;
	}
	rollperson.anvandenheter[fardighetsnamn].enhetertotal=0;
	if ("fardighetsnamn" in rollperson){
		rollperson.anvandenheter[fardighetsnamn].enhetertotal +=rollperson[fardighetsnamn].lattlard + rollperson[fardighetsnamn].grundtarningar + rollperson[fardighetsnamn].enheter;
	}
	
	rollperson.anvandenheter[fardighetsnamn].enhetertotal+= rollperson.anvandenheter[fardighetsnamn].lattlard + rollperson.anvandenheter[fardighetsnamn].enheter;
	
	return rollperson.anvandenheter[fardighetsnamn].enhetertotal;
}


// Sektion I: Enheter inom kategorier

function anvandenhetfardighet(rollperson, fardighetsnamn, enhetssteg, kategori){
	// enhetssteget är 1 för ökning 1 steg och -1 för minskning ett steg
	
	
	if ("anvandenheter" in rollperson){
		
	}else{
		console.log(".anvandenheter skapas");
		 borjaenhetsanvandning(rollperson)
	}
	fardighetsobjekt=hamta_fardighetsobjekt();
	
	if (fardighetsnamn in rollperson.anvandenheter){
		// Färdigheten finns redan under .anvandenheter
	}else{
		// Lägg till färdigheten under .anvandenheter
		rollperson.anvandenheter[fardighetsnamn]={};
		rollperson.anvandenheter[fardighetsnamn].enheter=0;
		rollperson.anvandenheter[fardighetsnamn].lattlard=0;
	}
	
	// Hur hantera svårlärd?
	if(rollperson[fardighetsnamn].lattlard+rollperson.anvandenheter[fardighetsnamn].lattlard>1){
		// Fel
		console.log("dubbelt lättlärd");
	}
	
	var enhetssumma;
	enhetssumma=rollperson[fardighetsnamn].lattlard + rollperson[fardighetsnamn].grundtarningar + rollperson[fardighetsnamn].enheter + rollperson.anvandenheter[fardighetsnamn].lattlard+rollperson.anvandenheter[fardighetsnamn].enheter;
	
	
	if (rollperson[fardighetsnamn].svarlard==1){
		// Gör inget med svårlärd färdighet
	}else{
		if (enhetssteg==1){
			// Färdigheten får ej överstiga 5T6
			if(enhetssumma<0){
				// Fel
			}else if (enhetssumma<8){
				if (rollperson.anvandenheter[kategori].kvarenheter>0){
					// Använd en kategorienhet
					rollperson.anvandenheter[fardighetsnamn].enheter +=1;
					rollperson.anvandenheter[kategori].kvarenheter -=1;
					rollperson.anvandenheter[kategori].anvandaenheter +=1;
					
					aktiv_fardighet=fardighetsnamn;
					// Uppdatera sidan
					//uppdaterafardighetenhet(rollperson, fardighetsnamn);
					//uppdaterafardighetskategorienhet(rollperson, fardighetsobjekt[fardighetsnamn].kategori);
					
				}else if(rollperson.anvandenheter.kvarvalfriaenheter>0){
					// Använd en valfri enhet
					rollperson.anvandenheter[fardighetsnamn].enheter +=1;
					rollperson.anvandenheter[kategori].anvandavalfriaenheter +=1;
					rollperson.anvandenheter.kvarvalfriaenheter -= 1;
					
					aktiv_fardighet=fardighetsnamn;
					
					// Uppdatera sidan
					//uppdaterafardighetenhet(rollperson, fardighetsnamn);
					//uppdaterafardighetskategorienhet(rollperson, fardighetsobjekt[fardighetsnamn].kategori);
					//uppdateravalfriaenheter(rollperson);
				
				}
			}else if(enhetssumma==8){
				// Gör inget, färdigheten har redan 5T6
			}else if(enhetssumma>8){
				// Fel
			}
		}else if(enhetssteg==-1){
			if (rollperson.anvandenheter[fardighetsnamn].enheter<0){
				// Fel
			}else if(rollperson.anvandenheter[fardighetsnamn].enheter==0){
				// Gör inget
			}else{
				
				if(enhetssumma<0){
					// Fel
				}else if (enhetssumma==0){
					// Gör inget
				}else if (enhetssumma<=8){
					
					aktiv_fardighet=fardighetsnamn;
					
					rollperson.anvandenheter[fardighetsnamn].enheter -=1;
					
					
					
					if(rollperson.anvandenheter[kategori].anvandavalfriaenheter>0){
						rollperson.anvandenheter[kategori].anvandavalfriaenheter -=1;
						rollperson.anvandenheter.kvarvalfriaenheter +=1;
						
					}else{
						rollperson.anvandenheter[kategori].kvarenheter +=1;
						rollperson.anvandenheter[kategori].anvandaenheter -=1;

					}
					
					// Uppdatera sidan
					//uppdaterafardighetenhet(rollperson, fardighetsnamn);
					//uppdaterafardighetskategorienhet(rollperson, fardighetsobjekt[fardighetsnamn].kategori);
					//uppdateravalfriaenheter(rollperson);
				}
			}
		}
	}
	//uppdaterafardighetenhet(rollperson, fardighetsnamn);
	//uppdaterafardighetskategorienhet(rollperson, fardighetskategori);
}

function slumpaenhetkategori(rollperson, fardighetskategori){
	var i;
	var j;
	fardighetsobjekt=hamta_fardighetsobjekt();
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	
	var fardighetsnamn="";
	var fardighetvald=0;

	//console.log("slumpaenhetkategori körs med fardighetskategori: " + fardighetskategori);
	
	
	if (rollperson.anvandenheter[fardighetskategori].kvarenheter + rollperson.anvandenheter.kvarvalfriaenheter >=1){
		
		while(fardighetvald==0){
			j=slumpa(fardighetslistaobjekt[fardighetskategori].lista.length)-1;
			fardighetsnamn=fardighetslistaobjekt[fardighetskategori].lista[j];
			
			// Summera enheter, lattlard och grundtärningar från rollperson och rollperson.anvandenheter
			//rollperson.anvandenheter[fardighetsnamn].enhetertotal=rollperson[fardighetsnamn].lattlard + rollperson[fardighetsnamn].grundtarningar + rollperson[fardighetsnamn].enheter + rollperson.anvandenheter[fardighetsnamn].lattlard + rollperson.anvandenheter[fardighetsnamn].enheter){
			rollperson.anvandenheter[fardighetsnamn].enhetertotal=raknaenhetertotal(rollperson,fardighetsnamn);
			if(rollperson.anvandenheter[fardighetsnamn].enhetertotal<8){
				fardighetvald=1;
			}
		
		}
		// Höj den slumpade färdigheten med en enhet
		aktiv_fardighet=fardighetsnamn;
		anvandenhetfardighet(rollperson, fardighetsnamn, 1, fardighetskategori);
	}
	//console.log("slumpaenhetkategori är klar med fardighetskategori: " + fardighetskategori);
	
	return rollperson
	
	
}

function slumparestenkategori(rollperson, fardighetskategori){
	
	if (rollperson.anvandenheter[fardighetskategori].kvarenheter>0){
		// Använd alla kategorienheter, inga valfria
		
		while(rollperson.anvandenheter[fardighetskategori].kvarenheter>0){
			rollperson = slumpaenhetkategori(rollperson, fardighetskategori);
		}
	}else{
		//  Lägg resterande valfria enheter inom kategorin
		while(rollperson.anvandenheter.kvarvalfriaenheter>0){
			rollperson = slumpaenhetkategori(rollperson, fardighetskategori);
		}
	}
	
	aktiv_fardighet="";
}


function nollaenhetkategori(rollperson, fardighetskategori){
	var i;
	fardighetsobjekt=hamta_fardighetsobjekt();
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	
	// "Betala tillbaka" alla kategorienheter
	rollperson.anvandenheter[fardighetskategori].kvarenheter += rollperson.anvandenheter[fardighetskategori].anvandaenheter;
	rollperson.anvandenheter[fardighetskategori].anvandaenheter =0;
	
	// "Betala tillbaka" alla valfria enheter
	rollperson.anvandenheter.kvarvalfriaenheter += rollperson.anvandenheter[fardighetskategori].anvandavalfriaenheter;
	rollperson.anvandenheter.anvandavalfriaenheter -= rollperson.anvandenheter[fardighetskategori].anvandavalfriaenheter;
	rollperson.anvandenheter[fardighetskategori].anvandavalfriaenheter=0;
	
	// Nolla enhet för enhet inom kategorin
	for (i=0;i<fardighetslistaobjekt[fardighetskategori].lista.length;i++){
		if (fardighetslistaobjekt[fardighetskategori].lista[i] in rollperson.anvandenheter){
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetskategori].lista[i]].enheter=0;
			
			if (rollperson.anvandenheter[fardighetslistaobjekt[fardighetskategori].lista[i]].lattlard==1){
				// Ta bort lättlärd
				rollperson=andralattlard(rollperson ,fardighetslistaobjekt[fardighetskategori].lista[i], fardighetskategori, -1);
				/*
				// Om valfria lättlärda använts ska dessa betalas tillbaka
				if (rollperson.anvandenheter[fardighetskategori].anvandavalfrialattlarda>0){
					rollperson.anvandenheter.kvarvalfrialattlarda += 1
					rollperson.anvandenheter.anvandavalfrialattlarda -= 1
					rollperson.anvandenheter[fardighetskategori].anvandavalfrialattlarda-=1;
				// Annars betala tillbaka kategorilättlärd
				}else if(rollperson.anvandenheter[fardighetskategori].anvandalattlarda>0){
					rollperson.anvandenheter[fardighetskategori].kvarlattlarda += 1
					rollperson.anvandenheter[fardighetskategori].anvandalattlarda-=1;
				}
				*/
			}
			
		}else{
			// Om inte färdigheten finns under .anvandenheter så skapas den och nollas
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetskategori].lista[i]]={};
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetskategori].lista[i]].enheter=0;
			rollperson.anvandenheter[fardighetslistaobjekt[fardighetskategori].lista[i]].lattlard=0;
		}
		
		// Betala tillbaka lättlärda
		// Saknas
	}
	
	aktiv_fardighet="";
}

function slumpaenlattlard(rollperson, fardighetsgrupp){
	console.log("slumpaenlattlard körs");
	fardighetslistaobjekt = hamta_fardighetslistaobjekt();
	rpvalmatris = hamta_rpvalmatris();
	fardighetsgrupplista = fardighetslistaobjekt.fardighetsgrupplista;
	
	valdkategori =0;
	valdfardighet=0;
	raknavanliga =0;
	var k=0;
	var m=0;
	
	var p=0;
	if (fardighetsgrupp == "valfri"){
		// Kollar så att det finns neutrala färdigheter inom kategorin
		while (valdkategori ==0){
			console.log("räknare p: " + p.toString());
			p +=1;
			raknavanliga=0;
			k = slumpa(6) - 1;
				for (m=0; m< fardighetslistaobjekt[fardighetsgrupplista[k]].lista.length;m++){
					if (rollperson[fardighetslistaobjekt[fardighetsgrupplista[k]].lista[m]].lattlard + rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupplista[k]].lista[m]].lattlard == 0){
						raknavanliga = raknavanliga+1;
					}
				}
			if (raknavanliga ==0){
				// Om raknavanliga är noll kan kategorin inte väljas
			}else if(raknavanliga >= 1){
				fardighetsgrupp=fardighetsgrupplista[k];
				valdkategori=1;	
			}
		}
	}else{
		valdkategori==1;
	}
	
	
	for (m=0; m< fardighetslistaobjekt[fardighetsgrupplista[k]].lista.length;m++){
		if (rollperson[fardighetslistaobjekt[fardighetsgrupplista[k]].lista[m]].lattlard == 0){
			raknavanliga = raknavanliga+1;
		}
	}
	if (raknavanliga ==0){
			// Om raknavanliga är noll kan kategorin inte väljas
	}else if(raknavanliga >= 1){
		valdkategori=1;	
	}
	if (valdkategori==1){
		while (valdfardighet == 0){
			// Slumpar en fardighet till att bli lattlard inom kateforin
			m=slumpa(fardighetslistaobjekt[fardighetsgrupp].lista.length-1);
		
			if (rollperson[fardighetslistaobjekt[fardighetsgrupp].lista[m]].lattlard == 0){
				//if (rollperson[fardighetslistaobjekt[fardighetsgrupp].lista[m]].svarlard == 0){
					if (rollperson.anvandenheter[fardighetslistaobjekt[fardighetsgrupp].lista[m]].lattlard == 0){
						
						/*
						if (rollperson.anvandenheter[fardighetsgrupp].kvarlattlarda>0){
							rollperson.anvandenheter[fardighetsgrupp].kvarlattlarda -=1;
						}else{
							rollperson.anvandenheter.kvarvalfrialattlarda -=1;
						}
						*/
						valdfardighet=1;
						
						rollperson=andralattlard(rollperson, fardighetslistaobjekt[fardighetsgrupp].lista[m], fardighetsgrupp, 1);
						aktiv_fardighet=fardighetslistaobjekt[fardighetsgrupp].lista[m];
						
					
						
					}
					
			}
		}
	
	}
	
	return rollperson
	
}

function andralattlard(rollperson ,fardighetsnamn, kategori, steg){
	if (steg==1){
		if (rollperson.anvandenheter.kvarvalfrialattlarda+rollperson.anvandenheter[kategori].kvarlattlarda>0){
			// Kolla kvarvarande lättlärda
			if (rollperson[fardighetsnamn].lattlard==0 && rollperson.anvandenheter[fardighetsnamn].lattlard==0){
				rollperson.anvandenheter[fardighetsnamn].lattlard=1;
				rollperson.anvandenheter[fardighetsnamn].enhetertotal=raknaenhetertotal(rollperson,fardighetsnamn);
				
				if (rollperson.anvandenheter[kategori].kvarlattlarda>0){
					// Använd kategorilättlärd
					rollperson.anvandenheter[kategori].kvarlattlarda -=1;
					rollperson.anvandenheter[kategori].anvandalattlarda +=1;
				}else if (rollperson.anvandenheter.kvarvalfrialattlarda>0){
					// Använd valfrilättlärd
					rollperson.anvandenheter.kvarvalfrialattlarda -=1;
					rollperson.anvandenheter.anvandavalfrialattlarda +=1;
					rollperson.anvandenheter[kategori].anvandavalfrialattlarda +=1;
				}else{
					//fel
				}
				
			}
			// prio: Använd kategori - använd valfri
		}
		
		
	}else if (steg==-1){
		// ta bort lättlärd
		if (rollperson[fardighetsnamn].lattlard==0 && rollperson.anvandenheter[fardighetsnamn].lattlard==1){
			rollperson.anvandenheter[fardighetsnamn].lattlard=0;
			rollperson.anvandenheter[fardighetsnamn].enhetertotal=raknaenhetertotal(rollperson,fardighetsnamn);
			
			// prio: Betala tillbaka valfri - betala tillbaka kategori
			if (rollperson.anvandenheter.anvandavalfrialattlarda>0){
				// Betala tillbaka valfrilättlärd
				rollperson.anvandenheter.kvarvalfrialattlarda +=1;
				rollperson.anvandenheter.anvandavalfrialattlarda -=1;
				rollperson.anvandenheter[kategori].anvandavalfrialattlarda -=1;
			}else if(rollperson.anvandenheter[kategori].anvandalattlarda>0){
				// Betala tillbaka kategorilättlärd
				rollperson.anvandenheter[kategori].kvarlattlarda +=1;
				rollperson.anvandenheter[kategori].anvandalattlarda -=1;
			}
		
		}
		
		
	}
	
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(kategori);
	return rollperson
}

function anropaanvandenhetfardighet(rollperson, fardighetsnamn, enhetssteg, kategori){
	//console.log("I anropananvandenhetfardighet: rollpersonens bakgrund är: " + rollperson.bakgrund.rubrik);
	//console.log("I anropananvandenhetfardighet: aktivt fardighetsnamn är: " + fardighetsnamn);
	//console.log("I anropananvandenhetfardighet: enhetssteg är: " + enhetssteg);
	//console.log("I anropananvandenhetfardighet: aktiv kategori är: " + kategori);
	
	
	rollperson=anvandenhetfardighet(rollperson, fardighetsnamn, enhetssteg, kategori);
	
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(kategori);
}

function anropaslumpaenhetkategori(rollperson, kategori){

	rollperson=slumpaenhetkategori(rollperson, kategori);
	
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(kategori);
}

function anropaslumparestenkategori(rollperson, kategori){
	rollperson=slumparestenkategori(rollperson, kategori);
	
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(kategori);
}

function anropanollakategori(rollperson,kategori){
	rollperson=nollaenhetkategori(rollperson, kategori);
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(kategori);
}

function anropaslumpalattlarda(rollperson,kategori){
	
	// saknas
	// slumpa en eller resten?
	
	rollperson=slumpaenlattlard(rollperson, kategori);
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(kategori);
}

function anropaandralattlard(rollperson, fardighetsnamn, kategori, steg){
	rollperson=andralattlard(rollperson,fardighetsnamn, kategori, steg);
	
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(kategori);
}


// Sektion II: Språk
function slumpasprak(rollperson){
	// Köper ett nytt språk på slump
	
	
	// saknas
	var fardighetsnamn="";
	var nyovrigfardighetvald=0;
	
	var k=0;
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	
	while (nyovrigfardighetvald==0){
		k=slumpa(fardighetslistaobjekt["sprakfardigheter"].lista.length)-1;
		
		//if (listindex(rollperson.anvandenheter.allasprakskrift,fardighetslistaobjekt["sprakfardigheter"].lista[k])>=0){
		if (rollperson.anvandenheter.allasprakskrift.indexOf(fardighetslistaobjekt["sprakfardigheter"].lista[k])>=0){


		// Den slumpade färdigheten finns redan
		}else{
			fardighetsnamn=fardighetslistaobjekt["sprakfardigheter"].lista[k];
			nyovrigfardighetvald=1;
		}
	}
	if (nyovrigfardighetvald==1){
		if (rollperson.anvandenheter.sprakfardigheter.kvarenheter+rollperson.anvandenheter.kunskapsfardigheter.kvarenheter+rollperson.anvandenheter.kvarvalfriaenheter>=2){
			
			rollperson=laggtillsprak(rollperson,fardighetsnamn);
		}
	}
	
	
	
	return rollperson
	
}

function laggtillsprak(rollperson, fardighetsnamn){
	// Lägg till färdighet i lista
	rollperson.anvandenheter.sprakskrift.push(fardighetsnamn);
	rollperson.anvandenheter.allasprakskrift=rollperson.sprakskrift.concat(rollperson.anvandenheter.sprakskrift);
	
	// Betala en valfri enhet
	if (rollperson.anvandenheter.sprakfardigheter.kvarenheter>=2){
		
		// Använd två språkenheter
		rollperson.anvandenheter.sprakfardigheter.kvarenheter-=2;
		rollperson.anvandenheter.sprakfardigheter.anvandaenheter+=2
		
	}else if(rollperson.anvandenheter.sprakfardigheter.kvarenheter==1 && rollperson.anvandenheter.kunskapsfardigheter.kvarenheter>=1){
		
	// Använd en språkenhet och en kunskapsenhet
		rollperson.anvandenheter.sprakfardigheter.kvarenheter-=1;
		rollperson.anvandenheter.sprakfardigheter.anvandaenheter+=1
	
		rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter+=1;
		rollperson.anvandenheter.kunskapsfardigheter.kvarenheter-=1;
		rollperson.anvandenheter.kunskapsfardigheter.anvandaenheterovrigt+=1;
		
	}else if(rollperson.anvandenheter.sprakfardigheter.kvarenheter==1 && rollperson.anvandenheter.kvarvalfriaenheter>=1){
		
	// Använd en språkenhet och en valfri
		rollperson.anvandenheter.sprakfardigheter.kvarenheter-=1;
		rollperson.anvandenheter.sprakfardigheter.anvandaenheter+=1;
		
		rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter +=1;
		rollperson.anvandenheter.kvarvalfriaenheter -=1;
		rollperson.anvandenheter.anvandavalfriaenheter +=1
		
	}else if(rollperson.anvandenheter.kunskapsfardigheter.kvarenheter>=2){
		
		// Använd två kunskap
		rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter+=2;
		rollperson.anvandenheter.kunskapsfardigheter.kvarenheter-=2;
		rollperson.anvandenheter.kunskapsfardigheter.anvandaenheterovrigt+=2;
		
	}else if(rollperson.anvandenheter.kunskapsfardigheter.kvarenheter==1 && rollperson.anvandenheter.kvarvalfriaenheter>=1){
		
		// Använd en kunskap och en valfri
		rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter+=1;
		rollperson.anvandenheter.kunskapsfardigheter.kvarenheter-=1;
		rollperson.anvandenheter.kunskapsfardigheter.anvandaenheterovrigt+=1;
		
		rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter +=1;
		rollperson.anvandenheter.kvarvalfriaenheter -=1;
		rollperson.anvandenheter.anvandavalfriaenheter +=1;
		
	}else if(rollperson.anvandenheter.kvarvalfriaenheter>=2){
		
		// Använd två valfria
		rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter +=2;
		rollperson.anvandenheter.kvarvalfriaenheter -=2;
		rollperson.anvandenheter.anvandavalfriaenheter +=2
	}else{
		console.log("Språk kan ej köpas");
	}
	
	
	// Summera enheter på färdigheten
	rollperson.anvandenheter[fardighetsnamn]={};
	rollperson.anvandenheter[fardighetsnamn].enheter=2;
	rollperson.anvandenheter[fardighetsnamn].enhetertotal=raknaenhetertotal(rollperson,rollperson.anvandenheter[fardighetsnamn]);
	
	return rollperson
}

function tabortsprak(rollperson, sprak){
	// Kollar index för språket
	if (rollperson.anvandenheter.sprakskrift.indexOf(sprak)>=0){
		// Språket finns och kan tas bort
		rollperson.anvandenheter.sprakskrift.splice(rollperson.anvandenheter.sprakskrift.indexOf(sprak),1);
		rollperson.anvandenheter.allasprakskrift=rollperson.sprakskrift.concat(rollperson.anvandenheter.sprakskrift);
		// Prioordning: betala tillbaka: valfri enhet - kunskapsenhet - språkenhet
		
		if(rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter>=2){
			// 2 Valfria enheter
			rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter -=2;
			rollperson.anvandenheter.anvandavalfriaenheter -=2;
			rollperson.anvandenheter.kvarvalfriaenheter +=2;
		}else if(rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter==1 && rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter>=1){
			
			// 1 valfri och en kunskap
			rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter -=1;
			rollperson.anvandenheter.anvandavalfriaenheter -=1;
			rollperson.anvandenheter.kvarvalfriaenheter +=1;
			
			rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter -=1;
			rollperson.anvandenheter.kunskapsfardigheter.kvarenheter +=1;
			rollperson.anvandenheter.kunskapsfardigheter.anvandaenheterovrigt -=1;
			
		}else if(rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter >= 2){
			
			// 2 Kunskapsenheter
			rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter -=2;
			rollperson.anvandenheter.kunskapsfardigheter.kvarenheter +=2;
			rollperson.anvandenheter.kunskapsfardigheter.anvandaenheterovrigt -=2;
			
		}else if(rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter==1 && rollperson.anvandenheter.sprakfardigheter.anvandaenheter>=1){
			
			// 1 valfri och en språk
			rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter -=1;
			rollperson.anvandenheter.anvandavalfriaenheter -=1;
			rollperson.anvandenheter.kvarvalfriaenheter +=1;
			
			rollperson.anvandenheter.sprakfardigheter.anvandaenheter -=1;
			rollperson.anvandenheter.sprakfardigheter.kvarenheter +=1;
			
		}else if(rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaaenheter==1 && rollperson.anvandenheter.sprakfardigheter.anvandaenheter>=1){
			// 1 kunskap och en språk
			
			rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter -=1;
			rollperson.anvandenheter.kunskapsfardigheter.kvarenheter +=1;
			rollperson.anvandenheter.kunskapsfardigheter.anvandaenheterovrigt -=1;
			
			rollperson.anvandenheter.sprakfardigheter.anvandaenheter -=1;
			rollperson.anvandenheter.sprakfardigheter.kvarenheter +=1;
		

		}else if (rollperson.anvandenheter.sprakfardigheter.anvandaenheter >= 2){
			
			//Språkenheter
			rollperson.anvandenheter.sprakfardigheter.anvandaenheter -=2;
			rollperson.anvandenheter.sprakfardigheter.kvarenheter +=2;
		}else{
			console.log("fel med språkborttagning");
		}	
		
	
	}else{
		// fel
	}
	return rollperson
}

function tabortallasprak(rollperson){
	
	var i;
	// Loopa igenom listan, nolla varje färdighet
	for (i=0;i<rollperson.anvandenheter.sprakskrift.length;i++){
		rollperson.anvandenheter[rollperson.anvandenheter.sprakskrift[i]].enheter=0;
	}
	// Töm listan
	rollperson.anvandenheter.sprakskrift=[];
	rollperson.anvandenheter.allasprakskrift=rollperson.sprakskrift.concat(rollperson.anvandenheter.sprakskrift);
	
	
	// Valfria enheter
	rollperson.anvandenheter.anvandavalfriaenheter -= rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter;
	rollperson.anvandenheter.kvarvalfriaenheter += rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter;
	
	rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter =0;
	
	// Kunskapsenheter
	rollperson.anvandenheter.kunskapsfardigheter.kvarenheter += rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter;
	rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter = 0;
	
	//Språkenheter
	rollperson.anvandenheter.sprakfardigheter.kvarenheter += rollperson.anvandenheter.sprakfardigheter.anvandaenheter;
	rollperson.anvandenheter.sprakfardigheter.anvandaenheter = 0;

	return rollperson
}

function slumpaomsprak(rollperson,fardighetsnamn){
	//Slumpa om ett språk
	
	// Ta bort ett köpt språk
	// Ersätt med ett nytt
	var i;
	var j;
	var k;
	var nysprakfardighet;
	var nysprakfardighetvald=0;
	
	
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	
	i=rollperson.anvandenheter.sprakskrift.indexOf(fardighetsnamn);
	
	while (nysprakfardighetvald==0){
		j=6;
		k=slumpa(fardighetslistaobjekt[fardighetsgrupplista[j]].lista.length)-1;
		if (rollperson.anvandenheter.allasprakskrift.indexOf(fardighetslistaobjekt[fardighetsgrupplista[j]].lista[k])>=0){
			// Den slumpade färdigheten finns redan
		}else{
			nysprakfardighet=fardighetslistaobjekt[fardighetsgrupplista[j]].lista[k];
			nysprakfardighetvald=1;
			
			
		}
	}	
	
	console.log("Gammalt språk: " + fardighetsnamn);
	console.log("Nytt språk: " + nysprakfardighet);
	
	
	
	
	
	// Växlar enheter
	rollperson.anvandenheter[nysprakfardighet].enheter=rollperson.anvandenheter[fardighetsnamn].enheter;
	rollperson.anvandenheter[fardighetsnamn].enheter=0;
	
	// Summerar enheter
	rollperson.anvandenheter[nysprakfardighet].enhetertotal=raknaenhetertotal(rollperson,rollperson.anvandenheter[nysprakfardighet]);
	rollperson.anvandenheter[fardighetsnamn].enhetertotal=raknaenhetertotal(rollperson,rollperson.anvandenheter[fardighetsnamn]);
	
	
	console.log("Språklista_alla innan ersättning: " + rollperson.anvandenheter.allasprakskrift)
	console.log("Språklista_köpta innan ersättning: " + rollperson.anvandenheter.sprakskrift)
	
	
	// Ersätt i färdighetslistan
	rollperson.anvandenheter.sprakskrift[i]=nysprakfardighet;
	
	rollperson.anvandenheter.allasprakskrift=rollperson.sprakskrift.concat(rollperson.anvandenheter.sprakskrift);
	
	console.log("Språklista_alla efter ersättning: " + rollperson.anvandenheter.allasprakskrift)
	console.log("Språklista_köpta efter ersättning: " + rollperson.anvandenheter.sprakskrift)
	
	
	// saknas
	
	return rollperson
}

function anropaslumpasprak(rollperson){
	if (rollperson.anvandenheter.sprakfardigheter.kvarenheter+rollperson.anvandenheter.kunskapsfardigheter.kvarenheter+rollperson.anvandenheter.kvarvalfriaenheter>=2){
			
		rollperson=slumpasprak(rollperson);
	}
	
	kategori="sprak";
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(kategori);
}

function anropatabortallasprak(rollperson){
	rollperson=tabortallasprak(rollperson);
	
	kategori="sprak"; 
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter("sprak");
}

function anropatabortsprak(rollperson,fardighetsnamn){
	rollperson=tabortsprak(rollperson,fardighetsnamn);
	
	kategori="sprak"; 
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter("sprak");
}

function anropaslumpaomsprak(rollperson,fardighetsnamn){
	rollperson=slumpaomsprak(rollperson,fardighetsnamn);
	
	kategori="sprak"; 
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter("sprak");
}

// Sektion III: Övriga färdigheter

function slumpahojningovrigfardighet(rollperson){
	// saknas
	
	var valdfardighet=0;
	var summaenhetertotal;
	var i
	var fardighetsnamn="";
	
	while (valdfardighet==0){
		i=slumpa(rollperson.anvandenheter.allaovrigafardighetermedtarningar.length-1);
		// Kollar så att färdigheten inte är maxad
		if (rollperson.anvandenheter[rollperson.anvandenheter.allaovrigafardighetermedtarningar[i]].enhetertotal<8){
			fardighetsnamn=rollperson.anvandenheter.allaovrigafardighetermedtarningar[i];
			valdfardighet=1;
		}
	}
	
	
	rollperson.anvandenheter[fardighetsnamn].enheter +=1;
	rollperson.anvandenheter[fardighetsnamn].enhetertotal=raknaenhetertotal(rollperson,fardighetsnamn);
	
	// Använda valfria
	rollperson.anvandenheter.anvandavalfriaenheter +=1;
	rollperson.anvandenheter.kvarvalfriaenheter -=1;
	rollperson.anvandenheter.ovrigafardigheter.anvandavalfriaenheter +=1;
	
	rollperson.anvandenheter.allaovrigafardighetermedtarningar=rollperson.ovrigafardighetermedtarningar.concat(rollperson.anvandenheter.ovrigafardighetermedtarningar);
	
	// Höj en av befintliga övriga färdigheter en enhet
	return rollperson
}

function slumpanyovrigfardighet(rollperson,kategori){
	// Slumpa en ny övrig färdighet inom vald kategori (expertis, hantverk, kännetecken)
	
	var fardighetsnamn="";
	var nyovrigfardighetvald=0;
	
	var k=0;
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	
	while (nyovrigfardighetvald==0){
		k=slumpa(fardighetslistaobjekt[kategori + "fardigheter"].lista.length)-1;
		
		if (rollperson.anvandenheter.allaovrigafardighetermedtarningar.indexOf(fardighetslistaobjekt[kategori + "fardigheter"].lista[k])>=0){
			// Den slumpade färdigheten finns redan
		}else{
			fardighetsnamn=fardighetslistaobjekt[kategori + "fardigheter"].lista[k];
			nyovrigfardighetvald=1;
		}
	}
	
	// Lägg till färdighet i lista
	rollperson.anvandenheter.ovrigafardighetermedtarningar.push(fardighetsnamn);
	rollperson.anvandenheter.allaovrigafardighetermedtarningar=rollperson.ovrigafardighetermedtarningar.concat(rollperson.anvandenheter.ovrigafardighetermedtarningar);
	
	// Betala en valfri enhet
	rollperson.anvandenheter.ovrigafardigheter.anvandavalfriaenheter +=1;
	rollperson.anvandenheter.anvandavalfriaenheter+=1;
	rollperson.anvandenheter.kvarvalfriaenheter-=1;
	
	// Summera enheter på färdigheten
	rollperson.anvandenheter[fardighetsnamn]={};
	rollperson.anvandenheter[fardighetsnamn].enheter=1;
	rollperson.anvandenheter[fardighetsnamn].enhetertotal=raknaenhetertotal(rollperson,rollperson.anvandenheter[fardighetsnamn]);
	
	return rollperson
}

function slumpaomovrigfardighet(rollperson,gammalovrigfardighet){
	// Ta bort en köpt övrig färdighet
	// Ersätt med en ny inom samma kategori, samma värde
	var i;
	var j;
	var k;
	var nyovrigfardighet;
	var nyovrigfardighetvald=0;
	
	
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	
	i=rollperson.anvandenheter.ovrigafardighetermedtarningar.indexOf(gammalovrigfardighet);
	
	while (nyovrigfardighetvald==0){
		// Skulle kunna ändras så att ny färdighet slumpas från samma tabell som den gamla
		j=slumpa(3)+6;
		k=slumpa(fardighetslistaobjekt[fardighetsgrupplista[j]].lista.length)-1;
		if (rollperson.anvandenheter.allaovrigafardighetermedtarningar.indexOf(fardighetslistaobjekt[fardighetsgrupplista[j]].lista[k])>=0){
			// Den slumpade färdigheten finns redan
		}else{
			nyovrigfardighet=fardighetslistaobjekt[fardighetsgrupplista[j]].lista[k];
			nyovrigfardighetvald=1;
			
			
		}
	}	
	
	if (nyovrigfardighetvald==1){
		rollperson=ersattovrigfardighet(rollperson,gammalovrigfardighet,nyovrigfardighet);
	}
	
	return rollperson
}

function ersattovrigfardighet(rollperson,gammalovrigfardighet,nyovrigfardighet){
	
	var i;
	i=rollperson.anvandenheter.ovrigafardighetermedtarningar.indexOf(gammalovrigfardighet);
	
	// Växlar enheter
	rollperson.anvandenheter[nyovrigfardighet].enheter=rollperson.anvandenheter[gammalovrigfardighet].enheter;
	rollperson.anvandenheter[gammalovrigfardighet].enheter=0;
	
	// Summerar enheter
	rollperson.anvandenheter[nyovrigfardighet].enhetertotal=raknaenhetertotal(rollperson,rollperson.anvandenheter[nyovrigfardighet]);
	rollperson.anvandenheter[gammalovrigfardighet].enhetertotal=raknaenhetertotal(rollperson,rollperson.anvandenheter[gammalovrigfardighet]);
	
	
	// Ersätt i färdighetslistan
	rollperson.anvandenheter.ovrigafardighetermedtarningar[i]=nyovrigfardighet;
	
	rollperson.anvandenheter.allaovrigafardighetermedtarningar=rollperson.ovrigafardighetermedtarningar.concat(rollperson.anvandenheter.ovrigafardighetermedtarningar);
	
	return rollperson
}

function nollaovrigafardigheter(rollperson){
	var i;
	
	fardighetslistaobjekt = hamta_fardighetslistaobjekt();
	fardighetsgrupplista = fardighetslistaobjekt.fardighetsgrupplista;
	
	/*
	// Loopa igenom listan, nolla varje tillagd färdighet
	for (i=0;i<rollperson.anvandenheter.ovrigafardighetermedtarningar.length;i++){
		rollperson.anvandenheter[rollperson.anvandenheter.ovrigafardighetermedtarningar[i]].enheter=0;
		rollperson.anvandenheter[rollperson.anvandenheter.ovrigafardighetermedtarningar[i]].enhetertotal=raknaenhetertotal(rollperson,rollperson.anvandenheter[rollperson.anvandenheter.ovrigafardighetermedtarningar[i]]);
	
	}
	
	// Loopa igenom listan, nolla varje ökad färdighet
	for (i=0;i<rollperson.ovrigafardighetermedtarningar.length;i++){
		rollperson.anvandenheter[rollperson.ovrigafardighetermedtarningar[i]].enheter=0;
		rollperson.anvandenheter[rollperson.ovrigafardighetermedtarningar[i]].enhetertotal=raknaenhetertotal(rollperson,rollperson.anvandenheter[rollperson.ovrigafardighetermedtarningar[i]]);
	}
	*/
	
	// Loopa igenom listan, nolla varje tillagd och ökad färdighet
	for (i=0;i<rollperson.anvandenheter.allaovrigafardighetermedtarningar.length;i++){
		rollperson.anvandenheter[rollperson.anvandenheter.allaovrigafardighetermedtarningar[i]].enheter=0;
		rollperson.anvandenheter[rollperson.anvandenheter.allaovrigafardighetermedtarningar[i]].enhetertotal=raknaenhetertotal(rollperson,rollperson.anvandenheter[rollperson.anvandenheter.allaovrigafardighetermedtarningar[i]]);
	
	}
	
	
	
	// Töm listan
	rollperson.anvandenheter.ovrigafardighetermedtarningar=[];
	
	rollperson.anvandenheter.allaovrigafardighetermedtarningar=rollperson.ovrigafardighetermedtarningar.concat(rollperson.anvandenheter.ovrigafardighetermedtarningar);
	
	
	// Valfria enheter
	rollperson.anvandenheter.anvandavalfriaenheter -= rollperson.anvandenheter.ovrigafardigheter.anvandavalfriaenheter;
	rollperson.anvandenheter.kvarvalfriaenheter += rollperson.anvandenheter.ovrigafardigheter.anvandavalfriaenheter;
	
	rollperson.anvandenheter.ovrigafardigheter.anvandavalfriaenheter =0;

	/*
	// Bättre att summera bara på rollperson.anvandenheter.ovrigafardigheter
	for (i=7;i<10;i++){
		// Övriga färdigheter
		
		rollperson.anvandenheter.kvarvalfriaenheter += rollperson.anvandenheter[fardighetsgrupplista[i]].anvandavalfriaenheter;
		rollperson.anvandenheter.anvandavalfriaenheter -= rollperson.anvandenheter[fardighetsgrupplista[i]].anvandavalfriaenheter;
		rollperson.anvandenheter[fardighetsgrupplista[i]].anvandavalfriaenheter=0;
		
	}
	*/
	
	return rollperson
}

function anropaslumpaovrigfardighet(rollperson,kategori){
	
	if (rollperson.anvandenheter.kvarvalfriaenheter>0){
		rollperson=slumpanyovrigfardighet(rollperson,kategori);
	
		//gui
		skrivanvandenheterkategorier()
		skrivanvandenheter(aktiv_kategori);	

	}
	
}

function anropaslumpaomovrigfardighet(rollperson,fardighetsnamn){
	console.log("anropaslumpaomovrigfardighet körs");
	rollperson=slumpaomovrigfardighet(rollperson,fardighetsnamn);
	
	//gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(aktiv_kategori);	
}

function anropanollaovrigafardigheter(rollperson){
	rollperson=nollaovrigafardigheter(rollperson);
	//gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(aktiv_kategori);	
	
}


// Sektion IV: Avtrubbning

function andraavtrubbning(rollperson, kategori, steg){
	
	var avtrubbningskategorier=["utsatthet","vald","overnaturligt"];
	
	var avtrubbningsfardighetsgrupper=["socialafardigheter","stridsfardigheter","mystikfardigheter"];
	
	var i;
	
	//console.log("Testar slump")
	testtal=slumpa(7);
	//console.log("Testtal: " + testtal);
	
	i=avtrubbningskategorier.indexOf(kategori);
	
	if (steg==1){
		// Inte öka över 5
		if (rollperson.anvandenheter.avtrubbning[kategori + "krysstotal"] <5){
			//Prioordning: valfritt kryss -> kategorienhet -> valfri enhet (två enheter per kryss)
			if (rollperson.anvandenheter.avtrubbning.kvarvalfriakryss>0){
				rollperson.anvandenheter.avtrubbning.kvarvalfriakryss -=1;
				rollperson.anvandenheter.avtrubbning.anvandavalfriakryss +=1;
				rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriakryss +=1;
				
				rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] +=1;
				// summera kryssen
				rollperson.anvandenheter.avtrubbning[kategori + "krysstotal"] =rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] + rollperson["avtrubbning" + kategori];
			// kolla kategorienhet
			}else if (rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].kvarenheter==1){
				if (rollperson.anvandenheter.kvarvalfriaenheter>=1){
					// Använd en färdighetsgruppenhet och en valfri
					//console.log("I andraavtrubbning. Använd en färdighetsgruppenhet: " + avtrubbningsfardighetsgrupper[i]  +" och en valfri")
					//console.log("Antal använda färdighetsgruppenheter innan: " + rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter);
					//console.log("Antal använda valfria på " + avtrubbningskategorier[i] + " innan: " + rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriaenheter);
					
					rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].kvarenheter -=1;
					rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter +=1;
					rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].anvandaenheterovrigt +=1;
					
					
					rollperson.anvandenheter.kvarvalfriaenheter -=1;
					rollperson.anvandenheter.avtrubbning.anvandavalfriaenheter +=1;
					rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriaenheter +=1;
					
					
					rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] +=1;
					rollperson.anvandenheter.avtrubbning[kategori + "krysstotal"] =rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] + rollperson["avtrubbning" + kategori];
					
					//console.log("Antal använda färdighetsgruppenheter efter: " + rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter);
					//console.log("Antal använda valfria på " + avtrubbningskategorier[i] + " efter: " + rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriaenheter);
					
				}
			}else if (rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].kvarenheter>=2){
				// Använd två färdighetsgruppenheter för ett kryss
				rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].kvarenheter -=2;
				rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter +=2;
				rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].anvandaenheterovrigt +=2;
				
				//console.log("Använd två kategorienheter" + avtrubbningsfardighetsgrupper[i])
				//console.log("rollperson.anvandenheter.avtrubbning[" + avtrubbningsfardighetsgrupper[i] + "].anvandaenheter" + ": " + rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter);
				rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] +=1;
				rollperson.anvandenheter.avtrubbning[kategori + "krysstotal"] =rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] + rollperson["avtrubbning" + kategori];

			
			
			}else if (rollperson.anvandenheter.kvarvalfriaenheter>=2){
				// Använd två valfria enheter
				rollperson.anvandenheter.kvarvalfriaenheter -=2;
				rollperson.anvandenheter.avtrubbning.anvandavalfriaenheter +=2;
				rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriaenheter +=2;
									
				
				rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] +=1;
				rollperson.anvandenheter.avtrubbning[kategori + "krysstotal"] =rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] + rollperson["avtrubbning" + kategori];

			
			
			}
			
		}else{
			// Ökas ej över 5
		}
	}else if(steg==-1){
		if (rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] >=1){
			// Prioordning: Betala tillbaka valfria, kategorienhet, valfritt kryss
			if (rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriaenheter>=2){
				
				rollperson.anvandenheter.kvarvalfriaenheter +=2;
				rollperson.anvandenheter.avtrubbning.anvandavalfriaenheter -=2;
				rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriaenheter -=2;
					
				rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] -=1;
				rollperson.anvandenheter.avtrubbning[kategori + "krysstotal"] =rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] + rollperson["avtrubbning" + kategori];

			}else if (rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriaenheter==1){
				if (rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter >=1){
					// Betala tillbaka en färdighetsgruppenhet och en valfri
					
					rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].kvarenheter +=1;
					rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter -=1;
					rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].anvandaenheterovrigt -=1;
					
					rollperson.anvandenheter.kvarvalfriaenheter +=1;
					rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriaenheter -=1;
					rollperson.anvandenheter.avtrubbning.anvandavalfriaenheter -=1;
					
					rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] -=1;
					rollperson.anvandenheter.avtrubbning[kategori + "krysstotal"] =rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] + rollperson["avtrubbning" + kategori];

				}
					
			}else if(rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter >=2){
				// Betala tillbaka två färdighetsgruppenheter
				rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].kvarenheter +=2;
				rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter -=2;
				rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].anvandaenheterovrigt -=2;
				
				rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] -=1;
				rollperson.anvandenheter.avtrubbning[kategori + "krysstotal"] =rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] + rollperson["avtrubbning" + kategori];

			}else if(rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriakryss>0){
				// Betala tillbaka ett valfritt avtrubbningskryss
				rollperson.anvandenheter.avtrubbning.kvarvalfriakryss +=1;
				rollperson.anvandenheter.avtrubbning.anvandavalfriakryss -=1;
				rollperson.anvandenheter.avtrubbning[kategori].anvandavalfriakryss -=1;
				
				rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] -=1;
				rollperson.anvandenheter.avtrubbning[kategori + "krysstotal"] =rollperson.anvandenheter.avtrubbning[kategori + "extrakryss"] + rollperson["avtrubbning" + kategori];
				
			}
		}else{
			// Minska inte under startnivå
		}
	}
	return rollperson
}

function slumpaavtrubbning(rollperson){
	var i;
	var avtrubbningskategorier=["utsatthet","vald","overnaturligt"];
	var avtrubbningsfardighetsgrupper=["socialafardigheter","stridsfardigheter","mystikfardigheter"];
	
	var kategorivald=0;
	
	var avtrubbningskryssmojligt=0;
	var summakryss=0;
	// För att avtrubbning ska kunna höjas måste det finnas antingen ett valfritt kryss eller två tillgängliga enheter
	
	console.log("I slumpaavtrubbning, innan forloop");
	
	
	
	for (i=0;i<avtrubbningskategorier.length;i++){
		//Summerar kryss
		summakryss += rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i] + "krysstotal"];
		
		// Undersöker om höjning är möjlig
		if (rollperson.anvandenheter.kvarvalfriaenheter + rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].kvarenheter >=2){
			if (rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i] + "krysstotal"]<5){
				avtrubbningskryssmojligt=1;
			}
		}
	}
	console.log("I slumpaavtrubbning, efter forloop");
	
	if (rollperson.anvandenheter.avtrubbning.kvarvalfriakryss >=1){
		if (summakryss <5*avtrubbningskategorier.length){
			avtrubbningskryssmojligt=1;
		}
	}
	
	console.log("I slumpaavtrubbning, innan höjning");
	// Höjer endast om höjning är möjlig
	if (avtrubbningskryssmojligt==1){
		
		while(kategorivald==0){
		
			i=slumpa(avtrubbningskategorier.length)-1;
			if (rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i] + "krysstotal"]<5){
				if (rollperson.anvandenheter.avtrubbning.kvarvalfriakryss >=1){
					kategorivald=1;
				}else if (rollperson.anvandenheter.kvarvalfriaenheter + rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].kvarenheter >=2){
					kategorivald=1;
				}
						
			}
		}
		
		rollperson=andraavtrubbning(rollperson, avtrubbningskategorier[i], 1);
		
	}else{
		// Avtrubbning kan ej höjas
	}
	console.log("I slumpaavtrubbning, efter höjning");
	
	return rollperson
}

function nollaavtrubbning(rollperson){
	var i;
	var avtrubbningskategorier=["utsatthet","vald","overnaturligt"];
	var avtrubbningsfardighetsgrupper=["socialafardigheter","stridsfardigheter","mystikfardigheter"];
	
	// Betalar tillbaka valfria kryss
	rollperson.anvandenheter.avtrubbning.kvarvalfriakryss += rollperson.anvandenheter.avtrubbning.anvandavalfriakryss;
	rollperson.anvandenheter.avtrubbning.anvandavalfriakryss =0;
	
	// Betalar tillbaka valfria enheter
	rollperson.anvandenheter.kvarvalfriaenheter +=rollperson.anvandenheter.avtrubbning.anvandavalfriaenheter;
	rollperson.anvandenheter.avtrubbning.anvandavalfriaenheter =0;
	for (i=0;i<avtrubbningskategorier.length;i++){
		rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i]].anvandavalfriaenheter =0;
	}		
	
	
	for (i=0;i<avtrubbningskategorier.length;i++){
		
		// Betalar tillbaka kategorienheter
		rollperson.anvandenheter[avtrubbningsfardighetsgrupper[i]].kvarenheter += rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter;
		rollperson.anvandenheter.avtrubbning[avtrubbningsfardighetsgrupper[i]].anvandaenheter =0;
	
		// Nollar alla kryss
		rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i] + "extrakryss"]=0;
		
		// Räknar ut antal kryss
		rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i] + "krysstotal"] =rollperson.anvandenheter.avtrubbning[avtrubbningskategorier[i] + "extrakryss"] + rollperson["avtrubbning" + avtrubbningskategorier[i]];
		
	}
	return rollperson
}


function anropanollaavtrubbning(rollperson){
	rollperson=nollaavtrubbning(rollperson);
	
	//gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(aktiv_kategori);	
}

function anropaslumpaavtrubbning(rollperson){
	rollperson=slumpaavtrubbning(rollperson);
	
	//gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(aktiv_kategori);	
}

function anropaandraavtrubbning(rollperson, kategori, steg){
	rollperson=andraavtrubbning(rollperson, kategori, steg);
	
	//gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(aktiv_kategori);	
}
// Sektion V: Mystik & magi

function slumpamystikmagi(rollperson, kategori){
	// Slumpa mystikmagi (ger märkligt resultat vid fel aspekt eller religion)
	
	// saknas
	
	rollperson.anvandenheter.mystikmagi["kvar" + kategori] -=1;
	rollperson.anvandenheter.mystikmagi["anvanda" + kategori] +=1;
	
	return rollperson
}

function tabortallamystikmagi(rollperson){
	// Saknas
	return rollperson
}

// Sektion VI: Valfria


function slumpaenhetvalfri(rollperson){
	var i;
	var j;
	var fardighetskategori;
	
	var kategorivald=0;
	var fardighetvald=0;
	
	var kvartotal=rollperson.anvandenheter.kvarvalfriaenheter;
	
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	
	
	for(i=0;i<6;i++){
		kvartotal += rollperson.anvandenheter[fardighetslistaobjekt.fardighetsgrupplista[i]].kvarenheter;
	}
	
	if (kvartotal>0){
		while(kategorivald==0){
			i=slumpa(6)-1;
			// Om det finns enheter att spendera på kategorin
			fardighetskategori=fardighetslistaobjekt.fardighetsgrupplista[i];
			if (rollperson.anvandenheter[fardighetskategori].kvarenheter+rollperson.anvandenheter.kvarvalfriaenheter>0){
				kategorivald=1;
				
			}
		}
		
		// Slumpa kategori
		// Slumpa färdighet inom kategorin
		aktiv_kategori=fardighetskategori;
		slumpaenhetkategori(rollperson, fardighetskategori);
	}
	return rollperson
}



function slumpaallavalfria(rollperson){
	// Slumpar alla kvarvarande valfria enheter
	while(rollperson.anvandenheter.kvarvalfriaenheter>0){
		rollperson=slumpaenhetvalfri(rollperson);
	}
	
	return rollperson
}



function slumpavalfrilattlard(rollperson){
	rollperson=slumpaenlattlard(rollperson,"valfri");
	return rollperson
}

	
	
function slumpaallalattlarda(rollperson){
	
	// Går igenom alla kvarvarande lattlarda och slumpar ut dessa
	
	fardighetsobjekt = hamta_fardighetslistaobjekt();
	rpvalmatris = hamta_rpvalmatris();
	fardighetsgrupplista = fardighetslistaobjekt.fardighetsgrupplista;
	
	var i;
	var j;
	
	// Skapar temporär variabel för att for-loopen inte ska påverkas av att de lättlärda färdigheterna används
	//var temp_kvarlattlarda=[];
	
	console.log("slumpaallalattlarda körs, innan while_kategori");
	for (i = 0; i < 6; i++) {
		while (rollperson.anvandenheter[fardighetsgrupplista[i]].kvarlattlarda>0){
			rollperson = slumpaenlattlard(rollperson, fardighetsgrupplista[i]);	
		}
		/*temp_kvarlattlarda[i]=rollperson.anvandenheter[fardighetsgrupplista[i]].kvarlattlarda;
		for (j=0; j < temp_kvarlattlarda[i]; j++){ // rpvalmatris[4][i] = "lattlard" + fardighetsgrupplista[i];
			rollperson = slumpaenlattlard(rollperson, fardighetsgrupplista[i]); 
		}
		*/
		 	
   	}
	i=6;
	console.log("slumpaallalattlarda körs, innan while_valfri");
	while (rollperson.anvandenheter.kvarvalfrialattlarda>0){
		rollperson = slumpaenlattlard(rollperson,"valfri");
	}
	
	/*temp_kvarlattlarda[i]=rollperson.anvandenheter.kvarvalfrialattlarda;
	for (j=0; j < temp_kvarlattlarda[i]; j++){ // rpvalmatris[4][6] = "lattlardvalfri";
		rollperson = slumpaenlattlard(rollperson, "valfri"); 
	}
	*/
	return rollperson
}

function slumpaallt(rollperson){
	
	var i;
	var j;
	var mystikmagikategorier=rollperson.anvandenheter.mystikmagikategorier;
	
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	var avtrubbningskategorier=["utsatthet","vald","overnaturligt"];
	
	// Slumpar alla kvarvarande enheter, såväl per kategori som valfria (inkl avtrubbning, språk och mystikmagi)
	// Slumpa även kvarvarande lättlärda
	
	// Kategorienheter
	for(i=0;i<6;i++){
		fardighetskategori=fardighetslistaobjekt.fardighetsgrupplista[i];
		
		while (rollperson.anvandenheter[fardighetskategori].kvarenheter >=1){
			rollperson = slumpaenhetkategori(rollperson, fardighetskategori)
		}
		
	}
	
	console.log("I slumpaallt. Kategorienheter klara.");
	
	// Avtrubbningskryss
	while(rollperson.anvandenheter.kvarvalfriakryss>0){
		rollperson=slumpaavtrubbning(rollperson);
	
	}
	
	console.log("I slumpaallt. Avtrubbning klara.");
	
	// Språkenheter
	
	while(rollperson.anvandenheter.sprakfardigheter.kvarenheter>0){
		rollperson=slumpasprak(rollperson);
	
	}
	
	
	console.log("I slumpaallt. Språk klara.");
	
	// Mystik & magi
	/*
	for (j=0;j<mystikmagikategorier.length;j++){
		while(rollperson.anvandenheter.mystikmagi["kvar" + mystikmagikategorier[j]]>0){
			rollperson=slumpamystikmagi(rollperson,mystikmagikategorier[j]);
	
		}
	}
	
	console.log("I slumpaallt. Mystik och magi klara.");
	*/
	
	// Lättlärda
	console.log("slumpallalattlarda anropas från slumpa allt")
	rollperson = slumpaallalattlarda(rollperson);
	
	//console.log("I slumpaallt. Lättlärda klara.");
	
	
	// Valfria enheter
	//console.log("slumpallavalfria anropas från slumpa allt")
	
	rollperson = slumpaallavalfria(rollperson);
	//console.log("I slumpaallt. Valfria klara.");
	
	aktiv_fardighet="";
	
	return rollperson
}

function anropanollaallt(rollperson){
	if ("anvandenheter" in rollperson){
		rollperson.anvandenheter={};
		rollperson.anvandenheter.sparad=0;
		
	}
	console.log("här är rollpersonens bakgrund: " + rollperson.bakgrund.rubrik);
	
	rollperson=borjaenhetsanvandning(rollperson);
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(aktiv_kategori);
}


function nollaallt(rollperson){
	
	// Lägg till varning
	
	var i;
	var j;
	var mystikmagikategorier=rollperson.anvandenheter.mystikmagikategorier;
	
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	var avtrubbningskategorier=["utsatthet","vald","overnaturligt"];
	
	// Slumpar alla kvarvarande enheter, såväl per kategori som valfria (inkl avtrubbning, språk och mystikmagi)
	// Slumpa även kvarvarande lättlärda
	
	// Nollar kategorier, både enheter och lättlärda
	for(i=0;i<6;i++){
		rollperson=nollaenhetkategori(rollperson, fardighetslistaobjekt.fardighetsgrupplista[i]);
	}
	
	// Avtrubbningskryss
	rollperson=nollaavtrubbning(rollperson);
	
	// Språkenheter
	rollperson=tabortallasprak(rollperson);
	
	// Övriga färdigheter
	
	// Mystik & magi
	rollperson=tabortallamystikmagi(rollperson);
	
	aktiv_fardighet="";
}


function anropaslumpaenhetvalfri(rollperson){
	rollperson=slumpaenhetvalfri(rollperson);
	
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(aktiv_kategori);
}

function anropaslumpaallt(rollperson){
	rollperson=slumpaallt(rollperson);
	
	// Uppdatera gui
	skrivanvandenheterkategorier()
	skrivanvandenheter(aktiv_kategori);
}



function beraknafardigheter(rollperson){
	var i;
	fardighetslistaobjekt = hamta_fardighetslistaobjekt();
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	fardighetslista=fardighetslistaobjekt.fardighetslista;
	// Loopia igenom alla färdigheter. Om antalet enheter är 0, tilldela 1 enhet om lättlärd och 1 enhet om grundtärning. 
	
	for (i = 0; i < fardighetsgrupplista.length; i++){
		
        for (j = 0; j < fardighetslista[i].length; j++){
			fardigheten = fardighetslista[i][j];
			if (rollperson[fardigheten].enheter ==0){		// Lägg endast till enheter om det är 0 från början
				if (rollperson[fardigheten].lattlard ==1){
					rollperson[fardigheten].enheter +=1;
				}
				if (rollperson[fardigheten].grundtarningar ==1){
					rollperson[fardigheten].enheter +=1;
				}
			}
		}
	}
		
}

function uppdaterafardighetenhet(rollperson, fardighetsnamn){
	// Uppdaterar enheter lagd på en enskild färdighet

}

function uppdaterafardighetskategorienhet(rollperson, fardighetskategori){
	// Uppdaterar enheter lagd på en enskild färdighetskategori

	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
}

function uppdateravalfriaenheter(rollperson){
	// Uppdatera både valfria enheter och valfria lättlärda
}

function sparaenheter(rollperson){
	rollperson=nollarollperson(rollperson)
	if ("bakgrund" in rollperson){
		rollperson= summerarollperson(rollperson, rollperson.bakgrund);
	}
	if ("attributtarningar" in rollperson){
		rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
	}
	if ("folkslag" in rollperson){
		rollperson= summerarollperson(rollperson, rollperson.folkslag);
	}
	if ("arketyp" in rollperson){
		rollperson= summerarollperson(rollperson, rollperson.arketyp);
	}
	if ("miljo" in rollperson){
		rollperson= summerarollperson(rollperson, rollperson.miljo);
	}
	if ("handelsetabellobjektlista" in rollperson){
		for (j=0;j<rollperson.handelsetabellobjektlista.length;j++){
			rollperson= summerarollperson(rollperson, rollperson.handelsetabellobjektlista[j]);
		}
	}
	
	if(rollperson.ovrigafardigheter.expertis.lista.length>0){
		rollperson=summerarollperson(rollperson, rollperson.ovrigafardigheter.expertis);
	}
	if(rollperson.ovrigafardigheter.hantverk.lista.length>0){
		rollperson=summerarollperson(rollperson, rollperson.ovrigafardigheter.hantverk);
	}
	if(rollperson.ovrigafardigheter.kannetecken.lista.length>0){
		rollperson=summerarollperson(rollperson, rollperson.ovrigafardigheter.kannetecken);
	}
	rollperson=summerarollperson(rollperson, rollperson.anvandenheter);
	
	rollperson.anvandenheter.sparad=1;
	
	return rollperson
}

function anropasparaenheter(rollperson){
	/*
	
	kvarenheterlista=hamta_kvarenheterlista(rollperson);
	var kvarenhetermeddelande="Följande är kvar att använda:";
	for (i=0;i<kvarenheterlista.length;i++){
		// Lägg till i kvarenhetermeddelande
		kvarenhetermeddelande += "\n";
		kvarenhetermeddelande +=kvarenheterlista[i];
	}
	
	if (kvarenheterlista.length==0){
		rollperson=sparaenheter(rollperson);
	}else{
		// Skriv kvarenhetermeddelande
		window.alert(kvarenhetermeddelande);
	}
	// Uppdatera gui
	uppdateravanstersammanfattning();
	
	*/
}

function hamta_kvarenheterlista(rollperson){
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	fardighetsgrupplista_plur=fardighetslistaobjekt.fardighetsgrupplista_plur;
	fardighetsgrupplista_sing=fardighetslistaobjekt.fardighetsgrupplista_sing;
	var kvarenheterlista=[];
	var i;
	
	// Vanliga färdighetskategorier
	for (i=0;i<6;i++){
		if (rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter==1){
			kvarenheterlista.push("1 enhet " + fardighetsgrupplista_plur[i]);
		}else if(rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter>1){
			kvarenheterlista.push(rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter.toString() + " enheter " + fardighetsgrupplista_plur[i]);
		}
		
		if (rollperson.anvandenheter[fardighetsgrupplista[i]].kvarlattlarda==1){
			kvarenheterlista.push("1 lättlärd " + fardighetsgrupplista_sing[i]);
		}else if(rollperson.anvandenheter[fardighetsgrupplista[i]].kvarlattlarda>1){
			kvarenheterlista.push(rollperson.anvandenheter[fardighetsgrupplista[i]].kvarlattlarda.toString() + " lättlärda " + fardighetsgrupplista_plur[i]);
		}
	}
	
	i=6; 
	// Språk
	
	if (rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter==1){
		kvarenheterlista.push("1 språkenhet");
	}else if(rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter > 1){
		kvarenheterlista.push(rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter.toString() + " språkenheter");
	}
	
	// Mystik & magi
	// saknas
	
	// Avtrubbning
	if (rollperson.anvandenheter.avtrubbning.kvarvalfriakryss==1){
		kvarenheterlista.push("1 valfritt avtrubbningskryss");
	}else if (rollperson.anvandenheter.avtrubbning.kvarvalfriakryss>1){
		kvarenheterlista.push("1 valfria avtrubbningskryss");
	}
	
	
	// Valfria enheter
	if (rollperson.anvandenheter.kvarvalfriaenheter==1){
		kvarenheterlista.push("1 valfri enhet");
	}else if(rollperson.anvandenheter.kvarvalfriaenheter>1){
		kvarenheterlista.push(rollperson.anvandenheter.kvarvalfriaenheter.toString() + " valfria enheter");
	}
	
	// Valfri lättlärd
	if (rollperson.anvandenheter.kvarvalfrialattlarda==1){
		kvarenheterlista.push("1 valfri lättlärd färdighet");
	}else if(rollperson.anvandenheter.kvarvalfrialattlarda>1){
		kvarenheterlista.push(rollperson.anvandenheter.kvarvalfrialattlarda.toString() + " valfria lättlärda färdigheter");
	}
	
	return kvarenheterlista
}

function tarningsenhetssteg(enheter){
	
	// Anger antalet enheter till närmsta hela tärning
	
	if (enheter==0){		//  0    -> 2T6
		enhetssteg=1;		
	}else if(enheter==1){	// 2T6   -> 3T6
		enhetssteg=1;
	}else if(enheter==2){	// 3T6   -> 4T6
		enhetssteg=2;
	}else if(enheter==3){	// 3T6+2 -> 4T6
		enhetssteg=1;
	}else if(enheter==4){	// 4T6   -> 5T6
		enhetssteg=4;
	}else if(enheter==5){	// 4T6+1 -> 5T6
		enhetssteg=3;
	}else if(enheter==6){	// 4T6+2 -> 5T6
		enhetssteg=2;
	}else if(enheter==7){	// 4T6+3 -> 5T6
		enhetssteg=1;
	}
	return enhetssteg
}

	
function enhetertillvarde(enheter, lattlard){
	
	// Beräknar färdighetsvärde utifrån antalet tärningar. 
	// Färdighetsvärdet används som input för att beräkna färdighetstärningar
	
	if (enheter==0){
		varde=0;				//  0
	}else if(enheter==1){	
		if (lattlard==1){
			varde=0;			//  0    (lättlärd färdighet utan grundtärningar börjar på 0)
		}else if(lattlard==0){
			varde=8;			// 2T6
		}
	}else if(enheter==2){	
		varde = 12;				// 3T6
	}else if(enheter==3){	
		varde=14;				// 3T6+2
	}else if(enheter==4){	
		varde=16;				// 4T6
	}else if(enheter==5){	
		varde=17;				// 4T6+1
	}else if(enheter==6){	
		varde=18;				// 4T6+2
	}else if(enheter==7){	
		varde=19;				// 4T6+3
	}else if(enheter==8){	
		varde=20;				// 5T6
	}
	
	return varde
}
