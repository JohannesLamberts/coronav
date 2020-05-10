const generalTodos = [
  'Wash your hands often and thoroughly',
  'Keep 2 metres away from other people',
  'Only cough and sneeze into the crook of your arm'
]

const symptomTodos = [
  'Please stay at home',
  'Avoid direct personal contact',
  'When you leave the house please wear a mouth and nose protector',
  ...generalTodos
]

const noSymptomTodos = ['Please stay at home, if possible', ...generalTodos]
const noSymptomDirectContactTodos = [
  'Please stay at home, if possible',
  'Avoid direct personal contact',
  ...generalTodos
]

export default {
  choices: {
    ok: 'Ok',
    yes: 'Yes',
    no: 'No'
  },
  index: {
    title: 'Coronavirus-Infection?',
    logoTitle: 'To the CoroNav homepage',
    description: `Here you can find out whether you are likely to have an
infection is whether a test is recommended and why.

This navigator will guide you safely through a few questions. 

It can be clarified: 
- whether you have the typical symptoms of a coronavirus infection
- whether they belong to the risk group
- whether you are classified as a contact person.

You will then receive:
- a recommendation on how to proceed, and
- Contact information for the health office in your region.

*Thank you very much for helping to relieve the burden on doctors and hotlines!*

The test order is still a doctor's decision and may also depend on on-site
testing capacity. There is no right to a test. The Robert Koch-Institut gives
recommendations when a test is useful. The questionnaire is always up to date
in this respect. You can also check the criteria directly
[at the Robert Koch-Institut](https://www.rki.de/SharedDocs/FAQ/NCOV2019/gesamt.html).`,
    cta: 'Start'
  },
  impressum: {
    title: 'Imprint'
  },
  results: {
    headline: 'Results',
    todosLabel: 'This is what you should do:',
    searchInfo: 'Below you can search for your local health department.',
    additionalRessources: {
      label: 'You can find more information on the following pages:',
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
        info: `**Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt. 
Ein Test wird empfohlen.**

Warum?
- Sie haben typische Symptome
- Sie hatten Kontakt zu einer infizierten Person.

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

- Sie sollten vorsorglich Ihren Hausarzt anrufen.
- Sie haben aufgrund von Alter oder Vorerkrankungen ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.
`,
        todos: symptomTodos
      },
      '2_symptoms_withContact_noRisk': {
        info: `**Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt. 
Ein Test wird empfohlen.**

Warum?
- Sie haben typische Symptome
- Sie hatten Kontakt zu einer infizierten Person

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

Auch wenn Sie nicht zur Risikogruppe gehören,
können Sie Überträger sein oder werden. Schützen Sie sich und andere!`,
        todos: symptomTodos
      },
      '3_symptoms_withoutContact_risk': {
        info: `**Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt.
Fragen Sie nach einem Test.**

Warum?
Sie haben typische Symptome

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

-Sie sollten vorsorglich Ihren Hausarzt anrufen
-Sie haben aufgrund von Alter oder Vorerkrankungen Im Falle einer Infektion ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.`,
        todos: symptomTodos
      },
      '3a_symptoms_withoutDirectContact_noRisk': {
        label: `**Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt.
Fragen Sie nach einem Test.**

Warum?
- Sie haben typische Symptome
- Sie kommen mit Menschen der Risikogruppe in Kontakt.

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

Auch wenn Sie nicht zur Risikogruppe gehören,
können Sie Überträger sein oder werden. Schützen Sie sich und andere!`,
        todos: symptomTodos
      },
      '4_symptoms_withoutContact_noRisk': {
        info: `**Sie müssen vorerst NICHT beim Gesundheitsamt anrufen.
Ein Test wird derzeit nicht empfohlen.**

Warum?
- Sie hatten KEINEN Kontakt zu einer Infizierten Person

Wenn sich Ihre Symptomeverschlechtern, kontaktieren Sie bitte einen Arzt oder 
eine Ärztin. Sollte sich herausstellen, dass eine Kontaktperson positiv getestet
wurde, melden Sich sich bitte umgehend beim Gesundheitsamt.

Auch wenn Sie nicht zur Risikogruppe gehören,
können Sie Überträger sein oder werden. Schützen Sie sich und andere!`,
        todos: symptomTodos
      },
      '5_noFeatures_noRisk': {
        info: `**Sie müssen vorerst NICHT beim Gesundheitsamt anrufen.
Ein Test wird derzeit nicht empfohlen.**

Warum?
- Sie haben KEINE typischen Symptome.
- Sie hatten KEINEN Kontakt zu einer infizierten Person.

Auch wenn Sie nicht zur Risikogruppe gehören,
können Sie Überträger sein oder werden. Schützen Sie sich und andere!`,
        todos: noSymptomTodos
      },
      '6_noFeatures_risk': {
        info: `__Sie müssen vorerst nicht beim Gesundheitsamt anrufen.
Ein Test wird derzeit nicht empfohlen.__

Warum?
- Sie haben KEINE typischen Symptome.
- Sie hatten KEINEN Kontakt zu einer infizierten Person.

Sie haben aufgrund von Alter oder Vorerkrankungen im Falle einer Infektion ein 
erhöhtes Risiko für einen schwereren Krankheitsverlauf.`,
        todos: noSymptomTodos
      },
      '7_directContact_risk': {
        info: `__Bitte melden sie sich bei Ihrem zuständigen Gesundheitsamt!
Fragen Sie nach einem Test.__

Warum?
- Sie haben keine typischen Symptome
- Aber: Sie hatten Kontakt zu einer infizierten Person.

*Unten können Sie nach Ihrem lokalen Gesundheitsamt suchen.*

Sie haben aufgrund von Alter oder Vorerkrankungen im Falle einer Infektion ein 
erhöhtes Risiko für einen schwereren Krankheitsverlauf.`,
        todos: noSymptomDirectContactTodos
      },
      '8_directContact_noRisk': {
        info: `__Bitte melden sie sich bei Ihrem zuständigen Gesundheitsamt!
Fragen Sie nach einem Test.__

Warum?
- Sie haben keine typischen Symptome
- Aber: Sie hatten Kontakt zu einer infizierten Person.

Unten  können Sie nach Ihrem lokalen Gesundheitsamt suchen.

Auch wenn Sie nicht zur Risikogruppe gehören,
können Sie Überträger sein oder werden. Schützen Sie sich und andere!`,
        todos: noSymptomDirectContactTodos
      }
    }
  },
  testProgress: {
    ariaLabel: 'Progress:'
  },
  questions: {
    disclaimer: {
      label: 'Disclaimer',
      info: `This navigator is provided on the basis of the latest scientific
recommendations of the Robert Koch-Institut and the German government.
It is currently in development and is intended to serve as an initial assessment
and decision-making aid before calling a doctor or health authority. 
The application cannot replace a medical diagnosis. 
In case of acute symptoms or doubts, please consult a physician.
For emergencies, call 112.`
    },
    symptoms_1: {
      label: 'Do you have one or more of the following symptoms?',
      info: `- cough
- breathing difficulties`
    },
    symptoms_2: {
      label: 'Do you have one or more of the following symptoms?',
      info: `- fever
- sore throat`
    },
    symptoms_3: {
      label: 'Do you have one or more of the following symptoms?',
      info: `- reduced sense of smell or taste
- general feeling of sickness`
    },
    workRiskContact: {
      label: `Are you in contact with people who are at high risk for a severe 
course of a coronavirus infection during work or volunteer activities?
(e.g. in a hospital or elderly care)`
    },
    directContact: {
      label:
        'Have you had direct contact with a person who has tested positive for coronavirus in the past 14 days?',
      info: `You had direct contact if:
- you live with this person in the same household OR
- you had at least 15 minutes of personal contact with this person, for example in a conversation OR
- body fluids could have been transferred to you, e.g. by kissing, sneezing or coughing`
    },
    ageRisk: {
      label: 'Are you age 50 or older?'
    },
    smokeRisk: {
      label: 'Are you a smoker?'
    },
    patientDiagnoseRisk: {
      label: 'Has a doctor made one or more of the following diagnoses?',
      info: `- hypertension
- diabetes 
- obesity`
    },
    patientOrganRisk: {
      label:
        'Do you have a chronic disease of one or more of the following organs?',
      info: `- heart
- liver
- kidney
- stomach / gut`
    },
    patientImmuneRisk: {
      label: 'Do you have a suppressed immune system?',
      info: `For example because of:
- organ transplant
- cancer
- chemotherapy
- taking cortisone tablets
- HIV/AIDS
- other reasons`
    }
  },
  components: {
    hotlineSearch: {
      labelText: 'Enter postcode',
      buttonText: 'Search health department'
    }
  }
}
