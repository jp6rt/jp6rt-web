import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';
import { MessageDialogService } from './message-dialog.service';

describe('MessageDialogService', () => {
  let service: MessageDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageDialogService,
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj<MatDialog>('MatDialog', ['open'])
        }
      ]
    });

    service = TestBed.get(MessageDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
