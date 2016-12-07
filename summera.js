

function summera_subval(rollpersonsvalobjekt){
	
	
	// summerar alla subval till objektet (folkslag, arketyp eller miljö)
   	// --- funktionalitet för händelsetabellslag
    // rollperson.handelsetabell_0 = rollperson.handelsetabell[0] osv 
    // (objektformen gör att det blir en länk)
	
	// Första blocket är fixat, men det gäller endast i=0. Strukturera om så att första blocket funkar för alla subval (minskar mängden kod, risk för fel och förenklar dessutom framtida förändringar
	
	
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
	
	
	
	
	
	rpvalmatris=hamta_rpvalmatris();
    
    fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetslista=fardighetslistaobjekt.fardighetslista;
    i=0; // obligatoriska resultat
    p=0; // Tredje index, skilt från noll endast för subsubval
	/*
	if ("typ" in rollpersonsvalobjekt){
		if (rollpersonsvalobjekt.typ="handelsetabellslag"){		// endast för händelsetabellslag
			// Sätter beskrivningvald och beskrivninghakvald till dess baser
			if ("beskrivningvaldbas" in rollpersonsvalobjekt){
				rollpersonsvalobjekt.beskrivningvald=rollpersonsvalobjekt.beskrivningvaldbas;
			}else{
				rollpersonsvalobjekt.beskrivningvald=rollpersonsvalobjekt.beskrivning;
			}
			
			if ("beskrivninghakvaldbas" in rollpersonsvalobjekt){
				rollpersonsvalobjekt.beskrivninghakvald=rollpersonsvalobjekt.beskrivninghakvaldbas;
			}else{
				rollpersonsvalobjekt.beskrivninghakvald=rollpersonsvalobjekt.beskrivninghak;
			}
		}
	}
	*/
    for (i=0; i < rollpersonsvalobjekt.subval.length;i++){
		
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
			
			//window.alert(["subval: ", rollpersonsvalobjekt.rubrik,i,j,p]);
			
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
			
			for (r=0; r < rollpersonsvalobjekt.subval[i][j][0].valdasubsubtotal.length;r++){
				p= rollpersonsvalobjekt.subval[i][j][0].valdasubsubtotal[r];
				
				//window.alert(["subsubval: ", rollpersonsvalobjekt.rubrik,i,j,p]);
				m=0; // grundattribut
				
				//--- window.alert(rollpersonsvalobjekt.rubrik)
				//---window.alert([i,j,p])
				
			
				if (typeof rollpersonsvalobjekt.subval[i][j][p] === 'undefined'){
					window.alert([rollpersonsvalobjekt.rubrik," subval: ", i, j, p])
				}else{
					for (n=0; n < rpvalmatris[m].length; n++){
						
						if (rpvalmatris[m][n] in rollpersonsvalobjekt.subval[i][j][p]){
							if ("varde" in rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]]){
								if (rpvalmatris[m][n] in rollpersonsvalobjekt){
									if ("varde" in rollpersonsvalobjekt[rpvalmatris[m][n]]){
								
										rollpersonsvalobjekt[rpvalmatris[m][n]].varde += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].varde;
									
									}else{
								
										rollpersonsvalobjekt[rpvalmatris[m][n]].varde = rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].varde;
									}
								}else{
									rollpersonsvalobjekt[rpvalmatris[m][n]]={};
									rollpersonsvalobjekt[rpvalmatris[m][n]].varde = rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].varde;
								}
							}
						}
					}
					
					for (m=1; m <= 2; m++){			// härledda attribut och värden
						for (n=0; n < rpvalmatris[m].length; n++){
							if (rpvalmatris[m][n] in rollpersonsvalobjekt.subval[i][j][p]){
								if ("bonus" in rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]]){
									if (rpvalmatris[m][n] in rollpersonsvalobjekt){
										if ("bonus" in rollpersonsvalobjekt[rpvalmatris[m][n]]){
											rollpersonsvalobjekt[rpvalmatris[m][n]].bonus += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].bonus;
										}else{
											rollpersonsvalobjekt[rpvalmatris[m][n]].bonus = rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].bonus;
										}
									}else{
										rollpersonsvalobjekt[rpvalmatris[m][n]]={};
										rollpersonsvalobjekt[rpvalmatris[m][n]].bonus = rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].bonus;
									}
								}
								if ("egenskap" in rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]]){
									if (rpvalmatris[m][n] in rollpersonsvalobjekt){
										//if ("egenskapslista" in rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]]){	
										if ("egenskapslista" in rollpersonsvalobjekt[rpvalmatris[m][n]]){	
										
											if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap.length > 0){
												rollpersonsvalobjekt[rpvalmatris[m][n]].egenskapslista.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap);
											}
										}else{
											rollpersonsvalobjekt[rpvalmatris[m][n]].egenskapslista=[];
											if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap.length > 0){
												rollpersonsvalobjekt[rpvalmatris[m][n]].egenskapslista.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap);
											}
										}
									}else{
										rollpersonsvalobjekt[rpvalmatris[m][n]]={};
										rollpersonsvalobjekt[rpvalmatris[m][n]].egenskapslista=[];
										if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap.length > 0){
											rollpersonsvalobjekt[rpvalmatris[m][n]].egenskapslista.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap);
										}
									}        
								}
							}
						}
					}
					
					for (m=3; m < rpvalmatris.length - 2; m++){
						for (n=0; n < rpvalmatris[m].length; n++){
							if (rpvalmatris[m][n] in rollpersonsvalobjekt.subval[i][j][p]){
								if (rpvalmatris[m][n] in rollpersonsvalobjekt){
								
									if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]] != 0){
										rollpersonsvalobjekt[rpvalmatris[m][n]] += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]];
									}
								}else{
									if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]] != 0){
										rollpersonsvalobjekt[rpvalmatris[m][n]] = rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]];
									}
								}
							}
						}        	
					}
					
					// Färdigheter
					for (g=0;g<fardighetslista.length;g++){
						for(h=0;h<fardighetslista[g].length;h++){
							if (fardighetslista[g][h] in rollpersonsvalobjekt.subval[i][j][p]){
								if ("enheter" in rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]]){
									if (fardighetslista[g][h] in rollpersonsvalobjekt){
										if ("enheter" in rollpersonsvalobjekt[fardighetslista[g][h]]){
											rollpersonsvalobjekt[fardighetslista[g][h]].enheter += rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].enheter;
										}else{
											rollpersonsvalobjekt[fardighetslista[g][h]].enheter = rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].enheter;
										}
									}else{
										rollpersonsvalobjekt[fardighetslista[g][h]]={};
										rollpersonsvalobjekt[fardighetslista[g][h]].enheter = rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].enheter;
									}
								}
								
								if ("lattlard" in rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]]){
									if (fardighetslista[g][h] in rollpersonsvalobjekt){
										if ("lattlard" in rollpersonsvalobjekt[fardighetslista[g][h]]){
											rollpersonsvalobjekt[fardighetslista[g][h]].lattlard += rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].lattlard;
										}else{
											rollpersonsvalobjekt[fardighetslista[g][h]].lattlard = rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].lattlard;
										}
									}else{
										rollpersonsvalobjekt[fardighetslista[g][h]]={};
										rollpersonsvalobjekt[fardighetslista[g][h]].lattlard = rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].lattlard;
									}
										
										
								}
							}
						}
					}
					
					// lägg till pengar och övrigt i lista
					if ("pengar" in rollpersonsvalobjekt.subval[i][j][p]){
						//console.log("subvalets pengar är: " + rollpersonsvalobjekt.subval[i][j][p].pengar);
						if ("pengar" in rollpersonsvalobjekt){
							rollpersonsvalobjekt.pengar +=rollpersonsvalobjekt.subval[i][j][p].pengar;
							
						}else{
							rollpersonsvalobjekt.pengar =rollpersonsvalobjekt.subval[i][j][p].pengar;
						}
						
					}
					
					
					
					for (t=0; t < rpvalmatris[rpvalmatris.length-1].length; t++){
						
						
						//--- Dela på förmåga, resurs, utseende, kontakt, övrigt som innehåller radbrytning
						
						
						// lägger till formaga, resurs, ovrigt från subval till respektive +"_lista"
						
						if (rpvalmatris[rpvalmatris.length-1][t] in rollpersonsvalobjekt.subval[i][j][p]){
						
							if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]].length >= 1){
								if (rpvalmatris[rpvalmatris.length-1][t] + "_lista" in rollpersonsvalobjekt){
									rollpersonsvalobjekt[rpvalmatris[rpvalmatris.length-1][t] + "_lista"].push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]]);
							
								}else{
									rollpersonsvalobjekt[rpvalmatris[rpvalmatris.length-1][t] + "_lista"] =[];
									rollpersonsvalobjekt[rpvalmatris[rpvalmatris.length-1][t] + "_lista"].push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]]);
							
								}
								if ("anteckningar" in rollpersonsvalobjekt){
									rollpersonsvalobjekt.anteckningar.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]]);
								}else{
									rollpersonsvalobjekt.anteckningar=[];
									rollpersonsvalobjekt.anteckningar.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]]);
								}			
							}
						}
					}	
				}
			}
		}
	}

	/*
			// subsubval
			for (r=0; r < rollpersonsvalobjekt.subval[i][j][0].valdasub.length;r++){
				p = rollpersonsvalobjekt.subval[i][j][0].valdasub[r];
				
				m=0; // grundattribut
				for (n=0; n < rpvalmatris[m].length; n++){
					if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].varde != 0){
						rollpersonsvalobjekt[rpvalmatris[m][n]].varde += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].varde;
					}
				}
		
				for (m=1; m <= 2; m++){			// härledda attribut och värden
					for (n=0; n < rpvalmatris[m].length; n++){
						if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].bonus != 0){
							rollpersonsvalobjekt[rpvalmatris[m][n]].bonus += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].bonus;
						}
				
						if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap.length > 0){
							rollpersonsvalobjekt[rpvalmatris[m][n]].egenskapslista.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap);
						}                
					}        	
				}
			
				for (m=3; m < rpvalmatris.length - 2; m++){
					for (n=0; n < rpvalmatris[m].length; n++){
						rollpersonsvalobjekt[rpvalmatris[m][n]] += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]];    
					}      	
				} 
			
				// Färdigheter
				for (g=0;g<fardighetslista.length;g++){
					for(h=0;h<fardighetslista[g].length;h++){
						rollpersonsvalobjekt[fardighetslista[g][h]].enheter += rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].enheter;
						rollpersonsvalobjekt[fardighetslista[g][h]].lattlard += rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].lattlard;
					}
				}
					
				// lägg till pengar, förmågor, resurser och övrigt i lista
				if (rollpersonsvalobjekt.subval[i][j][p].pengar.length >= 1){
					rollpersonsvalobjekt["pengar_lista"].push(rollpersonsvalobjekt.subval[i][j][p].pengar);
				}
				
				for (t=0; t < rpvalmatris[rpvalmatris.length-1].length; t++){
					
					// lägger till formaga, resurs, ovrigt från subsubval till respektive +"_lista"
					if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]].length >= 1){
						rollpersonsvalobjekt[rpvalmatris[rpvalmatris.length-1][t] + "_lista"].push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]]);
						rollpersonsvalobjekt.anteckningar.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]]);
					
					}
					
				}
			
			}
			
			
			
			
			
			
		}
	}
    */
	/*
    // valda resultat
    for (i=1; i < rollpersonsvalobjekt.subval.length;i++){
    	
    	for (k=0; k < rollpersonsvalobjekt.subval[i][0][0].valdasub.length;k++){
        	
            j = rollpersonsvalobjekt.subval[i][0][0].valdasub[k];
            
        	p=0;
            
            
            m=0; // grundattribut
			//---
			//window.alert(rollpersonsvalobjekt.rubrik + " " + i + " " + 0 + " " + 0 + " " + rollpersonsvalobjekt.subval[i][0][0].valdasub)
			//window.alert(rollpersonsvalobjekt.subval[i][0][0].valdasub.length)
			//window.alert(rollpersonsvalobjekt.rubrik + " " +  i + " " + j + " " + k + " ")
			
        	for (n=0; n < rpvalmatris[m].length; n++){
           		if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].varde != 0){
            		rollpersonsvalobjekt[rpvalmatris[m][n]].varde += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].varde;
            	}
        	}
        
        	for (m=1; m <= 2; m++){			// härledda attribut och värden
        		for (n=0; n < rpvalmatris[m].length; n++){
            		if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].bonus != 0){
                		rollpersonsvalobjekt[rpvalmatris[m][n]].bonus += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].bonus;
                	}
                
                	if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap.length > 0){
						rollpersonsvalobjekt[rpvalmatris[m][n]].egenskapslista.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap);
					}                
            	}        	
        	}
            
            
            
        	for (m=3; m < rpvalmatris.length - 2; m++){
        		for (n=0; n < rpvalmatris[m].length; n++){
            		rollpersonsvalobjekt[rpvalmatris[m][n]] += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]];    
                }      	
        	} 
            
			// Färdigheter
			for (g=0;g<fardighetslista.length;g++){
				for(h=0;h<fardighetslista[g].length;h++){
					rollpersonsvalobjekt[fardighetslista[g][h]].enheter += rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].enheter;
					rollpersonsvalobjekt[fardighetslista[g][h]].lattlard += rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].lattlard;
				}
			}
            
            // lägg till pengar och övrigt i lista
            if (rollpersonsvalobjekt.subval[i][j][0].pengar.length >= 1){
        		rollpersonsvalobjekt["pengar_lista"].push(rollpersonsvalobjekt.subval[i][j][0].pengar);
        	}
        
            
        	for (t=0; t < rpvalmatris[rpvalmatris.length-1].length; t++){
        			
            	// lägger till formaga, resurs, ovrigt från subsubval till respektive +"_lista"
        		if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]].length >= 1){
        			
                    rollpersonsvalobjekt[rpvalmatris[rpvalmatris.length-1][t] + "_lista"].push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]]);
        			rollpersonsvalobjekt.anteckningar.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]]);
        			
                }
                    
            }
            
            
            
            // if (rollpersonsvalobjekt.subval[i][j][0].ovrigt.length >= 1){
        	// 	rollpersonsvalobjekt["ovrigt_lista"].push(rollpersonsvalobjekt.subval[i][j][0].ovrigt);
        	// }
            
            
            // valda subsubval
            
        	for (r=0; r < rollpersonsvalobjekt.subval[i][j][0].valdasub.length;r++){
        		p = rollpersonsvalobjekt.subval[i][j][0].valdasub[r];
        		
                m=0; // grundattribut
        		for (n=0; n < rpvalmatris[m].length; n++){
           			if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].varde != 0){
            			rollpersonsvalobjekt[rpvalmatris[m][n]].varde += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].varde;
            		}
        		}
        
        		for (m=1; m <= 2; m++){			// härledda attribut och värden
        			for (n=0; n < rpvalmatris[m].length; n++){
            			if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].bonus != 0){
                			rollpersonsvalobjekt[rpvalmatris[m][n]].bonus += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].bonus;
                		}
                
                		if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap.length > 0){
							rollpersonsvalobjekt[rpvalmatris[m][n]].egenskapslista.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]].egenskap);
						}                
            		}        	
        		}
            
                for (m=3; m < rpvalmatris.length - 2; m++){
        			for (n=0; n < rpvalmatris[m].length; n++){
            			rollpersonsvalobjekt[rpvalmatris[m][n]] += rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[m][n]];    
                	}      	
        		} 
            
				// Färdigheter
				for (g=0;g<fardighetslista.length;g++){
					for(h=0;h<fardighetslista[g].length;h++){
						rollpersonsvalobjekt[fardighetslista[g][h]].enheter += rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].enheter;
						rollpersonsvalobjekt[fardighetslista[g][h]].lattlard += rollpersonsvalobjekt.subval[i][j][p][fardighetslista[g][h]].lattlard;
					}
				}
					
            	// lägg till pengar, förmågor, resurser och övrigt i lista
            	if (rollpersonsvalobjekt.subval[i][j][p].pengar.length >= 1){
        			rollpersonsvalobjekt["pengar_lista"].push(rollpersonsvalobjekt.subval[i][j][p].pengar);
        		}
        		
                for (t=0; t < rpvalmatris[rpvalmatris.length-1].length; t++){
        			
                    // lägger till formaga, resurs, ovrigt från subsubval till respektive +"_lista"
        			if (rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]].length >= 1){
        				rollpersonsvalobjekt[rpvalmatris[rpvalmatris.length-1][t] + "_lista"].push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]]);
        				rollpersonsvalobjekt.anteckningar.push(rollpersonsvalobjekt.subval[i][j][p][rpvalmatris[rpvalmatris.length-1][t]]);
        			
                    }
                    
                }
            
            }
            
        }
    }
    
    */
    return rollpersonsvalobjekt
}

