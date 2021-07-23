import React from 'react';
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
    return (
        <div className='skills-page'>
            <div className='technical-skills'>
                <h1 class='skills-title'>Technical Skills</h1>
            </div>
            <div class='skills-container container-fluid'>
                <div class='all-skills'>
                    <div class='row'>
                        <div class='col'>
                            <div class='java-skill'>
                            <img
                                className='skill-image java'
                                src={javaImage}
                                alt='Java'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                        <div class='col'>
                            <div class='python-skill'>
                            <img
                            className='skill-image python'
                            src={pythonImage}
                            alt='Python'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                        <div class='col'>
                            <div class='html-skill'>
                            <img
                            className='skill-image html'
                            src={htmlImage}
                            alt='HTML/CSS'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                        <div class='col'>
                            <div class='js-skill'>
                            <img
                            className='skill-image js'
                            src={jsImage}
                            alt='JavaScript'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col'>
                            <div class='css-skill'>
                            <img
                                className='skill-image css'
                                src={cssImage}
                                alt='CSS'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                        <div class='col'>
                            <div class='react-skill'>
                            <img
                            className='skill-image react'
                            src={reactImage}
                            alt='React'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                        <div class='col'>
                            <div class='sql-skill'>
                            <img
                            className='skill-image sql'
                            src={sqlImage}
                            alt='SQL'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                        <div class='col'>
                            <div class='c-skill'>
                            <img
                            className='skill-image c'
                            src={cImage}
                            alt='C'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col'>
                            <div class='bootstrap-skill'>
                            <img
                                className='skill-image bootstrap'
                                src={bootstrapImage}
                                alt='Bootstrap'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                        <div class='col'>
                            <div class='git-skill'>
                            <img
                            className='skill-image git'
                            src={gitImage}
                            alt='Git'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                        <div class='col'>
                            <div class='postgres-skill'>
                            <img
                            className='skill-image postgres'
                            src={postgresImage}
                            alt='Postgres'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                            </div>
                        </div>
                        <div class='col'>
                            <img
                            className='skill-image ide'
                            src={pycharmImage}
                            alt='IDE'
                            />
                            <img
                            className='skill-image ide'
                            src={intelliJImage}
                            alt='IDE'
                            />
                            <img
                            className='skill-image ide'
                            src={vsCodeImage}
                            alt='IDE'
                            />
                            <div>
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                                <img
                                    className='star'
                                    src={starImage}
                                    alt='star'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='personal-skills'>
                <h1 class='personal-skills-title'>Personal Skills</h1>
            </div>
            <div class='personal-skills-container container-fluid'>
                <div class='other-skills'>
                    <div class='row'>
                        <div class='col'>
                            <img
                                className='personal-image leadership'
                                src='https://www.seekpng.com/png/full/208-2088272_icon-50801-leadership-clipart-black-and-white.png'
                                alt='Leadership'
                            />
                            <h4>Leadership</h4>
                        </div>
                        <div class='col'>
                            <img
                                className='personal-image problem-solving'
                                src={lightBulbImage}
                                alt='Problem Solving'
                            />
                            <h4>Problem Solving</h4>
                        </div>
                        <div class='col'>
                            <img
                                className='personal-image quick-learner'
                                src={bookImage}
                                alt='Quick Learner'
                            />
                            <h4>Quick Learner</h4>
                        </div>
                        <div class='col'>
                            <img
                                className='personal-image communication'
                                src={commImage}
                                alt='Communication'
                            />
                            <h4>Communication</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;