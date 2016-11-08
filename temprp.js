



var rollpersonsval = ["folkslag", "bakgrund", "arketyp", "miljo"];


// Hämta variabler och objekt
rpvalmatris = hamta_rpvalmatris();
attributlista=rpvalmatris[0];

var fardighetsgrupplista = [];
var fardighetslista = [[]];
var fardighetsobjektlista = [[]];



// [fardighetsgrupplista, fardighetslista, fardighetsobjekt] = hamta_fardighetslistor ();
fardighetslistaobjekt=clone(hamta_fardighetslistaobjekt());

fardighetsobjekt=clone(hamta_fardighetsobjekt());

var arketyplista = [];
var arketypobjektlista = [];
var miljolista = [];
var miljoobjektlista = [];
var folkslaglista = [];
var folkslagobjektlista = [];




// [arketyplista, arketypobjektlista]=hamta_arketyplistor();
// [miljolista, miljoobjektlista] = hamta_miljolistor();
// [folkslaglista, folkslagobjektlista] = hamta_folkslaglistor();

arketypobjekt = clone(hamta_arketyplistor());
folkslagobjekt = clone(hamta_folkslaglistor());
miljoobjekt = clone(hamta_miljolistor());


handelsetabeller = clone(hamta_handelsetabeller());
bakgrundstabeller = clone(hamta_bakgrundstabeller());




// Hämta händelsetabeller
// Hämta bakgrundstabeller
// Hämta övriga färdigheter-tabeller

/*test_pengarslag="11T6x45p99";
test_pengarresultat=slatarningar(test_pengarslag)
window.alert(test_pengarresultat)
*/
slump=1;

temprpindata=new rpval();
temprp=rollpersonsmall(temprpindata);

temprp=valj_bakgrund(temprp, slump);
temprp=summerarollperson(temprp, temprp.bakgrund");

temprp=valj_folkslag(temprp, folkslagobjekt, slump);	
temprp=summerarollperson(temprp, temprp.folkslag);

temprp=fordelaattributtarningar(temprp, slump);
temprp=summerarollperson(temprp, temprp.attributtarningar);

temprp=valj_arketyp(temprp, arketypobjekt, slump);	
temprp=summerarollperson(temprp, temprp.arketyp);

temprp=valj_miljo(temprp, miljoobjekt, slump);		
temprp=summerarollperson(temprp, temprp.miljo);

temprp = handelsetabellslag(temprp,slump);


for (i_sumhand=0; i_sumhand < temprp.tabellslagresultat.length; i_sumhand++){
	temprp = summerarollperson(temprp, temprp["handelsetabellslag_" + i_sumhand.toString()]);
}


// temprp=summerahandelser(temprp, rollpersonsval, handelsetabellista);

// summera handelsetabeller
// sla handelsetabellslag

// summera övriga färdigheter
// slå övriga färdigheter-slag

// extraenheter från dubbla lättlärda etc


temprplist=[temprp.bakgrund.rubrik + "\n" + temprp.folkslag.rubrik + "\n" + temprp.arketyp.rubrik + "\n" + temprp.miljo.rubrik];



//window.alert(temprplist)



alertanteckning=hamta_alertanteckning(temprp);

handelsetabeller=clone(hamta_handelsetabeller());


window.alert(alertanteckning)

alertanteckning_arketyp=hamta_alertanteckning_rpval(temprp, "arketyp");
alertanteckning_arketyp_list=alertanteckning_arketyp[1];

alertanteckning_arketyp_list_vald=alertanteckning_arketyp[2];
//window.alert(alertanteckning_arketyp_list)	

//window.alert(alertanteckning_arketyp_list_vald)	




/*
var person = prompt(alertanteckning, "Harry Potter");
if (person != null) {
    window.alert("Hello " + person + "! How are you today?");
}
*/


//window.alert([temprp.folkslag.subval[0][1][0].marsch.lattlard,temprp.folkslag.marsch.lattlard, temprp.marsch.lattlard]) ;
//window.alert([temprp.folkslag.subval[0][1][0].simma.lattlard,temprp.folkslag.simma.lattlard, temprp.simma.lattlard]) ;

//window.alert(alertanteckning2)
//window.alert(alertanteckning3)
// window.alert(alertanteckning4)

// window.alert([temprp.handelsetabellslag_0.rubrik, temprp.handelsetabellslag_1.rubrik, temprp.handelsetabellslag_2.rubrik]);


// var anteckningar_print="";


/*
for (i=0; i < temprp.arketyp.anteckningar.length; i++){
	anteckningar_print += temprp.arketyp.anteckningar[i];
    anteckningar_print += "\n";
}
*/
/*
temprp.farderaventyr=4;

temprp = handelsetabellslag(temprp,slump);


for (i_sumhand=0; i_sumhand < temprp.tabellslagresultat.length; i_sumhand++){
	temprp = summerarollperson(temprp, "handelsetabellslag_" + i_sumhand.toString());
}
alertanteckning=hamta_alertanteckning(temprp);
window.alert(alertanteckning)
window.alert([temprp.handelsetabellslag_0.rubrik, temprp.handelsetabellslag_1.rubrik, temprp.handelsetabellslag_2.rubrik])

*/