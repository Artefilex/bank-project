import PropTypes from "prop-types";
function ListItem({value , title}) {
  return  <li className="flex flex-col  gap-2">
  <span  className="text-gray-500">{title} </span>
  <span>{value}</span>
</li>;
}
ListItem.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string
}
export default ListItem;
