import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo-gradient.svg'
function Navbar() {
    return ( 
        <header className="w-5/6 h-[15vh] mx-auto flex justify-between items-center">
            <img src={Logo} className="w-[10em] sm:w-[11em] md:w-[13em]" alt="" />
            <div className="md:flex justify-between w-full hidden">
                <nav className="w-fit mx-auto sm:space-x-3 md:space-x-5 lg:space-x-9">
                    <Link>Home</Link>
                    <Link>Place to stay</Link>
                    <span>NFTs</span>
                    <span>Community</span>
                </nav>
                <button>
                    <Link className="bg-[#A02279] text-white px-2 sm:px-3 md:px-5 py-2 md:py-3 rounded text-sm">Connect wallet</Link>
                </button>
            </div>
        </header>
     );
}

export default Navbar;