function summerahandelser(rollperson, rollpersonsval, handelsetabellista){
   var j
   var k
   for (j=0;j < handelsetabellista.length; j++){
   				
      for (k=0;k < rollpersonsval.length; k++){
      
         rollperson[handelsetabellista[j]] += rollperson[rollpersonsval[k]][handelsetabellista[j]];
      
      }
   }
   
   return rollperson   
}




function summerarollperson(rollperson, rollpersonsvalobjekt) {
	var i
    rpvalmatris=hamta_rpvalmatris();
    
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetslista=fardighetslistaobjekt.fardighetslista;
    
	
    fardighetsgrupplista_sing=fardighetslistaobjekt.fardighetsgrupplista_sing;
    
    ovrigafardighetergrupplista_sing=fardighetslistaobjekt.ovrigafardighetergrupplista_sing;
	
	rollperson.fardighetermedtarningar=[];
	rollperson.ovrigafardighetermedtarningar=[];
	rollperson.sprakskrift=[];
	
	
	//--- behover fixas ---
	// Alla attribut satts till 0 om inget annat sags. 4 omvandlas till 1T6.
   // Vardena anger grund for folkslag och bonus for andra
   
   // rollpersonsval folkslag, bakgrund, arketyp, miljo, attributtarningar, handelsetabeller(numrerade)
   
   	i=0; // grundattribut
   	for (j=0;j < rpvalmatris[i].length; j++){
		if ([rpvalmatris[i][j]] in rollpersonsvalobjekt){
			if ("varde" in rollpersonsvalobjekt[rpvalmatris[i][j]]){
				rollperson[rpvalmatris[i][j]].varde += rollpersonsvalobjekt[rpvalmatris[i][j]].varde;
			}
		}
	}
   
   
   	for (i=1; i <= 2; i++){  // härledda attribut och värden
		for (j=0;j < rpvalmatris[i].length; j++){
   			if ([rpvalmatris[i][j]] in rollpersonsvalobjekt){
				if ("bonus" in rollpersonsvalobjekt[rpvalmatris[i][j]]){
					rollperson[rpvalmatris[i][j]].bonus += rollpersonsvalobjekt[rpvalmatris[i][j]].bonus;
   			
				}
				if ("egenskapslista" in rollpersonsvalobjekt[rpvalmatris[i][j]]){
					for (k=0;k < rollpersonsvalobjekt[rpvalmatris[i][j]].egenskapslista.length; k++){
						// lägg till element till array
						rollperson[rpvalmatris[i][j]].egenskapslista.push(rollpersonsvalobjekt[rpvalmatris[i][j]].egenskapslista[k]);
					}
				}
			
			}
			
			
            
			//---
			
        }
	}
    
    for (i=3; i < rpvalmatris.length-2; i++){  // summerbara värden
    	for (j=0;j < rpvalmatris[i].length; j++){
			if (rpvalmatris[i][j] in rollpersonsvalobjekt){
				rollperson[rpvalmatris[i][j]] += rollpersonsvalobjekt[rpvalmatris[i][j]];
			}
		}
    
    }
	
	// Färdigheter
	for (g=0;g<fardighetslista.length;g++){
		for(h=0;h<fardighetslista[g].length;h++){
		
			if (fardighetslista[g][h] in rollpersonsvalobjekt){
				if ("enheter" in rollpersonsvalobjekt[fardighetslista[g][h]]){
					rollperson[fardighetslista[g][h]].enheter += rollpersonsvalobjekt[fardighetslista[g][h]].enheter;
				}
				if ("lattlard"in rollpersonsvalobjekt[fardighetslista[g][h]]){
					rollperson[fardighetslista[g][h]].lattlard += rollpersonsvalobjekt[fardighetslista[g][h]].lattlard;
				}
			}
		
			// Om det är fler enheter än vad som behövs för 5T6 går överskottet till property extratarningar
			if ((rollperson[fardighetslista[g][h]].grundtarningar + heaviside(rollperson[fardighetslista[g][h]].lattlard) + rollperson[fardighetslista[g][h]].enheter) > 8){
			
			//if (rollperson[fardighetslista[g][h]].grundtarningar > 8)){
				if ("extraenheter" in rollperson){
					rollperson.extraenheter[fardighetsgrupplista[g] + "enheter"] += (rollperson[fardighetslista[g][h]].grundtarningar + heaviside(rollperson[fardighetslista[g][h]].lattlard) + rollperson[fardighetslista[g][h]].enheter - 8);
				}
			}
			
			// Räkna ut färdighetstärningar	
			
			
			rollperson[fardighetslista[g][h]].tarningar = raknautfardighetstarningar(rollperson[fardighetslista[g][h]].grundtarningar, heaviside(rollperson[fardighetslista[g][h]].lattlard), rollperson[fardighetslista[g][h]].enheter);
			rollperson[fardighetslista[g][h]].varde = raknautfardighetsvarde(rollperson[fardighetslista[g][h]].grundtarningar, heaviside(rollperson[fardighetslista[g][h]].lattlard), rollperson[fardighetslista[g][h]].enheter);
			
			//console.log(fardighetslista[g][h] + " " + rollperson[fardighetslista[g][h]].tarningar);
			//console.log([rollperson[fardighetslista[g][h]].grundtarningar, heaviside(rollperson[fardighetslista[g][h]].lattlard), rollperson[fardighetslista[g][h]].enheter]);
			
			if (rollperson[fardighetslista[g][h]].enheter >= 1){
				if (g<fardighetsgrupplista_sing.length-1){
					rollperson.fardighetermedtarningar.push(fardighetslista[g][h]);
				}else if (g==fardighetsgrupplista_sing.length-1){
					rollperson.sprakskrift.push(fardighetslista[g][h]);
				}else{
					rollperson.ovrigafardighetermedtarningar.push(fardighetslista[g][h]);
				}
			}
			
			
			//
		
		}
	}
	
	
    i = rpvalmatris.length-2; // pengar
    j = 0;
    if ("pengar" in rollpersonsvalobjekt){
		//console.log("pengar innan summering är: " + rollperson.pengar);
		rollperson.pengar += rollpersonsvalobjekt.pengar;
		//console.log("pengar efter summering är: " + rollperson.pengar);
		/*
		for (k=0; k < rollpersonsvalobjekt[rpvalmatris[i] + "_lista"].length; k++){
			// lägg till element till array
			
			rollperson[rpvalmatris[i][j] + "_lista"].push(rollpersonsvalobjekt[rpvalmatris[i][j] + "_lista"][k]);
		}
		*/		
	}
    i = rpvalmatris.length-1; // formaga, resurs, kontakt, ovrigt
	
	for (j=0;j < rpvalmatris[i].length; j++){
		if (rpvalmatris[i][j] + "_lista" in rollpersonsvalobjekt){
		
			for (k=0;k < rollpersonsvalobjekt[rpvalmatris[i][j] + "_lista"].length; k++){
				//--- behover fixas ---
				// lägg till element till array
				rollperson[rpvalmatris[i][j] + "_lista"].push(rollpersonsvalobjekt[rpvalmatris[i][j] + "_lista"][k]);
			}
		
		}	
	}
    
    // räkna ut härledda
    rollperson= raknautharledda(rollperson)
    
    // omvandla till tärningar
    
    for (i=0; i<=2; i++){
    	for (j=0; j < rpvalmatris[i].length; j++){
    		rollperson[rpvalmatris[i][j]].tarningar = vardetilltarningar(rollperson[rpvalmatris[i][j]].varde);
    	}
    }
	
	return rollperson
}

