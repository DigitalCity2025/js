(async() => {
    const getWheather = (lat, lng) => {
        return fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=631d8910e6e2b10be6d70baee2b38510&units=metric')
            .then(data => data.json())
    }
    
    const DOM = {
        divTemp: document.getElementById('temp'),
    }
    
    getWheather(4, 50).then(data => {
        DOM.divTemp.textContent = data.main.temp       
    })
    DOM.divTemp.textContent = 'Chargement en cours'
})()
