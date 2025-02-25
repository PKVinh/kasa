import { Link } from "react-router";
import PropTypes from 'prop-types';
import styles from "./Card.module.css"

function Card ({title, image, id}) {
  return (
    <Link to={`/accommodation/${id}`} >
        <div className={styles.card}>
          <img src={image} alt={title} />
          <h2>{title}</h2>
        </div>
    </Link>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;

