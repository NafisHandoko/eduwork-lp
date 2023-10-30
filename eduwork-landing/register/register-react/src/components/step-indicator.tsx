import { NavLink } from "react-router-dom";

export default function StepIndicator() {
    return (
        <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] hidden md:grid grid-cols-6 gap-1 mt-5 px-10">
            <NavLink
                to='/step1'
                className={({ isActive }) =>
                    `flex flex-col border-t-8 gap-3 ${isActive ? 'border-primary' : 'border-eduwork-neutral-40'}`
                }
            >
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 1</span>
                <span className="text-eduwork-text-paragraph text-lg">Account</span>
            </NavLink>
            <NavLink
                to='/step2'
                className={({ isActive }) =>
                    `flex flex-col border-t-8 gap-3 ${isActive ? 'border-primary' : 'border-eduwork-neutral-40'}`
                }
            >
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 2</span>
                <span className="text-eduwork-text-paragraph text-lg">Personal Information</span>
            </NavLink>
            <NavLink
                to='/step3'
                className={({ isActive }) =>
                    `flex flex-col border-t-8 gap-3 ${isActive ? 'border-primary' : 'border-eduwork-neutral-40'}`
                }
            >
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 3</span>
                <span className="text-eduwork-text-paragraph text-lg">Experience</span>
            </NavLink>
            <NavLink
                to='/step4'
                className={({ isActive }) =>
                    `flex flex-col border-t-8 gap-3 ${isActive ? 'border-primary' : 'border-eduwork-neutral-40'}`
                }
            >
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 4</span>
                <span className="text-eduwork-text-paragraph text-lg">Skill</span>
            </NavLink>
            <NavLink
                to='/step5'
                className={({ isActive }) =>
                    `flex flex-col border-t-8 gap-3 ${isActive ? 'border-primary' : 'border-eduwork-neutral-40'}`
                }
            >
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 5</span>
                <span className="text-eduwork-text-paragraph text-lg">Job Offer</span>
            </NavLink>
            <NavLink
                to='/step6'
                className={({ isActive }) =>
                    `flex flex-col border-t-8 gap-3 ${isActive ? 'border-primary' : 'border-eduwork-neutral-40'}`
                }
            >
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 6</span>
                <span className="text-eduwork-text-paragraph text-lg">Role</span>
            </NavLink>
        </section>
    )
}