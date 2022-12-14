var m=Object.defineProperty;var t=(a,e)=>m(a,"name",{value:e,configurable:!0});import{R as l}from"./rmg-data-table.ad824853.js";import{j as n}from"./jsx-runtime.711b232c.js";import{b as o}from"./index.esm.57965a73.js";import"./index.esm.63e18ebe.js";import"./iframe.addee52f.js";const b={parameters:{storySource:{source:`import { RmgDataTable, RmgDataTableDataType, RmgDataTableFieldType } from './rmg-data-table';
import { Badge } from '@chakra-ui/react';

export default {
    title: 'RmgDataTable',
    component: RmgDataTable,
};

export const Basic = () => {
    const data: RmgDataTableDataType[] = [
        { id: '001', name: 'Alice', age: 18 },
        { id: '002', name: 'Benjamin', age: 20 },
        { id: '003', name: 'Charlie', age: 19 },
    ];

    const fields: RmgDataTableFieldType<RmgDataTableDataType>[] = [
        { label: 'ID', displayHandler: item => <Badge>{item.id}</Badge> },
        { label: 'Name', key: 'name' },
        { label: 'Age', key: 'age' },
    ];

    return <RmgDataTable data={data} fields={fields} />;
};
`,locationsMap:{basic:{startLoc:{col:21,line:9},endLoc:{col:1,line:23},startBody:{col:21,line:9},endBody:{col:1,line:23}}}}},title:"RmgDataTable",component:l},D=t(()=>n(l,{data:[{id:"001",name:"Alice",age:18},{id:"002",name:"Benjamin",age:20},{id:"003",name:"Charlie",age:19}],fields:[{label:"ID",displayHandler:i=>n(o,{children:i.id})},{label:"Name",key:"name"},{label:"Age",key:"age"}]}),"Basic"),T=["Basic"];export{D as Basic,T as __namedExportsOrder,b as default};
//# sourceMappingURL=rmg-data-table.stories.7b430eb3.js.map
