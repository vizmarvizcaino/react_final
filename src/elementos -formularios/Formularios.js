import styled, { css } from "styled-components";
import ImgTexture from '../assets/bg-texture.png'

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media(max-width: 800px){
        grid-tempalte-columns: 1fr;

    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
    ${props => props.valido === 'false' && css`
        color: var(--color-primary) !important;
    `} 
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s easy all;
    border: 3px solid transparent;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    background: var(--color-bg);
    color: var(--color-white);
    line-height: 1.7;
    background-image: url({ImgTexture});

    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }
    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;  
    `}
     ${props => props.valido === 'false' && css`
        color: var(--color-primary) !important;  
    `}
`;

const LeyenedaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: var(--color-primary);
    display: none;
    ${props => props.valido === 'true' && css`
        display: none;
    `}

    ${props => props.valido === 'false' && css`
        display: block;
    `}
`;

const IconValidacion = styled.span`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    cursor: pointer;
    opacity: 0;
    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colores.error}
    `}
    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colores.exito};
    `}
`;

const ContenedorTerminos = styled.div`
    grid-column: 2;
    input{
        margin-right: 10px;
    }

    @media (max-width: 800px){
        grid-column: span 1;
    }
`;

const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    @media (max-width: 800px){
        grid-column: span 1;
    }

`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s easy all;

    &:hover {
        box-shadow: 3px 0px 30px rgba(163,163,163, 1)
    }

`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
`;

const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background: #f66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    p {
        margin: 0;
        margin-left: 10px;
    }
`;


export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyenedaError,
  IconValidacion,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError
}
