//TODO:
// Dela upp i hamta_fardighetslistaobjekt och hamta_fardighetsobjekt


function hamta_attributobjekt(){
	
    var i;
    
    attributobjekt={};
    
    var grundattributlista=[];
	grundattributlista[0]="styrka";
	grundattributlista[1]="talighet";
	grundattributlista[2]="rorlighet";
	grundattributlista[3]="uppfattning";
	grundattributlista[4]="vilja";
	grundattributlista[5]="psyke";
	grundattributlista[6]="visdom";
	grundattributlista[7]="utstralning";
	
	var grundattributforkortningslista=["sty","tål","rör","upp","vil","psy","vis","uts"];
	
	attributobjekt.forkortning={};
	for (i=0; i< grundattributlista.length;i++){
		attributobjekt.forkortning[grundattributlista[i]]=grundattributforkortningslista[i];
	}
    
	var harleddaattributlista=["forflyttning", "intryck", "kroppsbyggnad", "reaktion", "sjalvkontroll", "vaksamhet"];
	var harleddavardenlista=["grundrustning", "grundskada", "livskraft", "lakningstakt", "grundbelastning"];

    
    var grundattributrubriker=["Styrka", "Tålighet", "Rörlighet", "Uppfattning", "Vilja", "Psyke", "Visdom", "Utstrålning"];
    var harleddaattributrubriker=["Förflyttning", "Intryck", "Kroppsbyggnad", "Reaktion", "Självkontroll", "Vaksamhet"];
    var harleddavardenrubriker=["Grundrustning", "Grundskada", "Livskraft", "Läkningstakt", "Grundbelastning"];
    
	var harleddaattributparnamn=[["talighet","rorlighet"],["visdom","utstralning"],["styrka","talighet"],["rorlighet", "uppfattning"],["psyke","vilja"],["psyke","uppfattning"]];
	var harleddaattributparnummer=[[1,2],[6,7],[0,1],[2,3],[5,4],[5,3]];
	
	
    attributobjekt.grundattributlista=grundattributlista;
	attributobjekt.harleddaattributlista=harleddaattributlista;
    attributobjekt.harleddavardenlista=harleddavardenlista;
    
    attributobjekt.grundattributrubriker=grundattributrubriker;
    attributobjekt.harleddaattributrubriker=harleddaattributrubriker;
    attributobjekt.harleddavardenrubriker=harleddavardenrubriker;
    
	attributobjekt.harleddaattributparnamn=harleddaattributparnamn;
    attributobjekt.harleddaattributparnummer=harleddaattributparnummer;
	
    for (i=0; i < attributobjekt.grundattributlista.length;i++){
    	attributobjekt[attributobjekt.grundattributlista[i]]={};
        attributobjekt[attributobjekt.grundattributlista[i]].titel=attributobjekt.grundattributlista[i];
        attributobjekt[attributobjekt.grundattributlista[i]].namn=attributobjekt.grundattributlista[i];
        
		attributobjekt[attributobjekt.grundattributlista[i]].rubrik=attributobjekt.grundattributrubriker[i];
        
    }
    
    for (i=0; i < attributobjekt.harleddaattributlista.length;i++){
    	attributobjekt[attributobjekt.harleddaattributlista[i]]={};
        attributobjekt[attributobjekt.harleddaattributlista[i]].titel=attributobjekt.harleddaattributlista[i];
        attributobjekt[attributobjekt.harleddaattributlista[i]].namn=attributobjekt.harleddaattributlista[i];
        
		attributobjekt[attributobjekt.harleddaattributlista[i]].rubrik=attributobjekt.harleddaattributrubriker[i];
        
    }
    
    for (i=0; i < attributobjekt.harleddavardenlista.length;i++){
    	attributobjekt[attributobjekt.harleddavardenlista[i]]={};
        attributobjekt[attributobjekt.harleddavardenlista[i]].titel=attributobjekt.harleddavardenlista[i];
        attributobjekt[attributobjekt.harleddavardenlista[i]].namn=attributobjekt.harleddavardenlista[i];
        
		attributobjekt[attributobjekt.harleddavardenlista[i]].rubrik=attributobjekt.harleddavardenrubriker[i];
        
    }
    //window.alert(attributobjekt.harleddavardenlista)
    
	return attributobjekt
  
}

function fardighet () {
	this.namn= ""; // sma bokstaver, a-z
    this.rubrik=""; // Stor inital bokstav åäö ok
    this.beskrivning="";
    
    // Kategorin ar: kunskap, mystik, rorelse, sociala, strid, vildmark, sprak, expertis, hantverk, kannetecken
    this.kategori = "template";
	
    // Grund ar en boolsk variabel, 0 betyder att den inte har grundtarningar och 1 att den har
	this.grundtarningar = 0;
	
    // skalan ar i dagslaget antingen binar (for sprakfardigheter) eller handlingstarningar (for alla andra)
	this.skala = "template"
	
    this.styrandeattribut = "template";
	this.lattlard=0;
    // lättlärd och värde ligger under rollpersonsobjektet
}

function hamta_fardighetslistaobjekt (){

//var fardighetsgrupplista = ["kunskap", "mystik", "rorelse", "sociala", "strid", "vildmark", "sprak", "expertis", "hantverk", "kannetecken"];
	var fardighetsgrupplista = ["kunskapsfardigheter", "mystikfardigheter", "rorelsefardigheter", "socialafardigheter", "stridsfardigheter", "vildmarksfardigheter", "sprakfardigheter", "expertisfardigheter", "hantverkfardigheter", "kanneteckenfardigheter"];
	var fardighetslista =[[]];
    var fardighetslistaobjekt = {};
    var i;
	fardighetslistaobjekt.fardighetsgrupplista=fardighetsgrupplista;
    
	// fardighetslistor, kategoriserade
	
	var mystikfardigheter = [];
	mystikfardigheter[0]="ceremoni";
	mystikfardigheter.push("fornimma");
	mystikfardigheter.push("forvranga");
	mystikfardigheter.push("kanalisera");
	mystikfardigheter.push("astrotropi");
	mystikfardigheter.push("kosmotropi");
	mystikfardigheter.push("heliotropi");
	mystikfardigheter.push("selenotropi");
	mystikfardigheter.push("ataxotropi");
	mystikfardigheter.push("nomotropi");
	mystikfardigheter.push("topotropi");
	mystikfardigheter.push("kronotropi");
	mystikfardigheter.push("geotropi");
	mystikfardigheter.push("hydrotropi");
	mystikfardigheter.push("pyrotropi");
	mystikfardigheter.push("pneumotropi");
	mystikfardigheter.push("semotropi");
	mystikfardigheter.push("ikonotropi");
	mystikfardigheter.push("nekrotropi");
	mystikfardigheter.push("biotropi");
	mystikfardigheter.push("termotropi");
	mystikfardigheter.push("kryotropi");
	mystikfardigheter.push("fototropi");
	mystikfardigheter.push("skototropi");
	mystikfardigheter.push("psykotropi");
	mystikfardigheter.push("oneirotropi");
	
	
    fardighetslistaobjekt.mystikfardigheter={};
    fardighetslistaobjekt.mystikfardigheter.lista=mystikfardigheter;

	var kunskapsfardigheter = [];
	kunskapsfardigheter[0]="filosofi";
	kunskapsfardigheter.push("geografi");
	kunskapsfardigheter.push("gifterdroger");
	kunskapsfardigheter.push("handel");
	kunskapsfardigheter.push("historia");
	kunskapsfardigheter.push("kalkylera");
	kunskapsfardigheter.push("kirurgi");
	kunskapsfardigheter.push("krigforing");
	kunskapsfardigheter.push("kulturkannedom");
	kunskapsfardigheter.push("lagkunskap");
	kunskapsfardigheter.push("lakekonst");
	kunskapsfardigheter.push("ockultism");
	kunskapsfardigheter.push("teologi");
	kunskapsfardigheter.push("teoretiskmagi");
	kunskapsfardigheter.push("undervisa");
	
    fardighetslistaobjekt.kunskapsfardigheter={};
    fardighetslistaobjekt.kunskapsfardigheter.lista=kunskapsfardigheter;

	var rorelsefardigheter = [];
	rorelsefardigheter[0]="dansa"
	rorelsefardigheter.push("fingerfardighet");
	rorelsefardigheter.push("gomma");
	rorelsefardigheter.push("hoppa");
	rorelsefardigheter.push("klattra");
	rorelsefardigheter.push("lasdyrkning");
	rorelsefardigheter.push("simma");
	rorelsefardigheter.push("smyga");
	rorelsefardigheter.push("undvika");
	
    fardighetslistaobjekt.rorelsefardigheter={};
	fardighetslistaobjekt.rorelsefardigheter.lista=rorelsefardigheter;

	var stridsfardigheter = [];
	stridsfardigheter[0]="armborst";
	stridsfardigheter.push("bage");
	stridsfardigheter.push("dolk");
	stridsfardigheter.push("kastvapen");
	stridsfardigheter.push("klubba");
	stridsfardigheter.push("kedjevapen");
	stridsfardigheter.push("skold");
	stridsfardigheter.push("slagsmal");
	stridsfardigheter.push("spjut");
	stridsfardigheter.push("svard");
	stridsfardigheter.push("stav");
	stridsfardigheter.push("yxa");
	
    fardighetslistaobjekt.stridsfardigheter={};
    fardighetslistaobjekt.stridsfardigheter.lista=stridsfardigheter;
    
	var socialafardigheter = [];
	socialafardigheter[0]="argumentera";
	socialafardigheter.push("berattarkonst");
	socialafardigheter.push("charm");
	socialafardigheter.push("dupera");
	socialafardigheter.push("genomskada");
	socialafardigheter.push("hovliv");
	socialafardigheter.push("injagafruktan");
	socialafardigheter.push("ledarskap");
	socialafardigheter.push("skumraskaffarer");
	socialafardigheter.push("speldobbel");
	socialafardigheter.push("sangmusik");
	
    fardighetslistaobjekt.socialafardigheter={};
    fardighetslistaobjekt.socialafardigheter.lista=socialafardigheter;
    
	var vildmarksfardigheter = [];
	vildmarksfardigheter[0]="genomsoka";
	vildmarksfardigheter.push("jaktfiske");
	vildmarksfardigheter.push("koravagn");
	vildmarksfardigheter.push("marsch");
	vildmarksfardigheter.push("naturlara");
	vildmarksfardigheter.push("navigation");
	vildmarksfardigheter.push("orientering");
	vildmarksfardigheter.push("rida");
	vildmarksfardigheter.push("sjomannaskap");
	vildmarksfardigheter.push("speja");
	vildmarksfardigheter.push("spara");
	vildmarksfardigheter.push("vildmarksvana");
	
    fardighetslistaobjekt.vildmarksfardigheter={};
	fardighetslistaobjekt.vildmarksfardigheter.lista=vildmarksfardigheter;


	var sprakfardigheter = [];
    sprakfardigheter[0]="adask";
	sprakfardigheter.push("ashariska");
	sprakfardigheter.push("lagrejargiska");
	sprakfardigheter.push("eirov");
	sprakfardigheter.push("faliska");
	sprakfardigheter.push("felyasanari");
	sprakfardigheter.push("felyanari");
	sprakfardigheter.push("felyaalarina");
	sprakfardigheter.push("forianska");
	sprakfardigheter.push("genvero");
	sprakfardigheter.push("jahanniska");
	sprakfardigheter.push("kamorianska");
	sprakfardigheter.push("kejserligjargiska");
	sprakfardigheter.push("laitha");
	sprakfardigheter.push("momolanska");
	sprakfardigheter.push("muhadinska");
	sprakfardigheter.push("rechin");
	sprakfardigheter.push("rarun");
	sprakfardigheter.push("rukh");
	sprakfardigheter.push("sabriska");
	sprakfardigheter.push("sakhra");
	sprakfardigheter.push("tarkiska");
	sprakfardigheter.push("thalaska");
	sprakfardigheter.push("vannai");
	sprakfardigheter.push("aunuriska");
	sprakfardigheter.push("barantu");
	sprakfardigheter.push("chahariska");
	sprakfardigheter.push("coloniska");
	sprakfardigheter.push("danarthiska");
	sprakfardigheter.push("ebhronitiska");
	sprakfardigheter.push("edronitiska");
	sprakfardigheter.push("enariska");
	sprakfardigheter.push("kenka");
	sprakfardigheter.push("idoniska");
	sprakfardigheter.push("lamariska");
	sprakfardigheter.push("lemingo");
	sprakfardigheter.push("lohemiska");
	sprakfardigheter.push("merman");
	sprakfardigheter.push("nanaqee");
	sprakfardigheter.push("nermadiska");
	sprakfardigheter.push("nushuri");
	sprakfardigheter.push("tarhaiska");
	sprakfardigheter.push("tauriska");
	sprakfardigheter.push("thogenewa");
	sprakfardigheter.push("tokon");
	sprakfardigheter.push("trhzz");
	sprakfardigheter.push("uni");
	sprakfardigheter.push("vallanboriska");
	sprakfardigheter.push("ventus");
	sprakfardigheter.push("ylkanno");
	sprakfardigheter.push("zrigio");
	sprakfardigheter.push("anit");
	sprakfardigheter.push("coloniskskrift");
	sprakfardigheter.push("eiroviskskrift");
	sprakfardigheter.push("faliskskrift");
	sprakfardigheter.push("felyanai");
	sprakfardigheter.push("forianskskrift");
	sprakfardigheter.push("jargiskskrift");
	sprakfardigheter.push("rukhnekh");
	sprakfardigheter.push("tengrim");
	sprakfardigheter.push("thalaskiskskrift");
	sprakfardigheter.push("arkipelagiskskrift");
	sprakfardigheter.push("aunuriskskrift");
	sprakfardigheter.push("danarthiskskrift");
	sprakfardigheter.push("drakrunor");
	sprakfardigheter.push("ebhronitiskskrift");
	sprakfardigheter.push("techana");
	sprakfardigheter.push("tembrand");
	
	
    fardighetslistaobjekt.sprakfardigheter={};
    fardighetslistaobjekt.sprakfardigheter.lista=sprakfardigheter;
    
	var expertisfardigheter = [];
    expertisfardigheter[0]="adelskontakter";
	expertisfardigheter.push("akrobatik");
	expertisfardigheter.push("anatomi");
	expertisfardigheter.push("astrologi");
	expertisfardigheter.push("automatskrift");
	expertisfardigheter.push("barnuppfostran");
	expertisfardigheter.push("begravningsriter");
	expertisfardigheter.push("behaga");
	expertisfardigheter.push("bergskunskap");
	expertisfardigheter.push("bibliotekskunskap");
	expertisfardigheter.push("blasaeld");
	expertisfardigheter.push("bokhallning");
	expertisfardigheter.push("branschkunskap");
	expertisfardigheter.push("buktaleri");
	expertisfardigheter.push("byrakrati");
	expertisfardigheter.push("chiffer");
	expertisfardigheter.push("citeralibera");
	expertisfardigheter.push("detvarbattreforr");
	expertisfardigheter.push("diplomati");
	expertisfardigheter.push("djurtraning");
	expertisfardigheter.push("dodskunskap");
	expertisfardigheter.push("drakkunskap");	
	expertisfardigheter.push("daligaideer");
	expertisfardigheter.push("flagellera");
	expertisfardigheter.push("flyktvagar");
	expertisfardigheter.push("florta");
	expertisfardigheter.push("frossa");
	expertisfardigheter.push("fuska");
	expertisfardigheter.push("forfatta");
	expertisfardigheter.push("forkladnad");
	expertisfardigheter.push("forskingra");
	expertisfardigheter.push("genvagar");
	expertisfardigheter.push("grata");
	expertisfardigheter.push("gravplundring");
	expertisfardigheter.push("grottsystem");
	expertisfardigheter.push("gapalina");
	expertisfardigheter.push("gator");
	expertisfardigheter.push("helgonensliv");
	expertisfardigheter.push("heraldik");
	expertisfardigheter.push("huskurer");
	expertisfardigheter.push("hallabjudningar");
	expertisfardigheter.push("hada");
	expertisfardigheter.push("harma");
	expertisfardigheter.push("ingjutamod");
	expertisfardigheter.push("jonglera");
	expertisfardigheter.push("kloaksystem");
	expertisfardigheter.push("komponeramusik");
	expertisfardigheter.push("korrumpera");
	expertisfardigheter.push("krigsmaskiner");
	expertisfardigheter.push("kranga");
	expertisfardigheter.push("kyrkorochheligaplatser");
	expertisfardigheter.push("kandagladiatorer");
	expertisfardigheter.push("kaftaemot");
	expertisfardigheter.push("kannerbergen");
	expertisfardigheter.push("kontaktivarjestad");
	expertisfardigheter.push("lappalaga");
	expertisfardigheter.push("legendermyter");
	expertisfardigheter.push("lekar");
	expertisfardigheter.push("logik");
	expertisfardigheter.push("logistik");
	expertisfardigheter.push("lova");
	expertisfardigheter.push("lapplasning");
	expertisfardigheter.push("magiskgeometri");
	expertisfardigheter.push("massage");
	expertisfardigheter.push("meditera");
	expertisfardigheter.push("monsterkunskap");
	expertisfardigheter.push("muta");
	expertisfardigheter.push("omradeskannedom");
	expertisfardigheter.push("ordsprakordstav");
	expertisfardigheter.push("parfymerkosmetika");
	expertisfardigheter.push("pekautsyndabockar");
	expertisfardigheter.push("perversiteter");
	expertisfardigheter.push("poesi");
	expertisfardigheter.push("provsmakare");
	expertisfardigheter.push("repknopar");
	expertisfardigheter.push("ropaddla");
	expertisfardigheter.push("ryktenskvaller");
	expertisfardigheter.push("seoskyldigut");
	expertisfardigheter.push("simulant");
	expertisfardigheter.push("sjomanshistorier");
	expertisfardigheter.push("sjoslag");
	expertisfardigheter.push("skidorskridskor");
	expertisfardigheter.push("skugglandsfard");
	expertisfardigheter.push("skvaller");
	expertisfardigheter.push("skyllapaandra");
	expertisfardigheter.push("skadespel");
	expertisfardigheter.push("skamta");
	expertisfardigheter.push("soldatliv");
	expertisfardigheter.push("speladod");
	expertisfardigheter.push("spottloskor");
	expertisfardigheter.push("spraklara");
	expertisfardigheter.push("stadatvatta");
	expertisfardigheter.push("sundkost");
	expertisfardigheter.push("supa");
	expertisfardigheter.push("supafolkunderbordet");
	expertisfardigheter.push("takvagar");
	expertisfardigheter.push("tigga");
	expertisfardigheter.push("tjansteliv");
	expertisfardigheter.push("tolkareligiosaskrifter");
	expertisfardigheter.push("tortyr");
	expertisfardigheter.push("trosta");
	expertisfardigheter.push("undergravasjalvfortroende");
	expertisfardigheter.push("undvikaansvar");
	expertisfardigheter.push("uppvigla");
	expertisfardigheter.push("utbrytarkonst");
	expertisfardigheter.push("utskallningar");
	expertisfardigheter.push("vadslagning");
	expertisfardigheter.push("vapenkata");
	expertisfardigheter.push("vidskepelse");
	expertisfardigheter.push("vinkonnassor");
	expertisfardigheter.push("vissla");
	expertisfardigheter.push("vontarslevnadsregler");
	expertisfardigheter.push("vaderkannedom");
	expertisfardigheter.push("vadja");
	expertisfardigheter.push("ackla");
	expertisfardigheter.push("olkannare");
	expertisfardigheter.push("orfila");
	
    fardighetslistaobjekt.expertisfardigheter={};
    fardighetslistaobjekt.expertisfardigheter.lista=expertisfardigheter;
    
	var hantverkfardigheter = [];
    hantverkfardigheter[0]="arkitekt";
	hantverkfardigheter.push("bagare");
	hantverkfardigheter.push("barberare");
	hantverkfardigheter.push("blackmakare");
	hantverkfardigheter.push("bokbindare");
	hantverkfardigheter.push("bryggare");
	hantverkfardigheter.push("boskapsskotare");
	hantverkfardigheter.push("brannare");
	hantverkfardigheter.push("byggare");
	hantverkfardigheter.push("bagtillverkare");
	hantverkfardigheter.push("batbyggare");
	hantverkfardigheter.push("florist");
	hantverkfardigheter.push("fargare");
	hantverkfardigheter.push("forfalskare");
	hantverkfardigheter.push("garvare");
	hantverkfardigheter.push("gjutare");
	hantverkfardigheter.push("glasblasare");
	hantverkfardigheter.push("gobelangvavare");
	hantverkfardigheter.push("graverare");
	hantverkfardigheter.push("grisodlare");
	hantverkfardigheter.push("grovsmed");
	hantverkfardigheter.push("gruvbrytare");
	hantverkfardigheter.push("guldsmed");
	hantverkfardigheter.push("hovslagare");
	hantverkfardigheter.push("harold");
	hantverkfardigheter.push("instrumentbyggare");
	hantverkfardigheter.push("jordbrukare");
	hantverkfardigheter.push("juvelerare");
	hantverkfardigheter.push("kalligraf");
	hantverkfardigheter.push("kartritare");
	hantverkfardigheter.push("klensmed");
	hantverkfardigheter.push("kistmakare");
	hantverkfardigheter.push("kock");
	hantverkfardigheter.push("kolare");
	hantverkfardigheter.push("korgflatare");
	hantverkfardigheter.push("krigsmaskinsbyggare");
	hantverkfardigheter.push("krukmakare");
	hantverkfardigheter.push("korsnar");
	hantverkfardigheter.push("lampmakare");
	hantverkfardigheter.push("ljusstopare");
	hantverkfardigheter.push("lassmed");
	hantverkfardigheter.push("ladermakare");
	hantverkfardigheter.push("mattknytare");
	hantverkfardigheter.push("mekaniker");
	hantverkfardigheter.push("metallurg");
	hantverkfardigheter.push("mjolnare");
	hantverkfardigheter.push("murare");
	hantverkfardigheter.push("myntslagare");
	hantverkfardigheter.push("malare");
	hantverkfardigheter.push("natknytare");
	hantverkfardigheter.push("pergamentmakare");
	hantverkfardigheter.push("piltillverkare");
	hantverkfardigheter.push("repslagare");
	hantverkfardigheter.push("rustningssmed");
	hantverkfardigheter.push("sadelmakare");
	hantverkfardigheter.push("segelmakare");
	hantverkfardigheter.push("skeppsbyggare");
	hantverkfardigheter.push("skomakare");
	hantverkfardigheter.push("skraddare");
	hantverkfardigheter.push("skulptor");
	hantverkfardigheter.push("slaktare");
	hantverkfardigheter.push("snickare");
	hantverkfardigheter.push("spegelmakare");
	hantverkfardigheter.push("stenhuggare");
	hantverkfardigheter.push("tandsmed");
	hantverkfardigheter.push("tatuerare");
	hantverkfardigheter.push("timmerman");
	hantverkfardigheter.push("tradgardsskotare");
	hantverkfardigheter.push("trasnidare");
	hantverkfardigheter.push("tunnbindare");
	hantverkfardigheter.push("vagnbyggare");
	hantverkfardigheter.push("vapensmed");
	hantverkfardigheter.push("vinjasare");
	hantverkfardigheter.push("vavare");
	
    fardighetslistaobjekt.hantverkfardigheter={};
    fardighetslistaobjekt.hantverkfardigheter.lista=hantverkfardigheter;
    
	var kanneteckenfardigheter = [];
    kanneteckenfardigheter[0]="alldagligtutseende";
	kanneteckenfardigheter.push("allvarliguppsyn");
	kanneteckenfardigheter.push("allatare");
	kanneteckenfardigheter.push("auraavobehag");
	kanneteckenfardigheter.push("auraavsjalvsakerhet");
	kanneteckenfardigheter.push("avvikandeogonfarg");
	kanneteckenfardigheter.push("balanssinne");
	kanneteckenfardigheter.push("barnvan");
	kanneteckenfardigheter.push("blekochkall");
	kanneteckenfardigheter.push("bojlig");
	kanneteckenfardigheter.push("charmerandeleende");
	kanneteckenfardigheter.push("djurvan");
	kanneteckenfardigheter.push("daligtrykte");
	kanneteckenfardigheter.push("dodsangest");
	kanneteckenfardigheter.push("elementkannare");
	kanneteckenfardigheter.push("empatiskberoring");
	kanneteckenfardigheter.push("finlemmadehander");
	kanneteckenfardigheter.push("flinktunga");
	kanneteckenfardigheter.push("fraknar");
	kanneteckenfardigheter.push("fodelsemarke");
	kanneteckenfardigheter.push("foraktfullmin");
	kanneteckenfardigheter.push("genomtrangandeblick");
	kanneteckenfardigheter.push("gestikulerande");
	kanneteckenfardigheter.push("gottminne");
	kanneteckenfardigheter.push("gracios");
	kanneteckenfardigheter.push("hederligtintryck");
	kanneteckenfardigheter.push("hotfullstamma");
	kanneteckenfardigheter.push("hanskratt");
	kanneteckenfardigheter.push("ingerlugn");
	kanneteckenfardigheter.push("isandetystnad");
	kanneteckenfardigheter.push("klingandeskratt");
	kanneteckenfardigheter.push("klariallt");
	kanneteckenfardigheter.push("luktargott");
	kanneteckenfardigheter.push("luktsinne");
	kanneteckenfardigheter.push("missbildning");
	kanneteckenfardigheter.push("morkersyn");
	kanneteckenfardigheter.push("nattsyn");
	kanneteckenfardigheter.push("obegriplighandstil");
	kanneteckenfardigheter.push("olycksbadandeuppenbarelse");
	kanneteckenfardigheter.push("pedant");
	kanneteckenfardigheter.push("perfekthy");
	kanneteckenfardigheter.push("proper");
	kanneteckenfardigheter.push("rastlos");
	kanneteckenfardigheter.push("romantiker");
	kanneteckenfardigheter.push("sanndrommar");
	kanneteckenfardigheter.push("serdumut");
	kanneteckenfardigheter.push("sersvagheter");
	kanneteckenfardigheter.push("sjukligtutseende");
	kanneteckenfardigheter.push("skrammandeutseende");
	kanneteckenfardigheter.push("skarpaanletsdrag");
	kanneteckenfardigheter.push("skarptminne");
	kanneteckenfardigheter.push("struktureratsinne");
	kanneteckenfardigheter.push("suntfornuft");
	kanneteckenfardigheter.push("tatuering");
	kanneteckenfardigheter.push("trollbindandeblick");
	kanneteckenfardigheter.push("utbrott");
	kanneteckenfardigheter.push("vassatander");
	kanneteckenfardigheter.push("valformadkropp");
	kanneteckenfardigheter.push("valkomnandeaura");
	kanneteckenfardigheter.push("valvardathar");
	kanneteckenfardigheter.push("arligtansikte");
	kanneteckenfardigheter.push("arr");
	
    fardighetslistaobjekt.kanneteckenfardigheter={};
    fardighetslistaobjekt.kanneteckenfardigheter.lista=kanneteckenfardigheter;
	
    var fardighetsgrupplista_sing=["Kunskapsfärdighet", "Mystikfärdighet", "Rörelsefärdighet", "Social färdighet", "Stridsfärdighet", "Vildmarksfärdighet", "Språk"];
    var fardighetsgrupplista_plur=["Kunskapsfärdigheter", "Mystikfärdigheter", "Rörelsefärdigheter", "Sociala färdigheter", "Stridsfärdigheter", "Vildmarksfärdigheter", "Språk"];
    var fardighetsgrupplista_kort=["Kunskap", "Mystik", "Rörelse", "Sociala", "Strid", "Vildmark", "Språk"];
    
	
    var ovrigafardighetergrupplista_sing=["Expertis", "Hantverk", "Kännetecken"];
    var ovrigafardighetergrupplista_plur=["Expertiser", "Hantverk", "Kännetecken"];
    var ovrigafardighetergrupplista_namn=["expertis", "hantverk", "kannetecken"];
    
	
	var ovrigafardigheterpoanglista=["expertispoang","hantverkpoang", "kanneteckenpoang"];
	
	var mystikmagilista=["mysterier", "heligaforemal"];
	var mystikmagirubriker_plur=["Mysterier", "Heliga föremål"];
	var mystikmagirubriker_sing=["Mysterium", "Heligt föremål"];
	
	
	var enhetslista=["kunskapsfardigheterenheter","mystikfardigheterenheter","rorelsefardigheterenheter", "socialafardigheterenheter", "stridsfardigheterenheter", "vildmarksfardigheterenheter","sprakenheter", "valfriaenheter", "mysterier","expertispoang","hantverkpoang", "kanneteckenpoang"];
	
	for (i=0;i<ovrigafardighetergrupplista_namn.length;i++){
		fardighetslistaobjekt[ovrigafardighetergrupplista_namn[i]]={};
		fardighetslistaobjekt[ovrigafardighetergrupplista_namn[i]].namn=ovrigafardighetergrupplista_namn[i];
		fardighetslistaobjekt[ovrigafardighetergrupplista_namn[i]].rubriksing=ovrigafardighetergrupplista_sing[i];
		fardighetslistaobjekt[ovrigafardighetergrupplista_namn[i]].rubrikplur=ovrigafardighetergrupplista_plur[i];
	}
	
	
    fardighetslistaobjekt.fardighetsgrupplista_sing=fardighetsgrupplista_sing;
    fardighetslistaobjekt.fardighetsgrupplista_plur=fardighetsgrupplista_plur;
    fardighetslistaobjekt.fardighetsgrupplista_kort=fardighetsgrupplista_kort;
    
	
    fardighetslistaobjekt.ovrigafardighetergrupplista_sing=ovrigafardighetergrupplista_sing;
    fardighetslistaobjekt.ovrigafardighetergrupplista_plur=ovrigafardighetergrupplista_plur;
	fardighetslistaobjekt.ovrigafardighetergrupplista_namn=ovrigafardighetergrupplista_namn;
	
	
	fardighetslistaobjekt.enhetslista=enhetslista;
	fardighetslistaobjekt.ovrigafardigheterpoanglista=ovrigafardigheterpoanglista;
	
	fardighetslistaobjekt.mystikmagilista=mystikmagilista;
	fardighetslistaobjekt.mystikmagirubriker_sing=mystikmagirubriker_sing;
	fardighetslistaobjekt.mystikmagirubriker_plur=mystikmagirubriker_plur;
	
	for (i=0;i<6;i++){
		fardighetslistaobjekt[fardighetsgrupplista[i]].rubrik=fardighetsgrupplista_plur[i];
	}
	
	
	// window.alert(window[fardighetsgrupplista[0]].length)

	
	for (i = 1; i < fardighetsgrupplista.length; i++){
		fardighetslista.push([]);
	}
	for (i = 0; i < fardighetsgrupplista.length; i++){
	
		
        for (j = 0; j < fardighetslistaobjekt[fardighetsgrupplista[i]].lista.length; j++){
        	
       		fardighetslista[i].push(fardighetslistaobjekt[fardighetsgrupplista[i]].lista[j]);
       	}
    }
	
    fardighetslistaobjekt.fardighetslista=fardighetslista;
    
    
   
	
    fardighetslistaobjekt.fardighetsgrupplista = fardighetsgrupplista;
    
	return fardighetslistaobjekt
}


