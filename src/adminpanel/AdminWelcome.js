import React from 'react';
import AdminWelcomeFormular from './AdminWelcomeFormular';

const AdminWelcome = () => {
        return (
            <div className={'admin-panel'}>
                <AdminWelcomeFormular language={'pl'} />
                <AdminWelcomeFormular language={'en'} />
            </div>
        );
};

export default AdminWelcome;