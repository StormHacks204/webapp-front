import { useEffect, useState } from "react";
import PostList from "../components/postList";

const Home = () => {
    const [location, setLocation] = useState({ latitude: 0 , longitude: 0}
    );
  const [error, setError] = useState("Error");

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                setError("User denied the request for Geolocation.");
                break;
              case error.POSITION_UNAVAILABLE:
                setError("Location information is unavailable.");
                break;
              case error.TIMEOUT:
                setError("The request to get user location timed out.");
                break;
              default:
                setError("An error occurred.");
            }
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };
    getLocation()

  }, [])
  

  

  return (
    <div>
      <div>
        <h1>Get User Location</h1>

        {location.latitude && location.longitude ? (
          <div>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        ) : (
          <p>{error || "Click the button to get the location."}</p>
        )}
      </div>
      <div className="feed">
        <h1>Posts are here</h1>
        <PostList />
      </div>
    </div>
  );
}

export default Home

