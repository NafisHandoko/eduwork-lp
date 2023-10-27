import Hero2 from '../assets/images/register/hero2.png'
import Hero2b from '../assets/images/register/hero2b.png'
import Koinworks from '../assets/images/register/koinworks.png'
import Cakap from '../assets/images/register/cakap.png'
import Gameloft from '../assets/images/register/gameloft.png'
import Krafthaus from '../assets/images/register/krafthaus.png'
import Crowde from '../assets/images/register/crowde.png'
import Wakuliner from '../assets/images/register/wakuliner.png'
import Calendar from '../assets/images/register/Calendar.png'
import { Link } from 'react-router-dom'

export default function Step2() {
    return (
        <>
            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-col-reverse md:flex-row gap-10 mt-10 px-10 items-stretch">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="text-eduwork-text-heading font-bold text-4xl">Welcome!</h2>
                    <p className="text-eduwork-text-paragraph text-lg w-3/4">Silahkan isi data berikut ini sebelum mengakses aplikasi</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-eduwork-text-paragraph">Nama</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-person-fill text-[#C2C2C2]"></i></div>
                                <input type="text" id="simple-search"
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full pl-14 md:pl-12 p-2.5 placeholder-[#C2C2C2]"
                                    placeholder="Nama Kamu" />
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-send-fill text-relazee-blue"></i>
                                </button> */}
                            </form>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-eduwork-text-paragraph">Kota Sekarang Tinggal</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-geo-alt-fill text-[#C2C2C2]"></i></div>
                                <input type="text" id="simple-search"
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full pl-14 md:pl-12 p-2.5 placeholder-[#C2C2C2]"
                                    placeholder="Masukkan kota anda sekarang" />
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-send-fill text-relazee-blue"></i>
                                </button> */}
                            </form>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-eduwork-text-paragraph">Tempat Lahir</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-geo-alt-fill text-[#C2C2C2]"></i></div>
                                <input type="text" id="simple-search"
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full pl-14 md:pl-12 p-2.5 placeholder-[#C2C2C2]"
                                    placeholder="Masukkan tempat lahir anda" />
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-send-fill text-relazee-blue"></i>
                                </button> */}
                            </form>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-eduwork-text-paragraph">Tanggal Lahir</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none"><img
                                    src={Calendar} alt="" /></div>
                                <input type="text" id="simple-search" onFocus={(e) => { (e.target.type = 'date') }} onBlur={(e) => { (e.target.type = 'text') }}
                                    className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full pl-14 md:pl-12 p-2.5 placeholder-[#C2C2C2]"
                                    placeholder="Tekan untuk memilih tanggal lahir anda" />
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-send-fill text-relazee-blue"></i>
                                </button> */}
                            </form>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="select" className="text-eduwork-text-paragraph">Jenis Kelamin</label>
                            <form className="relative md:w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i
                                    className="bi bi-gender-ambiguous text-[#C2C2C2]"></i></div>
                                <select
                                    className="bg-white border border-eduwork-neutral-40 text-[#C2C2C2] text-sm rounded-lg block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]">
                                    <option className="">Pilih Jenis Kelamin</option>
                                    <option className="text-black">Laki-laki</option>
                                    <option className="text-black">Perempuan</option>
                                </select>
                                {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                                </button> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block w-1/2 bg-center bg-cover rounded-2xl" style={{ backgroundImage: `url(${Hero2})` }}></div>
                <div className="w-full md:hidden bg-center bg-cover bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${Hero2b})` }}>
                    <div className="w-full h-full bg-black/[.5] flex flex-row flex-wrap gap-5 rounded-2xl items-center justify-center p-5">
                        <img src={Koinworks} className="w-32" alt="" />
                        <img src={Cakap} className="w-32" alt="" />
                        <img src={Gameloft} className="w-32" alt="" />
                        <img src={Krafthaus} className="w-32" alt="" />
                        <img src={Crowde} className="w-32" alt="" />
                        <img src={Wakuliner} className="w-32" alt="" />
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-row justify-end py-7">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end gap-3">
                    <a href="index.html" className="rounded-full w-full md:w-1/2 py-2 text-eduwork-neutral-50 border border-eduwork-neutral-50 flex flex-row items-center justify-center gap-2">
                        <i className="bi bi-chevron-left"></i>
                        <span>Previous Step</span>
                    </a>
                    <Link to='/step3' className="rounded-full w-full md:w-1/2 py-2 text-white bg-eduwork-main flex flex-row items-center justify-center gap-2">
                        <span>Next Step</span>
                        <i className="bi bi-chevron-right"></i>
                    </Link>
                </div>
            </section>
        </>
    )
}