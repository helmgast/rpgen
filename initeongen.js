function initeongen(){
	temprp={};
	//temprp.farderaventyr=0;
	slump=1;
	
	miljoobjekt=hamta_miljolistor();
	arketypobjekt=hamta_arketyplistor();
	sallskapobjekt=hamta_sallskaplistor();
	bakgrundstabeller=hamta_bakgrundstabeller();
	folkslagobjekt=hamta_folkslaglistor();
	handelsetabeller=hamta_handelsetabeller();
	ovrigafardighetertabeller=hamta_ovrigafardighetertabeller();
	fardighetsobjekt= hamta_fardighetsobjekt();
	attributobjekt=hamta_attributobjekt();
	ovrigafardigheterarray=[];
	
	
	infotext=hamta_infotext();
	
	
	grundattributlista=attributobjekt.grundattributlista;
	extratarningar={};
	for (i=0; i<grundattributlista.length;i++){
		extratarningar[grundattributlista[i]]=0;
	}
	kvarvarandetarningar=10;

	
	rollperson=new rpval();
	
	
	
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
	
	rollperson.arketypsallskapsval=0;
	rollperson.miljosallskapsval=0;
	
	
	aktivtrpvalobjekt=arketypobjekt.krigare;
	aktivtfolkslagobjekt=folkslagobjekt[folkslagobjekt.lista[0]];
	aktivtsallskapobjekt=sallskapobjekt[sallskapobjekt.lista[0]];
	aktivtarketypobjekt=arketypobjekt[arketypobjekt.lista[0]];
	aktivtmiljoobjekt=miljoobjekt[miljoobjekt.lista[0]];
	aktiv_bakgrundstabell=bakgrundstabeller[bakgrundstabeller.lista[0]];
	aktiv_handelsetabell=handelsetabeller[handelsetabeller.lista[0]];
	aktiv_fardighetstabell=ovrigafardighetertabeller[ovrigafardighetertabeller.lista[0]];
	
	aktiv_ovrigafardigheterkategori="expertis";
	
	aktiv_fardighetslista={};
	aktiv_fardighetslista.expertis=[];
	aktiv_fardighetslista.hantverk=[];
	aktiv_fardighetslista.kannetecken=[];
	
	aktiv_fardighet="simma";
	aktiv_kategori="kunskapsfardigheter";
	
	hantverkattributbonuslista=[];
	
	aktivthandelsetabellslag={};
	skrivbakgrunderkategorier();
	skrivbakgrunder([0,0]);
	
	skrivvanstersammanfattning();
	uppdateravanstersammanfattning();
	skrivhogerkategorityper();
}	