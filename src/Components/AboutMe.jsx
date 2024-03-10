import { Button, Link } from "@nextui-org/react";
import ProgressAbout from "./ProgressAbout";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function AboutMe() {
    const values = [
        {
            value: 100,
            label: "ASP.Net Core"
        },
        {
            value: 90,
            label: "C#"
        },
        {
            value: 75,
            label: "JavaScript"
        },
        {
            value: 80,
            label: "React"
        },
        {
            value: 50,
            label: "Angular"
        },
        {
            value: 90,
            label: "Tailwind CSS"
        },
        {
            value: 90,
            label: "HTML5"
        },
        {
            value: 70,
            label: "SASS"
        },
        {
            value: 70,
            label: "Git"
        },
        {
            value: 80,
            label: "MySQL"
        },
        {
            value: 80,
            label: "SQL Server"
        },
        {
            value: 60,
            label: "MongoDB"
        }
    ];

    useEffect(() => {
        Aos.init({duration:800})
    }, []);

    return (
        <div className="bg-zinc-900 grid grid-cols-1 lg:grid-cols-3 lg:gap-10 px-10 py-6 sm:py-8 sm:px-20 md:px-28 md:py-12 lg:px-40" id="about">
            <div className="grid gap-8 justify-center lg:justify-start md:col-span-1 mb-10">
                <div className="flex justify-center lg:justify-start overflow-hidden w-64">
                    <img src="/photoAbout.jpg" className="w-[100%] hover:scale-110 hover:transition-all ease-in-out duration-500" />
                </div>
                <div className="flex justify-center lg:justify-start">
                    <Link href="https://www.canva.com/design/DAF7-vAhGeE/uOrWmFhtHKs0Vvzmtzyc2w/edit?utm_content=DAF7-vAhGeE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">
                        <Button className="bg-violet-400 rounded-none text-lg p-4 text-white">
                            CV Silvia Jaimes
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="md:col-span-2">
                <h3 className="text-md text-violet-400 mb-3" data-aos="fade-right">Who am I?</h3>
                <h2 className="text-2xl mb-3 text-white font-bold" data-aos="fade-right">I'm Silvia Jaimes a full stack software developer.</h2>
                <p className="text-justify text-md text-white" data-aos="fade-left">Software developer, proactive and organized, with teamwork skills, self-management, achievement orientation and emotional management. Extensive knowledge in thhe implementation of web applications and database, promoting peersonal and professional growth. In my free time I keep myself updated on technology and I always like to learn somwthing new.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center">
                    {values.map((item) => (
                        <ProgressAbout key={item.label} itemLabel={item.label} itemValue={item.value} />
                    ))}
                </div>
            </div>
        </div>
    );
}