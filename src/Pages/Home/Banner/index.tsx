import * as S from './Styles';
import { FaEnvelope, FaTruck, FaShieldAlt, FaHeadset, FaPercentage } from 'react-icons/fa';
import officeImage from '../../../assets/img/office-2021.webp';
import windowsImage from '../../../assets/img/win-11.webp';
import office365Image from '../../../assets/img/365.png';

export default function Banner() {
    return (
        <S.Banner>
            <div className="info">
                <div className="info-item">
                    <FaTruck size={40} />
                    <div>
                        <h3>Envio Digital</h3>
                        <p>em seu E-mail</p>
                    </div>
                </div>
                <div className="info-item">
                    <FaEnvelope size={40} />
                    <div>
                        <h3>Parcelamentos em</h3>
                        <p>até 10x sem juros</p>
                    </div>
                </div>
                <div className="info-item">
                    <FaPercentage size={40} />
                    <div>
                        <h3>Pague no PIX com</h3>
                        <p>10% de desconto</p>
                    </div>
                </div>
                <div className="info-item">
                    <FaShieldAlt size={40} />
                    <div>
                        <h3>Compra garantida</h3>
                        <p>loja 100% Segura</p>
                    </div>
                </div>
                <div className="info-item">
                    <FaHeadset size={40} />
                    <div>
                        <h3>Suporte de</h3>
                        <p>12 Meses</p>
                    </div>
                </div>
            </div>
            <div className="products">
                <img src={officeImage} alt="Office 2021" />
                <img src={windowsImage} alt="Windows 11" />
                <img src={office365Image} alt="Office 365" />
            </div>
        </S.Banner>
    );
}
