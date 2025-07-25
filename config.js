const products = {
    sedas: [
        { id: 1, name: "Seda Smoking Tradicional", price: 7.00, description: "Seda clássica de alta qualidade", image: "sed smoke tradicional.webp" },
        { id: 2, name: "Seda Brown King Size", price: 8.00, description: "Seda premium king size", image: "seda brown ling size.webp" },
        { id: 3, name: "Seda De Luxe King Size", price: 10.00, description: "Seda de luxo para exigentes", image: "Seda De Luxe King Size.jpg" },
        { id: 4, name: "Seda Master", price: 8.00, description: "Seda master premium", image: "Seda Master.webp" },
        { id: 5, name: "Seda Brown Size", price: 7.00, description: "Seda brown tamanho padrão", image: "Seda Brown Size.webp" },
        { id: 6, name: "Seda Smoke Space", price: 9.00, description: "Seda especial smoke space", image: "Seda Smoke Space.webp" },
        { id: 17, name: "Seda Ultra Fina", price: 7.00, description: "Seda leve e resistente", image: "Seda Ultra Fina.webp" },
        { id: 18, name: "Seda Natural Gold", price: 8.00, description: "Feita com fibras naturais douradas", image: "Seda Natural Gold.webp" },
        { id: 19, name: "Seda Transparente", price: 9.00, description: "Para uma experiência visual diferenciada", image: "Seda Transparente.webp" },
        { id: 20, name: "Seda Aromatizada", price: 10.00, description: "Com aromas especiais", image: "Seda Aromatizada.webp" },
        { id: 21, name: "Seda Premium X", price: 8.00, description: "Qualidade superior", image: "Seda Premium X.png" }
    ],
    livros: [
        { id: 7, name: "Café com Deus Pai", price: 60.00, description: "Livro espiritual inspirador", image: "Relaxamento- Mirante dedo de DEUS.jpg" },
        { id: 8, name: "O Poder da Ação", price: 55.00, description: "Livro de desenvolvimento pessoal", image: "lua de meu em joao pessoa.jpg" },
        { id: 9, name: "Especialista em Pessoas", price: 52.00, description: "Guia para relacionamentos", image: "aventura.jpg" },
        { id: 10, name: "O Morro dos Ventos Uivantes", price: 59.00, description: "Clássico da literatura", image: "Relaxamento- Mirante dedo de DEUS.jpg" },
        { id: 22, name: "Mindset", price: 60.00, description: "Psicologia do sucesso", image: "lua de meu em joao pessoa.jpg" },
        { id: 23, name: "A Sutil Arte de Ligar o F*da-se", price: 58.00, description: "Best-seller mundial", image: "cultura.jpg" },
        { id: 24, name: "O Milagre da Manhã", price: 62.00, description: "Transforme suas manhãs", image: "aventura.jpg" },
        { id: 25, name: "Como Fazer Amigos", price: 59.90, description: "Clássico das relações humanas", image: "Relaxamento- Mirante dedo de DEUS.jpg" },
        { id: 26, name: "Pai Rico Pai Pobre", price: 65.00, description: "Educação financeira acessível", image: "aventura.jpg" }
    ],
    acessorios: [
        { id: 11, name: "Isqueiro Premium", price: 25.00, description: "Isqueiro de alta qualidade", image: "lua de meu em joao pessoa.jpg" },
        { id: 12, name: "Cinzeiro Cristal", price: 45.00, description: "Cinzeiro elegante de cristal", image: "Relaxamento- Mirante dedo de DEUS.jpg" },
        { id: 13, name: "Piteira de Marfim", price: 80.00, description: "Piteira artesanal premium", image: "lua de meu em joao pessoa.jpg" },
        { id: 27, name: "Dichavador Metálico", price: 35.00, description: "Compacto e resistente", image: "cultura.jpg" },
        { id: 28, name: "Bandeja Estampada", price: 40.00, description: "Design moderno", image: "Relaxamento- Mirante dedo de DEUS.jpg" },
        { id: 29, name: "Piteira de Vidro", price: 45.00, description: "Fácil de limpar", image: "aventura.jpg" },
        { id: 30, name: "Case de Transporte", price: 50.00, description: "Proteção para seus acessórios", image: "cultura.jpg" },
        { id: 31, name: "Cortador de Charuto", price: 55.00, description: "Precisão no corte", image: "Praia paradisiaca- joao pessoa.jpg" }
    ],
    bebidas: [
        { id: 14, name: "Whisky Premium", price: 120.00, description: "Whisky importado premium", image: "Praia paradisiaca- joao pessoa.jpg" },
        { id: 15, name: "Vinho Tinto Reserva", price: 85.00, description: "Vinho tinto de qualidade", image: "lua de meu em joao pessoa.jpg" },
        { id: 16, name: "Cerveja Artesanal", price: 15.00, description: "Cerveja artesanal especial", image: "Praia paradisiaca- joao pessoa.jpg" },
        { id: 32, name: "Gin Artesanal", price: 90.00, description: "Blend exclusivo de ervas", image: "cultura.jpg" },
        { id: 33, name: "Rum Escuro Importado", price: 110.00, description: "Envelhecido com elegância", image: "cultura.jpg" },
        { id: 34, name: "Tequila Reposado", price: 130.00, description: "Sabor marcante", image: "cultura.jpg" },
        { id: 35, name: "Licor de Café", price: 70.00, description: "Perfeito para sobremesas", image: "aventura.jpg" },
        { id: 36, name: "Vinho Branco Seco", price: 82.00, description: "Refrescância e suavidade", image: "aventura.jpg" }
    ]
};


        let cart = [];
        let currentCategory = 'sedas';

        // DOM Elements
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        const cartBtn = document.getElementById('cartBtn');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.getElementById('closeCart');
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const productsGrid = document.getElementById('productsGrid');

        // Mobile menu toggle
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Category selection
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                currentCategory = category;
                
                // Add active state to category
                document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                
                showLoading();
                setTimeout(() => {
                    loadProducts(category);
                    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            });
        });

        // Load products
        function loadProducts(category = 'sedas') {
            const categoryProducts = products[category] || [];
            productsGrid.innerHTML = '';

            categoryProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" style="width:100%; height:auto; border-radius:10px;">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
            </button>
        </div>
    `;
    
                productsGrid.appendChild(productCard);
            });
        }

        // Add to cart
        function addToCart(productId) {
            const product = Object.values(products).flat().find(p => p.id === productId);
            if (product) {
                const existingItem = cart.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ ...product, quantity: 1 });
                }
                updateCartUI();
            }
        }

        // Remove from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        // Update cart UI
        function updateCartUI() {
            cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="color: #ccc; text-align: center;">Seu carrinho está vazio</p>';
                cartTotal.textContent = 'Total: R$ 0,00';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div>
                            <strong>${item.name}</strong><br>
                            <small>Quantidade: ${item.quantity}</small>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #d4af37; font-weight: bold;">R$ ${(item.price * item.quantity).toFixed(2)}</div>
                            <button onclick="removeFromCart(${item.id})" style="background: #e74c3c; color: white; border: none; padding: 5px; border-radius: 3px; cursor: pointer; margin-top: 5px;">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `).join('');
                
                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
            }
        }

        // Cart modal
        cartBtn.addEventListener('click', () => {
            cartModal.style.display = 'flex';
        });

        closeCart.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });

        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });

        // Checkout
        document.getElementById('checkout').addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const message = `Olá Novinho! Gostaria de fazer um pedido:\n\n${cart.map(item => `${item.name} - Qtd: ${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`).join('\n')}\n\nTotal: R$ ${total.toFixed(2)}`;
            const whatsappUrl = `https://wa.me/5584998978158?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
            cart = [];
            updateCartUI();
            cartModal.style.display = 'none';
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });

        // Initialize with sedas products
        loadProducts('sedas');

        // Hero Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const totalSlides = slides.length;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add('active');
        }

        // Change slide every 6 seconds
        setInterval(nextSlide, 6000);

        // Product cards animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe product cards for animation
        const animateOnScroll = () => {
            document.querySelectorAll('.product-card').forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `all 0.6s ease ${index * 0.1}s`;
                observer.observe(card);
            });
        };

        // Re-animate when products are loaded
        const originalLoadProducts = loadProducts;
        loadProducts = function(category) {
            originalLoadProducts(category);
            setTimeout(animateOnScroll, 100);
        };

        // Initial animation
        setTimeout(animateOnScroll, 100);



const bestsellers = [
    products.sedas.find(p => p.name.includes("Brown King Size")),
    products.bebidas.find(p => p.name.includes("Whisky Premium")),
    products.acessorios.find(p => p.name.includes("Piteira")),
    products.livros.find(p => p.name.includes("Poder da Ação"))
];


function loadBestSellers() {
    const bestsellersGrid = document.getElementById('bestsellersGrid');
    bestsellersGrid.innerHTML = '';

    bestsellers.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" style="width:100%; height:auto; border-radius:10px;">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
            </button>
        </div>
    `;
    
        bestsellersGrid.appendChild(productCard);
    });

    animateOnScroll();
}

// Chamada da função ao carregar a página
loadBestSellers();


        // Add loading state for better UX
        function showLoading() {
            productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #d4af37;">
                    <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                    <p>Carregando produtos...</p>
                </div>
            `;
        }

        function aceitarCookies() {
            localStorage.setItem('cookies_aceitos', 'true');
            document.getElementById('cookieBanner').style.display = 'none';
        }

        window.onload = function () {
            if (!localStorage.getItem('cookies_aceitos')) {
            document.getElementById('cookieBanner').style.display = 'block';
            }
        }

        function aceitarCookies() {
            localStorage.setItem('cookies_aceitos', 'true');
            document.getElementById('cookieBanner').style.display = 'none';
            ativarPixelFacebook(); // ativa o pixel com o consentimento
            }
        window.onload = function () {
            if (localStorage.getItem('cookies_aceitos')) {
                document.getElementById('cookieBanner').style.display = 'none';
                ativarPixelFacebook(); // ativa automaticamente
            } else {
                document.getElementById('cookieBanner').style.display = 'block';
            }
            }
