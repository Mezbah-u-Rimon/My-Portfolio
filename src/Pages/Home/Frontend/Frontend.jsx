

const Frontend = () => {
    return (
        <div className="px-5 md:px-12 lg:px-24 pb-24 pt-10">
            <h1 className="text-center text-4xl font-bold text-orange-500 mb-10"> My Front-End Knowledge
            </h1>
            <div role="tablist" className="tabs tabs-lifted justify-center">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="HTML5" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="flex justify-between">
                        <div>
                            text
                        </div>
                        <div className="radial-progress" style={{ "--value": 70 }} role="progressbar">70%
                        </div>
                    </div>

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="CSS3" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="JavaScript" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
            </div>
        </div>
    );
};

export default Frontend;