import HeaderTitle from "@/components/header-title";

const About = () => {
    return (
        <>
            <h1 className="text-2xl sm:text-3xl font-semibold"> About the team </h1>
            <section className="mt-6">
                <p className="mt-4">
                    BOUTEN-E was created by a dedicated group of senior high school researchers with a shared passion for solving the waste management challenges of today. Our team combines knowledge in technology, sustainability, and research to ensure that BOUTEN-E is a practical and impactful solution for the future of waste management.
                </p>
            </section>
            <section className="mt-6">
                <HeaderTitle to="disclaimer" className="text-xl sm:text-2xl font-semibold"> Disclaimer of Warranty </HeaderTitle>
                <p className="mt-4">
                    BOUTEN-E is provided “as is,” and while we strive for the highest standards of quality, we make no representations or warranties of any kind, express or implied, regarding the operation or reliability of the system. Users assume all responsibility for using the system in accordance with local regulations and at their own risk.
                </p>
            </section>
            <section className="mt-6">
                <HeaderTitle to="limitation" className="text-xl sm:text-2xl font-semibold"> Limitation of Liability </HeaderTitle>
                <p className="mt-4">
                    To the maximum extent permitted by law, BOUTEN-E shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of the system. Our liability is limited to the direct damages incurred, not exceeding the value of the service provided.
                </p>
            </section>
        </>
    );
}
 
export default About;