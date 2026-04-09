export const Button = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button 
    onClick={onClick}
    style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', border: 'none', background: '#007bff', color: 'white' }}
  >
    {label}
  </button>
);
