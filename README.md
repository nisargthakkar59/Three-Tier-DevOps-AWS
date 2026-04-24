# 🚀 Scalable 3-Tier Enterprise Infrastructure on AWS EKS

**Author:** Nisarg Thakkar
**Role:** DevOps Engineer 

## 📌 1. Executive Summary
This project involved the design and deployment of a production-grade **3-tier web architecture** on **Amazon Elastic Kubernetes Service (EKS)**. By separating the application into three distinct logical tiers—**Presentation (React)**, **Application (Node.js)**, and **Data (MongoDB)**—the system achieves high availability, independent scalability, and enhanced security.

### 🌟 The Final Application
Below is the live To-Do application successfully fetching and modifying data from the MongoDB database through the AWS Application Load Balancer.

![Live Application Output](images/final_output_ofwebsite.jpg)

---

## 🏗️ 2. Infrastructure Configuration (AWS EKS)
**Purpose:** This layer serves as the "Blueprinting Layer" for the entire cloud environment. It contains the logic used to provision the Amazon EKS cluster (`nisarg-final-v3`) and its underlying resources within the `us-east-1` region.

**Execution Proof: Active EKS Cluster**
The control plane and OIDC providers were successfully provisioned using `eksctl`.
![EKS Cluster Running](images/EKS_cluster.png)

**Execution Proof: Compute Nodes Alive**
Worker nodes (`t3.medium`) were successfully attached to the cluster and reached a `Ready` state.
![Nodes Ready State](images/infra_alive_aws.png)

---

## 📦 3. Containerization Layer (Amazon ECR)
**Purpose:** This layer transforms raw React and Node.js source code into standardized, portable Docker images. 

**Technical Details:**
* Images were built using optimized Dockerfiles and securely pushed to **Amazon Elastic Container Registry (ECR)**.
* Independent repositories were created for the frontend and backend to support microservice lifecycle management.

**Execution Proof: ECR Repositories & Pushed Images**
![ECR Repositories](images/ECR_backend_fronted.png)
![Backend Image Tagged v1](images/backend_ecr_aws.png)
![Frontend Image Tagged v1](images/frontend_ecr_aws.png)

---

## ☸️ 4. Kubernetes Orchestration 
**Purpose:** This defines the declarative "Blueprints" (YAML manifests) for the application. It instructs the EKS control plane on how to deploy, network, and manage the lifecycle of the 3-tier application within the isolated `three-tier` namespace.

**Technical Details:**
* **Deployments:** Configured multiple replicas for the backend API to ensure zero-downtime and high availability.
* **Database:** Deployed MongoDB as a Stateful component to ensure task data persistence.
* **Services:** Utilized internal `ClusterIP` routing to keep the database isolated from the public internet.

**Execution Proof: Pods in Running State**
The screenshot below demonstrates the successful transition of all microservices (frontend, api, and mongodb) from `ContainerCreating` to a healthy `Running` state without restart errors.
![Kubernetes Pods Running](images/kubernites_runningstaes.png)

---

## 🌐 5. External Access & Networking
**Purpose:** Connects the internal cluster to the public internet securely.

**Technical Details:**
* A Kubernetes `LoadBalancer` service was provisioned, communicating directly with AWS APIs to generate an internet-facing Application Load Balancer.
* Traffic is securely routed exclusively to port 3000 on the React frontend pods, safeguarding the backend infrastructure.

**Execution Proof: Network Verification**
The browser's network tab confirms successful `200 OK` XHR requests flowing from the React frontend, through the AWS Load Balancer, hitting the Node.js API, and interacting with MongoDB.
![Network Traffic Success](images/actually_imp_doc.jpg)
