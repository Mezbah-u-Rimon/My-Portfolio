

const Frontend = () => {
    return (
        <div className="px-5 md:px-12 lg:px-24 pb-24 pt-10">
            <h1 className="text-center text-4xl font-bold text-orange-500 mb-10"> My Front-End Knowledge
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#E34C26] dark:text-white">HTML5 </span>
                            <span className="text-sm font-medium text-[#E34C26] dark:text-white">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-[#E34C26] h-2.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#2965f1] dark:text-white">CSS3</span>
                            <span className="text-sm font-medium text-[#2965f1] dark:text-white">93%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-[#2965f1] h-2.5 rounded-full" style={{ width: "93%" }}></div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#3490dc] dark:text-white">Tailwind CSS</span>
                            <span className="text-sm font-medium text-[#3490dc] dark:text-white">93%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-[#3490dc] h-2.5 rounded-full" style={{ width: "93%" }}></div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#3490dc] dark:text-white">JavaScript</span>
                            <span className="text-sm font-medium text-[#3490dc] dark:text-white">93%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-[#3490dc] h-2.5 rounded-full" style={{ width: "93%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;