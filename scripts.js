function getProjectLanguages(projects) {
    let langList = ["All"];
    for (let id in projects) {
        const { language } = projects[id];
        if (!langList.includes(language)) {
            langList.push(language);
        }
    }
    return langList;
}

let sobreDescricao = {
    pt: 'Ei, eu sou o Marco! Sou um cientista da computação graduado pela Universidade Federal de Ouro Preto (UFOP) (2016-20) e um fanático pela tecnologia!',
    en: `Hey, I'm Marco! I'm a computer scientist graduated at <i>Universidade Federal de Ouro Preto (UFOP)</i> (2016-20) and a technology fanatic.`,
}
let dicaProjetos = {
    pt: 'Você pode acessar o código dos projetos ao clicar em seus títulos.',
    en: 'You can access the project pages on Github by clicking on their respective titles.',
}

let sobreDescricaoContainer = document.getElementById("sobre-descricao");
let projectTip = document.getElementById("projects-tip");
let buttonsContainer = document.getElementById("buttons-container");
let projectsContainer = document.getElementById("projects-container");
let navAboutMe = document.getElementById("nav-about-me");
let navProjects = document.getElementById("nav-projects");
let titleAboutMe = document.getElementById('about-me');
let titleProjects = document.getElementById('projects');
let projects = [
    {
        title: 'snake-game',
        language: 'C++',
        description: {
            en: 'Simple snake game written in C++ and SFML Library.',
            pt: 'Simples jogo da cobrinha escrito usando C++ e a biblioteca SFML.',
        },
        link: 'https://github.com/TulioAbreu/snake-game',
        imageURL: 'https://camo.githubusercontent.com/2600db5e2b7f6fb9ccf061eaafa2cbf44b11283e/68747470733a2f2f692e696d6775722e636f6d2f544370325773332e706e67',
    },
    {
        title: 'my-animelist-songs',
        language: 'Javascript',
        description: {
            pt: 'Script feito em NodeJs para formar uma lista de todas aberturas e encerramentos dos animes presentes em seu MyAnimeList',
            en: 'NodeJS script for getting all animes opening and songs (name/youtubeURL) from the animes you have seen.',
        },
        link: 'https://github.com/TulioAbreu/my-animelist-songs',
        imageURL: './assets/console_application.png',
    },
    {
        title: 'omnistack-week-10',
        language: 'Javascript',
        description: {
            pt: 'Aplicação construída durante a Semana Omnistack 10 utilizando React, React Native e NodeJS',
            en: 'Omnistack Week #10 web application (front-end and back-end) made with React, React Native and NodeJS.',
        },
        link: 'https://github.com/TulioAbreu/omnistack-week-10',
        imageURL: './assets/omnistack-week-10.png',
    },
    {
        title: 'tindev',
        language: 'Javascript',
        description: {
            pt: 'Aplicação construída durante a Semana Omnistack 8 utilizando React e NodeJS',
            en: 'Omnistack Week #8 web application (front-end and back-end) made with React, React Native and NodeJS.',
        },
        link: 'https://github.com/TulioAbreu/tindev',
        imageURL: './assets/tindev.png',
    },
    {
        title: 'pokedex-js',
        language: 'Javascript',
        description: {
            pt: 'Aplicação web de uma Pokédex que apresenta dados extraídos de outros websites (escrito em React e NodeJS).',
            en: 'Pokedex web application that scrapes data from famous websites (written with React and NodeJS).',
        },
        link: 'https://github.com/TulioAbreu/pokedex-js',
        imageURL: './assets/pokedexjs.png'
    },
    {
        title: 'arclass-website',
        language: 'Javascript',
        description: {
            pt: 'Protótipo de front-end construído para uma disciplina de empreendedorismo, na universidade. Foi feito utilizando ReactJS.',
            en:  'Website prototype used in a university class (written in ReactJS).',
        },
        link: 'https://github.com/TulioAbreu/arclass-website',
        imageURL: './assets/arclass.png'
    },
    {
        title: 'bluetooth-recorder',
        language: 'Android Java',
        description: {
            pt: 'Aplicativo construído para gravar dados de acelerômetro e enviá-los via bluetooth para outro dispositivo.',
            en: 'App made for recording accelerometer data and send it via Bluetooth to another device.',
        },
        link: 'https://github.com/TulioAbreu/bluetooth-recorder',
        imageURL: './assets/console_application.png',
    },
    {
        title: 'firefighter-problem',
        language: 'Python',
        description: {
            pt: 'Minha solução para o problema de brigadistas em grafos, escrita em Python.',
            en: 'My solution for graphs firefighter problem written in Python.',
        },
        link: 'https://github.com/TulioAbreu/firefighter-problem',
        imageURL: './assets/console_application.png',
    },
    {
        title: 'gido [incomplete]',
        language: 'Python',
        description: {
            pt: 'GiDo é uma ferramenta para converter TODOs em issues no Github.',
            en: 'GiDo is a scripting tool for converting your code TODOs into GitHub issues.',
        },
        link: 'https://github.com/TulioAbreu/gido',
        imageURL: './assets/console_application.png',
    },
    {
        title: 'uri-online-judge',
        language: 'All',
        description: {
            pt: 'Uso este repositório para manter o controle das soluções de problemas que já resolvi na plataforma.',
            en: 'I use this repository for keeping track of my solutions to what I\'ve already solved.',
        },
        link: 'https://github.com/TulioAbreu/uri-online-judge',
        imageURL: 'https://www.urionlinejudge.com.br/judge/img/5.0/logo-big.png',
    }
]
let languages = getProjectLanguages(projects);
let currentLanguage = "";
setLanguage("pt");

