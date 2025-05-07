
import { DashboardLayout, UserRole } from "@/components/DashboardLayout";
import { RoleDashboard } from "@/components/RoleDashboard";
import { useParams, Navigate } from "react-router-dom";

export default function RoleDashboardPage() {
  const { role } = useParams<{ role: string }>();
  
  // Validate if the role is a valid UserRole
  const validRoles: UserRole[] = ["super", "professor", "aluno", "encarregado", "staff", "admin"];
  const userRole = role as UserRole;
  
  if (!validRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <DashboardLayout userRole={userRole}>
      <RoleDashboard role={userRole} />
    </DashboardLayout>
  );
}
