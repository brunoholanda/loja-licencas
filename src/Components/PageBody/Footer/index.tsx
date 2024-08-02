import React from 'react';
import * as S from './Styles';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import visaLogo from 'payment-icons/min/flat/visa.svg';
import mastercardLogo from 'payment-icons/min/flat/mastercard.svg';
import amexLogo from 'payment-icons/min/flat/amex.svg';
import dinersLogo from 'payment-icons/min/flat/diners.svg';
import discoverLogo from 'payment-icons/min/flat/discover.svg';
import jcbLogo from 'payment-icons/min/flat/jcb.svg';
import paypalLogo from 'payment-icons/min/flat/paypal.svg';

export default function Footer() {
    return (
        <S.Footer>
            <div className="footer-content">
                <div className="column">
                    <h3>ATENDIMENTO</h3>
                    <p>
                        <FaWhatsapp /> Whatsapp: 11 98692-4254 <br />
                        <span>Dúvidas, suporte e vendas</span>
                    </p>
                    <p>
                        <FaEnvelope /> E-mail: contato@ninjakeys.com.br <br />
                        <span>Cotações e Orçamentos</span>
                    </p>
                    <p>
                        <strong>Horário de atendimento</strong><br />
                        Suporte pós venda e entrega de pedidos:<br />
                        Seg. à Sex.: 10h às 17h<br />
                        Sáb. Dom. e Feriado Fechado
                    </p>
                </div>
                <div className="column">
                    <h3>CATEGORIAS</h3>
                    <ul>
                        <li>Combos</li>
                        <li>Pacote Office</li>
                        <li>Visio</li>
                        <li>Windows</li>
                        <li>Windows Server</li>
                        <li>CALs Windows Server</li>
                        <li>SQL Server</li>
                        <li>Project</li>
                        <li>Antivírus</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>INSTITUCIONAL</h3>
                    <ul>
                        <li>Fale Conosco</li>
                        <li>Meios de pagamento</li>
                        <li>Política de envio</li>
                        <li>Política de privacidade</li>
                        <li>Política de Trocas, Devoluções, Reembolso e Garantia</li>
                        <li>Quem somos</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>REDES SOCIAIS</h3>
                    <div className="social-media">
                        <img src="instagram-logo.png" alt="Instagram" />
                        <img src="facebook-logo.png" alt="Facebook" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo">
                    <img src="ninja-keys-logo.png" alt="Ninja Keys" />
                    <p>
                        Somos o grupo Ninja Keys! Fornecedores de softwares. Damos 100% de garantia do funcionamento de nossos produtos ou seu dinheiro de volta. Temos produtos vitais e anuais, enviamos de forma digital por e-mail, acompanhando: nota fiscal, licença original, link oficial de download e o passo a passo de validação. Nossa missão é originalizar seu equipamento com produtos oficiais. Suporte durante todo o dia e garantia contra mau funcionamento de 12 meses em todos nossos produtos.
                    </p>
                </div>
                <div className="payment-security">
                    <h3>FORMAS DE PAGAMENTO</h3>
                    <div className="payment-icons">
                        <img src={visaLogo} alt="Visa" />
                        <img src={mastercardLogo} alt="MasterCard" />
                        <img src={amexLogo} alt="American Express" />
                        <img src={dinersLogo} alt="Diners Club" />
                        <img src={discoverLogo} alt="Discover" />
                        <img src={jcbLogo} alt="JCB" />
                        <img src={paypalLogo} alt="PayPal" />
                    </div>
                    <h3>SELOS DE SEGURANÇA</h3>
                    <img src="site-protegido-logo.png" alt="Site Protegido" />
                    <img src="google-safe-logo.png" alt="Google Safe" />
                    <h3>FORMA DE ENVIO</h3>
                    <img src="email-logo.png" alt="Via E-mail" />
                </div>
            </div>
        </S.Footer>
    );
}
