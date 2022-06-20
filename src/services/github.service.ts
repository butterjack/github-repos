import axios from 'axios';

class GithubService {
  
  /**
   * Return the repositories of a specific github user
   * @param {string} username the username of the demanded user
   */
  public static getRepositories(username: string) {
    const accessToken = process.env.ACCESS_TOKEN;
    const query = `
    query { 
        user(login:"${username}") {
           repositories(first:100) {
            nodes {
                name
                id
                description
                collaborators {
                    totalCount
                }
                forkCount
                isFork
                stargazerCount
                updatedAt
                isArchived
                isDisabled
                isEmpty
                owner{
                    avatarUrl
                    login
                }
                languages(last:10) {
                    nodes {
                        name
                    }
                }
            }
           }
         }
    }`;
     
    return axios('https://api.github.com/graphql', {
      method: 'POST',
      data: JSON.stringify({query}),
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    }).then(res => res.data.data)
  }
}

export default GithubService;