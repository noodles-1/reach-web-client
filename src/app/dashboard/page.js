'use client'

import * as React from "react"

import { addDays, subDays } from "date-fns"

import { CalendarRange } from "@/components/cards/calendar-range";
import TotalCounts from "@/components/cards/charts/total-counts";
import { WasteTrends } from "@/components/cards/charts/waste-trends";
import HeaderTitle from "@/components/header-title";
import AboutDashboard from "@/components/cards/about-dashboard";

const Dashboard = () => {
    const [date, setDate] = React.useState({
        from: subDays(new Date(), 3),
        to: addDays(new Date(), 3),
    });

    return (
        <>
            <h1 className="text-2xl sm:text-3xl font-semibold"> R.E.A.C.H Waste Management Dashboard </h1>
            <h1 className="text-xl sm:text-2xl mt-6"> Enhancing Waste Management Practices at Arellano University - Jose Rizal Campus </h1>
            <section className="mt-6">
                <HeaderTitle to="introduction" className="text-xl sm:text-2xl font-semibold">
                    Introduction to the R.E.A.C.H Waste Management Dashboard
                </HeaderTitle>
                <p className="mt-4">
                    Welcome to the R.E.A.C.H Waste Management Dashboard! This platform is designed to enhance waste management practices at {' '}
                    <span className="font-semibold">
                        Arellano University - Jose Rizal Campus.
                    </span>
                </p>
            </section>
            <section className="mt-6">
                <HeaderTitle to="goals" className="text-xl sm:text-2xl font-semibold"> 
                    Goals of the R.E.A.C.H Project
                </HeaderTitle>
                <ol className="list-inside list-disc mt-4">
                    <li className="mb-4"> 
                        <strong> Raise awareness: </strong> 
                        Increase student awareness of waste management issues.
                    </li>
                    <li className="mb-4"> 
                        <strong> Promote recycling: </strong> 
                        Encourage recycling practices among students and faculty.
                    </li>
                    <li className="mb-4"> 
                        <strong> Track waste: </strong> 
                        Monitor waste generation and recycling efforts on campus.
                    </li>
                    <li className="mb-4"> 
                        <strong> Engage the community: </strong> 
                        Foster a culture of sustainability within the university.
                    </li>
                </ol>
            </section>
            <section className="my-6 w-full lg:h-[1200px] lg:flex gap-2">
                <div className="flex flex-col gap-2 lg:max-w-[200px] xl:max-w-[400px]">
                    <AboutDashboard />
                    <CalendarRange date={date} setDate={setDate} />
                    <TotalCounts date={date} />
                </div>
                <div className="grid grid-rows-2 gap-2 flex-1 mt-2 lg:mt-0">
                    <WasteTrends item="bottle" date={date} />
                    <WasteTrends item="utensil" date={date} />
                </div>
            </section>
        </>
    );
}
 
export default Dashboard;