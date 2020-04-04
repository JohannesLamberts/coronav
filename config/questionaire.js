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
    choices: choicesYesNo,
    skipIf: {
      [QUESTION_IDENTIFIERS.PATIENT_HISTORY_RISK]: 'yes'
    }
  }
]

const COMPUTED_IDENTIFIER = {
  RISK: 'risk',
  CONTACT: 'contact',
  SYMPTOMS: 'symptoms',
  CONTACT_DIRECT: 'directContact'
}

function matcherOneYesOf(...yesIdents) {
  return yesIdents.map((ident) => ({ [ident]: CHOICES.YES }))
}

function matchOneYes(derivedIdent, questionIdent) {
  return {
    ident: derivedIdent,
    matchers: {
      [questionIdent]: CHOICES.YES
    }
  }
}

export const derivedChoices = [
  {
    ident: COMPUTED_IDENTIFIER.RISK,
    matchers: matcherOneYesOf(
      QUESTION_IDENTIFIERS.AGE_RISK,
      QUESTION_IDENTIFIERS.PATIENT_IMMUNE_RISK,
      QUESTION_IDENTIFIERS.PATIENT_HISTORY_RISK
    )
  },
  {
    ident: COMPUTED_IDENTIFIER.CONTACT,
    matchers: matcherOneYesOf(
      QUESTION_IDENTIFIERS.CONTACT_DIRECT,
      QUESTION_IDENTIFIERS.CONTACT_WORK
    )
  },
  matchOneYes(COMPUTED_IDENTIFIER.SYMPTOMS, QUESTION_IDENTIFIERS.SYMPTOMS),
  matchOneYes(
    COMPUTED_IDENTIFIER.CONTACT_DIRECT,
    QUESTION_IDENTIFIERS.CONTACT_DIRECT
  )
]
