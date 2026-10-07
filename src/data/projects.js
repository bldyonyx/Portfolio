import colorlyPreview from '../assets/images/projects/colorly/colorly-preview.webp'
import colorlyLight from '../assets/images/projects/colorly/colorly-light.webp'
import colorlyVibrant from '../assets/images/projects/colorly/colorly-vibrant.webp'
import colorlyDark from '../assets/images/projects/colorly/colorly-dark.webp'
import colorlyCount from '../assets/images/projects/colorly/colorly-count.webp'
import colorlyFromColor from '../assets/images/projects/colorly/colorly-from-color.webp'

import tasklyPreview from '../assets/images/projects/taskly/taskly-preview.webp'
import tasklySettings from '../assets/images/projects/taskly/taskly-settings.webp'
import tasklyCalendar from '../assets/images/projects/taskly/taskly-calendar.webp'
import tasklySavedLists from '../assets/images/projects/taskly/taskly-saved-lists.webp'
import tasklyFinishedDay from '../assets/images/projects/taskly/taskly-finished-day.webp'

import dearPagesPreview from '../assets/images/projects/dear-pages/dear-pages-preview.webp'
import dearPagesDashboard from '../assets/images/projects/dear-pages/dashboard.webp'
import dearPagesDiscover from '../assets/images/projects/dear-pages/discover.webp'
import dearPagesLibrary from '../assets/images/projects/dear-pages/library.webp'
import dearPagesBookPage from '../assets/images/projects/dear-pages/book-page.webp'
import dearPagesCollections from '../assets/images/projects/dear-pages/collections.webp'
import dearPagesSettings from '../assets/images/projects/dear-pages/settings.webp'

const projects = [
  {
    title: 'Colorly',
    slug: 'colorly',

    description:
      'A playful color palette generator for creating harmonious color combinations based on different moods or a starting color.',

    tech: ['HTML', 'CSS', 'JavaScript', 'Vite'],

    github: 'https://github.com/bldyonyx/Colorly',
    demo: 'https://colorly-maya.web.app',

    image: colorlyPreview,

    details: {
      main: colorlyPreview,

      moods: {
        light: colorlyLight,
        vibrant: colorlyVibrant,
        dark: colorlyDark,
      },

      count: colorlyCount,
      fromColor: colorlyFromColor,
    },

    slides: [
      {
        image: colorlyLight,
        eyebrow: 'palette mood · 01',
        title: 'Light',
        description:
          'Soft and airy combinations for palettes that feel calm, bright, and gentle.',
      },
      {
        image: colorlyVibrant,
        eyebrow: 'palette mood · 02',
        title: 'Vibrant',
        description:
          'Brighter colors and stronger contrast create combinations with more energy.',
      },
      {
        image: colorlyDark,
        eyebrow: 'palette mood · 03',
        title: 'Dark',
        description:
          'Deeper shades create richer and moodier palettes while keeping the same simple workflow.',
      },
      {
        image: colorlyFromColor,
        eyebrow: 'custom palette · 04',
        title: 'From a Color',
        description:
          'Choose a starting color you already like and let Colorly build a harmonious palette around it.',
      },
    ],
  },

  {
    title: 'Taskly',
    slug: 'taskly',

    description:
      'A task management app focused on making everyday organization simple and intuitive. Currently a work in progress.',

    tech: ['React', 'JavaScript', 'CSS', 'Vite'],

    github: 'https://github.com/bldyonyx/Taskly',
    demo: 'https://taskly-maya.web.app',

    image: tasklyPreview,

    details: {
      main: tasklyPreview,
      calendar: tasklyCalendar,
      savedLists: tasklySavedLists,
      finishedDay: tasklyFinishedDay,
      settings: tasklySettings,
    },

    slides: [
      {
        image: tasklyPreview,
        eyebrow: 'daily workspace · 01',
        title: 'Daily Tasks',
        description:
          'Add tasks, keep track of what is finished, and follow your progress through the day.',
      },
      {
        image: tasklyCalendar,
        eyebrow: 'planning · 02',
        title: 'Calendar',
        description:
          'Move between different days and plan tasks ahead instead of only working with today.',
      },
      {
        image: tasklySavedLists,
        eyebrow: 'templates · 03',
        title: 'Saved Lists',
        description:
          'Save reusable task lists so routines and recurring plans can be loaded again easily.',
      },
      {
        image: tasklyFinishedDay,
        eyebrow: 'history · 04',
        title: 'Finished Days',
        description:
          'Revisit previous days and see the tasks that were completed.',
      },
      {
        image: tasklySettings,
        eyebrow: 'customization · 05',
        title: 'Themes & Settings',
        description:
          'Change the visual theme and adjust Taskly to make the workspace feel more personal.',
      },
    ],

    status: 'work in progress',
  },

  {
    title: 'Dear Pages',
    slug: 'dear-pages',

    description:
      'A cozy personal book tracker for discovering books, organizing your library, tracking your reads, and keeping your reading journey in one place.',

    tech: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Firebase',
      'Vite',
      'React Router',
      'Google Books API',
      'Open Library API',
    ],

    github: 'https://github.com/bldyonyx/DearPages',

    image: dearPagesPreview,

    details: {
      main: dearPagesPreview,
      dashboard: dearPagesDashboard,
      discover: dearPagesDiscover,
      library: dearPagesLibrary,
      bookPage: dearPagesBookPage,
      collections: dearPagesCollections,
      settings: dearPagesSettings,
    },

    slides: [
      {
        image: dearPagesDashboard,
        eyebrow: 'your reading space · 01',
        title: 'Dashboard',
        description:
          'See your current reads, recently added books, and yearly reading goal together in one personal overview.',
      },
      {
        image: dearPagesDiscover,
        eyebrow: 'find your next read · 02',
        title: 'Discover',
        description:
          'Search for books and explore recommendations shaped by your favorite genres alongside trends and other discoveries.',
      },
      {
        image: dearPagesLibrary,
        eyebrow: 'your books · 03',
        title: 'My Library',
        description:
          'Keep all your saved books together, search through them, and organize each read by its current reading status.',
      },
      {
        image: dearPagesBookPage,
        eyebrow: 'between you and the pages · 04',
        title: 'Book Page',
        description:
          'Explore book details, manage its reading status, and keep personal notes, ratings, or reviews connected to your read.',
      },
      {
        image: dearPagesCollections,
        eyebrow: 'little shelves of your own · 05',
        title: 'Collections',
        description:
          'Create personal collections and arrange books into custom shelves independently from their reading status.',
      },
      {
        image: dearPagesSettings,
        eyebrow: 'make it yours · 06',
        title: 'Preferences',
        description:
          'Manage your profile, favorite genres, and yearly reading goal so Dear Pages can adapt to your reading preferences.',
      },
    ],
  },
]

export default projects