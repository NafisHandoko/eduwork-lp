import StepIndicator from "../components/step-indicator";
import Topbar from "../components/topbar";
import { Outlet } from "react-router-dom";

export default function Register() {
  return (
    <div>
        <Topbar />
        <StepIndicator />
        <Outlet />
    </div>
  )
}