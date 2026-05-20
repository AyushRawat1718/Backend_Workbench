require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const githubData = {
  login: "AyushRawat1718",
  id: 143322694,
  node_id: "U_kgDOCIruRg",
  avatar_url: "https://avatars.githubusercontent.com/u/143322694?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/AyushRawat1718",
  html_url: "https://github.com/AyushRawat1718",
  followers_url: "https://api.github.com/users/AyushRawat1718/followers",
  following_url:
    "https://api.github.com/users/AyushRawat1718/following{/other_user}",
  gists_url: "https://api.github.com/users/AyushRawat1718/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/AyushRawat1718/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/AyushRawat1718/subscriptions",
  organizations_url: "https://api.github.com/users/AyushRawat1718/orgs",
  repos_url: "https://api.github.com/users/AyushRawat1718/repos",
  events_url: "https://api.github.com/users/AyushRawat1718/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/AyushRawat1718/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Ayush Rawat",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: true,
  bio: null,
  twitter_username: null,
  public_repos: 28,
  public_gists: 0,
  followers: 1,
  following: 0,
  created_at: "2023-08-27T10:11:58Z",
  updated_at: "2026-03-08T07:42:42Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Currently at twitter page!!");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please Login at the Site !! </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Hola Amigo !!</h2>");
});

app.get("/github", (req, res) => {
  res.send(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
