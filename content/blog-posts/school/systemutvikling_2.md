---
title: "En guide til smidige utviklingsmetoder: Fra AUP til DevOps"
date: 2023-05-16T19:02:18+02:00
description: "Eksamensøving for faget DAT109 - Systemutvikling"
tags: ["NO", "Systemutvikling", "Utviklingsmetoder"]
draft: false
showToc: true
---

## Introduksjon

I faget DAT109, **_"Systemutvikling"_**, har vi gått igjennom temaer rundt det å utvikle systemer/applikasjoner, bruken av diverse utviklingsmetoder, og viktigheten av objekt-orientert analyse, utforming og programmering.

Her er en kort beskrivelse av faget:

> Emnet skal gi studentene en innføring i prinsipper fra flere programvareutviklingsmetoder for utvikling av større programvaresystemer, samt. få erfaring i praktisk systemutvikling gjennom et større prosjektarbeid.  
> Sentralt er ulike utviklingsmetoder og modelleringsteknikker, modeller og notasjon.

Nå som det nærmer seg eksamen i dette faget har jeg valgt å gå igjennom hvert tema og skrive en bloggpost om disse for å få en bedre forståelse av disse. Mesteparten av infoen er hentet fra forelesningsnotater og slides..

Jeg har valgt å dele denne bloggposten opp i 6 deler, der jeg skal først introdusere litt om teamet først for så å gå igennom nøkkeltemaene **_Agile Unified Process (AUP)_**, **_Scrum_**, **_Test-drevet utvikling (TDD)_**, og **_DevOps_** med **_kontinuerlig integrasjon (CI)_** og **_kontinuerlig leveranse (CD)_**.

