function clone(obj) {
	// exempelsyntax: var krigare2 = clone(krigare);

    if(obj == null || typeof(obj) != 'object'){
        return obj;    
	}
    var temp = new obj.constructor(); 
    for(var key in obj){
        temp[key] = clone(obj[key]);    
    }
	return temp;
}

function listindex(lista, elementnamn){
	var i;
	for(i = 0; i < lista.length; i++){
		if(lista[i] === elementnamn){
			return i;
		}
	}

	i=-1;
	return i; 
}



function nummerlista(nummer){
	
	var listan = [];
	for (var i = 0; i <= nummer; i++) {
		listan.push(i);
	}

	// returnerar en lista från 0 till nummer, exempelvis [0, 1, 2, 3] för nummer = 3
	return listan
}

function slumpa(antal){
	
    // returnerar ett slumpat heltal mellan 1 och antal
	return Math.floor((Math.random() * antal) + 1);     
}

function slumpaflera(antalval, antalmojligheter){
	// funktion för att valja flera val ur en lista med valmöjligheter 
    
    templista=[0];
    vallista=[0];
    
    for (k=1;k<=antalmojligheter;k++){
    	templista.push(k);
    }
    
    if (antalval>antalmojligheter){
    	// error warning
    }
    
    
    for (m=1;m <= antalval;m++){
    	slumptal=slumpa(templista.length-1);
        vallista.push(templista[slumptal]);
        templista.splice(slumptal,1);
    	//window.alert(slumptal + " " + vallista + " " + templista);
        
        
    }
    
    return vallista
}


function slumpaordning(inputarray){
	// slumpar ordning på elementen i en array
    
    ordning=slumpaflera(inputarray.length, inputarray.length);
    outputarray=[];
    for (k=1;k <= inputarray.length; k++){
    	outputarray.push(inputarray[ordning[k]-1]);
    
    }
    return outputarray
}

function inledandeversal(inputstring){
	if (typeof inputstring==='string'){

		outputstring = inputstring.charAt(0).toUpperCase() + inputstring.slice(1);
		//--- behöver fixas ---//
	}else{
		outputstring=inputstring;
	}
	return outputstring
}



function vardetilltarningar(varde){
	//--- omvandla värde till tärningstextsträng	
	if (varde <= 4){
    	tarningar="1T6";
    }else{
    	antalt6=Math.floor(varde/4);
        t6bonus=varde%4;
        tarningar=antalt6.toString() + "T6";
        if(t6bonus > 0 ){
        
        	tarningar += "\+" + t6bonus.toString();
        }
    
    }
    
    return tarningar
}






function flyttauppett(inputvektor, elementnummer){
	
	steg = -1;
	outputvektor= flyttaordningett(inputvektor, elementnummer, steg);
	
	return outputvektor
}
function flyttanedett(inputvektor, elementnummer){
	steg = 1;
	outputvektor= flyttaordningett(inputvektor, elementnummer, steg);
	
	return outputvektor
}


function flyttaordningett(inputvektor, elementnummer, steg){
	var i;
	// steg -1: flytta upp i prio, dvs lägre index
	// steg +1: flytta ned i prio, dvs högre index
	
	console.log("flyttaordningett körs, steglängd: " + steg);
	outputvektor=[];
	for (i=0;i<inputvektor.length;i++){
		outputvektor[i]=inputvektor[i];
	}

	
	if (elementnummer >= 0 && elementnummer < inputvektor.length){
		if (elementnummer+steg >= 0 && elementnummer+steg < inputvektor.length){
			outputvektor[elementnummer]= inputvektor[elementnummer+steg];
			outputvektor[elementnummer+steg]=inputvektor[elementnummer];
		
		}else{
			// Funktionen är endast anpassad för steglängd 1 
		}
	}else{
	}
	
	return outputvektor
}

