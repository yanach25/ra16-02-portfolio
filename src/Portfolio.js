import React from "react";
import Toolbar from "./Toolbar";
import initialList from "./initial-list";
import filtersTypes from "./img/filters-types";
import filtersList from "./img/filtersList";
import './Portfolio.css';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: filtersList,
            selected: filtersTypes.ALL,
            list: initialList,
        };
    }

    onSelectFilter = (filter) => {
        const list = filter === filtersTypes.ALL ?
            initialList :
            initialList.filter((item) => item.category === filter);

        this.setState((prevState) => ({...prevState, selected: filter, list }))
    }

    render() {
        const imgs = this.state.list.map((item) => <figure key = { item.id }> <img
            src = { item.img }
            alt = { item.img }
            /></figure> )
        return ( <div>
            <Toolbar filters = { this.state.filters }
            selected = { this.state.selected }
            onSelectFilter = { this.onSelectFilter }/> <
            div className = "container" > { imgs } </div>
        </div>
        )
    }
}

export default Portfolio;
