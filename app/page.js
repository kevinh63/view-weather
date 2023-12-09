export default function Home() {
  return (
    <main className="bg-gray-600 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-5">
        <h1 className="text-center text-white text-3xl font-bold py-5">View Weather in AB and BC</h1>

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
            <ol className="list-decimal list-inside text-white">
              <li>Banff</li>
              <li>Jasper</li>
              <li>Calgary</li>
              <li>Edmonton</li>
              <li>Lethbridge</li>
            </ol>
          </div>

          {/* Section 4: Top 5 Cities/Towns in BC */}
          <div className="bg-gray-700 p-5 rounded-lg col-span-1">
            <h2 className="text-center text-white text-xl font-semibold">Top 5 Cities/Towns in BC</h2>
            <ol className="list-decimal list-inside text-white">
              <li>Vancouver</li>
              <li>Victoria</li>
              <li>Whistler</li>
              <li>Kelowna</li>
              <li>Tofino</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}
