export default function Home() {
  return (
    <main className="bg-gray-600 min-h-screen">
      <h1 className="text-center">View Weather in AB and BC</h1>

      {/* this is the grid */}
      <div className="bg-gray-600min-h-screen grid row-span-auto col-span-auto">
        {/* section 1 */}
        <div className="grid col-start-1 col-end-2 text-center">Alberta</div>
        {/* section 2 */}
        <div className="grid col-start-2 col-end-3 text-center">British Columbia</div>
        {/* section 3 */}
        <div className="grid col-start-1 col-end-2 row-start-2 text-center">section 3</div>
        {/* section 4 */}
        <div className="grid col-start-2 col-end-3 row-start-2 text-center">section 4</div>
      </div>
    </main>
  )
}