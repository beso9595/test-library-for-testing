import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-library-for-testing',
  template: `
    <p>
      test-library-for-testing works!
    </p>
  `,
  styles: [
  ]
})
export class TestLibraryForTestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
