import AttendanceForm from "@/components/AttendanceForm";
import {ThemeSwitcher} from "@/components/ThemeSwitcher";

export default function Home() {
    return (
        <main
            className="min-h-screen w-full flex flex-col items-center justify-center p-0 md:p-4 bg-gradient-brand transition-colors duration-500">
            <ThemeSwitcher/>
            <AttendanceForm/>
        </main>
    );
}
