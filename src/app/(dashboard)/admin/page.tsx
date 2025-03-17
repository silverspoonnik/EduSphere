import CountCharts from "@/components/CountCharts";
import UserCards from "@/components/UserCards"
import AttendenceChart from "@/components/AttendenceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
const AdminPage= ()=>{
    return (
        <div className="flex flex-col md:flex-row p-4 gap-4">
            {/* {left} */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* {UserCards} */}
            <div className="flex gap-4 justify-between flex-wrap ">
                <UserCards type="Students"></UserCards>
                <UserCards type="Parents"></UserCards>
                <UserCards type="Teachers"></UserCards>
                <UserCards type="Staff"></UserCards>
            </div>
            {/* {MiddleCharts} */}
            <div className="flex gap-4 flex-col lg:flex-row">
                {/* {COUNT CHARTS } */}
                <div className="w-full lg:w-1/3 h-[450px]">
                <CountCharts/>
                </div>
                {/* {ATTENDENCE CHARTS} */}
                <div className="w-full lg:w-2/3  h-[450px]">
                <AttendenceChart></AttendenceChart>
                </div>
            </div>
             {/* {BottomCharts} */}
             <div className="w-full h-[500px]">
                <FinanceChart/>
             </div>
            </div>      
            {/* {right} */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <EventCalendar></EventCalendar>
            <Announcements></Announcements>
            </div>
        </div>
    )
}

export default AdminPage;