

export interface UpcommingCelebration {
  userId: string;
  name: string;
  avatarUrl: string | null;
  celebrationName: string;
}


export interface UpcommingState {
  //UpcommingCelebrations: UpcommingCelebration[];
    data: UpcommingCelebration[];
  loading: boolean;
  error: string | null;
}

// // Celebration Type Enum
// export enum CelebrationType {
//   Birthday = "birthday",
//   Anniversary = "anniversary",
//   Graduation = "graduation",
//   WorkAnniversary = "work_anniversary",
//   Wedding = "wedding",
//   Other = "other"
// }


// interface UserCelebration {
//   userId: string;
//   name: string;
//   avatarUrl: string | null;
//   celebrations: celebration[];
// }

// interface celebration {
//   celebrationType: CelebrationType;
//   date: string; 
// }

// // Upcoming Celebration (within next 7 days)
// export interface UpcomingCelebration extends UserCelebration {
//   days_until: number;
//   is_today: boolean;
// }

// // Current Month Celebration
// export interface CurrentMonthCelebration extends UserCelebration {
//   day_of_month: number;
// }

// // Main Response Interface
// export interface UserCelebrationResponse {
//   success: boolean;
//   component: "user_celebration";
//   current_date: string; // ISO 8601
//   timezone: string;
//   data: {
//     upcoming: UpcomingCelebration[];
//     current_month: CurrentMonthCelebration[];
//   };
//   // Optional variables documentation
//   variables?: Array<{
//     name: string;
//     type: string;
//     desc: string;
//   }>;
// }