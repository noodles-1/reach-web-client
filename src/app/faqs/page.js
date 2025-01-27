import HeaderTitle from "@/components/header-title";
import { Separator } from "@/components/ui/separator";

const FAQs = () => {
    return (
        <div>
            <h1 className="text-2xl sm:text-3xl font-semibold"> Dashboard User Guide and FAQs </h1>
            <section className="mt-6">
                <HeaderTitle to="guide" className="text-xl sm:text-2xl"> Step-by-step: How to use the dashboard </HeaderTitle>
                <ol className="list-inside list-decimal mt-6">
                    <li className="mb-6"> 
                        <span className="font-semibold text-xl sm:text-2xl"> Scan your waste </span>
                        <p className="mt-2"> 
                            Place your trash—whether a bottle or utensil—under the camera. Once scanned, the system will automatically log the item, and it will be counted on the website.
                        </p>
                    </li>
                    <li className="mb-6"> 
                        <span className="font-semibold text-xl sm:text-2xl"> Monitor fill levels </span>
                        <p className="mt-2"> 
                            View real-time updates on the bin's fill level from the dashboard, helping individuals track when it's time for collection.
                        </p>
                    </li>
                    <li className="mb-6"> 
                        <span className="font-semibold text-xl sm:text-2xl"> Track waste data </span>
                        <p className="mt-2"> 
                            Check the number of items disposed of per day or month, and see the potential earnings based on the recycling efforts.
                        </p>
                    </li>
                    <li className="mb-6"> 
                        <span className="font-semibold text-xl sm:text-2xl"> Generate reports </span>
                        <p className="mt-2"> 
                            Access analytics to track the waste management performance over time, including recycling rates.
                        </p>
                    </li>
                </ol>
            </section>
            <Separator className="my-4" />
            <section className="mt-6">
                <HeaderTitle to="faqs" className="text-xl sm:text-2xl"> Frequently asked questions </HeaderTitle>
                <h1 className="text-xl sm:text-2xl font-semibold mt-6"> Q: How do I know when to empty my trash bin? </h1>
                <p className="mt-4"> A: The BOUTEN-E system will buzz when the bin reaches a certain fill threshold, alerting you to empty it before it overflows. </p>
                <h1 className="text-xl sm:text-2xl font-semibold mt-6"> Q: What types of materials can I dispose of in the smart bin? </h1>
                <p className="mt-4"> A: BOUTEN-E is designed to accept bottles and utensils. The system will help you ensure proper disposal of these items. </p>
                <h1 className="text-xl sm:text-2xl font-semibold mt-6"> Q: How do I track earnings? </h1>
                <p className="mt-4"> A: The dashboard displays potential earnings based on the amount of recyclables processed, showing you how much your recycling efforts can contribute. </p>
            </section>
            <Separator className="my-4" />
            <section className="mt-6">
                <HeaderTitle to="issues" className="text-xl sm:text-2xl"> Technical issues </HeaderTitle>
                <p className="mt-4"> If you're experiencing technical issues with the BOUTEN-E website, please refer to the following steps: </p>
                <ol className="list-inside list-decimal mt-4">
                    <li className="mb-4"> 
                        <strong> Check your internet connection: </strong> 
                        Ensure your device is connected to a stable network.
                    </li>
                    <li className="mb-4"> 
                        <strong> Restart the website: </strong> 
                        Close and reopen the BOUTEN-E dashboard for troubleshooting.
                    </li>
                    <li className="mb-4"> 
                        <strong> Update software: </strong> 
                        Make sure you're using the latest version of the BOUTEN-E system by checking for any software updates.
                    </li>
                    <li className="mb-4"> 
                        <strong> Contact support: </strong> 
                        If issues persist, please reach out to our support team at _____________.
                    </li>
                </ol>
            </section>
        </div>
    );
}
 
export default FAQs;