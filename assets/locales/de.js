const generalSuggestions = [
  'husten und niesen Sie nur in Ihre Armbeuge',
  'waschen Sie oft und gründliche Ihre Hände',
  'halten Sie 2m Abstand zu anderen Personen'
]

export default {
  global: {
    yes: 'Ja',
    no: 'Nein',
    ok: 'Ok'
  },
  index: {
    title: 'Corona-Virus',
    description: `Habe ich mich mit dem Corona-Virus angesteckt? 
        Hier erfahren Sie, ob eine Infektion wahrscheinlich ist.
        Wir helfen Ihnen bei der Entscheidung, was dann zu tun ist. 
        Bitte beantworten Sie die Fragen, BEVOR Sie einen Arzt oder eine Hotline anrufen.`,
    cta: 'Zum Fragebogen'
  },
  disclaimer: `Dieser Fragebogen ist derzeit in Entwicklung und soll als
        Entscheidungshilfe vor einem Anruf bei dem Gesundheitsamt dienen.
        Der Fragebogen wurde mit Ärzten entwickelt und orientiert sich an den Angaben des Robert-Koch-Instituts (RKI).
        Er kann jedoch keinen persönlichen Arztbesuch ersetzen.`,
  results: {
    headline: 'Ergebnis',
    todosLabel: 'Das sollten Sie tun:',
    searchInfo: 'Sie können unten nach Ihrem lokalen Gesundheitsamt suchen.',
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
        label:
          'Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt! Sie sollten außerdem vorsorglich Ihren Hausarzt anrufen.',
        result:
          'Bei Ihnen besteht erhöhter Verdacht auf eine Corona-Infektion. Sie haben aufgrund von Alter oder Vorerkrankungen ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.',
        todos: [
          'bewahren Sie Ruhe',
          'vermeiden Sie direkten Personenkontakt',
          'wenn Sie das Haus verlassen, tragen Sie bitte einen Mundschutz',
          ...generalSuggestions
        ]
      },
      '2_symptoms_withContact_noRisk': {
        label: 'Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt!',
        result:
          'Bei Ihnen besteht erhöhter Verdacht auf eine Corona-Infektion.',
        todos: [
          'bewahren Sie Ruhe',
          'vermeiden Sie direkten Personenkontakt',
          'wenn Sie das Haus verlassen, tragen Sie bitte einen Mundschutz',
          ...generalSuggestions
        ]
      },
      '3_symtoms_withoutContact_risk': {
        label:
          'Sie müssen vorerst <u>nicht</u> beim Gesundheitsamt anrufen. Sie sollten allerdings vorsorglich Ihren Hausarzt anrufen.',
        result:
          'Derzeit besteht bei Ihnen <u>kein</u> erhöhter Verdacht auf eine Corona-Infektion. Sie haben aufgrund von Alter oder Vorerkrankungen im Falle einer Infektion ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.',
        todos: [
          'bewahren Sie Ruhe',
          'verlassen Sie Ihre Wohnung nur, wenn unbedingt notwendig und tragen Sie außer Haus einen Mundschutz',
          ...generalSuggestions
        ]
      },
      '4_symtoms_withoutContact_noRisk': {
        label: 'Sie müssen vorerst <u>nicht</u> beim Gesundheitsamt anrufen.',
        result:
          'Derzeit besteht bei Ihnen <u>kein</u> erhöhter Verdacht auf eine Corona-Infektion.',
        todos: [
          'bewahren Sie Ruhe',
          'kontaktieren Sie telefonisch Ihren Hausarzt, wenn sich Ihre Symptome verschlechtern',
          'verlassen Sie Ihre Wohnung nur, wenn unbedingt notwendig und tragen Sie außer Haus einen Mundschutz',
          ...generalSuggestions
        ]
      },
      '5_noFeatures_noRisk': {
        label:
          'Sie müssen sich vorerst <u>nicht</u> beim Gesundheitsamt anrufen.',
        result:
          'Derzeit besteht bei Ihnen <u>kein</u> erhöhter Verdacht auf eine Corona-Infektion.',
        todos: [
          'bewahren Sie Ruhe',
          'bleiben Sie zu Hause',
          ...generalSuggestions
        ]
      },
      '6_noFeatures_risk': {
        label:
          'Sie müssen sich vorerst <u>nicht</u> beim Gesundheitsamt anrufen.',
        result:
          'Derzeit besteht bei Ihnen <u>kein</u> erhöhter Verdacht auf eine Corona-Infektion. Sie haben aufgrund von Alter oder Vorerkrankungen im Falle einer Infektion ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.',
        todos: [
          'bewahren Sie Ruhe',
          'bleiben Sie zu Hause',
          ...generalSuggestions
        ]
      },
      '7_directContact_risk': {
        label:
          'Bitte melden sie sich bei Ihrem zuständigen Gesundheitsamt! Sie hatten Kontakt zu einer infizierten Person.',
        result:
          'Derzeit besteht bei Ihnen <u>kein</u> erhöhter Verdacht auf eine Corona-Infektion. Sie haben aufgrund von Alter oder Vorerkrankungen im Falle einer Infektion ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.',
        todos: [
          'bewahren Sie Ruhe',
          'bleiben Sie zu Hause',
          'vermeiden Sie direkten Personenkontakt',
          ...generalSuggestions
        ]
      },
      '8_directContact_noRisk': {
        label:
          'Bitte melden sie sich bei Ihrem zuständigen Gesundheitsamt! Sie hatten Kontakt zu einer infizierten Person.',
        result:
          'Derzeit besteht bei Ihnen <u>kein</u> erhöhter Verdacht auf eine Corona-Infektion.',
        todos: [
          'bewahren Sie Ruhe',
          'bleiben Sie zu Hause',
          'vermeiden Sie direkten Personenkontakt',
          ...generalSuggestions
        ]
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
