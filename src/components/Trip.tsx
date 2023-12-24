import TripData from "./TripData";
import "./TripStyles.css";

interface TripDataInfo {
  image: string;
  heading: string;
  text: string;
}

const objects: TripDataInfo[] = [
  {
    image:
      "https://images.unsplash.com/photo-1682687220566-5599dbbebf11?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Trip in Indonesia",
    text: "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Trip in Malaysia",
    text: "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558622729-86c8a43230ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    heading: "Trip in France",
    text: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.",
  },
];

function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps. </p>
        <div className="tripcard">
          <TripData tripData={objects} />
        </div>
      </div>
    </>
  );
}

export default Trip;
