import React, { useEffect, useState } from 'react';
import { fetchLogs } from '../../services/logService';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLogs = async () => {
      try {
        const data = await fetchLogs();
        if (Array.isArray(data)) {
          setLogs(data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        console.error('Error fetching logs:', err.message);
        setError('Failed to load logs.');
      } finally {
        setLoading(false);
      }
    };

    getLogs();
  }, []);

  if (loading) return <p>Loading logs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Logs</h1>
      {logs.length === 0 ? (
        <p>No logs available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Action</th>
              <th>User</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={log._id}>
                <td>{index + 1}</td>
                <td>{log.action}</td>
                <td>{log.user_id?.name || 'N/A'}</td>
                <td>{new Date(log.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Logs;
