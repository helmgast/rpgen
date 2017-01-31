// Läkningstakt behöver läggas till
/*
Lägg till i rpval

vardeslaglista=[]
varderesultatlista=[]


pengarslag
pengarresultat
pengarslag_lista=[]
pengarresultat_lista=[]
pengar_summa

i summera och/eller välj:
ersätt varde_1, varde_2 i resurser och övrigt (likt kontakter)

ersätt .pengar i alla objekt

*/
function valj_bakgrund(rollperson, slump){

	if (slump == 0){
		bakgrundskandidater=[];
		bakgrundskandidater[0] = clone(bakgrundstabellslag(slump));
		bakgrundskandidater[1] = clone(bakgrundstabellslag(slump));
		
		// --- Välj mellan de två bakgrundskandidaterna
		
	}else if (slump == 1){
		rollperson.bakgrund = clone(bakgrundstabellslag(slump));
	
		
	}
	return rollperson
}

function bakgrundstabellslag(slump){
	bakgrundstabeller = hamta_bakgrundstabeller();
	if (slump==0){
		// Valet gäller endast tabell, vars index beskrivs av listindex
	}else if (slump==1){
		listindex = slumpa(bakgrundstabeller.lista.length)-1;
	}
	tarningsslag = slumpa(bakgrundstabeller[bakgrundstabeller.lista[listindex]].length-1);
	bakgrundsobjekt = bakgrundstabeller[bakgrundstabeller.lista[listindex]][tarningsslag];
	
	
	return bakgrundsobjekt
}


function valj_folkslag(rollperson, folkslagobjekt, slump){
	
    folkslagindex=slumpa(folkslagobjekt.lista.length)-1;
    rollperson.folkslag=clone(folkslagobjekt[folkslagobjekt.lista[folkslagindex]]);
	
    //--- genomför subval
    
  	rollperson = valj_subval(rollperson.folkslag, slump);
    
    //summera in rpvalmatris-element under folkslagets rot
    rollperson = summera_subval(rollperson.folkslag);	
    
	return rollperson
}

function fordelaattributtarningar(rollperson, slump){
	
	attributobjekt=hamta_attributobjekt();
	grundattributlista=attributobjekt.grundattributlista;
    //rpvalmatris=hamta_rpvalmatris();
    //attributlista=rpvalmatris[0];
    
	
    tempindexarray=[0,1,2,3,4,5,6,7];
    tempattributbonusar=[0,0,0,0,0,0,0,0];
    
    summabonusar=0;
    
    antalbonustarningar=10;
    if (slump==0){
    	//---fördela fritt via gui
 	}else if (slump==1){
    	for (m=0;m < antalbonustarningar;m++) {
			slumpindex = slumpa(tempindexarray.length)-1;
    		tempattributbonusar[tempindexarray[slumpindex]] += 4;
        	if (tempattributbonusar[tempindexarray[slumpindex]] >=12){
        		tempindexarray.splice(slumpindex);
        	}
        summabonusar+=4;
    	}
    }
    
    for (m=0;m < attributlista.length ;m++){
    	rollperson.attributtarningar[grundattributlista[m]].varde=tempattributbonusar[m];
    	
    }
    
    
    // --- lägg till färdighetsbonusar i detta objekt
    rollperson.attributtarningar.fardighetsbonus1=3;
    rollperson.attributtarningar.fardighetsbonus2=2;
    rollperson.attributtarningar.fardighetsbonus3=1;
    
	
    return rollperson
}


function valj_arketyp(rollperson, arketypobjekt, slump){
	
    if (slump==1){
    	arketypindex=slumpa(arketypobjekt.lista.length)-1;
    	
        //arketypindex=2; // krigare //---
    }else if(slump==0){
    	// välj arketyp
    }
    
    rollperson.arketyp=clone(arketypobjekt[arketypobjekt.lista[arketypindex]]);
	
   	rollperson = valj_subval(rollperson.arketyp, slump);
    
    
    //summera in rpvalmatris-element under arketypens rot
    rollperson = summera_subval(rollperson.arketyp);
 	   
    
	return rollperson
}

function valj_miljo(rollperson, miljoobjekt, slump){
	miljoindex=slumpa(miljoobjekt.lista.length)-1;
    rollperson.miljo=clone(miljoobjekt[miljoobjekt.lista[miljoindex]]);
	rollperson = valj_subval(rollperson.miljo, slump);
    
    
    //summera in rpvalmatris-element under miljons rot
    rollperson = summera_subval(rollperson.miljo);
    
	return rollperson
}

