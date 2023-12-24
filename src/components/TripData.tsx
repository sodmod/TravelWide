interface TripDataInfo {
  image: string;
  heading: string;
  text: string;
}

function TripData({ tripData }: { tripData: TripDataInfo[] }) {
  return (
    <>
      {tripData.map((data, index) => {
        return (
          <div key={index} className="t-card">
            <div className="t-image">
              <img src={data.image} alt="" />
            </div>
            <h4>{data.heading}</h4>
            <p>{data.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default TripData;
