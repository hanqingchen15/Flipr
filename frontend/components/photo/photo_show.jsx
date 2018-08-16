import React, { component } from 'react';
import { Link, Route } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo,
      modalOpen: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteButton = this.deleteButton.bind(this);

    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.requestPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.photoId != newProps.match.params.photoId) {
      this.props.requestPhoto(newProps.match.params.photoId);
    }
    this.setState(
      { photo: newProps.photo }
    );
  }

  // openModal() {
  //   this.setState({modalOpen: true});
  // }
  //
  // closeModal() {
  //   this.setState({modalOpen: false});
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editPhoto(this.state.photo);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.destroyPhoto(this.props.photo.id).then(
      () => this.props.history.push('/myphotos')
    );
  }

  update(field) {
    return (even) => this.setState({
      photo: Object.assign({}, this.state.photo, { [field]: event.target.value})
    });
  }

  deleteButton() {
    if (this.props.currentUser.id === this.props.photo.owner_id) {
      console.log('returned path');
      return (
        <a className="photoDelete" onClick={this.handleDelete}>Delete Photo</a>
      );
    } else {
      return null;
    }
  }

  render() {
    const { photo, owner, currentUser } = this.props;
    if (!photo || !owner) return null;
    return (
      <div className="upperContainer">
        <div className="picContainer">
          <Link className="backtoexplore" to="/explore">Back to explore</Link>
          <img src={`${photo.photoUrl}`} />
        </div>
        <div className="lowerContainer">

          <div className="infobox">

            <p className="photoName">{`${photo.name}`}</p>
            <p className="ownerName">Uploaded by: {`${owner.fname} ${owner.lname}`}</p>
            <p className="photoDescription">{`${photo.description}`}</p>
          </div>
          <div className="editing">
            {this.deleteButton()}
          </div>
        </div>

      </div>
    );
  }
}

export default PhotoShow;