function valj_subval(rollpersonsvalobjekt, slump){
	
	
    console.log("Rollpersonens bakgrundtabellnamn är: " + rollperson.bakgrundtabellnamn);
	
	
    // --- funktionalitet för att välja kontakter
    // --- funktionalitet för händelsetabellslag
    // rollperson.handelsetabell_0 = rollperson.handelsetabell[0] osv 
    // (objektformen gör att det blir en länk)
	
    bakgrundstabeller = clone(hamta_bakgrundstabeller());
	rpvalmatris=hamta_rpvalmatris();
	ovrigaprop=rpvalmatris[rpvalmatris.length-1];
	replaceprop=["beskrivningvald", "beskrivninghakvald"];
	
	var i
	var j
	var p
	var k
	var q
	var s
	var t
	var u
	var v
	var w
	var x
	var y
	for (s=0; s < replaceprop.length; s++){
		ovrigaprop.push(replaceprop[s]);
	}
	
	rollpersonsvalobjekt.aktiverad=1;
	rollpersonsvalobjekt.slumpning=0;
	
	
	if ("beskrivningvaldbas" in rollpersonsvalobjekt){
		rollpersonsvalobjekt["beskrivningvald"] = rollpersonsvalobjekt["beskrivningvaldbas"];
	}else{
		//console.log("beskrivningvaldbas saknas för " + rollpersonsvalobjekt.rubrik)
	}
	
	if ("beskrivninghakvaldbas" in rollpersonsvalobjekt){
		rollpersonsvalobjekt["beskrivninghakvald"] = rollpersonsvalobjekt["beskrivninghakvaldbas"];
	}else{
		//console.log("beskrivninghakvaldbas saknas för " + rollpersonsvalobjekt.rubrik);
	}
	
	
	if ("beskrivninghakvald" in rollpersonsvalobjekt){
		console.log("beskrivninghakvald innan subval för " + rollpersonsvalobjekt.rubrik + " är: " + rollpersonsvalobjekt.beskrivninghakvald);
	
	}else{ 
		//Saknas
		//console.log(rollpersonsvalobjekt.rubrik + " saknar beskrivninghakvald")
	}
	
    //window.alert("Subval för: " + objektstyp + " körs , slump är: " + slump.toString());
	
	for (s=0; s < rollpersonsvalobjekt.subval.length; s++){
		for (t=0; t < rollpersonsvalobjekt.subval[s].length; t++){
			for (u=0; u < rollpersonsvalobjekt.subval[s][t].length; u++){
				// Skriver beskrivningvald och beskrivninghakvald från beskrivning och beskrivninghak, dessa skrivs över om det finns pengar, värde eller kontakter i subvalet.
				if ("beskrivningvaldbas" in rollpersonsvalobjekt.subval[s][t][u]){
					rollpersonsvalobjekt.subval[s][t][u].beskrivningvald=rollpersonsvalobjekt.subval[s][t][u].beskrivningvaldbas;
				}
				if ("beskrivninghakvaldbas" in rollpersonsvalobjekt.subval[s][t][u]){
					rollpersonsvalobjekt.subval[s][t][u].beskrivninghakvald=rollpersonsvalobjekt.subval[s][t][u].beskrivninghakvaldbas;
				}
				
				for (v=0; v<ovrigaprop.length;v++){
					if (ovrigaprop[v] + "bas" in rollpersonsvalobjekt.subval[s][t][u]){
						rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]]=rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v] + "bas"];
						//console.log(ovrigaprop[v] + " i subval " + s.toString() + t.toString() + u.toString() + " sätts till: " + rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v] + "bas"]);
					}
				}
			}
		}
	}
	
	for (s=0; s < rollpersonsvalobjekt.subval.length; s++){
		
		
		
		
		// eventuella subsubval
	   
		for (t=0; t < rollpersonsvalobjekt.subval[s].length; t++){
			
			if ("subvalrubrik" in rollpersonsvalobjekt.subval[s][t][0]){
			}else{
				if ("antalsubval" in rollpersonsvalobjekt.subval[s][t][0]){
				
					if (rollpersonsvalobjekt.subval[s][t][0].antalsubval == 1){
						rollpersonsvalobjekt.subval[s][t][0].subvalrubrik="Välj en av följande:"
					}else if (rollpersonsvalobjekt.subval[s][t][0].antalsubval == 2){
						rollpersonsvalobjekt.subval[s][t][0].subvalrubrik="Välj två av följande:"
					}else if (rollpersonsvalobjekt.subval[s][t][0].antalsubval == 3){
						rollpersonsvalobjekt.subval[s][t][0].subvalrubrik="Välj tre av följande:"
					}
				}
			}
			
			if ("antalsubval" in rollpersonsvalobjekt.subval[s][t][0]){
				if (rollpersonsvalobjekt.subval[s][t][0].antalsubval > 0){
					rollpersonsvalobjekt.slumpning=1;
					
					if (slump==1){
						if (s==0){
							if (t==0){
								// Subvalen under [0][0][0] är [0][0][1], [0][0][2] osv
								rollpersonsvalobjekt.subval[s][t][0].valdasub = slumpaflera(rollpersonsvalobjekt.subval[s][t][0].antalsubval,rollpersonsvalobjekt.subval[s][t].length-1).slice(1); 
							}else{
								// Subvalen under [0][1][0] är [0][1][1], [0][1][2] osv
								rollpersonsvalobjekt.subval[s][t][0].valdasub = slumpaflera(rollpersonsvalobjekt.subval[s][t][0].antalsubval,rollpersonsvalobjekt.subval[s][t].length-1).slice(1); 
							}
						}else{
							if (t==0){
								// Subvalen under [1][0][0] är [1][1][0], [1][2][0] osv
								rollpersonsvalobjekt.subval[s][t][0].valdasub = slumpaflera(rollpersonsvalobjekt.subval[s][t][0].antalsubval,rollpersonsvalobjekt.subval[s].length-1).slice(1); 
							}else{
								// Subvalen under [1][1][0] är [1][1][1], [1][1][2] osv
								rollpersonsvalobjekt.subval[s][t][0].valdasub = slumpaflera(rollpersonsvalobjekt.subval[s][t][0].antalsubval,rollpersonsvalobjekt.subval[s][t].length-1).slice(1); 
							}
						}
						
						
						//window.alert(rollpersonsvalobjekt.rubrik + " " + s + " " + t + " valdasub: " + rollpersonsvalobjekt.subval[s][t][0].valdasub)
					}else{
					}
				}
			}
			
			for (u=0; u < rollpersonsvalobjekt.subval[s][t].length; u++){
				
				// Sätter egenskap slumpning till 0, detta ändras om det finns pengar, värde eller kontakter
				rollpersonsvalobjekt.subval[s][t][u].slumpning=0;
				
				
				
				if ("pengarslag" in rollpersonsvalobjekt.subval[s][t][u]){
					//console.log("pengarslag finns i " + rollpersonsvalobjekt.rubrik + ", subval " + s.toString() + t.toString() + u.toString());
					
					
					if (rollpersonsvalobjekt.subval[s][t][u].pengarslag.length > 0){
						
						// Sätter slumpning till 1, detta möjliggör omslumpning av resultatet via separat funktion
						rollpersonsvalobjekt.subval[s][t][u].slumpning=1;
						rollpersonsvalobjekt.slumpning=1;
						
						rollpersonsvalobjekt.subval[s][t][u].pengar=slatarningar(rollpersonsvalobjekt.subval[s][t][u].pengarslag);
						
						//window.alert("framslagna pengar är " + rollpersonsvalobjekt.subval[s][t][u].pengar);
						
						for (v=0; v<ovrigaprop.length; v++){
							// Ersätter strängen "pengar_resultat" med det framslagna resultatet
							if (ovrigaprop[v] in rollpersonsvalobjekt.subval[s][t][u]){
								rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]] = rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]].replace("pengar_resultat", rollpersonsvalobjekt.subval[s][t][u].pengar.toString());
								
							}
						}
					}
				}
				if ("vardeslag" in rollpersonsvalobjekt.subval[s][t][u]){
					console.log("vardeslag finns i " + rollpersonsvalobjekt.rubrik + ", subval " + s.toString() + t.toString() + u.toString());
					if (rollpersonsvalobjekt.subval[s][t][u].vardeslag.length > 0){
						
						console.log("vardeslaglängden är: " + rollpersonsvalobjekt.subval[s][t][u].vardeslag.length);
						
						// Sätter slumpning till 1, detta möjliggör omslumpning av resultatet via separat funktion
						rollpersonsvalobjekt.subval[s][t][u].slumpning=1;
						rollpersonsvalobjekt.slumpning=1;
						
						
						for (x=0; x < rollpersonsvalobjekt.subval[s][t][u].vardeslag.length;x++){
							y=x+1;
							console.log("aktuellt värdeslag är: " + rollpersonsvalobjekt.subval[s][t][u].vardeslag[x]);
							
							if ("varderesultat" in rollpersonsvalobjekt.subval[s][t][u]){
								rollpersonsvalobjekt.subval[s][t][u].varderesultat[x]=slatarningar(rollpersonsvalobjekt.subval[s][t][u].vardeslag[x]);
							}else{
								rollpersonsvalobjekt.subval[s][t][u].varderesultat=[]; // skapar property varderesultat
								rollpersonsvalobjekt.subval[s][t][u].varderesultat[x]=slatarningar(rollpersonsvalobjekt.subval[s][t][u].vardeslag[x]);
							}
							for (v=0; v<ovrigaprop.length; v++){
								if (ovrigaprop[v] in rollpersonsvalobjekt.subval[s][t][u]){
									// Ersätter strängen "vardex_resultat" med de framslagna resultatet (för exempelvis värden på föremål)
									console.log("värderesultatet är: " + rollpersonsvalobjekt.subval[s][t][u].varderesultat[x].toString());
									rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]] = rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]].replace("varde" + y + "_resultat", rollpersonsvalobjekt.subval[s][t][u].varderesultat[x].toString());
									console.log("ändrat efter värde: " + rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]]);
								}
							}
						}	
					}
				}
				
				
				if ("kontaktenhetbool" in rollpersonsvalobjekt.subval[s][t][u]){
					console.log("kontaktenhetbool finns i " + rollpersonsvalobjekt.rubrik + ", subval " + s.toString() + t.toString() + u.toString());
					if (rollpersonsvalobjekt.subval[s][t][u].kontaktenhetbool.length > 0){
						
						// Sätter slumpning till 1, detta möjliggör omslumpning av resultatet via separat funktion
						rollpersonsvalobjekt.subval[s][t][u].slumpning=1;
						rollpersonsvalobjekt.slumpning=1;
						
						
						if (typeof rollpersonsvalobjekt.subval[s][t][u].kontaktenhetbool === 'undefined'){
						}else{
							if(typeof rollpersonsvalobjekt.subval[s][t][u].kontaktenhetbool.length === 'number'){
								/*
								console.log(typeof rollpersonsvalobjekt.subval[s][t][u].kontaktenhetbool.length);
								console.log(rollpersonsvalobjekt.subval[s][t][u].kontaktenhetbool.length);
								console.log(objektstyp)
								console.log(rollpersonsvalobjekt.rubrik);
								console.log(s,t,u);
								*/
								kontaktenhetboollength=rollpersonsvalobjekt.subval[s][t][u].kontaktenhetbool.length;
								// console.log(kontaktenhetboollength)
								
								//for(q=0; q < rollpersonsvalobjekt.subval[s][t][u].kontaktenhetbool.length; q++){
								for(q=0; q < kontaktenhetboollength; q++){	
									
									
									if (slump==1){
										if ("kontakter" in rollpersonsvalobjekt.subval[s][t][u]){
											//window.alert("slumpett, kontakter finns");
											rollpersonsvalobjekt.subval[s][t][u].kontakter[q]=clone(valjkontakt(slump));
											
											//window.alert(objektstyp);
										}else{
											//window.alert("slumpett, kontakter finns inte");
											rollpersonsvalobjekt.subval[s][t][u].kontakter=[];
											rollpersonsvalobjekt.subval[s][t][u].kontakter[q]=clone(valjkontakt(slump));
										}
									}else{
										//window.alert("slumpnoll");
										if ("kontakter" in rollpersonsvalobjekt.subval[s][t][u]){
											//window.alert("slumpett, kontakter finns");
											rollpersonsvalobjekt.subval[s][t][u].kontakter[q]=clone(valjkontakt(1));
											
											//window.alert(objektstyp);
										}else{
											//window.alert("slumpett, kontakter finns inte");
											rollpersonsvalobjekt.subval[s][t][u].kontakter=[];
											rollpersonsvalobjekt.subval[s][t][u].kontakter[q]=clone(valjkontakt(1));
										}
									}
									// --- kolla så att kontaktenhetbool summa är högst 1, annars dela upp i flera subval
									
									var kontaktord=["obestamd", "Obestamd", "bestamd", "Bestamd", "pluralobestamd", "pluralObestamd", "pluralbestamd", "pluralBestamd", "rubrikstor", "rubrikliten"];
									var kontaktordobjekt={};
									kontaktordsaknas=0;
									for (x=0; x<kontaktord.length;x++){
										kontaktordobjekt["old" + kontaktord[x]] = "kontakt" + (q+1).toString() + "_" + kontaktord[x];
										kontaktordobjekt["oldsup" + kontaktord[x]] = "kontakt" + (q+1).toString() + "sup_" + kontaktord[x];
										
										if ("kontakter" in rollpersonsvalobjekt.subval[s][t][u]){
											if (kontaktord[x] in rollpersonsvalobjekt.subval[s][t][u].kontakter[q]){
												kontaktordobjekt["new" + kontaktord[x]] = rollpersonsvalobjekt.subval[s][t][u].kontakter[q][kontaktord[x]];
											}else{
												kontaktordobjekt["new" + kontaktord[x]] = "en kontakt";
												kontaktordsaknas=1;
											}
										}
									}
									if (kontaktordsaknas==1){
										//var kontaktobjektegenskaper= Object.keys(rollpersonsvalobjekt.subval[s][t][u].kontakter[q]);
										//window.alert(kontaktobjektegenskaper);
									}
									
									/*
									// Ersättning av placeholderord i ovrigtproperty för att kunna beskriva kontakter.
									oldobestamd = "kontakt" + (q+1).toString() + "_obestamd";
									oldObestamd = "kontakt" + (q+1).toString() + "_Obestamd";
									oldbestamd= "kontakt" + (q+1).toString() + "_bestamd";
									oldBestamd= "kontakt" + (q+1).toString() + "_Bestamd";
									oldobestamdplural = "kontakt" + (q+1).toString() + "_obestamdplural";
									oldObestamdplural = "kontakt" + (q+1).toString() + "_Obestamdplural";
									oldbestamdplural= "kontakt" + (q+1).toString() + "_bestamdplural";
									oldBestamdplural= "kontakt" + (q+1).toString() + "_Bestamdplural";
									oldrubrikstor = "kontakt" + (q+1).toString() + "_rubrikstor";
									oldrubrikliten = "kontakt" + (q+1).toString() + "_rubrikliten";
									*/
									//window.alert(rollpersonsvalobjekt.subval[s][t][u].kontakter[q])
									
									if ("kontakter" in rollpersonsvalobjekt.subval[s][t][u]){
										/*
										newobestamd = rollpersonsvalobjekt.subval[s][t][u].kontakter[q].obestamd;
										newObestamd = rollpersonsvalobjekt.subval[s][t][u].kontakter[q].Obestamd;
										newbestamd=rollpersonsvalobjekt.subval[s][t][u].kontakter[q].bestamd;
										newBestamd=rollpersonsvalobjekt.subval[s][t][u].kontakter[q].Bestamd;
										newobestamdplural = rollpersonsvalobjekt.subval[s][t][u].kontakter[q].obestamdplural;
										newObestamdplural = rollpersonsvalobjekt.subval[s][t][u].kontakter[q].Obestamdplural;
										newbestamdplural=rollpersonsvalobjekt.subval[s][t][u].kontakter[q].bestamdplural;
										newBestamdplural=rollpersonsvalobjekt.subval[s][t][u].kontakter[q].Bestamdplural;
										newrubrikstor=rollpersonsvalobjekt.subval[s][t][u].kontakter[q].rubrik;
										newrubrikliten=rollpersonsvalobjekt.subval[s][t][u].kontakter[q].rubrikliten;
										*/
					
										// Loopar igenom formaga, resurs, kontakt, utseende, ovrigt
										for (v=0; v<ovrigaprop.length; v++){
											if (ovrigaprop[v] in rollpersonsvalobjekt.subval[s][t][u]){
												
												if (typeof rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]] === 'undefined'){
													window.alert([rollpersonsvalobjekt.rubrik, " subval: ", s,t,u]);
												}else if (typeof rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]] === 'string'){
													
													for (x=0; x < kontaktord.length; x++){
														// console.log(objektstyp + ": " + rollpersonsvalobjekt.rubrik + " " + ovrigaprop[v] + " " + kontaktord[x]);
														if ("old" + kontaktord[x] in kontaktordobjekt){
															if ("new" + kontaktord[x] in kontaktordobjekt){
																
																gammalord=kontaktordobjekt["old" + kontaktord[x]];
																gammalsupord=kontaktordobjekt["oldsup" + kontaktord[x]];
																
																nyord=kontaktordobjekt["new" + kontaktord[x]];
																
																
																rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]] = rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]].replace(gammalord, nyord);
																
																//console.log(gammalord + " " + nyord)
																// console.log("Både gammal och ny hittade");
																/*
																if (ovrigaprop[v] in rollpersonsvalobjekt.subval[s][t][u]){
																	// console.log(rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]]);
																	if (rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]].indexOf(gammalord) > -1 ){
																		// console.log(gammalord + " finns");
																		gammalstrang=rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]];
																		if (typeof gammalstrang === 'string' && typeof gammalord === 'string' && typeof nyord === 'string'){
																			nystrang=gammalstrang.replace(gammalord, nyord);
																			//rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]] = rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]].replace(kontaktordobjekt["old" + kontaktord[x]], kontaktordobjekt["new" + kontaktord[x]]);
																			rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]]=nystrang;
																			if (nystrang == gammalstrang){
																			// samma
																			}else{
																				console.log(gammalstrang + "\n" + nystrang);
																			}
																		
																		}else{
																			console.log("gammalstrang är ej en sträng");
																		}
																		
																		
																	}else{
																		//console.log(gammalord + " finns ej");
																	}
																}else{
																	//window.alert("ovrigaprop finns ej");
																}
																*/
															}
														}
													}
												}else{
													window.alert("type undefined?");
												}
											}
										}
										
										
										if (u==0){
											
											if ("kontaktenhetbool" in rollpersonsvalobjekt.subval[s][t][0]){
												
												for (w=1;w<rollpersonsvalobjekt.subval[s][t].length;w++){
													for (v=0; v<ovrigaprop.length; v++){
														if (ovrigaprop[v] in rollpersonsvalobjekt.subval[s][t][w]){
															
															if (typeof rollpersonsvalobjekt.subval[s][t][w][ovrigaprop[v]] === 'undefined'){
																window.alert([rollpersonsvalobjekt.rubrik, " subval: ", s,t,u]);
															}else if (typeof rollpersonsvalobjekt.subval[s][t][w][ovrigaprop[v]] === 'string'){
																
																for (x=0; x < kontaktord.length; x++){
																	// console.log(objektstyp + ": " + rollpersonsvalobjekt.rubrik + " " + ovrigaprop[v] + " " + kontaktord[x]);
																	if ("old" + kontaktord[x] in kontaktordobjekt){
																		if ("new" + kontaktord[x] in kontaktordobjekt){
																			
																			gammalord=kontaktordobjekt["old" + kontaktord[x]];
																			gammalsupord=kontaktordobjekt["oldsup" + kontaktord[x]];
																			
																			
																			nyord=kontaktordobjekt["new" + kontaktord[x]];
																			
																			console.log("gammalsupord är: " + gammalsupord);
																			console.log("nyord är: " + nyord);
																			
																			console.log("beskrivninghakvald innan: " + rollpersonsvalobjekt.subval[s][t][w].beskrivninghakvald)
																			
																			rollpersonsvalobjekt.subval[s][t][w][ovrigaprop[v]] = rollpersonsvalobjekt.subval[s][t][w][ovrigaprop[v]].replace(gammalsupord, nyord);
																			
																			console.log("beskrivninghakvald efter: " + rollpersonsvalobjekt.subval[s][t][w].beskrivninghakvald)
																			
																			
																		}
																	}
																}
															}else{
																window.alert("type undefined?");
															}
														}
													}
												}
												
												if (typeof rollpersonsvalobjekt.subval[s][t][0].kontaktenhetbool === 'undefined'){
												}else{
													if (rollpersonsvalobjekt.subval[s][t][0].kontaktenhetbool[q] == 1){
														// Lägger till enheter från kontakt som subval
														rollpersonsvalobjekt.subval[s][t][0].antalsubval=1;
														rollpersonsvalobjekt.subval[s][t][1]=clone(kontaktenheter(rollpersonsvalobjekt.subval[s][t][0].kontakter[q])[0]);
														rollpersonsvalobjekt.subval[s][t][2]=clone(kontaktenheter(rollpersonsvalobjekt.subval[s][t][0].kontakter[q])[1]);
														rollpersonsvalobjekt.subval[s][t][0].valdasub = slumpaflera(rollpersonsvalobjekt.subval[s][t][0].antalsubval,rollpersonsvalobjekt.subval[s][t].length-1).slice(1);
													}
												}
											}else{
											}
										}else{
											if ("kontaktenhetbool" in rollpersonsvalobjekt.subval[s][t][0]){
												
												
												if (rollpersonsvalobjekt.subval[s][t][u].kontaktenhetbool[q] == 1){
													// Inga möjligheter till subsubsubval
												}
											}else{
											}
										}
									}else{
									//var objektegenskaper= Object.keys(rollpersonsvalobjekt.subval[s][t][u]);
									//window.alert(objektegenskaper);
									}
									
								}
							}
						}
					}
				}
				
				
			}
		
		}
		
		
    }
	
	//Summera beskrivningvald och beskrivninghakvald
    // Lägger ihop beskrivningvald och beskrivninghakvald från subval till rot, 
	if ("typ" in rollpersonsvalobjekt){
		if (rollpersonsvalobjekt.typ="handelsetabellslag"){		// endast för händelsetabellslag
			
			for (i=0; i < rollpersonsvalobjekt.subval.length;i++){
				
				// Skapar valdasubtotal som innehåller det obligatoriska val 0
				if (i==0){
					rollpersonsvalobjekt.subval[i][0][0].valdasubtotal=nummerlista(rollpersonsvalobjekt.subval[i].length-1);
				}else{
					if ("valdasub" in rollpersonsvalobjekt.subval[i][0][0]){
						rollpersonsvalobjekt.subval[i][0][0].valdasubtotal=[0].concat(rollpersonsvalobjekt.subval[i][0][0].valdasub);
					}else{
						rollpersonsvalobjekt.subval[i][0][0].valdasubtotal=[0];
					}
				}
				
				for (y=0; y < rollpersonsvalobjekt.subval[i][0][0].valdasubtotal.length; y++){
					j=rollpersonsvalobjekt.subval[i][0][0].valdasubtotal[y];
					
					// Skapar valdasubtotal som innehåller det obligatoriska val 0
					if (j==0){
						rollpersonsvalobjekt.subval[i][j][0].valdasubsubtotal=[0];
					
						//rollpersonsvalobjekt.subval[i][0][0].valdasubsubtotal=nummerlista(rollpersonsvalobjekt.subval[i].length-1);
					}else{
						if ("valdasub" in rollpersonsvalobjekt.subval[i][j][0]){
							rollpersonsvalobjekt.subval[i][j][0].valdasubsubtotal=[0].concat(rollpersonsvalobjekt.subval[i][j][0].valdasub);
						}else{
							rollpersonsvalobjekt.subval[i][j][0].valdasubsubtotal=[0];
						}
					}
					if ("valdasubsubtotal" in rollpersonsvalobjekt.subval[i][j][0]){
						for (r=0; r < rollpersonsvalobjekt.subval[i][j][0].valdasubsubtotal.length;r++){
							p= rollpersonsvalobjekt.subval[i][j][0].valdasubsubtotal[r];
							console.log("valdasubsubtotal för " + i.toString() + j.toString() + "0 är: " + rollpersonsvalobjekt.subval[i][j][0].valdasubsubtotal);
							console.log("summerar beskrivningvald för subval " + i.toString() + j.toString() + p.toString());
							if ("beskrivningvald" in rollpersonsvalobjekt.subval[i][j][p]){
								rollpersonsvalobjekt["beskrivningvald"] += rollpersonsvalobjekt.subval[i][j][p]["beskrivningvald"];
								console.log("beskrivningvald för subval " + i.toString() + j.toString() + p.toString() + " är " + rollpersonsvalobjekt.subval[i][j][p]["beskrivningvald"]);
							}
							if ("beskrivninghakvald" in rollpersonsvalobjekt.subval[i][j][p]){
								rollpersonsvalobjekt["beskrivninghakvald"] += rollpersonsvalobjekt.subval[i][j][p]["beskrivninghakvald"];
								console.log("beskrivninghakvald för subval " + i.toString() + j.toString() + p.toString() + " är " + rollpersonsvalobjekt.subval[i][j][p]["beskrivninghakvald"]);
							}
						}
					}
				}
			}
		}
	}
	if ("beskrivningvald" in rollpersonsvalobjekt){
		//console.log("beskrivningvald för " + rollpersonsvalobjekt.rubrik + " är: " + rollpersonsvalobjekt.beskrivningvald);
	}else{
		//Saknas
		//console.log(rollpersonsvalobjekt.rubrik + " saknar beskrivningvald")
	
	}
	if ("beskrivninghakvald" in rollpersonsvalobjekt){
		//console.log("beskrivninghakvald för " + rollpersonsvalobjekt.rubrik + " är: " + rollpersonsvalobjekt.beskrivninghakvald);
	
	}else{
		//Saknas
		//console.log(rollpersonsvalobjekt.rubrik + " saknar beskrivninghakvald")
	}
	rollpersonsvalobjekt.aktiverad=1;
	
    return rollpersonsvalobjekt


}

