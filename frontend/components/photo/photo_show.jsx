import React, { component } from 'react';
import { Route } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.requestPhoto(this.props.match.params.photoId);
  }

  componentwillReceiveProps(newProps) {
    if (this.props.match.params.photoId != newProps.match.params.photoId) {
      this.props.requestPhoto(newProps.match.params.photoId);
    }
    this.setState(
      { photo: newProps.photo }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editPhoto(this.state.photo);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.destroyPhoto(this.props.photo.id).then(
      () => this.props.push('/myphotos')
    );
  }

  update(field) {
    return (even) => this.setState({
      photo: Object.assign({}, this.state.photo, { [field]: event.target.value})
    });
  }

  render() {
    const { photo, currentUser } = this.props;

    if (!photo) return null;

    return (
      <div className="picContainer">
        <img src={`${photo.photoUrl}`} />
      </div>
    );
  }
}

export default PhotoShow;
