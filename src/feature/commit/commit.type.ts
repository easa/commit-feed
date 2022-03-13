export interface CommitNode {
  'sha': string;
  'node_id': string;
  'commit': Commit,
  'url': string;
  'html_url': string;
  'comments_url': string;
  'author': Author;
  'committer': Committer;
  'parents': Parent[]
}

interface Commit {
  'author': User,
  'committer': User,
  'message': string;
  'tree': {
    'sha': string;
    'url': string;
  },
  'url': string;
  'comment_count': number,
  'verification': {
    'verified': boolean,
    'reason': string;
    'signature': object,
    'payload': object
  }
}

interface Committer {
  'login': string;
  'id': number,
  'node_id': string;
  'avatar_url': string;
  'gravatar_id': string;
  'url': string;
  'html_url': string;
  'followers_url': string;
  'following_url': string;
  'gists_url': string;
  'starred_url': string;
  'subscriptions_url': string;
  'organizations_url': string;
  'repos_url': string;
  'events_url': string;
  'received_events_url': string;
  'type': string;
  'site_admin': boolean;
}

interface Parent {
  'sha': string;
  'url': string;
  'html_url': string;
}

interface Author {
  'login': string;
  'id': number;
  'node_id': string;
  'avatar_url': string;
  'gravatar_id': string;
  'url': string;
  'html_url': string;
  'followers_url': string;
  'following_url': string;
  'gists_url': string;
  'starred_url': string;
  'subscriptions_url': string;
  'organizations_url': string;
  'repos_url': string;
  'events_url': string;
  'received_events_url': string;
  'type': string;
  'site_admin': boolean;
}

interface User {
  'name': string;
  'email': string;
  'date': string;
}
