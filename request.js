const key = 'ef476b209998f6874e729c4400b0e08b';




const requestCity =async (city) =>{
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}`;

    // make fetch call (promise)
    const res = await fetch(baseURL + query);

    // get data
    const data = await res.json();
    return data
}

