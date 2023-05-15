---
title: "Bygg solide applikasjoner med objekt-orienterte prinsipper og praksiser"
date: 2023-05-13T11:28:45+02:00
description: ""
tags: ["NO", "Systemutvikling", "Objekt-orienterte prinsipper & praksiser"]
draft: false
showToc: true
---

### Introduksjon

I faget DAT109, **_"Systemutvikling"_**, har vi gått igjennom temaer rundt det å utvikle systemer/applikasjoner, bruken av diverse utviklingsmetoder, og viktigheten med objekt-orientert analyse, utforming og programmering.

Her er en kort beskrivelse av faget:

> Emnet skal gi studentene en innføring i prinsipper fra flere programvareutviklingsmetoder for utvikling av større programvaresystemer, samt. få erfaring i praktisk systemutvikling gjennom et større prosjektarbeid.  
> Sentralt er ulike utviklingsmetoder og modelleringsteknikker, modeller og notasjon.

Nå som det nærmer seg eksamen i dette faget har jeg valgt å gå igjennom hvert tema og skrive en bloggpost om disse for å få en bedre forståelse av disse. Mesteparten av infoen er hentet fra forelesningsnotater og slides.

Jeg har valgt å dele denne bloggposten opp i 5 deler, der jeg skal først introdusere litt om temaet for så å gå innom nøkkeltemaene **_objekt-orientert analyse (OOA)_** og **_objekt-orientert design (OOD)_** med designprinsippene **_GRASP_** og **_SOLID_**.

