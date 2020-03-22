export default {
  results: {
    headline: 'Ergebnis',
    noResult: 'Bitte starten Sie den Test von der Frageseite.',
    testRisk:
      'Sie sollten einen Test machen und gehören zur Risikogruppe. -> PLZ, Teststellen, Hotlines.',
    testNoRisk:
      'Sie sollten einen Test machen, aber gehören nicht zur Risikogruppe. -> PLZ, Teststellen, Hotlines.',
    noTestSymptomsRisk:
      'Sie müssen keinen Test machen, aber gehören zur Risikogruppe. -> Zum Arzt wegen Symptomen (normale Erkältung), Selbstisolation.',
    noTestSymptomsNoRisk:
      'Ihre Symptome sprechen nicht für einen Test, sie gehören nicht zur Risikogruppe -> Zum Arzt, Selbstisolation.',
    noTestNoSymptomsRisk:
      'Sie gehören zur Risikogruppe -> Zu Hause, auf Symptome achten.',
    noTestNoSymptomsNoRisk: 'Alles ist gut. Kontakte vermeiden.'
  },
  components: {
    hotlineSearch: {
      labelText: 'Postleitzahl eingeben',
      buttonText: 'Hotline suchen'
    },
    riskAreas: {
      title: 'Risikogebiete',
      countries: [
        { name: 'Ägypten', riskArea: 'ganzes Land' },
        { name: 'China', riskArea: 'Provinz Hubei (inkl. Stadt Wuhan)' },
        {
          name: 'Frankreich',
          riskArea:
            'Region Grand Est (diese Region enthält Elsass, Lothringen und Champagne-Ardenne)'
        },
        { name: 'Iran', riskArea: 'ganzes Land' },
        { name: 'Italien', riskArea: 'ganzes Land' },
        { name: 'Österreich', riskArea: 'Bundesland Tirol' },
        { name: 'Spanien', riskArea: 'Madrid' },
        {
          name: 'Südkorea',
          riskArea: 'Provinz Gyeongsangbuk-do (Nord-Gyeongsang)'
        },
        {
          name: 'USA',
          riskArea: 'Bundesstaaten Kalifornien, Washington und New York'
        }
      ],
      germany: {
        title: 'Besonders betroffene Gebiete in Deutschland',
        areas: [{ name: 'Landkreis Heinsberg (Nordrhein-Westfalen)' }]
      }
    }
  }
}
