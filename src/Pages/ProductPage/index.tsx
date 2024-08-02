import React from 'react';
import * as S from './Styles';
import productImage from '../../assets/img/windows-11-pro.png';
import { FaStar, FaCartPlus, FaWhatsapp } from 'react-icons/fa';

export default function ProductDetail() {
    return (
        <S.ProductDetail>
            <div className="image-section">
                <img src={productImage} alt="Windows 11 Pro" />
            </div>
            <div className="details-section">
                <h1>Windows 11 Pro – Licença Vitalícia – Versão 32/64 Bits + Nota Fiscal - Envio Imediato</h1>
                <p className="product-code">Código do produto: J8X4EJGB</p>
                <div className="rating">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} color="orange" />
                    ))}
                    <span>(75)</span>
                </div>
                <div className="price-section">
                    <p className="original-price">R$ 299,00</p>
                    <p className="discounted-price">POR <span className="highlight">R$ 89,00</span></p>
                    <p className="installments">até 7x de R$ 12,71 sem juros <a href="#">mais formas de pagamento</a></p>
                    <p className="boleto-price"><strong>R$ 84,55 no Boleto</strong> <span>Economize: R$ 4,45</span></p>
                    <p className="pix-price"><strong>R$ 84,55 no PIX</strong> <span className="pix-discount">5% de desconto</span></p>
                </div>
                <div className="purchase-section">
                    <div className="quantity">
                        <input type="number" defaultValue={1} min={1} />
                    </div>
                    <button className="buy-button">
                        <FaCartPlus size={20} /> Comprar
                    </button>
                </div>
                <div className="support">
                    <FaWhatsapp size={20} /> Dúvidas? Chama aqui no WhatsApp
                </div>
                <p className="availability">Disponibilidade: <span>Disponível</span></p>
            </div>
        </S.ProductDetail>
    );
}
