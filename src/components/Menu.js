// import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import MenuContent from "./MenuContent";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SmallMenu from "./SmallMenu";

const Menu = () => {
    
    const { height, width } = useWindowDimensions();
    console.log(height);
    console.log(width);
    
    const [showMenu, setShowMenu] = useState(false)

    const menuHandler = () => {
        setShowMenu(!showMenu);
    }

    let content;
    if (width <= 650) {
        content = <SmallMenu closeMenu={menuHandler} />;
    } else {
        content = <MenuContent closeMenu={menuHandler}/>;
    }
    
    return (
             <motion.div className="mainmenu">
                { !showMenu && <motion.div style={{color: "white"}} onClick={menuHandler} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}>MENU</motion.div> }
                {/* { showMenu && <MenuContent closeMenu={menuHandler}/>} */}
                { showMenu && content }
            </motion.div>
    )
}

export default Menu;