function raknautfardighetstarningar(grundtarningar, lattlard, enheter){
	
	lattlard=heaviside(lattlard);
	var fardighetstarningar;
	var fardighetstarningararray=[];
	fardighetstarningararray[0]="0";
	fardighetstarningararray[1]="2T6";
	fardighetstarningararray[2]="3T6";
	fardighetstarningararray[3]="3T6\+2";
	fardighetstarningararray[4]="4T6";
	fardighetstarningararray[5]="4T6\+1";
	fardighetstarningararray[6]="4T6\+2";
	fardighetstarningararray[7]="4T6\+3";
	fardighetstarningararray[8]="5T6";
	
	fardighetstarningarsumma= grundtarningar + lattlard + enheter;
	if (fardighetstarningarsumma < 0){
		fardighetstarningarsumma=0;
	}else if (fardighetstarningarsumma > 8){
		fardighetstarningarsumma=8;
	}
	fardighetstarningar=fardighetstarningararray[fardighetstarningarsumma];
	
	if (lattlard==1){
		if (grundtarningar+enheter==0){
			//Lättlärd utan enheter och utan grundtärningar ger färdighetstärningar 0
			fardighetstarningar="0";
			
		}
	}
	
	//console.log([grundtarningar, lattlard, enheter, fardighetstarningar]);
	
	return fardighetstarningar
}

