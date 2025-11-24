export interface LanguageText {
  title: {
    market: string
    finder: string
  }
  introModal: {
    header: string
    subHeader: string
    about: string
    explore: string
    moreInfo: string
    info: string
    infoConstruction: string
    reportMarket: string
    exploreMarkets: string
  }
  sidebarFilter: {
    header: string
    filterDateHeader: string
    filterDate: string
    filterEveningHeader: string
    filterEvening: string
    filterFreeHeader: string
    filterFree: string
    filterThemeHeader: string
    filterTheme: string
    filterAccessibleHeader: string
    filterAccessible: string
    filterActionHeader: string
    filterAction: string
    filterPathsHeader: string
    filterPaths: string
    filterReset: string
  }
  sidebarInfo: {
    header: string
    intro: string
    infoWhereHeader: string
    infoWhere: string
    infoOpenDataHeader: string
    infoOpenData: string
    infoTakePartHeader: string
    infoTakePart: string
    infoTownsHeader: string
    infoTowns: string
    infoAboutHeader: string
    infoAbout: string
    projectBy: string
    madeBy: string
    supportedBy: string
    privacy: string
    legal: string
  }
  sidebarSearch: {
    header: string
    placeholder: string
  }
  sidebarMarket: {
    exceptions: string
    marketLink: string
    marketLinkCopied: string
    until: string
    closedOn: string
    date: string
    openingTimes: string
    openingWeekday: string
    openingTime: string
    fee: string
    feeFree: string
    feePay: string
    connection: string
    info: string
    website: string
    daysHelper: object
  }
  weather: {
    header: string
    subHeader: string
    current: string
    station: string
  }
}

interface Text {
  de: LanguageText
  en: LanguageText
}

