export default function StepIndicator() {
    return (
        <section className="container mx-auto px-3 xl:px-[135px] 2xl:px-[265px] hidden md:grid grid-cols-6 gap-1 mt-5 px-10">
            <div className="flex flex-col border-t-8 border-primary gap-3">
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 1</span>
                <span className="text-eduwork-text-paragraph text-lg">Account</span>
            </div>
            <div className="flex flex-col border-t-8 border-eduwork-neutral-40 gap-3">
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 2</span>
                <span className="text-eduwork-text-paragraph text-lg">Personal Information</span>
            </div>
            <div className="flex flex-col border-t-8 border-eduwork-neutral-40 gap-3">
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 3</span>
                <span className="text-eduwork-text-paragraph text-lg">Experience</span>
            </div>
            <div className="flex flex-col border-t-8 border-eduwork-neutral-40 gap-3">
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 4</span>
                <span className="text-eduwork-text-paragraph text-lg">Skill</span>
            </div>
            <div className="flex flex-col border-t-8 border-eduwork-neutral-40 gap-3">
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 5</span>
                <span className="text-eduwork-text-paragraph text-lg">Job Offer</span>
            </div>
            <div className="flex flex-col border-t-8 border-eduwork-neutral-40 gap-3">
                <span className="text-eduwork-text-heading text-xl font-medium">STEP 6</span>
                <span className="text-eduwork-text-paragraph text-lg">Role</span>
            </div>
        </section>
    )
}