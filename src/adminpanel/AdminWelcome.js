import React from 'react';
import AdminWelcomeFormular from './AdminWelcomeFormular';

const AdminWelcome = () => {
        return (
            <div className={'admin-panel'}>
                <AdminWelcomeFormular
                    language={'pl'}
                    handleOnSubmit={this.handleOnSubmit}
                />
                <AdminWelcomeFormular
                    language={'en'}
                    handleOnSubmit={this.handleOnSubmit}
                />
            </div>
        );
};

export default AdminWelcome;