import React, { useEffect, useState } from 'react';
import { getUsers, addUser, updateUser } from '../../services/userService';


const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('employee');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (err) {
                setError('Failed to load users.');
            }
        };

        fetchUsers();
    }, []);

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            await addUser({ username, password, role });
            setSuccess('User added successfully!');
            setError('');
            setUsername('');
            setPassword('');
            setRole('employee');
        } catch (err) {
            setError('Failed to add user.');
            setSuccess('');
        }
    };

    const handleRoleChange = async (id, newRole) => {
        try {
            await updateUser(id, { role: newRole });
            setUsers((prev) =>
                prev.map((user) => (user._id === id ? { ...user, role: newRole } : user))
            );
        } catch (err) {
            setError('Failed to update role.');
        }
    };

    return (
        <div className="user-management-container">
            <h1 className="user-management-title">User Management</h1>
            <form className="add-user-form" onSubmit={handleAddUser}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="employee">Employee</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Add User</button>
            </form>
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
                                <button
                                    onClick={() => handleRoleChange(user._id, user.role === 'admin' ? 'employee' : 'admin')}
                                >
                                    Toggle Role
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
