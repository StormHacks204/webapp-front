import { useState } from "react";

const Home = () => {
    const [location, setLocation] = useState({ latitude: 0 , longitude: 0}
    );
  const [error, setError] = useState("Error");
  

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

  return (
    <div>
      <h1>Get User Location</h1>
      <button onClick={getLocation}>Get Location</button>

      {location.latitude && location.longitude ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>{error || "Click the button to get the location."}</p>
      )}
    </div>
  );
}

export default Home
