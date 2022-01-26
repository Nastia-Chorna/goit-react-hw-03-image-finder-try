import { Component } from 'react';
// import Searchbar from './components/Searchbar/Searchbar';
// import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import Loader from './components/Loader/Loader';
// import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';


class App extends Component {
  state = {
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
    showModal: !showModal
  }))
}


  render() {
    const { showModal } = this.state;
    return (
    <div>
  {showModal&& <Modal />}
      
      </div>
    )
  };
};
export default App;