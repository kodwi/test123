import {environment} from '../../../environments/environment';
import {SectionEntity} from '../../entities/section/section.entity';
import {ElementEntity} from '../../entities/element/element.entity';


export function entitiesInit() {
  return () => {
    if (!localStorage.getItem(environment.localStorageNames.sections) ||
      !localStorage.getItem(environment.localStorageNames.elements)) {
      const sections: SectionEntity[] = [];
      const elements: ElementEntity[] = [];

      let startElementId = 12345;

      for (let sectionId = 1; sectionId < 31; ++sectionId) {
        sections.push({
          id: sectionId,
          name: `Раздел ${sectionId}`
        });

        for (let i = 0; i < 15; ++i) {
          elements.push({
            id: startElementId,
            name: `Элемент ${startElementId}`,
            sectionId
          });

          --startElementId;
        }
      }


      localStorage.setItem(environment.localStorageNames.sections, JSON.stringify(sections));
      localStorage.setItem(environment.localStorageNames.elements, JSON.stringify(elements));
    }
  };
}
