import blinkitDashboard from "../images/blinkitDashboard.jpg";
import youtubeDashboard from "../images/youtubeDashboard.jpg";

const projects = [
  {
    id: "blinkit-dashboard",
    title: "Blinkit Power BI Dashboard",
    image: blinkitDashboard,
    description: "Developed an interactive Power BI dashboard for Blinkit's operational analytics, integrating multiple data sources to provide real-time insights into delivery performance, inventory turnover, and regional sales patterns.",
    tech: ["Power BI", "Excel", "Data Modeling", "DAX"],
    achievements: [
      "improve business operations",
      "Automated data refresh processes to ensure accurate, up-to-date information for stakeholders.",
      "Designed visualizations and reports that helped performance monitoring and decision-making.",

    ]
  },
  {
    id: "youtube-analytics",
    title: "YouTube Analytics Dashboard",
    image: youtubeDashboard,
    description: "Created a comprehensive YouTube channel performance dashboard tracking viewer demographics, engagement metrics, and content performance across different time periods.",
    tech: ["Power BI", "Excel", "YouTube API"],
    achievements: [
      "visualize engagement trends over time",
      "improving video performance",
      "insights for optimizing content strategy"
    ]
  },
];

export default projects;