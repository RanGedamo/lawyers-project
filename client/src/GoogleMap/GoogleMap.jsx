
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const libraries = ["places"]

function GoogleMapLocation() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    libraries
  })
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });

  if (loadError) return <div>Error loading map</div>
  if (!isLoaded) return <div>loading...</div>
  return (
    <div className='ran' >
      <div style={{display:"flex",justifyContent:"center"}}>

 
      </div>
      <Map />
    </div>

  );
}
export default GoogleMapLocation;

const Map = ({coordinates}) => {
  return <GoogleMap zoom={16} center={{ lat: 32.3185138, lng: 34.935631}} mapContainerStyle={{ width: "100%", height: "49vh" }}>

{ coordinates?<MarkerF position={{ lat: 32.3185138, lng: 34.935631}} /> : ""}

  </GoogleMap>
}

export const PlacesAddress = ()=>{
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    console.log(latLng);
  };
  return(
    <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {/* <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}

            <MDBInput  wrapperClass="mb-4" label="Location" {...getInputProps()} /> 

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
  )
}