import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SectionEntity} from '../../section.entity';

@Component({
  selector: 'app-section-list-item',
  templateUrl: './section-list-item.component.html',
  styleUrls: ['./section-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionListItemComponent {
  @Input() section: SectionEntity;
}
