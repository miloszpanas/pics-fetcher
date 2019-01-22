import React from "react";

class SingleImage extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img 
          src={urls.regular} 
          alt={description}
        />
      </div>
    )
  }
}

export default SingleImage;