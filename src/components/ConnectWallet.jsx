import metamask from '../assets/images/metamask-logo.svg';
import WalletConnect from '../assets/images/walletconnect-logo.svg';
import arrow from '../assets/icons/right-arrow.svg';
function ConnectWallet() {
    return ( 
        <div className="font-['Red_Rose']">
            <header className="border-b border-slate-300 p-5 font-medium text-lg">Connect Wallet</header>
            <main className="p-5">
                <p className="mb-2 text-gray-800">Choose your preferred wallet:</p>
                <button className="transition-all rounded-lg px-4 py-2 hover:bg-slate-50 border border-slate-300 mb-2 flex items-center justify-between w-full">
                    <img className="w-9" src={metamask} alt="" />
                    <span className="font-['Sora'] text-sm font-medium w-full text-left ml-3">Metamask </span>
                    <img className="w-2" src={arrow} alt="" />
                </button>
                <button className="transition-all rounded-lg px-4 py-2 hover:bg-slate-50 border border-slate-300 mb-2 flex items-center justify-between w-full">
                    <img className="w-9" src={WalletConnect} alt="" /> 
                    <span className="font-['Sora'] text-sm font-medium w-full text-left ml-3">WalletConnect</span>
                    <img className="w-2" src={arrow} alt="" />
                </button>
            </main>
        </div>
     );
}

export default ConnectWallet;