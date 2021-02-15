import React, { useState } from "react";
import "./NewsCard.css";
import img from "../../images/пепе.png";

const NewsCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    setIsHovered(!isHovered);
  }
  return (
    <li className="news__item">
      <img className="news__image" src={img} alt="иллюстрация к новости" />
      <div>
        <p
          className={
            isHovered ? "item__tooltip item__tooltip_visible" : "item__tooltip"
          }
        >
          {props.delete ? "Убрать из сохраненных" : "Сохранить"}
        </p>
        <button
          type="button"
          className={props.delete ? "news__delete-button" : "news__save-button"}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        ></button>
        <p className="news__theme-text">Погода</p>
      </div>
      <div className="news__caption">
        <a className="news__link" href="/">
          <time className="news__date">20202020</time>
          <h3 className="news__title">Погода погода</h3>
          <p className="news__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            delectus maiores assumenda quo fuga molestiae cum optio, impedit
            necessitatibus nobis maxime iure dolore debitis excepturi, corporis
            quae hic! Sequi atque suscipit nobis! Minima suscipit, obcaecati
            eius, eos architecto alias pariatur eum voluptatem qui quia sequi
            labore porro? Aliquam, omnis rerum!
          </p>
          <p className="news__media">АФИША</p>
        </a>
      </div>
    </li>
  );
};

export default NewsCard;
