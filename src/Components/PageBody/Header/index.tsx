import * as S from './Styles';
import logo from '../../../assets/img/favicon.png';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function Header() {
    return (
        <S.Header>
            <div className="top-nav">
                <div className="menu-links">
                    <Link to="/">Home</Link>
                    <Link to="/giveaways" className="highlighted">Giveaways</Link>
                </div>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="icons">
                    <FaSearch size={20} />
                    <FaUserCircle size={20} />
                    <FaHeart size={20} />
                    <FaShoppingCart size={20} />
                </div>
            </div>
            <div className="bottom-nav">
                <Link to="/windows">Windows</Link>
                <Link to="/office">Office</Link>
                <Link to="/anti-virus">Antivírus</Link>
                <Link to="/outros"> + Software</Link>
                <Link to="/contact">Contato</Link>
            </div>
        </S.Header>
    );
}
