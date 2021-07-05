import React from 'react';
import VideoPlayer from 'react-video-js-player';
import websiteImage from '../Portfolio Website Picture.jpg';
import checkersVideo from '../Final Checkers Video.mp4';
import checkersThumbnail from '../Final Checkers Thumbnail.jpg';
import laserVideo from '../Bank Laser Game.mp4';
import laserThumbnail from '../Laser Game Thumbnail.jpg';
import pokerVideo from '../Poker Game New.mp4';
import pokerThumbnail from '../Poker Thumbnail.jpg';
import musicPicture from '../Muze Music Library Picture.jpg';
import refactorImage1 from '../Refactoring getScore() 1.jpg';
import refactorImage2 from '../Refactoring getScore() 2.jpg';
import refactorImage3 from '../Refactoring run() 1.jpg';
import refactorImage4 from '../Refactoring run() 2.jpg';

const Projects = () => {
    return (
        <div class='project-page'>
            <div class='projects-header'>
                <h1 class='projects-title'>Projects</h1>
            </div>
            <div class='container-fluid projects-container'>
                <div class='row'>
                    <div class='col'>
                        <h1 className='project-headings'>Portfolio Website</h1>
                        <img
                            className='project-pic'
                            src={websiteImage}
                            alt='Portfolio Website Image'
                        />
                        <p className='project-descriptions'>
                            This website was my first personal project that I have done outside of class.
                            I used React and Bootstrap to add components and create the layout for the site. CSS
                            was then used to style those components. This project was a great way to improve my 
                            React skills while also learning how to use Bootstrap, which I had never used before. Additionally, 
                            I was able to utilize React Router in order to create routes to each page. The main
                            benefits of this project were gaining experience creating a React application, learing how to use React Router, understanding how to incorporate
                            bootstrap components, and improving my CSS skills.
                        </p>
                        <h1 className='project-headings lower'>Laser Puzzle</h1>
                        <VideoPlayer 
                            src={laserVideo}
                            width='600px'
                            height='250px'
                            controls='true'
                            poster={laserThumbnail}
                        />
                        <p class='project-descriptions'>
                            This project is a game which involves strategically placing lasers in order to solve
                            a puzzle. Users have a variety of commands to type into the plain-text
                            user interface. These commands allow users to add and remove lasers, ask for help, 
                            verify the safe, display the board, solve the puzzle, or quit. I used Java to build this 
                            project and utilized a Model View Controller (MVC) architecture to organize my code. The "solve" command 
                            is made possible through a backtracking algorithm which uses recursion to find a solution. In addition
                            to writing several algorithms to create this application, I also gained experience with reading
                            in user data and working with the Observer pattern. <br></br>The video above gives a brief 
                            demonstration of the application.
                        </p>
                        <h1 class='project-headings lower'>Muze Music Library</h1>
                        <img
                            className='project-pic'
                            src={musicPicture}
                            alt='Muze Music Library'
                        />
                        <p class='project-descriptions'>
                            I completed this project with a group of four other people during one of my SE classes. The main purpose
                            of this project was to utilize design patterns and principles that we had learned in class. It consisted of a 
                            database of music that users could browse and add to their own personal music library. Music could then be sorted
                            by artist, album, song, rating, duration, etc. Users could enter commands through a plain-text user interface and
                            the results would be displayed for them to see. My group decided to utilize several design patterns including
                            Command, Strategy, Composite, Observer, Decorator, and Proxy. We also focused heavily on making sure that our design followed the Single Responsibility Principle, 
                            the Open-Closed Principle, and kept high cohesion and low coupling. In addition to aiding in the design and implementation
                            of the project, I also played a large part in organizing roles for team members, scheduling meetings, and completing
                            documentation of our design. Java was used to build this project. The main benefits that came from this project were
                            gaining experience working on a development team on a tight schedule, learning about and utilizing design patterns and principles, 
                            and understanding how to properly document and present a software design.
                        </p>
                        
                    </div>
                    <div class='col'>
                        <h1 className='project-headings'>Web Checkers</h1>
                        <VideoPlayer 
                            src={checkersVideo}
                            width='600px'
                            height='285px'
                            controls='true'
                            poster={checkersThumbnail}
                        />
                        <p class='project-descriptions'>
                            Web Checkers was a project that I completed in one of my SE classes. I 
                            worked on a team with four other students to create the functionality for an 
                            online checkers game. It includes the ability for multiple players to login 
                            and challenge each other to a game of checkers. We added the ability for players 
                            to make single-space moves, single and double jump moves, receive hints, undo moves, submit turns, create king
                            pieces, and even spectate other games live. I had several contributions to the project, one of which being 
                            that I organized meetings and coordinated roles for team members. I also created the functionality for
                            submitting a turn, receiving hints, making single-space moves and jump moves, undoing moves, and creating king pieces. 
                            I used Java for most of the project along with Spark to create REST API's and Maven to 
                            buuld and execute the project. The main takeaways from this project were gaining experience
                            working on a development team, improving my Java skills, and learning more about Spark and Maven. <br></br>The video above gives 
                            a brief demonstration of the application.
                        </p>
                        <h1 className='project-headings lower'>Poker Game</h1>
                        <VideoPlayer 
                            src={pokerVideo}
                            width='460px'
                            height='500px'
                            controls='true'
                            poster={pokerThumbnail}
                        />
                        <p class='project-descriptions'>
                            This project is a poker game which utilizes a plain-text user interface. The 
                            user gets two cards and can choose whether or not they would like to stand. If both players
                            stand, then the best hand wins. A pair beats two of the same suit, which beats a high card. This 
                            project was built using Java. Being that this was one of my first projects, it gave me a good
                            introduction to object oriented programming as well as dealing with user input and using comparators.
                            <br></br>The video above gives a brief demonstration of the application.
                        </p>
                        <h1 class='project-headings lower'>Refactoring Project</h1>
                        <img
                            className='project-pic'
                            src={refactorImage1}
                            alt='Refactoring Project Image'
                        />
                        <img
                            className='project-pic lower'
                            src={refactorImage2}
                            alt='Refactoring Project Image'
                        />
                        <hr className='refactoring-separator' style={{height: '2px', backgroundColor: 'white', opacity: '100%'}}/>
                        <img
                            className='project-pic'
                            src={refactorImage3}
                            alt='Refactoring Project Image'
                        />
                        <img
                            className='project-pic lower'
                            src={refactorImage4}
                            alt='Refactoring Project Image'
                        />
                        <p class='project-descriptions last'>
                            Working on a team with four other people, we were given the task of refactoring a student project
                            from many years prior. Based on our visual inspection of the code and our assessment of the metrics
                            for the project, we decided to focus our efforts on improving the getScore() and run() methods in the 
                            Lane class. As you can see by the above metrics, the cognitive (CogC), essential (ev(G)), design (iv(G)), and cyclomatic (v(G)) complexities
                            were major concerns for this class. Through utilizing the State pattern and performing general code cleanup, we 
                            were able to reduce these numbers significantly. The main role that I had in the project was to help design and
                            implement a plan to improve the getScore() method. After deciding that the State pattern would be our best option, we 
                            used pair programming, which improved our code quality and allowed us to keep track of what each of us was working on. The
                            main takeaways from this project were learning how to interpret code metrics, understanding how to properly refactor code, 
                            and utilizing pair programming for more efficient development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
