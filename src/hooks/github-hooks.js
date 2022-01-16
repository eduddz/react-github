import { useContext } from 'react';
import { GithubProviders } from '../providers/github-providers';

export const useGithub = () => {
    const { githubState } = useContext(GithubProviders)

    return { githubState }
}