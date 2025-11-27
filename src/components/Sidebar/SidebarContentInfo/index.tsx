import { FC } from 'react'
import classNames from 'classnames'
import { SidebarHeader } from '@components/Sidebar/SidebarHeader'
import { SidebarBody } from '@components/Sidebar/SidebarBody'

import { OdisLogo } from '@components/Logos/OdisLogo'
import { TsbLogo } from '@components/Logos/TsbLogo'
import { Accordion } from '@components/Accordion'
import { SenatskanzleiLogo } from '@components/Logos/SenatskanzleiLogo'
import { LanguageText } from '@lib/getText'

export interface SidebarContentInfoType {
  text: LanguageText
}

export const SidebarContentInfo: FC<SidebarContentInfoType> = ({ text }) => {
  return (
    <>
      <SidebarHeader text={text.sidebarInfo.header} />

      <SidebarBody>
        <p className="text-sm pt-2 pb-2">{text.sidebarInfo.intro}</p>

        <Accordion
          items={[
            {
              id: '1',
              title: text.sidebarInfo.infoWhereHeader,
              content: text.sidebarInfo.infoWhere,
            },
          ]}
        />

        <Accordion
          items={[
            {
              id: '2',
              title: text.sidebarInfo.infoOpenDataHeader,
              content: text.sidebarInfo.infoOpenData,
            },
          ]}
        />

        <Accordion
          items={[
            {
              id: '3',
              title: text.sidebarInfo.infoTakePartHeader,
              content: text.sidebarInfo.infoTakePart,
            },
          ]}
        />

        <Accordion
          items={[
            {
              id: '4',
              title: text.sidebarInfo.infoTownsHeader,
              content: text.sidebarInfo.infoTowns,
            },
          ]}
        />
        <Accordion
          items={[
            {
              id: '5',
              title: text.sidebarInfo.infoAboutHeader,
              content: text.sidebarInfo.infoAbout,
            },
          ]}
        />

        <section className="mt-6 flex flex-wrap">
          <div className="flex flex-col mr-6 mb-6">
            <span className="text-sm mb-3">{text.sidebarInfo.projectBy}</span>
            <p className="font-bold text-sm">Hans-Albrecht Schumann</p>
            <p className="text-sm">TU Dresden</p>
            <p className="text-sm">Fakultät Wirtschaftswissenschaften</p>
          </div>
          <div className="flex flex-col mb-2">
            <span className="text-sm mb-2">{text.sidebarInfo.madeBy}</span>
            <p className="text-sm font-bold mb-2">Open Data Dresden</p>
            <a
              href="https://odis-berlin.de/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Data Informationsstelle Berlin"
            >
              <OdisLogo className={`w-40`} />
            </a>
          </div>
          <div className="flex flex-col mb-2 mt-4">
            <p className="text-sm">
              Dieses Projekt entstand durch freundliche Unterstützung des
              Modellprojektes Smart Cities (MPSC), finanziert durch das
              Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen
              (BMWSB) und die Kreditanstalt für Wiederaufbau (KfW)
            </p>
          </div>
        </section>
      </SidebarBody>
      <footer className={classNames('mt-8 p-4', 'flex flex-wrap')}>
        <span className="text-xs w-full mb-4">
          © 2025 Hans-Albrecht Schumann
        </span>
        <a
          href="/impressum"
          className={`text-xs hover:underline mr-4`}
          target="_blank"
          rel="noreferrer"
        >
          {text.sidebarInfo.legal}
        </a>
        <a
          href="/datenschutz"
          className={`text-xs hover:underline`}
          target="_blank"
          rel="noreferrer"
        >
          {text.sidebarInfo.privacy}
        </a>
      </footer>
    </>
  )
}
