import Logo from '../assets/images/logo-white.svg'
import Facebook from '../assets/images/facebook-logo.svg'
import Twitter from '../assets/images/twitter-logo.svg'
import Instagram from '../assets/images/instagram-logo.svg'
function Footer() {
    return ( 
        <>
        <section className="px-[10%] pt-14 list-none mx-auto text-white list-style-none bg-[#1D1D1E] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between">
                <img className="w-40" src={Logo} alt="" />
                <div className="flex space-x-4 mb-2">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Twitter} alt="" />
                </div>
            </div>
            <div className="space-y-1">
                <h4 className="text-lg font-medium mb-3">Community</h4>
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
            </div>
            <div className="space-y-1">
                <h4 className="text-lg font-medium mb-3">Places</h4>
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn more</li>
            </div>
            <div className="space-y-1">
                <h4 className="text-lg font-medium mb-3">About us</h4>
                <li>Road map</li>
                <li>Creators</li>
                <li>Careers</li>
                <li>Contact us</li>
            </div>
        </section>
        <section className="bg-[#1D1D1E] px-[10%] py-10 text-white mx-auto">&copy; 2022 Metabnb</section>
        </>
     );
}

export default Footer;