function setLanguage(lang) {
    currentLanguage = lang;
    reloadProjects("All");
    updateNav();
    updateTitles();
    updateText();
}

function updateText() {
    switch (currentLanguage) {
        case 'pt': {
            sobreDescricaoContainer.innerHTML = sobreDescricao.pt;
            projectTip.innerHTML = dicaProjetos.pt;
        } break;
        case 'en': {
            sobreDescricaoContainer.innerHTML = sobreDescricao.en;
            projectTip.innerHTML = dicaProjetos.en;
        } break;
    }
}

function updateTitles() {
    switch (currentLanguage) {
        case 'pt': {
            titleAboutMe.innerHTML = "Sobre";
            titleProjects.innerHTML = "Projetos";
        } break;
        case 'en': {
            titleAboutMe.innerHTML = "About me";
            titleProjects.innerHTML = "Projects";
        } break;
    }
}

function updateNav() {
    switch (currentLanguage) {
        case 'pt': {
            navAboutMe.innerHTML = "Sobre";
            navProjects.innerHTML = "Projetos";
        } break;
        case 'en': {
            navAboutMe.innerHTML = "About me";
            navProjects.innerHTML = "Projects";
        } break;
    }
}

function selectProgrammingLanguage(selectedLang) {
    reloadProjects(selectedLang);
}

function clearProjects() {
    projectsContainer.innerHTML = "";
}

function reloadProjects(lang) {
    clearProjects();

    for (let id in projects) {
        const project = projects[id];

        let description = "";
        switch (currentLanguage) {
        case 'en': {
            description = project.description.en;
        } break;
        case 'pt': {
            description = project.description.pt;
        } break;
        }

        if (lang == "All" || lang == project.language) {
            projectsContainer.innerHTML += `
                <div class="project-container">
                    <img class="project-image" src="${project.imageURL}"/>
                    <a class="project-title" href="${project.link}"> > ${project.title} </a> 
                    <div class="project-description">
                        ${description}
                    </div>
                </div>`
        }
    }
}

for (let languageId in languages) {
    buttonsContainer.innerHTML += `<button class="filter-button" onclick="selectProgrammingLanguage('${languages[languageId]}')"> ${languages[languageId].toUpperCase()} </button>`;
}

selectProgrammingLanguage("All");
