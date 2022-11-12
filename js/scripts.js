window.onload = function () {
  const input1 = document.querySelector(".input");
  const searchContent = document.querySelector(".search-content");

  /* input1.addEventListener("blur", function () {
    searchContent.style.display = "none";
  }); */
  /* show burger lists */
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  menuBtn.addEventListener("click", function () {
    nav.className = "active";
  });

  const close = document.querySelector(".close");
  close.addEventListener("click", function () {
    nav.className = "";
  });

  /* show search lists */
  const searchBtn = document.querySelector(".search-btn");
  const search = document.querySelector(".search");
  let flag = true;
  searchBtn.addEventListener("click", function () {
    if (flag) {
      search.className = "search active";
      flag = false;
    } else {
      search.className = "search";
      flag = true;
    }
  });

  /* sliders part */
  const p = document.querySelector(".slogan").querySelector("p");

  const rightBtn = document.querySelector(".right-btn");
  const ul = document.querySelector(".screen").querySelector("ul");
  let num = 1;
  let result1 = null;
  rightBtn.addEventListener("click", function () {
    if (num == 3) {
      num = 1;
      ul.style.transform = "translateX(" + 0 + "%)";
      p.innerHTML =
        "“To create an environment in which knowledge about coffee and its sphere can be obtained”";
      fadeIn(p);
    } else if (num == 1) {
      result1 = -33.33 * num;
      ul.style.transform = "translateX(" + result1 + "%)";
      num++;
      p.innerHTML =
        "“This is a great introduction do the coffee industry's best beans on the planet”";
      fadeIn(p);
    } else if (num == 2) {
      result1 = -33.33 * num;
      ul.style.transform = "translateX(" + result1 + "%)";
      num++;
      p.innerHTML =
        '"Coffee in code out, this is the way of internal life and the empowerment of the soul“';
      fadeIn(p);
    }
  });

  const leftBtn = document.querySelector(".left-btn");
  leftBtn.addEventListener("click", function () {
    if (num == 2) {
      ul.style.transform = "translateX(0%)";
      p.innerHTML =
        "“To create an environment in which knowledge about coffee and its sphere can be obtained”";
      fadeIn(p);
      num--;
    } else if (num == 3) {
      ul.style.transform = "translateX(-33.33%)";
      p.innerHTML =
        "“This is a great introduction do the coffee industry's best beans on the planet”";
      fadeIn(p);
      num--;
    } else {
      ul.style.transform = "translateX(-66.66%)";
      p.innerHTML =
        '"Coffee in code out, this is the way of internal life and the empowerment of the soul“';
      fadeIn(p);
      num = 3;
    }
  });
  let timer = null;
  function fadeIn(a) {
    clearInterval(timer);
    console.log("test");
    a.style.opacity = 0.1;
    let counter = 0.1;
    timer = setInterval(function () {
      if (counter < 1) {
        counter += 0.1;
        a.style.opacity = counter;
      } else {
        counter = 1;
        a.style.opacity = counter;
        clearInterval(timer);
      }
    }, 100);
  }

  /* Read More Part */
  const readArticle = document.querySelectorAll(".readArticle");
  const cover = document.querySelector(".cover");

  readArticle.forEach(function (ele) {
    ele.addEventListener("click", function () {
      cover.style.display = "block";
    });
  });
  const coverClose = document.querySelector(".cover-close");
  coverClose.addEventListener("click", function () {
    cover.style.display = "none";
  });

  /* Search Filter Part */

  let articles = [
    {
      name: "Wonderful Copenhagen 2021",
      date: "Published 12/07/2021",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quia cumoptio illo veritatis iure!Nemo cum suscipit harum pariatur consectetur deleniti, libero non quod quis assumenda quas maxime molestias voluptatem.",
    },
    {
      name: "The most expensive coffee on the market",
      date: "Published 12/07/2021",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quia cumoptio illo veritatis iure!Nemo cum suscipit harum pariatur consectetur deleniti, libero non quod quis assumenda quas maxime molestias voluptatem.",
    },
    {
      name: "10 type of coffee beans you need to know",
      date: "Published 12/07/2021",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quia cumoptio illo veritatis iure!Nemo cum suscipit harum pariatur consectetur deleniti, libero non quod quis assumenda quas maxime molestias voluptatem.",
    },
    {
      name: "Challenge your barista skills to the max",
      date: "Published 12/07/2021",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quia cumoptio illo veritatis iure!Nemo cum suscipit harum pariatur consectetur deleniti, libero non quod quis assumenda quas maxime molestias voluptatem.",
    },
  ];
  const template = document.querySelector("template");

  const newArticles = articles.map((ele) => {
    const newItem = template.content.children[0].cloneNode(true);
    newItem.querySelector("h2").innerHTML = ele.name;
    newItem.querySelector("h5").innerHTML = ele.date;
    newItem.querySelector("p").innerHTML = ele.content;
    newItem.style.display = "none";
    searchContent.appendChild(newItem);
    return {
      name: ele.name,
      date: ele.date,
      content: ele.content,
      element: newItem,
    };
  });
  console.log(newArticles);
  search.addEventListener("input", function (e) {
    const value = e.target.value;
    console.log(value);
    newArticles.forEach((ele) => {
      const isExist = ele.name.toLowerCase().replace(/\s/g, "").includes(value);
      if (isExist) {
        ele.element.style.display = "block";
      } else {
        ele.element.style.display = "none";
      }
      if (e.target.value == "") {
        ele.element.style.display = "none";
      }
    });

    /* searchContent.innerHTML = articles[0].name; */
  });

  /* Read More for Search Bar */
  const searchContentItem = document.querySelectorAll(".search-content-item");
  console.log(searchContentItem);
  searchContentItem.forEach(function (ele) {
    ele.addEventListener("click", function () {
      cover.style.display = "block";
    });
  });
};
