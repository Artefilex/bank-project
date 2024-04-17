import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moneyImage from "../assest/money.jpeg";
function NewsCard({ newsUrl, image, title, description }) {
  return (
    <>
      {title !== "[Removed]" && (
        <Link
          to={newsUrl}
          target="_blank"
          className="flex w-full gap-8 flex-col xtablet:flex-row hover:bg-slate-300 px-2 py-4"
        >
          <img
            src={image || moneyImage}
            className="xtablet:max-w-[15rem] w-full h-[8rem] object-center object-cover"
            alt="image"
          />
          <header>
            <h2 className="text-2xl font-semibold text-slate-950 mb-2">
              {title}
            </h2>
            <p className="text-slate-600">{description}</p>
          </header>
        </Link>
      )}
    </>
  );
}

NewsCard.propTypes = {
  newsUrl: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
export default NewsCard;
