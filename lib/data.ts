import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'syedadnanmoins@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Syed Adhnan, I am reaching out to you because...',

    oldPortfolio: 'https://www.linkedin.com/in/syedadhnan',

    upworkProfile:
        "mailto:syedadnanmoins@gmail.com?subject=Let's%20collaborate%20on%20a%20project&body=Hi%20Syed%20Adhnan%2C%0A%0AI%20am%20reaching%20out%20to%20you%20because...%0A",
    githubRepo: 'syedadnanmoin/portfolio-2.0',
    linkedin: 'https://www.linkedin.com/in/syedadhnan',
};

export const SOCIAL_LINKS = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/syedadhnan' },
];

export const MY_STACK = {
    frontend: [
        { name: 'React', icon: '/logo/react.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Angular', icon: '/logo/angular.svg' },
    ],

    backend: [
        { name: 'Python', icon: '/logo/python.svg' },
        { name: 'Java', icon: '/logo/java.svg' },
        { name: 'Spring Boot', icon: '/logo/springboot.svg' },
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
        { name: 'Django REST', icon: '/logo/django.svg' },
    ],

    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
    ],

    cloud_devops: [
        { name: 'AWS', icon: '/logo/aws.png' },
        { name: 'GCP', icon: '/logo/gcp.svg' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'Jenkins', icon: '/logo/jenkins.svg' },
        { name: 'Git', icon: '/logo/git.png' },
    ],
};

