import erro404 from '../../assets/img/404.png';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';

export default function NotFound() {

    const navegar = useNavigate ();

    return (
        <S.NotFound>
            <img src={erro404} alt="imagem da pagina de erro" />
            <div>
                <h1>Ops... Página não encontrada... Clique em voltar!</h1>
                <div onClick={() => navegar(-1)}>
                    <button>VOLTAR</button>
                </div>
            </div>
        </S.NotFound>
    )
}
