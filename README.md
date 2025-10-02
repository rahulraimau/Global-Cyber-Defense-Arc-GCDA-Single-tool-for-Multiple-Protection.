Global Cyber Defense Arc (GCDA)

Single Tool for Multiple Protection
https://github.com/rahulraimau/cybersecurity.git(#FOR INTEGRATION)
Overview

The Global Cyber Defense Arc (GCDA) is a secure, modular, and scalable cybersecurity dashboard. It enables analysts and GRC professionals to monitor, visualize, and manage:

Risk, policy, audit workflows (ServiceNow GRC)

Security event monitoring (Splunk, QRadar)

Endpoint detection & response (CrowdStrike, SentinelOne)

Vulnerability findings (Qualys, Tenable, Rapid7)

Identity & access management (Okta, CyberArk)

Data privacy & DSAR handling (OneTrust, BigID)

Features
Modules Implemented

User Management

GRC Workflow

SIEM Alert Viewer

EDR Monitoring

Vulnerability Dashboard

DSAR & Privacy Handling

Audit Logs

KPI Analytics

Backend Features

REST APIs, MongoDB Integration, Scheduled Jobs, API Gateways

Security Tools Integrated: ServiceNow GRC, Splunk, QRadar, CrowdStrike, SentinelOne, Qualys, Tenable, Okta, OneTrust

Data Storage: MongoDB (Dockerized)

CI/CD: Docker Compose (local), GitHub Actions (optional)

SSL: Enabled via Let’s Encrypt & Nginx

Maintenance Plan

Weekly backups

Monthly updates

Monitoring via UptimeRobot

Documentation

Admin Guide, User Manual, API Docs, Deployment Guide

Testing & QA

Manual testing, API testing (Postman)

Unit testing: Jest (backend), React Testing Library

Support

Support Period: 3 Months Post-Deployment

Contact: Support@gncipl.com

Project Objective

Build a secure, modular, and scalable dashboard for cybersecurity operations including risk, compliance, SIEM, EDR, vulnerability management, IAM, and data privacy.

Project Scope
In-Scope

MERN Stack App (React, Node, Express, MongoDB)

User management with RBAC

Integration with ServiceNow, Splunk, QRadar, CrowdStrike, etc.

Audit logging, email/Slack notifications

Dockerized deployment on DigitalOcean

Dashboard analytics

Out-of-Scope

Real-time SIEM log ingestion from local agents

Custom development of native ServiceNow/Splunk plugins

Full-featured mobile app (only responsive UI)

Deliverables
Deliverable	Description	Due Date
Project Charter	Scope, goals, roles	Week 1
Wireframes & UI Designs	Approved Figma mockups	Week 2
Working Frontend	React UI with auth	Week 3
Working Backend	Node APIs + MongoDB models	Week 4
GRC Module	Risk, policy, audit flows	Week 5
SIEM & EDR Integration	Alert viewer, agent health	Week 7
Vulnerability Dashboard	CVE parser, scanner integration	Week 8
Privacy Module	DSAR form, consent tracker	Week 9
Docker Setup	Client, server, Mongo in Compose	Week 11
Live Deployment	Deployed to DigitalOcean	Week 13
Testing & UAT	Manual, API, security tests	Week 14
Final Handover	Docs, credentials, training	Week 16
Technology Stack
Component	Technology
Frontend	React, Redux, Axios, Chart.js
Backend	Node.js, Express, Mongoose
Database	MongoDB
Authentication	JWT, RBAC, Okta OAuth
API Integration	REST APIs (Splunk, ServiceNow, etc.)
Deployment	Docker, Nginx, DigitalOcean
CI/CD	GitHub Actions (optional)
Logging	Mongo AuditLog, Email, Slack
Team & Roles
Role	Responsibility
Project Manager	Planning, coordination, client liaison
Frontend Developer	React UI implementation
Backend Developer	API, database, logic integration
DevOps Engineer	Docker setup, DigitalOcean deployment
QA Engineer	Testing, bug logging, UAT
Security Lead	OAuth, API hardening, role management
Documentation Lead	User manuals, handover package
Timeline (High-Level Phases)
Phase	Weeks
Requirement Gathering	Week 1
UI/UX & Design Approval	Week 2
Development (Frontend/Backend)	Week 3–10
Integrations & Testing	Week 6–13
Deployment & QA	Week 13–15
Final Review & Handover	Week 16
Risks & Mitigation
Risk	Mitigation
API rate limits / failures	Use retries, log failures
Integration auth changes	Store tokens securely, handle refresh logic
Delayed design/UI feedback	Weekly design demos
UAT bugs	Buffer 2 weeks for QA/fixes
Security vulnerability in backend	Code review + OWASP testing
Documentation Plan

