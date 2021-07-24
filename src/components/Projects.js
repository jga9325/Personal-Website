import React, {useState, useEffect} from 'react';
import websiteImage from '../New Portfolio Website Picture.jpg';
import checkersVideo from '../Compressed Checkers Video.mp4';
import checkersThumbnail from '../Final Checkers Thumbnail.jpg';
import laserVideo from '../Compressed Bank Laser Game.mp4';
import laserThumbnail from '../Laser Game Thumbnail.jpg';
import pokerVideo from '../Compressed Poker Game.mp4';
import pokerThumbnail from '../Poker Thumbnail.jpg';
import musicPicture from '../Muze Music Library Picture.jpg';
import refactorImage1 from '../Refactoring getScore() 1.jpg';
import refactorImage2 from '../Refactoring getScore() 2.jpg';
import refactorImage3 from '../Refactoring run() 1.jpg';
import refactorImage4 from '../Refactoring run() 2.jpg';

const Projects = () => {

    const WIDTH = 1024;

    const [width, setWindowWidth] = useState(window.innerWidth);

    useEffect (() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => 
            window.removeEventListener('resize', updateDimensions);
    }, []) 

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    }

    const styles = {

        projectsTitle: {
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
            opacity: .8,
            width: '500px',
            margin: 'auto',
            borderRadius: '20px',
            paddingTop: '10px',
            fontWeight: 'bold',
            border: '3px solid #6495ED',
            paddingBottom: '10px'
          },

          projectsTitleMobile: {
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
            opacity: .8,
            width: '95%',
            margin: 'auto',
            borderRadius: '20px',
            paddingTop: '10px',
            fontWeight: 'bold',
            border: '3px solid #6495ED',
            paddingBottom: '10px'
          },
          
        projectsHeader: {
            paddingTop: '30px',
            paddingBottom: '60px'
          },

          projectsHeaderMobile: {
            paddingTop: '10px',
            paddingBottom: '60px'
          },
          
        projectPic: {
            width: '600px',
            border: '2px solid black',
            marginLeft: 'auto',
            marginRight: 'auto'
          },

          projectPicMobile: {
            width: '95%',
            border: '2px solid black',
            marginLeft: 'auto',
            marginRight: 'auto'
          },
          
        projectPicLower: {
            marginTop: '20px',
            width: '600px',
            border: '2px solid black',
            marginLeft: 'auto',
            marginRight: 'auto'
          },

        projectPicLowerMobile: {
            marginTop: '20px',
            width: '95%',
            border: '2px solid black',
            marginLeft: 'auto',
            marginRight: 'auto'
          },
          
        videoJs: {
            marginRight: 'auto',
            marginLeft: 'auto',
            border: '2px solid black'
          },
          
        projectVideo: {
            width: '600px',
            border: '2px solid black'
          },

        projectVideoMobile: {
            width: '95%',
            /*border: '2px solid black'*/
          },

        pokerVideo: {
            width: '400px',
            border: '2px solid black'
        },

        pokerVideoMobile: {
            width: '95%',
            /*border: '2px solid black'*/
        },
          
        projectHeadings: {
            color: 'white'
          },
          
        projectHeadingsLower: {
            marginTop: '80px',
            color: 'white'
          },
          
        projectDescriptions: {
            color: 'white',
            textAlign: 'center',
            width: '600px',
            border: '2px solid white',
            marginTop: '20px',
            paddingTop: '5px',
            borderRadius: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '5px',
            paddingRight: '5px',
            fontSize: '15px'
          },

          projectDescriptionsMobile: {
            color: 'white',
            textAlign: 'center',
            width: '95%',
            border: '2px solid white',
            marginTop: '20px',
            paddingTop: '5px',
            borderRadius: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '5px',
            paddingRight: '5px',
            fontSize: '15px'
          },
          
        projectDescriptionsLast: {
            marginBottom: '50px',
            color: 'white',
            textAlign: 'center',
            width: '600px',
            border: '2px solid white',
            marginTop: '20px',
            paddingTop: '5px',
            borderRadius: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '5px',
            paddingRight: '5px',
            fontSize: '15px'
          },

          projectDescriptionsLastMobile: {
            marginBottom: '50px',
            color: 'white',
            textAlign: 'center',
            width: '95%',
            border: '2px solid white',
            marginTop: '20px',
            paddingTop: '5px',
            borderRadius: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '5px',
            paddingRight: '5px',
            fontSize: '15px',
            paddingBottom: '5px'
          },
          
        refactoringSeparator: {
            width: '300px',
            color: 'white',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
            marginBottom: '20px',
            height: '2px',
            backgroundColor: 'white',
            opacity: '100%'
          }
    }

    return (
        <div>
            {width >= WIDTH ?
            <div class='project-page'>
                <div class='projects-header' style={styles.projectsHeader}>
                    <h1 class='projects-title' style={styles.projectsTitle}>Projects</h1>
                </div>
                <div class='container-fluid projects-container'>
                    <div class='row'>
                        <div class='col'>
                            <h1 className='project-headings' style={styles.projectHeadings}>Portfolio Website</h1>
                            <img
                                className='project-pic'
                                src={websiteImage}
                                alt='Portfolio Website Image'
                                style={styles.projectPic}
                            />
                            <p className='project-descriptions' style={styles.projectDescriptions}>
                                This website was my first personal project that I have done outside of class.
                                I used React and Bootstrap to add components and create the layout for the site. CSS
                                was then used to style those components. This project was a great way to improve my 
                                React skills while also learning how to use Bootstrap, which I had never used before. Additionally, 
                                I was able to utilize React Router in order to create routes to each page. The main
                                benefits of this project were gaining experience creating a React application, learing how to use React Router, understanding how to incorporate
                                bootstrap components, and improving my CSS skills.
                            </p>
                            <h1 className='project-headings lower' style={styles.projectHeadingsLower}>Laser Puzzle</h1>
                            <video class='project-video' style={styles.projectVideo} poster={laserThumbnail} controls>
                                <source
                                    src={laserVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag
                            </video>
                            <p class='project-descriptions' style={styles.projectDescriptions}>
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
                            <h1 class='project-headings lower' style={styles.projectHeadingsLower}>Muze Music Library</h1>
                            <img
                                className='project-pic'
                                src={musicPicture}
                                alt='Muze Music Library'
                                style={styles.projectPic}
                            />
                            <p class='project-descriptions' style={styles.projectDescriptions}>
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
                            <h1 className='project-headings' style={styles.projectHeadings}>Web Checkers</h1>
                            <video class='project-video' style={styles.projectVideo} poster={checkersThumbnail} controls>
                                <source
                                    src={checkersVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag
                            </video>
                            <p class='project-descriptions' style={styles.projectDescriptions}>
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
                            <h1 className='project-headings lower' style={styles.projectHeadingsLower}>Poker Game</h1>
                            <video class='project-video' poster={pokerThumbnail} style={styles.pokerVideo} controls>
                                <source
                                    src={pokerVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag
                            </video>
                            <p class='project-descriptions' style={styles.projectDescriptions}>
                                This project is a poker game which utilizes a plain-text user interface. The 
                                user gets two cards and can choose whether or not they would like to stand. If both players
                                stand, then the best hand wins. A pair beats two of the same suit, which beats a high card. This 
                                project was built using Java. Being that this was one of my first projects, it gave me a good
                                introduction to object oriented programming as well as dealing with user input and using comparators.
                                <br></br>The video above gives a brief demonstration of the application.
                            </p>
                            <h1 class='project-headings lower' style={styles.projectHeadingsLower}>Refactoring Project</h1>
                            <img
                                className='project-pic'
                                src={refactorImage1}
                                alt='Refactoring Project Image'
                                style={styles.projectPic}
                            />
                            <img
                                className='project-pic lower'
                                src={refactorImage2}
                                alt='Refactoring Project Image'
                                style={styles.projectPicLower}
                            />
                            <hr className='refactoring-separator' style={styles.refactoringSeparator}/>
                            <img
                                className='project-pic'
                                src={refactorImage3}
                                alt='Refactoring Project Image'
                                style={styles.projectPic}
                            />
                            <img
                                className='project-pic lower'
                                src={refactorImage4}
                                alt='Refactoring Project Image'
                                style={styles.projectPicLower}
                            />
                            <p class='project-descriptions last' style={styles.projectDescriptionsLast}>
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
            :
            <div class='project-page'>
                <div class='projects-header' style={styles.projectsHeaderMobile}>
                    <h1 class='projects-title' style={styles.projectsTitleMobile}>Projects</h1>
                </div>
                <div class='container-fluid projects-container'>
                    <div class='row'>
                        <div class='col'>
                            <h1 className='project-headings' style={styles.projectHeadings}>Portfolio Website</h1>
                            <img
                                className='project-pic'
                                src={websiteImage}
                                alt='Portfolio Website Image'
                                style={styles.projectPicMobile}
                            />
                            <p className='project-descriptions' style={styles.projectDescriptionsMobile}>
                                This website was my first personal project that I have done outside of class.
                                I used React and Bootstrap to add components and create the layout for the site. CSS
                                was then used to style those components. This project was a great way to improve my 
                                React skills while also learning how to use Bootstrap, which I had never used before. Additionally, 
                                I was able to utilize React Router in order to create routes to each page. The main
                                benefits of this project were gaining experience creating a React application, learing how to use React Router, understanding how to incorporate
                                bootstrap components, and improving my CSS skills.
                            </p>
                            <h1 className='project-headings lower' style={styles.projectHeadingsLower}>Laser Puzzle</h1>
                            <video class='project-video' style={styles.projectVideoMobile} poster={laserThumbnail} controls>
                                <source
                                    src={laserVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag
                            </video>
                            <p class='project-descriptions' style={styles.projectDescriptionsMobile}>
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
                            <h1 class='project-headings lower' style={styles.projectHeadingsLower}>Muze Music Library</h1>
                            <img
                                className='project-pic'
                                src={musicPicture}
                                alt='Muze Music Library'
                                style={styles.projectPicMobile}
                            />
                            <p class='project-descriptions' style={styles.projectDescriptionsMobile}>
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
                            <h1 className='project-headings' style={styles.projectHeadingsLower}>Web Checkers</h1>
                            <video class='project-video' style={styles.projectVideoMobile} poster={checkersThumbnail} controls>
                                <source
                                    src={checkersVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag
                            </video>
                            <p class='project-descriptions' style={styles.projectDescriptionsMobile}>
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
                            <h1 className='project-headings lower' style={styles.projectHeadingsLower}>Poker Game</h1>
                            <video class='project-video' poster={pokerThumbnail} style={styles.pokerVideoMobile} controls>
                                <source
                                    src={pokerVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag
                            </video>
                            <p class='project-descriptions' style={styles.projectDescriptionsMobile}>
                                This project is a poker game which utilizes a plain-text user interface. The 
                                user gets two cards and can choose whether or not they would like to stand. If both players
                                stand, then the best hand wins. A pair beats two of the same suit, which beats a high card. This 
                                project was built using Java. Being that this was one of my first projects, it gave me a good
                                introduction to object oriented programming as well as dealing with user input and using comparators.
                                <br></br>The video above gives a brief demonstration of the application.
                            </p>
                            <h1 class='project-headings lower' style={styles.projectHeadingsLower}>Refactoring Project</h1>
                            <img
                                className='project-pic'
                                src={refactorImage1}
                                alt='Refactoring Project Image'
                                style={styles.projectPicMobile}
                            />
                            <img
                                className='project-pic lower'
                                src={refactorImage2}
                                alt='Refactoring Project Image'
                                style={styles.projectPicLowerMobile}
                            />
                            <hr className='refactoring-separator' style={styles.refactoringSeparator}/>
                            <img
                                className='project-pic'
                                src={refactorImage3}
                                alt='Refactoring Project Image'
                                style={styles.projectPicMobile}
                            />
                            <img
                                className='project-pic lower'
                                src={refactorImage4}
                                alt='Refactoring Project Image'
                                style={styles.projectPicLowerMobile}
                            />
                            <p class='project-descriptions last' style={styles.projectDescriptionsLastMobile}>
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
            }
        </div>
    )
}

export default Projects;
