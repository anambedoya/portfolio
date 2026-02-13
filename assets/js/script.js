/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const languageSelect = document.getElementById('language-select');

const supportedLanguages = ['en', 'es', 'fr'];
const resources = {
    en: {
        translation: {
            meta: {
                title: 'Ana Maria Bedoya - Portfolio'
            },
            nav: {
                home: 'Home',
                about: 'About',
                skills: 'Skills',
                projects: 'Projects',
                contact: 'Contact'
            },
            home: {
                title: "Hi, I'm Ana Maria",
                subtitle: 'Full-Stack Developer',
                description: 'My main tech stack is: .NET and Angular. What I like the most about working on tech is learning new things every day, facing new challenges, and helping my team bring their best. I like to be part of software communities in my city that seek the empowerment and inclusion of women in tech.',
                scroll: 'Scroll down'
            },
            about: {
                title: 'About me',
                subtitle: 'My introduction',
                description: 'I have experience delivering high-quality software products developed under agile methodologies.',
                info: {
                    years: 'Years',
                    experience: 'experience',
                    completed: 'Completed',
                    projects: 'projects',
                    companies: 'Companies',
                    worked: 'worked'
                },
                downloadCv: 'Download CV'
            },
            skills: {
                title: 'Skills',
                subtitle: 'My technical level',
                group1: {
                    title: 'Frameworks/programming languages',
                    years: '3 years'
                },
                group2: {
                    title: 'Other tools',
                    years: '3 years'
                }
            },
            qualification: {
                title: 'Qualification',
                subtitle: 'My personal journey',
                tabs: {
                    education: 'Education',
                    work: 'Work'
                },
                education: {
                    degree: 'Software Engineer',
                    period: '2015 - 2019'
                },
                work: {
                    spectrio: {
                        role: 'Software Engineer',
                        period: '2021 - Present'
                    },
                    prestti: {
                        role: 'Front-End Developer',
                        period: '2020 - 2021'
                    },
                    celerik: {
                        role: 'Full-stack Developer',
                        period: '2019 - 2020'
                    }
                }
            },
            projects: {
                title: 'Projects',
                subtitle: 'I strongly believe you learn by doing, so here is some work that I have done to master new skills.',
                demo: 'Demo',
                code: 'Code',
                items: {
                    airbnb: {
                        description: 'Project built for the Ruby on Rails bootcamp by GAP.'
                    },
                    gifs: {
                        description: "Project built to strengthen Angular knowledge from Udemy's course."
                    },
                    countries: {
                        description: "Project built to strengthen Angular knowledge from Udemy's course."
                    },
                    heroes: {
                        description: "Project built to strengthen Angular knowledge from Udemy's course."
                    },
                    login: {
                        description: "Project built to strengthen Angular and Node knowledge from Udemy's course."
                    }
                }
            },
            contact: {
                title: 'Contact Me',
                subtitle: 'Open to freelance work',
                description: 'If you are interested in working together, send me a message and I will get back to you soon.',
                emailTitle: 'Email',
                locationTitle: 'Location',
                form: {
                    nameLabel: 'Name',
                    namePlaceholder: 'Your name',
                    emailLabel: 'Email',
                    emailPlaceholder: 'your@email.com',
                    messageLabel: 'Message',
                    messagePlaceholder: 'Tell me about your project...',
                    send: 'Send message'
                }
            },
            footer: {
                rights: 'All rights reserved'
            }
        }
    },
    es: {
        translation: {
            meta: {
                title: 'Ana Maria Bedoya - Portafolio'
            },
            nav: {
                home: 'Inicio',
                about: 'Sobre mí',
                skills: 'Habilidades',
                projects: 'Proyectos',
                contact: 'Contacto'
            },
            home: {
                title: 'Hola, soy Ana Maria',
                subtitle: 'Desarrolladora Full-Stack',
                description: 'Mi stack tecnológico principal es .NET y Angular. Lo que más me gusta de trabajar en tecnología es aprender cosas nuevas cada día, enfrentar nuevos retos y ayudar a mi equipo a dar lo mejor. Me gusta participar en comunidades de software en mi ciudad que buscan el empoderamiento y la inclusión de las mujeres en tecnología.',
                scroll: 'Desplázate hacia abajo'
            },
            about: {
                title: 'Sobre mí',
                subtitle: 'Mi introducción',
                description: 'Tengo experiencia entregando productos de software de alta calidad desarrollados bajo metodologías ágiles.',
                info: {
                    years: 'Años',
                    experience: 'de experiencia',
                    completed: 'Proyectos',
                    projects: 'completados',
                    companies: 'Empresas',
                    worked: 'donde trabajé'
                },
                downloadCv: 'Descargar CV'
            },
            skills: {
                title: 'Habilidades',
                subtitle: 'Mi nivel técnico',
                group1: {
                    title: 'Frameworks/lenguajes de programación',
                    years: '3 años'
                },
                group2: {
                    title: 'Otras herramientas',
                    years: '3 años'
                }
            },
            qualification: {
                title: 'Trayectoria',
                subtitle: 'Mi recorrido personal',
                tabs: {
                    education: 'Educación',
                    work: 'Experiencia'
                },
                education: {
                    degree: 'Ingeniera de Software',
                    period: '2015 - 2019'
                },
                work: {
                    spectrio: {
                        role: 'Ingeniera de Software',
                        period: '2021 - Actualidad'
                    },
                    prestti: {
                        role: 'Desarrolladora Front-End',
                        period: '2020 - 2021'
                    },
                    celerik: {
                        role: 'Desarrolladora Full-Stack',
                        period: '2019 - 2020'
                    }
                }
            },
            projects: {
                title: 'Proyectos',
                subtitle: 'Creo firmemente que se aprende haciendo, así que aquí hay algunos trabajos que he realizado para dominar nuevas habilidades.',
                demo: 'Demo',
                code: 'Código',
                items: {
                    airbnb: {
                        description: 'Proyecto realizado para el bootcamp de Ruby on Rails de GAP.'
                    },
                    gifs: {
                        description: "Proyecto creado para fortalecer conocimientos de Angular del curso de Udemy."
                    },
                    countries: {
                        description: "Proyecto creado para fortalecer conocimientos de Angular del curso de Udemy."
                    },
                    heroes: {
                        description: "Proyecto creado para fortalecer conocimientos de Angular del curso de Udemy."
                    },
                    login: {
                        description: "Proyecto creado para fortalecer conocimientos de Angular y Node del curso de Udemy."
                    }
                }
            },
            contact: {
                title: 'Contáctame',
                subtitle: 'Disponible para trabajo freelance',
                description: 'Si te interesa trabajar conmigo, envíame un mensaje y te responderé pronto.',
                emailTitle: 'Correo',
                locationTitle: 'Ubicación',
                form: {
                    nameLabel: 'Nombre',
                    namePlaceholder: 'Tu nombre',
                    emailLabel: 'Correo',
                    emailPlaceholder: 'tu@email.com',
                    messageLabel: 'Mensaje',
                    messagePlaceholder: 'Cuéntame sobre tu proyecto...',
                    send: 'Enviar mensaje'
                }
            },
            footer: {
                rights: 'Todos los derechos reservados'
            }
        }
    },
    fr: {
        translation: {
            meta: {
                title: 'Ana Maria Bedoya - Portfolio'
            },
            nav: {
                home: 'Accueil',
                about: 'À propos',
                skills: 'Compétences',
                projects: 'Projets',
                contact: 'Contact'
            },
            home: {
                title: 'Bonjour, je suis Ana Maria',
                subtitle: 'Développeuse Full-Stack',
                description: "Ma stack principale est .NET et Angular. Ce que j'aime le plus dans la tech, c'est apprendre de nouvelles choses chaque jour, relever de nouveaux défis et aider mon équipe à donner le meilleur d'elle-même. J'aime faire partie des communautés logicielles de ma ville qui favorisent l'autonomisation et l'inclusion des femmes dans la tech.",
                scroll: 'Faites défiler vers le bas'
            },
            about: {
                title: 'À propos de moi',
                subtitle: 'Mon introduction',
                description: 'J’ai de l’expérience dans la livraison de produits logiciels de haute qualité développés selon des méthodologies agiles.',
                info: {
                    years: 'Années',
                    experience: "d'expérience",
                    completed: 'Projets',
                    projects: 'terminés',
                    companies: 'Entreprises',
                    worked: 'où j’ai travaillé'
                },
                downloadCv: 'Télécharger le CV'
            },
            skills: {
                title: 'Compétences',
                subtitle: 'Mon niveau technique',
                group1: {
                    title: 'Frameworks/langages de programmation',
                    years: '3 ans'
                },
                group2: {
                    title: 'Autres outils',
                    years: '3 ans'
                }
            },
            qualification: {
                title: 'Parcours',
                subtitle: 'Mon parcours personnel',
                tabs: {
                    education: 'Études',
                    work: 'Expérience'
                },
                education: {
                    degree: 'Ingénieure Logiciel',
                    period: '2015 - 2019'
                },
                work: {
                    spectrio: {
                        role: 'Ingénieure Logiciel',
                        period: "2021 - Aujourd'hui"
                    },
                    prestti: {
                        role: 'Développeuse Front-End',
                        period: '2020 - 2021'
                    },
                    celerik: {
                        role: 'Développeuse Full-Stack',
                        period: '2019 - 2020'
                    }
                }
            },
            projects: {
                title: 'Projets',
                subtitle: "Je crois fermement qu'on apprend en faisant, voici donc quelques réalisations qui m'ont permis de maîtriser de nouvelles compétences.",
                demo: 'Démo',
                code: 'Code',
                items: {
                    airbnb: {
                        description: 'Projet réalisé pour le bootcamp Ruby on Rails de GAP.'
                    },
                    gifs: {
                        description: "Projet créé pour renforcer les connaissances Angular du cours Udemy."
                    },
                    countries: {
                        description: "Projet créé pour renforcer les connaissances Angular du cours Udemy."
                    },
                    heroes: {
                        description: "Projet créé pour renforcer les connaissances Angular du cours Udemy."
                    },
                    login: {
                        description: "Projet créé pour renforcer les connaissances Angular et Node du cours Udemy."
                    }
                }
            },
            contact: {
                title: 'Contactez-moi',
                subtitle: 'Disponible pour des missions freelance',
                description: 'Si vous souhaitez collaborer avec moi, envoyez-moi un message et je vous répondrai rapidement.',
                emailTitle: 'E-mail',
                locationTitle: 'Localisation',
                form: {
                    nameLabel: 'Nom',
                    namePlaceholder: 'Votre nom',
                    emailLabel: 'E-mail',
                    emailPlaceholder: 'votre@email.com',
                    messageLabel: 'Message',
                    messagePlaceholder: 'Parlez-moi de votre projet...',
                    send: 'Envoyer le message'
                }
            },
            footer: {
                rights: 'Tous droits réservés'
            }
        }
    }
};

