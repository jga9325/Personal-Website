import React, {useState, useEffect} from 'react';
import ContactForm from './ContactForm.js';
import gmailImage from '../Gmail.png';
import linkedinImage from '../Linkedin.png';

const Contact = () => {

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

        contactForm: {
            textAlign: 'center',
            margin: 'auto'
          },
          
        inputRow: {
            width: '500px',
            marginBottom: '20px',
            borderRadius: '3px',
            height: '200px',
            border: '2px solid #2F4F4F'
          },
          
        inputRowText: {
            height: '35px',
            border: '2px solid #2F4F4F',
            width: '500px',
            marginBottom: '20px',
            borderRadius: '3px'
          },
          
        sendButton: {
            width: '125px',
            backgroundColor: 'rgb(238, 58, 58)',
            color: 'white',
            height: '40px',
            borderRadius: '10px',
            border: '2px solid black',
            fontSize: '20px',
            fontWeight: 'bold',
          },
          
        contactTitle: {
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

          contactTitleMobile: {
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
          
        contactHeader: {
            paddingTop: '30px',
            paddingBottom: '60px'
          },

          contactHeaderMobile: {
            paddingTop: '10px',
            paddingBottom: '60px'
          },
          
        contactImage: {
            width: '200px'
          },
          
        contactBackground: {
            backgroundColor: 'white',
            width: '400px',
            height: '400px',
            margin: 'auto',
            borderRadius: '20px',
            border: '2px solid black'
          },

          contactBackgroundMobile: {
            backgroundColor: 'white',
            width: '95%',
            height: '400px',
            margin: 'auto',
            borderRadius: '20px',
            border: '2px solid black'
          },
          
        contactImageTextTop: {
            marginBottom: '40px',
            fontWeight: 'bold'
          },
          
        contactImageTop: {
            paddingTop: '10px',
            width: '200px'
          },
          
        contactInfoText: {
            color: 'white',
            width: '600px',
            margin: 'auto'
          },

          contactInfoTextMobile: {
            color: 'white',
            width: '95%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px'
    
          },
          
        modalTitle: {
            margin: 'auto'
          },
          
        connectButton: {
            width: '125px',
            backgroundColor: 'rgb(113, 115, 121)',
            color: 'white',
            height: '40px',
            borderRadius: '10px',
            border: '2px solid black',
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '59px'
          }
    }

    return (
        <div>
            {width >= WIDTH ?
            <div class='contact-page'>
                <div class='container-fluid contact-container'>
                    <div class='contact-header' style={styles.contactHeader}>
                        <h1 class='contact-title' style={styles.contactTitle}>Contact Me</h1>
                    </div>
                    <div class='row'>
                        <div class='col'>
                            <div class='contact-background' style={styles.contactBackground}>
                                <img
                                    className='contact-image top'
                                    src={gmailImage}
                                    alt='Gmail Logo'
                                    style={styles.contactImageTop}
                                />
                                <p class='contact-image-text top' style={styles.contactImageTextTop}>jga9325@rit.edu</p>
                                <img
                                    className='contact-image'
                                    src={linkedinImage}
                                    alt='Linkedin Logo'
                                    style={styles.contactImage}
                                />
                                <div>
                                    <a type="button" style={styles.connectButton} class="btn border-dark border-2" className='connect-button' href="https://www.linkedin.com/in/jacob-auger-628598190/" target='_blank'>Connect</a>
                                </div>
                            </div>
                        </div>
                        <div class='col'>
                            <p class='contact-info-text' style={styles.contactInfoText}>Please contact me by email using my email address listed to the left or by
                                typing your message into the form below. Also, make
                                sure to connect with me on Linkedin!<br></br><br></br>
                            </p>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div class='contact-page'>
                <div class='container-fluid contact-container'>
                    <div class='contact-header' style={styles.contactHeaderMobile}>
                        <h1 class='contact-title' style={styles.contactTitleMobile}>Contact Me</h1>
                    </div>
                    <div class='row'>
                        <div class='col'>
                            <div class='contact-background' style={styles.contactBackgroundMobile}>
                                <img
                                    className='contact-image top'
                                    src={gmailImage}
                                    alt='Gmail Logo'
                                    style={styles.contactImageTop}
                                />
                                <p class='contact-image-text top' style={styles.contactImageTextTop}>jga9325@rit.edu</p>
                                <img
                                    className='contact-image'
                                    src={linkedinImage}
                                    alt='Linkedin Logo'
                                    style={styles.contactImage}
                                />
                                <div>
                                    <a type="button" style={styles.connectButton} class="btn border-dark border-2" className='connect-button' href="https://www.linkedin.com/in/jacob-auger-628598190/" target='_blank'>Connect</a>
                                </div>
                            </div>
                        </div>
                        <div class='col'>
                            <p class='contact-info-text' style={styles.contactInfoTextMobile}>Please contact me by email using my email address listed to the left or by
                                typing your message into the form below. Also, make
                                sure to connect with me on Linkedin!<br></br><br></br>
                            </p>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Contact;
