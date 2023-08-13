import React from 'react';

function FilterCheckbox(props) {
  return (
    <section className="filter-checkbox">
      <input className="filter-checkbox__input" checked={props.short} onChange={props.onChange} type="checkbox"></input>
      <span className="filter-checkbox__name">Короткометражки</span>
    </section>
  );
}

export default FilterCheckbox;