"use client"

import Link from "next/link"
import WeatherInfo from "./weather"

export default function Banff(){
    return(
        <div>
            <WeatherInfo location="Banff" />
            <Link href="../../" className="hover:underline">Back &lt;-</Link>
        </div>
    )
}