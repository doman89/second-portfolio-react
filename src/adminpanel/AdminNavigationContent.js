import React from 'react';

const AdminNavigationContent = () => {
    return (
      <form onSubmit={this.props.handleOnSubmit}>
          <div><label htmlFor={'welcome'}></label><input type={'text'} id={'welcome'}/> </div>
      </form>
    );
};

export default AdminNavigationContent;