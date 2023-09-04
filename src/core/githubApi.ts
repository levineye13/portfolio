import { Octokit } from 'octokit';

export const octokit = new Octokit({
  auth: process.env.TOKEN,
});

export const getRepos = async (repNames: string[]) => {
  const res = await octokit.request('GET /users/{username}/repos', {
    username: 'levineye13',
  });

  const repos = res.data.filter((rep) => repNames.includes(rep.name));

  return repos;
};
