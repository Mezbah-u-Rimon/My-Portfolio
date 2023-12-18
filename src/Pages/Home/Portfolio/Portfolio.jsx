import './portfolio.css'


const Portfolio = () => {

    return (
        <div id='portfolio' className="text-center px-5 md:px-12 lg:px-24 pb-24">
            <h1 className="text-4xl font-bold text-orange-500 mb-4"> My Amazing Works  </h1>
            <p className="lg:w-[500px] mx-auto mb-12">
                If you need to make a website you need to do step by step and every step is the services and I will provide you with everything
            </p>

            <ul className="lg:timeline lg:timeline-vertical">
                <li>
                    <div className='timeline-start timeline-box'>
                        <div className="card bg-base-100 shadow-xl  shadow-orange-300">
                            <div className="rounded-lg image-wraf">
                                <img src="https://i.ibb.co/Ctjn72s/screencapture-localhost-5173-2023-11-30-21-36-35-1.png" alt="" />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-orange-500">Asset Management</h2>
                                <p className='text-left'>
                                    Asset management is the full-stack web application. It includes admin panel employee panel and simple user registration panel. Admin panel will show admin pages, and employee panel will show employee pages. If the user is not logged in then the login page will show the employee registration page and the admin/HR registration page...
                                </p>
                                <div className="card-actions">
                                    <a href="https://asset-management-website.netlify.app/?fbclid=IwAR1BfBXqITYx3O3lGNZTPaWvlfc7ZGrs7D2l5AYu8Xmt2WRU7Gwi96nM7Vk" target="_blank" rel="noreferrer">
                                        <button className="btn shadow-lg shadow-orange-300"> Live Link</button>
                                    </a>
                                    <a href="https://github.com/Mezbah-u-Rimon/asset-management" target="_blank" rel="noreferrer">
                                        <button className="btn shadow-lg shadow-orange-300"> Github Client </button>
                                    </a>
                                    <a href="https://github.com/Mezbah-u-Rimon/asset-management-server" target="_blank" rel="noreferrer">
                                        <button className="btn shadow-lg shadow-orange-300"> Github Server </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-300"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <hr className="bg-orange-300" />
                </li>
                <li>
                    <hr className="bg-orange-300" />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-300"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box">
                        <div className="card bg-base-100 shadow-xl  shadow-orange-300">
                            <div className="rounded-lg image-wraf">
                                <img src="https://i.ibb.co/P5MKXV2/blog.png" alt="" />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-orange-500"> Our Blog </h2>
                                <p className='text-left'>
                                    Our Blog is the full-stack web application. In this user can add his own blog. And user can also update his own blog no one else can update. Other users can comment between blogs. But to do this, the user must be logged in first...
                                </p>
                                <div className="card-actions">
                                    <a href="https://our-blogs-website.netlify.app/" target="_blank" rel="noreferrer">
                                        <button className="btn shadow-lg shadow-orange-300"> Live Link </button>
                                    </a>
                                    <a href="https://github.com/Mezbah-u-Rimon/Blog-Website-Client" target="_blank" rel="noreferrer">
                                        <button className="btn shadow-lg shadow-orange-300"> Github Client </button>
                                    </a>
                                    <a href="https://github.com/Mezbah-u-Rimon/Blog-Website-Server" target="_blank" rel="noreferrer">
                                        <button className="btn shadow-lg shadow-orange-300"> Github Server </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-orange-300" />
                </li>
                <li>
                    <hr className="bg-orange-300" />
                    <div className="timeline-start timeline-box">
                        <div className="card bg-base-100 shadow-xl  shadow-orange-300">
                            <div className="rounded-lg image-wraf">
                                <img src="https://i.ibb.co/5s8ZtG0/automotive.png" alt="" />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-orange-500">Automotive Car </h2>
                                <p className='text-left'>
                                    Automotive Car is the react web application. Clicking on its logo will show the cars of that logo. User can add cars on cart page. Can update again. But to do this, the user must be logged in first ...
                                </p>
                                <div className="card-actions">
                                    <a href="https://automotive-cars.netlify.app/" target="_blank" rel="noreferrer">
                                        <button className="btn shadow-lg shadow-orange-300"> Live Link </button>
                                    </a>
                                    <a href="https://github.com/Mezbah-u-Rimon/Automotive-Cars-Client" target="_blank" rel="noreferrer">
                                        <button className="btn shadow-lg shadow-orange-300"> Github Client </button>
                                    </a>
                                    <a href="https://github.com/Mezbah-u-Rimon/automotive-cars-server" target="_blank" rel="noreferrer">
                                        <button className="btn shadow-lg shadow-orange-300"> Github Server </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-300"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>

                </li>
            </ul>


        </div>
    );
};

export default Portfolio;