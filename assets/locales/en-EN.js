const generalTodos = [
  'Wash your hands often and thoroughly',
  'Keep 2 metres away from other people',
  'Only cough and sneeze into the crook of your arm'
]

const symptomTodos = [
  'Please stay at home',
  'Avoid direct personal contact',
  'When you leave the house please wear a face mask',
  ...generalTodos
]

const noSymptomTodos = ['Please stay at home, if possible', ...generalTodos]
const noSymptomDirectContactTodos = [
  'Please stay at home, if possible',
  'Avoid direct personal contact',
  ...generalTodos
]

const resultTexts = {
  contactPublicHealthDepartment:
    'Please report to your responsible health department!',
  doNotContactPublicHealthDepartment:
    'For now you do NOT have to report to the health department.',
  suspectedCase: 'You are suspected of having a corona infection.',
  noSuspectedCase:
    'You are currently NOT suspected of having a corona infection.',
  noRiskTakeCare: `Even if you do not belong to the risk group, you can be or
become a carrier. Protect yourself and others!`,
  riskInfo: `You have an increased risk of a more severe course of the disease
due to age or previous illnesses in the event of an infection.`,
  contactWithoutSymptoms: `You were in contact with an infected person.
You are currently NOT suspected of having a corona infection.`,
  contactDoctor: 'You should call your family doctor as a precaution.',
  contactDoctorIfWorsens: 'If your symptoms worsen, please contact a doctor.'
}

export default {
  choices: {
    ok: 'Ok',
    yes: 'Yes',
    no: 'No'
  },
  index: {
    title: 'Coronavirus-Infection?',
    logoTitle: 'To the CoroNav homepage',
    description: `Here you can find out whether an infection is likely. 
This navigator will guide you safely through some questions.

It can be clarified: 
- what symptoms you show
- if this could actually be a coronavirus infection.

Then you will receive:
- a recommendation on how to proceed
- Contact information to the health office in your region

*Thank you very much for helping to relieve doctors and hotlines!*

Please note:

A test is still ordered by the public health department or by doctors.

The order is made according to criteria that change according to the current 
developments of the pandemic. The current criteria are already taken into 
account in the application. They can also be obtained directly 
[from the Robert Koch-Institut](https://www.rki.de/SharedDocs/FAQ/NCOV2019/gesamt.html).`,
    cta: 'Start'
  },
  impressum: {
    title: 'Imprint'
  },
  results: {
    headline: 'Results',
    todosLabel: 'This is what you should do:',
    searchInfo: 'You can search for your local health department below.',
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
      info: `- fever
- cough
- breathing difficulties`
    },
    symptoms_2: {
      label: 'Do you have one or more of the following symptoms?',
      info: `- runny nose
- sore throat
- headaches
- general feeling of malaise`
    },
    symptoms_3: {
      label: 'Do you have one or more of the following symptoms?',
      info: `- diarrhoea
- reduced sense of smell or taste`
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
