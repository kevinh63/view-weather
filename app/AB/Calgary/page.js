"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Calgary(){
    return(
        <div>
            <WeatherInfo location="Calgary" />
            <Link href="../../" className="hover:underline">Back &lt;-</Link>
        </div>
    )
}