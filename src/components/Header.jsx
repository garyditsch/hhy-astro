import Logo from "./Logo";
import Nav from "./NavLinks";

const Header = () => {

    return (
        <header className="bg-alice-white">
            <div className="bgsticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between p-[1em] font-sans font-bold uppercase backdrop-blur-[100px]">
                <Logo />
                <Nav />
            </div>
        </header>
    )
}


export default Header;

