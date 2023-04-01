import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { AppContainer } from './App.styled';

export class App extends Component {

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        {/* <ImageGallery />
      <ImageGalleryItem />
      <Loader />
      <Button />
      <Modal /> */}
      </AppContainer>
    );
  };
}