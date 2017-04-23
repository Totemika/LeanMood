
export class StudentSummary {
  public fullname: string;
  public email: string;
  public id: number;
  public isActive: boolean;

  constructor() {
    this.id = -1;
    this.fullname = '';
    this.email = '';
    this.isActive = false;
  }
}