function raknautfardighetsvarde(grundtarningar, lattlard,enheter){
	lattlard=heaviside(lattlard);
	var fardighetsvarde;
	var fardighetsvardearray=[];
	fardighetsvardearray[0]=0;
	fardighetsvardearray[1]=8;
	fardighetsvardearray[2]=12;
	fardighetsvardearray[3]=14;
	fardighetsvardearray[4]=16;
	fardighetsvardearray[5]=17;
	fardighetsvardearray[6]=18;
	fardighetsvardearray[7]=19;
	fardighetsvardearray[8]=20;
	
	fardighetsvardesumma= grundtarningar + lattlard + enheter;
	if (fardighetsvardesumma < 0){
		fardighetsvardesumma=0;
	}else if (fardighetsvardesumma > 8){
		fardighetsvardesumma=8;
	}
	fardighetsvarde=fardighetsvardearray[fardighetsvardesumma];
	
	if (lattlard==1){
		if (grundtarningar+enheter==0){
			//Lättlärd utan enheter och utan grundtärningar ger färdighetstärningar 0
			fardighetsvarde=0;
		}
	}
	
	return fardighetsvarde
}

function kvarhandelsetabellslag(rollperson){
// Kvarvarande händelsetabellslag
	handelsetabellista=hamta_handelsetabellista();
	for (i=0; i<handelsetabellista.length;i++){
		rollperson["kvar_" + handelsetabellista[i]]=rollperson[handelsetabellista[i]];
	}
	rollperson["kvar_valfriatabellslag"]=rollperson["valfriatabellslag"]
	return rollperson
}

