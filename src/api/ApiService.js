class ApiService {

    /**
     * define base url and field schemas here
     * @returns {ApiService}
     */
    constructor() {
        this.apiUrl = '';
    }

    async getTodos() {
        const data = await fetch('https://api.myjson.com/bins/ewybf').then((res)=>{
            return res.json();
        })

        return data;
        
    }
}

export default new ApiService();