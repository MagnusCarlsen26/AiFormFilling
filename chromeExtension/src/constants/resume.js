const TODAY_DATE = new Date().toLocaleDateString(
  'en-GB',
  {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }
);

export const RESUME = `
Today's Date - ${TODAY_DATE}

## Basic info
Name - Khushal Sindhav
Applying for Role - Software Engineer / Full Stack Developer
College - IIT Jodhpur, B.Tech AI & Data Science(2021 - 2025)

## Contact
Phone - +91 9328576258
Email - khushal.sindhav26@gmail.com
LinkedIn - https://www.linkedin.com/in/khushal-sindhav
Github - http://github.com/MagnusCarlsen26
Website - https://www.khushalsindhav.com
Codeforces - https://codeforces.com/profile/_magnus_carlsen_

## Education

| Institution      | Date       | Degree / Class              | Percentage |
|------------------|------------|-----------------------------|------------|
| IIT Jodhpur      | May 2025   | B.Tech in AI & Data Science | 60%        |
| JHASV, Surat     | May 2021   | Class 12                    | 93%        |
| JHASV, Surat     | May 2019   | Class 10                    | 91%        |


## Skills
Languages - JavaScript, Python, C++,
Full Stack - React, NextJS, Bootstrap, Tailwind, MongoDB, NodeJS, Flask,
DevOps - AWS, Firebase, Docker, Kubernetes,

## Work Experience
Company Name - Oasis of Ideas
Role - Full Time Software Engineer
Location - Remote
Duration - Jul 2025 – Oct 2025
Link - https://www.linkedin.com/company/oasis-of-ideas
Location - Remote
Skills - Python, AWS EC2, tmux
IMPORTANT - Current JOB
Role Description :
- Solely designed, implemented, and maintained an end - to - end system for scraping and processing startup ideas.
- Scraped data from multiple websites using asynchronous Python programming.
- Processed scraped content via multi - stage LLM pipelines powered by OpenAI, DeepSeek, and Gemini.
- Deployed and scaled the system across 8 AWS EC2 instances; used tmux for concurrent task management.
- Built a fully automated pipeline for idea extraction, filtering, and curation using LLMs.

Company Name - IIT Jodhpur
Project Name - Survey Portal
Role - Software Intern
Location - Jodhpur
Duration - Jul 2024 – Nov 2024
Link - https://github.com/MagnusCarlsen26/Survey-portal
Skills - NextJS, TailwindCSS, Vercel, NodeJS, Firebase, AWS EC2
Role Description :
- Developed a custom survey website to conduct surveys at IIT Jodhpur.
- The website handled 270 users without any errors during the survey.
- Designed a responsive UI and implemented security measures, such as preventing users from skipping responses to questions.
- Created a user - friendly admin panel to manage user access effectively.

## Projects
Company Name - IIT Jodhpur
Project Name - PRACTO SCRAPER
Location - Jodhpur
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