import { NextPage } from 'next'
import { Head } from '@components/Head'
import Link from 'next/link'

const Datenschutz: NextPage = () => {
  return (
    <>
      <Head pageTitle="Datenschutzerklärung" />
      <div className="container mx-auto px-4 py-8 max-w-2xl text-gray-800">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          &larr; Zurück zur Karte
        </Link>
        <h1 className="text-3xl font-bold mb-6 font-clanbold">Datenschutzerklärung</h1>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg font-bold mt-4 mb-2">Allgemeine Hinweise</h3>
          <p className="mb-2">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="text-lg font-bold mt-4 mb-2">Datenerfassung auf dieser Website</h3>
          <p className="mb-2 font-bold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
          <p className="mb-2">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <p className="mb-2 font-bold">Wie erfassen wir Ihre Daten?</p>
          <p className="mb-2">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="mb-2">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <p className="mb-2 font-bold">Wofür nutzen wir Ihre Daten?</p>
          <p className="mb-2">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">2. Hosting</h2>
          <p className="mb-2">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          
          <h3 className="text-lg font-bold mt-4 mb-2">Vercel</h3>
          <p className="mb-2">
            Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>
          <p className="mb-2">
             Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
          </p>
          <p className="mb-2">
            Vercel ist nach dem „EU-US Data Privacy Framework“ (DPF) zertifiziert. Das DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie beim Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/s/participant-search" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.dataprivacyframework.gov/s/participant-search</a>
          </p>
          <p className="mb-2">
            Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">3. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-lg font-bold mt-4 mb-2">Matomo (ohne Cookies)</h3>
          <p className="mb-2">
            Diese Website benutzt den Open Source Webanalysedienst Matomo. Matomo verwendet Technologien, die die seitenübergreifende Wiedererkennung des Nutzers zur Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting).
          </p>
          <p className="mb-2">
            Wir haben Matomo so konfiguriert, dass keine Cookies auf Ihrem Endgerät gespeichert werden.
          </p>
          <p className="mb-2">
            Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
          </p>
          <p className="mb-2">
            IP-Anonymisierung: Bei der Analyse mit Matomo setzen wir IP-Anonymisierung ein. Hierbei wird Ihre IP-Adresse vor der Analyse gekürzt, sodass sie Ihnen nicht mehr eindeutig zugeordnet werden kann.
          </p>

          <h3 className="text-lg font-bold mt-4 mb-2">MapTiler / OpenStreetMap</h3>
          <p className="mb-2">
            Diese Seite nutzt über eine API den Kartendienst MapTiler, der auf Daten von OpenStreetMap basiert. Anbieter ist MapTiler AG, Höfnerstrasse 98, 6314 Unterägeri, Schweiz.
          </p>
          <p className="mb-2">
            Zur Nutzung der Funktionen von MapTiler ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von MapTiler übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
          </p>
          <p className="mb-2">
             Die Nutzung von MapTiler erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>
          <p className="mb-2">
            Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von MapTiler: <a href="https://www.maptiler.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.maptiler.com/privacy-policy/</a>.
          </p>
          
           <h3 className="text-lg font-bold mt-4 mb-2">Deutscher Wetterdienst (DWD) & BrightSky</h3>
          <p className="mb-2">
            Zur Anzeige von Wetterdaten nutzen wir die API des Open-Source-Projekts BrightSky, welche Daten des Deutschen Wetterdienstes (DWD) aufbereitet.
          </p>
          <p className="mb-2">
            Die Abfrage der Wetterdaten erfolgt in der Regel direkt von Ihrem Browser an die API-Server. Hierbei wird zwangsläufig Ihre IP-Adresse übertragen. Die Nutzung erfolgt im Interesse einer vollständigen Information über die Bedingungen auf den Weihnachtsmärkten (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">4. Kontakt</h2>
          <p>Für Datenschutzanfragen wenden Sie sich bitte an die im Impressum angegebene Adresse.</p>
        </div>
      </div>
    </>
  )
}

export default Datenschutz
