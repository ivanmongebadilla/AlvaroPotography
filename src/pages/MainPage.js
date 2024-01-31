import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const MainPage = () => {
    return (
            <motion.div className="mainpage"
                initial={{ opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0}}
                transition={{ duration: 1.5 }}
            >
                <div className="mainpage__left">
                    {/* <img src={require("../assets/logo-png.png")} alt="logo" className="mainpage__logo"/> */}
                    <h1 className="mainpage__logo">Alvaro Photography</h1>
                    <h1 className="mainpage__left-text">
                        Bienvenido, Mi nombre es Alvaro.<br/>
                        Soy un fotografo y editor de videos<br/>
                    </h1>
                    <h3>
                        Te invito a ver mis trabajos
                    </h3>
                    <div className="mainpage__icons">
                        <FaFacebookSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
                        <FaInstagramSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
                        <FaTwitterSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
                        <FaYoutubeSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
                        <span className="mainpage__design">
                            By Ivan Monge
                        </span>
                    </div>
                </div>
                <div className="mainpage__right">
                    <img src={require("../assets/model_img3.PNG")} alt="model" className="mainpage__model"/>
                </div>
            </motion.div>
        
    )
}

export default MainPage;