import { IoMdClose } from "react-icons/io";

const MenuContent = (props) => {
    return (
        <div className="menucontent__container">
            <div className="menucontent__content">
                <div className="menucontent__content-item">
                    Inicio
                </div>
                <div className="menucontent__content-item">
                    Acerca de Mi
                </div>
                <div className="menucontent__content-item">
                    Portafolio
                </div>
                <div className="menucontent__content-item">
                    Contacto
                </div>
                <div className="menucontent__content-item">
                    Precios
                </div>
            </div>
            <div className="menucontent__icon">
                <IoMdClose onClick={props.closeMenu}/>
            </div>
        </div>
    )
}

export default MenuContent;