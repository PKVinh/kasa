import styles from "./Tag.module.css"
import PropTypes from 'prop-types';

function Tag({text}) {
    return (
      <span className={styles.tag}>{text}</span>
    )
  }

Tag.propTypes = {
  text: PropTypes.string.isRequired
};
  
export default Tag