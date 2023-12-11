"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Lethbridge(){
    return(
        <div>
            <WeatherInfo location="Lethbridge" />
            <Link href="../../" className="hover:underline">Back &lt;-</Link>
        </div>
    )
}