/*
Anropa rpvalanteckning(objektstyp, valtsubval)

Bakgrunder (innehåller aldrig subval)
Bakgrund: [bakgrund.rubrik]
[bakgrund.beskrivning]
[bakgrundens tabellslag och enheter]  				(skapa beskrivninghak)

Folkslag (innehåller subval ibland)
Folkslag: [folkslag.rubrik + eventull underrubrik]
Attribut: [attributmatris] 							(skapa attributmatris)
Utrustning och resurser
rubrik												(subvalordning [1][0][0], [1][1][0], [1][1][1], [1][1][2], [1][2][0], [1][2][1], [1][2][2]
beskrivning											([2][0][0], [2][1][0], [2][1][1], [2][1][2], [2][2][0], [2][2][1], [2][2][2]
subvalrubrik (ej om valen är gjorda)				[0][1][0],  [0][1][1], [0][1][2], [0][2][0], [0][2][1], [0][2][2]
Se till att hantera språk, skrift och namnn som subsubval


Arketyper (innehåller alltid subval)
Arketyp: [arketyp.rubrik + eventull underrubrik]
Tabellslag [tabellslagmatris]						(skapa tabellslagmatris)
Enheter [enhetsmatris]								(skapa enhetsmatris)
Utrustning och resurser
rubrik												(subvalordning [1][0][0], [1][1][0], [1][1][1], [1][1][2], [1][2][0], [1][2][1], [1][2][2]
beskrivning											([2][0][0], [2][1][0], [2][1][1], [2][1][2], [2][2][0], [2][2][1], [2][2][2]
subvalrubrik (ej om valen är gjorda)				[0][1][0],  [0][1][1], [0][1][2], [0][2][0], [0][2][1], [0][2][2]

Miljöer (innehåller alltid subval)
Miljö: [miljo.rubrik + eventull underrubrik]
Tabellslag [tabellslagmatris]						(skapa tabellslagmatris)
Enheter [enhetsmatris]								(skapa enhetsmatris)
Utrustning och resurser
rubrik												(subvalordning [1][0][0], [1][1][0], [1][1][1], [1][1][2], [1][2][0], [1][2][1], [1][2][2]
beskrivning											([2][0][0], [2][1][0], [2][1][1], [2][1][2], [2][2][0], [2][2][1], [2][2][2]
subvalrubrik (ej om valen är gjorda)				[0][1][0],  [0][1][1], [0][1][2], [0][2][0], [0][2][1], [0][2][2]







*/
function hamta_alertanteckning (rollperson){
	
    var alertanteckningarray=[[]];
    var alertanteckning="";
    
    rpvalmatris = hamta_rpvalmatris();
    
    var fardighetsgrupplista = [];
   	var fardighetslista = [[]];
    //var fardighetsobjektlista = [];
   	
    //fardighetsgrupplista, fardighetslista, fardighetsobjektlista = hamta_fardighetslistor();
	
    fardighetslistaobjekt= hamta_fardighetslistaobjekt();
    fardighetsobjekt= hamta_fardighetsobjekt();
    
    
    attributobjekt=clone(hamta_attributobjekt());
    
    handelsetabeller=clone(hamta_handelsetabeller());
    
    fardighetslista=fardighetslistaobjekt.fardighetslista;
    fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
    
    var fardighetsgrupplista_sing=fardighetslistaobjekt.fardighetsgrupplista_sing;
    var fardighetsgrupplista_plur=fardighetslistaobjekt.fardighetsgrupplista_plur;
    
    var ovrigafardighetergrupplista_sing=fardighetslistaobjekt.ovrigafardighetergrupplista_sing;
    var ovrigafardighetergrupplista_plur=fardighetslistaobjekt.ovrigafardighetergrupplista_plur;
    
    
    var grundattributlista= attributobjekt.grundattributlista;
    var grundattributrubriker=attributobjekt.grundattributrubriker;
    var harleddaattributlista= attributobjekt.harleddaattributlista;
    var harleddavardenlista= attributobjekt.harleddavardenlista;
    
    var avtrubbningskategorier=["utsatthet","vald","overnaturligt"];
    var vapenlista = ["vanligtvapen", "ovanligtvapen", "sallsyntvapen"];
	var rustninglista = ["mycketlattrustning", "lattrustning", "medelrustning", "tungrustning"];
    
	var lattlardlista = [];
	var svarlardlista = [];
	
    alertanteckningarray.push([]);
    
    for (i=0; i < grundattributlista.length; i++){
    	alertanteckningarray[0][i] = rollperson[grundattributlista[i]].rubrik + " \t" + rollperson[grundattributlista[i]].tarningar;
    }
    
    
    
    alertanteckningarray.push([]);
    alertanteckningarray.push([]);
    
	//---
	//window.alert(rpvalmatris)
	
    for (i=1; i <= 2; i++){
    	for (j=0; j < rpvalmatris[i].length; j++){
        	// Egenskaper till härledda attribut och värden
            rollperson[rpvalmatris[i][j]].egenskapsstrang = "";
            
            for (k=0; k < rollperson[rpvalmatris[i][j]].egenskapslista.length; k++){
            	rollperson[rpvalmatris[i][j]].egenskapsstrang += rollperson[rpvalmatris[i][j]].egenskapslista[k]; 
            	if (k < rollperson[rpvalmatris[i][j]].egenskapslista.length - 1){
                	rollperson[rpvalmatris[i][j]].egenskapsstrang += ", ";
                }
            }
            
            
        
        }
    }
    
    
    for (i=0; i < harleddaattributlista.length; i++){
    	
        alertanteckningarray[1][i] = rollperson[harleddaattributlista[i]].rubrik + " \t" + rollperson[harleddaattributlista[i]].tarningar + " \t" + rollperson[harleddaattributlista[i]].egenskapsstrang;
    }
    
    
    i=0; // grundrustning skrivs som värde, ej med tärningar
    alertanteckningarray[2][i] = rollperson[harleddavardenlista[i]].rubrik + " \t" + rollperson[harleddavardenlista[i]].varde.toString() + " \t" + rollperson[harleddavardenlista[i]].egenskapsstrang;
    
    for (i=1; i < harleddavardenlista.length-1; i++){
    	alertanteckningarray[2][i] = rollperson[harleddavardenlista[i]].rubrik + " \t" + rollperson[harleddavardenlista[i]].tarningar + " \t" + rollperson[harleddavardenlista[i]].egenskapsstrang;
    }
    i=3; // Läkningstakt skrivs som värde, ej med tärningar
    alertanteckningarray[2][i] = rollperson[harleddavardenlista[i]].rubrik + " \t" + rollperson[harleddavardenlista[i]].varde.toString() + " \t" + rollperson[harleddavardenlista[i]].egenskapsstrang;
    
	i=4; // Grundbelastning skrivs som värde, ej med tärningar
    alertanteckningarray[2][i] = rollperson[harleddavardenlista[i]].rubrik + " \t" + rollperson[harleddavardenlista[i]].varde.toString() + " \t" + rollperson[harleddavardenlista[i]].egenskapsstrang;
    
	
    // --- behöver fixas med push
    
    
    alertanteckningarray.push([]);
    
    // Enheter i färdighetskategorier
    for (i=0; i < fardighetsgrupplista_sing.length; i++){
    	if (rollperson[rpvalmatris[3][i]] == 1){
        	alertanteckningarray[3][i] =rollperson[rpvalmatris[3][i]].toString() + " enhet " + fardighetsgrupplista_plur[i];
    	}else{
        	alertanteckningarray[3][i] =rollperson[rpvalmatris[3][i]].toString() + " enheter " + fardighetsgrupplista_plur[i];
    	
        }
    }
    i=7; // valfria
    if (rollperson[rpvalmatris[3][i]] == 1){
       	alertanteckningarray[3][i] =rollperson[rpvalmatris[3][i]].toString() + " valfri enhet";
    }else{
       	alertanteckningarray[3][i] =rollperson[rpvalmatris[3][i]].toString() + " valfria enheter";
    	
    }
    
    alertanteckningarray.push([]);
    
    // Lättlärda färdigheter
    for (i=0; i < fardighetsgrupplista_sing.length -1 ; i++){
	
		
		//alert(rollperson[rpvalmatris[4][i]])
    	if (rollperson[rpvalmatris[4][i]] == 1){
        	alertanteckningarray[4][i] =rollperson[rpvalmatris[4][i]].toString() + " lättlärd " + fardighetsgrupplista_sing[i];
    	}else if (rollperson[rpvalmatris[4][i]] > 1){
        	alertanteckningarray[4][i] =rollperson[rpvalmatris[4][i]].toString() + " lättlärda " + fardighetsgrupplista_plur[i];
        }else{
        	alertanteckningarray[4][i]="";
		//	alert(rpvalmatris[4][i])
        }
    }
    
	
	
	
    i=6; // valfria
    if (rollperson[rpvalmatris[4][i]] == 0){
		alertanteckningarray[4][i]="";
    }else if (rollperson[rpvalmatris[4][i]] == 1){
       	alertanteckningarray[4][i] =rollperson[rpvalmatris[4][i]].toString() + " valfri lättlärd färdighet";
    }else{
       	alertanteckningarray[4][i] =rollperson[rpvalmatris[4][i]].toString() + " valfria lättlärda färdigheter";
    }
    
	// --- Leta upp alla lättlärda färdigheter
    // --- Leta upp alla svårlärda färdigheter
	// loopar igenom alla färdigheter
	for (i=0; i < fardighetslista.length; i++){
		for (j=0; j < fardighetslista[i].length; j++){
			if (rollperson[fardighetslista[i][j]].lattlard == 1){
				//if (rollperson[rpvalmatris[5][i]] == 0){ 	// lista endast om man inte är lättlärd i hela kategorin
				
				lattlardlista.push(fardighetsobjekt[fardighetslista[i][j]].rubrik);
				
				//}
				
			}else if (rollperson[fardighetslista[i][j]].lattlard == -1){
				
				//if (rollperson[rpvalmatris[5][i]] == 0){ 	// lista endast om man inte är svårlärd i hela kategorin
				svarlardlista.push(fardighetsobjekt[fardighetslista[i][j]].rubrik);
				//}
			}
		}
	}
	
	
	i=7; // Lista alla lättlärda
	if (lattlardlista.length == 0){
		alertanteckningarray[4][i]="";
	}else if (lattlardlista.length == 1){
		alertanteckningarray[4][i] = "Lättlärd i " + lattlardlista[0];
	}else if (lattlardlista.length == 2){
		alertanteckningarray[4][i] = "Lättlärd i " + lattlardlista[0] + " och " + lattlardlista[1];
	}else if (lattlardlista.length > 2){
		alertanteckningarray[4][i] = "Lättlärd i ";
		for (j=0; j< lattlardlista.length-2; j++){
			alertanteckningarray[4][i] += lattlardlista[j] + ", "
		}
		alertanteckningarray[4][i] += lattlardlista[lattlardlista.length-2] + " och " + lattlardlista[lattlardlista.length-1];
	}
	
	i=8; // Lista alla svårlärda
	if (svarlardlista.length == 0){
		alertanteckningarray[4][i]="";
	}else if (svarlardlista.length == 1){
		alertanteckningarray[4][i] = "Svårlärd i " + svarlardlista[0];
	}else if (svarlardlista.length == 2){
		alertanteckningarray[4][i] = "Svårlärd i " + svarlardlista[0] + " och " + svarlardlista[1];
	}else if (svarlardlista.length > 2){
		alertanteckningarray[4][i] = "Svårlärd i ";
		for (j=0; j< svarlardlista.length-2; j++){
			alertanteckningarray[4][i] += svarlardlista[j] + ", "
		}
		alertanteckningarray[4][i] += svarlardlista[svarlardlista.length-2] + " och " + svarlardlista[svarlardlista.length-1];
	}
	
	
    
    alertanteckningarray.push([]);
    
    // Lättlärd/svårlärd i hel kategori
    for (i=0; i < fardighetsgrupplista_sing.length -1 ; i++){
    	if (rollperson[rpvalmatris[5][i]] == -1){
        	alertanteckningarray[5][i] = "Svårlärd i alla " + fardighetsgrupplista_plur[i];
        
        }else if (rollperson[rpvalmatris[5][i]] == 1){
        	alertanteckningarray[5][i] = "Lättlärd i alla " + fardighetsgrupplista_plur[i];
        }else{
        	alertanteckningarray[5][i] ="";
        }
    }
	
	
	
	
	alertanteckningarray.push([]);
    // Färdighetsbonusar
    alertanteckningarray.push([]);
    
    if (rollperson[rpvalmatris[7][0]] > 0){
    	alertanteckningarray[7][0] = rollperson[rpvalmatris[7][0]].toString() + " poäng Mysterier";
    }
	
    alertanteckningarray.push([]);
    
    for (i=0; i < ovrigafardighetergrupplista_plur.length; i++){
    	if (rollperson[rpvalmatris[8][i]] > 0){
    		alertanteckningarray[8][i] = rollperson[rpvalmatris[8][i]].toString() + " poäng " + ovrigafardighetergrupplista_plur[i];
    	}else{
        	alertanteckningarray[8][i]="";
        }
	
    }
    
    alertanteckningarray.push([]);
    
    
    if (rollperson[rpvalmatris[9][0]] > 0){
    	alertanteckningarray[9][0]=rollperson[rpvalmatris[9][0]].toString() + " Avtrubbningskryss \(utsatthet\)";
    }else{
    	alertanteckningarray[9][0]="";
    }
    
    if (rollperson[rpvalmatris[9][1]] > 0){
    	alertanteckningarray[9][1]=rollperson[rpvalmatris[9][1]].toString() + " Avtrubbningskryss \(våld\)";
    }else{
    	alertanteckningarray[9][1]="";
    }
    
    if (rollperson[rpvalmatris[9][2]] > 0){
    	alertanteckningarray[9][2]=rollperson[rpvalmatris[9][2]].toString() + " Avtrubbningskryss \(övernaturligt\)";
    }else{
    	alertanteckningarray[9][2]="";
    }
    
    if (rollperson[rpvalmatris[9][3]] > 0){
    	alertanteckningarray[9][3]=rollperson[rpvalmatris[9][3]].toString() + " Avtrubbningskryss i valfri kategori";
    }else{
    	alertanteckningarray[9][3]="";
    }
    
    alertanteckningarray.push([]);
    
    if (rollperson[rpvalmatris[10][0]] == 1){
    	alertanteckningarray[10][0] = rollperson[rpvalmatris[10][0]].toString() + " vanligt vapen";
    }else if(rollperson[rpvalmatris[10][0]] > 1){
 		alertanteckningarray[10][0] = rollperson[rpvalmatris[10][0]].toString() + " vanliga vapen";
    }else{
    	alertanteckningarray[10][0]="";
    }
    
    if (rollperson[rpvalmatris[10][1]] == 1){
    	alertanteckningarray[10][1] = rollperson[rpvalmatris[10][1]].toString() + " ovanligt vapen";
    }else if(rollperson[rpvalmatris[10][1]] > 1){
 		alertanteckningarray[10][1] = rollperson[rpvalmatris[10][1]].toString() + " ovanliga vapen";
    }else{
    	alertanteckningarray[10][1]="";
    }
    
    if (rollperson[rpvalmatris[10][2]] == 1){
    	alertanteckningarray[10][2] = rollperson[rpvalmatris[10][2]].toString() + " sällsynt vapen";
    }else if(rollperson[rpvalmatris[10][2]] > 1){
 		alertanteckningarray[10][2] = rollperson[rpvalmatris[10][2]].toString() + " sällsynta vapen";
    }else{
    	alertanteckningarray[10][2]="";
    }
    
    alertanteckningarray.push([]);
    
	if (rollperson[rpvalmatris[11][0]] == 1){
    	alertanteckningarray[11][0] = rollperson[rpvalmatris[11][0]].toString() + " mycket lätt rustning";
    }else if(rollperson[rpvalmatris[11][0]] > 1){
 		alertanteckningarray[11][0] = rollperson[rpvalmatris[11][0]].toString() + " mycket lätta rustningar";
    }else{
    	alertanteckningarray[11][0]="";
    }
	
    if (rollperson[rpvalmatris[11][1]] == 1){
    	alertanteckningarray[11][1] = rollperson[rpvalmatris[11][1]].toString() + " lätt rustning";
    }else if(rollperson[rpvalmatris[11][1]] > 1){
 		alertanteckningarray[11][1] = rollperson[rpvalmatris[11][1]].toString() + " lätta rustningar";
    }else{
    	alertanteckningarray[11][1]="";
    }
    
    if (rollperson[rpvalmatris[11][2]] == 1){
    	alertanteckningarray[11][2] = rollperson[rpvalmatris[11][2]].toString() + " medeltung rustning";
    }else if(rollperson[rpvalmatris[11][2]] > 1){
 		alertanteckningarray[11][2] = rollperson[rpvalmatris[11][2]].toString() + " medeltunga rustningar";
    }else{
    	alertanteckningarray[11][2]="";
    }
    
    if (rollperson[rpvalmatris[11][3]] == 1){
    	alertanteckningarray[11][3] = rollperson[rpvalmatris[11][3]].toString() + " tung rustning";
    }else if(rollperson[rpvalmatris[11][3]] > 1){
 		alertanteckningarray[11][3] = rollperson[rpvalmatris[11][3]].toString() + " tunga rustningar";
    }else{
    	alertanteckningarray[11][3]="";
    }
    
    alertanteckningarray.push([]);
    
    for (i=0; i < handelsetabeller.lista.length; i++){
    	if (rollperson[handelsetabeller.lista[i]] > 0 ){
        	alertanteckningarray[12][i] = rollperson[handelsetabeller.lista[i]].toString() + " slag på " + handelsetabeller[handelsetabeller.lista[i]][0].rubrik
    	}else{
    		alertanteckningarray[12][i] = "";
    	}
    }
    
    i=handelsetabeller.lista.length;
    if (rollperson.valfriatabellslag > 0){
    	alertanteckningarray[12][i] = rollperson.valfriatabellslag.toString() + " slag på valfri händelsetabell";   
    }else{
    	alertanteckningarray[12][i] = "";
    }
    
	alertanteckningarray.push([]);
	alertanteckningarray.push([]);
	
	for (i=0; i<rpvalmatris[14].length;i++){
		alertanteckningarray[14][i]="";
		for (j=0; j<rollperson[rpvalmatris[14][i] + "_lista"].length;j++){
			if (rollperson[rpvalmatris[14][i] + "_lista"][j].length>1){
				alertanteckningarray[14][i] += rollperson[rpvalmatris[14][i] + "_lista"][j] + "\n";
				if (j<rollperson[rpvalmatris[14][i] + "_lista"].length-1){
					//alertanteckningarray[14][i] += ", "
				}else{
					//alertanteckningarray[14][i] += "."
				}
			}
		}	
	}
    
    /*
    
    alertanteckningarray.push([]);
    
    
    rpvalmatris.push([]);
    
    rpvalmatris[13][0] = "pengar";
    
    alertanteckningarray.push([]);
    
    rpvalmatris.push([]);
    
    rpvalmatris[14][0] = "formaga";
    rpvalmatris[14][1] = "resurs";
    rpvalmatris[14][2] = "kontakt";
    rpvalmatris[14][3] = "utseende";
	rpvalmatris[14][4] = "ovrigt";*/
	
	radbrytning=[];
    radbrytning[0]=1;
	radbrytning[1]=0;
	radbrytning[2]=1;
	radbrytning[3]=1;
	radbrytning[4]=0;
	radbrytning[5]=1;
	radbrytning[6]=0;
	radbrytning[7]=0;
	radbrytning[8]=1;
	radbrytning[9]=1;
	radbrytning[10]=0;
	radbrytning[11]=1;
	radbrytning[12]=1;
	radbrytning[13]=1;
	radbrytning[14]=0;
	alertanteckning=alertanteckning + "Bakgrund: " + rollperson.bakgrund.rubrik + "\n";
	alertanteckning=alertanteckning + "Folkslag: " + rollperson.folkslag.rubrik + "\n";
	alertanteckning=alertanteckning + "Arketyp: " + rollperson.arketyp.rubrik + "\n";
	alertanteckning=alertanteckning + "Miljö: " + rollperson.miljo.rubrik + "\n";
	
	
	
    for (i=0; i<=14;i++){
    	for(j=0; j < alertanteckningarray[i].length; j++){
        	if (alertanteckningarray[i][j].length > 0 ){
            	alertanteckning = alertanteckning + "\n" + alertanteckningarray[i][j]
        		
            }
        }
		// Extra radbrytning av överskådlighetsskäl
		if (radbrytning[i]==1){
			alertanteckning = alertanteckning + "\n"
		}
    }
	
    alertanteckning = alertanteckning + "\n\n"
	alertanteckning += "Händelsetabellslag:" + "\n"
	
	for (i=0; i<rollperson.tabellslagresultat.length;i++){
		alertanteckning += "\n"; 
		alertanteckning = alertanteckning + rollperson.tabellslagresultat[i].tabellnamn + " " + rollperson.tabellslagresultat[i].tarningsslag + ": " + rollperson.tabellslagresultat[i].rubrik + "\n";
		alertanteckning = alertanteckning + rollperson.tabellslagresultat[i].beskrivningvald + " \[" + rollperson.tabellslagresultat[i].beskrivninghakvald + "\]\n\n";
	}
	alertanteckningvektor=[];
	for (i=0; i<rollperson.tabellslagresultat.length;i++){
		alertanteckningvektor[i]="";
		alertanteckningvektor[i] += rollperson.tabellslagresultat[i].tabellnamn + " " + rollperson.tabellslagresultat[i].tarningsslag + ": " + rollperson.tabellslagresultat[i].rubrik + "\n";
		
		//window.alert(alertanteckningvektor[i]);
		alertanteckningvektor[i] += rollperson.tabellslagresultat[i].beskrivningvald + " \[" + rollperson.tabellslagresultat[i].beskrivninghakvald + "\]\n";
	}
	
	
	//window.alert(alertanteckningvektor)
    return alertanteckning
}
function hamta_alertanteckning_rpval (rollperson,objektstyp){

	/*
	Bakgrunder har aldrig subval och hanteras därför separat
	Händelsetabeller hanteras även de separat
	Tre delar: alertanteckning_rpval_000, alertanteckning_rpval_0tu, alertanteckning_rpval_stu. Dessa fogas samman i olika ordning för olika typer av objekt 

	*/
	var alertanteckning_rpval_000="";
	var alertanteckning_rpval_0tu="";
	var alertanteckning_rpval_stu="";
	
	var alertanteckning_rpval_000_list=[[[[]]]];
	var alertanteckning_rpval_0tu_list=[[[[]]]];
	var alertanteckning_rpval_stu_list=[[[[]]]];
	
	var alertanteckning_rpval_000_list_vald=[[[[]]]];
	var alertanteckning_rpval_0tu_list_vald=[[[[]]]];
	var alertanteckning_rpval_stu_list_vald=[[[[]]]];
	
	
	s=0;
	t=0;
	u=0;

	if ("rubrik" in rollperson[objektstyp]){
		alertanteckning_rpval_000 += rollperson[objektstyp].rubrik + "\n";
		alertanteckning_rpval_000_list[0][0][0][0]=rollperson[objektstyp].rubrik;
	}
	if ("beskrivning" in rollperson[objektstyp]){
		alertanteckning_rpval_000 += rollperson[objektstyp].beskrivning + "\n";
		alertanteckning_rpval_000_list[0][0][0][1]=rollperson[objektstyp].beskrivning;
	}
	if ("beskrivninghak" in rollperson[objektstyp]){
		alertanteckning_rpval_000 += "\[" + rollperson[objektstyp].beskrivninghak + "\]" + "\n";
	}
	if ("subval" in rollperson[objektstyp]){
		if ("beskrivningtabeller" in rollperson[objektstyp].subval[0][0][0]){
			alertanteckning_rpval_000 += "Händelsetabellslag" + "\n";
			alertanteckning_rpval_000_list.push([[[]]]);
			alertanteckning_rpval_000_list[1][0][0][0]="Händelsetabellslag";
			
			for (i=0; i < rollperson[objektstyp].subval[0][0][0].beskrivningtabeller.length;i++){
				alertanteckning_rpval_000 += rollperson[objektstyp].subval[0][0][0].beskrivningtabeller[i] + "\n";
				alertanteckning_rpval_000_list[1][0][0][i+1]=rollperson[objektstyp].subval[0][0][0].beskrivningtabeller[i];
			}
			alertanteckning_rpval_000 += "\n";
		}
		if ("beskrivningenheter" in rollperson[objektstyp].subval[0][0][0]){
			alertanteckning_rpval_000 += "Enheter" + "\n";
			alertanteckning_rpval_000_list.push([[[]]]);
			alertanteckning_rpval_000_list[2][0][0][0]="Enheter";
			
			for (i=0; i < rollperson[objektstyp].subval[0][0][0].beskrivningenheter.length;i++){
				alertanteckning_rpval_000 += rollperson[objektstyp].subval[0][0][0].beskrivningenheter[i] + "\n";
				alertanteckning_rpval_000_list[2][0][0][i+1]=rollperson[objektstyp].subval[0][0][0].beskrivningenheter[i];
			
			}
			alertanteckning_rpval_000 += "\n";
		}
		if ("beskrivningattribut" in rollperson[objektstyp].subval[0][0][0]){
			alertanteckning_rpval_000 += "Grundattribut" + "\n";
			alertanteckning_rpval_000_list.push([[[]]]);
			alertanteckning_rpval_000_list[1][0][0][0]="Grundattribut";
			
			for (i=0; i < rollperson[objektstyp].subval[0][0][0].beskrivningattribut.length;i++){
				alertanteckning_rpval_000_list[1][0].push([]);
			
				alertanteckning_rpval_000 += rollperson[objektstyp].subval[0][0][0].beskrivningattribut[i][0] + ": ";
				alertanteckning_rpval_000 += rollperson[objektstyp].subval[0][0][0].beskrivningattribut[i][1] + "\n";
				alertanteckning_rpval_000_list[1][0][i+1][0]=rollperson[objektstyp].subval[0][0][0].beskrivningattribut[i][0];
				alertanteckning_rpval_000_list[1][0][i+1][1]=rollperson[objektstyp].subval[0][0][0].beskrivningattribut[i][1];
				
			}
			alertanteckning_rpval_000 += "\n";
		}
		
		s=0;
		alertanteckning_rpval_0tu_list[0][0][0][0]="Utrustning \& resurser ";
		alertanteckning_rpval_0tu_list[0][0][0][1]="";
		
		alertanteckning_rpval_0tu_list_vald[0][0][0][0]="Utrustning \& resurser ";
		alertanteckning_rpval_0tu_list_vald[0][0][0][1]="";
		
		for (t=1;t<rollperson[objektstyp].subval[s].length;t++){
			// Efter val
			alertanteckning_rpval_0tu_list_vald.push([[[]]]);
			if ("valdasubsubtotal" in rollperson[objektstyp].subval[s][t][0]){
				for (k=0;k<rollperson[objektstyp].subval[s][t][0].valdasubsubtotal.length;k++){
					if (k>0){
						alertanteckning_rpval_0tu_list[t][0].push([]);
					}
					u=rollperson[objektstyp].subval[s][t][0].valdasubsubtotal[k];
					
					if ("rubrik" in rollperson[objektstyp].subval[s][t][u]){
						alertanteckning_rpval_0tu += rollperson[objektstyp].subval[s][t][u].rubrik + "\n";
						alertanteckning_rpval_0tu_list_vald[t][0][k][0]=rollperson[objektstyp].subval[s][t][u].rubrik
			
					}else{
						alertanteckning_rpval_0tu_list_vald[t][0][k][0]="";
			
					}
					if ("beskrivningvald" in rollperson[objektstyp].subval[s][t][u]){
						alertanteckning_rpval_0tu += rollperson[objektstyp].subval[s][t][u].beskrivningvald + "\n";
						alertanteckning_rpval_0tu_list_vald[t][0][k][1]=rollperson[objektstyp].subval[s][t][u].beskrivningvald;
			
					}else if ("beskrivning" in rollperson[objektstyp].subval[s][t][u]){
						alertanteckning_rpval_0tu += rollperson[objektstyp].subval[s][t][u].beskrivning + "\n";
						alertanteckning_rpval_0tu_list_vald[t][0][k][1]=rollperson[objektstyp].subval[s][t][u].beskrivning;
			
					}else{
						
						alertanteckning_rpval_0tu_list_vald[t][0][k][1]="";
					}
					if ("subvalrubrikvald" in rollperson[objektstyp].subval[s][t][u]){
						alertanteckning_rpval_0tu += rollperson[objektstyp].subval[s][t][u].subvalrubrikvald + "\n";
						alertanteckning_rpval_0tu_list_vald[t][0][k][2]=rollperson[objektstyp].subval[s][t][u].subvalrubrikvald;
			
					}else{
						//alertanteckning_rpval_0tu_list_vald[t][0][k][2]="";
					}
					alertanteckning_rpval_0tu += "\n";
				}
			}
			// Innan val
			
			alertanteckning_rpval_0tu_list.push([[[]]]);
			
			for (u=0;u<rollperson[objektstyp].subval[s][t].length;u++){
				if (u>0){
					alertanteckning_rpval_0tu_list[t][0].push([]);
				}
			
				if ("rubrik" in rollperson[objektstyp].subval[s][t][u]){
					alertanteckning_rpval_0tu_list[t][0][u][0]=rollperson[objektstyp].subval[s][t][u].rubrik;
				}
			
				if ("beskrivning" in rollperson[objektstyp].subval[s][t][u]){
					alertanteckning_rpval_0tu_list[t][0][u][1]=rollperson[objektstyp].subval[s][t][u].beskrivning;
				}
				
				if ("subvalrubrik" in rollperson[objektstyp].subval[s][t][u]){
					alertanteckning_rpval_0tu_list[t][0][u][2] = rollperson[objektstyp].subval[s][t][u].subvalrubrik;
				}
				
			}
			
		}
		
		
		for (s=1;s<rollperson[objektstyp].subval.length;s++){
			// Efter val
			if ("valdasubtotal" in rollperson[objektstyp].subval[s][0][0]){
				for (j=1;j<rollperson[objektstyp].subval[s][0][0].valdasubtotal.length;j++){
					alertanteckning_rpval_stu_list_vald[s-1].push([[]]);
					t=rollperson[objektstyp].subval[s][0][0].valdasubtotal[j];
					if ("valdasubsubtotal" in rollperson[objektstyp].subval[s][t][0]){
						for (k=0;k<rollperson[objektstyp].subval[s][t][0].valdasubsubtotal.length;k++){
							if(k>0){
								alertanteckning_rpval_stu_list_vald[s-1][j].push([]);
							}
							u=rollperson[objektstyp].subval[s][t][0].valdasubsubtotal[k];
							if ("rubrik" in rollperson[objektstyp].subval[s][t][u]){
								alertanteckning_rpval_stu += rollperson[objektstyp].subval[s][t][u].rubrik + "\n";
								alertanteckning_rpval_stu_list_vald[s-1][j][k][0]=rollperson[objektstyp].subval[s][t][u].rubrik;
							}
							if ("beskrivningvald" in rollperson[objektstyp].subval[s][t][u]){
								alertanteckning_rpval_stu += rollperson[objektstyp].subval[s][t][u].beskrivningvald + "\n";
								alertanteckning_rpval_stu_list_vald[s-1][j][k][1]=rollperson[objektstyp].subval[s][t][u].beskrivningvald;
							}else if ("beskrivning" in rollperson[objektstyp].subval[s][t][u]){
								alertanteckning_rpval_stu += rollperson[objektstyp].subval[s][t][u].beskrivning + "\n";
								alertanteckning_rpval_stu_list_vald[s-1][j][k][1]=rollperson[objektstyp].subval[s][t][u].beskrivning;
							}else{
								alertanteckning_rpval_stu_list_vald[s-1][j][k][1]="";
							}
							if ("subvalrubrikvald" in rollperson[objektstyp].subval[s][t][u]){
								alertanteckning_rpval_stu += rollperson[objektstyp].subval[s][t][u].subvalrubrikvald + "\n";
								alertanteckning_rpval_stu_list_vald[s-1][j][k][2]=rollperson[objektstyp].subval[s][t][u].subvalrubrikvald;
							}else{
								alertanteckning_rpval_stu_list_vald[s-1][j][k][2]="";
							}
							alertanteckning_rpval_stu += "\n";
						}
					}
				}
			}
			// Innan val
			
			
			alertanteckning_rpval_stu_list.push([[[]]]);
			t=0;
			u=0;
			
			if ("rubrik" in rollperson[objektstyp].subval[s][t][u]){
				alertanteckning_rpval_stu_list[s-1][t][u][0]=rollperson[objektstyp].subval[s][t][u].rubrik;
				window.alert(alertanteckning_rpval_stu_list);
			}
		
			if ("beskrivning" in rollperson[objektstyp].subval[s][t][u]){
				alertanteckning_rpval_stu_list[s-1][t][u][1]=rollperson[objektstyp].subval[s][t][u].beskrivning;
			}
			
			if ("subvalrubrik" in rollperson[objektstyp].subval[s][t][u]){
				alertanteckning_rpval_stu_list[s-1][t][u][2] = rollperson[objektstyp].subval[s][t][u].subvalrubrik;
			}
			
			for (t=1;t<rollperson[objektstyp].subval[s].length;t++){
				alertanteckning_rpval_stu_list[s-1].push([[]]);
				for (u=0;u<rollperson[objektstyp].subval[s][t].length;u++){
					if (u>0){
						alertanteckning_rpval_stu_list[s-1][t].push([]);
					}
					if ("rubrik" in rollperson[objektstyp].subval[s][t][u]){
						alertanteckning_rpval_stu_list[s-1][t][u][0]=rollperson[objektstyp].subval[s][t][u].rubrik;
					}
				
					if ("beskrivning" in rollperson[objektstyp].subval[s][t][u]){
						alertanteckning_rpval_stu_list[s-1][t][u][1]=rollperson[objektstyp].subval[s][t][u].beskrivning;
					}
					
					if ("subvalrubrik" in rollperson[objektstyp].subval[s][t][u]){
						alertanteckning_rpval_stu_list[s-1][t][u][2] = rollperson[objektstyp].subval[s][t][u].subvalrubrik;
					}
				}
			}
		}
	}
	
	alertanteckning_rpval_000_list_vald= alertanteckning_rpval_000_list;
	alertanteckning_rpval_string=[alertanteckning_rpval_000, alertanteckning_rpval_0tu, alertanteckning_rpval_stu];
	alertanteckning_rpval_list=[alertanteckning_rpval_000_list, alertanteckning_rpval_0tu_list, alertanteckning_rpval_stu_list]
	alertanteckning_rpval_list_vald=[alertanteckning_rpval_000_list_vald, alertanteckning_rpval_0tu_list_vald, alertanteckning_rpval_stu_list_vald]
	
	
	
	alertanteckning_rpval=[alertanteckning_rpval_string, alertanteckning_rpval_list, alertanteckning_rpval_list_vald];
	
	return alertanteckning_rpval
	
}

