"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Vancouver(){
    return(
        <div>
            <WeatherInfo location="Vancouver" />
            <Link href="../../" className="hover:underline">Back &lt;-</Link>
        </div>
    )
}