function NotFoundFallback() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '60px 20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333'
      }}
    >
      <h1 style={{ fontSize: '80px', color: '#ff6b6b' }}>404</h1>
      <p style={{ fontSize: '18px' }}>Sorry, the component you're looking for doesn't exist.</p>
      <p style={{ fontSize: '18px' }}>Please check the name or go back to the homepage.</p>
    </div>
  );
}

export default NotFoundFallback