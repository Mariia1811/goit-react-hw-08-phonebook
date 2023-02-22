import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactSlice';
import { selectFilterValue } from 'redux/selectContacts';
import { FilterWrap, Input, Text } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  
  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <FilterWrap>
      <Text>Find contacts by name</Text>
      <Input
        name="filter"
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </FilterWrap>
  );
}

export default Filter;
