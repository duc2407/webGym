import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';
function Join() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pe32xeo', 'template_vvdzuzb', form.current, '5whkuGbQnEfcdNbln')
          .then((result) => {
              console.log(result.text);
              alert('The Fit Club đã gửi email. Vui lòng kiểm tra lại Email! của bạn!');
          }, (error) => {
              console.log(error.text);
          });
    };

  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className="stroke-text">READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className="stroke-text">WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder="Enter your Email address"/>
                <button type="submit" value="Send" className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join