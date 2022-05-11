const Service = require('./service')
const BASE_URL_1 = "https://swapi.dev/api/planets/1/"
const BASE_URL_2 = "https://swapi.dev/api/planets/2/"

;
(async () => {
    {
        const service = new Service()
        const withoutStub = await service.makeRequest(BASE_URL_1)
        console.log(withoutStub)
    }
})()
