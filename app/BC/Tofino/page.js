"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Tofino(){
    return(
        <div>
            <WeatherInfo location="Tofino" />

            <div class="text-center">
                <Link href="../" className="hover:underline">Back &lt;-</Link>
            </div>
        </div>
    )
}