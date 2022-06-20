import { useState } from "react";
import "../assets/css/SearchBar.css";
import GithubService from "../services/github.service";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function SearchBar(props: any) {
    const [searchText, setSearchText] = useState("");
    const [repositories, setRepositories] = useState([]);
    const MySwal = withReactContent(Swal)

    const search = () =>{
        props.beforeSearch()
        GithubService.getRepositories(searchText)
        .then((res) => {
            setRepositories(res.user.repositories.nodes);
            props.handleRepos(res.user.repositories.nodes);
            if (!res.user.repositories.nodes.length) {
                MySwal.fire({
                    icon: 'warning',
                    text:'User has no repositories',
                    timer: 2500,
                    timerProgressBar: true,
                })
            }
                
        })
        .catch((error) =>{
            console.log(error)
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text:'No such user',
              })
        })
    }

    if(props.type === "owner")
    return(
        <div className="search d-flex mt-5" id="owner">
            <input
                id="owner"
                className="form-control"
                placeholder={props.placeholder}
                onChange={(event) => setSearchText(event.target.value)}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                      search()
                    }
                  }}
                
            ></input>
        </div>
    )
    return(
        <div className="search d-flex" id="repositories">
            <input
                id="repositories"
                className="form-control"
                placeholder={props.placeholder}
                onChange={props.filterRepositories}
            ></input>
        </div>
    )
};

export default SearchBar;