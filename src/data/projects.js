import colorlyPreview from '../assets/images/projects/colorly-preview.png'
import tasklyPreview from '../assets/images/projects/taskly-preview.png'

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
    status: 'work in progress',
  },
]

export default projects