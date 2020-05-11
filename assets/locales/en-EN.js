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
    todosLabel: 'Please follow these rules:',
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
        info: `**Please report to your local health department!
A test is recommended.**

Why?
- You display typical symptoms.
- You had contact with an infected person.

*Below you can search for your local health authority.*

- Please call your general practitioner as a precautionary measure.
- You have an increased risk of a more severe course of the disease due to age or previous conditions.
`,
        todos: symptomTodos
      },
      '2_symptoms_withContact_noRisk': {
        info: `**Please report to your local health department!
A test is recommended.**

Why?
- You display typical symptoms.
- You had contact with an infected person.

*Below you can search for your local health authority.*

Even if you do not belong to a risk group,
you can be or become a carrier. Protect yourself and others!`,
        todos: symptomTodos
      },
      '3_symptoms_withoutContact_risk': {
        info: `**Please report to your local health department!
Ask for a test.**

Why?
- You display typical symptoms.

*Below you can search for your local health authority.*

- As a precautionary measure you should call your general practitioner.
- You have an increased risk of a more severe course of the disease due to age or previous conditions.
`,
        todos: symptomTodos
      },
      '3a_symptoms_withoutDirectContact_noRisk': {
        info: `**Please report to your local health department!
Ask for a test.**

Why?
- You display typical symptoms.
- You come into contact with people belonging to a risk group.

*Below you can search for your local health authority.*

Even if you do not belong to a risk group,
you can be or become a carrier. Protect yourself and others!`,
        todos: symptomTodos
      },
      '4_symptoms_withoutContact_noRisk': {
        info: `**For the time being, you do NOT need to call the health department.
A test is currently not recommended.**

Why?
- You did NOT have contact with an infected person.

Please contact a doctor if your symptoms worsen. If a person you have had contact with is tested positive
please contact your local health department immediately.

Even if you do not belong to a risk group,
you can be or become a carrier. Protect yourself and others!`,
        todos: symptomTodos
      },
      '5_noFeatures_noRisk': {
        info: `**For the time being, you do NOT need to call the health department.
A test is currently not recommended.**

Why?
- You did NOT have contact with an infected person.
- You do NOT display typical symptoms.

Even if you do not belong to a risk group,
you can be or become a carrier. Protect yourself and others!`,
        todos: noSymptomTodos
      },
      '6_noFeatures_risk': {
        info: `**For the time being, you do NOT need to call the health department.
A test is currently not recommended.**

Why?
- You did NOT have contact with an infected person.
- You do NOT display typical symptoms.

You have an increased risk of a more severe course of the disease due to age or previous conditions.
`,
        todos: noSymptomTodos
      },
      '7_directContact_risk': {
        info: `**Please report to your local health department!
Ask for a test.**

Why?
- You do NOT display typical symptoms.
- But: You did have contact with an infected person.

*Below you can search for your local health authority.*

You have an increased risk of a more severe course of the disease due to age or previous conditions.
`,
        todos: noSymptomDirectContactTodos
      },
      '8_directContact_noRisk': {
        info: `**Please report to your local health department!
Ask for a test.**

Why?
- You do NOT display typical symptoms.
- But: You did have contact with an infected person.

*Below you can search for your local health authority.*

Even if you do not belong to a risk group,
you can be or become a carrier. Protect yourself and others!`,
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
      label: 'Do you have one or both of the following symptoms?',
      info: `- cough
- breathing difficulties`
    },
    symptoms_2: {
      label: 'Do you have one or both of the following symptoms?',
      info: `- fever
- sore throat`
    },
    symptoms_3: {
      label: 'Do you have one or both of the following symptoms?',
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
- you share a household with this person OR
- you had at least 15 minutes of personal contact with this person, for example during a conversation OR
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
      info: `- hypertension (high blood pressure)
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
