import { useState, useEffect } from 'react';
import { mockActivityEvents, type ActivityEvent } from '../data/activity';

export function useActivity() {
  const [events, setEvents] = useState<ActivityEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(mockActivityEvents);
      setLoading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  return { events, loading };
}
