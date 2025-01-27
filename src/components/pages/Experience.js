import React from 'react';
import ExperienceOverview from './ExperienceOverview';
import './styles/ExperienceOverview.css';

const Experience = () => {
    return (
        <div className="experience-section">
            <div className="experience-header">
                Work Experience
            </div> 
            <hr className="hline" />
            <ExperienceOverview
                title="Morningstar"
                year="May 2024 - Aug 2024"
                location="Chicago, IL"
                position="Software Engineer Intern"
                word="Tech Stack: "
                tech="PostgreSQL, DynamoDB, Redis, AWS Lambda, AWS CloudWatch, Write-Ahead Log, CDC, RTO"
                description={
                    <>
                        • Worked on scalable database solutions, improving query performance and reliability for over 15TB of financial records.
                        <br />
                        • Built and deployed a database health checking tool on AWS Lambda to detect slow queries, index inefficiencies, and abnormal table growth, reducing manual issue resolution time by 40% and adopted by 20 teams internally.
                        <br />
                        • Configured DynamoDB with Global Secondary Indexes (GSI) to optimize query performance for non-primary key access, reducing average query latency by 60% from 500ms to 200ms.
                        <br />
                        • Analyzed PostgreSQL log and added a Write-Through Redis layer as an in-memory key-value cache, reducing database usage by 40% and response time from 150ms to 50ms during peak hour while maintaining strong consistency.
                        <br />
                        • Developed faster and reliable incremental database backup policy with Write-Ahead Log (WAL) archiving to capture database changes (CDC), reducing backup time by 30% and recovery time objective (RTO) under 15 minutes.
                        <br />
                        • Collaborated with senior engineers and cross-functional teams to analyze database health report, identify root causes of index inefficiencies, and design new schema and query optimization to improve database reliability and performance.
                    </>
                }
            />
            <hr className="experience-divider" />
            <ExperienceOverview
                title="Barry-Wehmiller"
                year="May 2023 - Aug 2023"
                location="Madison, WI"
                position="Software Engineer Intern"
                word="Tech Stack: "
                tech="Go, gRPC, Kafka, InfluxDB, Grafana, RESTful API, Microservices, IoT, Real-time Data Processing"
                description={
                    <>
                        • Worked with IoT backend team to optimize backend systems scalability, improving data processing efficiency and system reliability for real-time telemetry from over 2 million IoT devices.
                        <br />
                        • Migrated monolithic C# backend to a Go-based microservice architecture with gRPC, reducing inter-service latency by 50%, increasing throughput from 2,000 QPS to 9,000 QPS, and enabling independent scaling for each service.
                        <br />
                        • Designed and implemented a RESTful POST idempotent API for telemetry ingestion, ensuring consistent processing of retries and reducing data duplication error by 30% during A/B testing, improving overall data reliability.
                        <br />
                        • Built a real-time data pipeline with Kafka, using partitioning and windowed aggregations with InfluxDB for time-series analysis, reducing latency from 200ms to 100ms while handling 100,000 messages/second.
                        <br />
                        • Led a team of interns to create a monitoring system in Grafana, documenting telemetry health metrics and bottlenecks, and presenting weekly reports to senior engineers to optimize system performance.
                    </>
                }
            />
            <hr className="experience-divider" />
            <ExperienceOverview
                title="FIMEC"
                year="May 2022 - Aug 2022"
                location="San Jose, Costa Rica"
                position="Software Engineer Intern"
                word="Tech Stack: "
                tech="Docker, Kubernetes, Terraform, AWS, Jenkins, TypeScript, Node.js, CI/CD"
                description={
                    <>
                        • Worked with infrastructure team to improve system reliability, scalability, and deployment efficiency, ensuring seamless operations with container orchestration, automated provisioning, and CI/CD pipelines.
                        <br />
                        • Containerized a legacy application using Docker and orchestrated with Kubernetes, enabling rolling update and horizontal scaling, reducing deployment time by 30% and frequency from weekly to daily with zero downtime.
                        <br />
                        • Developed and managed Terraform scripts for automated provisioning of AWS infrastructure, ensuring consistency across development and production, reducing environment setup time by 50%, and facilitating a team-wide adoption.
                        <br />
                        • Designed an interactive TypeScript and Node.js webpage to visualize AWS infrastructure and data connections.
                        <br />
                        • Built a CI/CD pipeline with Jenkins, automating deployment time from 1 hour to 10 mins, minimizing manual error.
                    </>
                }
            />
            <hr className="experience-divider" />
            <ExperienceOverview
                title="Yin's Machine Learning Research Group"
                year="April 2022 - Nov 2022"
                location="Madison, WI"
                position="Research Assistant"
                word="Tech Stack: "
                tech="PyTorch, CNN, Image Processing, Supervised Learning, Dimension Reduction, Parallel Computing"
                description={
                    <>
                        • Implemented and trained Mutual Information Regression model in Supervised Learning to recognize the pattern between DNA Sequence and Covid-19 symptom, with 74.2% accuracy on 5-fold nested Cross-Validation.
                        <br />
                        • Designed and trained a CNN with t-SNE dimension reduction for defective body cells image classification with 94.7% accuracy, and relied on SHapley Additive exPlanations to visualize defective probability for each pixel.
                        <br />
                        • Applied Sobel, Canny, GLCM, Gaussian Markov Random Field for image process, edge detect, and feature extraction.
                    </>
                }
            />
        </div>
    );
}

export default Experience;