import React, { component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo,
      photoFile: null,
      photoUrl: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  update(field) {
    return e => {
      let photo = this.state.photo;
      photo[field] = e.currentTarget.value;
      this.setState({photo})
    };
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[name]', this.state.photo.name)
    formData.append('photo[description]', this.state.photo.description)
    if (this.state.photoFile) {
      formData.append('photo[photo]', this.state.photoFile);
    }
    this.props.submitPhoto(formData, this.props.photoId).then(
      () => {
        this.props.history.push('/myphotos');
      }
    );
  }

  render() {
    return ( (this.props.formType === 'create') ? (

        <div className='photouploaddiv'>
          <div className="uploadbanner">
            <p className='uploadbannertext'>Upload Photo</p>
          </div>
          <div className="uploadContainer">
            <form onSubmit={this.handleSubmit}>
              <label>Name:
                <input type='text' onChange={this.update('name')} />
              </label>
              <label>Description:
                <textarea rows="10" cols="30" onChange={this.update('description')} />
              </label>
              <label className="uploadlabel">Upload Photo:
                <input type='file' onChange={this.handleFile} />
              </label>
              <button className="uploadfield" type="submit">Create Photo</button>

            </form>
            <div><button onClick={this.goBack}>Cancel</button></div>

          </div>
        </div>
      ) : (
        <div className='photouploaddiv'>
          <div className="uploadbanner">
            <p className='uploadbannertext'>Update Photo</p>
          </div>
          <div className="uploadContainer">
            <form onSubmit={this.handleSubmit}>
              <label>Name:
                <input type='text' value={this.props.photo.name} onChange={this.update('name')} />
              </label>
              <label>Description:
                <textarea rows="10" cols="30" value={this.props.photo.description} onChange={this.update('description')} />
              </label>
              <label className="uploadlabel">Upload Photo:
                <input type='file' onChange={this.handleFile} />
              </label>
              <button className="uploadfield" type="submit">Update Photo</button>

            </form>
            <div><button onClick={this.goBack}>Cancel</button></div>

          </div>
        </div>
      )
    );
  }
}

export default withRouter(PhotoForm);