function flyttatilltoppen(inputvektor, elementnummer){
	
	var i;
	
	console.log("Flytta till toppen, grundfunktion körs, inputvektor är: " + inputvektor );
	console.log("elementnummer är: " + elementnummer);
	outputvektor =[];
	
	outputvektor[0]=inputvektor[elementnummer];
	
	for (i=1; i <= elementnummer;i++){
		outputvektor[i]=inputvektor[i-1];
	}
	/*
	console.log("inputvektor mellan två forloopar är:" + inputvektor);
	
	console.log("outputvektor mellan två forloopar är:" + outputvektor);
	*/
	for (i=elementnummer+1; i < inputvektor.length; i++){
		outputvektor[i] = inputvektor[i];
	}
	/*
	console.log("inputvektor efter två forloopar är:" + inputvektor);
	
	console.log("outputvektor efter två forloopar är:" + outputvektor);
	*/
	
	return outputvektor
}

function flyttatillbotten(inputvektor, elementnummer){
	var i;
	console.log("Flytta till botten, grundfunktion körs, inputvektor är: " + inputvektor );
	console.log("elementnummer är: " + elementnummer);
	
	
	outputvektor =[];
	
	outputvektor[inputvektor.length-1]=inputvektor[elementnummer];
	
	for (i=0; i <= elementnummer-1;i++){
		outputvektor[i] = inputvektor[i];
	}
	console.log("inputvektor mellan två forloopar är:" + inputvektor);
	
	console.log("outputvektor mellan två forloopar är:" + outputvektor);
	
	for (i=elementnummer; i < inputvektor.length-1; i++){
		
		outputvektor[i]=inputvektor[i+1];
	}
	console.log("inputvektor efter två forloopar är:" + inputvektor);
	
	console.log("outputvektor efter två forloopar är:" + outputvektor);
	
	
	return outputvektor
}

function slatarningar(tarningsslag){
	// formatet ska vara en sträng AT6xBpC, där B och C kan utelämnas
	
	if (tarningsslag.search("T") == 1){
		antaltarningar=Number(tarningsslag[0]);
	}else if (tarningsslag.search("T") > 1){
		antaltarningar=Number(tarningsslag.slice(0,tarningsslag.search("T")));
	}else{
		antaltarningar=0;
	}
	
	if (tarningsslag.search("x") >= 3){
		
		if (tarningsslag.search("p") >= 5){
			// AT6xBpC
			faktor=Number(tarningsslag.slice(tarningsslag.search("x")+1,tarningsslag.search("p")));
			
			bonus=Number(tarningsslag.slice(tarningsslag.search("p")+1,tarningsslag.length));
		
		}else{
			// AT6xB
			faktor=Number(tarningsslag.slice(tarningsslag.search("x")+1,tarningsslag.length));
		
			
			bonus=0;
		}
	
	}else{
		faktor=1;
		
		if (tarningsslag.search("p") >= 3){
			// AT6pC
			bonus=Number(tarningsslag.slice(tarningsslag.search("p")+1,tarningsslag.length));
		
		}else{
			// AT6
			bonus=0;
		}
	}
	
	//window.alert([antaltarningar, faktor, bonus]);
	
	if (antaltarningar>0){
	
		resultat=obt6(antaltarningar)*faktor+bonus;
	}else{
		resultat=Number(tarningsslag);
	}	
	
	return resultat
}

function obt6(antaltarningar){
	
	summa=0;
	slagvektor=Array.apply(null, new Array(antaltarningar)).map(Number.prototype.valueOf,0);;
	tarningnummer=0
	
	while (tarningnummer<slagvektor.length){
		slagvektor[tarningnummer]=slumpa(6);
		if (slagvektor[tarningnummer]==6){
			slagvektor.push(0);
			slagvektor.push(0);
		}else{
			summa += slagvektor[tarningnummer];
		}
		tarningnummer +=1;
	}
	
	return summa;
}

function signum(inputvarde){
	if (inputvarde < 0){
		outputvarde=-1;
	}else if (inputvarde==0){
		outputvarde=0;
	}else if (inputvarde>0){
		outputvarde=1;
	}
	return outputvarde
}


function heaviside(inputvarde){
	
	if (inputvarde < 0){
		outputvarde=0;
	}else if (inputvarde==0){
		outputvarde=0;
	}else if (inputvarde>0){
		outputvarde=1;
	}
	return outputvarde
}