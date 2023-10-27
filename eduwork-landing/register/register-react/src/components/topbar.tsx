import EduworkLogo from '../assets/images/logo/favicon.png'
import HelpIcon from '../assets/images/register/help-icon.svg'

export default function Topbar() {
    return (
        <section className="bg-white container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] py-2 md:py-4 flex flex-row justify-between items-center px-10">
            <img className="h-6 sm:h-7" src={EduworkLogo} alt="Eduwork Logo" />
            <a href="#"
                className="text-eduwork-main md:border border-primary rounded-full flex flex-row items-center gap-4 md:px-8 py-2">
                <img src={HelpIcon} alt="" />
                <span className="hidden md:block text-lg font-medium">Help Center</span>
            </a>
        </section>
    )
}