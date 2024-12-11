//  src/components/Dashboard/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSubscriptions, updateSubscription, deleteSubscription } from '../../services/subscriptionService';
import './Dashboard.css';

const Dashboard = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [editingSubscription, setEditingSubscription] = useState(null);
    const [editForm, setEditForm] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
            return;
        }

        const user = JSON.parse(atob(token.split('.')[1]));
        setIsAdmin(user.role === 'admin');
    }, [navigate]);

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                const data = await getSubscriptions();
                setSubscriptions(data);
                setError('');
            } catch (err) {
                setError('Failed to load subscriptions. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchSubscriptions();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleAddSubscription = () => {
        navigate('/add-subscription');
    };

    const handleUserManagement = () => {
        navigate('/user-management');
    };

    const handleEditSubscription = (subscription) => {
        setEditingSubscription(subscription._id);
        setEditForm({
            clientName: subscription.clientName,
            contactInfo: subscription.contactInfo,
            startDate: subscription.startDate,
            endDate: subscription.endDate,
            status: subscription.status,
        });
    };

    const handleSaveEdit = async () => {
        try {
            await updateSubscription(editingSubscription, editForm);
            setSubscriptions((prev) =>
                prev.map((sub) =>
                    sub._id === editingSubscription ? { ...sub, ...editForm } : sub
                )
            );
            setEditingSubscription(null);
            setError('');
        } catch (err) {
            setError('Failed to update subscription. Please try again.');
        }
    };

    const handleCancelEdit = () => {
        setEditingSubscription(null);
        setEditForm({});
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleDeleteSubscription = async (id) => {
        try {
            await deleteSubscription(id);
            setSubscriptions((prev) => prev.filter((sub) => sub._id !== id));
            setError('');
        } catch (err) {
            setError('Failed to delete subscription. Please try again.');
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <div className="dashboard-actions">
                    {isAdmin && (
                        <button className="user-management-button" onClick={handleUserManagement}>
                            User Management
                        </button>
                    )}
                    <button className="add-subscription-button" onClick={handleAddSubscription}>
                        Add Subscription
                    </button>
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
            {loading ? (
                <p className="loading-text">Loading subscriptions...</p>
            ) : error ? (
                <p className="error-text">{error}</p>
            ) : (
                <div className="subscriptions-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Client Name</th>
                                <th>Contact Info</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                {isAdmin && <th>Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {subscriptions.map((sub) =>
                                editingSubscription === sub._id ? (
                                    <tr key={sub._id}>
                                        <td>
                                            <input
                                                type="text"
                                                name="clientName"
                                                value={editForm.clientName}
                                                onChange={handleFormChange}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="contactInfo"
                                                value={editForm.contactInfo}
                                                onChange={handleFormChange}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="date"
                                                name="startDate"
                                                value={editForm.startDate}
                                                onChange={handleFormChange}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="date"
                                                name="endDate"
                                                value={editForm.endDate}
                                                onChange={handleFormChange}
                                            />
                                        </td>
                                        <td>
                                            <select
                                                name="status"
                                                value={editForm.status}
                                                onChange={handleFormChange}
                                            >
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button className="save-button" onClick={handleSaveEdit}>
                                                Save
                                            </button>
                                            <button
                                                className="cancel-button"
                                                onClick={handleCancelEdit}
                                            >
                                                Cancel
                                            </button>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr key={sub._id}>
                                        <td>{sub.clientName}</td>
                                        <td>{sub.contactInfo}</td>
                                        <td>{new Date(sub.startDate).toLocaleDateString()}</td>
                                        <td>{new Date(sub.endDate).toLocaleDateString()}</td>
                                        <td>{sub.status}</td>
                                        {isAdmin && (
                                            <td>
                                                <button
                                                    className="edit-button"
                                                    onClick={() => handleEditSubscription(sub)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="delete-button"
                                                    onClick={() => handleDeleteSubscription(sub._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
