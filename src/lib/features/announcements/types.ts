export interface Announcement {
  id: string;
  message: string;
  postedBy: string;
  rating: number; // 1 to 5
  acknowledged: boolean;
}