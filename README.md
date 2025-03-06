# NewsAPI 📰

Une application React permettant de découvrir des articles d'actualité aléatoires en français en fonction d'une date sélectionnée.

![NewsAPI App](https://via.placeholder.com/800x400?text=NewsAPI+App)

## 🌟 Fonctionnalités

- **Articles aléatoires** : Découvrez des articles d'actualité au hasard
- **Filtrage par date** : Sélectionnez une date spécifique pour voir les actualités correspondantes
- **Interface intuitive** : Navigation simple avec un sélecteur de date
- **Liens vers les sources** : Accédez directement aux articles complets

## 🛠️ Technologies

- **React** - Bibliothèque UI
- **Vite** - Outil de build et serveur de développement
- **Axios** - Client HTTP pour les requêtes API
- **News API** - API externe pour les données d'actualités
- **Hooks React** - useState, useEffect et useRef pour la gestion d'état et des effets

## 🚀 Installation

1. Clonez ce dépôt
```bash
git clone git@github.com:techmefr/usenewsapi.git
cd usenewsapi
```

2. Installez les dépendances
```bash
npm install
```

3. Créez un fichier `src/config.js` contenant votre clé API News API :
```javascript
const apiKey = 'votre_clé_api_ici';
export default apiKey;
```

4. Démarrez le serveur de développement
```bash
npm run dev
```

5. Construisez pour la production
```bash
npm run build
```

## 📋 Structure du Projet

```
newsapi/
├── src/
│   ├── components/
│   │   ├── RandomArticle.jsx  # Composant principal d'affichage d'articles aléatoires
│   │   ├── Article.jsx        # Composant de rendu d'un article
│   │   └── Weather.jsx        # Composant météo (bonus)
│   ├── App.jsx                # Composant racine de l'application
│   ├── config.js              # Configuration de l'API (clé)
│   └── main.jsx               # Point d'entrée React
└── ...
```

## 🎮 Comment Utiliser

1. **Sélection de date** : Utilisez le sélecteur de date pour choisir une journée spécifique
2. **Affichage d'article** : Un article aléatoire correspondant à la date choisie s'affiche automatiquement
3. **Accès à la source** : Cliquez sur le lien fourni pour lire l'article complet sur le site d'origine

## 🧠 Apprentissages Acquis

Ce projet m'a permis de pratiquer :
- L'intégration d'API externes avec Axios
- L'utilisation des Hooks React (useState, useEffect, useRef)
- La gestion des formulaires et des événements
- Le traitement des réponses API et la gestion des erreurs
- Le rendu conditionnel en fonction de l'état
- L'utilisation de useRef pour conserver des valeurs entre les rendus

## 🔮 Améliorations Futures

- Implémenter un système de catégories pour filtrer les articles par thème
- Ajouter une fonctionnalité de recherche par mots-clés
- Sauvegarder les articles favoris localement
- Implémenter une pagination pour voir plus d'articles
- Ajouter des animations de transition entre les articles
- Intégrer une visualisation de données sur les tendances d'actualités

## 📝 Licence

Ce projet est sous licence libre.

---

Développé avec ❤️ en utilisant React, Vite et News API