function nollarollperson(rollperson) {
	var i
    rpvalmatris=hamta_rpvalmatris();
    
	fardighetsobjekt=hamta_fardighetsobjekt();
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetslista=fardighetslistaobjekt.fardighetslista;
    
	//--- behover fixas ---
	// Alla attribut satts till 0 om inget annat sags. 4 omvandlas till 1T6.
   // Vardena anger grund for folkslag och bonus for andra
   
   // rollpersonsval folkslag, bakgrund, arketyp, miljo, attributtarningar, handelsetabeller(numrerade)
   
   	i=0; // grundattribut
   	for (j=0;j < rpvalmatris[i].length; j++){
		rollperson[rpvalmatris[i][j]].varde =0;
	}
   
   
   	for (i=1; i <= 2; i++){  // härledda attribut och värden
		for (j=0;j < rpvalmatris[i].length; j++){
   			rollperson[rpvalmatris[i][j]].bonus =0;
   			
			rollperson[rpvalmatris[i][j]].egenskapslista=[];
			
        }
	}
    
    for (i=3; i < rpvalmatris.length-2; i++){  // summerbara värden
    	for (j=0;j < rpvalmatris[i].length; j++){
				rollperson[rpvalmatris[i][j]] =0;
			
		}
    }
	
	// Färdigheter
	for (g=0;g<fardighetslista.length;g++){
		for(h=0;h<fardighetslista[g].length;h++){
		
			rollperson[fardighetslista[g][h]].enheter= 0;
			rollperson[fardighetslista[g][h]].lattlard=fardighetsobjekt[fardighetslista[g][h]].lattlard;;
				
		}
	}
	
    i = rpvalmatris.length-2; // pengar
    j = 0;
	rollperson.pengar=0;
    rollperson[rpvalmatris[i][j] + "_lista"]=[];
	
    i = rpvalmatris.length-1; // formaga, resurs, kontakt, ovrigt
	
	for (j=0;j < rpvalmatris[i].length; j++){
		rollperson[rpvalmatris[i][j] + "_lista"]=[];
			
	}
    
    // räkna ut härledda
    rollperson= raknautharledda(rollperson)
    
    // omvandla till tärningar
    
    for (i=0; i<=2; i++){
    	for (j=0; j < rpvalmatris[i].length; j++){
    		rollperson[rpvalmatris[i][j]].tarningar = vardetilltarningar(rollperson[rpvalmatris[i][j]].varde);
    	}
    }
	
	// Kvarvarande händelsetabellslag
	handelsetabellista=hamta_handelsetabellista();
	for (i=0; i<handelsetabellista.length;i++){
		rollperson["kvar_" + handelsetabellista[i]]=rollperson[handelsetabellista[i]];
	}
	rollperson["kvar_valfriatabellslag"]=rollperson["valfriatabellslag"]
    return rollperson
}

    


