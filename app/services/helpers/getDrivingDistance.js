 export function getDrivingDistance(lat1, lng1, lat2, lng2) {
    const apiKey = 'AIzaSyD7e4cuSEMpIyLgiLM5skxZ7S6F9DXtggE';
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${lat1},${lng1}&destinations=${lat2},${lng2}&key=${apiKey}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.rows[0].elements[0].status === 'OK') {
                const distanceInMeters = data.rows[0].elements[0].distance.value;
                const distanceInKm = distanceInMeters / 1000;
                return distanceInKm;
            } else {
                throw new Error('Could not calculate driving distance.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Example usage:

