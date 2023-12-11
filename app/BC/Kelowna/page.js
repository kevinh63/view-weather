"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Kelowna(){
    return(
        <div>
            <WeatherInfo location="Kelowna" />
            <Link href="../../" className="hover:underline">Back &lt;-</Link>
        </div>
    )
}