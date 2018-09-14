infilnamn=
utfilnamn=
tabellnamn="jarvskogen"


tabellslag=[["valfri tabell","valfriatabellslag"], ["Färder & äventyr","farderaventyr"],["Intriger & illgärningar","intrigerillgarningar"], ["Kunskap & mysterier","kunskapmysterier"], ["Strider & drabbningar","striderdrabbningar"]]

enheter=[["Kunskapsfärdigheter","kunskapsfardigheterenheter"],["Mystikfärdigheter","mystikfardigheterenheter"],["Rörelsefärdigheter","rorelsefardigheterenheter"],["Sociala färdigheter","socialafardigheterenheter"],["Stridsfärdigheter","stridsfardigheterenheter"],["Vildmarksfärdigheter","vildmarksfardigheterenheter"]]

poang=[["Expertiser","expertispoang"],["Hantverk","hantverkpoang"],["Kännetecken","kannetackenpoang"]]


# Läs in hela dokumentet rad för rad
inputfil=open(infilnamn,"r")
temprader=inputfil.readline()
inputfil.close()
outputfil=open(utfilnamn,"w")

for each x in temprader:
	if x%4==0:
		#rubrik
		rubrik=temprader[x].split(" ")[1]
		outputfil.write("bakgrundstabeller." + tabellnamn + "[" + str(x//4+1) + "].rubrik=\"" + rubrik + "\";"
	elif x%4==1:
		#beskrivning
		beskrivning=temprader[x]
		outputfil.write("bakgrundstabeller." + tabellnamn + "[" + str(x//4+1) + "].beskrivning=\"" + rubrik + "\";"
	elif x%4==2:
		#resurser
		#tabellslag
		for each i in tabellslag:
			if tabellslag[i][0] in temprader[x]:
				outputfil.write("bakgrundstabeller." + tabellnamn + "[" + str(x//4+1) + "]." + tabellslag[i][1] + "=1;"
		#enheter
		for each i in enheter:
			if enheter[i][0] in temprader[x]:
				outputfil.write("bakgrundstabeller." + tabellnamn + "[" + str(x//4+1) + "]." + enheter[i][1] + "=4;"
				
		#fardighetspoang
		for each i in poang:
			if poang[i][0] in temprader[x]:
				outputfil.write("bakgrundstabeller." + tabellnamn + "[" + str(x//4+1) + "]." + poang[i][1] + "=4;"
	elif x%4==3:
		outputfil.write("")

outputfil.close(()