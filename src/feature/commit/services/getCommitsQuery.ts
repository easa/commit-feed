const fetchData = (uri: string, params: { [key: string]: string }) => async () => {
  const url = new URL(uri);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  return fetch(url.toString(), {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  }).then((res) => res.json());
};

interface Params { org: string; repo: string; page?: number, pageSize?: number, branch?: string }

export default ({
  org, repo, page = 1, pageSize = 20,
}: Params) => {
  const uri = `https://api.github.com/repos/${org}/${repo}/commits`;
  const params = { page: String(page), per_page: String(pageSize) };
  return fetchData(uri, params);
};
