export default {
  global: {
    yes: 'Ja',
    no: 'Nein',
    ok: 'Ok'
  },
  disclaimer: `Dieser Check soll über die Symptome und Erkrankungswahrscheinlichkeit der
        aktuellen Corona Pandemie informieren. Der Check wurde von Ärzten
        entwickelt, kann jedoch keinen persönlichen Arztbesuch ersetzen. Bitte
        richten Sie sich ebenfalls nach Ihren landesspezifischen Richtlinien.
        Sollte Ihnen der Check eine ärztliche Rücksprache empfehlen, wenden Sie
        sich bitte telefonisch an Ihren Hausarzt oder wählen Sie die 116117 - die
        Nummer des ärztlichen Bereitschaftsdienstes.`,
  results: {
    headline: 'Ergebnis',
    noResult: 'Bitte starten Sie den Test von der Frageseite.',
    testRisk:
      'Sie sollten einen Test machen und gehören zur Risikogruppe. -> PLZ, Teststellen, Hotlines.',
    testNoRisk:
      'Sie sollten einen Test machen, aber gehören nicht zur Risikogruppe. -> PLZ, Teststellen, Hotlines.',
    noTestSymptomsRisk:
      'Sie müssen keinen Test machen, aber gehören zur Risikogruppe. -> Zum Arzt wegen Symptomen (normale Erkältung), Selbstisolation.',
    noTestSymptomsNoRisk:
      'Ihre Symptome sprechen nicht für einen Test, sie gehören nicht zur Risikogruppe -> Zum Arzt, Selbstisolation.',
    noTestNoSymptomsRisk:
      'Sie gehören zur Risikogruppe -> Zu Hause, auf Symptome achten.',
    noTestNoSymptomsNoRisk: 'Alles ist gut. Kontakte vermeiden.'
  },
  test: {
    title: 'Fragebogen',
    steps: {
      symptoms: {
        label: 'Haben Sie eines der folgenden Symptome?',
        list: [
          'allgemeines Krankheitsgefühl',
          'laufende Nase',
          'Fieber',
          'Husten',
          'Halsschmerzen',
          'Atembeschwerden'
        ]
      },
      directContact: {
        label:
          'Hatten Sie in den letzten 14 Tagen direkten Kontakt zu einer Person, die positiv auf eine Corona-Infektion getestet wurde?',
        info: 'Direkter Kontakt bedeutet etwa:',
        infoList: [
          'Mindestens 14 Min. persönlicher Kontakt zu dieser Person, z.B. in einem Gespräch ODER',
          'Austausch von Körperflüssigkeiten über Küssen, Anniesen oder Anhusten'
        ]
      },
      riskArea: {
        label:
          'Haben Sie sich in den letzten 14 Tagen in einem Risikogebiet oder einem besonders betroffenen Gebiet aufgehalten?'
      },
      ageRisk: {
        label: 'Sind Sie 50 Jahre oder älter?'
      },
      patientHistoryRisk: {
        label: 'Haben Sie eine oder mehrere der folgenden Vorerkrankungen?',
        list: ['Not yet defined', 'Not yet defined too']
      }
    }
  },
  components: {
    hotlineSearch: {
      labelText: 'Postleitzahl eingeben',
      buttonText: 'Gesundheitsamt suchen'
    },
    riskAreas: {
      title: 'Risikogebiete',
      countries: [
        { name: 'Ägypten', riskArea: 'ganzes Land' },
        { name: 'China', riskArea: 'Provinz Hubei (inkl. Stadt Wuhan)' },
        {
          name: 'Frankreich',
          riskArea:
            'Region Grand Est (diese Region enthält Elsass, Lothringen und Champagne-Ardenne)'
        },
        { name: 'Iran', riskArea: 'ganzes Land' },
        { name: 'Italien', riskArea: 'ganzes Land' },
        { name: 'Österreich', riskArea: 'Bundesland Tirol' },
        { name: 'Spanien', riskArea: 'Madrid' },
        {
          name: 'Südkorea',
          riskArea: 'Provinz Gyeongsangbuk-do (Nord-Gyeongsang)'
        },
        {
          name: 'USA',
          riskArea: 'Bundesstaaten Kalifornien, Washington und New York'
        }
      ],
      germany: {
        title: 'Besonders betroffene Gebiete in Deutschland',
        areas: [{ name: 'Landkreis Heinsberg (Nordrhein-Westfalen)' }]
      }
    }
  }
}