Admin Guide (Managing modules, roles, configs)

User Manual (Using dashboards, filters)

API Docs (Postman collection + Swagger)

Deployment Guide (Rehosting instructions)

Testing Checklist & Bug Tracker

Optional Add-ons

MFA: TOTP-based Google Authenticator

CI/CD: GitHub Actions → Docker Hub → Server

Cloud Monitoring: UptimeRobot or Grafana

Audit Compliance: CSV/PDF export of risk/audit logs

Detailed Module Descriptions
Module	Frontend	Backend	Integrations/APIs
User Authentication	React + Redux, forms, role-based routes	Express + MongoDB, Passport.js, JWT	Okta / CyberArk
GRC Management	Risk register, policy viewer, audit checklist	REST API CRUD on risks/policies/audits	ServiceNow GRC API
SIEM Integration	Charts & logs	API calls & alert normalization	Splunk / QRadar API
EDR/XDR Status	Threat graphs, agent health views	Polling agents, webhooks	CrowdStrike / SentinelOne API
Vulnerability	Scan reports, metrics viewer	Import & parse scanner results	Tenable / Qualys API
Privacy Governance	DSAR forms, data maps	Workflow engine, DSAR tracking	OneTrust / BigID API
Audit Logs & Notifications	Log table, alerts	MongoDB audit collection	Custom/external notification API
Dashboard & Analytics	KPI charts, heatmaps	Aggregation pipelines	Combined analytics from tools
API & Endpoints Reference
Module	Endpoint	Method	Description	Auth/Access
User Authentication	/auth/signup	POST	Register a new user	Public
User Authentication	/auth/login	POST	User login	Public
User Authentication	/auth/verifyToken	GET	Verify JWT token	Authenticated
User Authentication	/auth/profile	GET	Fetch user profile	Authenticated
GRC Management	/grc/risks	GET	Get all risks	Admin/Analyst
GRC Management	/grc/risks	POST	Create new risk	Admin
GRC Management	/grc/risks/:id	PUT	Update risk	Admin
GRC Management	/grc/policies	GET	List all policies	Admin/Analyst
GRC Management	/grc/policies/:id	PUT	Update policy	Admin
GRC Management	/grc/audits	GET	Fetch audit logs	Admin/Analyst
SIEM Integration	/siem/logs	GET	Retrieve SIEM logs	Admin/Analyst
SIEM Integration	/siem/alerts	POST	Send new alert	Admin
EDR/XDR	/edr/endpoints	GET	Fetch endpoint status	Admin/Analyst
EDR/XDR	/edr/threats	GET	Get detected threats	Admin/Analyst
Vulnerability	/vuln/reports	GET	Fetch vulnerability scan reports	Admin/Analyst
Vulnerability	/vuln/scan	POST	Trigger a new scan	Admin
Privacy & DSAR	/privacy/dsar	POST	Submit DSAR request	Authenticated
Privacy & DSAR	/privacy/dsar/:id	GET	Fetch DSAR status	Admin/Analyst
Audit Logs	/audit/logs	GET	Retrieve system audit logs	Admin
Dashboard & Analytics	/dashboard/kpi	GET	Fetch KPI data	Admin/Analyst
Dashboard & Analytics	/dashboard/threats	GET	Fetch threat heatmap data	Admin/Analyst

Notes:

All endpoints return JSON responses.

Authentication is via JWT token; pass in Authorization: Bearer <token> header.

Role-based access control is enforced on sensitive endpoints.

External integrations (Splunk, ServiceNow, QRadar, CrowdStrike, SentinelOne, Tenable, Qualys, OneTrust) are accessed securely via backend APIs.

Installation

Clone the repository:

git clone https://github.com/rahulraimau/Global-Cyber-Defense-Arc-GCDA-Single-tool-for-Multiple-Protection.git


Navigate to the project directory:

cd Global-Cyber-Defense-Arc-GCDA-Single-tool-for-Multiple-Protection


Open index.html in a browser or serve with a local server:

python -m http.server 8000


Then go to http://localhost:8000

Contributing

Fork the repository

Create a new branch (git checkout -b feature-name)

Make your changes

Commit your changes (git commit -am 'Add new feature')

Push to the branch (git push origin feature-name)

Create a Pull Request

License

This project is licensed under the MIT License – see the LICENSE file for details.

