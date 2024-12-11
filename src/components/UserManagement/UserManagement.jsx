// src/components/UserManagement/UserManagement.jsx

// src/components/UserManagement/UserManagement.jsx

import React, { useEffect, useState } from 'react';
import { getUsers, updateUser, deleteUser } from '../../services/userService';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [editingUser, setEditingUser] = useState(null);
    const [editForm, setEditForm] = useState({ username: '', role: '' });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
                setError('');
            } catch (err) {
                setError('Failed to load users.');
            }
        };

        fetchUsers();
    }, []);

    const handleEditClick = (user) => {
        setEditingUser(user._id);
        setEditForm({ username: user.username, role: user.role });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(editingUser, editForm);
            setUsers((prev) =>
                prev.map((user) =>
                    user._id === editingUser ? { ...user, ...editForm } : user
                )
            );
            setSuccess('User updated successfully!');
            setError('');
            setEditingUser(null);
        } catch (err) {
            setError('Failed to update user.');
        }
    };

    const handleCancelEdit = () => {
        setEditingUser(null);
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
            setUsers((prev) => prev.filter((user) => user._id !== id));
            setError('');
            setSuccess('User deleted successfully!');
        } catch (err) {
            setError('Failed to delete user.');
        }
    };

    const handleAddUser = () => {
        // Logic to add a user
    };

    return (
        <div className="user-management-container">
            <h1 className="user-management-title">User Management</h1>
            <button className="add-user-button" onClick={handleAddUser}>
                Add User
            </button>
            {error && <p className="error-text">{error}</p>}
            {success && <p className="success-text">{success}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleEditClick(user)}>Edit</button>
                                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editingUser && (
                <div className="edit-form-container">
                    <h2>Edit User</h2>
                    <form onSubmit={handleEditSubmit}>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={editForm.username}
                                onChange={handleEditChange}
                                required
                            />
                        </label>
                        <label>
                            Role:
                            <input
                                type="text"
                                name="role"
                                value={editForm.role}
                                onChange={handleEditChange}
                                required
                            />
                        </label>
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleCancelEdit}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UserManagement;
