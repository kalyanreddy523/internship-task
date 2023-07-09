import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import Map from './maps';
import Test from './range';

const MyComponent = () => {
  const [jsonData, setJsonData] = useState(null);

  const url = 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${search}&lang=en_US&units=km';
  const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': 'f11648291dmsh74e90c3ea7fb902p1735aejsnd7fd3b49398a',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};
  const fetchData = async () => {
    try {
      const response = await fetch(url,options);
      const value = await response.json();
      setJsonData(value);
      console.log(value)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Render the fetched data
  if (jsonData === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className='container-fluid p-3'>
        <div className='row'>
            <div className='col-6'>
              <div>
                <Test/>
              </div>
                <div className="d-flex flex-row mb-3">
                <div className="card p-2"><img src={jsonData.data.Typeahead_autocomplete.results[0].image.photo.photoSizes[4].url} alt='something' className='img-fluid'/></div>
                <div className="p-2">
                    <p className='fw-bold'>1.{jsonData.data.Typeahead_autocomplete.results[0].detailsV2.names.name}</p>
                    <p>points of interests and  Landmarks:</p>
                    <p className='fw-bold'>{jsonData.data.Typeahead_autocomplete.results[0].detailsV2.names.longOnlyHierarchyTypeaheadV2}</p>
                </div>
                </div>
                <div className="d-flex flex-row mb-3">
                <div className="card p-2"><img src={jsonData.data.Typeahead_autocomplete.results[3].image.photo.photoSizes[4].url} alt='something' className='img-fluid'/></div>
                <div className="p-2">
                    <p className='fw-bold'>2.{jsonData.data.Typeahead_autocomplete.results[3].detailsV2.names.name}</p>
                    <p>points of interests and  Landmarks:</p>
                    <p className='fw-bold'>{jsonData.data.Typeahead_autocomplete.results[3].detailsV2.names.longOnlyHierarchyTypeaheadV2}</p>
                </div>
                </div>
                <div className="d-flex flex-row mb-3">
                <div className="card p-2"><img src={jsonData.data.Typeahead_autocomplete.results[4].image.photo.photoSizes[4].url} alt='something' className='img-fluid'/></div>
                <div className="p-2">
                    <p className='fw-bold'>3.{jsonData.data.Typeahead_autocomplete.results[4].detailsV2.names.name}</p>
                    <p>points of interests and  Landmarks:</p>
                    <p className='fw-bold'>{jsonData.data.Typeahead_autocomplete.results[4].detailsV2.names.longOnlyHierarchyTypeaheadV2}</p>
                </div>
                </div>
            </div>
            <div className='col-6'>
            {/* <iframe
              width="600"
              height="450"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCCxXK2b-mb9xEXZqeYbteakUduK3KwN1U
                &q=Space+Needle,Seattle+WA">
            </iframe> */}
            <Map/>
            </div>
        </div>
    </div>
    </>
  );
};

export default MyComponent;