function summerafardighetsegenskaper(rollperson) {
	// summerar enheter till alla färdigheter
    
    for (p=0;p < rollpersonsval.length; p++){

		for (i = 0; i < fardighetsgrupplista.length; i++) {
			for (j = 0; j < window[fardighetsgrupplista[i]].length; j++) {
        		this[fardighetslista[i][j]].enheter += rollperson[rollpersonsval[p]][fardighetslista[i][j]].enheter ;
            	this[fardighetslista[i][j]].lattlard += rollperson[rollpersonsval[p]][fardighetslista[i][j]].lattlard ;
			}
		}
    }
}

function raknautharledda(rollperson){
	
    rpvalmatris=hamta_rpvalmatris();
    
	// var harleddaattributlista=["forflyttning", "intryck","kroppsbyggnad", "reaktion", "sjalvkontroll", "vaksamhet"];
	// var harleddavardenlista=["grundrustning", "grundskada", "livskraft"];
	
    rollperson.forflyttning.grundvarde = Math.floor((rollperson.talighet.varde + rollperson.rorlighet.varde) / 2);
    rollperson.intryck.grundvarde = Math.floor((rollperson.visdom.varde + rollperson.utstralning.varde) / 2);
    rollperson.kroppsbyggnad.grundvarde = Math.floor((rollperson.styrka.varde + rollperson.talighet.varde) / 2);
    rollperson.reaktion.grundvarde = Math.floor((rollperson.rorlighet.varde + rollperson.uppfattning.varde) / 2);
    rollperson.sjalvkontroll.grundvarde = Math.floor((rollperson.psyke.varde + rollperson.vilja.varde) / 2);
    rollperson.vaksamhet.grundvarde = Math.floor((rollperson.psyke.varde + rollperson.uppfattning.varde) / 2);
    
    
    
    rollperson.grundrustning.grundvarde=Math.floor((rollperson.styrka.varde+rollperson.talighet.varde)/4 -4);
    if (rollperson.grundrustning.grundvarde <=0){
    	rollperson.grundrustning.grundvarde=0;
    }
    
    rollperson.livskraft.grundvarde=Math.floor((rollperson.vilja.varde+rollperson.talighet.varde)/4)+8; // +rollperson.grundrustning.grundvarde?
    if (rollperson.livskraft.grundvarde <=12){
    	rollperson.livskraft.grundvarde=12;
    }
    
    rollperson.grundskada.grundvarde=Math.floor(rollperson.styrka.varde/2)+4;
    
	rollperson.lakningstakt.grundvarde=1;
    
	rollperson.grundbelastning.grundvarde=0;
    
    // Summerar grundvärde och bonus till värde
    for (i=1; i<=2;i++){
    	for(j=0; j < rpvalmatris[i].length;j++){
        	rollperson[rpvalmatris[i][j]].varde = rollperson[rpvalmatris[i][j]].grundvarde + rollperson[rpvalmatris[i][j]].bonus;
    	}
    }
    
    
    return rollperson
    
}




