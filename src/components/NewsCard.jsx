
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
function NewsCard({newsUrl, image ,title ,description}) {
  return   <Link to={newsUrl}  target="_blank" className="flex w-full gap-8 flex-col xtablet:flex-row"> 
         
  <img src={image} className="xtablet:max-w-[15rem] w-full" alt="" />
  <header >
  <h2 className="text-2xl font-semibold text-slate-950 mb-2">{title}  </h2>
  <p className="text-slate-600">{description}</p>
  </header>
  </Link>;
}

NewsCard.propTypes = {
    newsUrl:PropTypes.string,
    image:PropTypes.string,
    title:PropTypes.string,
    description: PropTypes.string, 

}
export default NewsCard;
