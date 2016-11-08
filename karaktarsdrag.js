function hamta_karaktarsdraglistor (){
	
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

	
	
	var karaktarsdraglista = ["aggression", "arrogans", "droger", "dupera", "flagellant", "foralskelse", "heder", "hjalpsam", "kamp", "kunskapstorst", "ledarskap", "makt", "missionera", "mod", "nyfiken", "pacifism", "planera", "plikt", "rikedom", "risktagande", "ryktbarhet", "sex", "skapa", "spelochvadslagning", "spenderapengar", "stold", "supa", "svartsjuka", "svekfull", "underdanig", "vankelmod", "vanskap", "vardighet", "overtygelse"];
	// Aggression, Arrogans, Droger, Dupera, Flagellant, Förälskelse, Heder, Hjälpsam, Kamp, Kunskapstörst, Ledarskap, Makt, Missionera, Mod, Nyfiken, Pacifism, Planera, Plikt, Rikedom, Risktagande, Ryktbarhet, Sex, Skapa, Spel och vadslagning, Spendera pengar, Stöld, Supa, Svartsjuka, Svekfull, Underdånig, Vankelmod, Vänskap, Värdighet och Övertygelse
    var karaktarsdragobjekt={};
    karaktarsdragobjekt.lista=karaktarsdraglista;
    
    var aggression = new karaktarsdrag();
	
	karaktarsdragobjekt.aggression=aggression;
   	
	aggression.rubrik="";
	aggression.beskrivning="";
	aggression.niva1="";
	aggression.niva2="";
	aggression.niva3="";
	
	// loopa
	aggression.namn="";
   

    
    
    
    /*
    var karaktarsdragobjektlista=[];
	for (i = 0; i < karaktarsdraglista.length; i++){
    	karaktarsdragobjektlista.push(window[karaktarsdraglista[i]]);
    }
	*/
	
    // return [miljolista, miljoobjektlista];
    return karaktarsdragobjekt
}
