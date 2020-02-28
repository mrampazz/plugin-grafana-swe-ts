import React from 'react';
import { PluginConfigPageProps, AppPluginMeta } from '@grafana/data';
import { AppSettings } from '../types';

interface Props extends PluginConfigPageProps<AppPluginMeta<AppSettings>> {}


export class Chooser extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            fileJson: null
        };
    }

    getFileInfo = (file: any) => {
        return {
            name: file.name,
            type: file.type
        };
    }

    onChange = (e: any) => {
        // let obj = null;
        // if (e.target.files[0]) {
        //     obj = this.getFileInfo(e.target.files[0]);
        // }
        const reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = (() => {
            const obj = reader.result as string;
            if (obj) {
                console.log(JSON.parse(obj));
            }
        });

        // if (obj) {
        //     switch (obj.type) {
        //         case "application/json":
        //             this.setState({
        //                 jsonFile: obj
        //             })
        //             break;
        //         case "text/csv":
        //             this.setState({
        //                 csvFile: obj
        //             })
        //             break;
        //         default:
        //             throw console.error("Il file selezionato non è del tipo corretto");
        //     }
        // } else {
        //     console.log("il file è nullo!!!")
        // }
    }

    render() {
        return (
            <input type="file" name="file" accept="application/json, .json" onChange={this.onChange} />
        );
    }
}
