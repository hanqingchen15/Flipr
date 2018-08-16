import React, { component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      photoFile: null,
      photoUrl: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
    formData.append('photo[name]', this.state.name)
    formData.append('photo[description]', this.state.description)
    if (this.state.photoFile) {
      formData.append('photo[photo]', this.state.photoFile);
    }
    this.props.submitPhoto(formData).then(
      () => {
        this.props.history.push('/myphotos');
      }
    );
  }

  render() {
    return (
      <div className='photouploaddiv'>
        <h1 className='banner'>Upload Photo</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input type='text' value={this.state.name} onChange={this.update('name')} />
          </label>
          <label>Description:
            <input type='textarea' value={this.state.description} onChange={this.update('description')} />
          </label>
          <label>Upload Photo:
            <input type='file' onChange={this.handleFile} />
          </label>
          <button type="submit">Create Photo</button>
        </form>
      </div>
    );
  }
}

export default PhotoForm;
