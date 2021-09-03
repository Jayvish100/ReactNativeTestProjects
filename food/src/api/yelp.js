import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer BJqwKCbawlTITUPzHnRkBZEDqTtxcGcS2RqYEOmY-U1YskEIbX5rS8__NXmKhaQB52AQ9hyJxSdrvO3vKDJh-etD_tZWZI6Xa_Crb1HutqxM9CFCAAmDrBKKnrjIYHYx'
    }
});