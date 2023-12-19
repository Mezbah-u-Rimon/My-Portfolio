import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [message, setMessage] = useState("");


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vj7y80r', 'template_emn7785', form.current, 'eks-gab-vzVf_ofUh')
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Message send successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                setUserName("");
                setUserEmail("");
                setMessage("");
            }, (error) => {
                console.log(error.text);
            });

    };


    return (
        <div id='contact' className="md:px-12 lg:px-24 pb-24 pt-10">
            <div className="hero min-h-screen bg-base-200 rounded-2xl lg:p-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className=" text-4xl font-bold text-orange-500 mb-4"> Contact With Me
                        </h1>
                        <h3 className='text-2xl font-bold '>
                            Let's work together to build outstanding web experiences!
                        </h3>
                        <p className="pb-6 pt-3">
                            I work closely with my clients on each projects to create not only an amazing work, that will help the business grow, but create a long term relationship of trust & caring...
                        </p>
                        <div className='mb-5'>
                            <h5 className='text-xl font-bold text-gray-600'> My Address
                            </h5>
                            <p className='text-lg'> Feni, Bangladesh </p>
                        </div>
                        <div className='mb-5'>
                            <h5 className='text-xl font-bold text-gray-600'> Contact Email
                            </h5>
                            <p className='text-lg'> rimonmr444@gmail.com </p>
                        </div>
                        <div className='mb-5'>
                            <h5 className='text-xl font-bold text-gray-600'>Find Me on Phone/Whatsapp/Telegram
                            </h5>
                            <p className='text-lg'> +8801610975217 </p>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100 lg:w-1/2">
                        <form className="card-body" ref={form} onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name  </span>
                                </label>
                                <input type="text" name="user_name" placeholder="Name*" className="input input-bordered" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="Email*" className="input input-bordered"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Message </span>
                                </label>
                                <textarea name="message" id="" cols="20" rows="3" className="border rounded-lg w-full p-4" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}>  </textarea>
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