function slumpaomsubval(i,j,k){
	
	bakgrundstabeller = clone(hamta_bakgrundstabeller());
	rpvalmatris=hamta_rpvalmatris();
	ovrigaprop=rpvalmatris[rpvalmatris.length-1];
	replaceprop=["beskrivningvald", "beskrivninghakvald"];
	
	rollpersonsvalobjekt=aktivtrpvalobjekt;
	
	var q
	var s
	var t
	var u
	var v
	var x
	var slump
	slump =1;
	for (s=0; s < replaceprop.length; s++){
		ovrigaprop.push(replaceprop[s]);
	}
	console.log("slumpa om subval, " + i.toString() + j.toString() + k.toString());
	
	
	for (v=0; v<ovrigaprop.length;v++){
		if (ovrigaprop[v] + "bas" in rollpersonsvalobjekt.subval[i][j][k]){
			rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]]=rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v] + "bas"];
			//console.log(ovrigaprop[v] + " i subval " + s.toString() + t.toString() + u.toString() + " sätts till: " + rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v] + "bas"]);
		}
	}
	
	if ("pengarslag" in rollpersonsvalobjekt.subval[i][j][k]){
		if (rollpersonsvalobjekt.subval[i][j][k].pengarslag.length > 0){
			rollpersonsvalobjekt.subval[i][j][k].pengar=slatarningar(rollpersonsvalobjekt.subval[i][j][k].pengarslag);
			
			//window.alert("framslagna pengar är " + rollpersonsvalobjekt.subval[i][j][k].pengar);
			
			for (v=0; v<ovrigaprop.length; v++){
				// Ersätter strängen "pengar_resultat" med det framslagna resultatet
				if (ovrigaprop[v] + "bas" in rollpersonsvalobjekt.subval[i][j][k]){
					rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]] = rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]].replace("pengar_resultat", rollpersonsvalobjekt.subval[i][j][k].pengar.toString());
					
				}
			}
		}
	}
	if ("vardeslag" in rollpersonsvalobjekt.subval[i][j][k]){
		console.log("vardeslag finns i " + rollpersonsvalobjekt.rubrik + ", subval " + i.toString() + j.toString() + k.toString());
		if (rollpersonsvalobjekt.subval[i][j][k].vardeslag.length > 0){
			
			for (x=0; x < rollpersonsvalobjekt.subval[i][j][k].vardeslag.length;x++){
				if ("varderesultat" in rollpersonsvalobjekt.subval[i][j][k]){
					rollpersonsvalobjekt.subval[i][j][k].varderesultat[x]=slatarningar(rollpersonsvalobjekt.subval[i][j][k].vardeslag[x]);
				}else{
					rollpersonsvalobjekt.subval[i][j][k].varderesultat=[]; // skapar property varderesultat
					rollpersonsvalobjekt.subval[i][j][k].varderesultat[x]=slatarningar(rollpersonsvalobjekt.subval[i][j][k].vardeslag[x]);
				}
				for (v=0; v<ovrigaprop.length; v++){
					if (ovrigaprop[v] + "bas" in rollpersonsvalobjekt.subval[i][j][k]){
						// Ersätter strängen "vardex_resultat" med de framslagna resultatet (för exempelvis värden på föremål)
						rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]] = rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]].replace("varde" + x + "_resultat", rollpersonsvalobjekt.subval[i][j][k].varderesultat[x].toString());
					}
				}
			}	
		}
	}
	
	if ("kontaktenhetbool" in rollpersonsvalobjekt.subval[i][j][k]){
		console.log("kontaktenhetbool finns i " + rollpersonsvalobjekt.rubrik + ", subval " + i.toString() + j.toString() + k.toString());
		if (rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length > 0){
			if (typeof rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool === 'undefined'){
			}else{
				if(typeof rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length === 'number'){
					/*
					console.log(typeof rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length);
					console.log(rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length);
					console.log(objektstyp)
					console.log(rollpersonsvalobjekt.rubrik);
					console.log(s,t,u);
					*/
					kontaktenhetboollength=rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length;
					// console.log(kontaktenhetboollength)
					
					//for(q=0; q < rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length; q++){
					for(q=0; q < kontaktenhetboollength; q++){	
						
						
						if (slump==1){
							if ("kontakter" in rollpersonsvalobjekt.subval[i][j][k]){
								//window.alert("slumpett, kontakter finns");
								rollpersonsvalobjekt.subval[i][j][k].kontakter[q]=clone(valjkontakt(slump));
								
								//window.alert(objektstyp);
							}else{
								//window.alert("slumpett, kontakter finns inte");
								rollpersonsvalobjekt.subval[i][j][k].kontakter=[];
								rollpersonsvalobjekt.subval[i][j][k].kontakter[q]=clone(valjkontakt(slump));
							}
						}else{
							//window.alert("slumpnoll");
							if ("kontakter" in rollpersonsvalobjekt.subval[i][j][k]){
								//window.alert("slumpett, kontakter finns");
								rollpersonsvalobjekt.subval[i][j][k].kontakter[q]=clone(valjkontakt(1));
								
								//window.alert(objektstyp);
							}else{
								//window.alert("slumpett, kontakter finns inte");
								rollpersonsvalobjekt.subval[i][j][k].kontakter=[];
								rollpersonsvalobjekt.subval[i][j][k].kontakter[q]=clone(valjkontakt(1));
							}
						}
						// --- kolla så att kontaktenhetbool summa är högst 1, annars dela upp i flera subval
						
						var kontaktord=["obestamd", "Obestamd", "bestamd", "Bestamd", "pluralobestamd", "pluralObestamd", "pluralbestamd", "pluralBestamd", "rubrikstor", "rubrikliten"];
						var kontaktordobjekt={};
						kontaktordsaknas=0;
						for (x=0; x<kontaktord.length;x++){
							kontaktordobjekt["old" + kontaktord[x]] = "kontakt" + (q+1).toString() + "_" + kontaktord[x];
							if ("kontakter" in rollpersonsvalobjekt.subval[i][j][k]){
								if (kontaktord[x] in rollpersonsvalobjekt.subval[i][j][k].kontakter[q]){
									kontaktordobjekt["new" + kontaktord[x]] = rollpersonsvalobjekt.subval[i][j][k].kontakter[q][kontaktord[x]];
								}else{
									kontaktordobjekt["new" + kontaktord[x]] = "en kontakt";
									kontaktordsaknas=1;
								}
							}
						}
						if (kontaktordsaknas==1){
							//var kontaktobjektegenskaper= Object.keys(rollpersonsvalobjekt.subval[i][j][k].kontakter[q]);
							//window.alert(kontaktobjektegenskaper);
						}
						
						/*
						// Ersättning av placeholderord i ovrigtproperty för att kunna beskriva kontakter.
						oldobestamd = "kontakt" + (q+1).toString() + "_obestamd";
						oldObestamd = "kontakt" + (q+1).toString() + "_Obestamd";
						oldbestamd= "kontakt" + (q+1).toString() + "_bestamd";
						oldBestamd= "kontakt" + (q+1).toString() + "_Bestamd";
						oldobestamdplural = "kontakt" + (q+1).toString() + "_obestamdplural";
						oldObestamdplural = "kontakt" + (q+1).toString() + "_Obestamdplural";
						oldbestamdplural= "kontakt" + (q+1).toString() + "_bestamdplural";
						oldBestamdplural= "kontakt" + (q+1).toString() + "_Bestamdplural";
						oldrubrikstor = "kontakt" + (q+1).toString() + "_rubrikstor";
						oldrubrikliten = "kontakt" + (q+1).toString() + "_rubrikliten";
						*/
						//window.alert(rollpersonsvalobjekt.subval[i][j][k].kontakter[q])
						
						if ("kontakter" in rollpersonsvalobjekt.subval[i][j][k]){
							/*
							newobestamd = rollpersonsvalobjekt.subval[i][j][k].kontakter[q].obestamd;
							newObestamd = rollpersonsvalobjekt.subval[i][j][k].kontakter[q].Obestamd;
							newbestamd=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].bestamd;
							newBestamd=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].Bestamd;
							newobestamdplural = rollpersonsvalobjekt.subval[i][j][k].kontakter[q].obestamdplural;
							newObestamdplural = rollpersonsvalobjekt.subval[i][j][k].kontakter[q].Obestamdplural;
							newbestamdplural=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].bestamdplural;
							newBestamdplural=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].Bestamdplural;
							newrubrikstor=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].rubrik;
							newrubrikliten=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].rubrikliten;
							*/
		
							// Loopar igenom formaga, resurs, kontakt, utseende, ovrigt
							for (v=0; v<ovrigaprop.length; v++){
								if (ovrigaprop[v]  in rollpersonsvalobjekt.subval[i][j][k]){
									//console.log(ovrigaprop[v] + "bas finns i subval " + i.toString() + j.toString() + k.toString() + " i " + rollpersonsvalobjekt.rubrik);
									
									
									if (typeof rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v] ] === 'undefined'){
										window.alert([rollpersonsvalobjekt.rubrik, " subval: ", i,j,k]);
									}else if (typeof rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]] === 'string'){
										
										for (x=0; x < kontaktord.length; x++){
											// console.log(objektstyp + ": " + rollpersonsvalobjekt.rubrik + " " + ovrigaprop[v] + " " + kontaktord[x]);
											if ("old" + kontaktord[x] in kontaktordobjekt){
												if ("new" + kontaktord[x] in kontaktordobjekt){
													
													gammalord=kontaktordobjekt["old" + kontaktord[x]];
													nyord=kontaktordobjekt["new" + kontaktord[x]];
													
													
													rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]] = rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]].replace(gammalord, nyord);
													
													//console.log(gammalord + " " + nyord)
													// console.log("Både gammal och ny hittade");
													/*
													if (ovrigaprop[v] in rollpersonsvalobjekt.subval[s][t][u]){
														// console.log(rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]]);
														if (rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]].indexOf(gammalord) > -1 ){
															// console.log(gammalord + " finns");
															gammalstrang=rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]];
															if (typeof gammalstrang === 'string' && typeof gammalord === 'string' && typeof nyord === 'string'){
																nystrang=gammalstrang.replace(gammalord, nyord);
																//rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]] = rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]].replace(kontaktordobjekt["old" + kontaktord[x]], kontaktordobjekt["new" + kontaktord[x]]);
																rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]]=nystrang;
																if (nystrang == gammalstrang){
																// samma
																}else{
																	console.log(gammalstrang + "\n" + nystrang);
																}
															
															}else{
																console.log("gammalstrang är ej en sträng");
															}
															
															
														}else{
															//console.log(gammalord + " finns ej");
														}
													}else{
														//window.alert("ovrigaprop finns ej");
													}
													*/
												}
											}
										}
										
									}else{
										window.alert("type undefined?");
									}
								}
							}
							
							
							if (k==0){
								if ("kontaktenhetbool" in rollpersonsvalobjekt.subval[i][j][0]){
									if (typeof rollpersonsvalobjekt.subval[i][j][0].kontaktenhetbool === 'undefined'){
									}else{
										if (rollpersonsvalobjekt.subval[i][j][0].kontaktenhetbool[q] == 1){
											// Lägger till enheter från kontakt som subval
											rollpersonsvalobjekt.subval[i][j][0].antalsubval=1;
											rollpersonsvalobjekt.subval[i][j][1]=clone(kontaktenheter(rollpersonsvalobjekt.subval[i][j][0].kontakter[q])[0]);
											rollpersonsvalobjekt.subval[i][j][2]=clone(kontaktenheter(rollpersonsvalobjekt.subval[i][j][0].kontakter[q])[1]);
											rollpersonsvalobjekt.subval[i][j][0].valdasub = slumpaflera(rollpersonsvalobjekt.subval[i][j][0].antalsubval,rollpersonsvalobjekt.subval[i][j].length-1).slice(1);
										}
									}
								}else{
								}
							}else{
								if ("kontaktenhetbool" in rollpersonsvalobjekt.subval[i][j][0]){
									if (rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool[q] == 1){
										// Inga möjligheter till subsubsubval
									}
								}else{
								}
							}
						}else{
						//var objektegenskaper= Object.keys(rollpersonsvalobjekt.subval[i][j][k]);
						//window.alert(objektegenskaper);
						}
						
					}
				}
			}
		}
	}
	
	

	
	//return rollpersonsvalobjekt
}
/*
function slumpa_subvalresultat(subvalobjekt){
	replaceprop=["beskrivningvald", "beskrivninghakvald"];
	
	
	if ("beskrivningvald" in rollpersonsvalobjekt){
		// finns
	}else{
		rollpersonsvalobjekt["beskrivningvald"] = rollpersonsvalobjekt["beskrivning"];
	}
	if ("beskrivninghakvald" in rollpersonsvalobjekt){
		// finns
	}else{
		if ("beskrivninghak" in rollpersonsvalobjekt){
			rollpersonsvalobjekt["beskrivninghakvald"] = rollpersonsvalobjekt["beskrivninghak"];
		}else{
			rollpersonsvalobjekt["beskrivninghakvald"]="";
			rollpersonsvalobjekt["beskrivninghak"]="";
		}
	}
	
	
	var i
	var j
	var p 
	var r
	var m
	var n
	var g
	var h
	var t

}
*/


