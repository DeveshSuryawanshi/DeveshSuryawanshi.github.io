////  Skills  ////
import html from "./logos/html-5.png";
import css from "./logos/CSS Logo.png";
import javascript from "./logos/javascript logo.png";
import react from "./logos/logo512.png";
import redux from "./logos/redux.png";
import node from "./logos/nodejs.png";
import mongoDB from "./logos/MongoDB.png";
import express from "./logos/Express.png";
import typeScript from "./logos/TypeScript.png";
import github from "./logos/github.png";
import git from "./logos/git.png";
import netlify from "./logos/netlify.png";
import vscode from "./logos/vscode.png";
import postman from "./logos/postman.png";
import figma from "./logos/figma.png";
import Premierpro from "./logos/Premierpro.png";
import chakraui from "./logos/chakraui.png";
import bootstrap from "./logos/bootstrap.png";
import vercel from "./logos/vercel.png";
import canva from "./logos/canva.webp"
  ////  Projects  ////
import Fitness from "./images/fitness-project.png";
import RecipeSwap from "./images/Recipe-Swap.png";
import Estelle from "./images/Estelle.png";
import Saregama from "./images/Saregama.png";
import ReactCrudApp from "./images/ReactCrudApp.png";

////  Skills  ////
export const Stack = [
    {
      title : "Frontend",
      skills : [
        {
          name : "HTML",
          image : html,
        },
        {
          name : "CSS3",
          image : css,
        },
        {
          name : "JavaScript",
          image : javascript,
        },
        {
          name : "React",
          image :react,
        },
        {
          name : "TypeScript",
          image : typeScript,
        },
        {
          name : "Redux",
          image : redux,
        },
        {
          name : "Chakra Ui",
          image : chakraui,
        },
        {
          name : "Bootstrap",
          image : bootstrap,
        },
      ]
    },
    {
      title : "Backend",
      skills : [
        {
          name : "Node.js",
          image : node
        },
        {
          name : "Express.js",
          image : express
        },
        {
          name : "MongoDB",
          image : mongoDB
        },
      ]
    },
    {
      title : "Others",
      skills : [
        {
          name : "Github",
          image  : github
        },
        {
          name : "Git",
          image  : git
        },
        {
          name : "Netlify",
          image  : netlify
        },
        {
          name : "VS Code",
          image  : vscode
        },
        {
          name : "Postman",
          image  : postman
        },
        {
          name : "Figma",
          image  : figma
        },
        {
          name : "Premierpro",
          image  : Premierpro
        },
        {
          name : "Vercel",
          image  : vercel
        },
        {
          name : "Canva",
          image  : canva
        },
      ]
    }
  ]


  ////  Projects  ////
  
 export const projects = [
  {
    id : 1,
    title: "StarFitness",
    date : "May 03 - May 13 [ 2023 ]",
    image: Fitness,
    description:
    "This website is related to fitness, where you can find fitness tips,fitness products, fitness coaches, and mentors. You can also find mini blog posts where you can get fitness tips from many experienced fitness enthusiasts.",
    techstack: ["React" , "JSX" , "CSS" , "Chakra UI" , "React Router DOM" , "React Icons"],
    category: "web-app",
    github: "https://github.com/DeveshSuryawanshi/warm-dirt-3394",
    webapp: "https://tubular-faloodeh-8d9246.netlify.app/",
    members: [
      {
        name : "Devesh Suryawanshi",
        img : "https://avatars.githubusercontent.com/u/110163013?s=400&u=8d08b519e5e02f90cdb319f0e5d837735a38afa2&v=4",
        linkedin : "https://www.linkedin.com/in/devesh-suryawanshi-690393243/",
        github : "https://github.com/DeveshSuryawanshi",
      },
    ],
  },
  {
    id : 2,
    title: "Recipe Swap",
    date : "Aug 26 - Sep 02 [ 2023 ]",
    image: RecipeSwap,
    description:
      "Recipe Swap is a community-based recipe sharing platform that allows users to share, discover, and discuss various recipes. Whether you're a cooking enthusiast, Recipe Swap provides a platform to connect and exchange recipes with others.",
    techstack:["React","Chakra UI","Redux","Styled-Components","Express","MongoDB","Node.js"],
    category: "web-app",
    github: "https://github.com/Manikantkr-1004/warlike-current-5989",
    webapp: "https://recipeswap.netlify.app/",
    members: [
      {
        name : "Devesh Suryawanshi",
        img : "https://avatars.githubusercontent.com/u/110163013?s=400&u=8d08b519e5e02f90cdb319f0e5d837735a38afa2&v=4",
        linkedin : "https://www.linkedin.com/in/devesh-suryawanshi-690393243/",
        github : "https://github.com/DeveshSuryawanshi",
      },
      {
        name : "Manikant Kumar",
        img : "https://avatars.githubusercontent.com/u/123896779?v=4",
        linkedin : "https://www.linkedin.com/in/manikantofficial2023/",
        github : "https://github.com/Manikantkr-1004",
      },
      {
        name : "Mohammad Hasim Shaikh",
        img  : "https://avatars.githubusercontent.com/u/58412185?v=4",
        linkedin : "https://www.linkedin.com/in/mohammad-hasim-shaikh-b16279251/",
        github : "https://github.com/Hasims2001",
      },
      {
        name : "Shivansh Soni",
        img  : "https://avatars.githubusercontent.com/u/117287131?v=4",
        linkedin : "https://www.linkedin.com/in/shivanshsonifullstackdeveloper/",
        github : "https://github.com/official-Shivansh",
      },
    ],
  },
  {
    id: 3,
    title: "Estelle - Fashion ",
    date : "Mar 31 - April 8 [ 2023 ]",
    image: Estelle,
    description:
      "This is a clone of an e-commerce website built using HTML, CSS, and JavaScript. The website includes the following pages: Home/Landing page, Products, Cart, Log-in/Sign-up and Checkout.",
    techstack: ["HTML", "CSS", "JavaScript"],
    category: "web-app",
    github: "https://github.com/Jay-Kushwaha/rhetorical-division-3531",
    webapp: "https://dreamy-cactus-59cabc.netlify.app/landing_page/index.html",
    members : [
      {
        name : "Devesh Suryawanshi",
        img : "https://avatars.githubusercontent.com/u/110163013?s=400&u=8d08b519e5e02f90cdb319f0e5d837735a38afa2&v=4",
        linkedin : "https://www.linkedin.com/in/devesh-suryawanshi-690393243/",
        github : "https://github.com/DeveshSuryawanshi",
      },
      {
        name : "Jay Kushwaha",
        img  : "https://avatars.githubusercontent.com/u/54079922?v=4",
        linkedin : "",
        github : "https://github.com/Jay-Kushwaha",
      },
      {
        name : "Nilesh Khade",
        img  : "https://avatars.githubusercontent.com/u/121354167?v=4",
        linkedin : "https://www.linkedin.com/in/nilesh-khade-81a428237/",
        github : "https://github.com/Nilesh7007",
      }
    ]
  },
  {
    id: 4,
    title: "Saregama",
    date : "Oct 3 - Oct 7 [ 2023 ]",
    image: Saregama,
    description:
      "Welcome to SA RE GA MA, your ultimate destination for all things music. Whether you're a passionate musician, a dedicated music enthusiast, or someone just looking to explore the world of melodies, SA RE GA MA is your gateway to a harmonious journey like no other.",
    techstack: ["React","Chakra UI","Redux","Styled-Components","Express","MongoDB","Node.js"],
    category: "web-app",
    github: "https://github.com/Hemant142/honest-wing-5796",
    webapp: "https://frontend-hla4711e7-hemant142.vercel.app/songs",
    members : [
      {
        name : "Devesh Suryawanshi",
        img : "https://avatars.githubusercontent.com/u/110163013?s=400&u=8d08b519e5e02f90cdb319f0e5d837735a38afa2&v=4",
        linkedin : "https://www.linkedin.com/in/devesh-suryawanshi-690393243/",
        github : "https://github.com/DeveshSuryawanshi",
      },
      {
        name : "Hemant Yadav",
        img  : "https://avatars.githubusercontent.com/u/121333203?v=4",
        linkedin : "https://www.linkedin.com/in/hemant-yadav-868296278/",
        github : "https://github.com/Hemant142",
      },
      {
        name : "Upendra Pal",
        img  : "https://avatars.githubusercontent.com/u/112810287?v=4",
        linkedin : "https://www.linkedin.com/in/upendra-pal-505b4a26a/",
        github : "https://github.com/Upendrapal0607",
      },
      {
        name : "Nikhil Pillare",
        img  : "https://avatars.githubusercontent.com/u/119400760?v=4",
        linkedin : "https://www.linkedin.com/in/nikhil-pillare-56b1a9208/",
        github : "https://github.com/nikhil-pillare",
      }
    ]
  },
  {
    id: 5,
    title: "React Crud App",
    date : "July 7 - July 10 [ 2023 ]",
    image: ReactCrudApp,
    description:
      "An E-Commerce CRUD (Create, Read, Update, Delete) app is a web application designed specifically for managing the products and inventory of an online store.This type of application empowers sellers to easily add, edit, update, and remove products.",
    techstack: ["React","Redux","Styled-Components","Chakra Ui","Json-Server"],
    category: "web-app",
    github: "https://github.com/DeveshSuryawanshi/Crud-App",
    webapp: "https://crud-hpere6ysm-deveshsuryawanshi.vercel.app/?order=",
    members : [
      {
        name : "Devesh Suryawanshi",
        img : "https://avatars.githubusercontent.com/u/110163013?s=400&u=8d08b519e5e02f90cdb319f0e5d837735a38afa2&v=4",
        linkedin : "https://www.linkedin.com/in/devesh-suryawanshi-690393243/",
        github : "https://github.com/DeveshSuryawanshi",
      },
    ]
  },
];

export const timeLineElements = [
  {
    id: 1,
    name: "R.C Patel English Medium Jr Collage, Shirpur",
    title: "(XII) Science",
    date: "Jun 2021 - Mar 2022",
    grade: "Grade: 84%",
    description: "I pursued my 12th-grade education at R.C Patel English Medium Jr College, specializing in Science."
  },
  {
    id: 2,
    name: "Sarasvati Shishu Vidhya Mandir High School, Pansemal",
    title: "(X) Science",
    date: "Feb 2019 - Mar 2020",
    grade: "Grade: 79%",
    description: "I laid the foundation of my educational journey at Sarasvati Shishu Vidhya Mandir High School, Pansemal, completing my 10th grade."
  },
]