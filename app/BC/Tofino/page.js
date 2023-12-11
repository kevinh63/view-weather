"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Tofino(){
    return(
        <div>
            <WeatherInfo location="Tofino" />
            <Link href="../../" className="hover:underline">Back &lt;-</Link>
        </div>
    )
}