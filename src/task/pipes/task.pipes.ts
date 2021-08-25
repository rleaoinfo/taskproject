import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException, HttpStatus} from '@nestjs/common';

@Injectable()
export class TaskValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof value === 'string' && metadata.type == 'body') {
        return value;
    }
    throw new BadRequestException('Valor precisa ser string')
  }
}
