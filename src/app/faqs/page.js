import HeaderTitle from "@/components/header-title";
import { Separator } from "@/components/ui/separator";

const FAQs = () => {
    return (
        <div>
            <h1 className="text-2xl sm:text-3xl font-semibold"> Dashboard User Guide and FAQs </h1>
            <section className="mt-6">
                <HeaderTitle to="guide" className="text-xl sm:text-2xl"> Step-by-step guide on how to use the dashboard: </HeaderTitle>
                <ol className="list-inside list-decimal mt-6">
                    <li className="mb-6"> 
                        <span className="font-semibold text-xl sm:text-2xl"> Open the web browser </span>
                        <p className="mt-2"> 
                            Launch your preferred web browser and enter the website URL into the address bar. Press Enter to access the website.
                        </p>
                    </li>
                    <li className="mb-6"> 
                        <span className="font-semibold text-xl sm:text-2xl"> Access the dashboard </span>
                        <p className="mt-2"> 
                            Locate the dashboard link or tab in the website's main menu. Click on it to open the dashboard.
                        </p>
                    </li>
                    <li className="mb-6"> 
                        <span className="font-semibold text-xl sm:text-2xl"> Familiarize with the layout </span>
                        <p className="mt-2"> 
                            Once the dashboard loads, take time to explore the layout. This includes:
                        </p>
                        <ol className="list-inside list-disc mt-4">
                            <li className="mb-4"> 
                                <strong> Navigation menu: </strong> 
                                Found at the left side of the screen. 
                            </li>
                            <li className="mb-4"> 
                                <strong> Widgets or panels: </strong> 
                                These display important charts/data summaries.
                            </li>
                            <li className="mb-4"> 
                                <strong> Settings: </strong> 
                                Located in the navigation menu.
                            </li>
                        </ol>
                    </li>
                    <li className="mb-6"> 
                        <span className="font-semibold text-xl sm:text-2xl"> Explore features </span>
                        <p className="mt-2"> 
                            You can interact with various features to analyze data, locate content, and explore more details.
                        </p>
                        <ol className="list-inside list-disc mt-4">
                            <li className="mb-4"> 
                                <strong> View and analyze data summaries and charts: </strong> 
                                These provide quick insights into the data you are tracking. 
                            </li>
                            <li className="mb-4"> 
                                <strong> Interact with buttons, tabs, and dropdown menus: </strong> 
                                These allow you to delve deeper into detailed information.
                            </li>
                        </ol>
                    </li>
                </ol>
            </section>
            <Separator className="my-4" />
            <section className="mt-6">
                <HeaderTitle to="questions" className="text-xl sm:text-2xl"> Common questions regarding the data and its interpretation: </HeaderTitle>
                <h1 className="text-xl sm:text-2xl font-semibold mt-6"> What does the total waste count represent? </h1>
                <p className="mt-4"> It shows the cumulative count of different waste categories (such as bottles and utensils) for the selected date. </p>
                <h1 className="text-xl sm:text-2xl font-semibold mt-6"> Why does the chart sometimes show zero or empty data? </h1>
                <p className="mt-4"> This could occur when no data is available for that specific time or category. You may need to check the date or try refreshing the page. </p>
                <h1 className="text-xl sm:text-2xl font-semibold mt-6"> How are the recycling trends tracked? </h1>
                <p className="mt-4"> The trends track the volume of recyclable items disposed of on campus, which can be analyzed over specific time periods like today, this month, or year. </p>
            </section>
            <Separator className="my-4" />
            <section className="mt-6">
                <HeaderTitle to="issues" className="text-xl sm:text-2xl"> Technical issues </HeaderTitle>
                <h1 className="text-xl sm:text-2xl font-semibold mt-6"> Camera cannot detect trash </h1>
                <p className="mt-4"> 
                    <strong> Solution: </strong> 
                    Ensure you are within the camera's detection range. If the trash bin hasn't been opened yet, try waiting a few seconds for the system to process the data.
                </p>
                <h1 className="text-xl sm:text-2xl font-semibold mt-6"> Data not displaying properly </h1>
                <p className="mt-4"> 
                    <strong> Solution: </strong> 
                    Try refreshing the dashboard page. If issues persist, check your internet connection and ensure the system is operating correctly.
                </p>
                <h1 className="text-xl sm:text-2xl font-semibold mt-6"> Issues with the trash collector data </h1>
                <p className="mt-4"> 
                    <strong> Solution: </strong> 
                    If the data is malfunctioning, try refreshing the dashboard to re-fetch updated information.
                </p>
            </section>
        </div>
    );
}
 
export default FAQs;