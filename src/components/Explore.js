import {lakes} from "../data/lakes";

export function Explore(props){
    const lake = lakes.find(currLake => currLake.id === props.lakeId);

    if (!lake) return <h2>Ooops! We don't have information on this lake.</h2>

    const hotelArr = (lake.hotels && lake.hotels.map(function HotelInfo(hotel) {
        return (
            <div className = "each-hotel" key = {hotel.id}>
                <div className="hotel-header">
                    <h3>{hotel.name}</h3>
                </div>
                <div className="hotel-body">
                    <p>{hotel.address}</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Contact</td>
                                <td>{hotel.phone}</td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td>{hotel.website}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    })) || [];
    const hikingSiteArr = (lake.hiking_sites && lake.hiking_sites.map(function HikeInfo(hiking) {
        return (
            <div className = "each-hiking" key = {hiking.id}>
                <div className="hiking-header">
                    <h3>{hiking.name}</h3>
                </div>
                <div className="hiking-body">
                    <p>{hiking.address}</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Contact</td>
                                <td>{hiking.phone}</td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td>{hiking.website}</td>
                            </tr>
                            <tr>
                                <td>Review</td>
                                <td>{hiking.review}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    })) || [];
    const restaurantsArr = (lake.restaurants && lake.restaurants.map(function RestaurantInfo(restaurant) {
        return (
            <div className = "each-restaurant" key = {restaurant.id}>
                <div className="restaurant-header">
                    <h3>{restaurant.name}</h3>
                </div>
                <div className="restaurant-body">
                    <p>{restaurant.address}</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Review</td>
                                <td>{restaurant.review}</td>
                            </tr>
                            <tr>
                                <td>Hours</td>
                                <td>{restaurant.hours}</td>
                            </tr>
                            <tr>
                                <td>Facilities</td>
                                <td>{restaurant.facilities}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    })) || [];
    const boatRentalArr = (lake.boatRental && lake.boatRental.map(function HotelInfo(boat) {
        return (
            <div className = "each-boat" key = {boat.id}>
                <div className="boat-header">
                    <h3>{boat.name}</h3>
                </div>
                <div className="hotel-body">
                    <p>{boat.address}</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Contact</td>
                                <td>{boat.phone}</td>
                            </tr>
                            <tr>
                                <td>Hours</td>
                                <td>{boat.hours}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    })) || [];

    return (
        <div className="explore-container">
            <div className = "eachLake" key = {lake.id}>
                <div className="lake-header">
                    <h3>{lake.name}</h3>
                    <p>{lake.location}</p>
                </div>
                <div className="lake-body">
                    <div className="lake-image-container">
                        <img className="lake-image" src={lake.profileImage} alt={lake.name} />
                    </div>
                    <p>{lake.description}</p>
                </div>
            </div>
            <h2>Hotels</h2>
            {hotelArr.length ? hotelArr : <p>No hotels in the area.</p>}
            <h2>Hiking Sites</h2>
            {hikingSiteArr.length ? hikingSiteArr :<p>No hiking sites in the area.</p> }
            <h2>Restaurants</h2>
            {restaurantsArr.length ? restaurantsArr: <p>No restaurants near this area</p>}
            <h2>Boat Rentals</h2>
            {boatRentalArr.length ? boatRentalArr: <p>No boat rental near this area</p>}
        </div>
        
    );

}