function kontrollerasubval(rollpersonsvalobjekt){
	var saknadrubrikarray=[];
	
	i=0;
	for (j=0;j<rollpersonsvalobjekt.subval[i].length;j++){
		if ("antalsubval" in rollpersonsvalobjekt.subval[i][j][0]){
			if (rollpersonsvalobjekt.subval[i][j][0].valdasub.length > rollpersonsvalobjekt.subval[i][j][0].antalsubval){
				//--- slice på valdasub 
				rollpersonsvalobjekt.subval[i][j][0].valdasub=rollpersonsvalobjekt.subval[i][j][0].valdasub.slice(0,rollpersonsvalobjekt.subval[i][j][0].antalsubval);
			}
			
			if ("minantalsubval" in rollpersonsvalobjekt.subval[i][j][0]){
				
				// Om minantalsubval är lägre än antalsubval behöver inte valdasub vara lika lång som antalsubval utan istället minst lika lång som minantalsubval
				if (rollpersonsvalobjekt.subval[i][j][0].valdasub.length < rollpersonsvalobjekt.subval[i][j][0].minantalsubval){
					//saknadrubrikarray.push(i.toString() + j.toString() + "0" + rollpersonsvalobjekt.subval[i][j][0].rubrik);
					if (typeof(rollpersonsvalobjekt.subval[i][j][0].rubrik)==='undefined'){
						saknadrubrikarray.push("");
					}else{
						saknadrubrikarray.push(rollpersonsvalobjekt.subval[i][j][0].rubrik);
					}
				}
			}else{
				// Om inte minantalsubval finns jämförs istället valdasub.length med antalsubval
				if (rollpersonsvalobjekt.subval[i][j][0].valdasub.length < rollpersonsvalobjekt.subval[i][j][0].antalsubval){
					//saknadrubrikarray.push(i.toString() + j.toString() + "0" + rollpersonsvalobjekt.subval[i][j][0].rubrik);
					if (typeof(rollpersonsvalobjekt.subval[i][j][0].rubrik)==='undefined'){
						saknadrubrikarray.push("");
					}else{
						saknadrubrikarray.push(rollpersonsvalobjekt.subval[i][j][0].rubrik);
					}
				}
			}
			
		}
	}
	
	for (i=1;i<rollpersonsvalobjekt.subval.length;i++){
		j=0;
		if ("antalsubval" in rollpersonsvalobjekt.subval[i][j][0]){
			if (rollpersonsvalobjekt.subval[i][j][0].valdasub.length > rollpersonsvalobjekt.subval[i][j][0].antalsubval){
				//--- slice på valdasub 
				rollpersonsvalobjekt.subval[i][j][0].valdasub=rollpersonsvalobjekt.subval[i][j][0].valdasub.slice(0,rollpersonsvalobjekt.subval[i][j][0].antalsubval);
			}
			
			if ("minantalsubval" in rollpersonsvalobjekt.subval[i][j][0]){
				
				// Om minantalsubval är lägre än antalsubval behöver inte valdasub vara lika lång som antalsubval utan istället minst lika lång som minantalsubval
				if (rollpersonsvalobjekt.subval[i][j][0].valdasub.length < rollpersonsvalobjekt.subval[i][j][0].minantalsubval){
					//saknadrubrikarray.push(i.toString() + j.toString() + "0" + rollpersonsvalobjekt.subval[i][j][0].rubrik);
					if (typeof(rollpersonsvalobjekt.subval[i][j][0].rubrik)==='undefined'){
						saknadrubrikarray.push("");
					}else{
					
						saknadrubrikarray.push(rollpersonsvalobjekt.subval[i][j][0].rubrik);
					}
				}
			}else{
				// Om inte minantalsubval finns jämförs istället valdasub.length med antalsubval
				if (rollpersonsvalobjekt.subval[i][j][0].valdasub.length < rollpersonsvalobjekt.subval[i][j][0].antalsubval){
					//saknadrubrikarray.push(i.toString() + j.toString() + "0" + rollpersonsvalobjekt.subval[i][j][0].rubrik);
					if (typeof(rollpersonsvalobjekt.subval[i][j][0].rubrik)==='undefined'){
						saknadrubrikarray.push("");
					}else{
					
						saknadrubrikarray.push(rollpersonsvalobjekt.subval[i][j][0].rubrik);
					}
				}
			}
			
		}
		
		for (t=0; t<rollpersonsvalobjekt.subval[i][0][0].valdasub.length;t++){
			j=rollpersonsvalobjekt.subval[i][0][0].valdasub[t];
			if ("antalsubval" in rollpersonsvalobjekt.subval[i][j][0]){
				if (rollpersonsvalobjekt.subval[i][j][0].valdasub.length > rollpersonsvalobjekt.subval[i][j][0].antalsubval){
					//--- slice på valdasub 
					rollpersonsvalobjekt.subval[i][j][0].valdasub=rollpersonsvalobjekt.subval[i][j][0].valdasub.slice(0,rollpersonsvalobjekt.subval[i][j][0].antalsubval);
				}
				
				if ("minantalsubval" in rollpersonsvalobjekt.subval[i][j][0]){
					
					// Om minantalsubval är lägre än antalsubval behöver inte valdasub vara lika lång som antalsubval utan istället minst lika lång som minantalsubval
					if (rollpersonsvalobjekt.subval[i][j][0].valdasub.length < rollpersonsvalobjekt.subval[i][j][0].minantalsubval){
						//saknadrubrikarray.push(i.toString() + j.toString() + "0" + rollpersonsvalobjekt.subval[i][j][0].rubrik);
						if (typeof(rollpersonsvalobjekt.subval[i][j][0].rubrik)==='undefined'){
							saknadrubrikarray.push("");
						}else{
							saknadrubrikarray.push(rollpersonsvalobjekt.subval[i][j][0].rubrik);
						}
					}
				}else{
					// Om inte minantalsubval finns jämförs istället valdasub.length med antalsubval
					if (rollpersonsvalobjekt.subval[i][j][0].valdasub.length < rollpersonsvalobjekt.subval[i][j][0].antalsubval){
						//saknadrubrikarray.push(i.toString() + j.toString() + "0" + rollpersonsvalobjekt.subval[i][j][0].rubrik);
						if (typeof(rollpersonsvalobjekt.subval[i][j][0].rubrik)==='undefined'){
							saknadrubrikarray.push("");
						}else{
							saknadrubrikarray.push(rollpersonsvalobjekt.subval[i][j][0].rubrik);
						}
					}
				}
			}	
		}
	}
	
	return saknadrubrikarray
}


