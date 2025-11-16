import { useState } from "react"

export const useMessage = () => {
  const [message, setMessage] = useState(null);

  const showMessage = (text, error=false, timeout=5000) => {
    setMessage({ text, error });
    setTimeout(()=> setMessage(null), timeout)
  }

  return { message, showMessage };
}