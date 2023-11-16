import { useState, useEffect, useRef } from "react";
import axios from "axios";
import apiKey from ".././config";

const RandomArticle = () => {
  const [date, setDate] = useState("");
  const [article, setArticle] = useState(null);
  const dateRef = useRef(date);

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
    dateRef.current = newDate;
  };

  useEffect(() => {
    const fetchFrenchArticle = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=*&language=fr&from=${dateRef.current}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        const articlesWithContent = response.data.articles.filter(
          (article) => article.content
        );

        if (articlesWithContent.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * articlesWithContent.length
          );

          setArticle(articlesWithContent[randomIndex]);
        } else {
          setArticle(null);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error);
      }
    };

    fetchFrenchArticle();
  }, [date]);

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          placeholder="Entrez une date"
        />
        <input type="submit" value="Rechercher" />
      </form>
      {article && (
        <div>
          {/* Affichage du titre de l'article */}
          <h1>{article.title}</h1>
          {/* Affichage de la description de l'article */}
          <p>{article.description}</p>
          {/* Affichage du lien vers l'article source */}
          <p>
            Lien vers l / article source :{" "}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.url}
            </a>
          </p>
        </div>
      )}
      {!article && <p>Aucun article trouvé pour cette date.</p>}
    </div>
  );
};

export default RandomArticle;
