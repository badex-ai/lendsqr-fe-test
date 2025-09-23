
import { useNavigate } from "react-router-dom";
export function formatKey(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1") // insert space before capital letters
    .replace(/^./, str => str.toUpperCase()); // capitalize first letter
}

export function useLogout() {
  const navigate = useNavigate();

  return () => {
    localStorage.clear();
    navigate("/login");
  };
}

