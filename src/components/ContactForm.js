import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
//import $ from 'jquery';

export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jw3bs8e', 'template_thdp80y', e.target, 'user_adj5dydFiHlPF7L1YNHC4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          window.$('.modal').modal('show');
      }

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

      inputRowMobile: {
        width: '95%',
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

      inputRowTextMobile: {
        height: '35px',
        border: '2px solid #2F4F4F',
        width: '95%',
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
        marginBottom: '59px'
      },

      modalTitle: {
        margin: 'auto'
      },
    }

      return (
        <div>
          {width >= WIDTH ?
          <div>
            <form className="contact-form" style={styles.contactForm} onSubmit={sendEmail}>
              <input className='input-row text' style={styles.inputRowText} type="text" name="name" placeholder='Name' required/><br></br>
              <input className='input-row text' style={styles.inputRowText} type="email" name="email" placeholder='Email Address' required/><br></br>
              <textarea className='input-row' style={styles.inputRow} name="message" placeholder='Message' required/><br></br>
              <input className='send-button' style={styles.sendButton} type="submit" value="Send"/>
            </form>
            <div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" style={styles.modalTitle} id="successModalLabel">Message Sent Successfully</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Thank you for sending me a message! I will get back to you as soon as I can.</p>
                  </div>
                  <div class="modal-footer">
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div>
            <form className="contact-form" style={styles.contactForm} onSubmit={sendEmail}>
              <input className='input-row text' style={styles.inputRowTextMobile} type="text" name="name" placeholder='Name' required/><br></br>
              <input className='input-row text' style={styles.inputRowTextMobile} type="email" name="email" placeholder='Email Address' required/><br></br>
              <textarea className='input-row' style={styles.inputRowMobile} name="message" placeholder='Message' required/><br></br>
              <input className='send-button' style={styles.sendButton} type="submit" value="Send"/>
            </form>
            <div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" style={styles.modalTitle} id="successModalLabel">Message Sent Successfully</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Thank you for sending me a message! I will get back to you as soon as I can.</p>
                  </div>
                  <div class="modal-footer">
                  </div>
                </div>
              </div>
            </div>
          </div>
          }
        </div>

      );
}