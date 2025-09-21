
const projects = [
    {
      id: "cmci",
      title: "CMCI Index",
      description: "A quantative Macroeconomic proxy approach to consumer confience analysis.",
      color: "#5B2E48",
      links: [
        { label: "Read the Paper", url: "https://drive.google.com/file/d/1ObbHE_9tV2TSpth2O1NMAj43ylXojrQ8/view?usp=sharing" },
        { label: "View Slide Deck", url: "https://www.canva.com/design/DAF5trCSm7Y/fdGgvphPrnB1CkaG5pVPxw/view" },
        { label: "GitHub Repo", url: "https://github.com/victoriapuck15/ConsumerSentimentRecessionProject" }
      ],
      section1: "Research Question",
      researchQuestion: `What drives consumer confidence and how can consumer sentiment predict behavior, even during times of extreme economic uncertainty?`,
      techniques: [
        "Factor Model and Kalman Filter",
        "GARCH Process",
        "Markov Chain Monte Carlo Analysis",
        "Stein-Thinning"
      ],
      icon1: "devicon-python-plain",
      icon2: "devicon-matlab-plain",
      icon3: "devicon-rstudio-plain",
      lastTitle: 'Findings',
      outcomes: `The Consumer Sentiment Index (CSI) is a pivotal indicator of consumer confidence and perception regarding current and future economic conditions. In the correlation analysis between the CSI and CMCI the correlation coefficient is 0.65, indicating a moderately positive correlation. The associated p-value is extremely small (3.29 × 10−12), leading to the conclusion that the is statistically significant. Therefore, there is compelling evidence to suggest a meaningful relationship between the CSI and the CMCI.`
    },
    {
      id: "dashboard",
      title: "Demand Execution Dashboard",
      description: "MAXAR Intelligence Supply & Demand Analysis Project.",
      color: "#76A9C4",
      links: [
        { label: "See More", url: "https://drive.google.com/drive/folders/1YgmUqo43jz-3qp-Q8TT3UiiCqzI-7dkl?usp=sharing" }
      ],
      section1: "Research Question",
      researchQuestion: `How can data visualization optimize supply & demand tracking in real-time?`,
      techniques: ["PyMc", "Scikit Learn", "NumPy", "Seaborn","matplotlib"],
      outcomes: `A comprehensive dashboard to support the sales team in contract seeking, sales/building prospects, and improving customer
expectations by leveraging global supply and demand data.`,
      lastTitle: 'Outcomes',
      icon1: "devicon-python-plain",
      icon2: "devicon-postgresql-plain",
      icon3: "devicon-scikitlearn-plain",
    },
    {
      id: "x-read",
      title: "X-READ",
      description: "A Neural Network to identify abnormalities in x-ray scans.",
      color: "#A6B07E",
      links: [
        { label: "GitHub Repo", url: "https://github.com/victoriapuck15/X-READ" }, 
        {label:"Poster", url:"https://drive.google.com/file/d/1ZavHCWvJKOxp-zUN3faMHfiI_-sx0IpG/view?usp=sharing"}
      ],
      section1: "Objective",
      researchQuestion: `To aid Americans seeking health care amidst the Rural Health Crisis by automating the diagnosis of common Cardiothoracic illnesses, with an accuracy comparable to that of a physician.`,
      techniques: ["Python", "TensorFlow", "Keras", "Java"],
      icon1: "devicon-tensorflow-original",
      icon2: "devicon-python-plain",
      icon3: "devicon-keras-plain",
      lastTitle: 'Outcomes',
      outcomes: `CNN was able to classify the illness exhibited in the inputted x-ray image in seconds with an accuracy of 65-75% on average . The most accurately diagnosed illness was that of X-rays that exhibited a visible mass, and exhibited an accuracy of 91%.`
    },
    {
      id: "healthcare-accessibility",
      title: "Digital Healthcare Accessibility Project",
      description: "Leveraging web scraping to perform accessibility analysis.",
      color: "#B86F52",
      links: [
        { label: "GitHub Repo", url: "https://github.com/victoriapuck15/Webscraping" }
      ],
      section1: "Overview",
      researchQuestion: `In today's age of digital healthcare, users with disabilities such as blindness or being hard of hearing are unable or limited in their access to healthcare. In order to foster change to make healthcare accessible to all, the project aims to better understand the current level of accessibility and what elements are missing across digital healthcare.`,
      techniques: ["Python", "BeautifulSoup", "Pandas", "Tableau"],
      icon1: "devicon-python-plain",
      icon2: "devicon-jupyter-plain-wordmark",
      icon3: "devicon-pypi-plain",
      lastTitle: 'Outcomes',
      outcomes: `Research highlighted key, recurring painpoints for users with disabilities, to be included in published report. `
    },
        {
      id: "spot-suggest",
      title: "Spot-Suggest",
      description: "Using Machine Learning to predict and recommend users songs based on their listening history and corresponding metrics",
      color: "#CC8A89",
      links: [
        { label: "GitHub Repo", url: "https://github.com/victoriapuck15/Spot-Suggest" }
      ],
      section1: "Objective",
      researchQuestion: `To create a selection of music suggestions based on a user's playlist, based on several musical metrics such as key, valence and tempo. Using the cosine similarity calculations & vectorized data to train the model, it returns 40 songs that are mathematically closest to the given playlist.`,
  
      techniques: ["Python", "numpy", "Pandas", "sklearn","matplotlib","spotipy"],
      icon1: "devicon-pandas-plain-wordmark",
      icon2: "devicon-numpy-plain",
      icon3: "devicon-matplotlib-plain",
      lastTitle: 'Methodology',
      outcomes: `Programmed in python, using the pandas, numpy, sklearn, matplotlib and spotipy libraries. Training was conducted using cosine similarity functions from the sklearn libraries, which computes similarity as the normalized dot product of X and Y. Dataset retrieved using the Spotify API.`
    }
  ];
  
  export default projects;
  