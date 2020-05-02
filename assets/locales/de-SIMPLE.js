const generalTodos = [
  'Waschen Sie oft und gründliche Ihre Hände',
  'Halten Sie 2m Abstand zu anderen Personen',
  'Husten und niesen Sie nur in Ihre Armbeuge'
]

const symptomTodos = [
  'Bleiben Sie bitte zuhause',
  'Vermeiden Sie direkten Personenkontakt',
  'Wenn Sie das Haus verlassen müssen, tragen Sie bitte einen Mundschutz',
  ...generalTodos
]

const noSymptomTodos = ['Bleiben Sie, wenn möglich, zuhause', ...generalTodos]
const noSymptomDirectContactTodos = [
  'Bleiben Sie, wenn möglich, zuhause',
  'Vermeiden Sie direkten Personenkontakt',
  ...generalTodos
]

const resultTexts = {
  contactPublicHealthDepartment: 'Bitte rufen Sie bei Ihrem Gesundheitsamt an.',
  doNotContactPublicHealthDepartment:
    'Sie müssen vorerst NICHT beim Gesundheitsamt anrufen.',
  suspectedCase: 'Es kann gut sein, dass Sie das Coronavirus haben.',
  noSuspectedCase: 'Vermutlich haben Sie das Coronavirus nicht.',
  noRiskTakeCare: `Auch wenn Sie nicht zur Risikogruppe gehören, können Sie 
Überträger sein oder werden. Schützen Sie sich und andere!`,
  riskInfo: `Wegen Ihres Alters oder Ihren Vorerkrankungen könnten Sie an dem
Coronavirus schwerer krank werden.`,
  contactWithoutSymptoms: `Sie hatten Kontakt zu einer infizierten Person. Derzeit besteht bei Ihnen KEIN
erhöhter Verdacht auf eine CoronaInfektion.`,
  contactDoctor: 'Sie sollten Ihren Hausarzt anrufen.',
  contactDoctorIfWorsens:
    'Wenn sich Ihre Symptome verschlechtern, kontaktieren Sie bitte einen Arzt.'
}

export default {
  index: {
    title: 'Coronavirus-Infektion?',
    logoTitle: 'Zur CoroNav Startseite',
    description: `Dies ist ein Fragebogen.

Er hilft Ihnen zu klären, ob Sie sich mit dem Coronavirus angesteckt haben könnten.

Wir sagen Ihnen, was Sie dann tun sollten.`
  },
  questions: {
    disclaimer: {
      label: 'Disclaimer',
      info: `Dies ist ein kostenloses Angebot.

Es ist wissenschaftlich aktuell.

Es richtet sich nach den Empfehlungen des Robert Koch-Instituts und der Bundesregierung.

Im Moment ist es in der Entwicklung.

Es soll bei der ersten Einschätzung helfen.

Es soll eine Entscheidungshilfe sein.

Es kann keinen Arzt ersetzen.

Bei schlimmer Krankheit rufen Sie einen Arzt an.

In Notfällen rufen Sie die Nummer 112 an. `
    },
    symptoms_1: {
      label: 'Haben Sie eines oder mehrere dieser Krankheitszeichen? ',
      info: `- Fieber
- Husten
- Atembeschwerden`
    },
    symptoms_2: {
      label: 'Haben Sie eines oder mehrere dieser Krankheitszeichen? ',
      info: `- Laufende Nase
- Halsschmerzen
- Kopfschmerzen`
    },
    symptoms_3: {
      label: 'Haben Sie eines oder mehrere dieser Krankheitszeichen? ',
      info: `- Durchfall
- weniger schmecken, weniger riechen`
    },
    workRiskContact: {
      label: 'Kommen Sie öfter mit älteren oder kranken Menschen in Kontakt?'
    },
    directContact: {
      label:
        'Hatten Sie in den letzen 2 Wochen direkten Kontakt mit einer Person mit Coronavirus?',
      info: `Direkter Kontakt heißt:
- Sie leben mit der Person zusammen ODER
- Sie hatten mindestens 15 Minuten mit der Person persönlichen Kontakt. Zum Beispiel in einem Gespräch ODER
- Diese Person hat Sie geküsst ODER
- Diese Person hat Sie angehustet`
    },
    ageRisk: {
      label: 'Sind Sie 50 Jahre oder älter?'
    },
    patientDiagnoseRisk: {
      label: 'Haben Sie eine oder mehrere dieser Krankheiten?',
      info: `- Bluthochdruck
- Diabetes (Zuckerkrankheit)
- Fettleibigkeit`
    },
    patientOrganRisk: {
      label: 'Haben Sie eine oder mehrere Krankheiten dieser Organe?',
      info: `- Herz
- Leber
- Niere
- Magen-Darm`
    },
    patientImmuneRisk: {
      label: 'Haben Sie ein unterdrücktes Immunsystem?',
      info: `zum Beispiel wegen:
- Organtransplantation
- Krebserkrankung
- Chemotherapie
- Einname von Kortison-Tabletten
- HIV/AIDS
- Andere Gründe`
    }
  },
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
        label: `${resultTexts.contactPublicHealthDepartment}
${resultTexts.suspectedCase}`,
        result: `${resultTexts.contactDoctor} 

${resultTexts.riskInfo}`,
        todos: symptomTodos
      },
      '2_symptoms_withContact_noRisk': {
        label: `${resultTexts.contactPublicHealthDepartment}
${resultTexts.suspectedCase}`,
        result: `${resultTexts.noRiskTakeCare}`,
        todos: symptomTodos
      },
      '3_symptoms_withoutContact_risk': {
        label: `${resultTexts.doNotContactPublicHealthDepartment}
${resultTexts.noSuspectedCase}`,
        result: `${resultTexts.riskInfo}

${resultTexts.contactDoctor}`,
        todos: symptomTodos
      },
      '4_symptoms_withoutContact_noRisk': {
        label: `${resultTexts.doNotContactPublicHealthDepartment}
${resultTexts.noSuspectedCase}`,
        result: `${resultTexts.contactDoctorIfWorsens}

${resultTexts.noRiskTakeCare}`,
        todos: symptomTodos
      },
      '5_noFeatures_noRisk': {
        label: `${resultTexts.doNotContactPublicHealthDepartment} 
${resultTexts.noSuspectedCase}`,
        result: `${resultTexts.noRiskTakeCare}`,
        todos: noSymptomTodos
      },
      '6_noFeatures_risk': {
        label: `${resultTexts.doNotContactPublicHealthDepartment} 
${resultTexts.noSuspectedCase}`,
        result: `${resultTexts.riskInfo}`,
        todos: noSymptomTodos
      },
      '7_directContact_risk': {
        label: `${resultTexts.contactPublicHealthDepartment}
${resultTexts.contactWithoutSymptoms}`,
        result: `${resultTexts.riskInfo}`,
        todos: noSymptomDirectContactTodos
      },
      '8_directContact_noRisk': {
        label: `${resultTexts.contactPublicHealthDepartment}
${resultTexts.contactWithoutSymptoms}`,
        result: `${resultTexts.noRiskTakeCare}`,
        todos: noSymptomDirectContactTodos
      }
    }
  }
}
