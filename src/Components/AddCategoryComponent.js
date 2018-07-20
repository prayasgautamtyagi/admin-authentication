import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
//import { postMethod } from '../services/apiMethodCallsService'

class AddCategoryComponent extends Component {
  constructor(){
    super();
    this.state = {
      imageData: '',
    } 
  }
  handleImageUpload = (event) => {
    this.setState({
      imageData: event.target.files[0],
    })
  }

  handleAddButton = () => {
    console.log("image", this.state.imageData);
    if(!this.refs.category.value || !this.state.imageData){
      alert('Please fill the form');
      return;
    }
       let data = new FormData();
       data.append("category_image", this.state.imageData);
       data.append("name", this.refs.category.value.trim());
      console.log("data", data);
      fetch('https://as-api.niflr.co/api/categories', {
        method: "POST",
        body: data,
        headers: {
          "x-access-token": localStorage.getItem('token'),
        }
      })                 
      .then(response => response.json())
      .then(response => {
        if(response.success === true) {
          alert(`Successfully Uploaded`);
        }else{
          alert(`There is some problem in uploading your file`);
        }
        console.log('response', response)
      })
      .catch(error => console.log('error', error.message));

      this.refs.category.value = '';
      this.setState({
        imageData: null,  
      });
      this.image.value = '';
  }

  render() {
    return (
      <div className="addCategoryWrapper">
        <div className="addCategoryContainer">
           <input ref={ref => this.image = ref} type="file" onChange={this.handleImageUpload} />
           <input ref="category" placeholder="Category Name"></input>
           <button onClick={this.handleAddButton}>ADD</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category,
})

export default connect(mapStateToProps, actions)(AddCategoryComponent);
