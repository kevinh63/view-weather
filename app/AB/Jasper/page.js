"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Jasper(){
    return(
        <div>
            <WeatherInfo location="Jasper" />
            <Link href="../../" className="hover:underline">Back &lt;-</Link>
        </div>
    )
}