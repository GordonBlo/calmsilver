# CalmSilver — ellenőrzési jelentés, 2026. október 14.

A jelentés az előzetes ellenőrzés eredményeit rögzíti. A tulajdonos 2026. október 14-én jóváhagyta ennek a változatnak a publikálását, a jelzett hiányok megoldottnak nyilvánítása nélkül. A szabályzatok jelölt tervezetek: nem állítanak teljes GDPR-megfelelést.

## Elkészült

| Terület | Eredmény |
| --- | --- |
| Szabályzatok | Román, angol és magyar adatkezelési és sütitájékoztató, a tényleges statikus oldalhoz igazítva. |
| Hozzáférés | Megmaradó jogi ablakok, valódi lábléclinkek, hat önálló, JavaScript nélkül is olvasható szabályzatoldal; link az űrlapnál is. |
| Sütipanel | Egyetlen opcionális funkció: a nyelv megjegyzése. Elfogadás, elutasítás, testreszabás és későbbi visszavonás. |
| Tárolás | Aktív oldalon is ellenőrzött lejárat, hibás döntések kezelése és több lap közötti visszavonás. |
| E-mail | Működő címként szerepel a hello@calmsilver.com; a régi aktiválási szövegek kikerültek. Az e-mail-tervezet és a másolás megmaradt. |
| Megjelenés | A fejléc, a teljes main elem, az eredeti stíluslapok, a logó és mindkét ANPC/SAL-kép fájlszinten változatlan. |

Nem adtunk hozzá követést, adatbázist vagy függőséget. Nem szerepel kitalált cím, CUI/CIF, nyilvántartási szám, megőrzési idő vagy adattovábbítási garancia.

A hozzájárulási séma 2-es verzióra váltott. Későbbi publikáláskor a régi, 1-es verziójú döntés helyett új választást kér az oldal. Addig a nyelv nem marad meg, de a nyelvválasztó működik.

## Igazolt tények és korlátaik

| Megállapítás | Bizonyíték / korlát |
| --- | --- |
| Domain és Sites | A meglévő projekt elérhető; calmsilver.com és SSL aktív, a közönség nyilvános. |
| GitHub és korábbi Sites-forrás egyezik | A két commit azonos teljes Git-fája: 697fbb2e57b30b0a8bb487de9bd28db43e055969. |
| Az élő kód egyezik a kiindulással | Mindkét root HTML, valamint a custom domain CSS-, app.js- és consent.js-válasza bájtra egyezik. |
| Saját tárolás | calmsilver.consent: 180 nap; calmsilver.language: engedéllyel. A 180 nap a meglévő kódból igazolt érték, nem e-mail-megőrzési idő. |
| Tárhelyoldali süti | HTTP-ben észlelt __cf_bm, HttpOnly és Secure jelöléssel; Cloudflare-dokumentáció szerint botvédelem, 30 perc inaktivitás. A saját panel nem törli. |
| Nincs saját analitika vagy űrlapbeküldés | Kód- és működési ellenőrzések. Ez nem igazolja a platform összes belső adatfolyamatát. |
| E-mail és Zoho EU | Tulajdonosi megerősítés: működő postaláda, EU-fiók, egyedüli hozzáférés, automatikus továbbítás nélkül. Nem küldtünk levelet és nem léptünk be a fiókba. |

Egy Python HTTP-köteg 403-as válaszokat kapott. Ezeket nem számítottuk sikernek; a későbbi normál curl-lekérések öt erőforrásra 200-as, egyező választ adtak. A [lelet](legal/live-audit.json) nem tartalmaz sütiazonosító-értékeket. Ez HTTP-ellenőrzés, nem teljes böngészős sütileltár.

## Tulajdonosi döntés vagy jogi ellenőrzés szükséges

1. **Kapcsolattartási adatok:** a 410050 önmagában nem teljes postai elérhetőség. Tisztázni kell a megfelelő postai adatot és annak közzétételi szükségességét a bejegyzés előtti helyzetben. Lakcímet nem következtettünk ki.
2. **E-mailek megőrzése:** még nincs tényleges szabály. Meg kell határozni az érdeklődések, csatolmányok, másolatok és törölt levelek kezelését. A honlapszöveg nem hajt végre postaláda-törlést.
3. **Szolgáltatói szerződések:** az adott Sites- és Zoho-fiók szerződő fele, szerepe, adatfeldolgozási megállapodása, megőrzése, feldolgozási helye és adattovábbítási garanciái. A nyilvános általános DPA létezése nem igazolja alkalmazhatóságát erre az előfizetésre.
4. **Jogalapok:** szerződés előtti lépések/jogos érdek helyes használata, érdekmérlegelés és az infrastruktúra biztonsági sütijének besorolása.
5. **ANPC/SAL:** a meglévő jelvények alkalmazhatósága a tényleges szolgáltatás és a későbbi PFA esetén. A jóváhagyott képek és linkek megmaradtak.
6. **További adatfelhasználás:** ha e-mailek CRM-be, AI-eszközbe, más postaládába vagy hírlevélrendszerbe kerülnek, azt is dokumentálni kell. Ilyen folyamatot nem állítottunk igazolt tényként.

A tervezetek jelzik a nyitott pontokat. Ezeket ellenőrzés nélkül nem szabad pusztán eltüntetni vagy általános ígéretekre cserélni.

## Tesztek és biztonsági korlátok

A szintaktikai, HTML-erőforrás-, fordítási és működési regressziós ellenőrzések sikeresek. A nyelvváltás, e-mail, másolás, hozzájárulás, lejárat és több lap közötti visszavonás tesztelt.

Támogatott böngészős eszköz nem volt elérhető. A tényleges mobilos megjelenés, a natív fókuszcsapda, az Escape-viselkedés, a képernyőolvasó és a teljes hálózati/sütileltár **nincs igazolva**. A leltártáblázat a CSS szerint saját görgethető keretben marad; ez nem megjelenítési teszt.

A mintaválaszokban nem észleltünk HSTS, CSP, X-Content-Type-Options, X-Frame-Options vagy Referrer-Policy HTTP-fejlécet. A frissítés referrer-policy metaelemet tartalmaz, amely nem állít elő HTTP-fejléceket. A tárhely fejlécbeállítási lehetőségeit tisztázni kell.

Részletes eredmények és kézi lépések: [VALIDATION.md](VALIDATION.md).

## Közzététel

A tulajdonos a jelenlegi, változatlan jogi szöveget publikálásra jóváhagyta. A nyitott tények jelzései megmaradnak. A meglévő Sites-projektbe a jóváhagyott forrást külön kell menteni és telepíteni, a GitHub maint pedig külön szinkronizálni. GitHub-commitból nincs automatikus Sites-frissítés.

## Elsődleges források

- [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
- [EDPB Cookie Banner Taskforce](https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf)
- [Cloudflare sütidokumentáció](https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/)
- [Román 506/2004. törvény](https://legislatie.just.ro/Public/DetaliiDocumentAfis/56973)
- [Zoho – EU-adatközpont azonosítása](https://www.zoho.com/mail/help/api/getting-started-with-api.html)
- [ANSPDCP panaszok](https://www.dataprotection.ro/?page=Plangeri_pagina_principala)
- [Zoho adatvédelem](https://www.zoho.com/privacy.html)
- [OpenAI adatvédelem](https://openai.com/policies/privacy-policy/)
- [OpenAI általános DPA; alkalmazhatósága tisztázandó](https://openai.com/policies/data-processing-addendum/)

A két csatolt román PDF tartalmi kiindulópont volt. Változatlanul egyik sem került közzétételre vagy végleges szabályzatként feltöltésre.
