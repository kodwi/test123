import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SectionApiService} from '../../shared/services/api/section-api.service';
import {SectionEntity} from '../../entities/section/section.entity';

@Component({
  selector: 'app-sections-page',
  templateUrl: './sections-page.component.html',
  styleUrls: ['./sections-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionsPageComponent implements OnInit {
  sections: SectionEntity[];


  constructor(private readonly _sectionApiService: SectionApiService,
              private readonly _cdRef: ChangeDetectorRef) {
  }


  async ngOnInit() {
    this.sections = await this._sectionApiService.query();

    this._cdRef.markForCheck();
  }
}
