import Map from "./components/Map"

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Map position={[22.416724, -83.700273]} zoom={13} />
    </div>
  )
}
