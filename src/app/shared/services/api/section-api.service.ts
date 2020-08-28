import {Injectable} from '@angular/core';
import {IApi} from '../../interfaces/api.interface';
import {SectionEntity} from '../../../entities/section/section.entity';
import {environment} from '../../../../environments/environment';
import {ElementEntity} from '../../../entities/element/element.entity';

@Injectable({
  providedIn: 'root'
})
export class SectionApiService implements IApi<SectionEntity> {
  async delete(id: number): Promise<void> {
    const sections = JSON.parse(localStorage.getItem(environment.localStorageNames.sections)) as SectionEntity[];
    const elements = JSON.parse(localStorage.getItem(environment.localStorageNames.elements)) as ElementEntity[];


    const indexOfSectionToRemove = sections.findIndex(_ => _.id === id);

    sections.splice(indexOfSectionToRemove, 1);


    const elementsOfRemovedSection = elements.filter(_ => _.sectionId === indexOfSectionToRemove);

    elementsOfRemovedSection.forEach(_ => elements.splice(elements.indexOf(_), 1));


    localStorage.setItem(environment.localStorageNames.sections, JSON.stringify(sections));
    localStorage.setItem(environment.localStorageNames.elements, JSON.stringify(elements));
  }


  async get(id: number): Promise<SectionEntity> {
    return (JSON.parse(
      localStorage.getItem(environment.localStorageNames.sections)
    ) as SectionEntity[]).find(_ => _.id === id);
  }


  async query(): Promise<SectionEntity[]> {
    return JSON.parse(
      localStorage.getItem(environment.localStorageNames.sections)
    ) as SectionEntity[];
  }
}
