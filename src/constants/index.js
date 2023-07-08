import AvatarImg1 from '../assets/testimonial/avatar1.png'
import AvatarImg2 from '../assets/testimonial/avatar2.png';
import AvatarImg3 from '../assets/testimonial/avatar3.png';
import AvatarImg4 from '../assets/testimonial/avatar4.png';
import AvatarImg5 from '../assets/testimonial/avatar5.png';

import { suitModel, suitModel2, suitModel3, ArrowRightImg } from '../assets'

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export const testimonials = {
  title: 'We have millions of best wishers',
  clients: [
    {
      message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, sint? Saepe iure quisquam sit ducimus nemo.',
      image: AvatarImg1,
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, sint? Saepe iure quisquam sit ducimus nemo.',
      image: AvatarImg2,
      name: 'Shirley Hand',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, sint? Saepe iure quisquam sit ducimus nemo.',
      image: AvatarImg3,
      name: 'Dr. Olivia Hansen',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, sint? Saepe iure quisquam sit ducimus nemo.',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, sint? Saepe iure quisquam sit ducimus nemo.',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Alwalys online',
    title: 'Real-time support with cloud',
    subtitle:
      'Real-time support with cloud enables immediate assistance and guidance using cloud-based technology, from anywhere with an internet connection.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: suitModel,
  },
  feature2: {
    pretitle: 'Free some cost',
    title: 'Save cost for you and family',
    subtitle:
      'Saving costs for you and your family can be achieved through smart financial planning, such as creating a budget, reducing unnecessary expenses, and exploring cost-saving opportunities like discounts and rewards programs.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: suitModel2,
  },
  feature3: {
    pretitle: 'Use anytime',
    title: 'Use anytime when you need',
    subtitle:
      'A useful tool to have anytime you need is a planner or organizer, which can help you keep track of important tasks, appointments, and deadlines, and ensure you stay on top of your schedule and responsibilities.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: suitModel3,
  },
};


// Function to generate a random number between min (inclusive) and max (exclusive)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// Function to generate a random avatar image URL
const generateAvatarImage = () => {
  const avatarImages = [AvatarImg1, AvatarImg2, AvatarImg3, AvatarImg4, AvatarImg5];
  const randomIndex = getRandomNumber(0, avatarImages.length);
  return avatarImages[randomIndex];
};


export const candidatesData = [
  {
    id: 1,
    image: generateAvatarImage(),
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante in sem tincidunt hendrerit. Duis pretium neque in maximus sollicitudin. Aenean id lorem vel ante feugiat commodo.',
    location: 'New York',
    jobRole: 'Software Engineer',
  },
  {
    id: 2,
    image: generateAvatarImage(),
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante in sem tincidunt hendrerit. Duis pretium neque in maximus sollicitudin. Aenean id lorem vel ante feugiat commodo.',
    location: 'San Francisco',
    jobRole: 'Frontend Developer',
  },
  {
    id: 3,
    image: generateAvatarImage(),
    name: 'David Johnson',
    email: 'david.johnson@example.com',
    phone: '456-789-0123',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante in sem tincidunt hendrerit. Duis pretium neque in maximus sollicitudin. Aenean id lorem vel ante feugiat commodo.',
    location: 'London',
    jobRole: 'UX Designer',
  },
  {
    id: 4,
    image: generateAvatarImage(),
    name: 'Emily Wilson',
    email: 'emily.wilson@example.com',
    phone: '789-012-3456',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante in sem tincidunt hendrerit. Duis pretium neque in maximus sollicitudin. Aenean id lorem vel ante feugiat commodo.',
    location: 'Mumbai',
    jobRole: 'UX Designer',
  },
  {
    id: 5,
    image: generateAvatarImage(),
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '234-567-8901',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante in sem tincidunt hendrerit. Duis pretium neque in maximus sollicitudin. Aenean id lorem vel ante feugiat commodo.',
    location: 'Hongkong',
    jobRole: 'Full Stack Dev',
  },
  {
    id: 6,
    image: generateAvatarImage(),
    name: 'Sophia Lee',
    email: 'sophia.lee@example.com',
    phone: '678-901-2345',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante in sem tincidunt hendrerit. Duis pretium neque in maximus sollicitudin. Aenean id lorem vel ante feugiat commodo.',
    location: 'Tokyo',
    jobRole: 'SDE',
  },
  {
    id: 7,
    image: generateAvatarImage(),
    name: 'Ethan Taylor',
    email: 'ethan.taylor@example.com',
    phone: '012-345-6789',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante in sem tincidunt hendrerit. Duis pretium neque in maximus sollicitudin. Aenean id lorem vel ante feugiat commodo.',
    location: 'Karachi',
    jobRole: 'Frontend Dev',
  },
  {
    id: 8,
    image: generateAvatarImage(),
    name: 'Olivia Clark',
    email: 'olivia.clark@example.com',
    phone: '345-678-9012',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante in sem tincidunt hendrerit. Duis pretium neque in maximus sollicitudin. Aenean id lorem vel ante feugiat commodo.',
    location: 'Canada',
    jobRole: 'Data Science',
  },
  {
    id: 9,
    image: generateAvatarImage(),
    name: 'Aiden Anderson',
    email: 'aiden.anderson@example.com',
    phone: '678-901-2345',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante in sem tincidunt hendrerit. Duis pretium neque in maximus sollicitudin. Aenean id lorem vel ante feugiat commodo.',
    location: 'Pune',
    jobRole: 'IOS Dev',
  },
  {
    id: 10,
    image: generateAvatarImage(),
    name: 'Charlotte Turner',
    email:'charlotte.turner@example.com',
    phone: '901-234-5678',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ante in sem tincidunt hendrerit. Duis pretium neque in maximus sollicitudin. Aenean id lorem vel ante feugiat commodo.',
    location: 'Bangalore',
    jobRole: 'AI Dev',
  },
];
