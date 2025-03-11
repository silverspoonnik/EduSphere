"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "Mon",
        present: 60,
        absent: 40,
    },
    {
        name: "Tue",
        present: 70,
        absent: 30,
    },
    {
        name: "Wed",
        present: 80,
        absent: 20,
    },
    {
        name: "Thu",
        present: 70,
        absent: 30,
    },
    {
        name: "Fri",
        present: 50,
        absent: 50,
    },

];
const AttendenceChart = () => {
    return (
        <div className="bg-white w-full h-full rounded-xl p-4 ">
            {/* {TITLE} */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendence</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}></Image>
            </div>
            {/* {charts} */}
            <div className='relative w-full h-[90%]'>
            <ResponsiveContainer >
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
          
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
          <Bar dataKey="absent" fill="#C3EBFA"  legendType="circle" radius={[10,10,0,0]} />
          <Bar dataKey="present" fill="#FAE27C" legendType="circle" radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
                
            </div>


        </div>
    )
}

export default AttendenceChart;