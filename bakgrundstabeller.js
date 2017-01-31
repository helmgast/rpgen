function hamta_bakgrundstabeller (){
	
	// expertispoang=2 eller expertiser=2?
	
	
    bakgrundstabellista = ["jargiensbefolkning", "vildmark", "nermadasbefolkning"];
	var bakgrundstabeller = {};
	var i;
	bakgrundstabeller.lista=bakgrundstabellista;
    bakgrundstabeller.rubriker=["Jargiens befolkning", "Vildmark", "Nermadas befolkning"];
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
	bakgrundstabeller.jargiensbefolkning[8].stidsfardigheterenheter=4;
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
	bakgrundstabeller.jargiensbefolkning[60].kunskapsfardigheterenheter=4;
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
	
	handelsetabellista=hamta_handelsetabellista();
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	fardighetsgrupplista_plur=fardighetslistaobjekt.fardighetsgrupplista_plur;
	ovrigafardighetergrupplista_namn=fardighetslistaobjekt.ovrigafardighetergrupplista_namn;
	ovrigafardighetergrupplista_plur=fardighetslistaobjekt.ovrigafardighetergrupplista_plur;
	// Nummer
	
	console.log("handelsetabellista.namn: " + handelsetabellista.namn);
	console.log("handelsetabellista.rubrik: " + handelsetabellista.rubrik);
	
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
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd==""){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd="en " + bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
				}
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd="en " + bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
			}
			// skapar bestämd form med ändelse -n om det slutar på a eller e, -en annars
			if ("bestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
			
			
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd==""){
					if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "e"){
						
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "n";
					}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "a"){
						
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "n";
					
					
					}else{
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "en";
					}
				}
			}else{
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "e"){
						
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "n";
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "a"){
				
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "n";
					
					
				}else{
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "en";
				}
			}
			
			// skapar obestämd form plural, samma som rubrik om det slutar på -are, med ändelse -er annars.
			if ("pluralobestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd==""){
					if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "are"){
						
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
					}else{
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "er";
					 
					}
				}
			}else{
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "are"){
						
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
				}else{
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "er";
					 
				}
			}
			if ("pluralbestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
			
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd==""){
					if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "are"){
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd.slice(0,-1) + "na";
					}else{
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd + "na";
					}
				}
			}else{
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "are"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd.slice(0,-1) + "na";
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

