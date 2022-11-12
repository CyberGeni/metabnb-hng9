import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../assets/images/hero-img.svg"
import MBToken from "../assets/images/mbtoken-group-logo.svg"
import Metamask from "../assets/images/metamask-group-logo.svg"
import Opensea from "../assets/images/opensea-group-logo.svg"
import ThreePack from "../assets/images/3-pack-nft.svg"
import Cards from "../components/Cards";
function Home() {
    return ( 
        <div className="font-['Red_Rose']">
            <Navbar />
            <main>
                {/* hero */}
                <div className="min-h-[85vh] flex flex-col items-center justify-between">
                    <section className="w-5/6 mx-auto flex flex-col sm:flex-row">   
                        <div className="space-y-5 my-auto">
                            <h1 className="w-5/6 font-medium text-5xl leading-tight">Rent a <span className="text-[#A02279]">Place</span> away from <span className="text-[#A02279]">Home</span> in the <span className="text-[#A02279]">Metaverse</span></h1>
                            <p className="w-3/4 md:text-lg">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                            <div className="flex w-3/4">
                                <input className="border rounded-l w-2/3 px-3" type="search" placeholder="Search for location" />
                                <button className="bg-[#A02279] w-1/3 text-white px-2 sm:px-3 py-3 rounded-r text-sm">Search</button>
                            </div>
                        </div>
                        <img className="w-2/5" src={HeroImg} alt="" />
                    </section>
                    <section className="flex justify-around bg-[#A02279] w-full py-4">
                        <img className="w-28 sm:w-36 md:w-fit" src={MBToken} alt="" />
                        <img className="w-28 sm:w-36 md:w-fit" src={Metamask} alt="" />
                        <img className="w-28 sm:w-36 md:w-fit" src={Opensea} alt="" />
                    </section>
                </div>

                {/* card section */}
                <section className="my-6">
                    <h1 className="text-center text-4xl font-medium my-3">Inspiration for your next adventure</h1>
                    <Cards />
                </section>
                <section className="flex h-[90vh] items-center justify-center w-full text-white px-[10%] mx-auto bg-[#A02279] ">
                    <div className="">
                        <h1 className="text-5xl my-4">MetaBNB NFTs</h1>
                        <p className="w-4/5 mt-4">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                        <button className="px-5 py-3 bg-white text-[#a02279] rounded my-4">Learn more</button>
                    </div>
                    <img className="w-1/2" src={ThreePack} alt="" />
                </section>
            </main>
            <Footer />
        </div>
     );
}

export default Home;