function nollasubval(rollpersonsvalobjekt){
	var x;
	// Tömmer alla valdasub
	for (i=0;i<rollpersonsvalobjekt.subval.length;i++){
		for (j=0;j<rollpersonsvalobjekt.subval[i].length;j++){
			
			if ("antalsubval" in rollpersonsvalobjekt.subval[i][j][0]){
				if (rollpersonsvalobjekt.subval[i][j].length==rollpersonsvalobjekt.subval[i][j][0].antalsubval+1){
					// Alla subval ska väljas
					rollpersonsvalobjekt.subval[i][j][0].valdasub=[]
					for (x=1; x<=rollpersonsvalobjekt.subval[i][j][0].antalsubval;x++){
						rollpersonsvalobjekt.subval[i][j][0].valdasub.push(x);
					}
				}else{
					if ("valdasub" in rollpersonsvalobjekt.subval[i][j][0]){
						rollpersonsvalobjekt.subval[i][j][0].valdasub=[];
					}
				}
			}
		}
	}
}

function valjobligatoriskasubval(rollpersonsvalobjekt){
	var x;
	// Tömmer alla valdasub
	for (i=0;i<rollpersonsvalobjekt.subval.length;i++){
		for (j=0;j<rollpersonsvalobjekt.subval[i].length;j++){
			
			if ("antalsubval" in rollpersonsvalobjekt.subval[i][j][0]){
				if (rollpersonsvalobjekt.subval[i][j].length==rollpersonsvalobjekt.subval[i][j][0].antalsubval+1){
					// Alla subval ska väljas
					rollpersonsvalobjekt.subval[i][j][0].valdasub=[]
					for (x=1; x<=rollpersonsvalobjekt.subval[i][j][0].antalsubval;x++){
						rollpersonsvalobjekt.subval[i][j][0].valdasub.push(x);
					}
				}
			}
		}
	}
}

function slumpaenskiltsubval(rollpersonsvalobjekt,i,j){
	// Uppdaterar kontakter samt kontaktenheter för ett specifikt subval till ett rpvalobjekt (möjliggör för användaren att slumpa om resultatet på ett specifikt subval till folkslag, arketyp eller miljö)
	
	var slump=1;
	
	var bakgrundstabeller = clone(hamta_bakgrundstabeller());
	var rpvalmatris=hamta_rpvalmatris();
	var ovrigaprop=rpvalmatris[rpvalmatris.length-1];
	var replaceprop=["beskrivningvald", "beskrivninghakvald"];
	
	for (v=0; v<ovrigaprop.length;v++){
		if (ovrigaprop[v] + "bas" in rollpersonsvalobjekt.subval[s][t][u]){
			rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]]=rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v] + "bas"];
			//console.log(ovrigaprop[v] + " i subval " + s.toString() + t.toString() + u.toString() + " sätts till: " + rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v] + "bas"]);
		}
	}
	
	for (k=0; k < rollpersonsvalobjekt.subval[i][j].length; u++){
				
		if ("pengarslag" in rollpersonsvalobjekt.subval[i][j][k]){
		
			if (rollpersonsvalobjekt.subval[i][j][k].pengarslag.length > 0){
				rollpersonsvalobjekt.subval[i][j][k].pengar=slatarningar(rollpersonsvalobjekt.subval[i][j][k].pengarslag);
				
				for (v=0; v<ovrigaprop.length; v++){
					// Ersätter strängen "pengar_resultat" med det framslagna resultatet
					if (ovrigaprop[v] in rollpersonsvalobjekt.subval[i][j][k]){
						rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]] = rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]].replace("pengar_resultat", rollpersonsvalobjekt.subval[i][j][k].pengar.toString());
					}
				}
			}
		}
		if ("vardeslag" in rollpersonsvalobjekt.subval[i][j][k]){
			if (rollpersonsvalobjekt.subval[i][j][k].vardeslag.length > 0){
				
				for (x=0; x < rollpersonsvalobjekt.subval[i][j][k].vardeslag.length;x++){
					if ("varderesultat" in rollpersonsvalobjekt.subval[i][j][k]){
						rollpersonsvalobjekt.subval[i][j][k].varderesultat[x]=slatarningar(rollpersonsvalobjekt.subval[i][j][k].vardeslag[x]);
					}else{
						rollpersonsvalobjekt.subval[i][j][k].varderesultat=[]; // skapar property varderesultat
						rollpersonsvalobjekt.subval[i][j][k].varderesultat[x]=slatarningar(rollpersonsvalobjekt.subval[i][j][k].vardeslag[x]);
					}
					for (v=0; v<ovrigaprop.length; v++){
						if (ovrigaprop[v] in rollpersonsvalobjekt.subval[i][j][k]){
							// Ersätter strängen "vardex_resultat" med de framslagna resultatet (för exempelvis värden på föremål)
							rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]] = rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]].replace("varde" + x + "_resultat", rollpersonsvalobjekt.subval[i][j][k].varderesultat[x].toString());
						}
					}
				}	
			}
		}
		
		
		if ("kontaktenhetbool" in rollpersonsvalobjekt.subval[i][j][k]){
			if (rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length > 0){
				if (typeof rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool === 'undefined'){
				}else{
					if(typeof rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length === 'number'){
						/*
						console.log(typeof rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length);
						console.log(rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length);
						console.log(objektstyp)
						console.log(rollpersonsvalobjekt.rubrik);
						console.log(s,t,u);
						*/
						kontaktenhetboollength=rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length;
						// console.log(kontaktenhetboollength)
						
						//for(q=0; q < rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool.length; q++){
						for(q=0; q < kontaktenhetboollength; q++){	
							
							
							if (slump==1){
								if ("kontakter" in rollpersonsvalobjekt.subval[i][j][k]){
									//window.alert("slumpett, kontakter finns");
									rollpersonsvalobjekt.subval[i][j][k].kontakter[q]=clone(valjkontakt(slump));
									
									//window.alert(objektstyp);
								}else{
									//window.alert("slumpett, kontakter finns inte");
									rollpersonsvalobjekt.subval[i][j][k].kontakter=[];
									rollpersonsvalobjekt.subval[i][j][k].kontakter[q]=clone(valjkontakt(slump));
								}
							}else{
								//window.alert("slumpnoll");
							}
							// --- kolla så att kontaktenhetbool summa är högst 1, annars dela upp i flera subval
							
							var kontaktord=["obestamd", "Obestamd", "bestamd", "Bestamd", "pluralobestamd", "pluralObestamd", "pluralbestamd", "pluralBestamd", "rubrikstor", "rubrikliten"];
							var kontaktordobjekt={};
							kontaktordsaknas=0;
							for (x=0; x<kontaktord.length;x++){
								kontaktordobjekt["old" + kontaktord[x]] = "kontakt" + (q+1).toString() + "_" + kontaktord[x];
								if ("kontakter" in rollpersonsvalobjekt.subval[i][j][k]){
									if (kontaktord[x] in rollpersonsvalobjekt.subval[i][j][k].kontakter[q]){
										kontaktordobjekt["new" + kontaktord[x]] = rollpersonsvalobjekt.subval[i][j][k].kontakter[q][kontaktord[x]];
									}else{
										kontaktordobjekt["new" + kontaktord[x]] = "en kontakt";
										kontaktordsaknas=1;
									}
								}
							}
							if (kontaktordsaknas==1){
								//var kontaktobjektegenskaper= Object.keys(rollpersonsvalobjekt.subval[i][j][k].kontakter[q]);
								//window.alert(kontaktobjektegenskaper);
							}
							
							/*
							// Ersättning av placeholderord i ovrigtproperty för att kunna beskriva kontakter.
							oldobestamd = "kontakt" + (q+1).toString() + "_obestamd";
							oldObestamd = "kontakt" + (q+1).toString() + "_Obestamd";
							oldbestamd= "kontakt" + (q+1).toString() + "_bestamd";
							oldBestamd= "kontakt" + (q+1).toString() + "_Bestamd";
							oldobestamdplural = "kontakt" + (q+1).toString() + "_obestamdplural";
							oldObestamdplural = "kontakt" + (q+1).toString() + "_Obestamdplural";
							oldbestamdplural= "kontakt" + (q+1).toString() + "_bestamdplural";
							oldBestamdplural= "kontakt" + (q+1).toString() + "_Bestamdplural";
							oldrubrikstor = "kontakt" + (q+1).toString() + "_rubrikstor";
							oldrubrikliten = "kontakt" + (q+1).toString() + "_rubrikliten";
							*/
							//window.alert(rollpersonsvalobjekt.subval[i][j][k].kontakter[q])
							
							if ("kontakter" in rollpersonsvalobjekt.subval[i][j][k]){
								/*
								newobestamd = rollpersonsvalobjekt.subval[i][j][k].kontakter[q].obestamd;
								newObestamd = rollpersonsvalobjekt.subval[i][j][k].kontakter[q].Obestamd;
								newbestamd=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].bestamd;
								newBestamd=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].Bestamd;
								newobestamdplural = rollpersonsvalobjekt.subval[i][j][k].kontakter[q].obestamdplural;
								newObestamdplural = rollpersonsvalobjekt.subval[i][j][k].kontakter[q].Obestamdplural;
								newbestamdplural=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].bestamdplural;
								newBestamdplural=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].Bestamdplural;
								newrubrikstor=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].rubrik;
								newrubrikliten=rollpersonsvalobjekt.subval[i][j][k].kontakter[q].rubrikliten;
								*/
			
								// Loopar igenom formaga, resurs, kontakt, utseende, ovrigt
								for (v=0; v<ovrigaprop.length; v++){
									if (ovrigaprop[v] in rollpersonsvalobjekt.subval[i][j][k]){
										if (typeof rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]] === 'undefined'){
											window.alert([rollpersonsvalobjekt.rubrik, " subval: ", s,t,u]);
										}else if (typeof rollpersonsvalobjekt.subval[i][j][k][ovrigaprop[v]] === 'string'){
											
											for (x=0; x < kontaktord.length; x++){
												// console.log(objektstyp + ": " + rollpersonsvalobjekt.rubrik + " " + ovrigaprop[v] + " " + kontaktord[x]);
												if ("old" + kontaktord[x] in kontaktordobjekt){
													if ("new" + kontaktord[x] in kontaktordobjekt){
														
														gammalord=kontaktordobjekt["old" + kontaktord[x]];
														nyord=kontaktordobjekt["new" + kontaktord[x]];
														
														
														rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]] = rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]].replace(gammalord, nyord);
														
														//console.log(gammalord + " " + nyord)
														// console.log("Både gammal och ny hittade");
														/*
														if (ovrigaprop[v] in rollpersonsvalobjekt.subval[s][t][u]){
															// console.log(rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]]);
															if (rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]].indexOf(gammalord) > -1 ){
																// console.log(gammalord + " finns");
																gammalstrang=rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]];
																if (typeof gammalstrang === 'string' && typeof gammalord === 'string' && typeof nyord === 'string'){
																	nystrang=gammalstrang.replace(gammalord, nyord);
																	//rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]] = rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]].replace(kontaktordobjekt["old" + kontaktord[x]], kontaktordobjekt["new" + kontaktord[x]]);
																	rollpersonsvalobjekt.subval[s][t][u][ovrigaprop[v]]=nystrang;
																	if (nystrang == gammalstrang){
																	// samma
																	}else{
																		console.log(gammalstrang + "\n" + nystrang);
																	}
																
																}else{
																	console.log("gammalstrang är ej en sträng");
																}
																
																
															}else{
																//console.log(gammalord + " finns ej");
															}
														}else{
															//window.alert("ovrigaprop finns ej");
														}
														*/
													}
												}
											}
										}else{
											window.alert("type undefined?");
										}
									}
								}
								
								
								if (u==0){
									if ("kontaktenhetbool" in rollpersonsvalobjekt.subval[i][j][0]){
										if (typeof rollpersonsvalobjekt.subval[i][j][0].kontaktenhetbool === 'undefined'){
										}else{
											if (rollpersonsvalobjekt.subval[i][j][0].kontaktenhetbool[q] == 1){
												// Lägger till enheter från kontakt som subval
												rollpersonsvalobjekt.subval[i][j][0].antalsubval=1;
												rollpersonsvalobjekt.subval[i][j][1]=clone(kontaktenheter(rollpersonsvalobjekt.subval[i][j][0].kontakter[q])[0]);
												rollpersonsvalobjekt.subval[i][j][2]=clone(kontaktenheter(rollpersonsvalobjekt.subval[i][j][0].kontakter[q])[1]);
												rollpersonsvalobjekt.subval[s][t][0].valdasub = slumpaflera(rollpersonsvalobjekt.subval[s][t][0].antalsubval,rollpersonsvalobjekt.subval[s][t].length-1).slice(1);
											}
										}
									}else{
									}
								}else{
									if ("kontaktenhetbool" in rollpersonsvalobjekt.subval[i][j][0]){
										if (rollpersonsvalobjekt.subval[i][j][k].kontaktenhetbool[q] == 1){
											// Inga möjligheter till subsubsubval
										}
									}else{
									}
								}
							}else{
							//var objektegenskaper= Object.keys(rollpersonsvalobjekt.subval[i][j][k]);
							//window.alert(objektegenskaper);
							}
							
						}
					}
				}
			}
		}
	}
	return rollpersonsvalobjekt
}

