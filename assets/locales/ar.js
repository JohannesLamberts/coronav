const generalSuggestions = [
  'husten und niesen Sie nur in Ihre Armbeuge',
  'waschen Sie oft und gründliche Ihre Hände',
  'halten Sie 2m Abstand zu anderen Personen'
]

export default {
  choices: {
    ok: 'Ok',
    yes: 'Ja',
    no: 'Nein'
  },
  index: {
    title: 'فيروس كورونا',
    description: `هل أصبت بفيروس كورونا؟
هنا يمكنك معرفة ما إذا كانت العدوى محتملة.
سنساعدك في تحديد ما يجب فعله إذا كنت.
يرجى الإجابة على الأسئلة قبل الاتصال بالطبيب أو الخط الساخن.`,
    cta: 'بداية'
  },
  impressum: {
    title: 'انطباع'
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
        label:
          'Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt! Sie sollten außerdem vorsorglich Ihren Hausarzt anrufen.',
        result:
          'Bei Ihnen besteht erhöhter Verdacht auf eine Corona-Infektion. Sie haben aufgrund von Alter oder Vorerkrankungen ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.',
        todos: [
          'bewahren Sie Ruhe',
          'vermeiden Sie direkten Personenkontakt',
          'wenn Sie das Haus verlassen, tragen Sie bitte einen Mundschutz',
          ...generalSuggestions
        ]
      },
      '2_symptoms_withContact_noRisk': {
        label: 'Bitte melden Sie sich bei Ihrem zuständigen Gesundheitsamt!',
        result:
          'Bei Ihnen besteht erhöhter Verdacht auf eine Corona-Infektion.',
        todos: [
          'bewahren Sie Ruhe',
          'vermeiden Sie direkten Personenkontakt',
          'wenn Sie das Haus verlassen, tragen Sie bitte einen Mundschutz',
          ...generalSuggestions
        ]
      },
      '3_symptoms_withoutContact_risk': {
        label:
          'Sie müssen sich vorerst NICHT beim Gesundheitsamt melden. Sie sollten allerdings vorsorglich Ihren Hausarzt anrufen.',
        result:
          'Derzeit besteht bei Ihnen KEIN erhöhter Verdacht auf eine Corona-Infektion. Sie haben aufgrund von Alter oder Vorerkrankungen im Falle einer Infektion ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.',
        todos: [
          'bewahren Sie Ruhe',
          'verlassen Sie Ihre Wohnung nur, wenn unbedingt notwendig und tragen Sie außer Haus einen Mundschutz',
          ...generalSuggestions
        ]
      },
      '4_symptoms_withoutContact_noRisk': {
        label: 'Sie müssen sich vorerst NICHT beim Gesundheitsamt melden.',
        result:
          'Derzeit besteht bei Ihnen KEIN erhöhter Verdacht auf eine Corona-Infektion.',
        todos: [
          'bewahren Sie Ruhe',
          'kontaktieren Sie telefonisch Ihren Hausarzt, wenn sich Ihre Symptome verschlechtern',
          'verlassen Sie Ihre Wohnung nur, wenn unbedingt notwendig und tragen Sie außer Haus einen Mundschutz',
          ...generalSuggestions
        ]
      },
      '5_noFeatures_noRisk': {
        label: 'Sie müssen sich vorerst NICHT beim Gesundheitsamt melden.',
        result:
          'Derzeit besteht bei Ihnen KEIN erhöhter Verdacht auf eine Corona-Infektion.',
        todos: [
          'bewahren Sie Ruhe',
          'bleiben Sie zu Hause',
          ...generalSuggestions
        ]
      },
      '6_noFeatures_risk': {
        label: 'Sie müssen sich vorerst NICHT beim Gesundheitsamt melden.',
        result:
          'Derzeit besteht bei Ihnen KEIN erhöhter Verdacht auf eine Corona-Infektion. Sie haben aufgrund von Alter oder Vorerkrankungen im Falle einer Infektion ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.',
        todos: [
          'bewahren Sie Ruhe',
          'bleiben Sie zu Hause',
          ...generalSuggestions
        ]
      },
      '7_directContact_risk': {
        label:
          'Bitte melden sie sich bei Ihrem zuständigen Gesundheitsamt! Sie hatten Kontakt zu einer infizierten Person.',
        result:
          'Derzeit besteht bei Ihnen KEIN erhöhter Verdacht auf eine Corona-Infektion. Sie haben aufgrund von Alter oder Vorerkrankungen im Falle einer Infektion ein erhöhtes Risiko für einen schwereren Krankheitsverlauf.',
        todos: [
          'bewahren Sie Ruhe',
          'bleiben Sie zu Hause',
          'vermeiden Sie direkten Personenkontakt',
          ...generalSuggestions
        ]
      },
      '8_directContact_noRisk': {
        label:
          'Bitte melden sie sich bei Ihrem zuständigen Gesundheitsamt! Sie hatten Kontakt zu einer infizierten Person.',
        result:
          'Derzeit besteht bei Ihnen KEIN erhöhter Verdacht auf eine Corona-Infektion.',
        todos: [
          'bewahren Sie Ruhe',
          'bleiben Sie zu Hause',
          'vermeiden Sie direkten Personenkontakt',
          ...generalSuggestions
        ]
      }
    }
  },
  questions: {
    disclaimer: {
      label: 'Disclaimer',
      info: `هذا المستكشف قيد التطوير حاليًا ويقصد استخدامه كمساعد في اتخاذ القرار قبل الاتصال بقسم الصحة العامة.
      تم تطوير الأسئلة والأجوبة بالتعاون مع الأطباء وتستند إلى المعلومات التي قدمها معهد روبرت كوخ (RKI).
      ومع ذلك ، لا يمكن أن تحل هذه محل زيارة شخصية للطبيب.`
    },
    symptoms: {
      label: 'Haben Sie eines oder mehrere der folgenden Symptome?',
      info: `- allgemeines Krankheitsgefühl
- laufende Nase
- Fieber
- Husten
- Halsschmerzen
- Atembeschwerden`
    },
    workRiskContact: {
      label:
        'Kommen Sie bei der Arbeit oder ehrenamtlichen Tätigkeit mit Menschen in Kontakt, die ein hohes Risiko für einen schweren Verlauf einer Corona-Virus-Infektion haben (z.B. im Krankenhaus oder der Altenpflege)?'
    },
    directContact: {
      label:
        'Hatten Sie in den letzten 14 Tagen direkten Kontakt zu einer Person, die positiv auf eine Corona-Infektion getestet wurde?',
      info: `Direkten Kontakt hatten Sie, wenn...
- Sie mit dieser Person im selben Haushalt leben ODER
- Sie mindestens 15 Minuten persönlichen Kontakt zu dieser Person, zum Beispiel in einem Gespräch hatten ODER
- Körperflüssigkeiten auf Sie übertragen werden konnten, z.B. durch Küssen, Anniesen oder Anhusten`
    },
    ageRisk: {
      label: 'Sind Sie 50 Jahre oder älter?'
    },
    patientHistoryRisk: {
      label: 'Haben Sie eine oder mehrere der folgenden Diagnosen?',
      info: `- Herzerkrankung
- Bluthochdruck
- Diabetes
- Fettleibigkeit
- Lungenerkrankung
- Lebererkrankung
- Nierenerkrankung`
    },
    patientImmuneRisk: {
      label: 'Haben Sie ein unterdrücktes Immunsystem?',
      info: `zum Beispiel wegen:
- Organtransplantation
- Krebserkrankung
- Chemotherapie
- Einnahme von Cortison-Tabletten 
- HIV`
    }
  },
  components: {
    hotlineSearch: {
      labelText: 'Postleitzahl eingeben',
      buttonText: 'Gesundheitsamt suchen'
    }
  }
}
