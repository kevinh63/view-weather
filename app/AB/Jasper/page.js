"use client"

import Link from "next/link"
import WeatherInfo from "../../_utils/weather"

export default function Jasper(){
    return(
        <div>
            <h1>test2</h1>
            <Link href="../../" className="hover:underline">Back &lt;-</Link>
        </div>
    )
}