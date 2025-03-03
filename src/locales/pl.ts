import { LOCALES } from './en';

const recourses: LOCALES = {
  name: 'Paweł Kosiniak',
  title: 'Inżynier Oprogramowania',
  contact: 'Kontakt',
  email: 'pawelkosiniak@gmail.com',
  phone: '+48531487666',
  linkedIn: 'linkedin.com/in/pawel-kosiniak',
  onlineCV: 'ujeb.link/pawel-kosiniak-cv',
  onlineCVPrint: 'tinyurl.com/pawel-kosiniak-cv',
  cracowLocation: 'Kraków, Polska',
  summaryTitle: 'Podsumowanie',
  summaryText:
    "Jestem młodym i kreatywnym programistą, chętnie podejmującym wyzwania, szybko uczącym się nowych technologii, który lubi stosować nieszablonowe podejścia i znajdować nowe, lub nieoczywiste rozwiązania. Pierwotnie chciałem zostać akustykiem, jednak szybko zrozumiałem, że jako informatyk programista, mogę osiągnąć o wiele więcej, tworzyć coś bardziej „namacalnego”. W 2019 zainteresowałem się React'em i zacząłem pisać pierwsze projekty w tej technologii, a zaraz potem wziąłem udział w stażu organizowanym przez x-kom, gdzie pracowałem nad częścią strony sklepu internetowego. Swoją pracę inżynierską bazującą na React Native i systemach wbudowanych obroniłem w 2020 roku. Od tego czasu pracowałem nad kilkoma różnymi projektami głównie w React, ale też Express, React-Native. Obecnie, poza kontynuacją pracy we front-endzie, jestem zainteresowany rozwijaniem swojej wiedzy i umiejętności w technologiach back-endowych.",
  experience: 'Doświadczenie',

  projects: 'Projekty:',
  cooperation: 'Współpracowałem m.in. z:',
  usedTechnologies: 'Użyte technologie:',

  ibm: {
    name: 'IBM',
    position: 'Senior Software Engineer',
    duration: 'Październik 2024 - Luty 2025 (5 mies.)',
    projects: {
      apptioBi: {
        name: 'ApptioBI',
        description:
          "Rozwój, utrzymanie oraz testowanie złożonej aplikacji frontendowej dostarczającej obszerny system raportowy, oraz wykonywanie zadań DevOps'owych",
        tech: 'technologies: react, react-redux, typescript, javascript, piral, material-ui, ag-grid, highcharts, storybook, styled-components, github',
        tests: 'tests: jest, cypress, storybook',
      },
    },
  },

  freelancing2: {
    name: 'Freelancing',
    position: 'Software Engineer',
    duration: 'Listopad 2023 - Wrzesień 2024 (11 months)',
    description: 'Kilka projektów frontendowych i backendowych w React and NodeJs',
  },

  coderyLabs: {
    name: 'CoderyLabs',
    position: 'Fullstack Developer',
    duration: 'Kwiecień 2021 - Październik 2023 (2 lata 7 mies.)',
    projects: {
      adminPanel: {
        name: 'Panel administracyjny',
        position: "programista w SCRUM'owym zespole front-end'owym",
        tech: 'technologies: react, typescript, react-redux, rxjs, mui, emotion, yup, formik',
        tests: 'tests: jest, enzyme',
      },
      customMade: {
        name: 'Sklep internetowy',
        position: 'programista front-end',
        tech: 'technologies: react, typescript, react-redux, rxjs, styled-components, mapbox-gl',
      },
      vse: {
        name: 'Portal firmy energetycznej',
        position: 'programista front-end',
        tech: 'technologies: html, css, javascript, liferay',
      },
      zdolniaki: {
        name: 'Wyszukiwarka zajęć',
        position: "programista full-stack i team lider niewielkiego zespołu full-stack'owego",
        tech: 'technologies: react, typescript, next, emotion, ajv, express, passport, tsoa, typeorm, nodemailer, swagger-ui-express',
        tests: 'tests: jest, supertest',
      },
    },
  },

  freelancing: {
    name: 'Freelancing',
    position: 'Inżynier Oprogramowania',
    duration: '2020 - Kwiecień 2021 (1 rok)',
    description:
      'Kilka projektów w tym aplikacja do przeprowadzania egzaminów dla Uniwersytetu Ignatianum w Krakowie; rozszerzenie do przeglądarki Chrome.',
  },

  xkom: {
    name: 'x-kom',
    position: 'Programista front-end - Stażysta',
    duration: 'Czerwiec 2019 - Wrzesień 2019 (3 miesiące)',
    projects: {
      xkom: {
        name: 'x-kom.pl',
        description: {
          1: 'tworzenie komponentów webowych w React',
          2: 'testowanie kodu',
          3: 'integracja części aplikacji z wewnętrznym API',
          4: 'pisanie dedykowanych algorytmów do obsługi interakcji i wyświetlania komponentów',
          5: "Praca w zespole SCRUM'owym",
        },
        tech: 'TypeScript, React, Redux, Redux-Saga, Styled-Components, Jest, Jest-Enzyme, Azure DevOps',
      },
    },
  },

  acoustician: {
    name: 'Freelancing',
    position: 'Akustyk, DJ',
    duration: 'Lipiec 2013 - Kwiecień 2018 (4 lata 10 miesięcy)',
    description: {
      1: 'Nagłaśnianie konferencji, koncertów estradowych i plenerowych',
      2: 'Prowadzenie imprez okolicznościowych',
      companies: 'Forum MotoSolutions, Mercedes-Benz Sobiesław Zasada Automotive, Klub Studencki Żaczek',
    },
  },
  soundEditor: {
    name: 'Freelancing',
    position: 'Montażysta dźwięku',
    duration: 'Styczeń 2015 - Listopad 2017 (2 lata 11 miesięcy)',
    description: {
      1: 'Audiobooki, audioprzewodniki, audiodeskrypcje, podkłady muzyczne',
      companies:
        'Dział Osób Niepełnosprawnych Uniwersytetu Jagiellońskiego, Muzeum Inżynierii Miejskiej w Krakowie, Audiotour',
    },
  },

  education: 'Wykształcenie',
  agh: {
    name: 'Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie',
    position: 'Inżynier (Inż.), Informatyka stosowana',
    duration: '2015 - 2020',
    description: 'Temat pracy inżynierskiej:',
    projects: {
      thesis: {
        name: '"Opracowanie prototypu immobilizer\'a z użyciem mikrokontrolera oraz aplikacji na system Android z wykorzystaniem szyfrowanej komunikacji Bluetooth"',
        description: {
          requirements: 'Napisanie pracy wymagało:',
          1: 'Przeprowadzenia analizy zagrożeń związanych z bezpieczeństwem komunikacji bezprzewodowej w tym Bluetooth Low Energy 4.2',
          2: "Zbudowania na bazie płytki NodeMCU esp32 oraz Arduino Nano prototypu immobilizer'a",
          3: 'Napisania programu uruchomieniowego dla esp32 na maszynie wirtualnej Zerynth w języku Python',
          4: 'Stworzenia API obsługującego wywarzenia typu GAP i GATT dla modułu BLE w oparciu komunikację o szyfrowaną protokołem ECDH',
          5: 'Zaprojektowanie aplikacji w ReactNative na system Android z obsługą Bluetooth API do komunikacji z płytką esp32',
        },
        tech: 'TypeScript, ReactNative, Redux, ReduxSaga, Java, Python, Zerynth, C/C++',
      },
    },
  },

  skills: 'Umiejętności',
  mainSkills: 'Główne umiejętności',
  languages: 'Języki',
  english: 'angielski',
  fullProfessional: '(Pełna biegłość zawodowa)',
  createdBy: 'Created by',
  redBabel: 'Red Babel',
  copied: 'Skopiowano',
};

export default recourses;
