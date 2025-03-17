    "use client"
    import { useState } from "react";
    import Calendar from "react-calendar";
    import 'react-calendar/dist/Calendar.css';
    import Image from "next/image";
    type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events=[
    {
        id:1,
        title: "this day",
        time:"12:00pm to 2:00pm",
        description:"on this day this will happen"
    },
    {
        id:2,
        title: "this day",
        time:"12:00pm to 2:00pm",
        description:"on this day this will happen"
    },
    {
        id:3,
        title: "this day",
        time:"12:00pm to 2:00pm",
        description:"on this day this will happen"
    }

]
    const EventCalendar = ()=>{
        const [value, onChange] = useState<Value>(new Date());

        return (
            <div className="bg-white p-4 rounded-md">
                <Calendar onChange={onChange} value={value} />
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold my-4">EVENTS</h1>
                    <Image src="/moreDark.png" alt="" width={20} height={20}></Image>
                </div>
                <div className="flex flex-col gap-4"> 
                    {events.map(event=>(
                        <div className="p-5 border-2 rounded-md border-gray-100 border-t-4 odd:border-t-Skyblue even:border-t-Purple" key={event.id}>
                            <div className="flex items-center justify-between">
                                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                                <span className="text-xs text-gray-400">{event.time}</span>
                                
                            </div>
                            <span>{event.description}</span>
                        </div>
                    )
                    )}
                </div>
            </div>
        )

    }

    export default EventCalendar;