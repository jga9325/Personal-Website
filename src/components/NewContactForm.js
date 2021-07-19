import React, {Component} from 'react';
import emailjs from 'emailjs-com';

class NewContactForm extends React.Component {
    constructor() {
        super();
        this.state = {show: false};
    }

    sendEmail(e) {
        console.log("HELLO");
        e.preventDefault();
    
        emailjs.sendForm('service_jw3bs8e', 'template_thdp80y', e.target, 'user_adj5dydFiHlPF7L1YNHC4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          this.setState({show: true});
      }

      render() {
        return (
            <div>
              <form className="contact-form" onSubmit={() => this.sendEmail()}>
                <input className='input-row text' type="text" name="name" placeholder='Name' required/><br></br>
                <input className='input-row text' type="email" name="email" placeholder='Email Address' required/><br></br>
                <textarea className='input-row' name="message" placeholder='Message' required/><br></br>
                <input className='send-button' type="submit" value="Send"/>
              </form>
              <div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" show={this.state.show}>
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="successModalLabel">Message Sent Successfully</h5>
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
          );
      }

}

export default NewContactForm;