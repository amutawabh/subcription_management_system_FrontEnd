# Subcription Management System (Front-End)

## Deployment Link

[Subcription Management System ](https://subscription-management-system-front-end.vercel.app/)

# Project Description

The Subscription Management System is an internal tool designed for companies to effectively monitor and manage client subscriptions. The system allows employees to track subscription details, update them as necessary, and ensure timely communication with clients. It includes features for adding, editing, and renewing subscriptions, while also providing clear dashboards to visualize subscription statuses. Administrators have full control over system users (employees), ensuring a streamlined process for subscription tracking and updates.

# Screenshots

## Login Page

![Login Page](/src/assets/login.png)


# Project Objectives

1.	Centralized Subscription Tracking: Input and manage all client subscriptions with details such as start and end dates.
2.	Expiration Alerts: Display subscriptions nearing their expiration date in a dedicated dashboard to ensure timely renewal actions.
3.	Renewal Options: Allow users to renew client subscriptions either monthly or yearly and set the new expiration date accordingly.
4.	User Management: Grant administrators the ability to add, manage, and remove employees with access to the system.

# User Stories
1.	Administrator:
o	As an admin, I want to add, edit, and delete employee accounts to control system access.
o	As an admin, I want to view all subscriptions and their statuses for better oversight.
2.	Employee:
o	As an employee, I want to add new client subscriptions with details such as name, contact info, start date, and expiration date.
o	As an employee, I want to view a dashboard that displays all subscriptions with clear indicators of those nearing expiration.
o	As an employee, I want to renew client subscriptions (monthly or yearly) and set the new expiration date.
3.	System Alerts:
o	As a user, I want to see highlighted notifications for subscriptions that are expiring soon (e.g., within 30 days).
o	As a user, I want to filter subscriptions based on status (e.g., active, expired, nearing expiration).

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
Display all client subscriptions with filters for status (active, nearing expiration, expired).

# Renewal Management
function renewSubscription(subscriptionID, renewalPeriod)
Update the expiration date based on the renewal period (monthly/yearly).

## Dashboard Features
function getExpiringSubscriptions()
Highlight subscriptions that are expiring within a defined period (e.g., 30 days).
function filterSubscriptions(status)
Allow filtering subscriptions by status (active, expired, nearing expiration).

 ## User Management
function addUser(username, password, role)
Admin can create new user accounts for employees.
function deleteUser(userID)
Admin can remove access for specific users.

# Technologies Used
Frontend: React (for creating user-friendly dashboards)
Backend: Node.js, Express (for API development)
Database: MongoDB (to store subscription and user data)

# ERD

![alt text](/Plan/image.png)
![alt text](/Plan/image-1.png)
![alt text](/Plan/image-2.png)

# Next plan
1.	Add service name
2.	Add categories to subscription
3.	Send notifications
