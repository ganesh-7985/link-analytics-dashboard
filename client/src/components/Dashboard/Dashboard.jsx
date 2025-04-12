import React, { useState, useEffect } from 'react';
import CreateLink from '../LinkShortener/CreateLink';
import LinkTable from './LinkTable';
import Charts from './Charts';
import { getLinks, getLinkAnalytics } from '../../services/link.service';

const Dashboard = () => {
    const [links, setLinks] = useState([]);
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchLinks = async () => {
        try {
            const data = await getLinks();
            setLinks(data);
            if (data.length > 0) {
                const analyticsData = await getLinkAnalytics(data[0]._id);
                setAnalytics(analyticsData);
            }
        } catch (err) {
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLinks();
    }, []);

    const handleLinkCreated = (newLink) => {
        setLinks([newLink, ...links]);
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Link Analytics Dashboard</h1>
            <CreateLink onLinkCreated={handleLinkCreated} />
            <LinkTable links={links} />
            {analytics && <Charts analytics={analytics} />}
        </div>
    );
};

export default Dashboard;