document.addEventListener("DOMContentLoaded", function () {

```
// Rolagem suave para os links internos
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Mensagem de confirmação do formulário
const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function () {

        const botao = formulario.querySelector("button");

        if (botao) {
            botao.textContent = "Enviando...";
            botao.disabled = true;
        }

    });

}
```

});
