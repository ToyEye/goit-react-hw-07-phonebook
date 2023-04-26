import React from 'react';
import { ImputEnter, InputType, InputText } from '../FormComponents';
import { filterContact } from '../../redux/contacts/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contact-selector';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handler = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <InputType>
      <InputText>Find contact by name</InputText>
      <ImputEnter type="text" value={filter} onChange={handler} />
    </InputType>
  );
};

export default Filter;
