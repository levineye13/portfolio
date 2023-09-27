type event = { year: number; description: string; duration?: string };

export const timeline: event[] = [
  {
    year: 2018,
    description: 'Entered the University',
  },
  {
    year: 2020,
    description:
      'Became interested in web development and started learning page layout',
  },
  {
    year: 2021,
    description: 'Completed the Yandex Practicum course on web development',
    duration: '10 months',
  },
  {
    year: 2021,
    description: "Earned a bachelor's degree",
    duration: '4 years',
  },
  {
    year: 2022,
    description:
      'Completed the Yandex Practicum course on algorithms and data structures',
    duration: '4 months',
  },
  {
    year: 2022,
    description: 'Completed the Yandex Practicum course on react development',
    duration: '3 months',
  },
  {
    year: 2022,
    description: 'Graduated from the military department',
    duration: '2.5 years',
  },
  {
    year: 2023,
    description: "Earned a master's degree",
    duration: '2 years',
  },
];
