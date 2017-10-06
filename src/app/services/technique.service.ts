import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Technique  } from '../../models/technique.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TechniqueService {
  techniques: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.techniques = db.list('technique');
  }

  getTechniques() {
    return this.techniques;
  }

  addTechnique(newTechnique: Technique) {
    this.techniques.push(newTechnique);
  }
  //
  // getMemberById(memberId: string){
  //   return this.database.object('/members/' + memberId);
  // }
  //
  // updateMember(localUpdatedMember){
  //   let memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
  //   memberEntryInFirebase.update({name: localUpdatedMember.name,
  //                             role: localUpdatedMember.role,
  //                             tech: localUpdatedMember.tech,
  //                             years: localUpdatedMember.years,
  //                             bio: localUpdatedMember.bio});
  // }
  //
  // deleteMember(localMemberToDelete){
  //   let memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
  //   memberEntryInFirebase.remove();
  // }

}
