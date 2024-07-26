import React from 'react';

const Signup = ({ setCurrentPage }) => {
  return (
    <div>
      <h2>Signup Page</h2>
      <form>
        {/* Signup form elements */}
      </form>
      <button onClick={() => setCurrentPage('UserLogin')}>Back to Login</button>
    </div>
  );
};

export default Signup;
