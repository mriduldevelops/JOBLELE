import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import JobCard from "./components/JobCard";
import jobData from "./components/jobDummyData";
export default function App() {
  return (
    <div className="w-full h-full bg-zinc-800 pb-2"> 
    <Navbar/>
    <Header/>
    <Searchbar/>
    {jobData.map((job)=>(<JobCard key={job.id} {...job}/>))}
    </div>
  )
}