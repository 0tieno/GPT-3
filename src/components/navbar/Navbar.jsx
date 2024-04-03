import './navbar.css';	// Import css file
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';	// Import icons
import logo from '../../assets/logo.svg';	// Import logo

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navabar-links_container">
          <a href="#home">Home</a>
          <a href="wgpt3">What is GPT3?</a>
          <a href="#possibility">Open AI</a>
          <a href="#features">Case studies</a>
          <a href="#blog">Library</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar