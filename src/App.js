import { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import Loader from './components/Loader/Loader';
// import Button from './components/Button/Button';
// import Modal from './components/Modal/Modal';


class App extends Component {
  state = {
    filter: '',
    showModal: false,
    images: null,
    imageName: ''
  };

//  componentDidMount() {
//     fetch('https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12')
//       .then(res => res.json())
//       .then(images => this.setState({ images }));
//   }
  
  toggleModal = () => {
    this.setState(({showModal}) => ({
    showModal: !showModal
  }))
}

  handleSearchSubmit = imageName => {
    this.setState({ imageName });
} 
  render() {
   
    return (
      <div>
        <ToastContainer autoClose={3000}/>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {/* <ImageGallery imageName={this.state.imageName}/> */}
      </div>
    )
  };
};
export default App;