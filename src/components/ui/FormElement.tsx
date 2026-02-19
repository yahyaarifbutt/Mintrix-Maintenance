interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput = ({ label, ...props }: InputProps) => (
  <div className="space-y-2">
    <label className="text-heavy-metal font-black text-[10px] uppercase tracking-widest ml-1">
      {label}
    </label>
    <input 
      {...props} 
      className="w-full p-5 bg-ecru-white border-b-2 border-transparent focus:border-old-gold outline-none text-heavy-metal font-medium transition-all" 
    />
  </div>
);

export const FormSelect = ({ label, options }: { label: string, options: string[] }) => (
  <div className="space-y-2">
    <label className="text-heavy-metal font-black text-[10px] uppercase tracking-widest ml-1">{label}</label>
    <select className="w-full p-5 bg-ecru-white border-b-2 border-transparent focus:border-old-gold outline-none text-heavy-metal font-medium transition-all appearance-none cursor-pointer">
      <option>Select {label}</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);