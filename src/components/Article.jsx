import { useState, useEffect } from "react";
import axios from "axios";

const Article = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchFrenchArticle = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=*&language=fr&apiKey=dd361242e173436abacdccef6f7998ca"
        );

        const articlesWithContent = response.data.articles.filter(
          (article) => article.content
        );

        const randomIndex = Math.floor(
          Math.random() * articlesWithContent.length
        );

        setArticle(articlesWithContent[randomIndex]);
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error);
      }
    };

    fetchFrenchArticle();
  }, []);
  return (
    <div>
      {article && (
        <div>
          {/* Affichage du titre de l'article */}
          <h1>{article.title}</h1>
          {/* Affichage du contenu de l'article */}
          <p>{article.content}</p>
          {/* Affichage de la date de publication de l'article */}
          <p>{article.publishedAt}</p>
          {/* Affichage du lien vers l'article source */}
          <p>
            Lien vers l&apos; article source :{" "}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.url}
            </a>
          </p>
          {/* Ajout d'autres éléments au besoin */}
        </div>
      )}
    </div>
  );
};

export default Article;
