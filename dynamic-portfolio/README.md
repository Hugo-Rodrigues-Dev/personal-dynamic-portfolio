# Portfolio dynamique (React + Vite)

Ce dossier contient la nouvelle version dynamique de mon portfolio.  
L’application repose sur **React 19**, **TypeScript**, **Vite**, **Tailwind CSS** et **Framer Motion** pour offrir une expérience moderne animée, multilingue (FR/EN) et facilement extensible.

## Scripts utiles

```bash
npm install        # installe les dépendances
npm run dev        # démarre le serveur de développement (http://localhost:5173)
npm run build      # génère la version de production dans dist/
npm run preview    # sert la version de production en local
```

## Structure principale

- `src/content/translations.ts` : toutes les données bilingues (sections, projets, pages détaillées).
- `src/content/projects.ts` : métadonnées communes des projets (slug, lien GitHub).
- `src/components/` : composants d’interface (layout, sections, etc.).
- `src/routes/` : pages `HomePage` et `ProjectPage` avec React Router.
- `public/assets/images` : ressources graphiques du portfolio.

## Stack & effets

- **React 19 + Vite** pour un rendu rapide et modulaire.
- **Tailwind CSS** pour le design réactif.
- **Framer Motion** pour les animations (cartes interactives, transitions).
- **React Router** pour la navigation entre la page d’accueil et les fiches projets.
- **Gestion de langue** via un `LanguageProvider` avec persistance `localStorage`.
