// data.js

export const profile = {
  name: "Carolina Veiga",
  bio: "I am a Teaching and Research Postdoctoral Fellow in the Department of Computer Science at James Madison University. I hold a Ph.D. in Computing (2023), an M.S. in Biosystems Engineering (2016), and a B.S. in Environmental Engineering (2013) from Federal Fluminense University, Brazil. From 2023 to 2025, I served as a Postdoctoral Research Associate at the Discovery Partners Institute, part of the University of Illinois System, where I contributed to the development of several visualization systems.My research integrates environmental sciences, visual analytics, and data provenance to tackle societal challenges. I develop visualization and AI-driven tools that help experts interpret complex data and support more effective data visualization education. I have published at IEEE VIS for the past three years, including a paper recognized with a Best Paper Honorable Mention in 2023. My collaborations with domain experts have also resulted in publicly available tools and publications in leading venues.",
  email: "hh8yvn@jmu.edu",
  linkedin: "https://www.linkedin.com/in/carolvfs/",
  scholar: "https://scholar.google.com/citations?user=oTNJoX8AAAAJ&hl=en",
  cv: "cv/cv.pdf",
  photo: "images/profile/profile.jpg"
};

// export const papers = [
//   { title: "Urbanite: A Dataflow-Based Framework for Human-AI Interactive Alignment in Urban Visual Analytics", link: "https://arxiv.org/abs/2508.07390", img: "images/papers/paper3.jpg" },
//   { title: "Curio: A dataflow-based framework for collaborative urban visual analytics", link: "https://ieeexplore.ieee.org/abstract/document/10670514", img: "images/papers/paper3.jpg" },
//   { title: "PROWIS: A Visual Approach for Building, Managing, and Analyzing Weather Simulation Ensembles at Runtime", link: "https://ieeexplore.ieee.org/abstract/document/10290915", img: "images/papers/paper1.jpg" },
//   { title: "Visualizing simulation ensembles of extreme weather events", link: "https://www.sciencedirect.com/science/article/abs/pii/S0097849322000073", img: "images/papers/paper2.jpg" },
//   { title: "Heavy rainfall event in Nova Friburgo (Brazil): numerical sensitivity analysis using different parameterization combinations in the WRF model", link: "https://link.springer.com/article/10.1007/s11069-024-06638-6", img: "images/papers/paper3.jpg" },
// ];

export const papers = [
  {
    title: "Urbanite: A Dataflow-Based Framework for Human-AI Interactive Alignment in Urban Visual Analytics",
    authors: "G Moreira, L Ferreira, C Veiga, M Hosseini, F Miranda",
    venue: "IEEE Transactions on Visualization and Computer Graphics",
    year: "2025 (https://urbantk.org/urbanite/)",
    link: "https://arxiv.org/abs/2508.07390",
    img: "images/papers/urbanite.png"
    },
    {
    title: "Curio: A dataflow-based framework for collaborative urban visual analytics",
    authors: "G Moreira, M Hosseini, C Veiga, L Alexandre, N Colaninno, D de Oliveira, N Ferreira., M Lage, F Miranda",
    venue: "IEEE Transactions on Visualization and Computer Graphics 31 (1), 1224-1234",
    year: "2025 (urbantk.org/curio)",
    link: "https://ieeexplore.ieee.org/abstract/document/10670514",
    img: "images/papers/curio.png"
    },
    {
    title: "PROWIS: A Visual Approach for Building, Managing, and Analyzing Weather Simulation Ensembles at Runtime",
    authors: "CVF de Souza, SM Bonnet, D de Oliveira, M Cataldi, F Miranda, M Lage",
    venue: "IEEE Transactions on Visualization and Computer Graphics 30 (1), 738-747",
    year: "2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10290915",
    img: "images/papers/prowis.png"
    },
    {
      title: "Heavy rainfall event in Nova Friburgo (Brazil): numerical sensitivity analysis using different parameterization combinations in the WRF model",
      authors: "C Veiga, MGAJ da Silva, FP da Silva",
      venue: "Natural Hazards 120 (13), 11641-11664",
      year: "2024",
      link: "https://link.springer.com/article/10.1007/s11069-024-06638-6",
      img: "images/papers/nhaz.png"
    },
    {
    title: "Visualizing simulation ensembles of extreme weather events",
    authors: "CVF de Souza, PCL Barcellos, L Crissaff, M Cataldi, F Miranda, M Lage",
    venue: "Computers & Graphics 104, 162-172",
    year: "2022",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0097849322000073",
    img: "images/papers/xweather.png"
    },
];

export const research = [
  { topic: "Urban and Environmental Visual Analytics", details: "Design visual analytics tools that help researchers and policymakers explore complex urban and environmental datasets, revealing patterns that inform planning, resilience, and climate-related decision-making." },
 
  
  { topic: "Data Provenance for Visualization", details: "Investigate techniques to capture, track, represent, and utilize data provenance in visualization systems, enhancing transparency, reproducibility, and trust in visual analytics processes." },

  { topic: "Human-AI Interaction", details: "Explore the integration of AI techniques with human-centered design in visualization systems, aiming to create interactive tools that leverage AI capabilities while maintaining (not replacing) human judgment in complex analytical tasks." },
  
  { topic: "Visualization for Education", details: "Develop visualization frameworks and instructional methods that strengthen analytical, creative, and critical thinking, supporting students and professionals in learning how to reason effectively with data." },

];

export const education = [
  { degree: "PhD in Computing", institution: "Federal Fluminense University", year: "2023", logo: "images/logos/university.png" },
  { degree: "MSc in Biosystems Engineering", institution: "Federal Fluminense University", year: "2016", logo: "images/logos/university.png" },
  { degree: "BSc in Environmental Engineering", institution: "Federal Fluminense University", year: "2013", logo: "images/logos/university.png" }
];

export const experience = [
  { title: "Postdoctoral Fellow", company: "James Madison University", years: "2025 - present", description: "Description of your research work, responsibilities, or achievements.", logo: "images/logos/lab.png" },
  { title: "Postdoctoral Fellow", company: "Discovery Partners Institute, part of University of Illinois System", years: "2023 - 2025", description: "Short description of your work or projects.", logo: "images/logos/dv.png" }
];

export const projects = [
  { title: "Project Title 1", description: "Short description of the project, goals, and technologies used.", img: "images/projects/project1.jpg" },
  { title: "Project Title 2", description: "Short description of the project, goals, and technologies used.", img: "images/projects/project2.jpg" }
];

export const gallery = [
  "images/gallery/img1.jpg",
  "images/gallery/img2.jpg",
  "images/gallery/img3.jpg"
];
