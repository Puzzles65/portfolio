import { FaHtml5, FaJs, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiDjango } from 'react-icons/si'
import { DiPostgresql } from 'react-icons/di'

const projectData = [
    {
        title: 'Minesweeper',
        image: require('../src/assets/images/minesweeper.png'),
        description: 'Utilizing HTML, JavaScript, and CSS, I recreated a captivating Minesweeper game that challenges players to clear the board of hidden mines to achieve victory',
        icons: [FaHtml5, FaJs],
        link: "https://project1-minesweeper.netlify.app/",
        githubLink: "https://github.com/Puzzles65/minesweeper/blob/main/README.md"
    },
    {
        title: 'Memes',
        image: require('../src/assets/images/memes.png'),
        description: 'This website allows users to share, create, and curate memes by submitting a URL and title for the meme. The platform is built using Node.js for the server-side and MongoDB to store the meme data. Instead of uploading files, users post memes through URLs, and the website displays them on the main page.',
        icons: [FaHtml5, FaJs, FaNodeJs, SiMongodb],
        link: "https://project2-memes-20789d159558.herokuapp.com/",
        githubLink: "https://github.com/Puzzles65/project2-memes/blob/main/README.md"
    },
    {
        title: 'SpaceCAT',
        image: require('../src/assets/images/spaceCAT.png'),
        description: "This website allows users to explore, create, and modify albums featuring NASA's Astronomy Picture of the Day (APOD). Leveraging Python, SQL databases, and Django frameworks, we implemented the app's functionalities, making it easy for users to save and access their favorite space images without repeatedly calling the NASA API. I worked on CSS to enhance the website's visual appeal, and also implemented a location API for users to show their current location.",
        icons: [FaHtml5, FaPython, DiPostgresql, SiDjango],
        link: "https://space-cat.fly.dev/",
        githubLink: "https://github.com/Puzzles65/SpaceCAT/blob/main/README.md"
    }
]

export default projectData;