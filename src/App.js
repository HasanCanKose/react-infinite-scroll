import React, { Component } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import axios from "axios";
import Loader from "./components/Loader";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      searchField: "",
      page: 1
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.getPosts(this.state.page);
  }
  getPosts = page => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      .then(response => {
        this.setState({ posts: [...this.state.posts, ...response.data] });
      });
  };

  handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      this.showLoading();
    }
  };

  showLoading = () => {
    const loading = document.querySelector(".loader");
    loading.classList.add("show");

    setTimeout(() => {
      loading.classList.remove("show");

      setTimeout(() => {
        this.setState(prevState => {
          return { page: prevState.page + 1 };
        });
        this.getPosts(this.state.page);
      }, 300);
    }, 2000);
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <h1>Infinite Scroll</h1>

        <ItemList posts={posts} />
        <Loader />
      </div>
    );
  }
}

export default App;
