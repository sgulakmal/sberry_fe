export function timeAgo(date?: Date | string): string {
    if(!date) {
        return "";
    }
    const now = new Date();
    const inputDate = typeof date === 'string' ? new Date(date) : date;
    const diffInSeconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);

    if (diffInSeconds < 60) {
        return 'Just now';
    }

    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes < 60) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }

    const hours = Math.floor(diffInSeconds / 3600);
    if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }

    const days = Math.floor(diffInSeconds / 86400);
    if (days < 7) {
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    }

    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
        return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    }

    const years = Math.floor(days / 365);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
}




export function formatCelebrationDate(date: Date): string {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // Normalize times to compare only the date parts
  const normalize = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const inputDate = normalize(date);
  const todayDate = normalize(today);
  const tomorrowDate = normalize(tomorrow);

  if (inputDate.getTime() === todayDate.getTime()) {
    return "Today";
  }

  if (inputDate.getTime() === tomorrowDate.getTime()) {
    return "Tomorrow";
  }

  // Format as "12 June"
  const day = inputDate.getDate();
  const month = inputDate.toLocaleString("default", { month: "long" });
  return `${day} ${month}`;
}
