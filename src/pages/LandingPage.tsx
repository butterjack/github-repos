


import { useRef, useState } from "react";
import clsx from 'clsx';
import RepositoryModel from "../models/Repository.model";
import Repository from "../components/Repository";
import Icon from "../components/Icon";
import SearchBar from "../components/SearchBar";
import "../assets/css/LandingPage.css"
import Button from "../components/Button";
import Loader from "../components/Loader";

function LandingPage() {
    const [repositories, setRepositories] = useState<RepositoryModel[]>([]);
    const [isRepositorySectionVisible, setIsRepositorySectionVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const initialRepositories = useRef<RepositoryModel[]>()

    const setLoading = () =>{
        setIsLoading(true);
    }

    /**
     * filter repositories by their name
     * @param {ant} event
     */
    const filterRepositories = (event: any) => {
        console.log(event.target.value, initialRepositories.current)
        if(event.target.value===""){
            setRepositories(initialRepositories.current as RepositoryModel[])
            return
        }
        if(initialRepositories.current)
        setRepositories(initialRepositories.current.filter((repository)=>{
            return repository.name.includes(event.target.value)
        }))
    }
    
    
    return(
        <div className="row">
            <div className="
            landing 
            container-fluid 
            justify-content-center 
            align-items-center 
            flex-row 
            flex-wrap 
            col-4">
                <div className="
                p-5 
                d-flex 
                flex-start 
                flex-column 
                align-items-center 
                justify-content-center ">
                    <h1 className="title text-left" data-testid="landing-title">
                    Fetch Github Repositories using their names and their owners.
                    </h1>
                    <p className="paragraph limit" data-testid="landing-paragraph">
                    An application to get github repositories for a certain user built with React.
                    </p>
                    <div>
                        <Button type="primary" text="View Github"></Button>
                        <Button type="secondary" text="Read Documentation"></Button>
                    </div>
                    <SearchBar
                        type="owner"
                        placeholder="Type the github username"
                        allRepos={repositories}
                        beforeSearch={setLoading}
                        handleRepos={(res:any)=>{
                            setRepositories(res); 
                            initialRepositories.current = res;
                            setIsRepositorySectionVisible(true)
                            setIsLoading(false)}}
                    ></SearchBar>
                </div>
            </div>
            
            <div className={
                clsx(
                    'col-8 d-flex flex-column flex-wrap pt-3 result',
                    isRepositorySectionVisible && 'result-shown'
                    )}
                >
                    <div className="close-button">
                        <button className="btn btn-secondary ms-2" onClick={()=>{setIsRepositorySectionVisible(false)}}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-left"
                            viewBox="0 0 16 16"
                            >
                            <path
                                fillRule="evenodd"
                                d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
                            ></path>
                            </svg>
                        </button>
                    </div>
                      
                {   
                    isRepositorySectionVisible 
                    ?
                    <div>
                        <div className="w-50 m-auto pb-3">
                            <SearchBar filterRepositories={filterRepositories}></SearchBar>
                        </div>
                        <div className={clsx(
                            "d-flex justify-content-center flex-wrap repos pt-5 pb-5", 
                            repositories.length<=2 && "align-items-start")}>
                            {repositories.map((item,index)=>{return(<Repository key={index} repo={item} />)}) }
                        </div>
                    </div>
                    :
                    <div className="alert alert-dark align-self-center m-auto" role="alert">
                        {!isLoading ? "Give your desired github username to browse his repositories" : <Loader></Loader>}
                    </div>
                }

                <Icon isLoading={isLoading || isRepositorySectionVisible}></Icon>
                
            </div>
        </div>
        
    )
}

export default LandingPage;