function applyTranslations() {
    if (typeof i18next === 'undefined') {
        return;
    }

    document.documentElement.lang = i18next.language;
    document.title = i18next.t('meta.title');

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.setAttribute('placeholder', i18next.t(key));
    });
}

function getPreferredLanguage() {
    const selectedLanguage = localStorage.getItem('selected-language');
    const browserLanguage = (navigator.language || 'en').slice(0, 2);
    const language = selectedLanguage || browserLanguage;

    return supportedLanguages.includes(language) ? language : 'en';
}

function changeLanguage(language) {
    if (typeof i18next === 'undefined') {
        return;
    }

    i18next.changeLanguage(language).then(() => {
        localStorage.setItem('selected-language', language);
        applyTranslations();
    });
}

if (typeof i18next !== 'undefined') {
    i18next.init({
        lng: getPreferredLanguage(),
        fallbackLng: 'en',
        resources,
        interpolation: {
            escapeValue: false
        }
    }).then(() => {
        applyTranslations();

        if (languageSelect) {
            languageSelect.value = i18next.language;
            languageSelect.addEventListener('change', (event) => {
                changeLanguage(event.target.value);
            });
        }
    });
}

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener(('click'), linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(let i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }

    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        })

        tab.classList.add('qualification__active');
    })
})

/*==================== PROJECTS SWIPER  ====================*/
let swiper = new Swiper(".projects__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class
    if(this.scrollY >= 80)
        nav.classList.add('scroll-header');
    else
        nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun'; // Don't have the icon yet

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the UI has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if(selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme); 
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})
