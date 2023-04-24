import React from "react";
import Card from "../card/Card";

const Main = ({ movies, deleteMovieHandler }) => {
  return (
    <div>
      {movies.map((element, index) => {
        return (
          <Card
            deleteMovieHandler={deleteMovieHandler}
            data={element}
            key={index}
          />
        );
      })}
      ;
    </div>
  );
};
export default Main;
