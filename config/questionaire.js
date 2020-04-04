const CHOICES = {
  YES: 'yes',
  NO: 'no',
  OK: 'ok'
}

const COMPUTED_IDENTIFIER = {
  RISK: 'risk',
  CONTACT: 'contact',
  SYMPTOMS: 'symptoms',
  CONTACT_DIRECT: 'directContact'
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
      [COMPUTED_IDENTIFIER.RISK]: true
    }
  }
]

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

// const RESULT_IDENTIFIER = {
//   SYMPTOMS_WITHCONTACT_RISK_1: '1_symptoms_withContact_risk',
//   SYMPTOMS_WITHCONTACT_NORISK_2: '2_symptoms_withContact_noRisk',
//   SYMPTOMS_WITHOUTCONTACT_RISK_3: '3_symptoms_withoutContact_risk',
//   SYMPTOMS_WITHOUTCONTACT_NORISK_4: '4_symptoms_withoutContact_noRisk',
//   NOFEATURES_NORISK_5: '5_noFeatures_noRisk',
//   NOFEATURES_RISK_6: '6_noFeatures_risk',
//   DIRECTCONTACT_RISK_7: '7_directContact_risk',
//   DIRECTCONTACT_NORISK_8: '8_directContact_noRisk'
// }

// export const results = [
//   {
//     ident: RESULT_IDENTIFIER.SYMPTOMS_WITHCONTACT_RISK_1,
//     matchers: []
//   }
// ]
//
// export const results = [
//   {
//     ident: '1_symptoms_withContact_risk',
//     showHotlineSearch: true
//   },
//   { ident: '2_symptoms_withContact_noRisk', showHotlineSearch: true },
//   { ident: '3_symptoms_withoutContact_risk' },
//   { ident: '4_symptoms_withoutContact_noRisk' },
//   { ident: '5_noFeatures_noRisk' },
//   { ident: '6_noFeatures_risk' },
//   { ident: '7_directContact_risk', showHotlineSearch: true },
//   { ident: '8_directContact_noRisk', showHotlineSearch: true }
// ]
