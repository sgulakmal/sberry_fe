

export interface User {
     userId: string;
        email: string;
        username: string;
        designation: string;
        profilePictureUrl: string;
}


export interface Announcement {
    announcementId: string;
    companyId: string;
    companyBranchId?: string;
        title: string;
        description: string;
    postDate: string;
     status: boolean;
createdBy:User;
    content?: string;
     acknowledgedAt?: Date;
    createdAt: Date;
}



export interface AnnouncementListState {
  data: Announcement[];
  loading: boolean;
  error: string | null;
}