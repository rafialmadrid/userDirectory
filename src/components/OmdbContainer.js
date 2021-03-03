import React, { Component } from "react";
import Container from "./Container";
import Header from "./Header";
import TableForm from "./Table";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchEmployees("5000");
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
              />
              <TableForm 
                    image={this.state.result.results[0].picture.thumbnail}
                    name={this.state.result.results[0].name.first}
                    phone={this.state.result.results[0].phone}
                    email={this.state.result.results[0].email}
                    dob={this.state.result.results[0].dob.date}
              />
      </Container>
    );
  }
}

export default OmdbContainer;
