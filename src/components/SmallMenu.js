import { NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';

const SmallMenu = (props) => {
  return (
    <div >
        <motion.div className="smallMenu"
            initial={{opacity: 0}}
            animate={{opacity: 1, scale: 100}}
            transition={{duration: 0.8 }}
        >&nbsp;</motion.div>
        <div className='smallMenu__icon'>
            <IoMdClose onClick={props.closeMenu}/>
        </div>
        <motion.nav className='smallMenu__content'
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8 }}
        >
            <ul className='smallMenu__content-container'>
                <li className='smallMenu__content-list'>
                    <NavLink to='/' className="smallMenu__content-item" onClick={props.closeMenu}>
                        Inicio
                    </NavLink>
                </li>
                <li className='smallMenu__content-list'>
                    <NavLink to='/aboutme' className="smallMenu__content-item" onClick={props.closeMenu}>
                        Acerca de Mi
                    </NavLink>
                </li>
                <li className='smallMenu__content-list'>
                    <NavLink to='/portfolio' className="smallMenu__content-item" onClick={props.closeMenu}>
                        Portafolio
                    </NavLink>
                </li>
                <li className='smallMenu__content-list'>
                    <NavLink to='/contact' className="smallMenu__content-item" onClick={props.closeMenu}>
                        Contacto
                    </NavLink>
                </li>
                <li className='smallMenu__content-list'>
                    <NavLink to='/price' className="smallMenu__content-item" onClick={props.closeMenu}>
                        Precios
                    </NavLink>
                </li>
            </ul>
        </motion.nav>
        
    </div>
  )
}

export default SmallMenu
