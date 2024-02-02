// import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import MenuContent from "./MenuContent";
import { motion } from "framer-motion";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const menuHandler = () => {
        setShowMenu(!showMenu);
    }
    
    return (
             <motion.div className="mainmenu">
                { !showMenu && <motion.div style={{color: "white"}} onClick={menuHandler} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}>MENU</motion.div> }
                { showMenu && <MenuContent closeMenu={menuHandler}/>}
            </motion.div>
    )
}

export default Menu;