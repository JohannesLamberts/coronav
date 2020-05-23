const generalTodos = [
  'Waschen Sie oft und gründlich Ihre Hände.',
  'Halten Sie 2 Meter Abstand zu anderen Personen.',
  'Husten und niesen Sie nur in Ihre Armbeuge.'
]

const symptomTodos = [
  'Bleiben Sie bitte zu Hause.',
  'Vermeiden Sie direkten Personenkontakt.',
  'Wenn Sie das Haus verlassen müssen, tragen Sie bitte einen Mund-Nasen-Schutz.',
  ...generalTodos
]

const noSymptomTodos = ['Bleiben Sie, wenn möglich, zuhause', ...generalTodos]
const noSymptomDirectContactTodos = [
  'Bleiben Sie, wenn möglich, zuhause.',
  'Vermeiden Sie direkten Personenkontakt.',
  ...generalTodos
]

export default {
  choices: {
    ok: 'Ok',
    yes: 'Ja',
    no: 'Nein'
  },
  index: {
    title: 'Coronavirus-Infektion?',
    logoTitle: 'Zur CoroNav Startseite',
    description: `Hier erfahren Sie, ob bei Ihnen eine Infektion wahrscheinlich
ist, ob ein Test empfohlen wird und warum.

Dieser Navigator leitet Sie sicher durch wenige Fragen.
Es kann geklärt werden:
- ob Sie die typischen Symptome einer Coronavirus-Infektion haben
- ob Sie zur Risikogruppe gehören
- ob Sie als Kontaktperson eingestuft werden.

Anschließend erhalten Sie:
- eine Empfehlung, wie Sie weiter vorgehen sollten, und
- Kontakt-Information zum Gesundheitsamt in Ihrer Region.

_Vielen Dank, dass Sie mithelfen Ärzte/Ärztinnen und Hotlines zu entlasten!_

Die Testanordnung ist nach wie vor eine ärztliche Entscheidung
und kann auch von Testkapazitäten vor Ort abhängen.
Es besteht kein Anspruch auf einen Test.
Das Robert Koch-Institut gibt Empfehlungen heraus wann ein Test sinnvoll ist.
Der Fragebogen ist diesbezüglich immer auf dem aktuellsten Stand.
Sie können die Kriterien zusätzlich direkt
[beim Robert Koch-Institut](https://www.rki.de/SharedDocs/FAQ/NCOV2019/gesamt.html)
abrufen.`,
    cta: 'Starten'
  },
  impressum: {
    title: 'Impressum'
  },
  results: {
    headline: 'Ergebnis',
    todosLabel: 'Halten Sie sich bitte an diese Regeln:',
    searchInfo: 'Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.',
    feedback: {
      showFeedback: 'true',
      label: 'Ihre Meinung ist uns wichtig!',
      info:
        'Ihr Feedback hilft uns dabei, CoroNav zu verbessern! \n Wir freuen uns auf Ihre Rückmeldung in ',
      linkText: 'diesem Formular.',
      linkTitle: 'Feedback Formular'
    },
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
        info: `**Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt.**

**Ein Test wird empfohlen.**

Warum?
- Sie haben typische Symptome.
- Sie hatten Kontakt zu einer infizierten Person.

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

Sie sollten vorsorglich Ihren Hausarzt anrufen.

Warum?
- Sie haben aufgrund von Alter oder Vorerkrankungen ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.
`,
        todos: symptomTodos
      },
      '2_symptoms_withContact_noRisk': {
        info: `**Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt.**

**Ein Test wird empfohlen.**

Warum?
- Sie haben typische Symptome.
- Sie hatten Kontakt zu einer infizierten Person.

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

Auch wenn Sie nicht zur Risikogruppe gehören,
können Sie Überträger sein oder werden. Schützen Sie sich und andere!`,
        todos: symptomTodos
      },
      '3_symptoms_withoutContact_risk': {
        info: `**Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt.**

**Fragen Sie nach einem Test.**

Warum?
- Sie haben typische Symptome.
- Sie gehören zur Risikogruppe.

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

Sie sollten vorsorglich Ihren Hausarzt anrufen.

Warum?
- Sie haben aufgrund von Alter oder Vorerkrankungen Im Falle einer Infektion ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.`,
        todos: symptomTodos
      },
      '3a_symptoms_withoutDirectContact_noRisk': {
        info: `**Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt.**

**Fragen Sie nach einem Test.**

Warum?
- Sie haben typische Symptome.
- Sie kommen mit Menschen der Risikogruppe in Kontakt.

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

Auch wenn Sie nicht zur Risikogruppe gehören,
können Sie Überträger sein oder werden. Schützen Sie sich und andere!`,
        todos: symptomTodos
      },
      '4_symptoms_withoutContact_noRisk': {
        info: `**Sie müssen vorerst NICHT beim Gesundheitsamt anrufen.**

**Ein Test wird derzeit trotzdem empfohlen.**

**Fragen Sie diesbezüglich Ihren Hausarzt.**

Warum?
- Sie haben typische Symptome, ABER
- Sie hatten KEINEN Kontakt zu einer Infizierten Person.

Sollte sich herausstellen, dass eine Kontaktperson positiv getestet
wurde, melden Sich sich bitte umgehend beim Gesundheitsamt.

Auch wenn Sie nicht zur Risikogruppe gehören,
können Sie Überträger sein oder werden. Schützen Sie sich und andere!`,
        todos: symptomTodos
      },
      '5_noFeatures_noRisk': {
        info: `**Sie müssen vorerst NICHT beim Gesundheitsamt anrufen.**

**Ein Test wird derzeit nicht empfohlen.**

Warum?
- Sie haben KEINE typischen Symptome.
- Sie hatten KEINEN Kontakt zu einer infizierten Person.

Auch wenn Sie nicht zur Risikogruppe gehören,
können Sie Überträger sein oder werden. Schützen Sie sich und andere!`,
        todos: noSymptomTodos
      },
      '6_noFeatures_risk': {
        info: `**Sie müssen vorerst nicht beim Gesundheitsamt anrufen.**

**Ein Test wird derzeit nicht empfohlen.**

Warum?
- Sie haben KEINE typischen Symptome.
- Sie hatten KEINEN Kontakt zu einer infizierten Person.

Sie haben aufgrund von Alter oder Vorerkrankungen im Falle einer Infektion ein
erhöhtes Risiko für einen schwereren Krankheitsverlauf.`,
        todos: noSymptomTodos
      },
      '7_directContact_risk': {
        info: `**Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt!**

**Fragen Sie nach einem Test.**

Warum?
- Sie haben keine typischen Symptome.
- Aber: Sie hatten Kontakt zu einer infizierten Person.

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

Sie haben aufgrund von Alter oder Vorerkrankungen im Falle einer Infektion ein
erhöhtes Risiko für einen schwereren Krankheitsverlauf.`,
        todos: noSymptomDirectContactTodos
      },
      '8_directContact_noRisk': {
        info: `**Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt!**

**Fragen Sie nach einem Test.**

Warum?
- Sie haben keine typischen Symptome.
- Aber: Sie hatten Kontakt zu einer infizierten Person.

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

Auch wenn Sie nicht zur Risikogruppe gehören,
können Sie Überträger sein oder werden. Schützen Sie sich und andere!`,
        todos: noSymptomDirectContactTodos
      }
    }
  },
  testProgress: {
    ariaLabel: 'Fortschritt:'
  },
  questions: {
    disclaimer: {
      label: 'Hinweis',
      info: `
- Dieser Navigator wird auf Basis
aktuellster wissenschaftlicher
Empfehlungen des Robert Koch-Instituts
und der Bundesregierung zur Verfügung
gestellt.
- Er befindet sich derzeit in
Entwicklung und soll als
Ersteinschätzung und Entscheidungshilfe
vor einem Arztbesuch oder Anruf beim
Gesundheitsamt dienen.
- Bei akuten
Symptomen oder Zweifeln wenden Sie
sich bitte an einen Arzt oder eine Ärztin.
- In dringenden Notfällen rufen Sie die 112
an.`
    },
    symptoms_1: {
      label: 'Haben Sie eines oder beide der folgenden Symptome?',
      info: `- Husten
- Atembeschwerden`
    },
    symptoms_2: {
      label: 'Haben Sie eines oder beide der folgenden Symptome?',
      info: `- Fieber
- Halsschmerzen`
    },
    symptoms_3: {
      label: 'Haben Sie eines oder beide der folgenden Symptome?',
      info: `- reduzierter Geruchs- oder Geschmackssinn
- allgemeines Krankheitsgefühl`
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
    smokeRisk: {
      label: 'Sind Sie Raucher?'
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
    navbar: {
      languageDropdownText: 'Sprache',
      toggleNavbarLabel: 'Navigation'
    },
    hotlineSearch: {
      labelText: 'Postleitzahl eingeben',
      buttonText: 'Gesundheitsamt suchen'
    }
  }
}
