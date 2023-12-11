import Link from "next/link";
import WeatherInfo from "../../_utils/weather";

export default function Victoria() {
    return (
        <div className="bg-gray-700 relative">
            <div className="fixed top-7 left-5">
                <Link href="../" className="hover:underline text-white bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out p-2 rounded-md cursor-pointer z-50">
                    Back &lt;-
                </Link>
            </div>

            <div className="pt-16">
                <WeatherInfo location="Victoria" />
            </div>
        </div>
    );
}