export const MY_EDUCATION = [
    {
        id: 'gwu-ms',
        school: 'The George Washington University',
        degree: 'M.S. Computer Science',
        startYear: 2023,
        endYear: 2025,
        logo: '/image.png',
        coursework: [
            'Distributed Systems',
            'Machine Learning',
            'Databases',
            'Algorithms',
            'Software Engineering',
        ],
    },
    {
        id: 'anna-be',
        school: 'Anna University',
        degree: 'B.E. Computer Science and Engineering',
        startYear: 2019,
        endYear: 2023,
        logo: '/anna.png',
        coursework: [
            'Data Structures & Algorithms',
            'Operating Systems',
            'Computer Networks',
            'DBMS',
            'Cloud & Web Technologies',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        company: 'MilliporeSigma (Merck KGaA)',
        title: 'Software Engineer',
        duration: 'Oct 2025 - Dec 2025',
        logo: '/logo/MilliporeSigma.png',
        highlights: [
            'Built a laboratory data automation platform using Python, SQLAlchemy, React, TypeScript, and GCP Cloud SQL.',
            'Automated backend data handling and improved workflow visibility via responsive UI components.',
            'Implemented API orchestration and backend logic for streamlined lab workflows.',
        ],
        tools: [
            { name: 'React', icon: '/logo/react.png' },
            { name: 'TypeScript', icon: '/logo/ts.png' },
            { name: 'Node.js', icon: '/logo/node.png' },
            { name: 'Express.js', icon: '/logo/express.png' },
            { name: 'GCP', icon: '/logo/gcp.svg' },
        ],
    },
    {
        company: 'LOCOMeX, Inc.',
        title: 'Software Development Intern',
        duration: 'Aug 2025 - Oct 2025',
        logo: '/logo/Locomex.png',
        highlights: [
            'Developed modular backend services and integrated secure data processing workflows.',
            'Collaborated with frontend to improve responsiveness and usability across devices.',
            'Supported releases with clean version control practices and maintainable delivery.',
        ],
        tools: [
            { name: 'React', icon: '/logo/react.png' },
            { name: 'TypeScript', icon: '/logo/ts.png' },
            { name: 'AWS', icon: '/logo/aws.png' },
            { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        ],
    },
    {
        company: 'MilliporeSigma (Merck KGaA)',
        title: 'Data Engineer Intern',
        duration: 'Jun 2025 - Aug 2025',
        logo: '/logo/MilliporeSigma.png',
        highlights: [
            'Built and optimized assay data pipelines for efficient processing and LIMS integration.',
            'Built an MVP pipeline to clean and index sequencer + lab data agnostic to file types.',
            'Enabled automated archival and storage optimization for NetApp-based workflows.',
        ],
        tools: [
            { name: 'MySQL', icon: '/logo/mysql.svg' },
            { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
            { name: 'Git', icon: '/logo/git.png' },
            { name: 'Docker', icon: '/logo/docker.svg' },
        ],
    },
    {
        company: 'Morgan Stanley',
        title: 'Software Consultant | Accolite Digital',
        duration: 'Jun 2022 - Aug 2023',
        logo: '/logo/MorganStanley.png',
        highlights: [
            'Developed Spring Boot services and REST APIs to process 1M+ records and reduce processing time by 30%.',
            'Containerized services using Docker and automated CI/CD pipelines using Jenkins.',
            'Implemented strong testing and code quality practices for enterprise-grade delivery.',
        ],
        tools: [
            { name: 'Docker', icon: '/logo/docker.svg' },
            { name: 'Git', icon: '/logo/git.png' },
            { name: 'Java', icon: '/logo/java.svg' },
            { name: 'Spring Boot', icon: '/logo/springboot.svg' },
            { name: 'Jenkins', icon: '/logo/jenkins.svg' },
        ],
    },

    {
        company: 'Global Computer Services LLC',
        title: 'Web Development Intern',
        duration: 'Feb 2021 - Apr 2021',
        logo: '/logo/globcom.png',
        highlights: [
            'Developed a Java + MySQL web application for online retail of pharmaceutical equipment.',
            'Contributed to enterprise projects for Petroleum Development Oman and Royal Oman Police, supporting frontend and backend modules.',
            'Optimized backend workflows, resulting in ~20% reduction in response times.',
            'Worked in Agile development cycles and gained hands-on SDLC experience.',
        ],
        tools: [
            { name: 'Java', icon: '/logo/java.svg' },
            { name: 'MySQL', icon: '/logo/mysql.svg' },
            { name: 'JavaScript', icon: '/logo/js.png' },
            { name: 'bootstrap', icon: '/logo/bootstrap.svg' },
        ],
    },
];

export const PROJECTS: IProject[] = [
    {
        title: 'Real-Time Object Detection in Distributed Systems',
        slug: 'real-time-object-detection',
        liveUrl: 'https://example.com',
        sourceCode: 'https://github.com/syedadnanmoin',
        year: 2025,
        role: 'Developer',
        description: `
      Developed and containerized an end-to-end real-time object recognition system using CNN-based image compression and Tiny YOLO models.<br/><br/>
      Enabled low-latency inference via a Flask API with distributed processing across edge and cloud environments.
    `,
        techStack: [
            'Python',
            'Flask',
            'Docker',
            'Tiny YOLO',
            'Distributed Systems',
        ],
        thumbnail: '/robjd.png',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
    },
    {
        title: 'Expense Tracking & Splitting Application',
        slug: 'expense-tracking-splitting',
        liveUrl: 'https://example.com',
        sourceCode: 'https://github.com/syedadnanmoin',
        year: 2025,
        role: 'Full-Stack Developer',
        description: `
      Built a full-stack application using a React.js frontend and Node.js/Express.js backend to log expenses and auto-split costs.<br/><br/>
      Implemented balance tracking among users and deployed the application on Vercel for fast, scalable access and an intuitive user experience.
    `,
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
        thumbnail: '/expense.png',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
    },

    {
        title: 'PharmaBuy — E-Commerce Web Application',
        slug: 'pharmabuy-ecommerce',
        liveUrl: 'https://example.com',
        sourceCode: 'https://github.com/syedadnanmoin',
        year: 2021,
        role: 'Full-Stack Developer',
        description: `
      Built a full-stack e-commerce web application for pharmaceutical equipment with 50+ active users.<br/><br/>
      Implemented JSP-based UI, Java Servlets for request–response flows, and a MySQL backend with interactive JavaScript features.
    `,
        techStack: ['Java', 'JSP', 'Servlets', 'MySQL', 'JavaScript', 'CSS'],
        thumbnail: '/pharmabuy.png',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
    },
    {
        title: 'Air Writing Recognition of English Characters',
        slug: 'air-writing-recognition',
        liveUrl: 'https://example.com',
        sourceCode: 'https://github.com/syedadnanmoin',
        year: 2022,
        role: 'ML Engineer',
        description: `
      Developed a CNN model to recognize mid-air handwritten English characters using OpenCV-based trajectory capture.<br/><br/>
      Trained on 30,000+ images and achieved 99.38% training accuracy and 98.48% validation accuracy.
    `,
        techStack: ['Python', 'CNN', 'OpenCV', 'Computer Vision'],
        thumbnail: '/airwritting.png',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
    },
    {
        title: 'Abstractive Text Summarizer',
        slug: 'abstractive-text-summarizer',
        liveUrl: 'https://example.com',
        sourceCode: 'https://github.com/syedadnanmoin',
        year: 2022,
        role: 'ML Engineer',
        description: `
      Built an abstractive summarization system using Seq2Seq + Pointer-Generator Network with Attention on the CNN/Daily Mail dataset.<br/><br/>
      Achieved ROUGE F1 scores: 40.92% (ROUGE-1), 20.62% (ROUGE-2), 39.63% (ROUGE-L).
    `,
        techStack: [
            'Python',
            'Seq2Seq',
            'Attention',
            'Pointer Generator',
            'NLP',
        ],
        thumbnail: '/textsummarizer.png',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
    },
];
