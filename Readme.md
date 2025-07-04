
# 🌍 Turist - Guia de Viagem

**Turist** é um site desenvolvido com foco em auxiliar turistas e viajantes a encontrarem os melhores destinos, dicas de viagem, promoções e conteúdos úteis para planejar a viagem perfeita.

![Turist Logo](./img/turist-logo.svg)

---

## ✈️ Sobre o Projeto

O Turist oferece:
- Dicas essenciais para quem vai viajar pela primeira vez;
- Lista de destinos populares e acessíveis;
- Vídeos ilustrativos de lugares incríveis;
- Conteúdo responsivo e amigável para dispositivos móveis;
- Formulário de cadastro para receber promoções e novidades.

---

## 💻 Tecnologias Utilizadas

- HTML5
- CSS3
- [Bootstrap 5.3](https://getbootstrap.com/)
- SVG para logotipo
- Vídeos MP4 embutidos sem controles
- Estrutura responsiva com grid e componentes do Bootstrap

---

## 📁 Estrutura de Pastas

```
/img
  turist-logo.svg
  /video
    video.mp4
    video2.mp4
    video3.mp4

/pages
  index.html
  cadastro.html

README.md
```

---

## 🎥 Como os vídeos são exibidos

Os vídeos dos cards são configurados com:

```html
<video autoplay muted loop playsinline class="card-img-top">
  <source src="/img/video/video2.mp4" type="video/mp4">
</video>
```

- **Sem barra de progresso** (`controls` não incluído)
- **Início automático**
- **Loop contínuo**
- **Som desativado por padrão**

---

## 📱 Responsividade

O projeto foi construído utilizando o sistema de grid do Bootstrap. Todos os componentes se ajustam para celulares, tablets e desktops.

---

## ✅ Funcionalidades Futuras

- Sistema de login e cadastro completo
- Integração com API de passagens
- Página de blog com dicas e roteiros
- Área do usuário para favoritos e histórico de viagens

---

## 🙋‍♂️ Contribuindo

Sinta-se à vontade para abrir **issues** ou fazer um **fork** do projeto e contribuir com melhorias, sugestões e correções.

---

## 📃 Licença

Este projeto está sob a licença MIT.

---

> Desenvolvido com 💙 por **William Alves** — Projeto de estudo para prática de HTML + Bootstrap.
