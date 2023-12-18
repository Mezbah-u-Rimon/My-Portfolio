import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('service_vj7y80r', 'template_emn7785', form.current, 'eks-gab-vzVf_ofUh')
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Message send successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }, (error) => {
                console.log(error.text);
            });

    };


    return (
        <div className="px-5 md:px-12 lg:px-24 pb-24 pt-10">
            <div className="hero min-h-screen bg-base-200 rounded-2xl p-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100 lg:w-1/2">
                        <form className="card-body" ref={form} onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name  </span>
                                </label>
                                <input type="text" name="user_name" placeholder="Name*" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="Email*" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Message </span>
                                </label>
                                <textarea name="message" id="" cols="20" rows="5" className="border rounded-lg w-full p-4" placeholder="Your Message">  </textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-orange-400"> Send Message </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;