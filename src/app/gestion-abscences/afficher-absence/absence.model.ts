import { Enfant } from './enfant.model';

export interface absence {
  id: string;
  enfant: Enfant;
  editeur: Object;
  dateAbsence: Date;
  dateReprise: Date;
  raison: string;
  commentaire: string;
}
