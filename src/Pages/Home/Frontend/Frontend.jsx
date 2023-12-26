

const Frontend = () => {
    return (
        <div className="px-5 md:px-12 lg:px-24 lg:pb-24 md:pt-20">
            <h1 className="text-center text-4xl font-bold text-orange-500 mb-10"> My Knowledge
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5 px-8">
                <div>
                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#ff662e] dark:text-white">HTML5 </span>
                            <span className="text-sm font-medium text-[#ff662e] dark:text-white">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-[#ff662e] h-2.5 rounded-full" style={{ width: "95%" }}></div>
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
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-yellow-500 dark:text-white">JavaScript</span>
                            <span className="text-sm font-medium text-yellow-500 dark:text-white">80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#61DAFB] dark:text-white">React </span>
                            <span className="text-sm font-medium text-[#61DAFB] dark:text-white">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-[#61DAFB] h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-gray-500 dark:text-white"> Express </span>
                            <span className="text-sm font-medium text-gray-500 dark:text-white">73%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "73%" }}></div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#3c873a] dark:text-white"> Node.js </span>
                            <span className="text-sm font-medium text-[#3c873a] dark:text-white">70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-[#3c873a] h-2.5 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-[#4DB33D] dark:text-white"> MongoDB </span>
                            <span className="text-sm font-medium text-[#4DB33D] dark:text-white">65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-[#4DB33D] h-2.5 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;