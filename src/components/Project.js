import React from 'react'
import Burger from '../assets/Burger.png'
import DaMoJo from '../assets/DaMoJo.png'
import DayPlanner from '../assets/DayPlanner.png'
import hwhelper from '../assets/hwhelper.png'
import NoteTaker from '../assets/NoteTaker.png'
import PassGen from '../assets/PassGen.png'
import QuizApp from '../assets/QuizApp.png'
import Weather from '../assets/Weather.png'

const projectsArr = [
  { 
    title: "Da.Mo.Jo - Virtual Closet",
    image: DaMoJo,
    alt: "Damojo logo",
    url: "https://project2-damojo.herokuapp.com/",
    github: "https://github.com/jxleilani/project2",
    desc: `A virtual closet experience in a full stack application. Upload images of your clothing items and pair them together for the perfect outfit.
    <br/><br/><em>Technologies Used:</em><br/>
    Node Express Handlebars Passport Bcrypt Bootstrap MySQL Heroku`
  },
  { 
    title: "Weather App",
    image: Weather,
    alt: "Weather app screenshot of forecast",
    url: "https://jxleilani.github.io/Weather/",
    github: "https://github.com/jxleilani/Weather",
    desc: `A 7 day weather forecast searchable by location.
    <br/>*Not supported by Safari.
    <br/><br/><em>Technologies Used:</em><br/>
    HTML CSS JS jQuery Geolocation OpenWeatherMapAPI`
  },
  { 
    title: "Homework Helper",
    image: hwhelper,
    alt: "Homework helper screenshot of weekly calendar",
    url: "https://vscacchitti.github.io/HomeworkHelper/",
    github: "https://github.com/VScacchitti/HomeworkHelper",
    desc: `Concept design created for kids grades K-12. An online platform to keep track of and work on homework assignments while having fun.
    <br/><br/><em>Technologies Used:</em><br/>
    AJAX GrammarBotAPI TwinWordAPI Slider.js Materialize`
  },
  {
    title: "Build-A-Burger",
    image: Burger,
    alt: "Screenshot of build-a-burger app and burger choices",
    url: "https://quiet-beyond-71421.herokuapp.com/",
    github: "https://github.com/jxleilani/burger",
    desc: `Create burgers && devour them too!. Dynamically create burger items and click to eat them. This application responds dynamically as burgers are built. When a burger is devoured, it will move to the right side of the page. Views are created using express-handlebars and data is stored via MySQL. This application has been deployed to Heroku.
    <br/><br/><em>Technologies Used:</em><br/>
    Node Express Handlebars MySQL Heroku Bootstrap`
  },
  {
    title: "Note Taker",
    image: NoteTaker,
    alt: "Screenshot of note taking app",
    url: "https://blooming-spire-75700.herokuapp.com/",
    github: "https://github.com/jxleilani/Note-Taker",
    desc: `Create and save notes. This application uses an express.js server to save and retrieve data from a JSON file. The interface also allows the user to delete notes, which removes the selected note from the JSON file.
    <br/><br/><em>Technologies Used:</em><br/>
    HTML CSS JavaScript jQuery Node Express Heroku`
  },
  {
    title: "JavaScript Quiz",
    image: QuizApp,
    alt: "JavaScript Quiz screenshot",
    url: "https://jxleilani.github.io/QuizApp/", 
    github: "https://github.com/jxleilani/QuizApp",
    desc: `Timed JavaScript Quiz with high scores.
    <br/><br/><em>Technologies Used:</em><br/>
    HTML CSS JavaScript`
  },
  {
    title: "Day Planner",
    image: DayPlanner,
    alt: "Daily planner screenshot",
    url: "https://jxleilani.github.io/DayPlanner/", 
    github: "https://github.com/jxleilani/DayPlanner",
    desc: `24 hour task planner. The Day Planner app displays the current day of the week, date, and current local time. 24 time blocks are displayed for the 24 hours of the current day. Time blocks shown in gray are in the past, time blocks in red are the current hour block, and time blocks in green are hours in the future. The user can can add text to any time block and then click the save button to save to local storage.
    <br/><br/><em>Technologies Used:</em><br/>
    HTML CSS JavaScript jQuery Bootstrap`
  },
  {
    title: "Password Generator",
    image: PassGen,
    alt: "Password generator screenshot",
    url: "https://jxleilani.github.io/PasswordGenerator/",
    github: "https://github.com/jxleilani/PasswordGenerator",
    desc: `Create a random password based on character type selection. The user is prompted for the length of the password, and whether or not they want to include lowercase letters, uppercase letters, numbers, or symbols. Based on the user's responses, the app uses JavaScript to put together a password of the selected length, using the selected character types.
    <br/><br/><em>Technologies Used:</em><br/>
    HTML CSS JavaScript`
  }
];

function Project() {
  return (
    <div>
    {projectsArr.map((project) => (
      <div key={project.title} className="portfolio-item">
        <img src={project.image} alt={project.alt} />
      <div className="portfolio-img item" data-aos="fade-up-left">
        <a href={project.url} target="_blank" rel="noreferrer"><img src="../../public/assets/DaMoJo.png" alt={project.alt} /></a>
      </div>
      <div className="portfolio-desc item-2">
        <h6>{project.title}</h6>
        <p>{project.desc}</p>
        <div className="icon">
          <a href={project.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i> View Repository</a>
        </div>
      </div>
    </div>
    ))
    }
    </div>
  )
}

export default Project
