import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ElementEntity} from '../../element.entity';

@Component({
  selector: 'app-element-list-item',
  templateUrl: './element-list-item.component.html',
  styleUrls: ['./element-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementListItemComponent {
  @Input() element: ElementEntity;
  @Output() remove = new EventEmitter();
}
