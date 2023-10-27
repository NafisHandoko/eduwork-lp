export default function Step5() {
  return (
    <>
    <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-col-reverse md:flex-row gap-10 mt-10 px-10 items-stretch">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-eduwork-text-heading font-bold text-4xl">Apakah Anda Siap Untuk <span
                    className="text-primary">Pekerjaan Anda!</span></h2>
            <p className="text-eduwork-text-paragraph text-lg">Kami sangat senang dapat mengenal Anda lebih baik, beri tahu
                kami tentang lowongan pekerjaan Anda!</p>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="text-eduwork-text-paragraph">Ketika kami menawarkan posisi penuh waktu,
                        berapa ekspektasi gaji Anda?</label>
                    <form className="relative md:w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none"><img
                                src="./images/register/cash.png" alt="" /></div>
                        <input type="text" id="simple-search"
                            className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full pl-14 md:pl-12 p-2.5 placeholder-[#C2C2C2]"
                            placeholder="Gaji perbulan" />
                        {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                            <i className="bi bi-send-fill text-relazee-blue"></i>
                        </button> */}
                    </form>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="select" className="text-eduwork-text-paragraph">Status Pekerjaan Saat Ini</label>
                    <form className="relative md:w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none"><img
                                src="./images/register/support.png" alt="" /></div>
                        <select
                            className="bg-white border border-eduwork-neutral-40 text-[#C2C2C2] text-sm rounded-lg block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]">
                            <option className="">Pilih status pekerjaan saat ini</option>
                        </select>
                        {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                            <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                        </button> */}
                    </form>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="text-eduwork-text-paragraph">Tanggal Siap bekerja</label>
                    <form className="relative md:w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none"><img
                                src="./images/register/Calendar.png" alt="" /></div>
                        <input type="text" id="simple-search" onFocus={(e) => {e.target.type='date'}} onBlur={(e) => {e.target.type='text'}}
                            className="bg-white border border-eduwork-neutral-40 text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full pl-14 md:pl-12 p-2.5 placeholder-[#C2C2C2]"
                            placeholder="Tekan untuk memilih tanggal siap bekerja" />
                        {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                            <i className="bi bi-send-fill text-relazee-blue"></i>
                        </button> */}
                    </form>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="select" className="text-eduwork-text-paragraph">Apakah Anda bersedia onsite diluar
                        kota?</label>
                    <form className="relative md:w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none"><img
                                src="./images/register/support.png" alt="" /></div>
                        <select
                            className="bg-white border border-eduwork-neutral-40 text-[#C2C2C2] text-sm rounded-lg block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]">
                            <option className="">Select an option</option>
                            <option className="text-black">Iya</option>
                            <option className="text-black">Tidak</option>
                        </select>
                        {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                            <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                        </button> */}
                    </form>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="select" className="text-eduwork-text-paragraph">Apakah bersedia bekerja secara
                        remote?</label>
                    <form className="relative md:w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none"><img
                                src="./images/register/ion_location.png" alt="" /></div>
                        <select
                            className="bg-white border border-eduwork-neutral-40 text-[#C2C2C2] text-sm rounded-lg block w-full px-14 md:px-12 p-2.5 placeholder-[#C2C2C2]">
                            <option className="">Select an option</option>
                            <option className="text-black">Iya</option>
                            <option className="text-black">Tidak</option>
                        </select>
                        {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                            <i className="bi bi-eye-fill text-[#C2C2C2]"></i>
                        </button> */}
                    </form>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="select" className="text-eduwork-text-paragraph">Apakah anda bersedia menerima project
                        freelance ?</label>
                    <form className="flex flex-col gap-1">
                        <div
                            className="flex flex-row gap-4 items-center bg-white border border-eduwork-neutral-40 text-sm rounded-lg w-full pl-4 p-2.5 placeholder-[#C2C2C2]">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className="text-eduwork-text-paragraph">Project berbasis jam</label>
                        </div>
                        <div
                            className="flex flex-row gap-4 items-center bg-white border border-eduwork-neutral-40 text-sm rounded-lg w-full pl-4 p-2.5 placeholder-[#C2C2C2]">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className="text-eduwork-text-paragraph">Fix Project</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/2 bg-center bg-cover rounded-2xl shadow-md bg-no-repeat" style="background-image: url('./images/register/hero5b.png');background-size: 115%;">
            <div className="relative w-full h-full bg-gradient-to-t rounded-2xl from-white to-transparent from-0% to-50% flex flex-col justify-end p-5">
                <img src="./images/register/video-play.svg" className="w-1/3 self-center my-auto pt-32" alt="" />
                <div className="flex flex-col gap-2">
                    <h2 className="text-eduwork-text-heading text-3xl font-semibold w-3/5">Video Penjelasan Freelance</h2>
                    <p className="text-eduwork-text-paragraph">Pekerjaan fleksibilitas waktu dan tempat kerja, peluang untuk bekerja dengan berbagai klien.. <span className="text-primary font-bold">Selengkapnya</span></p>
                </div>
            </div>
        </div>
        {/* <div className="hidden md:flex w-1/2 self-start">
            <div className="bg-white shadow-lg rounded-xl flex flex-col gap-4 p-5">
                <h3 className="text-eduwork-text-heading text-2xl font-semibold">Video Penjelasan Freelance</h3>
                <img src="./images/register/hero5.png" alt="">
                <p className="text-eduwork-text-paragraph text-xl">Pekerjaan fleksibilitas waktu dan tempat kerja, peluang untuk bekerja dengan berbagai klien dan
                    proyek menarik, serta kontrol lebih besar.</p>
            </div>
        </div> */}
    </section>

    {/* <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex justify-center py-10">
        <button className="text-white bg-primary rounded-xl px-5 py-2 flex flex-row items-center gap-2">
            <span>Menjadi Mentor</span>
            <i className="bi bi-chevron-down"></i>
        </button>
    </section> */}

    <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] flex flex-row justify-end py-10">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end gap-3">
            <a href="step4-c.html"
                className="rounded-full w-full md:w-1/2 py-2 text-eduwork-neutral-50 border border-eduwork-neutral-50 flex flex-row items-center justify-center gap-2">
                <i className="bi bi-chevron-left"></i>
                <span>Previous Step</span>
            </a>
            <a href="step6.html"
                className="rounded-full w-full md:w-1/2 py-2 text-white bg-eduwork-main flex flex-row items-center justify-center gap-2">
                <span>Next Step</span>
                <i className="bi bi-chevron-right"></i>
            </a>
        </div>
    </section>
    </>
  )
}