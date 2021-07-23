import React, {useState, useEffect} from 'react';
import starImage from '../Star.png';
import javaImage from '../Java.png';
import pythonImage from '../Python.png';
import jsImage from '../JavaScript.png';
import htmlImage from '../HTML.png';
import cImage from '../C.png';
import reactImage from '../React.png';
import cssImage from '../CSS.png';
import sqlImage from '../SQL.png';
import postgresImage from '../Postgres.png';
import gitImage from '../Git.png';
import bootstrapImage from '../Bootstrap.png';
import pycharmImage from '../PyCharm.png';
import vsCodeImage from '../VSCode.png';
import intelliJImage from '../IntelliJ.png';
import lightBulbImage from '../LightBulb.png';
import commImage from '../Communication.png';
import bookImage from '../Book.png';

const Skills = () => {

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

        skillsTitle: {
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

          skillsTitleMobile: {
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
          
          technicalSkills: {
            paddingTop: '30px',
            paddingBottom: '40px'
          },

          technicalSkillsMobile: {
            paddingTop: '10px',
            paddingBottom: '40px'
          },
          
          skillImage: {
            width: '160px',
            paddingBottom: '10px'
          },

          skillImageMobile: {
            width: '100%',
            paddingBottom: '10px'
          },
          
          star: {
            width: '50px',
            paddingBottom: '30px'
          },

          starMobile: {
            width: '20%',
            paddingBottom: '30px'
          },
          
          col: {
            textAlign: 'center',
            verticalAlign: 'center'
          },
          
          python: {
            width: '180px',
            paddingTop: '67px'
          },

          pythonMobile: {
            width: '100%',
            paddingTop: '53px',
            paddingBottom: '16px'
          },
          
          java: {
            paddingTop: '21px'
          },
          
          js: {
            paddingTop: '10px'
          },
          
          elements: {
            backgroundColor: 'lightgray'
          },
          
          html: {
            width: '100px',
            paddingTop: '10px'
          },

          htmlMobile: {
            width: '63%',
            paddingBottom: '10px'
          },
          
          pythonSkill: {
            borderRadius: '40px'
          },
          
          htmlSkill: {
            borderRadius: '40px',
            paddingTop: '10px'
          },
          
          allSkills: {
            backgroundImage: "url('https://www.fbcruss.org/wp-content/uploads/2015/05/white-abstract-wallpapers-desktop-background.jpg')",
            backgroundSize: '1400px 800px',
            borderRadius: '50px',
            border: '3px solid black',
            width: '1100px',
            margin: 'auto'
          },
          
          allSkillsMobile: {
            backgroundImage: "url('https://www.fbcruss.org/wp-content/uploads/2015/05/white-abstract-wallpapers-desktop-background.jpg')",
            backgroundSize: '1400px 800px',
            borderRadius: '40px',
            border: '3px solid black',
            width: '95%',
            margin: 'auto'
          },

          skillImageCss: {
            width: '70px',
            paddingTop: '16px'
          },

          skillImageCssMobile: {
            width: '43%',
            paddingTop: '11px',
            paddingBottom: '10px'
          },
          
          skillImageReact: {
            width: '170px',
            paddingTop: '35px'
          },

          skillImageReactMobile: {
            width: '100%',
            paddingTop: '33px',
            paddingRight: '5px',
            paddingBottom: '10px'
          },
          
          skillImageSql: {
            paddingTop: '20px',
            width: '160px',
            paddingBottom: '10px'
          },

          skillImageSqlMobile: {
            paddingTop: '20px',
            width: '100%',
            paddingBottom: '10px'
          },
          
          skillImageC: {
            width: '100px',
            paddingTop: '15px',
          },

          skillImageCMobile: {
            width: '60%',
            paddingTop: '9px',
            paddingBottom: '10px'
          },
          
          skillImageIde: {
            width: '150px',
            paddingBottom: 0,
            paddingTop: 0,
            marginTop: 0
          },

          skillImageIdeMobile: {
            width: '90%',
            paddingBottom: 0,
            paddingTop: 0,
            marginTop: 0
          },
          
          skillsContainer: {
            paddingBottom: '50px'
          },
          
          skillImageGit: {
            paddingTop: '71px',
            width: '140px'
          },

          skillImageGitMobile: {
            paddingTop: '49px',
            width: '85%'
          },
          
          skillImagePostgres: {
            paddingTop: '52px',
            width: '170px'
          },

          skillImagePostgresMobile: {
            paddingTop: '55px',
            width: '90%'
          },
          
          skillImageBootstrap: {
            width: '140px',
            paddingTop: '33px'
          },

          skillImageBootstrapMobile: {
            width: '85%',
            paddingTop: '15px'
          },
          
          personalSkillsTitle: {
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

          personalSkillsTitleMobile: {
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
          
          otherSkills: {
            backgroundImage: "url('https://www.fbcruss.org/wp-content/uploads/2015/05/white-abstract-wallpapers-desktop-background.jpg')",
            backgroundSize: '1400px 800px',
            borderRadius: '50px',
            border: '3px solid black',
            width: '1100px',
            margin: 'auto'
          },

          otherSkillsMobile: {
            backgroundImage: "url('https://www.fbcruss.org/wp-content/uploads/2015/05/white-abstract-wallpapers-desktop-background.jpg')",
            backgroundSize: '1400px 800px',
            borderRadius: '40px',
            border: '3px solid black',
            width: '95%',
            margin: 'auto'
          },
          
          personalSkillsContainer: {
            paddingBottom: '50px'
          },
          
          personalSkills: {
            paddingBottom: '40px'
          },
          
          personalImage: {
            width: '80px',
            paddingTop: '10px'
          },
          
          personalImageQuickLearner: {
            width: '140px',
            paddingTop: '60px'
          },

          personalImageQuickLearnerMobile: {
            width: '90%',
            paddingTop: '35px'
          },
          
          personalImageProblemSolving: {
            paddingTop: '32px',
            width: '80px'
          },

          personalImageProblemSolvingMobile: {
            paddingTop: '33px',
            width: '60%'
          },
          
          personalImageCommunication: {
            width: '128px',
            marginTop: '39px'
          },

          personalImageCommunicationMobile: {
            width: '60%',
            marginTop: '38px'
          },
          
          personalImageLeadership: {
            paddingTop: '24px',
            width: '80px'
          },

          personalImageLeadershipMobile: {
            paddingTop: '24px',
            width: '60%'
          },

          personalSkillsColRight: {
            textAlign: 'center',
            verticalAlign: 'center',
            paddingLeft: '0px',
            paddingBottom: '15px'
          }

    }

    return (
        <div>
            {width >= WIDTH ?
            <div className='skills-page'>
                <div className='technical-skills' style={styles.technicalSkills}>
                    <h1 class='skills-title' style={styles.skillsTitle}>Technical Skills</h1>
                </div>
                <div class='skills-container container-fluid' style={styles.skillsContainer}>
                    <div class='all-skills' style={styles.allSkills}>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <div class='java-skill' style={styles.java}>
                                <img
                                    className='skill-image java'
                                    src={javaImage}
                                    alt='Java'
                                    style={styles.skillImage}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='python-skill'>
                                <img
                                className='skill-image python'
                                src={pythonImage}
                                alt='Python'
                                style={styles.python}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='html-skill' style={styles.htmlSkill}>
                                <img
                                className='skill-image html'
                                src={htmlImage}
                                alt='HTML/CSS'
                                style={styles.html}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='js-skill' style={styles.js}>
                                <img
                                className='skill-image js'
                                src={jsImage}
                                alt='JavaScript'
                                style={styles.skillImage}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <div class='css-skill'>
                                <img
                                    className='skill-image css'
                                    src={cssImage}
                                    alt='CSS'
                                    style={styles.skillImageCss}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='react-skill'>
                                <img
                                className='skill-image react'
                                src={reactImage}
                                alt='React'
                                style={styles.skillImageReact}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='sql-skill'>
                                <img
                                className='skill-image sql'
                                src={sqlImage}
                                alt='SQL'
                                style={styles.skillImageSql}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='c-skill'>
                                <img
                                className='skill-image c'
                                src={cImage}
                                alt='C'
                                style={styles.skillImageC}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <div class='bootstrap-skill'>
                                <img
                                    className='skill-image bootstrap'
                                    src={bootstrapImage}
                                    alt='Bootstrap'
                                    style={styles.skillImageBootstrap}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='git-skill'>
                                <img
                                className='skill-image git'
                                src={gitImage}
                                alt='Git'
                                style={styles.skillImageGit}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='postgres-skill'>
                                <img
                                className='skill-image postgres'
                                src={postgresImage}
                                alt='Postgres'
                                style={styles.skillImagePostgres}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <img
                                className='skill-image ide'
                                src={pycharmImage}
                                alt='IDE'
                                style={styles.skillImageIde}
                                />
                                <img
                                className='skill-image ide'
                                src={intelliJImage}
                                alt='IDE'
                                style={styles.skillImageIde}
                                />
                                <img
                                className='skill-image ide'
                                src={vsCodeImage}
                                alt='IDE'
                                style={styles.skillImageIde}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.star}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='personal-skills' style={styles.personalSkills}>
                    <h1 class='personal-skills-title' style={styles.personalSkillsTitle}>Personal Skills</h1>
                </div>
                <div class='personal-skills-container container-fluid' style={styles.personalSkillsContainer}>
                    <div class='other-skills' style={styles.otherSkills}>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <img
                                    className='personal-image leadership'
                                    src='https://www.seekpng.com/png/full/208-2088272_icon-50801-leadership-clipart-black-and-white.png'
                                    alt='Leadership'
                                    style={styles.personalImageLeadership}
                                />
                                <h4>Leadership</h4>
                            </div>
                            <div class='col' style={styles.col}>
                                <img
                                    className='personal-image problem-solving'
                                    src={lightBulbImage}
                                    alt='Problem Solving'
                                    style={styles.personalImageProblemSolving}
                                />
                                <h4>Problem Solving</h4>
                            </div>
                            <div class='col' style={styles.col}>
                                <img
                                    className='personal-image quick-learner'
                                    src={bookImage}
                                    alt='Quick Learner'
                                    style={styles.personalImageQuickLearner}
                                />
                                <h4>Quick Learner</h4>
                            </div>
                            <div class='col' style={styles.col}>
                                <img
                                    className='personal-image communication'
                                    src={commImage}
                                    alt='Communication'
                                    style={styles.personalImageCommunication}
                                />
                                <h4>Communication</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div>
                <div className='technical-skills' style={styles.technicalSkillsMobile}>
                    <h1 class='skills-title' style={styles.skillsTitleMobile}>Technical Skills</h1>
                </div>
                <div class='skills-container container-fluid' style={styles.skillsContainer}>
                    <div class='all-skills' style={styles.allSkillsMobile}>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <div class='java-skill' style={styles.java}>
                                <img
                                    className='skill-image java'
                                    src={javaImage}
                                    alt='Java'
                                    style={styles.skillImageMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='python-skill'>
                                <img
                                className='skill-image python'
                                src={pythonImage}
                                alt='Python'
                                style={styles.pythonMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <div class='html-skill' style={styles.htmlSkill}>
                                <img
                                className='skill-image html'
                                src={htmlImage}
                                alt='HTML/CSS'
                                style={styles.htmlMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='js-skill' style={styles.js}>
                                <img
                                className='skill-image js'
                                src={jsImage}
                                alt='JavaScript'
                                style={styles.skillImageMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <div class='css-skill'>
                                <img
                                    className='skill-image css'
                                    src={cssImage}
                                    alt='CSS'
                                    style={styles.skillImageCssMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='react-skill'>
                                <img
                                className='skill-image react'
                                src={reactImage}
                                alt='React'
                                style={styles.skillImageReactMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <div class='sql-skill'>
                                <img
                                className='skill-image sql'
                                src={sqlImage}
                                alt='SQL'
                                style={styles.skillImageSqlMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='c-skill'>
                                <img
                                className='skill-image c'
                                src={cImage}
                                alt='C'
                                style={styles.skillImageCMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <div class='bootstrap-skill'>
                                <img
                                    className='skill-image bootstrap'
                                    src={bootstrapImage}
                                    alt='Bootstrap'
                                    style={styles.skillImageBootstrapMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <div class='git-skill'>
                                <img
                                className='skill-image git'
                                src={gitImage}
                                alt='Git'
                                style={styles.skillImageGitMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <div class='postgres-skill'>
                                <img
                                className='skill-image postgres'
                                src={postgresImage}
                                alt='Postgres'
                                style={styles.skillImagePostgresMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                                </div>
                            </div>
                            <div class='col' style={styles.col}>
                                <img
                                className='skill-image ide'
                                src={pycharmImage}
                                alt='IDE'
                                style={styles.skillImageIdeMobile}
                                />
                                <img
                                className='skill-image ide'
                                src={intelliJImage}
                                alt='IDE'
                                style={styles.skillImageIdeMobile}
                                />
                                <img
                                className='skill-image ide'
                                src={vsCodeImage}
                                alt='IDE'
                                style={styles.skillImageIdeMobile}
                                />
                                <div>
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                    <img
                                        className='star'
                                        src={starImage}
                                        alt='star'
                                        style={styles.starMobile}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='personal-skills' style={styles.personalSkills}>
                    <h1 class='personal-skills-title' style={styles.personalSkillsTitleMobile}>Personal Skills</h1>
                </div>
                <div class='personal-skills-container container-fluid' style={styles.personalSkillsContainer}>
                    <div class='other-skills' style={styles.otherSkillsMobile}>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <img
                                    className='personal-image leadership'
                                    src='https://www.seekpng.com/png/full/208-2088272_icon-50801-leadership-clipart-black-and-white.png'
                                    alt='Leadership'
                                    style={styles.personalImageLeadershipMobile}
                                />
                                <h5>Leadership</h5>
                            </div>
                            <div class='col' style={styles.col}>
                                <img
                                    className='personal-image problem-solving'
                                    src={lightBulbImage}
                                    alt='Problem Solving'
                                    style={styles.personalImageProblemSolvingMobile}
                                />
                                <h5>Problem Solving</h5>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col' style={styles.col}>
                                <img
                                    className='personal-image quick-learner'
                                    src={bookImage}
                                    alt='Quick Learner'
                                    style={styles.personalImageQuickLearnerMobile}
                                />
                                <h5>Quick Learner</h5>
                            </div>
                            <div class='col' style={styles.personalSkillsColRight}>
                                <img
                                    className='personal-image communication'
                                    src={commImage}
                                    alt='Communication'
                                    style={styles.personalImageCommunicationMobile}
                                />
                                <h5>Communication</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Skills;