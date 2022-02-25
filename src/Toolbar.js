import './Toolbar.css'
import PropTypes from "prop-types";
import filtersList from "./img/filtersList";

function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;

    const buttons = filters.map((filter) => <button key={filter} onClick={() => onSelectFilter(filter)} className={filter === selected ? 'selected' : ''}>{filter}</button>)
    return (
        <div className="toolbar">
            {buttons}
        </div>
    )
}

Toolbar.propTypes = {
    onSelectFilter: PropTypes.func,
    selected: PropTypes.oneOf(filtersList),
    filters: PropTypes.arrayOf(PropTypes.oneOf(filtersList)),
}

export default Toolbar;
