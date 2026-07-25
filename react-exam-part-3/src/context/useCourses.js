import { useState, useEffect, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customCourses] = useLocalStorage("customCourses", []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/courses.json", { signal: controller.signal });

        if (!res.ok) {
          throw new Error("კურსების მოძიება ვერ მოხერხდა");
        }

        const data = await res.json();

        setCourses(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();

    return () => controller.abort();
  }, []);

  const allCourses = useMemo(
    () => [...courses, ...customCourses],
    [courses, customCourses],
  );

  return { courses: allCourses, loading, error };
};

export default useCourses;
