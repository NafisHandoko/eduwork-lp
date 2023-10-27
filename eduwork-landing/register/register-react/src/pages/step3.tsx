import Hero3 from '../assets/images/register/hero3.png'
import { Link } from 'react-router-dom'

export default function Step3() {
    return (
        <>
            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-col-reverse md:flex-row gap-10 mt-10 px-10 items-stretch">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="text-eduwork-text-heading font-bold text-4xl">Beri Tahu Kami Tentang <span className="text-primary">Pengalaman Anda!</span></h2>
                    <p className="text-eduwork-text-paragraph text-lg w-4/5">Kami sangat senang bisa mengenal Anda lebih baik, beri tahu kami Pengalaman Anda!</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="select" className="text-eduwork-text-paragraph">Apa kamu memiliki pengalaman kerja?</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-briefcase-fill text-[#C2C2C2]"></i></div>
                                <select
                                    className="bg-white border border-eduwork-neutral-40 text-black text-sm rounded-lg block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]">
                                    <option className="text-black">Belum</option>
                                    <option className="text-black">Sudah</option>
                                </select>
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                                </button> */}
                            </form>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="select" className="text-eduwork-text-paragraph">Apakah anda bersedia untuk kami berikan edukasi intensif sebelum disalurkan ke lapangan pekerjaan ?</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-reception-4 text-[#C2C2C2]"></i></div>
                                <select
                                    className="bg-white border border-eduwork-neutral-40 text-[#C2C2C2] text-sm rounded-lg block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]">
                                    <option className="">Pilih opsi</option>
                                    <option className="text-black">Belum</option>
                                    <option className="text-black">Sudah</option>
                                </select>
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                                </button> */}
                            </form>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="select" className="text-eduwork-text-paragraph">Apa bidang yang ingin anda kembangkan karirnya?</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-reception-4 text-[#C2C2C2]"></i></div>
                                <select
                                    className="bg-white border border-eduwork-neutral-40 text-[#C2C2C2] text-sm rounded-lg block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]">
                                    <option className="">Pilih opsi</option>
                                    <option className="text-black">Belum</option>
                                    <option className="text-black">Sudah</option>
                                </select>
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                                </button> */}
                            </form>
                            <div className="border rounded-lg p-4 h-44 overflow-y-scroll">
                                <div className="flex flex-row gap-2 flex-wrap">
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Web Development</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">UX Design</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Data Analyst</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Product Management</div>
                                    <div className="text-eduwork-text-paragraph bg-[#BCECFA] p-2">Backend Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="hidden md:block w-1/2 bg-center bg-cover rounded-2xl" style="background-image: url('./images/register/hero3.png');background-size: 115%;"></div> */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img src={Hero3} className="scale-110 md:scale-[1.4] md:translate-x-5 translate-y-5 -z-10" alt="" />
                </div>
            </section>

            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-row justify-end py-7 z-50">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end gap-3">
                    <a href="step2.html" className="rounded-full w-full md:w-1/2 py-2 text-eduwork-neutral-50 border border-eduwork-neutral-50 flex flex-row items-center justify-center gap-2">
                        <i className="bi bi-chevron-left"></i>
                        <span>Previous Step</span>
                    </a>
                    <Link to='/step4' className="rounded-full w-full md:w-1/2 py-2 text-white bg-eduwork-main flex flex-row items-center justify-center gap-2">
                        <span>Next Step</span>
                        <i className="bi bi-chevron-right"></i>
                    </Link>
                </div>
            </section>
        </>
    )
}