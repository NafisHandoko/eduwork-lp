import Hero4 from '../assets/images/register/hero4.png'
import Hero4b from '../assets/images/register/hero4b.png'
import Hero4c from '../assets/images/register/hero4c.png'

export default function Step4() {
    return (
        <A />
    )
}

function A() {
    return (
        <>
            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-col-reverse md:flex-row gap-10 mt-10 px-10 items-stretch">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="text-eduwork-text-heading font-bold text-4xl">Beri Tahu Kami Tentang <span className="text-primary">Kemampuan Anda!</span></h2>
                    <p className="text-eduwork-text-paragraph text-lg">Kami sangat senang bisa mengenal Anda lebih baik, beri tahu kami Kemampuan Anda!</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <span className="text-eduwork-text-paragraph text-xl font-bold">Beri tahu kami tentang kemampuan Anda di bawah ini!</span>
                            <form className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className="text-eduwork-text-paragraph text-lg">Web Development</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className="text-eduwork-text-paragraph text-lg">Mobile Development</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className="text-eduwork-text-paragraph text-lg">Desktop Development</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className="text-eduwork-text-paragraph text-lg">experience in a managerial position</label>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-eduwork-text-paragraph text-xl font-bold">Apakah anda memiliki keahlian lainya?</label>
                            <form className="relative md:w-full">
                                {/* <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                className="bi bi-geo-alt-fill text-[#C2C2C2]"></i></div> */}
                                <input type="text" id="simple-search"
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full p-2.5 pl-4 placeholder-[#C2C2C2]"
                                    placeholder="Ketik disini untuk kemampuan lainnya" />
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                            <i className="bi bi-send-fill text-relazee-blue"></i>
                        </button> */}
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className="hidden md:block w-1/2 bg-center bg-cover rounded-2xl" style="background-image: url('./images/register/hero3.png');background-size: 115%;"></div> */}
                <div className="flex justify-center items-center w-full md:w-1/2">
                    <img src={Hero4} className="md:scale-125 md:translate-y-5" alt="" />
                </div>
            </section>

            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-row justify-end py-10">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end gap-3">
                    <a href="step3.html" className="rounded-full w-full md:w-1/2 py-2 text-eduwork-neutral-50 border border-eduwork-neutral-50 flex flex-row items-center justify-center gap-2">
                        <i className="bi bi-chevron-left"></i>
                        <span>Previous Step</span>
                    </a>
                    <a href="step4-b.html" className="rounded-full w-full md:w-1/2 py-2 text-white bg-eduwork-main flex flex-row items-center justify-center gap-2">
                        <span>Next Step</span>
                        <i className="bi bi-chevron-right"></i>
                    </a>
                </div>
            </section>
        </>
    )
}

function B() {
    return (
        <>
            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-col-reverse md:flex-row gap-10 mt-10 px-10 items-stretch">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="text-eduwork-text-heading font-bold text-4xl">Beri Tahu Kami Tentang <span className="text-primary">Kemampuan Anda!</span></h2>
                    <p className="text-eduwork-text-paragraph text-lg">Kami sangat senang bisa mengenal Anda lebih baik, beri tahu kami Kemampuan Anda!</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <span className="text-eduwork-text-paragraph text-xl font-bold">Beri tahu kami tentang kemampuan Anda pada Web Development!</span>
                            <form className="relative md:w-full">
                                {/* <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-geo-alt-fill text-[#C2C2C2]"></i></div> */}
                                <input type="text" id="simple-search"
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full p-2.5 px-4 placeholder-[#C2C2C2]"
                                    placeholder="Ketik disini kemampuan Web Development anda" />
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-send-fill text-relazee-blue"></i>
                                </button> */}
                            </form>
                            <div className="border rounded-lg p-4 h-44 overflow-y-scroll">
                                <div className="flex flex-row gap-2 flex-wrap">
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">HTML</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">CSS</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">React JS</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Typescript</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">TailwindCSS</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Golang</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Express</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">PostgreSQL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="hidden md:block w-1/2 bg-center bg-cover rounded-2xl" style="background-image: url('./images/register/hero3.png');background-size: 115%;"></div> */}
                <div className="flex justify-center items-center w-full md:w-1/2">
                    <img src={Hero4b} className="" alt="" />
                </div>
            </section>

            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-row justify-end py-10">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end gap-3">
                    <a href="step4.html" className="rounded-full w-full md:w-1/2 py-2 text-eduwork-neutral-50 border border-eduwork-neutral-50 flex flex-row items-center justify-center gap-2">
                        <i className="bi bi-chevron-left"></i>
                        <span>Previous Step</span>
                    </a>
                    <a href="step4-c.html" className="rounded-full w-full md:w-1/2 py-2 text-white bg-eduwork-main flex flex-row items-center justify-center gap-2">
                        <span>Next Step</span>
                        <i className="bi bi-chevron-right"></i>
                    </a>
                </div>
            </section>
        </>
    )
}

function C() {
    return (
        <>
            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-col-reverse md:flex-row gap-10 mt-10 px-10 items-stretch">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="text-eduwork-text-heading font-bold text-4xl">Beri Tahu Kami Tentang <span className="text-primary">Kemampuan Anda!</span></h2>
                    <p className="text-eduwork-text-paragraph text-lg">Kami sangat senang bisa mengenal Anda lebih baik, beri tahu kami Kemampuan Anda!</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <span className="text-eduwork-text-paragraph text-xl font-bold">Beri tahu kami tentang kemampuan Anda pada Mobile Development!</span>
                            <form className="relative md:w-full">
                                {/* <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-geo-alt-fill text-[#C2C2C2]"></i></div> */}
                                <input type="text" id="simple-search"
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full p-2.5 px-4 placeholder-[#C2C2C2]"
                                    placeholder="Ketik disini kemampuan Mobile Development anda" />
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-send-fill text-relazee-blue"></i>
                                </button> */}
                            </form>
                            <div className="border rounded-lg p-4 h-44 overflow-y-scroll">
                                <div className="flex flex-row gap-2 flex-wrap">
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Kotlin</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">React Native</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Java</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Flutter</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">BLoC</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">GetX</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Apache Cordova</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Redux</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="hidden md:block w-1/2 bg-center bg-cover rounded-2xl" style="background-image: url('./images/register/hero3.png');background-size: 115%;"></div> */}
                <div className="flex justify-center items-center w-full md:w-1/2">
                    <img src={Hero4c} className="" alt="" />
                </div>
            </section>

            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-row justify-end py-10">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end gap-3">
                    <a href="step4-b.html" className="rounded-full w-full md:w-1/2 py-2 text-eduwork-neutral-50 border border-eduwork-neutral-50 flex flex-row items-center justify-center gap-2">
                        <i className="bi bi-chevron-left"></i>
                        <span>Previous Step</span>
                    </a>
                    <a href="step5.html" className="rounded-full w-full md:w-1/2 py-2 text-white bg-eduwork-main flex flex-row items-center justify-center gap-2">
                        <span>Next Step</span>
                        <i className="bi bi-chevron-right"></i>
                    </a>
                </div>
            </section>
        </>
    )
}