import About from "./assets/Components/About";
import Hero from "./assets/Components/Hero";
import Navbar from "./assets/Components/Navbar";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <About />
      {/* Test Sections */}
       <div id="sec" className="h-screen bg-purple-600 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Section 1</h1>
      </div>

      <div className="h-screen bg-green-500 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Section 2</h1>
      </div>

      <div className="h-screen bg-blue-700 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Section 3</h1>
      </div>

      <div className="h-screen bg-orange-400 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Section 4</h1>
      </div> 
      <section className="h-100" ></section>
    
    </>
  )
}

export default App;
