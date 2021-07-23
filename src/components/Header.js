import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import avatarImage from '../Avatar.png';

const Header = () => {

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

        avatarImage: {
            width: '251px',
            paddingTop: '50px'
        },

        banner: {
            backgroundColor: 'black',
            opacity: .8,
            width: '55%',
            borderRadius: '10px',
            paddingBottom: '10px',
            color: 'white',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginTop: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '50px'
          },

          bannerMobile: {
            backgroundColor: 'black',
            opacity: .8,
            width: '85%',
            borderRadius: '10px',
            paddingBottom: '10px',
            color: 'white',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginTop: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '50px'
          },

          myName: {
            fontWeight: 'bold'
          },

          major: {
            color: '#6495ED',
            paddingBottom: '5px'
          },

          bannerH1:  {
            lineHeight: 'normal'
          },

          bannerHr: {
            border: '1px solid white',
            backgroundColor: 'white'
          },

          btnDanger: {
            width: '130px',
            height: '45px',
            fontSize: '20px'
          },

          mainInfo: {
              textAlign: 'center'
          }
    }




    return (
        <div>
            {width >= WIDTH ?
            <div className="main-info" style={styles.mainInfo}>
                <div className='header-container'>
                    <img
                        src={avatarImage}
                        alt="avatar"
                        className="avatar-image"
                        style={styles.avatarImage}
                    />
                    <div className="banner" style={styles.banner}>
                        <h1 className="my-name" style={styles.bannerH1, styles.myName}>Jacob Auger</h1>
                        <h1 className="major" style={styles.bannerH1, styles.major}>Software Engineering Student</h1>
                        <hr className='header-horizontal-line' style={styles.bannerHr}/>
                        <p>
                            Welcome to my personal website! Feel free to browse the site to learn more about my background, projects, and skills. If you have any questions, don't hesitate to contact me.
                        </p>
                        <Link class="btn btn-danger" to="/contactme" style={styles.btnDanger}>Contact Me</Link>
                    </div>
                </div>
            </div>
            :
            <div>
                <div className="main-info" style={styles.mainInfo}>
                <div className='header-container'>
                    <img
                        src={avatarImage}
                        alt="avatar"
                        className="avatar-image"
                        style={styles.avatarImage}
                    />
                    <div className="banner" style={styles.bannerMobile}>
                        <h1 className="my-name" style={styles.bannerH1, styles.myName}>Jacob Auger</h1>
                        <h1 className="major" style={styles.bannerH1, styles.major}>Software Engineering Student</h1>
                        <hr className='header-horizontal-line' style={styles.bannerHr}/>
                        <p>
                            Welcome to my personal website! Feel free to browse the site to learn more about my background, projects, and skills. If you have any questions, don't hesitate to contact me.
                        </p>
                        <Link class="btn btn-danger" to="/contactme" style={styles.btnDanger}>Contact Me</Link>
                    </div>
                </div>
            </div>
            </div>
            }       
        </div>
    )
}

export default Header;