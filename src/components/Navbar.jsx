import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-gradient.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import React, { useState } from "react";
import Modal from "react-modal";
import ConnectWallet from "./ConnectWallet";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "12px",
    padding: '0',
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className="w-5/6 h-[15vh] mx-auto flex justify-between items-center">
      <img src={Logo} className="w-[10em] sm:w-[11em] md:w-[13em]" alt="" />
      <div className="md:flex justify-between w-full hidden">
        <nav className="w-fit mx-auto my-auto sm:space-x-3 md:space-x-5 lg:space-x-9">
          <Link>Home</Link>
          <Link to="/placeToStay">Place to stay</Link>
          <span>NFTs</span>
          <span>Community</span>
        </nav>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#A02279] text-white px-2 sm:px-3 md:px-5 py-2 md:py-3 rounded text-sm"
        >
          Connect wallet
        </button>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
        >
            <ConnectWallet />
            <button 
                className="absolute top-6 right-6 w-5"
                onClick={() => setModalOpen(false)}>
                <img src={close} />
            </button>
        </Modal>
      </div>
      <img src={menu} alt="" />
    </header>
  );
}

export default Navbar;
