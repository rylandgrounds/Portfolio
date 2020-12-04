import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ryland Grounds',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'I am twenty-three years old and a recent graduate of the Flatiron Software Engineering Bootcamp. Reading is my favorite past time as well as the pursuit of the perfect cup of coffee. I was the family tech priest for so long that I figured I may as well start getting paid doing it. Currently trying to make a tetris AI that I can wind up holding a leaderboard position.' ,
  paragraphTwo: 'My stack currently includes Javascript, Ruby, Ruby on Rails, React, Redux, and Python. I can use SQL for database management and have experience deploying my sites to production. Right now I am looking for my first break into the field so I can start contributing. My professional mindset in a nutshell is whatever I make will work and work effeciently.',
  resume: 'https://docs.google.com/document/d/1v7590ivkb4Z6426oyA8Ps7gxJ9ehYA89olcUgLGhPVg/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'corona-4930541_1920.jpg',
    title: 'Corona Cards',
    info: 'A web app that provides country by country Corona statistics. Data is sourced from the John Hopkins University and the Corona Virus API. Also uses a news API for access to news articles.',
    info2: '',
    url: 'https://mystifying-dubinsky-a2bdfb.netlify.app/',
    repo: 'https://github.com/rylandgrounds/Final-Flatiron-Project-Frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mal.jpg',
    title: 'MAL Mock Up',
    info: 'A simplied version of MAL using the Jinkan API and Sinatra',
    info2: '',
    url: '',
    repo: 'https://github.com/rylandgrounds/Sinatra_Portfolio_Project', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rylandgrounds@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/rgrounds7',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ryland-grounds/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rylandgrounds',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
