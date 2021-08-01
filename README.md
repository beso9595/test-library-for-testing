# Test Library For Testing Workspace

## npm: [test-library-for-testing](https://www.npmjs.com/package/test-library-for-testing)

`ng new test-library-for-testing-workspace --create-application=false`

`cd test-library-for-testing-workspace`

`ng generate library test-library-for-testing`

`ng build --configuration production`

`cd dist/test-library-for-testing`

`npm adduser`

Make sure you enter correct username and password of your account on npmjs.com.
Email must match the email you have registered that account with.

`npm publish`

When you change things and want to update it on npmjs.com you must change the version in your `test-library-for-testing` and start doing same from building step.

Everything you export in `public-api.ts` file will be available outside for other project to use it.

I've wrote my test method in service:

<pre>
@Injectable({
    providedIn: 'root'
})
export class TestLibraryForTestingService {

    constructor() {
    }

    getColors(): string[] {
        return [
            'green',
            'red',
            'yellow',
            'blue',
        ];
    }
}
</pre>

You install the package in your project: `npm i test-library-for-testing --save`

And then you can call it:
<pre>
constructor(private testLibraryForTestingService: TestLibraryForTestingService) {
    console.log(testLibraryForTestingService.getColors());
}
</pre>
