import { useEffect, useState } from "react";
import "./Activity.scss";

const dummyData = (dataId) => {
  switch (dataId) {
    case 1:
      return {
        title: "Activity 1",
        description: "This is activity 1. Everyones favorite activity!!",
        picture: "/logo512.png",
      };
    case 2:
      return {
        title: "Activity 2",
        description: "This is activity 2. Everyones favorite activity!!",
        picture: "/logo512.png",
      };
    case 3:
      return {
        title: "Activity 3",
        description: "This is activity 3. Everyones favorite activity!!",
        picture: "/logo512.png",
      };
    case 4:
      return {
        title: "Activity 4",
        description: "This is activity 4. Everyones favorite activity!!",
        picture: "/logo512.png",
      };
    case 5:
      return {
        title: "Activity 5",
        description: "This is activity 5. Everyones favorite activity!!",
        picture: "/logo512.png",
      };
    case 6:
      return {
        title: "Activity 6",
        description: "This is activity 6. Everyones favorite activity!!",
        picture: "/logo512.png",
      };
  }
};

const Activity = (props) => {
  const [activityObject, setActivityObject] = useState(null);

  const cardClassName = `activity-info-${props.side}`;
  const { pathname } = window.location;
  const data = dummyData(parseInt(pathname.slice(1)));

  console.log(data);

  useEffect(() => {
    setActivityObject(data);
  }, []);

  if (activityObject === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="activity-main">
      <section className="activity-section">
        <div className={cardClassName}>
          <h1 className="Activity-title">{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </section>
    </main>
  );
};

export default Activity;
