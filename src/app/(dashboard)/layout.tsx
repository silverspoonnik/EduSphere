import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex px-2">
        {/* {left} */}
        <div className="w-[15%] md:w-[8%] lg:w-[16%] xl :w-[15%] ">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 ">
          <Image src="/logo.png" alt="" width={32} height={32} ></Image>
            <span className="hidden font-bold lg:block">EduSphere</span>
          </Link>
          <Menu></Menu>
        </div>
        {/* {right} */}
        <div className="w-[85%] md:w-[92%] lg:w-[84%] xl :w-[85%] bg-[#F7F8FA] overflow-scroll">
          <Navbar/>
          {children}
          </div>
      </div>
    );
  }