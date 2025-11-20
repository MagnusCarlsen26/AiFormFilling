export const userInfo = `

# User's Resume - 
${RESUME}

# Common Questions
${COMMON_QUESTIONS}

# User's FAQ
${FAQ}

# Cover Letter
${COVER_LETTER}
`

const RESUME = `

Today's Date - ${TODAY_DATE}

## Basic info
Name - Khushal Sindhav
Role - Software Engineer / Full Stack Developer
College - IIT Jodhpur, B.Tech AI & DS(2021 - 2025)

## Contact
Phone - +91 9328576258
Email - khushal.sindhav26@gmail.com
LinkedIn - https://www.linkedin.com/in/khushal-sindhav
Github - http://github.com/MagnusCarlsen26
Website - https://www.khushalsindhav.com
Codeforces - https://codeforces.com/profile/_magnus_carlsen_

## Education

| Institution        | Degree / Class                | Date      | Percentage |
|--------------------|-------------------------------|-----------|------------|
| IIT Jodhpur        | B.Tech in AI & Data Science   | May 2025  | 60%        |
| JHASV, Surat       | Class 12                      | May 2021  | 93%        |
| JHASV, Surat       | Class 10                      | May 2019  | 91%        |


## Skills
Languages - JavaScript, Python, C++,
Full Stack - React, NextJS, Bootstrap, Tailwind, MongoDB, NodeJS, Flask,
DevOps - AWS, Firebase, Docker, Kubernetes,

## Work Experience
Company Name - Oasis of Ideas
Role - Full Time Software Engineer
Duration - Jul 2025 – Oct 2025
Link - https://www.linkedin.com/company/oasis-of-ideas
Location - Remote
Skills - Python, AWS EC2, tmux

- Solely designed, implemented, and maintained an end - to - end system for scraping and processing startup ideas.
- Scraped data from multiple websites using asynchronous Python programming.
- Processed scraped content via multi - stage LLM pipelines powered by OpenAI, DeepSeek, and Gemini.
- Deployed and scaled the system across 8 AWS EC2 instances; used tmux for concurrent task management.
- Built a fully automated pipeline for idea extraction, filtering, and curation using LLMs.

Company Name - IIT Jodhpur
Project Name - Survey Portal
Role - Software Intern
Duration - Jul 2024 – Nov 2024
Link - https://github.com/MagnusCarlsen26/Survey-portal
Skills - NextJS, TailwindCSS, Vercel, NodeJS, Firebase, AWS EC2

- Developed a custom survey website to conduct surveys at IIT Jodhpur.
- The website handled 270 users without any errors during the survey.
- Designed a responsive UI and implemented security measures, such as preventing users from skipping responses to questions.
- Created a user - friendly admin panel to manage user access effectively.

## Projects
Company Name - IIT Jodhpur
Project Name - PRACTO SCRAPER
Duration - Sept 2024 – Nov 2024
Link - https://github.com/MagnusCarlsen26/Practo-Scraper
Skills - Javascript, Docker, Kubernetes, Firebase, AWS EKS

- Scraped data of 6600 doctors in 2 hours from Practo for research purposes.
- Implemented a master - worker architecture to accomplish the task.
- Deployed the master using Firebase Functions and the worker using Docker containers on AWS Elastic Kubernetes Service.
- Addressed challenges related to efficiency, code reusability, and race conditions in Firestore.

## Achievements
- Among top 0.8 % in JEE Advanced 2021.
- Discovered auth vulnerability in college ERP system.
- Made an extension to fill feedback for all courses in one click.
- Pupil at Codeforces with peak rating of 1369.
- Secured 352 Global rank in CodeChef Starters 92(Div. 2).
- Secured 1700 rank in Google Kickstart Round C 2022.

`

const COMMON_QUESTIONS = `

1. Available to join in 30 Days.
2. Current Location : Bangalore, India.

`

const COVER_LETTER = ``

const FAQ = `
Q: Describe anything you built end-to-end.

A: You will surely enjoy reading this blog where I nerd about what I built - 
https://www.khushalsindhav.com/blog/read/kubernetes-cluster-i-shouldnt-have-built
Github : https://github.com/MagnusCarlsen26/Practo-Scraper

Q: Give an example of you learning a new technology quickly.

A: Learning new technologies has always come naturally to me. For example, I picked up React.js without knowing JavaScript beforehand, leveraging the syntactic similarities with Python. I watched React.js tutorials for nine hours straight and jumped right into building projects, troubleshooting errors through persistent Googling.

During my summer internship, I had to use Firebase as the sole developer on the project. I sought help from ChatGPT (before there was Cursor), asking "How to do CRUD operations in Firebase?" and then adapted the solutions into my codebase.

I'm comfortable learning from documentation or by asking AI for relevant information, using my own reasoning to quickly grasp new concepts.

This ability is thanks in part to the discipline and experience I gained preparing for JEE Advanced 2021.


Q. Why should you hire me?

A. 1) Strong Problem solving skills - Proved by being in top 0.8% in JEE ADVANCE 2021.
   2) Even as a junior SWE, I won't need a specialised document telling me each sub steps I need to complete. A high level description is enough for me - I will figure out rest of the details and a plan on how to convert idea to software.
   3) Love for building cool stuff - I love building cool solutions with software. You pay me 5 LPA or 50 LPA you will get the same quality work from me.
   4) I have previously worked at a early stage startup ( team of 5 ).  I know how small teams function.
Company - https://in.linkedin.com/company/oasis-of-ideas
Founder - https://www.linkedin.com/in/yuvraj-sarda ( Cornell University )
`

const TODAY_DATE = new Date().toLocaleDateString(
  'en-GB',
  {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }
);
