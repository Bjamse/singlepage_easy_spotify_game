# todo

Ok, så vi har gjort en del. men nå sitter vi litt fast og vi må nok oppgradere for å få ting til å faktisk funke som vi vill.

## prototype en ny side
er nok lurt å prototype en ny side for å prøve og feile oss fram til et lobby system.
- om vi har alt på en page og ikke driver med pos/get så er det nok lettere.
  - men vi kan ta en get for bare joine et spesifikt rom.
- rom bør ha adjektiv-dyr som navn/nøkkel/hint/identifikator.
  - dette kan sikkert bli brukt som nøkkel i en dele link for å joine rommet.


- på serversia:
  - array med rom objekter
  - rom har en dedikert eier
  - rom forsvinenr etter 2 timer om de er inaktive?
    - er dette lurt? burde vi ha andre mekanismer? virker som e napin å tracke...
  - funksjoner:
    - create room
    - join room
    - chat? v0.3
    - v0.4


- client sia:
  - undersøk reconnect 
    - hvordan funker det?
    - bugs?
    - reliable?
    - samme id?
  - aktive brukere per om eller antall bare?
  - brukernavn? v0.2
  - kansje add dev mode?
    - info om litt av hvert?
    - timers?
  - current liste brukere


## Oauth 2.0
Etabler oauth 2.0 med spotify for brukere.
dette kommer til å være en pain!!!!
vi må
 - starte en heroku server eller lignende
 - gjerne med et domene
 - sette redirect
 - catche en key eller token eller hva det er spotify sender meg


## song selecteion
- room owner setter rom til felles liste
  - ny eller etablert i append mode
  - legg til bilde - v.0.2
- add sang direkte
  - bruker room owners token for tilgang til liste
- one click add sang fra most played 
  - få liste og velg 1/flere fra mest spillte v.2
- add fra sjanger - v0.3 
  - se om vi kan gjøre noe på det.
  - sånn kanskje liste sjangere fra din egene spillelister.
  - vis kun sanger som passer i de.
  - felles sjanger vlag og vis kun sjangere fra felles sjangere


# V2.0 - ikke spotify brukere får være med via youtube / apple music (kanskej aldri)