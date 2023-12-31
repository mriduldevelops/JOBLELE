import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import JobCard from "./components/JobCard";
import JobForm from "./components/JobForm";
import Footer from "./components/Footer";
// import jobData from "./components/jobDummyData";
import { useEffect, useState } from "react";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(
      jobsRef,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("experience", "==", jobCriteria.experience),
      where("location", "==", jobCriteria.location),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const showPostForm = (active) => {
    setIsActive(active);
  };

  return (
    <div className="w-full h-full bg-zinc-800 pb-2 overflow-y-auto">
      <Navbar showPostForm={showPostForm} />
      {isActive && (
        <JobForm showPostForm={showPostForm} fetchJobs={fetchJobs} />
      )}
      <Header />
      {!customSearch ? (
        <Searchbar fetchJobsCustom={fetchJobsCustom} />
      ) : (
        <button onClick={fetchJobs} className="my-10 flex mx-auto">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">
            Clear Filters
          </p>
        </button>
      )}

      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
      <Footer />
    </div>
  );
}
