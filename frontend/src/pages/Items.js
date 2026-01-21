import React, { useState, useEffect } from 'react';
import { itemsAPI } from '../services/api';

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    is_active: true
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await itemsAPI.getAll();
      setItems(response.data.results || response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch items. Make sure the backend is running.');
      console.error('Error fetching items:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await itemsAPI.update(editingId, formData);
        setEditingId(null);
      } else {
        await itemsAPI.create(formData);
      }
      setFormData({ title: '', description: '', is_active: true });
      fetchItems();
    } catch (err) {
      setError('Failed to save item');
      console.error('Error saving item:', err);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      description: item.description,
      is_active: item.is_active
    });
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await itemsAPI.delete(id);
        fetchItems();
      } catch (err) {
        setError('Failed to delete item');
        console.error('Error deleting item:', err);
      }
    }
  };

  const handleCancel = () => {
    setFormData({ title: '', description: '', is_active: true });
    setEditingId(null);
  };

  if (loading) {
    return <div className="loading">Loading items...</div>;
  }

  return (
    <div>
      <h1>Items Management</h1>

      {error && <div className="error">{error}</div>}

      <div className="card">
        <h2>{editingId ? 'Edit Item' : 'Create New Item'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
              />
              {' '}Active
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            {editingId ? 'Update' : 'Create'}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancel} className="btn" style={{ marginLeft: '1rem' }}>
              Cancel
            </button>
          )}
        </form>
      </div>

      <h2>All Items</h2>
      {items.length === 0 ? (
        <p>No items yet. Create your first item above!</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>
              <strong>Status:</strong> {item.is_active ? '✅ Active' : '❌ Inactive'}
            </p>
            <p>
              <small>Created: {new Date(item.created_at).toLocaleDateString()}</small>
            </p>
            <div style={{ marginTop: '1rem' }}>
              <button onClick={() => handleEdit(item)} className="btn btn-primary">
                Edit
              </button>
              <button 
                onClick={() => handleDelete(item.id)} 
                className="btn btn-danger" 
                style={{ marginLeft: '0.5rem' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Items;
