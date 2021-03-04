import React from "react";

//import gitHubService from "../../services/github-service";

import { Cards } from "../../components/Cards";
import Header from "../../components/Header";
import { NothingHere } from "../../components/NothingHere";
import { useSelector } from "react-redux";

function HomePage(props) {
  const repositories = useSelector((state) => {
    return state.handlerRepository.repositories;
  });

  return (
    <div>
      <Header />
      <section className="container">
        <div className="main">
          {repositories.length === 0 ? (
            <NothingHere />
          ) : (
            repositories.map((repo) => {
              return (
                <Cards
                  key={repo.id}
                  id={repo.id}
                  isFavorite={repo.isFavorite}
                  avatar={repo.avatar_url}
                  fullname={repo.full_name}
                  stars={repo.stargazers_count}
                  forks={repo.forks_count}
                  openIssues={repo.open_issues}
                  age={repo.created_at}
                  lastCommit={repo.updated_at}
                  license={repo.license}
                  language={repo.language}
                />
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
