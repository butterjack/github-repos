import RepositoryModel from "../models/Repository.model";
import "../assets/css/Repository.css";

function Repository(props: any) {
    const repo: RepositoryModel = props.repo;

    return (
      <>
      <article  data-testid="repository" id="repository">
        <figure>
            <img src={repo.owner.avatarUrl} alt=""/>
        </figure>

        <div>
            <h2>
                {repo.name}
            </h2>
            <p>
                Description: {repo.description}
            </p>
            <div>
                Last Update: {(new Date(repo.updatedAt)).toUTCString()}
            </div>
            <h1>
                {repo.owner.login}
            </h1>
        </div>
      </article>
      </>
      );
};

export default Repository;