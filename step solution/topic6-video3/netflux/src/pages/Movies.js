import React from 'react';

import MovieGrid from "../components/MovieGrid";
import Filter from '../components/Filter';

// import data
import data from "../data/movies.json";
import { suggestedMovies, mostViwed, recentRelease } from '../utils/helper';

class Movies extends React.Component {
  state = {
    movies: data,
    filter: ""
  }

  onSelectChange = (value) => {
    this.setState({filter: value})
  }

  renderMoviesGrid() {
    return (
      <>
        <MovieGrid
          gridType="is-suggested"
          title="إقتراحتنا لك"
          limit={4}
          movies={suggestedMovies(this.state.movies)}
          history={this.props.history} />

        <MovieGrid
          gridType="is-suggested"
          title="الأكثر مشاهدة"
          limit={4}
          movies={mostViwed(this.state.movies)}
          history={this.props.history} />

        <MovieGrid
          gridType="is-suggested"
          title="أحدث الأفلام"
          limit={32}
          movies={recentRelease(this.state.movies, 'Film')}
          history={this.props.history} />
      </>
    );
  }

  renderFilterResult() {
    // 1. filter the result
    const filteredMovies = this.state.movies.filter(movie => movie.genres.includes(this.state.filter))
    // 2. Render the grid
    return (
      <MovieGrid
        gridType="is-suggested"
        title=""
        limit={filteredMovies.length}
        movies={filteredMovies}
        history={this.props.history} />
    )
  }

  render() {
    let display = this.state.filter === "" ? this.renderMoviesGrid() : this.renderFilterResult();

    return (
      <>
        <Filter type="أفلام" optionText="نوع الفيلم" onSelectChange={this.onSelectChange}/>
        {display}
      </>
    );
  }
}

export default Movies;