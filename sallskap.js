function hamta_sallskaplistor (){
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

	
	// Loopa igenom alla foremal, kontakt osv som finns och lägg till properties foremalbas, kontaktbas osv. (samma process på folkslag och miljö)
	// Lägg till beskrivningvald
	
	var i;
	var j;
	var k;
	var s;
	var t;
	
	var sallskaplista = ["arvornshammare", "fexiororden"];
	
   
	
    var sallskapobjekt={};
    
	var arvornshammare = {};
	arvornshammare.subval = [[[]]];
	arvornshammare.vald = 0;
	sallskapobjekt.arvornshammare=arvornshammare;
	arvornshammare.rubrik="Arvorns hammare";
	arvornshammare.namn="arvornshammare";
	
	arvornshammare.beskrivning="Arvorns hammare är en jargisk riddarorden som har till uppgift att jaga häxor, demondyrkare, avgudadyrkare och kättare. De infångas för omvändelse och – oftast – tortyr eller avrättning. Arvorns hammare är, liksom alla andra jargiska riddarordnar, trogna Daak och kyrkan. Orden har sitt huvudsäte i Tibara, men finns utspridd i hela kejsardömet. I Daval har den en borg i anslutning till Jehorius citadell (inkvisitionens högkvarter) då orden har ett nära samarbete med inkvisitionen – orden fungerar i princip som inkvisitionens militära gren. Ledaren för orden är Honestus Avolunius Terbari av Tibara som själv flera gånger anklagats för trolldom men aldrig fällts. Viss fiendskap finns därför mellan orden och inkvisitionen på högsta nivå. Samarbetet fungerar bättre på regional nivå, mellan kyrkans precepter och ordens dominus. En medlem av Arvorns hammare rider oftast ensam, men kan vara åtföljd av ett antal väpnare eller ofrälse. ";
	
	arvornshammare.subval[0][0][0] = {};
	arvornshammare.subval[0][0][0].valdasub = [];
	arvornshammare.subval[0][0][0].vald = 0;
	arvornshammare.subval[0][0][0].utbredning = "Arvorns hammare har sitt säte i Tibara men äger mindre kapitelhus runt hela Kejsardömet – inklusive i kolonierna."; 
	arvornshammare.subval[0][0][0].antagningskrav = "Den sökande måste vara svuren till Daak.";
	arvornshammare.subval[0][0][0].forpliktelser = "Att söka syndaförlåtelse för sina profana synder och att göra bot för sina dödssynder (se sida 212 i Grundboken).";
	arvornshammare.subval[0][0][0].tabun = "Daakkyrkans sju blasfemiska synder (se sida 212 i Grundboken).";
	arvornshammare.subval[0][0][0].vannerfiender="Som nämnts har orden ett gott samarbete med inkvisitionen och är även uppskattad för sin slagkraft av armén. Ordo Oraculum är fientligt inställda till Arvorns Hammare sedan den senare försökt dräpa Ordo Oraculums vördade orakel i staden Salan. Självklart hyser alla magiutövare och icke daaktrogna stark fruktan och avsky mot Arvorns hammares medlemmar.";
	arvornshammare.subval[0][0][0].fardigheterstridskonster="Ceremoni, Jargisk skrift, Kanalisera, Klubba, Lagkunskap, Ockultism, Rida, Teologi, Expertiser: Härledare (kavalleri), Stridskonst: Daaks arm.";
	arvornshammare.subval[0][0][0].symboler="Alla riddare inom orden har vit mantel och vapenrock, båda med ett svart Daakkors. Väpnare har svart- och vitrandig vapenrock och sergeanterna har spetsrutiga vapenrockar i svart och vitt. Vapenskölden är delad, silver och svart, med en hammare i kontrafärg.";

	arvornshammare.subval.push([[]]);
	arvornshammare.subval[1][0][0]  = {};
	arvornshammare.subval[1][0][0].valdasub = [];
	arvornshammare.subval[1][0][0].vald = 0;
	arvornshammare.subval[1][0][0].antalsubval=1;


	arvornshammare.subval[1].push([]);
	arvornshammare.subval[1][1][0] = {};
	arvornshammare.subval[1][1][0].valdasub = [];
	arvornshammare.subval[1][1][0].vald = 0;
	arvornshammare.subval[1][1][0].avtrubbningvald=1;
	arvornshammare.subval[1][1][0].beskrivning="Ett avtrubbningskryss för övernaturligt"
	arvornshammare.subval[1][1][0].rubrik="Avtrubbning"

	arvornshammare.subval[1].push([]);
	arvornshammare.subval[1][2][0] = {};
	arvornshammare.subval[1][2][0].valdasub = [];
	arvornshammare.subval[1][2][0].vald = 0;
	arvornshammare.subval[1][2][0].rubrik="Stridshäst";	
	arvornshammare.subval[1][2][0].beskrivning="En stridshäst med +1T6 i Förflyttning.";
	arvornshammare.subval[1][2][0].resurs="En stridshäst med +1T6 i Förflyttning.";
	
	arvornshammare.subval[1].push([]);
	arvornshammare.subval[1][3][0] = {};
	arvornshammare.subval[1][3][0].valdasub = [];
	arvornshammare.subval[1][3][0].vald = 0;
	arvornshammare.subval[1][3][0].beskrivning="Ett svärd med +1 på sin huvudskada.";
	arvornshammare.subval[1][3][0].rubrik="Svärd";
	arvornshammare.subval[1][3][0].vapen="Ett svärd med +1 på sin huvudskada.";

	var fexiororden = {};
	fexiororden.subval = [[[]]];
	fexiororden.vald = 0;
	sallskapobjekt.fexiororden=fexiororden;
	fexiororden.rubrik="Fexiororden";
	fexiororden.namn="fexiororden";
	
	fexiororden.beskrivning="Fexiororden är ett ridande elitförband troget Daak i Jargiska kejsardömet. Namnet härstammar från jargisk religiös mytologi, där Fexior är Daaks lejon och jaktkamrat. Tillsammans med lätta lansar bär ordensriddarna ofta stridsgissel med något mindre sidovapen och lätt rustning. De tar ofta uppgifter som spanare och jägare men är också mycket fruktade i strid. Eftersom den jargiska armén till största delen förlitar sig på infanteri är Fexiorordens lätta rytteri en välkommen förstärkning. Orden används för beriden spaning och verkar då i mindre enheter med omkring ett dussin kavallerister. I en mer offensiv roll används större skvadroner (cirka 200 ryttare) för att kringränna motståndaren och anfalla dess flanker eller rygg. Upprepade kavallerianfall mot ryggen och/eller flankerna kan lätt få mindre disciplinerade styrkor att bryta samman. Fexiororden har inte lika hög status som en del andra ordnar och i dess led finner man i huvudsak lågadliga riddare. Denna inofficiellt underlägsna position sporrar riddarna till att alltid göra sitt yttersta för att lösa sin uppgift, må det vara spaning, furagering eller direkt strid. Deras höga ambition och kämpavilja har skänkt dem mycket respekt från vanliga soldater och officerare inom armén. Ledaren för Fexiororden är Precept Leon Donato.";
	
	fexiororden.subval[0][0][0] = {};
	fexiororden.subval[0][0][0].valdasub = [];
	fexiororden.subval[0][0][0].vald = 0;
	fexiororden.subval[0][0][0].utbredning = "Fexiororden har sitt säte i Tibara, men har även kapitelhus i Daval, Chan och Davos. Ordens högkvarter finns i anslutning till Fexiorbasilikan i Tibara, men kapitelhuset i Daval är större. Ordens medlemmar kan också återfinnas på flera andra platser då skvadroner understödjer arméns operationer."; 
	fexiororden.subval[0][0][0].antagningskrav = "Den sökande måste vara svuren till Daak.";
	fexiororden.subval[0][0][0].forpliktelser = "Att söka syndaförlåtelse för sina profana synder och att göra bot för sina dödssynder (se sida 212 i Grundboken).";
	fexiororden.subval[0][0][0].tabun = "Daakkyrkans sju blasfemiska synder (se sida 212 i Grundboken).";
	fexiororden.subval[0][0][0].vannerfiender="Fexiororden har framför allt goda relationer med den jargiska armén. Däremot ses orden som något simpel av övriga tempelordnar, just på grund av deras starka band till armén. Denna något nedlåtande syn gör att ordens medlemmar ofta känner en revanschlystnad mot mer ansedda ordnars medlemmar som Arvorns hammare eller Uthars tempelorden. Denna revanschlystnad respektive nedlåtenhet kan ibland få saker att gå lite överstyr...";
	fexiororden.subval[0][0][0].fardigheterstridskonster="Jargisk skrift, Krigföring, Rida, Speja, Vildmarksvana, Expertiser: Härledare (kavalleri), Stridskonst: Daaks arm";
	fexiororden.subval[0][0][0].symboler="Fexiorordens mantlar och vapenrockar är vita med ett rött daakkors. Princeptor och högre har dessutom en röd clamos (kort mantel) ovanpå den vita manteln. Skölden är ginstyckad, silver och röd; nere till höger ett svart Daakkors, uppe till vänster Fexior stegrande i guld.";

	fexiororden.subval.push([[]]);
	fexiororden.subval[1][0][0]  = {};
	fexiororden.subval[1][0][0].valdasub = [];
	fexiororden.subval[1][0][0].vald = 0;
	fexiororden.subval[1][0][0].antalsubval=1;
	

	
	fexiororden.subval[1].push([]);
	fexiororden.subval[1][1][0] = {};
	fexiororden.subval[1][1][0].valdasub = [];
	fexiororden.subval[1][1][0].vald = 0;
	fexiororden.subval[1][1][0].rustning="En mästersmidd lätt rustning med +1 på alla pansarvärden (max belastning 16)";
	fexiororden.subval[1][1][0].beskrivning="En mästersmidd lätt rustning med +1 på alla pansarvärden (max belastning 16)."
	fexiororden.subval[1][1][0].rubrik="Mästersmidd rustning"

	fexiororden.subval[1].push([]);
	fexiororden.subval[1][2][0] = {};
	fexiororden.subval[1][2][0].valdasub = [];
	fexiororden.subval[1][2][0].vald = 0;
	fexiororden.subval[1][2][0].rubrik="Lättlärd";	
	fexiororden.subval[1][2][0].beskrivning="Lättlärd i valfri vildmarksfardighet";
	fexiororden.subval[1][2][0].lattlardvildmarksfardigheter=1;
	
	fexiororden.subval[1].push([]);
	fexiororden.subval[1][3][0] = {};
	fexiororden.subval[1][3][0].valdasub = [];
	fexiororden.subval[1][3][0].vald = 0;
	fexiororden.subval[1][3][0].rubrik="Stridshäst";	
	fexiororden.subval[1][3][0].beskrivning="En stridshäst med +1T6 i Förflyttning.";
	fexiororden.subval[1][3][0].resurs="En stridshäst med +1T6 i Förflyttning.";

	

	var sallskapobjektlista=[];
	
	rpvalmatris=hamta_rpvalmatris();
	ovrigaprop=rpvalmatris[rpvalmatris.length-1];
	replaceprop=["beskrivningvald", "beskrivninghakvald"];
	
	for (s=0; s < replaceprop.length; s++){
		ovrigaprop.push(replaceprop[s]);
	}
	
    
    for (t = 0; t < sallskaplista.length; t++){
    	
		for (i=0; i< sallskapobjekt[sallskaplista[t]].subval.length;i++){
			for (j=0; j< sallskapobjekt[sallskaplista[t]].subval[i].length;j++){
				for (k=0; k< sallskapobjekt[sallskaplista[t]].subval[i][j].length;k++){
				}
			}
		}
		
		sallskapobjektlista.push(this[sallskaplista[t]]);
		
		
    }
    
    sallskapobjektlista[0]=arvornshammare;
    sallskapobjektlista[1]=fexiororden;;
 	
    
    
	// förmodligen battre med lista av objekt, därav kommentering
	
    
	
    sallskapobjekt.lista = sallskaplista;
    for (t = 0; t < sallskapobjekt.lista.length; t++){
    	
    //    sallskapobjekt[sallskaplista[i]] = this[sallskaplista[i]];
		sallskapobjekt[sallskaplista[t]].typ="sallskap";
		sallskapobjekt[sallskaplista[t]].aktiverad=0;
		sallskapobjekt[sallskaplista[t]].sallskapsval=0;
		// Sätter beskrivningvaldbas till beskrivning om den förra saknas
		for (i=0;i<sallskapobjekt[sallskaplista[t]].subval.length;i++){
			for (j=0;j<sallskapobjekt[sallskaplista[t]].subval[i].length;j++){
				for (k=0;k<sallskapobjekt[sallskaplista[t]].subval[i][j].length;k++){
					sallskapobjekt[sallskaplista[t]].subval[i][j][k].sallskap=1;
					if ("beskrivningvaldbas" in sallskapobjekt[sallskaplista[t]].subval[i][j][k]){
					}else{
						if ("beskrivning" in sallskapobjekt[sallskaplista[t]].subval[i][j][k]){
							sallskapobjekt[sallskaplista[t]].subval[i][j][k].beskrivningvaldbas=sallskapobjekt[sallskaplista[t]].subval[i][j][k].beskrivning;
						}
						
					}
				}	
			}		
		}
    }
    
    
    
    
    
    //window.alert(sallskapobjekt.lista[1])

    // return [sallskaplista, sallskapobjektlista];
    
    
    return sallskapobjekt
    
}