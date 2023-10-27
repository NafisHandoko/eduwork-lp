import Hero6 from '../assets/images/register/hero6.png'

export default function Step6() {
    return (
        <>
            <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-col-reverse md:flex-row gap-10 mt-10 px-10 items-stretch pb-10">
                <div className="w-full md:w-3/5 flex flex-col gap-6">
                    <h2 className="text-eduwork-text-heading font-bold text-2xl text-center">Kamu Hampir Selesai <br /><span
                        className="text-primary">Langkah Terakhir, Jadilah Bagian dari Kami!</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-5">
                        <div className="border border-black rounded-xl px-3 py-7 gap-4 flex flex-col items-center text-center">
                            <img src="./images/register/whatsapp.png" alt="" className="w-1/4" />
                            <h3 className="text-lg font-bold">Join <span className="text-[#29E670]">Whatsapp</span></h3>
                            <p className="text-sm">Join our WhatsApp Group to get a free consultation</p>
                            <a href="#" className="flex flex-row items-center gap-4 text-white bg-[#25D667] rounded-lg px-5 py-2">
                                <i className="bi bi-check2"></i>
                                <span>Join</span>
                            </a>
                        </div>
                        <div className="border border-black rounded-xl px-3 py-7 gap-4 flex flex-col items-center text-center">
                            <img src="./images/register/linkedin.png" alt="" className="w-1/4" />
                            <h3 className="text-lg font-bold">Join <span className="text-[#337FDA]">Linkedin</span></h3>
                            <p className="text-sm">Follow our LinkedIn page to get updated news</p>
                            <a href="#" className="flex flex-row items-center gap-4 text-white bg-[#337FDA] rounded-lg px-5 py-2">
                                <i className="bi bi-check2"></i>
                                <span>Join</span>
                            </a>
                        </div>
                        <div className="border border-black rounded-xl px-3 py-7 gap-4 flex flex-col items-center text-center">
                            <img src="./images/register/instagram.png" alt="" className="w-1/4" />
                            <h3 className="text-lg font-bold">Join <span className="text-[#F82A8D]">Instagram</span></h3>
                            <p className="text-sm">Follow our Instagram and keep in touch with us</p>
                            <a href="#" className="flex flex-row items-center gap-4 text-white bg-[#F82A8D] rounded-lg px-5 py-2">
                                <i className="bi bi-check2"></i>
                                <span>Join</span>
                            </a>
                        </div>
                    </div>
                    <button className="text-white bg-primary rounded-full px-5 py-2 self-center">I'm Done! Guide Me to The Community</button>
                </div>
                <div className="w-full md:w-2/5 bg-center bg-cover rounded-2xl h-[300px] md:h-auto" style={{ backgroundImage: `url(${Hero6})` }}></div>
                {/* <div className="flex w-full md:w-2/5 self-start">
                    <img src="./images/register/hero6.png" className="" alt="" />
                </div> */}
            </section>
        </>
    )
}