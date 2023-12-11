"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Calgary(){
    return(
        <div>
            <WeatherInfo location="Calgary" />
            
            <div class="text-center">
                <Link href="../" className="hover:underline">Back &lt;-</Link>
            </div>
        </div>
    )
}