function valjkontakt(slump){
	
	bakgrundstabeller = hamta_bakgrundstabeller();
	
	console.log("I valjkontakt(slump) är rollpersonens bakgrundtabellnamn: " + rollperson.bakgrundtabellnamn);
    // välj bakgrundstabell
    if (bakgrundstabeller.lista.length==1){
        // Finns det bara en bakgrundstabell behövs inget val
        listindex=0;
    }else{
    	if (slump==1){
        	listindex=slumpa(bakgrundstabeller.lista.length)-1;
    	}else if(slump==0){
    		// välj bakgrundstabell
        }    
    }
    
	if ("bakgrundtabellnummer" in rollperson){
		listindex=rollperson.bakgrundtabellnummer;
		console.log("I valjkontakt, rollpersonens bakgrundtabellnummer är: " +listindex);
	}
	
    
    if (slump==1){
    	tabellslag = slumpa(bakgrundstabeller[bakgrundstabeller.lista[listindex]].length-1);
    
    	kontaktobjekt = clone(bakgrundstabeller[bakgrundstabeller.lista[listindex]][tabellslag]);
    }else if(slump==0){
    	tabellslaglista = slumpaflera(2,bakgrundstabeller[bakgrundstabeller.lista[listindex]].length-1);
    
    	kontaktkandidat1 = bakgrundstabeller[bakgrundstabeller.lista[listindex]][tabellslaglista[1]];
        kontaktkandidat2 = bakgrundstabeller[bakgrundstabeller.lista[listindex]][tabellslaglista[2]];
        
        // välj mellan kontaktkandidat1 och kontaktkandidat2
    }
    
    return kontaktobjekt
}

function kontaktenheter(kontaktobjekt){
	// fyller objekt i listan kontaktenheterobjektlista med enheter från framslagen kontakt
    
    // --- hämta enhetslista från fardigheter-objektet
	
    enhetslista=["kunskapsfardigheterenheter","mystikfardigheterenheter","rorelsefardigheterenheter", "socialafardigheterenheter", "stridsfardigheterenheter", "vildmarksfardigheterenheter","sprakenheter", "valfriaenheter", "mysterier","expertispoang","hantverkpoang", "kanneteckenpoang"];
	rubriklista=["4 enheter Kunskapsfärdigheter", "4 enheter Mystikfärdigheter", "4 enheter Rörelsefärdigheter", "4 enheter Sociala färdigheter", "4 enheter Stridsfärdigheter", "4 enheter Vildmarksfärdigheter", "4 Språkenheter", "4 Valfria enheter", "4 poäng Mysterier", "2 poäng Expertiser", "2 poäng Hantverk", "2 poäng Kännetecken"];
    
    kontaktenheterobjektlista=[new rpval(),new rpval()];
    
    
    m=0;
	for (k=0;k < enhetslista.length; k++){
    	if (kontaktobjekt[enhetslista[k]] > 0){
        	//handelseobjekt.subval[subvalindex].push([]);
            //handelseobjekt.subval[subvalindex][m] = new rpval();
    		
           // handelseobjekt.subval[subvalindex[0]][subvalindex[1]][m][enhetslista[k]] = kontaktobjekt[enhetslista[k]];
    		
            kontaktenheterobjektlista[m][enhetslista[k]]=kontaktobjekt[enhetslista[k]];
            kontaktenheterobjektlista[m].rubrik=rubriklista[k];
            kontaktenheterobjektlista[m].beskrivninghak=rubriklista[k] + ". ";
            kontaktenheterobjektlista[m].beskrivninghakvald=rubriklista[k] + ". ";
            kontaktenheterobjektlista[m].beskrivninghakvaldbas=rubriklista[k] + ". ";
            
			m += 1;
        }
    }
	
    //return handelseobjekt
	return kontaktenheterobjektlista
}




function handelsetabellslag(rollperson, slump){
	
	//window.alert("Händelsetabell körs, slump är: " + slump.toString());
	
	handelsetabeller= clone(hamta_handelsetabeller());
	bakgrundstabeller= clone(hamta_bakgrundstabeller());
	rpvalmatris=hamta_rpvalmatris();
	// om slump är satt till 1 så slumpas alla val
    
    // skapa handelsetabellslagarray utifrån vilka tabellslag rollpersonen skall slå
    // handelsetabellslagresultat innehåller handelsetabellslagsobjekten som resultat
    
	
	var handelsetabellslagarray =[];
	for (i=0; i < handelsetabeller.lista.length; i++){
		for (j=0; j < rollperson[handelsetabeller.lista[i]]; j++){
			handelsetabellslagarray.push(handelsetabeller.lista[i]);
		}
	}
	for (j=0; j < rollperson.valfriatabellslag; j++){
		handelsetabellslagarray.push("valfriatabellslag");
	}
	
	var handelsetabellslagarrayvald = [];
	for (i=0;i<handelsetabellslagarray.length;i++){
		handelsetabellslagarrayvald[i]=handelsetabellslagarray[i];
	}
	
	
	
	m_hand=0; // raknare for handelsetabellslagarray
    
    while (m_hand < handelsetabellslagarray.length){
		
				
    	if (handelsetabellslagarray[m_hand]=="valfriatabellslag"){
        	// slumpa tabell
            if (slump==1){
				slumptal=slumpa(handelsetabeller.lista.length);
				//window.alert(["Innan: ", handelsetabellslagarray[m_hand]]);
                handelsetabellslagarrayvald[m_hand]=handelsetabeller.lista[slumptal-1];
				//window.alert(["Efter: ", handelsetabellslagarray[m_hand]]);
            }else{
            	//välj tabell
            }
        }
		
		
		
		slaget=0;
        while (slaget==0){
        		
			
            tabellangd = handelsetabeller[handelsetabellslagarrayvald[m_hand]].length-1;
            
        	k=slumpa(tabellangd);
           	//if (handelsetabeller[handelsetabeller.lista[m_hand]][tabellslagarray[k]].vald == 1){
            if (handelsetabeller[handelsetabellslagarrayvald[m_hand]][k].vald == 1){
            	// Slå om slaget om resultatet redan är slaget
                
            //}else if (handelsetabeller[handelsetabeller.lista[m_hand]][tabellslagarray[k]].omslag == 1){
            	
			}else if (handelsetabeller[handelsetabellslagarrayvald[m_hand]][k].omslag == 1){
            	
				// Sätter vald till 1 så att resultatet inte kan dyka upp igen
                // handelsetabeller[handelsetabeller.lista[m_hand]][handelsetabellslagarray[k]].vald == 1;
                handelsetabeller[handelsetabellslagarrayvald[m_hand]][k].vald == 1;
                
				
				
                // lägger till slaget i rollpersontabellslagresultat (klonat objekt)
                // rollperson.handelsetabellslagresultat.splice(m,0,clone(handelsetabeller[handelsetabellslagarray[m_hand]][k]));
                rollperson["handelsetabellslag_" + m.toString()] = clone(handelsetabeller[handelsetabellslagarrayvald[m_hand]][k]);
				
                // lägg till property tärningsslag under rollperson.tabellslagresultat                
                // rollperson.handelsetabellslagresultat[m_hand].tarningsslag = k;
                rollperson["handelsetabellslag_" + m_hand.toString()].tarningsslag=k;
				
				
                // sätter att nästa slag slås på denna tabell (omslag)
                handelsetabellslagarray.splice(m_hand+1,0,handelsetabellslagarrayvald[m_hand]);
                handelsetabellslagarrayvald.splice(m_hand+1,0,handelsetabellslagarrayvald[m_hand]);
                
				
                // sätter att nästnästa slag är valfritt
                handelsetabellslagarray.splice(m_hand+2,0,"valfriatabellslag");
                handelsetabellslagarrayvald.splice(m_hand+2,0,"");
                
				//window.alert([handelsetabellslagarray[m_hand], " ", handelsetabellslagarrayvald[m_hand],k])
				
                m_hand=m_hand+1;
                slaget=1;
				
                
            }else{
            	
                // Sätter vald till 1 så att resultatet inte kan dyka upp igen
                //handelsetabeller[handelsetabeller.lista[m]][handelsetabellslagarray[k]].vald == 1;
                handelsetabeller[handelsetabellslagarrayvald[m_hand]][k].vald == 1;
                
                
                // lägger till slaget i rollpersontabellslagresultat
                // klona objekt
                
                // lägger till slaget i rollpersontabellslagresultat (klonat objekt)
                //rollperson.handelsetabellslagresultat.splice(m,0,clone(handelsetabeller[handelsetabellslagarray[m]][k]));
                rollperson["handelsetabellslag_" + m_hand.toString()] = clone(handelsetabeller[handelsetabellslagarrayvald[m_hand]][k]);
				
                // lägg till property tärningsslag under rollperson.tabellslagresultat                
                rollperson["handelsetabellslag_" + m_hand.toString()].tarningsslag=k;
				
				//window.alert([handelsetabellslagarray[m_hand], " ", handelsetabellslagarrayvald[m_hand],k])
				
            	m_hand=m_hand+1;
                slaget=1;
            }
			
            
        }
        
		// välj subval
        
        // Länka till tabellslagobjektlistan då välj_subval inte klarar av listindex i indata
        // sätt objektstyp
        
        rollperson.tabellslagresultat[m_hand-1] = rollperson["handelsetabellslag_" + (m_hand-1).toString()];
        objektstyp = "handelsetabellslag_" + (m_hand-1).toString();
        //window.alert("Händelsetabellsubval anropas, slump är: " + slump.toString());
        rollperson = valj_subval(rollperson["handelsetabellslag_" + (m_hand-1).toString()], slump);
        rollperson = summera_subval(rollperson["handelsetabellslag_" + (m_hand-1).toString()]);
        
        
    }
    // handelsetabeller behöver ej returneras då propertyn vald bara behövs inne i denna funktion 
    // (i övrigt ändras de ej) och subvalen görs på klonade objekt
	

	return rollperson
	
	
}


