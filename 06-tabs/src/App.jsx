import { useState } from "react";
import BtnContainer from "./ButtonContainer";
import JobInfo from "./JobInfo";
import { useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobsData = await response.json();
    setJobs(jobsData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
}

export default App;
