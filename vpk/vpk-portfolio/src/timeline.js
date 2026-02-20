
const timelineData = [
    {
    id: 1,
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer II",
    description: "High-performing Software Engineer II recognized in the top 5% globally, leading AI-driven platform modernization initiatives that transformed monolithic systems into scalable microservices, delivered LLM-powered knowledge solutions, and drove 922% user growth without compromising reliability.",
    skills: ["devicon-spring-original","devicon-amazonwebservices-plain-wordmark","devicon-terraform-plain","devicon-jenkins-plain","devicon-typescript-plain","devicon-python-plain","devicon-dynamodb-plain","devicon-javascript-plain","devicon-maven-plain","devicon-react-original","devicon-postman-plain","devicon-grafana-plain" ],
    details: {
    bullets: [
      "Recognized in the top 5% of global early-career software engineers and fast-tracked for promotion based on performance and impact.",
      "Architected a domain-specific LLM RAG pipeline integrating OpenSearch vector DB with GPT embeddings model for semantic retrieval of unstructured data, eliminating knowledge silos, and accelerating root-cause analysis.", 
      "Modernized a legacy monolithic automation system into a scalable microservices architecture, improving maintainability and reliability while preserving production stability and user experience.", 
      "Rebranded and scaled the internal automation platform, driving 922% user growth and expanding infrastructure to support significantly higher workload volumes without performance degradation. "

      ],
    },
  },
  {
    id: 2,
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer I",
    description: "Engineered enterprise-grade microservices and infrastructure—including Spring-based automation services and resilient CI/CD systems—modernizing loan delivery operations, reducing compliance costs, and accelerating data-driven insights.",
    skills: ["devicon-spring-original","devicon-amazonwebservices-plain-wordmark","devicon-terraform-plain","devicon-jenkins-plain","devicon-typescript-plain","devicon-python-plain","devicon-dynamodb-plain","devicon-javascript-plain","devicon-maven-plain","devicon-react-original","devicon-postman-plain","devicon-grafana-plain" ],
    details: {
    bullets: [
    
      "Delivered full-stack internal tools with Java Spring, Terraform, Python, and AWS, eliminating bottlenecks in the Home Lending loan delivery pipeline and saving hundreds of engineering hours annually.",
      "Translated complex regulatory and financial logic into backend automation using JS; deployed solutions that saved millions in compliance costs.",
      "Built and maintained resilient CI/CD infrastructure with Spinnaker and Jenkins, integrating contract, performance,and chaos testing to ensure safe, stable production releases",
      "Implemented advanced observability tooling with CloudWatch, enabling real-time performance monitoring and reducing mean time to resolution (MTTR)",
      "Developed a privileged access management system for a SaaS platform, automating configurations and reducing deployment time across environments."
      ],
    },
  },
  {
    id: 3,
    company: "Out2Win",
    role: "Software Engineering Consultant",
    description: "Built scalable AWS Lambda pipelines in Python to automate athlete data collection and storage with Playwright and Amazon RDS, powering an AI-driven marketing platform with rich social media insights.",
    skills: ["devicon-amazonwebservices-plain-wordmark","devicon-bash-plain","devicon-python-plain","devicon-docker-plain","devicon-playwright-plain","devicon-postgresql-plain"],
    details: {
    bullets: [
      "Developed scalable Python AWS Lambda pipelines leveraging Playwright for automated web scraping, optimizing data ingestion for the startup’s AI-powered athlete marketing system.",
      "Designed SQL data schemas to store and query structured athlete information, supporting machine learning workflows and analytics.",
      "Integrated social media scrapers for Instagram and TikTok, collecting engagement and follower data to enrich athlete profiles and enhance predictive marketing models.",
      ],
    },
  },
  {
    id: 4,
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer Intern",
    description: "Engineered high-throughput Spring Boot microservices integrated with Kafka and deployed on Kubernetes via Jenkins, achieving real-time data ingestion",
    skills: ["devicon-spring-original","devicon-apachekafka-original" ,"devicon-cucumber-plain","devicon-jenkins-plain","devicon-git-plain","devicon-junit-plain","devicon-kubernetes-plain","devicon-sqlite-plain","devicon-swagger-plain"],
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
    id: 5,
    company: "MAXAR Technologies",
    role: "Data Science Intern",
    description:  "Leveraged large-scale sales and geospatial data to generate actionable insights, visualized via ESRI dashboards, enabling data-driven decisions for intelligence clients and sales teams.",
    skills: ["devicon-python-plain","devicon-apacheairflow-plain","devicon-postgresql-plain","devicon-jupyter-plain","devicon-numpy-plain","devicon-matplotlib-plain" ],
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
