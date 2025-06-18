

export interface AnnouncementStatistics {

announcementId:  string;
  title: string;
  totalAcknowledgements: number;
  acknowledgementRate: number;
  averageRating: number;
  ratingCount: number;
}

export interface AnnouncementsStatisticState {
  data: AnnouncementStatistics;
  loading: boolean;
  error: string | null;
}


// export interface Announcement {
//     announcementId: string;
//     companyId: string;
//     companyBranchId?: string;
//         title: string;
//         description: string;
//     postDate: string;
//      status: boolean;
// createdBy:User;
//     content?: string;
//     createdAt: Date;
// }



// export interface AnnouncementsState {
//   data: Announcement[];
//   loading: boolean;
//   error: string | null;
// }