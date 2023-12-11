"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Vancouver(){
    return(
        <div>
            <WeatherInfo location="Vancouver" />

            <div class="text-center">
                <Link href="../" className="hover:underline">Back &lt;-</Link>
            </div>Link>
        </div>
    )
}