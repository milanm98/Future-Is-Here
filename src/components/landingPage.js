import mapImage from "../images/background.png";

function LandingPage(){
    return(
        <div className="w-screen h-screen">
            <img className="w-full h-full" src={mapImage} alt="map"></img>

        </div>
    )
}

export default LandingPage;