function raknautallahojningssvarigheter(rollperson){

    fardighetsobjekt = hamta_fardighetsobjekt ()
	// loopar igenom alla färdigheter
	for (i=0; i < fardighetsobjekt.fardighetsgrupplista.length; i++){
		for (j=0; j < fardighetsobjekt[fardighetsobjekt.fardighetsgrupplista[i]].length; j++){
		
			fardighet = fardighetsobjekt[fardighetsobjekt.fardighetsgrupplista[i]][j];	// fardighet ska här vara en sträng
			rollperson = raknauthojningssvarighet(rollperson,fardighet)
		}
	}
	
    return rollperson
}


function raknauthojningssvarighet(rollperson, fardighet){
	// fardighet ska vara en sträng
    rollperson[fardighet].hojningssvarighet = (rollperson[fardighet].varde-6)*2;
    
    if (rollperson[fardighet].lattlard == -1){
    	// svårlärd höjer svårighet med 4
        rollperson[fardighet].hojningssvarighet +=4;
    }else{
    	// lättlärd sänker svårigheten med 2
    	rollperson[fardighet].hojningssvarighet -= (2 * rollperson[fardighet].lattlard) ;
		
        // lägre färdighet än styrande attribut sänker svårighet med 2
        if (rollperson[fardighet].varde < rollperson[fardighet].styrandeattributvarde){
        	rollperson[fardighet].hojningssvarighet -= 2;
        }
    }
    return rollperson
}

