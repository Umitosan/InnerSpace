import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Technique } from '../../models/technique.model'
import { TechniqueService  } from '../services/technique.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
  providers: [TechniqueService]
})
export class FrontComponent implements OnInit, OnDestroy {
  public techniques: any;
  private techniqueSub: Subscription;

  constructor( private techServ: TechniqueService ) {
    this.techniqueSub = techServ.getTechniques().subscribe(data => {
      this.techniques = data;
      console.log('techniques from service = ', this.techniques);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.techniqueSub.unsubscribe();
  }

}
