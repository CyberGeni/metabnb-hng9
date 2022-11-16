import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import settings from "../assets/icons/settings.svg"
function PlaceToStay() {
    return ( 
        <div className="font-['Red_Rose'] overflow-hidden">
            <Navbar />
            <section className="text-sm lg:text-base space-x-3 w-4/5 my-6 flex items-center justify-between mx-auto">
                <span className="hidden md:inline">Restaurant</span>
                <span className="hidden md:inline">Cottage</span>
                <span className="hidden md:inline">Castle</span>
                <span className="hidden md:inline">Fantasy city</span>
                <span className="hidden md:inline">Beach</span>
                <span className="hidden md:inline">Cabins</span>
                <span className="hidden md:inline">Off-grid</span>
                <span className="hidden md:inline">Farm</span>
                <div className="mr-0 flex border border-slate-300 px-4 py-2 rounded space-x-2">
                    <span>Location</span>
                    <img src={settings} alt="" />
                </div>
            </section>
            <Cards />
            <Cards />
            <Footer />
        </div>
     );
}

export default PlaceToStay;