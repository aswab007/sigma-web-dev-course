function createcard(thumbnail, views, duration, title, channel_name, time) {
  let viewconv;
  if (views > 100000 || views == 1000000) {
    viewconv = views / 1000000 + "M";
  }

  if (views > 999 && views < 1000000) {
    viewconv = views / 1000 + "K";
  }

  if (views < 1000) {
    viewconv = views;
  }

  let html = `
        <div class="card">
            <div class="image">
                <img src=${thumbnail}alt="picture">
                <div class="capsule">${duration}</div>

            </div>
            <div class="text">
                <h3>${title}</h3>
                <p>${channel_name} . ${viewconv} views . ${time}</p>
            </div>
        </div>
    `;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createcard(
  "https://i.ytimg.com/vi/ovKVqo-L2EM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAgdXKH__t5Ca0E2j1xndnX73-VYA",
  13000000,
  "1:57:23",
  "Netflix Clone Using HTML & CSS | Sigma Web Development Course - Tutorial #53",
  "CodeWithHarry",
  "1 year ago"
);

createcard(
  "https://i.ytimg.com/vi/ovKVqo-L2EM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAgdXKH__t5Ca0E2j1xndnX73-VYA",
  13000000,
  "1:57:23",
  "Netflix Clone Using HTML & CSS | Sigma Web Development Course - Tutorial #53",
  "CodeWithHarry",
  "1 year ago"
);
