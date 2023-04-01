import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import toast from 'react-hot-toast';
import {
    SearchContainer,
    SearchForm,
    FormButton,
    Label,
    FormInput
} from './Searchbar.styled';


class Searchbar extends Component {
    state = {
        query: '',
    }

    handleChange = e => {
    const { value } = e.currentTarget;
        this.setState({ query: value });
        console.log({query: value} )
  };

    handleSubmit = (e) => {
        const { query } = this.state;
		e.preventDefault()
		if (query) {
		    this.props.onSubmit(query)
            this.setState({ query: '' })
            console.log(query);
             }
		return toast.error('Please write something!')
	}
    render() {
        return (
            <SearchContainer>
                <SearchForm onSubmit={this.handleSubmit}>
                    <FormButton type="submit">
                        <ImSearch style={{ width: 25, height: 25 }} />
                        <Label>Search</Label>
                    </FormButton>

                    <FormInput
                        className="input"
                        type="text"
                        autocomplete="off"
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </SearchForm>
            </SearchContainer>
            )
        }
    }

export default Searchbar;