// Define the text object
const text: Text = {
  de: {
    title: {
      market: 'Weihnachtsmarkt',
      finder: 'Finder',
    },
    introModal: {
      header: 'Dresdner Weihnachtsmarkt-Finder',
      subHeader:
        'Glühwein, Striezel, Glückseligkeit - alle Weihnachtsmärkte auf einen Blick!',
      about:
        'Der Weihnachtsmarkt-Finder zeigt das vielfältige Angebot der Dresdner Weihnachtsmärkte von traditionellem bis zu individuellem Flair. Lass dir Weihnachtsmärkte nach Wunschdatum anzeigen, nutze die Filter, um passende Märkte zu finden und teile deine Entdeckung mit deinen Freund:innen! Frohe Weihnachten!',
      explore: 'Erkunden',
      moreInfo: 'Mehr Infos',
      info: 'Eine prototypische Datenvisualisierung für Dresden',
      infoConstruction: `Im Weihnachtsmarkt-Finder werden gerade die Daten für
      die Weihnachtszeit 2025 aktualisiert!
      <span class="text-gold font-clanbold">
        Sie sind Betreiber:in eines Weihnachtsmarkts? Dann
        melden Sie sich bitte bei der Stadtverwaltung Dresden.
      </span>
      Mitte November steht der neue Weihnachtsmarkt-Finder 2025
      zur Verfügung.`,
      reportMarket: 'Markt melden',
      exploreMarkets: 'Märkte 2024 erkunden',
    },
    sidebarFilter: {
      header: 'Weihnachtsmärkte entdecken',
      filterDateHeader: 'Datum',
      filterDate:
        'Wann möchtest du auf einen Weihnachtsmarkt gehen? Wähle einen Tag.',
      filterEveningHeader: 'Abends offen',
      filterEvening:
        'Appetit auf gebrannte Mandeln zum Feierabend? Zeige Märkte die nach 19 Uhr offen haben.',
      filterFreeHeader: 'Eintritt frei',
      filterFree:
        'Keine Lust auf Eintritt zahlen? Zeige Märkte, die immer kostenfrei sind.',
      filterThemeHeader: 'Themen-Märkte',
      filterTheme:
        'Du magst es speziell? Zeige Märkte mit historischem, internationalem oder ökologischem Fokus.',
      filterAccessibleHeader: 'Barrierefrei',
      filterAccessible: 'Zeige Märkte an, die barrierefrei sind.',
      filterActionHeader: 'Action bitte',
      filterAction:
        'Nur Glühwein trinken ist dir zu langweilig? Zeige Märkte mit besonderen Attraktionen.',
      filterPathsHeader: 'Kurze Wege',
      filterPaths:
        'Mit den Öffis unterwegs? Zeige Märkte mit kurzen Wegen zu U- oder S-Bahnstationen.',
      filterReset: 'Filter zurücksetzen',
    },
    sidebarSearch: {
      header: 'Marktsuche',
      placeholder: 'Marktname',
    },
    sidebarInfo: {
      header: 'Über den Finder',
      intro:
        'Von klassisch über kiezig bis krawallig: Bei den Dresdner Weihnachtsmärkten ist für jeden Geschmack etwas dabei. Einige der Weihnachtsmärkte sind dabei nur für wenige Tage geöffnet. Mit dem Dresdner Weihnachtsmarkt-Finder behältst du stets den Überblick, an welchen Tagen und zu welchen Uhrzeiten welche Weihnachtsmärkte zu einem Besuch einladen. Entdecke außerdem, welche Weihnachtsmärkte kostenlos sind, wo es spannende Attraktionen und Programm zu erleben gibt und mehr. Zoom in die Karte rein, um Haltestationen zu öffentlichen Verkehrsmitteln und Standorte von nahegelegenen öffentlichen Toiletten zu sehen. Mit einem Klick über die Teilen-Funktion kannst du den Link zu deinem Lieblingsweihnachtsmarkt kopieren und an Freund:innen verschicken.',
      infoWhereHeader: 'Woher kommen die Daten?',
      infoWhere: `<p class="text-sm pb-2">
        Diese Anwendung basiert auf offenen Daten.
        <br />
        <br />
        Die Hintergrundkarte basiert auf der 
        <a
            target="blank"
            href="https://www.openstreetmap.de"
            class="text-gold"
        >
            OpenStreetMap
        </a>
        .
        <br />
        Die Musik 
        <i>Christmas Chill lofi Launge (IG Version 60s)</i> von
        Lesfm kommt von
        <a
            target="blank"
            href="https://pixabay.com"
            class="text-gold"
        >
             
            Pixabay Music
        </a>
        .
        <br />
        Die Wetterdaten stammen vom 
        <a
            target="blank"
            href="https://www.dwd.de/DE/leistungen/opendata/opendata.html"
            class="text-gold"
        >
            Deutschen Wetterdienst (DWD)
        </a>
        , der im Rahmen seines Open-Data-Programms eine Vielzahl von
        meteorologischen Beobachtungen und Berechnungen
        veröffentlicht. Das Open-Source-Projekt 
        <a
            target="blank"
            href="https://brightsky.dev/"
            class="text-gold"
        >
            BrightSky
        </a>
        , bietet eine kostenlose JSON-API an, um Wetterdaten ganz
        einfach abzufragen. So können die Wettervorhersagen für
        Dresden stundengenau dargestellt werden.
        </p>`,
      infoOpenDataHeader: 'Wie kann ich einen Markt eintragen?',
      infoOpenData: `<p  class="text-sm pb-2">
      Wenn Sie Betreiber:in eines Weihnachtsmarktes sind, wenden Sie sich bitte an die Stadtverwaltung Dresden.
        </p>`,
      infoTakePartHeader: 'Wie kann ich Bilder beisteuern?',
      infoTakePart: `<p class="text-sm pb-2">
      Sicher ist dir auch
        aufgefallen, dass einige Weihnachtsmärkte lediglich ein
        Platzhalter-Bild haben. Dies liegt daran, dass wir nur auf
        Bilder zurückgreifen wollen, die in Wikimedia Commons
        liegen, dem zentralen und offenen Medienarchiv. Also knips
        ein Bild von deinem nächsten Weihnachtsmarktbesuch und
        veröffentliche es unter einer freien Lizenz auf 
        <a
            target="blank"
            href="https://commons.wikimedia.org/wiki/Commons:First_steps/Uploading_files/de"
            class="text-gold"
        >
            Wikimedia
        </a>
        !
        </p>`,
      infoTownsHeader: 'Ist die Anwendung Open Source?',
      infoTowns: `<p  class="text-sm pb-2">
        Der “Dresdner Weihnachtsmarkt-Finder” ist ein
        Open-Source-Projekt und läuft unter einer MIT Lizenz.
        Dementsprechend kann der Quellcode
        angepasst und weiterentwickelt und auch für andere Städte genutzt werden.
        Wenn Du dich dafür
        interessierst, schau gerne in unserem
        <a
            target="blank"
            href="https://github.com/technologiestiftung/weihnachtsmarktkarte"
            class="text-gold"
        >
            GitHub-Repository
        </a>
        vorbei.
        </p>`,
      infoAboutHeader: 'Über uns',
      infoAbout: `<p class="text-sm pb-2">
        Der “Dresdner Weihnachtsmarkt-Finder” ist ein auf Open Data basierendes Projekt.
      
                <br />
        <br />
        Du hast Feedback oder willst mehr
        erfahren? Schau dich auf unserer Webseite um.
        </p>`,
      projectBy: 'Ein Projekt der',
      madeBy: 'Durchgeführt von der',
      supportedBy: 'Gefördert von',
      privacy: 'Datenschutzerklärung',
      legal: 'Impressum',
    },
    sidebarMarket: {
      exceptions: 'Ausnahmen',
      marketLink: 'Markt teilen',
      marketLinkCopied: 'Markt-Link kopiert!',
      until: 'bis',
      closedOn: 'geschlossen am',
      date: 'Datum',
      openingTimes: 'Öffnungszeiten',
      openingWeekday: 'Wochentag',
      openingTime: 'Uhrzeit',
      fee: 'Eintritt',
      feeFree: 'Kostenlos',
      feePay: '(Teilweise) Kostenpflichtig',
      connection: 'Anfahrt',
      info: 'Informationen',
      website: 'Webseite',
      daysHelper: {
        Mo: 'Montag',
        Di: 'Dienstag',
        Mi: 'Mittwoch',
        Do: 'Donnerstag',
        Fr: 'Freitag',
        Sa: 'Samstag',
        So: 'Sonntag',
      },
    },
    weather: {
      header: 'Wie wird das Wetter?',
      subHeader:
        'Stelle im Filtermenü den Tag ein, für den du das Wetter sehen möchtest.',
      current: 'aktuell',
      station: 'Wetterstation',
    },
  },
  en: {
    title: {
      market: 'ChristmasMarket',
      finder: 'Finder',
    },
    introModal: {
      header: 'Dresden Christmas Market Finder',
      subHeader:
        'Mulled Wine, Striezel, and Winter Magic – All Dresden Christmas Markets at a Glance!',
      about:
        "The Christmas Market Finder showcases the diversity of Dresden's Christmas Markets, from its traditional to unique offerings. Browse markets by your preferred dates, use the filters to find the perfect ones and share your favourite ones with your friends! Happy Holidays!",
      explore: 'Explore',
      moreInfo: 'About',
      info: 'A data visualization prototype for Dresden',
      infoConstruction: `The Christmas Market Finder is currently being updated with dates for the 2025 Christmas season!
      <span className="text-gold font-clanbold">
        Are you the operator of a Christmas Market? Then please contact the Dresden city administration.
      </span>
      The updated Christmas Market Finder for 2025 will be made available in the middle of November.`,
      reportMarket: 'Report market',
      exploreMarkets: 'Explore markets from 2024',
    },
    sidebarFilter: {
      header: 'Discover Christmas Markets',
      filterDateHeader: 'Date',
      filterDate: 'When do you want to visit a christmas market? Choose a day.',
      filterEveningHeader: 'Open late',
      filterEvening:
        'Fancy a drink after work? Show markets that stay open past 7pm',
      filterFreeHeader: 'Free entry',
      filterFree:
        "Don't feel like paying admission? Show markets that are always free of charge.",
      filterThemeHeader: 'Markets with a theme',
      filterTheme:
        'Do you have a special interest? Show markets with historical, international, or eco-friendly themes.',
      filterAccessibleHeader: 'Accessible?',
      filterAccessible:
        'Show markets that are accessible to people using a wheelchair.',
      filterActionHeader: 'Action please',
      filterAction:
        'Drinking mulled wine is not thrilling enough for you? Show markets with special attractions, rides and entertainment.',
      filterPathsHeader: 'Quick detour',
      filterPaths:
        'Taking public transport? Show markets located a short distance from Metro and S-Bahn stops.',
      filterReset: 'Reset filter',
    },
    sidebarSearch: {
      header: 'Market search',
      placeholder: 'Market name',
    },
    sidebarInfo: {
      header: 'About the Finder',
      intro:
        "From traditional to quirky: there is something for everyone's tastes and preferences at Dresden's Christmas markets. Some of the christmas markets are only open for a few days. thankfully the Dresden Christmas Market Finder can help you keep track of which markets are open on specific days and during specific times. Additionally you can filter markets for specific interests. For example, which ones offer free entry, or feature exciting attractions and other entertainment. Zoom in on the map to see public transport stops and locations of nearby public toilets. With a click on the share button, you can copy the link to your favourite Christmas market and send it to a friend. ",
      infoWhereHeader: 'Where does the data come from?',
      infoWhere: `<p class="text-sm pb-2">
      The map is generated using publicly available data only.
      <br />
      The basemap is taken from 
      <a
          target="blank"
          href="https://www.openstreetmap.de"
          class="text-gold"
        >
          OpenStreetMap
      </a>
      .
      <br />
      The background music 
      <i>Christmas Chill lofi Launge (IG Version 60s)</i> by
      Lesfm is taken from
      <a
          target="blank"
          href="https://pixabay.com"
          class="text-gold"
      >
           
          Pixabay Music
      </a>
      .
      <br />
      Weather data is provided by the  
      <a
          target="blank"
          href="https://www.dwd.de/DE/leistungen/opendata/opendata.html"
          class="text-gold"
      >
          German Weather Service (DWD)
      </a>
      , which publishes a variety of meteorological observations and calculations
      as part of its open data service. The open source project 
      <a
          target="blank"
          href="https://brightsky.dev/"
          class="text-gold"
      >
          BrightSky
      </a>
      offers an easy to use API that provides weather data as JSON files at no cost.
      This way, hourly weather forecasts for Dresden can be included in the map.
      </p>`,
      infoOpenDataHeader: 'How can I register a market?',
      infoOpenData: `<p  class="text-sm pb-2">
      If you are the operator of a Christmas market, please contact the Dresden city administration.
      </p>`,
      infoTakePartHeader: 'How can I contribute pictures?',
      infoTakePart: `<p class="text-sm pb-2">
      You may have noticed 
      that many christmas markets contain a placeholder image. We decided to only
      use images available at Wikimedia Commons, a central and open media archive.
      We invite you to capture your next visit to a christmas market with your camera
      and upload the image to
      <a
          target="blank"
          href="https://commons.wikimedia.org/wiki/Commons:First_steps/Uploading_files/en"
          class="text-gold"
      >
          Wikimedia
      </a>
      under a free license.
      </p>`,
      infoTownsHeader: 'Is this project Open Source?',
      infoTowns: `<p  class="text-sm pb-2">
      The Christmas Market Finder is an open source project, published under an MIT license.
      Accordingly, the idea, including its source code can be used free of charge for implementation
      and further development, also in other cities. If you are interested in this, visit our 
      <a
          target="blank"
          href="https://github.com/technologiestiftung/weihnachtsmarktkarte"
          class="text-gold"
      >
          repository 
      </a>
      on GitHub.
      </p>`,
      infoAboutHeader: 'About',
      infoAbout: `<p class="text-sm pb-2">
      The Dresden Christmas Market Finder is a project based on Open Data.
      <br />
      <br />  
      Do you have feedback or would like to 
      find out more? Visit our website.
      </p>`,
      projectBy: 'A Project by',
      madeBy: 'Made by',
      supportedBy: 'Supported by',
      privacy: 'Privacy Policy',
      legal: 'Legal notice',
    },
    sidebarMarket: {
      exceptions: 'Exceptions',
      marketLink: 'Share Market',
      marketLinkCopied: 'Market-Link copied!',
      until: 'to',
      closedOn: 'closed on',
      date: 'Date',
      openingTimes: 'Opening times',
      openingWeekday: 'Weekday',
      openingTime: 'Time',
      fee: 'Entrance fee',
      feeFree: 'Free',
      feePay: 'Partial entrance fee',
      connection: 'How to get there',
      info: 'Information',
      website: 'Website',
      daysHelper: {
        Mo: 'Monday',
        Di: 'Tuesday',
        Mi: 'Wednesday',
        Do: 'Thursday',
        Fr: 'Friday',
        Sa: 'Saturday',
        So: 'Sunday',
      },
    },
    weather: {
      header: 'What will the weather be like? ',
      subHeader:
        'Set the day for which you want to see weather info in the filter menu.',
      current: 'now',
      station: 'Weather station',
    },
  },
}

// Function to get text based on the language
export function getText(lang: keyof Text) {
  return text[lang] || text['de']
}
