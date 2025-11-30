import { FC } from 'react'
import { Dialog } from '@headlessui/react'
import { Cross, UnderConstruction } from '../Icons'

import { OdisLogo } from '@components/Logos/OdisLogo'

import { LanguageText } from '@lib/getText'
import { LanguageSwitcher } from '@components/LanguageSwitcher'

export interface IntroModalType {
  modalOpen: boolean
  setModalOpen: (date: boolean) => void
  setNavView: (date: 'info' | 'filter') => void
  setSidebarMenuOpen: (date: boolean) => void
  underConstruction: boolean
  text: LanguageText
  language: string
  setLanguage: (lang: string) => void
}

export const IntroModal: FC<IntroModalType> = ({
  modalOpen,
  setModalOpen,
  setNavView,
  setSidebarMenuOpen,
  underConstruction,
  text,
  language,
  setLanguage,
}) => {
  function closeModal() {
    setModalOpen(false)
  }
  function closeModalExplore() {
    setModalOpen(false)
    setNavView('filter')
    setSidebarMenuOpen(true)
  }
  function closeModalInfo() {
    setModalOpen(false)
    setNavView('info')
    setSidebarMenuOpen(true)
  }

  return (
    <>
      <Dialog
        open={modalOpen}
        as="div"
        className="relative z-30"
        onClose={() => {}}
        onClick={() => {
          setModalOpen(false)
        }}
      >
        <div className="fixed inset-0 bg-darkblue/60" aria-hidden="true" />
        <div className="fixed inset-0">
          <div className="flex min-h-full items-center justify-center p-4 leading-7">
            <Dialog.Panel className="h-5/6 md:h-fit border-2 border-gold/50  bg-darkblue text-lightblue/90 max-h-full p-6 max-w-xs md:max-w-none drop-shadow-lg rounded-lg md:min-w-xl md:w-1/2 mx-auto overflow-hidden absolute">
              {/* <button
                className="text-lightblue focus:outline-none top-0 right-0 m-1 absolute cursor-pointer z-20 hover:bg-gold rounded-full p-2"
                onClick={closeModal}
              >
                <Cross />
              </button> */}
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
              <div className="overflow-y-auto overflow-x-hidden h-full md:h-fit relative">
                <h2 className="font-clanbold text-2xl pb-2 pt-2 text-lightblue/80">
                  {text.introModal.header}{' '}
                  <img
                    src="./stern_ausgewaehlt.png"
                    alt="stern"
                    className="inline  mt-0 md:-mt-2 ml-6 w-10 relative"
                  />
                </h2>
                <h4 className="pb-4">{text.introModal.subHeader}</h4>

                {underConstruction ? (
                  <>
                    <div className="block md:flex">
                      <div>
                        <div className="px-2 pb-2 md:hidden flex">
                          <UnderConstruction />
                          <UnderConstruction />
                          <UnderConstruction />
                        </div>
                        <div className="px-2 hidden md:block h-full mt-[50%]">
                          <UnderConstruction />
                        </div>
                      </div>
                      <div className="flex flex-col md:block">
                        {' '}
                        <p
                          className="pb-4"
                          dangerouslySetInnerHTML={{
                            __html: text.introModal.infoConstruction,
                          }}
                        ></p>
                        <div className="hidden">
                          <a
                            className="xmas-btn px-4 hover:bg-darkgold bg-gold text-darkblue font-clanbold  p-2 md:p-3 text-center text-bold rounded border-2 border-gold hover:border-darkgold"
                            href="https://www.berlin.de/sen/web/service/maerkte-feste/formular.230156.php"
                          >
                            {text.introModal.reportMarket}
                          </a>
                        </div>
                        <button
                          className="mt-2 md:mt-0 px-4 md:ml-0 bg-darkblue text-lightblue text-bold border-2 border-lightblue/90 hover:border-gold p-2 rounded hover:text-lightblue hover:bg-gold"
                          onClick={closeModalExplore}
                        >
                          {text.introModal.exploreMarkets}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="pb-4">{text.introModal.about}</p>

                    <button
                      className="xmas-btn px-4 hover:bg-darkgold bg-gold font-clanbold md:p-3 text-center rounded hover:border-darkgold text-darkblue"
                      onClick={closeModalExplore}
                    >
                      {text.introModal.explore}
                    </button>
                    <button
                      className="px-4 ml-4 bg-darkblue text-lightblue text-bold border-2 border-lightblue/90 hover:border-gold p-2 rounded hover:text-lightblue hover:bg-gold"
                      onClick={closeModalInfo}
                    >
                      {text.introModal.moreInfo}
                    </button>
                  </>
                )}

                <div className="mt-6 flex flex-wrap">
                  <div className="flex flex-col mr-6 mb-4">
                    <span className="text-xs mb-2 text-gray-400">
                      {text.sidebarInfo.projectBy}
                    </span>
                    <p className="font-bold text-sm">Hans-Albrecht Schumann</p>
                    <p className="text-sm">TU Dresden</p>
                    <p className="text-sm">
                      Fakultät Wirtschaftswissenschaften
                    </p>
                  </div>
                  <div className="flex flex-col mb-4 mr-6">
                    <span className="text-xs mb-2 text-gray-400">
                      {text.sidebarInfo.madeBy}
                    </span>
                    <p className="text-sm font-bold mb-2">Open Data Dresden</p>
                    <a
                      href="https://odis-berlin.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Data Informationsstelle Berlin"
                      className="w-32"
                    >
                      <OdisLogo className={`w-30`} />
                    </a>
                  </div>
                  <div className="flex flex-col mb-4 flex-1 min-w-[200px]">
                    <span className="text-xs mb-2 text-gray-400">
                      {text.sidebarInfo.supportedBy}
                    </span>
                    <p className="text-xs">{text.sidebarInfo.mpscCredit}</p>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
