document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links do menu
    const menuItems = document.querySelectorAll("nav ul li");

    // Mapeia os textos dos itens do menu para os IDs das seções correspondentes
    const sectionMap = {
        "quem somos": ".AboutContainer",
        "sustentabilidade": ".sustentability",
        "trabalhe conosco": ".contact",
        "contato": ".contactForm"
    };

    menuItems.forEach(item => {
        // Adiciona o evento de clique para rolar suavemente até a seção
        item.addEventListener("click", function () {
            const sectionClass = sectionMap[item.innerText.toLowerCase()];
            
            if (sectionClass) {
                const targetSection = document.querySelector(sectionClass);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50, // Ajuste para compensar o header fixo
                        behavior: "smooth"
                    });
                }
            }
        });

        // Efeito ao passar o mouse (hover)
        item.style.cursor = "pointer"; 
        item.style.transition = "color 0.3s, transform 0.2s"; // Transições suaves

        item.addEventListener("mouseover", function () {
            this.style.color = "#FFA500"; // Altera a cor ao passar o mouse (laranja)
            this.style.transform = "scale(1.1)"; // Aumenta ligeiramente o tamanho
        });

        item.addEventListener("mouseout", function () {
            this.style.color = ""; // Volta à cor original
            this.style.transform = "scale(1)"; // Volta ao tamanho normal
        });
    });
});