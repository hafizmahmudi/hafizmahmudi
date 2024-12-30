"use client";

import { useEffect, useState } from "react";
import Awards from "@/components/Awards";
import BlogSlider from "@/components/Blog";
import Brands from "@/components/Brands";
import Testimonial from "@/components/Testimonial";
import WorkTogether from "@/components/WorkTogether";
import BentoFolioLayout from "@/layout/BentoFolioLayout";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const counterItems = [
    { id: 1, title: "Year of Experience", value: 40 },
    { id: 2, title: "Project Completed", value: 86 },
    { id: 3, title: "Happy Client", value: 72 },
  ];

  const about = {
    name: "Hafizullah Mahmudi",
    bio: "<p><strong>Hafizullah Mahmudi </strong>is a results-oriented <strong>Data Consultant</strong> and experienced <strong>Developer</strong> with a proven foundation in designing, building, and optimizing data-driven solutions. With over <strong>12 years</strong> of diverse experience, he has successfully led the development, implementation, and improvement of advanced data collection, processing, integration, and visualization tools to drive quality in various business domains.</p><p><br></p><p>💻 <strong>Technical Expertise</strong>:</p><ul><li>📂 <strong>Databases &amp; Integration</strong>: Microsoft Access, MS SQL Server, PostgreSQL, SSIS, SSRS</li><li>📈 <strong>Business Intelligence &amp; Analytics</strong>: Data Warehousing, Power BI, DAX</li><li>🖥 <strong>Software Development</strong>: ASP.NET Core Framework, MVC, C#, VBA</li><li>📊 <strong>Data Visualization &amp; Reporting</strong>: Advanced dashboards, interactive reporting tools</li></ul><p><br></p><p>🤝 <strong>Soft Skills</strong>:</p><ul><li><strong>Collaboration</strong>: Effective team coordination to achieve project success</li><li><strong>Innovation</strong>: Creative problem-solving to address complex challenges</li></ul>",
  };

  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info">
              <div className="text" style={{ width: '100%!important',boxSizing: 'border-box' ,display:'block'}}>
                <h1 className="main-title">
                  Hi, This Is <span>{about.name}</span> 👋
                </h1>
                {isClient && (
                  <p style={{fontSize:'18px',width: '100%',boxSizing: 'border-box', display:'block'}} dangerouslySetInnerHTML={{ __html: about.bio }}></p>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};

export default Page;