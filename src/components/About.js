import React, {useState, useEffect} from 'react';
import image from "../Profile Pic.jpeg";
import gardenImage from "../Garden Picture.jpeg";
import teamPic from "../Soccer Team Picture.jpeg";
import ritLogo from "../RIT Logo.png";

const About = () => {

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
        card: {
            width: '250px',
            marginTop: '15px',
            border: '3px solid black',
            marginLeft: 'auto',
            marginRight: 'auto'
        },

        cardTitle: {
            color: '#6495ED'
        },

        soccerImg: {
            width: '410px',
            marginTop: '15px'
        },

        soccerImgMobile: {
            width: '100%',
            marginTop: '15px'
        },

        textBox: {
            marginTop: '10px',
            color: 'white'
        },
          
        textBoxH1: {
            marginBottom: '20px',
            borderBottom: '2px solid white',
            width: '200px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
          
        gardenImg: {
            width: '410px',
            marginBottom: '3px',
            marginTop: '20px'
        },

        gardenImgMobile: {
            width: '100%',
            marginBottom: '3px'
        },
          
        ritLogo: {
            width: '225px',
            marginTop: '25px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
        },
          
        figureText: {
            color: 'white',
            fontSize: '12px'
        },

        figureTextMobile: {
            color: 'white',
            fontSize: '12px',
            width: '100%'
        },

        imgBorder: {
            border: '4px solid black'
        },

        cardBody: {
            borderTop: '3px solid black'
        },
    }

    return (
        <div>
            {width >= WIDTH ?
            <div class='about-page container-fluid'>
                <div class='row'>
                    <div class='col-md-auto'>
                        <div class="card bg-dark text-white" style={styles.card}>
                            <img
                                className="card-image"
                                src={image}
                                alt="photo of me"
                            />
                            <div class='card-body' style={styles.cardBody}>
                                <h4 class='card-title' style={styles.cardTitle}>Jacob Auger</h4>
                                <p class='card-text'>
                                    School: RIT<br/>
                                    Major: Software Engineering<br/>
                                    Year: 3rd<br/>
                                    GPA: 3.6<br/>
                                    Potential: Unlimited
                                </p>
                            </div>
                        </div>
                        <img
                            class='rit-logo'
                            src={ritLogo}
                            alt='RIT Logo'
                            style={styles.ritLogo}
                        />
                    </div>
                    <div class='col'>
                        <div className='text-box' style={styles.textBox}>
                            <h1 style={styles.textBoxH1}>About Me</h1>
                            <p>
                                Currently, I am a third year Software Engineering 
                                student at the Rochester Institude of Technology in upstate New York.
                                However, I grew up and attended high school in the Lehigh Valley, which is located in 
                                eastern Pennsylvania. I am a hardworking individual and I'm very competitive. I strive to be
                                the best in everything that I do and I'm always looking to learn more 
                                and improve myself. 
                            </p><br/>
                            <p>
                                Soccer has always been a large part of my life. I started playing when 
                                I was five years old and have continued throughout the years, playing on travel teams,
                                for my high school, and now for the RIT Men's Club Soccer Team. Not only has
                                this sport allowed me to meet my best friends and interact with so many great people,
                                but it also has afforded me the opportunity to realize and improve my leadership abilities. 
                                I was one of the captains of my high school varsity team my senior year, and I am
                                currently a member of the executive board for my college club team. These opportunities
                                have provided me an opportunity to gain a vital skill that I hope to transfer
                                into my career as a software engineer.
                    
                            </p><br/>
                            <p>
                                I also learned leadership skills while becoming an Eagle Scout. For my Eagle Project
                                I constructed raised bed gardens for the youth group at my church so that they could
                                learn about gardening and grow fresh vegetables. This included leading a group of 15 people 
                                over the course of three days. Additionally, I was able to secure funding to cover 100%
                                of the project's cost through fundraising.
                            </p><br/>
                            <p>
                                I am an active person and I like to try new things. In my free time I 
                                like to play soccer, go skiing, play disc golf, go to the gym, watch boxing/UFC fights, listen to music, and hang out with friends. I also
                                spend time improving my programming skills through courses and projects such
                                as this website. The next big goal that I plan to achieve is to obtain a co-op
                                for the Spring of 2022.
                            </p>
                        </div>
                    </div>
                    <div class='right-col col-md-auto'>
                        <div>
                        <div class='soccer-img figure' style={styles.soccerImg}>
                                <img src={teamPic} class='figure-img img-fluid rounded' alt='soccer team' style={styles.imgBorder}></img>
                            <p class='figure-text' style={styles.figureText}>
                                I am entering my third year with the RIT Men's Club Soccer Team.
                                In addition to playing, I also serve on the executive board in order
                                to help make decisions that will benefit the club and players.
                            </p>
                        </div>
                        </div>
                        <div class='garden-img figure' style={styles.gardenImg}>
                            <img src={gardenImage} class='figure-img img-fluid rounded' alt='garden' style={styles.imgBorder}></img>
                            <p class='figure-text' style={styles.figureText}>
                                The leaves on the fence were 
                                laser engraved with the names of families and businesses
                                who sponsered the project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div class='about-page container-fluid'>
                <div class='row'>
                    <div class='col-md-auto'>
                        <div class="card bg-dark text-white border-dark border-4" style={styles.card}>
                            <img
                                className="card-image"
                                src={image}
                                alt="photo of me"
                            />
                            <div class='card-body'>
                                <h4 class='card-title' style={styles.cardTitle}>Jacob Auger</h4>
                                <p class='card-text'>
                                    School: RIT<br/>
                                    Major: Software Engineering<br/>
                                    Year: 3rd<br/>
                                    GPA: 3.6<br/>
                                    Potential: Unlimited
                                </p>
                            </div>
                        </div>
                        <img
                            class='rit-logo'
                            src={ritLogo}
                            alt='RIT Logo'
                            style={styles.ritLogo}
                        />
                    </div>
                    <div class='col'>
                        <div className='text-box' style={styles.textBox}>
                            <h1 style={styles.textBoxH1}>About Me</h1>
                            <p>
                                Currently, I am a third year Software Engineering 
                                student at the Rochester Institude of Technology in upstate New York.
                                However, I grew up and attended high school in the Lehigh Valley, which is located in 
                                eastern Pennsylvania. I am a hardworking individual and I'm very competitive. I strive to be
                                the best in everything that I do and I'm always looking to learn more 
                                and improve myself. 
                            </p><br/>
                            <p>
                                Soccer has always been a large part of my life. I started playing when 
                                I was five years old and have continued throughout the years, playing on travel teams,
                                for my high school, and now for the RIT Men's Club Soccer Team. Not only has
                                this sport allowed me to meet my best friends and interact with so many great people,
                                but it also has afforded me the opportunity to realize and improve my leadership abilities. 
                                I was one of the captains of my high school varsity team my senior year, and I am
                                currently a member of the executive board for my college club team. These opportunities
                                have provided me an opportunity to gain a vital skill that I hope to transfer
                                into my career as a software engineer.
                    
                            </p><br/>
                            <p>
                                I also learned leadership skills while becoming an Eagle Scout. For my Eagle Project
                                I constructed raised bed gardens for the youth group at my church so that they could
                                learn about gardening and grow fresh vegetables. This included leading a group of 15 people 
                                over the course of three days. Additionally, I was able to secure funding to cover 100%
                                of the project's cost through fundraising.
                            </p><br/>
                            <p>
                                I am an active person and I like to try new things. In my free time I 
                                like to play soccer, go skiing, play disc golf, go to the gym, watch boxing/UFC fights, listen to music, and hang out with friends. I also
                                spend time improving my programming skills through courses and projects such
                                as this website. The next big goal that I plan to achieve is to obtain a co-op
                                for the Spring of 2022.
                            </p>
                        </div>
                    </div>
                    <div class='right-col col-md-auto'>
                        <div>
                        <div class='soccer-img figure' style={styles.soccerImgMobile}>
                            <img src={teamPic} class='figure-img img-fluid rounded border border-dark border-4' alt='soccer team'></img>
                            <p class='figure-text' style={styles.figureTextMobile}>
                                I am entering my third year with the RIT Men's Club Soccer Team.
                                In addition to playing, I also serve on the executive board in order
                                to help make decisions that will benefit the club and players.
                            </p>
                        </div>
                        </div>
                        <div class='garden-img figure' style={styles.gardenImgMobile}>
                            <img src={gardenImage} class='figure-img img-fluid rounded border border-dark border-4' alt='garden'></img>
                            <p class='figure-text' style={styles.figureTextMobile}>
                                The leaves on the fence were 
                                laser engraved with the names of families and businesses
                                who sponsered the project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default About;
