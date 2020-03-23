# Coronav

Ein einfacher Online-Fragebogen mit Handlungsempfehlungen für Bürger:innen zur Entlastung von Hotlines und Ärzt:innen.

## Das Problem

Viele erkrankte Menschen sind momentan verunsichert, ob sie sich auf COVID-19 testen lassen sollten. Um Informationen und Empfehlungen zu erhalten, rufen viele von ihnen beim kassenärztlichen Notruf unter 116117 oder anderen Hotlines an, der dadurch überlastet wird. 

## Bestehende Produkte

Unser Projekt ist inspiriert von Apps wie der Covapp des Charité ([https://covapp.charite.de/](https://covapp.charite.de/)) und dem Online Corona Check von Medventi ([onlinecoronacheck.com)](https://www.onlinecoronacheck.com/). Die bestehenden Lösungen sind inhaltlich gut, aber verwenden viele medizinische Fachausdrücke. Das macht sie für Laien schwer verständlich. Zusätzlich verweisen sie entweder auf lokale Telefonnummern, was sie nicht bundesweit nutzbar macht, oder leiten die Menschen direkt an die überlastete 116117 weiter. Außerdem sind die Lösungen gar nicht so einfach online zu finden. 

## Unsere Lösung

Wir haben mit Coronav ein einfaches Leitsystem in Form eines Online-Fragebogens entwickelt: Es empfiehlt Menschen ohne akute Symptome, zu Hause zu bleiben und sich online zu informieren. Dadurch werden die Hotlines entlastet. Menschen mit Symptomen leiten wir an das für sie zuständige Gesundheitsamt weiter. Dazu benötigen wir lediglich eine Postleitzahl, die direkt an das Postleitzahl-Tool des Robert-Koch-Instituts gesendet wird, womit wir auf bestehende Lösungen zurückgreifen.
Durch Coronav helfen wir Menschen, eine informierte Entscheidung zu treffen. Und wir entlasten von Anfang an die Mitarbeiter:innen des Gesundheitssystems.

## Skalierbarkeit

Indem wir die Menschen mit Symptomen an die regionalen Notfallnummern der mehr als 400 Gesundheitsämter weiterleiten, verteilen wir die Anfragen besser und erreichen somit eine höhere Skalierbarkeit. Wir sind überzeugt, dass das Weiterleiten an lokale Ämter (auch der Katastrophenschutz ist dezentral organisiert) hier einen Mehrwert für Patient*innen bietet. Außerdem werden wir in einer der nächsten Ausbaustufen automatisch die neuesten Erkenntnisse des RKI integrieren. Das macht unser Projekt skalier- und erweiterbar. Mit unserer Webseite erreichen wir leicht alle Menschen, die sich bereits im digitalen Raum bewegen. Außerdem bietet unser System die Möglichkeit, den Fragebogen schnell und einfach um neue Sprachen zu erweitern.

## Innovationskraft

Hier setzen wir auf die geschickte Kombination bewährter Softwareentwicklung, wie z.B. die Einbindung von Content Management Systemen, gekoppelt mit dem Einsatz modernster Webtechnologien (Vue.js, Nuxt.js, Netlify). Wir haben in unserem interdisziplinären Team nicht nur Software-Entwickler*innen sondern auch Ärtz*innen und Kommunikatoren. Zusätzlich geschah die Entwicklung in enger Zusammenarbeit mit einem der Initiatoren des Online Corona Check, Fabian Nokodian, welcher zu unserem Team dazugestoßen ist.

## Gesellschaftlicher Mehrwert

Wir sind überzeugt, dass wir durch unser Leitsystem mehr Leute mit milden Symptomen davon überzeugen können, dass es das Beste ist, zu Hause zu bleiben. Außerdem sind wir überzeugt, das sich Hotlines und Ärzt*innen so besser den relevanten Fragestellungen widmen können: Der Betreuung der schwerwiegenderen Fälle.

## Fortschritt während des Hackathons

Als Teil der Challenge 1_011_c_infektionsfallübermittlung haben wir uns inspirieren lassen vom Team "FlowChart", die sehr gut dargestellt haben, wie manuell und unvollständig die Datenweiterleitung von den Laboren/Ärzten über die Gesundheitsämter zum RKI sind. Wir haben uns gefragt, an welcher Stelle wir ansetzen können und im Gespräch mit Ärzt*innen den ersten Punkt aufgegriffen, den wir gesehen haben: Die Überlastung der Hotlines. Während unserer Recherche haben wir verschiedene Apps und Webseiten unter die Lupe genommen und schnell den Punkt der Verständlichkeit der Fragestellungen als eine Herausforderung identifiziert. 

Mit Coronav haben wir einen Fragebogen erstellt, der leicht verständlich ist. Basierend auf dem Online Corona Checker haben wir den Code weiterentwickelt und Open Source zur Verfügung gestellt.

## Ausblick

Wir möchten Coronav gerne um folgende Aspekte erweitern:

- **Barrierefreiheit:** sodass auch Menschen mit Einschränkungen die Seite nutzen können, z.B. durch einen Screenreader.
- **Mehrsprachigkeit:** unser System ist von Anfang an so konzipiert, dass die Inhalte einfach in andere Sprachen übersetzt und integriert werden können.
- **Erweiterung der Inhalte:**
    - Allgemeine Handlungsratschläge und Hygienetipps
    - Links zu wichtigen Webseiten
    - Automatische Updates, z.B. von Risikogebieten laut RKI
- **Koordination mit offiziellen Stellen:**
    - zur Sicherstellung der Qualität
    - zur öffentlichen Verbreitung
    - und zur Vertrauensbildung

## Jetzt brauchen wir Ihre Hilfe!

Unsere Webseite ist fast fertig. Was wir jetzt brauchen ist die Unterstützung von Institutionen wie dem RKI, dem Bundesgesundheitsministerium oder dem Deutschen Städte- und Gemeindebund.
Sie können mit Ihrem Gütesiegel helfen, dass die Menschen unserer Webseite vertrauen und sie schneller Verbreitung findet. 

## Ressourcen & Links

- **Pitch Video auf YouTube:** [https://www.youtube.com/watch?v=49v7am3bH9g](https://www.youtube.com/watch?v=49v7am3bH9g)
- **Prototyp:** [https://coronav.netlify.com/fragebogen/](https://coronav.netlify.com/fragebogen/)
- **GitHub Repository mit Code (Open Source)**: [https://github.com/JohannesLamberts/covid-19-info](https://github.com/JohannesLamberts/covid-19-info)
- **Entscheidungsbaum für Fragebogen:**
[https://app.creately.com/diagram/T968l5fOs8c/view](https://app.creately.com/diagram/T968l5fOs8c/view)

## Team

- Fabian Nokodian (Assistenzarzt in der Mund-Kiefer-Gesichtschirugie aus Rostock, Gründer [Medventi](https://www.medventi.com/) und Initiator von [https://www.onlinecoronacheck.com/index.html](https://www.onlinecoronacheck.com/index.html))
- Johannes Lamberts (Software Developer aus Hamburg)
Twitter: [https://twitter.com/jlbrts](https://twitter.com/jlbrts)
Web: [https://j-lamberts.de/#/](https://j-lamberts.de/#/)
- Markus Siering (UI Engineer aus Hamburg)
Twitter: [https://twitter.com/HerrBertling](https://twitter.com/HerrBertling)
Web: [https://herrsiering.de/](https://herrsiering.de/)
- Sascha Stoltenow (Partner bei SCRIPT aus Wiesbaden)
Web: [https://script-com.de/team/sascha-stoltenow/](https://script-com.de/team/sascha-stoltenow/)
- Steffi Blumentritt (Leiterin Unternehmertum Wissensfabrik aus Stuttgart)
- Steffi Stoppel (Software Developer und Machine Learning Engineer [WIP] aus Hamburg)
Twitter: [https://twitter.com/Qbrid_](https://twitter.com/Qbrid_)
- Tina Hassberg (Ärztin bei KME Kern Medical Engineering aus Tübingen)
