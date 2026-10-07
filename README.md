# HireSphere — Job Portal Frontend

HireSphere is a modern job portal designed to connect **job seekers and recruiters** through a simple and user-friendly platform.

This repository contains the **frontend of HireSphere**, built with **React, Vite, TypeScript, Tailwind CSS, and Mantine UI**. The frontend communicates with the HireSphere Spring Boot backend through REST APIs and provides separate experiences for job seekers and recruiters.

The goal of HireSphere is to simplify the complete recruitment process — from discovering jobs and applying for them to posting jobs and managing applicants.

---

## ✨ Features

### 👨‍💻 For Job Seekers

-  Browse and search available jobs
-  View detailed job descriptions
-  Apply for jobs
-  See whether you have already applied
-  Save/bookmark jobs
-  View saved jobs
-  Track application history
-  Manage personal profile
-  Upload and manage resume

### 🏢 For Recruiters

-  Post new job openings
-  Edit existing job postings
-  View jobs posted by the recruiter
-  View applicants
-  Explore candidate information
-  Manage application status
-  Schedule interviews

### 🔐 Authentication

- JWT-based authentication
- Protected routes
- Role-based UI
- Token-based API authorization
- Secure communication with the backend

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| React | Building the user interface |
| TypeScript | Type-safe development |
| Vite | Development server and build tool |
| Tailwind CSS | Styling and responsive layouts |
| Mantine UI | UI components |
| React Router DOM | Client-side routing |
| Redux Toolkit | Global state management |
| Axios | REST API communication |
| React Icons | Icons and visual elements |

### Backend

The frontend communicates with a separate Spring Boot backend.

- Java
- Spring Boot
- Spring Data MongoDB
- REST APIs
- JWT Authentication
- MongoDB

👉 *Backend Repository:* [HireSphere Backend](https://github.com/jitmondal-it/HireSphere-Backend)
---

## 🏗️ Application Architecture

```text
                         ┌──────────────────────┐
                         │        User          │
                         │ Job Seeker / Recruiter
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   React Frontend     │
                         │       + Vite         │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
              React Router      Redux Store       Axios
                    │               │               │
                    └───────────────┼───────────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Spring Boot API    │
                         │      REST API        │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │       MongoDB        │
                         └──────────────────────┘
