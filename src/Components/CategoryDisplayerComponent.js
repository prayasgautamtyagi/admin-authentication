import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import AddCategoryComponent from './AddCategoryComponent';
import { getMethod } from '../services/apiMethodCallsService';

class CategoryDisplayerComponment extends Component {
  constructor(props){
    super(props);
    this.state={
      isVisible: false,
    }
    
    const token = localStorage.getItem('token');
    if(token !== ''){
      getMethod('https://as-api.niflr.co/api/categories',token)
      .then(response => {
        this.props.categoryData(response.categories);
      });
    }
  }

  renderCategoryData = () => {
    return this.props.category.map(item => {
      return (
        <div className="individualProduct" key={item.id}>
          <div className="categoryImage">
            <img src={item.imageUrl} alt="Categories"/>
          </div>
          <div className="categoryName">
            <h3>{item.name}</h3>
          </div>
        </div>
      )
    })
  }
  
  handleLogOut = () => {
    localStorage.setItem('token', '');
    this.props.history.push('/');
  }

  handleClick = () =>{
    this.setState({
      isVisible: !this.state.isVisible,
    })
  }

  render() {
    return (
      ((this.state.isVisible !== true) ? ((localStorage.getItem('token')) && 
        <div className="CategoryDisplayer">
          <p>Categories</p>
          <div>
            <button onClick={this.handleClick}>Add Category</button>
            <button onClick={this.handleLogOut}>Log Out</button>
          </div>
          <div className="productsContainer">
            {this.renderCategoryData()}
          </div>
        </div>) : <AddCategoryComponent/>
      )
    );
  }
}

const mapStateToProps = state => ({
  category: state.category,
})

export default connect(mapStateToProps, actions)(CategoryDisplayerComponment);
