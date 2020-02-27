import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';

interface Props extends PanelProps {}

export class Panel extends PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello I'm a cool panel even though grafana sucks big balls!!
            </div>
        );
    }
}

