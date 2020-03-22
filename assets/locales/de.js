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
    additionalRessources: {
      label: 'Mehr Informationen finden Sie auf folgenden Seiten:',
      pages: [
        {
          label: 'Infektionsschutz.de',
          url: 'https://www.infektionsschutz.de/'
        },
        {
          label: 'RKI - COVID-19',
          url:
            'https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html'
        }
      ]
    },
    cases: {
      '1_symptoms_withContact_risk': {
        label: 'Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt!',
        info: 'Sie können unten nach Ihrem lokalen Gesundheitsamt suchen.',
        items: [
          'bei Ihnen besteht erhöhter Verdacht auf eine Corona-Infektion',
          'Sie haben aufgrund von Alter oder Vorerkrankungen ein erhöhtes Risiko für einen schwereren Krankheitsverlauf',
          'beachten Sie Husten und Niesregeln',
          'beachten Sie die Händehygiene',
          'halten Sie 2m Abstand zu anderen Personen'
        ]
      },
      '2_symptoms_withContact_noRisk': {
        label: 'Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt!',
        info: 'Sie können unten nach Ihrem lokalen Gesundheitsamt suchen.',
        items: [
          'bei Ihnen besteht erhöhter Verdacht auf eine Corona-Infektion',
          'beachten Sie Husten und Niesregeln',
          'beachten Sie die Händehygiene',
          'halten Sie 2m Abstand zu anderen Personen'
        ]
      },
      '3_symtoms_withoutContact_risk': {
        label:
          'Bitte bleiben Sie zuhause. Sie müssen sich vorerst nicht beim Gesundheitsamt melden.',
        items: [
          'Derzeit besteht bei Ihnen kein erhöhter Verdacht auf eine Corona-Infektion.'
        ]
      },
      '4_symtoms_withoutContact_noRisk': {
        label: '',
        items: []
      },
      '7_directContact_risk': {
        label: '',
        items: []
      },
      '8_directContact_noRisk': {
        label: '',
        items: []
      },
      '6_areaContact_risk': {
        label: '',
        items: []
      },
      '5_areaContact_noRisk': {
        label: '',
        items: []
      },
      '6_noFeatures_risk': {
        label: '',
        items: []
      },
      '5_noFeatures_noRisk': {
        label: '',
        items: []
      }
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
        title: 'Symptome',
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
        title: 'Kontakte',
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
        title: 'Risikogebiete',
        label:
          'Haben Sie sich in den letzten 14 Tagen in einem Risikogebiet oder einem besonders betroffenen Gebiet aufgehalten?'
      },
      ageRisk: {
        title: 'Alter',
        label: 'Sind Sie 50 Jahre oder älter?'
      },
      patientHistoryRisk: {
        title: 'Vorerkrankungen',
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
