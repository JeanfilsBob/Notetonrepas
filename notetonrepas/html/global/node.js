document.querySelectorAll('.favorite').forEach(fav => {
    fav.addEventListener('click', (event) => {
        event.stopPropagation();
        fav.classList.toggle('active');
    });
});

document.querySelectorAll('.star').forEach((star, index) => {
    star.addEventListener('click', () => {
        document.querySelectorAll('.star').forEach((s, i) => {
            s.classList.toggle('selected', i <= index);
        });
    });
});

document.querySelectorAll('.category-title').forEach(title => {
    title.addEventListener('click', (event) => {
        let wrapper = title.nextElementSibling;
        wrapper.style.display = wrapper.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('change', (event) => {
        const wrapper = event.target.parentElement;
        if (event.target.value) {
            wrapper.classList.add('selection-active');
        } else {
            wrapper.classList.remove('selection-active');
        }
    });
});

document.querySelectorAll('.delete-selection').forEach(deleteBtn => {
    deleteBtn.addEventListener('click', (event) => {
        const wrapper = event.target.parentElement;
        const dropdown = wrapper.querySelector('.dropdown');
        dropdown.value = '';
        wrapper.classList.remove('selection-active');
    });
});

document.querySelector('.validate').addEventListener('click', () => {
    document.querySelector('.message').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.message').style.display = 'none';
    }, 2000);
});

const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('shifted');
});



document.getElementById("classement-btn").addEventListener("click", function () {
            window.location.href = "classement/index.html";
        });

        document.getElementById("menu-btn").addEventListener("click", function () {
            window.location.href = "menu/menu.html";
        });

        document.getElementById("reservation-btn").addEventListener("click", function () {
            window.location.href = "#";
        });

        document.getElementById("historique-btn").addEventListener("click", function () {
            window.location.href = "history/history.html";
        });

        document.getElementById("contact-btn").addEventListener("click", function () {
            window.location.href = "contact/index.html";
        });

        // Profil & fidélité
        document.getElementById("profil-btn").addEventListener("click", function () {
            window.location.href = "profile/profile.html";
        });

        document.getElementById("fidéliter-btn").addEventListener("click", function () {
            window.location.href = "fidelite/index.html";
        });

        document.getElementById("home-btn").addEventListener("click", function () {
            window.location.href = "/html/index.html";
        });
