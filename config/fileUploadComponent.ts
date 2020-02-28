export class FileUploadComponent {
    static templateUrl = 'components/fileUploadComponent.html';
    file: any = null;

    /** @ngInject */
    constructor(_$scope: any, _$rootScope: any) {}

    handleFileInput = (files: FileList) => {
        this.file = files.item(0);
    }

    handleClick = () => {
        console.log(this.file);
    }
}
