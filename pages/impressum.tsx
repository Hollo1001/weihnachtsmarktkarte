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
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Öffnungszeiten</h2>
          <p>Bis auf Weiteres bieten wir persönliche Sprechzeiten nur nach Voranmeldung (telefonisch/per E-Mail) an.</p>
        </div>

        <div className="mb-8 text-sm text-gray-600">
          <p>Dies ist ein Projekt im Rahmen eines Studiums an der Technischen Universität Dresden (Fakultät Wirtschaftswissenschaften) in Kooperation mit Open Data Dresden und Open Data Berlin (ODIS).</p>
        </div>
      </div>
    </>
  )
}

export default Impressum

