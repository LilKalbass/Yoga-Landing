import React, {useState, useEffect, useRef} from 'react';

import emailjs from '@emailjs/browser'

const Contact = () => {
  const [emailMesg, setEmailMesg] = useState('');
  const [emailColor, setEmailColor] = useState('');

  useEffect(() => {
      const timer = setTimeout(() => {
          setEmailMesg('');
      }, 3000);

      return () => {
          clearTimeout(timer);
      };
  }, [emailMesg]);

  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9kre3ur', 'template_87l8sk6',
            form.current, 'ZQx1FI4l3teXxInzT')
            .then((result) => {
                setEmailMesg('Your email was successfully sent')
                setEmailColor('green')
            }, (error) => {
                setEmailMesg('Your email wasn`t sent')
                setEmailColor('red')
            });
        e.target.reset();
    };

  return (
      <section className = "section-sm lg:pt-40">
        <div className = "container mx-auto">
          <div className = "flex flex-col lg:flex-row lg:gap-x-20 bg-contact bg-no-repeat bg-cover min-h-[600px]"
               data-aos = "zoom" data-aos-offset = "350">
            <div className = "flex flex-1 flex-col justify-center pl-8 lg:pl-16 lg:mb-40"
                 data-aos = "fade-down" data-aos-delay = "300" data-aos-offset = "500">
              <h2 className = "h2 mb-2 lg:mb-4">Apply on Our Course!</h2>
              <p className = "mb-7 lg:mb-0">Get used with any kind of help.
                  We`re providing the best experience with our yoga course.
                  Apply and let ur story begin :))0)
              </p>
            </div>
            <form
                className = "flex flex-1 flex-col gap-y-5 bg-white shadow-primary rounded-[20px]
                p-5 lg:p-10 max-h-[600px] lg:-mt-20"
                data-aos = "fade-up" data-aos-delay = "300" data-aos-offset = "550"
                ref={form}
                onSubmit={(e) => sendEmail(e)}>
                <input
                    className = "form-control"
                    placeholder = "First name"
                    type = "text"
                    name = "_firstname"
                    required
                />
                <input
                    className = "form-control"
                    placeholder = "Last name"
                    type = "text"
                    name= "_lastname"
                    required
                />
                <input
                    className = "form-control"
                    placeholder = "@Email"
                    type = "email"
                    name = "_email"
                    required
                />
                <textarea
                    className = "form-control py-3 min-h-[180px] resize-none"
                    placeholder = "Message"
                    name = "_message"
                />
                <button className = "btn btn-lg btn-orange" type = "submit">Send message</button>
                <p className = "text-center" style={{color: emailColor}}>{emailMesg}</p>
            </form>
          </div>
        </div>
      </section>
  );
};

export default Contact;