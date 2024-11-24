document.addEventListener('DOMContentLoaded', () => {
    const notificationButton = document.querySelector('.notification-button');
    const notifications = document.querySelector('.notifications');

    if (notificationButton && notifications) {
        notificationButton.addEventListener('click', (event) => {
            event.stopPropagation();
            notifications.classList.toggle('hidden');
            notifications.style.display = notifications.classList.contains('hidden') ? 'none' : 'block';
        });
    }

    document.addEventListener('click', () => {
        if (notifications) {
            notifications.classList.add('hidden');
            notifications.style.display = 'none';
        }
    });

    const pinButton = document.querySelector('.pin-button');
    const pinnedMessages = document.querySelector('.pinned-messages');

    if (pinButton && pinnedMessages) {
        pinButton.addEventListener('click', (event) => {
            event.stopPropagation();
            pinnedMessages.classList.toggle('hidden');
            pinnedMessages.style.display = pinnedMessages.classList.contains('hidden') ? 'none' : 'block';
        });
    }

    document.addEventListener('click', () => {
        if (pinnedMessages) {
            pinnedMessages.classList.add('hidden');
            pinnedMessages.style.display = 'none';
        }
    });

    const menuButtons = document.querySelectorAll('.menu-button');

    menuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();

            const dropdownMenu = button.nextElementSibling;

            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.add('hidden');
                    menu.style.display = 'none';
                }
            });

            dropdownMenu.classList.toggle('hidden');
            dropdownMenu.style.display = dropdownMenu.classList.contains('hidden') ? 'none' : 'block';
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.add('hidden');
            menu.style.display = 'none';
        });
    });

    const sendButton = document.querySelector('.chat-input .send');
    const messageInput = document.querySelector('.chat-input input');

    if (sendButton && messageInput) {
        sendButton.addEventListener('click', () => {
            messageInput.value = '';
        });
    }

    document.querySelectorAll('.server-name').forEach(server => {
        server.addEventListener('click', () => {
            const parent = server.parentElement;
            const isActive = parent.classList.contains('active');

            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });

            if (!isActive) {
                parent.classList.add('active');
            }
        });
    });

    const languageButton = document.querySelector('.language-button');
    const languageMenu = document.querySelector('.language-menu');

    if (languageButton && languageMenu) {
        languageButton.addEventListener('click', (event) => {
            event.stopPropagation();

            document.querySelectorAll('.language-menu, .dropdown-menu').forEach(menu => {
                if (menu !== languageMenu) {
                    menu.classList.add('hidden');
                    menu.style.display = 'none';
                }
            });

            languageMenu.classList.toggle('hidden');
            languageMenu.style.display = languageMenu.classList.contains('hidden') ? 'none' : 'block';
        });
    }

    document.addEventListener('click', () => {
        if (languageMenu) {
            languageMenu.classList.add('hidden');
            languageMenu.style.display = 'none';
        }
    });

    const searchInput = document.querySelector('.friend-search-input');
    const searchResults = document.querySelector('.friend-search-results');

    if (searchInput && searchResults) {
        searchInput.addEventListener('focus', () => {
            searchResults.style.display = 'block';
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.friend-search-container')) {
                searchResults.style.display = 'none';
            }
        });
    }

    const addFriendButtons = document.querySelectorAll('.add-friend-button');

    addFriendButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const friendName = event.target.parentElement.querySelector('.friend-name').textContent;
            alert(`${friendName} hozzáadva a barátokhoz.`);
        });
    });
});
