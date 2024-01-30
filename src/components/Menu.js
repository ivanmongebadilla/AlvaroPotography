// import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import MenuContent from "./MenuContent";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const menuHandler = () => {
        setShowMenu(!showMenu);
    }
    
    return (
        <div className="mainmenu">
            { !showMenu && <div style={{color: "white"}} onClick={menuHandler}>MENU</div> }
            { showMenu && <MenuContent closeMenu={menuHandler}/>}
        </div>
    )
}

export default Menu;