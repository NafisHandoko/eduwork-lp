import IDNFlag from '../assets/images/register/Indonesia (ID).svg'
import EduworkLogo from '../assets/images/logo/favicon.png'
import SlideImg from '../assets/images/register/slide-img.png'
import Hero1 from '../assets/images/register/hero1.png'

export default function Step1() {
    return (
        <>
            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-col-reverse md:flex-row gap-10 mt-10 px-10 items-stretch">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="text-eduwork-text-heading font-bold text-4xl">Welcome!</h2>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-eduwork-text-paragraph">Username</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-person-fill text-[#C2C2C2]"></i></div>
                                <input type="text" id="simple-search"
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]"
                                    placeholder="Username" />
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-send-fill text-relazee-blue"></i>
                                </button> */}
                            </form>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-eduwork-text-paragraph">Email</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-envelope text-[#C2C2C2]"></i></div>
                                <input type="email" id="simple-search"
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]"
                                    placeholder="Email" />
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-send-fill text-relazee-blue"></i>
                                </button> */}
                            </form>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-eduwork-text-paragraph">Password</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-lock-fill text-[#C2C2C2]"></i></div>
                                <input type="password" id="simple-search"
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]"
                                    placeholder="masukkan password anda" />
                                <button type='button' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                                </button>
                            </form>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="confirm-password" className="text-eduwork-text-paragraph">Konfirmasi Password</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-lock-fill text-[#C2C2C2]"></i></div>
                                <input type="password" id="simple-search"
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]"
                                    placeholder="Ketik ulang pasword anda" />
                                <button type='button' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                                </button>
                            </form>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="phone" className="text-eduwork-text-paragraph">Nomor Telephone</label>
                            <div className="flex flex-row gap-3">
                                <form className="relative w-1/4">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
                                        <img src={IDNFlag} alt="" />
                                    </div>
                                    <select
                                        className="bg-white border border-eduwork-neutral-40 text-[#C2C2C2] text-sm rounded-lg block w-full pl-14 md:pl-12 p-2.5 placeholder-[#C2C2C2]">
                                        <option className="">+62</option>
                                        <option className="text-black">+81</option>
                                        <option className="text-black">+65</option>
                                        <option className="text-black">+45</option>
                                    </select>
                                    {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                        <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                                    </button> */}
                                </form>
                                <form className="relative w-full">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                        className="bi bi-telephone text-[#C2C2C2]"></i></div>
                                    <input type="text" id="simple-search"
                                        className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full pl-14 md:pl-12 p-2.5 placeholder-[#C2C2C2]"
                                        placeholder="masukkan nomor telephone anda" />
                                    {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                        <i className="bi bi-send-fill text-relazee-blue"></i>
                                    </button> */}
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="select" className="text-eduwork-text-paragraph">Dimana kamu mendapatkan informasi
                                tentang kami?</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-lock-fill text-[#C2C2C2]"></i></div>
                                <select
                                    className="bg-white border border-eduwork-neutral-40 text-[#C2C2C2] text-sm rounded-lg block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]">
                                    <option className="">Pilih atau masukkan opsi</option>
                                    <option className="text-black">Instagram</option>
                                    <option className="text-black">Linkedin</option>
                                    <option className="text-black">School/Campus</option>
                                </select>
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                                </button> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-center bg-cover" style={{ backgroundImage: `url(${Hero1});` }}>
                    <div className="bg-eduwork-neutral-100/[.9] w-full h-full flex flex-col items-center justify-center gap-10 py-5 md:py-14">
                        <img src={EduworkLogo} className="w-40 hidden md:block" alt="" />
                            <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-10 md:px-20">Get Ready to <span
                                className="text-[#FBBC04]">Kickstart</span> Your Journey with Us</h2>
                            <div className="swiper mySwiper flex flex-col -mt-14 md:mt-auto">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide flex items-center justify-center">
                                        <img src={SlideImg} className="w-[60%]" alt="" />
                                    </div>
                                    <div className="swiper-slide flex items-center justify-center">
                                        <img src={SlideImg} className="w-[60%]" alt="" />
                                    </div>
                                    <div className="swiper-slide flex items-center justify-center">
                                        <img src={SlideImg} className="w-[60%]" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-center relative mt-3">
                                    <div className="w-1/6">
                                        <button id="swiper-Button-prev" className="swiper-Button-prev text-eduwork-main bg-white rounded-full w-7 h-7 flex items-center justify-center"><i
                                            className="bi bi-chevron-left"></i></button>
                                    </div>
                                    <div className="swiper-pagination !static !w-auto"></div>
                                    <div className="w-1/6 flex flex-col items-end">
                                        <button id="swiper-Button-next" className="swiper-Button-next text-eduwork-main bg-white rounded-full w-7 h-7 flex items-center justify-center"><i
                                            className="bi bi-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="rounded-full border border-white px-5 py-2 hidden md:flex flex-row items-center gap-2 text-white">
                                <i className="bi bi-chevron-left"></i>
                                <span>Back to Home</span>
                            </a>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-row justify-end py-7">
                <div className="w-full md:w-1/2 flex justify-end">
                    <a href="step2.html" className="rounded-full w-full md:w-1/2 py-2 text-white bg-eduwork-main flex flex-row items-center justify-center gap-2">
                        <span>Next Step</span>
                        <i className="bi bi-chevron-right"></i>
                    </a>
                </div>
            </section>
        </>
    )
}