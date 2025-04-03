// src/components/ui.jsx

export function Card({ children, onClick }) {
    return (
      <div className="p-4 border rounded-xl shadow-md cursor-pointer" onClick={onClick}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div className="p-2">{children}</div>;
  }
  
  export function Button({ children, onClick }) {
    return (
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={onClick}>
        {children}
      </button>
    );
  }
  
  export function Input({ placeholder, value, onChange }) {
    return (
      <input
        className="border p-2 rounded-md mb-2 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
  