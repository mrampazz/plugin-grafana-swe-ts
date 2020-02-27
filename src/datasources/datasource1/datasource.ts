// Dalla documentazione di grafana una classe Datasource dovrà avere le seguenti funzioni:
//
// query(options)           // used by panels to get data
// testDatasource()         // used by data source configuration page to make sure the connection is working
// annotationQuery(options) // used by dashboards to get annotations
// metricFindQuery(options) // used by query editor to get metric suggestions.
//

export class CustomDatasource {
    name: string;
    url: string;

    // Il costruttore era così ma visto che non usavo templateSrv dava un errore di compilazione
    // constructor(instanceSettings: any, private backendSrv: any, private templateSrv: any) {
    constructor(instanceSettings: any, private backendSrv: any) {
        this.name = instanceSettings.name;
        this.url = instanceSettings.url;
    }

    testDataSource = () => {
        return this.backendSrv.datasourceRequest({
            url: this.url + '/',
            method: "GET"
        })
        .then(
            (response: any) => {
                if (response.status === 200) {
                    return {
                        status: "success",
                        message: "Data source funziona",
                        title: "Success"
                    };
                } else {
                    return {
                        status: "failed",
                        message: "Data source non funziona",
                        title: "Failed"
                    };
                }
            }
        );
    }

    query = (url: string) => {
        return this.backendSrv.datasourceRequest({
            url: this.url + url,
            method: "GET",
            headers: {"Content-type": "application/json"}
        })
        .then(
            (response: any) => {
                return response.data;
            }, (error: any) => {
                return error;
            }
        );
    }

    // annotationQuery = (options: any) => {}

    // metricFindQuery = (options: any) => {}

}
