// import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ReactDocPage() {
  const navigate = useNavigate();

  const params = useParams();
  console.log(params);

  return (
    <>
      <h3 onClick={() => navigate('/')}>logo</h3>
      <div>ReactDocPage ##{params.docId}</div>;
    </>
  )
}
