import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";

const MainPage = () => {
    return (
        <div className="mainpage">
            <div className="mainpage__left">
                <img src={require("../assets/logo-png.png")} alt="logo" className="mainpage__logo"/>
                <h1 className="mainpage__left-text">
                    Bienvenido, Mi nombre es Alvaro.<br/>
                    Soy un fotografo y editor de videos<br/>
                </h1>
                <h3>
                    Te invito a ver mis trabajos
                </h3>
                <div className="mainpage__icons">
                    <FaFacebookSquare style={{margin: '0px 10px 0px 10px'}} />
                    <FaInstagramSquare style={{margin: '0px 10px 0px 10px'}} />
                    <FaTwitterSquare style={{margin: '0px 10px 0px 10px'}} />
                    <FaYoutubeSquare style={{margin: '0px 10px 0px 10px'}} />
                    <span className="mainpage__design">
                        By Ivan Monge
                    </span>
                </div>
            </div>
            <div className="mainpage__right">
                <img src={require("../assets/model_img3.PNG")} alt="model" className="mainpage__model"/>
            </div>
        </div>
    )
}

export default MainPage;