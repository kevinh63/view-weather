"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Banff(){
    return(
        <div class="bg-gray-700">
            <WeatherInfo location="Banff" />
            
            <div class="text-center">
                <Link href="../" className="hover:underline">Back &lt;-</Link>
            </div>
        </div>
    )
}