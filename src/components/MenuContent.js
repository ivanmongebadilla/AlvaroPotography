import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const MenuContent = (props) => {
    return (
        <div className="menucontent__container">
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
        </div>
    )
}

export default MenuContent;