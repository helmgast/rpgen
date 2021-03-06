function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction(dropdownid) {
	//console.log("dropdownFunction körs med dropdownid:" + dropdownid);
    document.getElementById(dropdownid).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  //console.log("click outside dropdown");
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
 
	var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function hamta_infotext(){
	infotext={};
	
	infotext.bakgrund="Rollpersonens bakgrund beskriver var denne växt upp, vad dennes föräldrar arbetat med eller liknande";
	infotext.folkslag="";
	infotext.attributtarningar="";
	infotext.arketyp="";
	infotext.miljo="";
	infotext.handelsetabeller="";
	infotext.fardighetstabeller="";
	
	return infotext

}

function slumpaallasubval(objektstyp){
	
	aktivtrpvalobjekt=valj_subval(aktivtrpvalobjekt,1);
	
	// Skriv in valen till valdasub
	
	if (objektstyp=="folkslag"){
		skrivfolkslag();
	}else if (objektstyp=="arketyp"){
		skrivarketypmiljo("arketyp");
	}else if (objektstyp=="miljo"){
		skrivarketypmiljo("miljo");
	}else if (objektstyp=="handelsetabell"){
	}
}

function nollasubvaluppdatera(objektstyp){
	aktivtrpvalobjekt=nollasubval(aktivtrpvalobjekt);
	
	if (objektstyp=="folkslag"){
		skrivfolkslag();
	}else if (objektstyp=="arketyp"){
		skrivarketypmiljo("arketyp");
	}else if (objektstyp=="miljo"){
		skrivarketypmiljo("miljo");
	}else if (objektstyp=="handelsetabell"){
	}
	
	subvalobjektknapp(objektstyp);


}

function toggleradio(objektstyp, i, j, k){
	//console.log([objektstyp, i, j, k]);
	
	if(k==0){
		radionamn = objektstyp + "_subval_" + i.toString() + "00";
		aktivtrpvalobjekt.subval[i][0][0].valdasub=[j];
		
	}else{
		radionamn = objektstyp + "_subval_" + i.toString() + j.toString() +  "00";
		aktivtrpvalobjekt.subval[i][j][0].valdasub=[k];
		
	}
	radioid= objektstyp + "_subval_" + i.toString() + j.toString() + k.toString();
}


function togglecheckbox(objektstyp, i, j, k){
	//console.log([objektstyp, i, j, k]);
	var t;
	var x;
	var y;
	var z;
	valdasubtemp=[];
	if (objektstyp == "folkslag"){
	}else if (objektstyp == "arketyp"){
	}else if (objektstyp == "miljo"){
	}
	
	if(k==0){
		checkboxnamn = objektstyp + "_subval_" + i.toString() + "00";
		antalsubval = aktivtrpvalobjekt.subval[i][0][0].antalsubval;
		valdasub = aktivtrpvalobjekt.subval[i][0][0].valdasub;
		aktivtindex=j;
	}else{
		checkboxnamn  = objektstyp + "_subval_" + i.toString() + j.toString() +  "00";
		antalsubval = aktivtrpvalobjekt.subval[i][j][0].antalsubval;
		valdasub=aktivtrpvalobjekt.subval[i][j][0].valdasub;
		aktivtindex=k;
	}
	
	checkboxid= objektstyp + "_subval_" + i.toString() + j.toString() + k.toString();
	
	checkarray=raknacheckbox(checkboxnamn);
	
	if (checkarray.length <= antalsubval){
		// Inte för många
		
		if (document.getElementById(objektstyp + "_subval_" + i.toString() + j.toString() + k.toString()).checked==true){
			valdasubtemp[0]=aktivtindex;
			
		}else{
			
		}
		
		for (t=0;t<valdasub.length;t++){
			if (valdasub[t] != aktivtindex){
				valdasubtemp.push(valdasub[t]);
			}
		}
		
	}else{
		// Fler icheckade än vad det finns subval
		if (valdasub.length <= antalsubval){
			for (t=1;t<valdasub.length;t++){
				valdasubtemp[t]=valdasub[t-1];
				if (t>=antalsubval-1){
					if (k==0){
						document.getElementById(objektstyp + "_subval_" + i.toString() + valdasub[t].toString() + "0").checked=false;
					}else{
						document.getElementById(objektstyp + "_subval_" + i.toString() + j.toString() + valdasub[t].toString() ).checked=false;
					}
				}
			}
		
		}else if (valdasub.length > antalsubval){
			for (t=1;t<antalsubval;t++){
				valdasubtemp[t]=valdasub[t-1];
			}
		}
		if(k==0){
			valdasubtemp[0]=j;
		}else{
			valdasubtemp[0]=k;
		}
		console.log("för många" + valdasubtemp);
		
		
	}
	
	if (valdasubtemp.length > antalsubval){
		valdasubtemp=valdasubtemp.slice(0,antalsubval);
		console.log(valdasubtemp);
	}
	if(k==0){
		aktivtrpvalobjekt.subval[i][0][0].valdasub=valdasubtemp;
		
		// Uppdatera alla checkboxar
		for (y=1; y<aktivtrpvalobjekt.subval[i].length;y++){
			if (aktivtrpvalobjekt.subval[i][0][0].valdasub.indexOf(y) >= 0){
				//console.log("y finns och är " + y  + ", valdasub är " + aktivtrpvalobjekt.subval[i][0][0].valdasub);
				//document.getElementById(objektstyp + "_subval_" + i.toString() + y.toString() + "0").checked=true;
				
			}else{
				//console.log("y finns inte och är " + y  + ", valdasub är " + aktivtrpvalobjekt.subval[i][0][0].valdasub);
				//document.getElementById(objektstyp + "_subval_" + i.toString() + y.toString() + "0").checked=false;
			}
		}
		//for (t=0;t<aktivtrpvalobjekt.subval[i][0][0].valdasub.length;t++){
			//document.getElementById(objektstyp + "_subval_" + i.toString() + aktivtrpvalobjekt.subval[i][0][0].valdasub[t].toString() + "0").checked=
	}else{
		//}
		aktivtrpvalobjekt.subval[i][j][0].valdasub=valdasubtemp;
		
		// Uppdatera alla checkboxar
		for (z=1; z<aktivtrpvalobjekt.subval[i][j].length;z++){
			if (z in aktivtrpvalobjekt.subval[i][j][0].valdasub){
				//document.getElementById(objektstyp + "_subval_" + i.toString() + y.toString() + z.toString()).checked=true;
				
			}else{
				document.getElementById(objektstyp + "_subval_" + i.toString() + y.toString() + z.toString()).checked=false;
			}
		}
		
		// Uppdatera alla checkboxar
		//for (t=0;t<aktivtrpvalobjekt.subval[i][j][0].valdasub.length;t++){
			
		//}
	}
	//console.log(antalcheckade);
	checkarray=raknacheckbox(checkboxnamn);
	
}

function raknacheckbox(checkboxnamn){
	var i;
	var checkboxes = document.getElementsByName(checkboxnamn);
	//window.alert(checkboxnamn)
	var antalcheckade=0;
	var checkarray=[];
	for(i=0;i<checkboxes.length;i++){
		//window.alert(i + " " + checkboxes[i].id + " " + checkboxes[i].checked)
		if(checkboxes[i].checked){
			checkarray.push(i);
			//console.log(checkboxes[i].id); 
			//antalcheckade +=1;
			//checkboxes.splice(i,1);
		}

	}
	antalcheckade= checkarray.length;
	//console.log("Number of checked checkboxes: " + checkarray.length);
	return checkarray
}

function subvalobjektknapp(objektstyp){
	//--- Checka radio- och checkboxknappar beroende på subval
	var i;
	var j;
	var k;
	
	for (i=0;i<aktivtrpvalobjekt.subval.length;i++){
		
		if ("valdasub" in aktivtrpvalobjekt.subval[i][0][0]){
			
			if (i>0){
				for (j=1;j<aktivtrpvalobjekt.subval[i].length;j++){
					if (typeof(document.getElementById(objektstyp + "_subval_" + i.toString() + j.toString() + "0")) === "object" ){
					
						if (aktivtrpvalobjekt.subval[i][0][0].valdasub.indexOf(j) >= 0){ 
							document.getElementById(objektstyp + "_subval_" + i.toString() + j.toString() + "0").checked=true;
						}else{
							document.getElementById(objektstyp + "_subval_" + i.toString() + j.toString() + "0").checked=false;
						}
					}
				}
			}
			
			
			/*
			for (y=0;y<aktivtrpvalobjekt.subval[i][0][0].valdasub.length;y++){
				document.getElementById(objektstyp + "_subval_" + i.toString() + aktivtrpvalobjekt.subval[i][0][0].valdasub[y].toString() + "0").checked=true;
			}
			*/
		}
		
		for (j=1;j<aktivtrpvalobjekt.subval[i].length;j++){
			if ("valdasub" in aktivtrpvalobjekt.subval[i][j][0]){
				if ("antalsubval" in aktivtrpvalobjekt.subval[i][j][0]){
					if (aktivtrpvalobjekt.subval[i][j].length == aktivtrpvalobjekt.subval[i][j][0].antalsubval+1){
						// Alla subval ska väljas
					}else{
					
						//console.log(i.toString(), j.toString());
						for (k=1;k<aktivtrpvalobjekt.subval[i][j].length;k++){
							
							if (typeof(document.getElementById(objektstyp + "_subval_" + i.toString() + j.toString() + k.toString())) === "object"){
							  // exists.
							
							
								if (aktivtrpvalobjekt.subval[i][j][0].valdasub.indexOf(k) >= 0){ 
									document.getElementById(objektstyp + "_subval_" + i.toString() + j.toString() + k.toString()).checked=true;
								}else{
									document.getElementById(objektstyp + "_subval_" + i.toString() + j.toString() + k.toString()).checked=false;
								}
							}
						}
					}
				}
				/*
				for (z=0;z<aktivtrpvalobjekt.subval[i][j][0].valdasub.length;z++){
					document.getElementById(objektstyp + "_subval_" + i.toString() + +j.toString() + aktivtrpvalobjekt.subval[i][j][0].valdasub[z].toString()).checked=true;
				}
				*/
			}
		}
	}
}

function skrivbakgrunderkategorier(){
	
	var sidocellbredd=18;
	
	var htmlkod = "<div class='garald'>";

	window.parent.document.getElementById('hogerkategorival').height="40";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	if (window.parent.bakgrundstabeller.lista.length>1){
		htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\">";
		htmlkod += "<a id=\"rpvalkategori_slumpabakgrundstabell\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpabakgrundstabell();return false;\">";
		htmlkod += "Slumpa bakgrundstabell";
		htmlkod +="</a>";
		htmlkod +="</td>";
	}else{
		htmlkod += "<td class=\"center\" width=\"18%\"></td>";
	}
	htmlkod += "<td class=\"center\">";
	for (i=0;i<window.parent.bakgrundstabeller.lista.length;i++){
		//console.log(i);
		htmlkod += "<a id=\"rpvalkategori_" + window.parent.bakgrundstabeller[window.parent.bakgrundstabeller.lista[i]][0].namn + "\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"bytbakgrund('" + window.parent.bakgrundstabeller[window.parent.bakgrundstabeller.lista[i]][0].namn + "');return false;\">" + window.parent.bakgrundstabeller[window.parent.bakgrundstabeller.lista[i]][0].rubrik + "</a>"; 
		
		/*
		if (i==Math.floor(window.parent.bakgrundstabeller.lista.length/3)){
			htmlkod += "<br>";
		}
		else if (i == 2 * Math.floor(window.parent.bakgrundstabeller.lista.length/3)){
			htmlkod += "<br>";
		}else if(i==window.parent.bakgrundstabeller.lista.length-1){
			// Skriv inget
		}
		*/
		if(i==window.parent.bakgrundstabeller.lista.length-1){
		}else if(i==1){
			htmlkod += "<br>";
		}else if(i==3){
			htmlkod += "<br>";
		
		}else{
			htmlkod += " &#124; ";
		}
	}
	htmlkod += "</td>";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumparesterandeval(rollperson);return false;\">" + "Slumpa resterande val" + "</a></td>";
	//htmlkod += "<td class=\"center\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumparesterandeval(rollperson);return false;\">" + "Slumpa resterande val" + "</a></td>";
	
	htmlkod += "</tr></table>";
	htmlkod += "</div>";
	document.getElementById("hogerkategorival").innerHTML=htmlkod;
}

function slumpabakgrunder(){
	slumptalarray=slumpaflera(2,aktiv_bakgrundstabell.length-1).splice(1,2);
	skrivbakgrunder(slumptalarray);
}

function slumpabakgrundstabell(){
	var i;
	i=slumpa(window.parent.bakgrundstabeller.lista.length)-1;
	aktiv_bakgrundstabell=window.parent.bakgrundstabeller[window.parent.bakgrundstabeller.lista[i]];
	
	
	console.log("i slumpabakgrundstabell" + window.parent.bakgrundstabeller.lista[i]);
	skrivbakgrunder([0,0]);
}

function skrivbakgrunder(bakgrundstabellslag){
	
	console.log("I skrivbakgrunder: aktiv_bakgrundstabell är " + aktiv_bakgrundstabell[0].namn);
	//window.alert("skrivbakgrund körs");
	
	//slumptal=slumpa(100);
	bakgrundindexarray=bakgrundstabellslag;
	
	var htmlkod = "<div class=\"garald\">";
	if (bakgrundstabellslag[0]>0){
		htmlkod += "<div id=\"bakgrund_val_1_beskrivning\" name=\"\">";
		htmlkod += "<p class=\"indrag\">"
		htmlkod += "<b>" + bakgrundindexarray[0] + " " + aktiv_bakgrundstabell[bakgrundindexarray[0]].rubrik + "</b><br>";
		htmlkod += aktiv_bakgrundstabell[bakgrundindexarray[0]].beskrivning + "<br>";
		htmlkod += "&#91;" + aktiv_bakgrundstabell[bakgrundindexarray[0]].beskrivninghak + "&#93;";
		htmlkod += "</p>"
		htmlkod += "</div>"
		
		htmlkod += "<div id=\"bakgrund_val_2_beskrivning\" name=\"\">";
		htmlkod += "<p class=\"indrag\">";
		htmlkod += "<b>" + bakgrundindexarray[1] + " " + aktiv_bakgrundstabell[bakgrundindexarray[1]].rubrik + "</b><br>";
		htmlkod += aktiv_bakgrundstabell[bakgrundindexarray[1]].beskrivning + "<br>";
		htmlkod += "&#91;" + aktiv_bakgrundstabell[bakgrundindexarray[1]].beskrivninghak + "&#93;<p>";
		htmlkod += "</p>"
		htmlkod += "</div>";
		htmlkod += "</div>";
	}
	
	/*
	// Nedan skrivs alla bakgrunderna
	htmlkod += "<div class=\"garaldmini\">";

	for (i=1; i<aktiv_bakgrundstabell.length; i++){
		htmlkod += "<b>" + i + " " + aktiv_bakgrundstabell[i].rubrik + "</b><br>";
		htmlkod += aktiv_bakgrundstabell[i].beskrivning + "<br>";
		htmlkod += "&#91;" + aktiv_bakgrundstabell[i].beskrivninghak + "&#93;<p>";
	}

	htmlkod += "</div>";
	*/

	var htmlkodrubrik = "<div class='garald'>";
	
		
	//window.parent.document.getElementById('hogerkategorival').height="60";
	htmlkodrubrik += "<table style=\"width:100%\">";
	htmlkodrubrik += "<tr>";
	htmlkodrubrik += "<td colspan=4>";
	htmlkodrubrik += "&nbsp;";
	htmlkodrubrik += "</td>";
	
	htmlkodrubrik += "<td class=\"center\" rowspan=3><div><span class=\"middle\"></span><h1>" + aktiv_bakgrundstabell[0].rubrik +"</div></h1></td>";
	
	
	
	if (bakgrundstabellslag[0]>0){
		htmlkodrubrik += "<td class=\"center\" width=\"25%\" rowspan=3>Välj: <span class=\"break0p5em\"></span><div id=\"bakgrund_val_1\" name=\"\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"sparabakgrund(aktiv_bakgrundstabell, bakgrundindexarray\[0\]);return false;\">" + aktiv_bakgrundstabell[bakgrundindexarray[0]].rubrik + " &rArr;</a></div><span class=\"break0p25em\"></span><div id=\"bakgrund_val_2\" name=\"\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"sparabakgrund(aktiv_bakgrundstabell, bakgrundindexarray\[1\]);return false;\">" + aktiv_bakgrundstabell[bakgrundindexarray[1]].rubrik +  " &rArr;</a></div></td>";
	}else{
		htmlkodrubrik += "<td class=\"center\" width=\"25%\" rowspan=3><div id=\"bakgrund_val_1\" name=\"\"></div><div id=\"bakgrund_val_2\" name=\"\"></div></td>";
	}
	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "<tr>";
	htmlkodrubrik += "<td class=\"center\" width=\"25%\" colspan=4><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpabakgrunder();return false;\">Slå på tabell</a></td>";
	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "<tr>";
	if (bakgrundstabellslag[0]==0){
		htmlkodrubrik +="<td class=\"center\" colspan=4>";
		htmlkodrubrik +="&nbsp;";
		htmlkodrubrik +="</td>";
	}else{
		htmlkodrubrik +="<td class=\"center\" rowspan=1>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"andrabakgrundstabellslag(-10);return false;\">";
		htmlkodrubrik +="<span style=\"white-space: nowrap\">&#8211;10</span>"; 
		htmlkodrubrik += "</a>";
		htmlkodrubrik +="</td>";
		htmlkodrubrik +="<td class=\"center\"  rowspan=1>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"andrabakgrundstabellslag(-1);return false;\">";
		htmlkodrubrik +="<span style=\"white-space: nowrap\">&#8211;1</span>"; 
		htmlkodrubrik += "</a>";
		htmlkodrubrik +="</td>";
		htmlkodrubrik +="<td class=\"center\" rowspan=1>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"andrabakgrundstabellslag(1);return false;\">";
		htmlkodrubrik +="<span style=\"white-space: nowrap\">&#43;1</span>"; 
		htmlkodrubrik += "</a>";
		htmlkodrubrik +="</td>";
		htmlkodrubrik +="<td class=\"center\"  rowspan=1>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"andrabakgrundstabellslag(10);return false;\">";
		htmlkodrubrik +="<span style=\"white-space: nowrap\">&#43;10</span>"; 
		htmlkodrubrik += "</a>";
		htmlkodrubrik +="</td>";
	}
	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "</table>";
	htmlkodrubrik += "</div>";
		
	document.getElementById("hogerkategoritabell").innerHTML="";
	document.getElementById("hogerkategoribeskrivning").innerHTML=htmlkod;
	document.getElementById("hogerkategorirubrik").innerHTML=htmlkodrubrik;
	if (bakgrundstabellslag[0]>0){
		//window.alert([document.getElementById("bakgrund_val_1_beskrivning").offsetTop, document.getElementById("bakgrund_val_2_beskrivning").offsetTop]);
		bakgrundval1scroll=document.getElementById("bakgrund_val_1_beskrivning").offsetTop;
		bakgrundval2scroll=document.getElementById("bakgrund_val_2_beskrivning").offsetTop;
		//document.getElementById("hogerkategoribeskrivning").scrollTop=bakgrundval2scroll-bakgrundval1scroll;
	}
	
	
}

function sparabakgrund(bakgrundtabellnamn, bakgrundindex){
	
	
	// Spara klon till rollperson
	// Summera subval för att få ner till rot
	// Enklare sammanfattning då rp ej ännu har attribut (bara Bakgrund, Folkslag, Arketyp, Miljö, tabeller, enheter, färdighetspoäng
	// Skriv sammanfattning till vänster
	// Till höger, gå till Folkslag
	
	//console.log(bakgrundtabellnamn[0].rubrik);
	//console.log(bakgrundindex);
	
	aktivtbakgrundobjekt=bakgrundstabeller[bakgrundtabellnamn[0].namn][bakgrundindex];
	slump=1;
	if (rollperson.handelsetabellobjektlista.length > 0){
		window.alert("Bakgrund kan ej ändras efter att händelsetabellslagen påbörjats");
	}else{
		if ("bakgrund" in rollperson){
			rollperson=nollarollperson(rollperson);
			
			
			if ("folkslag" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.folkslag);
			}
			if ("attributtarningar" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
			}
			if ("sallskap" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.sallskap);
			}
			if ("arketyp" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.arketyp);
			}
			if ("miljo" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.miljo);
			}
			
			
		}else{
		
		}
		
		rollperson.bakgrund=clone(aktivtbakgrundobjekt);
		//rollperson.bakgrundtabellnamn=bakgrundtabellnamn[0].namn;
		
		rollperson.bakgrundtabellnamn=rollperson.bakgrund.tabellnamn;
		rollperson.bakgrundtabellnummer=bakgrundtabellnamn[0].nummer;
		//rollperson=valj_subval(rollperson, "bakgrund", slump);
		//rollperson=summera_subval(rollperson, "bakgrund");
		rollperson= summerarollperson(rollperson, rollperson.bakgrund);
		
		// Extraenheter
		rollperson=nollaextraenheter(rollperson);
		rollperson=extraenheter(rollperson);
		
		rollperson=kvarhandelsetabellslag(rollperson);
		uppdateravanstersammanfattning();
		skrivhogerkategorityper();
	}
	
}

function skrivfolkslagkategorier(){
	
	var sidocellbredd=18;
	
	var htmlkod = "<div class='garaldcenter'>";

	window.parent.document.getElementById('hogerkategorival').height="80";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpafolkslag();return false;\">Slumpa folkslag</a></td>";
	htmlkod += "<td class=\"center\">";
	for (i=0;i<window.parent.folkslagobjekt.lista.length;i++){
		//console.log(i);
		if ("folkslag" in rollperson){
			if (rollperson.folkslag.namn==window.parent.folkslagobjekt[window.parent.folkslagobjekt.lista[i]].namn){
				htmlkod += "<b>";
			}
		}
		htmlkod += "<a id=\"rpvalkategori_" + window.parent.folkslagobjekt[window.parent.folkslagobjekt.lista[i]].namn + "\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"bytfolkslag('" + window.parent.folkslagobjekt[window.parent.folkslagobjekt.lista[i]].namn + "');return false;\">" + window.parent.folkslagobjekt[window.parent.folkslagobjekt.lista[i]].rubrik + "</a>"; 
		
		if ("folkslag" in rollperson){
			if (rollperson.folkslag.namn==window.parent.folkslagobjekt[window.parent.folkslagobjekt.lista[i]].namn){
				htmlkod += "</b>";
			}
		}
		/*
		if (i==Math.floor(window.parent.folkslagobjekt.lista.length/3)){
			htmlkod += "<br>";
		}else if (i == 2 * Math.floor(window.parent.folkslagobjekt.lista.length/3)){
			htmlkod += "<br>";
		}else if(i==window.parent.folkslagobjekt.lista.length-1){
			// Skriv inget
		}else{
			htmlkod += " &#124; ";
		}
		*/
		if(i==window.parent.folkslagobjekt.lista.length-1){
			// Skriv inget
		}else if ((i+1)%5==0){
			htmlkod += "<br>";
		}else{
			htmlkod += " &#124; ";
		}
		
		
	}

	htmlkod += "</td>";
	//htmlkod += "<td class=\"center\" width=\"18%\">";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumparesterandeval(rollperson);return false;\">" + "Slumpa resterande val" + "</a></td>";
	htmlkod += "</td></tr></table>";
	htmlkod += "</div>";
	document.getElementById("hogerkategorival").innerHTML = htmlkod;
}

function slumpafolkslag(){
	folkslagindex=slumpa(folkslagobjekt.lista.length);
	aktivtfolkslagobjekt=folkslagobjekt[folkslagobjekt.lista[folkslagindex-1]];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	skrivfolkslag();
}

function skrivfolkslag(){
	console.log("skrivfolklag körs");
	
	var sidocellbredd=18;
	var sidocellbreddextra=23;
	var knappcellbredd=4;
	aktivtrpvalobjekt=aktivtfolkslagobjekt;
	
	//Slumpa endast subval om objektet ej aktiverats
	if (aktivtfolkslagobjekt.aktiverad==0){
		aktivtfolkslagobjekt=valj_subval(aktivtfolkslagobjekt,1);
		nollasubval(aktivtfolkslagobjekt);
	}
	

	
	
	var htmlkod = "<div class='garald'>";
	var i
	var j
	var harsubval=0;
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod += "<td class=\"beskrivning\">" + aktivtfolkslagobjekt.beskrivning + "</td>";
	htmlkod += "<tr>";
	htmlkod += "</table>";
	htmlkod += "<table style=\"width:70%\">";
	for (i=0;i<4;i++){
		htmlkod += "<tr>";
		htmlkod += "<td><b>" + aktivtfolkslagobjekt.subval[0][0][0].beskrivningattribut[i][0] + "&nbsp;</b></td>";
		htmlkod += "<td>" + aktivtfolkslagobjekt.subval[0][0][0].beskrivningattribut[i][1] + "&nbsp;&nbsp;&nbsp;</td>";
		htmlkod += "<td><b>" + aktivtfolkslagobjekt.subval[0][0][0].beskrivningattribut[i+4][0] + "&nbsp;</b></td>";
		htmlkod += "<td>" + aktivtfolkslagobjekt.subval[0][0][0].beskrivningattribut[i+4][1] + "&nbsp;&nbsp;&nbsp;</td>";
		htmlkod += "</tr>";
	}

	htmlkod += "<table style=\"width:100%\">";
	for (i=1;i<aktivtfolkslagobjekt.subval.length;i++){
		j=0;
		k=0;
		
		htmlkod += "<tr>";
		// Endast om resultatet kan slumpas om ska det finnas en länk
		if (aktivtfolkslagobjekt.subval[i][j][k].slumpning==1){
			htmlkod += "<td colspan=\"3\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'folkslag\'," + i + "," + j + "," + k + ");return false;\">" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtfolkslagobjekt.subval[i][j][k].beskrivningvald ;
		}else{
			console.log("här skrivs folkslagsbeskrivningvald"),
			htmlkod += "<td colspan=\"3\"><b>" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtfolkslagobjekt.subval[i][j][k].beskrivningvald; 
		}
		if ("beskrivninghak" in aktivtfolkslagobjekt.subval[i][j][k]){
			htmlkod += " &#91;" + aktivtfolkslagobjekt.subval[i][j][k].beskrivninghak + "&#93;";
		}
		htmlkod +=  "</td>";
		
		htmlkod += "</tr>";
		for (j=1;j<aktivtfolkslagobjekt.subval[i].length;j++){
			k=0;
			htmlkod += "<tr>";
			
			if ("minantalsubval" in aktivtfolkslagobjekt.subval[i][0][0]){
				if (aktivtfolkslagobjekt.subval[i][0][0].minantalsubval < aktivtfolkslagobjekt.subval[i][0][0].antalsubval){
					htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + "00\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\"";
					
					// Sätt om  valet ska vara markerat som förval
					if (aktivtfolkslagobjekt.subval[i][0][0].valdasub.indexOf(j) == -1){
						//htmlkod += "";
					}else{
						htmlkod += " checked = \"checked\"";
					}
					htmlkod += " onchange=\"togglecheckbox\(\'folkslag\'," + i + "," + j + ",0\);\"></form></td>";
					
				}
			}else if (aktivtfolkslagobjekt.subval[i][0][0].antalsubval== aktivtfolkslagobjekt.subval[i].length-1){
				// Alla subval ska väljas, inputform behövs ej
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"></td>";
			}else if (aktivtfolkslagobjekt.subval[i][0][0].antalsubval==1){
				// Endast ett subval, radiobutton
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"radio\" name=\"folkslag_subval_" + i.toString() + "00\" value=\"folkslag_subval_" + i.toString() + j.toString() + "0\" id = \"folkslag_subval_" + i.toString() + j.toString() + "0\"";
			
				// Sätt om  valet ska vara markerat som förval
				if (aktivtfolkslagobjekt.subval[i][0][0].valdasub.indexOf(j) == -1){
					//htmlkod += "></form></td>";
				}else{
					htmlkod += " checked = \"checked\"";
				}
				htmlkod += " onchange=\"toggleradio\(\'folkslag\'," + i + "," + j + ",0\);\"></form></td>";
			
			}else if (aktivtfolkslagobjekt.subval[i][0][0].antalsubval>=2){
				// Flera subval, checkbox
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"folkslag_subval_" + i.toString() + "00\" value=\"folkslag_subval_" + i.toString() + j.toString() + "0\" id = \"folkslag_subval_" + i.toString() + j.toString() + "0\"";
			
				// Sätt om  valet ska vara markerat som förval
				if (aktivtfolkslagobjekt.subval[i][0][0].valdasub.indexOf(j) == -1){
					//htmlkod += "></form></td>";
				}else{
					htmlkod += " checked = \"checked\"";
				}
				htmlkod += " onchange=\"togglecheckbox\(\'folkslag\'," + i + "," + j + ",0\);\"></form></td>";
			}
			
			//console.log([i,j,0]);
			//console.log("i är " + i);
			//console.log("j är " + j);
			//console.log("k är " + k);
			//console.log(aktivtfolkslagobjekt.subval[i][j][0].rubrik);
			
			if (aktivtfolkslagobjekt.subval[i][j][k].slumpning==1){
				htmlkod += "<td colspan=\"3\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'folkslag\'," + i + "," + j + "," + k + ");return false;\">" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtfolkslagobjekt.subval[i][j][k].beskrivningvald ;
			}else{
				htmlkod += "<td colspan=\"3\"><b>" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtfolkslagobjekt.subval[i][j][k].beskrivningvald 
			}
			if ("beskrivninghak" in aktivtfolkslagobjekt.subval[i][j][k]){
			htmlkod += " &#91;" + aktivtfolkslagobjekt.subval[i][j][k].beskrivninghak + "&#93;";
			}
			htmlkod +="</td>";
			
			
			htmlkod += "</tr>";
			
			for (k=1;k<aktivtfolkslagobjekt.subval[i][j].length;k++){
				htmlkod += "<tr>";
				htmlkod += "<td></td>";
				if ("minantalsubval" in aktivtfolkslagobjekt.subval[i][j][0]){
					if (aktivtfolkslagobjekt.subval[i][j][0].minantalsubval < aktivtfolkslagobjekt.subval[i][j][0].antalsubval){
						htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\"";
						
						// Sätt om  valet ska vara markerat som förval
						if (aktivtfolkslagobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
							//htmlkod += "></form></td>";
						}else{
							htmlkod += " checked = \"checked\"";
						}
						htmlkod += " onchange=\"togglecheckbox\(\'folkslag\'," + i + "," + j + "," + k + "\);\"></form></td>";
					}
				}else if (aktivtfolkslagobjekt.subval[i][j][0].antalsubval==aktivtfolkslagobjekt.subval[i][j].length-1){
					htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"></td>";
				}else if (aktivtfolkslagobjekt.subval[i][j][0].antalsubval==1){
					htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"radio\" name=\"folkslag_subval_" + i.toString() + j.toString() + "0\" value=\"folkslag_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"folkslag_subval_" + i.toString() + j.toString() + k.toString() + "\"";
				
					// Sätt om  valet ska vara markerat som förval
					if (aktivtfolkslagobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
						//htmlkod += "></form></td>";
					}else{
						htmlkod += " checked = \"checked\"";
					}
					htmlkod += " onchange=\"toggleradio\(\'folkslag\'," + i + "," + j + "," + k + "\);\"></form></td>";
				
				}else if (aktivtfolkslagobjekt.subval[i][j][0].antalsubval>=2){
					htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"folkslag_subval_" + i.toString() + j.toString() + "0\" value=\"folkslag_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"folkslag_subval_" + i.toString() + j.toString() + k.toString() + "\"";
				
					// Sätt om  valet ska vara markerat som förval
					if (aktivtfolkslagobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
						//htmlkod += "></form></td>";
					}else{
						htmlkod += " checked = \"checked\"";
					}
					htmlkod += " onchange=\"togglecheckbox\(\'folkslag\'," + i + "," + j + "," + k + "\);\"></form></td>";
				
				}
				
				if (aktivtfolkslagobjekt.subval[i][j][k].slumpning==1){
					htmlkod += "<td colspan=\"3\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'folkslag\'," + i + "," + j + "," + k + ");return false;\">" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtfolkslagobjekt.subval[i][j][k].beskrivningvald ;
				}else{
					htmlkod += "<td colspan=\"3\"><b>" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtfolkslagobjekt.subval[i][j][k].beskrivningvald;
				}
				if ("beskrivninghak" in aktivtfolkslagobjekt.subval[i][j][k]){
				htmlkod += " &#91;" + aktivtfolkslagobjekt.subval[i][j][k].beskrivninghak + "&#93;";
				}
				htmlkod +=  "</td>"
				htmlkod += "</td>";
				htmlkod += "</tr>";
			}
		
		}
	}
	i=0;
	for (j=1;j<aktivtfolkslagobjekt.subval[i].length-1;j++){
		k=0;
		htmlkod += "<tr>";
		
		if (aktivtfolkslagobjekt.subval[i][j][k].slumpning==1){
			htmlkod += "<td colspan=\"3\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'folkslag\'," + i + "," + j + "," + k + ");return false;\">" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtfolkslagobjekt.subval[i][j][k].beskrivningvald +  "</td>";
		}else{
			htmlkod += "<td colspan=\"3\"><b>" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtfolkslagobjekt.subval[i][j][k].beskrivningvald;
			if ("beskrivninghak" in aktivtfolkslagobjekt.subval[i][j][k]){
				htmlkod += " &#91;" + aktivtfolkslagobjekt.subval[i][j][k].beskrivninghak + "&#93;";
			}
			htmlkod +=  "</td>";
		}
		
		htmlkod += "</tr>";
		
		for (k=1;k<aktivtfolkslagobjekt.subval[i][j].length;k++){
			htmlkod += "<tr>";
			
			if ("minantalsubval" in aktivtfolkslagobjekt.subval[i][j][0]){
				if (aktivtfolkslagobjekt.subval[i][j][0].minantalsubval < aktivtfolkslagobjekt.subval[i][j][0].antalsubval){
					htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\"";
					
					// Sätt om  valet ska vara markerat som förval
					if (aktivtfolkslagobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
						//htmlkod += "></form></td>";
					}else{
						htmlkod += " checked = \"checked\"";
					}
					htmlkod += " onchange=\"togglecheckbox\(\'folkslag\'," + i + "," + j + "," + k + "\);\"></form></td>";
				}
			}else if (aktivtfolkslagobjekt.subval[i][j][0].antalsubval==aktivtfolkslagobjekt.subval[i][j].length-1){
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"></td>";
			}else if (aktivtfolkslagobjekt.subval[i][j][0].antalsubval==1){
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"radio\" name=\"folkslag_subval_" + i.toString() + j.toString() + "0\" value=\"folkslag_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"folkslag_subval_" + i.toString() + j.toString() + k.toString() + "\"";
			
				// Sätt om  valet ska vara markerat som förval
				if (aktivtfolkslagobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
					//htmlkod += "></form></td>";
				}else{
					htmlkod += " checked = \"checked\"";
				}
				htmlkod += " onchange=\"toggleradio\(\'folkslag\'," + i + "," + j + "," + k + "\);\"></form></td>";
			
			}else if (aktivtfolkslagobjekt.subval[i][j][0].antalsubval>=2){
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"folkslag_subval_" + i.toString() + j.toString() + "0\" value=\"folkslag_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"folkslag_subval_" + i.toString() + j.toString() + k.toString() + "\"";
			
				// Sätt om  valet ska vara markerat som förval
				if (aktivtfolkslagobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
					//htmlkod += "></form></td>";
				}else{
					htmlkod += " checked = \"checked\"";
				}
				htmlkod += " onchange=\"togglecheckbox\(\'folkslag\'," + i + "," + j + "," + k + "\);\"></form></td>";
			
			}
			
			if (aktivtfolkslagobjekt.subval[i][j][k].slumpning==1){
				htmlkod += "<td colspan=\"3\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'folkslag\'," + i + "," + j + "," + k + ");return false;\">" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtfolkslagobjekt.subval[i][j][k].beskrivning +  "</td>";
			}else{
				htmlkod += "<td colspan=\"3\"><b>" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtfolkslagobjekt.subval[i][j][k].beskrivningvald;
				if ("beskrivninghak" in aktivtfolkslagobjekt.subval[i][j][k]){
					console.log("skriver in beskrivninghakvald till subval");
					htmlkod +=aktivtfolkslagobjekt.subval[i][j][k].beskrivninghak;
				}
				htmlkod +="</td>";
				
			}
			
			if ("beskrivning" in aktivtfolkslagobjekt.subval[i][j][k]){
				htmlkod += ": " + aktivtfolkslagobjekt.subval[i][j][k].beskrivning;
				console.log("beskrivning finns i folkslagsobjektet");
			}
			if ("beskrivninghak" in aktivtfolkslagobjekt.subval[i][j][k]){
				htmlkod += " &#91;" + aktivtfolkslagobjekt.subval[i][j][k].beskrivninghak + "&#93;";
				console.log("beskrivninghak finns i folkslagsobjektet");
			}
			htmlkod += "</td>";
			htmlkod += "</tr>";
		}
		
	}
	j=aktivtfolkslagobjekt.subval[i].length-1; // Språk, skrift och namn
	for (k=1;k<aktivtfolkslagobjekt.subval[i][j].length;k++){
		htmlkod += "<tr>";
		
		
		htmlkod += "<td colspan=\"3\"><b>" + aktivtfolkslagobjekt.subval[i][j][k].rubrik + "</b>";
		if ("beskrivning" in aktivtfolkslagobjekt.subval[i][j][k]){
			htmlkod += ": " + aktivtfolkslagobjekt.subval[i][j][k].beskrivning;
		}
		htmlkod += "</td>";
		htmlkod += "</tr>";
	}

	htmlkod += "</table>";
	htmlkod += "</div>";
	
	var htmlkodrubrik = "<div class='garaldcenter'>";

	htmlkodrubrik += "<table style=\"width:100%\">";
	htmlkodrubrik += "<tr>";
	for (j=0; j < aktivtfolkslagobjekt.subval[0].length-1;j++){
		if (aktivtfolkslagobjekt.subval[0][j].length > 1){
			harsubval=1;
		}
	}
	
	if (aktivtfolkslagobjekt.subval.length > 1){
		harsubval=1;
	}
	if (harsubval==0){
		htmlkodrubrik += "<td class=\"center\" style=\"width:" + sidocellbreddextra + "%\"></td>";
	}else{
		htmlkodrubrik += "<td class=\"center\" style=\"width:" + sidocellbreddextra + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpaallasubval(\'folkslag\');return false;\">Slumpa alla subval</a>";
		htmlkodrubrik += "<br>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"nollasubvaluppdatera(\'folkslag\');return false;\">Nolla alla subval</a>";
		htmlkodrubrik +="</td>";
	}
	htmlkodrubrik += "<td class=\"center\"><div><span></span><h1>" + aktivtfolkslagobjekt.rubrik +"</div></h1></td>";
	htmlkodrubrik += "<td class=\"center\" style=\"width:" + sidocellbreddextra + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"sparafolkslag();return false;\">Välj " + aktivtfolkslagobjekt.rubrik + " &rArr;</a></td>";
	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "</table>";
	htmlkodrubrik += "</div>";
	
	document.getElementById("hogerkategoritabell").innerHTML = "";
	document.getElementById("hogerkategorirubrik").innerHTML = htmlkodrubrik;
	document.getElementById("hogerkategoribeskrivning").innerHTML = htmlkod;
	//document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	
	// Checkar radio- och checkboxknappar beroende på subval
	objektstyp="folkslag"; 
	subvalobjektknapp(objektstyp);
}

function sparafolkslag(){
	//folkslagobjektet är globalt, spara klon till rp
	// Lös ut frågan med subval
	// Kör full sammanfattning
	// Visa sammanfattning till vänster
	// Gå till grundattribut till höger
	//console.log("sparafolkslag körs");
	
	valjobligatoriskasubval(aktivtfolkslagobjekt);
	
	//var saknadrubrikarray=kontrollerasubval(rollpersonsvalobjekt);
	var saknadrubrikarray=kontrollerasubval(aktivtfolkslagobjekt);
	var saknadmeddelande="Alla subval är inte gjorda. Slumpa eller välj dessa innan du sparar. ";
	var i;
	
	slump=1;
	if (rollperson.handelsetabellobjektlista.length > 0){
		window.alert("Folkslag kan ej ändras efter att händelsetabellslagen påbörjats");
	}else if(saknadrubrikarray.length>0){
		console.log(saknadrubrikarray);
		
		for (i=0;i<saknadrubrikarray.length;i++){
				
			saknadmeddelande += "\n" + saknadrubrikarray[i];
		}
		
		window.alert(saknadmeddelande);
	}else{
		if ("folkslag" in rollperson){
			rollperson=nollarollperson(rollperson);
			
			if ("bakgrund" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.bakgrund);
			}
			if ("attributtarningar" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
			}
			if ("sallskap" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.sallskap);
			}
			
			if ("arketyp" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.arketyp);
			}
			if ("miljo" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.miljo);
			}
		}else{
		
		}
		rollperson.folkslag=clone(aktivtfolkslagobjekt);
		//---
		//rollperson.folkslag=valj_subval(rollperson.folkslag, slump);
		rollperson.folkslag=summera_subval(rollperson.folkslag);
		
		
		rollperson= summerarollperson(rollperson, rollperson.folkslag);
		
		// Extraenheter
		rollperson=nollaextraenheter(rollperson);
		rollperson=extraenheter(rollperson);
		
		
		rollperson=kvarhandelsetabellslag(rollperson);
		
		
		uppdateravanstersammanfattning();
		skrivhogerkategorityper();
		skrivfolkslagkategorier();
	}
}

function andraextratarningar(attributnamn, andring){
	//window.alert(attributnamn, andring.toString());
	
	window.testvariabel +=1;
	if (window.extratarningar[attributnamn]+andring > 3){
		// Max tre tärningar
	}else if (window.extratarningar[attributnamn]+andring < 0){
		// Minst noll tärningar
	}else if (window.kvarvarandetarningar - andring > 10){
		// Högst tio kvarvarandetarningar
	}else if (window.kvarvarandetarningar - andring < 0){
		// Lägst noll kvarvarande
	}else{
	
		window.extratarningar[attributnamn]+=andring;
		window.kvarvarandetarningar+=((-1)*andring);
		//window.alert(kvarvarandetarningar);
		//window.alert(window.testvariabel);
		//document.getElementById(attributnamn + "_extratarningar").innerHTML = "Paragraph changed!";
		
		//window.alert(extratarningar[attributnamn].toString() + "T6");
		innerhtml_extratarningar_strang=extratarningar[attributnamn].toString() + "T6";
		if (window.parent.rollperson.folkslag[attributnamn].varde % 4==0){
			innerhtml_summa_strang=window.parent.vardetilltarningar(window.parent.rollperson.folkslag[attributnamn].varde+(window.extratarningar[attributnamn])*4) +  "&#8199;&#8199";
		}else{
			innerhtml_summa_strang=window.parent.vardetilltarningar(window.parent.rollperson.folkslag[attributnamn].varde+(window.extratarningar[attributnamn])*4)
		}
		innerhtml_kvarvarandetarningar=window.kvarvarandetarningar.toString() + "T6";
		
		//window.alert(extratarningar[attributnamn]*4).toString() + "T6");
		document.getElementById(attributnamn + "_extratarningar").innerHTML = innerhtml_extratarningar_strang;
		document.getElementById(attributnamn + "_summa").innerHTML = innerhtml_summa_strang;
		document.getElementById("kvarvarandetarningar").innerHTML = innerhtml_kvarvarandetarningar;
		//document.getElementById("grundattribut_rubrik").innerHTML = innerhtml_kvarvarandetarningar;
	}
	/*
	fungerar:
	hamtvariabel = parent.document.getElementById('hogerkategorirubrik').contentWindow.kategorivariabel;
	window.alert(hamtvariabel);
	*/
	
}

function anropaslumpagrundattribut(){
	slumpagrundattribut();
	skrivgrundattribut();
}

function slumpagrundattribut(){
	
    //rpvalmatris=hamta_rpvalmatris();
    //attributlista=rpvalmatris[0];
    
	attributlistaobjekt=hamta_attributlistaobjekt();
	grundattributlista=attributlistaobjekt.grundattributlista;
	
    var tempindexarray=[0,1,2,3,4,5,6,7];
    var tempattributbonusar=[0,0,0,0,0,0,0,0];
    var slumpindex;
    var summabonusar=0;
    
	var m
	
    var antalbonustarningar=10;
    while (summabonusar<antalbonustarningar*4){
		slumpindex = slumpa(tempindexarray.length)-1;
    	tempattributbonusar[tempindexarray[slumpindex]] += 4;
       	if (tempattributbonusar[tempindexarray[slumpindex]] >=12){
       		tempindexarray.splice(slumpindex,1);
		}	
        summabonusar+=4;
    }
    
    
    for (m=0;m < grundattributlista.length ;m++){
		
    	extratarningar[grundattributlista[m]]=tempattributbonusar[m]/4;
    	
    }
	kvarvarandetarningar=antalbonustarningar-summabonusar/4;
	
	console.log("kvarvarandetarningar: " + kvarvarandetarningar)
	console.log("summabonusar: " + summabonusar)
	console.log("tempindexarray: " + tempindexarray)
	console.log("tempattributbonusar: " + tempattributbonusar)
	

}
function nollagrundattribut(){
	
	attributlistaobjekt=hamta_attributlistaobjekt();
	grundattributlista=attributlistaobjekt.grundattributlista;

	extratarningar={};
	for (i=0; i<grundattributlista.length;i++){
		extratarningar[grundattributlista[i]]=0;
	}
	kvarvarandetarningar=10;
	skrivgrundattribut();
}

function skrivgrundattribut(){

	var grundattributlista=window.parent.attributobjekt.grundattributlista;
	var grundattributrubriker=window.parent.attributobjekt.grundattributrubriker;
	var i;
	
	var knappcellbredd=4;
	
	testvariabel=0;
	
	
	
	htmlkod = "<div class='garald'>";

	//window.parent.document.getElementById('hogerkategorival').height="60";
	
	htmlkod += "<table style=\"width:100%\">";
	//htmlkod += "<tr>";
	//htmlkod += "<th colspan=\"3\">" + window.parent.aktivtrpvalobjekt.rubrik + "</th>";
	//htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod += "<td></td>";
	htmlkod += "<td class=\"center\">Från folkslag <br>\(" + window.parent.rollperson.folkslag.rubrik + "\)</td>";
	htmlkod += "<td class=\"center\" colspan=\"3\">Extratärningar</td>";
	htmlkod += "<td class=\"center\">Summa</td>";
	htmlkod += "</tr>";
	
	for (i=0; i<grundattributlista.length;i++){
		htmlkod += "<tr>";
		htmlkod += "<td>" + grundattributrubriker[i]  + "</td>";
		
		//console.log(window.parent.rollperson.folkslag.rubrik);
		//console.log(grundattributlista[i]);
		
		//console.log(window.parent.rollperson.folkslag.subval[0][0][0][grundattributlista[i]].varde);
		
		if (window.parent.rollperson.folkslag[grundattributlista[i]].varde % 4 ==0){
			
			htmlkod += "<td class=\"center\"><div id=\"grundattributlista\[i\]_folkslag\">" + vardetilltarningar(rollperson.folkslag[grundattributlista[i]].varde)  + "&#8199;&#8199;</div></td>";
			
		}else{
			htmlkod += "<td class=\"center\"><div id=\"grundattributlista\[i\]_folkslag\">" + window.parent.vardetilltarningar(window.parent.rollperson.folkslag[grundattributlista[i]].varde)  + "</div></td>";
		}
		
		
		htmlkod += "<td class=\"center\" style=\"width:" + knappcellbredd + "%\"><a id=\"" + grundattributlista[i] + "_minska\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\"  onclick=\"andraextratarningar\(\'" + grundattributlista[i] + "\', -1\);return false;\">&ndash;</a></td>"; // onclick
		
		
		
		htmlkod += "<td class=\"center\" width=\"12%\"><div id=\"" + grundattributlista[i] + "_extratarningar\">" + (extratarningar[grundattributlista[i]]).toString() + "T6</td>";
		htmlkod += "<td class=\"center\" style=\"width:" + knappcellbredd + "%\"><a id=\"" + grundattributlista[i] + "_oka\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\"  onclick=\"andraextratarningar\(\'" + grundattributlista[i] + "\', 1\);return false;\">\+</a></td>"; // onclick
		if (window.parent.rollperson.folkslag[grundattributlista[i]].varde % 4 ==0){
			htmlkod += "<td class=\"center\"><div id=\"" + grundattributlista[i] + "_summa\">" + window.parent.vardetilltarningar(window.parent.rollperson.folkslag[grundattributlista[i]].varde+extratarningar[grundattributlista[i]]*4)  + "&#8199;&#8199;</div></td>";
		}else{
			htmlkod += "<td class=\"center\"><div id=\"" + grundattributlista[i] + "_summa\">" + window.parent.vardetilltarningar(window.parent.rollperson.folkslag[grundattributlista[i]].varde+extratarningar[grundattributlista[i]]*4)  + "</div></td>";
		}
		htmlkod += "</tr>";
		
		
	}
	
	htmlkod += "<tr>";
	htmlkod += "<td style=\"height:45px\" colspan=\"2\">Kvarvarande tärningar</td>";
	//htmlkod += "<td class=\"center\" colspan=\"3\"><div id=\"kvarvarandetarningar\">" + (10-summeraarray(extratarningar)).toString() + "T6</div></td>";
	htmlkod += "<td class=\"center\" colspan=\"3\"><div id=\"kvarvarandetarningar\">" + kvarvarandetarningar + "T6</div></td>";

	htmlkod += "<td></td>";
	htmlkod += "</tr>";
	htmlkod += "</table>";

	htmlkod += "</div>";

	var htmlkodrubrik = "<div class='garald'>";

	window.parent.document.getElementById('hogerkategorival').height="0";
	htmlkodrubrik += "<table style=\"width:100%\">";
	htmlkodrubrik += "<tr>";
	htmlkodrubrik += "<td class=\"center\" width=\"30%\"><a  href=\"PleaseEnableJavascript.html\" onclick=\"nollagrundattribut();return false;\">Nolla extra&shy;tärningar</a> <span class=\"break0p5em\"></span> <a  href=\"PleaseEnableJavascript.html\" onclick=\"anropaslumpagrundattribut();return false;\">Slumpa extra&shy;tärningar</a></td>";
	htmlkodrubrik += "<td class=\"center\"><div><span></span><h1 id=\"grundattribut_rubrik\">Grundattribut</div></h1></td>";
	htmlkodrubrik += "<td class=\"center\" width=\"30%\"><a  href=\"PleaseEnableJavascript.html\" onclick=\"sparagrundattribut();return false;\">Spara grund&shy;attribut &rArr;</a></td>";
	htmlkodrubrik += "</tr>";
	
	htmlkodrubrik += "</table>";
	htmlkodrubrik += "</div>";
	
	document.getElementById("hogerkategorival").innerHTML = "";
	document.getElementById("hogerkategoritabell").innerHTML = "";
	
	document.getElementById("hogerkategoribeskrivning").innerHTML = htmlkod;
	document.getElementById("hogerkategorirubrik").innerHTML = htmlkodrubrik;
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	
}

function sparagrundattribut(){
	var i
	grundattributlista=window.parent.attributobjekt.grundattributlista;
	
	if (rollperson.handelsetabellobjektlista.length > 0){
		window.alert("Grundattributen kan ej ändras efter att händelsetabellslagen påbörjats");
	}else{
	
		if (kvarvarandetarningar==0){
			// spara grundattribut
			if ("attributtarningar" in rollperson){
				rollperson=nollarollperson(rollperson);
				
				if ("bakgrund" in rollperson){
					rollperson= summerarollperson(rollperson, rollperson.bakgrund);
				}
				if ("folkslag" in rollperson){
					rollperson= summerarollperson(rollperson, rollperson.folkslag);
				}
				if ("sallskap" in rollperson){
					rollperson= summerarollperson(rollperson, rollperson.sallskap);
				}
				
				if ("arketyp" in rollperson){
					rollperson= summerarollperson(rollperson, rollperson.arketyp);
				}
				if ("miljo" in rollperson){
					rollperson= summerarollperson(rollperson, rollperson.miljo);
				}
				
			}else{
			
			}
			rollperson.attributtarningar={};
			for (i=0;i<grundattributlista.length;i++){
				rollperson.attributtarningar[grundattributlista[i]]={};
				rollperson.attributtarningar[grundattributlista[i]].varde=extratarningar[grundattributlista[i]]*4;
				
			}
			rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
			
			
			uppdateravanstersammanfattning();
			skrivhogerkategorityper();
		}else{
			window.alert("Det finns " + kvarvarandetarningar + " tärningar kvar att placera.");
		}
	}
	// extratarningar är global
	
}

function skrivsallskapkategorier(){
	
	var sidocellbredd=18;
	
	var htmlkod = "<div class='garaldcenter'>";

	window.parent.document.getElementById('hogerkategorival').height="80";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\">";
	htmlkod += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpasallskap();return false;\">Slumpa sällskap</a>";
	htmlkod += "</td>";
	htmlkod += "<td class=\"center\">";
	for (i=0;i<window.parent.sallskapobjekt.lista.length;i++){
		//console.log(i);
		if ("sallskap" in rollperson){
			if (rollperson.sallskap.namn==window.parent.sallskapobjekt[window.parent.sallskapobjekt.lista[i]].namn){
				htmlkod += "<b>";
			}
		}
		htmlkod += "<a id=\"rpvalkategori_" + window.parent.sallskapobjekt[window.parent.sallskapobjekt.lista[i]].namn + "\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"bytsallskap('" + window.parent.sallskapobjekt[window.parent.sallskapobjekt.lista[i]].namn + "');return false;\">" + window.parent.sallskapobjekt[window.parent.sallskapobjekt.lista[i]].rubrik + "</a>"; 
		
		if ("sallskap" in rollperson){
			if (rollperson.sallskap.namn==window.parent.sallskapobjekt[window.parent.sallskapobjekt.lista[i]].namn){
				htmlkod += "</b>";
			}
		}
		/*
		if (i==Math.floor(window.parent.folkslagobjekt.lista.length/3)){
			htmlkod += "<br>";
		}else if (i == 2 * Math.floor(window.parent.folkslagobjekt.lista.length/3)){
			htmlkod += "<br>";
		}else if(i==window.parent.folkslagobjekt.lista.length-1){
			// Skriv inget
		}else{
			htmlkod += " &#124; ";
		}
		*/
		if(i==window.parent.sallskapobjekt.lista.length-1){
			// Skriv inget
		}else if ((i+1)%5==0){
			htmlkod += "<br>";
		}else{
			htmlkod += " &#124; ";
		}
		
		
	}

	htmlkod += "</td>";
	//htmlkod += "<td class=\"center\" width=\"18%\">";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\">";
	//htmlkod += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumparesterandeval(rollperson);return false;\">" + "Slumpa resterande val" + "</a>"
	htmlkod += "</td>";
	htmlkod += "</td></tr></table>";
	htmlkod += "</div>";
	document.getElementById("hogerkategorival").innerHTML = htmlkod;
}
function slumpasallskap(){
	sallskapindex=slumpa(sallskapobjekt.lista.length);
	aktivtsallskapobjekt=sallskapobjekt[sallskapobjekt.lista[sallskapindex-1]];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	skrivsallskap();
}


function skrivsallskap(){
	
	
	var sidocellbredd=18;
	var sidocellbreddextra=23;
	var knappcellbredd=4;
	aktivtrpvalobjekt=aktivtsallskapobjekt;
	
	
	// Sällskapets subval väljs normalt inte under sällskap utan istället under arketyp/miljö
	/*
	if (aktivtsallskapobjekt.aktiverad==0){
		aktivtsallskapobjekt=valj_subval(aktivtsallskapobjekt,1);
		nollasubval(aktivtsallskapobjekt);
	}
	*/

	
	
	var htmlkod = "<div class='garald'>";
	var i
	var j
	var m
	
	var harsubval=0;
	var sallskaprubriker=[["utbredning","Utbredning"],["antagningskrav","Antagningskrav"],["forpliktelser","Förpliktelser"],["tabun","Tabun"],["vannerfiender","Vänner och fiender"],["fardigheterstridskonster","Färdigheter och stridskonster"],["symboler","Symboler"]];
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod += "<td class=\"beskrivning\">" + aktivtsallskapobjekt.beskrivning + "</td>";
	htmlkod += "<tr>";
	htmlkod += "</table>";
	htmlkod += "<table style=\"width:100%\">";
	for (m=0;m<sallskaprubriker.length;m++){
		if (sallskaprubriker[m][0] in aktivtsallskapobjekt.subval[0][0][0]){
			htmlkod += "<tr>";
			htmlkod += "<td><b>" + sallskaprubriker[m][1] + ": </b>";
			htmlkod += "" + aktivtsallskapobjekt.subval[0][0][0][sallskaprubriker[m][0]] + "</td>";
			htmlkod += "</tr>";
		}
	}
	
	
	
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod += "<td colspan=\"2\"><b>Utrustning och resurser</b>: Rollpersonen kan välja bland resurserna nedan. Dessa är valbara under resursvalen för antingen arketyp eller miljö.</td></tr>";
	
	
	for (j=1;j<aktivtsallskapobjekt.subval[1].length;j++){
		htmlkod += "<tr>";
		htmlkod += "<td style=\"width:8%\"></td>";
		htmlkod += "<td><b>" + aktivtsallskapobjekt.subval[1][j][0].rubrik + "</b>: " + aktivtsallskapobjekt.subval[1][j][0].beskrivning + "</td>";
		htmlkod += "</tr>";
	}
	
	
	
	var htmlkodrubrik = "<div class='garaldcenter'>";

	htmlkodrubrik += "<table style=\"width:100%\">";
	htmlkodrubrik += "<tr>";
	htmlkodrubrik += "<td class=\"center\" style=\"width:" + sidocellbreddextra + "%\">&nbsp;</td>";
	htmlkodrubrik += "<td class=\"center\"><div><span></span><h1>" + aktivtsallskapobjekt.rubrik +"</div></h1></td>";
	htmlkodrubrik += "<td class=\"center\" style=\"width:" + sidocellbreddextra + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"sparasallskap();return false;\">Välj " + aktivtsallskapobjekt.rubrik + " &rArr;</a></td>";
	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "</table>";
	htmlkodrubrik += "</div>";
	
	
	document.getElementById("hogerkategoritabell").innerHTML = "";
	document.getElementById("hogerkategorirubrik").innerHTML = htmlkodrubrik;
	document.getElementById("hogerkategoribeskrivning").innerHTML = htmlkod;
}

function sparasallskap(){
	//folkslagobjektet är globalt, spara klon till rp
	// Lös ut frågan med subval
	// Kör full sammanfattning
	// Visa sammanfattning till vänster
	// Gå till grundattribut till höger
	//console.log("sparafolkslag körs");
	
	//var saknadrubrikarray=kontrollerasubval(rollpersonsvalobjekt);
	//window.alert("sparasallskap körs, rollperson.arketypsallskapsval = " + rollperson.arketypsallskapsval + ", rollperson.miljosallskapsval = " + rollperson.miljosallskapsval);
	var i;
	
	slump=1;
	if (rollperson.handelsetabellobjektlista.length > 0){
		window.alert("Sällskap kan ej ändras efter att händelsetabellslagen påbörjats");
	}else if (rollperson.arketypsallskapsval==1){
		window.alert("Sällskapet kan ej ändras eftersom sällskapsval gjorts under arketypen. Ändra först arketypens resursval och byt därefter sällskap." );
	}else if (rollperson.miljosallskapsval==1){
		window.alert("Sällskapet kan ej ändras eftersom sällskapsval gjorts under miljön. Ändra först miljöns resursval och byt därefter sällskap." );
	
	}else{
		if ("sallskap" in rollperson){
			rollperson=nollarollperson(rollperson);
			
			if ("bakgrund" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.bakgrund);
			}
			if ("attributtarningar" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
			}
			
			if ("folkslag" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.miljo);
			}
			
			if ("arketyp" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.arketyp);
			}
			if ("miljo" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.miljo);
			}
			
		}else{
		
		}
		rollperson.sallskap=clone(aktivtsallskapobjekt);
		//---
		//rollperson.folkslag=valj_subval(rollperson.sallskap, slump);
		// Subval summeras inte här, det görs istället under arketyp eller miljö
		//rollperson.folkslag=summera_subval(rollperson.sallskap);
		
		
		rollperson= summerarollperson(rollperson, rollperson.sallskap);
		
		// Extraenheter
		rollperson=nollaextraenheter(rollperson);
		rollperson=extraenheter(rollperson);
		
		
		rollperson=kvarhandelsetabellslag(rollperson);
		
		
		uppdateravanstersammanfattning();
		skrivhogerkategorityper();
		skrivsallskapkategorier();
	}
}




function skrivarketypkategorier(){
	
	var sidocellbredd=18;
	
	var htmlkod ="<div class='garaldcenter'>";

	document.getElementById('hogerkategorival').height="60";

	htmlkod +="<table style=\"width:100%\">";
	htmlkod +="<tr>";
	htmlkod +="<td class=\"center\" style=\"width:" + sidocellbredd + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpaarketyp();return false;\">Slumpa arketyp</a></td>";
	htmlkod +="<td class=\"center\">";

	for (i=0;i<arketypobjekt.lista.length;i++){
		//console.log(i)
		//htmlkod +="<a id=\"rpvalkategori_" + arketypobjekt[arketypobjekt.lista[i]].namn + "\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"rpvalkategori('" + arketypobjekt[arketypobjekt.lista[i]].namn + "');return false;\">" + arketypobjekt[arketypobjekt.lista[i]].rubrik + "</a>"; 
		
		if ("arketyp" in rollperson){
			if (rollperson.arketyp.namn==arketypobjekt[arketypobjekt.lista[i]].namn){
				htmlkod += "<b>";
			}
		}
		
		htmlkod +="<a id=\"rpvalkategori_" + arketypobjekt[arketypobjekt.lista[i]].namn + "\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"bytarketyp('" + arketypobjekt[arketypobjekt.lista[i]].namn + "');return false;\">" + arketypobjekt[arketypobjekt.lista[i]].rubrik + "</a>"; 
		
		if ("arketyp" in rollperson){
			if (rollperson.arketyp.namn==arketypobjekt[arketypobjekt.lista[i]].namn){
				htmlkod += "</b>";
			}
		}
		
		//console.log("<a id=\"rpvalkategori_" + arketypobjekt[arketypobjekt.lista[i]].namn + "\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"rpvalkategori('" + arketypobjekt[arketypobjekt.lista[i]].namn + "');return false;\">" + arketypobjekt[arketypobjekt.lista[i]].rubrik + "</a>";
		
		if (i==Math.floor(arketypobjekt.lista.length/2)){
			htmlkod +="<br>";
		}else if(i==arketypobjekt.lista.length-1){
			// Skriv inget
		}else{
			htmlkod +=" &#124; ";
		}
	}

	htmlkod +="</td>";
	htmlkod +="<td class=\"center\" style=\"width:" + sidocellbredd + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumparesterandeval(rollperson);return false;\">" + "Slumpa resterande val" + "</a></td></tr></table>";
	htmlkod +="</div>";
	document.getElementById("hogerkategorival").innerHTML = htmlkod;
}
function skrivmiljokategorier(){
	
	var sidocellbredd=18;
	
	var htmlkod ="<div class='garaldcenter'>";

	window.parent.document.getElementById('hogerkategorival').height="60";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpamiljo();return false;\">Slumpa miljö</a></td>";
	htmlkod += "<td class=\"center\">";
	for (i=0;i<window.parent.miljoobjekt.lista.length;i++){
		
		if ("miljo" in rollperson){
			if (rollperson.miljo.namn==window.parent.miljoobjekt[window.parent.miljoobjekt.lista[i]].namn){
				htmlkod +="<b>";
			}
		}
		htmlkod += "<a id=\"rpvalkategori_" + window.parent.miljoobjekt[window.parent.miljoobjekt.lista[i]].namn + "\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"bytmiljo('" + window.parent.miljoobjekt[window.parent.miljoobjekt.lista[i]].namn + "');return false;\">" + window.parent.miljoobjekt[window.parent.miljoobjekt.lista[i]].rubrik + "</a>"; 
		
		if ("miljo" in rollperson){
			if (rollperson.miljo.namn==window.parent.miljoobjekt[window.parent.miljoobjekt.lista[i]].namn){
				htmlkod +="</b>";
			}
		}
		
		if (i==Math.floor(window.parent.miljoobjekt.lista.length/2)){
			htmlkod += "<br>";
		}else if(i==window.parent.miljoobjekt.lista.length-1){
			// Skriv inget
		}else{
			htmlkod += " &#124; ";
		}
	}
	htmlkod += "</td>";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumparesterandeval(rollperson);return false;\">" + "Slumpa resterande val" + "</a></td></tr></table>";
	htmlkod += "</div>";
	document.getElementById("hogerkategorival").innerHTML = htmlkod;
}

function slumpaarketyp(){
	arketypindex=slumpa(arketypobjekt.lista.length);
	aktivtarketypobjekt=arketypobjekt[arketypobjekt.lista[arketypindex-1]];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	skrivarketypmiljo("arketyp");
}

function slumpamiljo(){
	miljoindex=slumpa(miljoobjekt.lista.length);
	aktivtmiljoobjekt=miljoobjekt[miljoobjekt.lista[miljoindex-1]];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	skrivarketypmiljo("miljo");
}


function skrivarketypmiljo(objektstyp){
	//window.alert("skrivarketyper kallad");
	

	var sidocellbredd=18;
	var sidocellbreddextra=23;
	var knappcellbredd=4;
	var komplementobjektstyp="";
	slumpsubvalarray=["pengarslag", "vardeslag", "kontaktenhetbool"];
	
	//var aktivtrpvalobjekt
	
	if (objektstyp=="arketyp"){
		//Slumpa endast subval om objektet ej aktiverats
		if (aktivtarketypobjekt.aktiverad==0){
			aktivtarketypobjekt=valj_subval(aktivtarketypobjekt,1);
			nollasubval(aktivtarketypobjekt);
		}
		//aktivtrpvalobjekt=clone(aktivtarketypobjekt);
		aktivtrpvalobjekt=aktivtarketypobjekt;
		komplementobjektstyp="miljo";
	}else if (objektstyp=="miljo"){
		if (aktivtmiljoobjekt.aktiverad==0){
		
			aktivtmiljoobjekt=valj_subval(aktivtmiljoobjekt,1);
			nollasubval(aktivtmiljoobjekt);
		}
		aktivtrpvalobjekt=aktivtmiljoobjekt;
		komplementobjektstyp="arketyp";
	}
	
	document.getElementById("hogerkategoribeskrivning").innerHTML = "";
	
	
	var htmlkod ="<div class=\"garald\">";

	//window.parent.document.getElementById('hogerkategorival').height="60";

	htmlkod +="<table style=\"width:100%\">";
	//htmlkod +="<tr>";
	//htmlkod +="<th colspan=\"3\">" + aktivtrpvalobjekt.rubrik + "</th>";
	//htmlkod +="</tr>";
	htmlkod +="<tr>";
	htmlkod +="<td class=\"beskrivning\" colspan=\"3\">" + aktivtrpvalobjekt.beskrivning + "</td>";
	htmlkod +="<tr>";
	htmlkod +="<td class=\"rubrikniva2\" colspan=\"3\">Händelsetabeller</td>";
	htmlkod +="</tr>";

	for (i=0;i<aktivtrpvalobjekt.subval[0][0][0].beskrivningtabeller.length;i++){
		htmlkod +="<tr>";
		htmlkod +="<td colspan=\"3\">" + aktivtrpvalobjekt.subval[0][0][0].beskrivningtabeller[i] +  "</td>";
		htmlkod +="</tr>";
	}
	htmlkod +="<tr>";
	htmlkod +="<td class=\"rubrikniva2\" colspan=\"3\">Enheter</td>";
	htmlkod +="</tr>";


	for (i=0;i<aktivtrpvalobjekt.subval[0][0][0].beskrivningenheter.length;i++){
		htmlkod +="<tr>";
		htmlkod +="<td colspan=\"3\">" + aktivtrpvalobjekt.subval[0][0][0].beskrivningenheter[i] +  "</td>";
		htmlkod +="</tr>";
	}

	htmlkod +="<tr>";
	htmlkod +="<td class=\"rubrikniva2\" colspan=\"3\">Utrustning \& resurser</td>";
	htmlkod +="</tr>";
	
	
	/*
	// Testsällskap
	rollperson.sallskap={};
	rollperson.sallskap.namn="testsallskap";
	rollperson.sallskap.rubrik="Testsällskap";
	rollperson.sallskap.subval = [[[]]];
	rollperson.sallskap.subval[0][0][0] = {};
	rollperson.sallskap.subval[0][0][0].valdasub = [];
	rollperson.sallskap.subval[0][0][0].vald = 1;
	rollperson.sallskap.subval[0][0][0].slumpning = 0;
	
	rollperson.sallskap.subval.push([[]]);
	rollperson.sallskap.subval[1][0][0]  = {};
	rollperson.sallskap.subval[1][0][0].valdasub = [];
	rollperson.sallskap.subval[1][0][0].vald = 0;
	rollperson.sallskap.subval[1][0][0].slumpning = 0;
	
	rollperson.sallskap.subval[1].push([]);
	rollperson.sallskap.subval[1][1][0] = {};
	rollperson.sallskap.subval[1][1][0].valdasub = [];
	rollperson.sallskap.subval[1][1][0].vald = 0;
	rollperson.sallskap.subval[1][1][0].kontakt = "Lojal andreman."
	rollperson.sallskap.subval[1][1][0].rubrik="Andreman"
	rollperson.sallskap.subval[1][1][0].beskrivning="Rollpersonen har vid sin sida en lojal andreman som är dennes högra hand."
    rollperson.sallskap.subval[1][1][0].slumpning = 0;
	
	rollperson.sallskap.subval[1].push([]);
	rollperson.sallskap.subval[1][2][0] = {};
	rollperson.sallskap.subval[1][2][0].valdasub = [];
	rollperson.sallskap.subval[1][2][0].vald = 0;
	rollperson.sallskap.subval[1][2][0].avtrubbningvald=1;
	rollperson.sallskap.subval[1][2][0].avtrubbningovernaturligt=1;
	rollperson.sallskap.subval[1][2][0].rubrik="Avtrubbning"
	rollperson.sallskap.subval[1][2][0].beskrivning="1 Avtrubbningskryss vardera för våld och övernaturligt."
	rollperson.sallskap.subval[1][2][0].slumpning = 0;
   
	rollperson.sallskap.subval[1].push([]);
	rollperson.sallskap.subval[1][3][0] = {};
	rollperson.sallskap.subval[1][3][0].valdasub = [];
	rollperson.sallskap.subval[1][3][0].vald = 0;
	rollperson.sallskap.subval[1][3][0].resurs = "Emblem som kan ge \+1T6 bonus på en vald social färdighet.";
	rollperson.sallskap.subval[1][3][0].rubrik="Emblem"
	rollperson.sallskap.subval[1][3][0].beskrivning="Rollpersonen har ett emblem som visar på dennes position som ledare. Det kan handla om militära dekorationer, om stöd från en makthavare eller emblem från en orden. Emblemet ger rollpersonen en pondus och associeras med en valfri social färdighet. När rollpersonen visar emblemet för någon som ser upp till eller respekterar dess innebörd så får rollpersonen en bonus på \+1T6 för den associerade färdigheten."
	rollperson.sallskap.subval[1][3][0].slumpning = 0;
	
	for (j=1;j<rollperson.sallskap.subval[1].length;j++){
		rollperson.sallskap.subval[1][j][0].sallskap=1;
	}
	*/
	
	
	if ("sallskap" in rollperson){
		if ("namn" in rollperson.sallskap){
			if (rollperson.sallskap.namn.length>1){
				// Lägg bara till val från sällskapet om det inte tidigare har gjorts varken i det aktuella valet eller hos dess komplement (arketyp|miljö)
				//window.alert("innan aktivtrpvalobjekt.sallskapsval");
				if (aktivtrpvalobjekt.sallskapsval==0){
					//window.alert("arketypsallskapsval= " + rollperson.arketypsallskapsval + ", miljosallskapsval = " + rollperson.miljosallskapsval);
					if (rollperson.arketypsallskapsval+rollperson.miljosallskapsval==0){
						
						i=1;
						m=aktivtrpvalobjekt.subval[i].length;
						//window.alert("Innan forloop");
						for (j=1;j<rollperson.sallskap.subval[1].length;j++){
							aktivtrpvalobjekt.subval[1].push([]);
							//window.alert("Efter push");
							aktivtrpvalobjekt.subval[1][m+j-1][0]={};
							aktivtrpvalobjekt.subval[1][m+j-1][0]=rollperson.sallskap.subval[1][j][0];
							if ("beskrivningvald" in aktivtrpvalobjekt.subval[1][m+j-1][0]){
							}else{
								aktivtrpvalobjekt.subval[1][m+j-1][0].beskrivningvald=aktivtrpvalobjekt.subval[1][m+j-1][0].beskrivning + " <i>(Från sällskapet " + rollperson.sallskap.rubrik + " </i>)";
							}
							
						}
					}
					aktivtrpvalobjekt.sallskapsval=1;
				}
			}
		}
	}
	
	//window.alert("aktivtrpvalrubrik = " + aktivtrpvalobjekt.rubrik);
	//window.alert("110-rubrik = " + aktivtrpvalobjekt.subval[1][1][0].rubrik);
	//window.alert("120-rubrik = " + aktivtrpvalobjekt.subval[1][2][0].rubrik);
	//window.alert("130-rubrik = " + aktivtrpvalobjekt.subval[1][3][0].rubrik);
	//window.alert("140-rubrik = " + aktivtrpvalobjekt.subval[1][4][0].rubrik);
	//window.alert("150-rubrik = " + aktivtrpvalobjekt.subval[1][5][0].rubrik);
	//window.alert("160-rubrik = " + aktivtrpvalobjekt.subval[1][6][0].rubrik);
	//window.alert("170-rubrik = " + aktivtrpvalobjekt.subval[1][7][0].rubrik);
	//window.alert("180-rubrik = " + aktivtrpvalobjekt.subval[1][8][0].rubrik);
	
	//window.alert("efter kopiering");
	
	i=0;
	for (j=1;j<aktivtrpvalobjekt.subval[0].length;j++){
		k=0;
		//htmlkod +="<tr>";
		//htmlkod +="<td colspan=\"3\"><b>" + aktivtrpvalobjekt.subval[0][j][0].rubrik + "</b>: " +  aktivtrpvalobjekt.subval[0][j][0].beskrivning +  "</td>";
		//htmlkod +="</tr>";
		htmlkod +="<tr>";
		
		if ("minantalsubval" in aktivtrpvalobjekt.subval[i][0][0]){
			if (aktivtrpvalobjekt.subval[i][0][0].minantalsubval < aktivtrpvalobjekt.subval[i][0][0].antalsubval){
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + "00\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\"";
				
				// Sätt om  valet ska vara markerat som förval
				if (aktivtrpvalobjekt.subval[i][0][0].valdasub.indexOf(k) == -1){
					//htmlkod += "></form></td>";
				}else{
					htmlkod += " checked = \"checked\"";
				}
				htmlkod += " onchange=\"togglecheckbox\(\'" + objektstyp + "\'," + i + "," + j + ",0\);\"></form></td>";
				
			}
		}
		if (aktivtrpvalobjekt.subval[i][0][0].antalsubval== aktivtrpvalobjekt.subval[i].length-1){
			// Alla subval ska väljas, inputform behövs ej
			htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"></td>";
			htmlkod +="<td colspan=\"2\"><b>" + aktivtrpvalobjekt.subval[i][j][0].rubrik + "</b>: " +  aktivtrpvalobjekt.subval[i][j][0].beskrivningvald +  "</td>";
		}else if (aktivtrpvalobjekt.subval[i][0][0].antalsubval==1){
			// Endast ett subval, radiobutton
			htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"radio\" name=\"" + objektstyp + "_subval_" + i.toString() + "00\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\"";
		
			// Sätt om  valet ska vara markerat som förval
			if (aktivtrpvalobjekt.subval[i][0][0].valdasub.indexOf(k) == -1){
				//htmlkod += "></form></td>";
			}else{
				htmlkod += " checked = \"checked\"";
			}
			htmlkod += " onchange=\"toggleradio\(\'" + objektstyp + "\'," + i + "," + j + ",0\);\"></form></td>";
			
			if (aktivtrpvalobjekt.subval[i][j][k].slumpning==1){
				htmlkod += "<td colspan=\"3\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'" + objektstyp + "\'," + i + "," + j + "," + k + ");return false;\">" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
			}else{
				htmlkod += "<td colspan=\"3\"><b>" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
			}
			
		}else if (aktivtrpvalobjekt.subval[i][0][0].antalsubval>=2){
			// Flera subval, checkbox
			htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + "00\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\"";
		
			
			// Sätt om  valet ska vara markerat som förval
			if (aktivtrpvalobjekt.subval[i][0][0].valdasub.indexOf(k) == -1){
				//htmlkod += "></form></td>";
			}else{
				htmlkod += " checked = \"checked\"";
			}
			htmlkod += " onchange=\"togglecheckbox\(\'" + objektstyp + "\'," + i + "," + j + ",0\);\"></form></td>";
			if (aktivtrpvalobjekt.subval[i][j][k].slumpning==1){
				htmlkod += "<td colspan=\"3\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'" + objektstyp + "\'," + i + "," + j + "," + k + ");return false;\">" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
			}else{
				htmlkod += "<td colspan=\"3\"><b>" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
			}
		}else{
		
			if (aktivtrpvalobjekt.subval[i][j][k].slumpning==1){
				htmlkod += "<td colspan=\"3\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'" + objektstyp + "\'," + i + "," + j + "," + k + ");return false;\">" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
			}else{
				htmlkod += "<td colspan=\"3\"><b>" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
			}
		}
		htmlkod +="</tr>";
		
		for (k=1;k<aktivtrpvalobjekt.subval[1][j].length;k++){
			htmlkod +="<tr>";
			htmlkod +="<td></td>";
			
			// Om ett subval kan lämnas som ej valt (exempelvis kamorianers hamnskiftarförmåga)
			//window.alert("start k=1");
			
			if ("minantalsubval" in aktivtrpvalobjekt.subval[i][j][0]){
				if (aktivtrpvalobjekt.subval[i][j][0].minantalsubval < aktivtrpvalobjekt.subval[i][j][0].antalsubval){
					htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\"";
					
					// Sätt om  valet ska vara markerat som förval
					if (aktivtrpvalobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
						//htmlkod += "></form></td>";
					}else{
						htmlkod += " checked = \"checked\"";
					}
					htmlkod += " onchange=\"togglecheckbox\(\'" + objektstyp + "\'," + i + "," + j + "," + k + "\);\"></form></td>";
				}
			//window.alert("mellan if och första else if");
			}else if (aktivtrpvalobjekt.subval[i][j][0].antalsubval== aktivtrpvalobjekt.subval[i].length-1){
				// Alla subval ska väljas, inputform behövs ej
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"></td>";
			//window.alert("mellan första else if och andra");
			}else if (aktivtrpvalobjekt.subval[i][j][0].antalsubval==1){
				// Endast ett subval, radiobutton
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"radio\" name=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\"";
				
				// Sätt om  valet ska vara markerat som förval
				if (aktivtrpvalobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
					//htmlkod += "></form></td>";
				}else{
					htmlkod += " checked = \"checked\"";
				}
				htmlkod += " onchange=\"toggleradio\(\'" + objektstyp + "\'," + i + "," + j + "," + k + "\);\"></form></td>";
			//window.alert("mellan andra else if och tredje else if");	
			}else if (aktivtrpvalobjekt.subval[i][j][0].antalsubval>=2){
				// Flera subval, checkbox
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\"";
				
				// Sätt om  valet ska vara markerat som förval
				if (aktivtrpvalobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
					//htmlkod += "></form></td>";
				}else{
					htmlkod += " checked = \"checked\"";
				}
				htmlkod += " onchange=\"togglecheckbox\(\'" + objektstyp + "\'," + i + "," + j + "," + k + "\);\"></form></td>";
			}
			//window.alert("innan slumpning-if");
			if (aktivtrpvalobjekt.subval[i][j][k].slumpning==1){
				htmlkod += "<td colspan=\"1\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'" + objektstyp + "\'," + i + "," + j + "," + k + ");return false;\">" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
			}else{
				htmlkod += "<td colspan=\"1\"><b>" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
			}
			if ("beskrivningvald" in aktivtrpvalobjekt.subval[i][j][k]){
				htmlkod +=": " + aktivtrpvalobjekt.subval[i][j][k].beskrivningvald;
			}
			htmlkod +="</td>";
			htmlkod +="</tr>";
		}
	
	}

	htmlkod +="<tr>";
	htmlkod +="<td class=\"rubrikniva2\" colspan=\"3\">Välj två av nedanstående: </td>";
	htmlkod +="</tr>";
	
	
	//window.alert("mellan i=0, i=1");	
	
	i=1;
	
	for (j=1;j<aktivtrpvalobjekt.subval[1].length;j++){
		k=0;
		htmlkod +="<tr>";
		//window.alert("början av loopen . i= " + i + ", j=" + j + ", k=" + k);
		if ("minantalsubval" in aktivtrpvalobjekt.subval[i][0][0]){
			if (aktivtrpvalobjekt.subval[i][0][0].minantalsubval < aktivtrpvalobjekt.subval[i][0][0].antalsubval){
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + "00\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\"";
				
				// Sätt om  valet ska vara markerat som förval
				if (aktivtrpvalobjekt.subval[i][0][0].valdasub.indexOf(k) == -1){
					//htmlkod += "></form></td>";
				}else{
					htmlkod += " checked = \"checked\"";
				}
				htmlkod += " onchange=\"togglecheckbox\(\'" + objektstyp + "\'," + i + "," + j + ",0\);\"></form></td>";
			}
		}if (aktivtrpvalobjekt.subval[i][0][0].antalsubval== aktivtrpvalobjekt.subval[i].length-1){
			// Alla subval ska väljas, inputform behövs ej
			htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"></td>";
		}else if (aktivtrpvalobjekt.subval[i][0][0].antalsubval==1){
			// Endast ett subval, radiobutton
			htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"radio\" name=\"" + objektstyp + "_subval_" + i.toString() + "00\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\"";
		
			// Sätt om  valet ska vara markerat som förval
			if (aktivtrpvalobjekt.subval[i][0][0].valdasub.indexOf(k) == -1){
				//htmlkod += "></form></td>";
			}else{
				htmlkod += " checked = \"checked\"";
			}
			htmlkod += " onchange=\"toggleradio\(\'" + objektstyp + "\'," + i + "," + j + ",0\);\"></form></td>";
		
		}else if (aktivtrpvalobjekt.subval[i][0][0].antalsubval>=2){
			// Flera subval, checkbox
			htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + "00\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\"";
		
			// Sätt om  valet ska vara markerat som förval
			if (aktivtrpvalobjekt.subval[i][0][0].valdasub.indexOf(k) == -1){
				//htmlkod += "></form></td>";
			}else{
				htmlkod += " checked = \"checked\"";
			}
			htmlkod += " onchange=\"togglecheckbox\(\'" + objektstyp + "\'," + i + "," + j + ",0\);\"></form></td>";
		
		}
		
		//htmlkod +="<td style=\"width:" + knappcellbredd + "%\" valign=\"top\">&bull;</td>";
		
		if (aktivtrpvalobjekt.subval[i][j][k].slumpning==1){
			htmlkod += "<td colspan=\"2\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'" + objektstyp + "\'," + i + "," + j + "," + k + ");return false;\">" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
		}else{
			htmlkod += "<td colspan=\"2\"><b>" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
		}
		htmlkod +="</tr>";
		//window.alert("innan k-loopen . i= " + i + ", j=" + j + ", k=" + k);
		
		for (k=1;k<aktivtrpvalobjekt.subval[1][j].length;k++){
			htmlkod +="<tr>";
			htmlkod +="<td></td>";
			//window.alert("innan minantalsubval");
			// Om ett subval kan lämnas som ej valt (exempelvis kamorianers hamnskiftarförmåga)
			if ("minantalsubval" in aktivtrpvalobjekt.subval[i][j][0]){
				if (aktivtrpvalobjekt.subval[i][j][0].minantalsubval < aktivtrpvalobjekt.subval[i][j][0].antalsubval){
					htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\"";
					
					// Sätt om  valet ska vara markerat som förval
					if (aktivtrpvalobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
						//htmlkod += "></form></td>";
					}else{
						htmlkod += " checked = \"checked\"";
					}
					htmlkod += " onchange=\"togglecheckbox\(\'" + objektstyp + "\'," + i + "," + j + "," + k + "\);\"></form></td>";
				}
			//window.alert("mellan if och första else if; k=" + k);
			}else if (aktivtrpvalobjekt.subval[i][j][0].antalsubval== aktivtrpvalobjekt.subval[i].length-1){
				// Alla subval ska väljas, inputform behövs ej
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"></td>";
			//window.alert("mellan första else if och andra else if; k=" + k);
			}else if (aktivtrpvalobjekt.subval[i][j][0].antalsubval==1){
				// Endast ett subval, radiobutton
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"radio\" name=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\"";
				
				// Sätt om  valet ska vara markerat som förval
				if (aktivtrpvalobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
					//htmlkod += "></form></td>";
				}else{
					htmlkod += " checked = \"checked\"";
				}
				htmlkod += " onchange=\"toggleradio\(\'" + objektstyp + "\'," + i + "," + j + "," + k + "\);\"></form></td>";
			//window.alert("mellan andra else if och tredje else if; k=" + k);	
			}else if (aktivtrpvalobjekt.subval[i][j][0].antalsubval>=2){
				// Flera subval, checkbox
				htmlkod += "<td style=\"width:" + knappcellbredd + "%\" valign=\"top\"><input type=\"checkbox\" name=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + "0\" value=\"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\" id = \"" + objektstyp + "_subval_" + i.toString() + j.toString() + k.toString() + "\"";
				
				// Sätt om  valet ska vara markerat som förval
				if (aktivtrpvalobjekt.subval[i][j][0].valdasub.indexOf(k) == -1){
					//htmlkod += "></form></td>";
				}else{
					htmlkod += " checked = \"checked\"";
				}
				htmlkod += " onchange=\"togglecheckbox\(\'" + objektstyp + "\'," + i + "," + j + "," + k + "\);\"></form></td>";
			}
			//window.alert("Innan slumpningif" + k);
			if (aktivtrpvalobjekt.subval[i][j][k].slumpning==1){
				htmlkod += "<td colspan=\"1\"><b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomuppdaterasubval(\'" + objektstyp + "\'," + i + "," + j + "," + k + ");return false;\">" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</a></b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
			}else{
				htmlkod += "<td colspan=\"1\"><b>" + aktivtrpvalobjekt.subval[i][j][k].rubrik + "</b>: " +  aktivtrpvalobjekt.subval[i][j][k].beskrivningvald +  "</td>";
			}
			//if ("beskrivningvald" in aktivtrpvalobjekt.subval[i][j][k]){
			//	htmlkod +=": " + aktivtrpvalobjekt.subval[i][j][k].beskrivningvald;
			//}
			htmlkod +="</td>";
			htmlkod +="</tr>";
		}
		//window.alert("slutet av loopen. i= " + i + ", j=" + j + ", k=" + k);
	}

	htmlkod +="</table>";
	htmlkod +="</div>";
	//window.alert(htmlkod);
	
	//window.alert("efter subvalsgenomgång");
	
	var htmlkodrubrik = "<div class='garaldcenter'>";

	//window.parent.document.getElementById('hogerkategorival').height="60";
	htmlkodrubrik += "<table style=\"width:100%\">";
	htmlkodrubrik += "<tr>";
	
	
	if (objektstyp=="arketyp"){
		htmlkodrubrik += "<td class=\"center\" style=\"width:" + sidocellbreddextra + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpaallasubval(\'arketyp\');return false;\">Slumpa alla subval</a>";
		htmlkodrubrik += "<br>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"nollasubvaluppdatera(\'arketyp\');return false;\">Nolla alla subval</a>";
		htmlkodrubrik += "</td>";
		htmlkodrubrik += "<td class=\"center\"><div><span></span><h1>" + aktivtarketypobjekt.rubrik +"</div></h1></td>";
		htmlkodrubrik += "<td class=\"center\" style=\"width:" + sidocellbreddextra + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"sparaarketyp();return false;\">Välj " + aktivtarketypobjekt.rubrik + "&rArr;</a></td>";
	}else if (objektstyp=="miljo"){
		htmlkodrubrik += "<td class=\"center\" style=\"width:" + sidocellbreddextra + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpaallasubval(\'miljo\');return false;\">Slumpa alla subval</a>";
		htmlkodrubrik += "<br>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"nollasubvaluppdatera(\'miljo\');return false;\">Nolla alla subval</a>";
		htmlkodrubrik += "</td>";
		htmlkodrubrik += "<td class=\"center\"><div><span></span><h1>" + aktivtmiljoobjekt.rubrik +"</div></h1></td>";
		htmlkodrubrik += "<td class=\"center\" style=\"width:" + sidocellbreddextra + "%\"><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"sparamiljo();return false;\">Välj " + aktivtmiljoobjekt.rubrik + "&rArr;</a></td>";
	}else{
	}
	
	
	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "</table>";
	htmlkodrubrik += "</div>";
	
	document.getElementById("hogerkategoritabell").innerHTML = "";
	document.getElementById("hogerkategorirubrik").innerHTML = htmlkodrubrik;
	document.getElementById("hogerkategoribeskrivning").innerHTML = htmlkod;
	//document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	
	// Checkar radio- och checkboxknappar beroende på subval
	subvalobjektknapp(objektstyp);
}
function sparaarketyp(){
	var slump=1;
	
	valjobligatoriskasubval(aktivtarketypobjekt);
	
	//var saknadrubrikarray=kontrollerasubval(rollpersonsvalobjekt);
	var saknadrubrikarray=kontrollerasubval(aktivtarketypobjekt);
	
	var saknadmeddelande="Alla subval är inte gjorda. Slumpa eller välj dessa innan du sparar. ";
	var i;
	
	if (rollperson.handelsetabellobjektlista.length > 0){
		window.alert("Arketyp kan ej ändras efter att händelsetabellslagen påbörjats");
	}else if(saknadrubrikarray.length>0){
		for (i=0;i<saknadrubrikarray.length;i++){
			saknadmeddelande += "\n" + saknadrubrikarray[i];
		}
		window.alert(saknadmeddelande);
	}else{
		if ("arketyp" in rollperson){
			rollperson=nollarollperson(rollperson);
			
			if ("bakgrund" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.bakgrund);
			}
			if ("folkslag" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.folkslag);
			}
			if ("attributtarningar" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
			}
			if ("sallskap" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.sallskap);
			}
			
			if ("miljo" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.miljo);
			}
		}else{
		
		}
		
		rollperson.arketyp=clone(aktivtarketypobjekt);
		//---
		//rollperson.arketyp=valj_subval(rollperson.arketyp, slump);
		rollperson.arketyp=summera_subval(rollperson.arketyp);
		rollperson= summerarollperson(rollperson, rollperson.arketyp);
		
		// Extraenheter
		rollperson=nollaextraenheter(rollperson);
		rollperson=extraenheter(rollperson);
		
		
		rollperson=kvarhandelsetabellslag(rollperson);
		uppdateravanstersammanfattning();
		skrivhogerkategorityper();
		skrivarketypkategorier();
	}
	//window.alert("sparaarketyp körs, rollperson.arketypsallskapsval = " + rollperson.arketypsallskapsval + ", rollperson.miljosallskapsval = " + rollperson.miljosallskapsval);

}
function sparamiljo(){
	var slump=1;
	
	valjobligatoriskasubval(aktivtmiljoobjekt);
	
	//var saknadrubrikarray=kontrollerasubval(rollpersonsvalobjekt);
	var saknadrubrikarray=kontrollerasubval(aktivtmiljoobjekt);
	
	var saknadmeddelande="Alla subval är inte gjorda. Slumpa eller välj dessa innan du sparar.  ";
	var i;
	
	if (rollperson.handelsetabellobjektlista.length > 0){
		window.alert("Miljö kan ej ändras efter att händelsetabellslagen påbörjats");
	}else if(saknadrubrikarray.length>0){
		for (i=0;i<saknadrubrikarray.length;i++){
			saknadmeddelande += "\n" + saknadrubrikarray[i];
		}
		window.alert(saknadmeddelande);
	}else{
		if ("miljo" in rollperson){
			rollperson=nollarollperson(rollperson);
			
			if ("bakgrund" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.bakgrund);
			}
			if ("folkslag" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.folkslag);
			}
			if ("attributtarningar" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
			}
			if ("sallskap" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.sallskap);
			}
			
			if ("arketyp" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.arketyp);
			}
			
		}else{
		
		}
		rollperson.miljo=clone(aktivtmiljoobjekt);
		//---
		//rollperson.miljo=valj_subval(rollperson.miljo, slump);
		rollperson.miljo=summera_subval(rollperson.miljo);
		rollperson= summerarollperson(rollperson, rollperson.miljo);
		
		// Extraenheter
		rollperson=nollaextraenheter(rollperson);
		rollperson=extraenheter(rollperson);
		
		rollperson=kvarhandelsetabellslag(rollperson);
		uppdateravanstersammanfattning();
		skrivhogerkategorityper();
		skrivmiljokategorier();
	}
}

function skrivhandelsetabellerkategorier(){
	
	var handelsetabellista=hamta_handelsetabellista();
	var handelsetabellista_ovrig=hamta_handelsetabellista_ovrig();
	
	var sidocellbredd=18;
	
	saknadeobjekt=hamta_saknadeobjekt(rollperson);
	var saknadeobjektstrang;
	var i;
	var kvartotal=0;
	
	console.log("handelsetabellista.namn.length: " + handelsetabellista.namn.length);
	
	for (i=0; i<handelsetabellista.namn.length;i++){
		
		console.log("Kvartotal: " + kvartotal);
		kvartotal += rollperson["kvar_" + handelsetabeller[handelsetabeller.lista[i]][0].namn];
	}
	kvartotal+=rollperson.kvar_valfriatabellslag;
	rollperson.kvar_handelsetabellslag=kvartotal;
	
	
	window.parent.document.getElementById('hogerkategorival').height="80";
	var htmlkod = "<div class='garald'>";

	
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\">";
	if (rollperson.redoforhandelsetabellslag==1){
		
		htmlkod +="<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpahandelsetabell();return false;\">Slumpa händelse&shy;tabell</a>";
		
	}
	htmlkod += "</td>";

	htmlkod += "<td class=\"center\">";
	for (i=0;i<handelsetabeller.lista.length;i++){
		//console.log(i)
		if (rollperson.redoforhandelsetabellslag==1){
			if(rollperson["kvar_" + handelsetabeller[handelsetabeller.lista[i]][0].namn]+rollperson.kvar_valfriatabellslag>0){
				htmlkod += "<a id=\"rpvalkategori_" + handelsetabeller[handelsetabeller.lista[i]][0].namn + "\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"bythandelsetabell('" + handelsetabeller[handelsetabeller.lista[i]][0].namn + "');return false;\">";  
			}
		}
		htmlkod += handelsetabeller[handelsetabeller.lista[i]][0].rubrik;
		
		//if (temprp in window.parent){
		//console.log("temprp in window.parent");
		if (handelsetabeller[handelsetabeller.lista[i]][0].namn in rollperson){
			htmlkod += " \(" + rollperson["kvar_" + handelsetabeller[handelsetabeller.lista[i]][0].namn] + "/" + rollperson[handelsetabeller[handelsetabeller.lista[i]][0].namn] + "\) "; 
			//}
		}else{
			htmlkod += " \(0/0\) " ; 
		}
		if (rollperson.redoforhandelsetabellslag==1){
			if(rollperson["kvar_" + handelsetabeller[handelsetabeller.lista[i]][0].namn]+rollperson.kvar_valfriatabellslag>0){
				htmlkod +="</a>";
			}
		}
		/*if (i==Math.floor(window.parent.handelsetabeller.lista.length/3)){
			htmlkod += "<br>";
		}
		else if (i == 2 * Math.floor(window.parent.handelsetabeller.lista.length/3)){
			htmlkod += "<br>";
		}else if(i==window.parent.handelsetabeller.lista.length-1){
			// Skriv inget
		*/
		if(i==handelsetabeller.lista.length-1){
		}else if (i==Math.floor((handelsetabeller.lista.length-1)/2)){
			htmlkod += "<br>";}
		else{
			htmlkod += " &#124; ";
		}
	}
	
	
	
	// Övriga händelsetabeller
	for (i=0;i<handelsetabeller.listaovrig.length;i++){
		if ("folkslag" in rollperson){
			if (handelsetabeller[handelsetabeller.listaovrig[i]][0].folkslag.indexOf(rollperson.folkslag.namn)>=0){
				kvarslag=0;
				if (handelsetabeller[handelsetabeller.listaovrig[i]][0].vald < handelsetabeller[handelsetabeller.listaovrig[i]][0].maxslag){
					for (j=0;j<handelsetabeller[handelsetabeller.listaovrig[i]][0].tabellslag.length;j++){
						kvarslag += rollperson["kvar_" + handelsetabeller[handelsetabeller.listaovrig[i]][0].tabellslag[j]];
						kvarslag += rollperson.kvar_valfriatabellslag;
					}
				}
				if (rollperson.redoforhandelsetabellslag==1){
					
					if (kvarslag>0){
						htmlkod += "<a id=\"rpvalkategori_" + handelsetabeller[handelsetabeller.listaovrig[i]][0].namn + "\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"bythandelsetabell('" + handelsetabeller[handelsetabeller.listaovrig[i]][0].namn + "');return false;\">";  
						
					}
				}
				htmlkod += handelsetabeller[handelsetabeller.listaovrig[i]][0].rubrik;
				
				if (rollperson.redoforhandelsetabellslag==1){
					if (kvarslag>0){
						htmlkod +="</a>";
					}
				}
			}
		}
	}
	htmlkod += "<br>";
	htmlkod += "Valfria tabell&shy;slag";
	if ("valfriatabellslag" in rollperson){
		htmlkod += " \(" + rollperson.kvar_valfriatabellslag + "/" + rollperson.valfriatabellslag + "\) </td>";
	}else{
		htmlkod += " \(0\) </td>";
	}
	htmlkod += "</td>";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\">";
	
	if (kvartotal>0){
		htmlkod+="<a id=\"rpvalkategori_slumparesterandehandelser" + "\" title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slumparesterandehandelser();return false;\">";
		htmlkod+="Slumpa resterande händelser";
		htmlkod+="</a>";
	}
	//htmlkod+="Kvarslag: " + rollperson.kvar_handelsetabellslag.toString();
	
	
	//htmlkod += "Valfria tabell&shy;slag";
	//if ("valfriatabellslag" in rollperson){
	//	htmlkod += " \(" + rollperson.kvar_valfriatabellslag + "/" + rollperson.valfriatabellslag + "\) ";
	//}else{
	//	htmlkod += " \(0\) ";
	//}
	htmlkod += "</td></tr></table>";
	htmlkod += "</div>";
	
	if (saknadeobjekt.length>0){
		saknadeobjektstrang=saknadeobjekt[0];
		for (i=1;i<saknadeobjekt.length;i++){
			saknadeobjektstrang += ", " + saknadeobjekt[i];
		}
		htmlkod+=("<br><i>Slutför följande val innan händelsetabellslagen påbörjas: <br>" + saknadeobjektstrang + ".</i>");
	}
	
	
	
	document.getElementById("hogerkategorival").innerHTML = htmlkod;
	
}
function slumparesterandehandelser(){
	while (rollperson.kvar_handelsetabellslag>0){
		slumpahandelsetabell();
		slapahandelsetabell();
		
		if ("nummer" in  aktivthandelsetabellslag){
			if ("vald" in  aktivthandelsetabellslag){
				if (aktivthandelsetabellslag.vald ==0){
			
					anropasparahandelsetabellslag(rollperson, aktivthandelsetabellslag);
				}
			}
		}
	}
	rpvalkategori('fardighetstabeller');
}

function andrabakgrundstabellslag(andring){
	var inputnummer;
	var outputnummer;
	var i;
	
	inputnummer=bakgrundindexarray;
	outputnummer=inputnummer;
	for (i=0; i<inputnummer.length;i++){
		
		outputnummer[i]=inputnummer[i]+andring;
		while(outputnummer[i]<=0){
			outputnummer[i] += (aktiv_bakgrundstabell.length-1)
		}
		
		while(outputnummer[i]>=aktiv_bakgrundstabell.length){
			outputnummer[i] -= (aktiv_bakgrundstabell.length-1)
		}
	}
	skrivbakgrunder(outputnummer);
	
}

function andrahandelsetabellslag(andring){
	var inputnummer;
	var outputnummer;
	
	if (typeof(aktivthandelsetabellslag.nummer)==='undefined'){
		inputnummer=0;
	}else{
		inputnummer=aktivthandelsetabellslag.nummer;
	}
	
	outputnummer=inputnummer+andring;
	while(outputnummer<=0){
		outputnummer += (aktiv_handelsetabell.length-1)
	}
	
	while(outputnummer>=aktiv_handelsetabell.length){
		outputnummer -= (aktiv_handelsetabell.length-1)
	}
	
	aktivthandelsetabellslag=aktiv_handelsetabell[outputnummer];
	skrivhandelsetabeller();
	
}

function slumpahandelsetabell(){
	
	handelsetabellindex=slumpa(handelsetabeller.lista.length);
	aktiv_handelsetabell=handelsetabeller[handelsetabeller.lista[handelsetabellindex-1]];
	aktivthandelsetabellslag={};
	skrivhandelsetabeller();
}


function hamta_saknadeobjekt(rollperson){
	var saknadeobjekt=[];
	if ("bakgrund" in rollperson){
		//
	}else{
		saknadeobjekt.push("Bakgrund");
	}
	if ("folkslag" in rollperson){
		//
	}else{
		saknadeobjekt.push("Folkslag");
	}
	if ("attributtarningar" in rollperson){
		//
	}else{
		saknadeobjekt.push("Grundattribut");
	}
	if ("arketyp" in rollperson){
		//
	}else{
		saknadeobjekt.push("Arketyp");
	}
	if ("miljo" in rollperson){
		//
	}else{
		saknadeobjekt.push("Miljö");
	}
	return saknadeobjekt;
}

function slapahandelsetabell(){
	var saknadeobjekt=[];
	var i;
	var omslag;
	var kvarslag;
	var anvandtabell;
	
	handelsetabellista=hamta_handelsetabellista();
	handelsetabellista_ovrig=hamta_handelsetabellista_ovrig();
	
	omslag=1;
	
	saknadeobjekt=hamta_saknadeobjekt(rollperson);
	
	//--- Om ett val redan är gjort ska slumptal slås om
	
	//startnummer=18;
	//slumptal=startnummer;
	
	if (saknadeobjekt.length==0){
		// Vanlig händelsetabell
		if (handelsetabellista.namn.indexOf(aktiv_handelsetabell[0].namn)>=0){
			//console.log("Slag slås på vanlig tabell");
			if (rollperson["kvar_" + aktiv_handelsetabell[0].namn] > 0){
				/*
				if ("nummer" in aktivthandelsetabellslag){
					if (aktivthandelsetabellslag.nummer<=0){
						slumptal=startnummer;
					}else if(aktivthandelsetabellslag.nummer<=99){
						slumptal=aktivthandelsetabellslag.nummer+1;
					}else if(aktivthandelsetabellslag.nummer>=100){
						slumptal=1;
					}
				}else{
					slumptal=startnummer;
				}
				*/
				
				while(omslag==1){
					slumptal=window.parent.slumpa(aktiv_handelsetabell.length-1);
					
					//slumptal+=1;
					if(aktiv_handelsetabell[slumptal].vald==1){
					}else{
						omslag=0;
					}
				}
				
				aktivthandelsetabellslag=aktiv_handelsetabell[slumptal];
				skrivhandelsetabeller();
			
			}else if (rollperson["kvar_valfriatabellslag"] > 0){
				/*
				if ("nummer" in aktivthandelsetabellslag){
					if (aktivthandelsetabellslag.nummer<=0){
						slumptal=startnummer;
					}else if(aktivthandelsetabellslag.nummer<=99){
						slumptal=aktivthandelsetabellslag.nummer+1;
					}else if(aktivthandelsetabellslag.nummer>=100){
						slumptal=1;
					}
				}else{
					slumptal=startnummer;
				}
				*/
				
				while(omslag==1){
					slumptal=window.parent.slumpa(aktiv_handelsetabell.length-1);
					//slumptal+=1;
					if(aktiv_handelsetabell[slumptal].vald==1){
					}else{
						omslag=0;
					}
				}
				
				aktivthandelsetabellslag=aktiv_handelsetabell[slumptal];
				skrivhandelsetabeller();
			}else{
			}
		}else if(handelsetabellista_ovrig.namn.indexOf(aktiv_handelsetabell[0].namn)>=0){
			
			console.log("Slag slås på övrig tabell");
			
			kvarslag=0;
			anvandtabell="";
			for (i=0;i<aktiv_handelsetabell[0].tabellslag.length;i++){
				if (rollperson["kvar_" + aktiv_handelsetabell[0].tabellslag[i]]>0){
					anvandtabell=aktiv_handelsetabell[0].tabellslag[i];
					kvarslag +=rollperson["kvar_" + aktiv_handelsetabell[0].tabellslag[i]];
				}
			}
			
			if (kvarslag>0){
				while(omslag==1){
					slumptal=window.parent.slumpa(aktiv_handelsetabell.length-1);
					
					//slumptal+=1;
					if(aktiv_handelsetabell[slumptal].vald==1){
					}else{
						omslag=0;
					}
				}
				
				aktivthandelsetabellslag=aktiv_handelsetabell[slumptal];
				skrivhandelsetabeller();
				
			}else if (rollperson["kvar_valfriatabellslag"] > 0){
				
				while(omslag==1){
					slumptal=window.parent.slumpa(aktiv_handelsetabell.length-1);
					if(aktiv_handelsetabell[slumptal].vald==1){
					}else{
						omslag=0;
					}
				}
				
				aktivthandelsetabellslag=aktiv_handelsetabell[slumptal];
				skrivhandelsetabeller();
			}
		}
	}else{
		saknadeobjektstrang=saknadeobjekt[0];
		for (i=1;i<saknadeobjekt.length;i++){
			saknadeobjektstrang += ", " + saknadeobjekt[i];
		}
		window.alert("Slutför följande val innan händelsetabellslagen påbörjas: " + saknadeobjektstrang);
	}
}


function skrivhandelsetabeller(){

	var saknadeobjekt=[];
	var kvarslag;
	saknadeobjekt=hamta_saknadeobjekt(rollperson);
	//slumptal=window.parent.slumpa(100);
	
	// Slumpa alla subval
	// Summera alla subval
	
	handelsetabellista=hamta_handelsetabellista();
	handelsetabellista_ovrig=hamta_handelsetabellista_ovrig();
	
	var htmlkod = "<div class=\"garald\">";
	
	
	if ("nummer" in  aktivthandelsetabellslag){
		
		if (aktivthandelsetabellslag.aktiverad==0){
			aktivthandelsetabellslag=valj_subval(aktivthandelsetabellslag,1);
			//aktivthandelsetabellslag=summera_subval(aktivthandelsetabellslag);
		}
		htmlkod +="<p class=\"indrag\">";
		//htmlkod += "<b>" + slumptal + " " + aktivthandelsetabellslag.rubrik + "</b><br>";
		
		if (aktivthandelsetabellslag.slumpning==1){
			htmlkod += "<b><a title=\"Slumpa om resultat\" href=\"PleaseEnableJavascript.html\" class=\"omslumpning\" onclick=\"slumpaomhandelsetabellslag();return false;\">" + aktivthandelsetabellslag.nummer + " " + aktivthandelsetabellslag.rubrik + "</a></b><br>";
		}else{
			htmlkod += "<b>" + aktivthandelsetabellslag.nummer + " " + aktivthandelsetabellslag.rubrik + "</b><br>";
		}
		
		//htmlkod += aktiv_handelsetabell[slumptal].beskrivning + "<br>";
		//htmlkod += "&#91;" + aktiv_handelsetabell[slumptal].beskrivninghak + "&#93;";
		htmlkod += aktivthandelsetabellslag.beskrivningvald + "<br>";
		htmlkod += "&#91;" + aktivthandelsetabellslag.beskrivninghakvald + "&#93;";
		
		htmlkod +="</p>";
		
	}else{
		console.log("nummer saknas i aktivthandelsetabellslag");
	}
	htmlkod += "</div>";
	
	/*
	// Nedan skrivs alla tabellresultat
	htmlkod += "<div class=\"garaldmini\">";

	for (i=1; i<window.parent.aktiv_handelsetabell.length; i++){
		htmlkod += "<b>" + i + " " + aktiv_handelsetabell[i].rubrik + "</b><br>";
		htmlkod += aktiv_handelsetabell[i].beskrivning + "<br>";
		htmlkod += "&#91;" + aktiv_handelsetabell[i].beskrivninghak + "&#93;<p>";
		//htmlkod += aktiv_handelsetabell[i].beskrivningvald + "<br>";
		//htmlkod += "&#91;" + aktiv_handelsetabell[i].beskrivninghakvald + "&#93;<p>";
	}
	htmlkod += "</div>";
	*/
	var htmlkodrubrik="<div class='garald'>";

	//window.parent.document.getElementById('hogerkategorival').height="60";
	htmlkodrubrik += "<table style=\"width:100%\">";
	htmlkodrubrik += "<tr>";
	htmlkodrubrik += "<td colspan=4>";
	htmlkodrubrik += "&nbsp;";
	htmlkodrubrik += "</td>";
	
	htmlkodrubrik += "<td class=\"center\" rowspan=3><div><span></span><h1>";
	if (saknadeobjekt.length>0){
	}else{	
		htmlkodrubrik += aktiv_handelsetabell[0].rubrik;
	}
	htmlkodrubrik +="</h1></div></td>";
	if (rollperson.kvar_handelsetabellslag>0){
		if ("nummer" in  aktivthandelsetabellslag){
			if ("vald" in  aktivthandelsetabellslag){
				if (aktivthandelsetabellslag.vald ==0){
			
					htmlkodrubrik += "<td class=\"center\" width=\"20%\" rowspan=3><a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"anropasparahandelsetabellslag(rollperson, aktivthandelsetabellslag);return false;\">Spara " + aktivthandelsetabellslag.rubrik + " &rArr;</a></td>";
				}else{
					htmlkodrubrik += "<td class=\"center\" width=\"20%\"></td>";
				}
			}else{
				htmlkodrubrik += "<td class=\"center\" width=\"20%\"></td>";
			}
		}else{
			htmlkodrubrik += "<td class=\"center\" width=\"20%\"></td>";
		}
	}
	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "<tr>";
	htmlkodrubrik += "<td class=\"center\" width=\"20%\" colspan=4>";
	if (saknadeobjekt.length>0){
	}else{
		if (handelsetabellista.namn.indexOf(aktiv_handelsetabell[0].namn)>=0){
			//console.log("i skrivhandelsetabeller: slag slås på vanlig tabell");
			if(rollperson["kvar_" + aktiv_handelsetabell[0].namn]+rollperson.kvar_valfriatabellslag>0){
			
				htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slapahandelsetabell();return false;\">"
			}
		}else if(handelsetabellista_ovrig.namn.indexOf(aktiv_handelsetabell[0].namn)>=0){
			kvarslag=0;
			anvandtabell="";
			for (i=0;i<aktiv_handelsetabell[0].tabellslag.length;i++){
				if (rollperson["kvar_" + aktiv_handelsetabell[0].tabellslag[i]]>0){
					anvandtabell=aktiv_handelsetabell[0].tabellslag[i];
					kvarslag +=rollperson["kvar_" + aktiv_handelsetabell[0].tabellslag[i]];
				}
			}
			if (kvarslag+rollperson.kvar_valfriatabellslag>0){
				if (aktiv_handelsetabell[0].vald < aktiv_handelsetabell[0].maxslag){
					htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"slapahandelsetabell();return false;\">"
				}
				
			}
		
		}
		
		htmlkodrubrik +="Slå på tabellen";
		if (handelsetabellista.namn.indexOf(aktiv_handelsetabell[0].namn)>=0){
		
			if(rollperson["kvar_" + aktiv_handelsetabell[0].namn]+rollperson.kvar_valfriatabellslag>0){
		
				htmlkodrubrik +="</a>";
			}
		}else if(handelsetabellista_ovrig.namn.indexOf(aktiv_handelsetabell[0].namn)>=0){
		
			if (kvarslag+rollperson.kvar_valfriatabellslag>0){
				if (aktiv_handelsetabell[0].vald < aktiv_handelsetabell[0].maxslag){
				
					htmlkodrubrik +="</a>";
				}
			}
		}
	}
	htmlkodrubrik +="</td>";
	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "<tr>";
	if (saknadeobjekt.length>0){
	htmlkodrubrik +="<td class=\"center\" colspan=4>";
	htmlkodrubrik +="&nbsp;";
	htmlkodrubrik +="</td>";
	}else{
	
		htmlkodrubrik +="<td class=\"center\" rowspan=1>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"andrahandelsetabellslag(-10);return false;\">";
		htmlkodrubrik +="<span style=\"white-space: nowrap\">&#8211;10</span>"; 
		htmlkodrubrik += "</a>";
		htmlkodrubrik +="</td>";
		htmlkodrubrik +="<td class=\"center\"  rowspan=1>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"andrahandelsetabellslag(-1);return false;\">";
		htmlkodrubrik +="<span style=\"white-space: nowrap\">&#8211;1</span>"; 
		htmlkodrubrik += "</a>";
		htmlkodrubrik +="</td>";
		htmlkodrubrik +="<td class=\"center\" rowspan=1>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"andrahandelsetabellslag(1);return false;\">";
		htmlkodrubrik +="<span style=\"white-space: nowrap\">&#43;1</span>"; 
		htmlkodrubrik += "</a>";
		htmlkodrubrik +="</td>";
		htmlkodrubrik +="<td class=\"center\"  rowspan=1>";
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"andrahandelsetabellslag(10);return false;\">";
		htmlkodrubrik +="<span style=\"white-space: nowrap\">&#43;10</span>"; 
		htmlkodrubrik += "</a>";
		htmlkodrubrik +="</td>";
	}
	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "</table>";
	htmlkodrubrik += "</div>";
	
	andrahandelsetabellslag
	
	
	document.getElementById("hogerkategoritabell").innerHTML = "";
	if (rollperson.redoforhandelsetabellslag==0){
		document.getElementById("hogerkategorirubrik").innerHTML="<p><i>Välj bakgrund, folkslag, attributtärningar, arketyp och miljö innan du går vidare till händelsetabellslagen.</i>";
		document.getElementById("hogerkategoribeskrivning").innerHTML = "";
	}else{
	
		document.getElementById("hogerkategorirubrik").innerHTML = htmlkodrubrik;
		document.getElementById("hogerkategoribeskrivning").innerHTML = htmlkod;
	}	
	//document.getElementById("hogerkategoribeskrivning").scrollTop=100;
	
	
}

function anropasparahandelsetabellslag(rollperson, aktivthandelsetabellslag){
	rollperson= sparahandelsetabellslag(rollperson,aktivthandelsetabellslag);
	
	uppdateravanstersammanfattning();
	skrivhandelsetabellerkategorier();
	skrivhandelsetabeller();
	
}

function sparahandelsetabellslag(rollperson, aktivthandelsetabellslag){
	slump=1;
	handelsetabellista= hamta_handelsetabellista();
	handelsetabellista_ovrig=hamta_handelsetabellista_ovrig();
	
	var kvarslag;
	//window.alert(aktiv_handelsetabell);
	//window.alert(handelsetabellslag);
	
	//--- Subvalen ska ej slumpas eller summeras här, det görs i skrivhandelsetabeller().
	//--- När ett val görs ska propertyn vald sättas till 1
	//--- Om omslag=1 ska handelsetabellslag och kvarhandelsetabellslag uppdateras
	
	var arraylangd=rollperson.handelsetabellobjektlista.length;
	if (handelsetabellista.namn.indexOf(aktiv_handelsetabell[0].namn)>=0){
		
		if (rollperson["kvar_" + aktiv_handelsetabell[0].namn] > 0){
			
			
			
			//window.alert("pushen");
			//rollperson.handelsetabellobjektlista[rollperson.handelsetabellobjektlista.length-1]=clone(aktiv_handelsetabell[handelsetabellslag]);
			aktivthandelsetabellslag=summera_subval(aktivthandelsetabellslag);
			aktivthandelsetabellslag.vald=1;
			aktiv_handelsetabell[0].vald +=1;
			
			if (aktivthandelsetabellslag.valfriatabellslag==1){
				rollperson.kvar_valfriatabellslag +=1;
			}else{
				rollperson["kvar_" + aktiv_handelsetabell[0].namn] = rollperson["kvar_" + aktiv_handelsetabell[0].namn] - 1;
			}
			
			
			rollperson.handelsetabellobjektlista[arraylangd]=clone(aktivthandelsetabellslag);
			
			
			arraylangd=rollperson.handelsetabellobjektlista.length;
			
			//rollperson.handelsetabellobjektlista[arraylangd-1]=valj_subval(rollperson.handelsetabellobjektlista[arraylangd-1], slump);
			
			//window.alert("subval gjort");
			//rollperson.handelsetabellobjektlista[arraylangd-1]=summera_subval(rollperson.handelsetabellobjektlista[arraylangd-1]);
			
			rollperson= summerarollperson(rollperson, rollperson.handelsetabellobjektlista[rollperson.handelsetabellobjektlista.length-1]);
			
			// Extraenheter
			rollperson=nollaextraenheter(rollperson);
			rollperson=extraenheter(rollperson);
		}else if (rollperson["kvar_valfriatabellslag"] > 0){
			
			//window.alert("pushen");
			//rollperson.handelsetabellobjektlista[rollperson.handelsetabellobjektlista.length-1]=clone(aktiv_handelsetabell[handelsetabellslag]);
			aktivthandelsetabellslag=summera_subval(aktivthandelsetabellslag);
			aktivthandelsetabellslag.vald=1;
			aktiv_handelsetabell[0].vald +=1;
			rollperson.handelsetabellobjektlista[arraylangd]=clone(aktivthandelsetabellslag);
			arraylangd=rollperson.handelsetabellobjektlista.length;
			
			if (aktivthandelsetabellslag.valfriatabellslag==1){
				rollperson.kvar_valfriatabellslag +=1;
			}else{
				rollperson["kvar_valfriatabellslag"] = rollperson["kvar_valfriatabellslag"] - 1;
			
			}
			
			//rollperson.handelsetabellobjektlista[arraylangd-1]=valj_subval(rollperson.handelsetabellobjektlista[arraylangd-1], slump);
			
			//window.alert("subval gjort");
			//rollperson.handelsetabellobjektlista[arraylangd-1]=summera_subval(rollperson.handelsetabellobjektlista[arraylangd-1]);
			
			rollperson= summerarollperson(rollperson, rollperson.handelsetabellobjektlista[rollperson.handelsetabellobjektlista.length-1]);
			
			// Extraenheter
			rollperson=nollaextraenheter(rollperson);
			rollperson=extraenheter(rollperson);
			
		}
	}else if (handelsetabellista_ovrig.namn.indexOf(aktiv_handelsetabell[0].namn)>=0){	
		kvarslag=0;
		anvandtabell="";
		for (i=0;i<aktiv_handelsetabell[0].tabellslag.length;i++){
			if (rollperson["kvar_" + aktiv_handelsetabell[0].tabellslag[i]]>0){
				anvandtabell=aktiv_handelsetabell[0].tabellslag[i];
				kvarslag +=rollperson["kvar_" + aktiv_handelsetabell[0].tabellslag[i]];
			}
		}
		
		if (kvarslag>0){
			aktivthandelsetabellslag=summera_subval(aktivthandelsetabellslag);
			aktivthandelsetabellslag.vald=1;
			aktiv_handelsetabell[0].vald +=1;
			
			if (aktivthandelsetabellslag.valfriatabellslag==1){
				rollperson.kvar_valfriatabellslag +=1;
			}else{
				rollperson["kvar_" + anvandtabell] = rollperson["kvar_" + anvandtabell] - 1;
			}
			
			
			rollperson.handelsetabellobjektlista[arraylangd]=clone(aktivthandelsetabellslag);
			
			
			arraylangd=rollperson.handelsetabellobjektlista.length;
			
			//rollperson.handelsetabellobjektlista[arraylangd-1]=valj_subval(rollperson.handelsetabellobjektlista[arraylangd-1], slump);
			
			//window.alert("subval gjort");
			//rollperson.handelsetabellobjektlista[arraylangd-1]=summera_subval(rollperson.handelsetabellobjektlista[arraylangd-1]);
			
			rollperson= summerarollperson(rollperson, rollperson.handelsetabellobjektlista[rollperson.handelsetabellobjektlista.length-1]);
		}else if(rollperson["kvar_valfriatabellslag"] > 0){
			aktivthandelsetabellslag=summera_subval(aktivthandelsetabellslag);
			aktivthandelsetabellslag.vald=1;
			aktiv_handelsetabell[0].vald +=1;
			rollperson.handelsetabellobjektlista[arraylangd]=clone(aktivthandelsetabellslag);
			arraylangd=rollperson.handelsetabellobjektlista.length;
			
			if (aktivthandelsetabellslag.valfriatabellslag==1){
				rollperson.kvar_valfriatabellslag +=1;
			}else{
				rollperson["kvar_valfriatabellslag"] = rollperson["kvar_valfriatabellslag"] - 1;
			
			}
			
			//rollperson.handelsetabellobjektlista[arraylangd-1]=valj_subval(rollperson.handelsetabellobjektlista[arraylangd-1], slump);
			
			//window.alert("subval gjort");
			//rollperson.handelsetabellobjektlista[arraylangd-1]=summera_subval(rollperson.handelsetabellobjektlista[arraylangd-1]);
			
			rollperson= summerarollperson(rollperson, rollperson.handelsetabellobjektlista[rollperson.handelsetabellobjektlista.length-1]);
			
			// Extraenheter
			rollperson=nollaextraenheter(rollperson);
			rollperson=extraenheter(rollperson);
		}
	
	}
	
	kvartotal=rollperson["kvar_valfriatabellslag"];
	
	for (i=0; i<handelsetabellista.length;i++){
		kvartotal += rollperson["kvar_" + handelsetabellista[i]];
	}
	rollperson.kvar_handelsetabellslag=kvartotal;
	if (kvartotal==0){
		//window.alert("Alla händelsetabellslag slagna!");
		rollperson.redoforfardighetstabellslag=1;
		skrivhogerkategorityper();
	}	
	 return rollperson
	
}

function skrivfardighetstabellerkategorier(){
	//console.log("skrivfardighetstabellerkategorier körs");
	
	var sidocellbredd=18;
	
	window.parent.document.getElementById('hogerkategorival').height="80";
	
	var fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	var htmlkod = "<div class='garald'>";
	

	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\"></td><td class=\"center\">";
	for (i=0;i<fardighetslistaobjekt.ovrigafardighetergrupplista_namn.length;i++){
		if (fardighetslistaobjekt.ovrigafardighetergrupplista_namn[i] + "poang" in rollperson){
		
			if (rollperson[fardighetslistaobjekt.ovrigafardighetergrupplista_namn[i] + "poang"] > 0){
				if ("kvar_handelsetabellslag" in rollperson){
					if (rollperson.kvar_handelsetabellslag==0){
						if (rollperson.ovrigafardigheter[fardighetslistaobjekt.ovrigafardighetergrupplista_namn[i]].lista.length>0){
							htmlkod +="<b>";
						}
						htmlkod += "<a id=\"rpvalkategori_" + fardighetslistaobjekt.ovrigafardighetergrupplista_namn[i] + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"bytfardighetstabell('" + fardighetslistaobjekt.ovrigafardighetergrupplista_namn[i] + "');return false;\">";
						
						htmlkod += fardighetslistaobjekt.ovrigafardighetergrupplista_plur[i];
						htmlkod += " \(" + rollperson[fardighetslistaobjekt.ovrigafardighetergrupplista_namn[i] + "poang"] + " poäng\) " +  "</a>"; 
						if (rollperson.ovrigafardigheter[fardighetslistaobjekt.ovrigafardighetergrupplista_namn[i]].lista.length>0){
							htmlkod +="</b>";
						}
					}else{
						htmlkod +=  fardighetslistaobjekt.ovrigafardighetergrupplista_plur[i] + " \(" + rollperson[fardighetslistaobjekt.ovrigafardighetergrupplista_namn[i] + "poang"] + " poäng\) " ; 
					}
				}else{
					htmlkod +=  fardighetslistaobjekt.ovrigafardighetergrupplista_plur[i] + " \(" + rollperson[fardighetslistaobjekt.ovrigafardighetergrupplista_namn[i] + "poang"] + " poäng\) " ; 
				}
				
				
			}else{
				htmlkod += fardighetslistaobjekt.ovrigafardighetergrupplista_plur[i];
			}
		}else{
			htmlkod += fardighetslistaobjekt.ovrigafardighetergrupplista_plur[i];
		}
		
		if(i==fardighetslistaobjekt.ovrigafardighetergrupplista_namn.length-1){
		}else if (i==Math.floor((fardighetslistaobjekt.ovrigafardighetergrupplista_namn.length-1)/2)){
			htmlkod += "<br>";}
		else{
			htmlkod += " &#124; ";
		}
	}
	
	// Infotext
	if ("kvar_handelsetabellslag" in rollperson){
		if (rollperson.kvar_handelsetabellslag==0){
		}else{
			htmlkod +="<br><i>Alla händelsetabellslag måste slås innan du slår på färdighetstabellerna.</i>";
		}
	}else{
		htmlkod +="<br><i>Alla händelsetabellslag måste slås innan du slår på färdighetstabellerna.</i>";
	}
	
	htmlkod += "</td>";
	htmlkod += "<td class=\"center\" style=\"width:" + sidocellbredd + "%\"></td></tr></table>";
	htmlkod += "</div>";
	
	
	document.getElementById("hogerkategorival").innerHTML = htmlkod;
}

function skrivfardighetstabeller(){
	//console.log("skrivfardighetstabeller körs");
	slumptal=window.parent.slumpa(100);
	var htmlkod="<div class=\"garald\">";
	
	var fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	var fardighetsobjekt=hamta_fardighetsobjekt();
	var ovrigafardigheterpoangslag=hamta_ovrigafardigheterpoangslag();
	var attributobjekt=hamta_attributobjekt();
	
	var i;
	var j;
	var enhetertotal=[];
	var enheterinnan=[];
	var bonusenheter=0;
	var redoattspara=1;
	document.getElementById("hogerkategoritabell").innerHTML = "";
	document.getElementById("hogerkategoribeskrivning").innerHTML = "";
	document.getElementById("hogerkategorirubrik").innerHTML = "";
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	
	if (rollperson[aktiv_ovrigafardigheterkategori + "poang"] > 0){
		//console.log("skrivfardighetstabellers forsta ifsats, del a");
		//console.log("aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length " + aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length);
		//console.log("ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + 'poang']-1].length " + ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"]-1].length);
		
		//console.log("aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length " + aktiv_fardighetslista[aktiv_ovrigafardigheterkategori]);
		//console.log("ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + 'poang']-1] " + ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"]-1]);
		
		
		if (aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length==ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"]-1].length){
			//console.log("skrivfardighetstabellers forsta ifsats, del b");
			for (i=0;i<ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"]-1].length;i++){
				
				if (aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i] in rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori]){	
					// Summerar ihop tabellens enheter från ovrigafardigheterpoangslag med de enheter som redan finns under rollperson-objektet, men drar ifrån subobjektet för aktuell övrig färdighetskategori för att undvika dublett
					enhetertotal[i]=rollperson[aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]].enheter+ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"] -1][i] - rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori][aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]].enheter ;
					enheterinnan[i]=rollperson[aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]].enheter - rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori][aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]].enheter ;
				
				}else{
					enhetertotal[i]=rollperson[aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]].enheter+ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"] -1][i];
					enheterinnan[i]=rollperson[aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]].enheter;
				}
				if (enhetertotal[i]>7){
					// Sex enheter betyder för lättlärda färdigheter utan grundtärningar 5T6, så överskottet blir bonusenheter
					bonusenheter=bonusenheter + enhetertotal[i]-7;
					enhetertotal[i]=7;
				}
			
			}
		}
		if (aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length==ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"]-1].length){
			// Lägg in matris med de framslagna färdigheterna
			//console.log("skrivfardighetstabellers andra ifsats");
			htmlkod += "<div id=\"fardighetstabell_val\">";
			htmlkod+="<p>";
			htmlkod += "<table style=\"width:100%\">";
			if (aktiv_ovrigafardigheterkategori=="hantverk"){
				htmlkod +="<th class=\"centermarginal\">Slumpa /<br>Välj</th>";
			}else{
				htmlkod +="<th class=\"centermarginal\">Slumpa</th>";
			}
			
			htmlkod +="<th class=\"leftmarginal\">Färdighet</th>";
			
			htmlkod +="<th class=\"centermarginal\">Färdighets&shy;tärningar</th>";
			
			if (aktiv_ovrigafardigheterkategori=="hantverk"){
				htmlkod +="<th class=\"leftmarginal\">Attribut&shy;bonus</th>";
			}
			htmlkod +="<th class=\"centermarginal\" colspan=\"4\">Byt ordning</th>";
			
					
			for (i=0;i<ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"]-1].length;i++){
				htmlkod += "<tr style=\"vertical-align:top\">";
				htmlkod +="<td class=\"topcentermarginal\"><a id=\"" + aktiv_ovrigafardigheterkategori[i] + "_slaom_";
				htmlkod += i.toString() + "\"";
				htmlkod +="title=\"Slå fram en ny färdighet\"  href=\"PleaseEnableJavascript.html\" onclick=\"slumpaomenovrigfardighet\(" + i + "\);return false;\">&#8635;</a>";
				
				if (aktiv_ovrigafardigheterkategori=="hantverk"){
					// Knapp för att välja Hantverk
					htmlkod +="<br>";
					htmlkod +="<div class=\"dropdown\">";
					htmlkod +="<div id=\"valjhantverk\">";
					htmlkod +="<button onclick=\"dropdownFunction\(\'dropdown_valjhantverk_" + i.toString() + "\'\)\" class=\"dropbtn\">";
					htmlkod +="Välj:"
					htmlkod +="</button>";
					htmlkod +="</div>";
					htmlkod +="<div id=\"dropdown_valjhantverk_" + i.toString() + "\" class=\"dropdown-content\">";
					for (j=0;j<fardighetslistaobjekt.hantverkfardigheter.lista.length;j++){
						
						if (aktiv_fardighetslista.hantverk.indexOf(fardighetslistaobjekt.hantverkfardigheter.lista[j]) == - 1){
						
							htmlkod +="<a href=\"PleaseEnableJavascript.html\" onclick=\"bythantverk\(" + i.toString() + ",\'" + fardighetslistaobjekt.hantverkfardigheter.lista[j] + "\'\);return false;\">" + fardighetsobjekt[fardighetslistaobjekt.hantverkfardigheter.lista[j]].rubrik + "</a>";
						}else{
							htmlkod +="<i>" + fardighetsobjekt[fardighetslistaobjekt.hantverkfardigheter.lista[j]].rubrik + "</i>";
						}
					}
					htmlkod +="</div>";
					htmlkod +="</div>";
				
				}else{
					
				}
				htmlkod+="</td>";
				
				htmlkod +="<td class=\"topleftmarginal\"><b>" + fardighetsobjekt[aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]].rubrik + "</b>: ";
				htmlkod += fardighetsobjekt[aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]].beskrivning + "</td>";
				htmlkod +="<td class=\"topcentermarginal\">" + raknautfardighetstarningar(0,1,enhetertotal[i])  + "<br>\(" + raknautfardighetstarningar(0,1,enheterinnan[i]) + "\)";
				
				htmlkod +="</td>";
				if (aktiv_ovrigafardigheterkategori=="hantverk"){
					htmlkod +="<td class=\"topleftmarginal\">";
					htmlkod +="<div class=\"dropdown\">";
					htmlkod +="<button onclick=\"dropdownFunction\(\'dropdown_attributbonus_" + i.toString() + "\'\)\" class=\"dropbtn\">";
					htmlkod +="<div id=\"hantverkattributbonusrubrik_" + i.toString() + "\">";
					if (typeof hantverkattributbonuslista[i] === 'undefined'){
						htmlkod +="Välj:"
					}else{
						htmlkod +=attributobjekt[hantverkattributbonuslista[i]].rubrik;
					}
					htmlkod +="</div>";
					htmlkod +="</button>",
					htmlkod +="<div id=\"dropdown_attributbonus_" + i.toString() + "\" class=\"dropdown-content\">";
					for (j=0;j<attributobjekt.grundattributlista.length;j++){
						htmlkod +="<a href=\"PleaseEnableJavascript.html\" onclick=\"bythantverkattribut\(" + i.toString() + ",\'" + attributobjekt.grundattributlista[j] + "\'\);return false;\">" + attributobjekt.grundattributrubriker[j] + "</a>";
						//console.log("<a href=\"PleaseEnableJavascript.html\" onclick=\"bythantverkattribut\(" + i.toString() + ",\'" + attributobjekt.grundattributlista[j] + "\'\);return false;\">" + attributobjekt.grundattributrubriker[j] + "</a>");
					
					}
					htmlkod +="</div>";
					htmlkod +="</div>";
					htmlkod +="</td>";
				
				}
				
				if (i>0){
					htmlkod +="<td><a id=\"" + aktiv_ovrigafardigheterkategori[i] + "_flyttatilltoppen_" + i.toString() + "\" title=\"Flytta färdigheten till toppen\"  href=\"PleaseEnableJavascript.html\" onclick=\"flyttatilltoppen_ovrigfardighet\(" + i + "\);return false;\">&#8607;</a></td>"; 
					htmlkod +="<td><a id=\"" + aktiv_ovrigafardigheterkategori[i] + "_flyttauppett_" + i.toString() + "\" title=\"Flytta färdigheten ett steg upp\"  href=\"PleaseEnableJavascript.html\" onclick=\"flyttauppett_ovrigfardighet\(" + i + "\);return false;\">&#8593; </a></td>"; 
				}else{
					htmlkod +="<td>&#8607;</td>";
					htmlkod +="<td>&#8593;</td>";
				}
				if (i<ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"]-1].length-1){
					htmlkod +="<td><a id=\"" + aktiv_ovrigafardigheterkategori[i] + "_flyttanedett_" + i.toString() + "\" title=\"Flytta färdigheten ett steg ned\"  href=\"PleaseEnableJavascript.html\" onclick=\"flyttanedett_ovrigfardighet\(" + i + "\);return false;\">&#8595;</a></td>";
					htmlkod +="<td><a id=\"" + aktiv_ovrigafardigheterkategori[i] + "_flyttatillbotten_" + i.toString() + "\" title=\"Flytta färdigheten till botten\"  href=\"PleaseEnableJavascript.html\" onclick=\"flyttatillbotten_ovrigfardighet\(" + i + "\);return false;\">&#8609;</a></td>"; 
				}else{
					htmlkod +="<td>&#8595;</td>";
					htmlkod +="<td>&#8609;</td>";
				}
			}

		}else{
		}
	}else{
	}	
	
	
	if (aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length==0){
		redoattspara=0;
	}	
	htmlkod += "<div class=\"garaldmini\">";
	if (redoattspara==1){
		htmlkod += "<p><i>Färdighetstärningarna inom parantes beskriver vad rollpersonen har i färdigheten innan de övriga färdigheterna väljs, vilket denne fått från sin bakgrund, folkslag, arketyp eller miljö.</i>";
	}
	htmlkod +="</div>";
	
	/*
	for (i=1; i<window.parent.aktiv_fardighetstabell.length; i++){
		htmlkod += "<div id=\"" + aktiv_fardighetstabell[i] + "_beskrivning\">";
		htmlkod += "<b>" + i + " " + fardighetsobjekt[aktiv_fardighetstabell[i]].rubrik + "</b><br>";
		htmlkod += fardighetsobjekt[window.parent.aktiv_fardighetstabell[i]].beskrivning + "<br><p>";
		htmlkod += "</div>";
	}
	htmlkod += "</div>";
	*/
	
	
	
	var htmlkodrubrik = "<div class='garald'>";

	//window.parent.document.getElementById('hogerkategorival').height="60";
	htmlkodrubrik += "<table style=\"width:100%\">";
	htmlkodrubrik += "<tr>";
	htmlkodrubrik += "<td class=\"center\" width=\"30%\">";
	htmlkodrubrik += "<a title=\"Slå fram övriga färdigheter\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpaovrigafardigheter();return false;\">Slå fram " + fardighetslistaobjekt[aktiv_ovrigafardigheterkategori].rubrikplur + "</a><span class=\"break0p25em\"></span>";
	htmlkodrubrik += "<a title=\"Slumpa ordning på färdigheterna\" href=\"PleaseEnableJavascript.html\" onclick=\"slumpaordningovrigafardigheter();return false;\">Slumpa ordning</a> </td>";
	htmlkodrubrik += "<td class=\"center\"><div><span></span><h1>" +  fardighetslistaobjekt[aktiv_ovrigafardigheterkategori].rubrikplur +"</div></h1></td>";
	htmlkodrubrik += "<td class=\"center\" width=\"30%\">";
	
	
	/*
	if (aktiv_ovrigafardigheterkategori=="hantverk"){
		for (j=0;j<aktiv_fardighetslista.hantverk.length;j++){
			if (typeof hantverkattributbonuslista[j] === 'undefined'){
				redoattspara=0;
			}
		}
			
	}
	*/
	if (redoattspara==1){
		htmlkodrubrik += "<a title=\"Click to do something\" href=\"PleaseEnableJavascript.html\" onclick=\"sparaovrigafardigheter();return false;\">Spara " + fardighetslistaobjekt[aktiv_ovrigafardigheterkategori].rubrikplur + " &rArr;</a>";
	}
	
	htmlkodrubrik += "</td>";
	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "</table>";
	
	
	htmlkodrubrik += "</div>";
	
	//console.log("aktiv_ovrigafardigheterkategori: " + aktiv_ovrigafardigheterkategori);
	//console.log("antal poang: " + rollperson[aktiv_ovrigafardigheterkategori + "poang"]);
	
	if (aktiv_ovrigafardigheterkategori + "poang" in rollperson){
		if (rollperson[aktiv_ovrigafardigheterkategori + "poang"] > 0){
		
			
			// Visas endast om rollpersonen har poäng i den aktuella kategorin
			document.getElementById("hogerkategoritabell").innerHTML = "";
			document.getElementById("hogerkategoribeskrivning").innerHTML = htmlkod;
			
			if (rollperson.kvar_handelsetabellslag==0){
				document.getElementById("hogerkategorirubrik").innerHTML = htmlkodrubrik;
			}
			document.getElementById("hogerkategoribeskrivning").scrollTop=0;
			
			/*
			fardighet1scroll=document.getElementById(aktiv_fardighetstabell[1] + "_beskrivning").offsetTop;
			fardighet9scroll=document.getElementById(aktiv_fardighetstabell[9] + "_beskrivning").offsetTop;
			//window.alert([fardighet1scroll, fardighet9scroll]);
			document.getElementById("hogerkategoribeskrivning").scrollTop=fardighet9scroll-fardighet1scroll;
			*/
		}
		
	}
	
	// Skriv vad som behöver göras
	if (rollperson.redoforhandelsetabellslag==0){
		document.getElementById("hogerkategorirubrik").innerHTML = "<p><i>Välj bakgrund, folkslag, attributtärningar, arketyp och miljö och slå därefter alla händelsetabellslag.<i>";
		document.getElementById("hogerkategoritabell").innerHTML = "";
		document.getElementById("hogerkategoribeskrivning").innerHTML = "";
			
	}else{
		if (rollperson.redoforfardighetstabellslag==0){
			handelsetabellista=hamta_handelsetabellista();
			var kvarslagarray=[];
			for (i=0;i<handelsetabellista.namn.length;i++){
				if (rollperson["kvar_" + handelsetabellista.namn[i]]>0){
					kvarslagarray.push([]);
					kvarslagarray[kvarslagarray.length-1][0]=rollperson["kvar_" + handelsetabellista.namn[i]];
					kvarslagarray[kvarslagarray.length-1][1]=handelsetabeller[handelsetabellista.namn[i]][0].rubrik;
				}
				
			}
			if (rollperson["kvar_valfriatabellslag"]>0){
				kvarslagarray.push([]);
				kvarslagarray[kvarslagarray.length-1][0]=rollperson["kvar_valfriatabellslag"].toString();
				kvarslagarray[kvarslagarray.length-1][1]="valfri händelsetabell";
			}
			
			document.getElementById("hogerkategorirubrik").innerHTML="<p><i>Alla händelsetabellslag måste slås och sparas innan du går vidare till färdighetstabellerna. Följande slag är kvar:";
			
			if (kvarslagarray.length==0){
				console.log("inga slag kvar")
			}else if(kvarslagarray.length==1){
				document.getElementById("hogerkategorirubrik").innerHTML += kvarslagarray[0][0];
				document.getElementById("hogerkategorirubrik").innerHTML += " slag på ";
				document.getElementById("hogerkategorirubrik").innerHTML += kvarslagarray[0][1];
				document.getElementById("hogerkategorirubrik").innerHTML += ".";
				
			}else if(kvarslagarray.length==2){
				document.getElementById("hogerkategorirubrik").innerHTML += kvarslagarray[0][0];
				document.getElementById("hogerkategorirubrik").innerHTML += " slag på ";
				document.getElementById("hogerkategorirubrik").innerHTML += kvarslagarray[0][1];
				document.getElementById("hogerkategorirubrik").innerHTML += ", ";
				document.getElementById("hogerkategorirubrik").innerHTML += kvarslagarray[1][0];
				document.getElementById("hogerkategorirubrik").innerHTML += " slag på ";
				document.getElementById("hogerkategorirubrik").innerHTML += kvarslagarray[1][1];
				document.getElementById("hogerkategorirubrik").innerHTML += ".";
			}else if(kvarslagarray.length>=3){
				for (j=0;j<kvarslagarray.length-1;j++){
					document.getElementById("hogerkategorirubrik").innerHTML += kvarslagarray[j][0];
					document.getElementById("hogerkategorirubrik").innerHTML += " slag på ";
					document.getElementById("hogerkategorirubrik").innerHTML += kvarslagarray[j][1];
					document.getElementById("hogerkategorirubrik").innerHTML += ", ";
					
				}
				j=kvarslagarray.length-1;
				document.getElementById("hogerkategorirubrik").innerHTML += kvarslagarray[j][0];
				document.getElementById("hogerkategorirubrik").innerHTML += " slag på ";
				document.getElementById("hogerkategorirubrik").innerHTML += kvarslagarray[j][1];
				document.getElementById("hogerkategorirubrik").innerHTML += ".";
				
			
			}
			document.getElementById("hogerkategorirubrik").innerHTML+="</i>";
			document.getElementById("hogerkategoritabell").innerHTML = "";
			document.getElementById("hogerkategoribeskrivning").innerHTML = "";
		}
	}
	
	
	// offsetTop räknas globalt, inte i div. scrollTop räknas i div, därav kalibrering
	
}

function bythantverkattribut(position, attributnamn){
	var attributobjekt=hamta_attributobjekt();
	//console.log("bythantverkattribut. Position: " + position + ", attributnamn: " + attributnamn);
	document.getElementById("hantverkattributbonusrubrik_" + position.toString() + "").innerHTML=attributobjekt[attributnamn].rubrik;
	hantverkattributbonuslista[position]=attributnamn;
	skrivfardighetstabeller();
}
function bythantverk(position,hantverknamn){
	aktiv_fardighetslista.hantverk[position]=hantverknamn;
	hantverkattributbonuslista[position]=undefined;
	skrivfardighetstabeller();
}

function sparaovrigafardigheter(){
	var i;
	var j;
	var k;
	var redoattspara=1;
	var fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	
	var attributandring=0;
	
	attributobjekt=hamta_attributobjekt();
	grundattributlista=attributobjekt.grundattributlista;
	// tomt objekt
	rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori]={};
	
	ovrigafardigheterpoangslag=hamta_ovrigafardigheterpoangslag();
	
	rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori].lista=[];
	rollperson.ovrigafardigheter.allavalda=1;
	
	
	
	
	if (aktiv_ovrigafardigheterkategori=="hantverk"){
		for (j=0;j<aktiv_fardighetslista.hantverk.length;j++){
			//console.log("typeofhantverkattributbonuslista: " + typeof hantverkattributbonuslista[j]);
				
			if (typeof hantverkattributbonuslista[j] === 'undefined'){
				//redoattspara=0;
				k=slumpa(grundattributlista.length)-1;
				hantverkattributbonuslista[j]=grundattributlista[k];
				attributandring=1;
			}
		}
	}
	if ("kvar_handelsetabellslag" in rollperson){
		if (rollperson.kvar_handelsetabellslag>0){
			redoattspara=0;
		}
	}else{
		redoattspara=0;
	}
	
	// Om attributbonusarna har slumpats ska gui:t uppdateras
	if (attributandring==1){
		skrivfardighetstabeller();
	}
	
	// attributbonusar måste väljas för att kunna spara
	if (redoattspara==1){
		if (rollperson[aktiv_ovrigafardigheterkategori + "poang"]>0){
			for (i=0;i<aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length; i++){
				rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori].lista[i]=aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i];
			
				// fyll objekt med enheter för de valda färdigheterna
				rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori][aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]]={};
				rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori][aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]].enheter = ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"]-1][i];
				
				//Attributbonus
				if (aktiv_ovrigafardigheterkategori=="hantverk"){
					if (hantverkattributbonuslista[i] in rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori]){
						rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori][hantverkattributbonuslista[i]].varde +=1;
					}else{
						rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori][hantverkattributbonuslista[i]]={};
						rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori][hantverkattributbonuslista[i]].varde=1;
					}
				}
				
				
			
			}
			
			// Nollar rollperson inför summering
			rollperson=nollarollperson(rollperson);
			rollperson=nollaextraenheter(rollperson);
			
			// Summerar rollperson		
			if ("bakgrund" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.bakgrund);
			}
			if ("attributtarningar" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
			}
			if ("folkslag" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.folkslag);
			}
			if ("sallskap" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.sallskap);
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
			rollperson=nollaextraenheter(rollperson);
			rollperson=extraenheter(rollperson);
			rollperson=nollaextraenheterpoang(rollperson);
			//rollperson= summerarollperson(rollperson, rollperson.extraenheter);
			
			if(rollperson.ovrigafardigheter.expertis.lista.length>0){
				
				rollperson=summerarollperson(rollperson, rollperson.ovrigafardigheter.expertis);
			}
			if(rollperson.ovrigafardigheter.hantverk.lista.length>0){
				rollperson=summerarollperson(rollperson, rollperson.ovrigafardigheter.hantverk);
			}
			if(rollperson.ovrigafardigheter.kannetecken.lista.length>0){
				rollperson=summerarollperson(rollperson, rollperson.ovrigafardigheter.kannetecken);
			}
			
			
			console.log("I ovrigafardigheter innan forloop, i: " + i);
			
			for (j=0;j<fardighetslistaobjekt.ovrigafardighetergrupplista_namn.length;j++){
				if (rollperson[fardighetslistaobjekt.ovrigafardighetergrupplista_namn[j] + "poang"]==0){
					//console.log(fardighetslistaobjekt.ovrigafardighetergrupplista_namn[j]);
					//console.log(rollperson[fardighetslistaobjekt.ovrigafardighetergrupplista_namn[j] + "poang"]);
				}else{
					if(rollperson.ovrigafardigheter[fardighetslistaobjekt.ovrigafardighetergrupplista_namn[j]].lista.length==0){
						
						//console.log(fardighetslistaobjekt.ovrigafardighetergrupplista_namn[j]);
						
						rollperson.ovrigafardigheter.allavalda=0;
					}else{
						//console.log(rollperson.ovrigafardigheter[fardighetslistaobjekt.ovrigafardighetergrupplista_namn[j]].lista);
						
					}
				}
			}
			
			//console.log("I ovrigafardigheter, efter forloop i: " + i);
			
			
		}
		
		
		
		// uppdatera vänstersammanfattning
		uppdateravanstersammanfattning();
		skrivfardighetstabellerkategorier();
		skrivhogerkategorityper();
	}
}

function skrivanvandenheter(kategorinamn){
	
	
	aktiv_kategori=kategorinamn;
	
	var fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	var fardighetsobjekt=hamta_fardighetsobjekt();
	
	var kategorirubrik="";
	
	var tempnamn="";
	
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	fardighetsgrupplista_plur=fardighetslistaobjekt.fardighetsgrupplista_plur;
	fardighetsgrupplista_kort=fardighetslistaobjekt.fardighetsgrupplista_kort;
	
	
	var avtrubbningkategorinamn=["utsatthet", "vald", "overnaturligt"];
	var avtrubbningkategorirubrik=["Utsatthet", "Våld", "Övernaturligt"];
	var avtrubbningsnummer=[3,4,1];
	
	var i;
	var j;
	for (i=0;i<6;i++){
		if (kategorinamn==fardighetsgrupplista[i]){
			kategorirubrik=fardighetsgrupplista_plur[i];
		}
	}
	if (kategorinamn=="ovrigafardigheter"){
		kategorirubrik="Expertiser, Hantverk &amp; Kännetecken";
		
	}else if(kategorinamn=="sprak"){
		kategorirubrik=="Språk och skrift";
	}else if(kategorinamn=="avtrubbning"){
		kategorirubrik="Avtrubbning";
	}else if(kategorinamn=="valfri"){
		kategorirubrik="Sammanfattning";
	}
	
	
	
	rollperson=borjaenhetsanvandning(rollperson);
	
	
	var htmlkod="<div class='garaldcenter'>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	if (kategorinamn=="sprak"){
		htmlkod += "<table width=\"100%\">";
		htmlkod += "<tr>";
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Slumpa om";
		htmlkod += "</th>";
		
		htmlkod += "<th class='left'>";
		htmlkod += "Färdighetsnamn";
		htmlkod += "</th>";
		
		htmlkod += "<th class='center'>";
		htmlkod += "En&shy;heter";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Ta bort";
		htmlkod += "</th>";
		htmlkod += "</tr>";
		for (i=0;i<rollperson.anvandenheter.allasprakskrift.length;i++){
			tempnamn=rollperson.anvandenheter.allasprakskrift[i];
			htmlkod += "<td class='center'>";
			
			console.log("I skrivanvandenheter: rollperson.anvandenheter.allasprakskrift: " + rollperson.anvandenheter.allasprakskrift);
			console.log("I skrivanvandenheter: rollperson.anvandenheter.sprakskrift: " + rollperson.anvandenheter.sprakskrift);
			
			
			if (rollperson.anvandenheter.sprakskrift.indexOf(tempnamn)>=0){
				// Färdigheten är tillagd och kan slumpas om
				htmlkod += "<a id=\"anvandenheter_slumpaomsprak_" + tempnamn + "\"";
				htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
				htmlkod += "onclick=\"anropaslumpaomsprak(rollperson,'" + tempnamn + "');return false;\">";
				htmlkod += "X";
				htmlkod += "</a>";
				
			}else{
				htmlkod +="&nbsp;";
			}
			htmlkod += "</td>";
			
			
			htmlkod += "<td class='left'>";
			htmlkod += fardighetsobjekt[tempnamn].rubrik;
			htmlkod += "</td>";
			
			
			
			htmlkod += "<td class='center'>";
			htmlkod += rollperson.anvandenheter[tempnamn].enheter.toString();
			htmlkod += "</td>";
			
			// Ta bort språk
			htmlkod += "<td class='center'>";
			if (rollperson.anvandenheter.allasprakskrift[i].enheter==2){
				htmlkod += "<a id=\"anvandenheter_tabortsprak_" + tempnamn + "\"";
				htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
				htmlkod += "onclick=\"anropatabortsprak(rollperson, '" + tempnamn + "');return false;\">";
				
				htmlkod += "&#8211;";
				htmlkod += "</a>";
			}
			htmlkod += "</td>";
			
			
			htmlkod += "</tr>";
		}
		htmlkod += "</table>";
		
		
	}else if(kategorinamn=="ovrigafardigheter"){
		htmlkod += "<table width=\"100%\">";
		htmlkod += "<tr>";
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Slumpa om";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Typ";
		htmlkod += "</th>";
		
		htmlkod += "<th class='left'>";
		htmlkod += "Färdighetsnamn";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"2\" class='center'>";
		htmlkod += "Färdighets&shy;tärningar";
		htmlkod += "</th>";
		
		htmlkod += "<th class='center'>";
		htmlkod += "En&shy;heter";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"2\" class='center'>";
		htmlkod += "Ändra";
		htmlkod += "</th>";
		htmlkod += "</tr>";
		
		for (i=0;i<rollperson.anvandenheter.allaovrigafardighetermedtarningar.length;i++){
			tempnamn=rollperson.anvandenheter.allaovrigafardighetermedtarningar[i];
			htmlkod += "<td class='center'>";
			if (rollperson.anvandenheter.ovrigafardighetermedtarningar.indexOf(tempnamn)>=0){
				// Färdigheten är tillagd och kan slumpas om
				htmlkod += "<a id=\"anvandenheter_slumpaomovrigfardighet_" + tempnamn + "\"";
				htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
				htmlkod += "onclick=\"anropaslumpaomovrigfardighet(rollperson,'" + tempnamn + "');return false;\">";
				htmlkod += "X";
				htmlkod += "</a>";
				
			}else{
				htmlkod +="&nbsp;";
			}
			htmlkod += "</td>";
			
			htmlkod += "<td>";
			if (fardighetslistaobjekt.expertisfardigheter.lista.indexOf(tempnamn)>=0){
				htmlkod +="E";
			}else if(fardighetslistaobjekt.hantverkfardigheter.lista.indexOf(tempnamn)>=0){
				htmlkod +="H";
			}else if(fardighetslistaobjekt.kanneteckenfardigheter.lista.indexOf(tempnamn)>=0){
				htmlkod +="K";
			}else{
				console.log("fel övrig färdighet")
			}
			htmlkod += "</td>";
			htmlkod += "<td>";
			htmlkod += fardighetsobjekt[tempnamn].rubrik;
			htmlkod += "</td>";
			
			htmlkod += "<td class='centersmall'>";
			htmlkod += "(";
			
			htmlkod += rollperson[tempnamn].tarningar;
			htmlkod += ")";
			htmlkod += "</td>";
			htmlkod += "<td class='center'>";
			htmlkod += rollperson.anvandenheter[tempnamn].tarningartotal;
			htmlkod += "</td>";
			htmlkod += "<td class='center'>";
			htmlkod += rollperson.anvandenheter[tempnamn].enheter.toString();
			htmlkod += "</td>";
			
			// Höj färdighet en enhet
			htmlkod += "<td class='center'>";
			htmlkod += "<a id=\"anvandenheter_hoj_" + tempnamn + "\"";
			htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkod += "onclick=\"anropaanvandenhetfardighet(rollperson, '" + tempnamn + "', '1', '" + "ovrigafardigheter" + "');return false;\">";
			htmlkod += "&#43;";
			htmlkod += "</a>";
			htmlkod += "</td>";
			
			
			// Sänk färdighet en enhet
			htmlkod += "<td class='center'>";
			htmlkod += "<a id=\"anvandenheter_sank_" + tempnamn + "\"";
			htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkod += "onclick=\"anropaanvandenhetfardighet(rollperson, '" + tempnamn + "', '-1', '" + "ovrigafardigheter" + "');return false;\">";
			
			htmlkod += "&#8211;";
			htmlkod += "</a>";
			
			htmlkod += "</td>";
			
			
			htmlkod += "</tr>";
			
		}
		htmlkod += "</table>";
		
	}else if(kategorinamn=="avtrubbning"){
		htmlkod += "<table width=\"100%\">";
		htmlkod += "<tr>";	
		htmlkod += "<th class='left'>";
		htmlkod += "Avtrubbning";
		htmlkod += "</th>";
		htmlkod += "<th class='centermarginal'>";
		htmlkod += "Kryss";
		htmlkod += "</th>";
		htmlkod += "<th class='left' colspan=\"1\">";
		htmlkod += "Använda extrakryss och enheter";
		htmlkod += "</th>";
		
		htmlkod += "<th class='center' colspan=\"2\">";
		htmlkod += "Ändra";
		htmlkod += "</th>";
		htmlkod += "</tr>";	
		
		for (i=0;i<3;i++){
			htmlkod += "<tr>";	
			htmlkod += "<td class='left'>";
			htmlkod += avtrubbningkategorirubrik[i];
			htmlkod += "</th>";
			htmlkod += "<td class='center'>";
			for (j=0;j<rollperson.anvandenheter.avtrubbning[avtrubbningkategorinamn[i] + "krysstotal"];j++){
				htmlkod += "X";
			}
			htmlkod += "</td>";
			htmlkod += "<td class='left' colspan=\"1\">";
			
			// Fyller på tempavtrubbningslista
			tempavtrubbningslista=[];
			if (rollperson.anvandenheter.avtrubbning[avtrubbningkategorinamn[i]].anvandavalfriakryss==1){
				tempavtrubbningslista.push("1 valfritt kryss");
			}else if (rollperson.anvandenheter.avtrubbning[avtrubbningkategorinamn[i]].anvandavalfriakryss>1){
				tempavtrubbningslista.push(rollperson.anvandenheter.avtrubbning[avtrubbningkategorinamn[i]].anvandavalfriakryss.toString() + " valfria kryss");
			}
			
			console.log("rollperson.anvandenheter.avtrubbning[" + fardighetsgrupplista[avtrubbningsnummer[i]] + "]");
			console.log("anvanda kategorienheter, " +  avtrubbningkategorinamn[i] + ": " + rollperson.anvandenheter.avtrubbning[fardighetsgrupplista[avtrubbningsnummer[i]]].anvandaenheter);
			if (rollperson.anvandenheter.avtrubbning[fardighetsgrupplista[avtrubbningsnummer[i]]].anvandaenheter>0){
				tempavtrubbningslista.push(rollperson.anvandenheter.avtrubbning[fardighetsgrupplista[avtrubbningsnummer[i]]].anvandaenheter.toString() + " " + fardighetsgrupplista_kort[avtrubbningsnummer[i]]);
			}
			if  (rollperson.anvandenheter.avtrubbning[avtrubbningkategorinamn[i]].anvandavalfriaenheter==1){
				tempavtrubbningslista.push("1 valfri enhet");
			}else if (rollperson.anvandenheter.avtrubbning[avtrubbningkategorinamn[i]].anvandavalfriaenheter>1){
				tempavtrubbningslista.push(rollperson.anvandenheter.avtrubbning[avtrubbningkategorinamn[i]].anvandavalfriaenheter.toString() + " valfria enheter");
			}
			
			if (tempavtrubbningslista.length==1){
				htmlkod +=tempavtrubbningslista[0];
			}else if (tempavtrubbningslista.length>=2){
				for (j=0;j<tempavtrubbningslista.length-1;j++){
					htmlkod +=tempavtrubbningslista[j];
					htmlkod +=", ";
				}
				htmlkod +=tempavtrubbningslista[tempavtrubbningslista.length-1];
			}
			
			//console.log("tempavtrubbningslista, " + avtrubbningkategorinamn[i] + ": " + tempavtrubbningslista);
			
			htmlkod += "</td>";
			// Höj
			htmlkod += "<td class='center'>";
			htmlkod += "<a id=\"anvandenheter_hojavtrubbning_" + avtrubbningkategorinamn[i] + "\"";
			htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkod += "onclick=\"anropaandraavtrubbning(rollperson, '" + avtrubbningkategorinamn[i] + "', '1');return false;\">";
			htmlkod += "&#43;";
			htmlkod += "</a>";
			htmlkod += "</td>";
			
			// Sänk
			htmlkod += "<td class='center'>";
			htmlkod += "<a id=\"anvandenheter_sankavtrubbning_" + avtrubbningkategorinamn[i] + "\"";
			htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkod += "onclick=\"anropaandraavtrubbning(rollperson, '" + avtrubbningkategorinamn[i] + "', '-1');return false;\">";
			htmlkod += "&#8211;";
			
			htmlkod += "</td>";
			htmlkod += "</tr>";	
		}
		htmlkod += "</table>";	
		
		
		
	}else if(kategorinamn=="valfri"){
		
		
		// Lista enhetsanvändning för färdighetskategorierna
		htmlkod += "<table>";
		htmlkod += "<th class='left'>";
		htmlkod += "Enheter inom <br>Färdighetskategori";
		htmlkod += "</th>";
		
		htmlkod += "<th class='center'>";
		htmlkod += "Från start";
		htmlkod += "</th>";
		htmlkod += "<th class='center'>";
		htmlkod += "Kvar";
		htmlkod += "</th>";
		htmlkod += "<th class='center'>";
		htmlkod += "Använda till färdigheter";
		htmlkod += "</th>";
		htmlkod += "<th class='center'>";
		htmlkod += "Använda till övrigt";
		htmlkod += "</th>";
		htmlkod += "<th class='center'>";
		htmlkod += "Använda valfria";
		htmlkod += "</th>";
		htmlkod += "</tr>";
		
		for (i=0;i<6;i++){
			htmlkod += "<tr>"
			htmlkod += "<td class='left'>";
			htmlkod += fardighetsgrupplista_plur[i].toString();
			htmlkod += "</td>";
			htmlkod += "<td class='center'>";
			htmlkod += rollperson[fardighetsgrupplista[i] + "enheter"].toString();
			htmlkod += "</td>";
			htmlkod += "<td class='center'>";
			htmlkod += rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter.toString();
			htmlkod += "</td>";
			htmlkod += "<td class='center'>";
			htmlkod += rollperson.anvandenheter[fardighetsgrupplista[i]].anvandaenheter.toString();
			htmlkod += "</td>";
			htmlkod += "<td class='center'>";
			if (rollperson.anvandenheter[fardighetsgrupplista[i]].anvandaenheterovrigt==0){
				htmlkod += "&#8211;";
			}else{
				htmlkod += rollperson.anvandenheter[fardighetsgrupplista[i]].anvandaenheterovrigt.toString();
			}
			htmlkod += "</td>";
			htmlkod += "<td class='center'>";
			htmlkod += rollperson.anvandenheter[fardighetsgrupplista[i]].anvandavalfriaenheter.toString();
			htmlkod += "</td>";
			htmlkod += "</tr>";
		}
		
		
		// tom rad
		htmlkod += "<tr>";
		htmlkod += "<td colspan=\"6\">";
		htmlkod += "&nbsp;";
		htmlkod += "</td>";
		htmlkod += "</tr>";
		
		
		
		// Lättlärda färdigheter
		htmlkod += "<th colspan=\"1\" class='left'>";
		htmlkod += "Lättlärda inom <br>Färdighetskategori";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Från start";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Kvar";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"3\" class='center'>";
		htmlkod += "&nbsp;";
		htmlkod += "</th>";
		htmlkod += "</tr>";
		
		for (i=0;i<6;i++){
			htmlkod += "<tr>"
			htmlkod += "<td class='left'>";
			htmlkod += fardighetsgrupplista_plur[i];
			htmlkod += "</td>";
			
			if(rollperson["lattlardalla" + fardighetsgrupplista[i]]==0){
				
				if (rollperson["lattlard" + fardighetsgrupplista[i]]==0){
					htmlkod += "<td colspan=\"1\" class='center'>";
					htmlkod += "&#8211;";
					htmlkod += "</td>";
					htmlkod += "<td colspan=\"1\" class='center'>";
					htmlkod += "&#8211;";
					htmlkod += "</td>";
				}else{
					htmlkod += "<td colspan=\"1\" class='center'>";
					htmlkod += rollperson["lattlard" + fardighetsgrupplista[i]].toString();
					htmlkod += "</td>";
					htmlkod += "<td colspan=\"1\" class='center'>";
					htmlkod += rollperson.anvandenheter[fardighetsgrupplista[i]].kvarlattlarda.toString();
					htmlkod += "</td>";
				}
				htmlkod += "<td colspan=\"2\">";
				htmlkod += "&nbsp;";
				htmlkod += "</td>";
		
				
			}else{
				htmlkod += "<td colspan=\"4\" class='left'>";
				htmlkod +="<i>Lättlärd i alla " + fardighetsgrupplista_plur[i] + "</i>";
				htmlkod += "</td>";
			}
			htmlkod += "<td colspan=\"1\">";
			htmlkod += "&nbsp;";
			htmlkod += "</td>";
		
			htmlkod+="</tr>";
		}
		
		htmlkod += "<tr>"
		htmlkod += "<td class='left'>";
		htmlkod += "Valfri kategori";
		htmlkod += "</td>";	
		
		htmlkod += "<td colspan=\"1\" class='center'>";
		if (rollperson["lattlardvalfri"]==0){
			htmlkod += "&#8211;";
			htmlkod += "</td>";
			htmlkod += "<td colspan=\"1\" class='center'>";
			htmlkod += "&#8211;";
			htmlkod += "</td>";
		}else{
			htmlkod += rollperson["lattlardvalfri"].toString();
			htmlkod += "</td>";
			htmlkod += "<td colspan=\"1\" class='center'>";
			htmlkod += rollperson.anvandenheter.kvarvalfrialattlarda.toString();
			htmlkod += "</td>";
		}
		htmlkod += "<td colspan=\"3\" class='center'>";
		htmlkod += "&nbsp;";
		htmlkod += "</td>";
		htmlkod+="</tr>";
		
		
		
		// tom rad
		htmlkod+="<tr>";
		htmlkod += "<td colspan=\"6\">";
		htmlkod += "&nbsp;";
		htmlkod += "</td>";
		htmlkod += "</tr>";
		
		
		
		
		// Lista avtrubbning
		htmlkod += "<tr>";
		htmlkod += "<th colspan=\"1\" class='left'>";
		htmlkod += "Avtrubbning";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Valfria kryss";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Kvar";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"2\" class='center'>";
		htmlkod += "Använda enheter";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Använda valfria";
		htmlkod += "</th>";
		
		htmlkod += "</tr>";
		
		htmlkod += "<tr>";
		htmlkod += "<td colspan=\"1\" class='left'>";
		htmlkod += "Avtrubbning";
		htmlkod += "</td>";
		
		htmlkod += "<td colspan=\"1\" class='center'>";
		if (rollperson.avtrubbningvalfri==0){
			htmlkod += "&#8211;";
			htmlkod += "</td>";
			htmlkod += "<td colspan=\"1\" class='center'>";
			htmlkod += "&#8211;";

		}else{
			htmlkod += rollperson.avtrubbningvalfri.toString();
			htmlkod += "</td>";
			htmlkod += "<td colspan=\"1\" class='center'>";
			htmlkod += rollperson.anvandenheter.avtrubbning.kvarvalfriakryss.toString();
			
		}
		htmlkod += "</td>";
		
		
		
		htmlkod += "<td colspan=\"2\" class='center'>";
		if (rollperson.anvandenheter.avtrubbning.socialafardigheter.anvandaenheter+rollperson.anvandenheter.avtrubbning.stridsfardigheter.anvandaenheter+rollperson.anvandenheter.avtrubbning.mystikfardigheter.anvandaenheter==0){
			htmlkod += "&#8211;";
		}else{
			if (rollperson.anvandenheter.avtrubbning.mystikfardigheter.anvandaenheter>0){
				htmlkod += rollperson.anvandenheter.avtrubbning.mystikfardigheter.anvandaenheter.toString() + " Mystik" + "<br>";
			}
			if (rollperson.anvandenheter.avtrubbning.socialafardigheter.anvandaenheter>0){
				htmlkod += rollperson.anvandenheter.avtrubbning.socialafardigheter.anvandaenheter.toString() + " Sociala" + "<br>";
			}
			if (rollperson.anvandenheter.avtrubbning.stridsfardigheter.anvandaenheter>0){
				htmlkod += rollperson.anvandenheter.avtrubbning.stridsfardigheter.anvandaenheter.toString() + " Strid" + "<br>";
			}
		}
		
		htmlkod += "</td>";
		
		htmlkod += "<td colspan=\"1\" class='center'>";
		htmlkod += rollperson.anvandenheter.avtrubbning.anvandavalfriaenheter.toString();
		htmlkod += "</td>";
		
		htmlkod += "</tr>";
		
		
		// tom rad
		htmlkod += "<tr>";
		htmlkod += "<td colspan=\"6\">";
		htmlkod += "&nbsp;";
		htmlkod += "</td>";
		htmlkod += "</tr>";
		
		// Lista Expertiser, Hantverk & Kännetecken
		htmlkod += "<tr>";
		htmlkod += "<th colspan=\"5\" class='left'>";
		htmlkod += "Expertiser, Hantverk &amp; Kännetecken";
		htmlkod += "</th>";
		
		
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Använda valfria";
		htmlkod += "</th>";
		
		htmlkod += "</tr>";
		htmlkod += "<td colspan=\"5\" class='left'>";
		htmlkod += "Expertiser, Hantverk &amp; Kännetecken";
		htmlkod += "</td>";
		
		
		htmlkod += "<td colspan=\"1\" class='center'>";
		htmlkod += rollperson.anvandenheter.ovrigafardigheter.anvandavalfriaenheter.toString();
		htmlkod += "</td>";
		
		htmlkod += "</tr>";
		
		// tom rad
		htmlkod += "<tr>";
		htmlkod += "<td colspan=\"6\">";
		htmlkod += "&nbsp;";
		htmlkod += "</td>";
		htmlkod += "</tr>";
		
		// Lista Språk
		htmlkod += "<tr>";
		htmlkod += "<th colspan=\"1\" class='left'>";
		htmlkod += "Språk &amp; Skrift";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"1\" class='left'>";
		htmlkod += "Språk&shy;enheter";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"1\" class='left'>";
		htmlkod += "Kvar";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"2\" class='center'>";
		htmlkod += "Använda enheter";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"1\" class='center'>";
		htmlkod += "Använda valfria";
		htmlkod += "</th>";
		
		htmlkod += "</tr>";
		htmlkod += "<td colspan=\"1\" class='left'>";
		htmlkod += "Språk &amp; skrift";
		htmlkod += "</td>";
		
		
		
		
		htmlkod += "<td colspan=\"1\" class='center'>";
		htmlkod += rollperson.sprakenheter.toString();
		htmlkod += "</td>";
		
		htmlkod += "<td colspan=\"1\" class='center'>";
		htmlkod += rollperson.anvandenheter.sprakfardigheter.kvarenheter.toString();
		htmlkod += "</td>";
		
		htmlkod += "<td colspan=\"2\" class='center'>";
		if (rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter>0){
			htmlkod += rollperson.anvandenheter.sprakfardigheter.kunskapsfardigheter.anvandaenheter + " Kunskap"
		}else{
			htmlkod += "&#8211;";
		}
		htmlkod += "</td>";
		htmlkod += "<td colspan=\"1\" class='center'>";
		htmlkod += rollperson.anvandenheter.sprakfardigheter.anvandavalfriaenheter.toString();
		htmlkod += "</td>";
		
		htmlkod += "</tr>";
		
		
		
		// tom rad
		htmlkod += "<tr>";
		htmlkod += "<td colspan=\"6\">";
		htmlkod += "&nbsp;";
		htmlkod += "</td>";
		htmlkod += "</tr>";
		
		
		
		htmlkod += "<tr>";
		htmlkod += "<td colspan=\"5\" class='right'>";
		htmlkod += "<i>Summa använda valfria enheter: </i>";
		htmlkod += "</td>";
		htmlkod += "<td class='center'>";
		htmlkod += (rollperson.valfriaenheter-rollperson.anvandenheter.kvarvalfriaenheter).toString();
		htmlkod += "</td>";
		
		htmlkod += "</tr>";
		htmlkod += "<tr>";
		
		htmlkod += "<td colspan=\"5\" class='right'>";
		htmlkod += "<i>Kvarvarande valfria enheter: </i>";
		htmlkod += "</td>";
		htmlkod += "<td class='center'>";
		htmlkod += rollperson.anvandenheter.kvarvalfriaenheter.toString();
		htmlkod += "</td>";
		htmlkod += "</tr>";
		htmlkod += "<tr>";
		
		htmlkod += "<td colspan=\"5\" class='right'>";
		htmlkod += "<i>Totalt antal valfria enheter: </i>";
		htmlkod += "</td>";
		htmlkod += "<td class='center'>";
		htmlkod += rollperson.valfriaenheter.toString();
		htmlkod += "</td>";
		
		htmlkod += "</tr>";
		
		
		
		htmlkod += "</table>";
		
	
	}else{
		htmlkod += "<tr>";
		htmlkod += "<th colspan=\"2\" class='center'>";
		htmlkod += "Lätt&shy;lärd";
		htmlkod += "</th>";
		
		htmlkod += "<th class='left'>";
		htmlkod += "Färdighetsnamn";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"2\" class='center'>";
		htmlkod += "Färdighets&shy;tärningar";
		htmlkod += "</th>";
		
		htmlkod += "<th class='center'>";
		htmlkod += "En&shy;heter";
		htmlkod += "</th>";
		
		htmlkod += "<th colspan=\"2\" class='center'>";
		htmlkod += "Ändra";
		htmlkod += "</th>";
		
		
		for (i=0;i<fardighetslistaobjekt[kategorinamn].lista.length;i++){
			htmlkod += "<tr>";
			if (rollperson[fardighetslistaobjekt[kategorinamn].lista[i]].lattlard==-1){
				htmlkod += "<td>";
				htmlkod += "&nbsp;";
				htmlkod += "</td>";
				htmlkod += "<td>";
				htmlkod += "(S)"; // Svårlärd
				htmlkod += "</td>";
			}else if (rollperson[fardighetslistaobjekt[kategorinamn].lista[i]].lattlard==1){
				htmlkod += "<td>";
				htmlkod += "&nbsp;";
				htmlkod += "</td>";
				htmlkod += "<td>";
				htmlkod += "(L)"; // Lättlärd
				htmlkod += "</td>";
			}else if (rollperson.anvandenheter[fardighetslistaobjekt[kategorinamn].lista[i]].lattlard==1){
				htmlkod += "<td>";
				htmlkod += "<a id=\"anvandenheter_sanklattlard_" + fardighetslistaobjekt[kategorinamn].lista[i] + "\"";
				htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
				htmlkod += "onclick=\"anropaandralattlard(rollperson, '" + fardighetslistaobjekt[kategorinamn].lista[i] + "','"  + kategorinamn + "',-1);return false;\">";

				htmlkod += "&#8211;";
				htmlkod += "</a>";
				htmlkod += "</td>";
				htmlkod += "<td>";
				htmlkod += "(L)"; // Lättlärd
				htmlkod += "</td>";
			}else{
				if (rollperson.anvandenheter[kategorinamn].kvarlattlarda + rollperson.anvandenheter.kvarvalfrialattlarda >0){
					htmlkod += "<td>";
					htmlkod += "<a id=\"anvandenheter_sanklattlard_" + fardighetslistaobjekt[kategorinamn].lista[i] + "\"";
					htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
					htmlkod += "onclick=\"anropaandralattlard(rollperson, '" + fardighetslistaobjekt[kategorinamn].lista[i] + "','"  + kategorinamn + "',1);return false;\">";
					htmlkod += "&#43;";
					htmlkod += "</a>";

					htmlkod += "</td>";
				}else{
					htmlkod += "<td>";
					htmlkod += "&nbsp;";
					htmlkod += "</td>";
				}
				htmlkod += "<td>";
				htmlkod += "&nbsp;"; 
				htmlkod += "</td>";
				
			}
			
			htmlkod += "<td>";
			if (fardighetsobjekt[fardighetslistaobjekt[kategorinamn].lista[i]].namn==aktiv_fardighet){
				// Senast ändrade färdighet
				htmlkod += "<b>";
				
			}
			
			htmlkod += fardighetsobjekt[fardighetslistaobjekt[kategorinamn].lista[i]].rubrik;
			
			if (fardighetsobjekt[fardighetslistaobjekt[kategorinamn].lista[i]].namn==aktiv_fardighet){
				// Senast ändrade färdighet
				htmlkod += "</b>";
			}
			htmlkod += "</td>";
			htmlkod += "<td class='centersmall'>";
			htmlkod += "(";
			
			htmlkod += rollperson[fardighetslistaobjekt[kategorinamn].lista[i]].tarningar;
			htmlkod += ")";
			htmlkod += "</td>";
			htmlkod += "<td class='center'>";
			htmlkod += rollperson.anvandenheter[fardighetslistaobjekt[kategorinamn].lista[i]].tarningartotal;
			htmlkod += "</td>";
			htmlkod += "<td class='center'>";
			htmlkod += rollperson.anvandenheter[fardighetslistaobjekt[kategorinamn].lista[i]].enheter;
			htmlkod += "</td>";
			
			// Höj färdighet en enhet
			htmlkod += "<td class='center'>";
			if (rollperson.anvandenheter[fardighetslistaobjekt[kategorinamn].lista[i]].enhetertotal<8){
			
				htmlkod += "<a id=\"anvandenheter_hoj_" + fardighetslistaobjekt[kategorinamn].lista[i] + "\"";
				htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
				htmlkod += "onclick=\"anropaanvandenhetfardighet(rollperson, '" + fardighetslistaobjekt[kategorinamn].lista[i] + "', '1', '" + kategorinamn + "');return false;\">";
			}
			htmlkod += "&#43;";
			if (rollperson.anvandenheter[fardighetslistaobjekt[kategorinamn].lista[i]].enhetertotal<8){
			
				htmlkod += "</a>";
			}
			htmlkod += "</td>";
			
			
			// Sänk färdighet en enhet
			htmlkod += "<td class='center'>";
			if (rollperson.anvandenheter[fardighetslistaobjekt[kategorinamn].lista[i]].enheter>0){
				htmlkod += "<a id=\"anvandenheter_sank_" + fardighetslistaobjekt[kategorinamn].lista[i] + "\"";
				htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
				htmlkod += "onclick=\"anropaanvandenhetfardighet(rollperson, '" + fardighetslistaobjekt[kategorinamn].lista[i] + "', '-1', '" + kategorinamn + "');return false;\">";
			}	
			htmlkod += "&#8211;";
			if (rollperson.anvandenheter[fardighetslistaobjekt[kategorinamn].lista[i]].enheter>0){
				htmlkod += "</a>";
			}
			htmlkod += "</td>";
			
			htmlkod += "</td>";
			htmlkod += "</tr>";
		}
		
		// tom rad
		htmlkod += "<tr>";
		htmlkod +="<td colspan=\"8\">";
		htmlkod +="&nbsp;";
		htmlkod +="</td>";
		htmlkod += "</tr>";
		
		htmlkod += "<tr>";
		htmlkod +="<td>";
		htmlkod +="<i>Kvar <br>lättlärda:</i>"
		htmlkod +="</td>";
		htmlkod +="<td class='center'>";
		// Kvar lättlärda
		htmlkod += rollperson.anvandenheter[kategorinamn].kvarlattlarda.toString();
		htmlkod +="</td>";
		htmlkod +="<td colspan=\"2\">";
		htmlkod +="&nbsp;";
		htmlkod +="</td>";
		htmlkod +="<td class='right'>";
		htmlkod +="<i>Kvar enheter</i>:"	
		htmlkod +="</td>";
		htmlkod +="<td class='center'>";
		// Kvar enheter
		htmlkod += rollperson.anvandenheter[kategorinamn].kvarenheter.toString();
		htmlkod +="</td>";
		htmlkod +="<td colspan=\"2\">";
		htmlkod +="&nbsp;";
		htmlkod +="</td>";
		htmlkod += "</tr>";
		
		htmlkod += "<tr>";
		htmlkod +="<td>";
		htmlkod +="<i>Kvar <br>valfria <br>lättlärda:</i>"
		htmlkod +="</td>";
		htmlkod +="<td class='center'>";
		// Kvar valfria lättlärda
		htmlkod += rollperson.anvandenheter.kvarvalfrialattlarda.toString();
		htmlkod +="</td>";
		htmlkod +="<td colspan=\"2\">";
		htmlkod +="&nbsp;";
		htmlkod +="</td>";
		htmlkod +="<td class='right'>";
		htmlkod +="<i>Kvar valfria enheter:</i>"	
		htmlkod +="</td>";
		htmlkod +="<td class='center'>";
		// Kvar valfria enheter
		htmlkod += rollperson.anvandenheter.kvarvalfriaenheter.toString();
		htmlkod +="</td>";
		htmlkod +="<td colspan=\"2\">";
		htmlkod +="&nbsp;";
		htmlkod +="</td>";
		htmlkod += "</tr>";
		
		
		/*
		htmlkod += "<tr>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		
		htmlkod +="<td class='center'>";
		htmlkod +="<i>Summa</i>";
		htmlkod +="</td>";
		htmlkod +="<td class='center'>";
		htmlkod += (rollperson.anvandenheter[kategorinamn].anvandaenheter + rollperson.anvandenheter[kategorinamn].anvandavalfriaenheter).toString();
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod += "</tr>"
		
		htmlkod += "<tr>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		
		htmlkod +="<td class='center'>";
		htmlkod +="<i>Varav kategori</i>";
		htmlkod +="</td>";
		htmlkod +="<td class='center'>";
		htmlkod += rollperson.anvandenheter[kategorinamn].anvandaenheter.toString();
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod += "</tr>"
		
		htmlkod += "<tr>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		
		htmlkod +="<td class='center'>";
		htmlkod +="<i>Varav valfria</i>";
		htmlkod +="</td>";
		htmlkod +="<td class='center'>";
		htmlkod += rollperson.anvandenheter[kategorinamn].anvandavalfriaenheter.toString();
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod +="<td>";
		htmlkod +="</td>";
		htmlkod += "</tr>"
		*/
		
	}
	
	var htmlkodrubrik = "<div class='garaldcenter'>";

	htmlkodrubrik += "<table style=\"width:100%\">";
	htmlkodrubrik += "<tr>";
	htmlkodrubrik += "<td class=\"center\" width=\"25%\">";
	if (kategorinamn=="valfri"){
		// Nollar allt
		htmlkodrubrik += "<a id=\"anvandenheter_valfria_nollallt\"";
		htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkodrubrik += "onclick=\"anropanollaallt(rollperson);return false;\">";
		
		htmlkodrubrik +="Återställ allt";
		htmlkodrubrik += "</a>";
	}else if(kategorinamn=="avtrubbning"){
		
		htmlkodrubrik += "<a id=\"anvandenheter_nollaavtrubbning\"";
		htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkodrubrik += "onclick=\"anropanollaavtrubbning(rollperson);return false;\">";
		
		htmlkodrubrik += "Återställ Avtrubbning";
		htmlkodrubrik += "</a>";
	}else if(kategorinamn=="ovrigafardigheter"){
		htmlkodrubrik += "<a id=\"anvandenheter_nollaovrigafardigheter\"";
		htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkodrubrik += "onclick=\"anropanollaovrigafardigheter(rollperson);return false;\">";
		
		htmlkodrubrik += "Återställ Expertiser, Hantverk &amp; Kännetecken";
		htmlkodrubrik += "</a>";
		
	}else if(kategorinamn=="sprak"){
		htmlkodrubrik += "<a id=\"anvandenheter_tabortallasprak\"";
		htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkodrubrik += "onclick=\"anropatabortallasprak(rollperson);return false;\">";
				
		htmlkodrubrik += "Ta bort valda språk";
		htmlkodrubrik += "</a>"
	}else{
		htmlkodrubrik += "<a id=\"anvandenheter_nollakategori_" + kategorinamn + "\"";
		htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkodrubrik += "onclick=\"anropanollakategori(rollperson,'"  + kategorinamn + "');return false;\">";
		
		htmlkodrubrik += "Nolla hela kategorin";
		htmlkodrubrik += "</a>";
	}
	htmlkodrubrik +="</td>";

	htmlkodrubrik += "<td class=\"center\"><div><span></span><h2>";
	htmlkodrubrik += kategorirubrik;
	
	htmlkodrubrik +="</div></h2></td>";
	htmlkodrubrik += "<td class=\"center\" width=\"25%\">";
	if (kategorinamn=="valfri"){
		htmlkodrubrik +="";
		
		if (rollperson.anvandenheter.kvarvalfriaenheter>0){
			htmlkodrubrik += "<a id=\"anvandenheter_sammanfattning_slumpaenvalfri" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"anropaslumpaenhetvalfri(rollperson);return false;\">";
		}
		htmlkodrubrik += "Slumpa en enhet" + ""; 
		if (rollperson.anvandenheter.kvarvalfriaenheter>0){
			htmlkodrubrik +="</a>"; 
		}
		htmlkodrubrik += "<br>";
		
		
		htmlkodrubrik += "<a id=\"anvandenheter_sammanfattning_slumparestenvalfria" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"anropaslumpaallt(rollperson);return false;\">";
		htmlkodrubrik += "Slumpa resten" + ""; 
		htmlkodrubrik +="</a>"; 
		
		
	}else if (kategorinamn=="sprak"){
		htmlkodrubrik += "<a id=\"anvandenheter_slumpasprak\"";
		htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkodrubrik += "onclick=\"anropaslumpasprak(rollperson);return false;\">";
			
		htmlkodrubrik += "Slumpa språk";
		htmlkodrubrik += "</a>"
		
	}else if(kategorinamn=="ovrigafardigheter"){
		if (rollperson.anvandenheter.kvarvalfriaenheter>0){
			htmlkodrubrik += "<a id=\"anvandenheter_slumpaexpertis\"";
			htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkodrubrik += "onclick=\"anropaslumpaovrigfardighet(rollperson,'"  + "expertis" + "');return false;\">";
		}
		htmlkodrubrik += "Slumpa Expertis";
		if (rollperson.anvandenheter.kvarvalfriaenheter>0){
			htmlkodrubrik += "</a>";
		}
		htmlkodrubrik += "<br>";
		if (rollperson.anvandenheter.kvarvalfriaenheter>0){
			htmlkodrubrik += "<a id=\"anvandenheter_slumpahantverk\"";
			htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkodrubrik += "onclick=\"anropaslumpaovrigfardighet(rollperson,'"  + "hantverk" + "');return false;\">";
		}	
		htmlkodrubrik += "Slumpa Hantverk";
		if (rollperson.anvandenheter.kvarvalfriaenheter>0){
			htmlkodrubrik += "</a>";
		}
		htmlkodrubrik += "<br>";
		if (rollperson.anvandenheter.kvarvalfriaenheter>0){
			htmlkodrubrik += "<a id=\"anvandenheter_slumpakannetecken\"";
			htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkodrubrik += "onclick=\"anropaslumpaovrigfardighet(rollperson,'"  + "kannetecken" + "');return false;\">";
		}	
		htmlkodrubrik += "Slumpa Kännetecken";
		if (rollperson.anvandenheter.kvarvalfriaenheter>0){
			htmlkodrubrik += "</a>";
		}
	}else if(kategorinamn=="avtrubbning"){
		htmlkodrubrik += "<a id=\"anvandenheter_slumpaavtrubbning\"";
		htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkodrubrik += "onclick=\"anropaslumpaavtrubbning(rollperson);return false;\">";
		
		htmlkodrubrik += "Slumpa ett kryss";
	}else{
		if (rollperson.anvandenheter.kvarvalfriaenheter+rollperson.anvandenheter[kategorinamn].kvarenheter > 0){
			htmlkodrubrik += "<a id=\"anvandenheter_slumpaenenhet_" + kategorinamn + "\"";
			htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkodrubrik += "onclick=\"anropaslumpaenhetkategori(rollperson,'"  + kategorinamn + "');return false;\">";
		}		
		htmlkodrubrik += "Slumpa en enhet";
		if (rollperson.anvandenheter.kvarvalfriaenheter+rollperson.anvandenheter[kategorinamn].kvarenheter > 0){
			htmlkodrubrik += "</a>"; 
		}
		htmlkodrubrik += "<br>";
		
		if (rollperson.anvandenheter.kvarvalfriaenheter+rollperson.anvandenheter[kategorinamn].kvarenheter > 0){
			htmlkodrubrik += "<a id=\"anvandenheter_slumparesten_" + kategorinamn + "\"";
			htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkodrubrik += "onclick=\"anropaslumparestenkategori(rollperson,'"  + kategorinamn + "');return false;\">";
		}	
		htmlkodrubrik += "Slumpa resten";
		
		if (rollperson.anvandenheter.kvarvalfriaenheter+rollperson.anvandenheter[kategorinamn].kvarenheter > 0){
			htmlkodrubrik += "</a>"; 
		}
		htmlkodrubrik += "<br>";
		
		if (rollperson.anvandenheter[kategorinamn].kvarlattlarda+rollperson.anvandenheter.kvarvalfrialattlarda>0){
			htmlkodrubrik += "<a id=\"anvandenheter_slumpalattlarda_" + kategorinamn + "\"";
			htmlkodrubrik += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkodrubrik += "onclick=\"anropaslumpalattlarda(rollperson,'"  + kategorinamn + "');return false;\">";
		}	
		htmlkodrubrik += "Slumpa lättlärd \(" + rollperson.anvandenheter[kategorinamn].kvarlattlarda.toString() + "/" + rollperson["lattlard" + kategorinamn].toString() + "\)";
		 
		if (rollperson.lattlardvalfri>0){
			htmlkodrubrik += "<br><i>Valfria lättlärda \(" + rollperson.anvandenheter.kvarvalfrialattlarda.toString() + "/" + rollperson["lattlardvalfri"].toString() + "\)";
		}
		if (rollperson.anvandenheter[kategorinamn].kvarlattlarda+rollperson.anvandenheter.kvarvalfrialattlarda>0){
			htmlkodrubrik += "</a>";
		}
	}
	htmlkodrubrik += "</td>";

	htmlkodrubrik += "</tr>";
	htmlkodrubrik += "</table>";
	htmlkodrubrik += "</div>";
	
	
	document.getElementById("hogerkategorirubrik").innerHTML = htmlkodrubrik;
	document.getElementById("hogerkategoribeskrivning").innerHTML = htmlkod;
	

	// saknas
}

function skrivanvandenheterkategorier(){
	window.parent.document.getElementById('hogerkategorival').height="80";
	
	var fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	fardighetsgrupplista_plur=fardighetslistaobjekt.fardighetsgrupplista_plur;
	var htmlkod = "<div class='garald'>";
	var i;

	// Skapa objekt anvandenheter med funktionen borjaenhetsanvandning
	
	rollperson=borjaenhetsanvandning(rollperson);
	
	if ("anvandenheter" in rollperson){
	}else{
		console.log("borja enhetsanvandning");
		testfunktion_anvandenheter();
		
	}
	
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod += "<td class=\"center\" width=\"18%\"></td><td class=\"center\">";
	for (i=0;i<6;i++){
		
		htmlkod += "<a id=\"rpvalkategori_anvandenheter_" + fardighetsgrupplista[i] + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"skrivanvandenheter('" + fardighetsgrupplista[i] + "');return false;\">" + fardighetsgrupplista_plur[i] + "";
		htmlkod +=" \(" + rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter + "/" + rollperson[fardighetsgrupplista[i] + "enheter"] + "\) ";
		htmlkod +="</a>"; 
			
		
		
		if ((i+1)%2==0){
			htmlkod += "<br>";
		
		}else{
			htmlkod += " &#124; ";
		}
	}
	
	// Expertiser, hantverk, kännetecken
	htmlkod += "<a id=\"rpvalkategori_anvandenheter_ovrigafardigheter" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"skrivanvandenheter('" + "ovrigafardigheter" + "');return false;\">"
	htmlkod += "Expertiser, Hantverk &amp; Kännetecken" ;
	htmlkod += "</a>"; 
	htmlkod += "<br>";
	
	i=6; // Språk
	htmlkod += "<a id=\"rpvalkategori_anvandenheter_sprak" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"skrivanvandenheter('" + "sprak" + "');return false;\">";
	htmlkod += "Språk"; 
	
	htmlkod +=" \(" + rollperson.anvandenheter[fardighetsgrupplista[i]].kvarenheter + "/" + rollperson.sprakenheter + "\) ";
	htmlkod +="</a>"; 
	
	htmlkod += " &#124; ";
	
	// Avtrubbning
	htmlkod += "<a id=\"rpvalkategori_anvandenheter_avtrubbning" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"skrivanvandenheter('" + "avtrubbning" + "');return false;\">" + "Avtrubbning" + ""; 
	htmlkod +=" \(" + rollperson.anvandenheter.avtrubbning.kvarvalfriakryss + "/" + rollperson.avtrubbningvalfri + "\) ";
	htmlkod +="</a>"; 
	
	htmlkod += " <br> ";
	
	// Valfria enheter
	htmlkod += "<a id=\"rpvalkategori_anvandenheter_valfri" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"skrivanvandenheter('" + "valfri" + "');return false;\">" + "Valfria enheter" + ""; 
	htmlkod +=" \(" + rollperson.anvandenheter.kvarvalfriaenheter + "/" + rollperson.valfriaenheter + "\) ";
	htmlkod +="</a>"; 
	
	htmlkod += "<br>";
	
	// Slumpning
	htmlkod += "<a id=\"anvandenheter_slumpaenvalfri" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"anropaslumpaenhetvalfri(rollperson);return false;\">";
	htmlkod += "Slumpa en" + ""; 
	htmlkod +="</a>"; 
	htmlkod += " &#124; ";
	
	
	htmlkod += "<a id=\"anvandenheter_slumparestenvalfria" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"anropaslumpaallt(rollperson);return false;\">";
	htmlkod += "Slumpa resten" + ""; 
	htmlkod +="</a>"; 
	htmlkod += " &#124; ";
	
	
	htmlkod += "<a id=\"anvandenheter_nollaallt" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"anropanollaallt(rollperson);return false;\">";
	htmlkod += "Nolla allt" + ""; 
	htmlkod +="</a>"; 
	
	htmlkod += "<br>";
	
	htmlkod += "<a id=\"anvandenheter_formularsvy" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"formularsvy(rollperson);return false;\">";
	htmlkod += "Visa formulär" + ""; 
	htmlkod +="</a>"; 
	htmlkod += " &#124; ";
	htmlkod += "<a id=\"anvandenheter_sparaenheter" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"anropasparaenheter(rollperson);return false;\">";
	htmlkod += "Spara enhetsköp" + ""; 
	htmlkod +="</a>"; 
	
	
	
	htmlkod += "</td>";
	htmlkod += "<td class=\"center\" width=\"18%\"></td></tr></table>";
	htmlkod += "</div>";
	
	document.getElementById("hogerkategorival").innerHTML = htmlkod;

}

function formularsvy(rollperson){

	doljvansterspalt();
	
	if ("anvandenheter" in rollperson){
		if (rollperson.anvandenheter.sparad==0){
			rollperson=summerarollperson(rollperson, rollperson.anvandenheter);
			rollperson.anvandenheter.sparad=1;
		}
	}
	
	hojsank=0;
	styr=0;
	hojsvar=0;
	
	attributobjekt=hamta_attributobjekt();
	
	grundattributrubriker=["Styrka", "Tålighet", "Rörlighet", "Uppfattning", "Vilja", "Psyke", "Visdom", "Utstrålning"];
	 var grundattributlista=[];
	grundattributlista[0]="styrka";
	grundattributlista[1]="talighet";
	grundattributlista[2]="rorlighet";
	grundattributlista[3]="uppfattning";
	grundattributlista[4]="vilja";
	grundattributlista[5]="psyke";
	grundattributlista[6]="visdom";
	grundattributlista[7]="utstralning";
	
	
	harleddaattributlista=attributobjekt.harleddaattributlista;
	harleddaattributrubriker=attributobjekt.harleddaattributrubriker
	harleddavardenlista=attributobjekt.harleddavardenlista;
	harleddavardenrubriker=attributobjekt.harleddavardenrubriker;
	
	avtrubbningskategorier=["utsatthet", "vald","overnaturligt"];
	avtrubbningsrubriker=["Utsatthet", "Våld","Övernaturligt"];
	
	
	htmlkod="";
	htmlkod += "<a id=\"anvandenheter_enhetsvy" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"enhetsvy(rollperson);return false;\">";
	htmlkod += "Visa enhetsköp" + ""; 
	htmlkod +="</a>"; 
	htmlkod += " &#124; ";
	htmlkod += "<a id=\"anvandenheter_sparaenheter" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"anropasparaenheter(rollperson);return false;\">";
	htmlkod += "Spara enhetsköp" + ""; 
	htmlkod +="</a>"; 
	
	
	/*
	htmlkod +="<br>";
	htmlkod +="<span id=\"visadoljhojningssvarighet\">";
	htmlkod += "<a id=\"visahojningssvarighet" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"visahojningssvarighet(rollperson);return false;\">";
	htmlkod += "Visa höjningssvårigheter" + ""; 
	htmlkod +="</a>"; 
	htmlkod +="</span>";
	
	htmlkod += " &#124; ";
	
	htmlkod +="<span id=\"visadoljstyrandeattribut\">";
	htmlkod += "<a id=\"visastyrandeattribut" + "\" title=\"\" href=\"PleaseEnableJavascript.html\" onclick=\"visastyrandeattribut(rollperson);return false;\">";
	htmlkod += "Visa styrande attribut" + ""; 
	htmlkod +="</a>"; 
	htmlkod +="</span>";
	
	*/
	
	formkod="";
	formkod+="<div class='garald'>";
	formkod +="<table style='width:100%'>";
	formkod +="<tr>";
	formkod +="<td>";
	formkod +="<table style='width:100%'>";
	formkod +="<tr>";
	formkod +="<td class='center'> <h1>EON</h1></td>";
	formkod +="</tr>";
	formkod +="</table>";
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<td>";
	
	// Table runt grundinfo, grundattribut, fokus, karaktärsdrag
	formkod +="<table style='width:100%'>";
	formkod +="<tr>";
	formkod +="<td style='vertical-align: top;width:20%'>";
	formkod +="&nbsp;";
	formkod +="</td>";
	formkod +="<td style='vertical-align: top;width:40%'>";
	
	
	// Grundläggande info
	formkod +="<table style='width:100%'>";
	formkod +="<tr>";
	formkod +="<th class='left' colspan='2'>Namn</th><td colspan='3'>&nbsp;</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<th class='left' colspan='2'>Folkslag</th><td colspan='3'>";
	if ("folkslag" in rollperson){
	
		formkod+=rollperson.folkslag.rubrik;
	}
	formkod+="</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<th class='left'>Kön</th><td colspan='1'>&nbsp;</td><th class='left'>Ålder</th><td>&nbsp;</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<th class='left' colspan='2'>Religion</th><td colspan='3'>&nbsp;</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<th class='left' colspan='2'>Värv</th><td colspan='3'>&nbsp;</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<th class='left' colspan='2'>Arketyp</th><td colspan='3'>";
	if ("arketyp" in rollperson){
		formkod += rollperson.arketyp.rubrik 
	}
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<th class='left' colspan='2'>Miljö</th><td colspan='3'>";
	if ("miljo" in rollperson){
	
		formkod+=rollperson.miljo.rubrik;
	}
	formkod+="</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<th class='left' colspan='2'>Bakgrund</th><td colspan='3'>"
	if ("bakgrund" in rollperson){
	
		formkod+=rollperson.bakgrund.rubrik
	}
	formkod+="</td>";
	formkod +="</tr>";
	formkod +="</table>";
	
	
	formkod +="</td>";
	
	formkod +="<td rowspan='2' style='vertical-align: top;width:40%'>";
	// Fokus och karaktärsdrag
	
	// Table runt fokus och karaktärsdrag
	formkod +="<table>";
	
	
	
	//Fokus
	formkod +="<table style='width:100%'>";
	formkod +="<tr>";
	formkod +="<th colspan='2'>Fokus</th>";
	formkod +="</tr>";
	
	formkod +="<td>";
	// Fokusringar och Välmående
	formkod +="<table>";
	formkod +="<tr>";
	formkod +="<td>";
	
	// Fokusringar
	formkod +="<table>";
	formkod +="<tr>";
	formkod +="<td>";
	formkod +="OOOOO" + "<br>" + "OOOOO";
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="</table>";
	
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<td>";
	
	// Välmående
	formkod +="<table>";
	formkod +="<tr>";
	formkod +="<td>";
	formkod +="Välmående";
	formkod +="</td>";
	formkod +="<td>";
	// Infoga välmående
	formkod +="&nbsp;";
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="</table>";
	
	formkod +="</td>";
	formkod +="</tr>";
	
	formkod +="</table>";
	formkod +="</td>";
	formkod +="<td>";
	
	// Infotext om fokus
	formkod +="<table>";
	formkod +="<tr>";
	formkod +="<td>";
	formkod +="\+1T6 kostar 1 Fokus <br>";
	formkod +="\+2T6 kostar 3 Fokus <br>";
	formkod +="\+3T6 kostar 6 Fokus <br>";
	formkod +="\+4T6 kostar 10 Fokus";
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="</table>";
	
	
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="</table>";
	
	
	
	// Karaktärsdrag
	formkod +="<table style='width:100%'>";
	
	// Primärt
	formkod +="<tr>";
	formkod +="<th colspan='3'>Primärt karaktärsdrag</td><td colspan='1'>&nbsp;</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<td colspan='4'>&nbsp;</td>";
	formkod +="</tr>";
	
	// Nivå I-II-III
	formkod +="<tr>";
	formkod +="<td>&nbsp;</td><td>&nbsp;</td><td colspan='2'>&nbsp;</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<td>&nbsp;</td><td>&nbsp;</td><td colspan='2'>&nbsp;</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<td>&nbsp;</td><td>&nbsp;</td><td colspan='2'>&nbsp;</td>";
	formkod +="</tr>";
	
	// Låst och svaghet
	formkod +="<tr>";
	formkod +="<td colspan='2'>&nbsp;</td><td>Låst</td><td>Svaghet</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<td colspan='4'>&nbsp;</td>";
	formkod +="</tr>";
	
	// Sekundärt
	formkod +="<tr>";
	formkod +="<th colspan='3'>Sekundärt karaktärsdrag</td><td colspan='1'>&nbsp;</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<td colspan='4'>&nbsp;</td>";
	formkod +="</tr>";
	
	// Nivå I-II-III
	formkod +="<tr>";
	formkod +="<td>&nbsp;</td><td>&nbsp;</td><td colspan='2'>&nbsp;</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<td>&nbsp;</td><td>&nbsp;</td><td colspan='2'>&nbsp;</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<td>&nbsp;</td><td>&nbsp;</td><td colspan='2'>&nbsp;</td>";
	formkod +="</tr>";
	
	// Låst och svaghet
	formkod +="<tr>";
	formkod +="<td colspan='2'>&nbsp;</td><td>Låst</td><td>Svaghet</td>";
	formkod +="</tr>";
		
	formkod +="</table>";
	
	
	
	
	formkod +="</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	
	formkod +="<td colspan='2' style='vertical-align:bottom'>";
	
	// Grundattribut
	formkod +="<table style='width:100%;vertical-align:bottom'>";
	formkod +="<tr>";
	formkod +="<th colspan='4'>";
	formkod +="Grundattribut";
	formkod +="</th></tr>";
	
	
	for (i=0;i<4; i++){
		formkod +="<tr>";
		formkod +="<td>";
		formkod += grundattributrubriker[i];
		formkod +="</td>";
		formkod +="<td>"
		formkod +=rollperson[grundattributlista[i]].tarningar;
		//formkod += "XT6";
		formkod +="</td>";
		formkod +="<td>";
		formkod += grundattributrubriker[i+4];
		formkod +="</td>";
		formkod +="<td>"
		formkod +=rollperson[grundattributlista[i+4]].tarningar;
		//formkod += "YT6+Z";
		formkod +="</td>";
		formkod +="</tr>";
	}
	
	
	
	
	formkod +="</table>";
	
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<td colspan='2' style='vertical-align: bottom'>";
	
	
	formkod +="</td>";
	
	
	//formkod +="</table>";
	//formkod +="</td>";
	//formkod +="</tr>";
	
	formkod +="</td>";
	
	formkod +="<td style='width:40%'>";
	
	
	//formkod +="</td>";
	
	formkod +="</tr>";
	formkod +="<tr>";
	
	
	
	formkod +="</tr>";
	formkod +="</table>";
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="</table>";
	
	formkod +="<br>";

	// Tabell runt färdigheter
	formkod +="<table style='width:100%'>";
	formkod +="<tr>";
	
	// Spalt 1
	formkod +="<td style='vertical-align:top;width:33%'>";
	formkod +="<table style='width:100%'>";
	katkod=formular_fardighetskategori(rollperson,"stridsfardigheter");
	formkod+=katkod;
	
	formkod +="<tr><td colspan='6'>&nbsp;</td></tr>";
	
	katkod=formular_fardighetskategori(rollperson,"rorelsefardigheter");
	formkod+=katkod;
	
	formkod +="<tr><td colspan='6'>&nbsp;</td></tr>";
	
	
	katkod=formular_fardighetskategori(rollperson,"mystikfardigheter");
	formkod+=katkod;
	
	formkod +="</table>";
	formkod +="</td>";
	
	// Spalt 2
	formkod +="<td style='vertical-align:top;width:33%'>";
	formkod +="<table style='width:100%'>";
	katkod=formular_fardighetskategori(rollperson,"socialafardigheter");
	formkod+=katkod;
	
	formkod +="<tr><td colspan='6'>&nbsp;</td></tr>";
	
	
	katkod=formular_fardighetskategori(rollperson,"kunskapsfardigheter");
	formkod+=katkod;
	
	
	formkod +="</table>";
	formkod +="</td>";
	
	// Spalt 3
	formkod +="<td style='vertical-align:top;width:33%'>";
	formkod +="<table style='width:100%'>";
	katkod=formular_fardighetskategori(rollperson,"vildmarksfardigheter");
	formkod+=katkod;
	
	formkod +="<tr><td colspan='7'>&nbsp;</td></tr>";
	
	// Övriga färdigheter
	
	formkod +="<tr><th colspan='7'>Expertiser, Hantverk \& Kännetecken</th></tr>"
	for (i=0; i<rollperson.ovrigafardighetermedtarningar.length;i++){
		formkod+="<tr><td>&nbsp;</td><td>&nbsp;</td>";
		formkod+="<td>";
		formkod+= rollperson[rollperson.ovrigafardighetermedtarningar[i]].rubrik;
		formkod+="</td>";
		formkod+="<td>";
		formkod+= rollperson[rollperson.ovrigafardighetermedtarningar[i]].tarningar;
		formkod+="</td>";
		formkod+="<td>&nbsp;</td>";
		formkod+="<td>&nbsp;</td>";
		formkod+="</tr>";
	}
	
	formkod +="<tr><td colspan='7'>&nbsp;</td></tr>";
	
	formkod +="<tr><th colspan='7'>Språk \& skrift</th></tr>"
	for (i=0; i<rollperson.sprakskrift.length;i++){
		formkod+="<tr><td>&nbsp;</td><td>&nbsp;</td>";
		formkod+="<td>";
		formkod+= rollperson[rollperson.sprakskrift[i]].rubrik;
		formkod+="</td>";
		formkod+="<td>";
		formkod+= "&nbsp;";
		formkod+="</td>";
		formkod+="<td>&nbsp;</td>";
		formkod+="<td>&nbsp;</td>";
		formkod+="</tr>";
	}

	
	
	
	formkod +="</table>";
	formkod +="</td>";
	
	formkod +="</tr>";
	formkod +="</table>";
	
	// Härledda attribut och avtrubbning
	formkod +="<table style='width:100%'>";
	formkod +="<tr>";
	formkod +="<td style='width:66%'>";
	// Härledda attribut och värden
	formkod +="<table style='width:100%'>";
	
	formkod +="<tr>";
	formkod +="<th colspan='3'>Härledda attribut och värden</th>";
	formkod +="</tr>";
	
	for (i=0;i<harleddaattributlista.length;i++){
		formkod +="<tr>";
		formkod +="<td>";
		formkod += harleddaattributrubriker[i];
		formkod +="</td>";
		formkod +="<td>";
		formkod+=rollperson[harleddaattributlista[i]].tarningar;
		formkod +="</td>";
		formkod +="<td>";
		
		for (j=0;j<rollperson[harleddaattributlista[i]].egenskapslista.length;j++){
			if (j>=1){
				formkod += "<br>";
			}
			formkod+=rollperson[harleddaattributlista[i]].egenskapslista[j];
			
		}
		formkod +="</td>"
		formkod +="</tr>"
	}
	for (i=0;i<harleddavardenlista.length;i++){
		formkod +="<tr>";
		formkod +="<td>";
		formkod += harleddavardenrubriker[i];
		formkod +="</td>";
		formkod +="<td>";
		if (i==1 || i==2){
			formkod+=rollperson[harleddavardenlista[i]].tarningar;
		}else{
			formkod+=rollperson[harleddavardenlista[i]].varde.toString();
		}
		formkod +="</td>";
		formkod +="<td>";
		
		for (j=0;j<rollperson[harleddavardenlista[i]].egenskapslista.length;j++){
			if (j>=1){
				formkod += "<br>";
			}
			formkod+=rollperson[harleddavardenlista[i]].egenskapslista[j];
			
		}
		formkod +="</td>"
		formkod +="</tr>"
	}
	formkod +="</table>";
	formkod +="</td>";
	
	// Avtrubbning
	formkod +="<td style='vertical-align:top'>"; 
	formkod +="<table style='width:100%'>";
	formkod +="<tr>";
	formkod +="<th colspan='6'>";
	formkod +="Avtrubbning";
	formkod +="</th>";
	formkod +="</tr>";
	for (i=0;i<avtrubbningskategorier.length;i++){
		formkod +="<tr>";
		formkod +="<td>";
		formkod +=avtrubbningsrubriker[i];
		for (j=0;j<5;j++){
			formkod +="<td class='center'>";
			if (rollperson["avtrubbning" + avtrubbningskategorier[i]]>j){
				formkod +="&#8864;";
				
			}else{
				//formkod +="&#9633;";
				formkod +="&#9723;";
			}
			formkod +="</td>";
		}
		formkod+="</tr>";
	}
	
	
	formkod +="<tr>";
	formkod +="<td>";
	formkod +="</td>";
	
	for (j=0;j<5;j++){
		formkod +="<td>";
		formkod +="&#43;" + ((j+1)*5).toString();
		formkod +="</td>";
		
	}
	formkod+="</tr>";
	
	formkod +="</table>";
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="</table>";
	
	// Egenskaper och resurser
	formkod +="<table style='width:100%'>";
	formkod +="<tr>";
	formkod +="<td style='width:50%'>";
	
	vansterlista=["utseende","formaga","kontakt","ovrigt"];
	vansterlistarubrik=["Utseende","Förmågor","Kontakter","Övrigt"];
	hogerlista=["resurser","vapen","rustning"];
	hogerlistarubrik=["Resurser","Vapen","Rustning"];
	
	// Utseende, Förmågor, Kontakter, Övrigt
	formkod +="<table style='width:100%'>";
	
	for (i=0;i<vansterlista.length;i++){
		formkod +="<tr>";
		formkod +="<th class='left'>";
		formkod +=vansterlistarubrik[i];
		formkod +="</th>";
		formkod +="</tr>";
		
		formkod +="<tr>";
		formkod +="<td>";
		
		
		for (j=0;j<rollperson[vansterlista[i] + "_lista"].length;j++){
			if (j>0){
				formkod += "<br>";
			}
			formkod += rollperson[vansterlista[i] + "_lista"][j];
		}
		formkod +="&nbsp;";
		formkod +="</td>";
		formkod +="</tr>";
		formkod +="<tr>";
		formkod +="<td>";
		formkod+="&nbsp;";
		formkod +="</td>";
		formkod +="</tr>";
		
	}
	
	
	formkod +="<tr>";
	formkod +="<td>";
	formkod +="&nbsp;";
	formkod +="</td>";
	formkod +="</tr>";
	formkod +="</table>";
	
	formkod +="</td>";
	formkod +="<td style='vertical-align:top'>";
	
	// Resurser och utrustning
	formkod +="<table style='width:100%'>";
	formkod +="<tr>";
	formkod +="<th class='left'>";
	formkod +="Pengar";
	formkod +="</th>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<td>";
	formkod +=rollperson.pengar.toString() + " silver";
	formkod +="</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<td>";
	formkod+="&nbsp;";
	formkod +="</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<th class='left'>";
	formkod +="Resurser";
	formkod +="</th>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<td>";
	for (j=0;j<rollperson["resurs_lista"].length;j++){
		if (j>0){
			formkod += "<br>";
		}
		formkod += rollperson["resurs_lista"][j];
	}
	formkod +="&nbsp;";
	formkod +="</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<td>";
	formkod+="&nbsp;";
	formkod +="</td>";
	formkod +="</tr>";
	
	
	formkod +="<tr>";
	formkod +="<th class='left'>";
	formkod +="Vapen";
	formkod +="</th>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<td>";
	vapenkod="";
	
	if (rollperson.vanligtvapen ==0){
			// 
	}else if (rollperson.vanligtvapen ==1){
		vapenkod += rollperson.vanligtvapen + " vanligt vapen<br>";
	}else if (rollperson.vanligtvapen >= 2){
		vapenkod += rollperson.vanligtvapen + " vanliga vapen<br>";
	}
	
	// Ovanliga vapen
	if (rollperson.ovanligtvapen ==0){
		// 
	}else if (rollperson.ovanligtvapen ==1){
		vapenkod += rollperson.ovanligtvapen + " ovanligt vapen<br>";
	}else if (rollperson.vanligtvapen >= 2){
		vapenkod += rollperson.ovanligtvapen + " ovanliga vapen<br>";
	}
	
	// Sällsynta vapen
	if (rollperson.sallsyntvapen ==0){
		// 
	}else if (rollperson.sallsyntvapen ==1){
		vapenkod += rollperson.sallsyntvapen + " sällsynt vapen<br>";
	}else if (rollperson.sallsyntvapen >= 2){
		vapenkod += rollperson.sallsyntvapen + " sällsynta vapen<br>";
	}
	
	// Vapenlista
	for (i=0;i<rollperson.vapen_lista.length;i++){
		
		if (i<rollperson.vapen_lista.length-1){
			vapenkod += rollperson.vapen_lista[i] + "<br>";
		}else{
			vapenkod += rollperson.vapen_lista[i];
		}
	}
	
	formkod += vapenkod;
	
	formkod +="</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<td>";
	formkod+="&nbsp;";
	formkod +="</td>";
	formkod +="</tr>";
	
	formkod +="<tr>";
	formkod +="<th class='left'>";
	formkod +="Rustning";
	formkod +="</th>";
	formkod +="</tr>";
	formkod +="<tr>";
	formkod +="<td>";
	// Rustning
	rustningskod="";
	// Mycket lätta rustningar
	if (rollperson.mycketlattrustning ==0){
		// 
	}else if (rollperson.mycketlattrustning ==1){
		rustningskod += rollperson.mycketlattrustning + " mycket lätt rustning<br>";
	}else if (rollperson.mycketlattrustning >= 2){
		rustningskod += rollperson.mycketlattrustning + " mycket lätta rustningar<br>";
	}
	
	// Lätta rustningar
	if (rollperson.lattrustning ==0){
		// 
	}else if (rollperson.lattrustning ==1){
		rustningskod += rollperson.lattrustning + "  lätt rustning<br>";
	}else if (rollperson.lattrustning >= 2){
		rustningskod += rollperson.lattrustning + "  lätta rustningar<br>";
	}
	
	// Medeltunga rustningar
	if (rollperson.medelrustning ==0){
		// 
	}else if (rollperson.medelrustning ==1){
		rustningskod += rollperson.medelrustning + "  medeltung rustning<br>";
	}else if (rollperson.medelrustning >= 2){
		rustningskod += rollperson.medelrustning + "  medeltunga rustningar<br>";
	}
	
	// Tunga rustningar
	if (rollperson.tungrustning ==0){
		// 
	}else if (rollperson.tungrustning ==1){
		rustningskod += rollperson.tungrustning + "  tung rustning<br>";
	}else if (rollperson.tungrustning >= 2){
		rustningskod += rollperson.tungrustning + "  tunga rustningar<br>";
	}
	
	// Rustninglista
	for (i=0;i<rollperson.rustning_lista.length;i++){
		
		if (i<rollperson.rustning_lista.length-1){
			rustningskod += rollperson.rustning_lista[i] + "<br>";
		}else{
			rustningskod += rollperson.rustning_lista[i];
		}
	}
	
	formkod +=rustningskod;
	
	formkod +="</td>";
	formkod +="</tr>";
	
	
	
	
		
	
	
	
	
	
	formkod +="</table>";
	
	formkod +="</td>";
	
	formkod +="</tr>";
	formkod +="</table>";
	
	formkod +="</div>";
	
	document.getElementById("hogerkategorival").innerHTML = htmlkod;
	document.getElementById("hogerkategorirubrik").innerHTML = "";
	document.getElementById("hogerkategoribeskrivning").innerHTML = formkod;
}
function formular_fardighetskategori(rollperson,kategorinamn){
	// Hojsank=1 innebär att användaren kan styra över höjningar, vilka som ska vara lättlärda osv.
	// Styr anger om styrande attribut ska skrivas ut
	// hojsvar anger om höjningssvårigheten ska skrivas ut
	
	var hojsank=rollperson.anvandenheter.visahojsank;
	var styr=rollperson.anvandenheter.visastyrandeattribut;
	var hojsvar=rollperson.anvandenheter.visahojningssvarighet;
	
	
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetsobjekt=hamta_fardighetsobjekt();
	attributobjekt=hamta_attributobjekt();
	var i;
	var fardighetsnamn;
	var katkod="";
	katkod+="<tr>";
	katkod+="<th colspan='7'>";
	katkod+=fardighetslistaobjekt[kategorinamn].rubrik;
	katkod+="</th>";
	katkod+="</tr>";
	
	
	
	//console.log(kategorinamn);
	//console.log(fardighetslistaobjekt[kategorinamn].lista.length);
	for (i=0;i<fardighetslistaobjekt[kategorinamn].lista.length;i++){
		//console.log(kategorinamn + " " + i)
		fardighetsnamn=fardighetslistaobjekt[kategorinamn].lista[i];
		katkod+="<tr>";
		katkod+="<td>";
		if (hojsank==1){
			
			// saknas
			//Plusminus lättlärd
			
		}
		katkod+="</td>";
		katkod+="<td>";
		if (rollperson[fardighetsnamn].svarlard==1){
			katkod += "\(S\)";
		}else if (rollperson[fardighetsnamn].lattlard==1){
			katkod += "\(L\)";
		}
		katkod+="</td>";
		katkod+="<td>";
		katkod+=fardighetsobjekt[fardighetsnamn].rubrik;
		katkod+="</td>";
		katkod+="<td>";
		katkod+=rollperson[fardighetsnamn].tarningar;
		katkod+="</td>";
		katkod+="<td>";
		if (hojsank==1){
			// saknas
			//Plusminus färdighetstärningar			
		}
		katkod+="</td>";
		
		katkod+="<td>";
		if (styr==1){
			
			// Styrattribut-TBF
			if ("styrandeattribut" in rollperson[fardighetsnamn]){
				if (rollperson[fardighetsnamn].styrandeattribut.length>1){
					katkod+="\(" + attributobjekt.forkortning[rollperson[fardighetsnamn].styrandeattribut] + "\)";
				}
			}
			
		}
		katkod+="</td>";
		katkod+="<td>";
		if (hojsvar==1){
			
			// saknas
			if ("hojningssvarighet" in rollperson[fardighetsnamn]){
				katkod+="\(" + rollperson[fardighetsnamn].hojningssvarighet.toString() + "\)";
			}
			
		}
		katkod+="</td>";
		katkod+="</tr>";
	}
	// Hämta färdighetsobjekt
	// Höjningssvårighet anger visning av styrande attribut eller höjningssvårighet
	
	//console.log("Katkod: " + katkod)
	return katkod
}

function formular_visakategori(kategorinamn){
}

function formular_doljkategori(kategorinamn){
}


function enhetsvy(rollperson){
	visavansterspalt();
	rpvalkategori('anvandenheter');
}



function rpvalkategori(kategorinamn){

	//window.alert("rpvalkategori! " + kategorinamn);
	if (kategorinamn =="bakgrund"){
		 skrivbakgrunderkategorier();
		 document.getElementById("hogerkategoribeskrivning").scrollTop=0;
		 skrivbakgrunder([0,0]);
	}else if (kategorinamn =="folkslag"){
		skrivfolkslagkategorier();
		document.getElementById("hogerkategoribeskrivning").scrollTop=0;
		skrivfolkslag();
	}else if (kategorinamn =="grundattribut"){
		document.getElementById("hogerkategoribeskrivning").scrollTop=0;
		skrivgrundattribut();
	}else if (kategorinamn =="sallskap"){
		skrivsallskapkategorier();
		document.getElementById("hogerkategoribeskrivning").scrollTop=0;
		skrivsallskap();
	}else if (kategorinamn =="arketyp"){
		skrivarketypkategorier();
		document.getElementById("hogerkategoribeskrivning").scrollTop=0;
		skrivarketypmiljo("arketyp");
	}else if (kategorinamn =="miljo"){
		skrivmiljokategorier();
		document.getElementById("hogerkategoribeskrivning").scrollTop=0;
		skrivarketypmiljo("miljo");
	}else if (kategorinamn =="handelsetabeller"){
		console.log("I rpvalkategori, handelsetabeller skrivs.")
		skrivhandelsetabeller(0);
		document.getElementById("hogerkategoribeskrivning").scrollTop=0;
		skrivhandelsetabellerkategorier();
	}else if (kategorinamn =="fardighetstabeller"){
		skrivfardighetstabeller();
		document.getElementById("hogerkategoribeskrivning").scrollTop=0;
		skrivfardighetstabellerkategorier();
	}else if (kategorinamn =="anvandenheter"){
		skrivanvandenheter("kunskapsfardigheter","Kunskapsfärdigheter");
		document.getElementById("hogerkategoribeskrivning").scrollTop=0;
		skrivanvandenheterkategorier();
		
	
	}else{
		window.alert(kategorinamn);
	}//window.parent.document.getElementById("hogerkategorival").src="rpvalkategorier_fardighetstabeller.html";
}
function sparaanvandenheter(rollperson){
	
	var kvarenheterlista=[];
	var kvarobjektlista=[];
	kvarenheterlista=hamta_kvarenheterlista(rollperson);
	
	
	var saknadeobjekt=hamta_saknadeobjekt(rollperson);
	
	var objektslista=["bakgrund","folkslag","attributtarningar","arketyp","miljo"];
	var ovrigafardigheterkategorier=["expertis","hantverk","kannetecken"];
	var i;
	var redoattspara;
	
	
	// Kollar om rollpersonen är redo att sparas
	if (saknadeobjekt.length>0){
		redoattspara=0;
	}else if(rollperson.kvar_handelsetabellslag>0){
		redoattspara=0;
	}else if(rollperson.ovrigafardigheter.allavalda==0){
		redoattspara=0;
	}else if(kvarenheterlista.length>0){
		redoattspara=0;
	}else{
		redoattspara=1;
	}
	
	
	
	if (redoattspara==1){
		
		// Nollar rollpersonen och sparar om underobjekten
		rollperson=nollarollperson(rollperson);
		for (i=0;i<objektslista.length;i++){
			if (objektslista[i] in rollperson){
				rollperson=summarollperson(rollperson,rollperson[objektslista[i]]);
			}
		}
		
		for (i=0;i<handelsetabellobjektlista.length;i++){
			if ("handelsetabellobjektlista" in rollperson){
				rollperson= summerarollperson(rollperson, rollperson.handelsetabellobjektlista[i]);
			}
		}
		
		for (i=0;i<ovrigafardigheterkategorier.length;i++){	
			if ("ovrigafardigheter" in rollperson){
				if (ovrigafardigheterkategorier[i] in rollperson.ovrigafardigheter){
					rollperson= summerarollperson(rollperson, rollperson.ovrigafardigheter[ovrigafardigheterkategorier[i]]);
				}
			}
		}
		rollperson=summarollperson(rollperson,rollpersonanvandenheter);
		
		skrivformular(rollperson);
		
	}else{
		// Skriv vad som saknas
	}
}

function bytbakgrund(bakgrundsnamn){
	aktiv_bakgrundstabell=bakgrundstabeller[bakgrundsnamn];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	skrivbakgrunder([0,0]);
}
function bytfolkslag(folkslagsnamn){
	aktivtfolkslagobjekt=folkslagobjekt[folkslagsnamn];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	
	skrivfolkslag();
}
function bytsallskap(sallskapsnamn){
	aktivtsallskapobjekt=sallskapobjekt[sallskapsnamn];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	
	skrivsallskap();
}

function bytarketyp(arketypnamn){
	aktivtarketypobjekt=arketypobjekt[arketypnamn];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	skrivarketypmiljo("arketyp");
}
function bytmiljo(miljonamn){
	aktivtmiljoobjekt=miljoobjekt[miljonamn];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	skrivarketypmiljo("miljo");
}

function bythandelsetabell(handelsetabellnamn){
	aktiv_handelsetabell=handelsetabeller[handelsetabellnamn];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	aktivthandelsetabellslag={};
	skrivhandelsetabeller();
}

function bytfardighetstabell(fardighetstabellnamn){
	var i;
	//aktiv_fardighetstabell=ovrigafardighetertabeller[fardighetstabellnamn];
	document.getElementById("hogerkategoribeskrivning").scrollTop=0;
	aktiv_ovrigafardigheterkategori=fardighetstabellnamn;
	
	aktiv_fardighetslista[aktiv_ovrigafardigheterkategori]=[];
	
	// Sätter aktiv_fardighetslista till den sparade ovrigafardigheter-listan
	for (i=0;i<rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori].lista.length;i++){;
		aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][i]=rollperson.ovrigafardigheter[aktiv_ovrigafardigheterkategori].lista[i];
	}
	
	skrivfardighetstabeller();
}

function slumpaomuppdaterasubval(objektstyp,i,j,k){
	//console.log("slumpaomuppdaterasubvalkörs med objektstyp: " + objektstyp);
	
	slumpaomsubval(i,j,k)

	if (objektstyp=="folkslag"){
		skrivfolkslag();
	}else if (objektstyp=="arketyp"){
		skrivarketypmiljo("arketyp");
	}else if (objektstyp=="miljo"){
		skrivarketypmiljo("miljo");
	}
}

function slumpaomhandelsetabellslag(){
	aktivthandelsetabellslag=valj_subval(aktivthandelsetabellslag,1);
	
	skrivhandelsetabeller();
}

function slumpaovrigafardigheter(){
	var tabellnamn;
	tabellnamn=aktiv_ovrigafardigheterkategori;
	//console.log("slumpaovrigafardigheter körs, aktiv färdighetskategori är: " + tabellnamn)
	var slumptal;
	var fardighetsnamn;
	
	aktiv_fardighetslista[aktiv_ovrigafardigheterkategori]=[];
	
	if (rollperson.ovrigafardigheter["anvant_" + tabellnamn + "poang"] == 0){
		
		if (rollperson[aktiv_ovrigafardigheterkategori + "poang"] > 0){
		
			
		
			fardighetsobjekt=hamta_fardighetsobjekt();
			fardighetslistaobjekt=hamta_fardighetslistaobjekt();
			ovrigafardigheterpoangslag=hamta_ovrigafardigheterpoangslag();
			
			//console.log("aktiv_ovrigafardigheterkategori: " + aktiv_ovrigafardigheterkategori)
			while (aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length<ovrigafardigheterpoangslag[aktiv_ovrigafardigheterkategori][rollperson[aktiv_ovrigafardigheterkategori + "poang"] - 1].length){
				slumptal=slumpa(fardighetslistaobjekt[aktiv_ovrigafardigheterkategori + "fardigheter"].lista.length-1);
				fardighetsnamn=fardighetslistaobjekt[aktiv_ovrigafardigheterkategori + "fardigheter"].lista[slumptal];
				
				/*
				if (ovrigafardigheterarray.indexOf(fardighetsobjekt[fardighetsnamn]) == -1){
					if (fardighetsobjekt[fardighetsnamn].tabell==1){
						ovrigafardigheterarray.push(fardighetsobjekt[fardighetsnamn]);
					}
				}
				*/
				
				
				// 
				//if (fardighetsnamn in ovrigafardigheterarray){
				//}else{
				if (aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].indexOf(fardighetsnamn) == - 1){
			
					if (fardighetsobjekt[fardighetsnamn].tabell==1){
						// Kolla så att färdigheten inte redan har 5T6
						if(rollperson[fardighetsnamn].enheter<7){
							aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].push(fardighetsnamn);
						}
					}
				}
			}
		}
	
	
		skrivfardighetstabeller();
	}
}
function flyttatilltoppen_ovrigfardighet(position){
	//console.log("Flytta till toppen körs, position: " + position);
	aktiv_fardighetslista[aktiv_ovrigafardigheterkategori] = flyttatilltoppen(aktiv_fardighetslista[aktiv_ovrigafardigheterkategori], position);
	
	if (aktiv_ovrigafardigheterkategori=="hantverk"){
		hantverkattributbonuslista=flyttatilltoppen(hantverkattributbonuslista, position);
	}
	
	skrivfardighetstabeller();
}
function flyttauppett_ovrigfardighet(position){
	//console.log("Flytta upp ett körs, position: " + position);
	aktiv_fardighetslista[aktiv_ovrigafardigheterkategori] = flyttauppett(aktiv_fardighetslista[aktiv_ovrigafardigheterkategori], position);
	
	if (aktiv_ovrigafardigheterkategori=="hantverk"){
		hantverkattributbonuslista=flyttauppett(hantverkattributbonuslista, position);
	}
	
	skrivfardighetstabeller();
}
function flyttanedett_ovrigfardighet(position){
	//console.log("Flytta ned ett körs, position: " + position);
	aktiv_fardighetslista[aktiv_ovrigafardigheterkategori] = flyttanedett(aktiv_fardighetslista[aktiv_ovrigafardigheterkategori], position);
	
	if (aktiv_ovrigafardigheterkategori=="hantverk"){
		hantverkattributbonuslista=flyttanedett(hantverkattributbonuslista, position);
	}
	
	skrivfardighetstabeller();
}
function flyttatillbotten_ovrigfardighet(position){
	//console.log("Flytta till botten körs, position: " + position);
	aktiv_fardighetslista[aktiv_ovrigafardigheterkategori] = flyttatillbotten(aktiv_fardighetslista[aktiv_ovrigafardigheterkategori], position);
	
	if (aktiv_ovrigafardigheterkategori=="hantverk"){
		hantverkattributbonuslista=flyttatillbotten(hantverkattributbonuslista, position);
	}
	
	skrivfardighetstabeller();
}


function slumpaordningovrigafardigheter(){
	//if (rollperson.ovrigafardigheter["anvant_" + aktiv_ovrigafardigheterkategori + "poang"] == 0){
	//aktiv_fardighetslista[aktiv_ovrigafardigheterkategori]=slumpaordning(aktiv_fardighetslista[aktiv_ovrigafardigheterkategori]);
	
	var k;
    ordning=slumpaflera(aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length, aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length);
    
	var tempfardighetlista=[];
    var tempattributbonuslista=[];
	
	for (k=0;k < aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length; k++){
		tempfardighetlista[k]=aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][k];
		if (aktiv_ovrigafardigheterkategori=="hantverk"){
			tempattributbonuslista[k]=hantverkattributbonuslista[k];
		}
	}
	
	for (k=0;k < aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].length; k++){
		aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][k]=tempfardighetlista[ordning[k+1]-1];
    	if (aktiv_ovrigafardigheterkategori=="hantverk"){
			hantverkattributbonuslista[k]=tempattributbonuslista[ordning[k+1]-1];
		}
    }
	
	skrivfardighetstabeller();
	//}
	
	
}

function slumpaomenovrigfardighet(position){
	
	//console.log("slumpaomenovrigfardighet kort, position: " + position)
	
	var nyfardighet=0;
	var slumptal;
	var fardighetsnamn
	
	
	fardighetsobjekt=hamta_fardighetsobjekt();
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	
	//if (rollperson.ovrigafardigheter["anvant_" + aktiv_ovrigafardigheterkategori + "poang"] == 0){
	
		while (nyfardighet==0){
			//console.log(aktiv_ovrigafardigheterkategori + "fardigheter");
			slumptal=slumpa(fardighetslistaobjekt[aktiv_ovrigafardigheterkategori + "fardigheter"].lista.length-1);
			fardighetsnamn=fardighetslistaobjekt[aktiv_ovrigafardigheterkategori +  "fardigheter"].lista[slumptal];
			
			/*
			if (ovrigafardigheterarray.indexOf(fardighetsobjekt[fardighetsnamn]) == -1){
				if (fardighetsobjekt[fardighetsnamn].tabell==1){
					ovrigafardigheterarray[position]=fardighetsobjekt[fardighetsnamn];
					nyfardighet=1;
				}
			}
			*/
			
			// if (aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].indexOf(fardighetsnamn) == - 1){
			//if (fardighetsnamn in ovrigafardigheterarray){
			//}else{
			if (aktiv_fardighetslista[aktiv_ovrigafardigheterkategori].indexOf(fardighetsnamn) == - 1){
			
				if (fardighetsobjekt[fardighetsnamn].tabell==1){
					// Kolla så att färdigheten inte redan har 5T6
					if(rollperson[fardighetsnamn].enheter<7){
						aktiv_fardighetslista[aktiv_ovrigafardigheterkategori][position]=fardighetsnamn;
						nyfardighet=1;
					}
				}
			}
		}
		// Tar bort förvalt attribut
		hantverkattributbonuslista[position]=undefined;
		
		skrivfardighetstabeller();
	//}
}



	
function skrivvanstersammanfattning(){
	var i
	// attributobjekt=hamta_attributobjekt(); Är global
	grundattributlista=attributobjekt.grundattributlista;
	harleddaattributlista=attributobjekt.harleddaattributlista;
    harleddavardenlista=attributobjekt.harleddavardenlista;
	
	grundattributrubriker=attributobjekt.grundattributrubriker;
    harleddaattributrubriker=attributobjekt.harleddaattributrubriker;
	harleddavardenrubriker=attributobjekt.harleddavardenrubriker;
    
	handelsetabellista= hamta_handelsetabellista();
	
	fardighetsgrupplista_sing=fardighetslistaobjekt.fardighetsgrupplista_sing;
    fardighetsgrupplista_plur=fardighetslistaobjekt.fardighetsgrupplista_plur;
    fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	
    ovrigafardighetergrupplista_sing=fardighetslistaobjekt.ovrigafardighetergrupplista_sing;
    ovrigafardighetergrupplista_plur=fardighetslistaobjekt.ovrigafardighetergrupplista_plur;
	
	enhetslista=fardighetslistaobjekt.enhetslista;
	
	ovrigafardigheterpoanglista=fardighetslistaobjekt.ovrigafardigheterpoanglista;
	
	mystikmagilista=fardighetslistaobjekt.mystikmagilista;
	mystikrubriker=fardighetslistaobjekt.mystikmagirubriker;
	
	avtrubbninglista=["utsatthet", "vald", "overnaturligt", "valfri"];
	
	/*
	var fardighetsgrupplista_sing=["Kunskapsfärdighet", "Mystikfärdighet", "Rörelsefärdighet", "Social färdighet", "Stridsfärdighet", "Vildmarksfärdighet", "Språk"];
    var fardighetsgrupplista_plur=["Kunskapsfärdigheter", "Mystikfärdigheter", "Rörelsefärdigheter", "Sociala färdigheter", "Stridsfärdigheter", "Vildmarksfärdigheter", "Språk"];
    
	fardighetsgrupplista = ["kunskapsfardigheter", "mystikfardigheter", "rorelsefardigheter", "socialafardigheter", "stridsfardigheter", "vildmarksfardigheter", "sprakfardigheter", "expertisfardigheter", "hantverkfardigheter", "kanneteckenfardigheter"];
	
    var ovrigafardighetergrupplista_sing=["Expertis", "Hantverk", "Kännetecken"];
    var ovrigafardighetergrupplista_plur=["Expertiser", "Hantverk", "Kännetecken"];
    
	var enhetslista=["kunskapsfardigheterenheter","rorelsefardigheterenheter", "socialafardigheterenheter", "stridsfardigheterenheter", "vildmarksfardigheterenheter","sprakenheter", "valfriaenheter", "mysterier","expertispoang","hantverkpoang", "kanneteckenpoang"];
	*/
	
	
	
	var htmlkod="<div class=\"garald\">";
	
	// Grundläggande kategorier
	htmlkod+="<div id=\"vansterspalt_intro\"></div>";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<td width=\"70%\" id=\"vansterspalt_bakgrundrubrik\"><b>Bakgrund:</b></td>";
	htmlkod +="<td><div id=\"rollperson_bakgrund\"></div></td>";
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td><b>Folkslag:<div id=\"rollperson_folkslag_subkategorirubrik\"></div><div id=\"rollperson_folkslag_subkategorirubrik2\"></div></b></td>";
	htmlkod +="<td><div id=\"rollperson_folkslag\"></div><div id=\"rollperson_folkslag_subkategori\"></div><div id=\"rollperson_folkslag_subkategori2\"></div></td>";
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td><b>Arketyp:</b></td>";
	htmlkod +="<td><div id=\"rollperson_arketyp\"></div></td>";
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td><b>Miljö:</b></td>";
	htmlkod +="<td><div id=\"rollperson_miljo\"></div></td>";
	htmlkod += "</tr>";
	htmlkod += "</table>";
	htmlkod+="</p>";
	
	// Grundattribut
	htmlkod+="<div id=\"rollperson_grundattribut\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Grundattribut</th>";
	htmlkod += "</tr>";
		
	for (i=0; i<grundattributlista.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"50%\">" + grundattributrubriker[i] + "</td>";
		htmlkod +="<td><div id=\"rollperson_" + grundattributlista[i] + "\"></div></td>";
		htmlkod += "</tr>";
	}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Härledda attribut
	htmlkod +="<div id=\"rollperson_harleddaattribut\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Härledda attribut</th>";
	htmlkod += "</tr>";
	for (i=0; i<harleddaattributlista.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"50%\">" + harleddaattributrubriker[i] + "</td>";
		htmlkod +="<td><div id=\"rollperson_" + harleddaattributlista[i] + "\"></div></td>";
		htmlkod +="<td><div id=\"rollperson_" + harleddaattributlista[i] + "_egenskaper\"></div></td>";
		htmlkod += "</tr>";
	}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Härledda värden
	htmlkod +="<div id=\"rollperson_harleddavarden\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Härledda värden</th>";
	htmlkod += "</tr>";
	for (i=0; i<harleddavardenlista.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"50%\">" + harleddavardenrubriker[i] + "</td>";
		htmlkod +="<td><div id=\"rollperson_" + harleddavardenlista[i] + "\"></div></td>";
		htmlkod +="<td><div id=\"rollperson_" + harleddavardenlista[i] + "_egenskaper\"></div></td>";
		htmlkod += "</tr>";
	}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	
	// Karaktärsdrag
	
	// Händelsetabeller
	htmlkod +="<div id=\"rollperson_handelsetabeller\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Händelsetabeller</th>";
	htmlkod += "</tr>";
	for (i=0; i<handelsetabellista.namn.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_" + handelsetabellista.namn[i] + "\">0</div> slag på " + handelsetabeller[handelsetabellista.namn[i]][0].rubrik + "</td>";
		htmlkod += "</tr>";
		
	}
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_valfriatabellslag\">0</div> slag på valfri händelsetabell</td>";
	htmlkod += "</tr>";
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Färdighetsenheter
	htmlkod +="<div id=\"rollperson_enheter\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Enheter</th>";
	htmlkod += "</tr>";
	
	for (i=0; i<fardighetsgrupplista_plur.length-1;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_" + enhetslista[i] + "\"></div> " + fardighetsgrupplista_plur[i] + "</td>";  // Skilj på 1 enhet, 0,2,3,4... enheter
		htmlkod += "</tr>";
		
	}
	
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_sprakenheter\">Språkenheter</div> Språk</td>";  // Skilj på 1 enhet, 0,2,3,4... enheter
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_valfriaenheter\">Valfria enheter</div></td>";  // 0 valfria enheter / 1 valfri enhet / 2,3,4 valfria enheter
	htmlkod += "</tr>";
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Färdighetspoäng
	htmlkod +="<div id=\"rollperson_fardighetspoang\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Färdighetspoäng</th>";
	htmlkod += "</tr>";
	for (i=0; i<ovrigafardighetergrupplista_plur.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_" + ovrigafardigheterpoanglista[i] + "\"></div> poäng " + ovrigafardighetergrupplista_plur[i] + "</td>";  
		htmlkod += "</tr>";
	}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Mystik & magi
	htmlkod +="<div id=\"rollperson_mystikmagi\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Mystik &amp; magi</th>";
	htmlkod += "</tr>";
	for (i=0; i<mystikmagilista.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_" + mystikmagilista[i] + "\"></div></td>";  
		htmlkod += "</tr>";
	}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	
	// Färdigheter med tärningar
	htmlkod +="<div id=\"rollperson_fardighetermedtarningar\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<td colspan=\"3\" class=\"left\">Färdigheter från start</td>";
	htmlkod += "</tr>";
	//htmlkod +="<div class=\"inline\" id=\"rollperson_fardighetermedtarningarlista\">Lista över färdigheter</div>";
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Övriga färdigheter med tärningar
	htmlkod +="<div id=\"rollperson_ovrigafardighetermedtarningar\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th colspan=\"2\" class=\"left\">Expertiser, Hantverk \& Kännetecken från start</th>";
	htmlkod += "</tr>";
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Språk och skrift
	htmlkod +="<div id=\"rollperson_sprakskrift\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Språk \& skrift</th>";
	htmlkod += "</tr>";
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	
	// Lättlärda färdigheter
	
	htmlkod +="<div id=\"rollperson_lattlard\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Lättlärda och svårlärda färdigheter</th>";
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_lattlardlista\"></div></td>";  
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_lattlardgrupplista\"></div></td>";  
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_lattlardvalfri\"></div></td>";  
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_lattlardallalista\"></div></td>";  
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_svarlardlista\"></div></td>";  
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_svarlardgrupplista\"></div></td>";  
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_svarlardvalfri\"></div></td>";  
	htmlkod += "</tr>";
	htmlkod += "<tr>";
	htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_svarlardallalista\"></div></td>";  
	htmlkod += "</tr>";
	
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Svårlärda färdigheter (döljs om tom) (display:none)
	
	// Färdigheter per kategori (ska kunna döljas, allt eller enskild kategori)
	// Lättlärd eller svårlärd ska listas
	// Språk och övriga färdigheter ska bara listas om rollpersonen har den aktuella färdigheten
	
	
	// Avtrubbning
	htmlkod +="<div id=\"rollperson_avtrubbning\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Avtrubbning</th>";
	htmlkod += "</tr>";
	for (i=0; i<avtrubbninglista.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_" + avtrubbninglista[i] + "\"></div></td>";  
		htmlkod += "</tr>";
	}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Förmågor
	htmlkod +="<div id=\"rollperson_formagor\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Förmågor</th>";
	htmlkod += "</tr>";
	//for (i=0; i<formaga_lista.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_formaga_lista\"></div></td>";  
		htmlkod += "</tr>";
	//}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Resurser och pengar
	htmlkod +="<div id=\"rollperson_resurser\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Pengar &amp; resurser</th>";
	htmlkod += "</tr>";
	//for (i=0; i<formaga_lista.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_pengar\"></div></td>";  
		htmlkod += "</tr>";
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_resurs_lista\"></div></td>";  
		htmlkod += "</tr>";
	//}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Vapen
	// vanligt, ovanligt, sallsynt och vapenlista
	htmlkod +="<div id=\"rollperson_vapen\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Vapen</th>";
	htmlkod += "</tr>";
	//for (i=0; i<formaga_lista.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_vapenkategorier\"></div></td>";  
		htmlkod += "</tr>";
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_vapen_lista\"></div></td>";  
		htmlkod += "</tr>";
	//}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Rustningar
	// mycket lätt, lätt, medeltung, tung och rustningslista
	htmlkod +="<div id=\"rollperson_rustning\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Rustning</th>";
	htmlkod += "</tr>";
	//for (i=0; i<formaga_lista.length;i++){
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_rustningkategorier\"></div></td>";  
		htmlkod += "</tr>";
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_rustning_lista\"></div></td>";  
		htmlkod += "</tr>";
	//}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Kontakter
	htmlkod +="<div id=\"rollperson_kontakt\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Kontakter</th>";
	htmlkod += "</tr>";
	//for (i=0; i<formaga_lista.length;i++){
		
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_kontakt_lista\"></div></td>";  
		htmlkod += "</tr>";
	//}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Utseende
	htmlkod +="<div id=\"rollperson_utseende\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Utseende</th>";
	htmlkod += "</tr>";
	//for (i=0; i<formaga_lista.length;i++){
		
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_utseende_lista\"></div></td>";  
		htmlkod += "</tr>";
	//}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Karaktärsdrag
	htmlkod +="<div id=\"rollperson_karaktarsdrag\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Karaktärsdrag</th>";
	htmlkod += "</tr>";
	//for (i=0; i<formaga_lista.length;i++){
		
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_karaktarsdrag_lista\"></div></td>";  
		htmlkod += "</tr>";
	//}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Övrigt
	htmlkod +="<div id=\"rollperson_ovrigt\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Övrigt</th>";
	htmlkod += "</tr>";
	//for (i=0; i<formaga_lista.length;i++){
		
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_ovrigt_lista\"></div></td>";  
		htmlkod += "</tr>";
	//}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	// Bakgrund
	htmlkod +="<div id=\"rollperson_bakgrundsinfo\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Bakgrund</th>";
	htmlkod += "</tr>";
	//for (i=0; i<formaga_lista.length;i++){
		
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_bakgrundtabell\"></div>: <div class=\"inline\" id=\"rollperson_bakgrundrubrik\"></div></td>";  
		htmlkod += "</tr>";
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_bakgrundbeskrivning\"></div></td>";  
		htmlkod += "</tr>";
	//}
	htmlkod += "</table>";
	
	// Händelsetabeller
	htmlkod +="<div id=\"rollperson_handelsetabeller\">";
	htmlkod+="<p>";
	htmlkod += "<table style=\"width:100%\">";
	htmlkod += "<tr>";
	htmlkod +="<th class=\"left\">Händelsetabellslag</th>";
	htmlkod += "</tr>";
	//for (i=0; i<formaga_lista.length;i++){
		
		htmlkod += "<tr>";
		htmlkod +="<td width=\"100%\"><div class=\"inline\" id=\"rollperson_handelsetabellresultat\"></div></td>";  
		htmlkod += "</tr>";
	//}
	htmlkod += "</table>";
	htmlkod+="</p>";
	htmlkod +="</div>";
	
	
	
	
	
	
	/*
	rpvalmatris[14][0] = "formaga";
    rpvalmatris[14][1] = "resurs";
    rpvalmatris[14][2] = "vapen";
    rpvalmatris[14][3] = "rustning";
	rpvalmatris[14][4] = "kontakt";
    rpvalmatris[14][5] = "utseende";
	rpvalmatris[14][6] = "karaktarsdrag";
	rpvalmatris[14][7] = "ovrigt";
	*/
	
	htmlkod += "</div>";
	
	
	document.getElementById("vansteranteckningar").innerHTML = htmlkod;
	
}

function skrivhogerkategorityper(){
	// Fetstila aktuellt val
	// Gråmarkera val som ej kan väljas
	
	//document.getElementById("myDIV").style.fontWeight = "bold";
	
	var htmlkod;
	htmlkod="";
	htmlkod+="<div class =\"garald\">";
	
	if ("bakgrund" in rollperson){
		htmlkod += "<b>";
	}
		
	htmlkod += "<a id=\"rpvalkategori_bakgrund\" title=\"Slå fram rollpersonens bakgrund\"  href=\"rpvalkategorier_bakgrundstabeller.html\" target=\"hogerkategorival\" onclick=\"rpvalkategori(\'bakgrund\');return false;\">";
	htmlkod +=" Bakgrund </a>"; 
	
	if ("bakgrund" in rollperson){
		htmlkod += "</b>";
		//document.getElementById("rpvalkategori_bakgrund_text").style.fontWeight = "bold";
	}
	htmlkod += "&#124;"; 
			
	if ("folkslag" in rollperson){
		htmlkod += "<b>";
	}		
	htmlkod += "<a id=\"rpvalkategori_folkslag\" title=\"Välj rollpersonens folkslag\" href=\"rpvalkategorier_folkslag.html\" target=\"hogerkategorival\" onclick=\"rpvalkategori(\'folkslag\');return false;\"> Folkslag </a>";
	if ("folkslag" in rollperson){
		htmlkod += "</b>";
	}
	htmlkod += "&#124;" 
	if ("folkslag" in rollperson){
		if ("attributtarningar" in rollperson){
		htmlkod += "<b>";
		}
		htmlkod += "<a id=\"rpvalkategori_grundattribut\" title=\"Placera attributtärningar\" href=\"rpvalbeskrivning_grundattribut_rubrik.html\" target=\"hogerkategorirubrik\" onclick=\"rpvalkategori(\'grundattribut\');return false;\"> Grundattribut </a>"; 
		
		if ("attributtarningar" in rollperson){
			htmlkod += "</b>";
		}
	}else{
		htmlkod += " Grundattribut ";
	}
	htmlkod += "&#124;" 
	/*
	if ("sallskap" in rollperson){
		htmlkod += "<b>";
	}
	htmlkod += "<a id=\"rpvalkategori_sallskap\" title=\"Välj rollpersonens sällskap\" href=\"rpvalkategorier_sallskap.html\" target=\"hogerkategorival\" onclick=\"rpvalkategori(\'sallskap\');return false;\"> Sällskap </a>";
	if ("sallskap" in rollperson){
		htmlkod += "</b>";
	}
	htmlkod += "&#124;" 
	*/
	
	if ("arketyp" in rollperson){
		htmlkod += "<b>";
	}
	htmlkod += "<a id=\"rpvalkategori_arketyp\" title=\"Välj rollpersonens arketyp\" href=\"rpvalkategorier_arketyp.html\" target=\"hogerkategorival\" onclick=\"rpvalkategori(\'arketyp\');return false;\"> Arketyp </a>";
	if ("arketyp" in rollperson){
		htmlkod += "</b>";
	}
	htmlkod += "&#124;" 
	if ("miljo" in rollperson){
		htmlkod += "<b>";
	}
	htmlkod += "<a id=\"rpvalkategori_miljo\" title=\"Välj rollpersonens miljö\" href=\"rpvalkategorier_miljo.html\" target=\"hogerkategorival\" onclick=\"rpvalkategori(\'miljo\');return false;\"> Miljö </a>";
	if ("miljo" in rollperson){
		htmlkod += "</b>";
	}
	htmlkod += "&#124;" 
			
	htmlkod += "<br>"
	
	if ("kvar_handelsetabellslag" in rollperson){
		if (rollperson.kvar_handelsetabellslag==0){
			htmlkod += "<b>";
		}
	}
	htmlkod += "<a id=\"rpvalkategori_handelsetabeller\" title=\"Slå på händelsetabeller\" href=\"rpvalkategorier_handelsetabeller.html\" target=\"hogerkategorival\" onclick=\"rpvalkategori(\'handelsetabeller\');return false;\"> Händelsetabeller </a>";
	if ("kvar_handelsetabellslag" in rollperson){
		if (rollperson.kvar_handelsetabellslag==0){
			htmlkod += "</b>";
		}
	}
	
	htmlkod += "&#124;" 
	if ("allavalda" in rollperson.ovrigafardigheter){
		if(rollperson.ovrigafardigheter.allavalda==1){
			htmlkod += "<b>";
			//console.log("alla ovrigafardigheter valda");
		}else{
			//console.log("alla ovrigafardigheter är inte valda")
		}
		
	}else{
		//console.log("allavalda saknas");
	}
	htmlkod += "<a id=\"rpvalkategori_expertiserhantverkkannetecken\" title=\"Slå på färdighetstabeller\" href=\"rpvalkategorier_fardighetstabeller.html\" target=\"hogerkategorival\" onclick=\"rpvalkategori(\'fardighetstabeller\');return false;\"> Färdighetstabeller </a>";
	
	if ("allavalda" in rollperson.ovrigafardigheter){
		if(rollperson.ovrigafardigheter.allavalda==1){
			htmlkod += "</b>";
		}
	}
	
	htmlkod += "<br>";
	
	htmlkod += "<a id=\"rpvalkategori_anvandenheter\" title=\"Använd enheter\" href=\"rpvalkategorier_anvandenheter.html\" target=\"hogerkategorival\" onclick=\"rpvalkategori(\'anvandenheter\');return false;\"> Använd enheter </a>";
	
	
	htmlkod += "</div>";
	document.getElementById("hogerkategorityper").innerHTML = htmlkod;
	
	
	if ("bakgrund" in rollperson){
		if ("folkslag" in rollperson){
			if ("attributtarningar" in rollperson){
				if ("arketyp" in rollperson){
					if ("miljo" in rollperson){
						rollperson.redoforhandelsetabellslag=1;
					}
				}
			}
		}
	}
}


function uppdateravanstersammanfattning(){
	
	var i
	
	lattlardlista=[];
	svarlardlista=[];
	lattlardgrupplista=[];
	svarlardgrupplista=[];
	lattlardallalista=[];
	svarlardallalista=[];
	
	
	grundattributlista=attributobjekt.grundattributlista;
	harleddaattributlista=attributobjekt.harleddaattributlista;
    harleddavardenlista=attributobjekt.harleddavardenlista;
	
	grundattributrubriker=attributobjekt.grundattributrubriker;
    harleddaattributrubriker=attributobjekt.harleddaattributrubriker;
	harleddavardenrubriker=attributobjekt.harleddavardenrubriker;
    
	handelsetabellista= hamta_handelsetabellista();
	
	fardighetsgrupplista_sing=fardighetslistaobjekt.fardighetsgrupplista_sing
    fardighetsgrupplista_plur=fardighetslistaobjekt.fardighetsgrupplista_plur;
    fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	
	fardighetslista=fardighetslistaobjekt.fardighetslista;
	
    ovrigafardighetergrupplista_sing=fardighetslistaobjekt.ovrigafardighetergrupplista_sing;
    ovrigafardighetergrupplista_plur=fardighetslistaobjekt.ovrigafardighetergrupplista_plur;
	
	enhetslista=fardighetslistaobjekt.enhetslista;
	
	ovrigafardigheterpoanglista=fardighetslistaobjekt.ovrigafardigheterpoanglista;
	
	mystikmagilista=fardighetslistaobjekt.mystikmagilista;
	mystikrubriker=fardighetslistaobjekt.mystikmagirubriker;
	
	avtrubbninglista=["utsatthet", "vald", "overnaturligt", "valfri"];
	avtrubbningrubriklista=["utsatthet", "våld", "övernaturligt", "valfri kategori"];
	
	
	if ("bakgrund" in rollperson){
		// bakgrund
		document.getElementById("rollperson_bakgrund").innerHTML=rollperson.bakgrund.rubrik;
		for (i=0;i<handelsetabellista.namn.length;i++){
			document.getElementById("rollperson_" + handelsetabellista.namn[i]).innerHTML=rollperson[handelsetabellista.namn[i]];
		}
		document.getElementById("rollperson_valfriatabellslag").innerHTML=rollperson.valfriatabellslag;
		
		document.getElementById("rollperson_bakgrundrubrik").innerHTML=rollperson.bakgrund.rubrik;
		document.getElementById("rollperson_bakgrundtabell").innerHTML=rollperson.bakgrund.tabellrubrik;
		
		document.getElementById("rollperson_bakgrundbeskrivning").innerHTML=rollperson.bakgrund.beskrivning;
		
		
		for (i=0;i<fardighetsgrupplista_plur.length-1;i++){
			
			if (enhetslista[i] in rollperson){
				if (rollperson[enhetslista[i]]==1){
					document.getElementById("rollperson_" + enhetslista[i]).innerHTML=rollperson[enhetslista[i]] + " enhet ";
				}else{
					document.getElementById("rollperson_" + enhetslista[i]).innerHTML=rollperson[enhetslista[i]] + " enheter ";
				}
			}
			
			
		}
		if ("sprakenheter" in rollperson){
			
			if (rollperson.sprakenheter==1){
					document.getElementById("rollperson_sprakenheter").innerHTML=rollperson["sprakenheter"] + " enhet ";
					
			}else{
			
				document.getElementById("rollperson_sprakenheter").innerHTML=rollperson["sprakenheter"] + " enheter ";
			
			}
		}else{
			window.alert("finns inga språkenheter");
		}
		
		if ("valfriaenheter" in rollperson){
			if (rollperson.valfriaenheter==1){
				document.getElementById("rollperson_valfriaenheter").innerHTML=rollperson["valfriaenheter"] + " valfri enhet ";
			}else{
				document.getElementById("rollperson_valfriaenheter").innerHTML=rollperson["valfriaenheter"] + " valfria enheter ";
			}
		}else{
			window.alert("finns inga valfria enheter");
		}
		for (i=0;i<ovrigafardigheterpoanglista.length;i++){
			if (ovrigafardigheterpoanglista[i] in rollperson){
				document.getElementById("rollperson_" + ovrigafardigheterpoanglista[i]).innerHTML=rollperson[ovrigafardigheterpoanglista[i]];
			}
			
		}
		
		// mystikmagi
	}
	if ("folkslag" in rollperson){
		//folkslagrubrik
		document.getElementById("rollperson_folkslag").innerHTML=rollperson.folkslag.rubrik;
		
		if (rollperson.folkslag.subval.length>1){
			document.getElementById("rollperson_folkslag_subkategorirubrik").innerHTML = "" + rollperson.folkslag.subval[1][0][0].rubrik + ":";
			document.getElementById("rollperson_folkslag_subkategori").innerHTML ="" + rollperson.folkslag.subval[1][rollperson.folkslag.subval[1][0][0].valdasub[0]][0].rubrik;
			
			if (rollperson.folkslag.subval.length>2){
				document.getElementById("rollperson_folkslag_subkategorirubrik2").innerHTML = "" + rollperson.folkslag.subval[2][0][0].rubrik + ":";
				document.getElementById("rollperson_folkslag_subkategori2").innerHTML ="" + rollperson.folkslag.subval[2][rollperson.folkslag.subval[2][0][0].valdasub[0]][0].rubrik;
			}
		}
		
		for (i=0;i<grundattributlista.length;i++){
			//window.alert(grundattributlista[i]);
			//window.alert(rollperson[grundattributlista[i]].tarningar)
			document.getElementById("rollperson_" + grundattributlista[i]).innerHTML=rollperson[grundattributlista[i]].tarningar;
			
		}
		
		for (i=0;i<harleddaattributlista.length;i++){
			document.getElementById("rollperson_" + harleddaattributlista[i]).innerHTML=rollperson[harleddaattributlista[i]].tarningar;
			document.getElementById("rollperson_" + harleddaattributlista[i] + "_egenskaper").innerHTML="";
			
			for (j=0;j<rollperson[harleddaattributlista[i]].egenskapslista.length;j++){
				if (j>=1){
					document.getElementById("rollperson_" + harleddaattributlista[i] + "_egenskaper").innerHTML += "<br>";
				}
				document.getElementById("rollperson_" + harleddaattributlista[i] + "_egenskaper").innerHTML+=rollperson[harleddaattributlista[i]].egenskapslista[j];
			
			}
			
		}
		//harleddavardenlista=["grundrustning", "grundskada", "livskraft", "lakningstakt", "grundbelastning"];
	
		document.getElementById("rollperson_grundrustning").innerHTML=rollperson["grundrustning"].varde;
		document.getElementById("rollperson_grundskada").innerHTML=rollperson["grundskada"].tarningar;
		document.getElementById("rollperson_livskraft").innerHTML=rollperson["livskraft"].tarningar;
		document.getElementById("rollperson_lakningstakt").innerHTML=rollperson["lakningstakt"].varde;
		document.getElementById("rollperson_grundbelastning").innerHTML=rollperson["grundbelastning"].varde;
		
		for (i=0;i<harleddavardenlista.length;i++){
			document.getElementById("rollperson_" + harleddavardenlista[i] + "_egenskaper").innerHTML="";
			
			for (j=0;j<rollperson[harleddavardenlista[i]].egenskapslista.length;j++){
				//console.log(rollperson[harleddavardenlista[i]].egenskapslista[j])
				if (j>=1){
					document.getElementById("rollperson_" + harleddavardenlista[i] + "_egenskaper").innerHTML += "<br>";
				}
				document.getElementById("rollperson_" + harleddavardenlista[i] + "_egenskaper").innerHTML+=rollperson[harleddavardenlista[i]].egenskapslista[j];
			
			}
			
		}
		
		
		// Lista färdigheter
		
		fardighetermedtarningarhtml="<p>";
		fardighetermedtarningarhtml += "<table style=\"width:100%\">";
		fardighetermedtarningarhtml += "<tr>";
		fardighetermedtarningarhtml +="<th class=\"left\" colspan=\"3\">Färdigheter från start</th>";
		fardighetermedtarningarhtml += "</tr>";
		
		ovrigafardighetermedtarningarhtml="<p>";
		ovrigafardighetermedtarningarhtml += "<table style=\"width:100%\">";
		ovrigafardighetermedtarningarhtml += "<tr>";
		ovrigafardighetermedtarningarhtml +="<th class=\"left\" colspan=\"3\">Expertiser, Hantverk &amp; Kännetecken</th>";
		ovrigafardighetermedtarningarhtml += "</tr>";
		
		
		sprakskrifthtml="<p>";
		sprakskrifthtml += "<table style=\"width:100%\">";
		sprakskrifthtml += "<tr>";
		sprakskrifthtml +="<th class=\"left\" colspan=\"1\">Språk &amp; skrift</th>";
		sprakskrifthtml += "</tr>";
		
		for (i=0;i<rollperson.fardighetermedtarningar.length;i++){
			fardighetermedtarningarhtml += "<tr><td>" + rollperson[rollperson.fardighetermedtarningar[i]].rubrik + "</td><td>" + rollperson[rollperson.fardighetermedtarningar[i]].tarningar + "</td>";
			
			//console.log(fardighetermedtarningarhtml)
			if (rollperson[rollperson.fardighetermedtarningar[i]].lattlard >=1){
				fardighetermedtarningarhtml+="<td>Lättlärd</td>";
			}else if (rollperson[rollperson.fardighetermedtarningar[i]].lattlard <=-1){	
				fardighetermedtarningarhtml+="<td>Svårlärd</td>";
			}else{
				fardighetermedtarningarhtml+="<td></td>";
			}
			fardighetermedtarningarhtml+="</tr>";
		
		}
		
		fardighetermedtarningarhtml += "</table>";
		fardighetermedtarningarhtml+="</p>";
		
		for (i=0;i<rollperson.ovrigafardighetermedtarningar.length;i++){
			ovrigafardighetermedtarningarhtml+="<tr><td>" + rollperson[rollperson.ovrigafardighetermedtarningar[i]].rubrik + "</td><td>" + rollperson[rollperson.ovrigafardighetermedtarningar[i]].tarningar + "</td><td></td></tr>";	
		}
		
		ovrigafardighetermedtarningarhtml += "</table>";
		ovrigafardighetermedtarningarhtml+="</p>";
		
		for (i=0;i<rollperson.sprakskrift.length;i++){
			sprakskrifthtml+="<tr><td>" + rollperson[rollperson.sprakskrift[i]].rubrik + "</td></tr>"  
		}
		
		sprakskrifthtml += "</table>";
		sprakskrifthtml+="</p>";
		
		document.getElementById("rollperson_fardighetermedtarningar").innerHTML=fardighetermedtarningarhtml;
		document.getElementById("rollperson_ovrigafardighetermedtarningar").innerHTML=ovrigafardighetermedtarningarhtml;
		document.getElementById("rollperson_sprakskrift").innerHTML=sprakskrifthtml;
		
		// Lättlärd och svårlärd
		for (i=0; i < fardighetslista.length -4; i++){
			for (j=0; j < fardighetslista[i].length; j++){
				if (rollperson[fardighetslista[i][j]].lattlard == 1){
					if (rollperson["lattlardalla" + fardighetsgrupplista[i]] == 0){ 	
						// lista endast om man inte är lättlärd i hela kategorin
				
						lattlardlista.push(fardighetsobjekt[fardighetslista[i][j]].rubrik);
					}
					//}
					
				}else if (rollperson[fardighetslista[i][j]].lattlard == -1){
					
					//if (rollperson[rpvalmatris[5][i]] == 0){ 	// lista endast om man inte är svårlärd i hela kategorin
					svarlardlista.push(fardighetsobjekt[fardighetslista[i][j]].rubrik);
					//}
				}
			}
		}
		
		// Lista alla lättlärda
		htmlkod_lattlardlista="";
		if (lattlardlista.length == 0){
			
		}else if (lattlardlista.length == 1){
			htmlkod_lattlardlista = "Lättlärd i " + lattlardlista[0];
		}else if (lattlardlista.length == 2){
			htmlkod_lattlardlista = "Lättlärd i " + lattlardlista[0] + " och " + lattlardlista[1];
		}else if (lattlardlista.length > 2){
			htmlkod_lattlardlista = "Lättlärd i ";
			for (j=0; j< lattlardlista.length-2; j++){
				htmlkod_lattlardlista += lattlardlista[j] + ", "
			}
			htmlkod_lattlardlista += lattlardlista[lattlardlista.length-2] + " och " + lattlardlista[lattlardlista.length-1];
		}
		
		htmlkod_svarlardlista="";
		if (svarlardlista.length == 0){
			
		}else if (svarlardlista.length == 1){
			htmlkod_svarlardlista = "Svårlärd i " + svarlardlista[0];
		}else if (svarlardlista.length == 2){
			htmlkod_svarlardlista = "Svårlärd i " + svarlardlista[0] + " och " + svarlardlista[1];
		}else if (svarlardlista.length > 2){
			htmlkod_svarlardlista = "Svårlärd i ";
			for (j=0; j< svarlardlista.length-2; j++){
				htmlkod_svarlardlista += svarlardlista[j] + ", "
			}
			htmlkod_svarlardlista += svarlardlista[svarlardlista.length-2] + " och " + svarlardlista[svarlardlista.length-1];
		}
			
			
		
		
		// Lättlärda/svårlärda färdigheter i kategorier
		for (i=0; i < fardighetsgrupplista_sing.length ; i++){
			
			// Lättlärda
			if (rollperson["lattlard" + fardighetsgrupplista[i]] == 1){
				// 
				lattlardgrupplista.push(rollperson["lattlard" + fardighetsgrupplista[i]].toString() + " lättlärd " + fardighetsgrupplista_sing[i]);
			}else if (rollperson[rpvalmatris[4][i]] > 1){
				lattlardgrupplista.push(rollperson["lattlard" + fardighetsgrupplista[i]].toString() + " lättlärda " + fardighetsgrupplista_plur[i]);
			}else{
			
			}
			
			// Svårlärda
			if (rollperson["svarlard" + fardighetsgrupplista[i]] == 1){
				svarlardgrupplista.push(rollperson["svarlard" + fardighetsgrupplista[i]].toString() + " svårlärd " + fardighetsgrupplista_sing[i]);
			}else if (rollperson["svarlard" + fardighetsgrupplista[i]] > 1){
				svarlardgrupplista.push(rollperson["svarlard" + fardighetsgrupplista[i]].toString() + " svårlärda " + fardighetsgrupplista_plur[i]);
			}else{
			
			}
			
			
		}
		
		htmlkod_lattlardgrupplista="";
		if (lattlardgrupplista.length == 0){
			
		}else if (lattlardgrupplista.length == 1){
			htmlkod_lattlardgrupplista = lattlardgrupplista[0];
		}else if (lattlardgrupplista.length == 2){
			htmlkod_lattlardgrupplista = lattlardgrupplista[0] + ", " + lattlardgrupplista[1] + ".";
		}else if (lattlardgrupplista.length > 2){
			htmlkod_lattlardgrupplista = "";
			for (j=0; j< lattlardgrupplista.length-1; j++){
				htmlkod_lattlardgrupplista += lattlardgrupplista[j] + ", "
			}
			htmlkod_lattlardgrupplista +=  lattlardgrupplista[lattlardgrupplista.length-1] + ".";
		}
		
		htmlkod_svarlardgrupplista="";
		if (svarlardgrupplista.length == 0){
			
		}else if (svarlardgrupplista.length == 1){
			htmlkod_svarlardgrupplista = svarlardgrupplista[0];
		}else if (svarlardgrupplista.length == 2){
			htmlkod_svarlardgrupplista = svarlardgrupplista[0] + ", " + svarlardgrupplista[1];
		}else if (svarlardgrupplista.length > 2){
			htmlkod_svarlardgrupplista = "Svårlärd i ";
			for (j=0; j< svarlardgrupplista.length-1; j++){
				htmlkod_svarlardgrupplista += svarlardgrupplista[j] + ", "
			}
			htmlkod_svarlardgrupplista +=  svarlardgrupplista[svarlardgrupplista.length-1] + ".";
		}
		
		
		
		
		
		
		
		// valfria lättlärda
		if (rollperson.lattlardvalfri == 0){
			htmlkod_lattlardvalfri="";
		}else if (rollperson.lattlardvalfri == 1){
			htmlkod_lattlardvalfri =rollperson.lattlardvalfri.toString() + " valfri lättlärd färdighet";
		}else{
			htmlkod_lattlardvalfri =rollperson.lattlardvalfri.toString() + " valfria lättlärda färdigheter";
		}
		
		// valfria svårlärda
		if (rollperson.svarlardvalfri == 0){
			htmlkod_svarlardvalfri="";
		}else if (rollperson.svarlardvalfri == 1){
			htmlkod_svarlardvalfri =rollperson.svarlardvalfri.toString() + " valfri svårlärd färdighet";
		}else{
			htmlkod_svarlardvalfri =rollperson.svarlardvalfri.toString() + " valfria svårlärda färdigheter";
		}
		
		
		
		// Lättlärd/svårlärd i hel kategori
		for (i=0; i < fardighetsgrupplista_sing.length -1 ; i++){
			if (rollperson["svarlardalla" + fardighetsgrupplista[i]] == 1){
				svarlardallalista.push(fardighetsgrupplista_plur[i]);
				 
			}else if (rollperson["lattlardalla" + fardighetsgrupplista[i]] == 1){
				lattlardallalista.push(fardighetsgrupplista_plur[i]);
			}else{
				
			}
		}
		
		
		// Lista alla lättlärda
		htmlkod_lattlardallalista="";
		if (lattlardallalista.length == 0){
			
		}else if (lattlardallalista.length == 1){
			htmlkod_lattlardallalista = "Lättlärd i alla " + lattlardallalista[0];
		}else if (lattlardallalista.length == 2){
			htmlkod_lattlardallalista = "Lättlärd i alla " + lattlardallalista[0] + " och " + lattlardallalista[1];
		}else if (lattlardallalista.length > 2){
			htmlkod_lattlardallalista = "Lättlärd i alla ";
			for (j=0; j< lattlardallalista.length-2; j++){
				htmlkod_lattlardallalista += lattlardallalista[j] + ", "
			}
			htmlkod_lattlardallalista += lattlardallalista[lattlardallalista.length-2] + " och " + lattlardallalista[lattlardallalista.length-1];
		}
		
		htmlkod_svarlardallalista="";
		if (svarlardallalista.length == 0){
			
		}else if (svarlardallalista.length == 1){
			htmlkod_svarlardallalista = "Svårlärd i alla " + svarlardallalista[0];
		}else if (svarlardallalista.length == 2){
			htmlkod_svarlardallalista = "Svårlärd i alla " + svarlardallalista[0] + " och " + svarlardallalista[1];
		}else if (svarlardallalista.length > 2){
			htmlkod_svarlardallalista = "Svårlärd i alla ";
			for (j=0; j< svarlardallalista.length-2; j++){
				htmlkod_svarlardallalista += svarlardallalista[j] + ", "
			}
			htmlkod_svarlardallalista += svarlardallalista[svarlardallalista.length-2] + " och " + svarlardallalista[svarlardallalista.length-1];
		}
		
		document.getElementById("rollperson_lattlardlista").innerHTML=htmlkod_lattlardlista;
		document.getElementById("rollperson_lattlardgrupplista").innerHTML=htmlkod_lattlardgrupplista;
		document.getElementById("rollperson_lattlardvalfri").innerHTML=htmlkod_lattlardvalfri;
		document.getElementById("rollperson_lattlardallalista").innerHTML=htmlkod_lattlardallalista;
		document.getElementById("rollperson_svarlardlista").innerHTML=htmlkod_svarlardlista;
		document.getElementById("rollperson_svarlardgrupplista").innerHTML=htmlkod_svarlardgrupplista;
		document.getElementById("rollperson_svarlardvalfri").innerHTML=htmlkod_svarlardvalfri;
		document.getElementById("rollperson_svarlardallalista").innerHTML=htmlkod_svarlardallalista;
		
	
	
	
		
		
		
		
		
		
		for (i=0;i<avtrubbninglista.length;i++){
			document.getElementById("rollperson_" + avtrubbninglista[i]).innerHTML=rollperson["avtrubbning" + avtrubbninglista[i]] + " Avtrubbningskryss \(" + avtrubbningrubriklista[i] + "\)";
		}
		
		htmlkod_formaga_lista="";
		for (i=0;i<rollperson.formaga_lista.length;i++){
			
			if (i<rollperson.formaga_lista.length-1){
				htmlkod_formaga_lista += rollperson.formaga_lista[i] + "<br>";
			}else{
				htmlkod_formaga_lista += rollperson.formaga_lista[i];
			}
		}
		document.getElementById("rollperson_formaga_lista").innerHTML=htmlkod_formaga_lista;
		
		htmlkod_resurs_lista="";
		for (i=0;i<rollperson.resurs_lista.length;i++){
			
			if (i<rollperson.resurs_lista.length-1){
				htmlkod_resurs_lista += rollperson.resurs_lista[i] + "<br>";
			}else{
				htmlkod_resurs_lista += rollperson.resurs_lista[i];
			}
		}
		document.getElementById("rollperson_resurs_lista").innerHTML=htmlkod_resurs_lista;
		
		document.getElementById("rollperson_pengar").innerHTML="";
		document.getElementById("rollperson_pengar").innerHTML=rollperson.pengar.toString() + " silver";
		
		htmlkod_vapen_lista="";
		htmlkod_vapenkategorier="";
		// Vanliga vapen
		if (rollperson.vanligtvapen ==0){
			// 
		}else if (rollperson.vanligtvapen ==1){
			htmlkod_vapenkategorier += rollperson.vanligtvapen + " vanligt vapen<br>";
		}else if (rollperson.vanligtvapen >= 2){
			htmlkod_vapenkategorier += rollperson.vanligtvapen + " vanliga vapen<br>";
		}
		
		// Ovanliga vapen
		if (rollperson.ovanligtvapen ==0){
			// 
		}else if (rollperson.ovanligtvapen ==1){
			htmlkod_vapenkategorier += rollperson.ovanligtvapen + " ovanligt vapen<br>";
		}else if (rollperson.vanligtvapen >= 2){
			htmlkod_vapenkategorier += rollperson.ovanligtvapen + " ovanliga vapen<br>";
		}
		
		// Sällsynta vapen
		if (rollperson.sallsyntvapen ==0){
			// 
		}else if (rollperson.sallsyntvapen ==1){
			htmlkod_vapenkategorier += rollperson.sallsyntvapen + " sällsynt vapen<br>";
		}else if (rollperson.sallsyntvapen >= 2){
			htmlkod_vapenkategorier += rollperson.sallsyntvapen + " sällsynta vapen<br>";
		}
		
		// Vapenlista
		for (i=0;i<rollperson.vapen_lista.length;i++){
			
			if (i<rollperson.vapen_lista.length-1){
				htmlkod_vapen_lista += rollperson.vapen_lista[i] + "<br>";
			}else{
				htmlkod_vapen_lista += rollperson.vapen_lista[i];
			}
		}
		document.getElementById("rollperson_vapenkategorier").innerHTML=htmlkod_vapenkategorier;
		
		document.getElementById("rollperson_vapen_lista").innerHTML=htmlkod_vapen_lista;
		
		htmlkod_rustning_lista="";
		htmlkod_rustningkategorier="";
		
		// Mycket lätta rustningar
		if (rollperson.mycketlattrustning ==0){
			// 
		}else if (rollperson.mycketlattrustning ==1){
			htmlkod_rustningkategorier += rollperson.mycketlattrustning + " mycket lätt rustning<br>";
		}else if (rollperson.mycketlattrustning >= 2){
			htmlkod_rustningkategorier += rollperson.mycketlattrustning + " mycket lätta rustningar<br>";
		}
		
		// Lätta rustningar
		if (rollperson.lattrustning ==0){
			// 
		}else if (rollperson.lattrustning ==1){
			htmlkod_rustningkategorier += rollperson.lattrustning + "  lätt rustning<br>";
		}else if (rollperson.lattrustning >= 2){
			htmlkod_rustningkategorier += rollperson.lattrustning + "  lätta rustningar<br>";
		}
		
		// Medeltunga rustningar
		if (rollperson.medelrustning ==0){
			// 
		}else if (rollperson.medelrustning ==1){
			htmlkod_rustningkategorier += rollperson.medelrustning + "  medeltung rustning<br>";
		}else if (rollperson.medelrustning >= 2){
			htmlkod_rustningkategorier += rollperson.medelrustning + "  medeltunga rustningar<br>";
		}
		
		// Tunga rustningar
		if (rollperson.tungrustning ==0){
			// 
		}else if (rollperson.tungrustning ==1){
			htmlkod_rustningkategorier += rollperson.tungrustning + "  tung rustning<br>";
		}else if (rollperson.tungrustning >= 2){
			htmlkod_rustningkategorier += rollperson.tungrustning + "  tunga rustningar<br>";
		}
		
		// Rustninglista
		for (i=0;i<rollperson.rustning_lista.length;i++){
			
			if (i<rollperson.rustning_lista.length-1){
				htmlkod_rustning_lista += rollperson.rustning_lista[i] + "<br>";
			}else{
				htmlkod_rustning_lista += rollperson.rustning_lista[i];
			}
		}
		
		//console.log("htmlkod_rustningkategorier: " + htmlkod_rustningkategorier);
		document.getElementById("rollperson_rustningkategorier").innerHTML=htmlkod_rustningkategorier;
		
		document.getElementById("rollperson_rustning_lista").innerHTML=htmlkod_rustning_lista;
		
		htmlkod_kontakt_lista="";
		for (i=0;i<rollperson.kontakt_lista.length;i++){
			
			if (i<rollperson.kontakt_lista.length-1){
				htmlkod_kontakt_lista += rollperson.kontakt_lista[i] + "<br>";
			}else{
				htmlkod_kontakt_lista += rollperson.kontakt_lista[i];
			}
		}
		document.getElementById("rollperson_kontakt_lista").innerHTML=htmlkod_kontakt_lista;
		
		htmlkod_utseende_lista="";
		for (i=0;i<rollperson.utseende_lista.length;i++){
			
			if (i<rollperson.utseende_lista.length-1){
				htmlkod_utseende_lista += rollperson.utseende_lista[i] + "<br>";
			}else{
				htmlkod_utseende_lista += rollperson.utseende_lista[i];
			}
		}
		document.getElementById("rollperson_utseende_lista").innerHTML=htmlkod_utseende_lista;
		
		htmlkod_karaktarsdrag_lista="";
		for (i=0;i<rollperson.karaktarsdrag_lista.length;i++){
			
			if (i<rollperson.karaktarsdrag_lista.length-1){
				htmlkod_karaktarsdrag_lista += rollperson.karaktarsdrag_lista[i] + "<br>";
			}else{
				htmlkod_karaktarsdrag_lista += rollperson.karaktarsdrag_lista[i];
			}
		}
		document.getElementById("rollperson_karaktarsdrag_lista").innerHTML=htmlkod_karaktarsdrag_lista;
		
		
		htmlkod_ovrigt_lista="";
		for (i=0;i<rollperson.ovrigt_lista.length;i++){
			
			if (i<rollperson.ovrigt_lista.length-1){
				htmlkod_ovrigt_lista += rollperson.ovrigt_lista[i] + "<br>";
			}else{
				htmlkod_ovrigt_lista += rollperson.ovrigt_lista[i];
			}
		}
		document.getElementById("rollperson_ovrigt_lista").innerHTML=htmlkod_ovrigt_lista;
		
		
	}
	if ("arketyp" in rollperson){
		// arketyprubrik
		document.getElementById("rollperson_arketyp").innerHTML=rollperson.arketyp.rubrik;
	}
	if ("miljo" in rollperson){
		// miljörubrik
		document.getElementById("rollperson_miljo").innerHTML=rollperson.miljo.rubrik;
	}
	
	htmlkod_handelsetabellresultat="";
	
	for (i=0;i<rollperson.handelsetabellobjektlista.length;i++){
		htmlkod_handelsetabellresultat += "<p><b>" + rollperson.handelsetabellobjektlista[i].rubrik + "</b><br>" + rollperson.handelsetabellobjektlista[i].beskrivning + "<br>&#91;" + rollperson.handelsetabellobjektlista[i].beskrivninghakvald + "&#93;</p>";
	}
	                         
	document.getElementById("rollperson_handelsetabellresultat").innerHTML=htmlkod_handelsetabellresultat;
	//console.log(rollperson.fardighetermedtarningar);
	//console.log(rollperson.sprakskrift);
	//console.log(rollperson.ovrigafardighetermedtarningar);
	//console.log(htmlkod_handelsetabellresultat);
}

function doljvansterspalt(){
	document.getElementById("vansterspalt").className="boxleftmini";
	document.getElementById("hogerspalt").className="boxrightmaxi";
	
	document.getElementById("visadoljvansterspalt").innerHTML="<a href\=\"PleaseEnableJavascript.html\" onclick\=\"visavansterspalt\(\);return false;\">Visa vänsterspalt</a>";
	
	// Ändra rubriklänk till visa
	// saknas
}
function visavansterspalt(){
	document.getElementById("vansterspalt").className="boxleft";
	document.getElementById("hogerspalt").className="boxright";
	
	document.getElementById("visadoljvansterspalt").innerHTML="<a href\=\"PleaseEnableJavascript.html\" onclick\=\"doljvansterspalt\(\);return false;\">Dölj vänsterspalt</a>";
	
	
	// Ändra rubriklänk till dölj
	// saknas
}

function skrivformular(rollperson){
	// Töm vänstersammanfattning
	// Ändra bredd på högerkolumnen
	doljvansterspalt();
}

function forberedslumparollperson(){

	bakgrundstabeller=hamta_bakgrundstabeller();
	
	vallista=["folkslag","arketyp","miljo"];
	
	folkslagobjekt=hamta_folkslaglistor();
	arketypobjekt=hamta_arketyplistor();
	miljoobjekt=hamta_miljolistor();
	
	
	arketypobjekt.rubriker = ["Donare", "Krigare", "Ledare", "Lärd", "Mystiker", "Skugga", "Underhållare"];
	miljoobjekt.rubriker=["Hav","Hov","Landsbygd","Lärosäte","Stad","Undre världen","Vildmark"];
	
	vallistaarray=[folkslagobjekt.lista, arketypobjekt.lista, miljoobjekt.lista];
	vallistarubrikarray=[folkslagobjekt.rubriker, arketypobjekt.rubriker, miljoobjekt.rubriker];
	
	
    bakgrundstabellista=bakgrundstabeller.lista;
	bakgrundstabellrubriker=bakgrundstabeller.rubriker;

	slumpobjekt={};
	slumpobjektrubrik={};
	
	slumpobjekt.bakgrundstabell="slump";
	slumpobjektrubrik.bakgrundstabell="Slumpa";
	
	slumpobjekt.folkslag="slump";
	slumpobjektrubrik.folkslag="Slumpa";
	
	slumpobjekt.arketyp="slump";
	slumpobjektrubrik.arketyp="Slumpa";
	
	
	slumpobjekt.miljo="slump";
	slumpobjektrubrik.miljo="Slumpa";
	
	

	htmlkod="";
	htmlkod+="<br>";
	htmlkod+="<table width=\"85%\"><tr>";
	htmlkod+="<th width='31%'>Bakgrund</th>";
	htmlkod+="<th width='23%'>Folkslag</th>";
	htmlkod+="<th width='23%'>Arketyp</th>";
	htmlkod+="<th width='23%'>Miljö</th>";
	htmlkod+="</tr><tr>";
	htmlkod+="<td class='center'>";
	htmlkod +="<div class=\"dropdown\">";
	htmlkod +="<div id=\"bakgrundstabellslump" + "\">";
	
					
	htmlkod +="<button onclick=\"dropdownFunction\(\'dropdown_bakgrundstabellslump" + "\'\)\" class=\"dropbtn\">";
	if (typeof slumpobjekt.bakgrundstabell === 'undefined'){
		htmlkod +="Välj"
	}else{
		htmlkod +=slumpobjektrubrik.bakgrundstabell;
	}
	htmlkod +="</button>",
	htmlkod +="</div>";
	
	htmlkod +="<div id=\"dropdown_bakgrundstabellslump" + "\" class=\"dropdown-content\">";
	htmlkod +="<a href=\"PleaseEnableJavascript.html\" onclick=\"bytslumpval\('" + "bakgrundstabell" + "','"  + "slump" + "','" + "Slumpa" + "'\);return false;\">" + "Slumpa" + "</a>";
	for (j=0;j<bakgrundstabellista.length;j++){
		htmlkod +="<a href=\"PleaseEnableJavascript.html\" onclick=\"bytslumpval\('" + "bakgrundstabell" + "','"  + bakgrundstabellista[j] + "','" + bakgrundstabellrubriker[j] + "'\);return false;\">" + bakgrundstabellrubriker[j] + "</a>";
		
	}
	htmlkod +="</div>";
	htmlkod +="</div>";
	htmlkod+="</td>";
	
	for (i=0;i<vallista.length;i++){
		htmlkod+="<td class='center'>";
		htmlkod +="<div class=\"dropdown\">";
		htmlkod +="<div id=\"" + vallista[i] + "slump" + "\">";
		htmlkod +="<button onclick=\"dropdownFunction\(\'dropdown_" + vallista[i] + "slump" + "\'\)\" class=\"dropbtn\">";
		if (typeof slumpobjekt[vallista[i]] === 'undefined'){
			htmlkod +="Välj"
		}else{
			htmlkod +=slumpobjektrubrik[vallista[i]];
		}
		htmlkod +="</button>";
		htmlkod +="</div>";
		htmlkod +="<div id=\"dropdown_" + vallista[i] + "slump" + "\" class=\"dropdown-content\">";
		htmlkod +="<a href=\"PleaseEnableJavascript.html\" onclick=\"bytslumpval\('" + vallista[i] + "','" + "slump" + "','" + "Slumpa" + "'\);return false;\">" + "Slumpa" + "</a>";
		for (j=0;j<vallistaarray[i].length;j++){
			htmlkod +="<a href=\"PleaseEnableJavascript.html\" onclick=\"bytslumpval\('" + vallista[i] + "','" + vallistaarray[i][j] + "','" + vallistarubrikarray[i][j] + "'\);return false;\">" + vallistarubrikarray[i][j] + "</a>";
			
		}
		htmlkod +="</div>";
		htmlkod +="</div>";
		htmlkod+="</td>";
		
	
	
	}
	
	htmlkod+="</tr><tr>";
	htmlkod+="<td colspan=4 class='center'><br>";
	htmlkod+="<a href=\"PleaseEnableJavascript.html\" onclick=\"slumparollperson\(\);return false;\">";
	htmlkod+="Skapa rollperson";
	htmlkod+="</a>";
	htmlkod+="<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
	htmlkod+="</tr></table>";
	document.getElementById("hogerkategorityper").innerHTML = htmlkod;
	document.getElementById("hogerspalt").height="600";
	
	document.getElementById("hogerkategorityper").height="500";
	
	document.getElementById("hogerkategorirubrik").innerHTML = "";
	document.getElementById("hogerkategorirubrik").height = "0";
	
	document.getElementById("hogerkategorival").innerHTML = "";
	document.getElementById("hogerkategorival").height = "0";
	
	
	document.getElementById("hogerkategoritabell").innerHTML = "";
	document.getElementById("hogerkategoritabell").height = "0";
	
	document.getElementById("hogerkategoribeskrivning").innerHTML = "";
	document.getElementById("hogerkategoribeskrivning").height = "0";
	
	
	
	
	
}

function bytslumpval(kategori,valnamn,valrubrik){
	slumpobjekt[kategori]=valnamn;
	slumpobjektrubrik[kategori]=valrubrik;
	console.log(kategori + "slump");
	console.log(document.getElementById(kategori + "slump").innerHTML);
	document.getElementById(kategori + "slump").innerHTML = valrubrik;
	document.getElementById("dropdown_" + kategori + "slump").classList.remove("show");
}

function slumparollperson(){
	// Skapa Fyra dropdown i vänsterspalt:
	// Bakgrundstabell, folkslag, arketyp, miljö
	
	var i;
	
	skrivhogerkategorityper();
	
	// Förberedelser
	miljoobjekt=hamta_miljolistor();
	arketypobjekt=hamta_arketyplistor();
	bakgrundstabeller=hamta_bakgrundstabeller();
	folkslagobjekt=hamta_folkslaglistor();
	handelsetabeller=hamta_handelsetabeller();
	handelsetabellista=hamta_handelsetabellista();
	bakgrundstabellista=bakgrundstabeller.lista;
	
	ovrigafardighetertabeller=hamta_ovrigafardighetertabeller();
	fardighetsobjekt= hamta_fardighetsobjekt();
	fardighetslistaobjekt= hamta_fardighetslistaobjekt();
	attributobjekt=hamta_attributobjekt();
	ovrigafardigheterarray=[];
	
	ovrigafardigheterkategorier=fardighetslistaobjekt.ovrigafardighetergrupplista_namn;
	
	// Skapa rollperson
	rollperson=new rpval();
	
	
	aktiv_fardighetslista={};
	aktiv_fardighetslista.expertis=[];
	aktiv_fardighetslista.hantverk=[];
	aktiv_fardighetslista.kannetecken=[];
	
	rollperson.handelsetabellobjektlista=[];
	rollperson.ovrigafardigheter={};
	rollperson.ovrigafardigheter.anvant_expertispoang=0;
	rollperson.ovrigafardigheter.anvant_hantverkpoang=0;
	rollperson.ovrigafardigheter.anvant_kanneteckenpoang=0;
	
	rollperson.ovrigafardigheter.expertis={};
	rollperson.ovrigafardigheter.expertis.anvantpoang=0;
	rollperson.ovrigafardigheter.expertis.lista=[];
	
	rollperson.ovrigafardigheter.hantverk={};
	rollperson.ovrigafardigheter.hantverk.anvantpoang=0;
	rollperson.ovrigafardigheter.hantverk.lista=[];
	
	rollperson.ovrigafardigheter.kannetecken={};
	rollperson.ovrigafardigheter.kannetecken.anvantpoang=0;
	rollperson.ovrigafardigheter.kannetecken.lista=[];
	
	hantverkattributbonuslista=[];
	
	aktivthandelsetabellslag={};
	
	
	infotext=hamta_infotext();
	
	grundattributlista=attributobjekt.grundattributlista;
	extratarningar={};
	for (i=0; i<grundattributlista.length;i++){
		extratarningar[grundattributlista[i]]=0;
	}
	kvarvarandetarningar=10;

	
	/*
	slumpobjekt={};
	slumpobjektrubrik={};
	
	slumpobjekt.bakgrundstabell="slump";
	slumpobjektrubrik.bakgrundstabell="Slumpa";
	
	slumpobjekt.folkslag="slump";
	slumpobjektrubrik.folkslag="Slumpa";
	
	slumpobjekt.arketyp="slump";
	slumpobjektrubrik.arketyp="Slumpa";
	
	slumpobjekt.miljo="slump";
	slumpobjektrubrik.miljo="Slumpa";
	
	*/
	
	
	// Bakgrund
	if (slumpobjekt.bakgrundstabell=="slump"){
		bakgrundstabellindex=slumpa(bakgrundstabeller.lista.length);
		
		aktiv_bakgrundstabell=bakgrundstabeller[bakgrundstabeller.lista[bakgrundstabellindex-1]];
	}else{
		aktiv_bakgrundstabell=bakgrundstabeller[slumpobjekt.bakgrundstabell];
	}
	
	// Slumpa resultat på bakgrundstabell
	
	
	slumptal=slumpa(aktiv_bakgrundstabell.length-1);
	
	rollperson.bakgrund=clone(aktiv_bakgrundstabell[slumptal]);
	
	rollperson.bakgrundtabellnamn=rollperson.bakgrund.tabellnamn;
	
	// folkslag
	if (slumpobjekt.folkslag=="slump"){
		folkslagindex=slumpa(folkslagobjekt.lista.length);
		aktivtfolkslagobjekt=folkslagobjekt[folkslagobjekt.lista[folkslagindex-1]];
	
	}else{
		aktivtfolkslagobjekt=folkslagobjekt[slumpobjekt.folkslag];
	}
	
	// Välj subval och spara
	aktivtfolkslagobjekt=valj_subval(aktivtfolkslagobjekt,1);
	aktivtfolkslagobjekt=summera_subval(aktivtfolkslagobjekt);
	rollperson.folkslag=clone(aktivtfolkslagobjekt);
	
	// Grundattribut
	slumpagrundattribut();
	rollperson.attributtarningar={};
	for (i=0;i<grundattributlista.length;i++){
		rollperson.attributtarningar[grundattributlista[i]]={};
		rollperson.attributtarningar[grundattributlista[i]].varde=extratarningar[grundattributlista[i]]*4;
		
	}
	
	
	// arketyp
	if (slumpobjekt.arketyp=="slump"){
		arketypindex=slumpa(arketypobjekt.lista.length);
		aktivtarketypobjekt=arketypobjekt[arketypobjekt.lista[arketypindex-1]];
	
	}else{
		aktivtarketypobjekt=arketypobjekt[slumpobjekt.arketyp];
	}
	
	// Välj subval och spara
	aktivtarketypobjekt=valj_subval(aktivtarketypobjekt,1);
	aktivtarketypobjekt=summera_subval(aktivtarketypobjekt);
	rollperson.arketyp=clone(aktivtarketypobjekt);
	
	// miljo
	if (slumpobjekt.miljo=="slump"){
		miljoindex=slumpa(miljoobjekt.lista.length);
		aktivtmiljoobjekt=miljoobjekt[miljoobjekt.lista[miljoindex-1]];
	
	}else{
		aktivtmiljoobjekt=miljoobjekt[slumpobjekt.miljo];
	}
	
	// Välj subval och spara
	aktivtmiljoobjekt=valj_subval(aktivtmiljoobjekt,1);
	aktivtmiljoobjekt=summera_subval(aktivtmiljoobjekt);
	rollperson.miljo=clone(aktivtmiljoobjekt);
	
	// Summera 
	rollperson= summerarollperson(rollperson, rollperson.bakgrund);
	skrivvanstersammanfattning();
	uppdateravanstersammanfattning();
	
	
	rollperson= summerarollperson(rollperson, rollperson.folkslag);
	
	uppdateravanstersammanfattning();
	
	
	
	rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
	
	uppdateravanstersammanfattning();
	
	
	rollperson= summerarollperson(rollperson, rollperson.arketyp);
	
	uppdateravanstersammanfattning();
	
	rollperson= summerarollperson(rollperson, rollperson.miljo);
	
	uppdateravanstersammanfattning();
	
	// Händelsetabeller
	
	rollperson.kvar_handelsetabellslag=0;
	for (i=0;i<handelsetabellista.namn.length;i++){
		
		rollperson["kvar_" + handelsetabellista.namn[i]]=rollperson[handelsetabellista.namn[i]];
		rollperson.kvar_handelsetabellslag+=rollperson["kvar_" + handelsetabellista.namn[i]];
		
	}
	rollperson.kvar_valfriatabellslag=rollperson.valfriatabellslag;
	rollperson.kvar_handelsetabellslag+=rollperson.kvar_valfriatabellslag;
	
	for (i=0;i<handelsetabellista.namn.length;i++){
			
		//console.log("Antal slag kvar: " + i + ", " + rollperson["kvar_" + handelsetabellista.namn[i]]);
	}
	//console.log("valfria: " + rollperson.kvar_valfriatabellslag);
	//console.log("totalt: " + rollperson.kvar_handelsetabellslag);
			
	
	
	//while(rollperson.kvar_handelsetabellslag>0){
		//console.log("I while, innan for")
		for (i=0;i<handelsetabellista.namn.length;i++){
			
			//console.log("Aktiv tabell: " + handelsetabellista.namn[i]);
			//console.log("forloop i while för händelse: " + i + ", antal slag kvar: " + rollperson.kvar_handelsetabellslag)
			
			aktiv_handelsetabell=handelsetabeller[handelsetabellista.namn[i]];
			while (rollperson["kvar_" + handelsetabellista.namn[i]] > 0){
				// Slå på tabellen
				
				slapahandelsetabell();
				//console.log("Aktiv händelse: " + aktivthandelsetabellslag.rubrik)
				rollperson=sparahandelsetabellslag(rollperson,aktivthandelsetabellslag);
				// Summerarollperson
			}
		}	
		while (rollperson.kvar_valfriatabellslag>0){
			handelsetabellindex=slumpa(handelsetabeller.lista.length);
			aktiv_handelsetabell=handelsetabeller[handelsetabeller.lista[handelsetabellindex-1]];
			aktivthandelsetabellslag={};
			
			slapahandelsetabell();
			rollperson=sparahandelsetabellslag(rollperson,aktivthandelsetabellslag);
			// Summerarollperson	
		}	
	//}
	
	//console.log("Innan anrop av extraenheter. Rollpersonen har x enheter mystik: " + rollperson.mystikfardigheterenheter)
	
	rollperson=nollaextraenheter(rollperson);
	rollperson=extraenheter(rollperson);
	
	//console.log("Efter anrop av extraenheter. Rollpersonen har x enheter mystik: " + rollperson.mystikfardigheterenheter)
	
	
	uppdateravanstersammanfattning();
	
	// Färdighetstabeller
	
	for (i=0;i<ovrigafardigheterkategorier.length;i++){
		if (rollperson[ovrigafardigheterkategorier[i] + "poang"]>0){
			// Slå fram färdigheterna
			aktiv_ovrigafardigheterkategori=ovrigafardigheterkategorier[i];
			slumpaovrigafardigheter();
			sparaovrigafardigheter();
		}
		
	}
	
	//console.log("Efter sparaovrigafardigheter. Rollpersonen har x enheter mystik: " + rollperson.mystikfardigheterenheter)
	
	
	
	rollperson = borjaenhetsanvandning(rollperson);
	anropaslumpaallt(rollperson);
	
	
	skrivvanstersammanfattning();
	uppdateravanstersammanfattning();
	skrivhogerkategorityper();
	
	
	
}

function slumparesterandeval(rollperson){
	
	var i
	var vallista=["folkslag","arketyp","miljo"];
	if ("bakgrund" in rollperson){
	}else{
		// Bakgrund
		bakgrundstabellindex=slumpa(bakgrundstabeller.lista.length);
			
		aktiv_bakgrundstabell=bakgrundstabeller[bakgrundstabeller.lista[bakgrundstabellindex-1]];
		
		// Slumpa resultat på bakgrundstabell
		
		slumptal=slumpa(aktiv_bakgrundstabell.length-1);
		rollperson.bakgrund=clone(aktiv_bakgrundstabell[slumptal]);
		rollperson.bakgrundtabellnamn=rollperson.bakgrund.tabellnamn;
	}
	
	// folkslag
	
	if ("folkslag" in rollperson){
	}else{
		folkslagindex=slumpa(folkslagobjekt.lista.length);
		aktivtfolkslagobjekt=folkslagobjekt[folkslagobjekt.lista[folkslagindex-1]];
	
		
		// Välj subval och spara
		aktivtfolkslagobjekt=valj_subval(aktivtfolkslagobjekt,1);
		aktivtfolkslagobjekt=summera_subval(aktivtfolkslagobjekt);
		rollperson.folkslag=clone(aktivtfolkslagobjekt);
	}

	if ("attributtarningar" in rollperson){
	}else{	
		// Grundattribut
		slumpagrundattribut();
		rollperson.attributtarningar={};
		for (i=0;i<grundattributlista.length;i++){
			rollperson.attributtarningar[grundattributlista[i]]={};
			rollperson.attributtarningar[grundattributlista[i]].varde=extratarningar[grundattributlista[i]]*4;
			
		}
	}
	
	if ("arketyp" in rollperson){
	}else{
	
		// arketyp
		arketypindex=slumpa(arketypobjekt.lista.length);
		aktivtarketypobjekt=arketypobjekt[arketypobjekt.lista[arketypindex-1]];
	
		
		// Välj subval och spara
		aktivtarketypobjekt=valj_subval(aktivtarketypobjekt,1);
		aktivtarketypobjekt=summera_subval(aktivtarketypobjekt);
		rollperson.arketyp=clone(aktivtarketypobjekt);
	}	
	// miljo
	if ("miljo" in rollperson){
	}else{	
		miljoindex=slumpa(miljoobjekt.lista.length);
		aktivtmiljoobjekt=miljoobjekt[miljoobjekt.lista[miljoindex-1]];
		// Välj subval och spara
	aktivtmiljoobjekt=valj_subval(aktivtmiljoobjekt,1);
	aktivtmiljoobjekt=summera_subval(aktivtmiljoobjekt);
	rollperson.miljo=clone(aktivtmiljoobjekt);
	
	
	}
	
	rollperson=nollarollperson(rollperson);
	
	// Summera 
	rollperson= summerarollperson(rollperson, rollperson.bakgrund);
	skrivvanstersammanfattning();
	uppdateravanstersammanfattning();
	
	
	rollperson= summerarollperson(rollperson, rollperson.folkslag);
	uppdateravanstersammanfattning();
	
	
	
	rollperson= summerarollperson(rollperson, rollperson.attributtarningar);
	uppdateravanstersammanfattning();
	
	
	rollperson= summerarollperson(rollperson, rollperson.arketyp);
	uppdateravanstersammanfattning();
	
	rollperson= summerarollperson(rollperson, rollperson.miljo);
	uppdateravanstersammanfattning();
	
	skrivhogerkategorityper();
	
	rollperson=nollaextraenheter(rollperson);
	rollperson=extraenheter(rollperson);
		
	rollperson=kvarhandelsetabellslag(rollperson);
	
	skrivhandelsetabellerkategorier();
	skrivhandelsetabeller();
	return rollperson
}
/*
function slumparesterandehandelser(rollperson){
	return rollperson
}
*/
function bytattributfolkslag(folkslagnamn){
	folkslagobjekt=hamta_folkslaglistor();
	rollperson.folkslag=clone(folkslagobjekt[folkslagnamn]);
	
	rollperson=nollarollperson(rollperson);
	rollperson.folkslag=valj_subval(rollperson.folkslag,1);
		
	rollperson.folkslag=summera_subval(rollperson.folkslag);

	rollperson=summerarollperson(rollperson,rollperson.folkslag);
	rollperson=summerarollperson(rollperson,rollperson.attributtarningar);
	rollperson=summerarollperson(rollperson,rollperson.hantverkhandelse);
	
	raknautattribut();
	
}

function bytattributfolkslagsubkategori(subkategoriindex){
	var j;
	
	folkslagobjekt=hamta_folkslaglistor();
	
	console.log(subkategoriindex);
	rollperson=nollarollperson(rollperson);
	rollperson.folkslag=clone(folkslagobjekt[rollperson.folkslag.namn]);
	
	rollperson.folkslag=valj_subval(rollperson.folkslag,1);
	
	rollperson.folkslag.subval[1][0][0].valdasub = [subkategoriindex];
	for (j=1;j<rollperson.folkslag.subval[1].length;j++){
		rollperson.folkslag.subval[1][j][0].vald=0;
	}
	rollperson.folkslag.subval[1][subkategoriindex][0].vald=1;
	for (k=1;k<rollperson.folkslag.subval[1][subkategoriindex].length;k++){
		rollperson.folkslag.subval[1][subkategoriindex][k].vald=1;
	}
	
	rollperson.folkslag=summera_subval(rollperson.folkslag);

	rollperson=summerarollperson(rollperson,rollperson.folkslag);
	rollperson=summerarollperson(rollperson,rollperson.attributtarningar);
	rollperson=summerarollperson(rollperson,rollperson.hantverkhandelse);
	
	raknautattribut();
}

function raknautattribut(){
	
	doljvansterspalt();
	
	attributobjekt=hamta_attributobjekt();
	folkslagobjekt=hamta_folkslaglistor();
	folkslaglista=folkslagobjekt.lista;
	
	var grundattributlista=[];
	grundattributlista=attributobjekt.grundattributlista;
	
	console.log(grundattributlista);
	
	var harleddaattributlista=attributobjekt.harleddaattributlista;
    var harleddavardenlista=attributobjekt.harleddavardenlista;
    
    var grundattributrubriker=attributobjekt.grundattributrubriker;
    var harleddaattributrubriker=attributobjekt.harleddaattributrubriker;
    var harleddavardenrubriker=attributobjekt.harleddavardenrubriker;;
    
	var harleddaattributparnamn=attributobjekt.harleddaattributparnamn
    var harleddaattributparnummer=attributobjekt.harleddaattributparnummer;
	
	var harleddavardenformler=[];
	
	
	
	
	
	/*
	rollperson.grundrustning.grundvarde=Math.floor((rollperson.styrka.varde+rollperson.talighet.varde)/4 -4);
    if (rollperson.grundrustning.grundvarde <=0){
    	rollperson.grundrustning.grundvarde=0;
    }
    
    rollperson.livskraft.grundvarde=Math.floor((rollperson.vilja.varde+rollperson.talighet.varde)/4)+8; // +rollperson.grundrustning.grundvarde?
    if (rollperson.livskraft.grundvarde <=12){
    	rollperson.livskraft.grundvarde=12;
    }
    
    rollperson.grundskada.grundvarde=Math.floor(rollperson.styrka.varde/2)+4;
    
	*/
	
	if (typeof rollperson == 'object'){
	}else{
		rollperson=new rpval();
	}
	
	folkslagobjekt=hamta_folkslaglistor();
	if ("folkslag" in rollperson){
	}else{
		rollperson.folkslag={};
		rollperson.folkslag=clone(folkslagobjekt.adasier);
		
		rollperson.folkslag=valj_subval(rollperson.folkslag,1);
		
		rollperson.folkslag=summera_subval(rollperson.folkslag);
		
		rollperson=summerarollperson(rollperson, rollperson.folkslag);
	}
	
	for (i=0;i<harleddaattributlista.length;i++){
		if (harleddaattributlista[i] in rollperson.folkslag){
		}else{
			rollperson.folkslag[harleddaattributlista[i]]={};
			rollperson.folkslag[harleddaattributlista[i]].varde=0;
			rollperson.folkslag[harleddaattributlista[i]].grundvarde=0;
			rollperson.folkslag[harleddaattributlista[i]].bonus=0;
		}
	}
	for (i=0;i<harleddavardenlista.length;i++){
		if (harleddavardenlista[i] in rollperson.folkslag){
		}else{
			rollperson.folkslag[harleddavardenlista[i]]={};
			rollperson.folkslag[harleddavardenlista[i]].varde=0;
			rollperson.folkslag[harleddavardenlista[i]].grundvarde=0;
			rollperson.folkslag[harleddavardenlista[i]].bonus=0;
		}	
	}

	
	
	console.log(rollperson.folkslag.rubrik);
	
	
	harleddavardenformler[0]="\(Antal tärningar i Styrka " + "&#43;" + " Tålighet\) " + "&#8211;" + "4, lägst 0." 
	harleddavardenformler[1]="\(Styrka\)/2" + "&#43;" + "1T6";
	harleddavardenformler[2]="2T6" + "&#43;" +  "\(Antal tärningar i Tålighet " + "&#43;" + " Vilja\)" + ", lägst 3T6." 
	
	var i;
	
	var htmlkod="";
	
	if ("hantverkhandelse" in rollperson){
	}else{
		rollperson.hantverkhandelse={};
		for (i=0;i<grundattributlista.length;i++){
			rollperson.hantverkhandelse[grundattributlista[i]]={};
			rollperson.hantverkhandelse[grundattributlista[i]].varde=0;
		}
		for (i=0;i<harleddaattributlista.length;i++){
			rollperson.hantverkhandelse[harleddaattributlista[i]]={};
			rollperson.hantverkhandelse[harleddaattributlista[i]].varde=0;
			rollperson.hantverkhandelse[harleddaattributlista[i]].grundvarde=0;
			rollperson.hantverkhandelse[harleddaattributlista[i]].bonus=0;
		}
		for (i=0;i<harleddavardenlista.length;i++){
			rollperson.hantverkhandelse[harleddavardenlista[i]]={};
			rollperson.hantverkhandelse[harleddavardenlista[i]].varde=0;
			rollperson.hantverkhandelse[harleddavardenlista[i]].grundvarde=0;
			rollperson.hantverkhandelse[harleddavardenlista[i]].bonus=0;
		}
	}
	
	if ("attributrakning" in rollperson){
	}else{
		rollperson.attributrakning={};
		for (i=0;i<grundattributlista.length;i++){
			rollperson.attributrakning[grundattributlista[i]]={};
			rollperson.attributrakning[grundattributlista[i]].varde=0;
		}
		for (i=0;i<harleddaattributlista.length;i++){
			rollperson.attributrakning[harleddaattributlista[i]]={};
			rollperson.attributrakning[harleddaattributlista[i]].varde=0;
			rollperson.attributrakning[harleddaattributlista[i]].grundvarde=0;
			rollperson.attributrakning[harleddaattributlista[i]].bonus=0;
		}
		for (i=0;i<harleddavardenlista.length;i++){
			rollperson.attributrakning[harleddavardenlista[i]]={};
			rollperson.attributrakning[harleddavardenlista[i]].varde=0;
			rollperson.attributrakning[harleddavardenlista[i]].grundvarde=0;
			rollperson.attributrakning[harleddavardenlista[i]].bonus=0;
		}
	}
	
	if ("attributtarningar" in rollperson){
	}else{
		rollperson.attributtarningar={};
		rollperson.attributtarningar.kvarvarandetarningar=40;
		for (i=0;i<grundattributlista.length;i++){
			rollperson.attributtarningar[grundattributlista[i]]={};
			rollperson.attributtarningar[grundattributlista[i]].varde=0;
			
		}
	}
	
	
	htmlkod+="<table>";
	htmlkod+="<tr>";
	htmlkod+="<th colspan='3'>";
	htmlkod+="&nbsp;";
	htmlkod+="</th>";
	htmlkod+="<th colspan='1' class='center'>";
	htmlkod+="Folkslag: "
	if (rollperson.folkslag.subval.length>1){;
		htmlkod +="<br>";
		htmlkod += rollperson.folkslag.subval[1][0][0].rubrik;
		htmlkod +=": ";
	}
	htmlkod+="</th>";
	htmlkod+="<th colspan='1' class='center'>";
	htmlkod +="<div class=\"dropdown\">";
	htmlkod +="<div id=\"attributfolkslag\">";
	
	htmlkod +="<button onclick=\"dropdownFunction\(\'dropdown_attributfolkslag" +  "\'\)\" class=\"dropbtn\">";
	
	if (typeof rollperson.folkslag.rubrik === 'undefined'){
		htmlkod +="Övrig";
	}else{
		htmlkod +=rollperson.folkslag.rubrik;
	}
	
	htmlkod +="</button>",
	htmlkod +="</div>";
	
	htmlkod +="<div id=\"dropdown_attributfolkslag" + "\" class=\"dropdown-content\">";
		for (j=0;j<folkslaglista.length;j++){
		htmlkod +="<a href=\"PleaseEnableJavascript.html\" onclick=\"bytattributfolkslag\('" + folkslaglista[j] + "'\);return false;\">" + folkslagobjekt[folkslaglista[j]].rubrik + "</a>";
		
	}
	htmlkod +="</div>";
	htmlkod +="</div>";
	
	
	//htmlkod+=rollperson.folkslag.rubrik;
	if (rollperson.folkslag.subval.length>1){
		// Rollpersonens folkslag har en subkategori såsom provins, stam, klan eller liknande
		
		htmlkod +="<div class=\"dropdown\">";
		
		htmlkod +="<div id=\"attributfolkslag\">";
		
		htmlkod +="<button onclick=\"dropdownFunction\(\'dropdown_attributfolkslag_subkategori" +  "\'\)\" class=\"dropbtn\">";
		
		if (typeof rollperson.folkslag.rubrik === 'undefined'){
			htmlkod +="Övrig";
		}else{
			htmlkod +=rollperson.folkslag.subval[1][rollperson.folkslag.subval[1][0][0].valdasub[0]][0].rubrik;
		}
		
		htmlkod +="</button>",
		
		htmlkod +="</div>";
		htmlkod +="<div id=\"dropdown_attributfolkslag_subkategori" + "\" class=\"dropdown-content\">";
			for (j=1;j<rollperson.folkslag.subval[1].length;j++){
			htmlkod +="<a href=\"PleaseEnableJavascript.html\" onclick=\"bytattributfolkslagsubkategori\('" + j + "'\);return false;\">" + rollperson.folkslag.subval[1][j][0].rubrik + "</a>";
			
		}
		htmlkod +="</div>";
		htmlkod +="</div>"
		
		//htmlkod +=rollperson.folkslag.subval[1][rollperson.folkslag.subval[1][0][0].valdasub[0]][0].rubrik;
	}
	htmlkod+="</th>";
	htmlkod+="<th colspan='3' class='center'>";
	htmlkod+="Extra attribut&shy;tärningar";
	htmlkod+="</th>";
	htmlkod+="<th colspan='3' class='center'>";
	htmlkod+="Bonus från <br>hantverk och händelser";
	htmlkod+="</th>";
	htmlkod+="<th colspan='1' class='center'>";
	htmlkod+="Summa";
	htmlkod+="</th>";
	htmlkod+="</tr>";
	htmlkod+="<tr>";
	
	for (i=0;i<grundattributlista.length;i++){
		htmlkod+="<tr>";
		htmlkod+="<td class='leftpadding'>";
		htmlkod+=grundattributrubriker[i];
		htmlkod+="</td>";
		htmlkod+="<td colspan='1'>";
		// Plats för härledd formel och -värde
		htmlkod+="<b>";
		htmlkod+=rollperson[grundattributlista[i]].tarningar;
		htmlkod+="</b>";
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpaddingborderblack'>";
		/*
		htmlkod += "<a id=\"attributrakning_folkslag_" + grundattributlista[i] + "m1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + grundattributlista[i] + "','-4');return false;\">";
		htmlkod +="&#8211;" + "1T6";
		htmlkod+="</a>";
		htmlkod +="&nbsp;";
		*/
		htmlkod += "<a id=\"attributrakning_folkslag_" + grundattributlista[i] + "m1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + grundattributlista[i] + "',-1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#8211;" + "1" + "</span>";
		htmlkod+="</a>";
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpadding'>";
		htmlkod+=vardetilltarningar(rollperson.folkslag[grundattributlista[i]].varde);
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpadding'>";
		htmlkod += "<a id=\"attributrakning_folkslag_" + grundattributlista[i] + "p1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + grundattributlista[i] + "',1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#43;" + "1" + "</span>";
		htmlkod+="</a>";
		/*
		htmlkod +="&nbsp;";
		htmlkod += "<a id=\"attributrakning_folkslag_" + grundattributlista[i] + "p1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + grundattributlista[i] + "','4');return false;\">";
		htmlkod +="&#43;" + "1T6";
		htmlkod+="</a>";
		*/
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpaddingborder'>";
		if (rollperson.attributtarningar[grundattributlista[i]].varde > 0){
			htmlkod += "<a id=\"attributrakning_attributtarningar_" + grundattributlista[i] + "m1t6" + "\"";
			htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
			htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "attributtarningar" + "','" + grundattributlista[i] + "',-4);return false;\">";
		}
		htmlkod +="<span style=\"white-space: nowrap\">&#8211;" + "1T6" + "</span>";
		if (rollperson.attributtarningar[grundattributlista[i]].varde > 0){
			htmlkod+="</a>";
		}
		
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpadding'>";
		if ("varde" in rollperson.attributtarningar[grundattributlista[i]]){
		}else{
			rollperson.attributtarningar[grundattributlista[i]].varde=0;
		}
		if (rollperson.attributtarningar[grundattributlista[i]].varde==0){
			htmlkod+="0";
		}else{
			htmlkod+=vardetilltarningarfri(rollperson.attributtarningar[grundattributlista[i]].varde);
		}
		htmlkod+="</td>";
		htmlkod+="<td class='centerpadding'>";
		if (rollperson.attributtarningar[grundattributlista[i]].varde < 12){
			if (rollperson.attributtarningar.kvarvarandetarningar>0){
				htmlkod += "<a id=\"attributrakning_attributtarningar_" + grundattributlista[i] + "p1t6" + "\"";
				htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
				htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "attributtarningar" + "','" + grundattributlista[i] + "',4);return false;\">";
			}
		}
		htmlkod +="<span style=\"white-space: nowrap\">&#43;" + "1T6" +"</span>";
		if (rollperson.attributtarningar[grundattributlista[i]].varde < 12){
			if (rollperson.attributtarningar.kvarvarandetarningar>0){
				htmlkod+="</a>";
			}
		}
		
		htmlkod+="</td>";
		
		
		htmlkod+="<td class='centerpaddingborder'>";
		/*
		htmlkod += "<a id=\"attributrakning_hantverkhandelse_" + grundattributlista[i] + "m1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + grundattributlista[i] + "','-4');return false;\">";
		htmlkod +="&#8211;" + "1T6";
		htmlkod+="</a>";
		htmlkod +="&nbsp;";
		*/
		htmlkod += "<a id=\"attributrakning_hantverkhandelse_" + grundattributlista[i] + "m1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + grundattributlista[i] + "',-1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#8211;" + "1" + "</span>";;
		htmlkod+="</a>";
		htmlkod+="</td>"
		
		htmlkod+="<td class='centerpadding'>"
		htmlkod+=vardetilltarningarfri(rollperson.hantverkhandelse[grundattributlista[i]].varde);
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpadding'>";
		htmlkod += "<a id=\"attributrakning_hantverkhandelse" + grundattributlista[i] + "p1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + grundattributlista[i] + "',1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#43;" + "1" + "</span>";
		htmlkod+="</a>";
		/*
		htmlkod +="&nbsp;";
		htmlkod += "<a id=\"attributrakning_hantverkhandelse" + grundattributlista[i] + "p1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + grundattributlista[i] + "','4');return false;\">";
		htmlkod +="&#43;" + "1T6";
		htmlkod+="</a>";
		*/
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpaddingborder'>"
		htmlkod+=rollperson[grundattributlista[i]].tarningar;
		htmlkod+="</td>";
		htmlkod+="</tr>";
	}
	
	htmlkod+="<tr>";
	htmlkod+="<td colspan='5'>";
	htmlkod+="&nbsp;";
	htmlkod+="</td>";
	htmlkod+="<td colspan='1'>";
	//htmlkod+="Totalt:";
	htmlkod+="</td>";
	htmlkod+="<td colspan='1'>";
	
	// saknas
	// summa tärningar
	
	htmlkod+=" ";
	htmlkod+="</td>";
	htmlkod+="<td colspan='5'>";
	htmlkod+="&nbsp;";
	htmlkod+="</td>";
	htmlkod+="</tr>";
	
	
	
	htmlkod+="<tr>";
	htmlkod+="<td colspan='11'>";
	htmlkod+="&nbsp;";
	htmlkod+="</td>";
	htmlkod+="<th class='centerpadding'>Från grund&shy;attribut</th>";
	htmlkod+="</tr>";
	
	
	
	
	
	
	
	for (i=0;i<harleddaattributlista.length;i++){
		htmlkod+="<tr>";
		htmlkod+="<td width=\"20%\" class='leftpadding'>";
		htmlkod+=harleddaattributrubriker[i];
		htmlkod+="<br>";
		// Formel
		htmlkod+="<div class='garaldmicro'>";
		htmlkod+="\(" + grundattributrubriker[harleddaattributparnummer[i][0]] + "&#43" + grundattributrubriker[harleddaattributparnummer[i][1]] + "\)/2"
		htmlkod+="</div>";
		htmlkod+="</td>";
		htmlkod+="<td class='leftpadding'>";
		htmlkod+="<b>";
		htmlkod+=vardetilltarningar(rollperson[harleddaattributlista[i]].varde);
		htmlkod+="</b>";
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpaddingborderblack'>";
		/*
		htmlkod += "<a id=\"attributrakning_folkslag_" + harleddaattributlista[i] + "m1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + harleddaattributlista[i] + "','-4');return false;\">";
		htmlkod +="&#8211;" + "1T6";
		htmlkod+="</a>";
		htmlkod +="&nbsp;";
		*/
		htmlkod += "<a id=\"attributrakning_folkslag_" + harleddaattributlista[i] + "m1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + harleddaattributlista[i] + "',-1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#8211;" + "1" + "</span>";
		htmlkod+="</a>";
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpadding'>";
		if (harleddaattributlista[i] in rollperson.folkslag){
			htmlkod+=vardetilltarningarfri(rollperson.folkslag[harleddaattributlista[i]].bonus);
		
		}else{
			htmlkod+="0";
		}
		
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpadding'>";
		htmlkod += "<a id=\"attributrakning_folkslag_" + harleddaattributlista[i] + "p1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + harleddaattributlista[i] + "',1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#43;" + "1" + "</span>";
		htmlkod+="</a>";
		/*
		htmlkod +="&nbsp;";
		htmlkod += "<a id=\"attributrakning_folkslag_" + harleddaattributlista[i] + "p1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + harleddaattributlista[i] + "','4');return false;\">";
		htmlkod +="&#43;" + "1T6";
		htmlkod+="</a>";
		*/
		htmlkod+="</td>";
		
		htmlkod+="<td colspan='3' class='centerpaddingborder'>";
		// ledigt utrymme under attributtarningar
		htmlkod+="&nbsp;"
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpaddingborder'>";
		/*
		htmlkod += "<a id=\"attributrakning_hantverkhandelse_" + harleddaattributlista[i] + "m1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + harleddaattributlista[i] + "','-4');return false;\">";
		htmlkod +="&#8211;" + "1T6";
		htmlkod+="</a>";
		htmlkod +="&nbsp;";
		*/
		htmlkod += "<a id=\"attributrakning_hantverkhandelse_" + harleddaattributlista[i] + "m1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + harleddaattributlista[i] + "',-1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#8211;" + "1" + "</span>";
		htmlkod+="</a>";
		htmlkod+="</td>"
		
		htmlkod+="<td class='centerpadding'>"
		
		htmlkod+=vardetilltarningarfri(rollperson.hantverkhandelse[harleddaattributlista[i]].bonus);
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpadding'>";
		htmlkod += "<a id=\"attributrakning_hantverkhandelse" + harleddaattributlista[i] + "p1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + harleddaattributlista[i] + "',1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#43;" + "1" + "</span>";
		htmlkod+="</a>";
		/*
		htmlkod +="&nbsp;";
		htmlkod += "<a id=\"attributrakning_hantverkhandelse" + harleddaattributlista[i] + "p1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + harleddaattributlista[i] + "','4');return false;\">";
		htmlkod +="&#43;" + "1T6";
		htmlkod+="</a>";
		*/
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpaddingborder'>"
		htmlkod+=vardetilltarningar(rollperson[harleddaattributlista[i]].grundvarde);
		htmlkod+="</td>";
		htmlkod+="</tr>";
	}
	
	// Grundrustning
	// saknas
	for (i=0;i<=2;i++){
		htmlkod+="<tr>";
		htmlkod+="<td class='leftpadding'>";
		htmlkod+=harleddavardenrubriker[i];
		htmlkod+="<br>";
		// Formel
		htmlkod+="<div class='garaldmicro'>";
		htmlkod+=harleddavardenformler[i];
		htmlkod+="</div>";
		htmlkod+="</td>";
		htmlkod+="<td class='leftpadding'>";
		htmlkod+="<b>";
		if (i==0){
			htmlkod+="&ensp;" + (rollperson[harleddavardenlista[i]].varde * heaviside(rollperson[harleddavardenlista[i]].varde)).toString() + "&ensp;&ensp;&ensp;";
		}else{
			htmlkod+=vardetilltarningar(rollperson[harleddavardenlista[i]].varde);
		}
		htmlkod+="</b>";
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpaddingborderblack'>";
		/*
		htmlkod += "<a id=\"attributrakning_folkslag_" + harleddavardenlista[i] + "m1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + harleddavardenlista[i] + "','-4');return false;\">";
		htmlkod +="&#8211;" + "1T6";
		htmlkod+="</a>";
		htmlkod +="&nbsp;";
		*/
		htmlkod += "<a id=\"attributrakning_folkslag_" + harleddavardenlista[i] + "m1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + harleddavardenlista[i] + "',-1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#8211;" + "1" + "</span>";
		htmlkod+="</a>";
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpadding'>";
		if (i==0){
			if (harleddavardenlista[i] in rollperson.folkslag){
				htmlkod+=bonustext(rollperson.folkslag[harleddavardenlista[i]].bonus);
			}else{
				htmlkod+="&nbsp;0&nbsp;&nbsp;&nbsp;";
			}
		}else{
			if (harleddavardenlista[i] in rollperson.folkslag){
				htmlkod+=vardetilltarningarfri(rollperson.folkslag[harleddavardenlista[i]].bonus);
			}else{
				htmlkod+="&nbsp;0&nbsp;&nbsp;&nbsp;";
			}
		}
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpadding'>";
		htmlkod += "<a id=\"attributrakning_folkslag_" + harleddavardenlista[i] + "p1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + harleddavardenlista[i] + "',1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#43;" + "1" + "</span>";
		htmlkod+="</a>";
		/*
		htmlkod +="&nbsp;";
		htmlkod += "<a id=\"attributrakning_folkslag_" + harleddavardenlista[i] + "p1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "folkslag" + "','" + harleddavardenlista[i] + "','4');return false;\">";
		htmlkod +="&#43;" + "1T6";
		htmlkod+="</a>";
		*/
		htmlkod+="</td>";
		
		htmlkod+="<td colspan='3' class='centerpaddingborder'>";
		// ledigt utrymme under attributtarningar
		htmlkod+="&nbsp;"
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpaddingborder'>";
		/*
		htmlkod += "<a id=\"attributrakning_hantverkhandelse_" + harleddavardenlista[i] + "m1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + harleddavardenlista[i] + "','-4');return false;\">";
		htmlkod +="&#8211;" + "1T6";
		htmlkod+="</a>";
		htmlkod +="&nbsp;";
		*/
		htmlkod += "<a id=\"attributrakning_hantverkhandelse_" + harleddavardenlista[i] + "m1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + harleddavardenlista[i] + "',-1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#8211;" + "1" + "</span>";
		htmlkod+="</a>";
		htmlkod+="</td>"
		
		htmlkod+="<td class='centerpadding'>"
		if (i==0){
			htmlkod+=bonustext(rollperson.hantverkhandelse[harleddavardenlista[i]].bonus);
		}else{	
			htmlkod+=vardetilltarningarfri(rollperson.hantverkhandelse[harleddavardenlista[i]].bonus);
		}
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpadding'>";
		htmlkod += "<a id=\"attributrakning_hantverkhandelse" + harleddavardenlista[i] + "p1" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + harleddavardenlista[i] + "',1);return false;\">";
		htmlkod +="<span style=\"white-space: nowrap\">&#43;" + "1" + "</span>";
		htmlkod+="</a>";
		/*
		htmlkod +="&nbsp;";
		htmlkod += "<a id=\"attributrakning_hantverkhandelse" + harleddavardenlista[i] + "p1t6" + "\"";
		htmlkod += "title=\"\" href=\"PleaseEnableJavascript.html\"";
		htmlkod += "onclick=\"attributrakningandring(rollperson, '" + "hantverkhandelse" + "','" + harleddavardenlista[i] + "','4');return false;\">";
		htmlkod +="&#43;" + "1T6";
		htmlkod+="</a>";
		*/
		htmlkod+="</td>";
		
		htmlkod+="<td class='centerpaddingborder'>"
		if (i==0){
			htmlkod+=(rollperson[harleddavardenlista[i]].grundvarde).toString();
		}else{
			htmlkod+=vardetilltarningar(rollperson[harleddavardenlista[i]].grundvarde);
		}
		htmlkod+="</td>";
		htmlkod+="</tr>";
	}
	
	document.getElementById("hogerkategorityper").innerHTML = htmlkod;
	document.getElementById("hogerspalt").height="600";
	
	document.getElementById("hogerkategorityper").height="500";
	
	document.getElementById("hogerkategorirubrik").innerHTML = "";
	document.getElementById("hogerkategorirubrik").height = "0";
	
	document.getElementById("hogerkategorival").innerHTML = "";
	document.getElementById("hogerkategorival").height = "0";
	
	
	document.getElementById("hogerkategoritabell").innerHTML = "";
	document.getElementById("hogerkategoritabell").height = "0";
	
	document.getElementById("hogerkategoribeskrivning").innerHTML = "";
	document.getElementById("hogerkategoribeskrivning").height = "0";
	
	
	
}


function attributrakningandring(rollperson, propertynamn, attributnamn, steg){
	console.log("propertynamn: " + propertynamn);
	console.log("Rollpersonstyrka: " + rollperson.styrka.varde);
	console.log("Folkslagsstyrka: " + rollperson.folkslag.styrka.varde);
	
	var grundattributlista=[];
	grundattributlista[0]="styrka";
	grundattributlista[1]="talighet";
	grundattributlista[2]="rorlighet";
	grundattributlista[3]="uppfattning";
	grundattributlista[4]="vilja";
	grundattributlista[5]="psyke";
	grundattributlista[6]="visdom";
	grundattributlista[7]="utstralning";
	
	// Ändras folkslagsattributen ska folkslag sättas till "Övrigt"
	if (propertynamn=="folkslag"){
		rollperson.folkslag.namn="ovrig";
		rollperson.folkslag.rubrik="Övrig";
	}
	
	if (grundattributlista.indexOf(attributnamn)>=0){
	
		if (propertynamn=="folkslag"){
			
			rollperson.folkslag[attributnamn].varde +=steg;
			
		}else if(propertynamn=="attributtarningar"){
			if (steg>0){
				if (rollperson.attributtarningar.kvarvarandetarningar > 0 ){
					if (rollperson.attributtarningar[attributnamn].varde+steg<=12){
						rollperson.attributtarningar[attributnamn].varde += steg;
						rollperson.attributtarningar.kvarvarandetarningar -=steg;
					}
				
				}
				// Kolla max 3T6 och max 10T6 totalt
			}else if (steg<0){
				if (rollperson.attributtarningar[attributnamn].varde<=0){
				}else{
					rollperson.attributtarningar[attributnamn].varde += steg;
					rollperson.attributtarningar.kvarvarandetarningar -=steg;
				}
			}
			
		}else if(propertynamn="hantverkhandelse"){
			rollperson.hantverkhandelse[attributnamn].varde += steg;
		}
	}else{
		rollperson[propertynamn][attributnamn].bonus +=steg;
	}
	
	rollperson=nollarollperson(rollperson);
	rollperson=summerarollperson(rollperson,rollperson.folkslag);
	rollperson=summerarollperson(rollperson,rollperson.attributtarningar);
	rollperson=summerarollperson(rollperson,rollperson.hantverkhandelse);
	
	
	console.log("Rollpersonstyrka: " + rollperson.styrka.varde);
	console.log("Folkslagsstyrka: " + rollperson.folkslag.styrka.varde);
	
	rollperson=raknautharledda(rollperson);
	raknautattribut(rollperson);
}