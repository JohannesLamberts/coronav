const CHOICES = {
  YES: 'yes',
  NO: 'no',
  OK: 'ok'
}

const choicesYesNo = [
  {
    ident: CHOICES.YES
  },
  {
    ident: CHOICES.NO
  }
]

const QUESTION_IDENTIFIERS = {
  DISCLAIMER: 'disclaimer',
  SYMPTOMS: 'symptoms',
  CONTACT_DIRECT: 'directContact',
  CONTACT_WORK: 'workRiskContact',
  AGE_RISK: 'ageRisk',
  PATIENT_HISTORY_RISK: 'patientHistoryRisk',
  PATIENT_IMMUNE_RISK: 'patientImmuneRisk'
}

export const questions = [
  {
    ident: QUESTION_IDENTIFIERS.DISCLAIMER,
    choices: [
      {
        variant: 'primary',
        ident: CHOICES.OK
      }
    ]
  },
  {
    ident: QUESTION_IDENTIFIERS.SYMPTOMS,
    choices: choicesYesNo
  },
  {
    ident: QUESTION_IDENTIFIERS.CONTACT_DIRECT,
    choices: choicesYesNo
  },
  {
    ident: QUESTION_IDENTIFIERS.CONTACT_WORK,
    choices: choicesYesNo
  },
  {
    ident: QUESTION_IDENTIFIERS.AGE_RISK,
    choices: choicesYesNo
  },
  {
    ident: QUESTION_IDENTIFIERS.PATIENT_HISTORY_RISK,
    choices: choicesYesNo
  },
  {
    ident: QUESTION_IDENTIFIERS.PATIENT_IMMUNE_RISK,
    choices: choicesYesNo
  }
]
