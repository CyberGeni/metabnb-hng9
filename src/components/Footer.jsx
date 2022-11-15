import Logo from '../assets/images/logo-white.svg'
import Facebook from '../assets/images/facebook-logo.svg'
import Twitter from '../assets/images/twitter-logo.svg'
import Instagram from '../assets/images/instagram-logo.svg'
function Footer() {
    return ( 
        <>
        <section className="px-[10%] pt-14 list-none mx-auto text-white list-style-none bg-[#1D1D1E] grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col justify-between">
                <img className="w-40 mb-2" src={Logo} alt="" />
                <div className="flex space-x-4 my-4 md:mb-2">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Twitter} alt="" />
                </div>
            </div>
            <div className="space-y-1 mt-4 md:mt-0">
                <h4 className="text-lg font-medium md:mb-3">Community</h4>
                <li className="text-sm text-gray-300">NFT</li>
                <li className="text-sm text-gray-300">Tokens</li>
                <li className="text-sm text-gray-300">Landlords</li>
                <li className="text-sm text-gray-300">Discord</li>
            </div>
            <div className="space-y-1 mt-4 md:mt-0">
                <h4 className="text-lg font-medium md:mb-3">Places</h4>
                <li className="text-sm text-gray-300">Castle</li>
                <li className="text-sm text-gray-300">Farms</li>
                <li className="text-sm text-gray-300">Beach</li>
                <li className="text-sm text-gray-300">Learn more</li>
            </div>
            <div className="space-y-1 mt-4 md:mt-0">
                <h4 className="text-lg font-medium md:mb-3">About us</h4>
                <li className="text-sm text-gray-300">Road map</li>
                <li className="text-sm text-gray-300">Creators</li>
                <li className="text-sm text-gray-300">Careers</li>
                <li className="text-sm text-gray-300">Contact us</li>
            </div>
        </section>
        <section className="bg-[#1D1D1E] px-[10%] py-10 text-white mx-auto">&copy; 2022 Metabnb</section>
        </>
     );
}

export default Footer;