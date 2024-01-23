document.addEventListener("DOMContentLoaded", function () {
    
    SocialMedia.changeAvatarGitHub("avatar", "fabiobraganet");
    SocialMedia.createLink("github", "githubfabiobraga", "fa-github");
    SocialMedia.createLink("linkedin", "linkedinfabiobraga", "fa-linkedin");
    SocialMedia.createLink("whatsapp", "wappfabiobraga", "fa-whatsapp");
    SocialMedia.createLink("telegram", "telegramfabiobraga", "fa-telegram");
    SocialMedia.createLink("mail", "mailfabiobraga", "fa-google");

});

class SocialMedia {

    static TINY_URL = "http://tinyurl.com/";
    static ELEMENT_ICON = "i";
    static FAB = "fab";
    
    static changeAvatarGitHub(elementId, username) {
        var avatarElement = document.getElementById(elementId);
    
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                var avatarUrl = data.avatar_url;
                avatarElement.src = avatarUrl;
            })
            .catch(error => console.error("Erro ao recuperar avatar do GitHub:", error));
    }

    static createLink(elementId, alias, iconClass) {
        var link = document.getElementById(elementId);
        link.href = SocialMedia.TINY_URL + alias;

        var icon = document.createElement(SocialMedia.ELEMENT_ICON);
        icon.classList.add(SocialMedia.FAB, iconClass);

        link.appendChild(icon);
    }
}

class Accessibility {
    static toggleParagraphs(name, event) {
        event.preventDefault();
        const paragraphs = document.querySelectorAll(`.${name} p.mm`);

        const link = event.target;

        if (link.textContent.includes('+')) {
            link.textContent = '[-] Ver menos';
            paragraphs.forEach((paragraph) => {
                paragraph.classList.remove('hidden');
            });
        } else {
            link.textContent = '[+] Ver mais';
            paragraphs.forEach((paragraph) => {
                paragraph.classList.add('hidden');
            });
        }
    }

    static changeFontSize(paragraphs, size) {
        paragraphs.forEach((paragraph) => {
            paragraph.style.setProperty('font-size', size, 'important');
        });
    }

    static increaseFontSize(name) {
        const paragraphs = document.querySelectorAll(`.${name} p`);
        const currentFontSize = parseInt(window.getComputedStyle(paragraphs[0]).fontSize);
        const newFontSize = currentFontSize + 2 + 'px';
        Accessibility.changeFontSize(paragraphs, newFontSize);
    }

    static decreaseFontSize(name) {
        const paragraphs = document.querySelectorAll(`.${name} p`);
        const currentFontSize = parseInt(window.getComputedStyle(paragraphs[0]).fontSize);
        const newFontSize = currentFontSize - 2 + 'px';
        Accessibility.changeFontSize(paragraphs, newFontSize);
    }
}


function openModal(target) {
    var modalId = target.id + '_Modal';
    var modal = document.getElementById(modalId);
    var span = modal.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}