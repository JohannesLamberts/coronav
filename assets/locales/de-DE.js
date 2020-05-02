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
  contactPublicHealthDepartment:
    'Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt.',
  doNotContactPublicHealthDepartment:
    'Sie müssen vorerst NICHT beim Gesundheitsamt anrufen.',
  suspectedCase:
    'Bei Ihnen besteht erhöhter Verdacht auf eine Coronavirus-Infektion.',
  noSuspectedCase:
    'Derzeit besteht bei Ihnen KEIN erhöhter Verdacht auf eine Corona-Infektion.',
  noRiskTakeCare: `Auch wenn Sie nicht zur Risikogruppe gehören, können Sie 
Überträger sein oder werden. Schützen Sie sich und andere!`,
  riskInfo: `Sie haben aufgrund von Alter oder Vorerkrankungen Im Falle
einer Infektion ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.`,
  contactWithoutSymptoms: `Sie hatten Kontakt zu einer infizierten Person. Derzeit besteht bei Ihnen KEIN
erhöhter Verdacht auf eine CoronaInfektion.`,
  contactDoctor: 'Sie sollten vorsorglich Ihren Hausarzt anrufen.',
  contactDoctorIfWorsens:
    'Wenn sich Ihre Symptome verschlechtern, kontaktieren Sie bitte einen Arzt.'
}

export default {
  choices: {
    ok: 'Ok',
    yes: 'Ja',
    no: 'Nein'
  },
  index: {
    title: 'Coronavirus-Infektion?',
    logoTitle: 'Zur CoroNav Startseite',
    description: `Hier erfahren Sie, ob eine Infektion wahrscheinlich ist.
Dieser Navigator leitet Sie sicher durch einige Fragen.

Es kann geklärt werden: 
- welche Symptome Sie aufweisen
- ob es sich tatsächlich um eine Coronavirus-Infektion handeln könnte.

Anschließend erhalten Sie:
- eine Empfehlung wie Sie weiter vorgehen sollten
- Kontakt-Information zum Gesundheitsamt in Ihrer Region.

*Vielen Dank, dass Sie mithelfen Ärzte und Hotlines zu entlasten!*

Bitte beachten Sie:

Ein Test wird nach wie vor vom Gesundheitsamt oder von ärztlicher Seite 
angeordnet.

Die Anordnung erfolgt nach Kriterien, die sich entsprechend der 
aktuellen Entwicklungen der Pandemie ändern. Die aktuellen Kriterien 
sind in der Anwendung bereits berücksichtigt. Sie können Sie zusätzlich 
[direkt beim Robert Koch-Institut](https://www.rki.de/SharedDocs/FAQ/NCOV2019/gesamt.html) 
abrufen.`,
    cta: 'Starten'
  },
  impressum: {
    title: 'Impressum'
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
  },
  testProgress: {
    ariaLabel: 'Fortschritt:'
  },
  questions: {
    disclaimer: {
      label: 'Disclaimer',
      info: `Dieser Navigator wird auf Basis
aktuellster wissenschaftlicher
Empfehlungen des Robert Koch-Instituts
und der Bundesregierung zur Verfügung
gestellt. Er befindet sich derzeit in
Entwicklung und soll als
Ersteinschätzung und Entscheidungshilfe
vor einem Anruf beim Arzt oder
Gesundheitsamt dienen
Die Anwendung kann keine ärztliche
Diagnose ersetzen. Bei akuten
Symptomen oder Zweifeln wenden Sie
sich bitte an einen Arzt.
In dringenden Notfällen rufen Sie die 112
an.`
    },
    symptoms_1: {
      label: 'Haben Sie eines oder mehrere der folgenden Symptome?',
      info: `- Fieber
- Husten
- Atembeschwerden`
    },
    symptoms_2: {
      label: 'Haben Sie eines oder mehrere der folgenden Symptome?',
      info: `- Laufende Nase
- Halsschmerzen
- Kopfschmerzen
- allgemeines Krankheitsgefühl`
    },
    symptoms_3: {
      label: 'Haben Sie eines oder mehrere der folgenden Symptome?',
      info: `- Durchfall
- reduzierter Geruchs- oder Geschmackssinn`
    },
    workRiskContact: {
      label:
        'Kommen Sie bei der Arbeit oder ehrenamtlichen Tätigkeit mit älteren oder kranken Menschen in Kontakt?'
    },
    directContact: {
      label:
        'Hatten Sie in den letzen 14 Tagen direkten Kontakt zu einer Person, bei der eine Coronavirus-Infektion festgestellt wurde?',
      info: `Direkter Kontakt heißt:
- Sie leben mit der Person im selben Haushalt ODER
- Sie hatten mindestens 15 Minuten persönlichen Kontakt, z.B. in einem Gespräch. ODER
- Körperflüssigkeiten konnten auf Sie übertragen werden, z.B. durch Küssen, Niesen, Husten`
    },
    ageRisk: {
      label: 'Sind Sie 50 Jahre oder älter?'
    },
    patientDiagnoseRisk: {
      label:
        'Hat ein Arzt bei Ihnen eine oder mehrere der folgenden Diagnosen gestellt?',
      info: `- Bluthochdruck
- Diabetes
- Fettleibigkeit`
    },
    patientOrganRisk: {
      label:
        'Haben Sie eine chronische Erkrankung eines oder mehrerer folgender Organe?',
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
  components: {
    hotlineSearch: {
      labelText: 'Postleitzahl eingeben',
      buttonText: 'Gesundheitsamt suchen'
    }
  }
}
