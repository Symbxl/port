import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate()


  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)

  }, [])
  return (
    <>error, redirecting in 3 secs </>
  );
}

export default ErrorPage;