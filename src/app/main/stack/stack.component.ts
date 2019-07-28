import { Component, Input, OnInit } from '@angular/core';
import Stack from 'src/app/types/stack';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  @Input() stack: Stack;

  ngOnInit(): void {
    this.setPosition();

    window.addEventListener('resize', () => {
      console.log('resize');
      this.setPosition();
    });

    window.addEventListener('orientationchange', () => {
      console.log('orientationchange');
      this.setPosition();
    });
  }

  setPosition(): void {
    const width = document.documentElement.clientWidth;
    if (width >= 320 && width <= 480) {
      this.stack.position = 1;
    }
  }
}
