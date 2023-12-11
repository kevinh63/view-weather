"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Victoria(){
    return(
        <div>
            <WeatherInfo location="Victoria" />

            <div class="text-center">
                <Link href="../" className="hover:underline">Back &lt;-</Link>
            </div>
        </div>
    )
}