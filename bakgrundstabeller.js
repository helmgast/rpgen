function hamta_bakgrundstabeller (){
	
	// expertispoang=2 eller expertiser=2?
	
	
    bakgrundstabellista = ["jargiensbefolkning", "vildmark", "nermadasbefolkning", "damarien", "ghor", "jarvskogen"];
	var bakgrundstabeller = {};
	var i;
	bakgrundstabeller.lista=bakgrundstabellista;
    bakgrundstabeller.rubriker=["Jargiens befolkning", "Vildmark", "Nermadas befolkning", "Damariens befolkning", "Ghor", "Thism från Järvskogen"];
    // --- //
    
    bakgrundstabeller.jargiensbefolkning = [];
	bakgrundstabeller.jargiensbefolkning[0] = {};
	bakgrundstabeller.jargiensbefolkning[0].subval = [[[]]];
	bakgrundstabeller.jargiensbefolkning[0].vald = 0;
    bakgrundstabeller.jargiensbefolkning[0].rubrik="Jargiens befolkning";
    bakgrundstabeller.jargiensbefolkning[0].namn="jargiensbefolkning";
    
	bakgrundstabeller.jargiensbefolkning[1]= {};
	bakgrundstabeller.jargiensbefolkning[1].rubrik="Alkemist";
	bakgrundstabeller.jargiensbefolkning[1].bestamd="alkemisten";
	bakgrundstabeller.jargiensbefolkning[1].obestamd="en alkemist";
	bakgrundstabeller.jargiensbefolkning[1].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[1].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[1].mystikfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[1].beskrivning="Alkemisten är en konstnär besatt av att tämja de mystiska krafter som ingjutits i livets vatten som genomsyrar världen. Vissa når erkännande men många slutar som galningar efter att ha luktat för djupt i de dunster som salter och syror utsöndrar. Alkemisten viger sitt liv åt att förena magi, vetenskap och ockultism. De får dock bruka sina konster i hemlighet då inkvisitionen ser dessa som kättare och svartkonstnärer.";
	bakgrundstabeller.jargiensbefolkning[1].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Mystikfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[2] = {};
	bakgrundstabeller.jargiensbefolkning[2].rubrik="Apotekare";
	bakgrundstabeller.jargiensbefolkning[2].bestamd="apotekaren";
	bakgrundstabeller.jargiensbefolkning[2].obestamd="en apotekare";
	bakgrundstabeller.jargiensbefolkning[2].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[2].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[2].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[2].beskrivning="I trånga butiker i städerna, stugor på landsbygden eller täckta vagnar som rör sig mellan byarna förrättar apotekarna sitt värv. De förser folket med extrakt, salvor och dekokter som sägs bota allt från magont, eksem och varande sår till håravfall, impotens och tandvärk. Vissa kan konsten att sätta stopp för oönskade graviditeter och andra säljer gifter utan att ställa några frågor.";
	bakgrundstabeller.jargiensbefolkning[2].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Kunskapsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[3] = {};
	bakgrundstabeller.jargiensbefolkning[3].rubrik="Arkitektor";
	bakgrundstabeller.jargiensbefolkning[3].bestamd="arkitektorn";
	bakgrundstabeller.jargiensbefolkning[3].obestamd="en arkitektor";
	bakgrundstabeller.jargiensbefolkning[3].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[3].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[3].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[3].beskrivning="Om ingen ser efter städerna hamnar de snart i förfall. Hus rasar samman, kloakerna svämmar över, akvedukterna slammar igen. Arkitektorn har ansvaret för att se till att allt fungerar. Detta påverkar handeln samt var och när nya inrättningar får uppföras. Detta gör att positionen som arkitektor är en av de mest inkomstbringande när det gäller mutor då så gott som alla vill hålla sig väl med denne.";
	bakgrundstabeller.jargiensbefolkning[3].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[4] = {};
	bakgrundstabeller.jargiensbefolkning[4].rubrik="Balsamerare";
	bakgrundstabeller.jargiensbefolkning[4].bestamd="balsameraren";
	bakgrundstabeller.jargiensbefolkning[4].obestamd="en balsamerare";
	bakgrundstabeller.jargiensbefolkning[4].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[4].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[4].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[4].beskrivning="Det finns en gammal tradition att balsamera sina döda hos den övre klassen där man ser det som sin plikt att förvara förfäder i kryptor och gravvalv till tidens ände. Andra balsamerare stoppar upp djur och monster samt kokar skallar och rensar kadaver till de ädlingar och handelsfurstar som vill ha ståtliga troféer. Balsamerare har en stor insikt i den mänskliga anatomin och en stor samling groteska redskap och vätskor för att preparera kroppar.";
	bakgrundstabeller.jargiensbefolkning[4].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[5] = {};
	bakgrundstabeller.jargiensbefolkning[5].rubrik="Bard";
	bakgrundstabeller.jargiensbefolkning[5].bestamd="barden";
	bakgrundstabeller.jargiensbefolkning[5].obestamd="en bard";
	bakgrundstabeller.jargiensbefolkning[5].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[5].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[5].socialafardigheterenheter=4
	bakgrundstabeller.jargiensbefolkning[5].beskrivning="Med flinka fingrar över en lyras strängar förrättar barden sitt värv. Sånger framförs som sätter hjärtan i brand, får tårar att flöda, leenden att sprida sig och skratt att klinga. Barden är en sagoberättare, sångare, poet och underhållare. De mest misslyckade barderna är inte mycket mer än tiggare som i lappade kläder spelar på spruckna instrument. De mest lyckade framför uteslutande för de rikaste släkterna och till och med inför Kejsarens hov.";
	bakgrundstabeller.jargiensbefolkning[5].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[6] = {};
	bakgrundstabeller.jargiensbefolkning[6].rubrik="Bestraffare";
	bakgrundstabeller.jargiensbefolkning[6].bestamd="bestraffaren";
	bakgrundstabeller.jargiensbefolkning[6].obestamd="en bestraffare";
	bakgrundstabeller.jargiensbefolkning[6].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[6].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[6].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[6].beskrivning="När lagen hinner ifatt brottslingar är straffet ofta hårt. Händer ska kapas, tungor skäras ut och folk ska hängas från galgen, halshuggas eller bringas om livet på de sätt som makthavarna dömt. Detta är bestraffarens värv. Denne lever ständigt nära döden och är allt som oftast utstött och fruktad. Många har själva varit dödsdömda men blivit benådade i utbyte mot att bli bestraffare resten av livet.";
	bakgrundstabeller.jargiensbefolkning[6].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 2 poäng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[7] = {};
	bakgrundstabeller.jargiensbefolkning[7].rubrik="Boktryckare";
	bakgrundstabeller.jargiensbefolkning[7].bestamd="boktryckaren";
	bakgrundstabeller.jargiensbefolkning[7].obestamd="en boktryckare";
	bakgrundstabeller.jargiensbefolkning[7].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[7].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[7].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[7].beskrivning="Med bläckstänkta händer och en stressad uppsyn så driver boktryckarna på med sin produktion av att trycka böcker åt kyrkan och privata aktörer. De graverar och gjuter hela sidor åt gången och deras hantverkarkonst ses på med misstanke och är mycket ogillade av skrivarna då deras roll blir allt mer försvagad ju fler böcker som trycks.";
	bakgrundstabeller.jargiensbefolkning[7].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 2 poäng Hantverk."


	bakgrundstabeller.jargiensbefolkning[8] = {};
	bakgrundstabeller.jargiensbefolkning[8].rubrik="Bosättare";
	bakgrundstabeller.jargiensbefolkning[8].bestamd="bosättaren";
	bakgrundstabeller.jargiensbefolkning[8].obestamd="en bosättare";
	bakgrundstabeller.jargiensbefolkning[8].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[8].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[8].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[8].beskrivning="De jargiska kolonierna behöver ständigt nya invånare som brukar jorden, slåss mot urbefolkningen och sprider Daaks bud. En del blir lockade om löften om ett bättre liv, andra tvingas till utvandring. Många är fattiga familjer som lever på gränsen till svält varje dag och måste slita hårt för att bygga upp torp och hela samhällen.";
	bakgrundstabeller.jargiensbefolkning[8].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[9] = {};
	bakgrundstabeller.jargiensbefolkning[9].rubrik="Brottsling";
	bakgrundstabeller.jargiensbefolkning[9].bestamd="brottslingen";
	bakgrundstabeller.jargiensbefolkning[9].obestamd="en brottsling";
	bakgrundstabeller.jargiensbefolkning[9].pluralobestamd="brottslingar";
	bakgrundstabeller.jargiensbefolkning[9].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[9].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[9].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[9].beskrivning="Det finns lagar och regler för allt. Vad man får äta, var man får sova, vad man får handla med, vad man får säga, vad man får skriva, vad man får tänka. Brottslingen gör det till praxis att bryta mot de lagar som passar för att kunna tjäna sitt uppehälle. Det handlar ofta om smuggling, inbrott, rån och beskyddarverksamhet.";
	bakgrundstabeller.jargiensbefolkning[9].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[10] = {};
	bakgrundstabeller.jargiensbefolkning[10].rubrik="Censor";
	bakgrundstabeller.jargiensbefolkning[10].bestamd="censorn";
	bakgrundstabeller.jargiensbefolkning[10].obestamd="en censor";
	bakgrundstabeller.jargiensbefolkning[10].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[10].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[10].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[10].beskrivning="I Kejsardömet finns många viljor som drar folket i olika riktningar och det är inte alltid alla dessa viljor tjänar de styrandes intressen. Många författare, skådespelare och filosofer har tankar och idéer som allvarligt skulle kunna skada den jargiska ordningen och därför finns det så kallade censorer som arbetar med att granska verk som skapas i Kejsardömet och se till att ingenting sprids som kan rubba maktbalansen.";
	bakgrundstabeller.jargiensbefolkning[10].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[11] = {};
	bakgrundstabeller.jargiensbefolkning[11].rubrik="Consultator";
	bakgrundstabeller.jargiensbefolkning[11].bestamd="consultatorn";
	bakgrundstabeller.jargiensbefolkning[11].obestamd="en consultator";
	bakgrundstabeller.jargiensbefolkning[11].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[11].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[11].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[11].beskrivning="Det komplicerade jargiska systemet är en oöverskådlig spindelväv av lagar och paragrafer och det är consultatorns uppgift att dra i trådarna för att få byråkratin att agera på det sätt man önskar. Consultatorn agerar som advokat och rådgivare och alla större släkter har ett flertal consultatorer i sin tjänst. Ett fåtal av dessa använder systemet för att skapa rättvisa medan de flesta ser det som ett sätt att fylla sina egna kistor.";
	bakgrundstabeller.jargiensbefolkning[11].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[12] = {};
	bakgrundstabeller.jargiensbefolkning[12].rubrik="Dansare";
	bakgrundstabeller.jargiensbefolkning[12].bestamd="dansaren";
	bakgrundstabeller.jargiensbefolkning[12].obestamd="en dansare";
	bakgrundstabeller.jargiensbefolkning[12].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[12].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[12].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[12].beskrivning="I skådespel om Kejsardömets storhetstid framför dansarna episka strider framför åskådarna. På smutsiga tavernor i talgljusens sotiga sken dansar skökor för druckna legionärer som kastar mynt vid deras fötter. I ädlingarnas palats framträder både kvinnor och män, med sina smidiga kroppar inoljade och pudrade med gyllene stoft. Alla rör de sig virvlande till rytmen av Kejsardömets taktfasta hjärtslag.";
	bakgrundstabeller.jargiensbefolkning[12].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 2 poäng Kännetecken."

	
	bakgrundstabeller.jargiensbefolkning[13] = {};
	bakgrundstabeller.jargiensbefolkning[13].rubrik="Demagog";
	bakgrundstabeller.jargiensbefolkning[13].bestamd="demagogen";
	bakgrundstabeller.jargiensbefolkning[13].obestamd="en demagog";
	bakgrundstabeller.jargiensbefolkning[13].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[13].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[13].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[13].beskrivning="Ord kan flytta berg, röra folkmassor till handling och få katastrofer att låta som glädjebud. En del demagoger är inte mer än skrävlare som uppmanar folk till handling, andra är anstiftare till blodiga uppror, karismatiska sektledare eller sådana som älskar att skapa konflikter. Några är talesmän för akademier eller inflytelserika familjer i Kejsardömet men många finner sig jagade och ansatta av makthavarna som ogillar deras lösa tungor.";
	bakgrundstabeller.jargiensbefolkning[13].beskrivninghak = "1 slag på valfri tabell, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[14] = {};
	bakgrundstabeller.jargiensbefolkning[14].rubrik="Dibukkultist";
	bakgrundstabeller.jargiensbefolkning[14].bestamd="dibukkultisten";
	bakgrundstabeller.jargiensbefolkning[14].obestamd="en dibukkultist";
	bakgrundstabeller.jargiensbefolkning[14].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[14].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[14].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[14].beskrivning="Allt som lever ska dö. Alla blommor ska vittra. De som dyrkar dödsguden Dibuk ser sanningen. De ser Kejsardömets söndervittrade fasader, de fattigas magra kroppar, de rikas svällande bukar. Allt har sin storhetstid och allt har sitt slut. I små skaror samlas kultisterna under falska identiteter för att dyrka dödens och det kommande slutets gud, Dibuk. Vissa går direkt mot dödens kalla famn medan andra lämnas kvar för att leda folket till frälsning.";
	bakgrundstabeller.jargiensbefolkning[14].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Rörelsefärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[15] = {};
	bakgrundstabeller.jargiensbefolkning[15].rubrik="Domedagspredikant";
	bakgrundstabeller.jargiensbefolkning[15].bestamd="domedagspredikanten";
	bakgrundstabeller.jargiensbefolkning[15].obestamd="en domedagspredikant";
	bakgrundstabeller.jargiensbefolkning[15].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[15].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[15].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[15].beskrivning="Den sista tiden närmar sig. Tecknen blir allt fler och snart kommer den mörke Malgoarh och hans demoner att störta in i världen och alla som inte är svurna till Daak kommer slitas i stycken och torteras i all evighet. Domedagspredikanterna inser detta och försöker med hängivelse, förkunnanden och öppna predikningar varna folket. Domedagspredikanterna kan man se på torg, vandrande mellan städer och utanför kyrkorna.";
	bakgrundstabeller.jargiensbefolkning[15].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[16] = {};
	bakgrundstabeller.jargiensbefolkning[16].rubrik="Dödgrävare";
	bakgrundstabeller.jargiensbefolkning[16].bestamd="dödgrävaren";
	bakgrundstabeller.jargiensbefolkning[16].obestamd="en dödgrävare";
	bakgrundstabeller.jargiensbefolkning[16].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[16].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[16].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[16].beskrivning="Allt dör förr eller senare. De rika sätter mat i halsen och de fattiga svälter ihjäl. För dödgrävaren spelar det ingen roll – alla ska de ned i jorden. Gravar skottas upp, kroppar sänks ned och jord skyfflas över. En del tar extra tid och placerar en blomma på graven och säger en bön – andra plundrar de döda på allt de har och vissa säljer kroppar eller delar av kroppar till ljusskygga individer. Dödgrävare är sedda på med misstro då det finns många sagor och sånger där dödgrävare sägs stå i förbund med mörkrets makter.";
	bakgrundstabeller.jargiensbefolkning[16].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Rörelsefärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[17] = {};
	bakgrundstabeller.jargiensbefolkning[17].rubrik="Exaktor";
	bakgrundstabeller.jargiensbefolkning[17].bestamd="exaktorn";
	bakgrundstabeller.jargiensbefolkning[17].obestamd="en exaktor";
	bakgrundstabeller.jargiensbefolkning[17].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[17].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[17].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[17].beskrivning="Kejsardömet hålls vid liv av det ständiga flödet av silver och exaktorn är en skatteindrivare och fogde som ser till att skatten betalas in. Exaktorns händer är vanligen upptagna med stämplade och bläckfläckiga pergament och laghandlingar men de är minst lika upptagna med att ta emot silver för att ändra i dessa dokument så att skattetrycket inte blir så hårt för dem som har råd att betala.";
	bakgrundstabeller.jargiensbefolkning[17].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[18] = {};
	bakgrundstabeller.jargiensbefolkning[18].rubrik="Fiskare";
	bakgrundstabeller.jargiensbefolkning[18].bestamd="fiskaren";
	bakgrundstabeller.jargiensbefolkning[18].obestamd="en fiskare";
	bakgrundstabeller.jargiensbefolkning[18].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[18].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[18].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[18].beskrivning="På floder, sjöar och vid Igonhavets grunda stränder kan man se fiskarnas båtar. Vattnet är deras levebröd. Från djupet drar de upp sprattlande fiskar som glänser likt silver i solskenet. De lagar sina nät på ställningar vid stränderna och röker, saltar och jäser sin fångst. Många är vidskepliga och alla har de en respekt för vädrets makter, i synnerhet stormarna, som välter deras båtar och offrar dem till djupet.";
	bakgrundstabeller.jargiensbefolkning[18].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Vildmarksfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[19] = {};
	bakgrundstabeller.jargiensbefolkning[19].rubrik="Fjärilsfångare";
	bakgrundstabeller.jargiensbefolkning[19].bestamd="fjärilsfångaren";
	bakgrundstabeller.jargiensbefolkning[19].obestamd="en fjärilsfångare";
	bakgrundstabeller.jargiensbefolkning[19].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[19].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[19].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[19].beskrivning="Ett vackrare namn för insektsjägare är de fjärilsfångare som ser till att ädlingar får sova ostört på nätterna. Fladdrande malvingar, gnisslande syrsor och skrapandet av tusenfotingar kan störa sömnen och fjärilsfångarna gör sitt bästa för att tyst och metodiskt förgifta och ta ihjäl dem. Det finns även finare fjärilsfångare, som samlar färgglada insekter för dess skönhets skull eller för att utvinna sekret till unika gifter och motgifter.";
	bakgrundstabeller.jargiensbefolkning[19].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[20] = {};
	bakgrundstabeller.jargiensbefolkning[20].rubrik="Flagellant";
	bakgrundstabeller.jargiensbefolkning[20].bestamd="flagellanten";
	bakgrundstabeller.jargiensbefolkning[20].obestamd="en flagellant";
	bakgrundstabeller.jargiensbefolkning[20].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[20].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[20].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[20].beskrivning="Klädd i trasor och med sönderpiskad rygg vandrar flagellanten genom Kejsardömet. Denne är uppfylld av den heliga Udars lidande och mässar osammanhängande för alla som vill lyssna. Vissa blir flagellanter efter religiösa visioner, andra som straff för sina synder. För att visa på Udars barmhärtighet tar en del med sig föräldralösa barn i sitt följe och låter dessa leva på allmosorna. De smetar in barnens kinder med sitt blod till dess att barnen är gamla nog att själva ta upp piskan och delta i självspäkelsen – den heligaste av riter.";
	bakgrundstabeller.jargiensbefolkning[20].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Vildmarksfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[21] = {};
	bakgrundstabeller.jargiensbefolkning[21].rubrik="Forskare";
	bakgrundstabeller.jargiensbefolkning[21].bestamd="forskaren";
	bakgrundstabeller.jargiensbefolkning[21].obestamd="en forskare";
	bakgrundstabeller.jargiensbefolkning[21].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[21].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[21].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[21].beskrivning="Knutna till lärosäten lever forskarna som arbetar för att fördjupa sin insikt runt människan, naturen, historia eller teologi. Vissa lärda män och kvinnor får sin forskning sanktionerad av kyrkan, främst de som specialiserat sig på teologi. Andra lever i ständig skräck för att kyrkan eller censorerna ska beslagta deras alster och straffa dem för deras hädiska tankar och idéer.";
	bakgrundstabeller.jargiensbefolkning[21].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[22] = {};
	bakgrundstabeller.jargiensbefolkning[22].rubrik="Fältskär";
	bakgrundstabeller.jargiensbefolkning[22].bestamd="fältskären";
	bakgrundstabeller.jargiensbefolkning[22].obestamd="en fältskär";
	bakgrundstabeller.jargiensbefolkning[22].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[22].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[22].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[22].beskrivning="När det sker stridigheter dör de flesta långt efter slaget av sina skador. Fältskären försöker rädda livet på dessa. Denne läkekunnige är van att resa med legionerna eller håller sig nära borgar och gränsposteringar. Fältskärer är skickliga på att stoppa blödningar, spjälka ben och genomföra vissa enklare kirurgiska ingrepp men trots detta dukar många av patienterna under och få har sett så mycket lidande i livets sista timmar som dessa män och kvinnor.";
	bakgrundstabeller.jargiensbefolkning[22].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Kunskapsfärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[23] = {};
	bakgrundstabeller.jargiensbefolkning[23].rubrik="Förfalskare";
	bakgrundstabeller.jargiensbefolkning[23].bestamd="förfalskaren";
	bakgrundstabeller.jargiensbefolkning[23].obestamd="en förfalskare";
	bakgrundstabeller.jargiensbefolkning[23].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[23].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[23].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[23].beskrivning="Med ett skarpt öga kopieras handstilar, sigillstämplar och till och med formuleringar och dolda budskap av förfalskaren. I ett rike där dokument, sigill och kontrakt utgör kärnan i alla tänkbara verksamheter har en skicklig förfalskare en möjlighet att tjäna stora pengar. Straffet för förfalskning är dock mycket hårt och förfalskare arbetar därför ofta genom mellanhänder om någon av kunderna skulle bli infångad och tvingad att tala.";
	bakgrundstabeller.jargiensbefolkning[23].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 2 poäng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[24] = {};
	bakgrundstabeller.jargiensbefolkning[24].rubrik="Gardessoldat";
	bakgrundstabeller.jargiensbefolkning[24].bestamd="gardessoldaten";
	bakgrundstabeller.jargiensbefolkning[24].obestamd="en gardessoldat";
	bakgrundstabeller.jargiensbefolkning[24].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[24].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[24].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[24].beskrivning="Gardessoldater kan ha mycket varierande uppgifter, vissa arbetar med att skydda en person eller en plats, andra arbetar för att tillintetgöra en fientlig organisation eller rörelse. Garderna består oftast av elitsoldater som visat stor skicklighet inom ett visst område och som av denna anledning blivit plockade från sina tidigare anställningar för att tjäna ett högre syfte. Vanligtvis är garderna finansierade av en mycket rik adelsman eller ett stort och mäktigt gille för att tjäna deras syften.";
	bakgrundstabeller.jargiensbefolkning[24].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[25] = {};
	bakgrundstabeller.jargiensbefolkning[25].rubrik="Gatuförsäljare";
	bakgrundstabeller.jargiensbefolkning[25].bestamd="gatuförsäljaren";
	bakgrundstabeller.jargiensbefolkning[25].obestamd="en gatuförsäljare";
	bakgrundstabeller.jargiensbefolkning[25].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[25].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[25].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[25].beskrivning="Skrikandes om erbjudanden om färsk fisk, vackra tyger, nybakt bröd och väldoftande oljor står gatuförsäljarna i sina små affärer för att locka in folkhopen för att köpa deras varor. Med snabba ord som likt honung söker sig in i kundernas öron så säljer de sina varor till folket. De använder alla knep som finns för att klara vardagen och samtidigt försöka hålla uppe sitt rykte till morgondagen.";
	bakgrundstabeller.jargiensbefolkning[25].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[26] = {};
	bakgrundstabeller.jargiensbefolkning[26].rubrik="Gisslan";
	bakgrundstabeller.jargiensbefolkning[26].bestamd="gisslan";
	bakgrundstabeller.jargiensbefolkning[26].obestamd="en gisslan";
	bakgrundstabeller.jargiensbefolkning[26].pluralobestamd="gisslan";
	bakgrundstabeller.jargiensbefolkning[26].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[26].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[26].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[26].beskrivning="Det finns inga fängelser i Kejsardömet, men ändå finns det fångna personer som är för viktiga eller användbara för att dödas. Dessa fungerar vanligen som gisslan mellan rika släkter, en säkerhet att man fullföljer sin del av avtalen. Gisslan kan i värsta fall hållas i kalla och fuktiga källarhålor, men i de flesta fall får de arbeta i hushållet eller bo i ensliga kloster. Riktig betydelsefull gisslan kan leva som ärade gäster i ståtliga borgar. Deras liv hänger dock på sina värdars välvilja och när som helst kan de tas av daga.";
	bakgrundstabeller.jargiensbefolkning[26].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[27] = {};
	bakgrundstabeller.jargiensbefolkning[27].rubrik="Gladiator";
	bakgrundstabeller.jargiensbefolkning[27].bestamd="gladiatorn";
	bakgrundstabeller.jargiensbefolkning[27].obestamd="en gladiator";
	bakgrundstabeller.jargiensbefolkning[27].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[27].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[27].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[27].beskrivning="Till publikens jubel störtar kämpar samman. Stål möter stål, blod spills, ben bryts och när allt är över står en segrare upp med sitt vapen höjt mot skyn. Gladiatorn är en kämpe som slåss för att underhålla i välkoreograferade strider gentemot sina vapenbröder. När man inte möter mänskliga motståndare släpps monster och bestar in på arenan och gladiatorerna tillintetgör då dessa styggelser i Daaks namn. De mest välkända gladiatorerna är hyllade som hjältar och deras namn är spridda ända till kolonierna. De okända slåss på mindre arenor och är vanligen de som är förutbestämda att förlora i de allt som oftast uppgjorda striderna.";
	bakgrundstabeller.jargiensbefolkning[27].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 2 poäng Kännetecken."

	
	bakgrundstabeller.jargiensbefolkning[28] = {};
	bakgrundstabeller.jargiensbefolkning[28].rubrik="Glutharian";
	bakgrundstabeller.jargiensbefolkning[28].bestamd="glutharianen";
	bakgrundstabeller.jargiensbefolkning[28].obestamd="en glutharian";
	bakgrundstabeller.jargiensbefolkning[28].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[28].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[28].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[28].beskrivning="Mat, vin, orgier, droger, vild kopulering och ohämmad njutning utgör kärnan i glutharianens liv. Denna hedniska tro där man är på en ständig jakt efter njutningen på de mest perversa sätt är vanlig bland de rika i det jargiska samhället. Trots utbredningen av kulten gör sällan inkvisitionen några större tillslag gentemot dem och det ryktas att ett flertal av anhängarna är män och kvinnor av kyrkan.";
	bakgrundstabeller.jargiensbefolkning[28].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[29] = {};
	bakgrundstabeller.jargiensbefolkning[29].rubrik="Godsägare";
	bakgrundstabeller.jargiensbefolkning[29].bestamd="godsägaren";
	bakgrundstabeller.jargiensbefolkning[29].obestamd="en godsägare";
	bakgrundstabeller.jargiensbefolkning[29].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[29].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[29].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[29].beskrivning="För många är bilden av en godsägare en man eller kvinna som med ett sorglöst leende och blickar ut över fälten där slavarna arbetar medan denne ligger på divanen och blir matad med druvor. Det finns några som har detta enkla liv med pengar, rikedom och makt men långt ifrån alla. Många är hårt arbetande och inblandade i gränstvister med sina grannar, något som ibland övergår till regelrätta stridigheter.";
	bakgrundstabeller.jargiensbefolkning[29].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Kunskapsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[30] = {};
	bakgrundstabeller.jargiensbefolkning[30].rubrik="Grovarbetare";
	bakgrundstabeller.jargiensbefolkning[30].bestamd="grovarbetaren";
	bakgrundstabeller.jargiensbefolkning[30].obestamd="en grovarbetare";
	bakgrundstabeller.jargiensbefolkning[30].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[30].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[30].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[30].beskrivning="Yxor biter in i trädstammarna, hackor och hammare frigör marmor från stenbrotten och murar och byggnader byggs av ren mankraft. Grovarbetarna är de som utför det tyngsta arbetet i Kejsardömet. De är kända för kamratskap och envishet. Arbetslagen sliter i både regn och gassande sol och sover sedan tungt i kojorna ute i vildmarken. När säsongen är över återvänder de till sin familj med pengar eller till städerna i jakt på nytt arbete.";
	bakgrundstabeller.jargiensbefolkning[30].beskrivninghak = "1 slag på valfri tabell, 4 enheter Vildmarksfärdigheter, 2 poäng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[31] = {};
	bakgrundstabeller.jargiensbefolkning[31].rubrik="Gråtare";
	bakgrundstabeller.jargiensbefolkning[31].bestamd="gråtaren";
	bakgrundstabeller.jargiensbefolkning[31].obestamd="en gråtare";
	bakgrundstabeller.jargiensbefolkning[31].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[31].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[31].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[31].beskrivning="När en person dött vars släktingar är bland de bemedlade så anlitar dessa gråtare för att sörja den döde. Dessa män och kvinnor klär sig i askgrå kläder, skriker, gråter och släpper ut sorg och vånda. De sjunger även elegier, begravningshymner och ber till Daak att vaka över den bortgångne. Ofta förrättar de sitt värv utanför den dödes hus eller vandrar efter stadens gator och skriker den dödes namn.";
	bakgrundstabeller.jargiensbefolkning[31].beskrivninghak = "1 slag på valfri tabell, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[32] = {};
	bakgrundstabeller.jargiensbefolkning[32].rubrik="Gycklare";
	bakgrundstabeller.jargiensbefolkning[32].bestamd="gycklaren";
	bakgrundstabeller.jargiensbefolkning[32].obestamd="en gycklare";
	bakgrundstabeller.jargiensbefolkning[32].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[32].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[32].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[32].beskrivning="Enkla nöjen för enkla människor. Gycklare underhåller det vanliga folket med allehanda konster såsom akrobatik, jonglering, eldblåsning och eldslukning samt enklare fakirtrick. Många gycklare vandrar mellan städerna för att finna nya platser där folk ännu inte sett deras uppträdande och dessa uppmärksamma personer för med sig skvaller och nyheter från Kejsardömets alla hörn.";
	bakgrundstabeller.jargiensbefolkning[32].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 2 poäng Kännetecken."

	
	bakgrundstabeller.jargiensbefolkning[33] = {};
	bakgrundstabeller.jargiensbefolkning[33].rubrik="Hamnarbetare";
	bakgrundstabeller.jargiensbefolkning[33].bestamd="hamnarbetaren";
	bakgrundstabeller.jargiensbefolkning[33].obestamd="en hamnarbetare";
	bakgrundstabeller.jargiensbefolkning[33].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[33].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[33].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[33].beskrivning="Nära botten av samhällets pyramid befinner sig hamnarbetarna och de utför den grova arbetsinsats som krävs för att stuva lasten på fartyg. De syns ständigt bärande på tunga säckar eller lårar eller fast i timtal vandrandes i hamnens kranhjul. De är råbarkade typer med ytterst lite fritid som de dock gärna spenderar drickandes på billiga tavernor, ständigt beredda på slagsmål. Hamnarbetare har stor koll på vad för last olika skepp och lagerbyggnader har i sina mörka utrymmen och för några extra stop öl på krogen blir de ofta benägna att berätta mer om lasten än dess ägare skulle acceptera.";
	bakgrundstabeller.jargiensbefolkning[33].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[34] = {};
	bakgrundstabeller.jargiensbefolkning[34].rubrik="Hantverkare";
	bakgrundstabeller.jargiensbefolkning[34].bestamd="hantverkaren";
	bakgrundstabeller.jargiensbefolkning[34].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[34].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[34].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[34].beskrivning="I städerna lever hantverkarna indelade i olika gillen. De mest inflytelserika hantverkarna är gillesmästare vilka anses vara några av stadens mäktigaste män som sitter på både rikligt med pengar och otaliga hantverkshemligheter. De som har lägst inflytande är lärlingar vilka under flera års tid får arbeta likt slavar åt någon av de andra medlemmarna i hopp om att lära sig värvet.";
	bakgrundstabeller.jargiensbefolkning[34].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 2 poäng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[35] = {};
	bakgrundstabeller.jargiensbefolkning[35].rubrik="Hämnare";
	bakgrundstabeller.jargiensbefolkning[35].bestamd="hämnaren";
	bakgrundstabeller.jargiensbefolkning[35].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[35].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[35].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[35].beskrivning="Ära och heder är det dyrbaraste som finns för en jargier. Förlorad heder kan vara svårt att återfå, men det finns speciella hämnare som kallas okuro eller avengor som är vapenkunniga och är experter på att skada sina offers anseende. Vanligt är också att hämnarnas offer utmanas på en duell på liv och död. Andra metoder som hämnarna kan använda är att slå till mot offrets anhöriga, eller rent av utföra hedersmord. Normalt har en magistrat utfärdat en speciell konfiskeringsorder som gäller just återbördandet av förlorad ära, heder eller rättigheter.";
	bakgrundstabeller.jargiensbefolkning[35].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Rörelsefärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[36] = {};
	bakgrundstabeller.jargiensbefolkning[36].rubrik="Häxa";
	bakgrundstabeller.jargiensbefolkning[36].bestamd="häxan";
	bakgrundstabeller.jargiensbefolkning[36].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[36].mystikfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[36].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[36].beskrivning="Kvinnor och män som genom pakter med Antimon lyckats få krafter bortom det mänskliga. Vissa sägs kunna bota sjukdomar som härjar och andra kan få stolar och katter att flyga runt som fåglar. Så gott som alla är magi- och läkekunniga med en insikt i de fördolda. Enligt inkvisitionen sägs de mörka makterna ha fläckat dessa personer på något sätt och det är endast genom dessa tecken som man kan veta med säkerhet om en person verkligen är en äkta häxa. Olikfärgade ögon, krumma ryggar eller svarta fläckar från de punkter där den onde berört dem ses som bevis.";
	bakgrundstabeller.jargiensbefolkning[36].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Mystikfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[37] = {};
	bakgrundstabeller.jargiensbefolkning[37].rubrik="Häxjägare";
	bakgrundstabeller.jargiensbefolkning[37].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[37].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[37].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[37].beskrivning="Det finns många fasor i Kejsardömet. På gamla kyrkogårdar vaknar de döda, i avlägsna byar blir folk besatta av andeväsen som kommer om natten, desperata personer svär sig till demoner utan att veta vilket pris de kommer tvingas betala. Häxjägaren är en person som tagit det som sin uppgift att finna och tillintetgöra mörkrets makter. En del av dessa arbetar under en inkvisitor, andra är själva jagade av inkvisitionen.";
	bakgrundstabeller.jargiensbefolkning[37].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[38] = {};
	bakgrundstabeller.jargiensbefolkning[38].rubrik="Indrivare";
	bakgrundstabeller.jargiensbefolkning[38].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[38].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[38].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[38].beskrivning="Aggression, hotfullhet och ett respektingivande yttre är meriter hos indrivare i de lägre samhällsklasserna. Bland de mer förmögna är det vältalighet kryddad med dolda hot, skicklig dokumentation och en insikt i låntagarens tillgångar det som fungerar bäst. Deras roll är dock densamma; att utlånade pengar kommer tillbaka till sin ägare. Om detta så löses med att fingrar bryts och tänder slås ut eller att affärer saboteras, familjer hotas och egendom bränns ned beror helt och hållet på situationen och summans storlek.";
	bakgrundstabeller.jargiensbefolkning[38].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Sociala färdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[39] = {};
	bakgrundstabeller.jargiensbefolkning[39].rubrik="Inkvisitor";
	bakgrundstabeller.jargiensbefolkning[39].bestamd="inkvisitorn";
	bakgrundstabeller.jargiensbefolkning[39].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[39].mystikfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[39].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[39].beskrivning="Kättare, syndare, häxor, hedningar och svartkonstnärer finns överallt. Inkvisitionen har svurit att finna dessa och rena dem, straffa dem eller döda dem och på så sätt hålla Kejsardömet tryggt. Inkvisitorerna letar efter tecken på syndare och tar in dessa på förhör. De nystar i förbjudna sammanslutningar, bevakar tvivelaktiga individer och i deras ökända tortyrkammare pressas sanningen fram med glödgade tänger. Inkvisitorer är fruktade av alla. Det finns många som missbrukar sin makt medan andra för en modig kamp gentemot demoner och övernaturliga styggelser för att hålla de troende säkra.";
	bakgrundstabeller.jargiensbefolkning[39].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Mystikfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[40] = {};
	bakgrundstabeller.jargiensbefolkning[40].rubrik="Jordbrukare";
	bakgrundstabeller.jargiensbefolkning[40].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[40].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[40].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[40].beskrivning="Kejsardömet hålls vid liv av dem som brukar jorden. Dessa sår fälten, vallar boskapen och frambringar den stora mängd spannmål och kött som fraktas till städerna på oxdragna vagnar. Under svältår är livet på landet mycket hårt men när skörden är god lever många gott och de som är lite mer bemedlade kan hyra in arbetare som daglönare eller har slavar som utför en del av arbetet.";
	bakgrundstabeller.jargiensbefolkning[40].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Vildmarksfärdigheter, 2 poäng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[41] = {};
	bakgrundstabeller.jargiensbefolkning[41].rubrik="Jägare";
	bakgrundstabeller.jargiensbefolkning[41].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[41].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[41].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[41].beskrivning="I vildmarken vid Kejsardömets gränstrakter lever dessa simpla människor på sin skicklighet med spjut och båge. Då och då reser de tillbaka till städerna eller byarna med hudar, kött eller hantverk i horn och ben. Vissa jägare arbetar ensamma men andra väljer att ansluta sig till jaktlag som tillsammans driver och fäller bytet.";
	bakgrundstabeller.jargiensbefolkning[41].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[42] = {};
	bakgrundstabeller.jargiensbefolkning[42].rubrik="Kartograf";
	bakgrundstabeller.jargiensbefolkning[42].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[42].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[42].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[42].beskrivning="För köpmännen, ädlingarna, kyrkan, armén och givetvis Kejsaren har det alltid varit viktigt att veta hur geografin i riket och kolonierna ser ut. Kartograferna kan provinsernas gränser, vägar, vattendrag, floder, skogar, åkerareal samt även vilka länder som finns bortom haven, de nordliga bergen, slätterna och den förhatliga asköknen Tarkas. Många kartografer företar sig i sin ungdom dramatiska och farliga resor i Kejsardömets utkanter.";
	bakgrundstabeller.jargiensbefolkning[42].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Kunskapsfärdigheter, 2 poäng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[43] = {};
	bakgrundstabeller.jargiensbefolkning[43].rubrik="Konfiskatör";
	bakgrundstabeller.jargiensbefolkning[43].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[43].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[43].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[43].beskrivning="Ägodelar, varor och pengar på villovägar ska naturligtvis beslagtas och återbördas till sin rättmätiga ägare. Oftast rör det sig om någon form av egendom som stulits, förskingrats eller överlåtits till en ny ägare. En konfiskatör eller apprendator stödjer sig på en konfiskationsorder som utfärdats av en magistrat och får normalt provision i efterhand – allt från en tiondel till hälften av godsets värde.";
	bakgrundstabeller.jargiensbefolkning[43].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[44] = {};
	bakgrundstabeller.jargiensbefolkning[44].rubrik="Konkubin";
	bakgrundstabeller.jargiensbefolkning[44].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[44].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[44].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[44].beskrivning="Konkubiner är mer än vanliga skökor då de tar hutlösa summor för sitt umgänge och blir således älskarinnor och älskare till de allra mest förmögna och inflytelserika. Konkubinerna måste alltid sträva efter att behålla gunsten och intresset då detta är deras levebröd och många är därför experter när det gäller förförelse eller utövandet av mer ovanliga sexuella akter. Andra har kommit att bli intuitiva och intelligenta rådgivare.";
	bakgrundstabeller.jargiensbefolkning[44].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[45] = {};
	bakgrundstabeller.jargiensbefolkning[45].rubrik="Kunskapare";
	bakgrundstabeller.jargiensbefolkning[45].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[45].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[45].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[45].beskrivning="I tjänst åt någon uppsatt, vanligen någon inom kyrkan, hovet, en av släkterna, ett handelshus eller kanske till och med ett främmande rike spionerar kunskaparen på sina mål och sänder tillbaka detaljerade rapporter om vad som pågår. En del kunskapare är inte mer än tjänare som får några extra guld genom att berätta vad dennes herrar har för sig medan andra kunskapare har tränats i sitt värv sedan barnsben.";
	bakgrundstabeller.jargiensbefolkning[45].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[46] = {};
	bakgrundstabeller.jargiensbefolkning[46].rubrik="Kurirryttare";
	bakgrundstabeller.jargiensbefolkning[46].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[46].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[46].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[46].beskrivning="I det väldiga Kejsardömet färdas nyheter långsamt. När bud måste skickas med hast eller nyheter måste spridas till rikets alla invånare sänds kurirryttare mellan städerna. De spikar upp plakat, levererar sigillförseglade brev och viskar kodade budskap till utvalda personer. Så gott som alla stora släkter har egna kurirryttare, likaså kyrkan och armén.";
	bakgrundstabeller.jargiensbefolkning[46].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[47] = {};
	bakgrundstabeller.jargiensbefolkning[47].rubrik="Kättare";
	bakgrundstabeller.jargiensbefolkning[47].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[47].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[47].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[47].beskrivning="Det finns de som vänt sitt ansikte från Daaks sanna lära, de tvivlar på kyrkans budskap och förnekar Aboratens ord. Deras tro överensstämmer inte med den enda sanna och deras syn på religionen spottar kyrkan och alla Daaks helgon i ansiktet. Kättarna försöker hitta tvivlare, inför vilka de propagerar om sin sanning och sår sina idéer. Det är ett mycket farligt värv som drar till sig inkvisitionens uppmärksamhet.";
	bakgrundstabeller.jargiensbefolkning[47].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[48] = {};
	bakgrundstabeller.jargiensbefolkning[48].rubrik="Köpman";
	bakgrundstabeller.jargiensbefolkning[48].bestamd="köpmannen";
	bakgrundstabeller.jargiensbefolkning[48].pluralobestamd="köpmän";
	bakgrundstabeller.jargiensbefolkning[48].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[48].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[48].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[48].beskrivning="På noga balanserade vågar vägs silver och guldhalten avgörs genom att bita i mynten. Köpmannen säljer, byter och köper varor och försöker pressa fram så stor vinst som det bara är möjligt. Djärva chanstagningar, försenade leveranser eller konkurrensen kan helt slå ut en köpman. I Kejsardömet är de dock mångtaliga och de som dukar under är snart bortglömda och nya giriga män och kvinnor tar deras plats.";
	bakgrundstabeller.jargiensbefolkning[48].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[49] = {};
	bakgrundstabeller.jargiensbefolkning[49].rubrik="Lamiakultist";
	bakgrundstabeller.jargiensbefolkning[49].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[49].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[49].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[49].beskrivning="I Jargien finns det många sagor om lamiorna, de bleka vandöda som sägs stryka runt nattetid och tömma människor på blod. De är väsen som förkastat Daak men genom mörk magi vunnit skönhet, ofantlig styrka och evigt liv. Runt om i riket har det uppstått kulter som dyrkar dessa varelser i svarta mässor och blodsriter i hopp om att få del av deras makt och kanske slutligen vinna odödlighetens gåva.";
	bakgrundstabeller.jargiensbefolkning[49].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Rörelsefärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[50] = {};
	bakgrundstabeller.jargiensbefolkning[50].rubrik="Lantarbetare";
	bakgrundstabeller.jargiensbefolkning[50].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[50].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[50].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[50].beskrivning="Lantarbetarna är de lägsta bland jordbrukarna. Det är de som inte äger vare sig jord eller egendom men får slita mest av alla på fälten. Männen slår skörden i gassande solsken, kvinnorna samlar upp den i kärvar. Får vallas av unga pojkar och flickor och när hösten kommer grävs rovorna upp. Många drömmer om ett bättre liv där de äger jorden som de sliter på dag ut och dag in.";
	bakgrundstabeller.jargiensbefolkning[50].beskrivninghak = "1 slag på valfri tabell, 4 enheter Vildmarksfärdigheter, 2 poäng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[51] = {};
	bakgrundstabeller.jargiensbefolkning[51].rubrik="Legosoldat";
	bakgrundstabeller.jargiensbefolkning[51].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[51].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[51].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[51].beskrivning="De krigare som inte ansluter sig till legionerna blir ofta legosoldater. Vissa är före detta legionärer som valt att gå sin egen väg medan andra värvas direkt som unga män för att slåss i ett förband. Legosoldater reser land och rike runt för att slåss för dem som betalar bäst.";
	bakgrundstabeller.jargiensbefolkning[51].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[52] = {};
	bakgrundstabeller.jargiensbefolkning[52].rubrik="Lönnmördare";
	bakgrundstabeller.jargiensbefolkning[52].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[52].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[52].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[52].beskrivning="I Kejsardömet är lönnmördare ett populärt redskap för att undanröja oönskade element. De kan röra sig om allt från brutala knivskärare i hamnkvarteren till subtila giftmördare i hoven. Alla större släkter har en eller flera personer i sin sold med denna specialitet. Dessa fungerar ofta som livvakter och rådgivare som skydd mot andra lönnmördare. Det är ett yrke som kräver ett kallt hjärta eller en passion för konstformen och Kejsardömet är fyllt med såväl kallhjärtade som passionerade individer.";
	bakgrundstabeller.jargiensbefolkning[52].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[53] = {};
	bakgrundstabeller.jargiensbefolkning[53].rubrik="Magiker";
	bakgrundstabeller.jargiensbefolkning[53].bestamd="magikern";
	bakgrundstabeller.jargiensbefolkning[53].pluralobestamd="magiker";
	bakgrundstabeller.jargiensbefolkning[53].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[53].mystikfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[53].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[53].beskrivning="Ständigt på flykt från inkvisitionens grepp är magikerna, begåvade mästare på att manipulera världen efter sin vilja. De bedriver sitt värv i hemlighet och många har ett annat yrke som fasad. Det finns dock hemliga magiska sällskap och många inflytelserika kan tänka sig att betala dyrt för att bruka den förbjudna magin så länge de inte blir sammankopplade med magikern ifråga.";
	bakgrundstabeller.jargiensbefolkning[53].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Mystikfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[54] = {};
	bakgrundstabeller.jargiensbefolkning[54].rubrik="Magistrat";
	bakgrundstabeller.jargiensbefolkning[54].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[54].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[54].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[54].beskrivning="I alla jargiska städer och större byar finns det en magistrat vilken är högsta ansvarig för rättskipningen inom sitt område. Denna inflytelserika person leder en allmän domstol där alla tviste- och brottsmål behandlas och i slutändan är det magistraten som beslutar vilka som måste dö, vilka som måste betala och vilka som ska släppas fria.";
	bakgrundstabeller.jargiensbefolkning[54].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[55] = {};
	bakgrundstabeller.jargiensbefolkning[55].rubrik="Medikus";
	bakgrundstabeller.jargiensbefolkning[55].pluralobestamd="medikusar";
	bakgrundstabeller.jargiensbefolkning[55].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[55].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[55].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[55].beskrivning="När folk blir sjuka, ben måste spjälkas och sår måste sys tillkallas en medikus. Denne specialiserar sig på kroppens mysterier och hur man botar åkommor genom åderlåtning, beska dekokter och stinkande salvor. Kunskapen om hur man når balans i kroppens vätskor gör dessa individer mycket respekterade.";
	bakgrundstabeller.jargiensbefolkning[55].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[56] = {};
	bakgrundstabeller.jargiensbefolkning[56].rubrik="Missionär";
	bakgrundstabeller.jargiensbefolkning[56].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[56].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[56].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[56].beskrivning="Det finns så många otrogna i kolonierna, i fjärran riken och i Kejsardömets utkanter att kyrkans godhet inte klarar av att titta handfallet på utan måste agera för deras själars skull. Missionären är en person av kyrkan, vanligen en munk, nunna, tempelriddare eller präst som tagit sig an ett heligt uppdrag att sprida Daaks bud över Mundana. Vissa missionärer använder tålmodigt diplomati och visar på Daaks välvilja medan andra föredrar våldets väg för att tvinga de otrogna till underkastelse – det handlar ju trots allt om att rädda deras själar.";
	bakgrundstabeller.jargiensbefolkning[56].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[57] = {};
	bakgrundstabeller.jargiensbefolkning[57].rubrik="Munk/nunna";
	bakgrundstabeller.jargiensbefolkning[57].bestamd="munken/nunnan";
	bakgrundstabeller.jargiensbefolkning[57].pluralobestamd="munkar/nunnor";
	
	bakgrundstabeller.jargiensbefolkning[57].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[57].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[57].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[57].beskrivning="De finns de troende som väljer att svära sig till Daak och går med i ett kloster för att där tjäna honom. En del kloster ligger isolerade långt ute på landsbygden medan andra är belägna mitt i städer där man dagligen har kontakt med stadsborna. Vissa kloster är mycket strikta med tysthetslöfte och straff för minsta förseelse men i andra sker förbjudna ting bakom murarna och där handlar löftet snarare om att inte avslöja något för utomstående.";
	bakgrundstabeller.jargiensbefolkning[57].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[58] = {};
	bakgrundstabeller.jargiensbefolkning[58].rubrik="Munskänk";
	bakgrundstabeller.jargiensbefolkning[58].pluralobestamd="munskänkar";
	
	bakgrundstabeller.jargiensbefolkning[58].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[58].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[58].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[58].beskrivning="Ju högre status man har i Kejsardömet desto fler fiender får man och förgiftning är en dödsorsak som är allt för vanlig hos de rika. Munskänkar är personer med mycket känsliga smaklökar som tränats i att upptäcka gifter i mat och dryck. Genom att äta en stund innan sin herre kan de utveckla förgiftningssymptom innan herren ens smakar maten. Dessa personer befinner sig mitt i de högre stånden och har en inblick i många av de göromål som sker där.";
	bakgrundstabeller.jargiensbefolkning[58].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Vildmarksfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[59] = {};
	bakgrundstabeller.jargiensbefolkning[59].rubrik="Ockrare";
	bakgrundstabeller.jargiensbefolkning[59].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[59].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[59].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[59].beskrivning="Guld och silver flödar genom Kejsardömet och de som inga pengar har kan inte komma långt. Ockrarna är personer som har en egen förmögenhet och som gärna lånar ut en summa mot en riklig ränta. Det finns alltid de som vill göra affärer, behöver en medikus eller måste betala av en skuld. Om inte pengarna kommer tillbaka i tid så tvingas ockraren ta hjälp av indrivare för att skydda sin investering.";
	bakgrundstabeller.jargiensbefolkning[59].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[60] = {};
	bakgrundstabeller.jargiensbefolkning[60].rubrik="Ordensriddare";
	bakgrundstabeller.jargiensbefolkning[60].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[60].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[60].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[60].beskrivning="Svurna till Daak och omgärdade av riter och mystik axlar ordensriddarna manteln som rikets beskyddare och Daaks förkämpar. De är respekterade och fruktade av folket då deras makt ofta gör dem onåbara för anklagelser vilket gör att vissa inte drar sig för att använda sitt inflytande för att ta det de vill utan rädsla för repressalier. Många är fanatiskt trogna den orden de tillhör och att försvara sin och dess ära tar upp all deras tid.";
	bakgrundstabeller.jargiensbefolkning[60].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[61] = {};
	bakgrundstabeller.jargiensbefolkning[61].rubrik="Pilgrim";
	bakgrundstabeller.jargiensbefolkning[61].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[61].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[61].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[61].beskrivning="Till fots, iklädda enkla kläder i dova färger med en pilgrimsstav i sin hand och ett Daakkors runt sin hals färdas pilgrimerna genom Kejsardömet. De är obeväpnade då Daak skyddar dem på sin vandring mellan de heliga platserna. Vissa vandrar för att visa sin underkastelse till sin gud, andra för att göra bot. På knä ber de vid helgedomar, besöker orakel och helare, kysser marken där profeter har vandrat i hopp om att blidka den ende guden och vinna insikt.";
	bakgrundstabeller.jargiensbefolkning[61].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Kunskapsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[62] = {};
	bakgrundstabeller.jargiensbefolkning[62].rubrik="Prisjägare";
	bakgrundstabeller.jargiensbefolkning[62].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[62].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[62].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[62].beskrivning="Några använder sina kontakter och sitt skarpsinne, andra en sällan skådad våldsamhet, men i slutändan är prisjägarens, eller captatorns, enda mål att fånga in misstänkta brottslingar och föra dem inför magistraten för att dömas. Arresteringsordrar spikas upp på väggar vid stadsportar eller läses upp av utropare och ju farligare byte och grövre brott desto mer silver kan de inbringa.";
	bakgrundstabeller.jargiensbefolkning[62].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Rörelsefärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[63] = {};
	bakgrundstabeller.jargiensbefolkning[63].rubrik="Protektor";
	bakgrundstabeller.jargiensbefolkning[63].bestamd="protektorn";
	bakgrundstabeller.jargiensbefolkning[63].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[63].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[63].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[63].beskrivning="Det finns många värdefulla saker som behöver skyddas: personer, egendomar och föremål. En protektor har till uppgift att mot betalning vaka över dessa och ta till vapen om så skulle krävas. En del agerar som livvakter till bortskämda ädlingar, andra bär och skyddar familjens sigillstämplar och vissa är anställda av handelshus för att se till att lasten kommer fram orörd.";
	bakgrundstabeller.jargiensbefolkning[63].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Rörelsefärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[64] = {};
	bakgrundstabeller.jargiensbefolkning[64].rubrik="Präst";
	bakgrundstabeller.jargiensbefolkning[64].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[64].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[64].mystikfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[64].beskrivning="Utan Daaks vägledning skulle folket bli förvildade och hedniska bestar dömda till en evighet i skärselden efter döden. Prästerna har till uppgift att rädda deras själar och hjälpa folket att finna Daak. De håller i mässor, kommer med råd och är hjälp och stöd till dem som har de svårt eller har drabbats av tvivel. Många har valt detta värv på grund av deras tilltro till den ende guden och en vilja att göra gott men det finns de som drivs av girighet och politiska ambitioner och använder tron som ett redskap för att manipulera sina anhängare och svartmåla sina fiender.";
	bakgrundstabeller.jargiensbefolkning[64].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Mystikfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[65] = {};
	bakgrundstabeller.jargiensbefolkning[65].rubrik="Reliksäljare";
	bakgrundstabeller.jargiensbefolkning[65].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[65].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[65].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[65].beskrivning="Dit pilgrimerna färdas finner man reliksäljarna likt surrande flugor runt ett ruttnande kadaver. Dessa säljer välsignade oljor, ägodelar eller skelettbitar tillhörande kända helgon, Daakkors, billiga helgonmålningar, mumifierade delar av hedningar och allt annat de kan komma över och lura på de troende. Dessa män och kvinnor har ett smort munläder och en makaber samling föremål i sin ägo.";
	bakgrundstabeller.jargiensbefolkning[65].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[66] = {};
	bakgrundstabeller.jargiensbefolkning[66].rubrik="Råttfångare";
	bakgrundstabeller.jargiensbefolkning[66].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[66].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[66].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[66].beskrivning="Städerna svämmar över av råttor. De krälar i gränder, källare och kloaker. De tar sig in i de förnämsta husen och gnager sönder dyrbara mattor, äter det fattiga folkets förråd och stjäl mat direkt från värdshusens bord. Råttfångarna är trashankar som lever på att fånga in och ha ihjäl så många som möjligt av dessa gnagare för några kopparslantar i betalning. Vissa råttfångare passar på att tjäna några extra mynt genom att tillaga sin fångst och sälja dem i fattigkvarteren.";
	bakgrundstabeller.jargiensbefolkning[66].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[67] = {};
	bakgrundstabeller.jargiensbefolkning[67].rubrik="Samarit";
	bakgrundstabeller.jargiensbefolkning[67].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[67].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[67].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[67].beskrivning="Kejsardömet är en obarmhärtig plats och den som inte kan hålla sig på fötter trampas ned. Gamla personer dör ensamma i sina stugor, sjuka dukar under i feberfrossor och spädbarn skriker av hunger. Det finns dock de som svurit sina liv att bistå sjuka, lytta och modfällda även om de inte kan betala för sig. Dessa barmhärtiga människor finner man bland alla samhällsklasser, till och med på de mest oväntade ställen.";
	bakgrundstabeller.jargiensbefolkning[67].beskrivninghak = "1 slag på valfri tabell, 4 enheter Sociala färdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[68] = {};
	bakgrundstabeller.jargiensbefolkning[68].rubrik="Sjöfarare";
	bakgrundstabeller.jargiensbefolkning[68].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[68].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[68].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[68].beskrivning="Saltet, brisen, måsarnas skratt och strömmarnas nyckfullhet. Ingenting går upp mot att möta soluppgången på ett majestätiskt fartyg, högt uppe i riggen med en bit skeppsskorpa i ena handen och en flaska rom i den andra. Sjöfararna reser vida kring i sina gungande borgar. Det är dock ett farligt värv; på mörka vatten hopas stormar och orkaner som kan slita de största skeppen i stycken. Djupt under ytan ligger monster och sjöodjur vilande i väntan på att ett lämpligt mål med mat ska råka segla förbi.";
	bakgrundstabeller.jargiensbefolkning[68].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[69] = {};
	bakgrundstabeller.jargiensbefolkning[69].rubrik="Skrivare";
	bakgrundstabeller.jargiensbefolkning[69].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[69].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[69].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[69].beskrivning="Med bläckstänk på sina fingrar, en fjäderpenna i sitt grepp och böjd rygg fylls ark efter ark med text. Skrivare finns överallt i Kejsardömet. Många arbetar som tjänstemän i byråkratin, andra skapar vackra kopior av kända böcker eller skriver ned order från militärer, handelsfurstar eller adelsmän. Då de skriver av och kopierar många texter och böcker besitter de ofta en bred kunskap om många olika ämnen och vissa har en insikt i affärer som inte bör bli allmänt kända.";
	bakgrundstabeller.jargiensbefolkning[69].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 2 poäng Hantverk."

	
	
	bakgrundstabeller.jargiensbefolkning[70] = {};
	bakgrundstabeller.jargiensbefolkning[70].rubrik="Skulptör";
	bakgrundstabeller.jargiensbefolkning[70].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[70].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[70].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[70].beskrivning="De finns de som vigt sina liv åt att forma stenen och skapa vackra och imponerande konstverk. Dvärgar har en fallenhet för denna konstform. Med tanke på det outsinliga behov av stenarbeten som finns i Kejsardömet har många människor uppnått minst lika stor skicklighet i detta värv. Vissa konstverk är så sköna eller skräckinjagande att dess blotta existens gett upphov till rykten om vissa skulptörers makt att till och med ge sina skapelser liv.";
	bakgrundstabeller.jargiensbefolkning[70].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 valfria enheter, 2 poäng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[71] = {};
	bakgrundstabeller.jargiensbefolkning[71].rubrik="Sköka";
	bakgrundstabeller.jargiensbefolkning[71].pluralobestamd="skökor";
	bakgrundstabeller.jargiensbefolkning[71].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[71].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[71].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[71].beskrivning="Lust, passion och frestelse fördöms av kyrkan och de som mot betalning utför dessa tjänster är bespottade av så gott som alla. Men lidelsen och lusten genomsyrar hela Kejsardömet och tvingar män och kvinnor som saknar andra medel att sälja sina kroppar för att klara dagen. Det är ett farligt värv där man riskerar att drabbas av sjukdomar, våldsamma kunder och för kvinnorna även oönskade graviditeter.";
	bakgrundstabeller.jargiensbefolkning[71].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[72] = {};
	bakgrundstabeller.jargiensbefolkning[72].rubrik="Slav \(arbetare\)";
	bakgrundstabeller.jargiensbefolkning[72].bestamd="slaven";
	bakgrundstabeller.jargiensbefolkning[72].pluralobestamd="slavar";
	
	bakgrundstabeller.jargiensbefolkning[72].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[72].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[72].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[72].beskrivning="På fält, i gruvor, vinlundar och skogar sliter slavarna under rappen från sina arbetsledares piskor. De är drivna till att utföra de tyngsta, farligaste och mest plågsamma arbetsuppgifterna. När kloakerna måste rensas, vägar måste anläggas och instabila gruvor expanderas så sätts slavarna in. En del slavar har ägare som behandlar dem rättvist och skänker dem mat och ibland till och med nöjen. Andra behandlas nästan som djur av grymma despoter vilka ser dem som en resurs som man lätt kan byta ut.";
	bakgrundstabeller.jargiensbefolkning[72].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[73] = {};
	bakgrundstabeller.jargiensbefolkning[73].rubrik="Slav \(kurtisan\)";
	bakgrundstabeller.jargiensbefolkning[73].bestamd="kurtisanen";
	bakgrundstabeller.jargiensbefolkning[73].pluralobestamd="kurtisaner";
	
	bakgrundstabeller.jargiensbefolkning[73].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[73].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[73].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[73].beskrivning="Att ha en vacker slav vid sin sida som man kan njuta av eller dela med till sina vänner ses som hög status inom vissa dekadenta kretsar. Slaven ses allt som oftast som ett redskap endast avsett för njutning och som lika lätt kan kasseras om den skulle sluta att roa eller gå sönder. Några tränas till att behaga rika herrar efter allehanda konststycken, andra är inte mer än fastkedjade djur i smutsiga bordeller eller släpas efter trossen tillhörande de olika krigsregementena.";
	bakgrundstabeller.jargiensbefolkning[73].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 2 poäng Kännetecken."

	
	bakgrundstabeller.jargiensbefolkning[74] = {};
	bakgrundstabeller.jargiensbefolkning[74].rubrik="Slav \(lärd\)";
	bakgrundstabeller.jargiensbefolkning[74].bestamd="slaven";
	bakgrundstabeller.jargiensbefolkning[74].pluralobestamd="slavar";
	
	bakgrundstabeller.jargiensbefolkning[74].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[74].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[74].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[74].beskrivning="Med skarpa intellekt, hängivenhet och uppmärksamhet tjänar de lärda slavarna sina mästare. De fungerar som lärare åt barn i familjen, rådgivare åt militärer eller räknar ut de mest gynnsamma handelskontrakten med tillhörande mutor. Dessa slavar har vanligen ett gott liv om än ej i frihet då de alla fruktar att på något sätt missbehaga sina herrar.";
	bakgrundstabeller.jargiensbefolkning[74].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Rörelsefärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[75] = {};
	bakgrundstabeller.jargiensbefolkning[75].rubrik="Slav \(tjänare\)";
	bakgrundstabeller.jargiensbefolkning[75].bestamd="tjänaren";
	bakgrundstabeller.jargiensbefolkning[75].pluralobestamd="tjänare";
	
	bakgrundstabeller.jargiensbefolkning[75].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[75].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[75].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[75].beskrivning="De förmögna måste passas upp. Någon måste bada dem, torka deras kroppar, gnida in dem med väldoftande oljor, klä dem i finaste tyger, lägga fram besticken, sopa upp smutsen, polera silvret, rätta till gobelängerna, mata dem med druvor och sötsaker, springa med meddelanden, klippa deras naglar och vara i närheten för att hörsamma deras befallningar. Allt detta är tjänarnas uppgifter och har de tur kan de leva ett liv där de inte blir alltför pryglade och får äta sig mätta varje kväll.";
	bakgrundstabeller.jargiensbefolkning[75].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[76] = {};
	bakgrundstabeller.jargiensbefolkning[76].rubrik="Slav \(underhållare\)";
	bakgrundstabeller.jargiensbefolkning[76].bestamd="underhållaren";
	bakgrundstabeller.jargiensbefolkning[76].pluralobestamd="underhållare";
	bakgrundstabeller.jargiensbefolkning[76].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[76].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[76].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[76].beskrivning="De som är rika och inflytelserika måste få skratta, gråta och förundras för att kunna glömma bort alla sina tyngande bekymmer. Underhållaren har till uppgift att roa sina herrar. Det kan vara genom dans, sång, historieberättande, akrobatik eller trolleritrick. En del underhållare är inte mer än vulgära narrar som skrockande berättar fräcka historier och låter sig bli hunsade. Andra är personer vars sånger bär med sig smärtan från fångenskapens ok och får tårarna att rinna ned för åhörarnas kinder. Dessa slavar skattas högt och är för värdefulla för att släppas fria.";
	bakgrundstabeller.jargiensbefolkning[76].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Kännetecken."

	
	bakgrundstabeller.jargiensbefolkning[77] = {};
	bakgrundstabeller.jargiensbefolkning[77].rubrik="Slavförmedlare";
	bakgrundstabeller.jargiensbefolkning[77].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[77].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[77].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[77].beskrivning="Då slavhandel är förbjudet inom Kejsardömet och slavar delas ut via strikta byråkratiska beslut finns det officiellt inga egentliga slavhandlare. Däremot finns det de män och kvinnor som har kontakter och hjälper de rika se ut slavar som de vill ha och sedan ser till att skaffa dem, via mutor, på byråkratisk väg eller via utländska slavhandlare. En del slavförmedlare specialiserar sig på bildade slavar, andra på barbarfolk såsom kamorianerna och några på exotiska slavar såsom albinos, siamesiska tvillingar eller sådana som har särskilda talanger.";
	bakgrundstabeller.jargiensbefolkning[77].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[78] = {};
	bakgrundstabeller.jargiensbefolkning[78].rubrik="Smugglare";
	bakgrundstabeller.jargiensbefolkning[78].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[78].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[78].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[78].beskrivning="Att frakta varor genom Kejsardömet eller till andra länder utan rätt papper är en omöjlighet och även om man har dessa så försvinner mycket av vinsten i tull, mutor och skatter. Smugglaren ser till att frakta varor utan att någon får reda på det. En del leder mindre karavaner genom obygden, har dolda utrymmen i sina vagnar och de mest framgångsrika hela skepp fyllda med smuggelgods.";
	bakgrundstabeller.jargiensbefolkning[78].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[79] = {};
	bakgrundstabeller.jargiensbefolkning[79].rubrik="Soldat";
	bakgrundstabeller.jargiensbefolkning[79].bestamd="";
	bakgrundstabeller.jargiensbefolkning[79].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[79].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[79].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[79].beskrivning="Kejsardömets ryggrad är soldaterna i krigsregementena. Dessa män är stationerade över hela riket, i kolonierna, och de bevakar gränser, provinser och handelsleder. Bland dem finns det ett starkt broderskap och en tilltro till sina befälhavare. Vissa är fanatiskt lojala till Kejsaren och riket medan andra gladeligen skulle sluta upp vid karismatiska överordnade om dessa skulle ha maktambitioner som skulle kräva någon typ av revolt.";
	bakgrundstabeller.jargiensbefolkning[79].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 4 valfria enheter.";

	
	
	bakgrundstabeller.jargiensbefolkning[80] = {};
	bakgrundstabeller.jargiensbefolkning[80].rubrik="Spelare";
	bakgrundstabeller.jargiensbefolkning[80].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[80].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[80].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[80].beskrivning="Tärningar, kort och bräden. Enkla sätt att tjäna snabba silvermynt om turen är med en eller om man är skicklig alternativt oärlig nog att fuska. Spelare finns i alla delar av samhället och en del är inget annat än smutsiga trashankar som pantsätter sina skor i hoppet om att vinna en handfull mynt. Andra är rika ädlingar som över dyra viner tömmer familjens skattkistor, spelar bort tillgångar, slavar och skepp. För en spelare är det få saker som inte kan satsas på ett djärvt tärningskast.";
	bakgrundstabeller.jargiensbefolkning[80].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[81] = {};
	bakgrundstabeller.jargiensbefolkning[81].rubrik="Stadsvakt";
	bakgrundstabeller.jargiensbefolkning[81].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[81].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[81].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[81].beskrivning="Stadsportarna ska vaktas, handelsmännens varor ska sökas igenom, fyllebråk ska stoppas, det ska hållas utkik efter eldsvådor och brottslingar arresteras. Stadsvakten känner till varje gränd, varje bakgata, kommer ihåg ansiktena på de vanliga handelsmännen och har alltid ett öga på dem som tycks sticka ut. En del tar allvarligt på att hålla ordning i staden, andra ser det som en god position att ta mutor och är inte mycket mer än brottslingar med befogenheter.";
	bakgrundstabeller.jargiensbefolkning[81].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Sociala färdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[82] = {};
	bakgrundstabeller.jargiensbefolkning[82].rubrik="Stråtrövare";
	bakgrundstabeller.jargiensbefolkning[82].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[82].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[82].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[82].beskrivning="Med vägarna tungt trafikerade av resande människor är det inte konstigt att vissa valt att tjäna sitt leverne på att råna och stjäla från andra. Med utrustning och vapen i varierande kvalitet lägger de sig i bakhåll och anfaller när offren minst anar det. En del rövarband består bara av två till tre individer medan andra kan bli upp mot tjugo och trettio. Dessa kan till och med anfalla större mål så som en kejserlig transport eller ett förnämt rikemansfölje med beväpnad eskort.";
	bakgrundstabeller.jargiensbefolkning[82].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[83] = {};
	bakgrundstabeller.jargiensbefolkning[83].rubrik="Svindlare";
	bakgrundstabeller.jargiensbefolkning[83].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[83].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[83].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[83].beskrivning="Genom att välja sina ord rätt och böja på sanningen när helst situationen kräver det kan svindlaren göra sig stora vinster på att sälja värdelöst gods till godtrogna köpare. Ofta måste en svindlare byta stad då och då när ryktet om hans eller hennes försäljningstaktik snart blir allmän kännedom. Då gäller det att kunna resa snabbt och spårlöst, för att sedan slå upp verksamheten igen lite senare i en annan del av Kejsardömet.";
	bakgrundstabeller.jargiensbefolkning[83].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Sociala färdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[84] = {};
	bakgrundstabeller.jargiensbefolkning[84].rubrik="Tandsmed";
	bakgrundstabeller.jargiensbefolkning[84].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[84].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[84].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[84].beskrivning="Soldater får sina tänder utslagna, ädlingars garnityr drabbas av röta efter för mycket sötsaker och kyrkans män gnisslar tänder i sömnen över all synd som begås. Tandsmeden är den som ser över detta. De mest välbärgade har mottagningar i de största städerna, där ersätter de förlorade tänder med guld eller silver. De fattiga tandsmederna reser mellan byar och drar ut tänder med grova tänger.";
	bakgrundstabeller.jargiensbefolkning[84].beskrivninghak = "1 slag på valfri tabell, 4 enheter Rörelsefärdigheter, 2 poäng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[85] = {};
	bakgrundstabeller.jargiensbefolkning[85].rubrik="Tiggare";
	bakgrundstabeller.jargiensbefolkning[85].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[85].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[85].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[85].beskrivning="Med utsträckta händer sträcker sig smutsiga, utmärglade och trasklädda gestalter mot de som har pengar och ber om att få några silver så de kan få mat för dagen. Har de tur passerar förmögna som delar ut allmosor, andra gånger jagar stadsvakten bort dem med sparkar och slag. I vissa städer får tiggarna särskilda tiggarbrickor som de syr fast på sina kläder eller har i ett band runt halsen för att visa att de har rätten att be om allmosor.";
	bakgrundstabeller.jargiensbefolkning[85].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 2 poäng Kännetecken."

	
	bakgrundstabeller.jargiensbefolkning[86] = {};
	bakgrundstabeller.jargiensbefolkning[86].rubrik="Tjuv";
	bakgrundstabeller.jargiensbefolkning[86].pluralobestamd="tjuvar";
	
	bakgrundstabeller.jargiensbefolkning[86].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[86].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[86].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[86].beskrivning="Högt ovan hustaken och långt nere i stadens mörkaste vrår är det inte stadsvakten, prästerskapet, adeln eller köpmännen som regerar. Här lever tjuvarna på att ta från allt och alla som inte håller tillräckligt god uppsyn på sina fickor och hus.";
	bakgrundstabeller.jargiensbefolkning[86].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[87] = {};
	bakgrundstabeller.jargiensbefolkning[87].rubrik="Torterare";
	bakgrundstabeller.jargiensbefolkning[87].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[87].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[87].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[87].beskrivning="Kejsardömet är fyllt av hemligheter som måste avslöjas och personer som måste straffas. Torterarens roll är bryta sönder ett mänskligt psyke och tvinga fram erkännanden eller sarga offer till oigenkännlighet. I dunkla valv pressas glödgade tänger mot bar hud, lemmar slits ur led och piskor sargar kroppar. Torterare är vanligen anlitade av armén, stadsvakten, brottsorganisationer eller rika släkter. De som blir torterare är vanligen kallhamrade eller sådana som finner en stor njutning i sitt värv.";
	bakgrundstabeller.jargiensbefolkning[87].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 valfria enheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[88] = {};
	bakgrundstabeller.jargiensbefolkning[88].rubrik="Troféjägare";
	bakgrundstabeller.jargiensbefolkning[88].bestamd="troféjägaren";
	bakgrundstabeller.jargiensbefolkning[88].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[88].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[88].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[88].beskrivning="I Kejsardömets utkanter finns det gott om otillgängliga trakter. Djupa skogar, bergskedjor, träsk och gamla ruiner. I dessa områden kan man finna monstruösa bestar av olika slag. Troféjägaren har gjort en konst av att jaga och nedlägga monstren. Troféerna säljs sedan att pryda de vackra villorna i Kejsardömets övre skikt. Ibland fångas monstren in levande och säljs till gladiatorarenorna med god förtjänst.";
	bakgrundstabeller.jargiensbefolkning[88].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[89] = {};
	bakgrundstabeller.jargiensbefolkning[89].rubrik="Upprorsmakare";
	bakgrundstabeller.jargiensbefolkning[89].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[89].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[89].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[89].beskrivning="Det finns de som ser hur korrupt och misskött Kejsardömet är och hur orättvisor segrar dag efter dag. Vissa tar till vapen och väljer att kämpa för att befria riket från tyranniet. Många försöker få provinserna självständiga genom brandtal och attacker mot Kejsarens utsända. Dessa upprorsmakare är ständigt jagade.";
	bakgrundstabeller.jargiensbefolkning[89].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Sociala färdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[90] = {};
	bakgrundstabeller.jargiensbefolkning[90].rubrik="Upptäcksresande";
	bakgrundstabeller.jargiensbefolkning[90].pluralobestamd="upptäcksresande";
	bakgrundstabeller.jargiensbefolkning[90].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[90].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[90].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[90].beskrivning="Över öknar, genom djungler, under stormar och mitt bland främmande kulturer reser de upptäcktsresande för att vinna insikt i hur omvärlden fungerar. Faror i form av lömska sjöjungfrur, hemska vidunder, ofantliga cykloper och ondsinta barbarfolk gör resan svår och i allra högsta grad dödlig för de som vågar sig ut utanför civilisationens gränser. Samtidigt lockar det okända med dolda skatter, urgammal kunskap och inte minst ära och berömmelse till de som överlever.";
	bakgrundstabeller.jargiensbefolkning[90].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Kunskapsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[91] = {};
	bakgrundstabeller.jargiensbefolkning[91].rubrik="Utkastare";
	bakgrundstabeller.jargiensbefolkning[91].bestamd="utkastaren";
	bakgrundstabeller.jargiensbefolkning[91].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[91].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[91].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[91].beskrivning="När ett fyllebråk urartar och ett vänskapligt handgemäng övergår till sparkar och kanske dragna vapen behövs det någon som kan sära på de involverade och ge dem alla en kraftig spark mot dörren. Detta är utkastarens jobb. Om det inte vore för dessa individer skulle många krogar snart vara i spillror.";
	bakgrundstabeller.jargiensbefolkning[91].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[92] = {};
	bakgrundstabeller.jargiensbefolkning[92].rubrik="Utmätare";
	bakgrundstabeller.jargiensbefolkning[92].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[92].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[92].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[92].beskrivning="Ett tärningskast, en misslyckad affär, eller otur kan driva en person i skuld. En utmätare, vindicator på jargiska, ombesörjer då utmätning av egendomen specificerade till ett visst belopp. Utmätare är skickliga på att hantera siffror, värdera tillgångar och se exakt vad som måste säljas för att få fram pengarna. När dessa har utmätningsordern i sin hand hjälper inga böner eller ursäkter, de kommer ta ifrån en det sista klädesplagget om så krävs. Utmätare får provision på det de tjänar och det är inte ovanligt att utmätningsordrar som kan bringa in stora summor säljs för tusentals silver.";
	bakgrundstabeller.jargiensbefolkning[92].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[93] = {};
	bakgrundstabeller.jargiensbefolkning[93].rubrik="Utropare";
	bakgrundstabeller.jargiensbefolkning[93].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[93].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[93].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[93].beskrivning="I de väldiga städerna måste nyheter förkunnas till folket. Då många inte kan läsa är det utroparens roll att meddela invånarna om makthavarnas beslut. På torg och vid stadsportar proklamerar de om gudstjänster, efterlysta brottslingar, arbeten som utlyses, nya lagar, vad som sker i staden, stundande offentliga avrättningar och nyheter från resten av Kejsardömet. Det är få som har en sådan insikt i stadens affärer som utroparna.";
	bakgrundstabeller.jargiensbefolkning[93].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[94] = {};
	bakgrundstabeller.jargiensbefolkning[94].rubrik="Vapenmästare";
	bakgrundstabeller.jargiensbefolkning[94].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[94].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[94].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[94].beskrivning="Vapenmästarna ser strid som en konstform. De lär sig invecklade och många gånger vackra sätt att kämpa och för många handlar det mer om uppvisning än om faktiskt kamp. En del vapenmästare tjänar som instruktörer, livvakter eller underhållare i hoven. Andra vandrar mellan byarna och erbjuder sina tjänster för en handfull mynt.";
	bakgrundstabeller.jargiensbefolkning[94].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Rörelsefärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[95] = {};
	bakgrundstabeller.jargiensbefolkning[95].rubrik="Veteran";
	bakgrundstabeller.jargiensbefolkning[95].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[95].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[95].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[95].beskrivning="Krig skördar sina offer och veteranen har dräpt fler än denne kan minnas och förlorat många vänner till vinande pilar och svärdshugg. Våldsamheterna har satt sina spår och många veteraner vrider sig i mardrömmar, häller i sig vin för att glömma eller har övergått till att bli obehagligt avtrubbade. Även om de krigiska dagarna är över för veteranen är det ack så lätt att ta till vapen för att tjäna några enkla silver då den vanliga världen för dem blivit främmande och olustig.";
	bakgrundstabeller.jargiensbefolkning[95].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[96] = {};
	bakgrundstabeller.jargiensbefolkning[96].rubrik="Vinkännare";
	bakgrundstabeller.jargiensbefolkning[96].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[96].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[96].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[96].beskrivning="Vinkännarens roll är att hålla koll på de juridiska dokument om vem som får jäsa vin, provsmaka partier som ska säljas och titta så att det lagras på korrekt sätt. De som arbetar med detta är oftast så pass goda vinkännare att de bara genom att dofta på det kan berätta exakt från vilken vingård vinet kommer, vilken druva som använts och vilken årgång det är. Således kan man se till att de rika får de finaste vinerna och att inga av vingårdarna blir lurade och kopierade.";
	bakgrundstabeller.jargiensbefolkning[96].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[97] = {};
	bakgrundstabeller.jargiensbefolkning[97].rubrik="Vägvisare";
	bakgrundstabeller.jargiensbefolkning[97].bestamd="vägvisaren";
	bakgrundstabeller.jargiensbefolkning[97].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[97].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[97].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[97].beskrivning="I både stad och vildmark är det viktigt att hitta rätt. Handelsresande, pilgrimer och andra resande sällskap anlitar därför en vägvisare för att leda dem genom labyrinten av stigar, vägar, broar, vadställen och korsningar. Förutom den vanliga betalningen i form av silver brukar uppdragsgivaren även få stå för mat och dryck för vägvisaren under hela resan.";
	bakgrundstabeller.jargiensbefolkning[97].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[98] = {};
	bakgrundstabeller.jargiensbefolkning[98].rubrik="Värdshusvärd";
	bakgrundstabeller.jargiensbefolkning[98].bestamd="värdshusvärden";
	bakgrundstabeller.jargiensbefolkning[98].pluralobestamd="värdshusvärdar";
	bakgrundstabeller.jargiensbefolkning[98].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[98].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[98].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[98].beskrivning="Mat serveras, rum städas, golv sopas, stop diskas, resande kommer och resande lämnar. En värdshusvärd träffar och pratar med många olika typer av individer och blir snart en person som har koll på vad som händer i staden och världen. De mest nedgångna värdshusen är inget mer än rökiga och pisstinkande gryt där ölen är utspädd och gästerna fattiga. De mest luxuösa värdshusen har en hel stab av tjänare, otaliga rum, ett stort kök, en fylld vinkällare och ett gott anseende.";
	bakgrundstabeller.jargiensbefolkning[98].beskrivninghak = "1 slag på valfri tabell, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[99] = {};
	bakgrundstabeller.jargiensbefolkning[99].rubrik="Xinukultist";
	bakgrundstabeller.jargiensbefolkning[99].bestamd="xinukultisten";
	bakgrundstabeller.jargiensbefolkning[99].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[99].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[99].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[99].beskrivning="De plågade skrik som kommer från Xinus anhängare är ett offer till den mörka guden. I sina privata tortyrkammare dyrkar de smärtans och det eviga lidandets prins, den mörka och vansinnige Xinu. Under svarta mässor når dyrkarna extas genom att piska sig och sina anhängare till ljudet av psalmerna. Få, om ens någon av de invigda kommer någonsin kunna återvända till den oskyldiga sinnesro som de en gång hade, sedan den sadistiska och förbjudna gudomen satt sina klor i deras själar. De anser sig utvalda inför den kommande striden och tränar för att bli Xinus förkämpar.";
	bakgrundstabeller.jargiensbefolkning[99].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Stridsfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[100] = {};
	bakgrundstabeller.jargiensbefolkning[100].rubrik="Ädling";
	bakgrundstabeller.jargiensbefolkning[100].bestamd="ädlingen";
	bakgrundstabeller.jargiensbefolkning[100].pluralobestamd="ädlingar"
	bakgrundstabeller.jargiensbefolkning[100].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[100].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[100].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[100].beskrivning="I toppen av Kejsardömet, höjd över den vanliga smutsiga massan, lever ädlingarna. Några spenderar sin tid likt fångar i ekande marmorpalats, andra deltar i dekadenta orgier där de glupskt slukar njutningar och förbjudna nöjen. De disciplinerade vakar över sin familjs förmögenhet och spinner den väv av intriger som håller samman Kejsardömet och får de lägre stånden att dansa efter deras vilja.";
	bakgrundstabeller.jargiensbefolkning[100].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 4 valfria enheter.";
	
	bakgrundstabeller.vildmark = [];
	bakgrundstabeller.vildmark[0] = {};
	bakgrundstabeller.vildmark[0].subval = [[[]]];
	bakgrundstabeller.vildmark[0].vald = 0;
    bakgrundstabeller.vildmark[0].rubrik="Vildmark";
    bakgrundstabeller.vildmark[0].namn="vildmark";
    
	bakgrundstabeller.vildmark[1]= {};
	bakgrundstabeller.vildmark[1].rubrik="Andebesvärjare";
	bakgrundstabeller.vildmark[1].bestamd="andebesvärjaren";
	bakgrundstabeller.vildmark[1].obestamd="en andebesvärjare";
	bakgrundstabeller.vildmark[1].kunskapmysterier=1;
	bakgrundstabeller.vildmark[1].mystikfardigheterenheter=4;
	bakgrundstabeller.vildmark[1].expertispoang=2;
	bakgrundstabeller.vildmark[1].beskrivning="Många stamsamhällen karaktäriseras i stor utsträckning av vördnaden för naturens många andar, och således ser man ett ständigt behov av att kunna hålla sig väl med dessa. Denna tro ersätts ibland med, eller kompletteras av, en vördnad för ärorika och mäktiga förfadersandar som ännu vakar över sina efterlevande. Med detta i åtanke är det inte märkligt att andebesvärjaren, som ofta kallas schaman, har en viktig roll och kan få stort inflytande.";
	bakgrundstabeller.vildmark[1].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Mystikfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.vildmark[2] = {};
	bakgrundstabeller.vildmark[2].rubrik="Berättare";
	bakgrundstabeller.vildmark[2].bestamd="berättaren";
	bakgrundstabeller.vildmark[2].obestamd="en berättare";
	bakgrundstabeller.vildmark[2].kunskapmysterier=1;
	bakgrundstabeller.vildmark[2].kunskapsfardigheterenheter=4;
	bakgrundstabeller.vildmark[2].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[2].beskrivning="Även om det ofta faller på prästernas eller andebesvärjarnas lott, där sådana finns, kan den som behärskar konsten att berätta om forna tider vara en mycket aktad individ. Många har detta som ett rent sidointresse, men ett litet fåtal är så skickliga och uppskattade att deras råd och historieförtäljande gör stammen villig att stå för deras försörjning.";
	bakgrundstabeller.vildmark[2].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.vildmark[3] = {};
	bakgrundstabeller.vildmark[3].rubrik="Boskapsdrivare";
	bakgrundstabeller.vildmark[3].bestamd="boskapsdrivaren";
	bakgrundstabeller.vildmark[3].obestamd="en boskapsdrivare";
	bakgrundstabeller.vildmark[3].farderaventyr=1;
	bakgrundstabeller.vildmark[3].stridsfardigheterenheter=4;
	bakgrundstabeller.vildmark[3].hantverkpoang=2;
	bakgrundstabeller.vildmark[3].beskrivning="Trots att de inte tillhör de renodlade krigarnas skara är många boskapsdrivare härdat folk som ofta rör sig en bit från stammens boplatser. De måste vara kapabla att skydda de värdefulla kreaturen undan vilddjur och boskapstjuvar, åtminstone tills hjälp kan anlända.";
	bakgrundstabeller.vildmark[3].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Stridsfärdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.vildmark[4] = {};
	bakgrundstabeller.vildmark[4].rubrik="Ensling";
	bakgrundstabeller.vildmark[4].bestamd="enslingen";
	bakgrundstabeller.vildmark[4].obestamd="en ensling";
	bakgrundstabeller.vildmark[4].farderaventyr=1;
	bakgrundstabeller.vildmark[4].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[4].valfriaenheter=4;
	bakgrundstabeller.vildmark[4].beskrivning="I den ofta oförlåtande vildmark där de flesta stamfolk lever anses det vara vanvett att försöka klara sig helt ensam. Många enslingar är förskjutna från sina stammar för att de begått grova brott mot lag eller tabu, men det finns också alltid de som av egen vilja drar sig undan från gemenskapen. Få blir dock gamla med denna ensamma livsföring.";
	bakgrundstabeller.vildmark[4].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Vildmarksfärdigheter, 4 Valfria enheter.";

	
	bakgrundstabeller.vildmark[5] = {};
	bakgrundstabeller.vildmark[5].rubrik="Förhandlare";
	bakgrundstabeller.vildmark[5].bestamd="förhandlaren";
	bakgrundstabeller.vildmark[5].obestamd="en förhandlare";
	bakgrundstabeller.vildmark[5].farderaventyr=1;
	bakgrundstabeller.vildmark[5].kunskapsfardigheterenheter=4;
	bakgrundstabeller.vildmark[5].socialafardigheterenheter=4
	bakgrundstabeller.vildmark[5].beskrivning="Det är inte alla stammar som har förhandlare, men när ett samhälle växer sig tillräckligt stort brukar det ofta utkristalliseras grupper av individer som har talets gåva och är kapabla att nå allmänt godkända kompromisser. Många av dessa slår sig på köpenskap, men andra fokuserar helt på att vara hövdingars utsända och folkets representanter vid större möten, liksom på att lösa tvister innan de eskalerar till våldsamheter. Ofta tvingas förhandlare agera långt från stammens territorium, och deras resor kan rentav ta dem till främmande folk.";
	bakgrundstabeller.vildmark[5].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.vildmark[6] = {};
	bakgrundstabeller.vildmark[6].rubrik="Handelsman";
	bakgrundstabeller.vildmark[6].bestamd="handelsmannen";
	bakgrundstabeller.vildmark[6].obestamd="en handelsman";
	bakgrundstabeller.vildmark[6].intrigerillgarningar=1;
	bakgrundstabeller.vildmark[6].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[6].kanneteckenpoang=2;
	bakgrundstabeller.vildmark[6].beskrivning="Handelns omfattning varierar mycket bland olika folk, men det finns så gott som alltid möjlighet för den som är slängd i käften att göra sig något mått av rikedom genom köpenskap. I många samhällen ser man dock ner på dessa krämare och anser att de saknar förmåga att livnära sig på ärliga vis. Den allra mesta handeln sker, naturligtvis, genom byte av varor snarare än i form av pengahantering.";
	bakgrundstabeller.vildmark[6].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Kännetecken."

	
	bakgrundstabeller.vildmark[7] = {};
	bakgrundstabeller.vildmark[7].rubrik="Hantverkare";
	bakgrundstabeller.vildmark[7].bestamd="hantverkaren";
	bakgrundstabeller.vildmark[7].obestamd="en hantverkare";
	bakgrundstabeller.vildmark[7].intrigerillgarningar=1;
	bakgrundstabeller.vildmark[7].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[7].hantverkpoang=2;
	bakgrundstabeller.vildmark[7].beskrivning="Vilka hantverk som utövas inom en stam beror på såväl de krav miljön ställer som folkets teknologiska nivå, men i alla händelser behövs det några som är skickliga på att skapa och reparera föremål. I många fall är det dessa ting som köpslagare sedan kan använda för att byta till sig främmande varor till stammen.";
	bakgrundstabeller.vildmark[7].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Hantverk."


	bakgrundstabeller.vildmark[8] = {};
	bakgrundstabeller.vildmark[8].rubrik="Helare";
	bakgrundstabeller.vildmark[8].bestamd="helaren";
	bakgrundstabeller.vildmark[8].obestamd="en helare";
	bakgrundstabeller.vildmark[8].kunskapmysterier=1;
	bakgrundstabeller.vildmark[8].kunskapsfardigheterenheter=4;
	bakgrundstabeller.vildmark[8].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[8].beskrivning="Många som lever i stamsamhällen lär sig av nöden att lägga åtminstone klumpiga förband om de sår de allt för ofta drabbas av, men vid allvarligare skador söker man upp en helare. Det är inte alltid helaren är stammens mest respekterade person, men hen är viktig för folkets överlevnad.";
	bakgrundstabeller.vildmark[8].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.vildmark[9] = {};
	bakgrundstabeller.vildmark[9].rubrik="Jordbrukare";
	bakgrundstabeller.vildmark[9].bestamd="jordbrukaren";
	bakgrundstabeller.vildmark[9].obestamd="en jordbrukare";
	bakgrundstabeller.vildmark[9].pluralobestamd="jordbrukare";
	bakgrundstabeller.vildmark[9].farderaventyr=1;
	bakgrundstabeller.vildmark[9].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[9].hantverkpoang=2;
	bakgrundstabeller.vildmark[9].beskrivning="De flesta stamlevande folk ägnar sig i åtminstone någon mån åt jordbruk, eller åtminstone åt att veta var de mest närande växterna finns. I väldigt isolerade kulturer betraktas förmågan att veta när man ska så och hur man bäst skördar jordens frukter som närmast magisk och de som behärskar den som personer i god kontakt med naturens andar.";
	bakgrundstabeller.vildmark[9].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Vildmarksfärdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.vildmark[10] = {};
	bakgrundstabeller.vildmark[10].rubrik="Jordemoder";
	bakgrundstabeller.vildmark[10].bestamd="jordemodern";
	bakgrundstabeller.vildmark[10].obestamd="en jordemoder";
	bakgrundstabeller.vildmark[10].valfriatabellslag=1;
	bakgrundstabeller.vildmark[10].kunskapsfardigheterenheter=4;
	bakgrundstabeller.vildmark[10].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[10].beskrivning="Även om det inte betraktas som den mest ärorika sysslan i ofta krigiska kulturer är de som kan konsten att på bästa sätt bistå vid förlossningar mycket uppskattade. Deras hjälp kan ofta vara helt avgörande för moderns och barnets överlevnad, och många knyter starka band till de barn de hjälper till världen.";
	bakgrundstabeller.vildmark[10].beskrivninghak = "1 slag på valfri tabell, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.vildmark[11] = {};
	bakgrundstabeller.vildmark[11].rubrik="Jägare";
	bakgrundstabeller.vildmark[11].bestamd="jägaren";
	bakgrundstabeller.vildmark[11].obestamd="en jägare";
	bakgrundstabeller.vildmark[11].farderaventyr=1;
	bakgrundstabeller.vildmark[11].rorelsefardigheterenheter=4;
	bakgrundstabeller.vildmark[11].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[11].beskrivning="Jägare kan arbeta med mycket olika metoder beroende på var de lever, om de jagar i grupp, och i synnerhet på vad deras byte är. Detta är en mycket vanlig sysselsättning inom de flesta stamsamhällen.";
	bakgrundstabeller.vildmark[11].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.vildmark[12] = {};
	bakgrundstabeller.vildmark[12].rubrik="Ledare";
	bakgrundstabeller.vildmark[12].bestamd="ledaren";
	bakgrundstabeller.vildmark[12].obestamd="en ledare";
	bakgrundstabeller.vildmark[12].intrigerillgarningar=1;
	bakgrundstabeller.vildmark[12].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[12].stridsfardigheterenheter=4;
	bakgrundstabeller.vildmark[12].beskrivning="I många stamsamhällen är inte ledarpositionen något man ärver från vördade förfäder, utan någonting individen måste kämpa sig till och visa sig duglig för. Även om skickliga ledare i allmänhet lär sig att spela ut motståndare mot varandra för att inte ständigt behöva försvara sin position med blod är krigaridealet påtagligt hos de flesta ledare.";
	bakgrundstabeller.vildmark[12].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 4 enheter Stridsfärdigheter."

	
	bakgrundstabeller.vildmark[13] = {};
	bakgrundstabeller.vildmark[13].rubrik="Ofri";
	bakgrundstabeller.vildmark[13].bestamd="den ofria";
	bakgrundstabeller.vildmark[13].obestamd="en ofri";
	bakgrundstabeller.vildmark[13].valfriatabellslag=1;
	bakgrundstabeller.vildmark[13].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[13].hantverkpoang=2;
	bakgrundstabeller.vildmark[13].beskrivning="En ofri man eller kvinna är ofta slav eller träl, där sådana förekommer, men kan även ha tagits som krigsfånge. Ett fåtal har också förlorat sin frihet som straff för någon förbrytelse, även om det sällan är en vanlig form av bestraffning. Ofta har de ofria hårda arbetsuppgifter som inte tar dem för långt från folkets vakande ögon.";
	bakgrundstabeller.vildmark[13].beskrivninghak = "1 slag på valfri tabell, 4 enheter Vildmarksfärdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.vildmark[14] = {};
	bakgrundstabeller.vildmark[14].rubrik="Ogärningsman";
	bakgrundstabeller.vildmark[14].bestamd="ogärningsmannen";
	bakgrundstabeller.vildmark[14].obestamd="en ogärningsman";
	bakgrundstabeller.vildmark[14].farderaventyr=1;
	bakgrundstabeller.vildmark[14].rorelsefardigheterenheter=4;
	bakgrundstabeller.vildmark[14].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[14].beskrivning="Att försörja sig på stölder från stammen är ofta ett säkert sätt att bli förvisad eller dräpt, och således gör den som tänker sig ett ohederligt leverne bäst i att vara mycket förslagen. Den som med stor skicklighet stjäl boskap eller andra dyrbarheter från främmande folk och fientliga stammar möter dock sällan någon fientlighet bland de sina, och kan rentav bli mycket uppskattad under vissa omständigheter.";
	bakgrundstabeller.vildmark[14].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.vildmark[15] = {};
	bakgrundstabeller.vildmark[15].rubrik="Präst";
	bakgrundstabeller.vildmark[15].bestamd="prästen";
	bakgrundstabeller.vildmark[15].obestamd="en präst";
	bakgrundstabeller.vildmark[15].kunskapmysterier=1;
	bakgrundstabeller.vildmark[15].kunskapsfardigheterenheter=4;
	bakgrundstabeller.vildmark[15].mystikfardigheterenheter=4;
	bakgrundstabeller.vildmark[15].beskrivning="Bland vissa stamfolk förekommer tron på en eller flera namngivna gudar istället för dyrkan av besjälad natur eller förfadersandar. Fördomsfulla jargiska lärde betraktar ofta denna typ av religion som en mer civiliserad och utvecklad form av avgudadyrkan. I vissa, inte sällan splittrade, grupper verkar såväl andebesvärjare som präster.";
	bakgrundstabeller.vildmark[15].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Mystikfärdigheter.";

	
	bakgrundstabeller.vildmark[16] = {};
	bakgrundstabeller.vildmark[16].rubrik="Samlare";
	bakgrundstabeller.vildmark[16].bestamd="samlaren";
	bakgrundstabeller.vildmark[16].obestamd="en samlare";
	bakgrundstabeller.vildmark[16].farderaventyr=1;
	bakgrundstabeller.vildmark[16].kunskapsfardigheterenheter=2;
	bakgrundstabeller.vildmark[16].vildmarksfardigheterenheter=2;
	bakgrundstabeller.vildmark[16].hantverkpoang=2;
	bakgrundstabeller.vildmark[16].beskrivning="Som samlare räknas de som är vana att hitta såväl matnyttiga växter som örter som kan användas för färgningsarbeten och olika dekokter. I vissa fall har de roller som överlappar helarens, men många behärskar också konsten att brygga dödliga gifter.";
	bakgrundstabeller.vildmark[16].beskrivninghak = "1 slag på Färder \& äventyr, 2 enheter Kunskapsfärdigheter, 2 enheter Vildmarksfärdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.vildmark[17] = {};
	bakgrundstabeller.vildmark[17].rubrik="Sjöfarare";
	bakgrundstabeller.vildmark[17].bestamd="sjöfararen";
	bakgrundstabeller.vildmark[17].obestamd="en sjöfarare";
	bakgrundstabeller.vildmark[17].farderaventyr=1;
	bakgrundstabeller.vildmark[17].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[17].kanneteckenpoang=2;
	bakgrundstabeller.vildmark[17].beskrivning="Beroende på var stammen lever kan sjöfarare, utöver att vara helt obefintliga, sysselsätta sig som strävsamma fiskare eller långväga resande. Gemensamt är att deras liv är hårda och att de är påtagligt utlämnade åt vädrets makter, ofta i båtar som kan lämna en hel del att önska. De flesta sjöfarare känner till hundratals ramsor och ritualer för att vinna god vind och fina fångster, och ofta är de lite kantiga och passar inte riktigt in bland de som inte delar deras band till vattnet.";
	bakgrundstabeller.vildmark[17].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Vildmarksfärdigheter, 2 poäng Kännetecken.";

	
	bakgrundstabeller.vildmark[18] = {};
	bakgrundstabeller.vildmark[18].rubrik="Skuggmärkt";
	bakgrundstabeller.vildmark[18].bestamd="den skuggmärkta";
	bakgrundstabeller.vildmark[18].obestamd="en skuggmärkt";
	bakgrundstabeller.vildmark[18].farderaventyr=1;
	bakgrundstabeller.vildmark[18].valfriaenheter=4;
	bakgrundstabeller.vildmark[18].expertispoang=2;
	bakgrundstabeller.vildmark[18].beskrivning="Detta är inte direkt ett sätt att försörja sig eller ett yrke inom stammen, utan snarare en roll som man ofta talar tyst om. De flesta folk som lever nära den otämjda naturen har likväl erfarenheter av och legender om det främmande och farliga Skugglandet, och kunskapen om hur man hanterar dess inverkan kan vara livsavgörande för en hel bosättning. Man talar tyst om det fåtal som känner skuggfolkens seder - ofta vet alla vilka det är, utan att egentligen yttra det annat än i nödfall. Inte sällan tros dessa speciella individer vara halvblod av något slag, eller kunna vandra in i Skugglandet efter egen vilja.";
	bakgrundstabeller.vildmark[18].beskrivninghak = "1 slag på Färder \& äventyr, 4 Valfria enheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.vildmark[19] = {};
	bakgrundstabeller.vildmark[19].rubrik="Stamkrigare";
	bakgrundstabeller.vildmark[19].bestamd="stamkrigaren";
	bakgrundstabeller.vildmark[19].obestamd="en stamkrigare";
	bakgrundstabeller.vildmark[19].striderdrabbningar=1;
	bakgrundstabeller.vildmark[19].stridsfardigheterenheter=4;
	bakgrundstabeller.vildmark[19].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[19].beskrivning="Även om livet i stammen ofta kräver att alla kan försvara sig hjälpligt är det vanligt att det finns en skara dedikerade krigare, på vilkas lott det faller att skydda befolkningen och kämpa i stammens namn. I fredligare tider bistår de emellanåt jägarna, men stamkrigare är mycket påtagligt tränade för att besegra och döda människor snarare än djur.";
	bakgrundstabeller.vildmark[19].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.vildmark[20] = {};
	bakgrundstabeller.vildmark[20].rubrik="Stigfinnare";
	bakgrundstabeller.vildmark[20].bestamd="stigfinnaren";
	bakgrundstabeller.vildmark[20].obestamd="en stigfinnare";
	bakgrundstabeller.vildmark[20].farderaventyr=1;
	bakgrundstabeller.vildmark[20].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[20].kanneteckenpoang=2;
	bakgrundstabeller.vildmark[20].beskrivning="Stigfinnarnas värv överlappar ofta med jägarnas, men stigfinnarna är mer inriktade på att upptäcka ständigt nya resurser och smidigare färdesvägar på det område som stammen håller som sitt. De är ofta något av excentriska ensamvargar och kan emellanåt vara ifrån bosättningen längre tider, utan att på något sätt överge den.";
	bakgrundstabeller.vildmark[20].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Vildmarksfärdigheter, 2 poäng Kännetecken.";

	
	bakgrundstabeller.vildmark[21] = {};
	bakgrundstabeller.vildmark[21].rubrik="Teckentydare";
	bakgrundstabeller.vildmark[21].bestamd="teckentydaren";
	bakgrundstabeller.vildmark[21].obestamd="en teckentydare";
	bakgrundstabeller.vildmark[21].kunskapmysterier=1;
	bakgrundstabeller.vildmark[21].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[21].expertispoang=2;
	bakgrundstabeller.vildmark[21].beskrivning="Med teckentydare avses inte i första hand spårare, även om de ofta kan bli mycket skickliga sådana, utan personer som på något sätt ser mer än andra. Ofta handlar det om att de tros kunna förutspå framtiden i naturens mönster, men vissa av dem säger sig även kunna se gångna tider och platser, eller rentav kommunicera med de dödas andar. De har sällan andebesvärjares specifika utbildning för sitt värv och befinner sig emellanåt rentav på kollisionskurs med dessa. Många söker dock upp teckentydarna för att få veta vad framtiden bär i sitt sköte.";
	bakgrundstabeller.vildmark[21].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Vildmarksfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.vildmark[22] = {};
	bakgrundstabeller.vildmark[22].rubrik="Tämjare";
	bakgrundstabeller.vildmark[22].bestamd="tämjaren";
	bakgrundstabeller.vildmark[22].obestamd="en tämjare";
	bakgrundstabeller.vildmark[22].farderaventyr=1;
	bakgrundstabeller.vildmark[22].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[22].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[22].beskrivning="Många stamfolk har kommit att hålla sig med någon form av tränade djur, som exempelvis hundar eller olika riddjur. Att lära upp dessa är sällan en persons enda syssla, men det kan vara en krävande konst som kräver tålamod, slughet och en stark vilja.";
	bakgrundstabeller.vildmark[22].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Sociala färdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.vildmark[23] = {};
	bakgrundstabeller.vildmark[23].rubrik="Underhållare";
	bakgrundstabeller.vildmark[23].bestamd="underhållaren";
	bakgrundstabeller.vildmark[23].obestamd="en underhållare";
	bakgrundstabeller.vildmark[23].farderaventyr=1;
	bakgrundstabeller.vildmark[23].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[23].kanneteckenpoang=2;
	bakgrundstabeller.vildmark[23].beskrivning="De flesta i stamsamhällen kan inte livnära sig enbart på att vara underhållande, men ibland dyker det upp personer som brinner så för sång, musik och liknande nöjen att de ser det som sin huvudsakliga uppgift i livet. Så länge dessa individer även gör sitt för att dra in mat till samhället betraktas de med allt från stor uppskattning till roat överseende. Många är också oroliga själar som vandrar runt mellan bosättningar och kan agera sändebud där specialiserade sådana saknas.";
	bakgrundstabeller.vildmark[23].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Sociala färdigheter, 2 poäng Kännetecken."

	
	bakgrundstabeller.vildmark[24] = {};
	bakgrundstabeller.vildmark[24].rubrik="Väktare";
	bakgrundstabeller.vildmark[24].bestamd="väktaren";
	bakgrundstabeller.vildmark[24].obestamd="en väktare";
	bakgrundstabeller.vildmark[24].striderdrabbningar=1;
	bakgrundstabeller.vildmark[24].stridsfardigheterenheter=4;
	bakgrundstabeller.vildmark[24].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[24].beskrivning="Denna sorts specialiserade krigare förekommer inte i alla kulturer, men där de finns är de stolta över sitt värv och hyllade för det. Deras roll är att beskydda platser och, framför allt, individer av särskild vikt, vilket skiljer dem från de typiska kämparna som ofta har bredare sysselsättningar. Kloka ledare omger sig gärna med en eller flera dugliga väktare, liksom mystiker och sändebud av olika slag.";
	bakgrundstabeller.vildmark[24].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Sociala färdigheter 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.vildmark[25] = {};
	bakgrundstabeller.vildmark[25].rubrik="Älskare";
	bakgrundstabeller.vildmark[25].bestamd="älskaren";
	bakgrundstabeller.vildmark[25].obestamd="en älskare";
	bakgrundstabeller.vildmark[25].intrigerillgarningar=1;
	bakgrundstabeller.vildmark[25].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[25].kanneteckenpoang=2;
	bakgrundstabeller.vildmark[25].beskrivning="I alla kulturer finns det de som av nöd eller val vinner försörjning genom sin förmåga att skänka köttsliga njutningar. Deras position på samhällsstegen kan variera enormt, till den grad att de kan betraktas som samhällets lägsta hos vissa folk och tillhöra den absoluta eliten bland andra. Det är också mycket olika huruvida de har fäst sig vid en specifik person eller förväntas betjäna vem som än kan erbjuda tillräckligt för deras tjänster.";
	bakgrundstabeller.vildmark[25].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Kännetecken.";
	
	bakgrundstabeller.nermadasbefolkning = [];
	bakgrundstabeller.nermadasbefolkning[0] = {};
	bakgrundstabeller.nermadasbefolkning[0].subval = [[[]]];
	bakgrundstabeller.nermadasbefolkning[0].vald = 0;
    bakgrundstabeller.nermadasbefolkning[0].rubrik="Nermadas befolkning";
    bakgrundstabeller.nermadasbefolkning[0].namn="nermadasbefolkning";
    
	bakgrundstabeller.nermadasbefolkning[1]= {};
	bakgrundstabeller.nermadasbefolkning[1].rubrik="Arkitekt";
	bakgrundstabeller.nermadasbefolkning[1].bestamd="arkitekten";
	bakgrundstabeller.nermadasbefolkning[1].obestamd="en arkitekt";
	bakgrundstabeller.nermadasbefolkning[1].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[1].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[1].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[1].beskrivning="Konsten att planera såväl hus som broar och andra byggen är såväl viktig som uppskattad, och dess utövare är ofta välbetalda. På detta område anses nermadierna tillhöra Mundanas allra främsta.";
	//bakgrundstabeller.nermadasbefolkning[1].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[2] = {};
	bakgrundstabeller.nermadasbefolkning[2].rubrik="Bard";
	bakgrundstabeller.nermadasbefolkning[2].bestamd="barden";
	bakgrundstabeller.nermadasbefolkning[2].obestamd="en bard";
	bakgrundstabeller.nermadasbefolkning[2].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[2].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[2].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[2].beskrivning="Den som kan underhålla med musik och medryckande berättelser blir väl mottagen vart han än vandrar.";
	//bakgrundstabeller.nermadasbefolkning[2].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[3] = {};
	bakgrundstabeller.nermadasbefolkning[3].rubrik="Baron";
	bakgrundstabeller.nermadasbefolkning[3].bestamd="baronen";
	bakgrundstabeller.nermadasbefolkning[3].obestamd="en baron";
	bakgrundstabeller.nermadasbefolkning[3].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[3].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[3].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[3].beskrivning="Baroner och baronessor är inflytelserika länsherrar som styr ett län i utbyte mot en trohetsed till en av de sju grevarna och glatt intrigerar sinsemellan för att öka sin makt.";
	//bakgrundstabeller.nermadasbefolkning[3].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[4] = {};
	bakgrundstabeller.nermadasbefolkning[4].rubrik="Bödel";
	bakgrundstabeller.nermadasbefolkning[4].bestamd="bödeln";
	bakgrundstabeller.nermadasbefolkning[4].obestamd="en bödel";
	bakgrundstabeller.nermadasbefolkning[4].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[4].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[4].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[4].beskrivning="Även i ett samhälle som det nermadiska, där bödeln inte befinner sig på botten av samhället, rör det sig om en fruktad och mytomspunnen person.";
	//bakgrundstabeller.nermadasbefolkning[4].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[5] = {};
	bakgrundstabeller.nermadasbefolkning[5].rubrik="Brottsling";
	bakgrundstabeller.nermadasbefolkning[5].bestamd="brottslingen";
	bakgrundstabeller.nermadasbefolkning[5].obestamd="en brottsling";
	bakgrundstabeller.nermadasbefolkning[5].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[5].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[5].stridsfardigheterenheter=4
	bakgrundstabeller.nermadasbefolkning[5].beskrivning="Såväl i städerna som på landsbygden finns det folk som använder sig av allehanda ohederliga och inte sällan våldsamma metoder för att försöka bli rika eller bara överleva till nästa dag.";
	//bakgrundstabeller.nermadasbefolkning[5].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[6] = {};
	bakgrundstabeller.nermadasbefolkning[6].rubrik="Dansmästare";
	bakgrundstabeller.nermadasbefolkning[6].bestamd="dansmästaren";
	bakgrundstabeller.nermadasbefolkning[6].obestamd="en dansmästare";
	bakgrundstabeller.nermadasbefolkning[6].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[6].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[6].kanneteckenpoang=2;
	bakgrundstabeller.nermadasbefolkning[6].beskrivning="Uråldriga traditioner från det coloniska imperiet förvaltas av de skickligaste underhållare, som framför fantastiska berättelser med sina akrobatiska danser.";
	//bakgrundstabeller.nermadasbefolkning[6].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 2 poäng Kännetecken."

	
	bakgrundstabeller.nermadasbefolkning[7] = {};
	bakgrundstabeller.nermadasbefolkning[7].rubrik="Diplomat";
	bakgrundstabeller.nermadasbefolkning[7].bestamd="diplomaten";
	bakgrundstabeller.nermadasbefolkning[7].obestamd="en diplomat";
	bakgrundstabeller.nermadasbefolkning[7].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[7].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[7].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[7].beskrivning="Vare sig de tjänar vid furstehov inom landet eller som Nermadas ambassadörer i fjärran länder är diplomaterna aktade för sina insatser och fruktade för sina lena tungor och slipade intellekt. ";
	//bakgrundstabeller.nermadasbefolkning[7].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter."


	bakgrundstabeller.nermadasbefolkning[8] = {};
	bakgrundstabeller.nermadasbefolkning[8].rubrik="Dödgrävare";
	bakgrundstabeller.nermadasbefolkning[8].bestamd="dödgrävaren";
	bakgrundstabeller.nermadasbefolkning[8].obestamd="en dödgrävare";
	bakgrundstabeller.nermadasbefolkning[8].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[8].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[8].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[8].beskrivning="Döden tar alla, och alla måste tas om hand när livet är slut. Att gräva gravar och hantera de döda anses ofta vara en av samhällets lägsta sysslor, men deras täta kontakter med prästerskapet gör många dödgrävare förvånansvärt kunniga på allehanda områden.";
	//bakgrundstabeller.nermadasbefolkning[8].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Rörelsefärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[9] = {};
	bakgrundstabeller.nermadasbefolkning[9].rubrik="Fiskare";
	bakgrundstabeller.nermadasbefolkning[9].bestamd="fiskaren";
	bakgrundstabeller.nermadasbefolkning[9].obestamd="en fiskare";
	bakgrundstabeller.nermadasbefolkning[9].pluralobestamd="fiskare";
	bakgrundstabeller.nermadasbefolkning[9].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[9].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[9].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[9].beskrivning="Havet skänker nermadierna en stor del av deras föda, och det anses vara ett rejält och hederligt arbete att med envishet och skicklighet skörda dess frukter.";
	//bakgrundstabeller.nermadasbefolkning[9].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Vildmarksfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[10] = {};
	bakgrundstabeller.nermadasbefolkning[10].rubrik="Lärd";
	bakgrundstabeller.nermadasbefolkning[10].bestamd="den lärde";
	bakgrundstabeller.nermadasbefolkning[10].obestamd="en lärd";
	bakgrundstabeller.nermadasbefolkning[10].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[10].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[10].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[10].beskrivning="De lärda fyller mångahanda roller i samhället, och deras kunskaper kan vara av de mest skiftande slag. För många är en tjänst där man undervisar och rådger vid hoven den mest önskade sysslan, men lärda arbetar också inom handelsbolag eller på lägre poster inom administrationen.";
	//bakgrundstabeller.nermadasbefolkning[10].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[11] = {};
	bakgrundstabeller.nermadasbefolkning[11].rubrik="Fältskär";
	bakgrundstabeller.nermadasbefolkning[11].bestamd="fältskären";
	bakgrundstabeller.nermadasbefolkning[11].obestamd="en fältskär";
	bakgrundstabeller.nermadasbefolkning[11].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[11].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[11].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[11].beskrivning="De djärvaste av läkekunniga söker sig till tjänster nära de strider där folk sargas av fienders vapen och bestars klor. Andra har helt enkelt oturen att kommenderas till tjänst på dessa utsatta platser, och gör vad de kan för att överleva och hålla andra vid liv.";
	bakgrundstabeller.nermadasbefolkning[11].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Kunskapsfärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[12] = {};
	bakgrundstabeller.nermadasbefolkning[12].rubrik="Förfalskare";
	bakgrundstabeller.nermadasbefolkning[12].bestamd="förfalskaren";
	bakgrundstabeller.nermadasbefolkning[12].obestamd="en förfalskare";
	bakgrundstabeller.nermadasbefolkning[12].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[12].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[12].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[12].beskrivning="Varje sigill och vapensköld som skapas och varje dokument som undertecknas är en möjlighet för förfalskaren och hans ibland högt uppsatta uppdragsgivare.";
	bakgrundstabeller.nermadasbefolkning[12].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 2 poäng Hantverk."

	
	bakgrundstabeller.nermadasbefolkning[13] = {};
	bakgrundstabeller.nermadasbefolkning[13].rubrik="Gardessoldat";
	bakgrundstabeller.nermadasbefolkning[13].bestamd="gardessoldaten";
	bakgrundstabeller.nermadasbefolkning[13].obestamd="en gardessoldat";
	bakgrundstabeller.nermadasbefolkning[13].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[13].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[13].valfriaenheter=4;
	bakgrundstabeller.nermadasbefolkning[13].beskrivning="Varje ädling av betydelse måste ha skickliga stridsmän till hands som kan skydda såväl ägor som person. Dessa gardessoldater handplockas ofta bland de skickligaste krigare, och kan ha mycket olika träning och specialkompetens.";
	bakgrundstabeller.nermadasbefolkning[13].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.nermadasbefolkning[14] = {};
	bakgrundstabeller.nermadasbefolkning[14].rubrik="Gatuförsäljare";
	bakgrundstabeller.nermadasbefolkning[14].bestamd="gatuförsäljaren";
	bakgrundstabeller.nermadasbefolkning[14].obestamd="en gatuförsäljare";
	bakgrundstabeller.nermadasbefolkning[14].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[14].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[14].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[14].beskrivning="Mer framståendeköpmän markerar ofta sitt avstånd mot de månglare som måste skrika ut sina varors förträfflighet på gator och torg, men handlarna ser och hör mycket som inte når in i de slutna salongerna.";
	bakgrundstabeller.nermadasbefolkning[14].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[15] = {};
	bakgrundstabeller.nermadasbefolkning[15].rubrik="Grovarbetare";
	bakgrundstabeller.nermadasbefolkning[15].bestamd="grovarbetaren";
	bakgrundstabeller.nermadasbefolkning[15].obestamd="en grovarbetare";
	bakgrundstabeller.nermadasbefolkning[15].valfriatabellslag=1;
	bakgrundstabeller.nermadasbefolkning[15].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[15].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[15].beskrivning="Det finns alltid hårda arbeten som behöver göras, och många fattiga som sliter ut sina kroppar för att utföra dem.";
	bakgrundstabeller.nermadasbefolkning[15].beskrivninghak = "1 slag på valfri tabell, 4 enheter Vildmarksfärdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[16] = {};
	bakgrundstabeller.nermadasbefolkning[16].rubrik="Gycklare";
	bakgrundstabeller.nermadasbefolkning[16].bestamd="gycklaren";
	bakgrundstabeller.nermadasbefolkning[16].obestamd="en gycklare";
	bakgrundstabeller.nermadasbefolkning[16].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[16].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[16].kanneteckenpoang=2;
	bakgrundstabeller.nermadasbefolkning[16].beskrivning="Gyckelkonster och deras utövare är långt ifrån lika aktade som att fängsla en publik med musik och sagor, men många har inget val och andra anser att ett liv i någon sorts frihet är värt rotlösheten och de sneda blickarna.";
	bakgrundstabeller.nermadasbefolkning[16].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 2 poäng Kännetecken.";

	
	bakgrundstabeller.nermadasbefolkning[17] = {};
	bakgrundstabeller.nermadasbefolkning[17].rubrik="Hamnsjåare";
	bakgrundstabeller.nermadasbefolkning[17].bestamd="hamnsjåaren";
	bakgrundstabeller.nermadasbefolkning[17].obestamd="en hamnsjåare";
	bakgrundstabeller.nermadasbefolkning[17].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[17].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[17].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[17].beskrivning="Om än betraktade som råskinn som man gör bäst i att inte stöta sig med fyller hamnsjåarna en mycket viktig funktion genom att lassa och lossa varor i Nermadas hamnar.";
	bakgrundstabeller.nermadasbefolkning[17].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[18] = {};
	bakgrundstabeller.nermadasbefolkning[18].rubrik="Hantverkare";
	bakgrundstabeller.nermadasbefolkning[18].bestamd="hantverkaren";
	bakgrundstabeller.nermadasbefolkning[18].obestamd="en hantverkare";
	bakgrundstabeller.nermadasbefolkning[18].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[18].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[18].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[18].beskrivning="Det finns alltid saker som behöver lagas eller skapas från grunden, och hantverkare låter sig svårligen klumpas ihop till en grupp. Allt från krukmakare till snickare och vapensmeder ryms i denna bakgrund.";
	bakgrundstabeller.nermadasbefolkning[18].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[19] = {};
	bakgrundstabeller.nermadasbefolkning[19].rubrik="Härold";
	bakgrundstabeller.nermadasbefolkning[19].bestamd="härolden";
	bakgrundstabeller.nermadasbefolkning[19].obestamd="en härold";
	bakgrundstabeller.nermadasbefolkning[19].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[19].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[19].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[19].beskrivning="Det faller på häroldens lott att både skapa passande vapensköldar och med tillbörlig inlevelse tillkännage sin herres närvaro, så dessa ibland adliga män och kvinnor måste ha såväl hantverksmässig skicklighet som förmåga att ta folk.";
	bakgrundstabeller.nermadasbefolkning[19].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[20] = {};
	bakgrundstabeller.nermadasbefolkning[20].rubrik="Indrivare";
	bakgrundstabeller.nermadasbefolkning[20].bestamd="indrivaren";
	bakgrundstabeller.nermadasbefolkning[20].obestamd="en indrivare";
	bakgrundstabeller.nermadasbefolkning[20].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[20].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[20].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[20].beskrivning="De flesta indrivare är föga mer än utpressare som jobbar för ännu värre skurkar, men vissa av dem tjänar någorlunda legitima herrar. Metoderna är dock ofta desamma.";
	bakgrundstabeller.nermadasbefolkning[20].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Sociala färdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[21] = {};
	bakgrundstabeller.nermadasbefolkning[21].rubrik="Jordbrukare";
	bakgrundstabeller.nermadasbefolkning[21].bestamd="jordbrukaren";
	bakgrundstabeller.nermadasbefolkning[21].obestamd="en jordbrukare";
	bakgrundstabeller.nermadasbefolkning[21].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[21].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[21].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[21].beskrivning="Vare sig de driver boskap eller tvingar ur jorden dess ibland magra skördar är det jordbrukarna som tillsammans med fiskare och jägare står för att driva upp den mat som alla behöver.";
	bakgrundstabeller.nermadasbefolkning[21].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Vildmarksfärdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[22] = {};
	bakgrundstabeller.nermadasbefolkning[22].rubrik="Jägare";
	bakgrundstabeller.nermadasbefolkning[22].bestamd="jägaren";
	bakgrundstabeller.nermadasbefolkning[22].obestamd="en jägare";
	bakgrundstabeller.nermadasbefolkning[22].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[22].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[22].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[22].beskrivning="Att jaga för födan är inte särskilt vanligt i Nermada, och det är inte ovanligt att en stor del av den professionella jägarens tid går åt till att hålla ett vakande öga på länsherrens marker.";
	bakgrundstabeller.nermadasbefolkning[22].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[23] = {};
	bakgrundstabeller.nermadasbefolkning[23].rubrik="Konstnär";
	bakgrundstabeller.nermadasbefolkning[23].bestamd="konstnären";
	bakgrundstabeller.nermadasbefolkning[23].obestamd="en konstnär";
	bakgrundstabeller.nermadasbefolkning[23].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[23].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[23].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[23].beskrivning="Nermadas konstnärer är oftast skulptörer, men måleriet håller på att bli allt populärare och dess kvalitet allt högre. Konstnärerna distanserar sig gärna från de hantverkare med vilka de delar många drag, och är inte sällan av ädel börd.";
	bakgrundstabeller.nermadasbefolkning[23].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Hantverk."

	
	bakgrundstabeller.nermadasbefolkning[24] = {};
	bakgrundstabeller.nermadasbefolkning[24].rubrik="Kunskapare";
	bakgrundstabeller.nermadasbefolkning[24].bestamd="kunskaparen";
	bakgrundstabeller.nermadasbefolkning[24].obestamd="en kunskapare";
	bakgrundstabeller.nermadasbefolkning[24].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[24].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[24].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[24].beskrivning="Kunskap är makt, och det finns alltid någon som är beredd att betala för hemligheter.";
	bakgrundstabeller.nermadasbefolkning[24].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[25] = {};
	bakgrundstabeller.nermadasbefolkning[25].rubrik="Kurirryttare";
	bakgrundstabeller.nermadasbefolkning[25].bestamd="kurirryttaren";
	bakgrundstabeller.nermadasbefolkning[25].obestamd="en kurirryttare";
	bakgrundstabeller.nermadasbefolkning[25].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[25].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[25].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[25].beskrivning="Att färdas med bud ställer stora krav på såväl kuriren som hans riddjur. Det finns budbärare som arbetar för vem som än kan betala, men i allmänhet är de anställda av någon ädling eller förmögen person.";
	bakgrundstabeller.nermadasbefolkning[25].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[26] = {};
	bakgrundstabeller.nermadasbefolkning[26].rubrik="Köpman";
	bakgrundstabeller.nermadasbefolkning[26].bestamd="köpmannen";
	bakgrundstabeller.nermadasbefolkning[26].obestamd="en köpman";
	bakgrundstabeller.nermadasbefolkning[26].pluralobestamd="gisslan";
	bakgrundstabeller.nermadasbefolkning[26].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[26].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[26].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[26].beskrivning="Även om konkurrensen bland köpmännen är hård anser många att det är värt att ge sig in i den eviga kampen om den bästa affären. De främsta blir också närmast ofattbart rika.";
	bakgrundstabeller.nermadasbefolkning[26].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[27] = {};
	bakgrundstabeller.nermadasbefolkning[27].rubrik="Legosoldat";
	bakgrundstabeller.nermadasbefolkning[27].bestamd="legosoldaten";
	bakgrundstabeller.nermadasbefolkning[27].obestamd="en legosoldat";
	bakgrundstabeller.nermadasbefolkning[27].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[27].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[27].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[27].beskrivning="De som strider för den som kan betala betraktas ofta som ett orosmoment i de styrandes ögon, men samtidigt behövs deras tjänster och de kan ibland dra in en god sold.";
	bakgrundstabeller.nermadasbefolkning[27].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter."

	
	bakgrundstabeller.nermadasbefolkning[28] = {};
	bakgrundstabeller.nermadasbefolkning[28].rubrik="Läkekunnig";
	bakgrundstabeller.nermadasbefolkning[28].bestamd="den läkekunniga";
	bakgrundstabeller.nermadasbefolkning[28].obestamd="en läkekunnig";
	bakgrundstabeller.nermadasbefolkning[28].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[28].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[28].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[28].beskrivning="Vare sig hon är en medikus i en stad eller en klok gumma på landsbygden är den läkekunniga mycket uppskattad, även om det alltid finns de som viskar bakom hennes rygg om källan till hennes kunskap.";
	bakgrundstabeller.nermadasbefolkning[28].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[29] = {};
	bakgrundstabeller.nermadasbefolkning[29].rubrik="Munk";
	bakgrundstabeller.nermadasbefolkning[29].bestamd="munken";
	bakgrundstabeller.nermadasbefolkning[29].obestamd="en munk";
	bakgrundstabeller.nermadasbefolkning[29].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[29].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[29].valfriaenheter=4;
	bakgrundstabeller.nermadasbefolkning[29].beskrivning="Innanför klostrens skyddande väggar kan de varmt troende reflektera över trons mysterier och dessutom förkovra sig i allehanda lärdom och färdigheter, allt efter sin ordens krav och sina egna talanger.";
	bakgrundstabeller.nermadasbefolkning[29].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.nermadasbefolkning[30] = {};
	bakgrundstabeller.nermadasbefolkning[30].rubrik="Ockrare";
	bakgrundstabeller.nermadasbefolkning[30].bestamd="ockraren";
	bakgrundstabeller.nermadasbefolkning[30].obestamd="en ockrare";
	bakgrundstabeller.nermadasbefolkning[30].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[30].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[30].valfriaenheter=4;
	bakgrundstabeller.nermadasbefolkning[30].beskrivning="Att livnära sig på att låna ut pengar anses långt ifrån hedervärt, men den skicklige ockraren kan bli förmögen och leva i ett överflöd som annars är förbehållet adeln.";
	bakgrundstabeller.nermadasbefolkning[30].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 4 valfria enheter."

	
	bakgrundstabeller.nermadasbefolkning[31] = {};
	bakgrundstabeller.nermadasbefolkning[31].rubrik="Officer";
	bakgrundstabeller.nermadasbefolkning[31].bestamd="officeren";
	bakgrundstabeller.nermadasbefolkning[31].obestamd="en officer";
	bakgrundstabeller.nermadasbefolkning[31].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[31].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[31].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[31].beskrivning="Besluten om var trupper ska placeras på slagfält och hur övergripande strategier ska läggas upp fattas av befäl som antingen själva är av nobel börd eller tjänar någon ädling. Dessa krigskonstens främsta leder dessutom djärvt trupper i strid.";
	bakgrundstabeller.nermadasbefolkning[31].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Kunskapsfärdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[32] = {};
	bakgrundstabeller.nermadasbefolkning[32].rubrik="Pirat";
	bakgrundstabeller.nermadasbefolkning[32].bestamd="piraten";
	bakgrundstabeller.nermadasbefolkning[32].obestamd="en pirat";
	bakgrundstabeller.nermadasbefolkning[32].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[32].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[32].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[32].beskrivning="Havets fasor härjar även kring det fredliga Nermada, med såväl brutala överfall till havs som snabba strandhugg.";
	bakgrundstabeller.nermadasbefolkning[32].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter."

	
	bakgrundstabeller.nermadasbefolkning[33] = {};
	bakgrundstabeller.nermadasbefolkning[33].rubrik="Prisjägare";
	bakgrundstabeller.nermadasbefolkning[33].bestamd="prisjägaren";
	bakgrundstabeller.nermadasbefolkning[33].obestamd="en prisjägare";
	bakgrundstabeller.nermadasbefolkning[33].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[33].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[33].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[33].beskrivning="Uppdragen att jaga ner personer på flykt kommer omväxlande från den dömande makten och från rika och hämndlystna privatpersoner. Vilka uppdrag prisjägaren tas styrs av dennes moral och möjlighet att välja och vraka, såtillvida han inte är anställd av någon vars order han bara har att lyda.";
	bakgrundstabeller.nermadasbefolkning[33].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Rörelsefärdigheter 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[34] = {};
	bakgrundstabeller.nermadasbefolkning[34].rubrik="Präst";
	bakgrundstabeller.nermadasbefolkning[34].bestamd="prästen";
	bakgrundstabeller.nermadasbefolkning[34].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[34].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[34].mystikfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[34].beskrivning="Vare sig man förmedlar Aurias och Pelias budskap eller tolkar Daaks heliga ord är prästen en mycket viktig och i allmänhet respekterad person.";
	bakgrundstabeller.nermadasbefolkning[34].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Kunskapsfärdigheter, 4 enheter Mystikfärdigheter."

	
	bakgrundstabeller.nermadasbefolkning[35] = {};
	bakgrundstabeller.nermadasbefolkning[35].rubrik="Riddare";
	bakgrundstabeller.nermadasbefolkning[35].bestamd="riddaren";
	bakgrundstabeller.nermadasbefolkning[35].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[35].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[35].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[35].beskrivning="Att tjäna sin länsherre med vapen i hand är ett sätt att leva och en källa till stolthet för Nermadas riddare.";
	bakgrundstabeller.nermadasbefolkning[35].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Sociala färdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[36] = {};
	bakgrundstabeller.nermadasbefolkning[36].rubrik="Sjöfarare";
	bakgrundstabeller.nermadasbefolkning[36].bestamd="sjöfararen";
	bakgrundstabeller.nermadasbefolkning[36].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[36].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[36].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[36].beskrivning="Ingen kan berätta lika mycket om främmande länder och märkliga folk som en berest sjöman, men få stretar heller lika hårt eller riskerar lika mycket.";
	bakgrundstabeller.nermadasbefolkning[36].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[37] = {};
	bakgrundstabeller.nermadasbefolkning[37].rubrik="Skrivare";
	bakgrundstabeller.nermadasbefolkning[37].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[37].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[37].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[37].beskrivning="Även om de flesta nermadier kan läsa och skriva åtminstone hjälpligt finns det goda möjligheter till arbeten för den som snabbt och elegant kan fästa ord på pränt.";
	bakgrundstabeller.nermadasbefolkning[37].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 2 poäng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[38] = {};
	bakgrundstabeller.nermadasbefolkning[38].rubrik="Sköka";
	bakgrundstabeller.nermadasbefolkning[38].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[38].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[38].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[38].beskrivning="Vare sig hon är mer eller mindre slav på någon bordell eller bespottad sockenhora ute på landet är skökan en kvinna som folk från alla samhällsskikt såväl föraktar som gör affärer med.";
	bakgrundstabeller.nermadasbefolkning[38].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[39] = {};
	bakgrundstabeller.nermadasbefolkning[39].rubrik="Arbetsslav";
	bakgrundstabeller.nermadasbefolkning[39].bestamd="arbetsslaven";
	bakgrundstabeller.nermadasbefolkning[39].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[39].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[39].valfriaenheter=4;
	bakgrundstabeller.nermadasbefolkning[39].beskrivning="Även om slaveriets omfattning har minskat används slavar alltjämt för en hel del ofta hårda och farliga arbeten.";
	bakgrundstabeller.nermadasbefolkning[39].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Rörelsefärdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.nermadasbefolkning[40] = {};
	bakgrundstabeller.nermadasbefolkning[40].rubrik="Gladiator";
	bakgrundstabeller.nermadasbefolkning[40].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[40].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[40].kanneteckenpoang=2;
	bakgrundstabeller.nermadasbefolkning[40].beskrivning="De kämpar som strider på gladiatorarenorna är aldrig fria, men de kan vinna en berömmelse som arbetsslavar aldrig kommer i närheten av.";
	bakgrundstabeller.nermadasbefolkning[40].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 2 poäng Kännetecken."

	
	bakgrundstabeller.nermadasbefolkning[41] = {};
	bakgrundstabeller.nermadasbefolkning[41].rubrik="Slavhandlare";
	bakgrundstabeller.nermadasbefolkning[41].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[41].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[41].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[41].beskrivning="Slavhandlarna för en allt mer tynande tillvaro i en tid när de flesta slavar föds in i sina roller och ofta tjänar samma herre eller släkt under hela sina liv. Ännu går det dock att göra stora vinster i handeln med slavar som är dugliga eller på andra sätt intressanta.";
	bakgrundstabeller.nermadasbefolkning[41].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[42] = {};
	bakgrundstabeller.nermadasbefolkning[42].rubrik="Smugglare";
	bakgrundstabeller.nermadasbefolkning[42].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[42].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[42].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[42].beskrivning="Där det finns någon som kräver in tullar finns det någon som lever på att försöka frakta varor utan att behöva dela med sig av sina pengar.";
	bakgrundstabeller.nermadasbefolkning[42].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter."

	
	bakgrundstabeller.nermadasbefolkning[43] = {};
	bakgrundstabeller.nermadasbefolkning[43].rubrik="Soldat";
	bakgrundstabeller.nermadasbefolkning[43].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[43].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[43].valfriaenheter=4;
	bakgrundstabeller.nermadasbefolkning[43].beskrivning="Som soldaten tillhör man de fasta militära styrkorna, och får en anständig stridsträning.";
	bakgrundstabeller.nermadasbefolkning[43].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Stridsfärdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.nermadasbefolkning[44] = {};
	bakgrundstabeller.nermadasbefolkning[44].rubrik="Spelare";
	bakgrundstabeller.nermadasbefolkning[44].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[44].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[44].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[44].beskrivning="Spelaren försörjer sig på att bedriva hasardspel eller vadslagningar, men få har den enorma talang eller sanslösa tur som krävs för att alltid kunna säkra en vinst på ärligt vis.";
	bakgrundstabeller.nermadasbefolkning[44].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 4 enheter Sociala färdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[45] = {};
	bakgrundstabeller.nermadasbefolkning[45].rubrik="Stadsvakt";
	bakgrundstabeller.nermadasbefolkning[45].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[45].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[45].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[45].beskrivning="Den dagliga tillvaron för stadsvakterna är sällan särskilt spännande, men städerna kan inte vara utan dem och det finns vissa möjligheter att avancera till bättre avlönade tjänster.";
	bakgrundstabeller.nermadasbefolkning[45].beskrivninghak = "1 slag på Strider \& drabbningar, 4 enheter Sociala färdigheter, 4 enheter Stridsfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[46] = {};
	bakgrundstabeller.nermadasbefolkning[46].rubrik="Stråtrövare";
	bakgrundstabeller.nermadasbefolkning[46].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[46].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[46].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[46].beskrivning="Grupper av desperata män och kvinnor slår sig ibland ihop och driver runt på landsbygden, där de stjäl vad de kan under hot om och utövande av våld. [1 slag på Färder & äventyr, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.]";
	bakgrundstabeller.nermadasbefolkning[46].beskrivninghak = "1 slag på Färder \& äventyr, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[47] = {};
	bakgrundstabeller.nermadasbefolkning[47].rubrik="Tempelriddare";
	bakgrundstabeller.nermadasbefolkning[47].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[47].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[47].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[47].beskrivning="Varje religion kan förr eller senare behöva försvaras med vapen i hand, och dessa strider är tempelriddarnas uppdrag.";
	bakgrundstabeller.nermadasbefolkning[47].beskrivninghak = "1 slag på Kunskap \& mysterier, 4 enheter Stridsfärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[48] = {};
	bakgrundstabeller.nermadasbefolkning[48].rubrik="Tjuv";
	bakgrundstabeller.nermadasbefolkning[48].bestamd="tjuven";
	bakgrundstabeller.nermadasbefolkning[48].pluralobestamd="tjuvar";
	bakgrundstabeller.nermadasbefolkning[48].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[48].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[48].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[48].beskrivning="Tjuvens tveksamma syssla kan bestå av allt från simpla fickstölder när ingen tittar till halsbrytande fasadklättring för att bryta sig in hos den som tror sig vara säker bakom höga murar.";
	bakgrundstabeller.nermadasbefolkning[48].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Rörelsefärdigheter, 4 enheter Vildmarksfärdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[49] = {};
	bakgrundstabeller.nermadasbefolkning[49].rubrik="Värdshusvärd";
	bakgrundstabeller.nermadasbefolkning[49].valfriatabellslag=1;
	bakgrundstabeller.nermadasbefolkning[49].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[49].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[49].beskrivning="Det ställe som kan tillhandahålla ätlig mat, starka drycker och anständigt loppfria bäddar kan utgöra ett välkommet inslag i stadsbilden eller vara en bys själva centrum, och somliga värdshusvärdar lever mycket gott på sin verksamhet.";
	bakgrundstabeller.nermadasbefolkning[49].beskrivninghak = "1 slag på valfri tabell, 4 enheter Sociala färdigheter, 2 poäng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[50] = {};
	bakgrundstabeller.nermadasbefolkning[50].rubrik="Äktenskapsmäklare";
	bakgrundstabeller.nermadasbefolkning[50].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[50].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[50].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[50].beskrivning="Kanske finns det inget mer typiskt nermadiskt yrke än den nobla sysselsättningen att förhandla fram äktenskap.";
	bakgrundstabeller.nermadasbefolkning[50].beskrivninghak = "1 slag på Intriger \& illgärningar, 4 enheter Kunskapsfärdigheter, 4 enheter Sociala färdigheter."
	
	
	
	
	bakgrundstabeller.damarien = [];
	bakgrundstabeller.damarien[0] = {};
	bakgrundstabeller.damarien[0].subval = [[[]]];
	bakgrundstabeller.damarien[0].vald = 0;
    bakgrundstabeller.damarien[0].rubrik="Damarien";
    bakgrundstabeller.damarien[0].namn="damarien";
	
	bakgrundstabeller.damarien[1] = {};
	bakgrundstabeller.damarien[1].rubrik="Alkemist";
	bakgrundstabeller.damarien[1].beskrivning="Alkemisten viger sitt liv åt att förena magi, vetenskap och ockultism. Vissa når erkännande men många slutar som galningar efter att ha luktat för djupt i de dunster som salter och syror utsöndrar. De flesta alkemister i Damarien är medlemmar i den mystiska och högt ansedda Santimarexorden och många av dem är ursprungligen flyktingar från Jargien, där alkemister ofta förföljs av inkvisitionen.";
	bakgrundstabeller.damarien[1].kunskapmysterier=1;
	bakgrundstabeller.damarien[1].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[1].mystikfardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[2] = {};
	bakgrundstabeller.damarien[2].rubrik="Ambulier";
	bakgrundstabeller.damarien[2].beskrivning="Många av de fedaker som slagit sig ned i Damarien har behållit sin kringresande livsstil. De mest legendariska av dessa är ambulierna, eller knallarna, gårdfarihandlare som reser mellan byar och gods och försörjer sig genom att byta sina egna hantverk och alla möjliga varor de kommit över under sina resor. Många sagor och vidskepelser har uppstått kring dem och det sägs att resande köpmän är särskilt beskyddade av S:t Argora. Ofta vågar inte ens Kristallordens krigare attackera en knalle som bär helgonets amulett på sitt bröst.";
	bakgrundstabeller.damarien[2].farderaventyr=1;
	bakgrundstabeller.damarien[2].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[2].hantverkpoang=2;
	
	
	

	
	bakgrundstabeller.damarien[3] = {};
	bakgrundstabeller.damarien[3].rubrik="Apotekare";
	bakgrundstabeller.damarien[3].beskrivning="I trånga butiker i städerna, stugor på landsbygden eller täckta vagnar som rör sig mellan byarna förrättar apotekarna sitt värv. De förser folket med extrakt, salvor och dekokter som sägs bota allt från magont, eksem och varande sår till håravfall, impotens och tandvärk. Vissa kan konsten att sätta stopp för oönskade graviditeter och andra säljer gifter utan att ställa några frågor.";
	bakgrundstabeller.damarien[3].farderaventyr=1;
	bakgrundstabeller.damarien[3].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[3].vildmarksfardigheterenheter=4;
	


	bakgrundstabeller.damarien[4] = {};
	bakgrundstabeller.damarien[4].rubrik="Arkitekt";
	bakgrundstabeller.damarien[4].beskrivning="Innan Helmslakten hade staden en av Asharinahalvöns viktigaste läroanstalter för arkitektur och byggkonst, där dvärgar och människor med små medel tillsammans frambringade imponerande byggnadsverk. Sedan Helms fördärv har mycket gått förlorat, men i och med återuppbyggnaden av Helm, Mirrons snabba tillväxt och Thamas intensiva upprustning av Damariens borgar finns det gott om arbete för arkitekter. Precis som i Kejsardömet är arkitekter högt sedda, men det är även en riskabel position då det är farligt att känna till hemligheterna hos mäktiga härskares byggprojekt. Det är inte ovanligt att arkitekter som konstruerat borgar åt storfursten eller adelsmän försvinner spårlöst så snart projektet fullbordats.";
	bakgrundstabeller.damarien[4].intrigerillgarningar=1;
	bakgrundstabeller.damarien[4].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[4].socialafardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[5] = {};
	bakgrundstabeller.damarien[5].rubrik="Barberare";
	bakgrundstabeller.damarien[5].beskrivning="Barberarna är respekterade hantverkare som tar betalt för att klippa hår, lägga frisyrer och trimma skägg åt alla som har råd. Men även om de är mest kända för skönhetsvård så är barberarens arbete långt mer mångfacetterat än så, då många av dem mot betalning bland annat drar ut kunders värkande tänder, åderlåter dem med iglar eller till och med utför enklare kirurgi och amputationer. Detta gör att många damarier får kalla kårar vid åsynen av de röda och vita stänger som märker ut barberarbodarna, där den röda färgen symboliserar blod och den vita bandage. En barberare kommer ofta mycket nära sina kunder och kan därför ibland vara i besittning av väldigt känslig, privat information om dessa.";
	bakgrundstabeller.damarien[5].intrigerillgarningar=1;
	bakgrundstabeller.damarien[5].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[5].hantverkpoang=2;
	
	

	bakgrundstabeller.damarien[6] = {};
	bakgrundstabeller.damarien[6].rubrik="Bard";
	bakgrundstabeller.damarien[6].beskrivning="Med flinka fingrar över en lyras strängar förrättar barden sitt värv. Sånger framförs som sätter hjärtan i brand, får tårar att flöda, leenden att sprida sig och skratt att klinga. Barden är en sagoberättare, sångare, poet och underhållare. De mest misslyckade barderna är inte mycket mer än tiggare som i lappade kläder spelar på spruckna instrument medan de mest lyckade uppträder uteslutande för de rikaste släkterna och till och med inför storfurstens hov.";
	bakgrundstabeller.damarien[6].farderaventyr=1;
	bakgrundstabeller.damarien[6].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[6].socialafardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[7] = {};
	bakgrundstabeller.damarien[7].rubrik="Besvärjare";
	bakgrundstabeller.damarien[7].beskrivning="Även om många damarier känner djup fruktan och avsky för besvärjare och trots att Daaks präster predikar om de mörka konsternas ondska kan magiker ofta öppet utöva sin konst i storfurstendömet. Under århundraden har otaliga häxor och trollkarlar flytt från kejsardömet för att söka en fristad i Damarien. Endast ett fåtal gillen tillåts verka, det viktigaste av dessa är de magiker som är organiserade i Santimarexorden. Men inte ens där kan en magiker känna sig helt trygg, då de Daaktroende Sebaeliterna, storfurstens kunskapare eller en ensam häxjägare när som helst kan få för sig att dennes studier i de förbjudna konsterna gått för långt och måste göras slut på en gång för alla.";
	bakgrundstabeller.damarien[7].kunskapmysterier=1;
	bakgrundstabeller.damarien[7].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[7].mystikfardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[8] = {};
	bakgrundstabeller.damarien[8].rubrik="Boktryckare";
	bakgrundstabeller.damarien[8].beskrivning="Med bläckstänkta händer och en stressad uppsyn så driver boktryckarna på med sin produktion av att trycka böcker åt kyrkan och privata aktörer. De ristar hela sidor i trä och trycker sedan dessa, då dvärgiska bokpressar med rörliga typer alltjämt väl förborgad hemlighet. Boktryckarnas hantverk ses på med misstanke och är mycket ogillade av skrivarna då deras roll blir alltmer försvagad ju fler böcker som trycks. Boktryckning utan storfurstens uttryckliga tillåtelse är förbjudet, då detta ses som ett farligt sätt att sprida upproriska tankar. De tryckare som finns övervakas antingen strängt av kronans kunskapare eller så arbetar de i det fördolda.";
	bakgrundstabeller.damarien[8].kunskapmysterier=1;
	bakgrundstabeller.damarien[8].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[8].hantverkpoang=2;
	
	

	bakgrundstabeller.damarien[9] = {};
	bakgrundstabeller.damarien[9].rubrik="Brottsling";
	bakgrundstabeller.damarien[9].pluralobestamd="brottslingar";
	bakgrundstabeller.damarien[9].beskrivning="Även i länder med brutala rättsväsenden finns det gott om människor som av olika skäl beslutat sig för att leva det farliga livet som brottslingar och försörja sig på rån, smuggling, inbrott och beskyddarverksamhet. Många av dem som lever på samhällets skuggsida försvarar sig med att de inte gör något som inte storfursten och hans hejdukar själva ägnar sig åt, men de flesta brottslingar gör helt enkelt det de gör för att överleva ännu en dag i en grym värld.";
	bakgrundstabeller.damarien[9].intrigerillgarningar=1;
	bakgrundstabeller.damarien[9].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[9].stridsfardigheterenheter=4;
	

	bakgrundstabeller.damarien[10] = {};
	bakgrundstabeller.damarien[10].rubrik="Daakmunk/Daaknunna";
	bakgrundstabeller.damarien[10].obestamd="en munk/nunna";
	bakgrundstabeller.damarien[10].bestamd="munken/nunnan";
	bakgrundstabeller.damarien[10].obestamdplural="munkar/nunnor";
	bakgrundstabeller.damarien[10].bestamdplural="munkarna/nunnorna";
	bakgrundstabeller.damarien[10].beskrivning="De finns de troende som väljer att svära sig till Daak och gå i kloster för att där tjäna honom. En del kloster ligger isolerade långt ute på landsbygden medan andra är belägna mitt i städer där man dagligen har kontakt med stadsborna. Vissa kloster är mycket strikta med tysthetslöfte och straff för minsta förseelse men i andra sker förbjudna ting bakom murarna och där handlar löftet snarare om att inte avslöja något för utomstående.";
	bakgrundstabeller.damarien[10].kunskapmysterier=1;
	bakgrundstabeller.damarien[10].kunskapsfardigheter=4;
	bakgrundstabeller.damarien[10].valfriaenheter=4;
	
	

	bakgrundstabeller.damarien[11] = {};
	bakgrundstabeller.damarien[11].rubrik="Daakpräst";
	bakgrundstabeller.damarien[11].beskrivning="Damarien är ett mörkt rike där falska gudar och demoner håller folket i ett järngrepp, men även här står enstaka kyrkor vigda till den sanna guden som ljus i ett fasansfullt mörker. Prästerna har till uppgift att rädda deras själar och hjälpa folket att finna Daak. De håller mässor, ger råd och är hjälp och stöd till dem som har det svårt eller har drabbats av tvivel. Många har valt detta värv på grund av sin tilltro till den ende guden och en vilja att göra gott men det finns de som, drivna av girighet och politiska ambitioner, använder tron som ett redskap för att manipulera sina anhängare och svartmåla sina fiender.";
	bakgrundstabeller.damarien[11].kunskapmysterier=1;
	bakgrundstabeller.damarien[11].kunskapsfardigheter=4;
	bakgrundstabeller.damarien[11].mystikfardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[12] = {};
	bakgrundstabeller.damarien[12].rubrik="Dansare";
	bakgrundstabeller.damarien[12].beskrivning="Över hela storfurstendömet finns professionella dansare som roar hög som låg med sina rytmiska kroppsrörelser. Där finns allt från de hovdansare som underhåller furstar med sin skönhet och grace till folkdansare som leder böndernas skördefester. Det finns även de som genom sin dans berättar om helgonens liv i kyrkans mysteriespel och de som dansar urgamla rituella danser för att ära de gamla gudarna och de hedniska makterna.";
	bakgrundstabeller.damarien[12].intrigerillgarningar=1;
	bakgrundstabeller.damarien[12].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[12].kanneteckenpoang=2;
	


	bakgrundstabeller.damarien[13] = {};
	bakgrundstabeller.damarien[13].rubrik="Demagog";
	bakgrundstabeller.damarien[13].beskrivning="Ord kan flytta berg, röra folkmassor till handling och få katastrofer att låta som glädjebud. En del demagoger är inte mer än skrävlare, andra är karismatiska sektledare, anstiftare till blodiga uppror eller sådana som älskar att skapa konflikter. Vissa talare är officiellt sanktionerade och uppbackade av storfursten för att sprida dennes ord till folket, andra är uppviglare och rebeller som ständigt lever på flykt undan kronans vrede.";
	bakgrundstabeller.damarien[13].valfriatabellslag=1;
	bakgrundstabeller.damarien[13].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[13].expertispoang=2;
	

	bakgrundstabeller.damarien[14] = {};
	bakgrundstabeller.damarien[14].rubrik="Dibukkultist";
	bakgrundstabeller.damarien[14].beskrivning="Allt som lever ska dö. Alla blommor ska vittra. Så även gudar, demoner och världen själv. Endast döden består. Många damarier fruktar och hatar den obeveklige skördemannen och hans mänskliga anhängare, men många fler dyrkar honom mer eller mindre öppet i hopp om en plats i hans mörka rike, där en stilla vind blåser genom tårpilar och vallmoblommor och skänker de döda en välsignad sömn och lindring från livets plågor. Andra ber till honom för skydd mot spöken och lamior och få är de som inte viker undan när de ser Dibuks barn, Kristallordens krigarorden, komma vandrande på vägen.";
	bakgrundstabeller.damarien[14].kunskapmysterier=1;
	bakgrundstabeller.damarien[14].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[14].stridsfardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[15] = {};
	bakgrundstabeller.damarien[15].rubrik="Domare";
	bakgrundstabeller.damarien[15].beskrivning="De damariska domstolarna är vida omtalade för sina okorrumperade och obarmhärtiga domare som genomför storfurstens hårda lagar efter att ha handplockats av denne. Under storfursten själv står ett antal praeatorer, som ansvarar för lagen i varje hertig- och furstendöme och under dessa flera länsdomare, som styr över rättvisan i enskilda städer eller grevskap. Domarna är hårda kvinnor och män som i första hand tjänar Thamas och i andra hand någon form av rättvisa. De är mäktiga allierade, men har nästan utan undantag många inflytelserika fiender från alla samhällsklasser.";
	bakgrundstabeller.damarien[15].intrigerillgarningar=1;
	bakgrundstabeller.damarien[15].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[15].socialafardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[16] = {};
	bakgrundstabeller.damarien[16].rubrik="Domedagspredikant";
	bakgrundstabeller.damarien[16].beskrivning="Den sista tiden närmar sig. Tecknen blir allt fler och snart kommer den mörke Malgoarh och hans demoner att störta in i världen och alla som inte är svurna till Daak kommer slitas i stycken och torteras i all evighet. Domedagspredikanterna inser detta och försöker med hängivelse, förkunnanden och öppna predikningar varna folket. Domedagspredikanterna kan man se på torg, vandrande mellan städer och utanför kyrkorna.";
	bakgrundstabeller.damarien[16].kunskapmysterier=1;
	bakgrundstabeller.damarien[16].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[16].socialafardigheterenheter=4;
	

	bakgrundstabeller.damarien[17] = {};
	bakgrundstabeller.damarien[17].rubrik="Dödgrävare";
	bakgrundstabeller.damarien[17].beskrivning="Allt dör förr eller senare. De rika sätter mat i halsen och de fattiga svälter ihjäl. För dödgrävaren spelar det ingen roll – alla ska de ned i jorden. Gravar skottas upp, kroppar sänks ned och jord skyfflas över. En del tar extra tid och placerar en blomma på graven och säger en bön – andra plundrar de döda på allt de har och vissa säljer kroppar eller delar av kroppar till ljusskygga individer. Dödgrävare ses på med misstro då det finns många sagor och sånger där dödgrävare sägs stå i förbund med mörkrets makter.";
	bakgrundstabeller.damarien[17].kunskapmysterier=1;
	bakgrundstabeller.damarien[17].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[17].expertispoang=2;
	
	

	bakgrundstabeller.damarien[18] = {};
	bakgrundstabeller.damarien[18].rubrik="Falenu";
	bakgrundstabeller.damarien[18].bestamd="falenun";
	bakgrundstabeller.damarien[18].obestamdplural="faleni";
	bakgrundstabeller.damarien[18].bestamdplural="falenierna";
	bakgrundstabeller.damarien[18].beskrivning="Från norra Damarien kommer de mystiska faleni (sing	falenu) vars namn kommer från det vallanboriska ordet för nattfjärilar. Enligt sägnen hämtar nattfjärilar de dödas själar under natten och för dem till dödsriket. En människa som är falenu är en sorts hednisk präst eller andemedium som har en nära koppling till döden, antingen genom att de dött och återupplivats eller för att de haft en kraftfull nära-döden-upplevelse. Då man tror att de sett den andra sidan betraktas de som de dödas språkrör till de levande. Faleni kommer ursprungligen från Vallanborien, men man kan finna enstaka över hela storfurstendömet.";
	bakgrundstabeller.damarien[18].kunskapmysterier=1;
	bakgrundstabeller.damarien[18].mystikfardigheterenheter=4;
	bakgrundstabeller.damarien[18].kanneteckenpoang=2;
	
	

	bakgrundstabeller.damarien[19] = {};
	bakgrundstabeller.damarien[19].rubrik="Fiskare";
	bakgrundstabeller.damarien[19].beskrivning="På floder, sjöar och vid Purpurhavets och Takalorrsundets grunda stränder kan man se fiskarnas båtar. Vattnet är deras levebröd. Från djupet drar de upp sprattlande fiskar som glänser likt silver i solskenet. De lagar sina nät på ställningar vid stränderna och röker, saltar och jäser sin fångst. Många är vidskepliga och alla har de en respekt för vädrets makter, i synnerhet stormarna, som välter deras båtar och offrar dem till djupet.";
	bakgrundstabeller.damarien[19].farderaventyr=1;
	bakgrundstabeller.damarien[19].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[19].expertispoang=2;
	
	

	bakgrundstabeller.damarien[20] = {};
	bakgrundstabeller.damarien[20].rubrik="Flagellant";
	bakgrundstabeller.damarien[20].beskrivning="Klädd i trasor och med sönderpiskad rygg vandrar flagellanten genom Damarien. Denne är uppfylld av den heliga profeten Udars lidande och mässar osammanhängande för alla som vill lyssna. Vissa blir flagellanter efter religiösa visioner, andra som straff för sina synder. För att visa Udars barmhärtighet tar en del med sig föräldralösa barn i sitt följe och låter dem leva på allmosorna. De smetar in barnens kinder med sitt blod tills barnen är gamla nog att själva ta upp piskan och delta i självspäkelsen – den heligaste av riter.";
	bakgrundstabeller.damarien[20].farderaventyr=1;
	bakgrundstabeller.damarien[20].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[20].expertispoang=2;
	
	

	bakgrundstabeller.damarien[21] = {};
	bakgrundstabeller.damarien[21].rubrik="Fogde";
	bakgrundstabeller.damarien[21].beskrivning="Inte ens kronans nattgardister är mer fruktade och avskydda av allmogen än storfurstens fogdar. Fogdarna är ämbetsmän utsedda av storfursten och förvaltar exempelvis slott och tillhörande gårdar, en stad eller till och med en gruva åt kronan. De driver in skatter från området, säljer de skatter som betalas i form av boskap eller varor, och ansvarar också för att en del skattemedel används lokalt, till exempel för att underhålla vägar och marknadsplatser. Dessa män och kvinnor har extremt långtgående befogenheter när det gäller att driva in skatterna och drar sig inte för att statuera exempel om det behövs. De är dock relativt okorrumperade då de avlönas direkt av kronan och det är stränga straff för den fogde som försöker driva in extra medel åt sig själv.";
	bakgrundstabeller.damarien[21].intrigerillgarningar=1;
	bakgrundstabeller.damarien[21].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[21].stridsfardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[22] = {};
	bakgrundstabeller.damarien[22].rubrik="Forskare";
	bakgrundstabeller.damarien[22].beskrivning="I Hammarnäs, Mirron och Targus kan man finna sammanslutningar av lärda män och kvinnor som arbetar för att fördjupa sina kunskaper människan, naturen, historia eller teologi. En del forskare arbetar på institutioner stödda av kronan eller kyrkan, men de allra flesta är personer med pengar och tid nog att fördjupa sig i världens mysterier. Många lärda har under åren flytt till Damarien från Kejsardömet, då Damariens härskare nästan alltid varit mer förlåtande mot forskning som i andra länder betraktats som hädisk.";
	bakgrundstabeller.damarien[22].kunskapmysterier=1;
	bakgrundstabeller.damarien[22].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[22].expertispoang=2;	
	
	bakgrundstabeller.damarien[23] = {};
	bakgrundstabeller.damarien[23].rubrik="Fältskär";
	bakgrundstabeller.damarien[23].beskrivning="När det sker stridigheter dör de flesta långt efter slaget av sina skador. Fältskären försöker rädda livet på dem. Denne läkekunnige är van att resa med soldater eller håller sig nära borgar och gränsposteringar. Fältskärer är skickliga på att stoppa blödningar, spjälka ben och genomföra vissa enklare kirurgiska ingrepp men trots detta dukar många av patienterna under och få har sett så mycket lidande i livets sista timmar som dessa män och kvinnor.";
	bakgrundstabeller.damarien[23].striderdrabbningar=1;
	bakgrundstabeller.damarien[23].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[23].stridsfardigheterenheter=4;
	
	bakgrundstabeller.damarien[24] = {};
	bakgrundstabeller.damarien[24].rubrik="Gatuförsäljare";
	bakgrundstabeller.damarien[24].beskrivning="Skrikandes erbjudanden om färsk fisk, vackra tyger, nybakt bröd och väldoftande oljor står gatuförsäljarna i sina små affärer och lockar in folkhopen för att köpa deras varor. Med snabba ord som likt ljuv musik söker sig in i kundernas öron säljer de sina varor. De använder alla knep som finns för att klara vardagen och samtidigt försöka hålla uppe sitt rykte till morgondagen.";
	bakgrundstabeller.damarien[24].intrigerillgarningar=1;
	bakgrundstabeller.damarien[24].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[24].expertispoang=2;
	
	
	bakgrundstabeller.damarien[25] = {};
	bakgrundstabeller.damarien[25].rubrik="Gisslan";
	bakgrundstabeller.damarien[25].bestamd="gisslan";
	bakgrundstabeller.damarien[25].pluralobestamd="gisslan";
	bakgrundstabeller.damarien[25].pluralbestamd="gisslan";
	bakgrundstabeller.damarien[25].beskrivning="Att sända sina barn, äkta hälft eller andra släktingar till fienden som en säkerhet för ett avtal har alltid förekommit i den damariska adeln, men under Thamas regering har det blivit en institution. I nästan alla adelsfamiljer, från de mäktigaste fursteätterna till de enklaste markägare, har någon kommenderats till Targus för det som kallas kronans gästfrihet av storfursten. Gisslan behandlas oftast väl och får en god utbildning på Thamas bekostnad, där lojaliteten mot kronan betonas mycket hårt. Men om deras släktingar missköter sig sitter gisslans huvud löst.";
	bakgrundstabeller.damarien[25].intrigerillgarningar=1;
	bakgrundstabeller.damarien[25].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[25].expertispoang=2;
	

	bakgrundstabeller.damarien[26] = {};
	bakgrundstabeller.damarien[26].rubrik="Godsherre";
	bakgrundstabeller.damarien[26].beskrivning="I små gårdar, ensliga slott eller någon av Krylomars otaliga storjordbruk regerar godsherrarna, lågadel som ofta inte är mer än en storbonde med vapensköld och ett fint namn. En gång i tiden var många godsherrar lokala härskare som var fruktade och hade egna små arméer, men efter Thamas har de drabbats av obarmhärtiga utrensningar och många av dem är numera föga mer än tjänstemän som lever i ständig fruktan för storfurstens stränga fogdar och räkenskapsmän. Dessutom har flera urgamla godsägarfamiljer utplånats och ersatts av personer trogna storfursten, många av dem ofrälse eller utlänningar.";
	bakgrundstabeller.damarien[26].intrigerillgarningar=1;
	bakgrundstabeller.damarien[26].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[26].socialafardigheterenheter=4;
	
	
	
	bakgrundstabeller.damarien[27] = {};
	bakgrundstabeller.damarien[27].rubrik="Grovarbetare";
	bakgrundstabeller.damarien[27].beskrivning="Yxor biter in i trädstammarna, hackor och hammare frigör marmor från stenbrotten och murar och byggnader byggs av ren mankraft. Grovarbetarna är fattiga damarier som lyckats hålla sig utanför livegenskapen, men de betalar ett högt pris för det i svett och lidande. De är kända för kamratskap och envishet. Arbetslagen sliter i både regn och gassande sol och sover sedan tungt i kojorna ute i vildmarken. När säsongen är över återvänder de till sina familjer med pengar eller till städerna i jakt på nytt arbete.";
	bakgrundstabeller.damarien[27].valfriatabellslag=1;
	bakgrundstabeller.damarien[27].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[27].hantverkpoang=2;
	
	
	
	bakgrundstabeller.damarien[28] = {};
	bakgrundstabeller.damarien[28].rubrik="Gråtare";
	bakgrundstabeller.damarien[28].beskrivning="När en person dött anlitas gråtare för att sörja den döde och hålla onda makter borta från likvakan. Även när fattiga och okända lik ska begravas kallas de ofta in, eftersom döda som begravs obegråtna sägs hemsöka sina begravningsplatser. De klär sig i askgrå kläder, skriker, gråter och släpper ut sorg och vånda. De sjunger även begravningshymner där de, beroende på den dödes tro, ber Daaks helgon att visa den döde nåd eller Dibuk att öppna dödsrikets portar för den bortgångne. De vindtroende gråtarna ber den mörka Östanvinden att föra den dödes själ till en god pånyttfödelse och att snart låta den lyckliga Västanvinden återvända till den dödes hus. Ofta förrättar de sitt värv utanför den avlidnes hem eller vandrar utefter stadens gator och skriker den dödes namn.";
	bakgrundstabeller.damarien[28].valfriatabellslag=1;
	bakgrundstabeller.damarien[28].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[28].expertispoang=2;
	
	bakgrundstabeller.damarien[29] = {};
	bakgrundstabeller.damarien[29].rubrik="Gränsvakt";
	bakgrundstabeller.damarien[29].beskrivning="Alltsedan Thamas Vitfjäder krossade sina fiender och erövrade den damariska kronan har han gjort vad han kunnat för att ta kontroll över rikets gränser. Den paranoide storfursten är ständigt vaksam, mot såväl smugglare som de fiender som i exil planerar hans fall och mot utländska kungars spioner. Vid storfurstendömets gränser och hamnar arbetar dessa hårdföra och skarpsynta soldater som systematiskt genomsöker resenärers packning och skeppens last. Trots hot om hårda straff är några av dem korrupta, men de flesta tror fullt och fast på sitt uppdrag som storfurstendömets beskyddare.";
	bakgrundstabeller.damarien[29].striderdrabbningar=1;
	bakgrundstabeller.damarien[29].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[29].stridsfardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[30] = {};
	bakgrundstabeller.damarien[30].rubrik="Gycklare";
	bakgrundstabeller.damarien[30].beskrivning="Enkla nöjen för enkla människor. Gycklare underhåller det vanliga folket med allehanda konster såsom akrobatik, jonglering, eldblåsning och eldslukning samt enklare fakirtrick. Många gycklare vandrar mellan städerna för att finna nya platser där folk ännu inte sett deras uppträdande och dessa uppmärksamma personer för med sig skvaller och nyheter från storfurstendömets alla hörn.";
	bakgrundstabeller.damarien[30].farderaventyr=1;
	bakgrundstabeller.damarien[30].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[30].kanneteckenpoang=2;
	
	
	bakgrundstabeller.damarien[31] = {};
	bakgrundstabeller.damarien[31].rubrik="Hamnarbetare";
	bakgrundstabeller.damarien[31].beskrivning="Nära botten av samhällets pyramid befinner sig hamnarbetarna och de utför den grova arbetsinsats som krävs för att stuva lasten på fartyg. De syns ständigt vandrande i hamnen, bärande på tunga säckar eller lårar. De är råbarkade typer med ytterst lite fritid som de gärna ägnar åt att dricka på billiga tavernor, ständigt beredda på slagsmål. Hamnarbetare vet ofta mycket om vad för last olika skepp och lagerbyggnader har i sina mörka utrymmen och för några extra stop öl på krogen blir de ofta benägna att berätta mer om lasten än dess ägare skulle vilja.";
	bakgrundstabeller.damarien[31].striderdrabbningar=1;
	bakgrundstabeller.damarien[31].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[31].expertispoang=2;
	
	bakgrundstabeller.damarien[32] = {};
	bakgrundstabeller.damarien[32].rubrik="Hantverkare";
	bakgrundstabeller.damarien[32].beskrivning="I städerna lever hantverkarna indelade i olika gillen. De mest inflytelserika hantverkarna är gillesmästare vilka anses vara några av stadens mäktigaste män som sitter på både rikligt med pengar och otaliga hantverkshemligheter. De som har lägst inflytande är lärlingar vilka under flera års tid får arbeta likt slavar åt någon av de andra medlemmarna i hopp om att lära sig värvet.";
	bakgrundstabeller.damarien[32].intrigerillgarningar=1;
	bakgrundstabeller.damarien[32].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[32].hantverkpoang=2;
	
	bakgrundstabeller.damarien[33] = {};
	bakgrundstabeller.damarien[33].rubrik="Hednapräst";
	bakgrundstabeller.damarien[33].beskrivning="Även om Daakkyrkan dominerar bland de rika och mäktiga är hedendomen och de gamla sederna fortfarande starka i stora delar av furstendömet, där de gamla gudarna alltjämt är starka. Allt från Jordmodern Leticias munkar och nunnor till havsguden Navares saltpräster och de mystiska månsystrarna lever och verkar i Damarien för att fungera som gudarnas språkrör. Ibland i perfekt harmoni med Daaks präster och de fem vindarnas munkar, och ibland låsta i dödlig, oförlåtande konflikt.";
	bakgrundstabeller.damarien[33].kunskapmysterier=1;
	bakgrundstabeller.damarien[33].mystikfardigheterenheter=4;
	bakgrundstabeller.damarien[33].kanneteckenpoang=2;
	
	bakgrundstabeller.damarien[34] = {};
	bakgrundstabeller.damarien[34].rubrik="Henrudit";
	bakgrundstabeller.damarien[34].beskrivning="Den heliga Henrudas orden är Damariens äldsta Daaktrogna klosterorden och följer sitt helgons exempel genom att med ord och lärdom ära Daak och Milargok Förkunnaren. Systrarna, som ofta är änkor från adeln eller rika borgarfamiljer, är en stor maktfaktor inom den damariska kyrkan och kontrollerar även de damariska kloster- och katedralskolorna där de rikas och mäktigas barn utbildas. Henruditerna har därför ofta stor makt och insyn i både adelns och kyrkans göromål och då orden utöver detta äger stora lantegendomar kan de normalt sett fredliga nunnorna vara mycket farliga fiender.";
	bakgrundstabeller.damarien[34].kunskapmysterier=1;
	bakgrundstabeller.damarien[34].mystikfardigheterenheter=4;
	bakgrundstabeller.damarien[34].kunskapsfardigheterenheter=4;
	
	bakgrundstabeller.damarien[35] = {};
	bakgrundstabeller.damarien[35].rubrik="Herde";
	bakgrundstabeller.damarien[35].beskrivning="På de damariska slätterna, floddalarna och bergssluttningarna vandrar stora skockar av får, svin och nötkreatur för att beta och äta upp sig inför vintern. Dessa djur övervakas och vallas av herdar, kvinnor och män som ibland tillbringar långa veckor i ensamhet långt borta från hemmets härd, ofta utan annat sällskap än sina carzimska väktarhundar. Herdarnas arbete är inte bara svårt, fattigt och ensamt, det kan även vara mycket farligt. Dels måste herden kunna vakta sina flockar mot rövare, boskapstjuvar och rovdjur. Dels kan många av dem även berätta gastkramande historier om de monster och skuggväsen som ensamma vallare ibland kunnat ana utanför lägereldens sken.";
	bakgrundstabeller.damarien[35].farderaventyr=1;
	bakgrundstabeller.damarien[35].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[35].hantverkpoang=2;
	
	bakgrundstabeller.damarien[36] = {};
	bakgrundstabeller.damarien[36].rubrik="Ikonmålare";
	bakgrundstabeller.damarien[36].beskrivning="Ikonmålarna är högt respekterade hantverkare som lärt sig den svåra och tidskrävande konsten att med pensel fånga en liten del av Daaks härlighet på trä och målarduk. Många ikonmålare håller hårt på yrkets hemligheter och det sägs att flera av de största mästarna endast målar efter att under timmar av intensiva böner och självspäkning ha nått direktkontakt med Daaks osynliga rike. Nästan alla Daaktrogna damarier har minst en helig bild i sitt hem mot vilka de riktar sina böner och rikets Daakkyrkor har ofta otaliga, rikt dekorerade bilder av Daak, helgonen och profeterna. Ikonmålarna är nästan alltid munkar och nunnor, och då ikonförsäljning är en stor inkomstkälla för klostren är det inte ovanligt att dessa girigt försöker göra sig av med konkurrenter.";
	bakgrundstabeller.damarien[36].intrigerillgarningar=1;
	bakgrundstabeller.damarien[36].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[36].hantverkpoang=2;
	
	bakgrundstabeller.damarien[37] = {};
	bakgrundstabeller.damarien[37].rubrik="Indrivare";
	bakgrundstabeller.damarien[37].beskrivning="Aggression, hotfullhet och ett respektingivande yttre är meriter hos indrivare i de lägre samhällsklasserna. Bland de mer förmögna är det vältalighet kryddad med dolda hot, skicklig dokumentation och en insikt i låntagarens tillgångar det som fungerar bäst. Deras roll är dock densamma – att utlånade pengar kommer tillbaka till sin ägare. Om detta löses med att fingrar bryts och tänder slås ut eller att affärer saboteras, familjer hotas och egendom bränns ned beror helt och hållet på situationen och summans storlek.";
	bakgrundstabeller.damarien[37].striderdrabbningar=1;
	bakgrundstabeller.damarien[37].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[37].stridsfardigheterenheter=4;
	
	bakgrundstabeller.damarien[38] = {};
	bakgrundstabeller.damarien[38].rubrik="Jordbrukare";
	bakgrundstabeller.damarien[38].beskrivning="Storfurstendömet hålls vid liv av de som sliter med att odla dess magra jordar. Dessa sår fälten, vallar boskapen och frambringar den stora mängd spannmål och kött som fraktas till städerna på oxdragna vagnar. Under svältår är livet på landet mycket hårt men när skörden är god lever många gott och de som är lite mer bemedlade kan hyra in arbetare som daglönare eller har backstugusittare som utför en del av arbetet.";
	bakgrundstabeller.damarien[38].farderaventyr=1;
	bakgrundstabeller.damarien[38].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[38].hantverkpoang=2;
	
	bakgrundstabeller.damarien[39] = {};
	bakgrundstabeller.damarien[39].rubrik="Jordesoldatens vittne";
	bakgrundstabeller.damarien[39].bestamd="vittnet";
	bakgrundstabeller.damarien[39].obestamd="ett Jordesoldatens vittne";
	bakgrundstabeller.damarien[39].pluralobestamd="Jordesoldatens vittnen";
	bakgrundstabeller.damarien[39].pluralbestamd="vittnena";
	bakgrundstabeller.damarien[39].beskrivning="Jordesoldatens vittnen är ett religiöst samfund som följer profeten Jordesoldatens läror om tapperhet, ärlighet, syskonskap och hårt arbete. Eftersom ordens medlemmar förkastar Daakkyrkans strikta hierarki har den förklarats kättersk av den jargiska moderkyrkan och rörelsens medlemmar, som inte tillåts ljuga om sin tro, jagas aktivt av inkvisitionen. I Damarien har rörelsen funnit en fristad och blivit populär bland hantverkare, soldater och andra Daaktroende som ser kyrkan som dekadent och korrupt.";
	bakgrundstabeller.damarien[39].farderaventyr=1;
	bakgrundstabeller.damarien[39].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[39].hantverkpoang=2;
	
	bakgrundstabeller.damarien[40] = {};
	bakgrundstabeller.damarien[40].rubrik="Jägare";
	bakgrundstabeller.damarien[40].beskrivning="I den damariska vildmarken lever dessa simpla människor på sin skicklighet med spjut, båge och fällor. Då och då reser de tillbaka till städerna eller byarna med hudar, kött eller hantverk i horn och ben. Vissa jägare arbetar ensamma men andra väljer att ansluta sig till jaktlag som tillsammans driver och fäller bytet.";
	bakgrundstabeller.damarien[40].farderaventyr=1;
	bakgrundstabeller.damarien[40].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[40].vildmarksfardigheterenheter=4;
	
	bakgrundstabeller.damarien[41] = {};
	bakgrundstabeller.damarien[41].rubrik="Kadarier";
	bakgrundstabeller.damarien[41].beskrivning="Kadarierna är en märklig och legendarisk yrkeskår, som lever långa perioder ute i vildmarken för att övervaka de halvtama häst- och boskapsflockar som betar på de damariska slätterna och dalgångarna. Kadarierna är även hedniska präster som ursprungligen fått sitt namn från hästarnas och fruktbarhetens gud Kadar. Även om många kadarier i verkligheten lever hårda, slitsamma och farliga liv har de långhåriga prästerna romantiserats enormt i den damariska kulturen, där de i otaliga sånger och sagor framställs som tappra frihetskämpar, underbara sångare och fantastiska älskare.";
	bakgrundstabeller.damarien[41].farderaventyr=1;
	bakgrundstabeller.damarien[41].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[41].hantverkpoang=2;
	
	bakgrundstabeller.damarien[42] = {};
	bakgrundstabeller.damarien[42].rubrik="Kartograf";
	bakgrundstabeller.damarien[42].beskrivning="Sedan Thamas erövring av Damariens tron har åtskilliga kartografer kallats till riket för att få ordning på dess otaliga små byar, gods, skogar och dalar. Dessutom skickas många kartografer i hemlighet till grannländer som Västmark och Soldarn för att med stor fara för sitt eget liv kartlägga rikenas vägar och terräng och deras duglighet för trupptransporter. Detta är sysslor som ställer höga krav på såväl hantverksskicklighet som matematisk noggrannhet och fysisk uthållighet.";
	bakgrundstabeller.damarien[42].farderaventyr=1;
	bakgrundstabeller.damarien[42].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[42].hantverkpoang=2;
	
	bakgrundstabeller.damarien[43] = {};
	bakgrundstabeller.damarien[43].rubrik="Konfiskatör";
	bakgrundstabeller.damarien[43].beskrivning="Ägodelar, varor och pengar på villovägar ska naturligtvis beslagtas och återbördas till sin rättmätiga ägare. Oftast rör det sig om någon form av egendom som stulits, förskingrats eller överlåtits till en ny ägare. En konfiskatör stödjer sig på en konfiskationsorder som utfärdats av någon av storfurstens tjänstemän och får normalt provision i efterhand – allt från en tiondel till hälften av godsets värde.";
	bakgrundstabeller.damarien[43].intrigerillgarningar=1;
	bakgrundstabeller.damarien[43].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[43].socialafardigheterenheter=4;
	
	bakgrundstabeller.damarien[44] = {};
	bakgrundstabeller.damarien[44].rubrik="Kristallvigd";
	bakgrundstabeller.damarien[44].bestamd="den kristallvigde";
	bakgrundstabeller.damarien[44].pluralobestamd="kristallvigda";
	bakgrundstabeller.damarien[44].pluralbestamd="de kristallvigda";
	bakgrundstabeller.damarien[44].beskrivning="Kristallorden är ett urgammalt och inflytelserik hedniskt sällskap vars medlemmar ser det som sin plikt att försvara de gamla gudarnas anhängare i Damarien mot verkliga och inbillade hot. Orden är känd för sina årliga korståg mot vindmunkarna, men förföljer även fedaker och Daaks missionärer. De flesta kristallvigda är enkelt folk med vanliga arbeten som öppet eller i hemlighet underkastar sig en hednapräst och ingår i ett av de sällskap som kallas fratages.";
	bakgrundstabeller.damarien[44].striderdrabbningar=1;
	bakgrundstabeller.damarien[44].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[44].kanneteckenpoang=2;

	bakgrundstabeller.damarien[45] = {};
	bakgrundstabeller.damarien[45].rubrik="Kunskapare";
	bakgrundstabeller.damarien[45].beskrivning="I tjänst åt någon uppsatt, vanligen någon inom kyrkan, någon av adelsätterna, ett handelshus eller kanske till och med ett främmande rike spionerar kunskaparen på sina mål och sänder tillbaka detaljerade rapporter om vad som pågår. En del kunskapare är inte mer än tjänare som får några extra guld genom att berätta vad dennes herrar har för sig medan andra kunskapare har tränats i sitt värv sedan barnsben.";
	bakgrundstabeller.damarien[45].intrigerillgarningar=1;
	bakgrundstabeller.damarien[45].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[45].socialafardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[46] = {};
	bakgrundstabeller.damarien[46].rubrik="Kurirryttare";
	bakgrundstabeller.damarien[46].beskrivning="Nyheter färdas långsamt i ett land som Damarien, där vägar ofta är illa underhållna och resenärer riskerar att angripas av fredlösa och monster. När bud måste skickas med hast eller nyheter måste spridas till rikets alla invånare sänds kurirryttare mellan städerna. De spikar upp plakat, levererar sigillförseglade brev och viskar kodade budskap till utvalda personer. Så gott som alla stora släkter har egna kurirryttare, likaså kyrkan, Kristallorden och vindmunkarnas kloster.";
	bakgrundstabeller.damarien[46].farderaventyr=1;
	bakgrundstabeller.damarien[46].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[46].vildmarksfardigheterenheter=4;
	
	bakgrundstabeller.damarien[47] = {};
	bakgrundstabeller.damarien[47].rubrik="Kvädare";
	bakgrundstabeller.damarien[47].beskrivning="Från de största borgarna till den enklaste trälstuga sjunger och berättar damarierna sånger, sagor och poesi. En skicklig sagoberättare är ett måste för varje respektabel ståndsperson och en skicklig kvädare med gott minne och vacker röst kan ofta leva väl på att vandra mellan byar och herresäten. Men det är långt ifrån ett farofritt värv, en missnöjd publik eller en adelsman som tror att någon av sagorna driver med honom kan leda till allt från bombardering med rutten frukt till ett fall från slottsmurarna.";
	bakgrundstabeller.damarien[47].farderaventyr=1;
	bakgrundstabeller.damarien[47].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[47].kanneteckenpoang=2;
	
	bakgrundstabeller.damarien[48] = {};
	bakgrundstabeller.damarien[48].rubrik="Köpman";
	bakgrundstabeller.damarien[48].beskrivning="Köpmannen säljer, byter och köper varor och försöker pressa fram så stor vinst som det bara är möjligt. Djärva chanstagningar, försenade leveranser eller mördande konkurrens kan helt slå ut en köpman. Damariens hamnar är en lockande men farlig marknad för många köpmän, ty där kan storfurstens plötsliga infall eller plundrande pirater när som helst förvandla lycka till undergång.";
	bakgrundstabeller.damarien[48].intrigerillgarningar=1;
	bakgrundstabeller.damarien[48].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[48].socialafardigheterenheter=4;
	
	bakgrundstabeller.damarien[49] = {};
	bakgrundstabeller.damarien[49].rubrik="Lamiakultist";
	bakgrundstabeller.damarien[49].beskrivning="Damarien är ett rike som allt sedan sin födelse legat under de vandödas skugga och otaliga är sagorna om de bleka vampyrer som sägs stryka runt nattetid och tömma människor på blod. De är väsen som förkastat Daak men genom mörk magi vunnit skönhet, ofantlig styrka och evigt liv. Runt om i storfurstendömet existerar alltjämt kulter som dyrkar dessa varelser i svarta mässor och blodsriter i hopp om att få del av deras makt och kanske slutligen vinna odödlighetens gåva.";
	bakgrundstabeller.damarien[49].kunskapmysterier=1;
	bakgrundstabeller.damarien[49].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[49].expertispoang=2;
	
	bakgrundstabeller.damarien[50] = {};
	bakgrundstabeller.damarien[50].rubrik="Legosoldat";
	bakgrundstabeller.damarien[50].beskrivning="De krigare som inte ansluter sig till storfurstens armé blir ofta legosoldater. Vissa är före detta soldater som valt att gå sin egen väg medan andra värvas direkt som unga män för att slåss i ett förband. Legosoldater reser land och rike runt för att slåss för dem som betalar bäst.";
	bakgrundstabeller.damarien[50].striderdrabbningar=1;
	bakgrundstabeller.damarien[50].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[50].vildmarksfardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[51] = {};
	bakgrundstabeller.damarien[51].rubrik="Livegen";
	bakgrundstabeller.damarien[51].bestamd="den livegne"
	bakgrundstabeller.damarien[51].pluralobestamd="livegna"
	bakgrundstabeller.damarien[51].pluralbestamd="de livegna"
	bakgrundstabeller.damarien[51].beskrivning="De allra flesta av Damariens folk är livegna bönder som sliter hårt på någon furstes mark och som ses som föga mer än boskap av sina herrar. Även om en livegen inte kan säljas som en slav är de förbjudna att lämna sin jord utan sin herres tillåtelse och många av dem lever korta och hårda liv där de aldrig ser mer än sin egen hemby. Många livegna har levt hela sina liv på detta sätt, men andra tvingas in i detta tillstånd på grund av obetalda skulder eller fattigdom. Under Thamas har lagarna som reglerar de livegna skärpts, men många av dem stödjer ändå storfursten som anses ha gjort slut på krigen och många av de värsta övergreppen från giriga småfurstar.";
	bakgrundstabeller.damarien[51].farderaventyr=1;
	bakgrundstabeller.damarien[51].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[51].valfriaenheter=4;
	
	bakgrundstabeller.damarien[52] = {};
	bakgrundstabeller.damarien[52].rubrik="Livvakt";
	bakgrundstabeller.damarien[52].beskrivning="Dödens skugga vilar ständigt över Damariens rika och mäktiga och de som har råd håller sig därför nästan alltid med livvakter av något slag. Livvakterna kan komma från många olika bakgrunder, ibland stammar de från familjer som sedan generationer tillbaka visat sin lojalitet mot sina härskare, men ibland rör det sig om tillfälligt anställda äventyrare eller legoknektar. En god livvakt förväntas om så är nödvändigt dö för sin arbetsgivare, men till största delen består deras arbete av att försöka planera sin herres vardag på ett sådant sätt att sådana offer blir onödiga.";
	bakgrundstabeller.damarien[52].striderdrabbningar=1;
	bakgrundstabeller.damarien[52].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[52].valfriaenheter=4;
	
	bakgrundstabeller.damarien[53] = {};
	bakgrundstabeller.damarien[53].rubrik="Månsyster";
	bakgrundstabeller.damarien[53].pluralobestamd="månsystrar";
	bakgrundstabeller.damarien[53].beskrivning="Under mörka nätter då landet badar i månens bleka sken samlas månsystrarna, grupper av hedningar som tillber de kvinnliga makterna genom extatiska danser och mystiska riter. Många av dem sägs ha skådat både andevärlden och Skugglandet och de sägs ha givits maken att både välsigna och förbanna vänner och fiender. Många damarier vänder sig även till de örtkunniga mystikerna för att bota de sjuka, men även för giftdekokter, kärleksbrygder och fosterfördrivning.";
	bakgrundstabeller.damarien[53].kunskapmysterier=1;
	bakgrundstabeller.damarien[53].kunskapsfardigheter=4;
	bakgrundstabeller.damarien[53].rorelsefardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[54] = {};
	bakgrundstabeller.damarien[54].rubrik="Lurendrejare";
	bakgrundstabeller.damarien[54].beskrivning="Lurendrejaren tjänar sitt dagliga bröd genom att bedra sina medmänniskor och har med tiden utvecklat taskspel och bluffmakeri till en konstform oavsett om det rör sig om en charmör som sol-och-vårar ensamma ädlingar deras pengar eller en hänsynslös kvacksalvare som lurar av desperata sjuklingar deras sista slantar i utbyte mot verkningslösa kurer. Denna karriär kräver ett slipat munläder och en förmåga att snabbt försvinna och ligga lågt tills nästa möjlighet öppnar sig om någon börjar ställa obekväma frågor.";
	bakgrundstabeller.damarien[54].intrigerillgarningar=1;
	bakgrundstabeller.damarien[54].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[54].expertispoang=2;
	
	bakgrundstabeller.damarien[55] = {};
	bakgrundstabeller.damarien[55].rubrik="Lönnmördare";
	bakgrundstabeller.damarien[55].beskrivning="I Damarien är det inte ovanligt att oönskade personer undanröjs genom lönnmord. Det kan röra sig om allt från brutala knivskärare i hamnkvarteren till subtila giftmördare vid hovet. Vissa lönnmördare arbetar åt storfursten, andra åt någon av de mäktigaste släkterna eller handelshusen. Dibuks barn har en grupp som kallas Dibuks fingrar medan vindmunkarna har lönnmördare i sitt sällskap Östanvindens skuggor. De professionella mördarna fungerar även som livvakter, rådgivare och som skydd mot andra lönnmördare.";
	bakgrundstabeller.damarien[55].intrigerillgarningar=1;
	bakgrundstabeller.damarien[55].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[55].stridsfardigheterenheter=4;
	
	bakgrundstabeller.damarien[56] = {};
	bakgrundstabeller.damarien[56].rubrik="Medikus";
	bakgrundstabeller.damarien[56].pluralobestamd="medikusar";
	bakgrundstabeller.damarien[56].beskrivning="När folk blir sjuka, ben måste spjälkas och sår måste sys tillkallas en medikus. Denne specialiserar sig på kroppens mysterier och hur man botar åkommor genom åderlåtning, beska dekokter och stinkande salvor. Kunskapen om hur man når balans i kroppens vätskor gör dessa individer mycket respekterade.";
	bakgrundstabeller.damarien[56].kunskapmysterier=1;
	bakgrundstabeller.damarien[56].kunskapsfardigheter=4;
	bakgrundstabeller.damarien[56].vildmarksfardigheterenheter=4;
	
	bakgrundstabeller.damarien[57] = {};
	bakgrundstabeller.damarien[57].rubrik="Munskänk";
	bakgrundstabeller.damarien[57].pluralobestamd="munskänkar";
	bakgrundstabeller.damarien[57].beskrivning="Ju högre status en damarier kunnat kämpa sig till desto fler fiender får hon och förgiftning är en dödsorsak som är allt för vanlig hos de rika. Munskänkar är personer med mycket känsliga smaklökar som tränats i att upptäcka gifter i mat och dryck. Genom att äta en stund innan sin herre kan de utveckla förgiftningssymptom innan herren ens smakar maten. Dessa personer befinner sig mitt bland de högre stånden och har en inblick i många av de göromål som sker där.";
	bakgrundstabeller.damarien[57].intrigerillgarningar=1;
	bakgrundstabeller.damarien[57].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[57].expertispoang=2;
	
	bakgrundstabeller.damarien[58] = {};
	bakgrundstabeller.damarien[58].rubrik="Mästerinformatör";
	bakgrundstabeller.damarien[58].beskrivning="Ett av storfurstens mest fruktade maktinstrument är de kunskapare, angivare och spioner som är organiserade i samfundet \"Kronans mästerinformatörer\", i folkmun kallat \"Nattmarorna\". Även om underrättelsetjänsten inte är stor är dess ledare mästare på psykologisk krigföring och det sägs att de ibland använder sig av magiska hjälpmedel för att spionera på och mörda sina motståndare. De flesta av dess medlemmar är låga agenter som endast ska rapportera rykten de hör uppåt i hierarkin, medan andra är professionella lönnmördare eller torterare, några av dem besitter till och med magiska och ockulta kunskaper.";
	bakgrundstabeller.damarien[58].intrigerillgarningar=1;
	bakgrundstabeller.damarien[58].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[58].socialafardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[59] = {};
	bakgrundstabeller.damarien[59].rubrik="Nattgardist";
	bakgrundstabeller.damarien[59].beskrivning="Vad som började som Thamas personliga livvakt utvecklades snart till storfurstens obarmhärtiga, hatade och fruktade elitstyrka, obändigt lojala till storfursten och drottningen och som med en blandning av våld, skräck och stenhård disciplin säkrat kronan på Thamas huvud. Nattgardisterna har alla personligen valts ut av storfursten, fått riddarslaget av honom och har i folkmun kommit att få öknamnet \"Mörkerhundarna\". Orden är känd för sin förkärlek för att slå till mot storfurstens fiender om natten och medlemskap i sällskapet är en utmärkt väg till makt och inflytande vid hovet i Targus.";
	bakgrundstabeller.damarien[59].intrigerillgarningar=1;
	bakgrundstabeller.damarien[59].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[59].vildmarksfardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[60] = {};
	bakgrundstabeller.damarien[60].rubrik="Ockrare";
	bakgrundstabeller.damarien[60].beskrivning="Guld och silver flödar genom storfurstendömets städer och de som inga pengar har kan inte komma långt. Ockrarna är personer som har en egen förmögenhet och som gärna lånar ut en summa mot en riklig ränta. Det finns alltid de som vill göra affärer, behöver en medikus eller måste betala av en skuld. Om inte pengarna kommer tillbaka i tid tvingas ockraren ta hjälp av indrivare för att skydda sin investering.";
	bakgrundstabeller.damarien[60].intrigerillgarningar=1;
	bakgrundstabeller.damarien[60].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[60].valfriaenheter=4;
	
	bakgrundstabeller.damarien[61] = {};
	bakgrundstabeller.damarien[61].rubrik="Pilgrim";
	bakgrundstabeller.damarien[61].beskrivning="Allt från de enklaste bönder till de mäktigaste adelsmän ger sig ibland ut på pilgrimsresor, obeväpnade och i enkla kläder, för att få förlåtelse för sina synder, gudarnas välsignelse eller för att vinna insikt i de gudomliga mysterierna. De Daaktroende vandrar ibland till katedralerna i Targus eller Hammarnäset eller hela den långa, farliga vägen till Tibara i kejsardömet via Skymningsvägen. Nästan alla vindtroende försöker minst en gång i livet bege sig till Det vita klostret och många hedningar vandrar till de heliga platserna i Tallveden, Kristalltemplet eller något av Jordmoderns kloster.";
	bakgrundstabeller.damarien[61].farderaventyr=1;
	bakgrundstabeller.damarien[61].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[61].vildmarksfardigheterenheter=4;
	
	bakgrundstabeller.damarien[62] = {};
	bakgrundstabeller.damarien[62].rubrik="Pirat";
	bakgrundstabeller.damarien[62].beskrivning="Från Piratöarna i söder till Mirrons mörka bakgator eller Purpurhavets otaliga öar härjar laglösa pirater och sjörövare. Dessa brutala män och kvinnor lever på att plundra skepp och ibland även kustbosättningar. De flesta pirater lever i små besättningar eller i (tätt sammansvetsade) klaner om de är tiraker, men på senare år har de religiösa fanatikerna i bandet Okurerna växt sig allt större. Vissa piratkaptener har lyckats få officiella kaparbrev av någon makthavare och kan då med deras välsignelse attackera skepp från fiendenationer.";
	bakgrundstabeller.damarien[62].striderdrabbningar=1;
	bakgrundstabeller.damarien[62].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[62].kanneteckenpoang=2;
	
	bakgrundstabeller.damarien[63] = {};
	bakgrundstabeller.damarien[63].rubrik="Prisjägare";
	bakgrundstabeller.damarien[63].beskrivning="Några använder sina kontakter och sitt skarpsinne, andra en sällan skådad våldsamhet, men i slutändan är prisjägarens enda mål att fånga in misstänkta brottslingar och upprorsmän och föra dem inför storfurstens domare för att dömas. Arresteringsorder spikas upp på väggar vid stadsportar eller läses upp av utropare och ju farligare byte och grövre brott desto mer silver kan de inbringa.";
	bakgrundstabeller.damarien[63].striderdrabbningar=1;
	bakgrundstabeller.damarien[63].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[63].stridsfardigheterenheter=4;
	
	bakgrundstabeller.damarien[64] = {};
	bakgrundstabeller.damarien[64].rubrik="Protektor";
	bakgrundstabeller.damarien[64].beskrivning="Det finns många värdefulla saker som behöver skyddas; personer, egendomar och föremål. En protektor har till uppgift att mot betalning vaka över dessa och ta till vapen om så skulle krävas. En del agerar som livvakter till bortskämda ädlingar, andra bär och skyddar familjens sigillstämplar och vissa är anställda av handelshus för att se till att lasten kommer fram orörd.";
	bakgrundstabeller.damarien[64].striderdrabbningar=1;
	bakgrundstabeller.damarien[64].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[64].stridsfardigheterenheter=4;
	
	bakgrundstabeller.damarien[65] = {};
	bakgrundstabeller.damarien[65].rubrik="Samarit";
	bakgrundstabeller.damarien[65].beskrivning="Storfurstendömet är en obarmhärtig plats och den som inte kan hålla sig på fötter trampas ned. Gamla personer dör ensamma i sina stugor, sjuka dukar under i feberfrossor och spädbarn skriker av hunger. Det finns dock de som svurit sina liv åt att bistå sjuka, lytta och modfällda även om de inte kan betala för sig. Dessa barmhärtiga människor finner man bland alla samhällsklasser, till och med på de mest oväntade ställen.";
	bakgrundstabeller.damarien[65].valfriatabellslag=1;
	bakgrundstabeller.damarien[65].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[65].valfriaenheter=4;
	
	bakgrundstabeller.damarien[66] = {};
	bakgrundstabeller.damarien[66].rubrik="Sebaelit";
	bakgrundstabeller.damarien[66].beskrivning="Krigarmunkarna i S:t Sebaels orden har vigt sina liv åt att skydda det damariska folket mot monster, svartkonstnärer och kättare. Även om orden är en blek skugga av den jargiska inkvisitionen är Sebaeliterna fruktade och respekterade av många damarier och bröderna har ofta kommit att samarbeta med hedningar och trollkarlarna i Santimarexorden för att besegra ännu värre hot mot människornas själar.";
	bakgrundstabeller.damarien[66].kunskapmysterier=1;
	bakgrundstabeller.damarien[66].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[66].stridsfardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[67] = {};
	bakgrundstabeller.damarien[67].rubrik="Sjöfarare";
	bakgrundstabeller.damarien[67].beskrivning="Saltet, brisen, måsarnas skratt och strömmarnas nyckfullhet. Ingenting går upp mot att möta soluppgången på ett majestätiskt fartyg, högt uppe i riggen med en bit skeppsskorpa i ena handen och en flaska rom i den andra. Sjöfararna reser vida kring i sina gungande borgar. Det är dock ett farligt värv; på mörka vatten hopas stormar och orkaner som kan slita de största skeppen i stycken. Djupt under ytan ligger monster och sjöodjur vilande i väntan på att ett lämpligt mål med mat ska råka segla förbi.";
	bakgrundstabeller.damarien[67].farderaventyr=1;
	bakgrundstabeller.damarien[67].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[67].vildmarksfardigheterenheter=4;
	
	bakgrundstabeller.damarien[68] = {};
	bakgrundstabeller.damarien[68].rubrik="Skarprättare";
	bakgrundstabeller.damarien[68].beskrivning="De damariska skarprättarna är både fruktade, avskydda och respekterade. Medan bödlarna i många andra riken utgörs av benådade fångar eller kriminella så är de damariska mästermännen högt tränade och välbetalda hantverkare, vars titel ofta går i arv från far till son. Detta beror bland annat på att avrättningar inom det drakoniska damariska rättssystemet ofta är både hantverksmässigt och tekniskt avancerade historier som kräver god hand med verktyg och kunskap om den mänskliga kroppen. Likväl går de flesta damarier ur vägen när de ser den svartklädde mästermannen komma gående på stadens gator tillsammans med sina rackare.";
	bakgrundstabeller.damarien[68].striderdrabbningar=1;
	bakgrundstabeller.damarien[68].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[68].hantverkpoang=2;
	
	
	bakgrundstabeller.damarien[69] = {};
	bakgrundstabeller.damarien[69].rubrik="Skogvaktare";
	bakgrundstabeller.damarien[69].beskrivning="I djupet av de mörka damariska skogarna vandrar skogvaktarna, män och kvinnor som arbetar för adeln och storfursten med att stoppa tjuvjägare och vedtjuvar. Skogvaktarens yrke kan vara ytterst riskabelt, då våldsamma konfrontationer med stråtrövare, fredlösa, monster och alver är en del av vardagen. Många skogvaktare är härdade krigare med stor vildmarksvana och respekt för de fasor och hemligheter som gömmer sig i skogarnas djup.";
	bakgrundstabeller.damarien[69].farderaventyr=1;
	bakgrundstabeller.damarien[69].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[69].vildmarksfardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[70] = {};
	bakgrundstabeller.damarien[70].rubrik="Skrivare";
	bakgrundstabeller.damarien[70].beskrivning="Med bläckstänk på sina fingrar, en fjäderpenna i sitt grepp och böjd rygg fyller de ark efter ark med text. Skrivare finns överallt i storfurstendömet. Många arbetar som tjänstemän i byråkratin, andra skapar vackra kopior av kända böcker eller skriver ned order från militärer, handelsfurstar eller adelsmän. Då de skriver av och kopierar många texter och böcker besitter de ofta en bred kunskap om många olika ämnen och vissa har en insikt i affärer som inte bör bli allmänt kända.";
	bakgrundstabeller.damarien[70].intrigerillgarningar=1;
	bakgrundstabeller.damarien[70].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[70].sprakenheter=2;
	
	
	bakgrundstabeller.damarien[71] = {};
	bakgrundstabeller.damarien[71].rubrik="Skulptör";
	bakgrundstabeller.damarien[71].beskrivning="De finns de som vigt sina liv åt att forma stenen och skapa vackra och imponerande konstverk. Dvärgar har en fallenhet för denna konstform och Helm var innan stadens fördärv känd över stora delar av Mundana för sina skickliga stenhuggare. Vissa konstverk är så sköna eller skräckinjagande att deras blotta existens gett upphov till rykten om vissa skulptörers makt att till och med ge sina skapelser liv.";
	bakgrundstabeller.damarien[71].intrigerillgarningar=1;
	bakgrundstabeller.damarien[71].valfriaenheter=4;
	bakgrundstabeller.damarien[71].hantverkpoang=2;
	
	bakgrundstabeller.damarien[72] = {};
	bakgrundstabeller.damarien[72].rubrik="Sköka";
	bakgrundstabeller.damarien[72].beskrivning="Lust, passion och frestelse fördöms av kyrkan och de som mot betalning utför dessa tjänster är bespottade av så gott som alla. Men lidelsen och lusten genomsyrar hela storfurstendömet och tvingar män och kvinnor som saknar andra medel att sälja sina kroppar för att klara dagen. Det är ett farligt värv där man riskerar att drabbas av sjukdomar, våldsamma kunder och för kvinnorna även oönskade graviditeter.";
	bakgrundstabeller.damarien[72].intrigerillgarningar=1;
	bakgrundstabeller.damarien[72].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[72].expertispoang=2;
	
	
	bakgrundstabeller.damarien[73] = {};
	bakgrundstabeller.damarien[73].rubrik="Smugglare";
	bakgrundstabeller.damarien[73].beskrivning="Att frakta varor genom Damarien eller till andra länder utan rätt papper är en omöjlighet och även om man har dessa försvinner mycket av vinsten i tull, mutor och skatter. Smugglaren ser till att frakta varor utan att någon får reda på det. En del leder mindre karavaner genom obygden, har dolda utrymmen i sina vagnar och de mest framgångsrika hela skepp fyllda med smuggelgods.";
	bakgrundstabeller.damarien[73].farderaventyr=1;
	bakgrundstabeller.damarien[73].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[73].vildmarksfardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[74] = {};
	bakgrundstabeller.damarien[74].rubrik="Soldat";
	bakgrundstabeller.damarien[74].beskrivning="Innan Thamas erövring av Damarien hade varje furstendöme och adelsfamilj sina egna styrkor, men efter att storfursten krossade de flesta av sina fiender har en gemensam armé, lojal endast till honom, börjat byggas upp. Tusentals unga damarier har tagits in till armén, ibland frivilligt och ibland med tvång, och tränas hårt på storfurstens slott i Targus och Hammarnäset. En soldats liv är ofta hårt och inramat, men många känner en starkt samhörighet och lojalitet mot härskaren som de i slutändan känner har givit dem och deras familjer ett bättre och tryggare liv.";
	bakgrundstabeller.damarien[74].striderdrabbningar=1;
	bakgrundstabeller.damarien[74].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[74].valfriaenheter=4;
	
	bakgrundstabeller.damarien[75] = {};
	bakgrundstabeller.damarien[75].rubrik="Spelare";
	bakgrundstabeller.damarien[75].beskrivning="Spelare finns i alla delar av samhället och en del är inget annat än smutsiga trashankar som pantsätter sina skor i hoppet om att vinna en handfull mynt. Andra är rika ädlingar som över dyra viner tömmer familjens skattkistor, spelar bort tillgångar, hästar och skepp. För en spelare är det få saker som inte kan satsas på ett djärvt tärningskast.";
	bakgrundstabeller.damarien[75].intrigerillgarningar=1;
	bakgrundstabeller.damarien[75].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[75].socialafardigheterenheter=4;
	
	
	
	bakgrundstabeller.damarien[76] = {};
	bakgrundstabeller.damarien[76].rubrik="Spindelsierska";
	bakgrundstabeller.damarien[76].beskrivning="Den urgamla spådomskonsten att läsa framtiden i spindlars rörelser över magiska tecken kallas \"arachnomanti\" och har utövats i Damarien sedan urminnes tider. Konsten har hedniska rötter och kopplas till Modern Arachna, spindelgudinnan som spinner ödets väv och anses kommunicera sina önskningar via sina åttabenta döttrar. Trots Daakkyrkans uttryckliga fördömanden besöker många damarier, hög som låg, ofta i hemlighet spindelsierskorna för att få råd från den nyckfulla ödesgudinnan i livets svåra stunder.";
	bakgrundstabeller.damarien[76].kunskapmysterier=1;
	bakgrundstabeller.damarien[76].mystikfardigheterenheter=4;
	bakgrundstabeller.damarien[76].valfriaenheter=4;

	bakgrundstabeller.damarien[77] = {};
	bakgrundstabeller.damarien[77].rubrik="Stadsvakt";
	bakgrundstabeller.damarien[77].beskrivning="Stadsportarna ska vaktas, handelsmännens varor ska sökas igenom, fyllebråk ska stoppas, det ska hållas utkik efter eldsvådor och brottslingar arresteras. Stadsvakten känner till varje gränd, varje bakgata, kommer ihåg ansiktena på de vanliga handelsmännen och har alltid ett öga på dem som tycks sticka ut. En del tar allvarligt på att hålla ordning i staden, andra ser det som en god position att ta mutor och är inte mycket mer än brottslingar med befogenheter.";
	bakgrundstabeller.damarien[77].striderdrabbningar=1;
	bakgrundstabeller.damarien[77].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[77].stridsfardigheterenheter=4;

	bakgrundstabeller.damarien[78] = {};
	bakgrundstabeller.damarien[78].rubrik="Straffånge";
	bakgrundstabeller.damarien[78].beskrivning="Dessa olyckliga kvinnor och män har drabbats av den obarmhärtiga damariska rättvisan men \"benådats\" av storfursten och fått sina dödsdomar omvandlade till slaveri och straffarbete. Många straffångar slutar sina dagar på något av de många stenbrotten eller borgbyggena på Vaktö eller vid Krylons stränder, som soldater i straffregementen eller som roddare på storfurstens galärer. Ett fåtal lyckliga slutar som sekreterare eller bokförare, men inte ens de undkommer de vanprydande brännmärkningar som i resten av livet visar att de är brottslingar och slavar under kronan.";
	bakgrundstabeller.damarien[78].intrigerillgarningar=1;
	bakgrundstabeller.damarien[78].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[78].kanneteckenpoang=2;

	
	bakgrundstabeller.damarien[79] = {};
	bakgrundstabeller.damarien[79].rubrik="Stråtrövare";
	bakgrundstabeller.damarien[79].beskrivning="Med vägarna tungt trafikerade av resande människor är det inte konstigt att vissa valt att tjäna sitt leverne på att råna och stjäla från andra. Med utrustning och vapen i varierande kvalitet lägger de sig i bakhåll och anfaller när offren minst anar det. En del rövarband består bara av två till tre individer medan andra kan bli upp mot tjugo och trettio. Dessa kan till och med anfalla större mål såsom en av kronans transporter eller ett förnämt rikemansfölje med beväpnad eskort.";
	bakgrundstabeller.damarien[79].farderaventyr=1;
	bakgrundstabeller.damarien[79].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[79].vildmarksfardigheterenheter=4;

	
	bakgrundstabeller.damarien[80] = {};
	bakgrundstabeller.damarien[80].rubrik="Tandsmed";
	bakgrundstabeller.damarien[80].beskrivning="Soldater får sina tänder utslagna, ädlingars garnityr drabbas av röta efter för mycket sötsaker och kyrkans män gnisslar tänder i sömnen över all synd som begås. Tandsmeden är den som ser över detta. De mest välbärgade har mottagningar i de största städerna, där ersätter de förlorade tänder med guld eller silver. De fattiga tandsmederna reser mellan byar och drar ut tänder med grova tänger.";
	bakgrundstabeller.damarien[80].valfriatabellslag=1;
	bakgrundstabeller.damarien[80].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[80].hantverkpoang=2;

	bakgrundstabeller.damarien[81] = {};
	bakgrundstabeller.damarien[81].rubrik="Tiggare";
	bakgrundstabeller.damarien[81].beskrivning="Med utsträckta händer sträcker sig smutsiga, utmärglade och trasklädda gestalter mot dem som har pengar och ber om att få några silver så de kan få mat för dagen. Har de tur passerar förmögna som delar ut allmosor, andra gånger jagar stadsvakten bort dem med sparkar och slag. I vissa städer får tiggarna särskilda tiggarbrickor som de syr fast på sina kläder eller har i ett band runt halsen för att visa att de har rätten att be om allmosor.";
	bakgrundstabeller.damarien[81].farderaventyr=1;
	bakgrundstabeller.damarien[81].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[81].kanneteckenpoang=2;

	bakgrundstabeller.damarien[82] = {};
	bakgrundstabeller.damarien[82].rubrik="Tjuv";
	bakgrundstabeller.damarien[82].rubrik="tjuvar";
	bakgrundstabeller.damarien[82].beskrivning="Högt ovan hustaken och långt ner i stadens mörkaste vrår är det inte stadsvakten, prästerskapet, adeln eller köpmännen som regerar. Här lever tjuvarna på att ta från allt och alla som inte håller tillräckligt god uppsyn över sina fickor och hus.";
	bakgrundstabeller.damarien[82].intrigerillgarningar=1;
	bakgrundstabeller.damarien[82].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[82].vildmarksfardigheterenheter=4;

	
	bakgrundstabeller.damarien[83] = {};
	bakgrundstabeller.damarien[83].rubrik="Tjänsteman";
	bakgrundstabeller.damarien[83].beskrivning="Thamas Vitfjäder har sedan sitt trontillträde jobbat outtröttligt för att skapa ett centraliserat rike med enade lagar och en gemensam administration. Den nya tidens grevar, hertigar och godsherrar och andra makthavare är tjänstemän utvalda bara för sin kompetens och lojalitet mot storfursten. De är administratörer, bokförare och övervakare av fogdar och lägre tjänstemän. Även om tjänstemannatitlar ger stor makt är det även en mycket farlig karriärväg, fylld av intriger, där man ständigt måste vara uppmärksam både på storfurstens fiender och på konkurrenter som vill röja en ur vägen.";
	bakgrundstabeller.damarien[83].intrigerillgarningar=1;
	bakgrundstabeller.damarien[83].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[83].socialafardigheterenheter=4;

	
	bakgrundstabeller.damarien[84] = {};
	bakgrundstabeller.damarien[84].rubrik="Torterare";
	bakgrundstabeller.damarien[84].beskrivning="Damarien är fyllt av hemligheter som måste avslöjas och personer som måste straffas. Torterarens roll är att bryta sönder ett mänskligt psyke och tvinga fram erkännanden eller sarga offer till oigenkännlighet. I dunkla valv pressas glödgade tänger mot bar hud, lemmar slits ur led och piskor sargar kroppar. Torterare är vanligen anlitade av armén, stadsvakten, brottsorganisationer eller rika släkter. De som blir torterare är oftast kallhamrade individer eller personer som finner en stor njutning i sitt värv.";
	bakgrundstabeller.damarien[84].intrigerillgarningar=1;
	bakgrundstabeller.damarien[84].valfriaenheter=4;
	bakgrundstabeller.damarien[84].expertispoang=2;

	bakgrundstabeller.damarien[85] = {};
	bakgrundstabeller.damarien[85].rubrik="Ungtupp";
	bakgrundstabeller.damarien[85].pluralobestamd="ungtuppar";
	bakgrundstabeller.damarien[85].beskrivning="Ivenagallos, Ungtupparna, kallas en grupp av unga, ogifta officerare och adelsmän (samt enstaka -kvinnor). De tillbringar sin fritid med att spatsera runt i Damariens städer klädda i det senaste modet från Lemira och Consaber och mäta sin status mot varandra i ständiga dueller över inbillade och verkliga ärekränkningar. Även om både storfursten och kyrkan ser denna livsstil som dekadent och omoralisk uppmuntras den ofta mer eller mindre av äldre adelsmän och befäl, som knappt betraktar ungdomarna som vuxna innan de ådragit sig ett par duellärr.";
	bakgrundstabeller.damarien[85].intrigerillgarningar=1;
	bakgrundstabeller.damarien[85].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[85].socialafardigheterenheter=4;

	
	bakgrundstabeller.damarien[86] = {};
	bakgrundstabeller.damarien[86].rubrik="Upprorsmakare";
	bakgrundstabeller.damarien[86].beskrivning="I mörka skogar, i borgar högt uppe bland bergen, i städernas slum och bortom Damariens gränser samlas de som önskar se Thamas Envåldshärskaren och dennes grymma regim störtad en gång för alla. Med alla medel försöker de värva alla från fattiga damariska livegna till utländska furstar i sin kamp mot tyrannen, allt medan de obarmhärtigt och oupphörligt jagas av storfurstens lakejer.";
	bakgrundstabeller.damarien[86].striderdrabbningar=1;
	bakgrundstabeller.damarien[86].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[86].stridsfardigheterenheter=4;


	
	bakgrundstabeller.damarien[87] = {};
	bakgrundstabeller.damarien[87].rubrik="Utkastare";
	bakgrundstabeller.damarien[87].beskrivning="När ett fyllebråk urartar och ett vänskapligt handgemäng övergår till sparkar och kanske dragna vapen behövs det någon som kan sära på de inblandade och ge dem alla en kraftig spark mot dörren. Detta är utkastarens jobb. Om det inte vore för dessa individer skulle många krogar snart vara i spillror.";
	bakgrundstabeller.damarien[87].striderdrabbningar=1;
	bakgrundstabeller.damarien[87].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[87].expertispoang=2;

	bakgrundstabeller.damarien[88] = {};
	bakgrundstabeller.damarien[88].rubrik="Utropare";
	bakgrundstabeller.damarien[88].beskrivning="I de väldiga städerna måste nyheter förkunnas till folket. Då många inte kan läsa är det utroparens roll att meddela invånarna om makthavarnas beslut. På torg och vid stadsportar proklamerar de storfurstens nyaste lagar, efterlysta brottslingar, arbeten som utlyses, vad som sker i staden, stundande offentliga avrättningar och nyheter från resten av storfurstendömet. Det är få som har en sådan insikt i stadens affärer som utroparna.";
	bakgrundstabeller.damarien[88].intrigerillgarningar=1;
	bakgrundstabeller.damarien[88].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[88].valfriaenheter=4;

	bakgrundstabeller.damarien[89] = {};
	bakgrundstabeller.damarien[89].rubrik="Vampyrjägare";
	bakgrundstabeller.damarien[89].beskrivning="För utomstående är Damarien känt som det mörka riket där lamior en gång härskade och där vandöda varelser alltjämt vandrar genom natten. Sådana historier är inte helt tagna ur intet och vissa damarier har tagit på sig uppdraget att jaga lamior och andra styggelser; de motiveras av så olika motiv som brinnande tro, hämnd, kunskapstörst eller ibland bara för sin egen försörjnings skull. För att bekämpa lamior, demoner och spöken har vampyrjägaren ofta djupa kunskaper i förbjudna magiska och ockulta konster och det är inte ovanligt att dessa vagabonder slutar sina ofta korta liv minst lika fruktade som de väsen de jagar.";
	bakgrundstabeller.damarien[89].kunskapmysterier=1;
	bakgrundstabeller.damarien[89].mystikfardigheterenheter=4;
	bakgrundstabeller.damarien[89].stridsfardigheterenheter=4;


	bakgrundstabeller.damarien[90] = {};
	bakgrundstabeller.damarien[90].rubrik="Vandrare";
	bakgrundstabeller.damarien[90].beskrivning="De flesta damarier ser med misstänksamhet på dem som valt att vända ryggen till städernas eller bondbyarnas relativa trygghet för att söka sig ut på vägarna och vildmarken. Oavsett om de är kringvandrande hantverkare, nomadiska fedaker eller fattiga tiggarmunkar så har de besökt många fler platser och mött långt fler människor än de allra flesta damarier ens kan föreställa sig.";
	bakgrundstabeller.damarien[90].farderaventyr=1;
	bakgrundstabeller.damarien[90].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[90].vildmarksfardigheterenheter=4;

	bakgrundstabeller.damarien[91] = {};
	bakgrundstabeller.damarien[91].rubrik="Vapenmästare";
	bakgrundstabeller.damarien[91].beskrivning="Vapenmästarna ser strid som en konstform. De lär sig invecklade och många gånger vackra sätt att kämpa och för många handlar det mer om uppvisning än om faktisk kamp. En del vapenmästare tjänar som instruktörer, livvakter eller underhållare hos de rika och mäktiga. Andra vandrar mellan byarna och erbjuder sina tjänster för en handfull mynt.";
	bakgrundstabeller.damarien[91].striderdrabbningar=1;
	bakgrundstabeller.damarien[91].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[91].stridsfardigheterenheter=4;

	
	bakgrundstabeller.damarien[92] = {};
	bakgrundstabeller.damarien[92].rubrik="Vargriddare";
	bakgrundstabeller.damarien[92].beskrivning="Vargriddarorden var en gång i tiden ett legendariskt sällskap med uppgiften att skydda Damariens landsbygd mot monster och stråtrövare. Men efter att de ställde sig på fel sida mot storfursten har orden förbjudits och drivits i landsflykt till Soldarn och Västmark. Vargriddarna är numera en rörelse av Damariska adelsmän och ofrälse som svurit att göra slut på Thamas tyranni och återupprätta den damariska adelns makt. Ingen vargriddare kan vara öppet aktiv inom Damarien, men flera av deras medlemmar och agenter arbetar i hemlighet inom landets gränser. Kontakt med dem är mycket riskabelt, då storfursten ser dem och alla som samarbetar med dem som farliga hot mot riket.";
	bakgrundstabeller.damarien[92].striderdrabbningar=1;
	bakgrundstabeller.damarien[92].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[92].vildmarksfardigheterenheter=4;

	bakgrundstabeller.damarien[93] = {};
	bakgrundstabeller.damarien[93].rubrik="Veteran";
	bakgrundstabeller.damarien[93].beskrivning="Krig skördar sina offer och veteranen har dräpt fler än denne kan minnas och förlorat många vänner till vinande pilar och svärdshugg. Våldsamheterna har satt sina spår och många veteraner vrider sig i mardrömmar, häller i sig vin för att glömma eller har övergått till att bli obehagligt avtrubbade. Även om de krigiska dagarna är över för veteranen är det ack så lätt att ta till vapen för att tjäna några enkla silver då den vanliga världen för dem blivit främmande och olustig.";
	bakgrundstabeller.damarien[93].striderdrabbningar=1;
	bakgrundstabeller.damarien[93].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[93].vildmarksfardigheterenheter=4;

	bakgrundstabeller.damarien[94] = {};
	bakgrundstabeller.damarien[94].rubrik="Vindmunk";
	bakgrundstabeller.damarien[94].pluralobestamd="vindmunkar";
	bakgrundstabeller.damarien[94].beskrivning="Från sina kloster på de damariska slätterna eller Khazimbergens toppar mässar de fem vindarnas tjänare sina böner i jakt på jämvikt och insikt i vindarnas natur. Dessa mystiska män och kvinnor hör till en av Damariens mäktigaste fraktioner och klostret är en inflytelserik markägare och maktfaktor. Detta har givit munkarna flera mäktiga vänner, men ännu fler mäktiga fiender, bland annat den hedniska Kristallorden.";
	bakgrundstabeller.damarien[94].kunskapmysterier=1;
	bakgrundstabeller.damarien[94].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[94].socialafardigheterenheter=4;


	bakgrundstabeller.damarien[95] = {};
	bakgrundstabeller.damarien[95].rubrik="Vinkännare";
	bakgrundstabeller.damarien[95].beskrivning="Vinkännaren är ansvarig för de juridiska dokument som anger vem som får jäsa vin, och provsmakar det som ska säljas och kontrollerar att det lagras på korrekt sätt. De som arbetar med detta är oftast så goda vinkännare att de bara genom att dofta på vinet kan berätta exakt från vilken vingård det kommer, vilken druva som använts och vilken årgång det är.";
	bakgrundstabeller.damarien[95].intrigerillgarningar=1;
	bakgrundstabeller.damarien[95].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[95].expertispoang=2;

	bakgrundstabeller.damarien[96] = {};
	bakgrundstabeller.damarien[96].rubrik="Vägvisare";
	bakgrundstabeller.damarien[96].beskrivning="I både stad och vildmark är det viktigt att hitta rätt. Handelsresande, pilgrimer och andra resande sällskap anlitar därför en vägvisare för att leda dem genom labyrinten av stigar, vägar, broar, vadställen och korsningar. Förutom den vanliga betalningen i form av silver brukar uppdragsgivaren även få stå för mat och dryck för vägvisaren under hela resan.";
	bakgrundstabeller.damarien[96].farderaventyr=1;
	bakgrundstabeller.damarien[96].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[96].vildmarksfardigheterenheter=4;

	bakgrundstabeller.damarien[97] = {};
	bakgrundstabeller.damarien[97].rubrik="Värdshusvärd";
	bakgrundstabeller.damarien[97].pluralobestamd="värdshusvärdar";
	bakgrundstabeller.damarien[97].beskrivning="Mat serveras, rum städas, golv sopas, stop diskas, resande kommer och resande ger sig av. En värdshusvärd träffar och pratar med många olika typer av individer och blir snart en person som är välunderrättad om vad som händer i staden och världen. De mest nedgångna värdshusen är inget mer än rökiga och pisstinkande gryt där ölen är utspädd och gästerna fattiga medan de mest luxuösa värdshusen har en hel stab av tjänare, otaliga rum, ett stort kök, en fylld vinkällare och ett gott anseende.";
	bakgrundstabeller.damarien[97].valfriatabellslag=1;
	bakgrundstabeller.damarien[97].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[97].expertispoang=2;

	bakgrundstabeller.damarien[98] = {};
	bakgrundstabeller.damarien[98].rubrik="Xinukultist";
	bakgrundstabeller.damarien[98].beskrivning="De plågade skrik som kommer från Xinus anhängare är ett offer till den mörka guden. I sina privata tortyrkammare dyrkar de smärtans och det eviga lidandets furste, den vansinnige Xinu. Under svarta mässor når dyrkarna extas genom att piska sig och sina anhängare till ljudet av psalmerna. Få, om ens någon av de invigda kommer någonsin kunna återvända till den oskyldiga sinnesro som de en gång hade, sedan den sadistiska och förbjudna gudomen satt sina klor i deras själar. De anser sig utvalda inför den kommande striden och tränar för att bli Xinus förkämpar.";
	bakgrundstabeller.damarien[98].kunskapmysterier=1;
	bakgrundstabeller.damarien[98].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[98].expertispoang=2;

	bakgrundstabeller.damarien[99] = {};
	bakgrundstabeller.damarien[99].rubrik="Ädling";
	bakgrundstabeller.damarien[99].pluralobestamd="ädlingar";
	bakgrundstabeller.damarien[99].beskrivning="En gång i tiden var den damariske aristokraten oinskränkt härskare över sin egen domän, där den lokale makthavarens vilja bokstavligen var lag och den avlägsne storfursten bara var en av många mäktiga adelsmän. Denna tid är sedan länge förbi, och sedan Thamas utrensningar är större delen av adeln krossad eller hunsad. Några adelsmän önskar sig tillbaka till den gamla tiden, medan andra är besatta av att visa sig värdiga storfurstens gunst. Många adelsmän är uppkomlingar som nått sin position tack vare Thamas, och de ses på med intensivt men tyst förakt av de gamla släkter som alltjämt kunnat hålla fast vid sina uråldriga titlar och herresäten.";
	bakgrundstabeller.damarien[99].intrigerillgarningar=2;
	bakgrundstabeller.damarien[99].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[99].valfriaenheter=4;

	bakgrundstabeller.damarien[100] = {};
	bakgrundstabeller.damarien[100].rubrik="Älskare/älskarinna";
	bakgrundstabeller.damarien[100].bestamd="älskaren/älskarinnan";
	bakgrundstabeller.damarien[100].pluralobestamd="älskare/älskarinnor";
	bakgrundstabeller.damarien[100].pluralbestamd="älskarna/älskarinnorna";
	bakgrundstabeller.damarien[100].beskrivning="Trots kyrkans och moralisters intensiva fördömanden är det mycket vanligt att rika och mäktiga damarier lever mer eller mindre öppet tillsammans med en eller flera älskare eller hålldamer. En älskares situation är ofta riskabel, då de är helt beroende av sin partners nycker och kan ofta när som helst förvisas från dennes hem utan några lagliga konsekvenser, ofta tillsammans med sina oäkta och därför arvlösa barn. Trots detta finns det otaliga älskare och frillor som kunnat få stort inflytande och makt och slutat sina dagar som respekterade inte bara av sina älskade, utan även av samhället i stort.";
	bakgrundstabeller.damarien[100].intrigerillgarningar=1;
	bakgrundstabeller.damarien[100].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[100].expertispoang=2;

	bakgrundstabeller.ghor = [];
	bakgrundstabeller.ghor[0] = {};
	bakgrundstabeller.ghor[0].subval = [[[]]];
	bakgrundstabeller.ghor[0].vald = 0;
    bakgrundstabeller.ghor[0].rubrik="Ghor";
    bakgrundstabeller.ghor[0].namn="ghor";
	
	bakgrundstabeller.ghor[1] = {};
	bakgrundstabeller.ghor[1].rubrik="Alkemist";
	bakgrundstabeller.ghor[1].beskrivning="I sina laboratorier och verkstäder arbetar de dvärgiska alkemisterna hårt för att nå nya kunskaper i materians mysterier eller för att skapa de elixir, preparat och magiska föremål som krävs för alla möjliga syften i dvärgarnas städer. ";
	bakgrundstabeller.ghor[1].kunskapmysterier=1;
	bakgrundstabeller.ghor[1].kunskapsfardigheterenheter=4;
	bakgrundstabeller.ghor[1].mystikfardigheterenheter=4;

	bakgrundstabeller.ghor[2] = {};
	bakgrundstabeller.ghor[2].rubrik="Ambassadör";
	bakgrundstabeller.ghor[2].beskrivning="Dessa dvärgar har tilldelas hedersuppdraget att föra konungens och fästets talan i utombergingarnas riken. ";
	bakgrundstabeller.ghor[2].intrigerillgarningar=1;
	bakgrundstabeller.ghor[2].socialafardigheterenheter=4;
	bakgrundstabeller.ghor[2].stridsfardigheterenheter=4;

	bakgrundstabeller.ghor[3] = {};
	bakgrundstabeller.ghor[3].rubrik="Arkivarie";
	bakgrundstabeller.ghor[3].beskrivning="I det urgamla och välordnade dvärgfästet kan arkiv och bibliotek nå enorma proportioner och för att byråkratin ska fungera kräver fästet därför hela truppstyrkor av noggranna, tålmodiga och pedantiska arkivarier. ";
	bakgrundstabeller.ghor[3].kunskapmysterier=1;
	bakgrundstabeller.ghor[3].kunskapsfardigheterenheter=4;
	bakgrundstabeller.ghor[3].hantverkpoang=4;

	bakgrundstabeller.ghor[4] = {};
	bakgrundstabeller.ghor[4].rubrik="Brottsling";
	bakgrundstabeller.ghor[4].beskrivning="Den dvärgiska lagen är drakonisk, dogmatisk och oförlåtande vilket gör att de dvärgar som fälls för brott, som i människornas ögon framstår som triviala, straffas genom att tatueras i ansiktet, så att deras skam för evigt ska vara uppenbar för omgivningen. Brottslingen är en dvärg som fällts för ett brott men tillåtits stanna i dvärgfästet. ";
	bakgrundstabeller.ghor[4].intrigerillgarningar=1;
	bakgrundstabeller.ghor[4].rorelsefardigheterenheter=4;
	bakgrundstabeller.ghor[4].kannetackenpoang=4;

	bakgrundstabeller.ghor[5] = {};
	bakgrundstabeller.ghor[5].rubrik="Bryggare";
	bakgrundstabeller.ghor[5].beskrivning="Bryggarna framställer öl och andra jästa drycker, inklusive det legendariska kvasr-ölet, och betraktas därför av andra dvärgar som några av fästets mest respekterade hantverkare. ";
	bakgrundstabeller.ghor[5].valfriatabellslag=1;
	bakgrundstabeller.ghor[5].kunskapsfardigheterenheter=4;
	bakgrundstabeller.ghor[5].hantverkpoang=4;

	bakgrundstabeller.ghor[6] = {};
	bakgrundstabeller.ghor[6].rubrik="Grottsvampodlare";
	bakgrundstabeller.ghor[6].beskrivning="Med oändligt tålamod och stor yrkesstolthet förser svampodlarna i sina underjordiska odlingsgångar fästet med en stor del av den mat som de mångtaliga invånarna behöver. ";
	bakgrundstabeller.ghor[6].farderaventyr=1;
	bakgrundstabeller.ghor[6].valfriaenheter=4;
	bakgrundstabeller.ghor[6].hantverkpoang=4;

	bakgrundstabeller.ghor[7] = {};
	bakgrundstabeller.ghor[7].rubrik="Gruvbestskötare";
	bakgrundstabeller.ghor[7].beskrivning="De enorma, maskliknande varelser som kallas gruvbestar är en av de viktigaste källorna till kött och läder i dvärgfästet och föds upp i underjordiska farmer. Eftersom djuren kan vara mycket aggressiva måste skötarna vara vaksamma och bra på att försvara sig. ";
	bakgrundstabeller.ghor[7].farderaventyr=1;
	bakgrundstabeller.ghor[7].stridsfardigheterenheter=4;
	bakgrundstabeller.ghor[7].vildmarksfardigheterenheter=4;

	bakgrundstabeller.ghor[8] = {};
	bakgrundstabeller.ghor[8].rubrik="Grävare";
	bakgrundstabeller.ghor[8].beskrivning="I mörkret under dvärgfästet sliter grävarna oavbrutet i sin jakt på resurser eller för att bygga ut dvärgarnas underjordiska domäner. ";
	bakgrundstabeller.ghor[8].farderaventyr=1;
	bakgrundstabeller.ghor[8].rorelsefardigheterenheter=4;
	bakgrundstabeller.ghor[8].stridsfardigheterenheter=4;

	bakgrundstabeller.ghor[9] = {};
	bakgrundstabeller.ghor[9].rubrik="Handlare";
	bakgrundstabeller.ghor[9].beskrivning="De dvärgiska köpmännen är bland de dvärgar som har allra mest kontakt med utombergingar, oavsett om de bedriver sitt arbete vid fästets portar eller om de köper och säljer sina varor i människornas städer och handelsstationer. ";
	bakgrundstabeller.ghor[9].intrigerillgarningar=1;
	bakgrundstabeller.ghor[9].kunskapsfardigheterenheter=4;
	bakgrundstabeller.ghor[9].socialafardigheterenheter=4;

	bakgrundstabeller.ghor[10] = {};
	bakgrundstabeller.ghor[10].rubrik="Hantverkare";
	bakgrundstabeller.ghor[10].beskrivning="Otaliga hantverkare, från skräddare, snickare och garvare till guldsmeder, glasblåsare, bildhuggare och tatuerare sliter oavbrutet för att hålla liv i den väldiga dvärgastaden och dess aldrig sinande behov av alla möjliga varor och arbeten. ";
	bakgrundstabeller.ghor[10].valfriatabellslag=1;
	bakgrundstabeller.ghor[10].rorelsefardigheterenheter=4;
	bakgrundstabeller.ghor[10].hantverkpoang=4;

	bakgrundstabeller.ghor[11] = {};
	bakgrundstabeller.ghor[11].rubrik="Ingenjör";
	bakgrundstabeller.ghor[11].beskrivning="De dvärgiska ingenjörerna är några av Mundanas skickligaste och mest hemlighetsfulla forskare, byggare och uppfinnare. Det är tack vare dem dvärgarna kan titulera sig upphovsmän av allt från jättelika smältugnar till urverket, tryckpressen och siffran noll. ";
	bakgrundstabeller.ghor[11].valfriatabellslag=1;
	bakgrundstabeller.ghor[11].kunskapsfardigheterenheter=4;
	bakgrundstabeller.ghor[11].hantverkpoang=4;

	bakgrundstabeller.ghor[12] = {};
	bakgrundstabeller.ghor[12].rubrik="Kurir";
	bakgrundstabeller.ghor[12].beskrivning="Kurirerna är modiga och uthålliga dvärgar som har tagit på sig det farliga arbetet att föra brev, befallningar och meddelanden mellan dvärgfästen och ibland även till utombergingarnas riken. ";
	bakgrundstabeller.ghor[12].farderaventyr=1;
	bakgrundstabeller.ghor[12].socialafardigheterenheter=4;
	bakgrundstabeller.ghor[12].stridsfardigheterenheter=4;

	bakgrundstabeller.ghor[13] = {};
	bakgrundstabeller.ghor[13].rubrik="Kvädare";
	bakgrundstabeller.ghor[13].beskrivning="Kvädarna håller den dvärgiska historien, sagorna och sångerna levande genom att författa och framföra både nya och klassiska verk i samband med allt från högtidliga tillfällen till druckna värdshuskvällar. ";
	bakgrundstabeller.ghor[13].farderaventyr=1;
	bakgrundstabeller.ghor[13].rorelsefardigheterenheter=4;
	bakgrundstabeller.ghor[13].socialafardigheterenheter=4;

	bakgrundstabeller.ghor[14] = {};
	bakgrundstabeller.ghor[14].rubrik="Lagkunnig";
	bakgrundstabeller.ghor[14].beskrivning="Dessa dvärgar, oavsett om de arbetar som domare, anförare eller svarsförare, har vigt sina liv åt att studera de urgamla, hårda och mycket invecklade dvärgiska lagtexterna och att retoriskt skickligt argumentera för sin sak. ";
	bakgrundstabeller.ghor[14].intrigerillgarningar=1;
	bakgrundstabeller.ghor[14].kunskapsfardigheterenheter=4;
	bakgrundstabeller.ghor[14].socialafardigheterenheter=4;

	bakgrundstabeller.ghor[15] = {};
	bakgrundstabeller.ghor[15].rubrik="Läkare";
	bakgrundstabeller.ghor[15].beskrivning="De dvärgiska läkarna har genom årtusenden kommit att producera några av Mundanas främsta helare, även om de är ytterst hemlighetsfulla och ovilliga att dela med sig av sina kunskaper till utombergingar. ";
	bakgrundstabeller.ghor[15].kunskapmysterier=1;
	bakgrundstabeller.ghor[15].kunskapsfardigheterenheter=4;
	bakgrundstabeller.ghor[15].vildmarksfardigheterenheter=4;

	bakgrundstabeller.ghor[16] = {};
	bakgrundstabeller.ghor[16].rubrik="Magimästare";
	bakgrundstabeller.ghor[16].beskrivning="Dvärgar i gemen misstror magi, även om de respekterar den stora kunskap och självdisciplin som utbildningen kräver och den makt som en skicklig magimästare besitter. Den dvärgiska magin är tätt knuten till Vontartron och nästan helt centrerad kring de fyra elementaraspekterna. ";
	bakgrundstabeller.ghor[16].kunskapmysterier=1;
	bakgrundstabeller.ghor[16].kunskapsfardigheterenheter=4;
	bakgrundstabeller.ghor[16].mystikfardigheterenheter=4;

	bakgrundstabeller.ghor[17] = {};
	bakgrundstabeller.ghor[17].rubrik="Milissoldat";
	bakgrundstabeller.ghor[17].beskrivning="Alla dvärgar är värnpliktiga och har i uppdrag att skydda sitt fäste i krigstid. Några av milissoldaterna, bland annat portmilisen som skyddar fästets ytligaste kvarter, arbetar även i fredstid med att skydda dvärgastaden. ";
	bakgrundstabeller.ghor[17].striderdrabbningar=1;
	bakgrundstabeller.ghor[17].stridsfardigheterenheter=4;
	bakgrundstabeller.ghor[17].expertispoang=4;

	bakgrundstabeller.ghor[18] = {};
	bakgrundstabeller.ghor[18].rubrik="Niding";
	bakgrundstabeller.ghor[18].beskrivning="Det vanligaste straffet för brott i den dvärgiska kulturen är evig förvisning från fästet. De allra flesta dvärgar tar sitt liv efter en sådan dom och anses då ha försonats med Vontar, men ett fåtal nidingar väljer att fortsätta leva i skam och vanära utanför fästet. ";
	bakgrundstabeller.ghor[18].intrigerillgarningar=1;
	bakgrundstabeller.ghor[18].rorelsefardigheterenheter=4;
	bakgrundstabeller.ghor[18].vildmarksfardigheterenheter=4;

	bakgrundstabeller.ghor[19] = {};
	bakgrundstabeller.ghor[19].rubrik="Prospektör";
	bakgrundstabeller.ghor[19].beskrivning="Dvärgfästena hungrar alltid efter järn, guld, stenkol, rent vatten och andra naturresurser. Då är det prospektörernas värv att söka efter lämpliga nya stenbrott, gruvor, brunnar och ibland, i samarbete med utforskarna, även platser att uppföra nya fästen på. ";
	bakgrundstabeller.ghor[19].farderaventyr=1;
	bakgrundstabeller.ghor[19].kunskapsfardigheterenheter=4;
	bakgrundstabeller.ghor[19].vildmarksfardigheterenheter=4;

	bakgrundstabeller.ghor[20] = {};
	bakgrundstabeller.ghor[20].rubrik="Smed";
	bakgrundstabeller.ghor[20].beskrivning="I dvärgfästets monstruösa smedjor, omgivna av enorma masugnar, skapar några av Mundanas främsta smeder otroliga smidesarbeten i form av verktyg, vapen, maskindelar och konstruktionselement. ";
	bakgrundstabeller.ghor[20].intrigerillgarningar=1;
	bakgrundstabeller.ghor[20].valfriaenheter=4;
	bakgrundstabeller.ghor[20].hantverkpoang=4;

	bakgrundstabeller.ghor[21] = {};
	bakgrundstabeller.ghor[21].rubrik="Spindelväktare";
	bakgrundstabeller.ghor[21].beskrivning="Spindelväktarna är vapenmästare vars uppgift går ut på att upptäcka och eliminera hot mot säkerheten i själva dvärgfästet, såsom tiraker, vättar, jättespindlar eller monster från djupen. De är så gott som oöverträffade vad gäller strider i underjordens mörker. ";
	bakgrundstabeller.ghor[21].striderdrabbningar=1;
	bakgrundstabeller.ghor[21].rorelsefardigheterenheter=4;
	bakgrundstabeller.ghor[21].stridsfardigheterenheter=4;

	bakgrundstabeller.ghor[22] = {};
	bakgrundstabeller.ghor[22].rubrik="Tirakbaneman";
	bakgrundstabeller.ghor[22].beskrivning="Bland utombergingar är tirakbanemännen de allra mest legendariska dvärgkrigarna. I krigstid är det deras uppgift att rekognosera och spana på fiender utanför dvärgfästet och i vissa fall leda överraskningsattacker och hämndaktioner mot utombergingarnas styrkor. ";
	bakgrundstabeller.ghor[22].striderdrabbningar=1;
	bakgrundstabeller.ghor[22].stridsfardigheterenheter=4;
	bakgrundstabeller.ghor[22].vildmarksfardigheterenheter=4;

	bakgrundstabeller.ghor[23] = {};
	bakgrundstabeller.ghor[23].rubrik="Utforskare";
	bakgrundstabeller.ghor[23].beskrivning="Några av de allra mest äventyrliga och modiga av dvärgarnas folk är de som under långa tider lämnar dvärgasamhällets trygghet och ger sig ut i världen för att finna nya riken, folkslag och platser lämpade för nya fästen och kolonier. ";
	bakgrundstabeller.ghor[23].farderaventyr=1;
	bakgrundstabeller.ghor[23].rorelsefardigheterenheter=4;
	bakgrundstabeller.ghor[23].vildmarksfardigheterenheter=4;

	bakgrundstabeller.ghor[24] = {};
	bakgrundstabeller.ghor[24].rubrik="Vontarpräst";
	bakgrundstabeller.ghor[24].beskrivning="Vontars stränga prästerskap predikar gudens ord, och bidrar därtill med goda råd till varje dvärg som söker upp dem för att få vägledning vid svåra livsval. ";
	bakgrundstabeller.ghor[24].kunskapmysterier=1;
	bakgrundstabeller.ghor[24].kunskapsfardigheterenheter=4;
	bakgrundstabeller.ghor[24].mystikfardigheterenheter=4;

	bakgrundstabeller.ghor[25] = {};
	bakgrundstabeller.ghor[25].rubrik="Äldste";
	bakgrundstabeller.ghor[25].beskrivning="Under dvärgkungen regeras varje fäste av äldstarnas råd, som dels består av de olika husens äldstar och dels av ämbetsäldstarna som utsetts av kungen. Äldstarna är ofta mycket kunniga och plikttrogna makthavare, men inte sällan extremt konservativa även med dvärgiska mått mätt. ";
	bakgrundstabeller.ghor[25].intrigerillgarningar=1;
	bakgrundstabeller.ghor[25].socialafardigheterenheter=4;
	bakgrundstabeller.ghor[25].valfriaenheter=4;


	bakgrundstabeller.jarvskogen = [];
	bakgrundstabeller.jarvskogen[0] = {};
	bakgrundstabeller.jarvskogen[0].subval = [[[]]];
	bakgrundstabeller.jarvskogen[0].vald = 0;
    bakgrundstabeller.jarvskogen[0].rubrik="Järvskogen";
    bakgrundstabeller.jarvskogen[0].namn="jarvskogen";
	
	bakgrundstabeller.jarvskogen[1] = {};
	bakgrundstabeller.jarvskogen[1].rubrik="Bard";
	bakgrundstabeller.jarvskogen[1].beskrivning="Järvskogens barder är poeter och musiker som underhåller sina trötta fränder vid dagens slut med lustiga sånger, sätter ord på de sörjandes smärta vid begravningar och komponerar verser som låter forna hjältars dåd leva för evigt.";
	bakgrundstabeller.jarvskogen[1].farderaventyr=1;
	bakgrundstabeller.jarvskogen[1].rorelsefardigheterenheter=4;
	bakgrundstabeller.jarvskogen[1].socialafardigheterenheter=4;

	bakgrundstabeller.jarvskogen[2] = {};
	bakgrundstabeller.jarvskogen[2].rubrik="Byggare";
	bakgrundstabeller.jarvskogen[2].beskrivning="De alviska byggmästarna i Järvskogen har under årtusenden inte bara lärt sig konsten att bygga avancerade, bekväma hem med mycket enkla medel, utan behärskar även konsten att uppföra hela byar så väl kamouflerade att de är i det närmaste omöjliga att finna för den oinvigde.";
	bakgrundstabeller.jarvskogen[2].farderaventyr=1;
	bakgrundstabeller.jarvskogen[2].valfriaenheter=4;
	bakgrundstabeller.jarvskogen[2].hantverkpoang=4;

	bakgrundstabeller.jarvskogen[3] = {};
	bakgrundstabeller.jarvskogen[3].rubrik="Djurskötare";
	bakgrundstabeller.jarvskogen[3].beskrivning="Järvskogsalverna har under lång tid tämjt och domesticerat otaliga djur. Särskilda djurskötare övervakar aveln, tämjandet och skötseln av dessa djur, oavsett om det rör sig om silkesmaskar, tama jätteskogskatter eller jaktfalkar.";
	bakgrundstabeller.jarvskogen[3].farderaventyr=1;
	bakgrundstabeller.jarvskogen[3].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[3].expertispoang=4;

	bakgrundstabeller.jarvskogen[4] = {};
	bakgrundstabeller.jarvskogen[4].rubrik="Ensamvarg";
	bakgrundstabeller.jarvskogen[4].beskrivning="En del alver är av olika skäl inte längre en del av den alviska gemenskapens skydd och värme, utan lever istället ensamma liv ute i vildmarken. Oavsett om så har skett grund av alvens eget val eller om denne förvisats för något brott har denne tvingats lära sig överleva på egen hand i en farlig värld.";
	bakgrundstabeller.jarvskogen[4].farderaventyr=1;
	bakgrundstabeller.jarvskogen[4].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[4].kannetackenpoang=4;

	bakgrundstabeller.jarvskogen[5] = {};
	bakgrundstabeller.jarvskogen[5].rubrik="Felyanashon";
	bakgrundstabeller.jarvskogen[5].beskrivning="De alviska krigarna, som på felya kallas felyanashon nodinaé, är välkända för sin disciplin och förmåga att nyttja terrängen till sin fördel. I Järvskogen är så gott som alla vuxna alver i någon mån krigare, men bland dem som på heltid valt att viga sina liv till krigskonsten märks vid sidan av de disciplinerade försvararnas förband även ädla vapenmästare och orädda låglandsryttare.";
	bakgrundstabeller.jarvskogen[5].striderdrabbningar=1;
	bakgrundstabeller.jarvskogen[5].rorelsefardigheterenheter=4;
	bakgrundstabeller.jarvskogen[5].stridsfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[6] = {};
	bakgrundstabeller.jarvskogen[6].rubrik="Furste";
	bakgrundstabeller.jarvskogen[6].beskrivning="Vart och ett av de tre järvskogshusen regeras av varsin husfurste, som formellt är underställd autokraten i Emori, även om de i praktiken är självstyrande. Under dessa tre står furstarna, som närmast motsvarar människornas baroner. Dessa titlar är ärftliga och många fursteätter kan spåra sitt ursprung åtskilliga årtusenden tillbaka i tiden.";
	bakgrundstabeller.jarvskogen[6].intrigerillgarningar=1;
	bakgrundstabeller.jarvskogen[6].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[6].socialafardigheterenheter=4;

	bakgrundstabeller.jarvskogen[7] = {};
	bakgrundstabeller.jarvskogen[7].rubrik="Handelsman";
	bakgrundstabeller.jarvskogen[7].beskrivning="Alverna i Järvskogen misstror omvärlden och sätter en stolthet i att alltid vara självförsörjande. Likväl finns det varor som de inte kan producera själva och några vältaliga och modiga alver har tatgit på sig det farliga uppdraget att handla med i första hand pyaralverna, i andra hand människorna vid väl undangömda handelsplatser.";
	bakgrundstabeller.jarvskogen[7].farderaventyr=1;
	bakgrundstabeller.jarvskogen[7].socialafardigheterenheter=4;
	bakgrundstabeller.jarvskogen[7].vildmarksfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[8] = {};
	bakgrundstabeller.jarvskogen[8].rubrik="Hantverkare";
	bakgrundstabeller.jarvskogen[8].beskrivning="Skräddare, garvare och pilmakare utgör ryggraden i thismalvernas samhälle och bland de egalitära järvskogsalverna är det snarare regel än undantag att en riktigt skicklig hantverksmästare belönas med en ädlingstitel.";
	bakgrundstabeller.jarvskogen[8].valfriatabellslag=1;
	bakgrundstabeller.jarvskogen[8].rorelsefardigheterenheter=4;
	bakgrundstabeller.jarvskogen[8].hantverkpoang=4;

	bakgrundstabeller.jarvskogen[9] = {};
	bakgrundstabeller.jarvskogen[9].rubrik="Jägare";
	bakgrundstabeller.jarvskogen[9].beskrivning="Jägarnas arbete går dels ut på att förse sina fränder med viltkött, men även att spåra och jaga ned farliga monster och odjur som hotar alvsamhället.";
	bakgrundstabeller.jarvskogen[9].farderaventyr=1;
	bakgrundstabeller.jarvskogen[9].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[9].hantverkpoang=4;

	bakgrundstabeller.jarvskogen[10] = {};
	bakgrundstabeller.jarvskogen[10].rubrik="Kurtisan";
	bakgrundstabeller.jarvskogen[10].beskrivning="De alviska kurtisanerna är framstående dansare, sångare och konversatörer vars uppgift det är att skapa en behaglig, avslappnad och sensuell stämning vid sammankomster, fester och i furstarnas hov. I Järvskogen finns endast ett fåtal av dessa kvinnor och män, men de är några av alvsamhällets högst skattade medlemmar.";
	bakgrundstabeller.jarvskogen[10].intrigerillgarningar=1;
	bakgrundstabeller.jarvskogen[10].socialafardigheterenheter=4;
	bakgrundstabeller.jarvskogen[10].expertispoang=4;

	bakgrundstabeller.jarvskogen[11] = {};
	bakgrundstabeller.jarvskogen[11].rubrik="Läkare";
	bakgrundstabeller.jarvskogen[11].beskrivning="De alviska helarna är väl bevandrade i många av läkekonstens och kirurgins mysterier. Med sina läkekonster och helande sånger har de under årens lopp slitit otaliga av sina fränder ur dödens armar.";
	bakgrundstabeller.jarvskogen[11].intrigerillgarningar=1;
	bakgrundstabeller.jarvskogen[11].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[11].vildmarksfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[12] = {};
	bakgrundstabeller.jarvskogen[12].rubrik="Lärd";
	bakgrundstabeller.jarvskogen[12].beskrivning="Järvskogen är fattig på böcker, skriftrullar och högre bildning, vilket gör att de få lärda kvinnor och män som ändå lever i skogen kommit att bli mästare på memorering och muntliga traditioner. Många av dem undervisar unga alver och är rådgivare vid furstehoven.";
	bakgrundstabeller.jarvskogen[12].kunskapmysterier=1;
	bakgrundstabeller.jarvskogen[12].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[12].socialafardigheterenheter=4;

	bakgrundstabeller.jarvskogen[13] = {};
	bakgrundstabeller.jarvskogen[13].rubrik="Molnryttare";
	bakgrundstabeller.jarvskogen[13].beskrivning="Dessa alver har lyckats få en héave-drake präglad på sig och utgör därför en del av en vördad elitgrupp av luftburna spejare och krigare.";
	bakgrundstabeller.jarvskogen[13].striderdrabbningar=1;
	bakgrundstabeller.jarvskogen[13].rorelsefardigheterenheter=4;
	bakgrundstabeller.jarvskogen[13].vildmarksfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[14] = {};
	bakgrundstabeller.jarvskogen[14].rubrik="Mystiker";
	bakgrundstabeller.jarvskogen[14].beskrivning="Utan tillgång till hjälp från sanaristammens hemlighetsfulla magimästare har ett fåtal av Järvskogens thismalver börjat utforska magins mysterier på egen hand.";
	bakgrundstabeller.jarvskogen[14].kunskapmysterier=1;
	bakgrundstabeller.jarvskogen[14].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[14].mystikfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[15] = {};
	bakgrundstabeller.jarvskogen[15].rubrik="Odlare";
	bakgrundstabeller.jarvskogen[15].beskrivning="Bland trädkronorna och i väl undangömda gläntor breder fält och odlingar ut sig i den mörka skogen och här arbetar alviska odlare hårt för att förse sina fränder med föda.";
	bakgrundstabeller.jarvskogen[15].farderaventyr=1;
	bakgrundstabeller.jarvskogen[15].rorelsefardigheterenheter=4;
	bakgrundstabeller.jarvskogen[15].vildmarksfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[16] = {};
	bakgrundstabeller.jarvskogen[16].rubrik="Skarpskytt";
	bakgrundstabeller.jarvskogen[16].beskrivning="Dessa de allra mest legendariska och fruktade av alvkrigare är oöverträffade bågskyttar och mästare på att röra sig obemärkt genom vildmarken.";
	bakgrundstabeller.jarvskogen[16].striderdrabbningar=1;
	bakgrundstabeller.jarvskogen[16].stridsfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[16].vildmarksfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[17] = {};
	bakgrundstabeller.jarvskogen[17].rubrik="Skrivare";
	bakgrundstabeller.jarvskogen[17].beskrivning="Endast en liten, men inflytelserik del av Järvskogens praktiskt lagda och föga lärdomsaktiga alver behärskar skrivkonsten och bokföringens ädla konst, men dessa har dock ofta en hög maktställning nära maktens centrum.";
	bakgrundstabeller.jarvskogen[17].intrigerillgarningar=1;
	bakgrundstabeller.jarvskogen[17].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[17].socialafardigheterenheter=4;

	bakgrundstabeller.jarvskogen[18] = {};
	bakgrundstabeller.jarvskogen[18].rubrik="Smed";
	bakgrundstabeller.jarvskogen[18].beskrivning="Oavsett om de arbetar med att tillverka grovsmide, verktyg eller vapen är smederna vitala för järvskogsalvernas överlevnad. Bristen på metall gör att endast skogens skickligaste hantverkarna tillåts utöva detta yrke.";
	bakgrundstabeller.jarvskogen[18].striderdrabbningar=1;
	bakgrundstabeller.jarvskogen[18].rorelsefardigheterenheter=4;
	bakgrundstabeller.jarvskogen[18].hantverkpoang=4;

	bakgrundstabeller.jarvskogen[19] = {};
	bakgrundstabeller.jarvskogen[19].rubrik="Spanare";
	bakgrundstabeller.jarvskogen[19].beskrivning="Det sägs vara omöjligt att korsa Järvskogens bryn utan att känna ilningar från alviska blickar. Spanarna finns överallt i skogarna, där de dolda bland träden och undervegetationen håller inkräktare och andra hot under uppsikt.";
	bakgrundstabeller.jarvskogen[19].farderaventyr=1;
	bakgrundstabeller.jarvskogen[19].rorelsefardigheterenheter=4;
	bakgrundstabeller.jarvskogen[19].vildmarksfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[20] = {};
	bakgrundstabeller.jarvskogen[20].rubrik="Stigfinnare";
	bakgrundstabeller.jarvskogen[20].beskrivning="När någon måste korsa den mörka vildmarken bortom alvernas bosättningar tar de ofta hjälp av de många skickliga och orädda stigfinnarna. Dessa guider och vildmarksvandrare lever på gränsen mellan alvernas riken och vildmarkens fasor och känner bättre än någon annan de snabbaste och säkraste vägarna genom skogarna.";
	bakgrundstabeller.jarvskogen[20].farderaventyr=1;
	bakgrundstabeller.jarvskogen[20].stridsfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[20].vildmarksfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[21] = {};
	bakgrundstabeller.jarvskogen[21].rubrik="Sändebud";
	bakgrundstabeller.jarvskogen[21].beskrivning="När Järvskogens alver måste föra meddelanden till utomstående såsom andra alver, människor eller dvärgar, då skickar de sändebuden. Då de delvis är ambassadörer och delvis postiljoner måste de vara såväl snabba som stridsvana, politiskt pålästa och kvicka i repliken.";
	bakgrundstabeller.jarvskogen[21].farderaventyr=1;
	bakgrundstabeller.jarvskogen[21].socialafardigheterenheter=4;
	bakgrundstabeller.jarvskogen[21].stridsfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[22] = {};
	bakgrundstabeller.jarvskogen[22].rubrik="Trädmästare";
	bakgrundstabeller.jarvskogen[22].beskrivning="Järvskogens alver uppför många av sina byggnader i skogens alltjämt levande träd. Det är trädmästarna som genom en blandning av magiska och världsliga medel möjliggör detta genom att forma träden. De ansvarar även för att skydda dem mot röta och skadedjursangrepp.";
	bakgrundstabeller.jarvskogen[22].kunskapmysterier=1;
	bakgrundstabeller.jarvskogen[22].mystikfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[22].hantverkpoang=4;

	bakgrundstabeller.jarvskogen[23] = {};
	bakgrundstabeller.jarvskogen[23].rubrik="Väktare";
	bakgrundstabeller.jarvskogen[23].beskrivning="Väktarna är krigare vars uppgift är att upprätthålla freden alver emellan och att straffa brottslingar. Thismalvernas kultur är mycket fokuserad på heder, lojalitet och samhörighet, och fördömer alla brott mot andra alver hårt. Samhällets fokus på personlig heder gör att även små förolämpningar lätt urartar i blodiga konflikter alver emellan.";
	bakgrundstabeller.jarvskogen[23].striderdrabbningar=1;
	bakgrundstabeller.jarvskogen[23].socialafardigheterenheter=4;
	bakgrundstabeller.jarvskogen[23].stridsfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[24] = {};
	bakgrundstabeller.jarvskogen[24].rubrik="Ädling";
	bakgrundstabeller.jarvskogen[24].beskrivning="Ädlingarna är den alviska motsvarigheten till människornas riddare och utgör eliten i det hierarkiska thismsamhället. Ädlingarnas titlar är inte ärftliga, utan delas ut av husfurstarna som belöning för lojalitet, personlig duglighet och tapperhet. Ädlingarna respekteras djupt även bland de egalitära järvskogsalverna.";
	bakgrundstabeller.jarvskogen[24].intrigerillgarningar=1;
	bakgrundstabeller.jarvskogen[24].socialafardigheterenheter=4;
	bakgrundstabeller.jarvskogen[24].stridsfardigheterenheter=4;

	bakgrundstabeller.jarvskogen[25] = {};
	bakgrundstabeller.jarvskogen[25].rubrik="Örtmästare";
	bakgrundstabeller.jarvskogen[25].beskrivning="När det kommer till kunskaper om de remarkabla egenskaperna hos skogens många växter finns det ingen mer kunnig än de alviska örtmästarna, som förser samhället både med vildvippans läkande krafter, månklockans förrädiska gift och alvgräsets lugnande dunster.";
	bakgrundstabeller.jarvskogen[25].kunskapmysterier=1;
	bakgrundstabeller.jarvskogen[25].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jarvskogen[25].vildmarksfardigheterenheter=4;




	
	
	
	handelsetabellista=hamta_handelsetabellista();
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	fardighetsgrupplista_plur=fardighetslistaobjekt.fardighetsgrupplista_plur;
	ovrigafardighetergrupplista_namn=fardighetslistaobjekt.ovrigafardighetergrupplista_namn;
	ovrigafardighetergrupplista_plur=fardighetslistaobjekt.ovrigafardighetergrupplista_plur;
	// Nummer
	
	
	for (i=0;i<bakgrundstabeller.lista.length;i++){
		// Lägger till nummer på bakgrundstabell för att senare sparas under rollpersonsobjektet.
		bakgrundstabeller[bakgrundstabeller.lista[i]][0].nummer=i;
	
	
	}
	
	for (m=0; m < bakgrundstabeller.lista.length; m++){
	
    	for (n=1;n < bakgrundstabeller[bakgrundstabeller.lista[m]].length; n++){
			//Tabellnamn
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].tabellnamn=bakgrundstabeller[bakgrundstabeller.lista[m]][0].namn;
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].tabellrubrik=bakgrundstabeller[bakgrundstabeller.lista[m]][0].rubrik;
			// Beskrivninghak
			if ("beskrivninghak" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
				// Skapa inget om det redan finns
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak="";
				for (i=0;i<handelsetabellista.namn.length;i++){
					if (handelsetabellista.namn[i] in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak += "1 slag på " + handelsetabellista.rubrik[i];
					}
				}
				if ("valfriatabellslag" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak += "1 slag på valfri tabell, ";
				}
				
				for (i=0;i<7;i++){ // De sex vanliga kategorierna plus språk
					if (fardighetsgrupplista[i] + "enheter" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak += ", 4 enheter " + fardighetsgrupplista_plur[i];
					}
				}
				
				
				if ("valfriaenheter" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak += ", 4 valfria enheter ";
				}
					
				for (i=0;i<ovrigafardighetergrupplista_namn.length;i++){
					if (ovrigafardighetergrupplista_namn[i] + "poang" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak +=", 2 poäng " + ovrigafardighetergrupplista_plur[i];
					}
				}
				
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak += ".";
			}
			
			// Plural och bestämd form
	
			//bakgrundstabeller[bakgrundstabeller.lista[m]][n].tabellresultat = n;
        	bakgrundstabeller[bakgrundstabeller.lista[m]][n].tabellnamn = bakgrundstabeller.lista[m];  
        	
			if ("obestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd=="";
			}
			if ("bestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=="";
			}
			if ("pluralobestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=="";
			}
			if ("pluralbestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=="";
			}
			
			// Alla bakgrunder har n-genus om inte annat fastställs.
			if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd==""){
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd="en " + bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
			}
			
			// skapar bestämd form med ändelse -n om det slutar på a eller e, -en annars
			if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd==""){
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "e"){
					
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "n";
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "a"){
					
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "n";
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-2) == "er"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "n";
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "man"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "nen";
				
				
				}else{
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "en";
				}
			}
			
			
			// skapar obestämd form plural, samma som rubrik om det slutar på -are eller -ier, med ändelse -er, -ar eller -or annars.
			
			if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd==""){
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "are"){
					
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "ier"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "man"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase().slice(0,-2) + "än";
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "e"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase().slice(0,-2) + "ar";				
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "a"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase().slice(0,-2) + "or";
					
				}else{
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "er";
				 
				}
			}
			
			// Skapar bestämd form plural
			
			if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd==""){
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "are"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd.slice(0,-1) + "na";
				
				}else if(bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd.slice(-3) == "män"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd + "nen";
				
				}else{
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd + "na";
				}
			}
			
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].Bestamd = inledandeversal(bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd);
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].Obestamd = inledandeversal(bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd);
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralBestamd = inledandeversal(bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd);
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralObestamd = inledandeversal(bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd);
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrikstor = bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik;
			
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrikliten = bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
			
		}    
	}


	return bakgrundstabeller
}

