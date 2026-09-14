import colorlyPreview from '../assets/images/projects/colorly-preview.png'
import colorlyLight from '../assets/images/projects/colorly-light.png'
import colorlyVibrant from '../assets/images/projects/colorly-vibrant.png'
import colorlyDark from '../assets/images/projects/colorly-dark.png'
import colorlyCount from '../assets/images/projects/colorly-count.png'
import colorlyFromColor from '../assets/images/projects/colorly-from-color.png'

import tasklyPreview from '../assets/images/projects/taskly-preview.png'
import tasklyCalendar from '../assets/images/projects/taskly-calendar.png'
import tasklySavedLists from '../assets/images/projects/taskly-saved-lists.png'
import tasklyFinishedDay from '../assets/images/projects/taskly-finished-day.png'
import tasklySettings from '../assets/images/projects/taskly-settings.png'

const projects = [
  {
    title: 'Colorly',
    slug: 'colorly',

    description:
      'A playful color palette generator for creating harmonious color combinations based on different moods or a starting color.',

    tech: ['HTML', 'CSS', 'JavaScript', 'Vite'],

    github: 'https://github.com/bldyonyx/Colorly',
    demo: 'https://bldyonyx.github.io/Colorly/',

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
    demo: 'https://bldyonyx.github.io/Taskly/',

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
]

export default projects