
const timelineData = [
  {
    id: 1,
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer I",
    description: "Engineered enterprise-grade AI and backend infrastructure—including an LLM RAG solution, Spring-based automation services, and resilient CI/CD systems—modernizing loan delivery operations, reducing compliance costs, and accelerating data-driven insights.",
    skills: ["devicon-spring-original","devicon-amazonwebservices-plain-wordmark","devicon-terraform-plain","devicon-jenkins-plain","devicon-python-plain","devicon-docker-plain","devicon-dynamodb-plain","devicon-git-plain","devicon-java-plain","devicon-javascript-plain","devicon-maven-plain","devicon-react-original","devicon-postman-plain","devicon-grafana-plain" ],
    details: {
    bullets: [
    
      "Architected a domain-specific LLM RAG pipeline integrating OpenSearch vector DB with GPT embeddings model for semantic retrieval of unstructured data, eliminating knowledge silos, and accelerating root-cause analysis.",
      "Delivered full-stack internal tools with Java Spring, Terraform, Python, and AWS, eliminating bottlenecks in the Home Lending loan delivery pipeline and saving hundreds of engineering hours annually.",
      "Translated complex regulatory and financial logic into backend automation using JS; deployed solutions that saved millions in compliance costs.",
      "Built and maintained resilient CI/CD infrastructure with Spinnaker and Jenkins, integrating contract, performance,and chaos testing to ensure safe, stable production releases",
      "Implemented advanced observability tooling with CloudWatch, enabling real-time performance monitoring and reducing mean time to resolution (MTTR)",
      "Developed a privileged access management system for a SaaS platform, automating configurations and reducing deployment time across environments."
      ],
    },
  },
  {
    id: 2,
    company: "Out2Win",
    role: "Software Engineering Consultant",
    description: "Built scalable AWS Lambda pipelines in Python to automate athlete data collection and storage with Playwright and Airtable, powering an AI-driven marketing platform with rich social media insights.",
    skills: ["devicon-amazonwebservices-plain-wordmark","devicon-python-plain","devicon-docker-plain","devicon-playwright-plain","devicon-postgresql-plain"],
    details: {
    bullets: [
      "Developed scalable Python AWS Lambda pipelines leveraging Playwright for automated web scraping, optimizing data ingestion for the startup’s AI-powered athlete marketing system.",
      "Designed SQL data schemas to store and query structured athlete information, supporting machine learning workflows and analytics.",
      "Integrated social media scrapers for Instagram and TikTok, collecting engagement and follower data to enrich athlete profiles and enhance predictive marketing models.",
      ],
    },
  },
  {
    id: 3,
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer Intern",
    description: "Engineered high-throughput Spring Boot microservices integrated with Kafka and deployed on Kubernetes via Jenkins, achieving real-time data ingestion",
    skills: ["devicon-spring-original","devicon-apachekafka-original" ,"devicon-cucumber-plain","devicon-jenkins-plain","devicon-junit-plain","devicon-kubernetes-plain","devicon-sqlite-plain","devicon-swagger-plain"],
    details: {
    bullets: [
      "Engineered a high-throughput Java Spring Boot microservice to decrypt, parse, and store events from multiple data streams; integrated Kafka consumers to process over 10,000 messages per minute with real-time ingestion and persistence.",
      "Spearheaded the development of a Kubernetes-hosted Java back-end service for data pipeline management, alleviating a critical pain point for 20+ developer teams.",
      "Implemented JUnit unit tests and Cucumber integration, achieving a test coverage rate of 98.2%.",
      "Orchestrated deployment of a production-ready Java microservice through Jenkins and Kubernetes."
      ],
    },
  },
    
  {
    id: 4,
    company: "MAXAR Technologies",
    role: "Data Science Intern",
    description:  "Surfacing actionable insights from large-scale historical sales and geospatial data sets and visualizing data using an ESRI dashboard to advise optimization and effective data-driven decision making essential to intelligence customers and in advising the sales execution teams.",
    skills: ["devicon-spring-original","devicon-amazonwebservices-plain-wordmark","devicon-python-plain","devicon-docker-plain","devicon-dynamodb-plain","devicon-git-plain","devicon-java-plain","devicon-javascript-plain","devicon-maven-plain","devicon-react-original" ],
    details: {
    bullets: [
      "Executing the business understanding step of the data science life cycle by facilitating interdisciplinary communication to translate client, product manager, and sales team asks into executable technical tasks.",
      "Automating robust ETLs (Python and SQL) using an Apache Airflow server to ingest data from S3 buckets into PostgreSQL RDS.",
      "Deriving data understanding through performing statistical analysis using Scikit learn, PyMC and NumPy and producing preliminary visualizations with matplotlib, Seaborn, and PyPlot, as a precursor to modeling and finalized visualization."
    ]
    },
  }
];

export default timelineData;
