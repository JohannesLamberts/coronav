export default {
  global: {
    yes: 'Ja',
    no: 'Nein',
    ok: 'Ok'
  },
  disclaimer: `Dieser Check ist derzeit in Entwicklung und soll als 
        Entscheidungshilfe vor einem Anruf bei der 116117 oder dem Gesundheitsamt dienen.
        Der Check wurde mit Ärzten entwickelt, kann jedoch keinen persönlichen Arztbesuch ersetzen.`,
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
      'Ihre Symptome sprechen nicht für einen Test, Sie gehören nicht zur Risikogruppe -> Zum Arzt, Selbstisolation.',
    noTestNoSymptomsRisk:
      'Sie gehören zur Risikogruppe -> Zu Hause, auf Symptome achten.',
    noTestNoSymptomsNoRisk: 'Alles ist gut. Kontakte vermeiden.',
    cases: {
      '1_symptoms_withContact_risk':
        'Sie haben Kontakt gehabt und weisen Symptome auf. Sie gehören außerdem zur Risikogruppe.',
      '2_symptoms_withContact_noRisk':
        'Sie haben Kontakt gehabt und weisen Symptome auf. Sie gehören allerdings nicht zur Risikogruppe.',
      '3_symtoms_withoutContact_risk':
        'Sie haben keinen Kontakt gehabt, weisen aber allgemeine Symptome auf. Sie gehören außerdem zur Risikogruppe.',
      '4_symtoms_withoutContact_noRisk':
        'Sie haben keinen Kontakt gehabt, weisen aber allgemeine Symptome auf. Sie gehören allerdings nicht zur Risikogruppe.',
      '7_directContact_risk':
        'Sie haben keine Symptome, hatten aber direkten Kontakt. Sie gehören zur Risikogruppe.',
      '8_directContact_noRisk':
        'Sie haben keine Symptome, hatten aber direkten Kontakt. Sie gehören auch nicht zur Risikogruppe.',
      '6_areaContact_risk':
        'Sie haben keine Symptome, waren aber in einem Risikogebiet oder einem besonders betroffenen Gebiet. Sie gehören außerdem zur Risikogruppe.',
      '5_areaContact_noRisk':
        'Sie haben keine Symptome, waren aber in einem Risikogebiet oder einem besonders betroffenen Gebiet. Sie gehören allerdings nicht zur Risikogruppe.',
      '6_noFeatures_risk':
        'Sie haben keine Symptome, hatten auch keinen Kontakt und waren auch nicht in einem Risikogebiet. Sie gehören außerdem zur Risikogruppe.',
      '5_noFeatures_noRisk':
        'Sie haben keine Symptome, hatten auch keinen Kontakt und waren auch nicht in einem Risikogebiet. Sie gehören auch nicht zur Risikogruppe.'
    },
    testCase: {
      steps: [
        'Rufen Sie ihr lokales Gesundheitsamt an',
        'Bereiten Sie sich auf die ärztliche Anamnese vor'
      ]
    }
  },
  test: {
    title: 'Fragebogen',
    steps: {
      symptoms: {
        label: 'Haben Sie eines oder mehrere der folgenden Symptome?',
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
        info: 'Direkten Kontakt hatten Sie, wenn...',
        infoList: [
          'Sie mit dieser Person im selben Haushalt leben ODER',
          'Sie mindestens 15 Minuten persönlichen Kontakt zu dieser Person, zum Beispiel in einem Gespräch hatten ODER',
          'Körperflüssigkeiten auf Sie übertragen werden konnten, z.B. durch Küssen, Anniesen oder Anhusten'
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
        label: 'Haben Sie eine oder mehrere der folgenden Diagnosen?',
        list: [
          'Herzerkrankung',
          'Bluthochdruck',
          'Diabetes',
          'Fettleibigkeit',
          'Lungenerkrankung',
          'Lebererkrankung',
          'Nierenerkrankung'
        ]
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
