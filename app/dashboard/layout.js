import DashboardMenu from "./components/menu";
export default function DashboardLayout({ children }) {
  return (
    <div className="grid place-content-center px-8 mx-auto">
      <DashboardMenu />
      {children}
    </div>
  );
}
