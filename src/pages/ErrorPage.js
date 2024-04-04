import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Sorry, this page does not exist</p>
      <button onClick={() => navigate(-1)}>Go back.</button>
    </div>
  );
}
