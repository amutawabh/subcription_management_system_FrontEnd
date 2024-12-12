# Subcription Management System (Front-End)

## Deployment Link

[Subcription Management System ](https://subscription-management-system-front-end.vercel.app/)

# Project Description

The Subscription Management System is an internal tool designed for companies to effectively monitor and manage client subscriptions. The system allows employees to track subscription details, update them as necessary, and ensure timely communication with clients. It includes features for adding, editing, and renewing subscriptions, while also providing clear dashboards to visualize subscription statuses. Administrators have full control over system users (employees), ensuring a streamlined process for subscription tracking and updates.

# Project Objectives

Centralized Subscription Tracking: Input and manage all client subscriptions with details such as start and end dates.

ser Management: Grant administrators the ability to add, manage, and remove employees with access to the system.

# Screenshots

## Login Page

![Login Page](/public/assets/login.png)

## Dashboard Admin User


![Dashboard1 Admin](/public/assets/Dashboard1.png)

![Edit](/public/assets/edit.png)

## Add Subscription

![Subscription add](/public/assets/Subscription.png)

## User Management

![Users](/public/assets/users.png)

# User Stories

1. As an admin, I want to add, edit, and delete employee accounts to control system access.
2. As an admin, I want to manage client subscriptions, including adding, editing, and deleting them.
3. As an admin, I want to view all client subscriptions in a dashboard to monitor their statuses.
4. As an employee, I want to add new client subscriptions with details such as name, contact info, start date, and expiration date.
5. As an employee, I want to view a dashboard that displays all

# Pseudo Code

## Authentication

function signup(username, password, role)
Allow admins to add new employees.

function signin(username, password)
Authenticate employees or admins and provide access to relevant features.

## Subscription Management

function addSubscription(clientDetails, startDate, endDate)
Add a new client subscription with required details.
function editSubscription(subscriptionID, updatedDetails)
Allow employees to update client subscription details (e.g., extend end date).
function viewSubscriptions()
Display all client subscriptions with filters for status (active and inactive).


## User Management

function addUser(username, password, role)
Admin can create new user accounts for employees.
function deleteUser(userID)
Admin can remove access for specific users.

# ERD

![alt text](/Plan/image.png)
![alt text](/Plan/image-1.png)
![alt text](/Plan/image-2.png)

# Technologies Used
Frontend: React (for creating user-friendly dashboards)
Backend: Node.js, Express (for API development)
Database: MongoDB (to store subscription and user data)

# Next plan
1.	Add service name
2.	Add categories to subscription
3.	Send notifications
