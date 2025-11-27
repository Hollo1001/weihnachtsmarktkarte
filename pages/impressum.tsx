import { NextPage } from 'next'
import { Head } from '@components/Head'
import Link from 'next/link'

const Impressum: NextPage = () => {
  return (
    <>
      <Head pageTitle="Impressum" />
      <div className="container mx-auto px-4 py-8 max-w-2xl text-gray-800">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          &larr; Zurück zur Karte
        </Link>
        <h1 className="text-3xl font-bold mb-6 font-clanbold">Impressum</h1>
        
        <div className="mb-8">
          <p className="mb-2">Angaben gemäß § 5 TMG</p>
          <h2 className="text-xl font-bold mt-6 mb-2">Betreiber der Webseite</h2>
          <p className="font-bold">Hans-Albrecht Schumann</p>
          <p>Technische Universität Dresden</p>
          <p>Fakultät Wirtschaftswissenschaften</p>
          <p>Professur für Wirtschaftsinformatik, insb. Informationssysteme in Industrie und Handel</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Besuchsadresse</h2>
          <p>Hülßebau - Nordflügel (North Wing), Raum 408</p>
          <p>Helmholtzstr. 10</p>
          <p>01069 Dresden</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Postadresse</h2>
          <p>Technische Universität Dresden</p>
          <p>Fakultät Wirtschaftswissenschaften</p>
          <p>Professur für Wirtschaftsinformatik, insb. Informationssysteme in Industrie und Handel</p>
          <p>01062 Dresden</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Kontakt</h2>
          <p>Tel.: +49 351 463-34607</p>
          <p>E-Mail: isih@mailbox.tu-dresden.de</p>
          <p>E-Mail (Projektleitung): hans-albrecht.schumann@mailbox.tu-dresden.de</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Öffnungszeiten</h2>
          <p>Bis auf Weiteres bieten wir persönliche Sprechzeiten nur nach Voranmeldung (telefonisch/per E-Mail) an.</p>
        </div>

        <div className="mb-8 text-sm text-gray-600">
          <p>Dies ist ein Projekt im Rahmen eines Studiums an der Technischen Universität Dresden (Fakultät Wirtschaftswissenschaften) in Kooperation mit Open Data Dresden und Open Data Berlin (ODIS).</p>
          <p className="mt-2">Dieses Projekt entstand durch freundliche Unterstützung des Modellprojektes Smart Cities (MPSC), finanziert durch das Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen (BMWSB) und die Kreditanstalt für Wiederaufbau (KfW)</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Haftungsausschluss (Disclaimer)</h2>
          
          <h3 className="text-lg font-bold mt-4 mb-2">Haftung für Inhalte</h3>
          <p className="mb-2">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mb-2">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h3 className="text-lg font-bold mt-4 mb-2">Haftung für Links</h3>
          <p className="mb-2">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p className="mb-2">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h3 className="text-lg font-bold mt-4 mb-2">Urheberrecht</h3>
          <p className="mb-2">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="mb-2">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
    </>
  )
}

export default Impressum

