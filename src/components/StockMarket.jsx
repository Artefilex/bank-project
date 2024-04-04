
import PropTypes from "prop-types";
function StockMarket({ close, high, low, open, volume, volumeWeight, title }) {
  return (
    <section>
      <header>
        <h2>{title}</h2>
        <h4> {volume} </h4>
      </header>

      <ul>
        <li>
          <span> Open </span>
          <span>{open}</span>
        </li>
      
        <li>
          <span> High </span>
          <span>{high}</span>
        </li>
        <li>
          <span> Low </span>
          <span>{low}</span>
        </li>
      </ul>
      <ul>
      <li>
          <span> Close </span>
          <span>{close}</span>
        </li>
        <li>
          <span> Volume Weight </span>
          <span>{volumeWeight}</span>
        </li>
      </ul>
    </section>
  );
}

StockMarket.propTypes = {
  close: PropTypes.number,
  high: PropTypes.number,
  low: PropTypes.number,
  open: PropTypes.number,
  volume: PropTypes.number,
  volumeWeight: PropTypes.number,
  title: PropTypes.string,
};
export default StockMarket;
