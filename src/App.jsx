import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Header from "./components/Header.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import ActivityDetail from "./components/ActivityDetail.jsx";
import Footer from "./components/Footer.jsx";
import Archived from "./components/Archived.jsx";

const App = () => {
  const [shouldShow, setShouldShow] = useState(true);
  const [data, setData] = useState(null);
  const [activityDetail, setActivityDetail] = useState(null);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://aircall-job.herokuapp.com/activities`
        );
        setData(response.data);
      } catch (err) {
        setData(null);
      }
    };
    getData();
  }, [shouldRefetch]);

  return (
    <div className="container">
      <Header setShouldShow={setShouldShow} shouldShow={shouldShow} />
      <ActivityFeed
        shouldShow={shouldShow}
        data={data}
        setShouldRefetch={setShouldRefetch}
        setActivityDetail={setActivityDetail}
        setOpen={setOpen}
      />
      <ActivityDetail
        shouldShow={shouldShow}
        activityDetail={activityDetail}
        setShouldRefetch={setShouldRefetch}
        setOpen={setOpen}
        open={open}
      />
      <Archived
        shouldShow={shouldShow}
        data={data}
        setShouldRefetch={setShouldRefetch}
        setActivityDetail={setActivityDetail}
        setOpen={setOpen}
      />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
