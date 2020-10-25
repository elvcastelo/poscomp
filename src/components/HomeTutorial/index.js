import React from 'react';
import './index.css';

function HomeTutorial() {
    return (
            <div className="home-tutorial">
                <p className="home-tutorial-title">Como usar o SISCOMP?</p>
                <p className="home-tutorial-subtitle">Como contribuir</p>
                <p className="home-tutorial-text">Existem várias formas que você pode ajudar o projeto. Você pode nos 
                ajudar desde divulgando nas redes sociais quanto apoiando o projeto no GitHub, desde adicionando novas questões a
                melhorar nosso código fonte, para saber mais informações a respeito de como contribuir leia o README presente
                a página no GitHub.</p>

                <p className="home-tutorial-subtitle">Como usar</p>
                <p className="home-tutorial-text">É muito fácil, basta selecionar o ano da questão desejada, logo abaixo do 
                ano você pode visualizar a quantidade de questões que já foram respondidas - isso é, 
                possuem uma explicação para a sua resposta - ao clicar você irá direto para um simulado da prova daquele ano 
                contendo apenas as questões que possuem explicações que levam a resposta. Ao tentar resolver a questão você
                pode clicar no item que achar correto e automaticamente a explicação aparecerá, independente de erro ou acerto.</p>
            </div>
    );
}

export default HomeTutorial;