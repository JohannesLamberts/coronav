const choiceYes = {
  ident: 'yes'
}

const choiceNo = {
  ident: 'no'
}

const choicesYesNo = [choiceYes, choiceNo]

export const questions = [
  {
    ident: 'disclaimer',
    choices: [
      {
        variant: 'primary',
        ident: 'ok'
      }
    ]
  },
  {
    ident: 'symptoms',
    choices: choicesYesNo
  },
  {
    ident: 'directContact',
    choices: choicesYesNo
  },
  {
    ident: 'ageRisk',
    choices: choicesYesNo
  },
  {
    ident: 'patientHistoryRisk',
    choices: choicesYesNo
  }
]
