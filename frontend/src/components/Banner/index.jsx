import PropTypes from 'prop-types';
import styles from "./Banner.module.css"

function Banner({image, title}) {
    return (
      <section className={title ? styles.banner_container_home : styles.banner_container_about}>
      {/* Condition ternaire: SI title ALORS .banner_home SINON .banner_about */}
        <img src={image} alt="home-banner"></img>
        {title && <h1>{title}</h1>}
      </section>
    )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
};
  
export default Banner