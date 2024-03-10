import { Progress } from "@nextui-org/react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function ProgressAbout({ itemLabel, itemValue }) {
    useEffect(() => {
        Aos.init({duration:800})
    }, []);

    return (
        <Progress
            size="md"
            radius="md"
            classNames={{
                base: "max-w-md",
                indicator: "bg-purple-400",
                label: "tracking-wider text-md text-white",
                value: "text-white",
            }}
            label={itemLabel}
            value={itemValue}
            showValueLabel={true}
            key={itemLabel}
            data-aos="fade-right"
        />
    );
}