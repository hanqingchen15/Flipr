import React, { component } from 'react';
import { Route } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo;
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.requestPhoto(this.props.photoId);
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
      () => this.props.push('/explore')
    );
  }

  render() {
    const { photo, currentUser } = this.props;
    return
  }
}
