import React, { useState } from 'react';
import { createLink } from '../../services/link.service';

const CreateLink = ({ onLinkCreated }) => {
    const [formData, setFormData] = useState({
        originalUrl: '',
        customAlias: '',
        expirationDate: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const newLink = await createLink(formData);
            setFormData({ originalUrl: '', customAlias: '', expirationDate: '' });
            onLinkCreated(newLink);
        } catch (err) {
            setError(err.message || 'Error creating link');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Create Short Link</h2>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Original URL
                    </label>
                    <input
                        type="url"
                        value={formData.originalUrl}
                        onChange={(e) => setFormData({...formData, originalUrl: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Custom Alias (optional)
                    </label>
                    <input
                        type="text"
                        value={formData.customAlias}
                        onChange={(e) => setFormData({...formData, customAlias: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Expiration Date (optional)
                    </label>
                    <input
                        type="date"
                        value={formData.expirationDate}
                        onChange={(e) => setFormData({...formData, expirationDate: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {loading ? 'Creating...' : 'Create Short Link'}
                </button>
            </form>
        </div>
    );
};

export default CreateLink;