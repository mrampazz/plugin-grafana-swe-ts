export class Page1 {
    static templateUrl = 'pages/page1.html';
    fileJson: File | null;

    /** @ngInject */
    constructor($scope: any, $rootScope: any) {
        console.log("angular u suck");
        this.fileJson = null;
    }

    handleFileInput(files: FileList) {
        console.log("ciaooooooo");
        this.fileJson = files.item(0);
    }

    handleClick() {
        console.log("ciao");
        console.log(this.fileJson);
    }
}
