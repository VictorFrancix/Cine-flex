import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Success({ title, day, buyers, setFilm }) {

  buyers.forEach((buyer) => {
    buyer.idAssento = buyer.idAssento % 50 !== 0 ? buyer.idAssento % 50 : 50;
    let cpf = "";
    for (let i = 0; i < buyer.cpf.length; i++) {
      cpf += buyer.cpf[i];
      if (cpf.length === 3 || cpf.length === 7) {
        cpf += ".";
      } else if (cpf.length === 11) {
        cpf += "-";
      }
    }
    buyer.cpf = cpf;
  });

  return (
    <Main>
      <h3>Pedido feito com sucesso!</h3>
      <section>
        <h4>Filme e sessão</h4>
        <p>{title}</p>
        <p>{day}</p>
      </section>
      <section>
        <h4>Ingressos</h4>
        {buyers.map(({ idAssento, nome, cpf }) => {
          const seat = idAssento % 50 !== 0 ? idAssento % 50 : 50;
          return (
            <>
              <p className="seat">Assento {seat}</p>
              <p>Nome: {nome}</p>
              <p>CPF: {cpf}</p>
            </>
          );
        })}
      </section>

      <Link to="/">
        <button onClick={() => setFilm({})}>Voltar para Home</button>
      </Link>
    </Main>
  );
}

const Main = styled.main`
  margin-top: 67px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    padding-top: 28px;
    height: 110px;
    width: 185px;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    color: #247a6b;
    font-weight: 700;
  }
  section {
    width: 100%;
    margin-left: 35px;
    min-height: 110px;
  }
  h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  p {
    font-size: 22px;
    line-height: 26px;
  }
  .seat {
    font-size: 23px;
    line-height: 40px;
    font-weight: 500;
  }
  button {
    margin: 30px 0;
    width: 225px;
    height: 42px;
    border: none;
    line-height: 21px;
    background-color: #E8833A;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    border: none;
    border-radius: 3px;

  }
`;
