import { Component } from 'react';
import {
  Form,
  Button,
  Input
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

handleNameChange = event => {
  this.setState({ imageName: event.currentTarget.value.toLowerCase() });
}
 
handleSubmit = event => {
  event.preventDefault();

  this.props.onSubmit(this.state.imageName);
  this.setState({ imageName: '' });
}

  render() {
    return (
      <Form>
    <header class="searchbar">
  <form class="form">
    <Button type="submit" class="button">
      <span class="button-label">Search</span>
    </Button>

    <Input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header> 
</Form>
  )
}

}

