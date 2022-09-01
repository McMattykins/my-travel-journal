import './App.css';
import Banner from "./components/Banner"
import Location from "./components/Location"
import data from "./data"

const locations = data.sort(function(a,b){
  return new Date(b.startDate) - new Date(a.startDate)
}).map(location => <Location key={location.id} {...location} />)
console.log(locations)
function App() {
  return (
    <>
      <Banner />
      <main className="container">
        {locations}
      </main>
    </>
  );
}

export default App;
