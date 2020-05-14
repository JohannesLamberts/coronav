const generalTodos = [
  'Waschen Sie oft und gut Ihre Hände.',
  'Bleiben Sie 2 Meter von anderen Personen weg.',
  'Husten und niesen Sie nur in Ihre Armbeuge.'
]

const symptomTodos = [
  'Bleiben Sie bitte zu Hause.',
  'Treffen Sie am besten **keine** anderen Personen.',
  'Wenn Sie das Haus verlassen müssen, tragen Sie einen Mund-Nasen-Schutz.',
  ...generalTodos
]

const noSymptomTodos = ['Bleiben Sie zuhause, wenn Sie können', ...generalTodos]
const noSymptomDirectContactTodos = [
  'Bleiben Sie zuhause, wenn Sie können.',
  'Treffen Sie am besten **keine** anderen Personen.',
  ...generalTodos
]

export default {
  index: {
    title: 'Corona-Virus Infektion?',
    logoTitle: 'Zur CoroNav Startseite',
    description: `__Haben Sie sich mit dem Corona-Virus angesteckt?__

__Sollten Sie einen Test machen lassen?__

Unser Fragebogen soll helfen, die Fragen zu beantworten.

Füllen Sie den Fragebogen aus.

Dann sagen wir Ihnen, was Sie tun können.

Vielen Dank, dass Sie mithelfen.

Ärzte und Ärztinnen haben dann weniger Arbeit!`
  },
  questions: {
    disclaimer: {
      label: 'Hinweis',
      info: `Fachleute entscheiden, was in den Fragen stehen soll.

Die Fachleute sind
- von der Bundesregierung und
- Forscher vom Robert Koch-Institut.

Wir arbeiten noch weiter an dem Fragebogen.

Aber: Dieser Fragebogen ist **nicht** so gut wie ein Arzt.

Wenn es Ihnen schlecht geht,

rufen Sie einen Arzt an.

Bei Notfällen rufen Sie die Nummer 112 an`
    },
    symptoms_1: {
      label: 'Krankheits-Zeichen',
      info: `Haben Sie Husten?

Haben Sie Probleme beim Atmen?

Oder haben Sie beides?`
    },
    symptoms_2: {
      label: 'Krankheits-Zeichen ',
      info: `Haben Sie Fieber?

Haben Sie Hals-Schmerzen?

Oder haben Sie beides?`
    },
    symptoms_3: {
      label: 'Krankheits-Zeichen ',
      info: `Fühlen Sie sich krank?

Können Sie weniger schmecken oder riechen?

Oder beides?`
    },
    workRiskContact: {
      label: 'Treffen Sie bei der Arbeit alte oder kranke Menschen?',
      info: `Dazu gehört auch Arbeit, für die Sie **kein** Geld bekommen.

Das nennt man ehrenamtliche Arbeit.`
    },
    directContact: {
      label:
        'Hatten Sie in den letzen 2 Wochen direkten Kontakt mit einer Person mit Corona-Virus?',
      info: `Direkter Kontakt heißt:
- Sie leben mit der Person zusammen
- **Oder:** Sie waren 15 Minuten oder länger in der Nähe von der Person. <br/>
Zum Beispiel in einem Gespräch.
- **Oder:** Sie haben die Person geküsst.
- **Oder:** Diese Person hat Sie angehustet oder angeniest.`
    },
    ageRisk: {
      label: 'Sind Sie 50 Jahre oder älter?'
    },
    smokeRisk: {
      label: 'Sind Sie Raucher?'
    },
    patientDiagnoseRisk: {
      label: 'Andere Krankheiten',
      info: `Haben Sie Blut-Hochdruck?

Oder haben Sie Diabetes?

Oder sind Sie sehr dick?`
    },
    patientOrganRisk: {
      label: 'Haben Sie Krankheiten, die nicht mehr heilen?',
      info: `Um Krankheiten dieser Organe geht es:
- Herz
- Leber
- Niere
- Magen und Darm`
    },
    patientImmuneRisk: {
      label: 'Immunsystem',
      info: `Bei einigen Menschen kann der Körper schlecht gegen eine Krankheit kämpfen.

Das kann zum Beispiel so sein:
- Bei Menschen mit einem neuen Organ
- Bei der Krankheit Krebs
- Bei einer Chemotherapie
- Bei Menschen, die Kortison-Tabletten nehmen
- Bei der Krankheit HIV/AIDS.

Ist das bei Ihnen so?
      `
    }
  },
  results: {
    headline: 'Ergebnis',
    todosLabel: 'Halten Sie sich bitte an diese Regeln:',
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
        info: `**Bitte rufen Sie an beim Gesundheits-Amt in Ihrer Nähe.**

**Ein Test sollte bei Ihnen gemacht werden.**

Warum?
- Es gibt Anzeichen, dass Sie das Corona-Virus haben könnten.
- Sie hatten Kontakt mit einer Person mit dem Corona-Virus.

*Unten können Sie das Gesundheits-Amt in Ihrer Nähe suchen.*

Rufen Sie am besten auch Ihren Hausarzt an.

Warum?

Sie sind 50 Jahre oder älter **oder** haben schon andere Krankheiten.<br />
Darum haben Sie vielleicht mehr Probleme,<br />
wenn Sie das Corona-Virus bekommen.
`,
        todos: symptomTodos
      },
      '2_symptoms_withContact_noRisk': {
        info: `**Bitte rufen Sie an beim Gesundheits-Amt in Ihrer Nähe.**

**Ein Test sollte bei Ihnen gemacht werden.**

Warum?
- Es gibt Anzeichen, dass Sie das Corona-Virus haben könnten.
- Sie hatten Kontakt mit einer Person mit dem Corona-Virus.

*Unten können Sie das Gesundheits-Amt in Ihrer Nähe suchen.*

Sie können andere Personen mit dem Corona-Virus anstecken.<br />
Schützen Sie sich und andere.`,
        todos: symptomTodos
      },
      '3_symptoms_withoutContact_risk': {
        info: `**Bitte rufen Sie an beim Gesundheits-Amt in Ihrer Nähe.**

**Fragen Sie nach einem Test.**

Warum?<br />
Es gibt Anzeichen, dass Sie das Corona-Virus haben könnten.

*Unten können Sie das Gesundheits-Amt in Ihrer Nähe suchen.*

Rufen Sie am besten Ihren Hausarzt an.

Warum?

Sie sind 50 Jahre oder älter **oder** haben schon andere Krankheiten.<br />
Darum haben Sie vielleicht mehr Probleme,<br />
wenn Sie das Corona-Virus bekommen.`,
        todos: symptomTodos
      },
      '3a_symptoms_withoutDirectContact_noRisk': {
        info: `**Bitte rufen Sie an beim Gesundheits-Amt in Ihrer Nähe.**

**Fragen Sie nach einem Test.**

Warum?
- Es gibt Anzeichen, dass Sie das Corona-Virus haben könnten.
- Sie haben Kontakt mit Menschen, für die Corona ein großes Problem sein kann.

*Unten können Sie das Gesundheits-Amt in Ihrer Nähe suchen.*

Sie können andere Personen mit dem Corona-Virus anstecken.<br />
Schützen Sie sich und andere.`,
        todos: symptomTodos
      },
      '4_symptoms_withoutContact_noRisk': {
        info: `**Sie müssen nicht beim Gesundheits-Amt anrufen.**

**Ein Test wird jetzt trotzdem empfohlen.**

**Rufen Sie bitte Ihren Hausarzt an.**

Warum?
- Sie haben typische Krankheitszeichen, ABER
- Sie hatten **keinen** Kontakt mit einer Person mit dem Corona-Virus.

Vielleicht hatten Sie doch Kontakt mit einer Person,<br />
die das Corona-Virus hat.<br />
Rufen Sie dann das Gesundheits-Amt an.

Sie können andere Personen mit dem Corona-Virus anstecken.<br />
Schützen Sie sich und andere.`,
        todos: symptomTodos
      },
      '5_noFeatures_noRisk': {
        info: `**Sie müssen nicht beim Gesundheits-Amt anrufen.**

**Ein Test wird jetzt nicht empfohlen.**

Warum?
- Es gibt **keine** Anzeichen,<br />dass Sie das Corona-Virus haben könnten.
- Sie hatten **keinen** Kontakt mit einer Person mit dem Corona-Virus.

Sie können andere Personen mit dem Corona-Virus anstecken.<br />
Schützen Sie sich und andere.`,
        todos: noSymptomTodos
      },
      '6_noFeatures_risk': {
        info: `**Sie müssen nicht beim Gesundheits-Amt anrufen.**

**Ein Test wird jetzt nicht empfohlen.**

Warum?
- Es gibt **keine** Anzeichen,<br />dass Sie das Corona-Virus haben könnten.
- Sie hatten **keinen** Kontakt mit einer Person mit dem Corona-Virus.

Sie sind 50 Jahre oder älter **oder** haben schon andere Krankheiten.<br />
Darum haben Sie vielleicht mehr Probleme,<br />
wenn Sie das Corona-Virus bekommen.`,
        todos: noSymptomTodos
      },
      '7_directContact_risk': {
        info: `**Bitte rufen Sie an beim Gesundheits-Amt in Ihrer Nähe.**

**Fragen Sie nach einem Test.**

Warum?
- Es gibt **keine** Anzeichen,<br />dass Sie das Corona-Virus haben könnten.
- Aber Sie hatten direkten Kontakt mit einer Person mit dem Corona-Virus.

*Unten können Sie das Gesundheits-Amt in Ihrer Nähe suchen.*

Sie sind 50 Jahre oder älter **oder** haben schon andere Krankheiten.<br />
Darum haben Sie vielleicht mehr Probleme,<br />
wenn Sie das Corona-Virus bekommen.`,
        todos: noSymptomDirectContactTodos
      },
      '8_directContact_noRisk': {
        info: `**Bitte rufen Sie an beim Gesundheits-Amt in Ihrer Nähe.**

**Fragen Sie nach einem Test.**

Warum?
- Es gibt **keine** Anzeichen,<br />dass Sie das Corona-Virus haben könnten.
- Aber Sie hatten direkten Kontakt mit einer Person mit dem Corona-Virus.

*Unten können Sie das Gesundheits-Amt in Ihrer Nähe suchen.*

Sie können andere Personen mit dem Corona-Virus anstecken.<br />
Schützen Sie sich und andere.`,
        todos: noSymptomDirectContactTodos
      }
    }
  }
}
