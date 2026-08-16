# Ninha Machado | Atriz e Dubladora

Portfólio estático mobile-first de Ninha Machado, atriz e dubladora, preparado para publicação no GitHub Pages.

## Como executar localmente

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Estrutura

```text
index.html
styles.css
script.js
.nojekyll
assets/optional/
```

## Onde editar

- Samples de voz: edite o array `samples` em `script.js`.
- Trabalhos realizados: edite o array `works` em `script.js`.
- Formação, formações artísticas e idiomas: edite os arrays correspondentes em `script.js`.
- Contato: edite o objeto `contact` em `script.js`.
- Foto histórica opcional: edite ou substitua `assets/optional/FotoDublagemAntiga.png`.

## Assets

As imagens e áudios ficam dentro da pasta:

```text
assets/
```

Use `assets/Banners` para banners, `assets/Thumbs` para capas dos samples,
`assets/Audios` para arquivos de voz e `assets/Trabalhos` para imagens dos
trabalhos realizados.

## Publicação

URL esperada no GitHub Pages:

```text
https://ninhamachadodub.github.io/
```