function anvandovrigafardigheterpoang(rollperson, ovrigafardigheter, slump){
	// alla expertiser, hantverk och kännetecken ska vara summerade innan
    // 0: expertis, 1: hantverk, 2: kännetecken
    
    ovrigafardigheterpoang=[];

	for (var i = 0; i < 3; i++) {
		ovrigafardigheterpoang.push([[]]);
    	for (var j = 0; j <= 6; j++) {
    		ovrigafardigheterpoang[i].push([]);
    	}
	}

	ovrigafardigheterpoang[0][0][0]="expertis";
	ovrigafardigheterpoang[1][0][0]="hantverk";
	ovrigafardigheterpoang[2][0][0]="kannetecken";


	ovrigafardigheterpoang[0][0].push("Expertispoäng");
	ovrigafardigheterpoang[1][0].push("Hantverkspoäng");
	ovrigafardigheterpoang[2][0].push("Känneteckenspoäng");


	// Beskrivande text i tabellen.
	ovrigafardigheterpoang[0][1][0]="";
	ovrigafardigheterpoang[0][2][0]="";
	ovrigafardigheterpoang[0][3][0]="";
	ovrigafardigheterpoang[0][4][0]="";
	ovrigafardigheterpoang[0][5][0]="";
	ovrigafardigheterpoang[0][6][0]="";

	ovrigafardigheterpoang[1][1][0]="";
	ovrigafardigheterpoang[1][2][0]="";
	ovrigafardigheterpoang[1][3][0]="";
	ovrigafardigheterpoang[1][4][0]="";
	ovrigafardigheterpoang[1][5][0]="";
	ovrigafardigheterpoang[1][6][0]="";

	ovrigafardigheterpoang[2][1][0]="c";
	ovrigafardigheterpoang[2][2][0]="b";
	ovrigafardigheterpoang[2][3][0]="a";
	ovrigafardigheterpoang[2][4][0]="d";
	ovrigafardigheterpoang[2][5][0]="e";
	ovrigafardigheterpoang[2][6][0]="f";

	// Antal expertisenheter beroende på antal expertispoäng
	ovrigafardigheterpoang[0][1].push(3,0);
	ovrigafardigheterpoang[0][2].push(4,0);
	ovrigafardigheterpoang[0][3].push(4,3,0);
	ovrigafardigheterpoang[0][4].push(3,0);
	ovrigafardigheterpoang[0][5].push(4,0);
	ovrigafardigheterpoang[0][6].push(4,3,0);

	// Antal hantverksenheter beroende på antal hantverkspoäng
	ovrigafardigheterpoang[1][1].push(3,0);
	ovrigafardigheterpoang[1][2].push(4,0);
	ovrigafardigheterpoang[1][3].push(4,3,0);
	ovrigafardigheterpoang[1][4].push(3,0);
	ovrigafardigheterpoang[1][5].push(4,0);
	ovrigafardigheterpoang[1][6].push(4,3,0);

	// Antal känneteckensenheter beroende på antal känneteckenspoäng
	ovrigafardigheterpoang[2][1].push(3,0);
	ovrigafardigheterpoang[2][2].push(4,0);
	ovrigafardigheterpoang[2][3].push(4,3,0);
	ovrigafardigheterpoang[2][4].push(3,0);
	ovrigafardigheterpoang[2][5].push(4,0);
	ovrigafardigheterpoang[2][6].push(4,3,0);

	k=3
	// räkna ut attributbonus genom att hitta förstanollan i poängarray

	var attributbonus = ovrigafardigheterpoang[2][k].indexOf(0); 

    
    poangarray=[0,0,0];
    
    
    poangarray[0]=rollperson.expertispoang;
    poangarray[1]=rollperson.hantverkpoang;
    poangarray[2]=rollperson.kanneteckenpoang;
    
    ovrigafardigheterslagosort=[];
    ovrigafardigheterslagsort=[];
    ovrigafardigheterresultatosort=[];
    ovrigafardigheterresultatsort=[];
    ovrigafardigheterenheter=[];
    
    for (k=0;k<=2;k++){
    	ovrigafardigheterslagosort.push([]);
    	ovrigafardigheterslagsort.push([]);
    	ovrigafardigheterresultatosort.push([]);
    	ovrigafardigheterresultatsort.push([]);
        ovrigafardigheterenheter.push([]);
        
        if (poangarray[k] > 6){
        	n=6;
       	}else{
        	n=poangarray[k];
        }
        
    	p=0;
        
    	while (poangarray[k]>0){
        	ovrigafardigheterslagosort[k].push([]);
    		ovrigafardigheterslagsort[k].push([]);
    		ovrigafardigheterresultatosort[k].push([]);
    		ovrigafardigheterresultatsort[k].push([]);
    		ovrigafardigheterenheter[k].push([]);
            
        	fardighetarray=[];
            antalslag=ovrigafardigheterpoang[k][n].length-1;
        	for (m=1;m<=antalslag;m++){
            	
                // fyll ovrigafardigheterenheter utifrån ovrigafardigheterpoang och n (initialt nollelement)
                ovrigafardigheterenheter[k][p]=ovrigafardigheterpoang[k][n];
                
                slaget=0;
                while (slaget==0){
                	tarningsslag=slumpa(100);
                
                	// kollar så att färdigheten ej tidigare är vald och att dess enheter är mindre än 7 (dvs under 5t6)
                	if (ovrigafardigheter[k][tarningsslag].slagen = 0 && rollperson[ovrigafardigheter[k][tarningsslag].namn].enheter < 7){
                		// sparar tärningsslag och färdighetsobjekt i array
                        ovrigafardigheterslagosort[k][p].push(tarningsslag);
                        ovrigafardigheterresultatosort[k][p].push(ovrigafardigheter[k][tarningsslag]);
    					
                        // sätter färdighetsobjektets property vald till 1 för att undvika att den väljs fler gånger
                        ovrigafardigheter[k][tarningsslag].slagen = 1;
                    	
                        slaget=1;
                    }
                }
                
                if (slump==1){
                	// slumpa ordning på de övriga färdigheterna
                    ordnadfardighetarray=slumpaordning(fardighetarray);
                    
                    ovrigafardigheterslagsort[k][p]=slumpaordning(ovrigafardigheterslagosort[k][p]);
                    
                }else if (slump==0){
                	// välj ordning genom att anropa egenfunktion
                    // ovrigafardigheterslagsort[k][p] = sorteraovrigafardigheter(ovrigafardigheterslagosort[k][p], rollperson, ovrigafardigheter)
                }
                
                // summera färdigheter och eventuella övriga enheter samt attributbonusar
            	
                // skriver in färdigheter i array baserat på tärningsslagsarray
                ovrigafardigheterresultatsort=[k][p][m]=ovrigafardigheter[k][ovrigafardigheterslagsort=[k][p][m]];
    
                
            }
            
            
        	poangarray[k]=poangarray[k]-6;
            p = p+1;
        }
    }
    
    // --- summera rollpersonens tidigare övriga färdigheter med dem som just slagits fram
    // bör göras i egen funktion
    
    // --- sätt property vald på de som valts
    
    /*
    for (k=0;k<=2;k++){
    	for (p=0;p<=2;p++){
        	for (m=0;m<=2;m++){
            	// --- rollperson[ovrigafardigheterresultatsort + "_enheter"] += ...
            	
            }
        }
    }
    
	*/
    
    // fogar in objekten under rollperson (för senare summering)
    rollperson.ovrigafardigheterslagsort=ovrigafardigheterslagsort;
    rollperson.ovrigafardigheterresultatsort=ovrigafardigheterresultatsort;
    
    
    
    return rollperson
}

