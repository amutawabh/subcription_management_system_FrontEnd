import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSubscriptions } from '../../services/subscriptionService';
import './Dashboard.css';

const Dashboard = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    // التحقق من التوكن عند تحميل الصفحة
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
            return;
        }

        // فك تشفير التوكن لمعرفة الدور
        const user = JSON.parse(atob(token.split('.')[1]));
        setIsAdmin(user.role === 'admin');
    }, [navigate]);

    // جلب الاشتراكات من الخادم
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

    // تسجيل الخروج
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    // الانتقال إلى صفحة إضافة اشتراك
    const handleAddSubscription = () => {
        navigate('/add-subscription');
    };

    // الانتقال إلى صفحة إدارة المستخدمين
    const handleUserManagement = () => {
        navigate('/user-management');
    };

    // تعديل اشتراك
    const handleEditSubscription = (id) => {
        navigate(`/edit-subscription/${id}`);
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
                            {subscriptions.map((sub) => (
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
                                                onClick={() => handleEditSubscription(sub._id)}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Dashboard;