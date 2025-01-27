import HeaderTitle from "@/components/header-title";

export default function Home() {
    return (
        <>
            <h1 className="text-2xl sm:text-3xl font-semibold"> Home | BOUTEN-E </h1>
            <section className="mt-6">
                <HeaderTitle to="purpose" className="text-xl sm:text-2xl font-semibold"> Educational purpose </HeaderTitle>
                <p className="mt-4">
                    At BOUTEN-E, our goal is to empower individuals and businesses with the tools and knowledge they need to manage waste effectively. Our smart trash bin system isn’t just about automating waste management; it's also about educating users on responsible disposal practices. Through our intuitive website, we provide clear, real-time feedback on sorting and recycling, helping users to understand the importance of reducing landfill waste and promoting a cleaner, more sustainable environment.
                </p>
            </section>
            <section className="mt-6">
                <HeaderTitle to="benefits" className="text-xl sm:text-2xl font-semibold"> Benefits </HeaderTitle>
                <p className="mt-4">
                    <strong> Enhanced Recycling Efficiency: </strong> 
                    BOUTEN-E automatically sorts bottles and utensils, ensuring proper disposal and increasing recycling rates by eliminating the risk of contamination.
                </p>
                <p className="mt-4">
                    <strong> Operational Cost Reduction: </strong>
                    Real-time fill-level monitoring helps businesses optimize waste collection by scheduling pickups only when necessary, reducing costs related to excess collections and overflows.
                </p>
                <p className="mt-4">
                    <strong> Incentive System: </strong>
                    Track potential earnings based on recycling efforts and efficiency, motivating responsible disposal practices.
                </p>
                <p className="mt-4">
                    <strong> Environmental Impact: </strong>
                    By minimizing landfill waste and improving recycling practices, BOUTEN-E actively contributes to a cleaner, more sustainable environment, helping to reduce pollution and support eco-friendly practices.
                </p>
            </section>
            <section className="mt-6">
                <HeaderTitle to="goal" className="text-xl sm:text-2xl font-semibold"> Goal </HeaderTitle>
                <p className="mt-4">
                    BOUTEN-E aims to improve waste management by using smart technology to make recycling more efficient, reduce waste, and promote sustainability. Our goal is to help individuals and communities make better decisions with real-time data, contributing to a cleaner and more sustainable environment.
                </p>
            </section>
            <section className="mt-6">
                <HeaderTitle to="mission" className="text-xl sm:text-2xl font-semibold"> Mission </HeaderTitle>
                <p className="mt-4">
                    BOUTEN-E is committed to promoting efficient and sustainable waste management through innovative technology. We aim to empower individuals and communities to reduce waste, increase recycling, and foster a cleaner, more sustainable future for all.
                </p>
            </section>
        </>
    );
}