![Systemutvikling2](/img/systemutvikling-posts/systemutvikling2.png)
[_Systemutvikling2_ (🖼️ - **webstep.no**)](https://www.webstep.no/vare-tjenester/systemutvikling/)

## Utviklingsmetoder

I dagens hurtigskiftende teknologiske landskap er det viktigere enn noensinne for et utviklingsteam å implementere effektive metoder og arbeidsprosesser for å levere kvalitetsprogram i tide.

Her kommer **smidige utviklingsmetoder** inn i bildet. At en utviklingsmetode er smidig (agil) betyr at **_den følger et sett med prinsipper og verdier som fremmer fleksibilitet, tilpasningsevne og samarbeid i programvareutviklingsprosessen_**.

Grunnen til at disse smidige metodene har overtatt som utviklingsmetoder for programvareutvikling er nettopp fordi de legger større vekt på fleksibilitet, tilpasningsevne og samarbeid for å håndtere endringer og usikkerhet mer effektivt.
Gjennom de korte utviklingssyklusene og kontinuerlige leveringene av funksjonalitet kan man tilpasse seg kundenes behov raskt og levere verdi tidlig i prosessen.
I tillegg til dette så resulterer smidige metoder i **høyere kundetilfredshet** og **bedre tilpasning av løsninger**, ettersom det er større fokus på et tett samarbeid med kunder og interessenter, samt. at det reduserer risiko og kostnad gjennom tidlig feiloppdagelse.

![AUP](/img/systemutvikling-posts/aup.png)
[_AUP_ (🖼️ - **krasamo.no**)](https://www.krasamo.com/agile-development-process/)

## Agile Unified Process (AUP)

Agile Unified Process (AUP) er en **mer smidigere versjon** av _Rational Unified Process (RUP)_. Den bygger videre på RUPs grunnleggende struktur og filosofi, men bruker en mer moderne tilnærming med iterative og inkrementelle metoder.  
AUP har et **sterkere fokus på prinsippene og verdiene til smidig utvikling** gjennom hele prosessen. Her blir det lagt større vekt på samarbeid, fleksibilitet og evnen til å tilpasse seg endringer i krav og behov underveis i prosjektet.

AUP tilbyr fleksibilitet ved å tillate justeringer underveis basert på tilbakemeldinger og endrede krav. Man følger **_5 faser_** igjennom hele prosessen, der fasene kan gjentas eller kombineres etter behov for å oppnå ønskede resultater. Dette gir teamet muligheten til å **tilpasse seg endringer** underveis og kontinuerlig forbedre programvaren. Under ser vi de ulike fasene, med en kort forklaring på hva hver fase innebærer.

- **_Oppstartsfase:_** I denne fasen identifiserer man interessenter, definerer systemets omfang og krav, og lager en overordnet plan for prosjektet.

- **_Iterasjonsplanlegging:_** Her identifiseres og prioriteres brukerens krav, og deles opp i mindre enheter som kalles iterasjoner.

- **_Utviklingsfasen:_** I denne fasen skjer selve utviklingen av programvaren.

- **_Testfasen:_** Etter hver iterasjon utføres det tester, og her vil feil og mangler identifiseres og rettes opp.

- **_Leveransefasen:_** Programvaren settes sammen og blir deretter levert til sluttbrukerne / kundene.

![Scrum](/img/systemutvikling-posts/scrum.png)
[_Scrum_ (🖼️ - **freepik.com**)](https://img.freepik.com/free-vector/scrum-infographic_23-2148582396.jpg?w=2000)

## Scrum

Scrum er en annen populær smidig utviklingsmetode som går ut på å organisere arbeidet i korte, tidsbegrensede perioder kalt **sprints**. Teamet jobber her i tverrfunksjonelle enheter og har klart, definerte roller, deriblant _Scrum Master_, _produktansvarlig_ og _utviklere_.
Scrum er anerkjent som en smidig (agil) utviklingsmetode av flere grunner, deriblant at den **fremmer samarbeid, transparens og hyppige tilbakemeldinger gjennom daglige stand-up møter og sprintgjennomganger**.

Denne kombinasjonen av fleksibilitet, tilpasningsevne, teamdynamikk og kontinuerlig forbedring gjør Scrum til en smidig (agil) metode som er egnet for prosjekter der kravene er uklare eller kan endre seg over tid.

Et verktøy som er kjent for å bli brukt mye i Scrum er **Kanban board**. Dette er ofte til å visualisere oppgavene i sprint backlogen og arbeidsflyten gjennom sprinten, som for eksempel "To Do", "Under arbeid" og "Fullført". Dette gir teamet og interessentene en tydelig oversikt over oppgavene og fremdriften.

### ⤷ Agile Scrum

AUP og Scrum kan kombineres for å danne en ny utviklingsmetode, kalt **_Agile Scrum_** eller "_Scrum med Agile Unified Process (AUP)_".

Agile Scrum har noen likheter med ren Scrum, for eksempel bruk av sprinter, backlog, daglige stand-up-møter og retrospektiver. Men det kan også ta med noen elementer fra AUP, som bruk av modelleringsaktiviteter, iterativ design og inkrementell utvikling.

Ved å kombinere AgileUP og Scrum tar man det beste fra begge tilnærmingene og skaper **en tilpasningsdyktig og effektiv utviklingsmetode** som er egnet for smidige prosjekter, og som legger vekt på fleksibilitet, iterasjon og kontinuerlig forbedring.

![TDD](/img/systemutvikling-posts/tdd.png)
[_TDD_ (🖼️ - **kaizenko.com**)](https://www.kaizenko.com/what-is-test-driven-development-tdd/)

## Test-drevet utvikling (TDD)

Test-drevet utvikling (TDD) er en praksis der testene skrives før koden, hvor det legges stor vekt på å sikre at koden oppfyller de spesifiserte kravene.
Utviklerne skriver først en test som beskriver ønsket funksjonalitet og deretter implementerer de koden som passerer testen.

**Fordelene med TDD** er at det bidrar til å forbedre kodekvaliteten ved økt dokumentasjon, øker tilliten til at systemet fungerer som forventet, og det fremmer modularitet og god designpraksis.

**Ulempene med TDD** er at implementeringen kan kreve mer tid og ressurser, fokuset på testingen kan bli overdrevet, og det er mindre egnet for situasjoner der det oppstår små/raske endringer.

Test-drevet utvikling blir benyttet flere steder i utviklingssyklusene i både Scrum og DevOps, en av disse er _planleggingsdelen_.
Innenfor **Scrum** skjer dette **under sprintplanleggingen** der teamet identifiserer oppgavene som skal utføres i sprinten. Ved hjelp av TDD-metoden kan utviklerne planlegge å implementere funksjoner/deler av koden som trenger utvikling.
Innenfor **DevOps** skjer dette **i starten av DevOps-syklusen**, når kravene spesifiseres og planleggingen gjøres. Her kan TDD brukes til å definere testbare krav.

![DevOps](/img/systemutvikling-posts/devops.png)
[_DevOps_ (🖼️ - **fra forelesningslides**)]()

## DevOps

Kort sagt så handler DevOps om å forene utviklings- og driftsteamene for å oppnå kontinuerlig samarbeid og integrasjon mellom dem.  
Denne metodikken fremmer en **samarbeidsorientert kultur, automatisering og felles ansvar for å oppnå raskere og mer pålitelig programvareleveranse**. Dette gjøres ved å _"bygge en bro"_ mellom utvikling og drift, slik at teamet kan oppnå kortere utviklingssykluser, raskere feilretting og bedre responstid på kundens behov.

DevOps legger stor vekt på **overvåking av programvare** i produksjon for å kunne oppdage problemer og ytelsesproblemer raskt, samtidig som det blir tatt høyde for å **skalere opp** infrastrukturen og ressursene etter behov.

**Kontinuerlig integrasjon og kontinuerlig levering** er også to prinsipper som blir lagt stor vekt på. Under skal jeg forklare litt mer om disse, men kort sagt så innebærer det å integrere og teste kodeendringer kontinuerlig for å oppdage feil tidlig, samtidig som man automatiserer utrulling av programvaren til produksjonsmiljøet på en pålitelig og rask måte.

### ⤷ Kontinuerlig integrasjon (CI)

To spørsmål som ofte blir stilt rundt kontinuerlig integrasjon er `hvordan det fungerer eller benyttes i et utviklingsprosjekt`, og `hvordan det kan kombineres med Scrum`. La meg prøve å svare på disse to kort og enkelt.

I et utviklingsprosjekt betyr kontinuerlig integrasjon at i stedet for å vente til alt er ferdig før man sjekker om det fungerer, så kombinerer man kodene fra forskjellige utviklere flere ganger om dagen. På den måten kan man finne feil og problemer tidlig og fikse dem raskt.

Ser vi over på hvordan kontinuerlig integrasjon kan kombineres med Scrum, så vet vi jo at Scrum er som et lagarbeid der et team jobber sammen for å bygge programvare.  
Her vil kontinuerlig integrasjon handle om å bygge og sjekke delene av programvaren ofte, i stedet for å vente til alt er ferdig. Man vil kombinere og teste delene regelmessig for å se om de passer sammen og fungerer bra. På denne måten kan man oppdage feil tidlig og rette dem raskt.

Ved å bruke CI kan teamet redusere risikoen for feil og konflikter, og oppnå en jevnere utviklingsflyt.

### ⤷ Kontinuerlig leveranse (CD)

Slik som ved kontinuerlig integrasjon, er det også spørsmål om `hvordan kontinuerlig leveranse fungerer eller benyttes i et enkelt utviklingsprosjekt`. Kontinuerlig leveranse handler jo om å automatisere utrullingen av programvareendringer til produksjonsmiljøet, og i et enkelt utviklingsprosjekt vil utviklerne bygge programvaren og levere små deler av den jevnlig for å teste og se om alt fungerer som det skal.

Dette betyr at teamet kan oppdage eventuelle problemer tidligere og fikse dem raskt. Det er som når man baker en kake, der man trinn for trinn må sørge for at hvert trinn smaker og ser bra ut før man går videre.

På denne måten kan kontinuerlig levering hjelpe teamet ditt med å levere fungerende programvare jevnlig, og sikre at det er klart til å brukes når som helst. Teamet vil kjenne at de oppnår økt hastighet, kvalitet og pålitelighet i utrullingsprosessen ved bruken av CD.

## Konklusjon

**AUP, Scrum, Test-drevet utvikling, DevOps, CI og CD** er alle moderne utviklingsmetoder som har vist seg å være svært effektive for å levere kvalitetsprogramvare på en smidig og effektiv måte. Disse metodene **fremmer** blant annet **_samarbeid, inkrementell utvikling, automatisering og kontinuerlig forbedring_**. Ved å kombinere disse metodene kan utviklingsteam oppnå bedre produktivitet, kvalitet og leveringstid, og tilpasse seg de stadig skiftende kravene i dagens teknologiske landskap.

Det finnes ikke en "one-size-fits-all" tilnærming, og det kan være nødvendig å tilpasse disse metodene etter prosjektets behov. Ved å eksperimentere og tilpasse seg kan utviklingsteamene finne den ideelle kombinasjonen som fungerer best for dem.
