import Link from "next/link";
import WeatherInfo from "./_utils/weather";

export default function Home() {
  return (
    <main className="bg-gray-600 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-5">
        <h1 className="text-center text-white text-3xl font-bold py-5">View Weather in AB and BC</h1>
        <p className="text-center text-white">Select from the list to be redirected for details on the current weather of the selected location!</p>

        {/* Grid container */}
        <div className="grid grid-cols-2 gap-4">

          {/* Section 1: Alberta */}
          <div className="bg-gray-700 p-5 rounded-lg">
            <h2 className="text-center text-white text-xl font-semibold">Alberta</h2>
            {/* Content for Alberta */}
          </div>

          {/* Section 2: British Columbia */}
          <div className="bg-gray-700 p-5 rounded-lg">
            <h2 className="text-center text-white text-xl font-semibold">British Columbia</h2>
            {/* Content for British Columbia */}
          </div>

          {/* Section 3: Top 5 Cities/Towns in AB */}
          <div className="bg-gray-700 p-5 rounded-lg col-span-1">
            <h2 className="text-center text-white text-xl font-semibold">Top 5 Cities/Towns in AB</h2>
            <ol className="list-decimal list-inside text-white pl-4"> {/* Added left padding */}
              <li><Link href="AB/Banff" className="hover:underline">Banff</Link></li>
              <li><Link href="AB/Jasper" className="hover:underline">Jasper</Link></li>
              <li><Link href="AB/Calgary" className="hover:underline">Calgary</Link></li>
              <li><Link href="AB/Edmonton" className="hover:underline">Edmonton</Link></li>
              <li><Link href="AB/Lethbridge" className="hover:underline">Lethbridge</Link></li>
            </ol>
          </div>

          {/* Section 4: Top 5 Cities/Towns in BC */}
          <div className="bg-gray-700 p-5 rounded-lg col-span-1">
            <h2 className="text-center text-white text-xl font-semibold">Top 5 Cities/Towns in BC</h2>
            <ol className="list-decimal list-inside text-white"> 
              <li><Link href="BC/Vancouver" className="hover:underline">Vancouver</Link></li>
              <li><Link href="BC/Victoria" className="hover:underline">Victoria</Link></li>
              <li><Link href="BC/Whistler" className="hover:underline">Whistler</Link></li>
              <li><Link href="BC/Kelowna" className="hover:underline">Kelowna</Link></li>
              <li><Link href="BC/Tofino" className="hover:underline">Tofino</Link></li>
            </ol>
          </div>
        </div>

        {/* Weather Map Container */}
        <div className="flex justify-center pt-5">
          <iframe
              title="Weather Map"
              width="800"
              height="600" 
              className="border-none"
              src={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=0&lon=0&zoom=5`}>
          </iframe>
        </div>
      </div>
    </main>
  )
}
