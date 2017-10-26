import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nameTitle' })
export class NameTitlePipe implements PipeTransform {
    transform(value: string): string {
        switch (value.toLowerCase()) {
            case 'male':
                return 'Mr.';
            case 'female':
                return 'Ms.';
            default:
                return 'Mr./Ms.';
        }
    }
}
