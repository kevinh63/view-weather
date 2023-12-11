"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Edmonton(){
    return(
        <div>
            <WeatherInfo location="Edmonton" />
            
            <div class="text-center">
                <Link href="../" className="hover:underline">Back &lt;-</Link>
            </div>
        </div>
    )
}