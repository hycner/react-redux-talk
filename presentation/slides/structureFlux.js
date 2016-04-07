import React, {Component} from 'react';
import {
  Image
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  flux: require("../../assets/drawings-flux.jpg")
};

preloader(images);

export default class StructureFlux extends Component {
  render () {
    return (
      <div>
        <Image src={images.flux} width="100%" height="100%" />
      </div>
    );
  }
}
