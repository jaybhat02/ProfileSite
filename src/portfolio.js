const header = {
  homepage: " ",
  title: 'Waterloo',
}

const about = {
  name: 'Jay Bhatasana',
  role: ' ',
  description:
    'Welcome, I am a first year engineering student. Over the years I have developed and created various projects, which I have up for display on this personal profile website of mine. You can also download my resume if you are interested.',
  resume: './Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/jay-bhatasana-98a0071a9/',
    github: 'https://github.com/jaybhat02',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'T-Clips',
    description:
      'A website where you can search and query your favourite Twitch streamers and download their top clips.',
    stack: ['React', 'Flask', 'Heroku', 'Semantic UI'],
    sourceCode: 'https://github.com/jaybhat02/TClips',
    livePreview: 'https://tclips.herokuapp.com/',
  },
  {
    name: 'Stay On Top',
    description:
      'An application that helps organize and assist UW students complete their Final Year Design Project.',
    stack: ['VBA'],
  },
  {
    name: 'Julia Fractal',
    description:
      'I developed a desktop application that generates Julia fractals of a given complex coordinate using various UI elements.',
    stack: ['C#', 'VS Studio'],
    sourceCode: 'https://github.com/jaybhat02/JuliaFractalGenerator',
  },
  
]

const skills = [
  'Python', 'Java', 'C#',  'HTML',
  'CSS',
  'JavaScript',
  'Django',
  'Vue.js',
  'React',
  'Node.js', 'Flask', 'VBA', 'MATLAB', 'R', 'Git', 'AWS', 'Numpy', 'MySQL', 'Vuetify','Bootstrap', 'Semantic UI', 'Celery', 'Bash',
  'Salesforce',
  
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
