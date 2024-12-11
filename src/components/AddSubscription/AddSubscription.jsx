import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addSubscription } from '../../services/subscriptionService';
import './AddSubscription.css';

const AddSubscription = () => {
    const [clientName, setClientName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newSubscription = { clientName, contactInfo, startDate, endDate };
            await addSubscription(newSubscription);
            setSuccess('Subscription added successfully!');
            setError('');
            setTimeout(() => navigate('/dashboard'), 2000); // إعادة التوجيه إلى لوحة التحكم بعد النجاح
        } catch (err) {
            setError('Failed to add subscription. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="add-subscription-container">
            <h1 className="add-subscription-title">Add Subscription</h1>
            <form className="add-subscription-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Client Name</label>
                    <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Contact Info</label>
                    <input
                        type="text"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                {error && <p className="error-text">{error}</p>}
                {success && <p className="success-text">{success}</p>}
                <button className="add-button" type="submit">
                    Add Subscription
                </button>
            </form>
        </div>
    );
};

export default AddSubscription;
