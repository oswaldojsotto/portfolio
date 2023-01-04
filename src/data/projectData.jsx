import image1 from "/projects/shop2.png";
import image2 from "/projects/movie2.png";
import image3 from "/projects/note2.png";
import image4 from "/projects/newsproject.png";

export const projectData = [
  {
    title: "NewsApp",
    subtitle: "Develop & Design",
    image: image4,
    link: "https://ostechnews.vercel.app/",
    description:
      "Small app to test the new Next.js 13 features such as the new app folder router feature, new SSR and CSR components.",
    tools: "Next.js 13 experimental build, Tailwind CSS",
  },
  {
    title: "SHOP",
    subtitle: "Develop & Design",
    image: image1,
    link: "https://oswaldojsotto.github.io/store/#/",
    description: "Complete page to simulate an E-Commerce site",
    tools: "React.js, Material UI, Sass, React Query",
  },
  {
    title: "MOVIE-TRAILERS",
    subtitle: "Develop & Design",
    image: image2,
    link: "https://oswaldojsotto.github.io/moviesapp/",
    description:
      "Single page app to show any trailer of any movie available consuming TMDB Api, plus you can save you favorite movies to watch later.",
    tools: "React.js",
  },
  {
    title: "CRUD-Notes",
    subtitle: "Develop & Design",
    image: image3,
    link: "https://oswaldojsotto.github.io/notes-app/",
    description:
      "Small app to showcase a Create-Read-Update-Delete app using notes and descriptions",
    tools: "React.js",
  },
];