![Systemutvikling](/img/systemutvikling-post/systemutvikling.png)
[_Systemutvikling_ (🖼️ - **insidecreative.no**)](https://insidecreative.no/services/hjemmeside-for-bedrifter/systemutvikling/)

### Objekt-orienterte prinsipper og praksiser

**Objekt-orientert programmering (OOP)** har lenge vært en populær tilnærming av programvare. Dette er grunnet fordelene utviklere kan oppnå ved å organisere koden rundt konsepter som objekter og klasser. Når utviklere gjør dette vil de oppleve **_økt gjenbruk, fleksibilitet og lesbarhet_** i kodebasen, og dette fører til at programmet vil bli lettere å vedlikeholde og skalere.

Men (_ja det er et "men"_), det er ikke bare nok å følge OOP; det er viktig for utviklere å kjenne til og implementere velprøvde prinsipper og praksiser for å bygge solide systemer/applikasjoner.  
I tillegg så finnes det ulemper med å bruke disse prinsippene og praksisene i programvareutvikling. En utvikler kan føle at dette er en ganske **_tidskrevende_** prosess ettersom det innebærer betydlig planlegging og dokumentasjon på forhånd, samt. at det kan bli **_økt kostnad_** i forhold til andre programvareutviklingsmetodologier grunnet akkurat dette.

![OOA](/img/systemutvikling-post/ooa.jpeg)
[_OOA_ (🖼️ - **businessanalystlearnings.com**)](https://www.businessanalystlearnings.com/ba-techniques/2017/8/8/an-introduction-to-object-oriented-analysis)

### Objekt-Orientert Analyse (OOA)

Vi kan starte med en godt skrevet definisjon for OOA av **Grady Booch**:

> _Object-oriented analysis is a method of analysis that examines requirements from the perspective of the classes and objects found in the vocabulary of the problem domain_

La oss si at vi skal utvikle et slags system, si et bibioteksystem. Ved å bruke OOA kan vi identifisere objekter som bøker, bibliotekarer, utlånere osv. og definere deres attributter og oppførsel.

Her bruker vi ulike modeller for å representere den statiske strukturen, dynamiske oppførselen og de funksjonelle kravene til systemet. Dette gjør det lettere for oss utviklere å forstå systemet, eller applikasjonen, og dens funksjonalitet før vi går videre til designfasen.

> Noen av de vanligste modellene som brukes i OOA er deriblant klassediagrammer, use-case diagrammer, sekvensdiagrammer og tilstandsdiagrammer.

![OOD](/img/systemutvikling-post/ood.jpg)
[_OOD_ (🖼️ - **Derek Bananas on YouTube**)](https://www.youtube.com/watch?v=fJW65Wo7IHI)

### Objekt-Orientert Design (OOD)

Objekt-orientert design (OOD) er prosessen med å utforme løsningen for problemet som ble analysert i OOA, til et konkret design som er implementerbart.

Et vellykket OOD tar hensyn til prinsippene om lav kobling og høy sammenheng.

Fortsetter vi videre med eksempelet vårt over, _biblioteksystemet_, så kan vi designe klasser som "Bok", "Bibliotek", og "Bibliotekar" med tydelige ansvarsområder og godt definerte grensesnitt. Fordelene med dette er at koden vår blir **mer modulær, vedlikeholdbar og enklere å teste**.

Slik som OOA, bruker OOD også ulike modeller for å representere de ulike komponentene og interaksjonene i systemet, men disse er mer detaljrike og har flere implementasjonsspesifikke aspekter.

> Noen av de vanligste modellene som brukes i OOD er deriblant klassediagrammer, samarbeidsdiagrammer, komponentdiagrammer og distribusjonsdiagrammer.

![GRASP](/img/systemutvikling-post/grasp.png)
[_GRASP_ (🖼️ - **ArjanCodes on YouTube**)](https://www.youtube.com/watch?v=fGNF6wuD-fg)

#### ⤷ General Responsibility Assignment Software Principles (GRASP)

**GRASP** er et sett med **_ni prinsipper / retningslinjer_** som hjelper oss med å tildele ansvar til klassene våre på en effektiv måte. Kort sagt et slags mentalt verktøysett.

Dette prinsippet hjelper oss å lage klasser som er uavhengige av hverandre, samtidig som de er sterkt knyttet til sine egne ansvarsområder.

Disse ni prinsippene / retningslinjene er følgende:

- **_Skaper_** (Creator)
- **_Informasjonsekspert_** (Information Expert)
- **_Lab kobling_** (Low Coupling)
- **_Høy samhørighet_** (High Cohesion)
- **_Kontroll / styringsenhet_** (Controller)
- **_Indireksjon_** (Indirection)
- **_Polymorfi_** (Polymorphism)
- **_Beskyttet mot variasjon_** (Protected Variations)
- **_Ren fabrikkering_** (Pure Fabrication)

Fortsetter vi med bibliotekeksempelet vårt, så bør "Bok" være ansvarlig for å håndtere bokrelaterte operasjoner, mens "Bibliotek" skal være ansvarlig for administrasjonen av bøker og utlånsprosessen.

Disse teknikkene har ikke blitt oppfunnet for å skape nye måter å jobbe på, men for å forbedre dokumentasjon og standardisere gamle, velprøvde programmeringsprinsipper i OOD.  
Hver klasse vil ha en tydlig rolle og ansvaret vil være riktig fordelt, noe som resulterer i en mer fleksibel og vedlikeholdbar kodebase.

![SOLID](/img/systemutvikling-post/solid.jpg)
[_SOLID_ (🖼️ - **effectivesoftwaredesign.com**)](https://effectivesoftwaredesign.com/2015/04/22/do-solid-design-principles-make-code-slow/)

#### ⤷SOLID

**SOLID** er også et akronym som _GRASP_, og står for fem viktige prinsipper innenfor objekt-orientert design. Disse fem prinsippene lyder slik:

- **S** ingle Responsibility
  - prinsipp om at en klasse bør ha et ansvar og derfor bare en grunn til å endre seg.
  - _eksempel_: Klassen "Bok" skal kun være ansvarlig for bokrelaterte operasjoner, som å lagre metadata, hente informasjon og håndtere status.
- **O** pen-Closed
  - prinsipp om at en klasse skal være åpen for utvidelse, men lukket for endring.
  - _eksempel_: For biblioteksystemet kan vi oppnå dette ved å bruke abstrakte klasser og grensesnitt, slik at nye typer bøker eller utlånsregler kan legges til uten å endre den eksisterende koden.
- **L** iskov Substitution
  - prinsipp om at en subklasse bør kunne erstatte sin superklasse uten å bryte programmet.
  - _eksempel_: Hvis vi har en superklasse "Item" som inkluderer både bøker og digitale ressurser, bær vi kunne bruke objekter av begge typene problemfritt i systemet.
- **I** nterface Segregation
  - prinsipp om invertering av avhengigeter (riktig bruk av grensesnitt), mange spesifikke grensesnitt er bedre enn ett generelt grensesnitt.
  - _eksempel_: Vi kan i biblioteksystemet vårt definere spesifikke grensesnitt for ulike roller, eksempelvis "Utlånbart" for bøker som kan lånes ut.
- **D** ependency Inversion
  - prinsipp om invertering av avhengigeter (riktige koplinger, lav kopling), en klasse bør avhenge av abstraksjoner, ikke konkrete implementasjoner.
  - Bruk av avhengighetsinjeksjon sikrer at klassene våres er avhengige av abstraksjoner heller enn konkrete klasser.

Ved å følge disse fem prinsippene kan man skrive høykvalitets, vedlikeholdbar kode og designe systemer på en riktig måte.

## Konklusjon

Ved å bruke **OOA** og **OOD** kan utviklere få et grundigere og mer helhetlig bilde av systemet / applikasjonen de bygger, samtidig som de sikrer at koden deres er strukturert, fleksibel og enkel å vedlikeholde.  
Disse spiller altså en avgjørende rolle i utviklingen av solide og vedlikeholdbare applikasjoner.

**GRASP**-prinsippene vil gi veiledning for riktig kobling og ansvarsfordeling mellom klassene våres.  
**SOLID**-prinsippene vil gi en klar retning for å oppnå god designpraksis, med fokus på enkelt ansvar, åpen for utvidele og lukket for endring, substituerbarhet, grensesnitts-sergregasjon og avhengighetsinversjon.

Utviklere kan, ved å følge disse prinsippene / praksisene, skape programvareløsninger som er fleksible, skalerbare og enklere å vedlikeholde over tid. Dette gjør at utviklere får en solid grunnmur for å bygge komplekse systemer med en effektiv og strukturert utviklingsprosess.
