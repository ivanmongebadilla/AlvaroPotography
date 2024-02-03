import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const MenuContent = (props) => {

    return (
            <motion.div className="menucontent__container"
                initial={{ opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x:-100}}
                transition={{ duration: 0.8 }}
            >
                <div className="menucontent__content">
                    <NavLink to='/' className={({isActive}) => isActive ? "menucontent__content-item active" : "menucontent__content-item" }>
                        Inicio
                    </NavLink>
                    <NavLink to='/aboutme' className="menucontent__content-item">
                        Acerca de Mi
                    </NavLink>
                    <NavLink to='/portfolio' className="menucontent__content-item">
                        Portafolio
                    </NavLink>
                    <NavLink to='/contact' className="menucontent__content-item">
                        Contacto
                    </NavLink>
                    <NavLink to='/price' className="menucontent__content-item">
                        Precios
                    </NavLink>
                </div>
                <div className="menucontent__icon">
                    <IoMdClose onClick={props.closeMenu}/>
                </div>
            </motion.div>
    )
}

export default MenuContent;