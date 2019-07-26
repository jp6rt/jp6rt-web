import { Component, Input } from '@angular/core';
import Stack from 'src/app/types/stack';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
  @Input() stack: Stack;
}
