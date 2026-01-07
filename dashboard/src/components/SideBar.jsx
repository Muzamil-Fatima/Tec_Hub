import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">ClinicFlow</h2>

      <ul className="space-y-4">
        <li><NavLink to="/overview">Overview</NavLink></li>
        <li><NavLink to="/doctor">Doctor</NavLink></li>
        <li><NavLink to="/patients">Patients</NavLink></li>
        <li><NavLink to="/appointment">Appointment</NavLink></li>
        <li><NavLink to="/laboratory">Laboratory</NavLink></li>
        <li><NavLink to="/setting">Setting</NavLink></li>
      </ul>
    </div>
  );
};

export default SideBar;
