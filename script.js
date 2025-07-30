const translations = {
    pt: {
        jobTitle: "Líder Digital e de Desenvolvimento",
        bio: "O seu contato francês, aliando a perícia digital ao saber-fazer têxtil português... e sim, até em Inglês, Espanhol e Português.",
        addContact: "Adicionar aos contatos",
        visitWebsite: "Visitar o site Lisabor",
        sendEmail: "Enviar um email",
        call: "Ligar",
        linkedin: "Perfil LinkedIn"
    },
    en: {
        jobTitle: "Head of Digital & Development",
        bio: "Your French contact, combining digital expertise with Portuguese textile craftsmanship... and yes, even in English, Spanish, and Portuguese.",
        addContact: "Add to contacts",
        visitWebsite: "Visit Lisabor website",
        sendEmail: "Send an email",
        call: "Call",
        linkedin: "LinkedIn Profile"
    },
    fr: {
        jobTitle: "Responsable Digital & Développement",
        bio: "Votre interlocutrice française, alliant expertise digitale et savoir-faire textile portugais... et oui, même en Anglais, Espagnol et Portugais.",
        addContact: "Ajouter aux contacts",
        visitWebsite: "Visiter le site Lisabor",
        sendEmail: "Envoyer un email",
        call: "Appeler",
        linkedin: "Profil LinkedIn"
    },
    es: {
        jobTitle: "Líder Digital y de Desarrollo",
        bio: "Su contacto francés, combinando la experiencia digital con el saber-hacer textil portugués... y sí, incluso en Inglés, Español y Portugués.",
        addContact: "Añadir a contactos",
        visitWebsite: "Visitar el sitio Lisabor",
        sendEmail: "Enviar un email",
        call: "Llamar",
        linkedin: "Perfil de LinkedIn"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.language-selector button');

    updateTexts('pt');
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            updateTexts(lang);

            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

function updateTexts(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}