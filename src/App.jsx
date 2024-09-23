// import './App.css'


import Category from "./components/category/Category"
import Search from "./components/search/search"
import TopBar from "./components/topBar/TopBar"

function App() {

  return (
    <>
    
      <TopBar />
      <Search />
      <Category />
      {/* <Category name="Cleaning" icon={<GiVacuumCleaner />} />
      <Category name="Repair" icon={<GiAutoRepair />} />
      <Category name="Painting" icon={<GiLargePaintBrush />} />
      <Category name="Shifting" icon={<CiDeliveryTruck />} />
      <Category name="Plumbing" icon={<MdOutlinePlumbing />} />
      <Category name="Electric" icon={<MdElectricBolt />} /> */}

    </>
  )
}

export default App
