import { Section, Typography } from '@/components/common';
import { PrivacyPolicyProps } from './PrivacyPolicy.types';

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = () => {
  return (
    <Section className="max-w-full break-words">
      <Section.Wrapper className="py-32">
        <Section.Content className="prose prose-slate">
          <Typography variant={'h3'}>Datenschutzerklärung</Typography>
          <p>Stand: 27. Mai 2023</p>
          <h2>Inhaltsübersicht</h2>
          <ul className="index">
            <li>
              <a className="index-link" href="#m3">
                Verantwortlicher
              </a>
            </li>
            <li>
              <a className="index-link" href="#mOverview">
                Übersicht der Verarbeitungen
              </a>
            </li>
            <li>
              <a className="index-link" href="#m13">
                Maßgebliche Rechtsgrundlagen
              </a>
            </li>
            <li>
              <a className="index-link" href="#m27">
                Sicherheitsmaßnahmen
              </a>
            </li>
            <li>
              <a className="index-link" href="#m25">
                Übermittlung von personenbezogenen Daten
              </a>
            </li>
            <li>
              <a className="index-link" href="#m24">
                Datenverarbeitung in Drittländern
              </a>
            </li>
            <li>
              <a className="index-link" href="#m12">
                Löschung von Daten
              </a>
            </li>
            <li>
              <a className="index-link" href="#m134">
                Einsatz von Cookies
              </a>
            </li>
            <li>
              <a className="index-link" href="#m317">
                Geschäftliche Leistungen
              </a>
            </li>
            <li>
              <a className="index-link" href="#m225">
                Bereitstellung des Onlineangebotes und Webhosting
              </a>
            </li>
            <li>
              <a className="index-link" href="#m182">
                Kontakt- und Anfragenverwaltung
              </a>
            </li>
            <li>
              <a className="index-link" href="#m263">
                Webanalyse, Monitoring und Optimierung
              </a>
            </li>
            <li>
              <a className="index-link" href="#m136">
                Präsenzen in sozialen Netzwerken (Social Media)
              </a>
            </li>
            <li>
              <a className="index-link" href="#m328">
                Plugins und eingebettete Funktionen sowie Inhalte
              </a>
            </li>
            <li>
              <a className="index-link" href="#m15">
                Änderung und Aktualisierung der Datenschutzerklärung
              </a>
            </li>
            <li>
              <a className="index-link" href="#m10">
                Rechte der betroffenen Personen
              </a>
            </li>
          </ul>
          <h2 id="m3">Verantwortlicher</h2>
          <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
          <p>
            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
            und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
            betroffenen Personen.
          </p>
          <h3>Arten der verarbeiteten Daten</h3>
          <ul>
            <li>Bestandsdaten.</li>
            <li>Zahlungsdaten.</li>
            <li>Kontaktdaten.</li>
            <li>Inhaltsdaten.</li>
            <li>Vertragsdaten.</li>
            <li>Nutzungsdaten.</li>
            <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
          </ul>
          <h3>Kategorien betroffener Personen</h3>
          <ul>
            <li>Interessenten.</li>
            <li>Kommunikationspartner.</li>
            <li>Nutzer.</li>
            <li>Geschäfts- und Vertragspartner.</li>
          </ul>
          <h3>Zwecke der Verarbeitung</h3>
          <ul>
            <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
            <li>Kontaktanfragen und Kommunikation.</li>
            <li>Sicherheitsmaßnahmen.</li>
            <li>Reichweitenmessung.</li>
            <li>Tracking.</li>
            <li>Büro- und Organisationsverfahren.</li>
            <li>Verwaltung und Beantwortung von Anfragen.</li>
            <li>Feedback.</li>
            <li>Marketing.</li>
            <li>Profile mit nutzerbezogenen Informationen.</li>
            <li>
              Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
            </li>
            <li>Informationstechnische Infrastruktur.</li>
          </ul>
          <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
          <p>
            Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
            DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte
            nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
            nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
            Sitzland gelten können. Sollten ferner im Einzelfall speziellere
            Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
            Datenschutzerklärung mit.
          </p>
          <ul>
            <li>
              <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> -
              Die betroffene Person hat ihre Einwilligung in die Verarbeitung
              der sie betreffenden personenbezogenen Daten für einen
              spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
            </li>
            <li>
              <strong>
                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S.
                1 lit. b) DSGVO)
              </strong>{' '}
              - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
              Vertragspartei die betroffene Person ist, oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
              betroffenen Person erfolgen.
            </li>
            <li>
              <strong>
                Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)
              </strong>{' '}
              - Die Verarbeitung ist zur Erfüllung einer rechtlichen
              Verpflichtung erforderlich, der der Verantwortliche unterliegt.
            </li>
            <li>
              <strong>
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
              </strong>{' '}
              - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
              Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
              Interessen oder Grundrechte und Grundfreiheiten der betroffenen
              Person, die den Schutz personenbezogener Daten erfordern,
              überwiegen.
            </li>
          </ul>
          <p>
            Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale
            Regelungen zum Datenschutz in Deutschland. Hierzu gehört
            insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener
            Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG).
            Das BDSG enthält insbesondere Spezialregelungen zum Recht auf
            Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur
            Verarbeitung besonderer Kategorien personenbezogener Daten, zur
            Verarbeitung für andere Zwecke und zur Übermittlung sowie
            automatisierten Entscheidungsfindung im Einzelfall einschließlich
            Profiling. Des Weiteren regelt es die Datenverarbeitung für Zwecke
            des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im
            Hinblick auf die Begründung, Durchführung oder Beendigung von
            Beschäftigungsverhältnissen sowie die Einwilligung von
            Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen
            Bundesländer zur Anwendung gelangen.
          </p>
          <h2 id="m27">Sicherheitsmaßnahmen</h2>
          <p>
            Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
            Berücksichtigung des Stands der Technik, der Implementierungskosten
            und der Art, des Umfangs, der Umstände und der Zwecke der
            Verarbeitung sowie der unterschiedlichen
            Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
            Rechte und Freiheiten natürlicher Personen geeignete technische und
            organisatorische Maßnahmen, um ein dem Risiko angemessenes
            Schutzniveau zu gewährleisten.
          </p>
          <p>
            Zu den Maßnahmen gehören insbesondere die Sicherung der
            Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
            Kontrolle des physischen und elektronischen Zugangs zu den Daten als
            auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
            Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben
            wir Verfahren eingerichtet, die eine Wahrnehmung von
            Betroffenenrechten, die Löschung von Daten und Reaktionen auf die
            Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den
            Schutz personenbezogener Daten bereits bei der Entwicklung bzw.
            Auswahl von Hardware, Software sowie Verfahren entsprechend dem
            Prinzip des Datenschutzes, durch Technikgestaltung und durch
            datenschutzfreundliche Voreinstellungen.
          </p>
          <h2 id="m25">Übermittlung von personenbezogenen Daten</h2>
          <p>
            Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es
            vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
            selbstständige Organisationseinheiten oder Personen übermittelt oder
            sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser
            Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister oder
            Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden
            werden, gehören. In solchen Fällen beachten wir die gesetzlichen
            Vorgaben und schließen insbesondere entsprechende Verträge bzw.
            Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den
            Empfängern Ihrer Daten ab.
          </p>
          <h2 id="m24">Datenverarbeitung in Drittländern</h2>
          <p>
            Sofern wir Daten in einem Drittland (d.h., außerhalb der
            Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR))
            verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von
            Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an
            andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies
            nur im Einklang mit den gesetzlichen Vorgaben.{' '}
          </p>
          <p>
            Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder
            gesetzlich erforderlicher Übermittlung verarbeiten oder lassen wir
            die Daten nur in Drittländern mit einem anerkannten
            Datenschutzniveau, vertraglichen Verpflichtung durch sogenannte
            Standardschutzklauseln der EU-Kommission, beim Vorliegen von
            Zertifizierungen oder verbindlicher internen Datenschutzvorschriften
            verarbeiten (Art. 44 bis 49 DSGVO, Informationsseite der
            EU-Kommission:{' '}
            <a
              href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
              target="_blank"
            >
              https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
            </a>
            ).
          </p>
          <h2 id="m12">Löschung von Daten</h2>
          <p>
            Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
            Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten
            Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen
            (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist
            oder sie für den Zweck nicht erforderlich sind). Sofern die Daten
            nicht gelöscht werden, weil sie für andere und gesetzlich zulässige
            Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke
            beschränkt. D.h., die Daten werden gesperrt und nicht für andere
            Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder
            steuerrechtlichen Gründen aufbewahrt werden müssen oder deren
            Speicherung zur Geltendmachung, Ausübung oder Verteidigung von
            Rechtsansprüchen oder zum Schutz der Rechte einer anderen
            natürlichen oder juristischen Person erforderlich ist.{' '}
          </p>
          <p>
            Unsere Datenschutzhinweise können ferner weitere Angaben zu der
            Aufbewahrung und Löschung von Daten beinhalten, die für die
            jeweiligen Verarbeitungen vorrangig gelten.
          </p>
          <h2 id="m134">Einsatz von Cookies</h2>
          <p>
            Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die
            Informationen auf Endgeräten speichern und Informationen aus den
            Endgeräten auslesen. Z.B. um den Login-Status in einem Nutzerkonto,
            einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder
            verwendete Funktionen eines Onlineangebotes speichern. Cookies
            können ferner zu unterschiedlichen Zwecken eingesetzt werden, z.B.
            zu Zwecken der Funktionsfähigkeit, Sicherheit und Komfort von
            Onlineangeboten sowie der Erstellung von Analysen der
            Besucherströme.{' '}
          </p>
          <p>
            <strong>Hinweise zur Einwilligung: </strong>Wir setzen Cookies im
            Einklang mit den gesetzlichen Vorschriften ein. Daher holen wir von
            den Nutzern eine vorhergehende Einwilligung ein, außer wenn diese
            gesetzlich nicht gefordert ist. Eine Einwilligung ist insbesondere
            nicht notwendig, wenn das Speichern und das Auslesen der
            Informationen, also auch von Cookies, unbedingt erforderlich sind,
            um dem den Nutzern einen von ihnen ausdrücklich gewünschten
            Telemediendienst (also unser Onlineangebot) zur Verfügung zu
            stellen. Zu den unbedingt erforderlichen Cookies gehören in der
            Regel Cookies mit Funktionen, die der Anzeige und Lauffähigkeit des
            Onlineangebotes , dem Lastausgleich, der Sicherheit, der Speicherung
            der Präferenzen und Auswahlmöglichkeiten der Nutzer oder ähnlichen
            mit der Bereitstellung der Haupt- und Nebenfunktionen des von den
            Nutzern angeforderten Onlineangebotes zusammenhängenden Zwecken
            dienen. Die widerrufliche Einwilligung wird gegenüber den Nutzern
            deutlich kommuniziert und enthält die Informationen zu der
            jeweiligen Cookie-Nutzung.
          </p>
          <p>
            <strong>
              Hinweise zu datenschutzrechtlichen Rechtsgrundlagen:{' '}
            </strong>
            Auf welcher datenschutzrechtlichen Rechtsgrundlage wir die
            personenbezogenen Daten der Nutzer mit Hilfe von Cookies
            verarbeiten, hängt davon ab, ob wir Nutzer um eine Einwilligung
            bitten. Falls die Nutzer einwilligen, ist die Rechtsgrundlage der
            Verarbeitung Ihrer Daten die erklärte Einwilligung. Andernfalls
            werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage
            unserer berechtigten Interessen (z.B. an einem
            betriebswirtschaftlichen Betrieb unseres Onlineangebotes und
            Verbesserung seiner Nutzbarkeit) verarbeitet oder, wenn dies im
            Rahmen der Erfüllung unserer vertraglichen Pflichten erfolgt, wenn
            der Einsatz von Cookies erforderlich ist, um unsere vertraglichen
            Verpflichtungen zu erfüllen. Zu welchen Zwecken die Cookies von uns
            verarbeitet werden, darüber klären wir im Laufe dieser
            Datenschutzerklärung oder im Rahmen von unseren Einwilligungs- und
            Verarbeitungsprozessen auf.
          </p>
          <p>
            <strong>Speicherdauer: </strong>Im Hinblick auf die Speicherdauer
            werden die folgenden Arten von Cookies unterschieden:
          </p>
          <ul>
            <li>
              <strong>
                Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):
              </strong>
              Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer
              ein Online-Angebot verlassen und sein Endgerät (z.B. Browser oder
              mobile Applikation) geschlossen hat.
            </li>
            <li>
              <strong>Permanente Cookies:</strong> Permanente Cookies bleiben
              auch nach dem Schließen des Endgerätes gespeichert. So können
              beispielsweise der Login-Status gespeichert oder bevorzugte
              Inhalte direkt angezeigt werden, wenn der Nutzer eine Website
              erneut besucht. Ebenso können die mit Hilfe von Cookies erhobenen
              Daten der Nutzer zur Reichweitenmessung verwendet werden. Sofern
              wir Nutzern keine expliziten Angaben zur Art und Speicherdauer von
              Cookies mitteilen (z. B. im Rahmen der Einholung der
              Einwilligung), sollten Nutzer davon ausgehen, dass Cookies
              permanent sind und die Speicherdauer bis zu zwei Jahre betragen
              kann.
            </li>
          </ul>
          <p>
            <strong>
              Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out):{' '}
            </strong>
            Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit
            widerrufen und zudem einen Widerspruch gegen die Verarbeitung
            entsprechend den gesetzlichen Vorgaben im Art. 21 DSGVO einlegen.
            Nutzer können ihren Widerspruch auch über die Einstellungen ihres
            Browsers erklären, z.B. durch Deaktivierung der Verwendung von
            Cookies (wobei dadurch auch die Funktionalität unserer
            Online-Dienste eingeschränkt sein kann). Ein Widerspruch gegen die
            Verwendung von Cookies zu Online-Marketing-Zwecken kann auch über
            die Websites{' '}
            <a href="https://optout.aboutads.info" target="_blank">
              https://optout.aboutads.info
            </a>{' '}
            und{' '}
            <a href="https://www.youronlinechoices.com/" target="_blank">
              https://www.youronlinechoices.com/
            </a>{' '}
            erklärt werden.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO); Einwilligung (Art. 6 Abs. 1 S. 1 lit.
              a) DSGVO).
            </li>
          </ul>
          <p>
            <strong>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
              Diensten:
            </strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>
                Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:{' '}
              </strong>
              Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management ein,
              in dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von
              Cookies, bzw. der im Rahmen des
              Cookie-Einwilligungs-Management-Verfahrens genannten
              Verarbeitungen und Anbieter eingeholt sowie von den Nutzern
              verwaltet und widerrufen werden können. Hierbei wird die
              Einwilligungserklärung gespeichert, um deren Abfrage nicht erneut
              wiederholen zu müssen und die Einwilligung entsprechend der
              gesetzlichen Verpflichtung nachweisen zu können. Die Speicherung
              kann serverseitig und/oder in einem Cookie (sogenanntes
              Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien)
              erfolgen, um die Einwilligung einem Nutzer, bzw. dessen Gerät
              zuordnen zu können. Vorbehaltlich individueller Angaben zu den
              Anbietern von Cookie-Management-Diensten, gelten die folgenden
              Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu
              zwei Jahren betragen. Hierbei wird ein pseudonymer
              Nutzer-Identifikator gebildet und mit dem Zeitpunkt der
              Einwilligung, Angaben zur Reichweite der Einwilligung (z. B.
              welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem
              Browser, System und verwendeten Endgerät gespeichert;{' '}
              <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S.
              1 lit. a) DSGVO).
            </li>
          </ul>
          <h2 id="m317">Geschäftliche Leistungen</h2>
          <p>
            Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B.
            Kunden und Interessenten (zusammenfassend bezeichnet als
            &quot;Vertragspartner&quot;) im Rahmen von vertraglichen und
            vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen
            und im Rahmen der Kommunikation mit den Vertragspartnern (oder
            vorvertraglich), z.B., um Anfragen zu beantworten.
          </p>
          <p>
            Wir verarbeiten diese Daten, um unsere vertraglichen Verpflichtungen
            zu erfüllen. Dazu gehören insbesondere die Verpflichtungen zur
            Erbringung der vereinbarten Leistungen, etwaige
            Aktualisierungspflichten und Abhilfe bei Gewährleistungs- und
            sonstigen Leistungsstörungen. Darüber hinaus verarbeiten wir die
            Daten zur Wahrung unserer Rechte und zum Zwecke der mit diesen
            Pflichten verbundenen Verwaltungsaufgaben sowie der
            Unternehmensorganisation. Darüber hinaus verarbeiten wir die Daten
            auf Grundlage unserer berechtigten Interessen an einer
            ordnungsgemäßen und betriebswirtschaftlichen Geschäftsführung sowie
            an Sicherheitsmaßnahmen zum Schutz unserer Vertragspartner und
            unseres Geschäftsbetriebes vor Missbrauch, Gefährdung ihrer Daten,
            Geheimnisse, Informationen und Rechte (z.B. zur Beteiligung von
            Telekommunikations-, Transport- und sonstigen Hilfsdiensten sowie
            Subunternehmern, Banken, Steuer- und Rechtsberatern,
            Zahlungsdienstleistern oder Finanzbehörden). Im Rahmen des geltenden
            Rechts geben wir die Daten von Vertragspartnern nur insoweit an
            Dritte weiter, als dies für die vorgenannten Zwecke oder zur
            Erfüllung gesetzlicher Pflichten erforderlich ist. Über weitere
            Formen der Verarbeitung, z.B. zu Marketingzwecken, werden die
            Vertragspartner im Rahmen dieser Datenschutzerklärung informiert.
          </p>
          <p>
            Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen
            wir den Vertragspartnern vor oder im Rahmen der Datenerhebung, z.B.
            in Onlineformularen, durch besondere Kennzeichnung (z.B. Farben)
            bzw. Symbole (z.B. Sternchen o.ä.), oder persönlich mit.
          </p>
          <p>
            Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und
            vergleichbarer Pflichten, d.h., grundsätzlich nach Ablauf von 4
            Jahren, es sei denn, dass die Daten in einem Kundenkonto gespeichert
            werden, z.B., solange sie aus gesetzlichen Gründen der Archivierung
            aufbewahrt werden müssen. Die gesetzliche Aufbewahrungsfrist beträgt
            bei steuerrechtlich relevanten Unterlagen sowie bei Handelsbüchern,
            Inventaren, Eröffnungsbilanzen, Jahresabschlüssen, die zum
            Verständnis dieser Unterlagen erforderlichen Arbeitsanweisungen und
            sonstigen Organisationsunterlagen und Buchungsbelegen zehn Jahre
            sowie bei empfangenen Handels- und Geschäftsbriefen und Wiedergaben
            der abgesandten Handels- und Geschäftsbriefe sechs Jahre. Die Frist
            beginnt mit Ablauf des Kalenderjahres, in dem die letzte Eintragung
            in das Buch gemacht, das Inventar, die Eröffnungsbilanz, der
            Jahresabschluss oder der Lagebericht aufgestellt, der Handels- oder
            Geschäftsbrief empfangen oder abgesandt worden oder der
            Buchungsbeleg entstanden ist, ferner die Aufzeichnung vorgenommen
            worden ist oder die sonstigen Unterlagen entstanden sind.
          </p>
          <p>
            Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder
            Plattformen einsetzen, gelten im Verhältnis zwischen den Nutzern und
            den Anbietern die Geschäftsbedingungen und Datenschutzhinweise der
            jeweiligen Drittanbieter oder Plattformen.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B.
              Namen, Adressen); Zahlungsdaten (z.B. Bankverbindungen,
              Rechnungen, Zahlungshistorie); Kontaktdaten (z.B. E-Mail,
              Telefonnummern); Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit,
              Kundenkategorie).
            </li>
            <li>
              <strong>Betroffene Personen:</strong> Interessenten; Geschäfts-
              und Vertragspartner.
            </li>
            <li>
              <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
              Leistungen und Kundenservice; Kontaktanfragen und Kommunikation;
              Büro- und Organisationsverfahren; Verwaltung und Beantwortung von
              Anfragen.
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
              vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO);
              Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO);
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
          <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
          <p>
            Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste
            zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die
            IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und
            Funktionen unserer Online-Dienste an den Browser oder das Endgerät
            der Nutzer zu übermitteln.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B.
              besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
              Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
              Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
            </li>
            <li>
              <strong>Betroffene Personen:</strong> Nutzer (z.B.
              Webseitenbesucher, Nutzer von Onlinediensten).
            </li>
            <li>
              <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
              Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische
              Infrastruktur (Betrieb und Bereitstellung von Informationssystemen
              und technischen Geräten (Computer, Server etc.).);
              Sicherheitsmaßnahmen.
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
          <p>
            <strong>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
              Diensten:
            </strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der
              Zugriff auf unser Onlineangebot wird in Form von so genannten
              &quot;Server-Logfiles&quot; protokolliert. Zu den Serverlogfiles
              können die Adresse und Name der abgerufenen Webseiten und Dateien,
              Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung
              über erfolgreichen Abruf, Browsertyp nebst Version, das
              Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte
              Seite) und im Regelfall IP-Adressen und der anfragende Provider
              gehören. Die Serverlogfiles können zum einen zu Zwecken der
              Sicherheit eingesetzt werden, z.B., um eine Überlastung der Server
              zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen,
              sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der
              Server und ihre Stabilität sicherzustellen;{' '}
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO); <strong>Löschung von Daten:</strong>{' '}
              Logfile-Informationen werden für die Dauer von maximal 30 Tagen
              gespeichert und danach gelöscht oder anonymisiert. Daten, deren
              weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis
              zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung
              ausgenommen.
            </li>
          </ul>
          <h2 id="m182">Kontakt- und Anfragenverwaltung</h2>
          <p>
            Bei der Kontaktaufnahme mit uns (z.B. per Post, Kontaktformular,
            E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender
            Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden
            Personen verarbeitet soweit dies zur Beantwortung der
            Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.B.
              E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in
              Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten,
              Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und
              Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
              Identifikationsnummern, Einwilligungsstatus).
            </li>
            <li>
              <strong>Betroffene Personen:</strong> Kommunikationspartner.
            </li>
            <li>
              <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
              Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback
              (z.B. Sammeln von Feedback via Online-Formular); Bereitstellung
              unseres Onlineangebotes und Nutzerfreundlichkeit.
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
          <h2 id="m263">Webanalyse, Monitoring und Optimierung</h2>
          <p>
            Die Webanalyse (auch als &quot;Reichweitenmessung&quot; bezeichnet)
            dient der Auswertung der Besucherströme unseres Onlineangebotes und
            kann Verhalten, Interessen oder demographische Informationen zu den
            Besuchern, wie z.B. das Alter oder das Geschlecht, als pseudonyme
            Werte umfassen. Mit Hilfe der Reichweitenanalyse können wir z.B.
            erkennen, zu welcher Zeit unser Onlineangebot oder dessen Funktionen
            oder Inhalte am häufigsten genutzt werden oder zur Wiederverwendung
            einladen. Ebenso können wir nachvollziehen, welche Bereiche der
            Optimierung bedürfen.{' '}
          </p>
          <p>
            Neben der Webanalyse können wir auch Testverfahren einsetzen, um
            z.B. unterschiedliche Versionen unseres Onlineangebotes oder seiner
            Bestandteile zu testen und optimieren.
          </p>
          <p>
            Sofern nachfolgend nicht anders angegeben, können zu diesen Zwecken
            Profile, d.h. zu einem Nutzungsvorgang zusammengefasste Daten
            angelegt und Informationen in einem Browser, bzw. in einem Endgerät
            gespeichert und aus diesem ausgelesen werden. Zu den erhobenen
            Angaben gehören insbesondere besuchte Webseiten und dort genutzte
            Elemente sowie technische Angaben, wie der verwendete Browser, das
            verwendete Computersystem sowie Angaben zu Nutzungszeiten. Sofern
            Nutzer in die Erhebung ihrer Standortdaten uns gegenüber oder
            gegenüber den Anbietern der von uns eingesetzten Dienste
            einverstanden erklärt haben, können auch Standortdaten verarbeitet
            werden.
          </p>
          <p>
            Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch
            nutzen wir ein IP-Masking-Verfahren (d.h., Pseudonymisierung durch
            Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden die
            im Rahmen von Webanalyse, A/B-Testings und Optimierung keine
            Klardaten der Nutzer (wie z.B. E-Mail-Adressen oder Namen)
            gespeichert, sondern Pseudonyme. D.h., wir als auch die Anbieter der
            eingesetzten Software kennen nicht die tatsächliche Identität der
            Nutzer, sondern nur den für Zwecke der jeweiligen Verfahren in deren
            Profilen gespeicherten Angaben.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B.
              besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
              Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
              Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
            </li>
            <li>
              <strong>Betroffene Personen:</strong> Nutzer (z.B.
              Webseitenbesucher, Nutzer von Onlinediensten).
            </li>
            <li>
              <strong>Zwecke der Verarbeitung:</strong> Reichweitenmessung (z.B.
              Zugriffsstatistiken, Erkennung wiederkehrender Besucher); Profile
              mit nutzerbezogenen Informationen (Erstellen von Nutzerprofilen);
              Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung
              von Cookies); Bereitstellung unseres Onlineangebotes und
              Nutzerfreundlichkeit.
            </li>
            <li>
              <strong>Sicherheitsmaßnahmen:</strong> IP-Masking
              (Pseudonymisierung der IP-Adresse).
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S.
              1 lit. a) DSGVO).
            </li>
          </ul>
          <p>
            <strong>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
              Diensten:
            </strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Google Analytics: </strong>Webanalyse, Reichweitenmessung
              sowie Messung von Nutzerströmen; <strong>Dienstanbieter:</strong>{' '}
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland; <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6
              Abs. 1 S. 1 lit. a) DSGVO); <strong>Website:</strong>{' '}
              <a
                href="https://marketingplatform.google.com/intl/de/about/analytics/"
                target="_blank"
              >
                https://marketingplatform.google.com/intl/de/about/analytics/
              </a>
              ; <strong>Datenschutzerklärung:</strong>{' '}
              <a href="https://policies.google.com/privacy" target="_blank">
                https://policies.google.com/privacy
              </a>
              ; <strong>Auftragsverarbeitungsvertrag:</strong>{' '}
              <a
                href="https://business.safety.google/adsprocessorterms"
                target="_blank"
              >
                https://business.safety.google/adsprocessorterms
              </a>
              ;{' '}
              <strong>
                Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
                Verarbeitung in Drittländern):
              </strong>{' '}
              <a
                href="https://business.safety.google/adsprocessorterms"
                target="_blank"
              >
                https://business.safety.google/adsprocessorterms
              </a>
              ; <strong>Widerspruchsmöglichkeit (Opt-Out):</strong>{' '}
              Opt-Out-Plugin:{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"
              >
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>
              , Einstellungen für die Darstellung von Werbeeinblendungen:{' '}
              <a
                href="https://adssettings.google.com/authenticated"
                target="_blank"
              >
                https://adssettings.google.com/authenticated
              </a>
              ; <strong>Weitere Informationen:</strong>{' '}
              <a
                href="https://privacy.google.com/businesses/adsservices"
                target="_blank"
              >
                https://privacy.google.com/businesses/adsservices
              </a>{' '}
              (Arten der Verarbeitung sowie der verarbeiteten Daten).
            </li>
          </ul>
          <h2 id="m136">Präsenzen in sozialen Netzwerken (Social Media)</h2>
          <p>
            Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und
            verarbeiten in diesem Rahmen Daten der Nutzer, um mit den dort
            aktiven Nutzern zu kommunizieren oder um Informationen über uns
            anzubieten.
          </p>
          <p>
            Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des
            Raumes der Europäischen Union verarbeitet werden können. Hierdurch
            können sich für die Nutzer Risiken ergeben, weil so z.B. die
            Durchsetzung der Rechte der Nutzer erschwert werden könnte.
          </p>
          <p>
            Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im
            Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So
            können z.B. anhand des Nutzungsverhaltens und sich daraus ergebender
            Interessen der Nutzer Nutzungsprofile erstellt werden. Die
            Nutzungsprofile können wiederum verwendet werden, um z.B.
            Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die
            mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken
            werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert,
            in denen das Nutzungsverhalten und die Interessen der Nutzer
            gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten
            unabhängig der von den Nutzern verwendeten Geräte gespeichert werden
            (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen
            sind und bei diesen eingeloggt sind).
          </p>
          <p>
            Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen
            und der Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die
            Datenschutzerklärungen und Angaben der Betreiber der jeweiligen
            Netzwerke.
          </p>
          <p>
            Auch im Fall von Auskunftsanfragen und der Geltendmachung von
            Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten
            bei den Anbietern geltend gemacht werden können. Nur die Anbieter
            haben jeweils Zugriff auf die Daten der Nutzer und können direkt
            entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie
            dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.B.
              E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in
              Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten,
              Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und
              Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
              Identifikationsnummern, Einwilligungsstatus).
            </li>
            <li>
              <strong>Betroffene Personen:</strong> Nutzer (z.B.
              Webseitenbesucher, Nutzer von Onlinediensten).
            </li>
            <li>
              <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
              Kommunikation; Feedback (z.B. Sammeln von Feedback via
              Online-Formular); Marketing.
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
          <p>
            <strong>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
              Diensten:
            </strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Instagram: </strong>Soziales Netzwerk;{' '}
              <strong>Dienstanbieter:</strong> Meta Platforms Irland Limited, 4
              Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland;{' '}
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO); <strong>Website:</strong>{' '}
              <a href="https://www.instagram.com" target="_blank">
                https://www.instagram.com
              </a>
              ; <strong>Datenschutzerklärung:</strong>{' '}
              <a
                href="https://instagram.com/about/legal/privacy"
                target="_blank"
              >
                https://instagram.com/about/legal/privacy
              </a>
              .
            </li>
            <li>
              <strong>Facebook-Seiten: </strong>Profile innerhalb des sozialen
              Netzwerks Facebook - Wir sind gemeinsam mit Meta Platforms Ireland
              Limited für die Erhebung (jedoch nicht die weitere Verarbeitung)
              von Daten der Besucher unserer Facebook-Seite (sog.
              &quot;Fanpage&quot;) verantwortlich. Zu diesen Daten gehören
              Informationen zu den Arten von Inhalten, die Nutzer sich ansehen
              oder mit denen sie interagieren, oder die von ihnen vorgenommenen
              Handlungen (siehe unter „Von dir und anderen getätigte und
              bereitgestellte Dinge“ in der Facebook-Datenrichtlinie:{' '}
              <a href="https://www.facebook.com/policy" target="_blank">
                https://www.facebook.com/policy
              </a>
              ), sowie Informationen über die von den Nutzern genutzten Geräte
              (z. B. IP-Adressen, Betriebssystem, Browsertyp,
              Spracheinstellungen, Cookie-Daten; siehe unter
              „Geräteinformationen“ in der Facebook-Datenrichtlinie:{' '}
              <a href="https://www.facebook.com/policy" target="_blank">
                https://www.facebook.com/policy
              </a>
              ). Wie in der Facebook-Datenrichtlinie unter „Wie verwenden wir
              diese Informationen?“ erläutert, erhebt und verwendet Facebook
              Informationen auch, um Analysedienste, so genannte
              &quot;Seiten-Insights&quot;, für Seitenbetreiber bereitzustellen,
              damit diese Erkenntnisse darüber erhalten, wie Personen mit ihren
              Seiten und mit den mit ihnen verbundenen Inhalten interagieren.
              Wir haben mit Facebook eine spezielle Vereinbarung abgeschlossen
              (&quot;Informationen zu Seiten-Insights&quot;,{' '}
              <a
                href="https://www.facebook.com/legal/terms/page_controller_addendum"
                target="_blank"
              >
                https://www.facebook.com/legal/terms/page_controller_addendum
              </a>
              ), in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen
              Facebook beachten muss und in der Facebook sich bereit erklärt hat
              die Betroffenenrechte zu erfüllen (d. h. Nutzer können z. B.
              Auskünfte oder Löschungsanfragen direkt an Facebook richten). Die
              Rechte der Nutzer (insbesondere auf Auskunft, Löschung,
              Widerspruch und Beschwerde bei zuständiger Aufsichtsbehörde),
              werden durch die Vereinbarungen mit Facebook nicht eingeschränkt.
              Weitere Hinweise finden sich in den &quot;Informationen zu
              Seiten-Insights&quot; (
              <a
                href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
                target="_blank"
              >
                https://www.facebook.com/legal/terms/information_about_page_insights_data
              </a>
              ); <strong>Dienstanbieter:</strong> Meta Platforms Ireland
              Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Irland; <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen
              (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); <strong>Website:</strong>{' '}
              <a href="https://www.facebook.com" target="_blank">
                https://www.facebook.com
              </a>
              ; <strong>Datenschutzerklärung:</strong>{' '}
              <a href="https://www.facebook.com/about/privacy" target="_blank">
                https://www.facebook.com/about/privacy
              </a>
              ;{' '}
              <strong>
                Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
                Verarbeitung in Drittländern):
              </strong>{' '}
              <a
                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                target="_blank"
              >
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>
              ; <strong>Weitere Informationen:</strong> Vereinbarung gemeinsamer
              Verantwortlichkeit:{' '}
              <a
                href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
                target="_blank"
              >
                https://www.facebook.com/legal/terms/information_about_page_insights_data
              </a>
              . Die gemeinsame Verantwortlichkeit beschränkt sich auf die
              Erhebung durch und Übermittlung von Daten an Meta Platforms
              Ireland Limited, ein Unternehmen mit Sitz in der EU. Die weitere
              Verarbeitung der Daten liegt in der alleinigen Verantwortung von
              Meta Platforms Ireland Limited, was insbesondere die Übermittlung
              der Daten an die Muttergesellschaft Meta Platforms, Inc. in den
              USA betrifft (auf der Grundlage der zwischen Meta Platforms
              Ireland Limited und Meta Platforms, Inc. geschlossenen
              Standardvertragsklauseln).
            </li>
            <li>
              <strong>LinkedIn: </strong>Soziales Netzwerk;{' '}
              <strong>Dienstanbieter:</strong> LinkedIn Irland Unlimited
              Company, Wilton Plaza Wilton Place, Dublin 2, Irland;{' '}
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO); <strong>Website:</strong>{' '}
              <a href="https://www.linkedin.com" target="_blank">
                https://www.linkedin.com
              </a>
              ; <strong>Datenschutzerklärung:</strong>{' '}
              <a
                href="https://www.linkedin.com/legal/privacy-policy"
                target="_blank"
              >
                https://www.linkedin.com/legal/privacy-policy
              </a>
              ; <strong>Auftragsverarbeitungsvertrag:</strong>{' '}
              <a href="https://legal.linkedin.com/dpa" target="_blank">
                https://legal.linkedin.com/dpa
              </a>
              ;{' '}
              <strong>
                Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
                Verarbeitung in Drittländern):
              </strong>{' '}
              <a href="https://legal.linkedin.com/dpa" target="_blank">
                https://legal.linkedin.com/dpa
              </a>
              ; <strong>Widerspruchsmöglichkeit (Opt-Out):</strong>{' '}
              <a
                href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                target="_blank"
              >
                https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
              </a>
              .
            </li>
          </ul>
          <h2 id="m328">Plugins und eingebettete Funktionen sowie Inhalte</h2>
          <p>
            Wir binden in unser Onlineangebot Funktions- und Inhaltselemente
            ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend
            bezeichnet als &quot;Drittanbieter&quot;) bezogen werden. Dabei kann
            es sich zum Beispiel um Grafiken, Videos oder Stadtpläne handeln
            (nachfolgend einheitlich bezeichnet als &quot;Inhalte&quot;).
          </p>
          <p>
            Die Einbindung setzt immer voraus, dass die Drittanbieter dieser
            Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne die
            IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die
            IP-Adresse ist damit für die Darstellung dieser Inhalte oder
            Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu
            verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur
            Auslieferung der Inhalte verwenden. Drittanbieter können ferner
            sogenannte Pixel-Tags (unsichtbare Grafiken, auch als &quot;Web
            Beacons&quot; bezeichnet) für statistische oder Marketingzwecke
            verwenden. Durch die &quot;Pixel-Tags&quot; können Informationen,
            wie der Besucherverkehr auf den Seiten dieser Webseite, ausgewertet
            werden. Die pseudonymen Informationen können ferner in Cookies auf
            dem Gerät der Nutzer gespeichert werden und unter anderem technische
            Informationen zum Browser und zum Betriebssystem, zu verweisenden
            Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres
            Onlineangebotes enthalten als auch mit solchen Informationen aus
            anderen Quellen verbunden werden.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B.
              besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
              Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
              Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
            </li>
            <li>
              <strong>Betroffene Personen:</strong> Nutzer (z.B.
              Webseitenbesucher, Nutzer von Onlinediensten).
            </li>
            <li>
              <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
              Onlineangebotes und Nutzerfreundlichkeit.
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
          <p>
            <strong>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
              Diensten:
            </strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Google Fonts (Bezug vom Google Server): </strong>Bezug von
              Schriften (und Symbolen) zum Zwecke einer technisch sicheren,
              wartungsfreien und effizienten Nutzung von Schriften und Symbolen
              im Hinblick auf Aktualität und Ladezeiten, deren einheitliche
              Darstellung und Berücksichtigung möglicher lizenzrechtlicher
              Beschränkungen. Dem Anbieter der Schriftarten wird die IP-Adresse
              des Nutzers mitgeteilt, damit die Schriftarten im Browser des
              Nutzers zur Verfügung gestellt werden können. Darüber hinaus
              werden technische Daten (Spracheinstellungen, Bildschirmauflösung,
              Betriebssystem, verwendete Hardware) übermittelt, die für die
              Bereitstellung der Schriften in Abhängigkeit von den verwendeten
              Geräten und der technischen Umgebung notwendig sind. Diese Daten
              können auf einem Server des Anbieters der Schriftarten in den USA
              verarbeitet werden - Beim Besuch unseres Onlineangebotes senden
              die Browser der Nutzer ihre Browser HTTP-Anfragen an die Google
              Fonts Web API (d.h. eine Softwareschnittstelle für den Abruf der
              Schriftarten). Die Google Fonts Web API stellt den Nutzern die
              Cascading Style Sheets (CSS) von Google Fonts und danach die in
              der CCS angegebenen Schriftarten zur Verfügung. Zu diesen
              HTTP-Anfragen gehören (1) die vom jeweiligen Nutzer für den
              Zugriff auf das Internet verwendete IP-Adresse, (2) die
              angeforderte URL auf dem Google-Server und (3) die HTTP-Header,
              einschließlich des User-Agents, der die Browser- und
              Betriebssystemversionen der Websitebesucher beschreibt, sowie die
              Verweis-URL (d.h. die Webseite, auf der die Google-Schriftart
              angezeigt werden soll). IP-Adressen werden weder auf
              Google-Servern protokolliert noch gespeichert und sie werden nicht
              analysiert. Die Google Fonts Web API protokolliert Details der
              HTTP-Anfragen (angeforderte URL, User-Agent und Verweis-URL). Der
              Zugriff auf diese Daten ist eingeschränkt und streng kontrolliert.
              Die angeforderte URL identifiziert die Schriftfamilien, für die
              der Nutzer Schriftarten laden möchte. Diese Daten werden
              protokolliert, damit Google bestimmen kann, wie oft eine bestimmte
              Schriftfamilie angefordert wird. Bei der Google Fonts Web API muss
              der User-Agent die Schriftart anpassen, die für den jeweiligen
              Browsertyp generiert wird. Der User-Agent wird in erster Linie zum
              Debugging protokolliert und verwendet, um aggregierte
              Nutzungsstatistiken zu generieren, mit denen die Beliebtheit von
              Schriftfamilien gemessen wird. Diese zusammengefassten
              Nutzungsstatistiken werden auf der Seite „Analysen“ von Google
              Fonts veröffentlicht. Schließlich wird die Verweis-URL
              protokolliert, sodass die Daten für die Wartung der Produktion
              verwendet und ein aggregierter Bericht zu den Top-Integrationen
              basierend auf der Anzahl der Schriftartenanfragen generiert werden
              kann. Google verwendet laut eigener Auskunft keine der von Google
              Fonts erfassten Informationen, um Profile von Endnutzern zu
              erstellen oder zielgerichtete Anzeigen zu schalten;{' '}
              <strong>Dienstanbieter:</strong> Google Ireland Limited, Gordon
              House, Barrow Street, Dublin 4, Irland;{' '}
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO); <strong>Website:</strong>{' '}
              <a href="https://fonts.google.com/" target="_blank">
                https://fonts.google.com/
              </a>
              ; <strong>Datenschutzerklärung:</strong>{' '}
              <a href="https://policies.google.com/privacy" target="_blank">
                https://policies.google.com/privacy
              </a>
              ; <strong>Weitere Informationen:</strong>{' '}
              <a
                href="https://developers.google.com/fonts/faq/privacy?hl=de"
                target="_blank"
              >
                https://developers.google.com/fonts/faq/privacy?hl=de
              </a>
              .
            </li>
          </ul>
          <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2>
          <p>
            Wir bitten Sie, sich regelmäßig über den Inhalt unserer
            Datenschutzerklärung zu informieren. Wir passen die
            Datenschutzerklärung an, sobald die Änderungen der von uns
            durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
            informieren Sie, sobald durch die Änderungen eine
            Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine
            sonstige individuelle Benachrichtigung erforderlich wird.
          </p>
          <p>
            Sofern wir in dieser Datenschutzerklärung Adressen und
            Kontaktinformationen von Unternehmen und Organisationen angeben,
            bitten wir zu beachten, dass die Adressen sich über die Zeit ändern
            können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
          </p>
          <h2 id="m10">Rechte der betroffenen Personen</h2>
          <p>
            Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu,
            die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
          </p>
          <ul>
            <li>
              <strong>
                Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich
                aus Ihrer besonderen Situation ergeben, jederzeit gegen die
                Verarbeitung der Sie betreffenden personenbezogenen Daten, die
                aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                Widerspruch einzulegen; dies gilt auch für ein auf diese
                Bestimmungen gestütztes Profiling. Werden die Sie betreffenden
                personenbezogenen Daten verarbeitet, um Direktwerbung zu
                betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
                Verarbeitung der Sie betreffenden personenbezogenen Daten zum
                Zwecke derartiger Werbung einzulegen; dies gilt auch für das
                Profiling, soweit es mit solcher Direktwerbung in Verbindung
                steht.
              </strong>
            </li>
            <li>
              <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das
              Recht, erteilte Einwilligungen jederzeit zu widerrufen.
            </li>
            <li>
              <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine
              Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet
              werden und auf Auskunft über diese Daten sowie auf weitere
              Informationen und Kopie der Daten entsprechend den gesetzlichen
              Vorgaben.
            </li>
            <li>
              <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend
              den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
              betreffenden Daten oder die Berichtigung der Sie betreffenden
              unrichtigen Daten zu verlangen.
            </li>
            <li>
              <strong>
                Recht auf Löschung und Einschränkung der Verarbeitung:
              </strong>{' '}
              Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
              verlangen, dass Sie betreffende Daten unverzüglich gelöscht
              werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben
              eine Einschränkung der Verarbeitung der Daten zu verlangen.
            </li>
            <li>
              <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das
              Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben,
              nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
              gängigen und maschinenlesbaren Format zu erhalten oder deren
              Übermittlung an einen anderen Verantwortlichen zu fordern.
            </li>
            <li>
              <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben
              unbeschadet eines anderweitigen verwaltungsrechtlichen oder
              gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
              gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts
              des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
              Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
              die Vorgaben der DSGVO verstößt.
            </li>
          </ul>
          <p className="seal">
            <a
              href="https://datenschutz-generator.de/"
              title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
              Schwenke
            </a>
          </p>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default PrivacyPolicy;