function extraenheter(rollperson){
	
    rpvalmatris=hamta_rpvalmatris();
    
    fardighetsobjekt=clone(hamta_fardighetsobjekt());
    fardighetslistaobjekt=clone(hamta_fardighetslistaobjekt());
    
	var fardighetslista=fardighetslistaobjekt.fardighetslista;
    var fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	var avtrubbningskategorier=["utsatthet","vald","overnaturligt"];
    
    
	
	// beräknar extra enheter från dubbelt lättlärd eller mer än fem avtrubbningskryss i en kategori
	// var fardighetsgrupplista = ["kunskapsfardigheter", "mystikfardigheter", "rorelsefardigheter", "sociala_fardigheter", "stridsfardigheter", "vildmarksfardigheter", "sprakfardigheter", "expertisfardigheter", "hantverksfardigheter", "kanneteckensfardigheter"];

	for (i = 0; i < 6; i++) {
	// räkna ut duplikat av lättlärd alla
    	if (rollperson["lattlardalla" + fardighetsgrupplista[i]] > 1){
        	// fem extra enheter inom kategorin för varje duplikat av lättlärd av alla inom kategorin
        	rollperson["extraenheter"][fardighetsgrupplista[i] + "enheter"] += 5 * (rollperson["lattlardalla" + fardighetsgrupplista[i]] - 1) 
        	rollperson["lattlardalla" + fardighetsgrupplista[i]]=1;
            
            // omvandlar lattlardalla så att alla färdigheter i kategorin blir lättlärda
            for (j = 0; j < window[fardighetsgrupplista[i]].length; j++) {
            	rollperson[fardighetslista[i][j]].lattlard +=1;
            }
            
        }
        // om rollpersonen är lättlärd i alla färdigheter i en kategori och dessutom 
        // lättlärd i valfria eller specifika färdigheter inom kategorin 
        // omvandlas dessa till enheter inom kategorin
        
        if (rollperson["lattlardalla" + fardighetsgrupplista[i]] >= 1){
        	
    		if (rollperson["lattlard" + fardighetsgrupplista[i]] >= 1){
        		rollperson["extraenheter"][fardighetsgrupplista[i] + "enheter"] += (rollperson["lattlard" + fardighetsgrupplista[i]]);
        		// nollar extraenheterna så att dessa ej tas i beaktan vid val av lättlärda färdigheter
                rollperson["lattlard" + fardighetsgrupplista[i]]=0;
            }
        }
		for (j = 0; j < fardighetslista[i].length; j++) {
        	// ger en extra enhet i kategorin per lättlärd färdighet
            if(rollperson[fardighetslista[i][j]].lattlard > 1){
        		rollperson["extraenheter"][fardighetsgrupplista[i] + "enheter"] += (rollperson[fardighetslista[i][j]].lattlard-1);
            	rollperson[fardighetslista[i][j]].lattlard=1;
            }
        }
        
        // kolla om det finns fler lättlärda inom en kategori än antalet färdigheter
    	// händer extremt sällan, men bra för att undvika att det hänger sig vid utplacering av valfria lättlärda
    
        if (this["lattlardalla" + fardighetsgrupplista[i]] ==0){
        	antalneutrala=0;
        	for (j = 0; j < window[fardighetsgrupplista[i]].length; j++) {
        		if (rollperson[fardighetslista[i][j]].lattlard == 0){
            		antalneutrala++;
            	}
        	}
        	if (rollperson["lattlard" + fardighetsgrupplista[i]] >= antalneutrala){
        		// finns fler eller lika valfria lättlärda inom kategorin som det finns neutrala färdigheter
                // lägger till överskottet som extra enheter inom kategorin
        		rollperson["extraenheter"][fardighetsgrupplista[i] + "enheter"] += (rollperson["lattlard" + fardighetsgrupplista[i]] - antalneutrala);
            	
                // Letar upp alla neutrala och gör dessa till lättlärda
                for (j = 0; j < window[fardighetsgrupplista[i]].length; j++){
            		if(rollperson[fardighetslista[i][j]].lattlard == 0){
                    	rollperson[fardighetslista[i][j]].lattlard == 1;
                    }
                }
            }
        }
    }
    
    // extra enheter från avtrubbning
    
    i=0 // utsatthet
    if (rollperson["avtrubbning" + avtrubbningskategorier[i]]>5){
    	// extra sociala enheter
        rollperson["extraenheter"][fardighetsgrupplista[3] + "enheter"] += this["avtrubbning" + avtrubbningskategorier[i]] - 5;
    	rollperson["avtrubbning" + avtrubbningskategorier[i]] = 5;
    }
    
    i=1 // vald
    if (this["avtrubbning" + avtrubbningskategorier[i]]>5){
		// extra stridsenheter
        rollperson["extraenheter"][fardighetsgrupplista[4] + "enheter"] += this["avtrubbning" + avtrubbningskategorier[i]] - 5;
		rollperson["avtrubbning" + avtrubbningskategorier[i]] = 5;    
    }
    
    i=2 // overnaturligt
    if (rollperson["avtrubbning" + avtrubbningskategorier[i]]>5){
    	// extra mystikenheter
        rollperson["extraenheter"][fardighetsgrupplista[1] + "enheter"] += this["avtrubbning" + avtrubbningskategorier[i]] - 5;
    	rollperson["avtrubbning" + avtrubbningskategorier[i]] = 5;
    }
    
    
    if (rollperson["avtrubbning" + avtrubbningskategorier[0]] + rollperson["avtrubbning" + avtrubbningskategorier[1]] + this["avtrubbning" + avtrubbningskategorier[2]] + this.avtrubbningvalfria >= 15){
    	// om summan av antalet avtrubbningskryss är femton får alla kategorier 5. Är den mer än så blir överskottet till valfria enheter.
        
        rollperson.extraenheter.valfriaenheter += (rollperson["avtrubbning" + avtrubbningskategorier[0]] + rollperson["avtrubbning" + avtrubbningskategorier[1]] + this["avtrubbning" + avtrubbningskategorier[2]] + this.avtrubbningvalfria - 15);
        rollperson["avtrubbning" + avtrubbningskategorier[0]] = 5;
        rollperson["avtrubbning" + avtrubbningskategorier[1]] = 5;
        rollperson["avtrubbning" + avtrubbningskategorier[2]] = 5;
    
    		
    }    
    
     
    // summera expertis, hantverk, kännetecken
   	for (i = 7; i <= 9; i++) {
   		for (j = 0; j < fardighetslista[i].length; j++) {
        	if (rollperson[fardighetslista[i][j]].enheter > 7) {
            	// om antalet enheter för en övrig färdighet är mer än 7 (vilket motsvarar 5T6)
                // omvandlas överskottet till valfria enheter, och antalet enheter för färdigheten sätts till 7
                rollperson.extraenheter.valfriaenheter += (rollperson[fardighetslista[i][j]].enheter - 7);
                rollperson[fardighetslista[i][j]].enheter = 7;
            }
        }
    }
   
   	// summera enheter till specifik färdighet (sällsynt)
    
    //for (i = 0; i < 6; i++) {
    //	for (j = 0; j < window[fardighetsgrupplista[i]].length; j++) {
    //		if (rollperson[fardighetslista[i][j]].lattlard + rollperson[fardighetslista[i][j]].enheter + window[fardighetslista){
    //    	}
    //	}
    //}
    
    // summera alla extraenheter till rollpersonens properties
    for (i = 0; i < 6; i++) {
    	rollperson[fardighetsgrupplista[i] + "enheter"] += rollperson.extraenheter[fardighetsgrupplista[i] + "enheter"];
    }
    
    rollperson.valfriaenheter += rollperson.extraenheter.valfriaenheter;
    
    return rollperson
    

}


