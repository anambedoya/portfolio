const spanishConfig = {
    intro: "Hola, soy Ana. Una desarrolladora que ama el front-end",
    introTwo: "y aprender nuevas tecnologías"
}

const englishConfig = {
    intro: "Hi, I'm Ana. A software engineer who loves front-end",
    introTwo: "and learning new technologies"
}

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

const radioButtonEnglish = document.getElementById('english');
const radioButtonSpanish = document.getElementById('spanish');

radioButtonEnglish.addEventListener('change', () => {
    console.log('English');
    changeLanguage(englishConfig);
});

radioButtonSpanish.addEventListener('change', () => {
    console.log('Spanish');
    changeLanguage(spanishConfig);
});

function changeLanguage (selectedLanguage = englishConfig) {
    const replaceText = (el) => {
        const key = el.innerText;
        el.innerText = selectedLanguage[key] || key;
    }
    
    const elements = document.querySelectorAll("[data-i8n]");
    elements.forEach(el => replaceText(el));
    console.log(elements);
}
