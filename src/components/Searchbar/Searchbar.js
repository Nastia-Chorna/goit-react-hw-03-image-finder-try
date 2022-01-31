import { Component } from 'react';
import {
  Form,
  Button,
  Input
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

handleNameChange = event => {
  this.setState({ imageName: event.currentTarget.value.toLowerCase() });
}
 
handleSubmit = event => {
  event.preventDefault();
  if (this.state.imageName.trim() === '') {
    alert('Enter your image name');
    return;
}
  this.props.onSubmit(this.state.imageName);
  this.setState({ imageName: '' });
}

  render() {
    return (
      <Form>
    <header>
  <form>
    <Button type="submit">
      <span>Search</span>
    </Button>

    <Input
      class="input"
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header> 
</Form>
  )
}

}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};