function rpval () {
	var i
	var j
	var x
	
    // Hämtar arrayer med data från funktioner
	rpvalmatris = hamta_rpvalmatris();
	var fardighetsgrupplista = [];
    var fardighetslista = [[]];
    var fardighetsobjektlista = [[]];
    
    
    
   	
    // fardighetsgrupplista, fardighetslista, fardighetsobjekt = hamta_fardighetslistor();
   	fardighetsobjekt=clone(hamta_fardighetsobjekt());
    fardighetslistaobjekt=clone(hamta_fardighetslistaobjekt());
    
	fardighetslista=fardighetslistaobjekt.fardighetslista;
    fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
    
    attributobjekt=clone(hamta_attributobjekt());
    grundattributrubriker=attributobjekt.grundattributrubriker;
    harleddaattributrubriker=attributobjekt.harleddaattributrubriker;
    harleddavardenrubriker=attributobjekt.harleddavardenrubriker;
    
	tommastrangar=["typ", "rubrik", "beskrivning", "beskrivninghak", "tabellnamn", "obestamd", "bestamd", "Bestamd", "Obestamd", "pluralobestamd", "pluralbestamd", "pluralBestamd", "pluralObestamd", "taladesprak", "skriftsprak", "subvalrubrik", "pengarslag"];
	
	tommalistor=["kvinnonamnlista", "mansnamnlista", "namnlista", "valdasub", "tabellslagresultat", "kontaktobjektlista", "kontaktenhetbool", "pengar_lista", "vardeslag", "varderesultat", "pengarslag_lista", "pengarresultat_lista", "kontakter", "anteckningar"];
	
	tommaobjekt=[];
	
	this.pengar=0;
	this.pengarsumma=0;
	
	
	//this.kontaktobjektlista fylls med objekt från bakgrundstabellerna
    //this.kontaktenhetbool definierar vilka kontakter som ger enheter 
    
	
	
	
	
	// Typen ar: folkslag, bakgrund, arketyp eller miljo
   	for (x=0; x<tommastrangar.length; x++){
		this[tommastrangar[x]]="";
	}
	for (x=0; x<tommalistor.length; x++){
		this[tommalistor[x]]=[];
	}
	
	
	
	
	this.tabellresultat = 0;
   
   	// Vald ar en boolsk variabel som satter huruvida valet ar valt eller ej
   	// det anvands dels for att forhindra att ett tabellresultat upprepas
   	// och dels for att i slutandan summera
   
   	this.vald = 0;
   
   	// flera val har subval, sasom jargiska provinser, resursval eller dilemman under tabellslag
   	this.antalsubval=0;
	
    this.subval = [[[]]];
   
   	
	
	// Omslag gäller endast på tabellresultat där man får slå om 
	this.omslag = 0;
	
    
    this.kontakthandelse=0; // Om kontakten ger ett slag på händelsetabellen
	
    // loopar igenom rpvalmatris för att sätta alla summerbara värden utom färdigheter till 0
  	i=0; // grundattribut
    for (j = 0; j < rpvalmatris[i].length; j++) { 
		this[rpvalmatris[i][j]]={};
        this[rpvalmatris[i][j]].varde = 0;
        this[rpvalmatris[i][j]].tarningar = "";
        this[rpvalmatris[i][j]].rubrik=grundattributrubriker[j];
    }
    
    //this[rpvalmatris[i][0]].rubrik="Styrka";
    
    
    
    // loopar igenom härledda attribut och värden
  	for (i = 1; i <= 2; i++) { 
    	for (j = 0; j < rpvalmatris[i].length; j++) { 
			this[rpvalmatris[i][j]] = {};
            this[rpvalmatris[i][j]].grundvarde=0;
            this[rpvalmatris[i][j]].bonus=0;
            this[rpvalmatris[i][j]].varde=0;
            this[rpvalmatris[i][j]].tarningar="";
            this[rpvalmatris[i][j]].egenskap = "";
            this[rpvalmatris[i][j]].egenskapslista=[];		// Fylls med alla .egenskap
            
    	}
    }
    
    i=1;
    for (j = 0; j < rpvalmatris[i].length; j++) { 
		this[rpvalmatris[i][j]].rubrik=harleddaattributrubriker[j];
    }
    
    i=2;
    for (j = 0; j < rpvalmatris[i].length; j++) { 
		this[rpvalmatris[i][j]].rubrik=harleddavardenrubriker[j];		
    }
    
    
    
    
    
    // loopar igenom rpvalmatris för att sätta alla summerbara värden utom färdigheter till 0
  	for (i = 3; i < rpvalmatris.length-2; i++) { 
    	for (j = 0; j < rpvalmatris[i].length; j++) { 
			this[rpvalmatris[i][j]] = 0;
    	}
    }
    
    
    
    // loopar igenom alla färdighetsnamn för att sätta alla summerbara subvärden till 0
    for (i = 0; i < fardighetsgrupplista.length; i++) {
		for (j = 0; j < fardighetslistaobjekt[fardighetsgrupplista[i]].lista.length; j++) {
        	this[fardighetslista[i][j]] = {};
            this[fardighetslista[i][j]].enheter=0;
            this[fardighetslista[i][j]].varde=0;
            this[fardighetslista[i][j]].tarningar="";
            this[fardighetslista[i][j]].lattlard=fardighetsobjekt[fardighetslista[i][j]].lattlard;
            this[fardighetslista[i][j]].hojningssvarighet=0;
            this[fardighetslista[i][j]].styrandeattributvarde=0;
			this[fardighetslista[i][j]].rubrik=fardighetsobjekt[fardighetslista[i][j]].rubrik;
			this[fardighetslista[i][j]].grundtarningar=fardighetsobjekt[fardighetslista[i][j]].grundtarningar;
			
        }
    }
	
    
    
	
	this.primart={};
	this.primart.namn="";
	this.primart.last=0;
	this.primart.svaghet=0;
	
	this.sekundart={};
	this.sekundart.namn="";
	this.sekundart.last=0;
	this.sekundart.svaghet=0;
	
    // skapar tomma strängar, samt tomma listor för formaga, resurs, kontakt, utseende, ovrigt
    for (i = 0; i < rpvalmatris[rpvalmatris.length-1].length; i++) { 
    	
        this[rpvalmatris[rpvalmatris.length-1][i]] = "";
    	this[rpvalmatris[rpvalmatris.length-1][i] + "_lista"] = [];
    }
    
	// Variabeln kvar_[handelsetabellnamn] används vid tabellslagen för att skilja på totala antalet slag och kvarvarande slag
	handelsetabellista=hamta_handelsetabellista();
	for (i=0; i<handelsetabellista.namn.length;i++){
		this["kvar_" + handelsetabellista.namn[i]]=0;
	}
	this["kvar_valfriatabellslag"]=0;
}

function karaktarsdrag () {
	this.namn="template";
	this.rubrik="template";
	this.beskrivning="template";
	
	this.svaghet=0;
	this.last=0;
	
	this.niva1="";
	this.niva2="";
	this.niva3="";
}
function hamta_rpvalmatris(){
	
   	var fardighetsgrupplista = [];
   	var fardighetslista = [];
    var fardighetsobjektlista = [];
   	
    // fardighetsgrupplista, fardighetslista, fardighetsobjekt = hamta_fardighetslistor();
   	fardighetsobjekt=clone(hamta_fardighetsobjekt());
    fardighetslistaobjekt=clone(hamta_fardighetslistaobjekt());
    
	fardighetslista=fardighetslistaobjekt.fardighetslista;
    fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	// handelsetabeller=hamta_handelsetabeller(){
	// handelsetabellista=handelsetabeller.lista;
	
	handelsetabellista=hamta_handelsetabellista();
	//handelsetabellista.namn=["farderaventyr", "intrigerillgarningar", "kunskapmysterier", "striderdrabbningar"];

	
	
    attributobjekt=clone(hamta_attributobjekt());
    
    var grundattributlista=[];
    var harleddaattributlista=[];
    var harleddavardenlista=[];
    
    
    grundattributlista=attributobjekt.grundattributlista;
    harleddaattributlista=attributobjekt.harleddaattributlista;
    harleddavardenlista=attributobjekt.harleddavardenlista;
    
    
	var harleddaattributbonus=[];
	var harleddavardenbonus=[];

					
	for (i = 0; i < harleddaattributlista.length; i++){
		harleddaattributbonus.push(harleddaattributlista[i] + "_bonus");
	}


	for (i = 0; i < harleddavardenlista.length; i++){
		harleddavardenbonus.push(harleddavardenlista[i] + "_bonus");
	}
	
    var avtrubbningskategorier=["utsatthet","vald","overnaturligt"];
    var vapenlista = ["vanligtvapen", "ovanligtvapen", "sallsyntvapen"];
	var rustninglista = ["mycketlattrustning", "lattrustning", "medelrustning", "tungrustning"];
   

	
	// nedan listas alla summerbara mätare
	var rpvalmatris = [[]];
	for (i = 0; i < grundattributlista.length; i++) { 
   		rpvalmatris[0][i]= grundattributlista[i];
	}  
	
    rpvalmatris.push([]);
    
	//for (i = 0; i < harleddaattributbonus.length; i++) { 
    // 	rpvalmatris[1][i] = harleddaattributbonus[i];
	//}   
   	
    for (i = 0; i < harleddaattributlista.length; i++) { 
    	rpvalmatris[1][i] = harleddaattributlista[i];
	}
    
   	rpvalmatris.push([]);
    
	// for (i = 0; i < harleddavardenbonus.length; i++) { 
    // 	rpvalmatris[2][i] = harleddavardenbonus[i];
	//}   
   	
    for (i = 0; i < harleddavardenlista.length; i++) { 
    	rpvalmatris[2][i] = harleddavardenlista[i];
	}
    
    
    rpvalmatris.push([]);
    rpvalmatris.push([]);
   	rpvalmatris.push([]);
    
    for (i = 0; i < 6; i++) {
    	rpvalmatris[3][i] = fardighetsgrupplista[i] + "enheter";
    	rpvalmatris[4][i] = "lattlard" + fardighetsgrupplista[i];
		rpvalmatris[4][6+i] = "svarlard" + fardighetsgrupplista[i];
		
    	rpvalmatris[5][i] = "lattlardalla" + fardighetsgrupplista[i];
		rpvalmatris[5][6+i] = "svarlardalla" + fardighetsgrupplista[i];
   	}
	rpvalmatris[3][6] = "sprakenheter";
    rpvalmatris[3][7] = "valfriaenheter";
	rpvalmatris[4][6] = "lattlardvalfri";
	rpvalmatris[4][12] = "svarlardvalfri";
	
    rpvalmatris.push([]);
    
    rpvalmatris[6][0] = "fardighetsbonus1";
    rpvalmatris[6][1] = "fardighetsbonus2";
    rpvalmatris[6][2] = "fardighetsbonus3";
    
    rpvalmatris.push([]);
    
    
	rpvalmatris[7][0] = "mysterier";
	rpvalmatris[7][1] = "heligaforemal";
	
    rpvalmatris.push([]);
    
    rpvalmatris[8][0] = "expertispoang";
    rpvalmatris[8][1] = "hantverkpoang";
    rpvalmatris[8][2] = "kanneteckenpoang";
    
    rpvalmatris.push([]);
    
    for (i = 0; i < avtrubbningskategorier.length; i++) { 
    	rpvalmatris[9][i] = "avtrubbning" + avtrubbningskategorier[i];
    } 
    
    rpvalmatris.push([]);
    rpvalmatris[9][avtrubbningskategorier.length] = "avtrubbningvalfri";
    
    for (i = 0; i < vapenlista.length; i++) { 
    	rpvalmatris[10][i] = vapenlista[i];
    } 
    
    rpvalmatris.push([]);
    
    for (i = 0; i < rustninglista.length; i++) { 
    	rpvalmatris[11][i] = rustninglista[i];
    } 
    
	rpvalmatris.push([]);
    
    for (i = 0; i < handelsetabellista.namn.length; i++) { 
       	rpvalmatris[12][i] = handelsetabellista.namn[i];
    } 
    rpvalmatris[11][handelsetabellista.namn.length] = "valfriatabellslag";
    
    rpvalmatris.push([]);
    
	
    rpvalmatris[13][0] = "pengar";
    
    rpvalmatris.push([]);
    
    rpvalmatris[14][0] = "formaga";
    rpvalmatris[14][1] = "resurs";
    rpvalmatris[14][2] = "vapen";
    rpvalmatris[14][3] = "rustning";
	rpvalmatris[14][4] = "kontakt";
    rpvalmatris[14][5] = "utseende";
	rpvalmatris[14][6] = "karaktarsdrag";
	rpvalmatris[14][7] = "ovrigt";
	
	
	return rpvalmatris
}

function rollpersonsmall (rollperson) {
   
	rollperson.bakgrund = new rpval();
	rollperson.folkslag = new rpval();
	rollperson.attributtarningar=new rpval();
	rollperson.arketyp = new rpval();
	rollperson.miljo = new rpval();
   
   
	rollperson.handelsetabellslagresultat = []; // innehåller händelsetabellsobjekt
   
	rollperson.ovrigafardigheterresultat = new rpval();
	
    rollperson.extraenheter = new rpval();
	
	
	return rollperson
}



// summera tabellslag för de olika kategorierna


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





