import {Injectable} from '@angular/core';
import {IApi} from '../../interfaces/api.interface';
import {ElementEntity} from '../../../entities/element/element.entity';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ElementApiService implements IApi<ElementEntity> {
  async delete(id: number): Promise<void> {
    const elements = JSON.parse(localStorage.getItem(environment.localStorageNames.elements)) as ElementEntity[];

    elements.splice(elements.findIndex(_ => _.id === id), 1);

    localStorage.setItem(environment.localStorageNames.elements, JSON.stringify(elements));
  }


  async get(id: number): Promise<ElementEntity> {
    return (JSON.parse(
      localStorage.getItem(environment.localStorageNames.elements)
    ) as ElementEntity[]).find(_ => _.id === id);
  }


  async query(): Promise<ElementEntity[]> {
    return (JSON.parse(
      localStorage.getItem(environment.localStorageNames.elements)
    ) as ElementEntity[]).sort((a, b) => {
      const splittedA = a.name.split(' ');
      const splittedB = b.name.split(' ');

      return +splittedA[splittedA.length - 1] - +splittedB[splittedB.length - 1];
    });
  }
}
