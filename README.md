# Isabel Ivo — CV Website

Site de página única (CV + investigação) para Isabel Ivo, biotecnóloga e mestranda em
Tecnologias Laboratoriais Clínicas.

## Estrutura

```
isabel-site/
├── index.html        conteúdo do site
├── css/style.css      estilos (tokens de cor/tipografia no topo do ficheiro)
├── js/script.js       scroll-reveal (respeita prefers-reduced-motion)
└── assets/headshot.png  foto recortada do CV original
```

Site 100% estático — sem build step, sem dependências. Abre `index.html` diretamente
no browser para testar localmente.

## Antes de publicar — por corrigir

- [ ] Substituir o link `#` do **ORCID** pelo URL real do perfil ORCID (aparece 2x:
      no cabeçalho e no rodapé).
- [ ] Confirmar a data da experiência na Continente (SONAE) — assumi **2020–2022**
      a corrigir o erro de dedo "2926" que estava no CV original.
- [ ] Trocar a foto em `assets/headshot.png` por um ficheiro de maior resolução,
      se tiveres um (esta foi recortada do PDF do CV, por isso tem qualidade limitada).

## Publicar via GitHub + Vercel

1. Cria um repositório novo no GitHub (ex: `isabel-ivo-cv`).
2. No terminal, dentro desta pasta:
   ```bash
   git init
   git add .
   git commit -m "primeira versão do site"
   git branch -M main
   git remote add origin https://github.com/<teu-user>/isabel-ivo-cv.git
   git push -u origin main
   ```
3. Em [vercel.com](https://vercel.com), faz login com GitHub → **Add New Project**
   → seleciona o repositório `isabel-ivo-cv`.
4. Vercel deteta automaticamente que é um site estático (não precisas de configurar
   build command nem output directory — deixa em branco/default).
5. Clica em **Deploy**. Fica disponível num URL tipo `isabel-ivo-cv.vercel.app`.
6. (Opcional) Em **Settings → Domains** podes ligar um domínio próprio, se tiveres.

Sempre que fizeres `git push` para `main`, o Vercel volta a publicar automaticamente.
