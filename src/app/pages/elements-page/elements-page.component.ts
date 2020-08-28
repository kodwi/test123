import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ElementApiService} from '../../shared/services/api/element-api.service';
import {ElementEntity} from '../../entities/element/element.entity';
import {ActivatedRoute} from '@angular/router';
import {SectionApiService} from '../../shared/services/api/section-api.service';
import {SectionEntity} from '../../entities/section/section.entity';

@Component({
  selector: 'app-elements-page',
  templateUrl: './elements-page.component.html',
  styleUrls: ['./elements-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsPageComponent implements OnInit {
  sectionId: number;
  elements: ElementEntity[];
  currSection: SectionEntity;


  constructor(private readonly _elementApiService: ElementApiService,
              private readonly _sectionApiService: SectionApiService,
              route: ActivatedRoute,
              private readonly _cdRef: ChangeDetectorRef) {
    this.sectionId = +route.snapshot.params.id;
  }


  async ngOnInit() {
    this.currSection = await this._sectionApiService.get(this.sectionId);

    this.elements = (await this._elementApiService.query()).filter(_ => _.sectionId === this.sectionId);

    this._cdRef.markForCheck();
  }


  async removeElement(target: ElementEntity) {
    await this._elementApiService.delete(target.id);

    this.elements.splice(this.elements.indexOf(target), 1);

    this._cdRef.markForCheck();
  }
}

