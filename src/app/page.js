import HeaderTitle from "@/components/header-title";

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-semibold"> Home | ASTCAW </h1>
            <h1 className="text-2xl mt-6"> Proper Waste Disposal </h1>
            <section className="mt-6 text-justify">
                <HeaderTitle to="purpose" className="text-2xl font-semibold"> Educational purpose </HeaderTitle>
                <p className="mt-4">
                    Proper waste disposal is vital for maintaining clean and healthy environments for both communities and individuals. When individuals take the initiative to dispose of waste, such as bottles, utensils, and other materials, in the appropriate bins, it significantly reduces littering in public areas. Litter not only diminishes the aesthetic value of an environment but also causes serious environmental damage. Improperly discarded items may end up in waterways, harming aquatic life, or take years to decompose in landfills, contributing to pollution. Ensuring that waste is disposed of correctly helps create a cleaner, more organized environment, making public spaces safer and more enjoyable for everyone.
                </p>
                <p className="mt-4">
                    In addition to improving cleanliness, responsible waste disposal has a positive and far-reaching impact on the environment and society. When waste is properly managed, recycling efforts become more effective, leading to the conservation of natural resources and a reduced need for raw materials. This results in less pollution and helps preserve ecosystems. Proper waste management also alleviates pressure on landfills, preventing them from overflowing and minimizing the environmental harm caused by waste accumulation. Communities that adopt responsible waste disposal practices enjoy healthier spaces, reduced pollution, and an improved quality of life. Encouraging these behaviors fosters a culture of sustainability, ensuring that future generations inherit a cleaner, greener planet.
                </p>
            </section>
            <section className="mt-6 text-justify">
                <HeaderTitle to="benefits" className="text-2xl font-semibold"> Benefits </HeaderTitle>
                <p className="mt-4">
                    Encouraging individuals to properly dispose of waste, including bottles and utensils, plays a key role in keeping surroundings clean. By promoting responsible waste disposal, we can reduce littering and prevent the build-up of waste in public spaces, ultimately protecting the environment. This approach not only maintains cleanliness but also ensures that waste is handled in an efficient, organized way.
                </p>
                <p className="mt-4">
                    Moreover, proper waste disposal practices have significant benefits for both the environment and society. When people take responsibility for their waste, recycling efforts are enhanced, and the strain on landfills is reduced. This results in cleaner, healthier public spaces and a noticeable decrease in pollution. Ultimately, promoting proper waste management nurtures a culture of sustainability that benefits the planet and supports future generations.
                </p>
            </section>
            <section className="mt-6 text-justify">
                <HeaderTitle to="impact" className="text-2xl font-semibold"> Impact </HeaderTitle>
                <p className="mt-4">
                    By adopting proper waste disposal practices, communities experience cleaner, healthier environments. This not only enhances the aesthetic value of public spaces but also fosters a sustainable environment for future generations. Encouraging responsible waste management can lead to substantial reductions in pollution, the preservation of ecosystems, and a stronger sense of community.
                </p>
            </section>
        </>
    );
}
