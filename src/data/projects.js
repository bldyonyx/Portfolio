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

    // Preview used on the Projects card
    image: colorlyPreview,

    // Images used only inside ProjectDetails
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
  },

  {
    title: 'Taskly',
    slug: 'taskly',

    description:
      'A task management app focused on making everyday organization simple and intuitive. Currently a work in progress.',

    tech: ['React', 'JavaScript', 'CSS', 'Vite'],

    github: 'https://github.com/bldyonyx/Taskly',
    demo: 'https://bldyonyx.github.io/Taskly/',

    // Preview used on the Projects card
    image: tasklyPreview,

    // Images used only inside ProjectDetails
    details: {
      main: tasklyPreview,
      calendar: tasklyCalendar,
      savedLists: tasklySavedLists,
      finishedDay: tasklyFinishedDay,
      settings: tasklySettings,
    },

    status: 'work in progress',
  },
]

export default projects