    // Selecionando os elementos do DOM
    const navbar = document.querySelector('.navbar');
    const searchForm = document.querySelector('.search-form');
    const cartItem = document.querySelector('.cart-items-container');
    const menuBtn = document.querySelector('#menu-btn');
    const searchBtn = document.querySelector('#search-btn');
    const cartBtn = document.querySelector('#cart-btn');

    // Adicionando eventos aos botões
    menuBtn.addEventListener('click', toggleMenu);
    searchBtn.addEventListener('click', toggleSearch);
    cartBtn.addEventListener('click', toggleCart);
    window.addEventListener('scroll', closeAll);

    // Função para alternar o menu
    function toggleMenu() {
        navbar.classList.toggle('active');
        closeSearchAndCart();
    }

    // Função para alternar o formulário de pesquisa
    function toggleSearch() {
        searchForm.classList.toggle('active');
        closeMenuAndCart();
    }

    // Função para alternar o carrinho de compras
    function toggleCart() {
        cartItem.classList.toggle('active');
        closeMenuAndSearch();
    }

    // Função para fechar o menu, formulário de pesquisa e carrinho de compras
    function closeAll() {
        closeMenuAndSearch();
        cartItem.classList.remove('active');
    }

    // Função para fechar o menu e formulário de pesquisa
    function closeMenuAndSearch() {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }

    // Função para fechar o menu e carrinho de compras
    function closeMenuAndCart() {
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
    }

    // Função para fechar o formulário de pesquisa e carrinho de compras
    function closeSearchAndCart() {
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }

    document.addEventListener("DOMContentLoaded", function() {
        const searchBox = document.getElementById("search-box");
        const products = document.querySelectorAll(".menu .box");

        searchBox.addEventListener("input", function() {
            const searchTerm = searchBox.value.trim().toLowerCase();
            products.forEach(product => {
                const productName = product.querySelector("h3").textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });

    // Adicionando evento de envio para o formulário de contato
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Captura os valores dos campos
        var nome = document.getElementById('nome').value;
        var telefone = document.getElementById('telefone').value;

        // Cria a mensagem com o nome da pessoa
        var mensagem = encodeURIComponent('Olá, meu nome é ' + nome + ' e gostaria de falar com o Kauê.');

        // Abre o link do WhatsApp com a mensagem pré-preenchida
        window.location.href = 'https://wa.me/5588988765629?text=' + mensagem;
    });