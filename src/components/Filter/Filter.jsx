import propTypes from 'prop-types';
import { FilterLabel, FilterInput, FilterForm } from './Filter.styled';

export const Filter = ({ title, value, filterText, onFilterSubmit }) => {
  return (
    <>
      <FilterForm autoComplete="off" onSubmit={onFilterSubmit}>
        <FilterLabel htmlFor="filter">
          {title}
          <FilterInput
            type="text"
            name="filter"
            value={value}
            onChange={filterText}
          />
        </FilterLabel>
      </FilterForm>
    </>
  );
};

Filter.propTypes = {
  title: propTypes.string,
  value: propTypes.string.isRequired,
  filterText: propTypes.func.isRequired,
};
