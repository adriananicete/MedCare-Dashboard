import NavLinks from "./components/NavLinks";
import NavLogo from "./components/NavLogo";
import ProfileSettings from "./components/ProfileSettings";

function NavBar() {
    return ( 
        <header className="bg-[#ffffff] w-full h-[72px] rounded-[70px] flex justify-between items-center px-[70px] shadow-sm">
            <NavLogo />
            <NavLinks />
            <ProfileSettings />
        </header>
     );
}

export default NavBar;