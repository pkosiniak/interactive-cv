type Description = string | Record<string | number, string>;
type Project = { name: string; position?: string; description?: Description; tech: string; tests?: string };
type Projects = Record<string, Project>;
export type Company = {
  name: string;
  position?: string;
  duration: string;
  projects?: Projects;
  description?: Description;
};
export type LOCALES_KEYS = keyof Company | keyof Project;

const recourses = {
  name: 'Paweł Kosiniak',
  title: 'Software Engineer',
  contact: 'Contact',
  email: 'pawelkosiniak@gmail.com',
  phone: '+48531487666',
  linkedIn: 'linkedin.com/in/pawel-kosiniak',
  onlineCV: 'tinyurl.com/pawel-kosiniak-cv',
  onlineCVPrint: 'tinyurl.com/pawel-kosiniak-cv',
  cracowLocation: 'Cracow, Poland',
  summaryTitle: 'Summary',
  summaryText:
    "I am a young and creative programmer, willing to take up challenges, quickly learning new technologies, who likes to use unconventional approaches and find new or non-obvious solutions. Originally I wanted to become an acoustician, but at one point I realized that as a software engineer, I can achieve much more than as an acoustician - create something that will be much more 'tangible'. In 2019 I became interested in React and started writing my first projects in this technology, and right after that I took part in an internship organized by x-kom, where I was working on a part of the online store website. I defended my engineering thesis based on React Native and embedded systems in 2020. Since then, I've worked on several different projects, mainly in React, but also in Express and React-Native. Currently, in addition to continuing to work in the front-end, I am interested in developing my knowledge and skills in back-end technologies.",
  experience: 'Experience',
  projects: 'Projects:',
  cooperation: 'I have worked with e.g.',
  usedTechnologies: 'Used technologies:',

  ibm: {
    name: 'IBM',
    position: 'Senior Software Engineer',
    duration: 'Oct 2024 - Feb 2025 (5 months)',
    projects: {
      apptioBi: {
        name: 'ApptioBI',
        description:
          'development, maintenance and testing of a complex frontend application delivering comprehensive reporting system as well as handling DevOps tasks',
        tech: 'technologies: react, react-redux, typescript, javascript, piral, material-ui, ag-grid, highcharts, storybook, styled-components, github',
        tests: 'tests: jest, cypress, storybook',
      },
    },
  } as Company,

  freelancing2: {
    name: 'Freelancing',
    position: 'Software Engineer',
    duration: 'Nov 2023 - Sep 2024 (11 months)',
    description: 'Several projects including frontend and backend engineering in React and NodeJs',
  } as Company,

  coderyLabs: {
    name: 'CoderyLabs',
    position: 'Fullstack Developer',
    duration: 'Apr 2021 - Oct 2023 (2 years 7 months)',
    projects: {
      adminPanel: {
        name: 'admin panel',
        position: 'engineer in a frontend team working in SCRUM',
        tech: 'technologies: react, typescript, react-redux, rxjs, mui, emotion, yup, formik',
        tests: 'tests: jest, enzyme',
      },
      customMade: {
        name: 'online shop',
        position: 'frontend engineer',
        tech: 'technologies: react, typescript, react-redux, rxjs, styled-components, mapbox-gl',
      },
      vse: {
        name: 'energy company website',
        position: 'frontend engineer',
        tech: 'technologies: html, css, javascript, liferay',
      },
      zdolniaki: {
        name: 'classes search engine',
        position: 'fullstack engineer and team leader of a small fullstack team',
        tech: 'technologies: react, typescript, next, emotion, ajv, express, passport, tsoa, typeorm, nodemailer, swagger-ui-express',
        tests: 'tests: jest, supertest',
      },
    },
  } as Company,

  freelancing: {
    name: 'Freelancing',
    position: 'Software Engineer',
    duration: '2020 - Apr 2021 (1 year)',
    description:
      'Several projects including an application to carry out exams for Ignatianum University In Cracow; Chrome browser extension.',
  } as Company,

  xkom: {
    name: 'x-kom',
    position: 'Frontend Developer - Internship',
    duration: 'Jul 2019 - Sep 2019 (3 months)',
    projects: {
      xkom: {
        name: 'x-kom.pl',
        description: {
          1: 'creating components for web with React',
          2: 'code testing',
          3: 'integrating parts of application with internal API',
          4: 'writing dedicated display and interaction algorithms',
          5: 'work in a SCRUM team',
        },
        tech: 'TypeScript, React, Redux, Redux-Saga, Styled-Components, Jest, Jest-Enzyme, Azure DevOps',
      },
    },
  } as Company,

  acoustician: {
    name: 'Freelancing',
    position: 'Acoustician, DJ',
    duration: 'Jul 2013 - Apr 2018 (4 years 10 months)',
    description: {
      1: 'Providing sound solutions for conferences, stage and outdoor concerts',
      2: 'Conducting special events',
      companies: 'Forum MotoSolutions, Mercedes-Benz Sobiesław Zasada Automotive, Klub Studencki Żaczek',
    },
  } as Company,

  soundEditor: {
    name: 'Freelancing',
    position: 'Sound editor',
    duration: 'Jan 2015 - Nov 2017 (2 years 11 months)',
    description: {
      1: 'Audiobooks, audio guides, audio descriptions, soundtracks',
      companies:
        'Dział Osób Niepełnosprawnych Uniwersytetu Jagiellońskiego, Muzeum Inżynierii Miejskiej w Krakowie, Audiotour',
    },
  } as Company,

  education: 'Education',
  agh: {
    name: 'AGH University of Science and Technology',
    position: 'Bachelor of Engineering (B.E.), Applied Computer Science',
    duration: '2015 - 2020',
    description: 'Subject of engineering thesis:',
    projects: {
      thesis: {
        name: '"Development of the immobilizer prototype using a microcontroller and application for the Android system using encrypted Bluetooth communication"',
        description: {
          requirements: 'Writing thesis required:',
          1: 'Conducting an analysis of threats related to the security of wireless communication, including Bluetooth Low Energy 4.2',
          2: 'Build an immobilizer prototype based on the NodeMCU esp32 and Arduino Nano boards',
          3: 'Writing a runtime for esp32 on the Zerynth virtual machine in Python',
          4: 'Creation of an API that supports GAP and GATT events for the BLE module based on encrypted by ECDH protocol communication',
          5: 'Designing an application in ReactNative for Android with Bluetooth API support for communication with the esp32 board',
        },
        tech: 'TypeScript, ReactNative, Redux, ReduxSaga, Java, Python, Zerynth, C/C++',
      },
    },
  } as Company,

  skills: 'Skills',
  mainSkills: 'Main skills',
  languages: 'Languages',
  english: 'english',
  fullProfessional: '(Full Professional)',
  createdBy: 'Created by',
  redBabel: 'Red Babel',
  copied: 'Copied',
};

export type LOCALES = typeof recourses;
export default recourses;
