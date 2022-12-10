import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    const query = e.target.value;
    this.setState({ query });
  };

  handleSubmit = e => {
    e.preventDefault();
    const query = this.state.query.trim();
    if (query === '') {
      return;
    }
    this.props.getQuery(query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={this.state.query}
          onChange={this.handleChange}
        />
      </SearchFormStyled>
    );
  }
}