function hamta_fardighetsobjekt () {
	
	fardighetslistaobjekt = hamta_fardighetslistaobjekt();
	fardighetslista=fardighetslistaobjekt.fardighetslista;
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	
	fardighetsobjekt={};
    
    for (i = 0; i < fardighetsgrupplista.length; i++){
		
        for (j = 0; j < fardighetslista[i].length; j++){
       		// sparar alla färdigheter som objekt
       		fardighetsobjekt[fardighetslista[i][j]] = new fardighet();
			fardighetsobjekt[fardighetslista[i][j]].namn=fardighetslista[i][j];
			fardighetsobjekt[fardighetslista[i][j]].rubrik=inledandeversal(fardighetslista[i][j]);	// Normalt sett är rubriken samma som namnet men med inledande versal, undantaget om det innehåller åäö, mellanslag eller &
			fardighetsobjekt[fardighetslista[i][j]].grundtarningar=0;
			fardighetsobjekt[fardighetslista[i][j]].lattlard=0;
			
			fardighetsobjekt[fardighetslista[i][j]].kategori=fardighetsgrupplista[i];
       	}
    }
	
    
	
	
	fardighetsobjekt["akrobatik"].beskrivning="Akrobatik gör det möjligt att utföra avancerade rörliga manövrer såsom volter, hopp, hjulningar och kullerbyttor samtidigt som man har kontroll över sin kropp och en överblick av omgivningen. Färdigheten används främst av dansare och underhållare.";
	
	fardighetsobjekt["astrologi"].beskrivning="Den urgamla förmågan att framställa horoskop genom att skåda stjärnornas, planeternas och andra himlakroppars positioner jämfört med Mundana. Expertisen ger också kunskapen om vad stjärnbilder och konstellationer har för namn och hur dessa samverkar.";
	
	fardighetsobjekt["barnuppfostran"].beskrivning="Allt från uppmuntringar och inlärande till olika typer av aga.";
	
	fardighetsobjekt["begravningsriter"].beskrivning="En särskild kunskap om hur man på ett respektfullt sätt begraver människor eller andra varelser. Även i helt främmande kulturer känner den som besitter expertisen av vad som är lämpligt och inte och kommer att kunna utföra en knapp men accepterad begravning.";
	
	fardighetsobjekt["behaga"].beskrivning="Kännedomen om hur man tillfredställer en partner på bästa sätt. Vanligt hos kurtisaner och skökor.";
	
	fardighetsobjekt["bergskunskap"].beskrivning="En person med Bergskunskap vet hur man bör bära sig åt för att bedriva gruvdrift på ett effektivt sätt, hur malm- och mineralådror brukar ligga och underjordens risker.";
	
	fardighetsobjekt["bibliotekskunskap"].beskrivning="Kunskap om vilka böcker som finns i ett bibliotek samt i vilka bibliotek de kan tänkas finnas. Dessutom ger färdigheten kännedom de utgåvor översättningar som har gjorts och hur dessa har spridits. Viktigt för de flesta forskare.";
	
	fardighetsobjekt["blasaeld"].rubrik="Blåsa eld";
	fardighetsobjekt["blasaeld"].beskrivning="Personen kan ta oljor i sin mun och blåsa ut dem i sprakande och vackra eldkvastar. Även eldsslukning ingår i denna färdighet.";
	
	fardighetsobjekt["bokhallning"].rubrik="Bokhållning";
	fardighetsobjekt["bokhallning"].beskrivning="Denna färdighet ger kunskaper om administration och hur byråkratin fungerar, vanligtvis inom en stad. Dessutom används färdigheten för att hålla ordning på ekonomin inom en förvaltning eller gille.";
	
	fardighetsobjekt["branschkunskap"].beskrivning="Personen har en insikt i en viss bransch i ett visst område. Det kan exempelvis röra sig om bordeller i Absalon, krogar i Jarum, marknadsstånd i Daval och så vidare. När det gäller detta så vet personen vad som erbjuds, priser och kvalitén och känner mest troligt många av ägarna.";
	
	fardighetsobjekt["buktaleri"].beskrivning="Förmågan att frambringa ljud och röster utan att röra på läpparna. Ger även möjligheten att få det att låta som att ljudet kommer ifrån ett annat håll. Ses dock på med misstänksamhet och ibland som häxeri.";
	
	fardighetsobjekt["chiffer"].beskrivning="Konsten att både kunna skriva om meddelanden så att de är obegripliga för alla utom dem som förstår chiffret. Innefattar även kunskapen om hur man dechiffrerar texter.";
	
	fardighetsobjekt["citeralibera"].rubrik="Citera Libera";
	fardighetsobjekt["citeralibera"].beskrivning="Det finns alltid verser i den heliga boken som kan ge tröst eller vägledning och personen med denna färdighet har dessa på tungan och kan citera dem i sömnen.";
	
	fardighetsobjekt["detvarbattreforr"].rubrik="Det var bättre förr";
	fardighetsobjekt["detvarbattreforr"].beskrivning="Personen är full med anekdoter och exempel på hur mycket bättre det var förr och hur dåligt allt har blivit.";
	
	fardighetsobjekt["diplomati"].beskrivning="Konsten att få folk att komma överens. Färdigheten kan användas för att undvika krig eller religiös splittring men även för att medla mellan kivande syskon.";
	
	fardighetsobjekt["djurtraning"].rubrik="Djurträning";
	fardighetsobjekt["djurtraning"].beskrivning="Hur man tränar och tämjer djur. Djur som man har tränat kan utföra roliga trick eller kanske till och med vara stridstränade om de har anlagen för detta.";
	
	fardighetsobjekt["flagellera"].beskrivning="En insikt om hur man sticker nålar genom huden, går på glödande kol och var man ska piska sig för att märken ska bli som mest tydliga och groteska. Färdigheten används för religiös hängivelse, chockerande underhållning eller i vissa fall personlig tillfredsställelse.";
	
	fardighetsobjekt["flyktvagar"].rubrik="Flyktvägar";
	fardighetsobjekt["flyktvagar"].beskrivning="Det är alltid bra att vara förberedd på en snabb flykt. Med denna färdighet håller man alltid uppsikt över närmaste och bästa flyktväg.";
	
	fardighetsobjekt["florta"].rubrik="Flörta";
	fardighetsobjekt["florta"].beskrivning="Man vet precis vad man ska göra för att väcka personens uppmärksamhet genom leenden, blinkningar och kanske situationer där man visar upp sig av ”misstag”.";
	
	
	fardighetsobjekt["frossa"].beskrivning="Att äta så snabbt och så mycket som möjligt är något som rollpersonen är mycket framstående inom. Denna färdighet är vanlig hos glutharianerna.";
	
	
	fardighetsobjekt["fuska"].beskrivning="Personen har lärt sig att fuska i spel och lekar. Kort delas ut på felaktiga sätt, tärningsresultat läses av felaktigt (eller stöts till) och personen har många extraregler på lager som han alltid kan hävda att man spelar efter när det passar.";
		
	fardighetsobjekt["forfatta"].rubrik="Författa";
	fardighetsobjekt["forfatta"].beskrivning="Att skriva är verkligen rollpersonens gebit; allt från välformulerade brev till stämningsfulla dikter och intressanta sagor.";
	
	fardighetsobjekt["forkladnad"].rubrik="Förklädnad";
	fardighetsobjekt["forkladnad"].beskrivning="Förklädnad är förmågan att med kläder, förställd röst och smink förställa sitt yttre för att antingen undgå att bli igenkänd eller för att låtsas vara någon annan person.";
	
	fardighetsobjekt["forskingra"].rubrik="Förskingra";
	fardighetsobjekt["forskingra"].beskrivning="Kunskapen om hur man på bästa sätt flyttar pengar från en organisation rakt ner i egen ficka.";
	
	fardighetsobjekt["genvagar"].rubrik="Genvägar";
	fardighetsobjekt["genvagar"].beskrivning="Personen har en naturlig fallenhet att finna genvägar av olika slag.";
	
	fardighetsobjekt["gravplundring"].beskrivning="Man vet hur, var och när man bäst gräver upp de döda för att rädda dem från värdesaker, eller i vissa fall organ eller hela kroppar. Färdigheten ger även en viss inblick i förruttnelsestadier.";
	
	fardighetsobjekt["grottsystem"].beskrivning="Kännedomen om grottsystem och underjordiska områden samt hur man tar sig fram i dessa.";
	
	fardighetsobjekt["gapalina"].rubrik="Gå på lina";
	fardighetsobjekt["gapalina"].beskrivning="Personen har lärt sig att gå på lina och kan om denne inte är överbelastad gå på både spänd och slak lina.";
	
	fardighetsobjekt["gator"].rubrik="Gåtor";
	fardighetsobjekt["gator"].beskrivning="Kunskapen om hur man ställer de finurligaste frågorna samt hur man funderar ut svaren.";
	
	fardighetsobjekt["helgonensliv"].rubrik="Helgonens liv";
	fardighetsobjekt["helgonensliv"].beskrivning="En djupgående insikt i helgonens liv och leverne. Personen kan dra fram många visdomar och exempel från dessa.";
	
	fardighetsobjekt["heraldik"].beskrivning="Ger rollpersonen kunskap om vilka vapensköldar, fanor och symboler som olika familjer, släkter och ordnar har. Man har även en inblick i symbolens historik och hur den är kopplad till organisationen.";
	
	fardighetsobjekt["huskurer"].beskrivning="Sägs kunna bota allt från förkylningar till baksmälla.";
	
	fardighetsobjekt["hallabjudningar"].rubrik="Hålla bjudningar";
	fardighetsobjekt["hallabjudningar"].beskrivning="Man vet exakt hur man ska skapa minnesvärda bjudningar men även hur man ser till att själv bli inbjuden på sådana.";
	
	fardighetsobjekt["hada"].rubrik="Häda";
	fardighetsobjekt["hada"].beskrivning="Hur man på syndigast sätt häcklar religiösa regler. Mycket riskabelt att använda sig av i fel sammanhang men kan locka fram skratt eller visa på att man menar allvar i vissa situationer. Det kan exempelvis vara att förbanna Daak, spotta på korset eller svära sig till den onde.";
	
	fardighetsobjekt["harma"].rubrik="Härma";
	fardighetsobjekt["harma"].beskrivning="Personen är mycket skicklig på att härma röster och djurläten. Detta kan dra in pengar som ren underhållning men även användas för att dupera folk. Självklart beror mycket på rollpersonens kön, ålder och folkslag. Men personens stämma kan lura de flesta.";
	
	fardighetsobjekt["ingjutamod"].rubrik="Ingjuta mod";
	fardighetsobjekt["ingjutamod"].beskrivning="”Kom igen nu, du kan klara det!” Förmågan att ingjuta mod hos andra och få dem att tro på sig själva.";
	
	fardighetsobjekt["jonglera"].beskrivning="Personen är skicklig på att ha många saker i luften samtidigt och kan jonglera med bollar, dolkar, brinnande facklor och det mesta man kan tänka sig.";
	
	fardighetsobjekt["kloaksystem"].beskrivning="Dessa osynliga nätverk under städerna kan vara bra att försvinna ned i om man måste förflytta sig obemärkt eller gömma sig.";
	
	fardighetsobjekt["komponeramusik"].rubrik="Komponera musik";
	fardighetsobjekt["komponeramusik"].beskrivning="Kunskapen om hur man skapar minnesvärda och njutningsfulla musikstycken.";
	
	fardighetsobjekt["kontaktivarjestad"].rubrik="Kontakt i varje stad";
	fardighetsobjekt["kontaktivarjestad"].beskrivning="Personen känner någon, eller i varje fall någon som känner någon, i varje stad.";
	
	
	fardighetsobjekt["korrumpera"].beskrivning="En förmåga att dra ur det sämsta ur folk och få dem att falla för sina svagheter.";
	
	fardighetsobjekt["krigsmaskiner"].beskrivning="Färdigheten Krigsmaskiner ger kunskap om hur man laddar och avlossar en krigsmaskin. Färdigheten ger också kunskap om krigsmaskinens verkan mot olika mål. Dessutom gör färdigheten att man vet hur man transporterar och underhåller krigsmaskinen.";
	
	fardighetsobjekt["kranga"].rubrik="Kränga";
	fardighetsobjekt["kranga"].beskrivning="Genom ett envist ropande, en påträngande personlighet eller extrem envishet har personen blivit skicklig på att tvinga på folk varor och köpa dessa till ockerpriser.";
	
	fardighetsobjekt["kyrkorochheligaplatser"].rubrik="Kyrkor och heliga platser";
	fardighetsobjekt["kyrkorochheligaplatser"].beskrivning="Personen har en djup kunskap om kyrkor, heliga platser och deras historia samt en god inblick i hur man tar sig in i kryptor, upp i torn eller hittar lönngångar i dessa byggnader.";
	
	fardighetsobjekt["kandagladiatorer"].rubrik="Kända gladiatorer";
	fardighetsobjekt["kandagladiatorer"].beskrivning="En insikt i kända gladiatorer genom tiderna, dramatiska kamper som folk fortfarande minns och pratar om. Detta är ett populärt samtalsämne i synnerhet i de lägre samhällsklasserna.";
	
	fardighetsobjekt["kaftaemot"].rubrik="Käfta emot";
	fardighetsobjekt["kaftaemot"].beskrivning="Den som besitter denna färdighet är en mästare på att käfta emot och älskar att argumentera för sakens skull. Det är svårt att inte få sin verbala motståndare ytterst irriterad på sättet att argumentera.";
	
	fardighetsobjekt["kannerbergen"].rubrik="Känner bergen";
	
	fardighetsobjekt["lappalaga"].rubrik="Lappa \& laga";
	fardighetsobjekt["lappalaga"].beskrivning="Revor i tunikor sys, blankvapen poleras så de skiner, trasiga stigbyglar fixas till, lossnade vagnhjul sätts på plats och läckande kärl tätas. Personen har en fallenhet för att tillfälligt reparera det mesta och föremål i personens ägo är allt som oftast i mycket gott skick.";
	
	fardighetsobjekt["legendermyter"].rubrik="Legender \& myter";
	fardighetsobjekt["legendermyter"].beskrivning="En inblick i sagor, skrock och legender som finns i folktron. Vem vet, kanske finns det en sanning i alla sagor? I alla fall så har man mycket att berätta och både varningar och uppmuntrande ord att ta fram när det kniper.";
	
	fardighetsobjekt["lekar"].beskrivning="Att med full inlevelse kunna ge sig hän i alla sorters lekar. Innefattar även kunskaper om olika spel och lekar.";
	
	fardighetsobjekt["logik"].beskrivning="Konsten att med förstå hur olika resonemang hänger ihop och hur man bevisar alternativt motbevisar en tes.";
	
	fardighetsobjekt["logistik"].beskrivning="Viktigt för armén likväl som handelsmän. Att effektivast förflytta personer eller varor från en plats till en annan och se till att det finns skyddade platser att slå läger och nog med proviant.";
	
	fardighetsobjekt["lova"].beskrivning="Med löften om storstilade projekt, senare betalning och framtida gentjänster kan man övertala de flesta. Att sedan hålla sina löften är inte alltid fullt lika viktigt, dessa kan lika gärna ersättas av nya.";
	
	fardighetsobjekt["lapplasning"].rubrik="Läppläsning";
	fardighetsobjekt["lapplasning"].beskrivning="Hur man ser vad en annan person säger utan att höra det genom att läsa på dennes läppar. Man måste kunna det talade språket för att förstå det.";
	
	fardighetsobjekt["massage"].beskrivning="Personen vet precis hur man ska göra för att mjuka upp muskler och stela leder.";
	
	fardighetsobjekt["meditera"].beskrivning="Att stänga ute omvärlden och låta lugnet svepa in över en. Att bli ett med nuet och inte tänka på någonting. Denna koppling till lugnet och saligheten gör att personen har ett tålamod som kan komma väl till användning i många situationer.";
	
	fardighetsobjekt["monsterkunskap"].beskrivning="Läran om monster, var de lever, vilka egenskaper de har och hur man bäst besegrar dem.";
	
	fardighetsobjekt["muta"].beskrivning="Man vet hur man tar sig fram i det jargiska samhället och vet vilka som bör gå att muta och hur mycket silver det bör kosta.";
	
	fardighetsobjekt["omradeskannedom"].rubrik="Områdeskännedom";
	fardighetsobjekt["omradeskannedom"].beskrivning="Personen har en stor kännedom om ett specifikt område. Det kan exempelvis vara Absalon, Terenum Perdita, Låglanden, Abandabergen eller något liknande.";
	
	fardighetsobjekt["ordsprakordstav"].rubrik="Ordspråk \& ordstäv";
	fardighetsobjekt["ordsprakordstav"].beskrivning="Man har alltid ordspråk och ordstäv redo för alla typer av situationer.";
	
	fardighetsobjekt["parfymerkosmetika"].rubrik="Parfymer \& kosmetika";
	fardighetsobjekt["parfymerkosmetika"].beskrivning="Rollpersonen känner till på blotta doften en mängd parfymer och kan gissa sig till huvudingredienserna hos dessa. Vanligtvis är denne alltid väldoftande vilket en del personer kan uppskatta. Dessutom vet rollpersonen hur man förhöjer sitt utseende med hjälp av kosmetika.";
	
	fardighetsobjekt["pekautsyndabockar"].rubrik="Peka ut syndabockar";
	fardighetsobjekt["pekautsyndabockar"].beskrivning="Personen är en expert på att peka ut syndabockar för alla världens problem. Ofta är det desamma gång på gång och många gånger rotade i fördomar och rasism. Fördomarna är ofta riktade mot särskilda folkslag, samhällsklasser eller en specifik individ.";
	
	fardighetsobjekt["perversiteter"].beskrivning="En djupdykning i dekadens och intimitet som är vanligt hos glutharianerna och andra hedonister.";
	
	fardighetsobjekt["poesi"].beskrivning="Konsten att både skriva och läsa upp dikter samt verser på ett inlevelsefullt vis.";
	
	fardighetsobjekt["provsmakare"].beskrivning="Mat kan vara skämd och förgiftad. Med denna färdighet har man lärt sig urskilja detta i maten man äter.";
	
	fardighetsobjekt["repknopar"].rubrik="Rep \& knopar";
	fardighetsobjekt["repknopar"].beskrivning="Personen vet hur man använder rep och knopar. Detta kan vara bra om man vill binda personer eller göra fast något.";
	
	fardighetsobjekt["ropaddla"].rubrik="Ro \& paddla";
	fardighetsobjekt["ropaddla"].beskrivning="Kanske har personen erfarenhet från galärer eller flodbåtar som personen fått sin skicklighet då det gäller att ro och paddla.";
	
	fardighetsobjekt["ryktenskvaller"].rubrik="Rykten \& skvaller";
	fardighetsobjekt["ryktenskvaller"].beskrivning="Rollpersonen vet exakt vilka man ska prata med för att få rykten att spridas, samt vad som sägs.om såväl vanligt folk i trakten som uppsatta makthavare.";
	
	fardighetsobjekt["seoskyldigut"].rubrik="Se oskyldig ut";
	fardighetsobjekt["seoskyldigut"].beskrivning="Personen kan få den där totalt oförstående och oskyldiga minen där man tycks vara helt ovetande till vad som än skett hur insyltad denne än kan vara.";
	
	fardighetsobjekt["simulant"].beskrivning="Personen är en expert på att låtsas vara skadad, sjuk eller illamående. Allt ifrån darrningar, miner av smärta till en blek hudton och fejkad yrsel. Detta kan till och med lura vissa läkekunniga. Detta kan vara för att få sympati, slippa militärtjänst, verka ofarlig eller skrämma bort folk.";
	
	fardighetsobjekt["sjomanshistorier"].rubrik="Sjömanshistorier";
	fardighetsobjekt["sjomanshistorier"].beskrivning="Historier som berättas på hamnkrogar under sena nätter. Detta rör främmande länder, myter och väldiga sjöodjur. Dessa historier uppskattas av så gott som alla som har ett intresse av havet.";
	
	fardighetsobjekt["skidorskridskor"].rubrik="Skidor \& skridskor";
	fardighetsobjekt["skidorskridskor"].beskrivning="Att ta sig fram genom snö på skidor eller över is med skridskor.";
	
	fardighetsobjekt["skvaller"].beskrivning="Personen vet precis var man ska fånga upp det bästa skvallret om vad som sker i trakten samt vet vilka man ska skvallra till för att det ska föras vidare.";
	
	fardighetsobjekt["skyllapaandra"].rubrik="Skylla på andra";
	fardighetsobjekt["skyllapaandra"].beskrivning="”Det var hon där borta...” Personen är mycket bra på att peka ut andra och på det sättet undvika ansvar eller komma undan faror.";
	
	fardighetsobjekt["skadespel"].rubrik="Skådespel";
	fardighetsobjekt["skadespel"].beskrivning="Man har en insikt i olika teaterstycken och kan även memorera långa stycken repliker och sedan framföra dessa på en scen.";
	
	fardighetsobjekt["skamta"].rubrik="Skämta";
	fardighetsobjekt["skamta"].beskrivning="Allt från fräcka visor till ordvitsar eller underhållande gester i rätt tillfällen. Den som behärskar denna färdighet kan få den buttraste att rycka på smilbanden.";
	
	fardighetsobjekt["soldatliv"].beskrivning="Personen har mycket god inblick i hur soldater lever och kan utan problem utge sig för att vara en sådan och nästla sig in i deras skara.";
	
	fardighetsobjekt["speladod"].rubrik="Spela död";
	fardighetsobjekt["speladod"].beskrivning="Förmågan att lura omgivningen att man är död och på så sätt undvika fara.";
	
	fardighetsobjekt["spottloskor"].beskrivning="En djup harkling och sedan en välriktad spottloska mot marken eller kanske någons ansikte. En spottloska visar på förakt och kan avbryta de flesta samtal omedelbart. Likaså är personen mycket träffsäker med sina spottloskor.";
	
	fardighetsobjekt["spraklara"].rubrik="Språklära";
	fardighetsobjekt["spraklara"].beskrivning="Ett insnöat intresse om olika språkgrupper, vilka språk som pratas var, dialekter och generella tankar om språks uppkomst. Observera att man inte kan tala något språk via denna färdighet utan har bara en lära om dem och kan dra observationer då det gäller låneord och gamla betydelser.";
	
	fardighetsobjekt["stadatvatta"].rubrik="Städa \& tvätta";
	fardighetsobjekt["stadatvatta"].beskrivning="Sopa och skrubba golv, tvätta smutsiga kläder och polera silver. Personen kan få en svinstia att bli bebolig om denne bara får lite tid på sig.";
	
	fardighetsobjekt["supa"].beskrivning="Färdigheten visar på hur mycket man kan dricka innan man blir sluddrande, kräks ned sig eller somnar på grund av överdrivet alkoholintag. Dessutom har man en kännedom om diverse dryckeslekar och kan med lätthet både svepa en och två bägare i ett drag.";
	
	fardighetsobjekt["supafolkunderbordet"].rubrik="Supa folk under bordet";
	fardighetsobjekt["supafolkunderbordet"].beskrivning="Supa folk under bordet: Förmågan att få andra att ta både ett och två glas mer än vad de borde eller bara stanna på värdshuset ”ett litet tag till” då de egentligen borde gå till sängs.";
	
	fardighetsobjekt["takvagar"].rubrik="Takvägar";
	fardighetsobjekt["takvagar"].beskrivning="Varför ta sig fram över marken när man kan ta sig fram över tak osedd? Fungerar då man vill klättra upp på byggnader och orientera sig på denna nivå.";
	
	fardighetsobjekt["tigga"].beskrivning="Att med alla till buds stående medel kunna tigga till sig småslantar av förbipasserande är något rollpersonen fått lära sig efter ett hårt liv.";
	
	fardighetsobjekt["tjansteliv"].rubrik="Tjänsteliv";
	fardighetsobjekt["tjansteliv"].beskrivning="Personen vet hur slavar och tjänare lever och kan lätt smälta in bland dessa. Personen vet även hur man passar upp och betjänar någon på bästa sätt.";
	
	fardighetsobjekt["tolkareligiosaskrifter"].rubrik="Tolka religiösa skrifter";
	fardighetsobjekt["tolkareligiosaskrifter"].beskrivning="Tolka religiösa skrifter: Förmågan att tolka olika religiösa skrifter samt att man har en kunskap i tidigare tolkningar och schismer inom religionen.";
	
	fardighetsobjekt["tortyr"].beskrivning="Kunskapen om hur man orsakar lidande genom diverse metoder. Vanligen för att få fram information under förhör eller som bestraffning.";
	
	fardighetsobjekt["trosta"].rubrik="Trösta";
	fardighetsobjekt["trosta"].beskrivning="Hur förtvivlad någon än må vara så kan en person med färdigheten Trösta alltid hjälpa den sorgsne att komma på bättre tankar.";
	
	fardighetsobjekt["undergravasjalvfortroende"].rubrik="Undergräva självförtroende";
	fardighetsobjekt["undergravasjalvfortroende"].beskrivning="Att med flin, blickar, hånfulla kommentarer eller bara iskyla undergräva personers självförtroende och göra dem nervösa och obekväma.";
	
	fardighetsobjekt["undvikaansvar"].rubrik="Undvika ansvar";
	fardighetsobjekt["undvikaansvar"].beskrivning="Det är bättre att skyffla över ansvaret på någon annan och personen med denna färdighet vet exakt hur man gör.";
	
	fardighetsobjekt["uppvigla"].beskrivning="Rollpersonen är en mästare i att sätta igång myterier och uppror mot överordnade.";
	
	fardighetsobjekt["utbrytarkonst"].beskrivning="Bojor och rep kan inte hålla personen och denne tycks kunna slita eller lirka sig ur alla former av fängslen.";
	
	fardighetsobjekt["utskallningar"].rubrik="Utskällningar";
	fardighetsobjekt["utskallningar"].beskrivning="Att kunna trycka ner någon fullständigt genom att skälla ut denne efter noter. Mycket effektivt för att få folk att känna skuld och skam.";
	
	fardighetsobjekt["vadslagning"].beskrivning="Goda odds, omöjliga odds, personen bara måste satsa pengar på allt och lite till, och verkar oftare än normalt faktiskt vinna.";
	
	fardighetsobjekt["vapenkata"].beskrivning="Man kan utföra inövade och vackra manöver med ett vapen eller obeväpnad. Har ingen direkt fördel i strid men ser vackert och imponerande ut.";
	
	fardighetsobjekt["vidskepelse"].beskrivning="Vad man bör och inte bör göra för att blidka eller reta upp ”makterna”. Kan även användas för att skrämma andra.";
	
	fardighetsobjekt["vinkonnassor"].rubrik="Vinkonnässör";
	fardighetsobjekt["vinkonnassor"].beskrivning="En inblick i olika typer av viner, kända årgångar samt vilka druvor som använts.";
	
	fardighetsobjekt["vissla"].beskrivning="Man kan vissla mycket skickligt och förutom att man kan en hel del melodier kan man även härma diverse fågelkvitter.";
	
	fardighetsobjekt["vontarslevnadsregler"].rubrik="Vontars levnadsregler";
	fardighetsobjekt["vontarslevnadsregler"].beskrivning="";
	
	
	fardighetsobjekt["vaderkannedom"].rubrik="Väderkännedom";
	fardighetsobjekt["vaderkannedom"].beskrivning="För sjömän och vildmarksmän är det i synnerhet viktigt att kunna förutspå vädret så man vet vad man ger sig in i. Det är exakt detta man gör med denne färdighet. Likaså är det en bra färdighet att ha i alldagliga samtal då man har gott om anekdoter.";
	
	fardighetsobjekt["vadja"].rubrik="Vädja";
	fardighetsobjekt["vadja"].beskrivning="Att kasta sig på sina knän, be för sitt liv, totalt förnedra sig själv och slicka uppåt samtidigt som man ursäktar sin själva existens kan göra så att man kan komma undan farliga situationer – om än inte alltid med hedern i behåll.";
	
	fardighetsobjekt["ackla"].rubrik="Äckla";
	fardighetsobjekt["ackla"].beskrivning="Genom att släppa väder, hosta högljutt, smaska, rapa, skråla och bete sig allmänt vedervärdigt kan man få den mest fokuserade att tappa behärskningen.";
	
	fardighetsobjekt["olkannare"].rubrik="Ölkännare";
	fardighetsobjekt["olkannare"].beskrivning="Oavsett om det är underjäst eller överjäst så kan personen klämma ur sig mycket vetskap om ölet och dess härkomst bara genom att smaka på det med sin tränade tunga.";
	
	fardighetsobjekt["orfila"].rubrik="Örfila";
	fardighetsobjekt["orfila"].beskrivning="Den perfekta örfilen, ett svidande slag över ansiktet med handflatan eller handryggen och ett högt klatschande. Av någon anledning har personen en erfarenhet att utdela dessa så att de är både smärtsamma och ljudliga.";
	
	fardighetsobjekt["arkitekt"].beskrivning="Färdigheten används för att ta fram ritningar över allt från slott till koja samt storslagna monument och broar. Färdigheten gör inte att personen kan bygga allt detta, det krävs att personen har rätt hantverksfärdigheter eller hyr in hantverkare.";
	
	fardighetsobjekt["bagare"].beskrivning="Färdigheten används för att baka olika sorters bröd, kakor och bakelser samt för att göra sötsaker. Misslyckade slag kan exempelvis leda till att bakverken inte jäser tillräckligt eller att de blir brända.";
	
	fardighetsobjekt["barberare"].beskrivning="Färdigheten används för att frisera hår och skägg på ett vackert sätt. Där det saknas läkare brukar barberaren sköta sysslor såsom amputering och att få ut flisor ur sår.";
	
	fardighetsobjekt["blackmakare"].rubrik="Bläckmakare";
	fardighetsobjekt["blackmakare"].beskrivning="Färdigheten Bläckmakare används för att tillverka tusch och bläck. Färdigheten kan också användas för att tillverka tillbehör som bläckhorn och bläckpennor.";
	
	fardighetsobjekt["bokbindare"].beskrivning="Färdigheten används för att binda ihop lösblad till böcker samt för att tillverka och utsmycka hållbara pärmar som skyddar boken. Färdigheten kan också användas för att tillverka skriftrullar.";
	
	fardighetsobjekt["bryggare"].beskrivning="Denna färdighet används för att brygga öl, mjöd och svagdricka.";
	
	fardighetsobjekt["boskapsskotare"].rubrik="Boskapsskötare";
	fardighetsobjekt["boskapsskotare"].beskrivning="Insikten om hur man sköter och driver boskap. Färdigheten används också för en mängd sysslor som kan behövas för att hålla boskap – exempelvis hur man mjölkar, fångar, märker, vallar och föser den.";
	
	fardighetsobjekt["brannare"].rubrik="Brännare";
	fardighetsobjekt["brannare"].beskrivning="Färdigheten används för att jäsa och destillera sprit. Den kan också användas för att bränna och krydda vin till starkvin.";
	
	fardighetsobjekt["byggare"].beskrivning="Färdigheten används för att bygga byggnader, avlopp, broar och vägar. Observera dock att själva ritandet av dessa konstruktioner inte omfattas av färdigheten, för detta används färdigheten Arkitekt.";
	
	
	fardighetsobjekt["bagtillverkare"].beskrivning="Denna färdighet används för att tillverka armborst och pilbågar. För tillverkning av pilar används dock hantverksfärdigheten Piltillverkare.";
	
	fardighetsobjekt["batbyggare"].rubrik="Båtbyggare";
	fardighetsobjekt["batbyggare"].beskrivning="Färdigheten används för att bygga mindre båtar och kanoter. Färdigheten ger dessutom kunskap om hur man tillverkar rigg och åror. För större fartyg och skepp används färdigheten Skeppsbyggare.";
	
	fardighetsobjekt["florist"].beskrivning="Kunskapen om blommor av alla de slag, deras symbolik och hur man sätter samman dessa till vackra kreationer.";
	
	fardighetsobjekt["fargare"].rubrik="Färgare";
	fardighetsobjekt["fargare"].beskrivning="Färdigheten används för att färga tyger, textilier och läder. Hantverksfärdigheten Färgare kan också användas för att tillverka textilfärg.";
	
	fardighetsobjekt["forfalskare"].rubrik="Förfalskare";
	fardighetsobjekt["forfalskare"].beskrivning="Den som behärskar denna färdighet är tränad på att härma folks handstilar och signaturer. Om personen inte kan skriva så kan denne bara imitera dem utan att veta vad som står. Dessutom behärskar rollpersonen konsten att förfalska vaxsigill som gör dokument lagliga. Detta kräver att man har rätt utrustning, men att ha förfalskningsutrustning för sigill i Kejsardömet i sin ägo är dock belagt med dödsstraff.";
	
	fardighetsobjekt["garvare"].beskrivning="Färdigheten används för att förbereda skinn, läder och råhudar för vidare bearbetning.";
	
	fardighetsobjekt["gjutare"].beskrivning="Färdigheten används för att gjuta exempelvis kärl, byttor och kittlar i brons, koppar, tenn eller järn. Naturligtvis kan man gjuta även andra (mer ovanliga) metaller. Färdigheten kan också användas för att framställa legeringar, exempelvis brons och mässing.";
	
	fardighetsobjekt["glasblasare"].rubrik="Glasblåsare";
	fardighetsobjekt["glasblasare"].beskrivning="Färdigheten används för att blåsa glas, för såväl flaskor som dricksglas och fönster. Färdigheten ger också kunskaper hur man framställer glasmassa av sand och kemikalier.";
	
	fardighetsobjekt["gobelangvavare"].rubrik="Gobelängvävare";
	fardighetsobjekt["gobelangvavare"].beskrivning="Färdigheten används för att väva och brodera tygtapeter, draperier, gardiner och gobelänger.";
	
	fardighetsobjekt["graverare"].beskrivning="Färdigheten används för att gravera glas och metallföremål. Färdigheten ger också kunskaper i hur man etsar glas och metall.";
	
	fardighetsobjekt["grisodlare"].beskrivning="Den ytterst viktiga kunskapen om hur man föder upp svin samt kunskap om olika typer av galtar, suggor och kultingar. Färdigheten kan också användas för att ge ett lantligt och pålitligt intryck då man pratar med jordbrukare och i synnerhet grisbönder.";
	
	fardighetsobjekt["grovsmed"].beskrivning="Färdigheten används för att tillverka exempelvis plogar, vagnshjul, ankare, krokar och spik. För tillverkning av vapen och rustningar och för guldsmide används dock speciella hantverksfärdigheter.";
	
	fardighetsobjekt["gruvbrytare"].beskrivning="Färdigheten används för att bryta sten, metaller eller ädelstenar ur en gruva. För att bearbeta materialen används Stenhuggare, Guldsmed eller Juvelerare.";
	
	fardighetsobjekt["guldsmed"].beskrivning="Färdigheten används för att utföra klensmide i guld och silver samt för att utföra inläggningar och för att fästa ädelstenar.";
	
	fardighetsobjekt["hovslagare"].beskrivning="Färdigheten används för att smida hästskor och för att sko hästar.";
	
	fardighetsobjekt["harold"].rubrik="Härold";
	fardighetsobjekt["harold"].beskrivning="Färdigheten används för att komponera och måla vapensköldar. Häroldsämbetet är ett av få hantverksyrken som inte anses ovärdigt adeln. För kunskap om olika vapensköldar används expertisen Heraldik.";
	
	fardighetsobjekt["instrumentbyggare"].beskrivning="Färdigheten används för att bygga olika sorters musikinstrument – exempelvis lutor, trummor eller flöjter.";
	
	fardighetsobjekt["jordbrukare"].beskrivning="Ger kunskaper om hur man på bästa sätt sår och vilka grödor som passar bäst med jorden.";
	
	fardighetsobjekt["juvelerare"].beskrivning="Färdigheten används för att slipa ädelstenar till färdiga juveler. Färdigheten kan också användas för att bedöma juvelers kvalitet och till viss utsträckning deras värde.";
	
	fardighetsobjekt["kalligraf"].beskrivning="Denna färdighet används för att utföra skönskrift, illustrationer och illumineringar. Färdigheten ger också kunskaper i hur man förgyller med bladguld.";
	
	fardighetsobjekt["kartritare"].beskrivning="Kunskap om hur man ritar detaljerade kartor över stora landområden men även fästen, grottor och fängelsehålor.";
	
	fardighetsobjekt["klensmed"].beskrivning="Kunskapen om hur man tillverkar mindre föremål av järn och stål.";
	
	fardighetsobjekt["kistmakare"].beskrivning="Färdigheten används för att tillverka allt från små kistor och skrin till större lådor och begravningskistor. Materialet är vanligen trä men även metall förekommer.";
	
	fardighetsobjekt["kock"].beskrivning="En färdighet då man vill laga mat på ett välsmakande sätt. De mest skickliga i denna färdighet är oftast mycket uppskattade inom hoven.";
	
	fardighetsobjekt["kolare"].beskrivning="Kunskapen om hur man framställer träkol samt hur man sköter en kolmila.";
	
	fardighetsobjekt["korgflatare"].rubrik="Korgflätare";
	fardighetsobjekt["korgflatare"].beskrivning="Färdigheten används för att tillverka korgar, burar och andra förvaringskärl. Vanliga material för korgflätning är rotting och vide.";
	
	fardighetsobjekt["krigsmaskinsbyggare"].beskrivning="Färdigheten används för att bygga krigsmaskiner. För att underhålla, transportera och använda maskinerna används expertisen Krigsmaskiner.";
	
	fardighetsobjekt["krukmakare"].beskrivning="Färdigheten används för att tillverka olika sorters keramik – allt från muggar, tallrikar och krus till krukor, vaser och amforor.";
	
	fardighetsobjekt["korsnar"].rubrik="Körsnär";
	fardighetsobjekt["korsnar"].beskrivning="Färdigheten används för att sy klädesplagg i skinn och päls. Vanliga plagg som tillverkas i päls är kappor och mössor. Typiska plagg i skinn är jackor och byxor.";
	
	fardighetsobjekt["lampmakare"].beskrivning="Färdigheten används för att tillverka lyktor, lanternor, oljelampor och glödlådor.";
	
	fardighetsobjekt["ljusstopare"].rubrik="Ljusstöpare";
	fardighetsobjekt["ljusstopare"].beskrivning="Färdigheten används för att tillverka vax- och talgljus.";
	
	fardighetsobjekt["lassmed"].rubrik="Låssmed";
	fardighetsobjekt["lassmed"].beskrivning="Färdigheten används för att tillverka olika sorters lås och nycklar till dessa lås.";
	
	fardighetsobjekt["ladermakare"].rubrik="Lädermakare";
	fardighetsobjekt["ladermakare"].beskrivning="Färdigheten används för att tillverka finare läderartiklar, som exempelvis handskar, bälten och väskor. För att tillverka skor används dock hantverksfärdigheten Skomakare.";
	
	fardighetsobjekt["mattknytare"].beskrivning="Färdigheten används för att knyta mattor. Mattorna kan ha allt från enkla mönster till med mer avancerade mönster med bilder och scenerier.";
	
	fardighetsobjekt["mekaniker"].beskrivning="Färdigheten används för att konstruera och använda avancerade konstruktioner såsom dragverk, vattenverk och urverk. Observera att färdigheten är sällsynt utanför dvärgafästen.";
	
	fardighetsobjekt["metallurg"].beskrivning="Färdigheten ger kunskaper om hur man framställer metaller, hur man framställer legeringar, hur man gjuter samt hur man härdar genom värmebehandling, släckning och hamring.";
	
	fardighetsobjekt["mjolnare"].rubrik="Mjölnare";
	fardighetsobjekt["mjolnare"].beskrivning="Färdigheten används för att slå kornen från agnarna, mala säd till mjöl och sedan sikta mjölet.";
	
	fardighetsobjekt["murare"].beskrivning="Färdigheten används för att bygga väggar och murar med sten eller tegel. Färdigheten kan också användas för att lägga stenplattor, mosaik samt för att tillverka cement och tegel. För att hugga passande stenar krävs dock färdigheten Stenhuggare.";
	
	fardighetsobjekt["myntslagare"].beskrivning="Färdigheten används för att tillverka mynt. Detta sker vanligen genom att slå mynten med en stans så att bilder och text präglas på myntets båda sidor.";
	
	fardighetsobjekt["malare"].rubrik="Målare";
	fardighetsobjekt["malare"].beskrivning="Färdigheten används för att måla både väggar och målningar. Dessutom ger hantverksfärdigheten kunskaper om hur man tillverkar och blandar färger avsedda för dessa ändamål.";
	
	fardighetsobjekt["natknytare"].rubrik="Nätknytare";
	fardighetsobjekt["natknytare"].beskrivning="Färdigheten används för att tillverka fiskenät och fiskeredskap.";
	
	fardighetsobjekt["pergamentmakare"].beskrivning="Färdigheten används för att tillverka pergament av skinn, papyrus av gräs eller papper av lump. Den ger också kunskap om hur man färgar papper.";
	
	fardighetsobjekt["piltillverkare"].beskrivning="Färdigheten används för att tillverka pilar till både bågar och armborst.";
	
	fardighetsobjekt["repslagare"].beskrivning="Färdigheten används för att tillverka rep, linor, trossar och kablar. Hantverksfärdigheten kan också användas för att laga rep och för att splitsa ihop rep.";
	
	fardighetsobjekt["rustningssmed"].beskrivning="Färdigheten används för att tillverka metallrustningar som till exempel ringbrynjor eller metallskenor. För att tillverka vapen används hantverksfärdigheten Vapensmed.";
	
	fardighetsobjekt["sadelmakare"].beskrivning="Färdigheten används för att tillverka sadlar, tyglar, packväskor till riddjur samt ok och selar till dragdjur.";
	
	fardighetsobjekt["segelmakare"].beskrivning="Färdigheten används för att skära till och sy segel till segelfartyg och båtar.";
	
	fardighetsobjekt["skeppsbyggare"].beskrivning="Färdigheten används för att bygga stora havsgående skepp, samt rigg och andra utrustningsdetaljer. För mindre båtar och kanoter används dock hantverksfärdigheten Båtbyggare. Observera att färdigheten Skeppsbyggare bara omfattar kunskaper om hur ett fartyg ska konstrueras – inte hur de delarna tillverkas. För detta ändamål krävs exempelvis färdigheterna Segelmakare, Timmerman, Grovsmed och Repslagare.";
	
	fardighetsobjekt["skomakare"].beskrivning="Färdigheten används för att tillverka skor och stövlar, vanligtvis i skinn eller läder. Denna hantverksfärdighet är besläktad med hantverksfärdigheten Lädermakare.";
	
	fardighetsobjekt["skraddare"].rubrik="Skräddare";
	fardighetsobjekt["skraddare"].beskrivning="Färdigheten används för att sy kläder, som till exempel tunikor, byxor, mantlar och ibland även hattar. För att tillverka tyg krävs dock färdigheten Vävare.";
	
	fardighetsobjekt["skulptor"].rubrik="Skulptör";
	fardighetsobjekt["skulptor"].beskrivning="Färdigheten används för att utforma konstföremål av sten, metall eller lera. Observera att färdigheten Stenhuggare är nödvändig för att hugga sten.";
	
	fardighetsobjekt["slaktare"].beskrivning="Färdigheten används för att förbereda, slakta och stycka djur på bästa sätt.";
	
	fardighetsobjekt["snickare"].beskrivning="Färdigheten används för att snickra möbler, inredningsdetaljer, utensilier och så vidare. För träsniderier används dock som regel hantverksfärdigheten Träsnidare.";
	
	fardighetsobjekt["spegelmakare"].beskrivning="Färdigheten används för att planslipa glas och försilvra det. Hantverksfärdigheten omfattar även tillverkning av bronsspeglar.";
	
	fardighetsobjekt["stenhuggare"].beskrivning="Färdigheten används för att hugga sten så att de passar för vidare användning. Färdigheten ger också kunskap om hur man hugger stenstatyer. För att formge statyer behövs dock hantverksfärdigheten Skulptör.";
	
	fardighetsobjekt["tandsmed"].beskrivning="Färdigheten används för att laga, dra ut och ersätta folks tänder. I färdigheten ingår även kunskapen hur man tillverkar guld- eller silvertänder.";
	
	fardighetsobjekt["tatuerare"].beskrivning="Kunskapen hur man använder sig utav vassa verktyg och bläck för att skapa mönster på människokroppen.";
	
	fardighetsobjekt["timmerman"].beskrivning="Färdigheten används för att anlägga bjälkar, stolpar och takstolar vid exempelvis husbygge. Färdigheten ger också kunskap om egenskaper hos timmer och vad det är lämpligt till.";
	
	fardighetsobjekt["tradgardsskotare"].rubrik="Trädgårdsskötare";
	fardighetsobjekt["tradgardsskotare"].beskrivning="Färdigheten används för att anlägga ståtliga trädgårdar och se till att de passar dess ägare. Vilka växter som blommar när, vilka som trivs i skuggan och de som trivs i solen.";
	
	fardighetsobjekt["trasnidare"].rubrik="Träsnidare";
	fardighetsobjekt["trasnidare"].beskrivning="Färdigheten används för att utföra fina snickeriarbeten, snida utsmyckningar i trä och för att tillverka träskulpturer för olika ändamål. Träsnidare tillverkar till exempel skedar, trämuggar och trätallrikar.";
	
	fardighetsobjekt["tunnbindare"].beskrivning="Färdigheten används för att bygga och binda tunnor av olika storlekar.";
	
	fardighetsobjekt["vagnbyggare"].beskrivning="Färdigheten används för att tillverka vagnar och kärror. Den ger också kunskaper om hur man tillverkar hjul och slädar.";
	
	fardighetsobjekt["vapensmed"].beskrivning="Färdigheten används för att smida vapen av metall. Den ger också kunskaper om hur man härdar och slutbehandlar för att få vassa och starka vapen.";
	
	fardighetsobjekt["vinjasare"].rubrik="Vinjäsare";
	fardighetsobjekt["vinjasare"].beskrivning="Färdigheten används för att tillverka vin av frukt, vanligen druvor. Färdigheten ger kunskaper om druvor och deras kvalitet, hur man pressar druvor, jäser och lagrar vin.";
	
	fardighetsobjekt["vavare"].rubrik="Vävare";
	fardighetsobjekt["vavare"].beskrivning="Färdigheten används för att väva tyger och enklare vävda mattor. För mattknytning måste dock hantverksfärdigheten Mattknytare användas.";
	
		fardighetsobjekt["alldagligtutseende"].rubrik="Alldagligt utseende"; 
	fardighetsobjekt["alldagligtutseende"].beskrivning="Rollpersonen har ett utseende som är ytterst alldagligt. De flesta har mycket svårt att komma ihåg exakt hur rollpersonen såg ut då denne tycks smälta in med gemene man av sitt folk."; 

	fardighetsobjekt["allvarliguppsyn"].rubrik="Allvarlig uppsyn"; 
	fardighetsobjekt["allvarliguppsyn"].beskrivning="Med sin blotta blick kan personen få vem som helst att inse stundens allvar."; 

	fardighetsobjekt["allatare"].rubrik="Allätare"; 
	fardighetsobjekt["allatare"].beskrivning="Personen tycks kunna äta vad som helst utan att bli sjuk: skämd mat, rått kött, gräs och daggmaskar. Personen får slå med färdigheten istället för Livskraft om färdigheten är högre då det gäller att motstå illamående eller sjukdomar. Dessutom har personen lätt för att hitta något ätbart i stort sett överallt."; 

	fardighetsobjekt["auraavobehag"].rubrik="Aura av obehag"; 
	fardighetsobjekt["auraavobehag"].beskrivning="Det är något obehagligt med personen. En krypande olustig känsla."; 

	fardighetsobjekt["auraavsjalvsakerhet"].rubrik="Aura av självsäkerhet"; 
	fardighetsobjekt["auraavsjalvsakerhet"].beskrivning="Personen har förmågan att verka totalt självsäker på sig själv och vad denne säger. All osäkerhet är väl dold."; 

	fardighetsobjekt["avvikandeogonfarg"].rubrik="Avvikande ögonfärg"; 
	fardighetsobjekt["avvikandeogonfarg"].beskrivning="Personen har en ögonfärg som avviker från det normala. Det kan vara allt från rubinröda, violetta, gyllene, smaragdgröna till en iris som ser ut att höra hemma på en varg eller uggla. Beroende på hur det kan se ut kan detta ses som fascinerande eller skrämmande."; 

	fardighetsobjekt["balanssinne"].rubrik="Balanssinne"; 
	fardighetsobjekt["balanssinne"].beskrivning="Personen har mycket god balans och har lätt att hålla sig på fötter och balansera på smala avsatser."; 

	fardighetsobjekt["barnvan"].rubrik="Barnvän"; 
	fardighetsobjekt["barnvan"].beskrivning="Barn samt misslor känner sig trygga i personens närvaro och söker sig till denna och visar stor tillit och förtrogenhet."; 

	fardighetsobjekt["blekochkall"].rubrik="Blek och kall"; 
	fardighetsobjekt["blekochkall"].beskrivning="Rollpersonen är mycket blek och kall och kan med lätthet och trovärdighet spela död. Det är mycket svårt för någon annan att avgöra om denne verkligen är vid liv (ett motståndsslag mellan läkekonst och denna färdighet)."; 

	fardighetsobjekt["bojlig"].rubrik="Böjlig"; 
	fardighetsobjekt["bojlig"].beskrivning="Personen har mycket böjlig kropp och kan använda detta för att slingra sig ur rep, bojor samt utföra ovanliga och ormlika manövrar."; 

	fardighetsobjekt["charmerandeleende"].rubrik="Charmerande leende"; 
	fardighetsobjekt["charmerandeleende"].beskrivning="Personens leende lyser upp de flesta situationer."; 

	fardighetsobjekt["djurvan"].rubrik="Djurvän"; 
	fardighetsobjekt["djurvan"].beskrivning="Personen har en mycket lugn inverkan på djur och kan med lugn röst försöka få dem att inte anfalla denne eller att inte skälla. Detta gäller så länge som inte djuret är stressat eller i full strid."; 

	fardighetsobjekt["elementkannare"].rubrik="Elementkännare"; 
	fardighetsobjekt["elementkannare"].beskrivning="Rollpersonen kan så gott som alltid känna sig till om det finns guld i berget, vatten under jorden eller liknande."; 

	
	fardighetsobjekt["finlemmadehander"].rubrik="Finlemmade händer"; 
	fardighetsobjekt["finlemmadehander"].beskrivning="Rollpersonens händer är mycket välvårdade och vackra."; 

	fardighetsobjekt["flinktunga"].rubrik="Flink tunga"; 
	fardighetsobjekt["flinktunga"].beskrivning="Personen har en mycket flink och rörlig tunga som kan slå knut på en körsbärsstjälk och är mycket uppskattad."; 

	fardighetsobjekt["fraknar"].rubrik="Fräknar"; 
	fardighetsobjekt["fraknar"].beskrivning="Rollpersonen har rikligt med fräknar över sitt ansikte som ger denne ett utseende som många finner charmigt."; 

	fardighetsobjekt["fodelsemarke"].rubrik="Födelsemärke"; 
	fardighetsobjekt["fodelsemarke"].beskrivning="Rollpersonen har ett födelsemärke på sin kropp som ser mycket speciellt ut. Dess form och utseende får spelaren definiera och likaså vad åskådare vanligen har för reaktioner på det."; 

	fardighetsobjekt["foraktfullmin"].rubrik="Föraktfull min"; 
	fardighetsobjekt["foraktfullmin"].beskrivning="Rollpersonen kan få till en föraktfull och totalt nedsättande min."; 

	fardighetsobjekt["genomtrangandeblick"].rubrik="Genomträngande blick"; 
	fardighetsobjekt["genomtrangandeblick"].beskrivning="Personen har en blick som är mycket intensiv och de som försöker ljuga för en blir mycket besvärade."; 

	fardighetsobjekt["gestikulerande"].rubrik="Gestikulerande"; 
	fardighetsobjekt["gestikulerande"].beskrivning="Personen gestikulerar när denne talar. Det kan röra sig om höjda fingrar i varning, handen för hjärtat, näven i bordet eller liknande. Personen kan via sina gester kommunicera med folk som inte pratar dennes språk och få fram enkla budskap. Dessutom kan denne utföra imponerande bugningar, religiösa symboler (som Daaks triangel) och en mängd olika hälsningar på ett värdigt och vackert sätt."; 

	fardighetsobjekt["gottminne"].rubrik="Gott minne"; 
	fardighetsobjekt["gottminne"].beskrivning="Personen har ett mycket gott minne och minns namn, platser och konversationer med stor tydlighet."; 

	fardighetsobjekt["gracios"].rubrik="Graciös"; 
	fardighetsobjekt["gracios"].beskrivning="Personen rör sig mycket graciöst och med stor värdighet."; 

	fardighetsobjekt["hederligtintryck"].rubrik="Hederligt intryck"; 
	fardighetsobjekt["hederligtintryck"].beskrivning="Personen ger ett gott intryck och folk ser denna som hederlig och pålitlig."; 

	fardighetsobjekt["hotfullstamma"].rubrik="Hotfull stämma"; 
	fardighetsobjekt["hotfullstamma"].beskrivning="Personens röst är hotfull. Den kan vara grov och rosslig eller bara ha en stålklang eller iskyla. De ord som lämnar personens läppar skapar obehag och respekt."; 

	fardighetsobjekt["hanskratt"].rubrik="Hånskratt"; 
	fardighetsobjekt["hanskratt"].beskrivning="Personen har ett hånfullt skratt som ofta kan vara nedsättande och ibland ses som en smula galet."; 

	fardighetsobjekt["ingerlugn"].rubrik="Inger lugn"; 
	fardighetsobjekt["ingerlugn"].beskrivning="Personens blotta närvaro har en lugnande effekt på personer i omgivningen."; 

	fardighetsobjekt["isandetystnad"].rubrik="Isande tystnad"; 
	fardighetsobjekt["isandetystnad"].beskrivning="Rollpersonen vet hur man använder isande tystnad för att göra personer nervösa och illa till mods."; 

	fardighetsobjekt["klingandeskratt"].rubrik="Klingande skratt"; 
	fardighetsobjekt["klingandeskratt"].beskrivning="Personen har ett mycket vackert och charmerande skratt."; 

	fardighetsobjekt["klariallt"].rubrik="Klär i allt"; 
	fardighetsobjekt["klariallt"].beskrivning="Oavsett vad rollpersonen har på sig för kläder så matchar alltid denne väl med plaggen. Det spelar ingen roll om det är en toga, blodig rustning eller trasor, allt blir snyggt."; 

	fardighetsobjekt["luktargott"].rubrik="Luktar gott"; 
	fardighetsobjekt["luktargott"].beskrivning="Personen tycks alltid lukta gott och omges av en naturlig doft som är mycket tilltalande."; 

	fardighetsobjekt["luktsinne"].rubrik="Luktsinne"; 
	fardighetsobjekt["luktsinne"].beskrivning="Rollpersonen har ett väl utvecklat luktsinne som kommer väl till pass vid såväl matlagning som jakt."; 

	fardighetsobjekt["missbildning"].rubrik="Missbildning"; 
	fardighetsobjekt["missbildning"].beskrivning="Personen har någon typ av missbildning. Detta kan röra sig om en puckel, harmynthet, ett extra finger på en hand, en tredje bröstvårta, ett stort avvikande födelsemärke någonstans på kroppen eller något så avvikande såsom klor, päls, ormpupiller eller liknande. "; 

	
	
	fardighetsobjekt["pedant"].rubrik="Pedant"; 
	fardighetsobjekt["pedant"].beskrivning="Rollpersonen har en pedantisk ordning på allt och har en noga koll på var allt är, i vilken ordning saker ska ligga och när det blir för stökigt så tenderar denne till att bli nervös eller irriterad."; 

	fardighetsobjekt["perfekthy"].rubrik="Perfekt hy"; 
	fardighetsobjekt["perfekthy"].beskrivning="Personen har en fläckfri och perfekt hy."; 

	fardighetsobjekt["proper"].rubrik="Proper"; 
	fardighetsobjekt["proper"].beskrivning="Personen är alltid mycket proper och välvårdad. Detta kan antingen vara på grund av att personen är mycket noga och metodiskt tvättar och stryker ut sina kläder eller så faller sig det bara naturligt."; 

	fardighetsobjekt["romantiker"].rubrik="Romantiker"; 
	fardighetsobjekt["romantiker"].beskrivning="Rollpersonen är en obotlig romantiker. Kärlekshistorier och -låtar kan lätt få denne till tårar och någonstans djupt inne så är det kärleken som kallar."; 

	fardighetsobjekt["serdumut"].rubrik="Ser dum ut"; 
	fardighetsobjekt["serdumut"].beskrivning="Rollpersonen ser dum ut. Kanske är detta på grund av insjunkna ögon, hög panna och grov käke, ett grobianliknande utseende, eller kanske bara en tom och oförstående blick. Detta gör att många tar rollpersonen för ointelligent."; 

	fardighetsobjekt["sersvagheter"].rubrik="Ser svagheter"; 
	fardighetsobjekt["sersvagheter"].beskrivning="Personen har en naturlig fallenhet att se folks laster, lustar och andra svagheter."; 

	fardighetsobjekt["sjukligtutseende"].rubrik="Sjukligt utseende"; 
	fardighetsobjekt["sjukligtutseende"].beskrivning="Det är något sjukligt över personens utseende. Folk kanske passar sig för att inte bli smittade eller så försöker de hjälpa denne."; 

	fardighetsobjekt["skrammandeutseende"].rubrik="Skrämmande utseende"; 
	fardighetsobjekt["skrammandeutseende"].beskrivning="Personen har något hotfullt och skrämmande över sig och bara utseendet kan få folk att passa sig."; 

	fardighetsobjekt["skarpaanletsdrag"].rubrik="Skarpa anletsdrag"; 
	fardighetsobjekt["skarpaanletsdrag"].beskrivning="Personen har skarpa och definierade anletsdrag."; 

	fardighetsobjekt["struktureratsinne"].rubrik="Strukturerat sinne"; 
	fardighetsobjekt["struktureratsinne"].beskrivning="Personen har ett mycket strukturerat sinne och upptäcker avvikelser och oegentligheter samt är skicklig på att lägga upp planer."; 

	fardighetsobjekt["tatuering"].rubrik="Tatuering"; 
	fardighetsobjekt["tatuering"].beskrivning="Rollpersonen har en stor tatuering över kroppen. Kanske är den i form av slingrande mönster eller något exotiskt motiv. Tatueringen är hur som helst exceptionellt välgjord och väcker stor uppmärksamhet om den visas."; 

	fardighetsobjekt["trollbindandeblick"].rubrik="Trollbindande blick"; 
	fardighetsobjekt["trollbindandeblick"].beskrivning="Personen har en blick som lätt kan trollbinda personer."; 

	fardighetsobjekt["utbrott"].rubrik="Utbrott"; 
	fardighetsobjekt["utbrott"].beskrivning="Personen kan få dramatiska utbrott. Det kan vara allt ifrån höga skrik och gobelänger som slits ned till lergods som slås sönder."; 

	fardighetsobjekt["vassatander"].rubrik="Vassa tänder"; 
	fardighetsobjekt["vassatander"].beskrivning="Personen har tänder som är betydligt mer spetsiga och djuriska än vad som är vanligt. På en människa kan det röra sig om spetsiga hörntänder och hos en tirak är det långa och sylvassa betar. Detta ses vanligen som skrämmande och hotfullt och många misstänker att personen kan vara en varulv eller har andra kopplingar till det djuriska och onaturliga."; 

	fardighetsobjekt["valformadkropp"].rubrik="Välformad kropp"; 
	fardighetsobjekt["valformadkropp"].beskrivning="Personen har en välskapad och vacker kropp som drar till sig andras uppmärksamhet."; 

	fardighetsobjekt["valkomnandeaura"].rubrik="Välkomnande aura"; 
	fardighetsobjekt["valkomnandeaura"].beskrivning="Personen har en förmåga att få såväl vänner som obekanta att känna sig välkomnade i dennes sällskap."; 

	fardighetsobjekt["valvardathar"].rubrik="Välvårdat hår"; 
	fardighetsobjekt["valvardathar"].beskrivning="Personens hår är mycket välvårdat och speciellt på något sätt. Kanske är det ovanligt långt, skiner i en sällsam lyster eller något liknande. För män gäller detta även skäggväxten. Barberare frågar ständigt vilka typer av oljor och medel personen använt för att få håret i så pass gott skick."; 

	fardighetsobjekt["arligtansikte"].rubrik="Ärligt ansikte"; 
	fardighetsobjekt["arligtansikte"].beskrivning="Rollpersonen har ett öppet och ärligt ansikte. Det ser verkligen ut som att man kan se direkt vad denne tänker. Kanske är det så... eller så är det måhända bara en skicklig fasad."; 

	fardighetsobjekt["arr"].rubrik="Ärr"; 
	fardighetsobjekt["arr"].beskrivning="Rollpersonen har ett ärr över sitt ansikte som inger respekt och ger denne ett hotfullt utseende."; 
	
	//Språk
	fardighetsobjekt["lagrejargiska"].rubrik="Lägre jargiska";
	
	
	
	fardighetsobjekt["skarptminne"].rubrik="Skarpt minne";
	fardighetsobjekt["skarptminne"].beskrivning="";
	
	fardighetsobjekt["nattsyn"].beskrivning="";
	fardighetsobjekt["nattsyn"].tabell=0;
	
	fardighetsobjekt["empatiskberoring"].rubrik="Empatisk beröring";
	fardighetsobjekt["empatiskberoring"].beskrivning="";
	
	fardighetsobjekt["luktsinne"].beskrivning="";
	fardighetsobjekt["luktsinne"].tabell=0;
	
	fardighetsobjekt["morkersyn"].rubrik="Mörkersyn";
	fardighetsobjekt["morkersyn"].beskrivning="";
	fardighetsobjekt["morkersyn"].tabell=0;
	
	fardighetsobjekt["daligtrykte"].rubrik="Dåligt rykte";
	fardighetsobjekt["daligtrykte"].beskrivning="";
	
	fardighetsobjekt["obegriplighandstil"].rubrik="Obegriplig handstil"; 
	fardighetsobjekt["obegriplighandstil"].beskrivning=""; 
	
	fardighetsobjekt["sanndrommar"].rubrik="Sanndrömmar"; 
	fardighetsobjekt["sanndrommar"].beskrivning=""; 
	
	fardighetsobjekt["dodskunskap"].rubrik="Dödskunskap"; 
	fardighetsobjekt["dodskunskap"].beskrivning=""; 
	
	fardighetsobjekt["suntfornuft"].rubrik="Sunt förnuft"; 
	fardighetsobjekt["suntfornuft"].beskrivning=""; 
	
	fardighetsobjekt["drakkunskap"].rubrik="Drakkunskap"; 
	fardighetsobjekt["drakkunskap"].beskrivning=""; 
	
	fardighetsobjekt["daligaideer"].rubrik="Dåliga idéer"; 
	fardighetsobjekt["daligaideer"].beskrivning=""; 
	
	fardighetsobjekt["automatskrift"].rubrik="Automatskrift"; 
	fardighetsobjekt["automatskrift"].beskrivning=""; 
	
	fardighetsobjekt["sjoslag"].rubrik="Sjöslag"; 
	fardighetsobjekt["sjoslag"].beskrivning=""; 
	
	fardighetsobjekt["romantiker"].rubrik="Romantiker"; 
	fardighetsobjekt["romantiker"].beskrivning=""; 
	
	fardighetsobjekt["anatomi"].rubrik="Anatomi"; 
	fardighetsobjekt["anatomi"].beskrivning=""; 
	
	fardighetsobjekt["sundkost"].rubrik="Sund kost"; 
	fardighetsobjekt["sundkost"].beskrivning=""; 
	
	fardighetsobjekt["rastlos"].rubrik="Rastlös"; 
	fardighetsobjekt["rastlos"].beskrivning=""; 
	
	fardighetsobjekt["magiskgeometri"].rubrik="Magisk geometri"; 
	fardighetsobjekt["magiskgeometri"].beskrivning=""; 
	
	fardighetsobjekt["adelskontakter"].rubrik="Adelskontakter"; 
	fardighetsobjekt["adelskontakter"].beskrivning=""; 
	
	fardighetsobjekt["grata"].rubrik="Gråta"; 
	fardighetsobjekt["grata"].beskrivning=""; 
	
	fardighetsobjekt["olycksbadandeuppenbarelse"].rubrik="Olycksbådande uppenbarelse"; 
	fardighetsobjekt["olycksbadandeuppenbarelse"].beskrivning=""; 
	
	fardighetsobjekt["byrakrati"].rubrik="Byråkrati"; 
	fardighetsobjekt["byrakrati"].beskrivning=""; 
	
	fardighetsobjekt["dodsangest"].rubrik="Dödsångest"; 
	fardighetsobjekt["dodsangest"].beskrivning=""; 
	
	fardighetsobjekt["skugglandsfard"].rubrik="Skugglandsfard"; 
	fardighetsobjekt["skugglandsfard"].beskrivning=""; 
	
	fardighetsobjekt["filosofi"].rubrik="Filosofi"; 
	fardighetsobjekt["filosofi"].styrandeattribut="visdom"; 
	fardighetsobjekt["filosofi"].grundtarningar=0; 
	fardighetsobjekt["filosofi"].beskrivning="Med denna färdighet har rollpersonen kunskaper om vad olika stora tänkare har för teorier om livet, döden och världen som sådan. Färdigheten ger också kunskaper om vilka grundläggande tankegångar som finns inom olika religioner, magiskolor och liknande."; 

	fardighetsobjekt["geografi"].rubrik="Geografi"; 
	fardighetsobjekt["geografi"].styrandeattribut="visdom"; 
	fardighetsobjekt["geografi"].grundtarningar=0; 
	fardighetsobjekt["geografi"].beskrivning="Geografi ger kunskaper om hur länder ser ut, var floder rinner, hur bergen ser ut och var städerna är belägna. Exakta kartor är svåra att få tag på och den här färdigheten är därför ofta ganska osäker. Kunskaperna i Geografi är ofta bäst om områden nära hemorten. Ju längre bort från hemorten man är, desto svårare är det att veta något om området."; 

	fardighetsobjekt["gifterdroger"].rubrik="Gifter \& droger"; 
	fardighetsobjekt["gifterdroger"].styrandeattribut="visdom"; 
	fardighetsobjekt["gifterdroger"].grundtarningar=0; 
	fardighetsobjekt["gifterdroger"].beskrivning="Rollpersoner med färdigheten Gifter \& droger vet hur man framställer olika sorters gifter och droger samt var dessa kan finnas att få tag på. Dessutom vet denne vilka motgift som finns och hur dessa tillverkas."; 

	fardighetsobjekt["handel"].rubrik="Handel"; 
	fardighetsobjekt["handel"].styrandeattribut="visdom"; 
	fardighetsobjekt["handel"].grundtarningar=1; 
	fardighetsobjekt["handel"].beskrivning="Färdigheten ger kunskaper om hur man bedriver handel genom att köpa och sälja varor samt hur man värderar dessa. Den är också användbar för att veta var olika handelsvaror är billiga och var efterfrågan är stor."; 

	fardighetsobjekt["historia"].rubrik="Historia"; 
	fardighetsobjekt["historia"].styrandeattribut="visdom"; 
	fardighetsobjekt["historia"].grundtarningar=0; 
	fardighetsobjekt["historia"].beskrivning="I Mundana är historiekunskapen förutom legender, myter och sagor dessutom baserad på skriftliga dokument bevarade från forna tider. Det mesta är dock skrivet ytterst subjektivt och det krävs mycket arbete för att få fram ett korrekt historiskt skede."; 

	fardighetsobjekt["kalkylera"].rubrik="Kalkylera"; 
	fardighetsobjekt["kalkylera"].styrandeattribut="visdom"; 
	fardighetsobjekt["kalkylera"].grundtarningar=0; 
	fardighetsobjekt["kalkylera"].beskrivning="Kalkylera handlar dels om ett stort matematiskt kunnande men även möjligheten att omsätta detta i praktiken. Med färdigheten kan man beräkna kastbanan för en katapult, konstruera en ritning för hur en träbro ska byggas för att hålla för två vagnar eller hur man bygger en fördämning. Färdigheten är vanlig hos de flesta lärda."; 

	fardighetsobjekt["kirurgi"].rubrik="Kirurgi"; 
	fardighetsobjekt["kirurgi"].styrandeattribut="visdom"; 
	fardighetsobjekt["kirurgi"].grundtarningar=0; 
	fardighetsobjekt["kirurgi"].beskrivning="Kirurgi ger kunskap om kroppens inre organ och dess funktioner. Dessutom används färdigheten för att utföra operationer för att få bukt med inre skador även om detta kan vara mycket riskabelt. Kirurgi ses på med stor misstänksamhet och i vissa områden är den till och med brottsligt då de som lärt sig operera vanligen öppnat upp och studerat lik."; 

	fardighetsobjekt["krigforing"].rubrik="Krigföring"; 
	fardighetsobjekt["krigforing"].styrandeattribut="visdom"; 
	fardighetsobjekt["krigforing"].grundtarningar=0; 
	fardighetsobjekt["krigforing"].beskrivning="Denna färdighet ger kunskaper om strategi, taktik och understöd för militära enheter i krig. Rollpersonen får en överblick över läget och bra idéer om vad som skulle kunna göras. Den kan även användas för att förutsäga vad fienden ska ta sig till härnäst."; 

	fardighetsobjekt["kulturkannedom"].rubrik="Kulturkännedom"; 
	fardighetsobjekt["kulturkannedom"].styrandeattribut="visdom"; 
	fardighetsobjekt["kulturkannedom"].grundtarningar=0; 
	fardighetsobjekt["kulturkannedom"].beskrivning="Denna färdighet beskriver kunskaper om folkslagen, deras kulturer och hur man lever i olika länder. Färdigheten kan till exempel användas om rollpersonen besöker ett främmande land med andra sedvänjor."; 

	fardighetsobjekt["lagkunskap"].rubrik="Lagkunskap"; 
	fardighetsobjekt["lagkunskap"].styrandeattribut="visdom"; 
	fardighetsobjekt["lagkunskap"].grundtarningar=0; 
	fardighetsobjekt["lagkunskap"].beskrivning="Denna färdighet ger rollpersonens kunskap om lagen och rättsväsendet. Den kan användas för att ta reda på det som står i lagboken eller hur härskare har dömt genom tiderna."; 

	fardighetsobjekt["lakekonst"].rubrik="Läkekonst"; 
	fardighetsobjekt["lakekonst"].styrandeattribut="visdom"; 
	fardighetsobjekt["lakekonst"].grundtarningar=0; 
	fardighetsobjekt["lakekonst"].beskrivning="Läkekonst används för att vårda skadade och sjuka personer. Färdigheten ger kunskap om hur man förbinder sår, tillser snabbare läkning och lindrar smärta. Läkekonst används också för att fastställa orsaker till sjukdomar och förgiftningar. Denna färdighet är inte endast vanlig hos helare och läkare utan även hos soldater och andra som riskerar skador i sitt arbete. "; 

	fardighetsobjekt["ockultism"].rubrik="Ockultism"; 
	fardighetsobjekt["ockultism"].styrandeattribut="visdom"; 
	fardighetsobjekt["ockultism"].grundtarningar=0; 
	fardighetsobjekt["ockultism"].beskrivning="Ockultism är kunskapen om det fördolda. Man har en inblick i det övernaturliga och har en övergripande kunskap om gudar, demoner, religioner, kulter, ceremonier, ritualer, schamanism, alkemi och andra mystiska ting. Den ger även en insikt i folktro och till en viss del sägner. Observera att ockultism inte ger någon som helst förmåga att utföra heliga riter, ritualer, alkemi, schamanism eller besvärjelser."; 

	fardighetsobjekt["teologi"].rubrik="Teologi"; 
	fardighetsobjekt["teologi"].styrandeattribut="visdom"; 
	fardighetsobjekt["teologi"].grundtarningar=0; 
	fardighetsobjekt["teologi"].beskrivning="Teologi är insikten i allt som rör en specifik religion och dess lagar. Färdigheten ger en djupgående förståelse för religionen och alla dess avarter. Med färdigheten har man insikt i de olika religiösa skrifterna, kända profeter, helgon, ledare samt att man kan citera och proklamera diverse budord. I Jargien är guden Daak den dominerande."; 

	fardighetsobjekt["teoretiskmagi"].rubrik="Teoretisk magi"; 
	fardighetsobjekt["teoretiskmagi"].styrandeattribut="visdom"; 
	fardighetsobjekt["teoretiskmagi"].grundtarningar=0; 
	fardighetsobjekt["teoretiskmagi"].beskrivning="Teoretisk magi är en kunskapsfärdighet som omfattar all teoretisk kunskap som rör magi, alkemi, besvärjelser, ritualer, ceremonier, magiska varelser, magiska beräkningar, kraftlinjer och mycket annat. Observera att färdigheten inte ger någon som helst praktisk kunskap om hur man använder magi."; 

	fardighetsobjekt["undervisa"].rubrik="Undervisa"; 
	fardighetsobjekt["undervisa"].styrandeattribut="visdom"; 
	fardighetsobjekt["undervisa"].grundtarningar=0; 
	fardighetsobjekt["undervisa"].beskrivning="Detta är färdigheten som används när man ska förmedla sina kunskaper på ett pedagogiskt och lättförståligt sätt. Den används nästan uteslutande av akademiker samt män och kvinnor av kyrkan. Likaså kan färdigheten användas för att lägga fram ens tes på ett strukturerat sätt under en diskussion."; 

	fardighetsobjekt["ceremoni"].rubrik="Ceremoni"; 
	fardighetsobjekt["ceremoni"].styrandeattribut="visdom"; 
	fardighetsobjekt["ceremoni"].grundtarningar=0; 
	fardighetsobjekt["ceremoni"].beskrivning="Färdigheten används för att utföra moment i en helig rit. Ceremonislagen syftar till att be om gudomlig kraft som senare i riten manifesteras i världen genom färdigheten Kanalisera."; 

	fardighetsobjekt["fornimma"].rubrik="Förnimma"; 
	fardighetsobjekt["fornimma"].styrandeattribut="visdom"; 
	fardighetsobjekt["fornimma"].grundtarningar=0; 
	fardighetsobjekt["fornimma"].beskrivning="Förnimma används för att känna av mystiska fenomen. Det kan handla om allt från att analysera reliker till att identifiera magiska platser eller att märka om någon väver besvärjelser i närheten. Inkvisitorer använder ofta färdigheten för att upptäcka och avslöja sina fiender."; 

	fardighetsobjekt["forvranga"].rubrik="Förvränga"; 
	fardighetsobjekt["forvranga"].styrandeattribut="visdom"; 
	fardighetsobjekt["forvranga"].grundtarningar=0; 
	fardighetsobjekt["forvranga"].beskrivning="När man utsätts för en bön eller besvärjelse används Förvränga för att riva upp den mystiska väven. Färdigheten är därför mycket användbar för den som kämpar mot mystiker."; 

	fardighetsobjekt["kanalisera"].rubrik="Kanalisera"; 
	fardighetsobjekt["kanalisera"].styrandeattribut="visdom"; 
	fardighetsobjekt["kanalisera"].grundtarningar=0; 
	fardighetsobjekt["kanalisera"].beskrivning="Personen har lärt sig att öppna sitt sinne och kan när denne koncentrerar sig känna och använda sig av de krafter som håller världen samman och de energier som strömmar mellan troende, gudar och demoner. Kanalisera används dels i heliga riter tillsammans med färdigheten Ceremoni och dels ensamt i böner."; 
	
	fardighetsobjekt["astrotropi"].rubrik="Astrotropi"; 
	fardighetsobjekt["astrotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["astrotropi"].grundtarningar=0; 
	fardighetsobjekt["astrotropi"].beskrivning=""; 
	
	fardighetsobjekt["kosmotropi"].rubrik="Kosmotropi"; 
	fardighetsobjekt["kosmotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["kosmotropi"].grundtarningar=0; 
	fardighetsobjekt["kosmotropi"].beskrivning=""; 
	
	fardighetsobjekt["heliotropi"].rubrik="Heliotropi"; 
	fardighetsobjekt["heliotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["heliotropi"].grundtarningar=0; 
	fardighetsobjekt["heliotropi"].beskrivning=""; 
	
	fardighetsobjekt["selenotropi"].rubrik="Selenotropi"; 
	fardighetsobjekt["selenotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["selenotropi"].grundtarningar=0; 
	fardighetsobjekt["selenotropi"].beskrivning=""; 
	
	fardighetsobjekt["ataxotropi"].rubrik="Ataxotropi"; 
	fardighetsobjekt["ataxotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["ataxotropi"].grundtarningar=0; 
	fardighetsobjekt["ataxotropi"].beskrivning=""; 
	
	fardighetsobjekt["nomotropi"].rubrik="Nomotropi"; 
	fardighetsobjekt["nomotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["nomotropi"].grundtarningar=0; 
	fardighetsobjekt["nomotropi"].beskrivning=""; 
	
	fardighetsobjekt["topotropi"].rubrik="Topotropi"; 
	fardighetsobjekt["topotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["topotropi"].grundtarningar=0; 
	fardighetsobjekt["topotropi"].beskrivning=""; 
	
	fardighetsobjekt["kronotropi"].rubrik="Kronotropi"; 
	fardighetsobjekt["kronotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["kronotropi"].grundtarningar=0; 
	fardighetsobjekt["kronotropi"].beskrivning=""; 
	
	fardighetsobjekt["geotropi"].rubrik="Geotropi"; 
	fardighetsobjekt["geotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["geotropi"].grundtarningar=0; 
	fardighetsobjekt["geotropi"].beskrivning=""; 
	
	fardighetsobjekt["hydrotropi"].rubrik="Hydrotropi"; 
	fardighetsobjekt["hydrotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["hydrotropi"].grundtarningar=0; 
	fardighetsobjekt["hydrotropi"].beskrivning=""; 
	
	fardighetsobjekt["pneumotropi"].rubrik="Pneumotropi"; 
	fardighetsobjekt["pneumotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["pneumotropi"].grundtarningar=0; 
	fardighetsobjekt["pneumotropi"].beskrivning=""; 
	
	fardighetsobjekt["pyrotropi"].rubrik="Pyrotropi"; 
	fardighetsobjekt["pyrotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["pyrotropi"].grundtarningar=0; 
	fardighetsobjekt["pyrotropi"].beskrivning=""; 
	
	fardighetsobjekt["semotropi"].rubrik="Semotropi"; 
	fardighetsobjekt["semotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["semotropi"].grundtarningar=0; 
	fardighetsobjekt["astrotropi"].beskrivning=""; 
	
	fardighetsobjekt["ikonotropi"].rubrik="Ikonotropi"; 
	fardighetsobjekt["ikonotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["ikonotropi"].grundtarningar=0; 
	fardighetsobjekt["ikonotropi"].beskrivning=""; 
	
	fardighetsobjekt["biotropi"].rubrik="Biotropi"; 
	fardighetsobjekt["biotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["biotropi"].grundtarningar=0; 
	fardighetsobjekt["biotropi"].beskrivning=""; 
	
	fardighetsobjekt["nekrotropi"].rubrik="Nekrotropi"; 
	fardighetsobjekt["nekrotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["nekrotropi"].grundtarningar=0; 
	fardighetsobjekt["nekrotropi"].beskrivning=""; 
	
	fardighetsobjekt["astrotropi"].rubrik="Termotropi"; 
	fardighetsobjekt["termotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["termotropi"].grundtarningar=0; 
	fardighetsobjekt["termotropi"].beskrivning=""; 
	
	fardighetsobjekt["kryotropi"].rubrik="Kryotropi"; 
	fardighetsobjekt["kryotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["kryotropi"].grundtarningar=0; 
	fardighetsobjekt["kryotropi"].beskrivning=""; 
	
	fardighetsobjekt["fototropi"].rubrik="Fototropi"; 
	fardighetsobjekt["fototropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["fototropi"].grundtarningar=0; 
	fardighetsobjekt["fototropi"].beskrivning=""; 
	
	fardighetsobjekt["skototropi"].rubrik="Skototropi"; 
	fardighetsobjekt["skototropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["skototropi"].grundtarningar=0; 
	fardighetsobjekt["skototropi"].beskrivning=""; 
	
	fardighetsobjekt["psykotropi"].rubrik="Psykotropi"; 
	fardighetsobjekt["psykotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["psykotropi"].grundtarningar=0; 
	fardighetsobjekt["psykotropi"].beskrivning=""; 
	
	fardighetsobjekt["oneirotropi"].rubrik="Oneirotropi"; 
	fardighetsobjekt["oneirotropi"].styrandeattribut="psyke"; 
	fardighetsobjekt["oneirotropi"].grundtarningar=0; 
	fardighetsobjekt["oneirotropi"].beskrivning=""; 
	
	
	/*
	mystikfardigheter.push("semotropi");
	mystikfardigheter.push("ikonotropi");
	mystikfardigheter.push("nekrotropi");
	mystikfardigheter.push("biotropi");
	mystikfardigheter.push("termotropi");
	mystikfardigheter.push("kryotropi");
	mystikfardigheter.push("fototropi");
	mystikfardigheter.push("skototropi");
	mystikfardigheter.push("psykotropi");
	mystikfardigheter.push("oneirotropi");
	*/
	

	fardighetsobjekt["dansa"].rubrik="Dansa"; 
	fardighetsobjekt["dansa"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["dansa"].grundtarningar=1; 
	fardighetsobjekt["dansa"].beskrivning="Det finns många typer av dans men i grund och botten handlar det om att kunna röra sig i takt med musik och kunna de olika stegen. Det kan röra sig om gruppdanser, pardanser, uppvisningsdanser eller individuella danser. Dans finns i alla samhällskick, allt från proper pardans på adelns finare tillställningar till ringdans på böndernas skördefester."; 

	fardighetsobjekt["fingerfardighet"].rubrik="Fingerfärdighet"; 
	fardighetsobjekt["fingerfardighet"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["fingerfardighet"].grundtarningar=1; 
	fardighetsobjekt["fingerfardighet"].beskrivning="Fingerfärdighet gör det möjligt att använda sina händer och fingrar på ett snabbt och smidigt sätt när det gäller att utföra enkla trick, stjäla saker eller lösgöra sig från rep och knopar. Det finns underhållare som använder färdigheten för att trolla fram mynt från till synes tomma händer och det finns tjuvar som plockar smycken och mynt från personer i sin omgivning."; 

	fardighetsobjekt["gomma"].rubrik="Gömma"; 
	fardighetsobjekt["gomma"].styrandeattribut="psyke"; 
	fardighetsobjekt["gomma"].grundtarningar=1; 
	fardighetsobjekt["gomma"].beskrivning="Gömma är insikten hur man bäst håller sig i det dolda. Det är även hur man bäst gömmer vapen på sin kropp, kamouflerar platsen för ett bakhåll samt hittar det bästa gömstället när fiender är ute efter en. Färdigheten används i synnerhet av tjuvar, lönnmördare och spioner men den är även vanlig bland spejare och vildmarksmän."; 

	fardighetsobjekt["hoppa"].rubrik="Hoppa"; 
	fardighetsobjekt["hoppa"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["hoppa"].grundtarningar=1; 
	fardighetsobjekt["hoppa"].beskrivning="Färdigheten används både för att hoppa långt och högt. Vanligen behöver man inte slå något färdighetsslag för att hoppa, men vid kritiska situationer och vid stora längder kan detta vara nödvändigt."; 

	fardighetsobjekt["klattra"].rubrik="Klättra"; 
	fardighetsobjekt["klattra"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["klattra"].grundtarningar=1; 
	fardighetsobjekt["klattra"].beskrivning="Klättra används för att med händer och fötter ta sig upp och ned för svårforcerade ytor och terräng såsom murar, väggar, klippavsatser, bergssidor, träd och liknande. Färdigheten används till största del av personer som håller till i vildmarken såsom spårare, spejare och stigfinnare men även kriminella element använder sig av färdigheten för att ta sig in i byggnader och över murar."; 

	fardighetsobjekt["lasdyrkning"].rubrik="Låsdyrkning"; 
	fardighetsobjekt["lasdyrkning"].styrandeattribut="psyke"; 
	fardighetsobjekt["lasdyrkning"].grundtarningar=0; 
	fardighetsobjekt["lasdyrkning"].beskrivning="Med Låsdyrkning har man kunskapen och fingerfärdigheten att öppna lås utan den rätta nyckeln. Färdigheten är allra vanligast bland tjuvar, spioner, lönnmördare och andra kriminella element. För att lyckas med detta behöver man dock rätt typ av verktyg."; 

	fardighetsobjekt["simma"].rubrik="Simma"; 
	fardighetsobjekt["simma"].styrandeattribut="talighet"; 
	fardighetsobjekt["simma"].grundtarningar=0; 
	fardighetsobjekt["simma"].beskrivning="Simma är kunskapen att förflytta sig och hålla sig flytande i vatten. Kan man inte simma kommer man sprattlande att sjunka mot botten om man inte får tag i något som flyter och kan bära ens vikt. Skickliga simmare kan dyka från höga höjder samt simma långa sträckor under vattenytan."; 

	fardighetsobjekt["smyga"].rubrik="Smyga"; 
	fardighetsobjekt["smyga"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["smyga"].grundtarningar=1; 
	fardighetsobjekt["smyga"].beskrivning="Denna färdighet används för att ta sig fram så tyst som möjligt. De som är riktigt skickliga på detta kan ta sig fram nästan ohörbart över torra löv. Den förekommer vanligen hos vildmarksmän, tjuvar och lönnmördare."; 

	fardighetsobjekt["undvika"].rubrik="Undvika"; 
	fardighetsobjekt["undvika"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["undvika"].grundtarningar=1; 
	fardighetsobjekt["undvika"].beskrivning="Undvika är en färdighet som oftast används i strid. Man använder sin smidighet och manöverförmåga för att flytta sig undan attackerna. För att göra detta effektivt krävs det dock att man är lätt rustad och inte bär på allt för mycket packning). Färdigheten kan även användas för att exempelvis undvika fallande klippblock eller en rasande tjur."; 

	fardighetsobjekt["argumentera"].rubrik="Argumentera"; 
	fardighetsobjekt["argumentera"].styrandeattribut="psyke"; 
	fardighetsobjekt["argumentera"].grundtarningar=1; 
	fardighetsobjekt["argumentera"].beskrivning="Färdigheten ger en förmågan att lägga fram sina åsikter på ett övertygande sätt. Den kan användas till att övertala folk att göra som man säger eller få dem över på sin sida genom att komma med tydliga exempel på att ens tes stämmer."; 

	fardighetsobjekt["berattarkonst"].rubrik="Berättarkonst"; 
	fardighetsobjekt["berattarkonst"].styrandeattribut="utstralning"; 
	fardighetsobjekt["berattarkonst"].grundtarningar=1; 
	fardighetsobjekt["berattarkonst"].beskrivning="Berättarkonst ger en person förmågan att på ett levande, fängslande och intressant sätt återberätta sagor, legender och myter. Färdigheten symboliserar även hur många historier personen kan samt hur väl memorerade de är. Berättarkonst brukas vanligen av underhållare, lärda, religiösa och kringvandrande sagoberättare vilka gjort berättandet till sitt värv."; 

	fardighetsobjekt["charm"].rubrik="Charm"; 
	fardighetsobjekt["charm"].styrandeattribut="utstralning"; 
	fardighetsobjekt["charm"].grundtarningar=1; 
	fardighetsobjekt["charm"].beskrivning="Med denna färdighet har personen lärt sig att man genom vänlighet och personlig utstrålning kan nå långt. Det handlar om att ge ett gott intryck, skapa vänskap, förföra någon eller bara ha ett trevligt samtal. Färdigheten Charm används inte så mycket till faktiska argument utan mer för att vädja till personens känslor."; 

	fardighetsobjekt["dupera"].rubrik="Dupera"; 
	fardighetsobjekt["dupera"].styrandeattribut="utstralning"; 
	fardighetsobjekt["dupera"].grundtarningar=1; 
	fardighetsobjekt["dupera"].beskrivning="Dupera är att använda lögn och bedrägerier som hjälpmedel i sociala situationer och konflikter. Nästan alla personer kan komma undan med enklare lögner men endast riktigt kunniga ordvrängare kan lura sig fria när bevisen väger emot och pressen är stor. Dupera används av alla som finner att lögner kan tjäna deras syften, såsom ohederliga handelsmän, tjuvar, spioner, adelsmän och byråkrater."; 

	fardighetsobjekt["genomskada"].rubrik="Genomskåda"; 
	fardighetsobjekt["genomskada"].styrandeattribut="psyke"; 
	fardighetsobjekt["genomskada"].grundtarningar=1; 
	fardighetsobjekt["genomskada"].beskrivning="Genomskåda låter en läsa av individer. Färdigheten gör det möjligt att genomskåda lögner, få insikt i personers känsloliv och känna om de håller tillbaka information. Vissa känslor går att avläsa direkt, andra kräver att man lär känna eller noga studerar personen under en längre tid. Det är nästintill omöjligt att läsa av personer som inte är socialt aktiva."; 

	fardighetsobjekt["hovliv"].rubrik="Hovliv"; 
	fardighetsobjekt["hovliv"].styrandeattribut="psyke"; 
	fardighetsobjekt["hovliv"].grundtarningar=0; 
	fardighetsobjekt["hovliv"].beskrivning="Hovliv är en allmän och bred färdighet som används för att ha en insikt i vad som händer i de övre sociala nivåerna samt hur man uppför sig inom societeten. Färdigheten är starkt knuten till de styrande och ger en insikt i ränker, intriger och maktspel samt hur man bäst kan nyttja dessa till sin fördel. Man använder färdigheten för att bli inbjuden på tillställningar och få träffa viktiga makthavare och för att väl under dessa möten föra sig enligt konstens alla regler."; 

	fardighetsobjekt["injagafruktan"].rubrik="Injaga fruktan"; 
	fardighetsobjekt["injagafruktan"].styrandeattribut="psyke"; 
	fardighetsobjekt["injagafruktan"].grundtarningar=1; 
	fardighetsobjekt["injagafruktan"].beskrivning="Att ha ens kniv mot någons strupe, ett armborst riktat mot någons bröst eller vrålande hota att skada personen och dennes familj är något som mer eller mindre alla kan göra. En person som har färdigheten Injaga fruktan kan dock skrämma och hota personer blott med ordens makt och med en isande kyla om att det finns ett allvar bakom hoten."; 

	fardighetsobjekt["ledarskap"].rubrik="Ledarskap"; 
	fardighetsobjekt["ledarskap"].styrandeattribut="utstralning"; 
	fardighetsobjekt["ledarskap"].grundtarningar=1; 
	fardighetsobjekt["ledarskap"].beskrivning="Ledarskap används till såväl ordergivning i hektiska situationer som för att ingjuta mod i folk samt stärka lojaliteten. En skicklig ledare kan få folk att följa denne in i döden. Vissa styr genom fruktan och bestraffning, andra med kamratskap och förlåtelse. Ledarskap används ofta av soldater och krigsherrar men alla typer av ledare har bruk för denna färdighet."; 

	fardighetsobjekt["skumraskaffarer"].rubrik="Skumraskaffärer"; 
	fardighetsobjekt["skumraskaffarer"].styrandeattribut="psyke"; 
	fardighetsobjekt["skumraskaffarer"].grundtarningar=0; 
	fardighetsobjekt["skumraskaffarer"].beskrivning="Denna färdighet ger kunskaper och insikter i undre världen och diverse kriminella element. Man kan använda denna färdighet för att få tag på illegala föremål, komma över information eller sälja stöldgods. Likaså vet man hur man ska bete sig för att inte göra sig ovän med fel personer."; 

	fardighetsobjekt["speldobbel"].rubrik="Spel \& dobbel"; 
	fardighetsobjekt["speldobbel"].styrandeattribut="psyke"; 
	fardighetsobjekt["speldobbel"].grundtarningar=1; 
	fardighetsobjekt["speldobbel"].beskrivning="Färdigheten innefattar kunskaper om Mundanas kortspel, taktikspel och tärningsspel. Den ger en insikt hur man taktiskt bör gå till väga för att segra samt hur man kan satsa på olika typer av spel såsom gladiatorstrider. Den är dock inte till någon hjälp i rena turspel."; 

	fardighetsobjekt["sangmusik"].rubrik="Sång \& musik"; 
	fardighetsobjekt["sangmusik"].styrandeattribut="utstralning"; 
	fardighetsobjekt["sangmusik"].grundtarningar=1; 
	fardighetsobjekt["sangmusik"].beskrivning="Sång \& musik beskriver dels hur bra man är på att framföra sånger och melodier på ett sätt som är behagligt samt medryckande för lyssnaren och dels hur många sånger och melodier man kan. Färdigheten kan användas till allt från fräcka sjömansvisor till högstämda religiösa kompositioner."; 

	fardighetsobjekt["armborst"].rubrik="Armborst"; 
	fardighetsobjekt["armborst"].styrandeattribut="uppfattning"; 
	fardighetsobjekt["armborst"].grundtarningar=1; 
	fardighetsobjekt["armborst"].beskrivning="Används för att bruka alla typer av armborst, såsom lätt armborst och tungt armborst."; 

	fardighetsobjekt["bage"].rubrik="Båge"; 
	fardighetsobjekt["bage"].styrandeattribut="uppfattning"; 
	fardighetsobjekt["bage"].grundtarningar=1; 
	fardighetsobjekt["bage"].beskrivning="Används för att bruka alla typer av bågar, såsom kortbåge, långbåge och stridsbåge."; 

	fardighetsobjekt["dolk"].rubrik="Dolk"; 
	fardighetsobjekt["dolk"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["dolk"].grundtarningar=1; 
	fardighetsobjekt["dolk"].beskrivning="Används för att bruka alla typer av dolkar, såsom dolk och kniv."; 

	fardighetsobjekt["kastvapen"].rubrik="Kastvapen"; 
	fardighetsobjekt["kastvapen"].styrandeattribut="uppfattning"; 
	fardighetsobjekt["kastvapen"].grundtarningar=1; 
	fardighetsobjekt["kastvapen"].beskrivning="Används för att bruka alla typer av kastvapen, såsom kastkniv, kastspjut och kastyxa. Dessutom används färdigheten för att kasta såväl som fånga allehanda föremål och tillhyggen."; 

	fardighetsobjekt["kedjevapen"].rubrik="Kedjevapen"; 
	fardighetsobjekt["kedjevapen"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["kedjevapen"].grundtarningar=1; 
	fardighetsobjekt["kedjevapen"].beskrivning="Används för att bruka alla typer av kedjevapen, såsom petya och stridsgissel."; 

	fardighetsobjekt["klubba"].rubrik="Klubba"; 
	fardighetsobjekt["klubba"].styrandeattribut="styrka"; 
	fardighetsobjekt["klubba"].grundtarningar=1; 
	fardighetsobjekt["klubba"].beskrivning="Används för att bruka alla typer av klubbor, såsom klubba, morgonstjärna, påk, storhammare, stridshammare och stridsklubba. Dessutom används färdigheten för allehanda tillhyggen såsom flaskor eller ljusstakar."; 

	fardighetsobjekt["skold"].rubrik="Sköld"; 
	fardighetsobjekt["skold"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["skold"].grundtarningar=1; 
	fardighetsobjekt["skold"].beskrivning="Används för att bruka alla typer av sköldar, såsom bucklare, liten rundsköld, långsköld, riddarsköld och stor rundsköld."; 

	fardighetsobjekt["slagsmal"].rubrik="Slagsmål"; 
	fardighetsobjekt["slagsmal"].styrandeattribut="styrka"; 
	fardighetsobjekt["slagsmal"].grundtarningar=1; 
	fardighetsobjekt["slagsmal"].beskrivning="Slagsmål är den grundläggande kunskapen att kämpa med sina naturliga vapen. Det vill säga, sparka, slå, bita, skalla, tackla, greppa, brottas och anfalla med sina klor (om man har sådana)."; 

	fardighetsobjekt["spjut"].rubrik="Spjut"; 
	fardighetsobjekt["spjut"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["spjut"].grundtarningar=1; 
	fardighetsobjekt["spjut"].beskrivning="Används för att bruka alla typer av spjut, såsom jaktspjut, jargbila, kamorspjut och stridsspjut."; 

	fardighetsobjekt["stav"].rubrik="Stav"; 
	fardighetsobjekt["stav"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["stav"].grundtarningar=1; 
	fardighetsobjekt["stav"].beskrivning="Används för att bruka alla typer av stavar, såsom trästav."; 

	fardighetsobjekt["svard"].rubrik="Svärd"; 
	fardighetsobjekt["svard"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["svard"].grundtarningar=1; 
	fardighetsobjekt["svard"].beskrivning="Används för att bruka alla typer av svärd, såsom adasierhuggare, kortsvärd, kroksabel, melorsvärd, niamh, slagsvärd, storsvärd och stridssvärd."; 

	fardighetsobjekt["yxa"].rubrik="Yxa"; 
	fardighetsobjekt["yxa"].styrandeattribut="styrka"; 
	fardighetsobjekt["yxa"].grundtarningar=1; 
	fardighetsobjekt["yxa"].beskrivning="Används för att bruka alla typer av yxor, såsom bredyxa, handyxa, krell-kharz, storyxa, stridshacka och tirakkrok."; 

	fardighetsobjekt["genomsoka"].rubrik="Genomsöka"; 
	fardighetsobjekt["genomsoka"].styrandeattribut="uppfattning"; 
	fardighetsobjekt["genomsoka"].grundtarningar=1; 
	fardighetsobjekt["genomsoka"].beskrivning="Färdigheten används för att aktivt finna dolda ting, för att visitera personer eller genomsöka platser för att upptäcka vad som inte är direkt synligt. Spelledaren bör i de flesta fall slå slaget för färdigheten för att inte röja information som rollpersonen inte vet om."; 

	fardighetsobjekt["jaktfiske"].rubrik="Jakt \& fiske"; 
	fardighetsobjekt["jaktfiske"].styrandeattribut="psyke"; 
	fardighetsobjekt["jaktfiske"].grundtarningar=0; 
	fardighetsobjekt["jaktfiske"].beskrivning="Denna färdighet används för att finna, jaga, nedlägga och flå villebråd. Dessutom används färdigheten för att fånga och rensa fisk. Jakt \& fiske är en viktig färdighet för personer som lever i vildmarken och får en del av sin föda genom vilda djur."; 

	fardighetsobjekt["koravagn"].rubrik="Köra vagn"; 
	fardighetsobjekt["koravagn"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["koravagn"].grundtarningar=1; 
	fardighetsobjekt["koravagn"].beskrivning="Denna färdighet gör att man kan framföra en vagn på ett säkert sätt. Färdigheten ger också grundläggande kunskaper om hur man tar sig igenom besvärlig terräng och i pressade situationer såsom strid."; 

	fardighetsobjekt["marsch"].rubrik="Marsch"; 
	fardighetsobjekt["marsch"].styrandeattribut="talighet"; 
	fardighetsobjekt["marsch"].grundtarningar=1; 
	fardighetsobjekt["marsch"].beskrivning="De som är skickliga inom marsch har tränat upp sig i att förflytta sig långa sträckor till fots med endast kortare uppehåll. Färdigheten gör också att man effektivt tar sig fram genom svårforcerad terräng och inte skadar eller sliter ut sig. Denna färdighet är vanligast bland soldater och vildmarksmän."; 

	fardighetsobjekt["naturlara"].rubrik="Naturlära"; 
	fardighetsobjekt["naturlara"].styrandeattribut="psyke"; 
	fardighetsobjekt["naturlara"].grundtarningar=0; 
	fardighetsobjekt["naturlara"].beskrivning="Naturlära ger en kunskapen att handskas med djur men även att känna igen olika djurtyper genom att studera spillning, spår och beteende. Man vet sådana saker som vad det äter, var det håller till, sociala förhållanden, aggressivitet och liknande. Dessutom vet rollpersonen var man kan hitta örter, svamp eller rötter i naturen samt om vilka som är ätliga eller giftiga."; 

	fardighetsobjekt["navigation"].rubrik="Navigation"; 
	fardighetsobjekt["navigation"].styrandeattribut="psyke"; 
	fardighetsobjekt["navigation"].grundtarningar=0; 
	fardighetsobjekt["navigation"].beskrivning="Färdigheten används för navigation över haven. Till skillnad från sjömannaskap, där man navigerar efter landmärken och ruttböcker, går man efter stjärnornas lägen, sjökort och tabellsamlingar."; 

	fardighetsobjekt["orientering"].rubrik="Orientering"; 
	fardighetsobjekt["orientering"].styrandeattribut="psyke"; 
	fardighetsobjekt["orientering"].grundtarningar=1; 
	fardighetsobjekt["orientering"].beskrivning="Genom att använda stjärnornas lägen, vindarna, solen, månen, landskapet och tecken i naturen lär man sig att hitta genom vildmarken då man alltid kan ta ut väderstrecken. Orientering innefattar även lokalsinne och kan därför även användas i tättbebyggt område för att hitta genvägar och skaka av sig förföljare."; 

	fardighetsobjekt["rida"].rubrik="Rida"; 
	fardighetsobjekt["rida"].styrandeattribut="rorlighet"; 
	fardighetsobjekt["rida"].grundtarningar=1; 
	fardighetsobjekt["rida"].beskrivning="Denna färdighet ger kunskap om att rida olika riddjur, i de flesta fall hästar. Tärningsslag för färdigheten Rida behövs dels då man rider längre sträckor och dels då man ska försöka manövrera riddjuret, framför allt under strid, men även vid hopp över raviner och liknande."; 

	fardighetsobjekt["sjomannaskap"].rubrik="Sjömannaskap"; 
	fardighetsobjekt["sjomannaskap"].styrandeattribut="psyke"; 
	fardighetsobjekt["sjomannaskap"].grundtarningar=0; 
	fardighetsobjekt["sjomannaskap"].beskrivning="Denna färdighet ger kunskaper om hur man framför en farkost på vatten, hur man manövrerar och hur man sätter segel på ett fartyg. Den ger också kunskaper om hur man gör enklare reparationer och hur man underhåller fartyg. För att navigera måste man dock ha färdigheten Navigation."; 

	fardighetsobjekt["speja"].rubrik="Speja"; 
	fardighetsobjekt["speja"].styrandeattribut="uppfattning"; 
	fardighetsobjekt["speja"].grundtarningar=1; 
	fardighetsobjekt["speja"].beskrivning="Färdigheten Speja används för att aktivt försöka upptäcka och studera saker och aktiviteter i terrängen. Den används även för att finna platser varifrån man får en bra uppsikt såsom kullar, träd, hustak och liknande. Speja används ofta av tjuvar, vildmarksmän och vakter."; 

	fardighetsobjekt["spara"].rubrik="Spåra"; 
	fardighetsobjekt["spara"].styrandeattribut="uppfattning"; 
	fardighetsobjekt["spara"].grundtarningar=1; 
	fardighetsobjekt["spara"].beskrivning="Denna färdighet ger kunskaper om hur man upptäcker och följer spår som de flesta andra skulle missa helt och hållet samt hur man döljer sina egna. Färdigheten är vanlig bland vildmarksmän och prisjägare.";
	
	fardighetsobjekt["vildmarksvana"].rubrik="Vildmarksvana"; 
	fardighetsobjekt["vildmarksvana"].styrandeattribut="psyke"; 
	fardighetsobjekt["vildmarksvana"].grundtarningar=0; 
	fardighetsobjekt["vildmarksvana"].beskrivning="Vildmarksvana ger kunskaper om hur man överlever utan tillgång till proviant i olika terrängtyper. Färdigheten ger också kunskaper i vilka faror som kan finnas i terrängen, hur man gör upp eld, var man kan hitta dricksvatten och hur man bäst tar sig över oländig terräng.";
	
	
    for (i=fardighetsgrupplista.length-3; i < fardighetsgrupplista.length; i++){
		for (j = 0; j < fardighetslista[i].length; j++){
       		// sparar alla färdigheter som objekt
       		fardighetsobjekt[fardighetslista[i][j]].lattlard=1; // Alla expertiser, hantverk och kännetecken är lättlärda
			if ("tabell" in fardighetsobjekt[fardighetslista[i][j]]){
				
			}else{
				fardighetsobjekt[fardighetslista[i][j]].tabell=1;
			}
		}
	}
	
	

    /*
    
	var fardighetsobjektlista = [];
    
    for (i = 0; i < fardighetsgrupplista.length; i++){
		fardighetsobjektlista.push([]);
        for (j = 0; j < fardighetslista[i].length; j++){
        	// sparar alla färdigheter som objekt
            window[fardighetslista[i][j]] = new fardighet();
        	fardighetsobjektlista[i].push(window[fardighetslista[i][j]]); 
        }
    }
	*/

    // return [fardighetsgrupplista, fardighetslista, fardighetsobjektlista];
    // return [fardighetsgrupplista, fardighetslista, fardighetsobjekt];
    return fardighetsobjekt
}


function hamta_ovrigafardighetertabeller (){
	
    var ovrigafardighetertabellista = ["expertis", "hantverk", "kannetecken"];
    var ovrigafardighetertabeller = {};
    ovrigafardighetertabeller.lista = ovrigafardighetertabellista;
	ovrigafardighetertabeller.poang = ["expertispoang", "hantverkpoang", "kanneteckenpoang"];
	ovrigafardighetertabeller.rubriklista = ["Expertiser", "Hantverk", "Kännetecken"];
	ovrigafardighetertabeller.namn={};
	ovrigafardighetertabeller.namn.expertis="expertis";
    ovrigafardighetertabeller.namn.kannetecken="kannetecken";
	ovrigafardighetertabeller.namn.hantverk="hantverk";
	
	ovrigafardighetertabeller.rubrik={};
	ovrigafardighetertabeller.rubrik.expertis="Expertiser";
    ovrigafardighetertabeller.rubrik.kannetecken="Kännetecken";
	ovrigafardighetertabeller.rubrik.hantverk="Hantverk";
	
    // Tabellerna innehåller endast färdighetsnamn, färdighetsobjekten finns sparade separat i fardighetsobjekt
    
    ovrigafardighetertabeller.expertis = [];
    ovrigafardighetertabeller.expertis[0] = "expertis";
    ovrigafardighetertabeller.expertis[1] = "akrobatik";
	ovrigafardighetertabeller.expertis[2] ="astrologi";
	ovrigafardighetertabeller.expertis[3] ="barnuppfostran";
	ovrigafardighetertabeller.expertis[4] ="begravningsriter";
	ovrigafardighetertabeller.expertis[5] ="behaga";
	ovrigafardighetertabeller.expertis[6] ="bergskunskap";
	ovrigafardighetertabeller.expertis[7] ="bibliotekskunskap";
	ovrigafardighetertabeller.expertis[8] ="blasaeld";
	ovrigafardighetertabeller.expertis[9] ="bokhallning";
	ovrigafardighetertabeller.expertis[10] ="branschkunskap";
	ovrigafardighetertabeller.expertis[11] ="buktaleri";
	ovrigafardighetertabeller.expertis[12] ="chiffer";
	ovrigafardighetertabeller.expertis[13] ="citeralibera";
	ovrigafardighetertabeller.expertis[14] ="detvarbattreforr";
	ovrigafardighetertabeller.expertis[15] ="diplomati";
	ovrigafardighetertabeller.expertis[16] ="djurtraning";
	ovrigafardighetertabeller.expertis[17] ="flagellera";
	ovrigafardighetertabeller.expertis[18] ="flyktvagar";
	ovrigafardighetertabeller.expertis[19] ="florta";
	ovrigafardighetertabeller.expertis[20] ="frossa";
	ovrigafardighetertabeller.expertis[21] ="fuska";
	ovrigafardighetertabeller.expertis[22] ="forfatta";
	ovrigafardighetertabeller.expertis[23] ="forkladnad";
	ovrigafardighetertabeller.expertis[24] ="forskingra";
	ovrigafardighetertabeller.expertis[25] ="genvagar";
	ovrigafardighetertabeller.expertis[26] ="gravplundring";
	ovrigafardighetertabeller.expertis[27] ="grottsystem";
	ovrigafardighetertabeller.expertis[28] ="gapalina";
	ovrigafardighetertabeller.expertis[29] ="gator";
	ovrigafardighetertabeller.expertis[30] ="helgonensliv";
	ovrigafardighetertabeller.expertis[31] ="heraldik";
	ovrigafardighetertabeller.expertis[32] ="huskurer";
	ovrigafardighetertabeller.expertis[33] ="hallabjudningar";
	ovrigafardighetertabeller.expertis[34] ="hada";
	ovrigafardighetertabeller.expertis[35] ="harma";
	ovrigafardighetertabeller.expertis[36] ="ingjutamod";
	ovrigafardighetertabeller.expertis[37] ="jonglera";
	ovrigafardighetertabeller.expertis[38] ="kloaksystem";
	ovrigafardighetertabeller.expertis[39] ="komponeramusik";
	ovrigafardighetertabeller.expertis[40] ="korrumpera";
	ovrigafardighetertabeller.expertis[41] ="krigsmaskiner";
	ovrigafardighetertabeller.expertis[42] ="kranga";
	ovrigafardighetertabeller.expertis[43] ="kyrkorochheligaplatser";
	ovrigafardighetertabeller.expertis[44] ="kandagladiatorer";
	ovrigafardighetertabeller.expertis[45] ="kaftaemot";
	ovrigafardighetertabeller.expertis[46] ="lappalaga";
	ovrigafardighetertabeller.expertis[47] ="legendermyter";
	ovrigafardighetertabeller.expertis[48] ="lekar";
	ovrigafardighetertabeller.expertis[49] ="logik";
	ovrigafardighetertabeller.expertis[50] ="logistik";
	ovrigafardighetertabeller.expertis[51] ="lova";
	ovrigafardighetertabeller.expertis[52] ="lapplasning";
	ovrigafardighetertabeller.expertis[53] ="massage";
	ovrigafardighetertabeller.expertis[54] ="meditera";
	ovrigafardighetertabeller.expertis[55] ="monsterkunskap";
	ovrigafardighetertabeller.expertis[56] ="muta";
	ovrigafardighetertabeller.expertis[57] ="omradeskannedom";
	ovrigafardighetertabeller.expertis[58] ="ordsprakordstav";
	ovrigafardighetertabeller.expertis[59] ="parfymerkosmetika";
	ovrigafardighetertabeller.expertis[60] ="pekautsyndabockar";
	ovrigafardighetertabeller.expertis[61] ="perversiteter";
	ovrigafardighetertabeller.expertis[62] ="poesi";
	ovrigafardighetertabeller.expertis[63] ="provsmakare";
	ovrigafardighetertabeller.expertis[64] ="repknopar";
	ovrigafardighetertabeller.expertis[65] ="ropaddla";
	ovrigafardighetertabeller.expertis[66] ="seoskyldigut";
	ovrigafardighetertabeller.expertis[67] ="simulant";
	ovrigafardighetertabeller.expertis[68] ="sjomanshistorier";
	ovrigafardighetertabeller.expertis[69] ="skidorskridskor";
	ovrigafardighetertabeller.expertis[70] ="skvaller";
	ovrigafardighetertabeller.expertis[71] ="skyllapaandra";
	ovrigafardighetertabeller.expertis[72] ="skadespel";
	ovrigafardighetertabeller.expertis[73] ="skamta";
	ovrigafardighetertabeller.expertis[74] ="soldatliv";
	ovrigafardighetertabeller.expertis[75] ="spottloskor";
	ovrigafardighetertabeller.expertis[76] ="spraklara";
	ovrigafardighetertabeller.expertis[77] ="stadatvatta";
	ovrigafardighetertabeller.expertis[78] ="supa";
	ovrigafardighetertabeller.expertis[79] ="supafolkunderbordet";
	ovrigafardighetertabeller.expertis[80] ="takvagar";
	ovrigafardighetertabeller.expertis[81] ="tigga";
	ovrigafardighetertabeller.expertis[82] ="tjansteliv";
	ovrigafardighetertabeller.expertis[83] ="tolkareligiosaskrifter";
	ovrigafardighetertabeller.expertis[84] ="tortyr";
	ovrigafardighetertabeller.expertis[85] ="trosta";
	ovrigafardighetertabeller.expertis[86] ="undergravasjalvfortroende";
	ovrigafardighetertabeller.expertis[87] ="undvikaansvar";
	ovrigafardighetertabeller.expertis[88] ="uppvigla";
	ovrigafardighetertabeller.expertis[89] ="utbrytarkonst";
	ovrigafardighetertabeller.expertis[90] ="utskallningar";
	ovrigafardighetertabeller.expertis[91] ="vadslagning";
	ovrigafardighetertabeller.expertis[92] ="vapenkata";
	ovrigafardighetertabeller.expertis[93] ="vidskepelse";
	ovrigafardighetertabeller.expertis[94] ="vinkonnassor";
	ovrigafardighetertabeller.expertis[95] ="vissla";
	ovrigafardighetertabeller.expertis[96] ="vaderkannedom";
	ovrigafardighetertabeller.expertis[97] ="vadja";
	ovrigafardighetertabeller.expertis[98] ="ackla";
	ovrigafardighetertabeller.expertis[99] ="olkannare";
	ovrigafardighetertabeller.expertis[100] ="orfila";
    
    ovrigafardighetertabeller.hantverk = [];
    ovrigafardighetertabeller.hantverk[0] = "hantverk";
   
    ovrigafardighetertabeller.hantverk[1] = "arkitekt";
	ovrigafardighetertabeller.hantverk[2] = "bagare";
	ovrigafardighetertabeller.hantverk[3] = "bagare";
	ovrigafardighetertabeller.hantverk[4] = "barberare";
	ovrigafardighetertabeller.hantverk[5] = "blackmakare";
	ovrigafardighetertabeller.hantverk[6] = "bokbindare";
	ovrigafardighetertabeller.hantverk[7] = "bryggare";
	ovrigafardighetertabeller.hantverk[8] = "bryggare";
	ovrigafardighetertabeller.hantverk[9] = "boskapsskotare";
	ovrigafardighetertabeller.hantverk[10] = "boskapsskotare";
	ovrigafardighetertabeller.hantverk[11] = "brannare";
	ovrigafardighetertabeller.hantverk[12] = "byggare";
	ovrigafardighetertabeller.hantverk[13] = "bagtillverkare";
	ovrigafardighetertabeller.hantverk[14] = "batbyggare";
	ovrigafardighetertabeller.hantverk[15] = "florist";
	ovrigafardighetertabeller.hantverk[16] = "fargare";
	ovrigafardighetertabeller.hantverk[17] = "forfalskare";
	ovrigafardighetertabeller.hantverk[18] = "garvare";
	ovrigafardighetertabeller.hantverk[19] = "garvare";
	ovrigafardighetertabeller.hantverk[20] = "gjutare";
	ovrigafardighetertabeller.hantverk[21] = "gjutare";
	ovrigafardighetertabeller.hantverk[22] = "glasblasare";
	ovrigafardighetertabeller.hantverk[23] = "gobelangvavare";
	ovrigafardighetertabeller.hantverk[24] = "graverare";
	ovrigafardighetertabeller.hantverk[25] = "grisodlare";
	ovrigafardighetertabeller.hantverk[26] = "grovsmed";
	ovrigafardighetertabeller.hantverk[27] = "grovsmed";
	ovrigafardighetertabeller.hantverk[28] = "gruvbrytare";
	ovrigafardighetertabeller.hantverk[29] = "guldsmed";
	ovrigafardighetertabeller.hantverk[30] = "hovslagare";
	ovrigafardighetertabeller.hantverk[31] = "harold";
	ovrigafardighetertabeller.hantverk[32] = "instrumentbyggare";
	ovrigafardighetertabeller.hantverk[33] = "jordbrukare";
	ovrigafardighetertabeller.hantverk[34] = "jordbrukare";
	ovrigafardighetertabeller.hantverk[35] = "juvelerare";
	ovrigafardighetertabeller.hantverk[36] = "kalligraf";
	ovrigafardighetertabeller.hantverk[37] = "kartritare";
	ovrigafardighetertabeller.hantverk[38] = "klensmed";
	ovrigafardighetertabeller.hantverk[39] = "kistmakare";
	ovrigafardighetertabeller.hantverk[40] = "kock";
	ovrigafardighetertabeller.hantverk[41] = "kolare";
	ovrigafardighetertabeller.hantverk[42] = "korgflatare";
	ovrigafardighetertabeller.hantverk[43] = "krigsmaskinsbyggare";
	ovrigafardighetertabeller.hantverk[44] = "krukmakare";
	ovrigafardighetertabeller.hantverk[45] = "korsnar";
	ovrigafardighetertabeller.hantverk[46] = "korsnar";
	ovrigafardighetertabeller.hantverk[47] = "lampmakare";
	ovrigafardighetertabeller.hantverk[48] = "ljusstopare";
	ovrigafardighetertabeller.hantverk[49] = "lassmed";
	ovrigafardighetertabeller.hantverk[50] = "ladermakare";
	ovrigafardighetertabeller.hantverk[51] = "ladermakare";
	ovrigafardighetertabeller.hantverk[52] = "mattknytare";
	ovrigafardighetertabeller.hantverk[53] = "mattknytare";
	ovrigafardighetertabeller.hantverk[54] = "mekaniker";
	ovrigafardighetertabeller.hantverk[55] = "metallurg";
	ovrigafardighetertabeller.hantverk[56] = "mjolnare";
	ovrigafardighetertabeller.hantverk[57] = "mjolnare";
	ovrigafardighetertabeller.hantverk[58] = "murare";
	ovrigafardighetertabeller.hantverk[59] = "murare";
	ovrigafardighetertabeller.hantverk[60] = "myntslagare";
	ovrigafardighetertabeller.hantverk[61] = "malare";
	ovrigafardighetertabeller.hantverk[62] = "malare";
	ovrigafardighetertabeller.hantverk[63] = "natknytare";
	ovrigafardighetertabeller.hantverk[64] = "natknytare";
	ovrigafardighetertabeller.hantverk[65] = "pergamentmakare";
	ovrigafardighetertabeller.hantverk[66] = "piltillverkare";
	ovrigafardighetertabeller.hantverk[67] = "piltillverkare";
	ovrigafardighetertabeller.hantverk[68] = "repslagare";
	ovrigafardighetertabeller.hantverk[69] = "repslagare";
	ovrigafardighetertabeller.hantverk[70] = "rustningssmed";
	ovrigafardighetertabeller.hantverk[71] = "sadelmakare";
	ovrigafardighetertabeller.hantverk[72] = "sadelmakare";
	ovrigafardighetertabeller.hantverk[73] = "segelmakare";
	ovrigafardighetertabeller.hantverk[74] = "skeppsbyggare";
	ovrigafardighetertabeller.hantverk[75] = "skomakare";
	ovrigafardighetertabeller.hantverk[76] = "skomakare";
	ovrigafardighetertabeller.hantverk[77] = "skraddare";
	ovrigafardighetertabeller.hantverk[78] = "skraddare";
	ovrigafardighetertabeller.hantverk[79] = "skulptor";
	ovrigafardighetertabeller.hantverk[80] = "slaktare";
	ovrigafardighetertabeller.hantverk[81] = "slaktare";
	ovrigafardighetertabeller.hantverk[82] = "snickare";
	ovrigafardighetertabeller.hantverk[83] = "snickare";
	ovrigafardighetertabeller.hantverk[84] = "spegelmakare";
	ovrigafardighetertabeller.hantverk[85] = "stenhuggare";
	ovrigafardighetertabeller.hantverk[86] = "stenhuggare";	
	ovrigafardighetertabeller.hantverk[87] = "tandsmed";
	ovrigafardighetertabeller.hantverk[88] = "tatuerare";
	ovrigafardighetertabeller.hantverk[89] = "timmerman";
	ovrigafardighetertabeller.hantverk[90] = "timmerman";	
	ovrigafardighetertabeller.hantverk[91] = "tradgardsskotare";
	ovrigafardighetertabeller.hantverk[92] = "trasnidare";
	ovrigafardighetertabeller.hantverk[93] = "trasnidare";
	ovrigafardighetertabeller.hantverk[94] = "tunnbindare";
	ovrigafardighetertabeller.hantverk[95] = "vagnbyggare";
	ovrigafardighetertabeller.hantverk[96] = "vapensmed";
	ovrigafardighetertabeller.hantverk[97] = "vinjasare";
	ovrigafardighetertabeller.hantverk[98] = "vinjasare";
	ovrigafardighetertabeller.hantverk[99] = "vavare";
	ovrigafardighetertabeller.hantverk[100] = "vavare";
	
	
	
    ovrigafardighetertabeller.kannetecken = [];
    ovrigafardighetertabeller.kannetecken[0] = "kannetecken";
    
	ovrigafardighetertabeller.kannetecken[1]="alldagligtutseende";
	ovrigafardighetertabeller.kannetecken[2]="alldagligtutseende";
	ovrigafardighetertabeller.kannetecken[3] = "allvarliguppsyn";
	ovrigafardighetertabeller.kannetecken[4] = "allvarliguppsyn";
	ovrigafardighetertabeller.kannetecken[5] = "allatare";
	ovrigafardighetertabeller.kannetecken[6] = "allatare";
	ovrigafardighetertabeller.kannetecken[7] = "auraavobehag";
	ovrigafardighetertabeller.kannetecken[8] = "auraavobehag";
	ovrigafardighetertabeller.kannetecken[9] = "auraavsjalvsakerhet";
	ovrigafardighetertabeller.kannetecken[10] = "auraavsjalvsakerhet";
	ovrigafardighetertabeller.kannetecken[11] = "avvikandeogonfarg";
	ovrigafardighetertabeller.kannetecken[12] = "avvikandeogonfarg";
	ovrigafardighetertabeller.kannetecken[13] = "balanssinne";
	ovrigafardighetertabeller.kannetecken[14] = "balanssinne";
	ovrigafardighetertabeller.kannetecken[15] = "barnvan";
	ovrigafardighetertabeller.kannetecken[16] = "barnvan";
	ovrigafardighetertabeller.kannetecken[17] = "blekochkall";
	ovrigafardighetertabeller.kannetecken[18] = "blekochkall";
	ovrigafardighetertabeller.kannetecken[19] = "bojlig";
	ovrigafardighetertabeller.kannetecken[20] = "bojlig";
	ovrigafardighetertabeller.kannetecken[21] = "charmerandeleende";
	ovrigafardighetertabeller.kannetecken[22] = "charmerandeleende";
	ovrigafardighetertabeller.kannetecken[23] = "djurvan";
	ovrigafardighetertabeller.kannetecken[24] = "djurvan";
	ovrigafardighetertabeller.kannetecken[25] = "finlemmadehander";
	ovrigafardighetertabeller.kannetecken[26] = "finlemmadehander";
	ovrigafardighetertabeller.kannetecken[27] = "flinktunga";
	ovrigafardighetertabeller.kannetecken[28] = "flinktunga";
	ovrigafardighetertabeller.kannetecken[29] = "fraknar";
	ovrigafardighetertabeller.kannetecken[30] = "fraknar";
	ovrigafardighetertabeller.kannetecken[31] = "fodelsemarke";
	ovrigafardighetertabeller.kannetecken[32] = "fodelsemarke";
	ovrigafardighetertabeller.kannetecken[33] = "foraktfullmin";
	ovrigafardighetertabeller.kannetecken[34] = "foraktfullmin";
	ovrigafardighetertabeller.kannetecken[35] = "genomtrangandeblick";
	ovrigafardighetertabeller.kannetecken[36] = "genomtrangandeblick";
	ovrigafardighetertabeller.kannetecken[37] = "gestikulerande";
	ovrigafardighetertabeller.kannetecken[38] = "gestikulerande";
	ovrigafardighetertabeller.kannetecken[39] = "gottminne";
	ovrigafardighetertabeller.kannetecken[40] = "gottminne";
	ovrigafardighetertabeller.kannetecken[41] = "gracios";
	ovrigafardighetertabeller.kannetecken[42] = "gracios";
	ovrigafardighetertabeller.kannetecken[43] = "hederligtintryck";
	ovrigafardighetertabeller.kannetecken[44] = "hederligtintryck";
	ovrigafardighetertabeller.kannetecken[45] = "hotfullstamma";
	ovrigafardighetertabeller.kannetecken[46] = "hotfullstamma";
	ovrigafardighetertabeller.kannetecken[47] = "hanskratt";
	ovrigafardighetertabeller.kannetecken[48] = "hanskratt";
	ovrigafardighetertabeller.kannetecken[49] = "ingerlugn";
	ovrigafardighetertabeller.kannetecken[50] = "ingerlugn";
	ovrigafardighetertabeller.kannetecken[51] = "isandetystnad";
	ovrigafardighetertabeller.kannetecken[52] = "isandetystnad";
	ovrigafardighetertabeller.kannetecken[53] = "klingandeskratt";
	ovrigafardighetertabeller.kannetecken[54] = "klingandeskratt";
	ovrigafardighetertabeller.kannetecken[55] = "klariallt";
	ovrigafardighetertabeller.kannetecken[56] = "klariallt";
	ovrigafardighetertabeller.kannetecken[57] = "luktargott";
	ovrigafardighetertabeller.kannetecken[58] = "luktargott";
	ovrigafardighetertabeller.kannetecken[59] = "luktsinne";
	ovrigafardighetertabeller.kannetecken[60] = "luktsinne";
	ovrigafardighetertabeller.kannetecken[61] = "missbildning";
	ovrigafardighetertabeller.kannetecken[62] = "missbildning";
	ovrigafardighetertabeller.kannetecken[63] = "pedant";
	ovrigafardighetertabeller.kannetecken[64] = "pedant";
	ovrigafardighetertabeller.kannetecken[65] = "perfekthy";
	ovrigafardighetertabeller.kannetecken[66] = "perfekthy";
	ovrigafardighetertabeller.kannetecken[67] = "proper";
	ovrigafardighetertabeller.kannetecken[68] = "proper";
	ovrigafardighetertabeller.kannetecken[69] = "romantiker";
	ovrigafardighetertabeller.kannetecken[70] = "romantiker";
	ovrigafardighetertabeller.kannetecken[71] = "serdumut";
	ovrigafardighetertabeller.kannetecken[72] = "serdumut";
	ovrigafardighetertabeller.kannetecken[73] = "sersvagheter";
	ovrigafardighetertabeller.kannetecken[74] = "sersvagheter";
	ovrigafardighetertabeller.kannetecken[75] = "sjukligtutseende";
	ovrigafardighetertabeller.kannetecken[76] = "sjukligtutseende";
	ovrigafardighetertabeller.kannetecken[77] = "skrammandeutseende";
	ovrigafardighetertabeller.kannetecken[78] = "skrammandeutseende";
	ovrigafardighetertabeller.kannetecken[79] = "skarpaanletsdrag";
	ovrigafardighetertabeller.kannetecken[80] = "skarpaanletsdrag";
	ovrigafardighetertabeller.kannetecken[81] = "struktureratsinne";
	ovrigafardighetertabeller.kannetecken[82] = "struktureratsinne";
	ovrigafardighetertabeller.kannetecken[83] = "tatuering";
	ovrigafardighetertabeller.kannetecken[84] = "tatuering";
	ovrigafardighetertabeller.kannetecken[85] = "trollbindandeblick";
	ovrigafardighetertabeller.kannetecken[86] = "trollbindandeblick";
	ovrigafardighetertabeller.kannetecken[87] = "utbrott";
	ovrigafardighetertabeller.kannetecken[88] = "utbrott";
	ovrigafardighetertabeller.kannetecken[89] = "vassatander";
	ovrigafardighetertabeller.kannetecken[90] = "vassatander";
	ovrigafardighetertabeller.kannetecken[91] = "valformadkropp";
	ovrigafardighetertabeller.kannetecken[92] = "valformadkropp";
	ovrigafardighetertabeller.kannetecken[93] = "valkomnandeaura";
	ovrigafardighetertabeller.kannetecken[94] = "valkomnandeaura";
	ovrigafardighetertabeller.kannetecken[95] = "valvardathar";
	ovrigafardighetertabeller.kannetecken[96] = "valvardathar";
	ovrigafardighetertabeller.kannetecken[97] = "arligtansikte";
	ovrigafardighetertabeller.kannetecken[98] = "arligtansikte";
	ovrigafardighetertabeller.kannetecken[99] = "arr";
	ovrigafardighetertabeller.kannetecken[100] = "arr";

	
    
    
    return ovrigafardighetertabeller
}
function hamta_ovrigafardigheterpoangslag(){
	ovrigafardigheterpoangslag={};
	ovrigafardigheterpoangslag.expertis=[[]];
	
	ovrigafardigheterpoangslag.expertis[0]=[3,0];
	
	ovrigafardigheterpoangslag.expertis.push([]);
	ovrigafardigheterpoangslag.expertis[1]=[3,3,0];
	
	ovrigafardigheterpoangslag.expertis.push([]);
	ovrigafardigheterpoangslag.expertis[2]=[6,3,0,0];
	
	ovrigafardigheterpoangslag.expertis.push([]);
	ovrigafardigheterpoangslag.expertis[3]=[6,3,3,0,0];
	
	ovrigafardigheterpoangslag.expertis.push([]);
	ovrigafardigheterpoangslag.expertis[4]=[7,5,3,0,0,0];
	
	ovrigafardigheterpoangslag.expertis.push([]);
	ovrigafardigheterpoangslag.expertis[5]=[7,5,3,3,0,0,0];
	
	ovrigafardigheterpoangslag.expertis.push([]);
	ovrigafardigheterpoangslag.expertis[6]=[7,6,4,4,0,0,0];
	
	ovrigafardigheterpoangslag.expertis.push([]);
	ovrigafardigheterpoangslag.expertis[7]=[7,7,6,5,3,0,0,0];
	
	ovrigafardigheterpoangslag.expertis.push([]);
	ovrigafardigheterpoangslag.expertis[8]=[7,7,6,5,4,3,0,0,0];

	ovrigafardigheterpoangslag.hantverk=[[]];
	ovrigafardigheterpoangslag.hantverk[0]=[3];
	
	ovrigafardigheterpoangslag.hantverk.push([]);
	ovrigafardigheterpoangslag.hantverk[1]=[6];
	
	ovrigafardigheterpoangslag.hantverk.push([]);
	ovrigafardigheterpoangslag.hantverk[2]=[6,3];
	
	ovrigafardigheterpoangslag.hantverk.push([]);
	ovrigafardigheterpoangslag.hantverk[3]=[7,5];
	
	ovrigafardigheterpoangslag.hantverk.push([]);
	ovrigafardigheterpoangslag.hantverk[4]=[7,5,3];
	
	ovrigafardigheterpoangslag.hantverk.push([]);
	ovrigafardigheterpoangslag.hantverk[5]=[7,6,5];
	
	ovrigafardigheterpoangslag.hantverk.push([]);
	ovrigafardigheterpoangslag.hantverk[6]=[7,6,5,3];
	
	ovrigafardigheterpoangslag.hantverk.push([]);
	ovrigafardigheterpoangslag.hantverk[7]=[7,7,6,4];
	
	ovrigafardigheterpoangslag.hantverk.push([]);
	ovrigafardigheterpoangslag.hantverk[8]=[7,7,6,5,3];
	
	ovrigafardigheterpoangslag.kannetecken=[[]];
	ovrigafardigheterpoangslag.kannetecken[0]=[3,0];
	
	ovrigafardigheterpoangslag.kannetecken.push([]);
	ovrigafardigheterpoangslag.kannetecken[1]=[6,0,0];
	
	ovrigafardigheterpoangslag.kannetecken.push([]);
	ovrigafardigheterpoangslag.kannetecken[2]=[6,3,0,0];
	
	ovrigafardigheterpoangslag.kannetecken.push([]);
	ovrigafardigheterpoangslag.kannetecken[3]=[7,5,0,0,0];
	
	
	ovrigafardigheterpoangslag.kannetecken.push([]);
	ovrigafardigheterpoangslag.kannetecken[4]=[7,5,3,0,0,0];
	
	ovrigafardigheterpoangslag.kannetecken.push([]);
	ovrigafardigheterpoangslag.kannetecken[5]=[7,6,5,0,0,0,0];
	
	ovrigafardigheterpoangslag.kannetecken.push([]);
	ovrigafardigheterpoangslag.kannetecken[6]=[7,6,5,3,0,0,0,0];
	
	ovrigafardigheterpoangslag.kannetecken.push([]);
	ovrigafardigheterpoangslag.kannetecken[7]=[7,7,6,4,0,0,0,0];
	
	ovrigafardigheterpoangslag.kannetecken.push([]);
	ovrigafardigheterpoangslag.kannetecken[8]=[7,7,6,5,3,0,0,0,0];

	return ovrigafardigheterpoangslag
}

