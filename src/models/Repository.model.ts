export default interface RepositoryModel {
  name: string,
  id: string,
  description: string,
  collaborators: {
    totalCount: number
  },
  forkCount: number,
  isFork: boolean,
  stargazerCount: number,
  updatedAt: Date,
  isArchived: boolean,
  isDisabled: boolean,
  isEmpty: boolean,
  owner: {
      avatarUrl: string,
      login: string
  },
  languages:{
    nodes: [name: string]
  }
}